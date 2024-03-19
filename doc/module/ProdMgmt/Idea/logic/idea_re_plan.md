## 需求排期 <!-- {docsify-ignore-all} -->

   

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
state "开始" as Begin <<start>> [[$./idea_re_plan#begin {"开始"}]]
state "调试逻辑参数" as DEBUGPARAM1  [[$./idea_re_plan#debugparam1 {"调试逻辑参数"}]]
state "绑定参数" as BINDPARAM1  [[$./idea_re_plan#bindparam1 {"绑定参数"}]]
state "循环子调用" as LOOPSUBCALL1  [[$./idea_re_plan#loopsubcall1 {"循环子调用"}]] #green {
state "填充需要的属性" as PREPAREPARAM1  [[$./idea_re_plan#prepareparam1 {"填充需要的属性"}]]
state "生成正向关联数据" as DEACTION1  [[$./idea_re_plan#deaction1 {"生成正向关联数据"}]]
state "生成反向关联数据" as DEACTION2  [[$./idea_re_plan#deaction2 {"生成反向关联数据"}]]
}


Begin --> DEBUGPARAM1
DEBUGPARAM1 --> BINDPARAM1
BINDPARAM1 --> LOOPSUBCALL1
LOOPSUBCALL1 --> PREPAREPARAM1
PREPAREPARAM1 --> DEACTION1
DEACTION1 --> DEACTION2


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 调试逻辑参数 :id=DEBUGPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[调试逻辑参数]</font></sup>



> [!NOTE|label:调试信息|icon:fa fa-bug]
> 调试输出参数`Default(传入变量)`的详细信息


#### 绑定参数 :id=BINDPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[绑定参数]</font></sup>



绑定参数`Default(传入变量)` 到 `srfactionparam(选择数据对象)`
#### 填充需要的属性 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).ID(标识)` 设置给  `relationobj(关系对象).PRINCIPAL_ID(关联主体标识)`
2. 将`idea` 设置给  `relationobj(关系对象).PRINCIPAL_TYPE(关联主体类型)`
3. 将`for_temp_obj(循环临时变量).target_plan_id` 设置给  `relationobj(关系对象).TARGET_ID(关联目标标识)`
4. 将`product_plan` 设置给  `relationobj(关系对象).TARGET_TYPE(关联目标类型)`
5. 将`for_temp_obj(循环临时变量).target_plan_id` 设置给  `relationobj2(反向关系对象).PRINCIPAL_ID(关联主体标识)`
6. 将`product_plan` 设置给  `relationobj2(反向关系对象).PRINCIPAL_TYPE(关联主体类型)`
7. 将`Default(传入变量).ID(标识)` 设置给  `relationobj2(反向关系对象).TARGET_ID(关联目标标识)`
8. 将`idea` 设置给  `relationobj2(反向关系对象).TARGET_TYPE(关联目标类型)`

#### 生成正向关联数据 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [关联(RELATION)](module/Base/Relation.md) 行为 [Save](module/Base/Relation#行为) ，行为参数为`relationobj(关系对象)`

#### 生成反向关联数据 :id=DEACTION2<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [关联(RELATION)](module/Base/Relation.md) 行为 [Save](module/Base/Relation#行为) ，行为参数为`relationobj2(反向关系对象)`

#### 循环子调用 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`srfactionparam(选择数据对象)`，子循环参数使用`for_temp_obj(循环临时变量)`


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[需求(IDEA)](module/ProdMgmt/Idea.md)||
|循环临时变量|for_temp_obj|数据对象|[需求(IDEA)](module/ProdMgmt/Idea.md)||
|关系对象|relationobj|数据对象|[关联(RELATION)](module/Base/Relation.md)||
|反向关系对象|relationobj2|数据对象|[关联(RELATION)](module/Base/Relation.md)||
|选择数据对象|srfactionparam|数据对象列表|[需求(IDEA)](module/ProdMgmt/Idea.md)||
