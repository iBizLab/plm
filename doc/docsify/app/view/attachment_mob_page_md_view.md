# 附件(attachment_mob_page_md_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 移动端多数据视图(mdctrl)
#### 搜索栏(searchbar)

## 视图界面逻辑
* `onLoadSuccess`
```javascript
console.log("附件view视图",view)
if(view.layoutPanel.panelItems.mdctrl.control.state.items.length == 0){
    view.layoutPanel.panelItems.mdctrl.state.visible = false
}
```
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [附件(ATTACHMENT)](module/Base/attachment) : [添加附件](module/Base/attachment#界面行为)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>