<p class="panel-title"><b>执行代码</b></p>

```javascript
view.ctx.evt.on('onRegister', (name, c) => {
    if(name==='searchform'){
        const time = new Date();
        const preTime = new Date(time.getTime() - 604800000);
        const n_create_time_gtandeq = preTime.getFullYear() +'-' +(preTime.getMonth() + 1 < 10 ? '0' + (preTime.getMonth() + 1): preTime.getMonth() + 1) +'-' +(preTime.getDate() < 10 ? '0' + preTime.getDate() : preTime.getDate()) 
        const n_create_time_ltandeq = time.getFullYear() +'-' +(time.getMonth() + 1 < 10 ? '0' + (time.getMonth() + 1): time.getMonth() + 1) +'-' +(time.getDate() < 10 ? '0' + time.getDate() : time.getDate())
        const date_range = n_create_time_gtandeq + ',' + n_create_time_ltandeq;
        Object.assign(c.params, {n_create_time_gtandeq,n_create_time_ltandeq,date_range})
    }
});
```
