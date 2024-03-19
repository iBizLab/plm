## 状态变更通知(state_onchage_notify) <!-- {docsify-ignore-all} -->



<br>
<p class="panel-title"><b>是否定时触发</b></p>

* `否`

<p class="panel-title"><b>消息队列</b></p>

* [默认消息队列](index/notify_index)

<p class="panel-title"><b>消息模板</b></p>

* [工单通知模板(状态变更)](index/notify_index?id=ticket_state_onchange)

<p class="panel-title"><b>通知类型</b></p>

* <i class="fa fa-check-square"/></i> 系统消息 <i class="fa fa-square"/></i> 电子邮件 <i class="fa fa-square"/></i> 手机短信 <i class="fa fa-square"/></i> MSN消息 <i class="fa fa-square"/></i> 检务通消息 <i class="fa fa-square"/></i> 微信 <i class="fa fa-square"/></i> 钉钉 <i class="fa fa-square"/></i> 企业微信

#### 通知目标

* **负责人**<br>
  目标类型：`当前实体属性`<br>
  目标属性：`负责人标识(ASSIGNEE_ID)`
* **关注人员**<br>
  目标类型：`系统消息目标`<br>
  系统目标：`关注对象(通过主数据标识)`
