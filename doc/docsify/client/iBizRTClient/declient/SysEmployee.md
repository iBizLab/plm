# 人员(SysEmployee) :id=SysEmployee
## ChangePwd

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysemployees/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|主键|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|userid|String|UserId|
|username|String|UserName|
|personname|String|PersonName|
|usercode|String|UserCode|
|loginname|String|LoginName|
|password|String|Password|
|domains|String|Domains|
|mdeptid|String|MDeptId|
|mdeptname|String|MDeptName|
|bcode|String|BCode|
|postid|String|PostId|
|postname|String|PostName|
|orgid|String|OrgId|
|orgname|String|OrgName|
|nickname|String|NickName|
|certcode|String|CertCode|
|sex|String|Sex|
|birthday|Timestamp|Birthday|
|phone|String|Phone|
|email|String|Email|
|avatar|String|Avatar|
|addr|String|Addr|
|usericon|String|UserIcon|
|ipaddr|String|IPAddr|
|theme|String|Theme|
|lang|String|Lang|
|fontsize|String|FontSize|
|memo|String|Memo|
|reserver|String|Reserver|
|reserver10|String|Reserver10|
|reserver11|Integer|Reserver11|
|reserver12|Integer|Reserver12|
|reserver13|Integer|Reserver13|
|reserver14|Integer|Reserver14|
|reserver15|BigDecimal|Reserver15|
|reserver16|BigDecimal|Reserver16|
|reserver17|BigDecimal|Reserver17|
|reserver18|BigDecimal|Reserver18|
|reserver19|Timestamp|Reserver19|
|reserver2|String|Reserver2|
|reserver20|Timestamp|Reserver20|
|reserver3|String|Reserver3|
|reserver4|String|Reserver4|
|reserver5|String|Reserver5|
|reserver6|String|Reserver6|
|reserver7|String|Reserver7|
|reserver8|String|Reserver8|
|reserver9|String|Reserver9|
|showorder|Integer|ShowOrder|
|superuser|Integer|SuperUser|
|createdate|Timestamp|CreateDate|
|updatedate|Timestamp|UpdateDate|
|report_flag|Integer|report_flag|
|ddunionid|String|DDUnionId|
|dduserid|String|DDUserId|
|msgtype|Integer|MsgType|
|state|String|State|
|uaauserid|String|UAAUserId|
|wxworkunionid|String|WXWorkUnionId|
|wxworkuserid|String|WXWorkUserId|



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


## CheckKey

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysemployees" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|userid|String|UserId|
|username|String|UserName|
|personname|String|PersonName|
|usercode|String|UserCode|
|loginname|String|LoginName|
|password|String|Password|
|domains|String|Domains|
|mdeptid|String|MDeptId|
|mdeptname|String|MDeptName|
|bcode|String|BCode|
|postid|String|PostId|
|postname|String|PostName|
|orgid|String|OrgId|
|orgname|String|OrgName|
|nickname|String|NickName|
|certcode|String|CertCode|
|sex|String|Sex|
|birthday|Timestamp|Birthday|
|phone|String|Phone|
|email|String|Email|
|avatar|String|Avatar|
|addr|String|Addr|
|usericon|String|UserIcon|
|ipaddr|String|IPAddr|
|theme|String|Theme|
|lang|String|Lang|
|fontsize|String|FontSize|
|memo|String|Memo|
|reserver|String|Reserver|
|reserver10|String|Reserver10|
|reserver11|Integer|Reserver11|
|reserver12|Integer|Reserver12|
|reserver13|Integer|Reserver13|
|reserver14|Integer|Reserver14|
|reserver15|BigDecimal|Reserver15|
|reserver16|BigDecimal|Reserver16|
|reserver17|BigDecimal|Reserver17|
|reserver18|BigDecimal|Reserver18|
|reserver19|Timestamp|Reserver19|
|reserver2|String|Reserver2|
|reserver20|Timestamp|Reserver20|
|reserver3|String|Reserver3|
|reserver4|String|Reserver4|
|reserver5|String|Reserver5|
|reserver6|String|Reserver6|
|reserver7|String|Reserver7|
|reserver8|String|Reserver8|
|reserver9|String|Reserver9|
|showorder|Integer|ShowOrder|
|superuser|Integer|SuperUser|
|createdate|Timestamp|CreateDate|
|updatedate|Timestamp|UpdateDate|
|report_flag|Integer|report_flag|
|ddunionid|String|DDUnionId|
|dduserid|String|DDUserId|
|msgtype|Integer|MsgType|
|state|String|State|
|uaauserid|String|UAAUserId|
|wxworkunionid|String|WXWorkUnionId|
|wxworkuserid|String|WXWorkUserId|



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


## Create

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysemployees" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|userid|String|UserId|
|username|String|UserName|
|personname|String|PersonName|
|usercode|String|UserCode|
|loginname|String|LoginName|
|password|String|Password|
|domains|String|Domains|
|mdeptid|String|MDeptId|
|mdeptname|String|MDeptName|
|bcode|String|BCode|
|postid|String|PostId|
|postname|String|PostName|
|orgid|String|OrgId|
|orgname|String|OrgName|
|nickname|String|NickName|
|certcode|String|CertCode|
|sex|String|Sex|
|birthday|Timestamp|Birthday|
|phone|String|Phone|
|email|String|Email|
|avatar|String|Avatar|
|addr|String|Addr|
|usericon|String|UserIcon|
|ipaddr|String|IPAddr|
|theme|String|Theme|
|lang|String|Lang|
|fontsize|String|FontSize|
|memo|String|Memo|
|reserver|String|Reserver|
|reserver10|String|Reserver10|
|reserver11|Integer|Reserver11|
|reserver12|Integer|Reserver12|
|reserver13|Integer|Reserver13|
|reserver14|Integer|Reserver14|
|reserver15|BigDecimal|Reserver15|
|reserver16|BigDecimal|Reserver16|
|reserver17|BigDecimal|Reserver17|
|reserver18|BigDecimal|Reserver18|
|reserver19|Timestamp|Reserver19|
|reserver2|String|Reserver2|
|reserver20|Timestamp|Reserver20|
|reserver3|String|Reserver3|
|reserver4|String|Reserver4|
|reserver5|String|Reserver5|
|reserver6|String|Reserver6|
|reserver7|String|Reserver7|
|reserver8|String|Reserver8|
|reserver9|String|Reserver9|
|showorder|Integer|ShowOrder|
|superuser|Integer|SuperUser|
|createdate|Timestamp|CreateDate|
|updatedate|Timestamp|UpdateDate|
|report_flag|Integer|report_flag|
|ddunionid|String|DDUnionId|
|dduserid|String|DDUserId|
|msgtype|Integer|MsgType|
|state|String|State|
|uaauserid|String|UAAUserId|
|wxworkunionid|String|WXWorkUnionId|
|wxworkuserid|String|WXWorkUserId|



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


## Get

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysemployees/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|主键|




## GetDraft

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysemployees" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|userid|String|UserId|
|username|String|UserName|
|personname|String|PersonName|
|usercode|String|UserCode|
|loginname|String|LoginName|
|password|String|Password|
|domains|String|Domains|
|mdeptid|String|MDeptId|
|mdeptname|String|MDeptName|
|bcode|String|BCode|
|postid|String|PostId|
|postname|String|PostName|
|orgid|String|OrgId|
|orgname|String|OrgName|
|nickname|String|NickName|
|certcode|String|CertCode|
|sex|String|Sex|
|birthday|Timestamp|Birthday|
|phone|String|Phone|
|email|String|Email|
|avatar|String|Avatar|
|addr|String|Addr|
|usericon|String|UserIcon|
|ipaddr|String|IPAddr|
|theme|String|Theme|
|lang|String|Lang|
|fontsize|String|FontSize|
|memo|String|Memo|
|reserver|String|Reserver|
|reserver10|String|Reserver10|
|reserver11|Integer|Reserver11|
|reserver12|Integer|Reserver12|
|reserver13|Integer|Reserver13|
|reserver14|Integer|Reserver14|
|reserver15|BigDecimal|Reserver15|
|reserver16|BigDecimal|Reserver16|
|reserver17|BigDecimal|Reserver17|
|reserver18|BigDecimal|Reserver18|
|reserver19|Timestamp|Reserver19|
|reserver2|String|Reserver2|
|reserver20|Timestamp|Reserver20|
|reserver3|String|Reserver3|
|reserver4|String|Reserver4|
|reserver5|String|Reserver5|
|reserver6|String|Reserver6|
|reserver7|String|Reserver7|
|reserver8|String|Reserver8|
|reserver9|String|Reserver9|
|showorder|Integer|ShowOrder|
|superuser|Integer|SuperUser|
|createdate|Timestamp|CreateDate|
|updatedate|Timestamp|UpdateDate|
|report_flag|Integer|report_flag|
|ddunionid|String|DDUnionId|
|dduserid|String|DDUserId|
|msgtype|Integer|MsgType|
|state|String|State|
|uaauserid|String|UAAUserId|
|wxworkunionid|String|WXWorkUnionId|
|wxworkuserid|String|WXWorkUserId|



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


## InitPwd

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysemployees/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|主键|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|userid|String|UserId|
|username|String|UserName|
|personname|String|PersonName|
|usercode|String|UserCode|
|loginname|String|LoginName|
|password|String|Password|
|domains|String|Domains|
|mdeptid|String|MDeptId|
|mdeptname|String|MDeptName|
|bcode|String|BCode|
|postid|String|PostId|
|postname|String|PostName|
|orgid|String|OrgId|
|orgname|String|OrgName|
|nickname|String|NickName|
|certcode|String|CertCode|
|sex|String|Sex|
|birthday|Timestamp|Birthday|
|phone|String|Phone|
|email|String|Email|
|avatar|String|Avatar|
|addr|String|Addr|
|usericon|String|UserIcon|
|ipaddr|String|IPAddr|
|theme|String|Theme|
|lang|String|Lang|
|fontsize|String|FontSize|
|memo|String|Memo|
|reserver|String|Reserver|
|reserver10|String|Reserver10|
|reserver11|Integer|Reserver11|
|reserver12|Integer|Reserver12|
|reserver13|Integer|Reserver13|
|reserver14|Integer|Reserver14|
|reserver15|BigDecimal|Reserver15|
|reserver16|BigDecimal|Reserver16|
|reserver17|BigDecimal|Reserver17|
|reserver18|BigDecimal|Reserver18|
|reserver19|Timestamp|Reserver19|
|reserver2|String|Reserver2|
|reserver20|Timestamp|Reserver20|
|reserver3|String|Reserver3|
|reserver4|String|Reserver4|
|reserver5|String|Reserver5|
|reserver6|String|Reserver6|
|reserver7|String|Reserver7|
|reserver8|String|Reserver8|
|reserver9|String|Reserver9|
|showorder|Integer|ShowOrder|
|superuser|Integer|SuperUser|
|createdate|Timestamp|CreateDate|
|updatedate|Timestamp|UpdateDate|
|report_flag|Integer|report_flag|
|ddunionid|String|DDUnionId|
|dduserid|String|DDUserId|
|msgtype|Integer|MsgType|
|state|String|State|
|uaauserid|String|UAAUserId|
|wxworkunionid|String|WXWorkUnionId|
|wxworkuserid|String|WXWorkUserId|



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


## Remove

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysemployees/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|主键|




## Save

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysemployees" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|userid|String|UserId|
|username|String|UserName|
|personname|String|PersonName|
|usercode|String|UserCode|
|loginname|String|LoginName|
|password|String|Password|
|domains|String|Domains|
|mdeptid|String|MDeptId|
|mdeptname|String|MDeptName|
|bcode|String|BCode|
|postid|String|PostId|
|postname|String|PostName|
|orgid|String|OrgId|
|orgname|String|OrgName|
|nickname|String|NickName|
|certcode|String|CertCode|
|sex|String|Sex|
|birthday|Timestamp|Birthday|
|phone|String|Phone|
|email|String|Email|
|avatar|String|Avatar|
|addr|String|Addr|
|usericon|String|UserIcon|
|ipaddr|String|IPAddr|
|theme|String|Theme|
|lang|String|Lang|
|fontsize|String|FontSize|
|memo|String|Memo|
|reserver|String|Reserver|
|reserver10|String|Reserver10|
|reserver11|Integer|Reserver11|
|reserver12|Integer|Reserver12|
|reserver13|Integer|Reserver13|
|reserver14|Integer|Reserver14|
|reserver15|BigDecimal|Reserver15|
|reserver16|BigDecimal|Reserver16|
|reserver17|BigDecimal|Reserver17|
|reserver18|BigDecimal|Reserver18|
|reserver19|Timestamp|Reserver19|
|reserver2|String|Reserver2|
|reserver20|Timestamp|Reserver20|
|reserver3|String|Reserver3|
|reserver4|String|Reserver4|
|reserver5|String|Reserver5|
|reserver6|String|Reserver6|
|reserver7|String|Reserver7|
|reserver8|String|Reserver8|
|reserver9|String|Reserver9|
|showorder|Integer|ShowOrder|
|superuser|Integer|SuperUser|
|createdate|Timestamp|CreateDate|
|updatedate|Timestamp|UpdateDate|
|report_flag|Integer|report_flag|
|ddunionid|String|DDUnionId|
|dduserid|String|DDUserId|
|msgtype|Integer|MsgType|
|state|String|State|
|uaauserid|String|UAAUserId|
|wxworkunionid|String|WXWorkUnionId|
|wxworkuserid|String|WXWorkUserId|



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


## Update

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysemployees/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|主键|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|userid|String|UserId|
|username|String|UserName|
|personname|String|PersonName|
|usercode|String|UserCode|
|loginname|String|LoginName|
|password|String|Password|
|domains|String|Domains|
|mdeptid|String|MDeptId|
|mdeptname|String|MDeptName|
|bcode|String|BCode|
|postid|String|PostId|
|postname|String|PostName|
|orgid|String|OrgId|
|orgname|String|OrgName|
|nickname|String|NickName|
|certcode|String|CertCode|
|sex|String|Sex|
|birthday|Timestamp|Birthday|
|phone|String|Phone|
|email|String|Email|
|avatar|String|Avatar|
|addr|String|Addr|
|usericon|String|UserIcon|
|ipaddr|String|IPAddr|
|theme|String|Theme|
|lang|String|Lang|
|fontsize|String|FontSize|
|memo|String|Memo|
|reserver|String|Reserver|
|reserver10|String|Reserver10|
|reserver11|Integer|Reserver11|
|reserver12|Integer|Reserver12|
|reserver13|Integer|Reserver13|
|reserver14|Integer|Reserver14|
|reserver15|BigDecimal|Reserver15|
|reserver16|BigDecimal|Reserver16|
|reserver17|BigDecimal|Reserver17|
|reserver18|BigDecimal|Reserver18|
|reserver19|Timestamp|Reserver19|
|reserver2|String|Reserver2|
|reserver20|Timestamp|Reserver20|
|reserver3|String|Reserver3|
|reserver4|String|Reserver4|
|reserver5|String|Reserver5|
|reserver6|String|Reserver6|
|reserver7|String|Reserver7|
|reserver8|String|Reserver8|
|reserver9|String|Reserver9|
|showorder|Integer|ShowOrder|
|superuser|Integer|SuperUser|
|createdate|Timestamp|CreateDate|
|updatedate|Timestamp|UpdateDate|
|report_flag|Integer|report_flag|
|ddunionid|String|DDUnionId|
|dduserid|String|DDUserId|
|msgtype|Integer|MsgType|
|state|String|State|
|uaauserid|String|UAAUserId|
|wxworkunionid|String|WXWorkUnionId|
|wxworkuserid|String|WXWorkUserId|



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


## DEFAULT

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysemployees" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|n_personname_like|String|N_PERSONNAME_LIKE|
|n_sex_eq|String|N_SEX_EQ|
|n_state_eq|String|N_STATE_EQ|
|n_userid_eq|String|N_USERID_EQ|



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


## user

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysemployees" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|n_personname_like|String|N_PERSONNAME_LIKE|
|n_sex_eq|String|N_SEX_EQ|
|n_state_eq|String|N_STATE_EQ|
|n_userid_eq|String|N_USERID_EQ|



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