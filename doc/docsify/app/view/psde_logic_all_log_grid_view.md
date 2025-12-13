# 全部日志(psde_logic_all_log_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [扩展日志(EXTEND_LOG)](module/Base/extend_log) : [打开详情信息](module/Base/extend_log#界面行为)

### 关联视图
  * [日志信息(extend_log_info_view)](app/view/extend_log_info_view)
  * [实体处理逻辑(psdelogiceditview)](app/view/psdelogiceditview)
  * [实体处理逻辑(psdelogicredirectview)](app/view/psdelogicredirectview)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>