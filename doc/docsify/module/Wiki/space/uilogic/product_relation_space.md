## 产品关联空间 <!-- {docsify-ignore-all} -->

   调用后台关联逻辑，产品关联空间并生成正反关联数据

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
state "开始" as Begin <<start>> [[$./product_relation_space#begin {开始}]]
state "结束" as END1 <<end>> [[$./product_relation_space#end1 {结束}]]
state "准备参数" as PREPAREJSPARAM1  [[$./product_relation_space#preparejsparam1 {准备参数}]]
state "创建关联数据" as DEACTION1  [[$./product_relation_space#deaction1 {创建关联数据}]]


Begin --> PREPAREJSPARAM1
PREPAREJSPARAM1 --> DEACTION1
DEACTION1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>




#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>




#### 准备参数 :id=PREPAREJSPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`ctx(上下文参数).target_type` 设置给  `Default(传入变量).target_type`
2. 将`ctx(上下文参数).principal_type` 设置给  `Default(传入变量).principal_type`

#### 创建关联数据 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [产品(PRODUCT)](module/ProdMgmt/product.md) 行为 [其他实体关联空间(other_re_space)](module/ProdMgmt/product#行为) ，行为参数为`Default(传入变量)`



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|上下文参数|ctx|导航视图参数绑定参数||
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
