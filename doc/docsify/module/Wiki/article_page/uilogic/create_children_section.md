## 新建子分组 <!-- {docsify-ignore-all} -->

   调用树节点新建方法，新建子分组

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
state "开始" as Begin <<start>> [[$./create_children_section#begin {开始}]]
state "视图部件调用" as VIEWCTRLINVOKE1  [[$./create_children_section#viewctrlinvoke1 {视图部件调用}]]
state "准备参数" as PREPAREJSPARAM1  [[$./create_children_section#preparejsparam1 {准备参数}]]


Begin --> PREPAREJSPARAM1
PREPAREJSPARAM1 --> VIEWCTRLINVOKE1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>




#### 准备参数 :id=PREPAREJSPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`node_4` 设置给  `node_param(节点参数).nodeType`
2. 将`Default(传入变量)._value` 设置给  `defaultValue(默认值对象).parent_id`
3. 将`1` 设置给  `defaultValue(默认值对象).is_published`
4. 将`HTML` 设置给  `defaultValue(默认值对象).FORMAT_TYPE`
5. 将`2` 设置给  `defaultValue(默认值对象).type`
6. 将`defaultValue(默认值对象)` 设置给  `node_param(节点参数).defaultValue`

#### 视图部件调用 :id=VIEWCTRLINVOKE1<sup class="footnote-symbol"> <font color=gray size=1>[视图部件调用]</font></sup>



调用`treeexpbar_tree(树部件)`的方法`newTreeNode`，参数为`node_param(节点参数)`


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|上下文对象|context|导航视图参数绑定参数||
|树部件|treeexpbar_tree|部件对象||
|默认值对象|defaultValue|数据对象||
|当前选中节点|_dedata|数据对象||
|节点参数|node_param|数据对象||
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
