# 共享空间(shared_space)  <!-- {docsify-ignore-all} -->


用于空间对外共享


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|访问密码|ACCESS_PASSWORD|文本，可指定长度|100|是||
|共享有效期|EXPIRATION_DATE|日期型||是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|是否开启共享|IS_SHARED|[单项选择(文本值)](index/dictionary_index#space_shared_status "空间共享状态")|60|是||
|空间名称|NAME|文本，可指定长度|200|否||
|所属|SCOPE_TYPE|[单项选择(文本值)](index/dictionary_index#user_scope_type "所属类型（包含个人）")|60|是||
|共享人|SHARED_BY|文本，可指定长度|100|是||
|共享页面标识|SHARED_PAGES|多项选择(文本值)|4000|是||
|共享时间|SHARED_TIME|日期时间型||是||
|共享展示图标|SHOW_LOGO|文本，可指定长度|100|是||
|共享展示标题|SHOW_TITLE|文本，可指定长度|100|是||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DERCUSTOM_SHARED_SPACE_PAGE](der/DERCUSTOM_SHARED_SPACE_PAGE)|[页面(PAGE)](module/Wiki/article_page)|自定义关系||


</el-tab-pane>
</el-tabs>
</el-row>

## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持||||
|Get|Get|内置方法|默认|不支持|[附加操作](index/action_logic_index#shared_space_Get)|||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||
|校验共享访问密码|check_access_password|[实体处理逻辑](module/Wiki/shared_space/logic/access_password "校验共享访问密码")|默认|不支持||||
|检验共享页面|check_shared|[实体处理逻辑](module/Wiki/shared_space/logic/check_shared "检验共享页面")|默认|不支持||||
|关闭共享|closed_shared|[实体处理逻辑](module/Wiki/shared_space/logic/closed_shared "关闭共享")|默认|不支持||||
|共享设置|shared_setting|[实体处理逻辑](module/Wiki/shared_space/logic/shared_setting "共享设置")|默认|不支持|[附加操作](index/action_logic_index#shared_space_shared_setting)|||
|共享空间信息|shared_space_info|[实体处理逻辑](module/Wiki/shared_space/logic/shared_page_info "获取共享空间信息")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[共享设置](module/Wiki/shared_space/logic/shared_setting)|shared_setting|无||共享设置|
|[关闭共享](module/Wiki/shared_space/logic/closed_shared)|closed_shared|无||关闭共享|
|[校验共享访问密码](module/Wiki/shared_space/logic/access_password)|access_password|无||校验共享访问密码|
|[检验共享页面](module/Wiki/shared_space/logic/check_shared)|check_shared|无||共享页面打开前，判断是否设置密码和有效期|
|[置空共享访问密码](module/Wiki/shared_space/logic/reset_shared_pwd)|reset_shared_pwd|无||默认Get行为Reset共享访问密码|
|[获取共享空间信息](module/Wiki/shared_space/logic/shared_page_info)|shared_page_info|无||获取共享空间信息|
|[获取共享空间标题](module/Wiki/shared_space/logic/get_shared_title)|get_shared_title|无||获取共享空间顶部标题|
|[获取共享链接](module/Wiki/shared_space/logic/shared_url)|shared_url|无||获取共享空间链接|
|[访问密码加密](module/Wiki/shared_space/logic/encrypt_access_key)|encrypt_access_key|无||访问密码加密|
|[访问密码解密](module/Wiki/shared_space/logic/decrypt_access_key)|decrypt_access_key|无||访问密码解密|

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/Wiki/shared_space/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Wiki/shared_space/query/View)|VIEW|否|否 |否 ||
|[管理员(admin)](module/Wiki/shared_space/query/admin)|admin|否|否 |否 ||
|[共享空间(shared)](module/Wiki/shared_space/query/shared)|shared|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Wiki/shared_space/dataset/Default)|DEFAULT|数据查询|是|||
|[管理员(admin)](module/Wiki/shared_space/dataset/admin)|admin|数据查询|否|||
|[共享空间(shared)](module/Wiki/shared_space/dataset/shared)|shared|数据查询|否|||

## 数据权限

##### 管理员（读写） :id=shared_space-ADMIN_RW

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[管理员(admin)](module/Wiki/shared_space#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `READ`
* `UPDATE`



##### 只读用户（读） :id=shared_space-USER_R

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[共享空间(shared)](module/Wiki/shared_space#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `READ`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|标识|EQ||
|N_IS_SHARED_EQ|是否开启共享|EQ||
|N_NAME_LIKE|空间名称|LIKE||
|N_SCOPE_TYPE_EQ|所属|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 空间共享设置(配置中心) | space_shared_setting_center | 共享设置 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[共享空间](app/view/shared_space_setting_center_view)</details>||
| 关闭共享 | close_shared | 关闭共享 |单项数据（主键）|<details><summary>后台调用</summary>[closed_shared](#行为)||
| 复制共享链接 | copy_shared_url | 复制链接 |单项数据|用户自定义||
| 关闭共享（表格操作列） | close_shared_in_grid | 关闭共享 |单项数据（主键）|<details><summary>后台调用</summary>[closed_shared](#行为)||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[后续刷新](module/Wiki/shared_space/uilogic/refresh)|refresh|后续刷新空间共享视图|
|[复制共享链接](module/Wiki/shared_space/uilogic/copy_shared_url)|copy_shared_url|复制共享空间链接|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Wiki/shared_space?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/shared_space?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/shared_space?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/shared_space?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/shared_space?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/shared_space?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/shared_space?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/shared_space?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/shared_space?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/shared_space?id=界面逻辑`">
  界面逻辑
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