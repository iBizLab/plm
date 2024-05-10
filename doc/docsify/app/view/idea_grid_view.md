# 需求(idea_grid_view)  <!-- {docsify-ignore-all} -->


系统自动添加



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [需求(IDEA)](module/ProdMgmt/idea) : [需求排期](module/ProdMgmt/idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/idea) : [需求移动](module/ProdMgmt/idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/idea) : [激活](module/ProdMgmt/idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/idea) : [删除](module/ProdMgmt/idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/idea) : [需求复制](module/ProdMgmt/idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/idea) : [变更需求状态](module/ProdMgmt/idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/idea) : [需求归档](module/ProdMgmt/idea#界面行为)

### 关联视图
  * [需求(idea_change_state_view)](app/view/idea_change_state_view)
  * [复制需求(idea_copy_option_view)](app/view/idea_copy_option_view)
  * [需求(idea_edit_view)](app/view/idea_edit_view)
  * [需求(idea_idea_re_plan_option_view)](app/view/idea_idea_re_plan_option_view)
  * [移动需求(idea_move_option_view)](app/view/idea_move_option_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>