# 知识图谱(ai_kb_graph_entity_custom_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 搜索栏(searchbar)
#### 树视图导航栏(treeexpbar)
#### 树视图导航栏(treeexpbar1)
#### 树视图导航栏(treeexpbar2)

## 视图界面逻辑
* `onSelectionChange`
```javascript
console.log("数据变更tree")
// const activectrl = view.getCtrl("FORM", "form");
// activectrl.params.current_selected = null;
const treeCtrl = view.getCtrl("TREEEXPBAR", "treeexpbar");
const treeCtrl1= view.getCtrl("TREEEXPBAR", "treeexpbar1");
console.log("treeCtrl1为"+treeCtrl1.state.selectedData)
treeCtrl1.state.selectedData = []
await treeCtrl1.refresh();
// const selectedData = treeCtrl.state.selectedData[0];
// const ai_kb_graph_entity = selectedData._deData.id || ''
// if(ai_kb_graph_entity){
//     activectrl.params.ai_kb_graph_entity = ai_kb_graph_entity;
//     activectrl.params.current_selected = "ai_kb_graph_entity";
// }
// await activectrl.refresh();


```
* `onSelectionChange`
```javascript
console.log("数据变更tree")
// const activectrl = view.getCtrl("FORM", "form");
// activectrl.params.current_selected = null;

const treeCtrl = view.getCtrl("TREEEXPBAR", "treeexpbar");
const treeCtrl1= view.getCtrl("TREEEXPBAR", "treeexpbar1");
console.log("treeCtrl1为"+treeCtrl1.state.selectedData)
console.log("treeCtrl为"+treeCtrl.state.selectedData)
treeCtrl.state.selectedData = []
await treeCtrl.refresh();
// const selectedData = treeCtrl1.state.selectedData[0];
// const ai_kb_graph_relation =selectedData._deData.id || '';
// if(ai_kb_graph_relation){
//     activectrl.params.ai_kb_graph_relation = ai_kb_graph_relation;
//     activectrl.params.current_selected = "ai_kb_graph_relation";
// }
// await activectrl.refresh();


```
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [知识库图谱实体(AI_KB_GRAPH_ENTITY)](module/ai/ai_kb_graph_entity) : [高亮关联](module/ai/ai_kb_graph_entity#界面行为)
  * [知识库图谱实体(AI_KB_GRAPH_ENTITY)](module/ai/ai_kb_graph_entity) : [隐藏此实体](module/ai/ai_kb_graph_entity#界面行为)
  * [知识库图谱实体(AI_KB_GRAPH_ENTITY)](module/ai/ai_kb_graph_entity) : [按类型筛选(前台)](module/ai/ai_kb_graph_entity#界面行为)

### 关联视图
  * [知识库图谱实体(ai_kb_graph_entity_edit_view)](app/view/ai_kb_graph_entity_edit_view)
  * [知识库图谱关系(ai_kb_graph_relation_edit_view)](app/view/ai_kb_graph_relation_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>