<p class="panel-title"><b>执行代码</b></p>

```javascript
const default_data =uiLogic.default;
let select_data =uiLogic.select_data;
for (let i = 0; i < default_data.length; i++){
  select_data.push(default_data[i]);
  select_data[i].owner_id = uiLogic.ctx.principal_id;
  if(default_data[i].user_id){
    select_data[i].user_id = default_data[i].user_id;
  }else{
    select_data[i].user_id = default_data[i].srfkey;
  }
  
}

```
