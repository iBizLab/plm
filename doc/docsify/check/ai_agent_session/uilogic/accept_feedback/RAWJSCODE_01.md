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
var formController = realView.getController("form");

if (uiLogic.default.data && uiLogic.default.data.messages && uiLogic.default.data.messages.length > 0) {
    const lastAns = uiLogic.default.data.messages[uiLogic.default.data.messages.length - 1];
    answer = lastAns.realcontent;
}
else if (uiLogic.default.msg) {
    answer = uiLogic.default.msg.realcontent;
}

if (answer && typeof answer == 'string') {
    var ret = ibiz.util.jsonUtil.parseJson(answer);
    if (ret.success && ret.data) {
        if (ret.data_type == 'jsonobject' && formController) {
            Object.entries(ret.data).forEach(([key, value]) => {
                try {
                    formController.setDataValue(key, value);
                    console.log(`已设置表单字段: ${key} =`, value);
                } catch (error) {
                }
            });
        }

        if (formController && formController.model.codeName === "debug") {
            try {
                formController.setDataValue("debug_callback_2", ret.data);

            } catch (error) {
            }
        }
    }
    else if (formController){
            try {
                formController.setDataValue("description", answer);

            } catch (error) {
            }
            try {
                formController.setDataValue("content", answer);

            } catch (error) {
            }
    }

}

if (formController && formController.model.codeName === "debug") {
    try {
        formController.setDataValue("debug_callback_1", answer);
    } catch (error) {
    }
}

```
