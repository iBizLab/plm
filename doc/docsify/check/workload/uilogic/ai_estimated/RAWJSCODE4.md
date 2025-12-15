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
uiLogic.resultcnt = 0;

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
                uiLogic.resultcnt = uiLogic.resultcnt+1;
            });
        }

    }

}

```
