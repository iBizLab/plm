# 成员(member_shared_page_list_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 列表(list)
#### 搜索栏(searchbar)

## 视图界面逻辑
* `onMounted`
```javascript
view.layoutPanel.panelItems.check_type.setDataValue('reader');

```
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [成员(MEMBER)](module/Base/member) : [添加页面共享成员](module/Base/member#界面行为)
  * [成员(MEMBER)](module/Base/member) : [删除页面共享成员](module/Base/member#界面行为)

### 关联界面逻辑
  * [成员(MEMBER)](module/Base/member) : [添加页面共享成员](module/Base/member/uilogic/add_shared_member)

### 关联视图
  * [成员(member_edit_view)](app/view/member_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>