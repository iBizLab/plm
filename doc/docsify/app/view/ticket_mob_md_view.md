# 工单(ticket_mob_md_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 移动端多数据视图(mdctrl)
#### 工具栏(righttoolbar)
#### 搜索栏(searchbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [工单(TICKET)](module/ProdMgmt/ticket) : [移动端新建工单](module/ProdMgmt/ticket#界面行为)

### 关联视图
  * [新建(ticket_mob_create_view)](app/view/ticket_mob_create_view)
  * [工单(ticket_mob_edit_view)](app/view/ticket_mob_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>