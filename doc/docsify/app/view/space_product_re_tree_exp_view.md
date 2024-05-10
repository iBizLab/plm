# 空间(space_product_re_tree_exp_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 搜索栏(searchbar)
#### 树视图导航栏(treeexpbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [空间(SPACE)](module/Wiki/space) : [产品关联空间](module/Wiki/space#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [项目关联空间](module/Wiki/space#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [树界面_刷新全部操作](module/Wiki/space#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [取消关联（其他实体关联）](module/Wiki/space#界面行为)

### 关联视图
  * [页面(article_page_re_show_view)](app/view/article_page_re_show_view)
  * [关联空间(space_product_re_space_choose_option_view)](app/view/space_product_re_space_choose_option_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>