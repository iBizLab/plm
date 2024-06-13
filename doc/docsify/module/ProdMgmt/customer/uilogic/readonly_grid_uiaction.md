## 表格行为列状态 <!-- {docsify-ignore-all} -->

   表格根据上下文srfreadonly判断行为列是否启用

### 处理过程

```plantuml
@startuml
hide footbox
<style>
root {
  HyperlinkColor #42b983
}
</style>

hide empty description
state "开始" as Begin <<start>> [[$./readonly_grid_uiaction#begin {开始}]]
state "注入脚本代码" as RAWJSCODE1  [[$./readonly_grid_uiaction#rawjscode1 {注入脚本代码}]]
state "结束" as END1 <<end>> [[$./readonly_grid_uiaction#end1 {结束}]]


Begin --> RAWJSCODE1
RAWJSCODE1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>




#### 注入脚本代码 :id=RAWJSCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
	const rows = uiLogic.grid.state.rows;
	const srfreadonly = context.srfreadonly;
	if (rows && rows.length > 0) {
		rows.forEach(row => {
			const actionColumn = row.uiActionGroupStates.name;
			if (actionColumn && Object.values(actionColumn).length > 0) {
				Object.values(actionColumn).forEach(action => {
                    if(srfreadonly == true){
					    // 取消关联
					    if (action.uiActionId === 'add_categories@customer') {
                            action.disabled = true;
                        }else if(action.uiActionId === 'delete_customer@customer'){
                            action.disabled = true;
                        }
					}
				})
			}
		})
	}
```

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>






### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|表格|grid|当前部件对象||
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
