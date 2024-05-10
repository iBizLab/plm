# 编辑部件(run_daily_tendencies_option_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)

##### 属性注入
* `查询时间` 注入属性 `shortcuts`

```javascript
[
    {
    text: '最近7天',
    value: () => {
        const end_at = new Date();
        const start_at = new Date();
        start_at.setDate(end_at.getDate() - 6);
        return [start_at, end_at];
    },
    },
    {
    text: '最近30天',
    value: () => {
        const end_at = new Date();
        const start_at = new Date();
        start_at.setDate(end_at.getDate() - 29);
        return [start_at, end_at];
    },
    },
    {
    text: '本周',
    value: () => {
        const end_at = new Date();
        const currentDay = end_at.getDay();
        const start_at = new Date(end_at);

        // 计算本周的开始日期 (周一)
        start_at.setDate(
        end_at.getDate() - currentDay + (currentDay === 0 ? -6 : 1),
        );
        return [start_at, end_at];
    },
    },
    {
    text: '本月',
    value: () => {
        const end_at = new Date();
        const start_at = new Date(end_at);

        // 将日期设置为本月第一天
        start_at.setDate(1);
        return [start_at, end_at];
    },
    },
]
```


<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>