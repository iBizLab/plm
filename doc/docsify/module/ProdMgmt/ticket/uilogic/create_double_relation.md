## 建立双向关联数据 <!-- {docsify-ignore-all} -->

   建立双向关联数据

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
state "开始" as Begin <<start>> [[$./create_double_relation#begin {开始}]]
state "建立关联关系" as DEACTION2  [[$./create_double_relation#deaction2 {建立关联关系}]]
state "拼接关联对象的主键" as RAWJSCODE1  [[$./create_double_relation#rawjscode1 {拼接关联对象的主键}]]
state "表格刷新" as VIEWCTRLINVOKE1  [[$./create_double_relation#viewctrlinvoke1 {表格刷新}]]
state "结束" as END1 <<end>> [[$./create_double_relation#end1 {结束}]]
state "填充关联数据属性" as PREPAREJSPARAM1  [[$./create_double_relation#preparejsparam1 {填充关联数据属性}]]
state "隐藏下拉框" as RAWJSCODE2  [[$./create_double_relation#rawjscode2 {隐藏下拉框}]]
state "建立关联关系" as DEACTION1  [[$./create_double_relation#deaction1 {建立关联关系}]]


Begin --> PREPAREJSPARAM1
PREPAREJSPARAM1 --> RAWJSCODE1
RAWJSCODE1 --> DEACTION1
DEACTION1 --> DEACTION2
DEACTION2 --> RAWJSCODE2
RAWJSCODE2 --> VIEWCTRLINVOKE1
VIEWCTRLINVOKE1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>




#### 填充关联数据属性 :id=PREPAREJSPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`ctx.principal_type` 设置给  `relation(正向关联对象).principal_type`
2. 将`ctx.target_type` 设置给  `relation2(反向关联对象).principal_type`
3. 将`ctx.principal_type` 设置给  `relation2(反向关联对象).target_type`
4. 将`ctx.principal_id` 设置给  `relation2(反向关联对象).target_id`
5. 将`Default(传入变量).id` 设置给  `relation2(反向关联对象).principal_id`
6. 将`ctx.principal_id` 设置给  `relation(正向关联对象).principal_id`
7. 将`Default(传入变量).id` 设置给  `relation(正向关联对象).target_id`
8. 将`ctx.target_type` 设置给  `relation(正向关联对象).target_type`

#### 拼接关联对象的主键 :id=RAWJSCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
let relationobj = uiLogic.relation;
relationobj.id = relationobj.principal_id + "_" + relationobj.target_id;
let relation2 = uiLogic.relation2;
relation2.id = relation2.principal_id + "_" + relation2.target_id;

```

#### 建立关联关系 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [关联(RELATION)](module/Base/relation.md) 行为 [Create](module/Base/relation#行为) ，行为参数为`relation(正向关联对象)`

将执行结果返回给参数`relation(正向关联对象)`

#### 建立关联关系 :id=DEACTION2<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [关联(RELATION)](module/Base/relation.md) 行为 [Create](module/Base/relation#行为) ，行为参数为`relation2(反向关联对象)`

#### 隐藏下拉框 :id=RAWJSCODE2<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
const panel = view.layoutPanel.panelItems.choose_data;
if (panel) {
    panel.state.visible = false;
}
```

#### 表格刷新 :id=VIEWCTRLINVOKE1<sup class="footnote-symbol"> <font color=gray size=1>[视图部件调用]</font></sup>



调用`grid(当前表格对象)`的方法`refresh`，参数为`grid(当前表格对象)`
#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>






### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|反向关联对象|relation2|数据对象||
|当前表格对象|grid|部件对象||
|正向关联对象|relation|数据对象||
|ctx|ctx|导航视图参数绑定参数||
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
|当前视图对象|view|当前视图对象||
