## 实体映射(DEMap) <!-- {docsify-ignore-all} -->



<br>

<p class="panel-title"><b>实体</b></p>

* [MCP服务标记代理(MCPSERVERTAGPROXY)](module/extension/MCPSERVERTAGPROXY)

<p class="panel-title"><b>映射实体</b></p>

* [AI调用工具(AI_TOOL)](module/ai/AI_TOOL)


<p class="panel-title"><b>属性映射</b></p>

* `属性等价`
`MCPSERVERTAGPROXYID(MCP服务标记代理标识)` <i class="fa fa-angle-double-right"/></i> `TOOL_TAG(工具标记)`
* `属性等价`
`MCPSERVERTAGPROXYNAME(MCP服务标记代理名称)` <i class="fa fa-angle-double-right"/></i> `NAME(AI调用工具名称)`

<p class="panel-title"><b>查询映射</b></p>

* `内部处理`
`DEFAULT(DEFAULT)` <i class="fa fa-angle-double-right"/></i> `extension_mcp_server(内置扩展mcp服务)` 并且 `启用查询条件`
