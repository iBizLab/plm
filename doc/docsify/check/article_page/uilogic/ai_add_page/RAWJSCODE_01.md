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
var curData = {};
var from = "from: AI智能体\n";
if (uiLogic.default.data && uiLogic.default.data.messages && uiLogic.default.data.messages.length > 0) {
    const lastAns = uiLogic.default.data.messages[uiLogic.default.data.messages.length - 1];
    answer = lastAns.realcontent;
    if(uiLogic.default.data.aiChat && 
        uiLogic.default.data.aiChat.appendCurData ) {
        curData = uiLogic.default.data.aiChat.appendCurData;
    }
      if(uiLogic.default.data.caption) {
        from = "from: "+uiLogic.default.data.caption+"\n";
    }
}
else if (uiLogic.default.msg) {
    answer = uiLogic.default.msg.realcontent;
    if(uiLogic.default.topic && uiLogic.default.topic.aiChat && 
        uiLogic.default.topic.aiChat.appendCurData ) {
        curData = uiLogic.default.topic.aiChat.appendCurData;
    }
    if(uiLogic.default.topic && uiLogic.default.topic.caption) {
        from = "from: "+uiLogic.default.topic.caption +"\n";
    }
}

uiLogic.entity = {};

var project  = realView.context.project ? realView.context.project : realView.context.product;
if (!project) {
     project = curData.project_id || curData.product_id;
}
if (!project) {
    ibiz.message.error('未找到关联的知识空间');
}
else  if (answer && typeof answer == 'string') {
    uiLogic.entity.name = curData.title || curData.name; 
    uiLogic.entity.content = from+answer;
    uiLogic.entity.project = project; 
}

```
