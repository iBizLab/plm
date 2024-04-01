## 激活 <!-- {docsify-ignore-all} -->

   

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
state "开始" as Begin <<start>> [[$./activate#begin {"开始"}]]
state "拆分选中主键" as RAWSFCODE1  [[$./activate#rawsfcode1 {"拆分选中主键"}]]
state "结束" as END1 <<end>> [[$./activate#end1 {"结束"}]]
state "循环子调用" as LOOPSUBCALL1  [[$./activate#loopsubcall1 {"循环子调用"}]] #green {
state "重新建立参数" as RENEWPARAM1  [[$./activate#renewparam1 {"重新建立参数"}]]
state "准备参数" as PREPAREPARAM1  [[$./activate#prepareparam1 {"准备参数"}]]
state "Update" as DEACTION1  [[$./activate#deaction1 {"Update"}]]
}


Begin --> RAWSFCODE1
RAWSFCODE1 --> LOOPSUBCALL1
LOOPSUBCALL1 --> RENEWPARAM1
RENEWPARAM1 --> PREPAREPARAM1
PREPAREPARAM1 --> DEACTION1
LOOPSUBCALL1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 拆分选中主键 :id=RAWSFCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接后台代码]</font></sup>



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



循环参数`ids(选中工作项的主键)`，子循环参数使用`id(要更改状态的主键)`
#### 重新建立参数 :id=RENEWPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[重新建立参数]</font></sup>



重建参数```temp_obj(临时变量)```
#### 准备参数 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`0` 设置给  `Default(传入变量).IS_ARCHIVED(是否已归档)`

#### Update :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [需求(IDEA)](module/ProdMgmt/Idea.md) 行为 [Update](module/ProdMgmt/Idea#行为) ，行为参数为`Default(传入变量)`

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[需求(IDEA)](module/ProdMgmt/Idea.md)||
|要更改状态的主键|id|简单数据|||
|选中工作项的主键|ids|简单数据列表|||
|临时变量|temp_obj|数据对象|[需求(IDEA)](module/ProdMgmt/Idea.md)||
