<p class="panel-title"><b>执行代码</b></p>

```javascript
let nums = uiLogic.view.layoutPanel.panelItems;
if (uiLogic && uiLogic.datas.lastday_active_count) {
    //昨日活跃人数
    nums.lastday_active_count.data.lastday_active_count = uiLogic.datas.lastday_active_count;
}
if (uiLogic && uiLogic.datas.lastday_active_rate) {
    //昨日活跃率
    nums.lastday_active_rate.data.lastday_active_rate = uiLogic.datas.lastday_active_rate;
}
if (uiLogic && uiLogic.datas.sevenday_active_count) {
    //近七日活跃人数
    nums.sevenday_active_count.data.sevenday_active_count = Math.floor(uiLogic.datas.sevenday_active_count);
}
if (uiLogic && uiLogic.datas.sevenday_active_rate) {
    //近七日活跃率
    nums.sevenday_active_rate.data.sevenday_active_rate = uiLogic.datas.sevenday_active_rate;
}


      
    

```
