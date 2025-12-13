## 新建测试库成员 <!-- {docsify-ignore-all} -->

   新建测试库成员

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
state "开始" as Begin <<start>> [[$./create_library_member#begin {"开始"}]]
state "绑定选中成员参数" as BINDPARAM1  [[$./create_library_member#bindparam1 {"绑定选中成员参数"}]]
state "结束" as END1 <<end>> [[$./create_library_member#end1 {"结束"}]]
state "循环子调用" as LOOPSUBCALL1  [[$./create_library_member#loopsubcall1 {"循环子调用"}]] #green {
state "重新建立成员参数" as RENEWPARAM1  [[$./create_library_member#renewparam1 {"重新建立成员参数"}]]
state "填充测试库成员属性" as PREPAREPARAM1  [[$./create_library_member#prepareparam1 {"填充测试库成员属性"}]]
state "建立测试库成员" as DEACTION1  [[$./create_library_member#deaction1 {"建立测试库成员"}]]
}


Begin --> BINDPARAM1
BINDPARAM1 --> LOOPSUBCALL1 : [[$./create_library_member#bindparam1-loopsubcall1{有勾选添加成员} 有勾选添加成员]]
LOOPSUBCALL1 --> RENEWPARAM1
RENEWPARAM1 --> PREPAREPARAM1
PREPAREPARAM1 --> DEACTION1
LOOPSUBCALL1 --> END1
BINDPARAM1 --> END1 : [[$./create_library_member#bindparam1-end1{未勾选添加成员} 未勾选添加成员]]


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 绑定选中成员参数 :id=BINDPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[绑定参数]</font></sup>



绑定参数`Default(传入变量)` 到 `selectdata(用户列表)`
#### 循环子调用 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`selectdata(用户列表)`，子循环参数使用`for_temp_obj(循环临时变量)`
#### 重新建立成员参数 :id=RENEWPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[重新建立参数]</font></sup>



重建参数```member_obj(关系对象)```
#### 填充测试库成员属性 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`for_temp_obj(循环临时变量).USER_ID(用户ID)` 设置给  `member_obj(关系对象).USER_ID(登录名)`
2. 将`for_temp_obj(循环临时变量).DISPLAY_NAME(姓名)` 设置给  `member_obj(关系对象).NAME(姓名)`
3. 将`Default(传入变量).LIBRARY_ID(测试库标识)` 设置给  `member_obj(关系对象).LIBRARY_ID(测试库标识)`

#### 建立测试库成员 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [测试库成员(LIBRARY_MEMBER)](module/TestMgmt/library_member.md) 行为 [Save](module/TestMgmt/library_member#行为) ，行为参数为`member_obj(关系对象)`

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*


### 连接条件说明
#### 有勾选添加成员 :id=BINDPARAM1-LOOPSUBCALL1

`selectdata(用户列表).size` GT `0`
#### 未勾选添加成员 :id=BINDPARAM1-END1

`selectdata(用户列表).size` EQ `0`


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[测试库成员(LIBRARY_MEMBER)](module/TestMgmt/library_member.md)||
|循环临时变量|for_temp_obj|数据对象|[企业用户(USER)](module/Base/user.md)||
|关系对象|member_obj|数据对象|[测试库成员(LIBRARY_MEMBER)](module/TestMgmt/library_member.md)||
|用户列表|selectdata|数据对象列表|[企业用户(USER)](module/Base/user.md)||
