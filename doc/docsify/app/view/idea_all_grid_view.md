# 全部需求(idea_all_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [需求(IDEA)](module/ProdMgmt/idea) : [表格界面_新建操作](module/ProdMgmt/idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/idea) : [需求排期](module/ProdMgmt/idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/idea) : [删除](module/ProdMgmt/idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/idea) : [表格界面_导出操作（Excel）](module/ProdMgmt/idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/idea) : [需求归档](module/ProdMgmt/idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/idea) : [需求自定义导入](module/ProdMgmt/idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/idea) : [激活](module/ProdMgmt/idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/idea) : [需求复制](module/ProdMgmt/idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/idea) : [需求移动](module/ProdMgmt/idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/idea) : [变更需求状态](module/ProdMgmt/idea#界面行为)

### 关联视图
  * [需求应用数据导入视图(idea_app_data_upload_view)](app/view/idea_app_data_upload_view)
  * [需求(idea_change_state_view)](app/view/idea_change_state_view)
  * [复制需求(idea_copy_option_view)](app/view/idea_copy_option_view)
  * [需求(idea_idea_re_plan_option_view)](app/view/idea_idea_re_plan_option_view)
  * [需求(idea_main_view)](app/view/idea_main_view)
  * [移动需求(idea_move_option_view)](app/view/idea_move_option_view)
  * [新建需求(idea_quick_create_view)](app/view/idea_quick_create_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>