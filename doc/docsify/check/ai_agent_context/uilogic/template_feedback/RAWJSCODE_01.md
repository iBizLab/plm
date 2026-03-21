<p class="panel-title"><b>执行代码</b></p>

```javascript
console.info("ai default_system_prompt");
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
var formController = realView.getController("form");

if (uiLogic.default.data && uiLogic.default.data.messages && uiLogic.default.data.messages.length > 0) {
    const lastAns = uiLogic.default.data.messages[uiLogic.default.data.messages.length - 1];
    answer = lastAns.realcontent;
}
else if (uiLogic.default.msg) {
    answer = uiLogic.default.msg.realcontent;
}

if (answer && typeof answer == 'string') {
    if (formController){
        var targetFormItem = formController.getFormDetail("FORMITEM","default_system_prompt");
		if(targetFormItem){
           try {
                var newvalue = '<user>\n'+answer+"\n</user>";
                
                formController.setDataValue("welcome_message", newvalue);

            } catch (error) {
            }
        }
         
    }

}
uiLogic.result = {content: "已完成"};


```
