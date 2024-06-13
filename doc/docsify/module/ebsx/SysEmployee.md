# 人员(SysEmployee)  <!-- {docsify-ignore-all} -->


人员映射实体


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|地址|ADDR|文本，可指定长度|255|是||
|社交账号|AVATAR|文本，可指定长度|100|是||
|业务编码|BCODE|文本，可指定长度|100|是||
|出生日期|BIRTHDAY|日期型||是||
|证件号码|CERTCODE|文本，可指定长度|100|是||
|创建时间|CREATEDATE|日期时间型||是||
|钉钉用户标识|DDUNIONID|文本，可指定长度|100|是||
|钉钉用户标识|DDUSERID|文本，可指定长度|100|是||
|区属|DOMAINS|文本，可指定长度|100|是||
|邮件|EMAIL|文本，可指定长度|100|是||
|逻辑有效|ENABLE|是否逻辑||是||
|字号|FONTSIZE|文本，可指定长度|10|是||
|ip地址|IPADDR|文本，可指定长度|100|是||
|语言|LANG|文本，可指定长度|100|是||
|登录名|LOGINNAME|文本，可指定长度|100|否||
|主部门|MDEPTID|文本，可指定长度|100|是||
|主部门名称|MDEPTNAME|文本，可指定长度|100|是||
|备注|MEMO|长文本，长度1000|1000|是||
|消息类型|MSGTYPE|多项选择(数值)||是||
|昵称别名|NICKNAME|文本，可指定长度|100|是||
|单位|ORGID|文本，可指定长度|100|是||
|单位名称|ORGNAME|文本，可指定长度|100|是||
|密码|PASSWORD|文本，可指定长度|100|是||
|姓名|PERSONNAME|文本，可指定长度|100|否||
|手机号|PHONE|文本，可指定长度|100|是||
|岗位标识|POSTID|文本，可指定长度|100|是||
|岗位名称|POSTNAME|文本，可指定长度|100|是||
|统计|REPORT_FLAG|是否逻辑||是||
|保留|RESERVER|文本，可指定长度|255|是||
|保留10|RESERVER10|长文本，没有长度限制|1048576|是||
|保留11|RESERVER11|整型||是||
|保留12|RESERVER12|整型||是||
|保留13|RESERVER13|整型||是||
|保留14|RESERVER14|整型||是||
|保留15|RESERVER15|数值||是||
|保留16|RESERVER16|数值||是||
|保留17|RESERVER17|大数值||是||
|保留18|RESERVER18|大数值||是||
|保留19|RESERVER19|日期时间型||是||
|保留2|RESERVER2|文本，可指定长度|100|是||
|保留20|RESERVER20|日期时间型||是||
|保留3|RESERVER3|文本，可指定长度|100|是||
|保留4|RESERVER4|文本，可指定长度|100|是||
|保留5|RESERVER5|文本，可指定长度|200|是||
|保留6|RESERVER6|文本，可指定长度|200|是||
|保留7|RESERVER7|文本，可指定长度|1000|是||
|保留8|RESERVER8|文本，可指定长度|1000|是||
|保留9|RESERVER9|长文本，没有长度限制|1048576|是||
|性别|SEX|单项选择(文本值)|20|是||
|排序|SHOWORDER|整型||是||
|人员状态|STATE|单项选择(文本值)|10|是||
|管理员|SUPERUSER|是否逻辑||是||
|样式|THEME|文本，可指定长度|100|是||
|UAA用户标识|UAAUSERID|文本，可指定长度|100|是||
|最后修改时间|UPDATEDATE|日期时间型||是||
|用户工号|USERCODE|文本，可指定长度|100|否||
|照片|USERICON|文本，可指定长度|255|是||
|用户标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|USERID|全局唯一标识，文本类型，用户不可见|100|否||
|用户全局名|USERNAME|文本，可指定长度|100|是||
|微信用户标识|WXWORKUNIONID|文本，可指定长度|100|是||
|企业微信用户标识|WXWORKUSERID|文本，可指定长度|100|是||


## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|变更密码|ChangePwd|用户自定义|默认|不支持||||
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持||||
|Get|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|初始化密码|InitPwd|用户自定义|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||

## 功能配置
| 中文名col200    | 功能类型col150    | 功能实体col200 |  备注col700|
| --------  | :----:    | ---- |----- |
|存储扩展|动态存储|[扩展存储(EXTEND_STORAGE)](module/Base/extend_storage)||

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/ebsx/SysEmployee/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ebsx/SysEmployee/query/View)|VIEW|否|否 |否 ||
|[当前用户(user)](module/ebsx/SysEmployee/query/user)|user|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/ebsx/SysEmployee/dataset/Default)|DEFAULT|数据查询|是|||
|[当前用户(user)](module/ebsx/SysEmployee/dataset/user)|user|数据查询|否|||

## 数据权限

##### 全部数据（读写） :id=SysEmployee-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `DELETE`
* `READ`
* `UPDATE`
* `CREATE`



##### 普通用户（读写） :id=SysEmployee-USER_RW

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[当前用户(user)](module/ebsx/SysEmployee#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `READ`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_PERSONNAME_LIKE|姓名|LIKE||
|N_SEX_EQ|性别|EQ||
|N_STATE_EQ|人员状态|EQ||
|N_USERID_EQ|用户标识|EQ||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/ebsx/SysEmployee?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/ebsx/SysEmployee?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ebsx/SysEmployee?id=功能配置`">
  功能配置
</el-anchor-link>
<el-anchor-link :href="`#/module/ebsx/SysEmployee?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/ebsx/SysEmployee?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/ebsx/SysEmployee?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/ebsx/SysEmployee?id=搜索模式`">
  搜索模式
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