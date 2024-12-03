# 讨论(discuss_post_mob_list_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 移动端多数据视图(mdctrl)
#### 工具栏(righttoolbar)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [讨论(DISCUSS_POST)](module/Team/discuss_post) : [发起讨论（移动端）](module/Team/discuss_post#界面行为)
  * [讨论(DISCUSS_POST)](module/Team/discuss_post) : [打开回复](module/Team/discuss_post#界面行为)

### 关联视图
  * [发起讨论(discuss_post_mob_dis_create_view)](app/view/discuss_post_mob_dis_create_view)
  * [讨论(discuss_post_mob_edit_view)](app/view/discuss_post_mob_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>