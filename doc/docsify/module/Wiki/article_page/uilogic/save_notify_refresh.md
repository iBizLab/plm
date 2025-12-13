## 新建发布并通知刷新 <!-- {docsify-ignore-all} -->

   保存当前页面内容并刷新页面，点击发布按钮，触发保存非草稿页面

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
state "开始" as Begin <<start>> [[$./save_notify_refresh#begin {开始}]]
state "页面信息" as PREPAREJSPARAM1  [[$./save_notify_refresh#preparejsparam1 {页面信息}]]
state "通知刷新" as RAWJSCODE1  [[$./save_notify_refresh#rawjscode1 {通知刷新}]]
state "退出" as DEUIACTION2  [[$./save_notify_refresh#deuiaction2 {退出}]]
state "设置发布状态到当前视图" as PREPAREJSPARAM2  [[$./save_notify_refresh#preparejsparam2 {设置发布状态到当前视图}]]
state "发布页面" as DEACTION1  [[$./save_notify_refresh#deaction1 {发布页面}]]
state "结束" as END1 <<end>> [[$./save_notify_refresh#end1 {结束}]]
state "注入脚本代码" as RAWJSCODE2  [[$./save_notify_refresh#rawjscode2 {注入脚本代码}]]
state "设置表单是否变更" as RAWJSCODE3  [[$./save_notify_refresh#rawjscode3 {设置表单是否变更}]]


Begin --> PREPAREJSPARAM1
PREPAREJSPARAM1 --> RAWJSCODE2
RAWJSCODE2 --> DEACTION1
DEACTION1 --> RAWJSCODE3
RAWJSCODE3 --> PREPAREJSPARAM2
PREPAREJSPARAM2 --> DEUIACTION2
DEUIACTION2 --> RAWJSCODE1
RAWJSCODE1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>




#### 页面信息 :id=PREPAREJSPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量)` 拷贝到  `page_info(页面信息)`

#### 注入脚本代码 :id=RAWJSCODE2<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
//uiLogic.page_info = view.layoutPanel.panelItems.form.control.getReal();

const page_info = uiLogic.page_info;

console.info(page_info);

if(page_info.format_type === "HTML"  &&  page_info.html_description !== undefined){
    page_info.content = page_info.html_description;
}
if(page_info.format_type === "MD"  &&  page_info.md_description !== undefined){
    page_info.content = page_info.md_description;
}
if(page_info.format_type === "EXCEL" &&  page_info.excel_description !== undefined){
    page_info.content = page_info.excel_description;
}




```

#### 发布页面 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [页面(PAGE)](module/Wiki/article_page.md) 行为 [发布页面(publish_page)](module/Wiki/article_page#行为) ，行为参数为`page_info(页面信息)`

将执行结果返回给参数`page_info(页面信息)`

#### 设置表单是否变更 :id=RAWJSCODE3<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>

由于是自定义逻辑保存，所以此处应该手动改变状态

<p class="panel-title"><b>执行代码</b></p>

```javascript
if (uiLogic.form) {
    uiLogic.form.state.modified = false;
}
```

#### 设置发布状态到当前视图 :id=PREPAREJSPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`page_info(页面信息).is_published` 设置给  `view(当前视图).is_published`

#### 退出 :id=DEUIACTION2<sup class="footnote-symbol"> <font color=gray size=1>[实体界面行为调用]</font></sup>



调用实体 [页面(PAGE)](module/Wiki/article_page.md) 界面行为 [编辑界面_退出操作](module/Wiki/article_page#界面行为) ，行为参数为`page_info(页面信息)`

#### 通知刷新 :id=RAWJSCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.send({srfdecodename: 'article_page'}, 'OBJECTCREATED');
```

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>






### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
|表单|form|部件对象||
|当前视图|view|当前视图对象||
|页面信息|page_info|数据对象||
