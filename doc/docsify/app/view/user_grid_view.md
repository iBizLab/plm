# 成员管理(user_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [企业用户(USER)](module/Base/user) : [开启统计](module/Base/user#界面行为)
  * [企业用户(USER)](module/Base/user) : [停止统计](module/Base/user#界面行为)

### 关联视图
  * [设置成员信息(user_quick_cfg_view)](app/view/user_quick_cfg_view)
  * [企业用户(user_redirect_view)](app/view/user_redirect_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>