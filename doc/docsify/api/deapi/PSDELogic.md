# 实体处理逻辑(PSDELogic)




<!-- panels:start -->
<!-- div:left-panel -->
Create `POST` `/psdelogics` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `applyflag` - 扩展状态
 * `attachtopsdeactionid` - 附加到指定行为
 * `attachtopsdeactionname` - 附加到指定行为
 * `dynamodelflag` - 扩展模型
 * `attachtopsdedatasetid` - 附加到指定数据集
 * `attachtopsdedatasetname` - 附加到指定数据集
 * `timerpolicy` - 定时触发策略
 * `last_state` - 最后运行状态
 * `events` - 监控事件
 * `ignoreexception` - 忽略异常
 * `threadmode` - 线程模式
 * `last_start_at` - 最后运行时间
 * `codename` - 代码标识
 * `createdate` - 建立时间
 * `createman` - 建立人
 * `logicsubtype` - 逻辑子类
 * `logictype` - 逻辑类型
 * `memo` - 备注
 * `psdeid` - 实体
 * `psdelogicid` - 实体处理逻辑标识
 * `psdelogicname` - 实体处理逻辑名称
 * `psdename` - 实体
 * `updatedate` - 更新时间
 * `updateman` - 更新人
 * `validflag` - 启用
 * `extension_tag` - 扩展标记
 * `extension_tag2` - 扩展标记2
 * `extension_tag3` - 扩展标记3
 * `extension_tag4` - 扩展标记4




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "applyflag" : null,
  "attachtopsdeactionid" : null,
  "attachtopsdeactionname" : null,
  "dynamodelflag" : null,
  "attachtopsdedatasetid" : null,
  "attachtopsdedatasetname" : null,
  "timerpolicy" : null,
  "last_state" : null,
  "events" : null,
  "ignoreexception" : null,
  "threadmode" : null,
  "last_start_at" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "logicsubtype" : null,
  "logictype" : null,
  "memo" : null,
  "psdeid" : null,
  "psdelogicid" : null,
  "psdelogicname" : null,
  "psdename" : null,
  "updatedate" : null,
  "updateman" : null,
  "validflag" : null,
  "extension_tag" : null,
  "extension_tag2" : null,
  "extension_tag3" : null,
  "extension_tag4" : null,
}
```


#### **Response**
```json

{
  "applyflag" : null,
  "attachtopsdeactionid" : null,
  "attachtopsdeactionname" : null,
  "dynamodelflag" : null,
  "attachtopsdedatasetid" : null,
  "attachtopsdedatasetname" : null,
  "timerpolicy" : null,
  "last_state" : null,
  "events" : null,
  "ignoreexception" : null,
  "threadmode" : null,
  "last_start_at" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "logicsubtype" : null,
  "logictype" : null,
  "memo" : null,
  "psdeid" : null,
  "psdelogicid" : null,
  "psdelogicname" : null,
  "psdename" : null,
  "updatedate" : null,
  "updateman" : null,
  "validflag" : null,
  "extension_tag" : null,
  "extension_tag2" : null,
  "extension_tag3" : null,
  "extension_tag4" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Get `GET` `/psdelogics/{key}` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 实体处理逻辑标识





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
  "applyflag" : null,
  "attachtopsdeactionid" : null,
  "attachtopsdeactionname" : null,
  "dynamodelflag" : null,
  "attachtopsdedatasetid" : null,
  "attachtopsdedatasetname" : null,
  "timerpolicy" : null,
  "last_state" : null,
  "events" : null,
  "ignoreexception" : null,
  "threadmode" : null,
  "last_start_at" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "logicsubtype" : null,
  "logictype" : null,
  "memo" : null,
  "psdeid" : null,
  "psdelogicid" : null,
  "psdelogicname" : null,
  "psdename" : null,
  "updatedate" : null,
  "updateman" : null,
  "validflag" : null,
  "extension_tag" : null,
  "extension_tag2" : null,
  "extension_tag3" : null,
  "extension_tag4" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Remove `DELETE` `/psdelogics/{key}` <i class="fa fa-key"></i>`DELETE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 实体处理逻辑标识





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
Update `PUT` `/psdelogics/{key}` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 实体处理逻辑标识



<p class="panel-title"><b>Body</b></p>

 * `applyflag` - 扩展状态
 * `attachtopsdeactionid` - 附加到指定行为
 * `attachtopsdeactionname` - 附加到指定行为
 * `dynamodelflag` - 扩展模型
 * `attachtopsdedatasetid` - 附加到指定数据集
 * `attachtopsdedatasetname` - 附加到指定数据集
 * `timerpolicy` - 定时触发策略
 * `last_state` - 最后运行状态
 * `events` - 监控事件
 * `ignoreexception` - 忽略异常
 * `threadmode` - 线程模式
 * `last_start_at` - 最后运行时间
 * `codename` - 代码标识
 * `createdate` - 建立时间
 * `createman` - 建立人
 * `logicsubtype` - 逻辑子类
 * `logictype` - 逻辑类型
 * `memo` - 备注
 * `psdeid` - 实体
 * `psdelogicid` - 实体处理逻辑标识
 * `psdelogicname` - 实体处理逻辑名称
 * `psdename` - 实体
 * `updatedate` - 更新时间
 * `updateman` - 更新人
 * `validflag` - 启用
 * `extension_tag` - 扩展标记
 * `extension_tag2` - 扩展标记2
 * `extension_tag3` - 扩展标记3
 * `extension_tag4` - 扩展标记4




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
  "applyflag" : null,
  "attachtopsdeactionid" : null,
  "attachtopsdeactionname" : null,
  "dynamodelflag" : null,
  "attachtopsdedatasetid" : null,
  "attachtopsdedatasetname" : null,
  "timerpolicy" : null,
  "last_state" : null,
  "events" : null,
  "ignoreexception" : null,
  "threadmode" : null,
  "last_start_at" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "logicsubtype" : null,
  "logictype" : null,
  "memo" : null,
  "psdeid" : null,
  "psdelogicid" : null,
  "psdelogicname" : null,
  "psdename" : null,
  "updatedate" : null,
  "updateman" : null,
  "validflag" : null,
  "extension_tag" : null,
  "extension_tag2" : null,
  "extension_tag3" : null,
  "extension_tag4" : null,
}
```


#### **Response**
```json

{
  "applyflag" : null,
  "attachtopsdeactionid" : null,
  "attachtopsdeactionname" : null,
  "dynamodelflag" : null,
  "attachtopsdedatasetid" : null,
  "attachtopsdedatasetname" : null,
  "timerpolicy" : null,
  "last_state" : null,
  "events" : null,
  "ignoreexception" : null,
  "threadmode" : null,
  "last_start_at" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "logicsubtype" : null,
  "logictype" : null,
  "memo" : null,
  "psdeid" : null,
  "psdelogicid" : null,
  "psdelogicname" : null,
  "psdename" : null,
  "updatedate" : null,
  "updateman" : null,
  "validflag" : null,
  "extension_tag" : null,
  "extension_tag2" : null,
  "extension_tag3" : null,
  "extension_tag4" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Apply `POST` `/psdelogics/{key}/apply` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 实体处理逻辑标识



<p class="panel-title"><b>Body</b></p>

 * `applyflag` - 扩展状态
 * `attachtopsdeactionid` - 附加到指定行为
 * `attachtopsdeactionname` - 附加到指定行为
 * `dynamodelflag` - 扩展模型
 * `attachtopsdedatasetid` - 附加到指定数据集
 * `attachtopsdedatasetname` - 附加到指定数据集
 * `timerpolicy` - 定时触发策略
 * `last_state` - 最后运行状态
 * `events` - 监控事件
 * `ignoreexception` - 忽略异常
 * `threadmode` - 线程模式
 * `last_start_at` - 最后运行时间
 * `codename` - 代码标识
 * `createdate` - 建立时间
 * `createman` - 建立人
 * `logicsubtype` - 逻辑子类
 * `logictype` - 逻辑类型
 * `memo` - 备注
 * `psdeid` - 实体
 * `psdelogicid` - 实体处理逻辑标识
 * `psdelogicname` - 实体处理逻辑名称
 * `psdename` - 实体
 * `updatedate` - 更新时间
 * `updateman` - 更新人
 * `validflag` - 启用
 * `extension_tag` - 扩展标记
 * `extension_tag2` - 扩展标记2
 * `extension_tag3` - 扩展标记3
 * `extension_tag4` - 扩展标记4




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
  "applyflag" : null,
  "attachtopsdeactionid" : null,
  "attachtopsdeactionname" : null,
  "dynamodelflag" : null,
  "attachtopsdedatasetid" : null,
  "attachtopsdedatasetname" : null,
  "timerpolicy" : null,
  "last_state" : null,
  "events" : null,
  "ignoreexception" : null,
  "threadmode" : null,
  "last_start_at" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "logicsubtype" : null,
  "logictype" : null,
  "memo" : null,
  "psdeid" : null,
  "psdelogicid" : null,
  "psdelogicname" : null,
  "psdename" : null,
  "updatedate" : null,
  "updateman" : null,
  "validflag" : null,
  "extension_tag" : null,
  "extension_tag2" : null,
  "extension_tag3" : null,
  "extension_tag4" : null,
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
CheckKey `POST` `/psdelogics/checkkey` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `applyflag` - 扩展状态
 * `attachtopsdeactionid` - 附加到指定行为
 * `attachtopsdeactionname` - 附加到指定行为
 * `dynamodelflag` - 扩展模型
 * `attachtopsdedatasetid` - 附加到指定数据集
 * `attachtopsdedatasetname` - 附加到指定数据集
 * `timerpolicy` - 定时触发策略
 * `last_state` - 最后运行状态
 * `events` - 监控事件
 * `ignoreexception` - 忽略异常
 * `threadmode` - 线程模式
 * `last_start_at` - 最后运行时间
 * `codename` - 代码标识
 * `createdate` - 建立时间
 * `createman` - 建立人
 * `logicsubtype` - 逻辑子类
 * `logictype` - 逻辑类型
 * `memo` - 备注
 * `psdeid` - 实体
 * `psdelogicid` - 实体处理逻辑标识
 * `psdelogicname` - 实体处理逻辑名称
 * `psdename` - 实体
 * `updatedate` - 更新时间
 * `updateman` - 更新人
 * `validflag` - 启用
 * `extension_tag` - 扩展标记
 * `extension_tag2` - 扩展标记2
 * `extension_tag3` - 扩展标记3
 * `extension_tag4` - 扩展标记4




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "applyflag" : null,
  "attachtopsdeactionid" : null,
  "attachtopsdeactionname" : null,
  "dynamodelflag" : null,
  "attachtopsdedatasetid" : null,
  "attachtopsdedatasetname" : null,
  "timerpolicy" : null,
  "last_state" : null,
  "events" : null,
  "ignoreexception" : null,
  "threadmode" : null,
  "last_start_at" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "logicsubtype" : null,
  "logictype" : null,
  "memo" : null,
  "psdeid" : null,
  "psdelogicid" : null,
  "psdelogicname" : null,
  "psdename" : null,
  "updatedate" : null,
  "updateman" : null,
  "validflag" : null,
  "extension_tag" : null,
  "extension_tag2" : null,
  "extension_tag3" : null,
  "extension_tag4" : null,
}
```


#### **Response**
```json
INT


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
GetDraft `GET` `/psdelogics/getdraft` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `applyflag` - 扩展状态
 * `attachtopsdeactionid` - 附加到指定行为
 * `attachtopsdeactionname` - 附加到指定行为
 * `dynamodelflag` - 扩展模型
 * `attachtopsdedatasetid` - 附加到指定数据集
 * `attachtopsdedatasetname` - 附加到指定数据集
 * `timerpolicy` - 定时触发策略
 * `last_state` - 最后运行状态
 * `events` - 监控事件
 * `ignoreexception` - 忽略异常
 * `threadmode` - 线程模式
 * `last_start_at` - 最后运行时间
 * `codename` - 代码标识
 * `createdate` - 建立时间
 * `createman` - 建立人
 * `logicsubtype` - 逻辑子类
 * `logictype` - 逻辑类型
 * `memo` - 备注
 * `psdeid` - 实体
 * `psdelogicid` - 实体处理逻辑标识
 * `psdelogicname` - 实体处理逻辑名称
 * `psdename` - 实体
 * `updatedate` - 更新时间
 * `updateman` - 更新人
 * `validflag` - 启用
 * `extension_tag` - 扩展标记
 * `extension_tag2` - 扩展标记2
 * `extension_tag3` - 扩展标记3
 * `extension_tag4` - 扩展标记4




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "applyflag" : null,
  "attachtopsdeactionid" : null,
  "attachtopsdeactionname" : null,
  "dynamodelflag" : null,
  "attachtopsdedatasetid" : null,
  "attachtopsdedatasetname" : null,
  "timerpolicy" : null,
  "last_state" : null,
  "events" : null,
  "ignoreexception" : null,
  "threadmode" : null,
  "last_start_at" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "logicsubtype" : null,
  "logictype" : null,
  "memo" : null,
  "psdeid" : null,
  "psdelogicid" : null,
  "psdelogicname" : null,
  "psdename" : null,
  "updatedate" : null,
  "updateman" : null,
  "validflag" : null,
  "extension_tag" : null,
  "extension_tag2" : null,
  "extension_tag3" : null,
  "extension_tag4" : null,
}
```


#### **Response**
```json

{
  "applyflag" : null,
  "attachtopsdeactionid" : null,
  "attachtopsdeactionname" : null,
  "dynamodelflag" : null,
  "attachtopsdedatasetid" : null,
  "attachtopsdedatasetname" : null,
  "timerpolicy" : null,
  "last_state" : null,
  "events" : null,
  "ignoreexception" : null,
  "threadmode" : null,
  "last_start_at" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "logicsubtype" : null,
  "logictype" : null,
  "memo" : null,
  "psdeid" : null,
  "psdelogicid" : null,
  "psdelogicname" : null,
  "psdename" : null,
  "updatedate" : null,
  "updateman" : null,
  "validflag" : null,
  "extension_tag" : null,
  "extension_tag2" : null,
  "extension_tag3" : null,
  "extension_tag4" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Get_last_run_info `GET` `/psdelogics/{key}/get_last_run_info` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 实体处理逻辑标识





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
  "applyflag" : null,
  "attachtopsdeactionid" : null,
  "attachtopsdeactionname" : null,
  "dynamodelflag" : null,
  "attachtopsdedatasetid" : null,
  "attachtopsdedatasetname" : null,
  "timerpolicy" : null,
  "last_state" : null,
  "events" : null,
  "ignoreexception" : null,
  "threadmode" : null,
  "last_start_at" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "logicsubtype" : null,
  "logictype" : null,
  "memo" : null,
  "psdeid" : null,
  "psdelogicid" : null,
  "psdelogicname" : null,
  "psdename" : null,
  "updatedate" : null,
  "updateman" : null,
  "validflag" : null,
  "extension_tag" : null,
  "extension_tag2" : null,
  "extension_tag3" : null,
  "extension_tag4" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Save `POST` `/psdelogics/{key}/save` 


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 实体处理逻辑标识



<p class="panel-title"><b>Body</b></p>

 * `applyflag` - 扩展状态
 * `attachtopsdeactionid` - 附加到指定行为
 * `attachtopsdeactionname` - 附加到指定行为
 * `dynamodelflag` - 扩展模型
 * `attachtopsdedatasetid` - 附加到指定数据集
 * `attachtopsdedatasetname` - 附加到指定数据集
 * `timerpolicy` - 定时触发策略
 * `last_state` - 最后运行状态
 * `events` - 监控事件
 * `ignoreexception` - 忽略异常
 * `threadmode` - 线程模式
 * `last_start_at` - 最后运行时间
 * `codename` - 代码标识
 * `createdate` - 建立时间
 * `createman` - 建立人
 * `logicsubtype` - 逻辑子类
 * `logictype` - 逻辑类型
 * `memo` - 备注
 * `psdeid` - 实体
 * `psdelogicid` - 实体处理逻辑标识
 * `psdelogicname` - 实体处理逻辑名称
 * `psdename` - 实体
 * `updatedate` - 更新时间
 * `updateman` - 更新人
 * `validflag` - 启用
 * `extension_tag` - 扩展标记
 * `extension_tag2` - 扩展标记2
 * `extension_tag3` - 扩展标记3
 * `extension_tag4` - 扩展标记4




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
  "applyflag" : null,
  "attachtopsdeactionid" : null,
  "attachtopsdeactionname" : null,
  "dynamodelflag" : null,
  "attachtopsdedatasetid" : null,
  "attachtopsdedatasetname" : null,
  "timerpolicy" : null,
  "last_state" : null,
  "events" : null,
  "ignoreexception" : null,
  "threadmode" : null,
  "last_start_at" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "logicsubtype" : null,
  "logictype" : null,
  "memo" : null,
  "psdeid" : null,
  "psdelogicid" : null,
  "psdelogicname" : null,
  "psdename" : null,
  "updatedate" : null,
  "updateman" : null,
  "validflag" : null,
  "extension_tag" : null,
  "extension_tag2" : null,
  "extension_tag3" : null,
  "extension_tag4" : null,
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
FetchDefault `POST` `/psdelogics/fetchdefault` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_applyflag_eq` - 扩展状态
 * `n_dynamodelflag_eq` - 扩展模型
 * `n_logicsubtype_eq` - 逻辑子类
 * `n_logicsubtype_in` - 逻辑子类
 * `n_logicsubtype_noteq` - 逻辑子类
 * `n_psdeid_eq` - 实体
 * `n_psdelogicid_eq` - 实体处理逻辑标识
 * `n_psdelogicname_like` - 实体处理逻辑名称
 * `n_psdename_eq` - 实体
 * `n_psdename_like` - 实体




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_applyflag_eq" : null,
  "n_dynamodelflag_eq" : null,
  "n_logicsubtype_eq" : null,
  "n_logicsubtype_in" : null,
  "n_logicsubtype_noteq" : null,
  "n_psdeid_eq" : null,
  "n_psdelogicid_eq" : null,
  "n_psdelogicname_like" : null,
  "n_psdename_eq" : null,
  "n_psdename_like" : null,
}
```


#### **Response**
```json
[
  {
    "applyflag" : null,
    "attachtopsdeactionid" : null,
    "attachtopsdeactionname" : null,
    "dynamodelflag" : null,
    "attachtopsdedatasetid" : null,
    "attachtopsdedatasetname" : null,
    "timerpolicy" : null,
    "last_state" : null,
    "events" : null,
    "ignoreexception" : null,
    "threadmode" : null,
    "last_start_at" : null,
    "codename" : null,
    "createdate" : null,
    "createman" : null,
    "logicsubtype" : null,
    "logictype" : null,
    "memo" : null,
    "psdeid" : null,
    "psdelogicid" : null,
    "psdelogicname" : null,
    "psdename" : null,
    "updatedate" : null,
    "updateman" : null,
    "validflag" : null,
    "extension_tag" : null,
    "extension_tag2" : null,
    "extension_tag3" : null,
    "extension_tag4" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->


<!-- panels:start -->
<!-- div:left-panel -->
下载导入模板 `GET` `/psdelogics/importtemplate`

<p class="panel-title"><b>RequestParam</b></p>

* srfimporttag - `导入模板标识`

<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**

<p class="panel-title"><b>RequestParam</b></p>

```json
srfimporttag=IMPORTTAG
```

#### **Response**
```file
数据导入模板.xlsx
```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
数据导出 `POST` `/psdelogics/exportdata/{param},/psdelogics/exportdata/{param}/{key}`

<p class="panel-title"><b>PathVariable</b></p>

* param - `导出集合方法名称`
* key - `数据主键`

<p class="panel-title"><b>RequestParam</b></p>

* srfexporttag - `导出模板标识`

<p class="panel-title"><b>Body</b></p>

* page - `page`
* size - `分页大小`
* n_xxx_eq - `过滤参数`

<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**

<p class="panel-title"><b>PathVariable</b></p>

```json
fetchdefult
```

<p class="panel-title"><b>RequestParam</b></p>

```json
srfexporttag=EXPORTTAG
```

<p class="panel-title"><b>Body</b></p>

```json
参考param对应的集合请求参数
```

#### **Response**
```file
数据导出.xlsx
```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
数据导入 `POST` `/psdelogics/importdata`

<p class="panel-title"><b>RequestParam</b></p>

* srfimporttag - `导入标识`

<p class="panel-title"><b>Body</b></p>

* file - `导入数据.xlsx`

<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**

<p class="panel-title"><b>RequestParam</b></p>

```json
srfimporttag=IMPORTTAG
```

<p class="panel-title"><b>Body</b></p>

```
file=导入数据.xlsx
```

#### **Response**
```json
{
  1:导入错误信息,
  2:导入错误信息,
  3:导入错误信息,
  ...
}
```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
数据导入（返回错误excel） `POST` `/psdelogics/importdata2`

<p class="panel-title"><b>RequestParam</b></p>

* srfimporttag - `导入标识`

<p class="panel-title"><b>Body</b></p>

* file - `导入数据.xlsx`

<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**

<p class="panel-title"><b>RequestParam</b></p>

```json
srfimporttag=IMPORTTAG
```

<p class="panel-title"><b>Body</b></p>

```
file=导入数据.xlsx
```

#### **Response**
```file
导入错误.xlsx
```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
自定义表头导入（异步） `GET` `/psdelogics/asyncimportdata2`

<p class="panel-title"><b>RequestParam</b></p>

* srfimporttag - `导入标识`
* srfossfileid - `导入文件`
* srfimportschemaid - `表头定义`

<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**

<p class="panel-title"><b>RequestParam</b></p>

```json
srfimporttag=IMPORTTAG
srfossfileid=b87cee52cfb88072b5733d9a796d8dca
srfimportschemaid=81593a65e81b7a07fcf84bd3e93cf3b8
```

#### **Response**
```json
{
  "actiontype": "DEIMPORTDATA2",
  "srfdcid": null,
  "updateman": null,
  "fulltopictag": null,
  "actionstate": 10,
  "dcsystemid": null,
  "createdate": null,
  "asyncacitonid": "1ea54b415c09d459de668eff641aa9aa",
  "asyncacitonname": "[导入]数据导入作业[dataimport]",
  "actionparam2": "dataimport",
  "createman": null,
  "updatedate": null,
  "actionparam": null
}
```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
数据打印 `GET` `/psdelogics/printdata/{key}`

<p class="panel-title"><b>PathVariable</b></p>

* key - `打印数据key`

<p class="panel-title"><b>RequestParam</b></p>

* srfprinttag - `打印标识`
* srfcontenttype - `报表类型`


<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**

<p class="panel-title"><b>PathVariable</b></p>

```json
key
```

<p class="panel-title"><b>RequestParam</b></p>

```
srfprinttag=PRINTTAG
srfcontenttype=PDF
```

#### **Response**
```file

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
实体报表 `POST` `/psdelogics/report`

<p class="panel-title"><b>RequestParam</b></p>

* srfreporttag - `报表标识`
* srfcontenttype - `报表类型`


<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**

<p class="panel-title"><b>RequestParam</b></p>

```
srfreporttag=DRX
srfcontenttype=PDF
```

<p class="panel-title"><b>Body</b></p>

```json
{
  "":"",
  "":"",
  ...
}
```

#### **Response**
```

```
<!-- tabs:end -->
<!-- panels:end -->


