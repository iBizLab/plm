## AI登记预估工时 <!-- {docsify-ignore-all} -->

   

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
state "开始" as Begin <<start>> [[$./ai_estimated#begin {开始}]]
state "AI登记预估工时" as DEACTION_01  [[$./ai_estimated#deaction_01 {AI登记预估工时}]]
state "注入脚本代码" as RAWJSCODE4  [[$./ai_estimated#rawjscode4 {注入脚本代码}]]
state "刷新父页面" as RAWJSCODE_02  [[$./ai_estimated#rawjscode_02 {刷新父页面}]]


Begin --> RAWJSCODE4
RAWJSCODE4 --> DEACTION_01 : [[$./ai_estimated#rawjscode4-deaction_01{连接名称} 连接名称]]
DEACTION_01 --> RAWJSCODE_02


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>




#### 注入脚本代码 :id=RAWJSCODE4<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript

console.info("ai callback");
var answer = null;
var realView = view;
var _entity_tag = view.context._entity_tag;
if (realView.model.appDataEntityId && realView.model.appDataEntityId.endsWith("ai_agent_assignment")) {
    realView = view.parentView;
}
if (!_entity_tag) {
    _entity_tag = realView.model.appDataEntityId ? realView.model.appDataEntityId.split('.').at(-1) : "";
}
if (_entity_tag) {
    uiLogic.default._entity_tag = _entity_tag;
}
//var formController = realView.getController("form");
var wl_name = "";
if (uiLogic.default.data && uiLogic.default.data.messages &&
     uiLogic.default.data.messages.length > 0) {
    const lastAns = uiLogic.default.data.messages[uiLogic.default.data.messages.length - 1];
    answer = lastAns.realcontent;
    if(uiLogic.default.data.aiChat && 
        uiLogic.default.data.aiChat.appendCurData &&
        uiLogic.default.data.aiChat.appendCurData.title) {
        wl_name = uiLogic.default.data.aiChat.appendCurData.title;
    }
}
else if (uiLogic.default.msg) {
    answer = uiLogic.default.msg.realcontent;
    if(uiLogic.default.topic && uiLogic.default.topic.aiChat && 
        uiLogic.default.topic.aiChat.appendCurData &&
        uiLogic.default.topic.aiChat.appendCurData.title) {
        wl_name = uiLogic.default.topic.aiChat.appendCurData.title;
    }
}

uiLogic.list = [];
uiLogic.result = 0;

if (answer && typeof answer == 'string') {
    var ret = ibiz.util.jsonUtil.parseJson(answer);
    if (ret.success && ret.data) {
        if (ret.data_type == 'jsonarray' && _entity_tag) {
            const principal_id = realView.context[_entity_tag];
            const register_date = new Date();   
            ret.data.forEach(entity => {
                entity.principal_id = principal_id;
                entity.register_date = register_date;
                entity.principal_type= _entity_tag.toUpperCase();
                entity.name = wl_name;
                entity.category="ESTIMATED_WORKLOAD"
                uiLogic.list.push(entity);
                uiLogic.result = uiLogic.result+1;
            });
        }

    }

}

```

#### AI登记预估工时 :id=DEACTION_01<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [工时(WORKLOAD)](module/Base/workload.md) 行为 [Create](module/Base/workload#行为) ，行为参数为`list`

#### 刷新父页面 :id=RAWJSCODE_02<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
view.parentView.call("Refresh");
ibiz.message.success('预估工时登记成功');
```

### 连接条件说明
#### 连接名称 :id=RAWJSCODE4-DEACTION_01

```result(result)``` GT ```0```


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|list|list|数据对象列表||
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
|result|result|简单数据||
