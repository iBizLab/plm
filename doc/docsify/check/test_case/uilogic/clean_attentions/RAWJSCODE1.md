<p class="panel-title"><b>执行代码</b></p>

```javascript
const old_data = uiLogic.form.data;
// 清空关注人数组
old_data.attentions = [];
const ctx = uiLogic.ctx;
// 创建新的数据对象
const new_data = {
    user_id: ctx.srfuserid,
    name: ctx.srfusername,
    type: 40
};
uiLogic.form.data.attentions.push(new_data);



```
