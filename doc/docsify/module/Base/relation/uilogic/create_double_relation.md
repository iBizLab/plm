## 建立双向关联数据（移动端） <!-- {docsify-ignore-all} -->

   移动端建立双向关联数据

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
state "隐藏下拉框" as RAWJSCODE2  [[$./create_double_relation#rawjscode2 {隐藏下拉框}]]
state "更新srfdecodename" as RAWJSCODE3  [[$./create_double_relation#rawjscode3 {更新srfdecodename}]]
state "填充测试用例属性" as PREPAREJSPARAM3  [[$./create_double_relation#preparejsparam3 {填充测试用例属性}]]
state "建立关联关系" as DEACTION1  [[$./create_double_relation#deaction1 {建立关联关系}]]
state "绑定表格部件" as PREPAREJSPARAM2  [[$./create_double_relation#preparejsparam2 {绑定表格部件}]]
state "表格刷新" as VIEWCTRLINVOKE1  [[$./create_double_relation#viewctrlinvoke1 {表格刷新}]]
state "填充关联数据属性" as PREPAREJSPARAM1  [[$./create_double_relation#preparejsparam1 {填充关联数据属性}]]
state "结束" as END1 <<end>> [[$./create_double_relation#end1 {结束}]]
state "建立关联关系" as DEACTION2  [[$./create_double_relation#deaction2 {建立关联关系}]]


Begin --> PREPAREJSPARAM1
PREPAREJSPARAM1 --> DEACTION1
DEACTION1 --> DEACTION2
DEACTION2 --> RAWJSCODE3
RAWJSCODE3 --> END1
DEACTION2 --> PREPAREJSPARAM3 : [[$./create_double_relation#deaction2-preparejsparam3{执行用例同步新建测试用例} 执行用例同步新建测试用例]]
PREPAREJSPARAM3 --> DEACTION1


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

#### 建立关联关系 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [关联(RELATION)](module/Base/relation.md) 行为 [Create](module/Base/relation#行为) ，行为参数为`relation(正向关联对象)`

将执行结果返回给参数`relation(正向关联对象)`

#### 填充测试用例属性 :id=PREPAREJSPARAM3<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`ctx.test_case` 设置给  `relation(正向关联对象).principal_id`
2. 将`ctx.test_case` 设置给  `relation2(反向关联对象).target_id`
3. 将`空值（NULL）` 设置给  `ctx.run`
4. 将`test_case` 设置给  `relation(正向关联对象).principal_type`
5. 将`test_case` 设置给  `relation2(反向关联对象).target_type`

#### 建立关联关系 :id=DEACTION2<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [关联(RELATION)](module/Base/relation.md) 行为 [Create](module/Base/relation#行为) ，行为参数为`relation2(反向关联对象)`

#### 更新srfdecodename :id=RAWJSCODE3<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: context.principal_type})
ibiz.mc.command.create.send({ srfdecodename: 'relation'})
```

#### 绑定表格部件 :id=PREPAREJSPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`view(当前视图对象).layoutPanel.panelItems.grid.control` 设置给  `grid(表格对象)`

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>




#### 隐藏下拉框 :id=RAWJSCODE2<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
const panel = view.layoutPanel.panelItems.choose_data;
if (panel) {
    panel.state.visible = false;
}
```

#### 表格刷新 :id=VIEWCTRLINVOKE1<sup class="footnote-symbol"> <font color=gray size=1>[视图部件调用]</font></sup>



调用`grid(表格对象)`的方法`refresh`，参数为`grid(表格对象)`
### 连接条件说明
#### 执行用例同步新建测试用例 :id=DEACTION2-PREPAREJSPARAM3

```ctx(ctx).run``` ISNOTNULL AND ```ctx(ctx).principal_type``` EQ ```run```


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
|当前视图对象|view|当前视图对象||
|表格对象|grid|部件对象||
|正向关联对象|relation|数据对象||
|反向关联对象|relation2|数据对象||
|ctx|ctx|导航视图参数绑定参数||
