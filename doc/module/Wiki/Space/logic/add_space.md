## 添加空间 <!-- {docsify-ignore-all} -->

   

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
state "开始" as Begin <<start>> [[$./add_space#begin {"开始"}]]
state "添加空间准备参数" as DEBUGPARAM1  [[$./add_space#debugparam1 {"添加空间准备参数"}]]
state "获取选中列表" as PREPAREPARAM1  [[$./add_space#prepareparam1 {"获取选中列表"}]]
state "结束" as END1 <<end>> [[$./add_space#end1 {"结束"}]]
state "循环子调用" as LOOPSUBCALL1  [[$./add_space#loopsubcall1 {"循环子调用"}]] #green {
state "准备参数" as PREPAREPARAM2  [[$./add_space#prepareparam2 {"准备参数"}]]
state "实体行为" as DEACTION2  [[$./add_space#deaction2 {"实体行为"}]]
state "准备参数" as PREPAREPARAM3  [[$./add_space#prepareparam3 {"准备参数"}]]
state "查询的sapce" as DEBUGPARAM3  [[$./add_space#debugparam3 {"查询的sapce"}]]
state "实体行为" as DEACTION1  [[$./add_space#deaction1 {"实体行为"}]]
}


Begin --> DEBUGPARAM1
DEBUGPARAM1 --> PREPAREPARAM1
PREPAREPARAM1 --> LOOPSUBCALL1
LOOPSUBCALL1 --> PREPAREPARAM2
PREPAREPARAM2 --> DEACTION2
DEACTION2 --> PREPAREPARAM3
PREPAREPARAM3 --> DEBUGPARAM3
DEBUGPARAM3 --> DEACTION1
LOOPSUBCALL1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 添加空间准备参数 :id=DEBUGPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[调试逻辑参数]</font></sup>



> [!NOTE|label:调试信息|icon:fa fa-bug]
> 调试输出参数`Default(传入变量)`的详细信息


#### 获取选中列表 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).srfactionparam` 绑定给  `srfactionparam(所选空间列表)`

#### 循环子调用 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`srfactionparam(所选空间列表)`，子循环参数使用`for_temp_obj(循环临时变量)`
#### 准备参数 :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`for_temp_obj(循环临时变量).ID(标识)` 设置给  `space_info(空间信息).ID(标识)`

#### 实体行为 :id=DEACTION2<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [空间(SPACE)](module/Wiki/Space.md) 行为 [Get](module/Wiki/Space#行为) ，行为参数为`space_info(空间信息)`

将执行结果返回给参数`space_info(空间信息)`

#### 准备参数 :id=PREPAREPARAM3<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).category` 设置给  `space_info(空间信息).CATEGORY_ID(分类)`

#### 查询的sapce :id=DEBUGPARAM3<sup class="footnote-symbol"> <font color=gray size=1>[调试逻辑参数]</font></sup>



> [!NOTE|label:调试信息|icon:fa fa-bug]
> 调试输出参数`space_info(空间信息)`的详细信息


#### 实体行为 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [空间(SPACE)](module/Wiki/Space.md) 行为 [Update](module/Wiki/Space#行为) ，行为参数为`space_info(空间信息)`

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[空间(SPACE)](module/Wiki/Space.md)||
|循环临时变量|for_temp_obj|数据对象|[空间(SPACE)](module/Wiki/Space.md)||
|空间信息|space_info|数据对象|[空间(SPACE)](module/Wiki/Space.md)||
|所选空间列表|srfactionparam|数据对象列表|[空间(SPACE)](module/Wiki/Space.md)||
