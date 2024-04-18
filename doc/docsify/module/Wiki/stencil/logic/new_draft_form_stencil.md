## 根据模板建立页面草稿 <!-- {docsify-ignore-all} -->

   获取页面的模板数据，并返回

### 处理过程

```plantuml
@startuml
hide empty description
<style>
root {
  HyperlinkColor #42b983
}
</style>

hide empty description
state "开始" as Begin <<start>> [[$./new_draft_form_stencil#begin {"开始"}]]
state "结束" as END1 <<end>> [[$./new_draft_form_stencil#end1 {"结束"}]]
state "调试逻辑参数" as DEBUGPARAM2  [[$./new_draft_form_stencil#debugparam2 {"调试逻辑参数"}]]
state "获取模板ID" as PREPAREPARAM2  [[$./new_draft_form_stencil#prepareparam2 {"获取模板ID"}]]
state "根据模板ID获取模板信息" as DEACTION1  [[$./new_draft_form_stencil#deaction1 {"根据模板ID获取模板信息"}]]
state "设置返回数据" as PREPAREPARAM1  [[$./new_draft_form_stencil#prepareparam1 {"设置返回数据"}]]
state "创建草稿页面" as DEACTION2  [[$./new_draft_form_stencil#deaction2 {"创建草稿页面"}]]
state "调试逻辑参数" as DEBUGPARAM1  [[$./new_draft_form_stencil#debugparam1 {"调试逻辑参数"}]]


Begin --> DEBUGPARAM2
DEBUGPARAM2 --> PREPAREPARAM2
PREPAREPARAM2 --> DEACTION1
DEACTION1 --> PREPAREPARAM1
PREPAREPARAM1 --> DEACTION2
DEACTION2 --> DEBUGPARAM1
DEBUGPARAM1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `page_info(页面信息)`

#### 调试逻辑参数 :id=DEBUGPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[调试逻辑参数]</font></sup>



> [!NOTE|label:调试信息|icon:fa fa-bug]
> 调试输出参数`Default(传入变量)`的详细信息


#### 获取模板ID :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).ID(标识)` 设置给  `stencil_info(模板信息).ID(标识)`

#### 根据模板ID获取模板信息 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [页面模板(STENCIL)](module/Wiki/stencil.md) 行为 [Get](module/Wiki/stencil#行为) ，行为参数为`stencil_info(模板信息)`

将执行结果返回给参数`stencil_info(模板信息)`

#### 设置返回数据 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`stencil_info(模板信息).content(正文)` 设置给  `page_info(页面信息).content(正文)`
2. 将`Default(传入变量).space_id(空间标识)` 设置给  `page_info(页面信息).SPACE_ID(空间标识)`
3. 将`stencil_info(模板信息).name(名称)` 设置给  `page_info(页面信息).NAME(主题)`
4. 将`1` 设置给  `page_info(页面信息).TYPE(类型)`
5. 将`stencil_info(模板信息).name(名称)` 设置给  `page_info(页面信息).Name(主题)`

#### 创建草稿页面 :id=DEACTION2<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [页面(PAGE)](module/Wiki/article_page.md) 行为 [Create](module/Wiki/article_page#行为) ，行为参数为`page_info(页面信息)`

#### 调试逻辑参数 :id=DEBUGPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[调试逻辑参数]</font></sup>



> [!NOTE|label:调试信息|icon:fa fa-bug]
> 调试输出参数`page_info(页面信息)`的详细信息




### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[页面模板(STENCIL)](module/Wiki/stencil.md)||
|页面信息|page_info|数据对象|[页面(PAGE)](module/Wiki/article_page.md)||
|模板信息|stencil_info|数据对象|[页面模板(STENCIL)](module/Wiki/stencil.md)||
