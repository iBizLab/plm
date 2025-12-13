## 刷新关联子工作项列表（移动端） <!-- {docsify-ignore-all} -->

   

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
state "开始" as Begin <<start>> [[$./mob_refresh_child_list#begin {开始}]]
state "结束" as END1 <<end>> [[$./mob_refresh_child_list#end1 {结束}]]
state "绑定表格部件" as PREPAREJSPARAM2  [[$./mob_refresh_child_list#preparejsparam2 {绑定表格部件}]]
state "隐藏下拉框" as RAWJSCODE2  [[$./mob_refresh_child_list#rawjscode2 {隐藏下拉框}]]
state "表格刷新" as VIEWCTRLINVOKE1  [[$./mob_refresh_child_list#viewctrlinvoke1 {表格刷新}]]
state "更新srfdecodename" as RAWJSCODE3  [[$./mob_refresh_child_list#rawjscode3 {更新srfdecodename}]]


Begin --> RAWJSCODE3
RAWJSCODE3 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>




#### 更新srfdecodename :id=RAWJSCODE3<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: context.principal_type})
ibiz.mc.command.create.send({ srfdecodename: 'work_item'})
```

#### 绑定表格部件 :id=PREPAREJSPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`view(当前视图对象).layoutPanel.panelItems.grid.control` 设置给  `grid(表格对象)`

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>




#### 隐藏下拉框 :id=RAWJSCODE2<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
const panel = view.layoutPanel.panelItems.choose_data;
if (panel) {
    panel.state.visible = false;
}
```

#### 表格刷新 :id=VIEWCTRLINVOKE1<sup class="footnote-symbol"> <font color=gray size=1>[视图部件调用]</font></sup>



调用`grid(表格对象)`的方法`refresh`，参数为`grid(表格对象)`


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|ctx|ctx|导航视图参数绑定参数||
|父工作项|p_work_item|数据对象||
|子工作项|i_work_item|数据对象||
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
|当前视图对象|view|当前视图对象||
|表格对象|grid|部件对象||
