# 关联(relation_run_re_idea_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)

## 视图界面逻辑
  * [获取需求总条数](module/ProdMgmt/idea/uilogic/get_idea_total)
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联视图
  * [需求(idea_main_view)](app/view/idea_main_view)
  * [关联(relation_edit_view)](app/view/relation_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>