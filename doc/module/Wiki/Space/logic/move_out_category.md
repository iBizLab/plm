## 移出分类 <!-- {docsify-ignore-all} -->

   

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
state "开始" as Begin <<start>> [[$./move_out_category#begin {"开始"}]]
state "调试逻辑参数" as DEBUGPARAM1  [[$./move_out_category#debugparam1 {"调试逻辑参数"}]]
state "准备参数" as PREPAREPARAM1  [[$./move_out_category#prepareparam1 {"准备参数"}]]
state "实体行为" as DEACTION1  [[$./move_out_category#deaction1 {"实体行为"}]]
state "结束" as END1 <<end>> [[$./move_out_category#end1 {"结束"}]]


Begin --> DEBUGPARAM1
DEBUGPARAM1 --> PREPAREPARAM1
PREPAREPARAM1 --> DEACTION1
DEACTION1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 调试逻辑参数 :id=DEBUGPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[调试逻辑参数]</font></sup>



> [!NOTE|label:调试信息|icon:fa fa-bug]
> 调试输出参数`Default(传入变量)`的详细信息


#### 准备参数 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`空值（NULL）` 设置给  `Default(传入变量).CATEGORY_ID(分类)`
2. 将`空值（NULL）` 设置给  `Default(传入变量).CATEGORY_NAME(分类)`
3. 将`空值（NULL）` 设置给  `Default(传入变量).CATEGORIES(分类路径)`

#### 实体行为 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [空间(SPACE)](module/Wiki/Space.md) 行为 [Update](module/Wiki/Space#行为) ，行为参数为`Default(传入变量)`

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[空间(SPACE)](module/Wiki/Space.md)||
|循环临时变量|for_temp_obj|数据对象|[空间(SPACE)](module/Wiki/Space.md)||
|所选空间列表|srfactionparam|数据对象列表|[空间(SPACE)](module/Wiki/Space.md)||
