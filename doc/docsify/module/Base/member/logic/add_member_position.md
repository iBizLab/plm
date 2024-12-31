## 添加成员（职位） <!-- {docsify-ignore-all} -->

   

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
state "开始" as Begin <<start>> [[$./add_member_position#begin {"开始"}]]
state "绑定参数" as BINDPARAM1  [[$./add_member_position#bindparam1 {"绑定参数"}]]
state "结束" as END1 <<end>> [[$./add_member_position#end1 {"结束"}]]
state "循环子调用" as LOOPSUBCALL1  [[$./add_member_position#loopsubcall1 {"循环子调用"}]] #green {
state "重新建立参数" as RENEWPARAM1  [[$./add_member_position#renewparam1 {"重新建立参数"}]]
state "填充团队成员属性" as PREPAREPARAM1  [[$./add_member_position#prepareparam1 {"填充团队成员属性"}]]
state "建立团队成员" as DEACTION1  [[$./add_member_position#deaction1 {"建立团队成员"}]]
}


Begin --> BINDPARAM1
BINDPARAM1 --> LOOPSUBCALL1 : [[$./add_member_position#bindparam1-loopsubcall1{有勾选添加成员} 有勾选添加成员]]
LOOPSUBCALL1 --> RENEWPARAM1
RENEWPARAM1 --> PREPAREPARAM1
PREPAREPARAM1 --> DEACTION1
LOOPSUBCALL1 --> END1
BINDPARAM1 --> END1 : [[$./add_member_position#bindparam1-end1{未勾选添加成员} 未勾选添加成员]]


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 绑定参数 :id=BINDPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[绑定参数]</font></sup>



绑定参数`Default(传入变量)` 到 `selectdata(用户列表)`
#### 循环子调用 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`selectdata(用户列表)`，子循环参数使用`for_temp_obj(循环临时变量)`
#### 重新建立参数 :id=RENEWPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[重新建立参数]</font></sup>



重建参数```member_obj(关系对象)```
#### 填充团队成员属性 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`for_temp_obj(循环临时变量).ID(标识)` 设置给  `member_obj(关系对象).USER_ID(登录名)`
2. 将`GROUP` 设置给  `member_obj(关系对象).OWNER_TYPE(所属数据对象)`
3. 将`GROUP` 设置给  `member_obj(关系对象).OWNER_SUBTYPE(所属对象子类型)`
4. 将`for_temp_obj(循环临时变量).DISPLAY_NAME(姓名)` 设置给  `member_obj(关系对象).NAME(名称)`
5. 将`Default(传入变量).ownerid` 设置给  `member_obj(关系对象).OWNER_ID(所属数据标识)`

#### 建立团队成员 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [成员(MEMBER)](module/Base/member.md) 行为 [Update](module/Base/member#行为) ，行为参数为`member_obj(关系对象)`

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
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[成员(MEMBER)](module/Base/member.md)||
|循环临时变量|for_temp_obj|数据对象|[企业用户(USER)](module/Base/user.md)||
|关系对象|member_obj|数据对象|[成员(MEMBER)](module/Base/member.md)||
|用户列表|selectdata|数据对象列表|[企业用户(USER)](module/Base/user.md)||
