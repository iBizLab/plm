# 人员(SysEmployee) :id=SysEmployee
## 创建人员

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysemployees" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">userid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|用户标识|
|<el-row justify="space-between"><el-col :span="20">username</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户全局名|
|<el-row justify="space-between"><el-col :span="20">personname</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|姓名|
|<el-row justify="space-between"><el-col :span="20">usercode</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|用户工号|
|<el-row justify="space-between"><el-col :span="20">loginname</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|登录名|
|<el-row justify="space-between"><el-col :span="20">password</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|密码|
|<el-row justify="space-between"><el-col :span="20">domains</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|区属|
|<el-row justify="space-between"><el-col :span="20">mdeptid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|主部门|
|<el-row justify="space-between"><el-col :span="20">mdeptname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|主部门名称|
|<el-row justify="space-between"><el-col :span="20">bcode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|业务编码|
|<el-row justify="space-between"><el-col :span="20">postid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位标识|
|<el-row justify="space-between"><el-col :span="20">postname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位名称|
|<el-row justify="space-between"><el-col :span="20">orgid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|单位|
|<el-row justify="space-between"><el-col :span="20">orgname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|单位名称|
|<el-row justify="space-between"><el-col :span="20">nickname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|昵称别名|
|<el-row justify="space-between"><el-col :span="20">certcode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|证件号码|
|<el-row justify="space-between"><el-col :span="20">sex</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|性别|
|<el-row justify="space-between"><el-col :span="20">birthday</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|出生日期|
|<el-row justify="space-between"><el-col :span="20">phone</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|手机号|
|<el-row justify="space-between"><el-col :span="20">email</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|邮件|
|<el-row justify="space-between"><el-col :span="20">avatar</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|社交账号|
|<el-row justify="space-between"><el-col :span="20">addr</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|地址|
|<el-row justify="space-between"><el-col :span="20">usericon</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|照片|
|<el-row justify="space-between"><el-col :span="20">ipaddr</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|ip地址|
|<el-row justify="space-between"><el-col :span="20">theme</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|样式|
|<el-row justify="space-between"><el-col :span="20">lang</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|语言|
|<el-row justify="space-between"><el-col :span="20">fontsize</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|字号|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">reserver</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留|
|<el-row justify="space-between"><el-col :span="20">reserver10</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留10|
|<el-row justify="space-between"><el-col :span="20">reserver11</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|保留11|
|<el-row justify="space-between"><el-col :span="20">reserver12</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|保留12|
|<el-row justify="space-between"><el-col :span="20">reserver13</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|保留13|
|<el-row justify="space-between"><el-col :span="20">reserver14</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|保留14|
|<el-row justify="space-between"><el-col :span="20">reserver15</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|保留15|
|<el-row justify="space-between"><el-col :span="20">reserver16</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|保留16|
|<el-row justify="space-between"><el-col :span="20">reserver17</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|保留17|
|<el-row justify="space-between"><el-col :span="20">reserver18</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|保留18|
|<el-row justify="space-between"><el-col :span="20">reserver19</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|保留19|
|<el-row justify="space-between"><el-col :span="20">reserver2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留2|
|<el-row justify="space-between"><el-col :span="20">reserver20</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|保留20|
|<el-row justify="space-between"><el-col :span="20">reserver3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留3|
|<el-row justify="space-between"><el-col :span="20">reserver4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留4|
|<el-row justify="space-between"><el-col :span="20">reserver5</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留5|
|<el-row justify="space-between"><el-col :span="20">reserver6</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留6|
|<el-row justify="space-between"><el-col :span="20">reserver7</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留7|
|<el-row justify="space-between"><el-col :span="20">reserver8</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留8|
|<el-row justify="space-between"><el-col :span="20">reserver9</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留9|
|<el-row justify="space-between"><el-col :span="20">showorder</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|排序|
|<el-row justify="space-between"><el-col :span="20">superuser</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|管理员|
|<el-row justify="space-between"><el-col :span="20">report_flag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|统计|
|<el-row justify="space-between"><el-col :span="20">ddunionid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|钉钉用户标识|
|<el-row justify="space-between"><el-col :span="20">dduserid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|钉钉用户标识|
|<el-row justify="space-between"><el-col :span="20">msgtype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|消息类型|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|人员状态|
|<el-row justify="space-between"><el-col :span="20">uaauserid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|UAA用户标识|
|<el-row justify="space-between"><el-col :span="20">wxworkunionid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|微信用户标识|
|<el-row justify="space-between"><el-col :span="20">wxworkuserid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|企业微信用户标识|



##### 请求示例： {docsify-ignore}
```json
{
  "userid" : null,
  "username" : null,
  "personname" : null,
  "usercode" : null,
  "loginname" : null,
  "password" : null,
  "domains" : null,
  "mdeptid" : null,
  "mdeptname" : null,
  "bcode" : null,
  "postid" : null,
  "postname" : null,
  "orgid" : null,
  "orgname" : null,
  "nickname" : null,
  "certcode" : null,
  "sex" : null,
  "birthday" : null,
  "phone" : null,
  "email" : null,
  "avatar" : null,
  "addr" : null,
  "usericon" : null,
  "ipaddr" : null,
  "theme" : null,
  "lang" : null,
  "fontsize" : null,
  "memo" : null,
  "reserver" : null,
  "reserver10" : null,
  "reserver11" : null,
  "reserver12" : null,
  "reserver13" : null,
  "reserver14" : null,
  "reserver15" : null,
  "reserver16" : null,
  "reserver17" : null,
  "reserver18" : null,
  "reserver19" : null,
  "reserver2" : null,
  "reserver20" : null,
  "reserver3" : null,
  "reserver4" : null,
  "reserver5" : null,
  "reserver6" : null,
  "reserver7" : null,
  "reserver8" : null,
  "reserver9" : null,
  "showorder" : null,
  "superuser" : null,
  "createdate" : null,
  "updatedate" : null,
  "report_flag" : null,
  "ddunionid" : null,
  "dduserid" : null,
  "msgtype" : null,
  "state" : null,
  "uaauserid" : null,
  "wxworkunionid" : null,
  "wxworkuserid" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "userid" : null,
  "username" : null,
  "personname" : null,
  "usercode" : null,
  "loginname" : null,
  "password" : null,
  "domains" : null,
  "mdeptid" : null,
  "mdeptname" : null,
  "bcode" : null,
  "postid" : null,
  "postname" : null,
  "orgid" : null,
  "orgname" : null,
  "nickname" : null,
  "certcode" : null,
  "sex" : null,
  "birthday" : null,
  "phone" : null,
  "email" : null,
  "avatar" : null,
  "addr" : null,
  "usericon" : null,
  "ipaddr" : null,
  "theme" : null,
  "lang" : null,
  "fontsize" : null,
  "memo" : null,
  "reserver" : null,
  "reserver10" : null,
  "reserver11" : null,
  "reserver12" : null,
  "reserver13" : null,
  "reserver14" : null,
  "reserver15" : null,
  "reserver16" : null,
  "reserver17" : null,
  "reserver18" : null,
  "reserver19" : null,
  "reserver2" : null,
  "reserver20" : null,
  "reserver3" : null,
  "reserver4" : null,
  "reserver5" : null,
  "reserver6" : null,
  "reserver7" : null,
  "reserver8" : null,
  "reserver9" : null,
  "showorder" : null,
  "superuser" : null,
  "createdate" : null,
  "updatedate" : null,
  "report_flag" : null,
  "ddunionid" : null,
  "dduserid" : null,
  "msgtype" : null,
  "state" : null,
  "uaauserid" : null,
  "wxworkunionid" : null,
  "wxworkuserid" : null,
}

```

## 获取人员

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysemployees/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|用户标识|




##### 响应示例： {docsify-ignore}
```json

{
  "userid" : null,
  "username" : null,
  "personname" : null,
  "usercode" : null,
  "loginname" : null,
  "password" : null,
  "domains" : null,
  "mdeptid" : null,
  "mdeptname" : null,
  "bcode" : null,
  "postid" : null,
  "postname" : null,
  "orgid" : null,
  "orgname" : null,
  "nickname" : null,
  "certcode" : null,
  "sex" : null,
  "birthday" : null,
  "phone" : null,
  "email" : null,
  "avatar" : null,
  "addr" : null,
  "usericon" : null,
  "ipaddr" : null,
  "theme" : null,
  "lang" : null,
  "fontsize" : null,
  "memo" : null,
  "reserver" : null,
  "reserver10" : null,
  "reserver11" : null,
  "reserver12" : null,
  "reserver13" : null,
  "reserver14" : null,
  "reserver15" : null,
  "reserver16" : null,
  "reserver17" : null,
  "reserver18" : null,
  "reserver19" : null,
  "reserver2" : null,
  "reserver20" : null,
  "reserver3" : null,
  "reserver4" : null,
  "reserver5" : null,
  "reserver6" : null,
  "reserver7" : null,
  "reserver8" : null,
  "reserver9" : null,
  "showorder" : null,
  "superuser" : null,
  "createdate" : null,
  "updatedate" : null,
  "report_flag" : null,
  "ddunionid" : null,
  "dduserid" : null,
  "msgtype" : null,
  "state" : null,
  "uaauserid" : null,
  "wxworkunionid" : null,
  "wxworkuserid" : null,
}

```

## 删除人员

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysemployees/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`DELETE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|用户标识|





## 更新人员

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysemployees/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|用户标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">userid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|用户标识|
|<el-row justify="space-between"><el-col :span="20">username</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户全局名|
|<el-row justify="space-between"><el-col :span="20">personname</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|姓名|
|<el-row justify="space-between"><el-col :span="20">usercode</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|用户工号|
|<el-row justify="space-between"><el-col :span="20">loginname</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|登录名|
|<el-row justify="space-between"><el-col :span="20">password</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|密码|
|<el-row justify="space-between"><el-col :span="20">domains</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|区属|
|<el-row justify="space-between"><el-col :span="20">mdeptid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|主部门|
|<el-row justify="space-between"><el-col :span="20">mdeptname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|主部门名称|
|<el-row justify="space-between"><el-col :span="20">bcode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|业务编码|
|<el-row justify="space-between"><el-col :span="20">postid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位标识|
|<el-row justify="space-between"><el-col :span="20">postname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位名称|
|<el-row justify="space-between"><el-col :span="20">orgid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|单位|
|<el-row justify="space-between"><el-col :span="20">orgname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|单位名称|
|<el-row justify="space-between"><el-col :span="20">nickname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|昵称别名|
|<el-row justify="space-between"><el-col :span="20">certcode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|证件号码|
|<el-row justify="space-between"><el-col :span="20">sex</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|性别|
|<el-row justify="space-between"><el-col :span="20">birthday</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|出生日期|
|<el-row justify="space-between"><el-col :span="20">phone</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|手机号|
|<el-row justify="space-between"><el-col :span="20">email</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|邮件|
|<el-row justify="space-between"><el-col :span="20">avatar</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|社交账号|
|<el-row justify="space-between"><el-col :span="20">addr</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|地址|
|<el-row justify="space-between"><el-col :span="20">usericon</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|照片|
|<el-row justify="space-between"><el-col :span="20">ipaddr</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|ip地址|
|<el-row justify="space-between"><el-col :span="20">theme</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|样式|
|<el-row justify="space-between"><el-col :span="20">lang</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|语言|
|<el-row justify="space-between"><el-col :span="20">fontsize</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|字号|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">reserver</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留|
|<el-row justify="space-between"><el-col :span="20">reserver10</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留10|
|<el-row justify="space-between"><el-col :span="20">reserver11</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|保留11|
|<el-row justify="space-between"><el-col :span="20">reserver12</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|保留12|
|<el-row justify="space-between"><el-col :span="20">reserver13</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|保留13|
|<el-row justify="space-between"><el-col :span="20">reserver14</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|保留14|
|<el-row justify="space-between"><el-col :span="20">reserver15</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|保留15|
|<el-row justify="space-between"><el-col :span="20">reserver16</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|保留16|
|<el-row justify="space-between"><el-col :span="20">reserver17</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|保留17|
|<el-row justify="space-between"><el-col :span="20">reserver18</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|保留18|
|<el-row justify="space-between"><el-col :span="20">reserver19</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|保留19|
|<el-row justify="space-between"><el-col :span="20">reserver2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留2|
|<el-row justify="space-between"><el-col :span="20">reserver20</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|保留20|
|<el-row justify="space-between"><el-col :span="20">reserver3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留3|
|<el-row justify="space-between"><el-col :span="20">reserver4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留4|
|<el-row justify="space-between"><el-col :span="20">reserver5</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留5|
|<el-row justify="space-between"><el-col :span="20">reserver6</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留6|
|<el-row justify="space-between"><el-col :span="20">reserver7</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留7|
|<el-row justify="space-between"><el-col :span="20">reserver8</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留8|
|<el-row justify="space-between"><el-col :span="20">reserver9</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留9|
|<el-row justify="space-between"><el-col :span="20">showorder</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|排序|
|<el-row justify="space-between"><el-col :span="20">superuser</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|管理员|
|<el-row justify="space-between"><el-col :span="20">report_flag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|统计|
|<el-row justify="space-between"><el-col :span="20">ddunionid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|钉钉用户标识|
|<el-row justify="space-between"><el-col :span="20">dduserid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|钉钉用户标识|
|<el-row justify="space-between"><el-col :span="20">msgtype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|消息类型|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|人员状态|
|<el-row justify="space-between"><el-col :span="20">uaauserid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|UAA用户标识|
|<el-row justify="space-between"><el-col :span="20">wxworkunionid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|微信用户标识|
|<el-row justify="space-between"><el-col :span="20">wxworkuserid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|企业微信用户标识|



##### 请求示例： {docsify-ignore}
```json
{
  "userid" : null,
  "username" : null,
  "personname" : null,
  "usercode" : null,
  "loginname" : null,
  "password" : null,
  "domains" : null,
  "mdeptid" : null,
  "mdeptname" : null,
  "bcode" : null,
  "postid" : null,
  "postname" : null,
  "orgid" : null,
  "orgname" : null,
  "nickname" : null,
  "certcode" : null,
  "sex" : null,
  "birthday" : null,
  "phone" : null,
  "email" : null,
  "avatar" : null,
  "addr" : null,
  "usericon" : null,
  "ipaddr" : null,
  "theme" : null,
  "lang" : null,
  "fontsize" : null,
  "memo" : null,
  "reserver" : null,
  "reserver10" : null,
  "reserver11" : null,
  "reserver12" : null,
  "reserver13" : null,
  "reserver14" : null,
  "reserver15" : null,
  "reserver16" : null,
  "reserver17" : null,
  "reserver18" : null,
  "reserver19" : null,
  "reserver2" : null,
  "reserver20" : null,
  "reserver3" : null,
  "reserver4" : null,
  "reserver5" : null,
  "reserver6" : null,
  "reserver7" : null,
  "reserver8" : null,
  "reserver9" : null,
  "showorder" : null,
  "superuser" : null,
  "createdate" : null,
  "updatedate" : null,
  "report_flag" : null,
  "ddunionid" : null,
  "dduserid" : null,
  "msgtype" : null,
  "state" : null,
  "uaauserid" : null,
  "wxworkunionid" : null,
  "wxworkuserid" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "userid" : null,
  "username" : null,
  "personname" : null,
  "usercode" : null,
  "loginname" : null,
  "password" : null,
  "domains" : null,
  "mdeptid" : null,
  "mdeptname" : null,
  "bcode" : null,
  "postid" : null,
  "postname" : null,
  "orgid" : null,
  "orgname" : null,
  "nickname" : null,
  "certcode" : null,
  "sex" : null,
  "birthday" : null,
  "phone" : null,
  "email" : null,
  "avatar" : null,
  "addr" : null,
  "usericon" : null,
  "ipaddr" : null,
  "theme" : null,
  "lang" : null,
  "fontsize" : null,
  "memo" : null,
  "reserver" : null,
  "reserver10" : null,
  "reserver11" : null,
  "reserver12" : null,
  "reserver13" : null,
  "reserver14" : null,
  "reserver15" : null,
  "reserver16" : null,
  "reserver17" : null,
  "reserver18" : null,
  "reserver19" : null,
  "reserver2" : null,
  "reserver20" : null,
  "reserver3" : null,
  "reserver4" : null,
  "reserver5" : null,
  "reserver6" : null,
  "reserver7" : null,
  "reserver8" : null,
  "reserver9" : null,
  "showorder" : null,
  "superuser" : null,
  "createdate" : null,
  "updatedate" : null,
  "report_flag" : null,
  "ddunionid" : null,
  "dduserid" : null,
  "msgtype" : null,
  "state" : null,
  "uaauserid" : null,
  "wxworkunionid" : null,
  "wxworkuserid" : null,
}

```

## 变更密码

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysemployees/{key}/changepwd" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|用户标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">userid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|用户标识|
|<el-row justify="space-between"><el-col :span="20">username</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户全局名|
|<el-row justify="space-between"><el-col :span="20">personname</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|姓名|
|<el-row justify="space-between"><el-col :span="20">usercode</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|用户工号|
|<el-row justify="space-between"><el-col :span="20">loginname</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|登录名|
|<el-row justify="space-between"><el-col :span="20">password</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|密码|
|<el-row justify="space-between"><el-col :span="20">domains</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|区属|
|<el-row justify="space-between"><el-col :span="20">mdeptid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|主部门|
|<el-row justify="space-between"><el-col :span="20">mdeptname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|主部门名称|
|<el-row justify="space-between"><el-col :span="20">bcode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|业务编码|
|<el-row justify="space-between"><el-col :span="20">postid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位标识|
|<el-row justify="space-between"><el-col :span="20">postname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位名称|
|<el-row justify="space-between"><el-col :span="20">orgid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|单位|
|<el-row justify="space-between"><el-col :span="20">orgname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|单位名称|
|<el-row justify="space-between"><el-col :span="20">nickname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|昵称别名|
|<el-row justify="space-between"><el-col :span="20">certcode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|证件号码|
|<el-row justify="space-between"><el-col :span="20">sex</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|性别|
|<el-row justify="space-between"><el-col :span="20">birthday</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|出生日期|
|<el-row justify="space-between"><el-col :span="20">phone</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|手机号|
|<el-row justify="space-between"><el-col :span="20">email</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|邮件|
|<el-row justify="space-between"><el-col :span="20">avatar</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|社交账号|
|<el-row justify="space-between"><el-col :span="20">addr</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|地址|
|<el-row justify="space-between"><el-col :span="20">usericon</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|照片|
|<el-row justify="space-between"><el-col :span="20">ipaddr</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|ip地址|
|<el-row justify="space-between"><el-col :span="20">theme</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|样式|
|<el-row justify="space-between"><el-col :span="20">lang</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|语言|
|<el-row justify="space-between"><el-col :span="20">fontsize</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|字号|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">reserver</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留|
|<el-row justify="space-between"><el-col :span="20">reserver10</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留10|
|<el-row justify="space-between"><el-col :span="20">reserver11</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|保留11|
|<el-row justify="space-between"><el-col :span="20">reserver12</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|保留12|
|<el-row justify="space-between"><el-col :span="20">reserver13</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|保留13|
|<el-row justify="space-between"><el-col :span="20">reserver14</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|保留14|
|<el-row justify="space-between"><el-col :span="20">reserver15</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|保留15|
|<el-row justify="space-between"><el-col :span="20">reserver16</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|保留16|
|<el-row justify="space-between"><el-col :span="20">reserver17</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|保留17|
|<el-row justify="space-between"><el-col :span="20">reserver18</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|保留18|
|<el-row justify="space-between"><el-col :span="20">reserver19</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|保留19|
|<el-row justify="space-between"><el-col :span="20">reserver2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留2|
|<el-row justify="space-between"><el-col :span="20">reserver20</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|保留20|
|<el-row justify="space-between"><el-col :span="20">reserver3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留3|
|<el-row justify="space-between"><el-col :span="20">reserver4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留4|
|<el-row justify="space-between"><el-col :span="20">reserver5</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留5|
|<el-row justify="space-between"><el-col :span="20">reserver6</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留6|
|<el-row justify="space-between"><el-col :span="20">reserver7</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留7|
|<el-row justify="space-between"><el-col :span="20">reserver8</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留8|
|<el-row justify="space-between"><el-col :span="20">reserver9</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留9|
|<el-row justify="space-between"><el-col :span="20">showorder</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|排序|
|<el-row justify="space-between"><el-col :span="20">superuser</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|管理员|
|<el-row justify="space-between"><el-col :span="20">report_flag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|统计|
|<el-row justify="space-between"><el-col :span="20">ddunionid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|钉钉用户标识|
|<el-row justify="space-between"><el-col :span="20">dduserid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|钉钉用户标识|
|<el-row justify="space-between"><el-col :span="20">msgtype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|消息类型|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|人员状态|
|<el-row justify="space-between"><el-col :span="20">uaauserid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|UAA用户标识|
|<el-row justify="space-between"><el-col :span="20">wxworkunionid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|微信用户标识|
|<el-row justify="space-between"><el-col :span="20">wxworkuserid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|企业微信用户标识|



##### 请求示例： {docsify-ignore}
```json
{
  "userid" : null,
  "username" : null,
  "personname" : null,
  "usercode" : null,
  "loginname" : null,
  "password" : null,
  "domains" : null,
  "mdeptid" : null,
  "mdeptname" : null,
  "bcode" : null,
  "postid" : null,
  "postname" : null,
  "orgid" : null,
  "orgname" : null,
  "nickname" : null,
  "certcode" : null,
  "sex" : null,
  "birthday" : null,
  "phone" : null,
  "email" : null,
  "avatar" : null,
  "addr" : null,
  "usericon" : null,
  "ipaddr" : null,
  "theme" : null,
  "lang" : null,
  "fontsize" : null,
  "memo" : null,
  "reserver" : null,
  "reserver10" : null,
  "reserver11" : null,
  "reserver12" : null,
  "reserver13" : null,
  "reserver14" : null,
  "reserver15" : null,
  "reserver16" : null,
  "reserver17" : null,
  "reserver18" : null,
  "reserver19" : null,
  "reserver2" : null,
  "reserver20" : null,
  "reserver3" : null,
  "reserver4" : null,
  "reserver5" : null,
  "reserver6" : null,
  "reserver7" : null,
  "reserver8" : null,
  "reserver9" : null,
  "showorder" : null,
  "superuser" : null,
  "createdate" : null,
  "updatedate" : null,
  "report_flag" : null,
  "ddunionid" : null,
  "dduserid" : null,
  "msgtype" : null,
  "state" : null,
  "uaauserid" : null,
  "wxworkunionid" : null,
  "wxworkuserid" : null,
}
```



## 检查人员主键

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysemployees/checkkey" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">userid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|用户标识|
|<el-row justify="space-between"><el-col :span="20">username</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户全局名|
|<el-row justify="space-between"><el-col :span="20">personname</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|姓名|
|<el-row justify="space-between"><el-col :span="20">usercode</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|用户工号|
|<el-row justify="space-between"><el-col :span="20">loginname</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|登录名|
|<el-row justify="space-between"><el-col :span="20">password</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|密码|
|<el-row justify="space-between"><el-col :span="20">domains</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|区属|
|<el-row justify="space-between"><el-col :span="20">mdeptid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|主部门|
|<el-row justify="space-between"><el-col :span="20">mdeptname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|主部门名称|
|<el-row justify="space-between"><el-col :span="20">bcode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|业务编码|
|<el-row justify="space-between"><el-col :span="20">postid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位标识|
|<el-row justify="space-between"><el-col :span="20">postname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位名称|
|<el-row justify="space-between"><el-col :span="20">orgid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|单位|
|<el-row justify="space-between"><el-col :span="20">orgname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|单位名称|
|<el-row justify="space-between"><el-col :span="20">nickname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|昵称别名|
|<el-row justify="space-between"><el-col :span="20">certcode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|证件号码|
|<el-row justify="space-between"><el-col :span="20">sex</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|性别|
|<el-row justify="space-between"><el-col :span="20">birthday</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|出生日期|
|<el-row justify="space-between"><el-col :span="20">phone</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|手机号|
|<el-row justify="space-between"><el-col :span="20">email</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|邮件|
|<el-row justify="space-between"><el-col :span="20">avatar</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|社交账号|
|<el-row justify="space-between"><el-col :span="20">addr</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|地址|
|<el-row justify="space-between"><el-col :span="20">usericon</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|照片|
|<el-row justify="space-between"><el-col :span="20">ipaddr</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|ip地址|
|<el-row justify="space-between"><el-col :span="20">theme</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|样式|
|<el-row justify="space-between"><el-col :span="20">lang</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|语言|
|<el-row justify="space-between"><el-col :span="20">fontsize</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|字号|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">reserver</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留|
|<el-row justify="space-between"><el-col :span="20">reserver10</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留10|
|<el-row justify="space-between"><el-col :span="20">reserver11</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|保留11|
|<el-row justify="space-between"><el-col :span="20">reserver12</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|保留12|
|<el-row justify="space-between"><el-col :span="20">reserver13</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|保留13|
|<el-row justify="space-between"><el-col :span="20">reserver14</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|保留14|
|<el-row justify="space-between"><el-col :span="20">reserver15</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|保留15|
|<el-row justify="space-between"><el-col :span="20">reserver16</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|保留16|
|<el-row justify="space-between"><el-col :span="20">reserver17</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|保留17|
|<el-row justify="space-between"><el-col :span="20">reserver18</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|保留18|
|<el-row justify="space-between"><el-col :span="20">reserver19</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|保留19|
|<el-row justify="space-between"><el-col :span="20">reserver2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留2|
|<el-row justify="space-between"><el-col :span="20">reserver20</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|保留20|
|<el-row justify="space-between"><el-col :span="20">reserver3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留3|
|<el-row justify="space-between"><el-col :span="20">reserver4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留4|
|<el-row justify="space-between"><el-col :span="20">reserver5</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留5|
|<el-row justify="space-between"><el-col :span="20">reserver6</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留6|
|<el-row justify="space-between"><el-col :span="20">reserver7</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留7|
|<el-row justify="space-between"><el-col :span="20">reserver8</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留8|
|<el-row justify="space-between"><el-col :span="20">reserver9</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留9|
|<el-row justify="space-between"><el-col :span="20">showorder</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|排序|
|<el-row justify="space-between"><el-col :span="20">superuser</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|管理员|
|<el-row justify="space-between"><el-col :span="20">report_flag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|统计|
|<el-row justify="space-between"><el-col :span="20">ddunionid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|钉钉用户标识|
|<el-row justify="space-between"><el-col :span="20">dduserid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|钉钉用户标识|
|<el-row justify="space-between"><el-col :span="20">msgtype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|消息类型|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|人员状态|
|<el-row justify="space-between"><el-col :span="20">uaauserid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|UAA用户标识|
|<el-row justify="space-between"><el-col :span="20">wxworkunionid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|微信用户标识|
|<el-row justify="space-between"><el-col :span="20">wxworkuserid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|企业微信用户标识|



##### 请求示例： {docsify-ignore}
```json
{
  "userid" : null,
  "username" : null,
  "personname" : null,
  "usercode" : null,
  "loginname" : null,
  "password" : null,
  "domains" : null,
  "mdeptid" : null,
  "mdeptname" : null,
  "bcode" : null,
  "postid" : null,
  "postname" : null,
  "orgid" : null,
  "orgname" : null,
  "nickname" : null,
  "certcode" : null,
  "sex" : null,
  "birthday" : null,
  "phone" : null,
  "email" : null,
  "avatar" : null,
  "addr" : null,
  "usericon" : null,
  "ipaddr" : null,
  "theme" : null,
  "lang" : null,
  "fontsize" : null,
  "memo" : null,
  "reserver" : null,
  "reserver10" : null,
  "reserver11" : null,
  "reserver12" : null,
  "reserver13" : null,
  "reserver14" : null,
  "reserver15" : null,
  "reserver16" : null,
  "reserver17" : null,
  "reserver18" : null,
  "reserver19" : null,
  "reserver2" : null,
  "reserver20" : null,
  "reserver3" : null,
  "reserver4" : null,
  "reserver5" : null,
  "reserver6" : null,
  "reserver7" : null,
  "reserver8" : null,
  "reserver9" : null,
  "showorder" : null,
  "superuser" : null,
  "createdate" : null,
  "updatedate" : null,
  "report_flag" : null,
  "ddunionid" : null,
  "dduserid" : null,
  "msgtype" : null,
  "state" : null,
  "uaauserid" : null,
  "wxworkunionid" : null,
  "wxworkuserid" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
Integer
```

## 获取人员草稿

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysemployees/getdraft" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">userid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|用户标识|
|<el-row justify="space-between"><el-col :span="20">username</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户全局名|
|<el-row justify="space-between"><el-col :span="20">personname</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|姓名|
|<el-row justify="space-between"><el-col :span="20">usercode</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|用户工号|
|<el-row justify="space-between"><el-col :span="20">loginname</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|登录名|
|<el-row justify="space-between"><el-col :span="20">password</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|密码|
|<el-row justify="space-between"><el-col :span="20">domains</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|区属|
|<el-row justify="space-between"><el-col :span="20">mdeptid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|主部门|
|<el-row justify="space-between"><el-col :span="20">mdeptname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|主部门名称|
|<el-row justify="space-between"><el-col :span="20">bcode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|业务编码|
|<el-row justify="space-between"><el-col :span="20">postid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位标识|
|<el-row justify="space-between"><el-col :span="20">postname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位名称|
|<el-row justify="space-between"><el-col :span="20">orgid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|单位|
|<el-row justify="space-between"><el-col :span="20">orgname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|单位名称|
|<el-row justify="space-between"><el-col :span="20">nickname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|昵称别名|
|<el-row justify="space-between"><el-col :span="20">certcode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|证件号码|
|<el-row justify="space-between"><el-col :span="20">sex</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|性别|
|<el-row justify="space-between"><el-col :span="20">birthday</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|出生日期|
|<el-row justify="space-between"><el-col :span="20">phone</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|手机号|
|<el-row justify="space-between"><el-col :span="20">email</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|邮件|
|<el-row justify="space-between"><el-col :span="20">avatar</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|社交账号|
|<el-row justify="space-between"><el-col :span="20">addr</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|地址|
|<el-row justify="space-between"><el-col :span="20">usericon</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|照片|
|<el-row justify="space-between"><el-col :span="20">ipaddr</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|ip地址|
|<el-row justify="space-between"><el-col :span="20">theme</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|样式|
|<el-row justify="space-between"><el-col :span="20">lang</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|语言|
|<el-row justify="space-between"><el-col :span="20">fontsize</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|字号|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">reserver</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留|
|<el-row justify="space-between"><el-col :span="20">reserver10</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留10|
|<el-row justify="space-between"><el-col :span="20">reserver11</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|保留11|
|<el-row justify="space-between"><el-col :span="20">reserver12</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|保留12|
|<el-row justify="space-between"><el-col :span="20">reserver13</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|保留13|
|<el-row justify="space-between"><el-col :span="20">reserver14</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|保留14|
|<el-row justify="space-between"><el-col :span="20">reserver15</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|保留15|
|<el-row justify="space-between"><el-col :span="20">reserver16</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|保留16|
|<el-row justify="space-between"><el-col :span="20">reserver17</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|保留17|
|<el-row justify="space-between"><el-col :span="20">reserver18</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|保留18|
|<el-row justify="space-between"><el-col :span="20">reserver19</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|保留19|
|<el-row justify="space-between"><el-col :span="20">reserver2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留2|
|<el-row justify="space-between"><el-col :span="20">reserver20</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|保留20|
|<el-row justify="space-between"><el-col :span="20">reserver3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留3|
|<el-row justify="space-between"><el-col :span="20">reserver4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留4|
|<el-row justify="space-between"><el-col :span="20">reserver5</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留5|
|<el-row justify="space-between"><el-col :span="20">reserver6</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留6|
|<el-row justify="space-between"><el-col :span="20">reserver7</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留7|
|<el-row justify="space-between"><el-col :span="20">reserver8</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留8|
|<el-row justify="space-between"><el-col :span="20">reserver9</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留9|
|<el-row justify="space-between"><el-col :span="20">showorder</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|排序|
|<el-row justify="space-between"><el-col :span="20">superuser</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|管理员|
|<el-row justify="space-between"><el-col :span="20">report_flag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|统计|
|<el-row justify="space-between"><el-col :span="20">ddunionid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|钉钉用户标识|
|<el-row justify="space-between"><el-col :span="20">dduserid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|钉钉用户标识|
|<el-row justify="space-between"><el-col :span="20">msgtype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|消息类型|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|人员状态|
|<el-row justify="space-between"><el-col :span="20">uaauserid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|UAA用户标识|
|<el-row justify="space-between"><el-col :span="20">wxworkunionid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|微信用户标识|
|<el-row justify="space-between"><el-col :span="20">wxworkuserid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|企业微信用户标识|



##### 请求示例： {docsify-ignore}
```json
{
  "userid" : null,
  "username" : null,
  "personname" : null,
  "usercode" : null,
  "loginname" : null,
  "password" : null,
  "domains" : null,
  "mdeptid" : null,
  "mdeptname" : null,
  "bcode" : null,
  "postid" : null,
  "postname" : null,
  "orgid" : null,
  "orgname" : null,
  "nickname" : null,
  "certcode" : null,
  "sex" : null,
  "birthday" : null,
  "phone" : null,
  "email" : null,
  "avatar" : null,
  "addr" : null,
  "usericon" : null,
  "ipaddr" : null,
  "theme" : null,
  "lang" : null,
  "fontsize" : null,
  "memo" : null,
  "reserver" : null,
  "reserver10" : null,
  "reserver11" : null,
  "reserver12" : null,
  "reserver13" : null,
  "reserver14" : null,
  "reserver15" : null,
  "reserver16" : null,
  "reserver17" : null,
  "reserver18" : null,
  "reserver19" : null,
  "reserver2" : null,
  "reserver20" : null,
  "reserver3" : null,
  "reserver4" : null,
  "reserver5" : null,
  "reserver6" : null,
  "reserver7" : null,
  "reserver8" : null,
  "reserver9" : null,
  "showorder" : null,
  "superuser" : null,
  "createdate" : null,
  "updatedate" : null,
  "report_flag" : null,
  "ddunionid" : null,
  "dduserid" : null,
  "msgtype" : null,
  "state" : null,
  "uaauserid" : null,
  "wxworkunionid" : null,
  "wxworkuserid" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "userid" : null,
  "username" : null,
  "personname" : null,
  "usercode" : null,
  "loginname" : null,
  "password" : null,
  "domains" : null,
  "mdeptid" : null,
  "mdeptname" : null,
  "bcode" : null,
  "postid" : null,
  "postname" : null,
  "orgid" : null,
  "orgname" : null,
  "nickname" : null,
  "certcode" : null,
  "sex" : null,
  "birthday" : null,
  "phone" : null,
  "email" : null,
  "avatar" : null,
  "addr" : null,
  "usericon" : null,
  "ipaddr" : null,
  "theme" : null,
  "lang" : null,
  "fontsize" : null,
  "memo" : null,
  "reserver" : null,
  "reserver10" : null,
  "reserver11" : null,
  "reserver12" : null,
  "reserver13" : null,
  "reserver14" : null,
  "reserver15" : null,
  "reserver16" : null,
  "reserver17" : null,
  "reserver18" : null,
  "reserver19" : null,
  "reserver2" : null,
  "reserver20" : null,
  "reserver3" : null,
  "reserver4" : null,
  "reserver5" : null,
  "reserver6" : null,
  "reserver7" : null,
  "reserver8" : null,
  "reserver9" : null,
  "showorder" : null,
  "superuser" : null,
  "createdate" : null,
  "updatedate" : null,
  "report_flag" : null,
  "ddunionid" : null,
  "dduserid" : null,
  "msgtype" : null,
  "state" : null,
  "uaauserid" : null,
  "wxworkunionid" : null,
  "wxworkuserid" : null,
}

```

## 初始化密码

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysemployees/{key}/initpwd" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|用户标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">userid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|用户标识|
|<el-row justify="space-between"><el-col :span="20">username</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户全局名|
|<el-row justify="space-between"><el-col :span="20">personname</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|姓名|
|<el-row justify="space-between"><el-col :span="20">usercode</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|用户工号|
|<el-row justify="space-between"><el-col :span="20">loginname</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|登录名|
|<el-row justify="space-between"><el-col :span="20">password</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|密码|
|<el-row justify="space-between"><el-col :span="20">domains</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|区属|
|<el-row justify="space-between"><el-col :span="20">mdeptid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|主部门|
|<el-row justify="space-between"><el-col :span="20">mdeptname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|主部门名称|
|<el-row justify="space-between"><el-col :span="20">bcode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|业务编码|
|<el-row justify="space-between"><el-col :span="20">postid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位标识|
|<el-row justify="space-between"><el-col :span="20">postname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位名称|
|<el-row justify="space-between"><el-col :span="20">orgid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|单位|
|<el-row justify="space-between"><el-col :span="20">orgname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|单位名称|
|<el-row justify="space-between"><el-col :span="20">nickname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|昵称别名|
|<el-row justify="space-between"><el-col :span="20">certcode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|证件号码|
|<el-row justify="space-between"><el-col :span="20">sex</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|性别|
|<el-row justify="space-between"><el-col :span="20">birthday</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|出生日期|
|<el-row justify="space-between"><el-col :span="20">phone</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|手机号|
|<el-row justify="space-between"><el-col :span="20">email</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|邮件|
|<el-row justify="space-between"><el-col :span="20">avatar</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|社交账号|
|<el-row justify="space-between"><el-col :span="20">addr</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|地址|
|<el-row justify="space-between"><el-col :span="20">usericon</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|照片|
|<el-row justify="space-between"><el-col :span="20">ipaddr</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|ip地址|
|<el-row justify="space-between"><el-col :span="20">theme</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|样式|
|<el-row justify="space-between"><el-col :span="20">lang</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|语言|
|<el-row justify="space-between"><el-col :span="20">fontsize</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|字号|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">reserver</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留|
|<el-row justify="space-between"><el-col :span="20">reserver10</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留10|
|<el-row justify="space-between"><el-col :span="20">reserver11</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|保留11|
|<el-row justify="space-between"><el-col :span="20">reserver12</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|保留12|
|<el-row justify="space-between"><el-col :span="20">reserver13</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|保留13|
|<el-row justify="space-between"><el-col :span="20">reserver14</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|保留14|
|<el-row justify="space-between"><el-col :span="20">reserver15</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|保留15|
|<el-row justify="space-between"><el-col :span="20">reserver16</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|保留16|
|<el-row justify="space-between"><el-col :span="20">reserver17</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|保留17|
|<el-row justify="space-between"><el-col :span="20">reserver18</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|保留18|
|<el-row justify="space-between"><el-col :span="20">reserver19</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|保留19|
|<el-row justify="space-between"><el-col :span="20">reserver2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留2|
|<el-row justify="space-between"><el-col :span="20">reserver20</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|保留20|
|<el-row justify="space-between"><el-col :span="20">reserver3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留3|
|<el-row justify="space-between"><el-col :span="20">reserver4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留4|
|<el-row justify="space-between"><el-col :span="20">reserver5</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留5|
|<el-row justify="space-between"><el-col :span="20">reserver6</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留6|
|<el-row justify="space-between"><el-col :span="20">reserver7</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留7|
|<el-row justify="space-between"><el-col :span="20">reserver8</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留8|
|<el-row justify="space-between"><el-col :span="20">reserver9</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留9|
|<el-row justify="space-between"><el-col :span="20">showorder</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|排序|
|<el-row justify="space-between"><el-col :span="20">superuser</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|管理员|
|<el-row justify="space-between"><el-col :span="20">report_flag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|统计|
|<el-row justify="space-between"><el-col :span="20">ddunionid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|钉钉用户标识|
|<el-row justify="space-between"><el-col :span="20">dduserid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|钉钉用户标识|
|<el-row justify="space-between"><el-col :span="20">msgtype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|消息类型|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|人员状态|
|<el-row justify="space-between"><el-col :span="20">uaauserid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|UAA用户标识|
|<el-row justify="space-between"><el-col :span="20">wxworkunionid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|微信用户标识|
|<el-row justify="space-between"><el-col :span="20">wxworkuserid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|企业微信用户标识|



##### 请求示例： {docsify-ignore}
```json
{
  "userid" : null,
  "username" : null,
  "personname" : null,
  "usercode" : null,
  "loginname" : null,
  "password" : null,
  "domains" : null,
  "mdeptid" : null,
  "mdeptname" : null,
  "bcode" : null,
  "postid" : null,
  "postname" : null,
  "orgid" : null,
  "orgname" : null,
  "nickname" : null,
  "certcode" : null,
  "sex" : null,
  "birthday" : null,
  "phone" : null,
  "email" : null,
  "avatar" : null,
  "addr" : null,
  "usericon" : null,
  "ipaddr" : null,
  "theme" : null,
  "lang" : null,
  "fontsize" : null,
  "memo" : null,
  "reserver" : null,
  "reserver10" : null,
  "reserver11" : null,
  "reserver12" : null,
  "reserver13" : null,
  "reserver14" : null,
  "reserver15" : null,
  "reserver16" : null,
  "reserver17" : null,
  "reserver18" : null,
  "reserver19" : null,
  "reserver2" : null,
  "reserver20" : null,
  "reserver3" : null,
  "reserver4" : null,
  "reserver5" : null,
  "reserver6" : null,
  "reserver7" : null,
  "reserver8" : null,
  "reserver9" : null,
  "showorder" : null,
  "superuser" : null,
  "createdate" : null,
  "updatedate" : null,
  "report_flag" : null,
  "ddunionid" : null,
  "dduserid" : null,
  "msgtype" : null,
  "state" : null,
  "uaauserid" : null,
  "wxworkunionid" : null,
  "wxworkuserid" : null,
}
```



## 保存人员

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysemployees/{key}/save" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|用户标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">userid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|用户标识|
|<el-row justify="space-between"><el-col :span="20">username</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户全局名|
|<el-row justify="space-between"><el-col :span="20">personname</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|姓名|
|<el-row justify="space-between"><el-col :span="20">usercode</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|用户工号|
|<el-row justify="space-between"><el-col :span="20">loginname</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|登录名|
|<el-row justify="space-between"><el-col :span="20">password</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|密码|
|<el-row justify="space-between"><el-col :span="20">domains</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|区属|
|<el-row justify="space-between"><el-col :span="20">mdeptid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|主部门|
|<el-row justify="space-between"><el-col :span="20">mdeptname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|主部门名称|
|<el-row justify="space-between"><el-col :span="20">bcode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|业务编码|
|<el-row justify="space-between"><el-col :span="20">postid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位标识|
|<el-row justify="space-between"><el-col :span="20">postname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位名称|
|<el-row justify="space-between"><el-col :span="20">orgid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|单位|
|<el-row justify="space-between"><el-col :span="20">orgname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|单位名称|
|<el-row justify="space-between"><el-col :span="20">nickname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|昵称别名|
|<el-row justify="space-between"><el-col :span="20">certcode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|证件号码|
|<el-row justify="space-between"><el-col :span="20">sex</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|性别|
|<el-row justify="space-between"><el-col :span="20">birthday</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|出生日期|
|<el-row justify="space-between"><el-col :span="20">phone</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|手机号|
|<el-row justify="space-between"><el-col :span="20">email</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|邮件|
|<el-row justify="space-between"><el-col :span="20">avatar</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|社交账号|
|<el-row justify="space-between"><el-col :span="20">addr</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|地址|
|<el-row justify="space-between"><el-col :span="20">usericon</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|照片|
|<el-row justify="space-between"><el-col :span="20">ipaddr</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|ip地址|
|<el-row justify="space-between"><el-col :span="20">theme</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|样式|
|<el-row justify="space-between"><el-col :span="20">lang</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|语言|
|<el-row justify="space-between"><el-col :span="20">fontsize</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|字号|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">reserver</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留|
|<el-row justify="space-between"><el-col :span="20">reserver10</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留10|
|<el-row justify="space-between"><el-col :span="20">reserver11</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|保留11|
|<el-row justify="space-between"><el-col :span="20">reserver12</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|保留12|
|<el-row justify="space-between"><el-col :span="20">reserver13</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|保留13|
|<el-row justify="space-between"><el-col :span="20">reserver14</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|保留14|
|<el-row justify="space-between"><el-col :span="20">reserver15</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|保留15|
|<el-row justify="space-between"><el-col :span="20">reserver16</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|保留16|
|<el-row justify="space-between"><el-col :span="20">reserver17</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|保留17|
|<el-row justify="space-between"><el-col :span="20">reserver18</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|保留18|
|<el-row justify="space-between"><el-col :span="20">reserver19</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|保留19|
|<el-row justify="space-between"><el-col :span="20">reserver2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留2|
|<el-row justify="space-between"><el-col :span="20">reserver20</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|保留20|
|<el-row justify="space-between"><el-col :span="20">reserver3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留3|
|<el-row justify="space-between"><el-col :span="20">reserver4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留4|
|<el-row justify="space-between"><el-col :span="20">reserver5</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留5|
|<el-row justify="space-between"><el-col :span="20">reserver6</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留6|
|<el-row justify="space-between"><el-col :span="20">reserver7</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留7|
|<el-row justify="space-between"><el-col :span="20">reserver8</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留8|
|<el-row justify="space-between"><el-col :span="20">reserver9</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|保留9|
|<el-row justify="space-between"><el-col :span="20">showorder</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|排序|
|<el-row justify="space-between"><el-col :span="20">superuser</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|管理员|
|<el-row justify="space-between"><el-col :span="20">report_flag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|统计|
|<el-row justify="space-between"><el-col :span="20">ddunionid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|钉钉用户标识|
|<el-row justify="space-between"><el-col :span="20">dduserid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|钉钉用户标识|
|<el-row justify="space-between"><el-col :span="20">msgtype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|消息类型|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|人员状态|
|<el-row justify="space-between"><el-col :span="20">uaauserid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|UAA用户标识|
|<el-row justify="space-between"><el-col :span="20">wxworkunionid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|微信用户标识|
|<el-row justify="space-between"><el-col :span="20">wxworkuserid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|企业微信用户标识|



##### 请求示例： {docsify-ignore}
```json
{
  "userid" : null,
  "username" : null,
  "personname" : null,
  "usercode" : null,
  "loginname" : null,
  "password" : null,
  "domains" : null,
  "mdeptid" : null,
  "mdeptname" : null,
  "bcode" : null,
  "postid" : null,
  "postname" : null,
  "orgid" : null,
  "orgname" : null,
  "nickname" : null,
  "certcode" : null,
  "sex" : null,
  "birthday" : null,
  "phone" : null,
  "email" : null,
  "avatar" : null,
  "addr" : null,
  "usericon" : null,
  "ipaddr" : null,
  "theme" : null,
  "lang" : null,
  "fontsize" : null,
  "memo" : null,
  "reserver" : null,
  "reserver10" : null,
  "reserver11" : null,
  "reserver12" : null,
  "reserver13" : null,
  "reserver14" : null,
  "reserver15" : null,
  "reserver16" : null,
  "reserver17" : null,
  "reserver18" : null,
  "reserver19" : null,
  "reserver2" : null,
  "reserver20" : null,
  "reserver3" : null,
  "reserver4" : null,
  "reserver5" : null,
  "reserver6" : null,
  "reserver7" : null,
  "reserver8" : null,
  "reserver9" : null,
  "showorder" : null,
  "superuser" : null,
  "createdate" : null,
  "updatedate" : null,
  "report_flag" : null,
  "ddunionid" : null,
  "dduserid" : null,
  "msgtype" : null,
  "state" : null,
  "uaauserid" : null,
  "wxworkunionid" : null,
  "wxworkuserid" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "userid" : null,
  "username" : null,
  "personname" : null,
  "usercode" : null,
  "loginname" : null,
  "password" : null,
  "domains" : null,
  "mdeptid" : null,
  "mdeptname" : null,
  "bcode" : null,
  "postid" : null,
  "postname" : null,
  "orgid" : null,
  "orgname" : null,
  "nickname" : null,
  "certcode" : null,
  "sex" : null,
  "birthday" : null,
  "phone" : null,
  "email" : null,
  "avatar" : null,
  "addr" : null,
  "usericon" : null,
  "ipaddr" : null,
  "theme" : null,
  "lang" : null,
  "fontsize" : null,
  "memo" : null,
  "reserver" : null,
  "reserver10" : null,
  "reserver11" : null,
  "reserver12" : null,
  "reserver13" : null,
  "reserver14" : null,
  "reserver15" : null,
  "reserver16" : null,
  "reserver17" : null,
  "reserver18" : null,
  "reserver19" : null,
  "reserver2" : null,
  "reserver20" : null,
  "reserver3" : null,
  "reserver4" : null,
  "reserver5" : null,
  "reserver6" : null,
  "reserver7" : null,
  "reserver8" : null,
  "reserver9" : null,
  "showorder" : null,
  "superuser" : null,
  "createdate" : null,
  "updatedate" : null,
  "report_flag" : null,
  "ddunionid" : null,
  "dduserid" : null,
  "msgtype" : null,
  "state" : null,
  "uaauserid" : null,
  "wxworkunionid" : null,
  "wxworkuserid" : null,
}

```

## 数据集

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysemployees/fetchdefault" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_personname_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|姓名|
|<el-row justify="space-between"><el-col :span="20">n_sex_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|性别|
|<el-row justify="space-between"><el-col :span="20">n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|人员状态|
|<el-row justify="space-between"><el-col :span="20">n_userid_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标识|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_personname_like" : null,
  "n_sex_eq" : null,
  "n_state_eq" : null,
  "n_userid_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "userid" : null,
    "username" : null,
    "personname" : null,
    "usercode" : null,
    "loginname" : null,
    "password" : null,
    "domains" : null,
    "mdeptid" : null,
    "mdeptname" : null,
    "bcode" : null,
    "postid" : null,
    "postname" : null,
    "orgid" : null,
    "orgname" : null,
    "nickname" : null,
    "certcode" : null,
    "sex" : null,
    "birthday" : null,
    "phone" : null,
    "email" : null,
    "avatar" : null,
    "addr" : null,
    "usericon" : null,
    "ipaddr" : null,
    "theme" : null,
    "lang" : null,
    "fontsize" : null,
    "memo" : null,
    "reserver" : null,
    "reserver10" : null,
    "reserver11" : null,
    "reserver12" : null,
    "reserver13" : null,
    "reserver14" : null,
    "reserver15" : null,
    "reserver16" : null,
    "reserver17" : null,
    "reserver18" : null,
    "reserver19" : null,
    "reserver2" : null,
    "reserver20" : null,
    "reserver3" : null,
    "reserver4" : null,
    "reserver5" : null,
    "reserver6" : null,
    "reserver7" : null,
    "reserver8" : null,
    "reserver9" : null,
    "showorder" : null,
    "superuser" : null,
    "createdate" : null,
    "updatedate" : null,
    "report_flag" : null,
    "ddunionid" : null,
    "dduserid" : null,
    "msgtype" : null,
    "state" : null,
    "uaauserid" : null,
    "wxworkunionid" : null,
    "wxworkuserid" : null,
  }
]
```

## 当前用户

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysemployees/fetchuser" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_personname_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|姓名|
|<el-row justify="space-between"><el-col :span="20">n_sex_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|性别|
|<el-row justify="space-between"><el-col :span="20">n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|人员状态|
|<el-row justify="space-between"><el-col :span="20">n_userid_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标识|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_personname_like" : null,
  "n_sex_eq" : null,
  "n_state_eq" : null,
  "n_userid_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "userid" : null,
    "username" : null,
    "personname" : null,
    "usercode" : null,
    "loginname" : null,
    "password" : null,
    "domains" : null,
    "mdeptid" : null,
    "mdeptname" : null,
    "bcode" : null,
    "postid" : null,
    "postname" : null,
    "orgid" : null,
    "orgname" : null,
    "nickname" : null,
    "certcode" : null,
    "sex" : null,
    "birthday" : null,
    "phone" : null,
    "email" : null,
    "avatar" : null,
    "addr" : null,
    "usericon" : null,
    "ipaddr" : null,
    "theme" : null,
    "lang" : null,
    "fontsize" : null,
    "memo" : null,
    "reserver" : null,
    "reserver10" : null,
    "reserver11" : null,
    "reserver12" : null,
    "reserver13" : null,
    "reserver14" : null,
    "reserver15" : null,
    "reserver16" : null,
    "reserver17" : null,
    "reserver18" : null,
    "reserver19" : null,
    "reserver2" : null,
    "reserver20" : null,
    "reserver3" : null,
    "reserver4" : null,
    "reserver5" : null,
    "reserver6" : null,
    "reserver7" : null,
    "reserver8" : null,
    "reserver9" : null,
    "showorder" : null,
    "superuser" : null,
    "createdate" : null,
    "updatedate" : null,
    "report_flag" : null,
    "ddunionid" : null,
    "dduserid" : null,
    "msgtype" : null,
    "state" : null,
    "uaauserid" : null,
    "wxworkunionid" : null,
    "wxworkuserid" : null,
  }
]
```



## 下载导入模板
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysemployees/importtemplate" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfimporttag | String | 导入标识 |



## 数据导出

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysemployees/exportdata/{param},/sysemployees/exportdata/{param}/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|param|String|导出集合方法名称|
|key|String|数据主键|

##### 查询参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|srfexporttag|String|导出模板标识|

##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|page|Integer|page|
|size|Integer|分页大小|
|n_xxx_eq|String|过滤参数|


## 数据导入

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysemployees/importdata" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfimporttag | String | 导入标识 |

##### 请求参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| file | file | 导入数据文具 |

## 数据导入（返回错误excel）

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysemployees/importdata2" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfimporttag | String | 导入标识 |

##### 请求参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| file | file | 导入数据文具 |

## 自定义表头导入（异步）
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysemployees/asyncimportdata2" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfimporttag | String | 导入标识 |
| srfossfileid | String | 导入文件 |
| srfimportschemaid | String | 表头定义 |


## 数据打印
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysemployees/printdata/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|数据主键|

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfprinttag | String | 打印标识 |
| srfcontenttype | String | 打印类型 |



## 报表打印

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysemployees/report" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfreporttag | String | 报表标识 |
| srfcontenttype | String | 报表类型 |




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