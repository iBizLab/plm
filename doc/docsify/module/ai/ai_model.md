# AI大模型(ai_model)  <!-- {docsify-ignore-all} -->


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|启用该模型|ACTIVE|是否逻辑||否||
|AI凭证标识|AI_CREDENTIAL_ID|外键值|100|是||
|AI凭证名称|AI_CREDENTIAL_NAME|外键值文本|200|是||
|模型 API 地址|API_BASE_URL|文本，可指定长度|255|否||
|模型标识|CODE_NAME|文本，可指定长度|100|否||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|多模态图片解析|DESC_OSS_IMAGE|是否逻辑||是||
|模型额外参数|EXTRA_PARAMS|长文本，没有长度限制|1048576|是||
|模型标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|最大上下文长度（token）|MAX_CONTEXT_TOKENS|整型||是||
|最大输出长度|MAX_OUTPUT_TOKENS|整型||是||
|模型能力|MODEL_CAPABILITY|[多项选择(文本值)](index/dictionary_index#model_capability "模型能力")|2000|是||
|模型类别|MODEL_CATEGORY|[单项选择(文本值)](index/dictionary_index#model_category "模型类别")|60|是||
|模型名称|NAME|文本，可指定长度|200|是||
|模型提供商|PROVIDER|[单项选择(文本值)](index/dictionary_index#ai_model_provider "AI模型提供商")|60|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_AI_AGENT_AI_MODEL_AI_MODEL_ID](der/DER1N_AI_AGENT_AI_MODEL_AI_MODEL_ID)|[智能体(AI_AGENT)](module/ai/ai_agent)|1:N关系||
|[DER1N_AI_AGENT_CONTEXT_AI_MODEL_AI_MODEL_ID](der/DER1N_AI_AGENT_CONTEXT_AI_MODEL_AI_MODEL_ID)|[智能体业务上下文(AI_AGENT_CONTEXT)](module/ai/ai_agent_context)|1:N关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_AI_MODEL_AI_CREDENTIAL_AI_CREDENTIAL_ID](der/DER1N_AI_MODEL_AI_CREDENTIAL_AI_CREDENTIAL_ID)|[AI凭证(AI_CREDENTIAL)](module/ai/ai_credential)|1:N关系||

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

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[获取Cloud配置](module/ai/ai_model/logic/get_cloud_config)|get_cloud_config|无|||

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[DEFAULT](module/ai/ai_model/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ai/ai_model/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[DEFAULT](module/ai/ai_model/dataset/Default)|DEFAULT|数据查询|是|||

## 数据权限

##### 全部数据（读） :id=ai_model-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 全部数据（读写） :id=ai_model-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `CREATE`
* `UPDATE`
* `DELETE`
* `READ`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_AI_CREDENTIAL_ID_EQ|AI凭证标识|EQ||
|N_AI_CREDENTIAL_NAME_EQ|AI凭证名称|EQ||
|N_AI_CREDENTIAL_NAME_LIKE|AI凭证名称|LIKE||
|N_ID_EQ|模型标识|EQ||
|N_NAME_LIKE|模型名称|LIKE||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/ai/ai_model?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_model?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_model?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_model?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_model?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_model?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_model?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_model?id=搜索模式`">
  搜索模式
</el-anchor-link>
</el-anchor>
</div>

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {
show_der:'major',


      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>