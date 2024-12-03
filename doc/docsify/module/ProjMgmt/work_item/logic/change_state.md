## 变更状态 <!-- {docsify-ignore-all} -->

   变更工作项状态

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
state "开始" as Begin <<start>> [[$./change_state#begin {"开始"}]]
state "绑定选择数据对象" as BINDPARAM1  [[$./change_state#bindparam1 {"绑定选择数据对象"}]]
state "设置工作项类型id" as RAWSFCODE1  [[$./change_state#rawsfcode1 {"设置工作项类型id"}]]
state "循环子调用" as LOOPSUBCALL1  [[$./change_state#loopsubcall1 {"循环子调用"}]] #green {
state "设置状态" as PREPAREPARAM2  [[$./change_state#prepareparam2 {"设置状态"}]]
state "变更状态" as DEACTION1  [[$./change_state#deaction1 {"变更状态"}]]
}


Begin --> BINDPARAM1
BINDPARAM1 --> LOOPSUBCALL1
LOOPSUBCALL1 --> PREPAREPARAM2
PREPAREPARAM2 --> DEACTION1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 绑定选择数据对象 :id=BINDPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[绑定参数]</font></sup>



绑定参数`Default(传入变量)` 到 `srfactionparam(选择数据对象)`
#### 设置工作项类型id :id=RAWSFCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接后台代码]</font></sup>



<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var _default = logic.getParam("default");
var old_work_item_type_id = _default.get("work_item_type_id");

var first_value = old_work_item_type_id.split(';')[0];

_default.set("work_item_type_id", first_value);
```

#### 循环子调用 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`srfactionparam(选择数据对象)`，子循环参数使用`for_temp_obj(循环临时变量)`
#### 设置状态 :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`for_temp_obj(循环临时变量).STATE(状态)` 设置给  `Default(传入变量).STATE(状态)`

#### 变更状态 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [工作项(WORK_ITEM)](module/ProjMgmt/work_item.md) 行为 [Update](module/ProjMgmt/work_item#行为) ，行为参数为`Default(传入变量)`



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)||
|循环临时变量|for_temp_obj|数据对象|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)||
|选择数据对象|srfactionparam|数据对象列表|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)||
