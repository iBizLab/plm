## 下载按钮是否显示 <!-- {docsify-ignore-all} -->

   下载按钮根据上下文的srfreadonly是否显示

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
state "开始" as Begin <<start>> [[$./download_show#begin {开始}]]
state "结束" as END1 <<end>> [[$./download_show#end1 {结束}]]
state "是否隐藏下载按钮" as RAWJSCODE1  [[$./download_show#rawjscode1 {是否隐藏下载按钮}]]


Begin --> RAWJSCODE1
RAWJSCODE1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>




#### 是否隐藏下载按钮 :id=RAWJSCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



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
					// 下载
					if (action.uiActionId === 'download@search_attachment') {
                        action.visible = false;
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
|当前部件对象|grid|当前部件对象||
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
