# 需求(idea_my_created_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [需求(IDEA)](module/ProdMgmt/idea) : [取消关联（其他实体关联）](module/ProdMgmt/idea#界面行为)

### 关联视图
  * [需求(idea_edit_view)](app/view/idea_edit_view)
  * [需求(idea_main_view)](app/view/idea_main_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>