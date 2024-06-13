## 选择用例模板 <!-- {docsify-ignore-all} -->

   

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
state "开始" as Begin <<start>> [[$./choose_case_template#begin {"开始"}]]
state "结束" as END1 <<end>> [[$./choose_case_template#end1 {"结束"}]]
state "调试逻辑参数" as DEBUGPARAM1  [[$./choose_case_template#debugparam1 {"调试逻辑参数"}]]
state "实体行为" as DEACTION1  [[$./choose_case_template#deaction1 {"实体行为"}]]


Begin --> DEBUGPARAM1
DEBUGPARAM1 --> DEACTION1
DEACTION1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*

#### 调试逻辑参数 :id=DEBUGPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[调试逻辑参数]</font></sup>



> [!NOTE|label:调试信息|icon:fa fa-bug]
> 调试输出参数`Default(传入变量)`的详细信息


#### 实体行为 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [用例模板(TEST_CASE_TEMPLATE)](module/TestMgmt/test_case_template.md) 行为 [Get](module/TestMgmt/test_case_template#行为) ，行为参数为`Default(传入变量)`



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[用例模板(TEST_CASE_TEMPLATE)](module/TestMgmt/test_case_template.md)||