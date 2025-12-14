# AI调用工具(ai_tool)  <!-- {docsify-ignore-all} -->


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|访问密钥|ACCESS_KEY|长文本，没有长度限制|1048576|是||
|认证方式|API_AUTH_TYPE|[单项选择(文本值)](index/dictionary_index#api_auth_type_codelist "认证方式")|60|是||
|请求头|API_HEADERS|文本，可指定长度|2000|是||
|api密钥|API_KEY|文本，可指定长度|200|是||
|HTTP 方法|API_METHOD|[单项选择(文本值)](index/dictionary_index#api_method_codelist "HTTP 方法")|60|是||
|接口地址|API_URL|文本，可指定长度|500|是||
|Bearer令牌|BEARER_TOKEN|长文本，没有长度限制|1048576|是||
|客户端ID|CLIENT_ID|文本，可指定长度|200|是||
|客户端密钥|CLIENT_SECRET|长文本，没有长度限制|1048576|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|AI调用工具标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|输入参数 Schema|INPUT_SCHEMA|长文本，没有长度限制|1048576|否||
|AI调用工具名称|NAME|文本，可指定长度|200|是||
|安全密钥|SECRET_KEY|长文本，没有长度限制|1048576|是||
|超时时间|TIMEOUT|整型||是||
|令牌地址|TOKEN_URL|长文本，长度1000|2000|是||
|工具标记|TOOL_TAG|文本，可指定长度|200|是||
|工具类型|TOOL_TYPE|[单项选择(文本值)](index/dictionary_index#tool_type_codelist "Tool类型")|60|否||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_AI_AGENT_TOOL_REL_AI_TOOL_AI_TOOL_ID](der/DER1N_AI_AGENT_TOOL_REL_AI_TOOL_AI_TOOL_ID)|[智能体工具引用(AI_AGENT_TOOL_REL)](module/ai/ai_agent_tool_rel)|1:N关系||


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

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[DEFAULT](module/ai/ai_tool/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ai/ai_tool/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[DEFAULT](module/ai/ai_tool/dataset/Default)|DEFAULT|数据查询|是|||

## 数据权限

##### 全部数据（读） :id=ai_tool-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 全部数据（读写） :id=ai_tool-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `UPDATE`
* `DELETE`
* `CREATE`
* `READ`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|AI调用工具标识|EQ||
|N_NAME_LIKE|AI调用工具名称|LIKE||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/ai/ai_tool?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_tool?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_tool?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_tool?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_tool?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_tool?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_tool?id=搜索模式`">
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