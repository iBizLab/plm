## 除指定外清空会话 <!-- {docsify-ignore-all} -->

   

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
state "开始" as Begin <<start>> [[$./clear_all_except#begin {"开始"}]]
state "直接SQL调用" as RAWSQLCALL_01  [[$./clear_all_except#rawsqlcall_01 {"直接SQL调用"}]]
state "结束" as END_01 <<end>> [[$./clear_all_except#end_01 {"结束"}]]


Begin --> RAWSQLCALL_01
RAWSQLCALL_01 --> END_01


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 直接SQL调用 :id=RAWSQLCALL_01<sup class="footnote-symbol"> <font color=gray size=1>[直接SQL调用]</font></sup>



<p class="panel-title"><b>执行sql语句</b></p>

```sql
UPDATE AI_AGENT_CONVERSATION  SET STATUS= 'ended' WHERE SESSION_ID <> ? AND  USER_ID = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).SESSION_ID(外部会话ID)`
2. `用户全局对象.srfpersonid`


#### 结束 :id=END_01<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[智能体会话(AI_AGENT_CONVERSATION)](module/ai/ai_agent_conversation.md)||
