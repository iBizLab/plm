# 待办任务(sys_todo_todo_tree_exp_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 搜索栏(searchbar)
#### 树视图导航栏(treeexpbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联视图
  * [流程设计(category_workflow_grid_view)](app/view/category_workflow_grid_view)
  * [已处理事项(sys_todo_done_grid_view)](app/view/sys_todo_done_grid_view)
  * [已办结事项(sys_todo_finish_grid_view)](app/view/sys_todo_finish_grid_view)
  * [待处理事项(sys_todo_todo_grid_view)](app/view/sys_todo_todo_grid_view)
  * [未提交事项(sys_todo_undo_grid_view)](app/view/sys_todo_undo_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>