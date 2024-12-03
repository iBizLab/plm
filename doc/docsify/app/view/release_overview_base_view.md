# 项目发布(release_overview_base_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)

##### 部件逻辑
* `onLoadSuccess`
```
var end_at = view.layoutPanel.panelItems.form.control.details.end_at;
var remaining_days = view.layoutPanel.panelItems.form.control.details.remaining_days;
var end_at_date = end_at.value;
var daysDifference = 0;
if(end_at_date){
    // 今天的日期
    var today = new Date();

    // 指定日期的日期对象
    var specifiedDate = new Date(end_at_date);

    // 将两个日期转换为毫秒数
    var todayTime = today.getTime();
    var specifiedDateTime = specifiedDate.getTime();

    // 计算剩余天数
    var timeDiff = specifiedDateTime - todayTime;
    daysDifference = Math.ceil(timeDiff / (1000 * 3600 * 24));
    if(daysDifference < 0){
        daysDifference = 0;
    }
}
remaining_days.setDataValue(daysDifference + '天');

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