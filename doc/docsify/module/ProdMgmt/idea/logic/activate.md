## 激活 <!-- {docsify-ignore-all} -->

   激活已归档状态需求，修改需求的归档属性

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
state "设置激活状态" as PREPAREPARAM1  [[$./activate#prepareparam1 {"设置激活状态"}]]
state "修改需求激活状态" as DEACTION1  [[$./activate#deaction1 {"修改需求激活状态"}]]
state "结束" as END1 <<end>> [[$./activate#end1 {"结束"}]]


Begin --> PREPAREPARAM1
PREPAREPARAM1 --> DEACTION1
DEACTION1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 设置激活状态 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`0` 设置给  `Default(传入变量).IS_ARCHIVED(是否已归档)`

#### 修改需求激活状态 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [需求(IDEA)](module/ProdMgmt/idea.md) 行为 [Update](module/ProdMgmt/idea#行为) ，行为参数为`Default(传入变量)`

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[需求(IDEA)](module/ProdMgmt/idea.md)||
|要更改状态的主键|id|简单数据|||
|选中数据的主键|ids|简单数据列表|||
|临时变量|temp_obj|数据对象|[需求(IDEA)](module/ProdMgmt/idea.md)||