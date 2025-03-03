## 修改评论 <!-- {docsify-ignore-all} -->

   修改讨论中的评论信息

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
state "开始" as Begin <<start>> [[$./update_comment#begin {"开始"}]]
state "准备评论数据" as PREPAREPARAM1  [[$./update_comment#prepareparam1 {"准备评论数据"}]]
state "修改评论" as DEACTION1  [[$./update_comment#deaction1 {"修改评论"}]]
state "修改评论内容" as RAWSQLCALL1  [[$./update_comment#rawsqlcall1 {"修改评论内容"}]]
state "结束" as END1 <<end>> [[$./update_comment#end1 {"结束"}]]


Begin --> PREPAREPARAM1
PREPAREPARAM1 --> RAWSQLCALL1
RAWSQLCALL1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 准备评论数据 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).comment_id` 设置给  `commnet(评论).ID(标识)`
2. 将`Default(传入变量).content(讨论内容)` 设置给  `commnet(评论).CONTENT(内容)`

#### 修改评论 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [评论(COMMENT)](module/Base/comment.md) 行为 [Update](module/Base/comment#行为) ，行为参数为`commnet(评论)`

将执行结果返回给参数`commnet(评论)`

#### 修改评论内容 :id=RAWSQLCALL1<sup class="footnote-symbol"> <font color=gray size=1>[直接SQL调用]</font></sup>



<p class="panel-title"><b>执行sql语句</b></p>

```sql
update comment set CONTENT = ? where id = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `commnet(评论).CONTENT(内容)`
2. `commnet(评论).ID(标识)`


#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `commnet(评论)`



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[讨论(DISCUSS_POST)](module/Team/discuss_post.md)||
|评论|commnet|数据对象|[评论(COMMENT)](module/Base/comment.md)||
