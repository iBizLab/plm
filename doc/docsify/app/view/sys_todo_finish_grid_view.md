# 已办结事项(sys_todo_finish_grid_view)  <!-- {docsify-ignore-all} -->


系统自动添加



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [待办(SYS_TODO)](module/ebsx/SysTodo) : [待办流程操作](module/ebsx/SysTodo#界面行为)

### 关联视图
  * [待办(sys_todo_edit_view)](app/view/sys_todo_edit_view)
  * [待办(sys_todoredirect_view)](app/view/sys_todoredirect_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>