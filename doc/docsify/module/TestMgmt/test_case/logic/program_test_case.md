## 规划用例 <!-- {docsify-ignore-all} -->

   规划用例

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
state "开始" as Begin <<start>> [[$./program_test_case#begin {"开始"}]]
state "绑定参数" as BINDPARAM1  [[$./program_test_case#bindparam1 {"绑定参数"}]]
state "结束" as END1 <<end>> [[$./program_test_case#end1 {"结束"}]]
state "循环子调用" as LOOPSUBCALL1  [[$./program_test_case#loopsubcall1 {"循环子调用"}]] #green {
state "重新建立参数" as RENEWPARAM1  [[$./program_test_case#renewparam1 {"重新建立参数"}]]
state "重新建立参数" as RENEWPARAM2  [[$./program_test_case#renewparam2 {"重新建立参数"}]]
state "填充需要的属性值" as PREPAREPARAM1  [[$./program_test_case#prepareparam1 {"填充需要的属性值"}]]
state "生成正向关联数据" as DEACTION1  [[$./program_test_case#deaction1 {"生成正向关联数据"}]]
state "生成反向关联数据" as DEACTION2  [[$./program_test_case#deaction2 {"生成反向关联数据"}]]
}


Begin --> BINDPARAM1 : [[$./program_test_case#begin-bindparam1{通过上下文添加的principal_id属性存在} 通过上下文添加的principal_id属性存在]]
BINDPARAM1 --> LOOPSUBCALL1 : [[$./program_test_case#bindparam1-loopsubcall1{存在选中数据} 存在选中数据]]
LOOPSUBCALL1 --> RENEWPARAM1
RENEWPARAM1 --> RENEWPARAM2
RENEWPARAM2 --> PREPAREPARAM1
PREPAREPARAM1 --> DEACTION1
DEACTION1 --> DEACTION2
LOOPSUBCALL1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 绑定参数 :id=BINDPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[绑定参数]</font></sup>



绑定参数`Default(传入变量)` 到 `selectdata(关联列表)`
#### 循环子调用 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`selectdata(关联列表)`，子循环参数使用`for_temp_obj(循环临时变量)`
#### 重新建立参数 :id=RENEWPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[重新建立参数]</font></sup>



重建参数```forward_relation_obj(正向关系对象)```
#### 重新建立参数 :id=RENEWPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[重新建立参数]</font></sup>



重建参数```reverse_relation_obj(反向关系对象)```
#### 填充需要的属性值 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).principal_id` 设置给  `forward_relation_obj(正向关系对象).PRINCIPAL_ID(关联主体标识)`
2. 将`for_temp_obj(循环临时变量).owner_id` 设置给  `reverse_relation_obj(反向关系对象).PRINCIPAL_ID(关联主体标识)`
3. 将`Default(传入变量).principal_id` 设置给  `reverse_relation_obj(反向关系对象).TARGET_ID(目标主体标识)`
4. 将`Default(传入变量).target_type` 设置给  `reverse_relation_obj(反向关系对象).PRINCIPAL_TYPE(关联主体类型)`
5. 将`Default(传入变量).principal_type` 设置给  `reverse_relation_obj(反向关系对象).TARGET_TYPE(关联目标类型)`
6. 将`Default(传入变量).principal_type` 设置给  `forward_relation_obj(正向关系对象).PRINCIPAL_TYPE(关联主体类型)`
7. 将`Default(传入变量).target_type` 设置给  `forward_relation_obj(正向关系对象).TARGET_TYPE(关联目标类型)`
8. 将`for_temp_obj(循环临时变量).owner_id` 设置给  `forward_relation_obj(正向关系对象).TARGET_ID(目标主体标识)`

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*

#### 生成正向关联数据 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [关联(RELATION)](module/Base/relation.md) 行为 [Save](module/Base/relation#行为) ，行为参数为`forward_relation_obj(正向关系对象)`

#### 生成反向关联数据 :id=DEACTION2<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [关联(RELATION)](module/Base/relation.md) 行为 [Save](module/Base/relation#行为) ，行为参数为`reverse_relation_obj(反向关系对象)`


### 连接条件说明
#### 通过上下文添加的principal_id属性存在 :id=Begin-BINDPARAM1

`Default(传入变量).principal_id` ISNOTNULL
#### 存在选中数据 :id=BINDPARAM1-LOOPSUBCALL1

`selectdata(关联列表).size` GT `0`


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[用例(TEST_CASE)](module/TestMgmt/test_case.md)||
|循环临时变量|for_temp_obj|数据对象|[用例(TEST_CASE)](module/TestMgmt/test_case.md)||
|正向关系对象|forward_relation_obj|数据对象|[关联(RELATION)](module/Base/relation.md)||
|反向关系对象|reverse_relation_obj|数据对象|[关联(RELATION)](module/Base/relation.md)||
|关联列表|selectdata|数据对象列表|[用例(TEST_CASE)](module/TestMgmt/test_case.md)||
