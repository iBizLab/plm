## 是否删除变更附加逻辑 <!-- {docsify-ignore-all} -->

   产品删除或恢复数据时触发相应的通知消息

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
state "开始" as Begin <<start>> [[$./is_deleted_onchange#begin {"开始"}]]
state "测试库删除/恢复通知" as DENOTIFY1  [[$./is_deleted_onchange#denotify1 {"测试库删除/恢复通知"}]]


Begin --> DENOTIFY1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 测试库删除/恢复通知 :id=DENOTIFY1<sup class="footnote-symbol"> <font color=gray size=1>[实体通知]</font></sup>



调用实体 [测试库(LIBRARY)](module/TestMgmt/library.md) 通知 [测试库删除/恢复通知(library_remove_notify)](module/TestMgmt/library/notify/library_remove_notify) ，参数为`Default(传入变量)`


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[测试库(LIBRARY)](module/TestMgmt/library.md)||
