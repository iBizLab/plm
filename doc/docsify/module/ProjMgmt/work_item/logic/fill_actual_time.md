## 填充实际开始/完成时间 <!-- {docsify-ignore-all} -->

   

### 处理过程

```plantuml
@startuml
hide empty description
<style>
root {
  HyperlinkColor #42b983
}
</style>

hide empty description
state "开始" as Begin <<start>> [[$./fill_actual_time#begin {"开始"}]]
state "结束" as END1 <<end>> [[$./fill_actual_time#end1 {"结束"}]]
state "调试逻辑参数" as DEBUGPARAM1  [[$./fill_actual_time#debugparam1 {"调试逻辑参数"}]]
state "填充开始或结束时间" as RAWSFCODE1  [[$./fill_actual_time#rawsfcode1 {"填充开始或结束时间"}]]
state "实体行为" as DEACTION1  [[$./fill_actual_time#deaction1 {"实体行为"}]]


Begin --> DEBUGPARAM1
DEBUGPARAM1 --> RAWSFCODE1
RAWSFCODE1 --> DEACTION1
DEACTION1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*

#### 调试逻辑参数 :id=DEBUGPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[调试逻辑参数]</font></sup>



> [!NOTE|label:调试信息|icon:fa fa-bug]
> 调试输出参数`Default(传入变量)`的详细信息


#### 填充开始或结束时间 :id=RAWSFCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接后台代码]</font></sup>



<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var updated_data = logic.getParam("default");
if (updated_data.get('state_type') == 'in_progress' && updated_data.get('actual_start_at') == null) {
    updated_data.set("actual_start_at", new Date());
}
if (updated_data.get('state_type') == 'completed' && updated_data.get('actual_end_at') == null) {
    updated_data.set('actual_end_at', new Date());
}
```

#### 实体行为 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [工作项(WORK_ITEM)](module/ProjMgmt/work_item.md) 行为 [Save](module/ProjMgmt/work_item#行为) ，行为参数为`work_item_obj(工作项)`



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)||
|工作项|work_item_obj|数据对象|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)||
