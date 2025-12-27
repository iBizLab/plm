## delete <!-- {docsify-ignore-all} -->

   设置结束状态

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
state "开始" as Begin <<start>> [[$./delete#begin {"开始"}]]
state "设置结束状态" as PREPAREPARAM_01  [[$./delete#prepareparam_01 {"设置结束状态"}]]
state "更新结束状态" as DEACTION_01  [[$./delete#deaction_01 {"更新结束状态"}]]
state "结束" as END_01 <<end>> [[$./delete#end_01 {"结束"}]]


Begin --> PREPAREPARAM_01
PREPAREPARAM_01 --> DEACTION_01
DEACTION_01 --> END_01


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 设置结束状态 :id=PREPAREPARAM_01<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`ended` 设置给  `Default(传入变量).STATUS(会话状态)`

#### 更新结束状态 :id=DEACTION_01<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [智能体会话(AI_AGENT_CONVERSATION)](module/ai/ai_agent_conversation.md) 行为 [Update](module/ai/ai_agent_conversation#行为) ，行为参数为`Default(传入变量)`

#### 结束 :id=END_01<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[智能体会话(AI_AGENT_CONVERSATION)](module/ai/ai_agent_conversation.md)||
