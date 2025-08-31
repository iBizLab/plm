# BI指标(ps_sys_bi_cube_measure_all_grid_view)  <!-- {docsify-ignore-all} -->



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
  * [智能报表立方体指标(PSSYSBICUBEMEASURE)](module/extension/PSSysBICubeMeasure) : [编辑指标](module/extension/PSSysBICubeMeasure#界面行为)
  * [智能报表立方体指标(PSSYSBICUBEMEASURE)](module/extension/PSSysBICubeMeasure) : [删除指标](module/extension/PSSysBICubeMeasure#界面行为)
  * [智能报表立方体指标(PSSYSBICUBEMEASURE)](module/extension/PSSysBICubeMeasure) : [表格界面_新建操作](module/extension/PSSysBICubeMeasure#界面行为)

### 关联视图
  * [智能报表立方体指标(ps_sys_bi_cube_measure_edit_view)](app/view/ps_sys_bi_cube_measure_edit_view)
  * [智能报表立方体指标(ps_sys_bi_cube_measure_redirect_view)](app/view/ps_sys_bi_cube_measure_redirect_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>