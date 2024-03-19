## 重置为未测 <!-- {docsify-ignore-all} -->

   

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
state "执行脚本代码" as RAWSFCODE1  [[$./reset_not_test#rawsfcode1 {"执行脚本代码"}]]
state "结束" as END1 <<end>> [[$./reset_not_test#end1 {"结束"}]]
state "循环子调用" as LOOPSUBCALL1  [[$./reset_not_test#loopsubcall1 {"循环子调用"}]] #green {
state "准备参数" as PREPAREPARAM1  [[$./reset_not_test#prepareparam1 {"准备参数"}]]
state "实体行为" as DEACTION1  [[$./reset_not_test#deaction1 {"实体行为"}]]
}


Begin --> RAWSFCODE1
RAWSFCODE1 --> LOOPSUBCALL1
LOOPSUBCALL1 --> PREPAREPARAM1
PREPAREPARAM1 --> DEACTION1
DEACTION1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 执行脚本代码 :id=RAWSFCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接后台代码]</font></sup>



<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```groovy
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

#### 循环子调用 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`ids(选中的ID集合)`，子循环参数使用`id(执行的ID)`
#### 准备参数 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`空值（NULL）` 设置给  `Default(传入变量).STATUS(执行结果)`
2. 将`id(执行的ID)` 设置给  `Default(传入变量).ID(标识)`

#### 实体行为 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [执行用例(RUN)](module/TestMgmt/Run.md) 行为 [Update](module/TestMgmt/Run#行为) ，行为参数为`Default(传入变量)`

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[执行用例(RUN)](module/TestMgmt/Run.md)||
|执行的ID|id|简单数据|||
|选中的ID集合|ids|简单数据列表|||
