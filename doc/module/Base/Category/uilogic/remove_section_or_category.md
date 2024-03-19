## 删除类别或分组 <!-- {docsify-ignore-all} -->

   

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
state "开始" as Begin <<start>> [[$./remove_section_or_category#begin {开始}]]
state "准备参数" as PREPAREJSPARAM1  [[$./remove_section_or_category#preparejsparam1 {准备参数}]]
state "视图部件调用" as VIEWCTRLINVOKE1  [[$./remove_section_or_category#viewctrlinvoke1 {视图部件调用}]]


Begin --> PREPAREJSPARAM1
PREPAREJSPARAM1 --> VIEWCTRLINVOKE1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin




#### 准备参数 :id=PREPAREJSPARAM1



1. 将`Default(传入变量)._id` 绑定给  `node_param(节点参数)`

#### 视图部件调用 :id=VIEWCTRLINVOKE1



调用`treeexpbar_tree(树部件)`的方法`removeTreeNode`，参数为`node_param(节点参数)`


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
|树部件|treeexpbar_tree|部件对象||
|节点参数|node_param|简单数据||
