## 新建子类别 <!-- {docsify-ignore-all} -->

   调用树节点新建方法，新建子模块

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
state "开始" as Begin <<start>> [[$./create_children_category#begin {开始}]]
state "准备参数" as PREPAREJSPARAM1  [[$./create_children_category#preparejsparam1 {准备参数}]]
state "准备参数" as PREPAREJSPARAM3  [[$./create_children_category#preparejsparam3 {准备参数}]]
state "视图部件调用" as VIEWCTRLINVOKE1  [[$./create_children_category#viewctrlinvoke1 {视图部件调用}]]
state "准备参数" as PREPAREJSPARAM2  [[$./create_children_category#preparejsparam2 {准备参数}]]


Begin --> PREPAREJSPARAM3 : [[$./create_children_category#begin-preparejsparam3{测试库} 测试库]]
PREPAREJSPARAM3 --> PREPAREJSPARAM1
PREPAREJSPARAM1 --> VIEWCTRLINVOKE1
Begin --> PREPAREJSPARAM2 : [[$./create_children_category#begin-preparejsparam2{产品} 产品]]
PREPAREJSPARAM2 --> PREPAREJSPARAM1


@enduml
```


### 处理步骤说明

#### 准备参数 :id=PREPAREJSPARAM3<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`library_review` 设置给  `defaultValue(默认值对象).owner_subtype`
2. 将`context(上下文对象).library` 设置给  `defaultValue(默认值对象).owner_id`
3. 将`library` 设置给  `defaultValue(默认值对象).owner_type`

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>




#### 准备参数 :id=PREPAREJSPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`node_9` 设置给  `node_param(节点参数).nodeType`
2. 将`Default(传入变量)._value` 设置给  `defaultValue(默认值对象).parent_id`
3. 将`Default(传入变量)._value` 设置给  `defaultValue(默认值对象).section_id`
4. 将`defaultValue(默认值对象)` 设置给  `node_param(节点参数).defaultValue`

#### 视图部件调用 :id=VIEWCTRLINVOKE1<sup class="footnote-symbol"> <font color=gray size=1>[视图部件调用]</font></sup>



调用`treeexpbar_tree(树部件)`的方法`newTreeNode`，参数为`node_param(节点参数)`
#### 准备参数 :id=PREPAREJSPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`product_review` 设置给  `defaultValue(默认值对象).owner_subtype`
2. 将`context(上下文对象).product` 设置给  `defaultValue(默认值对象).owner_id`
3. 将`product` 设置给  `defaultValue(默认值对象).owner_type`

### 连接条件说明
#### 测试库 :id=Begin-PREPAREJSPARAM3

```context(上下文对象).library``` ISNOTNULL AND ```context(上下文对象).library``` NOTEQ ```undefined```
#### 产品 :id=Begin-PREPAREJSPARAM2

```context(上下文对象).product``` ISNOTNULL AND ```context(上下文对象).product``` NOTEQ ```undefined```


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|树部件|treeexpbar_tree|部件对象||
|节点参数|node_param|数据对象||
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
|默认值对象|defaultValue|数据对象||
|当前选中节点|_dedata|数据对象||
|上下文对象|context|导航视图参数绑定参数||
