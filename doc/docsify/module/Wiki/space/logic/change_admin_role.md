## 变更管理员角色 <!-- {docsify-ignore-all} -->

   批量变更管理员角色身份（role_id）

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
state "开始" as Begin <<start>> [[$./change_admin_role#begin {"开始"}]]
state "绑定参数" as BINDPARAM1  [[$./change_admin_role#bindparam1 {"绑定参数"}]]
state "结束" as END1 <<end>> [[$./change_admin_role#end1 {"结束"}]]
state "循环子调用" as LOOPSUBCALL1  [[$./change_admin_role#loopsubcall1 {"循环子调用"}]] #green {
state "重新建立更新成员信息参数" as RENEWPARAM4  [[$./change_admin_role#renewparam4 {"重新建立更新成员信息参数"}]]
state "准备更新管理员身份" as PREPAREPARAM2  [[$./change_admin_role#prepareparam2 {"准备更新管理员身份"}]]
state "更新管理员身份" as DEACTION1  [[$./change_admin_role#deaction1 {"更新管理员身份"}]]
}


Begin --> BINDPARAM1
BINDPARAM1 --> LOOPSUBCALL1 : [[$./change_admin_role#bindparam1-loopsubcall1{有勾选添加成员} 有勾选添加成员]]
LOOPSUBCALL1 --> RENEWPARAM4
RENEWPARAM4 --> PREPAREPARAM2
PREPAREPARAM2 --> DEACTION1
LOOPSUBCALL1 --> END1
BINDPARAM1 --> END1 : [[$./change_admin_role#bindparam1-end1{未勾选添加成员} 未勾选添加成员]]


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 绑定参数 :id=BINDPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[绑定参数]</font></sup>



绑定参数`Default(传入变量)` 到 `selectdata(用户列表)`
#### 循环子调用 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`selectdata(用户列表)`，子循环参数使用`for_temp_obj(循环临时变量)`
#### 重新建立更新成员信息参数 :id=RENEWPARAM4<sup class="footnote-symbol"> <font color=gray size=1>[重新建立参数]</font></sup>



重建参数```update_member_info(更新成员信息)```
#### 准备更新管理员身份 :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`for_temp_obj(循环临时变量).ID(标识)` 设置给  `update_member_info(更新成员信息).USER_ID(登录名)`
2. 将`admin` 设置给  `update_member_info(更新成员信息).ROLE_ID(角色)`
3. 将`Default(传入变量).ID(标识)` 设置给  `update_member_info(更新成员信息).SPACE_ID(空间标识)`

#### 更新管理员身份 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [空间成员(SPACE_MEMBER)](module/Wiki/space_member.md) 行为 [Save](module/Wiki/space_member#行为) ，行为参数为`update_member_info(更新成员信息)`

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
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[空间(SPACE)](module/Wiki/space.md)||
|循环临时变量|for_temp_obj|数据对象|[企业用户(USER)](module/Base/user.md)||
|用户列表|selectdata|数据对象列表|[企业用户(USER)](module/Base/user.md)||
|更新成员信息|update_member_info|数据对象|[空间成员(SPACE_MEMBER)](module/Wiki/space_member.md)||
