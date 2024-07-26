## 使用此模板 <!-- {docsify-ignore-all} -->

   

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
state "开始" as Begin <<start>> [[$./use_cur_template#begin {开始}]]
state "结束" as END1 <<end>> [[$./use_cur_template#end1 {结束}]]
state "关闭当前试听" as RAWJSCODE2  [[$./use_cur_template#rawjscode2 {关闭当前试听}]]
state "实体行为" as DEACTION1  [[$./use_cur_template#deaction1 {实体行为}]]
state "设置上下文" as RAWJSCODE1  [[$./use_cur_template#rawjscode1 {设置上下文}]]
state "获取列表导航选中数据" as PREPAREJSPARAM1  [[$./use_cur_template#preparejsparam1 {获取列表导航选中数据}]]
state "通知刷新" as RAWJSCODE3  [[$./use_cur_template#rawjscode3 {通知刷新}]]


Begin --> PREPAREJSPARAM1
PREPAREJSPARAM1 --> RAWJSCODE1
RAWJSCODE1 --> DEACTION1
DEACTION1 --> RAWJSCODE2
RAWJSCODE2 --> RAWJSCODE3
RAWJSCODE3 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>




#### 获取列表导航选中数据 :id=PREPAREJSPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`listexpbar(列表对象).xDataController.state.selectedData` 绑定给  `selecteddata(选中数据)`

#### 设置上下文 :id=RAWJSCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
if(uiLogic.selecteddata && uiLogic.selecteddata.length >0){
    uiLogic.ctx.dynadashboard = uiLogic.selecteddata[0].dynadashboardid;
    uiLogic.dyna_dashboard_info = uiLogic.selecteddata[0];
    uiLogic.dyna_dashboard_info.owner_id = uiLogic.ctx.insight_view;
}
```

#### 实体行为 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [效能视图(INSIGHT_VIEW)](module/Insight/insight_view.md) 行为 [使用此模板(use_cur_template)](module/Insight/insight_view#行为) ，行为参数为`dyna_dashboard_info(看板数据)`

#### 关闭当前试听 :id=RAWJSCODE2<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
view.state.isLoading = false;
view.closeView();
```

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>




#### 通知刷新 :id=RAWJSCODE3<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: 'insight_view', srfkey: context.insight_view})
```



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|当前视图对象|view|当前视图对象||
|上下文|ctx|导航视图参数绑定参数||
|列表对象|listexpbar|部件对象||
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
|看板数据|dyna_dashboard_info|数据对象||
|选中数据|selecteddata|数据对象列表||
