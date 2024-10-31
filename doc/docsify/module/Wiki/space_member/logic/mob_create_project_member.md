## 新建空间成员（移动端） <!-- {docsify-ignore-all} -->

   新建空间成员（移动端）

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
state "开始" as Begin <<start>> [[$./mob_create_project_member#begin {"开始"}]]
state "绑定选中成员参数" as BINDPARAM1  [[$./mob_create_project_member#bindparam1 {"绑定选中成员参数"}]]
state "结束" as END1 <<end>> [[$./mob_create_project_member#end1 {"结束"}]]
state "循环子调用" as LOOPSUBCALL1  [[$./mob_create_project_member#loopsubcall1 {"循环子调用"}]] #green {
state "重新建立成员参数" as RENEWPARAM1  [[$./mob_create_project_member#renewparam1 {"重新建立成员参数"}]]
state "填充空间成员属性" as PREPAREPARAM1  [[$./mob_create_project_member#prepareparam1 {"填充空间成员属性"}]]
state "准备参数" as PREPAREPARAM2  [[$./mob_create_project_member#prepareparam2 {"准备参数"}]]
state "建立空间成员" as DEACTION1  [[$./mob_create_project_member#deaction1 {"建立空间成员"}]]
}


Begin --> BINDPARAM1
BINDPARAM1 --> LOOPSUBCALL1 : [[$./mob_create_project_member#bindparam1-loopsubcall1{有勾选添加成员} 有勾选添加成员]]
LOOPSUBCALL1 --> RENEWPARAM1
RENEWPARAM1 --> PREPAREPARAM1
PREPAREPARAM1 --> PREPAREPARAM2 : [[$./mob_create_project_member#prepareparam1-prepareparam2{无USER_ID} 无USER_ID]]
PREPAREPARAM2 --> DEACTION1
PREPAREPARAM1 --> DEACTION1 : [[$./mob_create_project_member#prepareparam1-deaction1{存在USER_ID} 存在USER_ID]]
LOOPSUBCALL1 --> END1
BINDPARAM1 --> END1 : [[$./mob_create_project_member#bindparam1-end1{未勾选添加成员} 未勾选添加成员]]


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
#### 填充空间成员属性 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`for_temp_obj(循环临时变量).user_id(用户ID)` 设置给  `member_obj(关系对象).USER_ID(登录名)`
2. 将`for_temp_obj(循环临时变量).DISPLAY_NAME(姓名)` 设置给  `member_obj(关系对象).NAME(姓名)`
3. 将`Default(传入变量).SPACE_ID(空间标识)` 设置给  `member_obj(关系对象).SPACE_ID(空间标识)`

#### 准备参数 :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`for_temp_obj(循环临时变量).ID(标识)` 设置给  `member_obj(关系对象).USER_ID(登录名)`

#### 建立空间成员 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [空间成员(SPACE_MEMBER)](module/Wiki/space_member.md) 行为 [Create](module/Wiki/space_member#行为) ，行为参数为`member_obj(关系对象)`

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*


### 连接条件说明
#### 有勾选添加成员 :id=BINDPARAM1-LOOPSUBCALL1

`selectdata(用户列表).size` GT `0`
#### 无USER_ID :id=PREPAREPARAM1-PREPAREPARAM2

`for_temp_obj(循环临时变量).USER_ID(用户ID)` ISNULL
#### 存在USER_ID :id=PREPAREPARAM1-DEACTION1

`for_temp_obj(循环临时变量).USER_ID(用户ID)` ISNOTNULL
#### 未勾选添加成员 :id=BINDPARAM1-END1

`selectdata(用户列表).size` EQ `0`


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[空间成员(SPACE_MEMBER)](module/Wiki/space_member.md)||
|循环临时变量|for_temp_obj|数据对象|[企业用户(USER)](module/Base/user.md)||
|关系对象|member_obj|数据对象|[空间成员(SPACE_MEMBER)](module/Wiki/space_member.md)||
|用户列表|selectdata|数据对象列表|[企业用户(USER)](module/Base/user.md)||
