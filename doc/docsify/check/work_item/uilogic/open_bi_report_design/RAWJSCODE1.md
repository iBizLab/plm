<p class="panel-title"><b>执行代码</b></p>

```javascript
if(uiLogic.reportpanel){
    uiLogic.result = await uiLogic.reportpanel.openReportDesignPage();
}else{
    uiLogic.result = await uiLogic.reportpanel_portlet.contentController.openReportDesignPage();
}

```
