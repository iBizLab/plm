## 使用此模板(禁止关闭) <!-- {docsify-ignore-all} -->

   使用此模板(禁止关闭)

### 处理过程

```plantuml
@startuml
hide footbox
<style>
root {
  HyperlinkColor #42b983
}
</style>

hide empty description
state "开始" as Begin <<start>> [[$./use_cur_template_no_closed#begin {开始}]]
state "设置上下文" as RAWJSCODE1  [[$./use_cur_template_no_closed#rawjscode1 {设置上下文}]]
state "获取列表导航选中数据" as PREPAREJSPARAM1  [[$./use_cur_template_no_closed#preparejsparam1 {获取列表导航选中数据}]]
state "注入脚本代码" as RAWJSCODE5  [[$./use_cur_template_no_closed#rawjscode5 {注入脚本代码}]]
state "关闭当前视图" as RAWJSCODE2  [[$./use_cur_template_no_closed#rawjscode2 {关闭当前视图}]]
state "实体行为" as DEACTION1  [[$./use_cur_template_no_closed#deaction1 {实体行为}]]
state "打开新建的仪表盘" as DEUIACTION1  [[$./use_cur_template_no_closed#deuiaction1 {打开新建的仪表盘}]]
state "打开视图" as RAWJSCODE4  [[$./use_cur_template_no_closed#rawjscode4 {打开视图}]]
state "通知刷新" as RAWJSCODE3  [[$./use_cur_template_no_closed#rawjscode3 {通知刷新}]]
state "消息弹窗" as MSGBOX1  [[$./use_cur_template_no_closed#msgbox1 {消息弹窗}]]
state "结束" as END1 <<end>> [[$./use_cur_template_no_closed#end1 {结束}]]
state "准备参数" as PREPAREJSPARAM2  [[$./use_cur_template_no_closed#preparejsparam2 {准备参数}]]


Begin --> PREPAREJSPARAM1
PREPAREJSPARAM1 --> RAWJSCODE1 : [[$./use_cur_template_no_closed#preparejsparam1-rawjscode1{连接名称} 连接名称]]
RAWJSCODE1 --> PREPAREJSPARAM2
PREPAREJSPARAM2 --> DEACTION1
DEACTION1 --> RAWJSCODE4
RAWJSCODE4 --> RAWJSCODE2
RAWJSCODE2 --> RAWJSCODE5
RAWJSCODE5 --> END1
PREPAREJSPARAM1 --> MSGBOX1 : [[$./use_cur_template_no_closed#preparejsparam1-msgbox1{连接名称} 连接名称]]


@enduml
```


### 处理步骤说明

#### 通知刷新 :id=RAWJSCODE3<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: 'insight_view', srfkey: context.insight_view})
```

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>




#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>




#### 获取列表导航选中数据 :id=PREPAREJSPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`listexpbar(列表对象).xDataController.state.selectedData` 绑定给  `selecteddata(选中数据)`

#### 设置上下文 :id=RAWJSCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
if(uiLogic.selecteddata && uiLogic.selecteddata.length >0){
    uiLogic.ctx.dynadashboard = uiLogic.selecteddata[0].dynadashboardid;
    uiLogic.dyna_dashboard_info = uiLogic.selecteddata[0];
    uiLogic.dyna_dashboard_info.owner_id = uiLogic.ctx.insight_view_id;
}
```

#### 准备参数 :id=PREPAREJSPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).board_name` 设置给  `dyna_dashboard_info(看板数据).board_name`

#### 实体行为 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [动态数据看板(DYNADASHBOARD)](module/Base/dyna_dashboard.md) 行为 [使用此模板(use_cur_template)](module/Base/dyna_dashboard#行为) ，行为参数为`dyna_dashboard_info(看板数据)`

将执行结果返回给参数`new_dynadashboard(新仪表盘)`

#### 打开视图 :id=RAWJSCODE4<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
const new_dynadashboard = uiLogic.new_dynadashboard;
const insight_view_id = context.insight_view_id;
const dyna_dashboard_id = new_dynadashboard.dyna_dashboard_id;
 window.location.hash= `/-/index/insight_view=${insight_view_id}/insight_view_index_view/srfnavctx=%257B%2522srfnavctrlid%2522%253A%2522plmweb.insight_view_all_grid_view%2540plmweb.insight_view.all_grid_view_grid%2522%257D;srfnav=usrdrgroup0517936766/insight_view_custom_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%252C%2522dyna_dashboard%2522%253A%2522${dyna_dashboard_id}%2522%257D`


```

#### 关闭当前视图 :id=RAWJSCODE2<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
view.state.isLoading = false;
view.closeView();
```

#### 注入脚本代码 :id=RAWJSCODE5<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: 'dynadashboard'})
```

#### 打开新建的仪表盘 :id=DEUIACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体界面行为调用]</font></sup>



调用实体 [动态数据看板(DYNADASHBOARD)](module/Base/dyna_dashboard.md) 界面行为 [打开新建仪表盘（测试）](module/Base/dyna_dashboard#界面行为) ，行为参数为`new_dynadashboard(新仪表盘)`

#### 消息弹窗 :id=MSGBOX1<sup class="footnote-symbol"> <font color=gray size=1>[消息弹窗]</font></sup>




### 连接条件说明
#### 连接名称 :id=PREPAREJSPARAM1-RAWJSCODE1

```Default(传入变量).board_name``` ISNOTNULL
#### 连接名称 :id=PREPAREJSPARAM1-MSGBOX1

```Default(传入变量).board_name``` ISNULL


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|上下文|ctx|导航视图参数绑定参数||
|看板数据|dyna_dashboard_info|数据对象||
|列表对象|listexpbar|部件对象||
|当前视图对象|view|当前视图对象||
|新仪表盘|new_dynadashboard|数据对象||
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
|选中数据|selecteddata|数据对象列表||
