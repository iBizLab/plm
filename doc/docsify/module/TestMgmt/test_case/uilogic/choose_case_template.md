## 选择用例模板 <!-- {docsify-ignore-all} -->

   选择用例模板后回填所选模板数据至表单

### 处理过程

```plantuml
@startuml
hide footbox
<style>
root {
  HyperlinkColor #42b983
}
</style>

hide empty description
state "开始" as Begin <<start>> [[$./choose_case_template#begin {开始}]]
state "设置表单数据" as PREPAREJSPARAM2  [[$./choose_case_template#preparejsparam2 {设置表单数据}]]
state "绑定表单数据" as PREPAREJSPARAM1  [[$./choose_case_template#preparejsparam1 {绑定表单数据}]]
state "结束" as END1 <<end>> [[$./choose_case_template#end1 {结束}]]


Begin --> PREPAREJSPARAM1
PREPAREJSPARAM1 --> PREPAREJSPARAM2
PREPAREJSPARAM2 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>




#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>




#### 绑定表单数据 :id=PREPAREJSPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`form(表单).data` 绑定给  `form_data(表单数据)`

#### 设置表单数据 :id=PREPAREJSPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).title` 设置给  `form_data(表单数据).title`
2. 将`Default(传入变量).level` 设置给  `form_data(表单数据).level`
3. 将`Default(传入变量).precondition` 设置给  `form_data(表单数据).precondition`
4. 将`Default(传入变量).state` 设置给  `form_data(表单数据).state`
5. 将`Default(传入变量).suite_id` 设置给  `form_data(表单数据).suite_id`
6. 将`Default(传入变量).suite_name` 设置给  `form_data(表单数据).suite_name`
7. 将`Default(传入变量).suites` 设置给  `form_data(表单数据).suites`
8. 将`Default(传入变量).test_type` 设置给  `form_data(表单数据).test_type`
9. 将`Default(传入变量).type` 设置给  `form_data(表单数据).type`
10. 将`Default(传入变量).steps` 设置给  `form_data(表单数据).steps`
11. 将`Default(传入变量).description` 设置给  `form_data(表单数据).description`



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|当前视图|view|当前视图对象||
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
|表单数据|form_data|数据对象||
|表单|form|部件对象||
