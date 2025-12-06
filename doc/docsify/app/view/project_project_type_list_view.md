# 项目类型(project_project_type_list_view)  <!-- {docsify-ignore-all} -->


系统自动添加



## 控件
#### CAPTIONBAR(captionbar)
#### 列表(list)
#### 搜索栏(searchbar)

## 视图界面逻辑
* `onSelectionChange`
```javascript
view.evt.emit('onSelectionChange', { data });
```
* `onLoadSuccess`
```javascript
console.log('测试');
console.log(view);
let list = view.layoutPanel.panelItems.list.control.state.items;

list.forEach(item => {
  if (item.id == 'scrum') {
    view.layoutPanel.panelItems.list.control.state.selectedData.push(items);
  }
});
```
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联视图
  * [项目(project_edit_view)](app/view/project_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>