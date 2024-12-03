# 新建快照(baseline_create_plan_snapshot_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)

##### 部件逻辑
* `onLoadDraftSuccess`
```
// 创建一个Date对象，表示当前时间
var currentDate = new Date();
// 使用Date对象的方法获取当前时间的各个部分
var year = currentDate.getFullYear(); // 年份
var month = ('0' + (currentDate.getMonth() + 1)).slice(-2); // 月份（注意要加1，因为月份从0开始计数）
var day = ('0' + currentDate.getDate()).slice(-2); // 日期
var hours = ('0' + currentDate.getHours()).slice(-2); // 小时
var minutes = ('0' + currentDate.getMinutes()).slice(-2); // 分钟
var seconds = ('0' + currentDate.getSeconds()).slice(-2); // 秒钟
// 构建当前时间的字符串表示
var currentDateString = year + '年' + month + '月' + day + '日 ' + hours + ':' + minutes + ':' + seconds;
ctrl.details.name.setDataValue(currentDateString)


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