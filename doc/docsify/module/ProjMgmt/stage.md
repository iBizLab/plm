# 发布阶段(stage)  <!-- {docsify-ignore-all} -->


跟踪项目发布的各个阶段。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|颜色|COLOR|文本，可指定长度|100|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|是否发布当前阶段|IS_CURRENT|是否逻辑||是||
|名称|NAME|文本，可指定长度|200|是||
|操作时间|OPERATED_TIME|日期型||是||
|父标识|PID|外键值|100|是||
|父名称|PNAME|外键值文本|200|是||
|父颜色|P_COLOR|外键值附加数据|100|是||
|父阶段排序|P_SEQUENCE|外键值附加数据||是||
|父阶段类型|P_TYPE|[外键值附加数据](index/dictionary_index#stage_type "阶段类型")|100|是||
|项目发布标识|RELEASE_ID|外键值|100|是||
|排序|SEQUENCE|数值||是||
|阶段类型|TYPE|[文本，可指定长度](index/dictionary_index#stage_type "阶段类型")|100|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||


###### 索引

<el-row>
<el-tabs v-model="show_index">

<el-tab-pane label="STAGEDERINDEX" name="index_I4C4F848D594F43719">

|    中文名col150 | 属性名称col200           | 包含属性col100 | 排序方向col100 | 索引长度col100 | 备注col600 |
| --------   |------------| -----  | -----  | :----: | -------- |
|父标识|PID|false|升序|-1||

</el-tab-pane>

</el-tabs>
</el-row>

## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_STAGE_STAGE_PID](der/DER1N_STAGE_STAGE_PID)|[发布阶段(STAGE)](module/ProjMgmt/stage)|1:N关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_STAGE_RELEASE_RELEASE_ID](der/DER1N_STAGE_RELEASE_RELEASE_ID)|[项目发布(RELEASE)](module/ProjMgmt/release)|1:N关系||
|[DER1N_STAGE_STAGE_PID](der/DER1N_STAGE_STAGE_PID)|[发布阶段(STAGE)](module/ProjMgmt/stage)|1:N关系||

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
|添加全局预定义阶段|add_predefined|[实体处理逻辑](module/ProjMgmt/stage/logic/add_predefined "添加系统预定义阶段")|默认|不支持||||
|删除发布阶段|del|[实体处理逻辑](module/ProjMgmt/stage/logic/del "删除发布阶段")|默认|不支持||||
|移动排序|move_order|用户自定义|默认|不支持||||
|无操作|nothing|[实体处理逻辑](module/ProjMgmt/stage/logic/nothing "无操作")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[删除发布阶段](module/ProjMgmt/stage/logic/del)|del|无||删除发布阶段并替换|
|[无操作](module/ProjMgmt/stage/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[添加系统预定义阶段](module/ProjMgmt/stage/logic/add_predefined)|add_predefined|无||添加系统预定义阶段|

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/ProjMgmt/stage/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ProjMgmt/stage/query/View)|VIEW|否|否 |否 ||
|[当前项目下的发布阶段(cur_project)](module/ProjMgmt/stage/query/cur_project)|cur_project|否|否 |否 ||
|[发布所属阶段(cur_stage)](module/ProjMgmt/stage/query/cur_stage)|cur_stage|否|否 |否 ||
|[发布所属阶段(owner)](module/ProjMgmt/stage/query/owner)|owner|否|否 |否 ||
|[全局级发布阶段(system)](module/ProjMgmt/stage/query/system)|system|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/ProjMgmt/stage/dataset/Default)|DEFAULT|数据查询|是|||
|[全局阶段和所属阶段(cur_owner_sys)](module/ProjMgmt/stage/dataset/cur_owner_sys)|cur_owner_sys|数据查询|否|||
|[当前项目下的发布阶段(cur_project)](module/ProjMgmt/stage/dataset/cur_project)|cur_project|数据查询|否|||
|[发布所属阶段(cur_stage)](module/ProjMgmt/stage/dataset/cur_stage)|cur_stage|数据查询|否|||
|[发布所属阶段(owner)](module/ProjMgmt/stage/dataset/owner)|owner|数据查询|否|||
|[全局级发布阶段(system)](module/ProjMgmt/stage/dataset/system)|system|数据查询|否|||

## 数据权限

##### 全部数据（读） :id=stage-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ(项目发布(READ))`



##### 全部数据（读写） :id=stage-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ(项目发布(READ))`
* `CREATE`
* `UPDATE`
* `DELETE`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_IN|标识|IN||
|N_ID_NOTEQ|标识|NOTEQ||
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_PID_EQ|父标识|EQ||
|N_PNAME_EQ|父名称|EQ||
|N_PNAME_LIKE|父名称|LIKE||
|N_RELEASE_ID_EQ|项目发布标识|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 编辑阶段 | edit_stage | 编辑阶段 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[修改阶段](app/view/stage_update_view)</details>||
| 删除阶段 | del | 删除阶段 |单项数据|<details><summary>后台调用</summary>[del](#行为)||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/ProjMgmt/stage?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/stage?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/stage?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/stage?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/stage?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/stage?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/stage?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/stage?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/stage?id=界面行为`">
  界面行为
</el-anchor-link>
</el-anchor>
</div>

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {
show_der:'major',

show_index:'index_I4C4F848D594F43719',
      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>