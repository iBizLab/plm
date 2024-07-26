## 自动创建人员 <!-- {docsify-ignore-all} -->

   

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
state "开始" as Begin <<start>> [[$./auto_create_members#begin {"开始"}]]
state "准备用户数据" as PREPAREPARAM1  [[$./auto_create_members#prepareparam1 {"准备用户数据"}]]
state "准备查询数据" as PREPAREPARAM2  [[$./auto_create_members#prepareparam2 {"准备查询数据"}]]
state "生成用户" as DEACTION1  [[$./auto_create_members#deaction1 {"生成用户"}]]
state "实体数据集" as DEDATASET1  [[$./auto_create_members#dedataset1 {"实体数据集"}]]
state "结束" as END1 <<end>> [[$./auto_create_members#end1 {"结束"}]]
state "循环子调用" as LOOPSUBCALL1  [[$./auto_create_members#loopsubcall1 {"循环子调用"}]] #green {
state "重置参数" as RESETPARAM1  [[$./auto_create_members#resetparam1 {"重置参数"}]]
state "准备参数" as PREPAREPARAM3  [[$./auto_create_members#prepareparam3 {"准备参数"}]]
state "生成用户数据" as DEACTION2  [[$./auto_create_members#deaction2 {"生成用户数据"}]]
}


Begin --> PREPAREPARAM1 : [[$./auto_create_members#begin-prepareparam1{个人} 个人]]
PREPAREPARAM1 --> DEACTION1
DEACTION1 --> END1
Begin --> PREPAREPARAM2 : [[$./auto_create_members#begin-prepareparam2{团队} 团队]]
PREPAREPARAM2 --> DEDATASET1
DEDATASET1 --> LOOPSUBCALL1
LOOPSUBCALL1 --> RESETPARAM1
RESETPARAM1 --> PREPAREPARAM3
PREPAREPARAM3 --> DEACTION2
LOOPSUBCALL1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 准备用户数据 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).ID(标识)` 设置给  `view_member(成员参数).OWNER_ID(效能标识)`
2. 将`admin` 设置给  `view_member(成员参数).ROLE_ID(角色)`
3. 将`用户全局对象.srfpersonid` 设置给  `view_member(成员参数).USER_ID(用户标识)`
4. 将`用户全局对象.srfpersonname` 设置给  `view_member(成员参数).NAME(名称)`

#### 准备查询数据 :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).SCOPE_ID(所属对象)` 设置给  `member.N_OWNER_ID_EQ`
2. 将`GROUP` 设置给  `member.N_OWNER_TYPE_EQ`

#### 生成用户 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [空间成员(SPACE_MEMBER)](module/Wiki/space_member.md) 行为 [Create](module/Wiki/space_member#行为) ，行为参数为`view_member(成员参数)`

#### 实体数据集 :id=DEDATASET1<sup class="footnote-symbol"> <font color=gray size=1>[实体数据集]</font></sup>



调用实体 [成员(MEMBER)](module/Base/member.md) 数据集合 [数据集(DEFAULT)](module/Base/member#数据集合) ，查询参数为`member`

将执行结果返回给参数`member_page(用户分页结果)`

#### 循环子调用 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`member_page(用户分页结果)`，子循环参数使用`member_obj(用户结果变量)`
#### 重置参数 :id=RESETPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[重置参数]</font></sup>



重置参数```view_member(成员参数)```
#### 准备参数 :id=PREPAREPARAM3<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).ID(标识)` 设置给  `view_member(成员参数).OWNER_ID(效能标识)`
2. 将`INSIGHT` 设置给  `view_member(成员参数).OWNER_TYPE(所属数据对象)`
3. 将`INSIGHT` 设置给  `view_member(成员参数).OWNER_SUBTYPE(所属对象子类型)`
4. 将`member_obj(用户结果变量).NAME(名称)` 设置给  `view_member(成员参数).NAME(名称)`
5. 将`member_obj(用户结果变量).USER_ID(登录名)` 设置给  `view_member(成员参数).USER_ID(用户标识)`
6. 将`member_obj(用户结果变量).ROLE_ID(角色)` 设置给  `view_member(成员参数).ROLE_ID(角色)`

#### 生成用户数据 :id=DEACTION2<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [成员(MEMBER)](module/Base/member.md) 行为 [Create](module/Base/member#行为) ，行为参数为`view_member(成员参数)`

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*


### 连接条件说明
#### 个人 :id=Begin-PREPAREPARAM1

`Default(传入变量).SCOPE_TYPE(所属)` EQ `user`
#### 团队 :id=Begin-PREPAREPARAM2

`Default(传入变量).SCOPE_TYPE(所属)` EQ `user_group`


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[效能视图(INSIGHT_VIEW)](module/Insight/insight_view.md)||
|member|member|过滤器|||
|用户结果变量|member_obj|数据对象|[成员(MEMBER)](module/Base/member.md)||
|用户分页结果|member_page|分页查询|||
|成员参数|view_member|数据对象|[效能成员(INSIGHT_MEMBER)](module/Insight/insight_member.md)||
