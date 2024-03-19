## 恢复 <!-- {docsify-ignore-all} -->

   

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
state "开始" as Begin <<start>> [[$./recover#begin {"开始"}]]
state "设置删除状态" as PREPAREPARAM1  [[$./recover#prepareparam1 {"设置删除状态"}]]
state "恢复" as DEACTION1  [[$./recover#deaction1 {"恢复"}]]
state "恢复最近访问" as RAWSQLCALL1  [[$./recover#rawsqlcall1 {"恢复最近访问"}]]
state "结束" as END1 <<end>> [[$./recover#end1 {"结束"}]]


Begin --> PREPAREPARAM1
PREPAREPARAM1 --> DEACTION1
DEACTION1 --> RAWSQLCALL1
RAWSQLCALL1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 设置删除状态 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`0` 设置给  `update_obj(测试库更新对象).IS_DELETED(是否已删除)`
2. 将`Default(传入变量).ID(标识)` 设置给  `update_obj(测试库更新对象).ID(标识)`

#### 恢复 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [测试库(LIBRARY)](module/TestMgmt/Library.md) 行为 [Update](module/TestMgmt/Library#行为) ，行为参数为`update_obj(测试库更新对象)`

#### 恢复最近访问 :id=RAWSQLCALL1<sup class="footnote-symbol"> <font color=gray size=1>[直接SQL调用]</font></sup>



<p class="panel-title"><b>执行sql语句</b></p>

```sql
update recent set IS_DELETED=0 where owner_id=? and owner_subtype='library'
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`


#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[测试库(LIBRARY)](module/TestMgmt/Library.md)||
|测试库更新对象|update_obj|数据对象|[测试库(LIBRARY)](module/TestMgmt/Library.md)||
