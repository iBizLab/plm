## 文档重新解析 <!-- {docsify-ignore-all} -->

   

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
state "开始" as Begin <<start>> [[$./reparse#begin {"开始"}]]
state "置空parsed_content" as PREPAREPARAM_01  [[$./reparse#prepareparam_01 {"置空parsed_content"}]]
state "更新doc数据" as DEACTION_02  [[$./reparse#deaction_02 {"更新doc数据"}]]
state "异步解析文档数据" as DEACTION_01  [[$./reparse#deaction_01 {"异步解析文档数据"}]]
state "结束" as END_01 <<end>> [[$./reparse#end_01 {"结束"}]]


Begin --> PREPAREPARAM_01
PREPAREPARAM_01 --> DEACTION_02
DEACTION_02 --> DEACTION_01
DEACTION_01 --> END_01


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 置空parsed_content :id=PREPAREPARAM_01<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`空值（NULL）` 设置给  `Default(传入变量).PARSED_CONTENT(解析内容)`
2. 将`空值（NULL）` 设置给  `Default(传入变量).PARSE_ERROR(错误信息)`

#### 更新doc数据 :id=DEACTION_02<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [知识库文档(AI_KB_DOCUMENT)](module/ai/ai_kb_document.md) 行为 [Update](module/ai/ai_kb_document#行为) ，行为参数为`Default(传入变量)`

将执行结果返回给参数`Default(传入变量)`

#### 异步解析文档数据 :id=DEACTION_01<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [知识库文档(AI_KB_DOCUMENT)](module/ai/ai_kb_document.md) 行为 [异步文档解析(Async_parse)](module/ai/ai_kb_document#行为) ，行为参数为`Default(传入变量)`

#### 结束 :id=END_01<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[知识库文档(AI_KB_DOCUMENT)](module/ai/ai_kb_document.md)||
