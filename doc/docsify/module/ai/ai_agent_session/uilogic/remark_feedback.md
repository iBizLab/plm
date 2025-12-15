## remark_feedback <!-- {docsify-ignore-all} -->

   

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
state "开始" as Begin <<start>> [[$./remark_feedback#begin {开始}]]
state "结束" as END_01 <<end>> [[$./remark_feedback#end_01 {结束}]]
state "注入脚本代码" as RAWJSCODE_01  [[$./remark_feedback#rawjscode_01 {注入脚本代码}]]


Begin --> RAWJSCODE_01
RAWJSCODE_01 --> END_01


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>




#### 注入脚本代码 :id=RAWJSCODE_01<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



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

#### 结束 :id=END_01<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>






### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
|result|result|数据对象||
