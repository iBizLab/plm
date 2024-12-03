# 排期(product_plan_mob_plan_md_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 移动端多数据视图(mdctrl)
#### 工具栏(righttoolbar)
#### 搜索栏(searchbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [排期(PRODUCT_PLAN)](module/ProdMgmt/product_plan) : [移动新建排期](module/ProdMgmt/product_plan#界面行为)

### 关联视图
  * [计划内容(idea_mob_plan_idea_md_view)](app/view/idea_mob_plan_idea_md_view)
  * [新建(product_plan_mob_create_view)](app/view/product_plan_mob_create_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>