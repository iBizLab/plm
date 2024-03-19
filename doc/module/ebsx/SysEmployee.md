# 人员(SysEmployee)  <!-- {docsify-ignore-all} -->

ebsx

## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|用户标识|USERID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/ebsx/SysEmployee/value_rule/UserId#default)||||
|用户全局名|USERNAME|文本，可指定长度|100|[默认规则](module/ebsx/SysEmployee/value_rule/UserName#default)||||
|姓名|PERSONNAME|文本，可指定长度|100|[默认规则](module/ebsx/SysEmployee/value_rule/PersonName#default)||√||
|用户工号|USERCODE|文本，可指定长度|100|[默认规则](module/ebsx/SysEmployee/value_rule/UserCode#default)||||
|登录名|LOGINNAME|文本，可指定长度|100|[默认规则](module/ebsx/SysEmployee/value_rule/LoginName#default)||||
|密码|PASSWORD|文本，可指定长度|100|[默认规则](module/ebsx/SysEmployee/value_rule/Password#default)||||
|区属|DOMAINS|文本，可指定长度|100|[默认规则](module/ebsx/SysEmployee/value_rule/Domains#default)||||
|主部门|MDEPTID|文本，可指定长度|100|[默认规则](module/ebsx/SysEmployee/value_rule/MDeptId#default)||||
|主部门名称|MDEPTNAME|文本，可指定长度|100|[默认规则](module/ebsx/SysEmployee/value_rule/MDeptName#default)||||
|业务编码|BCODE|文本，可指定长度|100|[默认规则](module/ebsx/SysEmployee/value_rule/BCode#default)||||
|岗位标识|POSTID|文本，可指定长度|100|[默认规则](module/ebsx/SysEmployee/value_rule/PostId#default)||||
|岗位名称|POSTNAME|文本，可指定长度|100|[默认规则](module/ebsx/SysEmployee/value_rule/PostName#default)||||
|单位|ORGID|文本，可指定长度|100|[默认规则](module/ebsx/SysEmployee/value_rule/OrgId#default)||||
|单位名称|ORGNAME|文本，可指定长度|100|[默认规则](module/ebsx/SysEmployee/value_rule/OrgName#default)||||
|昵称别名|NICKNAME|文本，可指定长度|100|[默认规则](module/ebsx/SysEmployee/value_rule/NickName#default)||||
|性别|SEX|单项选择(文本值)|20|[默认规则](module/ebsx/SysEmployee/value_rule/Sex#default)||||
|证件号码|CERTCODE|文本，可指定长度|100|[默认规则](module/ebsx/SysEmployee/value_rule/CertCode#default)||||
|手机号|PHONE|文本，可指定长度|100|[默认规则](module/ebsx/SysEmployee/value_rule/Phone#default)||||
|出生日期|BIRTHDAY|日期型|0|||||
|邮件|EMAIL|文本，可指定长度|100|[默认规则](module/ebsx/SysEmployee/value_rule/Email#default)||||
|社交账号|AVATAR|文本，可指定长度|100|[默认规则](module/ebsx/SysEmployee/value_rule/Avatar#default)||||
|地址|ADDR|文本，可指定长度|255|[默认规则](module/ebsx/SysEmployee/value_rule/Addr#default)||||
|照片|USERICON|文本，可指定长度|255|[默认规则](module/ebsx/SysEmployee/value_rule/UserIcon#default)||||
|ip地址|IPADDR|文本，可指定长度|100|[默认规则](module/ebsx/SysEmployee/value_rule/IPAddr#default)||||
|样式|THEME|文本，可指定长度|100|[默认规则](module/ebsx/SysEmployee/value_rule/Theme#default)||||
|语言|LANG|文本，可指定长度|100|[默认规则](module/ebsx/SysEmployee/value_rule/Lang#default)||||
|字号|FONTSIZE|文本，可指定长度|10|[默认规则](module/ebsx/SysEmployee/value_rule/FontSize#default)||||
|备注|MEMO|长文本，长度1000|1000|[默认规则](module/ebsx/SysEmployee/value_rule/Memo#default)||||
|保留17|RESERVER17|大数值|0|||||
|保留18|RESERVER18|大数值|0|||||
|保留15|RESERVER15|数值|0|||||
|保留12|RESERVER12|整型|0|||||
|保留16|RESERVER16|数值|0|||||
|保留14|RESERVER14|整型|0|||||
|保留11|RESERVER11|整型|0|||||
|保留13|RESERVER13|整型|0|||||
|保留7|RESERVER7|文本，可指定长度|1000|[默认规则](module/ebsx/SysEmployee/value_rule/Reserver7#default)||||
|保留4|RESERVER4|文本，可指定长度|100|[默认规则](module/ebsx/SysEmployee/value_rule/Reserver4#default)||||
|保留2|RESERVER2|文本，可指定长度|100|[默认规则](module/ebsx/SysEmployee/value_rule/Reserver2#default)||||
|保留5|RESERVER5|文本，可指定长度|200|[默认规则](module/ebsx/SysEmployee/value_rule/Reserver5#default)||||
|保留3|RESERVER3|文本，可指定长度|100|[默认规则](module/ebsx/SysEmployee/value_rule/Reserver3#default)||||
|保留6|RESERVER6|文本，可指定长度|200|[默认规则](module/ebsx/SysEmployee/value_rule/Reserver6#default)||||
|保留|RESERVER|文本，可指定长度|255|[默认规则](module/ebsx/SysEmployee/value_rule/Reserver#default)||||
|保留8|RESERVER8|文本，可指定长度|1000|[默认规则](module/ebsx/SysEmployee/value_rule/Reserver8#default)||||
|保留20|RESERVER20|日期时间型|0|||||
|保留19|RESERVER19|日期时间型|0|||||
|保留9|RESERVER9|长文本，没有长度限制|1048576|[默认规则](module/ebsx/SysEmployee/value_rule/Reserver9#default)||||
|保留10|RESERVER10|长文本，没有长度限制|1048576|[默认规则](module/ebsx/SysEmployee/value_rule/Reserver10#default)||||
|排序|SHOWORDER|整型|0|||||
|管理员|SUPERUSER|是否逻辑|0|||||
|逻辑有效|ENABLE|是否逻辑|0|||||
|创建时间|CREATEDATE|日期时间型|0|||||
|最后修改时间|UPDATEDATE|日期时间型|0|||||
|人员状态|STATE|单项选择(文本值)|10|[默认规则](module/ebsx/SysEmployee/value_rule/State#default)||||
|消息类型|MSGTYPE|多项选择(数值)|0|||||
|钉钉用户标识|DDUNIONID|文本，可指定长度|100|[默认规则](module/ebsx/SysEmployee/value_rule/DDUnionId#default)||||
|UAA用户标识|UAAUSERID|文本，可指定长度|100|[默认规则](module/ebsx/SysEmployee/value_rule/UAAUserId#default)||||
|微信用户标识|WXWORKUNIONID|文本，可指定长度|100|[默认规则](module/ebsx/SysEmployee/value_rule/WXWorkUnionId#default)||||
|企业微信用户标识|WXWORKUSERID|文本，可指定长度|100|[默认规则](module/ebsx/SysEmployee/value_rule/WXWorkUserId#default)||||
|钉钉用户标识|DDUSERID|文本，可指定长度|100|[默认规则](module/ebsx/SysEmployee/value_rule/DDUserId#default)||||


## 行为
| 中文名    | 代码名    | 类型    | 事务   | 批处理   | 附加操作  | 插件    |  备注  |
| -------- |---------- |----------- |------------|----------|---------| ----- | ----- |
|Create|Create|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|Get|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|变更密码|ChangePwd|用户自定义|默认|不支持||||
|CheckKey|CheckKey|内置方法|默认|不支持||||
|初始化密码|InitPwd|用户自定义|默认|不支持||||
|Save|Save|内置方法|默认|不支持||||




## 数据查询
| 中文名    | 代码名    | 默认查询 | 是否权限使用 | 自定义SQL |  备注|
| --------  | --------   | :---:  | :---:  | :---:  |----- |
|[数据查询(DEFAULT)](module/ebsx/SysEmployee/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ebsx/SysEmployee/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[数据集(DEFAULT)](module/ebsx/SysEmployee/dataset/Default)|DEFAULT|数据查询|是|||




## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_USERID_EQ|用户标识|EQ|
|N_PERSONNAME_LIKE|姓名|LIKE|
|N_SEX_EQ|性别|EQ|
|N_STATE_EQ|人员状态|EQ|




