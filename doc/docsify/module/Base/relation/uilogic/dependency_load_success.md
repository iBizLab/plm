## 依赖列表视图加载完成 <!-- {docsify-ignore-all} -->

   依赖列表视图加载完成

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
state "开始" as Begin <<start>> [[$./dependency_load_success#begin {开始}]]
state "当无数据时隐藏列表部件" as RAWJSCODE2  [[$./dependency_load_success#rawjscode2 {当无数据时隐藏列表部件}]]
state "设置总条数" as RAWJSCODE1  [[$./dependency_load_success#rawjscode1 {设置总条数}]]
state "结束" as END1 <<end>> [[$./dependency_load_success#end1 {结束}]]


Begin --> RAWJSCODE1
RAWJSCODE1 --> RAWJSCODE2
RAWJSCODE2 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>




#### 设置总条数 :id=RAWJSCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
const total = uiLogic.ctrl.state.total;
uiLogic.view.layoutPanel.state.data.total = total;


```

#### 当无数据时隐藏列表部件 :id=RAWJSCODE2<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
const total = uiLogic.ctrl.state.total;
if(!total){
    view.layoutPanel.panelItems.list.state.visible = false;
}else{
    view.layoutPanel.panelItems.list.state.visible = true;
}
```

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>






### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
|当前部件对象|CTRL|当前部件对象||
|当前视图对象|VIEW|当前视图对象||
