## 查看工时明细 <!-- {docsify-ignore-all} -->

   

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
state "开始" as Begin <<start>> [[$./check_workload_detail#begin {开始}]]
state "切换显示组件" as RAWJSCODE1  [[$./check_workload_detail#rawjscode1 {切换显示组件}]]


Begin --> RAWJSCODE1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin




#### 切换显示组件 :id=RAWJSCODE1



<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.view.ctx.controllersMap.get("form").details.grouppanel8.state.visible=false;
uiLogic.view.ctx.controllersMap.get("form").details.grouppanel9.state.visible=true;
```



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
|当前视图对象|view|当前视图对象||
