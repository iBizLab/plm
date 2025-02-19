# 登录日志(login_log)  <!-- {docsify-ignore-all} -->


存储员工登录信息


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|活跃成员数|ACTIVE_MEMBERS|文本，可指定长度|60|是||
|活跃率|ACTIVE_RATE|文本，可指定长度|60|是||
|认证结果|AUTHCODE|[单项选择(文本值)](index/dictionary_index#AuthCode "登录结果")|60|是||
|登录时间|AUTHTIME|日期时间型||是||
|城市|CITY|文本，可指定长度|100|是||
|国家|COUNTRY|文本，可指定长度|100|是||
|区/县|COUNTY|文本，可指定长度|500|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|IP地址|IP|文本，可指定长度|100|是||
|网络提供商|ISP|文本，可指定长度|100|是||
|登录方式|LOGIN_METHOD|文本，可指定长度|100|是||
|名称|NAME|文本，可指定长度|200|是||
|省|PROVINCE|文本，可指定长度|100|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||
|客户端|USER_AGENT|长文本，长度1000|2000|是||
|用户标识|USER_ID|文本，可指定长度|100|是||
|用户名称|USER_NAME|文本，可指定长度|100|是||


## 映射
| 名称col150    | 映射实体col200   | 备注col900  |
| -------- |----------  |----- |
|[ebsx_admin_mapping](module/Base/login_log/demap/ebsx_admin_mapping)|[认证日志(AUTH_LOG_ADMIN)](module/ebsx/auth_log_admin)||

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
|获取活跃成员数据|active_member|[实体处理逻辑](module/Base/login_log/logic/calc_active_member_info "计算活跃成员数据信息")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[计算活跃成员图表数据](module/Base/login_log/logic/calc_active_chart_datas)|calc_active_chart_datas|无||计算活跃成员模块下的图表所需要的数据|
|[计算活跃成员数据信息](module/Base/login_log/logic/calc_active_member_info)|calc_active_member_info|无||获取活跃成员下的昨日活跃人数、昨日活跃率、活跃总人数、近七日活跃人数、近七日活跃率的数值|

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/Base/login_log/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/login_log/query/View)|VIEW|否|否 |否 ||
|[当前用户(cur_user)](module/Base/login_log/query/cur_user)|cur_user|否|否 |否 ||
|[排重用户(distinct_userid)](module/Base/login_log/query/distinct_userid)|distinct_userid|否|否 |否 ||
|[获取活跃人员图表数据(echarts_datas)](module/Base/login_log/query/echarts_datas)|echarts_datas|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/login_log/dataset/Default)|DEFAULT|数据查询|是|||
|[计算活跃成员图表数据(CALC_CHART_DATAS)](module/Base/login_log/dataset/calc_chart_datas)|CALC_CHART_DATAS|[实体逻辑](module/Base/login_log/logic/calc_active_chart_datas)|否|||
|[当前用户(CUR_USER)](module/Base/login_log/dataset/cur_user)|CUR_USER|数据查询|否|||
|[排重用户(DISTINCT_USERID)](module/Base/login_log/dataset/distinct_userid)|DISTINCT_USERID|数据查询|否|||
|[获取活跃人员图表数据(ECHARTS_DATAS)](module/Base/login_log/dataset/echarts_datas)|ECHARTS_DATAS|数据查询|否|||

## 数据权限

##### 全部数据（读） :id=login_log-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 全部数据（读写） :id=login_log-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `CREATE`
* `DELETE`
* `UPDATE`
* `READ`



##### 当前用户（读） :id=login_log-USER_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_AUTHCODE_EQ|认证结果|EQ||
|N_AUTHTIME_GTANDEQ|登录时间|GTANDEQ||
|N_AUTHTIME_LTANDEQ|登录时间|LTANDEQ||
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[计算活跃成员数据信息](module/Base/login_log/uilogic/calc_active_member_info)|calc_active_member_info|获取活跃成员下的昨日活跃人数、昨日活跃率、活跃总人数的数值|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Base/login_log?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/login_log?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/login_log?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/login_log?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/login_log?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/login_log?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/login_log?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/login_log?id=界面逻辑`">
  界面逻辑
</el-anchor-link>
</el-anchor>
</div>

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {



      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>