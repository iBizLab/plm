## 变更阶段评审人 <!-- {docsify-ignore-all} -->

   变更阶段评审人

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
state "开始" as Begin <<start>> [[$./set_stage_reviewer#begin {开始}]]
state "准备参数" as PREPAREJSPARAM1  [[$./set_stage_reviewer#preparejsparam1 {准备参数}]]
state "实体行为" as DEACTION1  [[$./set_stage_reviewer#deaction1 {实体行为}]]
state "结束" as END1 <<end>> [[$./set_stage_reviewer#end1 {结束}]]


Begin --> PREPAREJSPARAM1
PREPAREJSPARAM1 --> DEACTION1
DEACTION1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>




#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>




#### 准备参数 :id=PREPAREJSPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`ctx(上下文).review` 设置给  `Default(传入变量).review_id`
2. 将`Default(传入变量).id` 设置给  `Default(传入变量).curstage_id`

#### 实体行为 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [评审(REVIEW)](module/TestMgmt/review.md) 行为 [变更评审内阶段(change_review_stage)](module/TestMgmt/review#行为) ，行为参数为`Default(传入变量)`



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|上下文|ctx|导航视图参数绑定参数||
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
|当前视图对象|view|当前视图对象||
|评审|review|数据对象||
