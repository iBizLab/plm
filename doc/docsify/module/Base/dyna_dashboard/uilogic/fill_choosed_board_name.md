## 获取选中模板名称 <!-- {docsify-ignore-all} -->

   

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
state "开始" as Begin <<start>> [[$./fill_choosed_board_name#begin {开始}]]
state "设置仪表盘标题" as RAWJSCODE1  [[$./fill_choosed_board_name#rawjscode1 {设置仪表盘标题}]]
state "结束" as END1 <<end>> [[$./fill_choosed_board_name#end1 {结束}]]


Begin --> RAWJSCODE1
RAWJSCODE1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>




#### 设置仪表盘标题 :id=RAWJSCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
view.layoutPanel.panelItems.board_title.setDataValue(uiLogic.ctrl.inputData.dyna_dashboard_name);


```

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>






### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|当前视图对象|view|当前视图对象||
|仪表盘标题|board_title|数据对象||
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
|视图导航参数|params|||
|ctrl|ctrl|当前部件对象||
