# 用例评审 <!-- {docsify-ignore-all} -->

测试用

## 用例评审 v1

### 流程图

```plantuml
@startuml
hide empty description
<style>
root {
  HyperlinkColor #42b983
}
</style>

state "开始事件" as START_01 <<start>> #seagreen
state "通过" as PROCESS_02 #lightgreen : 行为：[[$../module/TestMgmt/review#行为{Update} Update]]
state "进入评审中" as PROCESS_01 #lightgreen : 行为：[[$../module/TestMgmt/review#行为{Update} Update]]
state "上级审批" as INTERACTIVE_01
state "废弃" as PROCESS_04 #lightgreen : 行为：[[$../module/TestMgmt/review#行为{Update} Update]]
state "结束事件" as END_01 <<end>> #red
state "不通过" as PROCESS_03 #lightgreen : 行为：[[$../module/TestMgmt/review#行为{Update} Update]]

START_01 --> PROCESS_01 : route
PROCESS_02 --> END_01 : ROUTE1
PROCESS_01 --> INTERACTIVE_01 : ROUTE
INTERACTIVE_01 --> PROCESS_04 : 废弃\nANY
INTERACTIVE_01 --> PROCESS_02 : 通过\nANY
INTERACTIVE_01 --> PROCESS_03 : 不通过\nANY
PROCESS_04 --> END_01 : ROUTE3
PROCESS_03 --> END_01 : ROUTE2

@enduml
```


### 审批步骤

|    序号 |    审批步骤   |    审批人     |
| -------- | --------   |------------|
|1|开始事件||
|2|通过||
|3|进入评审中||
|4|上级审批||
|5|废弃||
|6|结束事件||
|7|不通过||



