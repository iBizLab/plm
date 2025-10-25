# 正常帐号管理(user_valid_grid_view)  <!-- {docsify-ignore-all} -->


系统自动添加



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 搜索栏(tabsearchbar)
#### 工具栏(tabtoolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [企业用户(USER)](module/Base/user) : [开启统计](module/Base/user#界面行为)
  * [企业用户(USER)](module/Base/user) : [重置密码](module/Base/user#界面行为)
  * [企业用户(USER)](module/Base/user) : [停止统计](module/Base/user#界面行为)
  * [企业用户(USER)](module/Base/user) : [表格界面_新建操作](module/Base/user#界面行为)
  * [企业用户(USER)](module/Base/user) : [表格界面_编辑操作](module/Base/user#界面行为)
  * [企业用户(USER)](module/Base/user) : [冻结成员](module/Base/user#界面行为)
  * [企业用户(USER)](module/Base/user) : [表格界面_导出操作（Excel）](module/Base/user#界面行为)

### 关联视图
  * [设置成员信息(user_main_view)](app/view/user_main_view)
  * [添加成员(user_quick_create_view)](app/view/user_quick_create_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>