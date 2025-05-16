# 评审结果(review_result)  <!-- {docsify-ignore-all} -->


存储评审的评审结果


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|评审意见|COMMENT|长文本，长度1000|2000|是||
|评审内容标识|CONTENT_ID|外键值|100|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|名称|NAME|文本，可指定长度|200|是||
|状态|RESULT_STATE|[单项选择(数值)](index/dictionary_index#review_result "评审结果")||是||
|顺序|SEQUENCES|整型||是||
|阶段标识|STAGE_ID|文本，可指定长度|100|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||
|是否可评审|WHETHER_REVIEW|文本，可指定长度|200|是||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_REVIEW_RESULT_REVIEW_CONTENT_EXTEND_CONTENT_ID](der/DER1N_REVIEW_RESULT_REVIEW_CONTENT_EXTEND_CONTENT_ID)|[评审内容扩展(REVIEW_CONTENT_EXTEND)](module/TestMgmt/review_content_extend)|1:N关系||
|[DERCUSTOM_REVIEW_RESULT_REVIEW_CONTENT_CONTENT_ID](der/DERCUSTOM_REVIEW_RESULT_REVIEW_CONTENT_CONTENT_ID)|[评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content)|自定义关系||
|[DERCUSTOM_REVIEW_RESULT_REVIEW_CONTENT_IDEA_CONTENT_ID](der/DERCUSTOM_REVIEW_RESULT_REVIEW_CONTENT_IDEA_CONTENT_ID)|[产品需求评审内容(REVIEW_CONTENT_IDEA)](module/ProdMgmt/review_content_idea)|自定义关系||

</el-tab-pane>
</el-tabs>
</el-row>

## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持||||
|Get|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||
|设置结果|set_result|[实体处理逻辑](module/TestMgmt/review_result/logic/set_result "设置评审结果")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[设置评审结果](module/TestMgmt/review_result/logic/set_result)|set_result|无||设置评审结果|

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/TestMgmt/review_result/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/TestMgmt/review_result/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/TestMgmt/review_result/dataset/Default)|DEFAULT|数据查询|是|||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_CONTENT_ID_EQ|评审内容标识|EQ||
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_RESULT_STATE_EQ|状态|EQ||
|N_STAGE_ID_EQ|阶段标识|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 通过（单条） | pass | 通过 |单项数据|用户自定义||
| 拒绝（单条） | decline | 拒绝 |单项数据|用户自定义||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[拒绝](module/TestMgmt/review_result/uilogic/refuse)|refuse|拒绝|
|[通过](module/TestMgmt/review_result/uilogic/pass)|pass|评审通过|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/TestMgmt/review_result?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/review_result?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/review_result?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/review_result?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/review_result?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/review_result?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/review_result?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/review_result?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/review_result?id=界面逻辑`">
  界面逻辑
</el-anchor-link>
</el-anchor>
</div>

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {
show_der:'minor',


      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>