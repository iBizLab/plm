# BI维度(ps_sys_bi_cube_dimension_all_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [智能报表立方体维度(PSSYSBICUBEDIMENSION)](module/extension/PSSysBICubeDimension) : [编辑维度](module/extension/PSSysBICubeDimension#界面行为)
  * [智能报表立方体维度(PSSYSBICUBEDIMENSION)](module/extension/PSSysBICubeDimension) : [删除维度](module/extension/PSSysBICubeDimension#界面行为)
  * [智能报表立方体维度(PSSYSBICUBEDIMENSION)](module/extension/PSSysBICubeDimension) : [表格界面_新建操作](module/extension/PSSysBICubeDimension#界面行为)

### 关联视图
  * [智能报表立方体维度(ps_sys_bi_cube_dimension_edit_view)](app/view/ps_sys_bi_cube_dimension_edit_view)
  * [智能报表立方体维度(ps_sys_bi_cube_dimension_redirect_view)](app/view/ps_sys_bi_cube_dimension_redirect_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>