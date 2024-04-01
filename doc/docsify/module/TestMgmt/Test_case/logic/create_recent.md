## 生成最近访问 <!-- {docsify-ignore-all} -->

   

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
state "开始" as Begin <<start>> [[$./create_recent#begin {"开始"}]]
state "准备最近访问参数" as PREPAREPARAM1  [[$./create_recent#prepareparam1 {"准备最近访问参数"}]]
state "保存最近访问" as DEACTION1  [[$./create_recent#deaction1 {"保存最近访问"}]]
state "结束" as END1 <<end>> [[$./create_recent#end1 {"结束"}]]


Begin --> PREPAREPARAM1
PREPAREPARAM1 --> DEACTION1
DEACTION1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 准备最近访问参数 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).ID(标识)` 设置给  `recent.OWNER_ID(所属数据标识)`
2. 将`Default(传入变量).LIBRARY_IDENTIFIER(测试库标识)` 设置给  `recent.RECENT_PARENT_IDENTIFIER(访问父类编号)`
3. 将`Default(传入变量).TEST_LIBRARY_NAME(所属测试库)` 设置给  `recent.RECENT_PARENT_NAME(访问父类名称)`
4. 将`Default(传入变量).TEST_LIBRARY_ID(测试库标识)` 设置给  `recent.RECENT_PARENT(访问父类)`
5. 将`用户全局对象.srfpersonid` 设置给  `recent.CREATE_MAN(建立人)`
6. 将`Default(传入变量).IDENTIFIER(编号)` 设置给  `recent.IDENTIFIER(编号)`
7. 将`2` 设置给  `recent.TYPE(访问类型)`
8. 将`Default(传入变量).TITLE(标题)` 设置给  `recent.NAME(名称)`
9. 将`library` 设置给  `recent.OWNER_TYPE(所属数据对象)`
10. 将`test_case` 设置给  `recent.OWNER_SUBTYPE(所属对象子类型)`

#### 保存最近访问 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [最近访问(RECENT)](module/Base/Recent.md) 行为 [Save](module/Base/Recent#行为) ，行为参数为`recent`

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[用例(TEST_CASE)](module/TestMgmt/Test_case.md)||
|recent|recent|数据对象|[最近访问(RECENT)](module/Base/Recent.md)||
