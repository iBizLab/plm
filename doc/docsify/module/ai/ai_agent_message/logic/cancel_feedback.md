## 取消点赞或点踩 <!-- {docsify-ignore-all} -->

   

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
state "开始" as Begin <<start>> [[$./cancel_feedback#begin {"开始"}]]
state "获取消息数据" as DEACTION_03  [[$./cancel_feedback#deaction_03 {"获取消息数据"}]]
state "准备查询参数" as PREPAREPARAM_01  [[$./cancel_feedback#prepareparam_01 {"准备查询参数"}]]
state "查询反馈记录" as DEDATASET_01  [[$./cancel_feedback#dedataset_01 {"查询反馈记录"}]]
state "结束" as END_01 <<end>> [[$./cancel_feedback#end_01 {"结束"}]]
state "循环子调用" as LOOPSUBCALL_01  [[$./cancel_feedback#loopsubcall_01 {"循环子调用"}]] #green {
state "删除反馈" as DEACTION_01  [[$./cancel_feedback#deaction_01 {"删除反馈"}]]
state "获取消息信息" as DEACTION_02  [[$./cancel_feedback#deaction_02 {"获取消息信息"}]]
}


Begin --> DEACTION_03
DEACTION_03 --> PREPAREPARAM_01 : [[$./cancel_feedback#deaction_03-prepareparam_01{连接名称} 连接名称]]
PREPAREPARAM_01 --> DEDATASET_01
DEDATASET_01 --> LOOPSUBCALL_01
LOOPSUBCALL_01 --> DEACTION_01
DEACTION_01 --> DEACTION_02
DEACTION_02 --> END_01
DEACTION_03 --> END_01 : [[$./cancel_feedback#deaction_03-end_01{连接名称} 连接名称]]


@enduml
```


### 处理步骤说明

#### 获取消息数据 :id=DEACTION_03<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [智能体会话消息(AI_AGENT_MESSAGE)](module/ai/ai_agent_message.md) 行为 [Get](module/ai/ai_agent_message#行为) ，行为参数为`Default(传入变量)`

将执行结果返回给参数`Default(传入变量)`

#### 准备查询参数 :id=PREPAREPARAM_01<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).ID(标识)` 设置给  `feedback_filter.n_message_id_eq`
2. 将`用户全局对象.srfpersionid` 设置给  `feedback_filter.n_user_id_eq`
3. 将`Default(传入变量).feedback_type` 设置给  `feedback_filter.n_feedback_type_eq`
4. 将`1000` 设置给  `feedback_filter.size`

#### 查询反馈记录 :id=DEDATASET_01<sup class="footnote-symbol"> <font color=gray size=1>[实体数据集]</font></sup>



调用实体 [智能体回复反馈(AI_AGENT_FEEDBACK)](module/ai/ai_agent_feedback.md) 数据集合 [DEFAULT](module/ai/ai_agent_feedback#数据集合) ，查询参数为`feedback_filter`

将执行结果返回给参数`feedback_pages`

#### 循环子调用 :id=LOOPSUBCALL_01<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`feedback_pages`，子循环参数使用`feedback`
#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 删除反馈 :id=DEACTION_01<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [智能体回复反馈(AI_AGENT_FEEDBACK)](module/ai/ai_agent_feedback.md) 行为 [Remove](module/ai/ai_agent_feedback#行为) ，行为参数为`feedback`

#### 获取消息信息 :id=DEACTION_02<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [智能体会话消息(AI_AGENT_MESSAGE)](module/ai/ai_agent_message.md) 行为 [Get](module/ai/ai_agent_message#行为) ，行为参数为`Default(传入变量)`

将执行结果返回给参数`Default(传入变量)`

#### 结束 :id=END_01<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `Default(传入变量)`


### 连接条件说明
#### 连接名称 :id=DEACTION_03-PREPAREPARAM_01

(`Default(传入变量).IS_LIKE(是否点赞)` EQ `1` OR `Default(传入变量).IS_DISLIKE(是否点踩)` EQ `1`)
#### 连接名称 :id=DEACTION_03-END_01

`Default(传入变量).IS_LIKE(是否点赞)` NOTEQ `1` AND `Default(传入变量).IS_DISLIKE(是否点踩)` NOTEQ `1`


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[智能体会话消息(AI_AGENT_MESSAGE)](module/ai/ai_agent_message.md)||
|feedback|feedback|数据对象|[智能体回复反馈(AI_AGENT_FEEDBACK)](module/ai/ai_agent_feedback.md)||
|feedback_filter|feedback_filter|过滤器|||
|feedback_pages|feedback_pages|分页查询|||
