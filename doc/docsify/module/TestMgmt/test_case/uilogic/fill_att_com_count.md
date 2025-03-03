## 获取关注人与评论数 <!-- {docsify-ignore-all} -->

   

### 处理过程

```plantuml
@startuml
hide footbox
<style>
root {
  HyperlinkColor #42b983
}
</style>

hide empty description
state "开始" as Begin <<start>> [[$./fill_att_com_count#begin {开始}]]
state "填充关注&评论数" as RAWJSCODE1  [[$./fill_att_com_count#rawjscode1 {填充关注&评论数}]]
state "结束" as END1 <<end>> [[$./fill_att_com_count#end1 {结束}]]


Begin --> RAWJSCODE1
RAWJSCODE1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>




#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>




#### 填充关注&评论数 :id=RAWJSCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
const attention_counts = uiLogic.view.layoutPanel.panelItems.attention_count;
if (attention_counts && uiLogic.default.attention_count !== undefined) {
    attention_counts.setDataValue(uiLogic.default.attention_count);
}

const comment_counts = uiLogic.view.layoutPanel.panelItems.comment_count;
comment_counts.setDataValue(uiLogic.default.comment_count);


```



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|统计容器|CONTAINER_COUNT|数据对象||
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
|当前视图对象|view|当前视图对象||
