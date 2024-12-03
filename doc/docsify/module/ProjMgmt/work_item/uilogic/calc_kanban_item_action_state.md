## 计算面板项行为状态 <!-- {docsify-ignore-all} -->

   看板中工作项的归档或激活按钮的禁用判定

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
state "开始" as Begin <<start>> [[$./calc_kanban_item_action_state#begin {开始}]]
state "看板中工作项的归档或激活按钮的禁用判定" as RAWJSCODE1  [[$./calc_kanban_item_action_state#rawjscode1 {看板中工作项的归档或激活按钮的禁用判定}]]


Begin --> RAWJSCODE1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>




#### 看板中工作项的归档或激活按钮的禁用判定 :id=RAWJSCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
setTimeout(() => {
	const items = uiLogic.kanban.state.items;
    const uaState = uiLogic.kanban.state.uaState;
	if (items && items.length > 0) {
		items.forEach(item => {
            const actions = uaState[item.srfkey];
            Object.values(actions).forEach(action=>{
               // 归档
					if (action.uiActionId === 'archive@work_item') {
						action.disabled = item.is_archived !== 0;
					} else if (action.uiActionId === 'activate@work_item') {
						// 激活
						action.disabled = item.is_archived === 0;
					} 
            })
        })
	}
}, 1000);
```



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|看板|kanban|部件对象||
|视图|view|当前视图对象||
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
