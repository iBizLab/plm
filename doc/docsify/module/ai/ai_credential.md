# AI凭证(ai_credential)  <!-- {docsify-ignore-all} -->


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|访问密钥|ACCESS_KEY|长文本，没有长度限制|1048576|是||
|启用凭证|ACTIVE|是否逻辑||否||
|api密钥|API_KEY|文本，可指定长度|200|是||
|Bearer令牌|BEARER_TOKEN|长文本，没有长度限制|1048576|是||
|客户端ID|CLIENT_ID|文本，可指定长度|200|是||
|客户端密钥|CLIENT_SECRET|长文本，没有长度限制|1048576|是||
|代码标识|CODE_NAME|文本，可指定长度|100|否||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|凭证类型|CREDENTIAL_TYPE|[单项选择(文本值)](index/dictionary_index#credential_type "凭证类型")|200|否||
|用途说明|DESCRIPTION|长文本，长度1000|2000|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|名称|NAME|文本，可指定长度|200|是||
|模型提供商|PROVIDER|[单项选择(文本值)](index/dictionary_index#ai_model_provider "AI模型提供商")|200|否||
|区域|REGION|文本，可指定长度|100|是||
|权限范围|SCOPE|文本，可指定长度|100|是||
|安全密钥|SECRET_KEY|长文本，没有长度限制|1048576|是||
|令牌地址|TOKEN_URL|长文本，长度1000|2000|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_AI_MODEL_AI_CREDENTIAL_AI_CREDENTIAL_ID](der/DER1N_AI_MODEL_AI_CREDENTIAL_AI_CREDENTIAL_ID)|[AI大模型(AI_MODEL)](module/ai/ai_model)|1:N关系||


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
|[获取Cloud配置](module/ai/ai_credential/logic/get_cloud_config)|get_cloud_config|无|||

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[DEFAULT](module/ai/ai_credential/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ai/ai_credential/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[DEFAULT](module/ai/ai_credential/dataset/Default)|DEFAULT|数据查询|是|||

## 数据权限

##### 全部数据（读） :id=ai_credential-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 全部数据（读写） :id=ai_credential-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`
* `DELETE`
* `UPDATE`
* `CREATE`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/ai/ai_credential?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_credential?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_credential?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_credential?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_credential?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_credential?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_credential?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_credential?id=搜索模式`">
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