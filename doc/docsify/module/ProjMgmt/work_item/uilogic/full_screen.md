## 门户全屏 <!-- {docsify-ignore-all} -->

   所有门户部件行为栏上配置该逻辑可触发全屏

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
state "开始" as Begin <<start>> [[$./full_screen#begin {开始}]]
state "门户全屏" as RAWJSCODE1  [[$./full_screen#rawjscode1 {门户全屏}]]


Begin --> RAWJSCODE1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>




#### 门户全屏 :id=RAWJSCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
if (uiLogic.ctrl) {
    const contentElement = uiLogic.ctrl.contentElement;
    if (contentElement) {
        ibiz.fullscreenUtil.openElementFullscreen(contentElement);
    }
}
```



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|门户部件|ctrl|当前部件对象||
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
