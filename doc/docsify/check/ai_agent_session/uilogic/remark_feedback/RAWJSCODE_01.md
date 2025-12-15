<p class="panel-title"><b>执行代码</b></p>

```javascript
console.info("ai remark");
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
           try {
                var newvalue = answer;
                var oldvalue = formController.data["description"];
                if(oldvalue) {
                    newvalue = oldvalue + "\n---------\n" + answer;
                }
                if(_entity_tag=='work_item' || _entity_tag=='idea') {
                    formController.setDataValue('formitem1', newvalue);
                    formController.setDataValue('md_description', newvalue);
                    formController.setDataValue('html_description', newvalue);
                }
                formController.setDataValue("description", newvalue);

            } catch (error) {
            }
            try {
                var newvalue = answer;
                var oldvalue = formController.data["content"];
                if(oldvalue) {
                    newvalue = oldvalue + "\n---------\n" + answer;
                }
                formController.setDataValue("content", newvalue);

            } catch (error) {
            }
    }

}
uiLogic.result = {content: "已完成"};


```
