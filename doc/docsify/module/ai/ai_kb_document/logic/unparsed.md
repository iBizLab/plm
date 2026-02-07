## 未切片数据集 <!-- {docsify-ignore-all} -->

   

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
state "开始" as Begin <<start>> [[$./unparsed#begin {"开始"}]]
state "查询未切片" as DEDATAQUERY_01  [[$./unparsed#dedataquery_01 {"查询未切片"}]]
state "结束" as END_01 <<end>> [[$./unparsed#end_01 {"结束"}]]
state "循环子调用" as LOOPSUBCALL_01  [[$./unparsed#loopsubcall_01 {"循环子调用"}]] #green {
state "置空查询parsing_config" as PREPAREPARAM_01  [[$./unparsed#prepareparam_01 {"置空查询parsing_config"}]]
}


Begin --> DEDATAQUERY_01
DEDATAQUERY_01 --> LOOPSUBCALL_01
LOOPSUBCALL_01 --> PREPAREPARAM_01 : [[$./unparsed#loopsubcall_01-prepareparam_01{连接名称} 连接名称]]
LOOPSUBCALL_01 --> END_01


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 查询未切片 :id=DEDATAQUERY_01<sup class="footnote-symbol"> <font color=gray size=1>[实体数据查询]</font></sup>



调用实体 [知识库文档(AI_KB_DOCUMENT)](module/ai/ai_kb_document.md) 数据查询 [未解析文档(UNPARSED)](module/ai/ai_kb_document#数据查询) ，查询参数为`Default(传入变量)`

将执行结果返回给参数`page(文档)`

#### 循环子调用 :id=LOOPSUBCALL_01<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`page(文档)`，子循环参数使用`doc`
#### 结束 :id=END_01<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `page(文档)`

#### 置空查询parsing_config :id=PREPAREPARAM_01<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`空值（NULL）` 设置给  `doc.PARSER_CONFIG(解析配置)`


### 连接条件说明
#### 连接名称 :id=LOOPSUBCALL_01-PREPAREPARAM_01

`doc(doc).CUSTOM_CHUNK(自定义切片)` EQ `0`


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|过滤器|||
|doc|doc|数据对象|[知识库文档(AI_KB_DOCUMENT)](module/ai/ai_kb_document.md)||
|文档|page|分页查询|||
