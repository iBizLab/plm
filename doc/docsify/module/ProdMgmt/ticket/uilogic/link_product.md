## 关联产品需求 <!-- {docsify-ignore-all} -->

   关联产品需求，生成正反向关联数据

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
state "开始" as Begin <<start>> [[$./link_product#begin {开始}]]
state "切换分页" as RAWJSCODE1  [[$./link_product#rawjscode1 {切换分页}]]
state "设置关系页面对象" as PREPAREJSPARAM2  [[$./link_product#preparejsparam2 {设置关系页面对象}]]
state "存在嵌入视图" as PREPAREJSPARAM1  [[$./link_product#preparejsparam1 {存在嵌入视图}]]
state "嵌入视图不存在" as RAWJSCODE2  [[$./link_product#rawjscode2 {嵌入视图不存在}]]
state "显示下拉并展开数据" as DEUIACTION1  [[$./link_product#deuiaction1 {显示下拉并展开数据}]]


Begin --> PREPAREJSPARAM2
PREPAREJSPARAM2 --> RAWJSCODE1
RAWJSCODE1 --> PREPAREJSPARAM1 : [[$./link_product#rawjscode1-preparejsparam1{存在嵌入视图} 存在嵌入视图]]
PREPAREJSPARAM1 --> DEUIACTION1
RAWJSCODE1 --> RAWJSCODE2 : [[$./link_product#rawjscode1-rawjscode2{不存在嵌入视图} 不存在嵌入视图]]


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>




#### 设置关系页面对象 :id=PREPAREJSPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`form(表单).details.tabpanel1_idea_druipart` 设置给  `druipart(嵌入视图对象)`

#### 切换分页 :id=RAWJSCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.form.details.tabpanel1.state.activeTab = 'tabpanel1_idea'
```

#### 存在嵌入视图 :id=PREPAREJSPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>




    无

#### 显示下拉并展开数据 :id=DEUIACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体界面行为调用]</font></sup>



调用实体 [需求(IDEA)](module/ProdMgmt/idea.md) 界面行为 [显示下拉并展开数据（嵌入视图）](module/ProdMgmt/idea#界面行为) ，行为参数为`embedView(嵌入视图)`

#### 嵌入视图不存在 :id=RAWJSCODE2<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.druipart.navContext.srfshowchoose = true;
```

### 连接条件说明
#### 存在嵌入视图 :id=RAWJSCODE1-PREPAREJSPARAM1

```druipart(嵌入视图对象).embedView``` ISNOTNULL
#### 不存在嵌入视图 :id=RAWJSCODE1-RAWJSCODE2

```druipart(嵌入视图对象).embedView``` ISNULL


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|简单数据||
|表单|form|部件对象||
|嵌入视图|embedView|数据对象||
|视图|view|当前视图对象||
|嵌入视图对象|druipart|数据对象||
