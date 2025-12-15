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
var from = "from: AI智能体\n";
if (uiLogic.default.data && uiLogic.default.data.messages && uiLogic.default.data.messages.length > 0) {
    const lastAns = uiLogic.default.data.messages[uiLogic.default.data.messages.length - 1];
    answer = lastAns.realcontent;
    if(uiLogic.default.data.caption) {
        from = "from: "+uiLogic.default.data.caption+"\n";
    }
}
else if (uiLogic.default.msg) {
    answer = uiLogic.default.msg.realcontent;
    if(uiLogic.default.topic && uiLogic.default.topic.caption) {
        from = "from: "+uiLogic.default.topic.caption+"\n";
    }
}

uiLogic.entity = {};

if (answer && typeof answer == 'string') {

    uiLogic.entity.principal_id = realView.context[_entity_tag];
    var principal_type = _entity_tag.toUpperCase();
    if(principal_type === 'ARTICLE_PAGE' ) {
        principal_type = 'PAGE';
    }
    uiLogic.entity.principal_type= principal_type;
    uiLogic.entity.owner_type= principal_type;
    var html_content = from + answer; 

    uiLogic.entity.content = html_content;
            
}

```
