## 只读隐藏 <!-- {docsify-ignore-all} -->

   工作项只读隐藏

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
state "开始" as Begin <<start>> [[$./readonly_hide#begin {开始}]]
state "结束" as END1 <<end>> [[$./readonly_hide#end1 {结束}]]
state "注入脚本代码" as RAWJSCODE1  [[$./readonly_hide#rawjscode1 {注入脚本代码}]]


Begin --> RAWJSCODE1
RAWJSCODE1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>




#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>




#### 注入脚本代码 :id=RAWJSCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript

    const toolbar_state = uiLogic.toolbar.state.buttonsState;
    const srfreadonly = context.srfreadonly;
    if (srfreadonly === "true") {
        toolbar_state.visible = false;
        console.log("进入")
    }
    console.log(toolbar_state);


```



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
|工具栏|toolbar|部件对象||
|表单|form|部件对象||
|上下文|ctx|导航视图参数绑定参数||
