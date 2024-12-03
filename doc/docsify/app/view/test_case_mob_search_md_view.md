# 移动端用例搜索(test_case_mob_search_md_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 移动端多数据视图(mdctrl)
#### 工具栏(righttoolbar)
#### 搜索栏(searchbar)

## 视图界面逻辑
* `onViewMounted`
```javascript
const xdataControl = view.getController(view.model.xdataControlName);
if(!xdataControl || xdataControl.enableLoad === undefined){
	return;
}
if(!viewParam.query){
	xdataControl.enableLoad = false;
}
```
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联视图
  * [用例(test_case_mob_edit_view)](app/view/test_case_mob_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>