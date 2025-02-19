## 实体映射(DEMap) <!-- {docsify-ignore-all} -->



<br>

<p class="panel-title"><b>实体</b></p>

* [主状态值代理(MSVALUEPROXY)](module/extension/MSVALUEPROXY)

<p class="panel-title"><b>映射实体</b></p>

* [工作项状态(WORK_ITEM_STATE)](module/ProjMgmt/WORK_ITEM_STATE)


<p class="panel-title"><b>属性映射</b></p>

* `属性等价`
`MSVALUEPROXYNAME(主状态值代理名称)` <i class="fa fa-angle-double-right"/></i> `NAME(名称)`
* `属性等价`
`BKCOLOR(背景颜色)` <i class="fa fa-angle-double-right"/></i> `COLOR(颜色)`
* `属性等价`
`MSVALUEPROXYID(主状态值代理标识)` <i class="fa fa-angle-double-right"/></i> `ID(标识)`
* `直接值到源属性`
`'rgba(255, 255, 255, 1)'` <i class="fa fa-angle-double-right"/></i> `COLOR(颜色)`

<p class="panel-title"><b>行为映射</b></p>

* `内部处理`
`Create` <i class="fa fa-angle-double-right"/></i> `Create`
* `内部处理`
`Update` <i class="fa fa-angle-double-right"/></i> `Update`
* `内部处理`
`Remove` <i class="fa fa-angle-double-right"/></i> `Remove`
* `内部处理`
`Get` <i class="fa fa-angle-double-right"/></i> `Get`
* `内部处理`
`GetDraft` <i class="fa fa-angle-double-right"/></i> `GetDraft`
* `内部处理`
`CheckKey` <i class="fa fa-angle-double-right"/></i> `CheckKey`
* `内部处理`
`Save` <i class="fa fa-angle-double-right"/></i> `Save`

<p class="panel-title"><b>查询映射</b></p>

* `内部处理`
`DEFAULT(数据查询)` <i class="fa fa-angle-double-right"/></i> `DEFAULT(数据查询)` 
* `内部处理`
`VIEW(默认（全部数据）)` <i class="fa fa-angle-double-right"/></i> `VIEW(默认（全部数据）)` 

<p class="panel-title"><b>集合映射</b></p>

* `内部处理`
`DEFAULT(数据集)` <i class="fa fa-angle-double-right"/></i> `DEFAULT(数据集)` 并且 `启用查询条件`
