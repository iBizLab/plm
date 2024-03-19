# 人员(SysEmployee)




<!-- panels:start -->
<!-- div:left-panel -->
ChangePwd `POST` `/sysemployees/{key}/changepwd`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 主键



<p class="panel-title"><b>Body</b></p>

 * `userid` - UserId
 * `username` - UserName
 * `personname` - PersonName
 * `usercode` - UserCode
 * `loginname` - LoginName
 * `password` - Password
 * `domains` - Domains
 * `mdeptid` - MDeptId
 * `mdeptname` - MDeptName
 * `bcode` - BCode
 * `postid` - PostId
 * `postname` - PostName
 * `orgid` - OrgId
 * `orgname` - OrgName
 * `nickname` - NickName
 * `certcode` - CertCode
 * `sex` - Sex
 * `birthday` - Birthday
 * `phone` - Phone
 * `email` - Email
 * `avatar` - Avatar
 * `addr` - Addr
 * `usericon` - UserIcon
 * `ipaddr` - IPAddr
 * `theme` - Theme
 * `lang` - Lang
 * `fontsize` - FontSize
 * `memo` - Memo
 * `reserver` - Reserver
 * `reserver10` - Reserver10
 * `reserver11` - Reserver11
 * `reserver12` - Reserver12
 * `reserver13` - Reserver13
 * `reserver14` - Reserver14
 * `reserver15` - Reserver15
 * `reserver16` - Reserver16
 * `reserver17` - Reserver17
 * `reserver18` - Reserver18
 * `reserver19` - Reserver19
 * `reserver2` - Reserver2
 * `reserver20` - Reserver20
 * `reserver3` - Reserver3
 * `reserver4` - Reserver4
 * `reserver5` - Reserver5
 * `reserver6` - Reserver6
 * `reserver7` - Reserver7
 * `reserver8` - Reserver8
 * `reserver9` - Reserver9
 * `showorder` - ShowOrder
 * `superuser` - SuperUser
 * `createdate` - CreateDate
 * `updatedate` - UpdateDate
 * `ddunionid` - DDUnionId
 * `dduserid` - DDUserId
 * `msgtype` - MsgType
 * `state` - State
 * `uaauserid` - UAAUserId
 * `wxworkunionid` - WXWorkUnionId
 * `wxworkuserid` - WXWorkUserId




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

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
  "ddunionid" : null,
  "dduserid" : null,
  "msgtype" : null,
  "state" : null,
  "uaauserid" : null,
  "wxworkunionid" : null,
  "wxworkuserid" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
CheckKey `POST` `/sysemployees/checkkey`




<p class="panel-title"><b>Body</b></p>

 * `userid` - UserId
 * `username` - UserName
 * `personname` - PersonName
 * `usercode` - UserCode
 * `loginname` - LoginName
 * `password` - Password
 * `domains` - Domains
 * `mdeptid` - MDeptId
 * `mdeptname` - MDeptName
 * `bcode` - BCode
 * `postid` - PostId
 * `postname` - PostName
 * `orgid` - OrgId
 * `orgname` - OrgName
 * `nickname` - NickName
 * `certcode` - CertCode
 * `sex` - Sex
 * `birthday` - Birthday
 * `phone` - Phone
 * `email` - Email
 * `avatar` - Avatar
 * `addr` - Addr
 * `usericon` - UserIcon
 * `ipaddr` - IPAddr
 * `theme` - Theme
 * `lang` - Lang
 * `fontsize` - FontSize
 * `memo` - Memo
 * `reserver` - Reserver
 * `reserver10` - Reserver10
 * `reserver11` - Reserver11
 * `reserver12` - Reserver12
 * `reserver13` - Reserver13
 * `reserver14` - Reserver14
 * `reserver15` - Reserver15
 * `reserver16` - Reserver16
 * `reserver17` - Reserver17
 * `reserver18` - Reserver18
 * `reserver19` - Reserver19
 * `reserver2` - Reserver2
 * `reserver20` - Reserver20
 * `reserver3` - Reserver3
 * `reserver4` - Reserver4
 * `reserver5` - Reserver5
 * `reserver6` - Reserver6
 * `reserver7` - Reserver7
 * `reserver8` - Reserver8
 * `reserver9` - Reserver9
 * `showorder` - ShowOrder
 * `superuser` - SuperUser
 * `createdate` - CreateDate
 * `updatedate` - UpdateDate
 * `ddunionid` - DDUnionId
 * `dduserid` - DDUserId
 * `msgtype` - MsgType
 * `state` - State
 * `uaauserid` - UAAUserId
 * `wxworkunionid` - WXWorkUnionId
 * `wxworkuserid` - WXWorkUserId




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



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
  "ddunionid" : null,
  "dduserid" : null,
  "msgtype" : null,
  "state" : null,
  "uaauserid" : null,
  "wxworkunionid" : null,
  "wxworkuserid" : null,
}
```


#### **Response**
```json
UNKNOWN


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Create `POST` `/sysemployees`




<p class="panel-title"><b>Body</b></p>

 * `userid` - UserId
 * `username` - UserName
 * `personname` - PersonName
 * `usercode` - UserCode
 * `loginname` - LoginName
 * `password` - Password
 * `domains` - Domains
 * `mdeptid` - MDeptId
 * `mdeptname` - MDeptName
 * `bcode` - BCode
 * `postid` - PostId
 * `postname` - PostName
 * `orgid` - OrgId
 * `orgname` - OrgName
 * `nickname` - NickName
 * `certcode` - CertCode
 * `sex` - Sex
 * `birthday` - Birthday
 * `phone` - Phone
 * `email` - Email
 * `avatar` - Avatar
 * `addr` - Addr
 * `usericon` - UserIcon
 * `ipaddr` - IPAddr
 * `theme` - Theme
 * `lang` - Lang
 * `fontsize` - FontSize
 * `memo` - Memo
 * `reserver` - Reserver
 * `reserver10` - Reserver10
 * `reserver11` - Reserver11
 * `reserver12` - Reserver12
 * `reserver13` - Reserver13
 * `reserver14` - Reserver14
 * `reserver15` - Reserver15
 * `reserver16` - Reserver16
 * `reserver17` - Reserver17
 * `reserver18` - Reserver18
 * `reserver19` - Reserver19
 * `reserver2` - Reserver2
 * `reserver20` - Reserver20
 * `reserver3` - Reserver3
 * `reserver4` - Reserver4
 * `reserver5` - Reserver5
 * `reserver6` - Reserver6
 * `reserver7` - Reserver7
 * `reserver8` - Reserver8
 * `reserver9` - Reserver9
 * `showorder` - ShowOrder
 * `superuser` - SuperUser
 * `createdate` - CreateDate
 * `updatedate` - UpdateDate
 * `ddunionid` - DDUnionId
 * `dduserid` - DDUserId
 * `msgtype` - MsgType
 * `state` - State
 * `uaauserid` - UAAUserId
 * `wxworkunionid` - WXWorkUnionId
 * `wxworkuserid` - WXWorkUserId




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



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
  "ddunionid" : null,
  "dduserid" : null,
  "msgtype" : null,
  "state" : null,
  "uaauserid" : null,
  "wxworkunionid" : null,
  "wxworkuserid" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Get `GET` `/sysemployees/{key}`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 主键





<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```




#### **Response**
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
  "ddunionid" : null,
  "dduserid" : null,
  "msgtype" : null,
  "state" : null,
  "uaauserid" : null,
  "wxworkunionid" : null,
  "wxworkuserid" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
GetDraft `GET` `/sysemployees/getdraft`




<p class="panel-title"><b>Body</b></p>

 * `userid` - UserId
 * `username` - UserName
 * `personname` - PersonName
 * `usercode` - UserCode
 * `loginname` - LoginName
 * `password` - Password
 * `domains` - Domains
 * `mdeptid` - MDeptId
 * `mdeptname` - MDeptName
 * `bcode` - BCode
 * `postid` - PostId
 * `postname` - PostName
 * `orgid` - OrgId
 * `orgname` - OrgName
 * `nickname` - NickName
 * `certcode` - CertCode
 * `sex` - Sex
 * `birthday` - Birthday
 * `phone` - Phone
 * `email` - Email
 * `avatar` - Avatar
 * `addr` - Addr
 * `usericon` - UserIcon
 * `ipaddr` - IPAddr
 * `theme` - Theme
 * `lang` - Lang
 * `fontsize` - FontSize
 * `memo` - Memo
 * `reserver` - Reserver
 * `reserver10` - Reserver10
 * `reserver11` - Reserver11
 * `reserver12` - Reserver12
 * `reserver13` - Reserver13
 * `reserver14` - Reserver14
 * `reserver15` - Reserver15
 * `reserver16` - Reserver16
 * `reserver17` - Reserver17
 * `reserver18` - Reserver18
 * `reserver19` - Reserver19
 * `reserver2` - Reserver2
 * `reserver20` - Reserver20
 * `reserver3` - Reserver3
 * `reserver4` - Reserver4
 * `reserver5` - Reserver5
 * `reserver6` - Reserver6
 * `reserver7` - Reserver7
 * `reserver8` - Reserver8
 * `reserver9` - Reserver9
 * `showorder` - ShowOrder
 * `superuser` - SuperUser
 * `createdate` - CreateDate
 * `updatedate` - UpdateDate
 * `ddunionid` - DDUnionId
 * `dduserid` - DDUserId
 * `msgtype` - MsgType
 * `state` - State
 * `uaauserid` - UAAUserId
 * `wxworkunionid` - WXWorkUnionId
 * `wxworkuserid` - WXWorkUserId




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



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
  "ddunionid" : null,
  "dduserid" : null,
  "msgtype" : null,
  "state" : null,
  "uaauserid" : null,
  "wxworkunionid" : null,
  "wxworkuserid" : null,
}
```


#### **Response**
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
  "ddunionid" : null,
  "dduserid" : null,
  "msgtype" : null,
  "state" : null,
  "uaauserid" : null,
  "wxworkunionid" : null,
  "wxworkuserid" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
InitPwd `POST` `/sysemployees/{key}/initpwd`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 主键



<p class="panel-title"><b>Body</b></p>

 * `userid` - UserId
 * `username` - UserName
 * `personname` - PersonName
 * `usercode` - UserCode
 * `loginname` - LoginName
 * `password` - Password
 * `domains` - Domains
 * `mdeptid` - MDeptId
 * `mdeptname` - MDeptName
 * `bcode` - BCode
 * `postid` - PostId
 * `postname` - PostName
 * `orgid` - OrgId
 * `orgname` - OrgName
 * `nickname` - NickName
 * `certcode` - CertCode
 * `sex` - Sex
 * `birthday` - Birthday
 * `phone` - Phone
 * `email` - Email
 * `avatar` - Avatar
 * `addr` - Addr
 * `usericon` - UserIcon
 * `ipaddr` - IPAddr
 * `theme` - Theme
 * `lang` - Lang
 * `fontsize` - FontSize
 * `memo` - Memo
 * `reserver` - Reserver
 * `reserver10` - Reserver10
 * `reserver11` - Reserver11
 * `reserver12` - Reserver12
 * `reserver13` - Reserver13
 * `reserver14` - Reserver14
 * `reserver15` - Reserver15
 * `reserver16` - Reserver16
 * `reserver17` - Reserver17
 * `reserver18` - Reserver18
 * `reserver19` - Reserver19
 * `reserver2` - Reserver2
 * `reserver20` - Reserver20
 * `reserver3` - Reserver3
 * `reserver4` - Reserver4
 * `reserver5` - Reserver5
 * `reserver6` - Reserver6
 * `reserver7` - Reserver7
 * `reserver8` - Reserver8
 * `reserver9` - Reserver9
 * `showorder` - ShowOrder
 * `superuser` - SuperUser
 * `createdate` - CreateDate
 * `updatedate` - UpdateDate
 * `ddunionid` - DDUnionId
 * `dduserid` - DDUserId
 * `msgtype` - MsgType
 * `state` - State
 * `uaauserid` - UAAUserId
 * `wxworkunionid` - WXWorkUnionId
 * `wxworkuserid` - WXWorkUserId




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

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
  "ddunionid" : null,
  "dduserid" : null,
  "msgtype" : null,
  "state" : null,
  "uaauserid" : null,
  "wxworkunionid" : null,
  "wxworkuserid" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Remove `DELETE` `/sysemployees/{key}`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 主键





<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```




#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Save `POST` `/sysemployees/{key}/save`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 主键



<p class="panel-title"><b>Body</b></p>

 * `userid` - UserId
 * `username` - UserName
 * `personname` - PersonName
 * `usercode` - UserCode
 * `loginname` - LoginName
 * `password` - Password
 * `domains` - Domains
 * `mdeptid` - MDeptId
 * `mdeptname` - MDeptName
 * `bcode` - BCode
 * `postid` - PostId
 * `postname` - PostName
 * `orgid` - OrgId
 * `orgname` - OrgName
 * `nickname` - NickName
 * `certcode` - CertCode
 * `sex` - Sex
 * `birthday` - Birthday
 * `phone` - Phone
 * `email` - Email
 * `avatar` - Avatar
 * `addr` - Addr
 * `usericon` - UserIcon
 * `ipaddr` - IPAddr
 * `theme` - Theme
 * `lang` - Lang
 * `fontsize` - FontSize
 * `memo` - Memo
 * `reserver` - Reserver
 * `reserver10` - Reserver10
 * `reserver11` - Reserver11
 * `reserver12` - Reserver12
 * `reserver13` - Reserver13
 * `reserver14` - Reserver14
 * `reserver15` - Reserver15
 * `reserver16` - Reserver16
 * `reserver17` - Reserver17
 * `reserver18` - Reserver18
 * `reserver19` - Reserver19
 * `reserver2` - Reserver2
 * `reserver20` - Reserver20
 * `reserver3` - Reserver3
 * `reserver4` - Reserver4
 * `reserver5` - Reserver5
 * `reserver6` - Reserver6
 * `reserver7` - Reserver7
 * `reserver8` - Reserver8
 * `reserver9` - Reserver9
 * `showorder` - ShowOrder
 * `superuser` - SuperUser
 * `createdate` - CreateDate
 * `updatedate` - UpdateDate
 * `ddunionid` - DDUnionId
 * `dduserid` - DDUserId
 * `msgtype` - MsgType
 * `state` - State
 * `uaauserid` - UAAUserId
 * `wxworkunionid` - WXWorkUnionId
 * `wxworkuserid` - WXWorkUserId




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

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
  "ddunionid" : null,
  "dduserid" : null,
  "msgtype" : null,
  "state" : null,
  "uaauserid" : null,
  "wxworkunionid" : null,
  "wxworkuserid" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Update `PUT` `/sysemployees/{key}`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 主键



<p class="panel-title"><b>Body</b></p>

 * `userid` - UserId
 * `username` - UserName
 * `personname` - PersonName
 * `usercode` - UserCode
 * `loginname` - LoginName
 * `password` - Password
 * `domains` - Domains
 * `mdeptid` - MDeptId
 * `mdeptname` - MDeptName
 * `bcode` - BCode
 * `postid` - PostId
 * `postname` - PostName
 * `orgid` - OrgId
 * `orgname` - OrgName
 * `nickname` - NickName
 * `certcode` - CertCode
 * `sex` - Sex
 * `birthday` - Birthday
 * `phone` - Phone
 * `email` - Email
 * `avatar` - Avatar
 * `addr` - Addr
 * `usericon` - UserIcon
 * `ipaddr` - IPAddr
 * `theme` - Theme
 * `lang` - Lang
 * `fontsize` - FontSize
 * `memo` - Memo
 * `reserver` - Reserver
 * `reserver10` - Reserver10
 * `reserver11` - Reserver11
 * `reserver12` - Reserver12
 * `reserver13` - Reserver13
 * `reserver14` - Reserver14
 * `reserver15` - Reserver15
 * `reserver16` - Reserver16
 * `reserver17` - Reserver17
 * `reserver18` - Reserver18
 * `reserver19` - Reserver19
 * `reserver2` - Reserver2
 * `reserver20` - Reserver20
 * `reserver3` - Reserver3
 * `reserver4` - Reserver4
 * `reserver5` - Reserver5
 * `reserver6` - Reserver6
 * `reserver7` - Reserver7
 * `reserver8` - Reserver8
 * `reserver9` - Reserver9
 * `showorder` - ShowOrder
 * `superuser` - SuperUser
 * `createdate` - CreateDate
 * `updatedate` - UpdateDate
 * `ddunionid` - DDUnionId
 * `dduserid` - DDUserId
 * `msgtype` - MsgType
 * `state` - State
 * `uaauserid` - UAAUserId
 * `wxworkunionid` - WXWorkUnionId
 * `wxworkuserid` - WXWorkUserId




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

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
  "ddunionid" : null,
  "dduserid" : null,
  "msgtype" : null,
  "state" : null,
  "uaauserid" : null,
  "wxworkunionid" : null,
  "wxworkuserid" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
DEFAULT `POST` `/sysemployees/fetchdefault`




<p class="panel-title"><b>Body</b></p>

 * `n_personname_like` - N_PERSONNAME_LIKE
 * `n_sex_eq` - N_SEX_EQ
 * `n_state_eq` - N_STATE_EQ
 * `n_userid_eq` - N_USERID_EQ




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



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


#### **Response**
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
<!-- tabs:end -->
<!-- panels:end -->


