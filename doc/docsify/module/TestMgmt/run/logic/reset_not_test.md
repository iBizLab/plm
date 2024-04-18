## 重置为未测 <!-- {docsify-ignore-all} -->

   重置当前执行用例的执行状态为初始未测状态

### 处理过程

```plantuml
@startuml
hide empty description
<style>
root {
  HyperlinkColor #42b983
}
</style>

hide empty description
state "开始" as Begin <<start>> [[$./reset_not_test#begin {"开始"}]]
state "获取选中的用例ID" as RAWSFCODE1  [[$./reset_not_test#rawsfcode1 {"获取选中的用例ID"}]]
state "结束" as END1 <<end>> [[$./reset_not_test#end1 {"结束"}]]
state "循环处理" as LOOPSUBCALL1  [[$./reset_not_test#loopsubcall1 {"循环处理"}]] #green {
state "设置当前循环用例的执行状态" as PREPAREPARAM1  [[$./reset_not_test#prepareparam1 {"设置当前循环用例的执行状态"}]]
state "修改用例" as DEACTION1  [[$./reset_not_test#deaction1 {"修改用例"}]]
}


Begin --> RAWSFCODE1
RAWSFCODE1 --> LOOPSUBCALL1
LOOPSUBCALL1 --> PREPAREPARAM1
PREPAREPARAM1 --> DEACTION1
LOOPSUBCALL1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 获取选中的用例ID :id=RAWSFCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接后台代码]</font></sup>



<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");
var ids = logic.getParam("ids");
var id = defaultObj.get("id");
if(id != null && id != ''){
    if(id.contains(";")){
        var idArray = [];
        idArray = id.split(";");
        for (var i = 0; i < idArray.length; i++) {
            ids.add(idArray[i]);
        }
    } else {
        ids.add(id);
    }
}
```

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*

#### 循环处理 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`ids(选中的ID集合)`，子循环参数使用`id(执行的ID)`
#### 设置当前循环用例的执行状态 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`空值（NULL）` 设置给  `Default(传入变量).STATUS(执行结果)`
2. 将`id(执行的ID)` 设置给  `Default(传入变量).ID(标识)`

#### 修改用例 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [执行用例(RUN)](module/TestMgmt/run.md) 行为 [Update](module/TestMgmt/run#行为) ，行为参数为`Default(传入变量)`



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[执行用例(RUN)](module/TestMgmt/run.md)||
|执行的ID|id|简单数据|||
|选中的ID集合|ids|简单数据列表|||
