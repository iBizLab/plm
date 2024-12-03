## 创建之前 <!-- {docsify-ignore-all} -->

   创建测试库之前，对添加的测试库成员进行处理

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
state "开始" as Begin <<start>> [[$./before_create#begin {"开始"}]]
state "绑定members" as BINDPARAM1  [[$./before_create#bindparam1 {"绑定members"}]]
state "结束" as END1 <<end>> [[$./before_create#end1 {"结束"}]]
state "循环子调用" as LOOPSUBCALL1  [[$./before_create#loopsubcall1 {"循环子调用"}]] #green {
state "重置ID" as PREPAREPARAM1  [[$./before_create#prepareparam1 {"重置ID"}]]
}


Begin --> BINDPARAM1
BINDPARAM1 --> LOOPSUBCALL1 : [[$./before_create#bindparam1-loopsubcall1{members长度大于0} members长度大于0]]
LOOPSUBCALL1 --> PREPAREPARAM1
BINDPARAM1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 绑定members :id=BINDPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[绑定参数]</font></sup>



绑定参数`Default(传入变量)` 到 `members(测试库成员)`
#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `Default(传入变量)`

#### 循环子调用 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`members(测试库成员)`，子循环参数使用`member(单个成员)`
#### 重置ID :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`空值（NULL）` 设置给  `member(单个成员).ID(标识)`


### 连接条件说明
#### members长度大于0 :id=BINDPARAM1-LOOPSUBCALL1

`members(测试库成员).size` GT `0`


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[测试库(LIBRARY)](module/TestMgmt/library.md)||
|单个成员|member|数据对象|[测试库成员(LIBRARY_MEMBER)](module/TestMgmt/library_member.md)||
|测试库成员|members|数据对象列表|[测试库成员(LIBRARY_MEMBER)](module/TestMgmt/library_member.md)||
