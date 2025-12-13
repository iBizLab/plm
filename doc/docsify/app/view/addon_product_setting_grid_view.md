# 产品组件(addon_product_setting_grid_view)  <!-- {docsify-ignore-all} -->


系统自动添加



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)

## 视图界面逻辑
* `onSaveSuccess`
```javascript
ibiz.mc.command.update.send({ srfdecodename: 'product'})
```
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>