## 新建后项目关联产品 <!-- {docsify-ignore-all} -->

   

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
state "开始" as Begin <<start>> [[$./after_new_product_re_project#begin {开始}]]
state "实体行为" as DEACTION1  [[$./after_new_product_re_project#deaction1 {实体行为}]]
state "准备参数" as PREPAREJSPARAM1  [[$./after_new_product_re_project#preparejsparam1 {准备参数}]]
state "结束" as END1 <<end>> [[$./after_new_product_re_project#end1 {结束}]]


Begin --> PREPAREJSPARAM1
PREPAREJSPARAM1 --> DEACTION1
DEACTION1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>




#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>




#### 准备参数 :id=PREPAREJSPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).id` 设置给  `relation_obj(关联对象).target_id`
2. 将`ctx(上下文).target_type` 设置给  `relation_obj(关联对象).target_type`
3. 将`ctx(上下文).principal_id` 设置给  `relation_obj(关联对象).principal_id`
4. 将`ctx(上下文).principal_type` 设置给  `relation_obj(关联对象).principal_type`

#### 实体行为 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [产品(PRODUCT)](module/ProdMgmt/product.md) 行为 [关联产品(other_re_product)](module/ProdMgmt/product#行为) ，行为参数为`relation_obj(关联对象)`



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|上下文|ctx|导航视图参数绑定参数||
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
|关联对象|relation_obj|数据对象||
