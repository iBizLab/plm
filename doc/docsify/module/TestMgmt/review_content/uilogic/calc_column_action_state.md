## 计算表格列行为状态(review) <!-- {docsify-ignore-all} -->

   用于动态控制界面行为组内界面行为的禁用状态

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
state "开始" as Begin <<start>> [[$./calc_column_action_state#begin {开始}]]
state "计算表格列行为状态" as RAWJSCODE1  [[$./calc_column_action_state#rawjscode1 {计算表格列行为状态}]]
state "结束" as END1 <<end>> [[$./calc_column_action_state#end1 {结束}]]
state "设置后的表格" as DEBUGPARAM1  [[$./calc_column_action_state#debugparam1 {设置后的表格}]]


Begin --> RAWJSCODE1
RAWJSCODE1 --> DEBUGPARAM1
DEBUGPARAM1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>




#### 计算表格列行为状态 :id=RAWJSCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
const rows = uiLogic.grid.state.rows;
if (rows && rows.length > 0) {
	rows.forEach(row => {
		const titleColumn = row.uiActionGroupStates.target_title;
		const review_state = row.data.review_data.state;
		if (titleColumn && Object.values(titleColumn).length > 0) {
			Object.values(titleColumn).forEach(action => {
				if (action.uiActionId === 'remove_case@review_content') {
					action.visible = review_state == '10';
				}
                if(action.uiActionId === 'remove_case@review_content' && context.srfreadonly ==true){
                    action.visible = false;
                }
			})
		}
        row.editColStates.change_type.disabled = review_state == '60';
        row.editColStates.change_version.disabled = review_state == '60';
        row.editColStates.change_version.readonly = review_state == '60';
        row.editColStates.change_version.editable = review_state == '60';
	})
}

```

#### 设置后的表格 :id=DEBUGPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[调试逻辑参数]</font></sup>



> [!NOTE|label:调试信息|icon:fa fa-bug]
> 调试输出参数`表格`的详细信息

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>






### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|表格|Grid|当前部件对象||
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
