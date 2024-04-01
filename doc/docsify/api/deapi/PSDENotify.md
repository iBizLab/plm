# 实体通知(PSDENotify)




<!-- panels:start -->
<!-- div:left-panel -->
Create `POST` `/psdenotifies` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `beginpsdefid` - 开始时间属性
 * `beginpsdefname` - 开始时间属性
 * `checktimer` - 检查间隔
 * `codename` - 代码名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `customcond` - 自定义条件
 * `endpsdefid` - 结束时间属性
 * `endpsdefname` - 结束时间属性
 * `events` - 监控事件集
 * `fields` - 监控变化属性集
 * `msgtype` - 通知消息类型
 * `notifyend` - 延后通知间隔
 * `notifystart` - 提前通知间隔
 * `notifysubtype` - 通知子类
 * `notifytag` - 通知标记
 * `notifytag2` - 通知标记2
 * `psdedsid` - 实体数据集
 * `psdedsname` - 实体数据集
 * `psdeid` - 实体
 * `psdename` - 实体
 * `psdenotifyid` - 实体通知标识
 * `psdenotifyname` - 实体通知名称
 * `pssysmsgqueueid` - 系统消息队列
 * `pssysmsgqueuename` - 系统消息队列
 * `pssysmsgtemplid` - 系统消息模板
 * `pssysmsgtemplname` - 系统消息模板
 * `taskmode` - 附加任务模式
 * `timermode` - 定时触发模式
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `usertag` - 用户标识
 * `usertag2` - 用户标识2
 * `usertag3` - 用户标识3
 * `usertag4` - 用户标识4
 * `validflag` - 启用
 * `psdenotifytargets` - null




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "beginpsdefid" : null,
  "beginpsdefname" : null,
  "checktimer" : null,
  "codename" : null,
  "create_man" : null,
  "create_time" : null,
  "customcond" : null,
  "endpsdefid" : null,
  "endpsdefname" : null,
  "events" : null,
  "fields" : null,
  "msgtype" : null,
  "notifyend" : null,
  "notifystart" : null,
  "notifysubtype" : null,
  "notifytag" : null,
  "notifytag2" : null,
  "psdedsid" : null,
  "psdedsname" : null,
  "psdeid" : null,
  "psdename" : null,
  "psdenotifyid" : null,
  "psdenotifyname" : null,
  "pssysmsgqueueid" : null,
  "pssysmsgqueuename" : null,
  "pssysmsgtemplid" : null,
  "pssysmsgtemplname" : null,
  "taskmode" : null,
  "timermode" : null,
  "update_man" : null,
  "update_time" : null,
  "usertag" : null,
  "usertag2" : null,
  "usertag3" : null,
  "usertag4" : null,
  "validflag" : null,
  "psdenotifytargets" : null,
}
```


#### **Response**
```json

{
  "beginpsdefid" : null,
  "beginpsdefname" : null,
  "checktimer" : null,
  "codename" : null,
  "create_man" : null,
  "create_time" : null,
  "customcond" : null,
  "endpsdefid" : null,
  "endpsdefname" : null,
  "events" : null,
  "fields" : null,
  "msgtype" : null,
  "notifyend" : null,
  "notifystart" : null,
  "notifysubtype" : null,
  "notifytag" : null,
  "notifytag2" : null,
  "psdedsid" : null,
  "psdedsname" : null,
  "psdeid" : null,
  "psdename" : null,
  "psdenotifyid" : null,
  "psdenotifyname" : null,
  "pssysmsgqueueid" : null,
  "pssysmsgqueuename" : null,
  "pssysmsgtemplid" : null,
  "pssysmsgtemplname" : null,
  "taskmode" : null,
  "timermode" : null,
  "update_man" : null,
  "update_time" : null,
  "usertag" : null,
  "usertag2" : null,
  "usertag3" : null,
  "usertag4" : null,
  "validflag" : null,
  "psdenotifytargets" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Get `GET` `/psdenotifies/{key}` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 实体通知标识





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
  "beginpsdefid" : null,
  "beginpsdefname" : null,
  "checktimer" : null,
  "codename" : null,
  "create_man" : null,
  "create_time" : null,
  "customcond" : null,
  "endpsdefid" : null,
  "endpsdefname" : null,
  "events" : null,
  "fields" : null,
  "msgtype" : null,
  "notifyend" : null,
  "notifystart" : null,
  "notifysubtype" : null,
  "notifytag" : null,
  "notifytag2" : null,
  "psdedsid" : null,
  "psdedsname" : null,
  "psdeid" : null,
  "psdename" : null,
  "psdenotifyid" : null,
  "psdenotifyname" : null,
  "pssysmsgqueueid" : null,
  "pssysmsgqueuename" : null,
  "pssysmsgtemplid" : null,
  "pssysmsgtemplname" : null,
  "taskmode" : null,
  "timermode" : null,
  "update_man" : null,
  "update_time" : null,
  "usertag" : null,
  "usertag2" : null,
  "usertag3" : null,
  "usertag4" : null,
  "validflag" : null,
  "psdenotifytargets" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Remove `DELETE` `/psdenotifies/{key}` <i class="fa fa-key"></i>`DELETE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 实体通知标识





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
Update `PUT` `/psdenotifies/{key}` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 实体通知标识



<p class="panel-title"><b>Body</b></p>

 * `beginpsdefid` - 开始时间属性
 * `beginpsdefname` - 开始时间属性
 * `checktimer` - 检查间隔
 * `codename` - 代码名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `customcond` - 自定义条件
 * `endpsdefid` - 结束时间属性
 * `endpsdefname` - 结束时间属性
 * `events` - 监控事件集
 * `fields` - 监控变化属性集
 * `msgtype` - 通知消息类型
 * `notifyend` - 延后通知间隔
 * `notifystart` - 提前通知间隔
 * `notifysubtype` - 通知子类
 * `notifytag` - 通知标记
 * `notifytag2` - 通知标记2
 * `psdedsid` - 实体数据集
 * `psdedsname` - 实体数据集
 * `psdeid` - 实体
 * `psdename` - 实体
 * `psdenotifyid` - 实体通知标识
 * `psdenotifyname` - 实体通知名称
 * `pssysmsgqueueid` - 系统消息队列
 * `pssysmsgqueuename` - 系统消息队列
 * `pssysmsgtemplid` - 系统消息模板
 * `pssysmsgtemplname` - 系统消息模板
 * `taskmode` - 附加任务模式
 * `timermode` - 定时触发模式
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `usertag` - 用户标识
 * `usertag2` - 用户标识2
 * `usertag3` - 用户标识3
 * `usertag4` - 用户标识4
 * `validflag` - 启用
 * `psdenotifytargets` - null




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
  "beginpsdefid" : null,
  "beginpsdefname" : null,
  "checktimer" : null,
  "codename" : null,
  "create_man" : null,
  "create_time" : null,
  "customcond" : null,
  "endpsdefid" : null,
  "endpsdefname" : null,
  "events" : null,
  "fields" : null,
  "msgtype" : null,
  "notifyend" : null,
  "notifystart" : null,
  "notifysubtype" : null,
  "notifytag" : null,
  "notifytag2" : null,
  "psdedsid" : null,
  "psdedsname" : null,
  "psdeid" : null,
  "psdename" : null,
  "psdenotifyid" : null,
  "psdenotifyname" : null,
  "pssysmsgqueueid" : null,
  "pssysmsgqueuename" : null,
  "pssysmsgtemplid" : null,
  "pssysmsgtemplname" : null,
  "taskmode" : null,
  "timermode" : null,
  "update_man" : null,
  "update_time" : null,
  "usertag" : null,
  "usertag2" : null,
  "usertag3" : null,
  "usertag4" : null,
  "validflag" : null,
  "psdenotifytargets" : null,
}
```


#### **Response**
```json

{
  "beginpsdefid" : null,
  "beginpsdefname" : null,
  "checktimer" : null,
  "codename" : null,
  "create_man" : null,
  "create_time" : null,
  "customcond" : null,
  "endpsdefid" : null,
  "endpsdefname" : null,
  "events" : null,
  "fields" : null,
  "msgtype" : null,
  "notifyend" : null,
  "notifystart" : null,
  "notifysubtype" : null,
  "notifytag" : null,
  "notifytag2" : null,
  "psdedsid" : null,
  "psdedsname" : null,
  "psdeid" : null,
  "psdename" : null,
  "psdenotifyid" : null,
  "psdenotifyname" : null,
  "pssysmsgqueueid" : null,
  "pssysmsgqueuename" : null,
  "pssysmsgtemplid" : null,
  "pssysmsgtemplname" : null,
  "taskmode" : null,
  "timermode" : null,
  "update_man" : null,
  "update_time" : null,
  "usertag" : null,
  "usertag2" : null,
  "usertag3" : null,
  "usertag4" : null,
  "validflag" : null,
  "psdenotifytargets" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Apply `POST` `/psdenotifies/{key}/apply` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 实体通知标识



<p class="panel-title"><b>Body</b></p>

 * `beginpsdefid` - 开始时间属性
 * `beginpsdefname` - 开始时间属性
 * `checktimer` - 检查间隔
 * `codename` - 代码名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `customcond` - 自定义条件
 * `endpsdefid` - 结束时间属性
 * `endpsdefname` - 结束时间属性
 * `events` - 监控事件集
 * `fields` - 监控变化属性集
 * `msgtype` - 通知消息类型
 * `notifyend` - 延后通知间隔
 * `notifystart` - 提前通知间隔
 * `notifysubtype` - 通知子类
 * `notifytag` - 通知标记
 * `notifytag2` - 通知标记2
 * `psdedsid` - 实体数据集
 * `psdedsname` - 实体数据集
 * `psdeid` - 实体
 * `psdename` - 实体
 * `psdenotifyid` - 实体通知标识
 * `psdenotifyname` - 实体通知名称
 * `pssysmsgqueueid` - 系统消息队列
 * `pssysmsgqueuename` - 系统消息队列
 * `pssysmsgtemplid` - 系统消息模板
 * `pssysmsgtemplname` - 系统消息模板
 * `taskmode` - 附加任务模式
 * `timermode` - 定时触发模式
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `usertag` - 用户标识
 * `usertag2` - 用户标识2
 * `usertag3` - 用户标识3
 * `usertag4` - 用户标识4
 * `validflag` - 启用
 * `psdenotifytargets` - null




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
  "beginpsdefid" : null,
  "beginpsdefname" : null,
  "checktimer" : null,
  "codename" : null,
  "create_man" : null,
  "create_time" : null,
  "customcond" : null,
  "endpsdefid" : null,
  "endpsdefname" : null,
  "events" : null,
  "fields" : null,
  "msgtype" : null,
  "notifyend" : null,
  "notifystart" : null,
  "notifysubtype" : null,
  "notifytag" : null,
  "notifytag2" : null,
  "psdedsid" : null,
  "psdedsname" : null,
  "psdeid" : null,
  "psdename" : null,
  "psdenotifyid" : null,
  "psdenotifyname" : null,
  "pssysmsgqueueid" : null,
  "pssysmsgqueuename" : null,
  "pssysmsgtemplid" : null,
  "pssysmsgtemplname" : null,
  "taskmode" : null,
  "timermode" : null,
  "update_man" : null,
  "update_time" : null,
  "usertag" : null,
  "usertag2" : null,
  "usertag3" : null,
  "usertag4" : null,
  "validflag" : null,
  "psdenotifytargets" : null,
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
CheckKey `POST` `/psdenotifies/checkkey` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `beginpsdefid` - 开始时间属性
 * `beginpsdefname` - 开始时间属性
 * `checktimer` - 检查间隔
 * `codename` - 代码名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `customcond` - 自定义条件
 * `endpsdefid` - 结束时间属性
 * `endpsdefname` - 结束时间属性
 * `events` - 监控事件集
 * `fields` - 监控变化属性集
 * `msgtype` - 通知消息类型
 * `notifyend` - 延后通知间隔
 * `notifystart` - 提前通知间隔
 * `notifysubtype` - 通知子类
 * `notifytag` - 通知标记
 * `notifytag2` - 通知标记2
 * `psdedsid` - 实体数据集
 * `psdedsname` - 实体数据集
 * `psdeid` - 实体
 * `psdename` - 实体
 * `psdenotifyid` - 实体通知标识
 * `psdenotifyname` - 实体通知名称
 * `pssysmsgqueueid` - 系统消息队列
 * `pssysmsgqueuename` - 系统消息队列
 * `pssysmsgtemplid` - 系统消息模板
 * `pssysmsgtemplname` - 系统消息模板
 * `taskmode` - 附加任务模式
 * `timermode` - 定时触发模式
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `usertag` - 用户标识
 * `usertag2` - 用户标识2
 * `usertag3` - 用户标识3
 * `usertag4` - 用户标识4
 * `validflag` - 启用
 * `psdenotifytargets` - null




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "beginpsdefid" : null,
  "beginpsdefname" : null,
  "checktimer" : null,
  "codename" : null,
  "create_man" : null,
  "create_time" : null,
  "customcond" : null,
  "endpsdefid" : null,
  "endpsdefname" : null,
  "events" : null,
  "fields" : null,
  "msgtype" : null,
  "notifyend" : null,
  "notifystart" : null,
  "notifysubtype" : null,
  "notifytag" : null,
  "notifytag2" : null,
  "psdedsid" : null,
  "psdedsname" : null,
  "psdeid" : null,
  "psdename" : null,
  "psdenotifyid" : null,
  "psdenotifyname" : null,
  "pssysmsgqueueid" : null,
  "pssysmsgqueuename" : null,
  "pssysmsgtemplid" : null,
  "pssysmsgtemplname" : null,
  "taskmode" : null,
  "timermode" : null,
  "update_man" : null,
  "update_time" : null,
  "usertag" : null,
  "usertag2" : null,
  "usertag3" : null,
  "usertag4" : null,
  "validflag" : null,
  "psdenotifytargets" : null,
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
GetDraft `GET` `/psdenotifies/getdraft` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `beginpsdefid` - 开始时间属性
 * `beginpsdefname` - 开始时间属性
 * `checktimer` - 检查间隔
 * `codename` - 代码名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `customcond` - 自定义条件
 * `endpsdefid` - 结束时间属性
 * `endpsdefname` - 结束时间属性
 * `events` - 监控事件集
 * `fields` - 监控变化属性集
 * `msgtype` - 通知消息类型
 * `notifyend` - 延后通知间隔
 * `notifystart` - 提前通知间隔
 * `notifysubtype` - 通知子类
 * `notifytag` - 通知标记
 * `notifytag2` - 通知标记2
 * `psdedsid` - 实体数据集
 * `psdedsname` - 实体数据集
 * `psdeid` - 实体
 * `psdename` - 实体
 * `psdenotifyid` - 实体通知标识
 * `psdenotifyname` - 实体通知名称
 * `pssysmsgqueueid` - 系统消息队列
 * `pssysmsgqueuename` - 系统消息队列
 * `pssysmsgtemplid` - 系统消息模板
 * `pssysmsgtemplname` - 系统消息模板
 * `taskmode` - 附加任务模式
 * `timermode` - 定时触发模式
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `usertag` - 用户标识
 * `usertag2` - 用户标识2
 * `usertag3` - 用户标识3
 * `usertag4` - 用户标识4
 * `validflag` - 启用
 * `psdenotifytargets` - null




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "beginpsdefid" : null,
  "beginpsdefname" : null,
  "checktimer" : null,
  "codename" : null,
  "create_man" : null,
  "create_time" : null,
  "customcond" : null,
  "endpsdefid" : null,
  "endpsdefname" : null,
  "events" : null,
  "fields" : null,
  "msgtype" : null,
  "notifyend" : null,
  "notifystart" : null,
  "notifysubtype" : null,
  "notifytag" : null,
  "notifytag2" : null,
  "psdedsid" : null,
  "psdedsname" : null,
  "psdeid" : null,
  "psdename" : null,
  "psdenotifyid" : null,
  "psdenotifyname" : null,
  "pssysmsgqueueid" : null,
  "pssysmsgqueuename" : null,
  "pssysmsgtemplid" : null,
  "pssysmsgtemplname" : null,
  "taskmode" : null,
  "timermode" : null,
  "update_man" : null,
  "update_time" : null,
  "usertag" : null,
  "usertag2" : null,
  "usertag3" : null,
  "usertag4" : null,
  "validflag" : null,
  "psdenotifytargets" : null,
}
```


#### **Response**
```json

{
  "beginpsdefid" : null,
  "beginpsdefname" : null,
  "checktimer" : null,
  "codename" : null,
  "create_man" : null,
  "create_time" : null,
  "customcond" : null,
  "endpsdefid" : null,
  "endpsdefname" : null,
  "events" : null,
  "fields" : null,
  "msgtype" : null,
  "notifyend" : null,
  "notifystart" : null,
  "notifysubtype" : null,
  "notifytag" : null,
  "notifytag2" : null,
  "psdedsid" : null,
  "psdedsname" : null,
  "psdeid" : null,
  "psdename" : null,
  "psdenotifyid" : null,
  "psdenotifyname" : null,
  "pssysmsgqueueid" : null,
  "pssysmsgqueuename" : null,
  "pssysmsgtemplid" : null,
  "pssysmsgtemplname" : null,
  "taskmode" : null,
  "timermode" : null,
  "update_man" : null,
  "update_time" : null,
  "usertag" : null,
  "usertag2" : null,
  "usertag3" : null,
  "usertag4" : null,
  "validflag" : null,
  "psdenotifytargets" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Save `POST` `/psdenotifies/{key}/save` 


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 实体通知标识



<p class="panel-title"><b>Body</b></p>

 * `beginpsdefid` - 开始时间属性
 * `beginpsdefname` - 开始时间属性
 * `checktimer` - 检查间隔
 * `codename` - 代码名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `customcond` - 自定义条件
 * `endpsdefid` - 结束时间属性
 * `endpsdefname` - 结束时间属性
 * `events` - 监控事件集
 * `fields` - 监控变化属性集
 * `msgtype` - 通知消息类型
 * `notifyend` - 延后通知间隔
 * `notifystart` - 提前通知间隔
 * `notifysubtype` - 通知子类
 * `notifytag` - 通知标记
 * `notifytag2` - 通知标记2
 * `psdedsid` - 实体数据集
 * `psdedsname` - 实体数据集
 * `psdeid` - 实体
 * `psdename` - 实体
 * `psdenotifyid` - 实体通知标识
 * `psdenotifyname` - 实体通知名称
 * `pssysmsgqueueid` - 系统消息队列
 * `pssysmsgqueuename` - 系统消息队列
 * `pssysmsgtemplid` - 系统消息模板
 * `pssysmsgtemplname` - 系统消息模板
 * `taskmode` - 附加任务模式
 * `timermode` - 定时触发模式
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `usertag` - 用户标识
 * `usertag2` - 用户标识2
 * `usertag3` - 用户标识3
 * `usertag4` - 用户标识4
 * `validflag` - 启用
 * `psdenotifytargets` - null




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
  "beginpsdefid" : null,
  "beginpsdefname" : null,
  "checktimer" : null,
  "codename" : null,
  "create_man" : null,
  "create_time" : null,
  "customcond" : null,
  "endpsdefid" : null,
  "endpsdefname" : null,
  "events" : null,
  "fields" : null,
  "msgtype" : null,
  "notifyend" : null,
  "notifystart" : null,
  "notifysubtype" : null,
  "notifytag" : null,
  "notifytag2" : null,
  "psdedsid" : null,
  "psdedsname" : null,
  "psdeid" : null,
  "psdename" : null,
  "psdenotifyid" : null,
  "psdenotifyname" : null,
  "pssysmsgqueueid" : null,
  "pssysmsgqueuename" : null,
  "pssysmsgtemplid" : null,
  "pssysmsgtemplname" : null,
  "taskmode" : null,
  "timermode" : null,
  "update_man" : null,
  "update_time" : null,
  "usertag" : null,
  "usertag2" : null,
  "usertag3" : null,
  "usertag4" : null,
  "validflag" : null,
  "psdenotifytargets" : null,
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
FetchDefault `POST` `/psdenotifies/fetchdefault` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_notifysubtype_eq` - 通知子类
 * `n_psdeid_eq` - 实体
 * `n_psdenotifyid_eq` - 实体通知标识
 * `n_psdenotifyname_like` - 实体通知名称
 * `n_taskmode_eq` - 附加任务模式




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_notifysubtype_eq" : null,
  "n_psdeid_eq" : null,
  "n_psdenotifyid_eq" : null,
  "n_psdenotifyname_like" : null,
  "n_taskmode_eq" : null,
}
```


#### **Response**
```json
[
  {
    "beginpsdefid" : null,
    "beginpsdefname" : null,
    "checktimer" : null,
    "codename" : null,
    "create_man" : null,
    "create_time" : null,
    "customcond" : null,
    "endpsdefid" : null,
    "endpsdefname" : null,
    "events" : null,
    "fields" : null,
    "msgtype" : null,
    "notifyend" : null,
    "notifystart" : null,
    "notifysubtype" : null,
    "notifytag" : null,
    "notifytag2" : null,
    "psdedsid" : null,
    "psdedsname" : null,
    "psdeid" : null,
    "psdename" : null,
    "psdenotifyid" : null,
    "psdenotifyname" : null,
    "pssysmsgqueueid" : null,
    "pssysmsgqueuename" : null,
    "pssysmsgtemplid" : null,
    "pssysmsgtemplname" : null,
    "taskmode" : null,
    "timermode" : null,
    "update_man" : null,
    "update_time" : null,
    "usertag" : null,
    "usertag2" : null,
    "usertag3" : null,
    "usertag4" : null,
    "validflag" : null,
    "psdenotifytargets" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->


<!-- panels:start -->
<!-- div:left-panel -->
下载导入模板 `GET` `/psdenotifies/importtemplate`

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
数据导出 `POST` `/psdenotifies/exportdata/{param},/psdenotifies/exportdata/{param}/{key}`

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
数据导入 `POST` `/psdenotifies/importdata`

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
数据导入（返回错误excel） `POST` `/psdenotifies/importdata2`

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
自定义表头导入（异步） `GET` `/psdenotifies/asyncimportdata2`

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
数据打印 `GET` `/psdenotifies/printdata/{key}`

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
实体报表 `POST` `/psdenotifies/report`

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


