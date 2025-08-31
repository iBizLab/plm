# 知识(space_mob_list_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 移动端多数据视图(mdctrl)
#### 工具栏(righttoolbar)
#### 搜索栏(searchbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [空间(SPACE)](module/Wiki/space) : [新建空间（移动端）](module/Wiki/space#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [设置星标](module/Wiki/space#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [取消星标](module/Wiki/space#界面行为)

### 关联视图
  * [新建(space_mob_create_space_view)](app/view/space_mob_create_space_view)
  * [空间(space_mob_list_form_view)](app/view/space_mob_list_form_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>