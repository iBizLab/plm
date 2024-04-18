## Scrum项目-缺陷-状态迁移 <!-- {docsify-ignore-all} -->

   

### 主状态迁移

```plantuml
@startuml
hide empty description
<style>
root {
  HyperlinkColor #42b983
}
</style>

hide empty description
state "新提交" as MAINSTATE1  [[$./scrum_bug#mainstate1 {"新提交"}]]
state "重新打开" as MAINSTATE5  [[$./scrum_bug#mainstate5 {"重新打开"}]]
state "已修复" as MAINSTATE3  [[$./scrum_bug#mainstate3 {"已修复"}]]
state "已发布" as MAINSTATE6  [[$./scrum_bug#mainstate6 {"已发布"}]]
state "处理中" as MAINSTATE2  [[$./scrum_bug#mainstate2 {"处理中"}]]
state "挂起" as MAINSTATE7  [[$./scrum_bug#mainstate7 {"挂起"}]]
state "已拒绝" as MAINSTATE4  [[$./scrum_bug#mainstate4 {"已拒绝"}]]


MAINSTATE1 --> MAINSTATE2
MAINSTATE2 --> MAINSTATE3 : 修复
MAINSTATE3 --> MAINSTATE4
MAINSTATE4 --> MAINSTATE5
MAINSTATE5 --> MAINSTATE2
MAINSTATE5 --> MAINSTATE3
MAINSTATE3 --> MAINSTATE2 : 进行
MAINSTATE3 --> MAINSTATE5
MAINSTATE3 --> MAINSTATE6
MAINSTATE6 --> MAINSTATE5
MAINSTATE2 --> MAINSTATE7
MAINSTATE7 --> MAINSTATE4
MAINSTATE7 --> MAINSTATE2
MAINSTATE7 --> MAINSTATE3
MAINSTATE7 --> MAINSTATE6
MAINSTATE1 --> MAINSTATE3
MAINSTATE1 --> MAINSTATE7
MAINSTATE1 --> MAINSTATE4


@enduml
```

### 主状态说明

#### 新提交 :id=MAINSTATE1<sup class="footnote-symbol"> <font color=gray size=1>[10]</font></sup>

###### 拒绝行为


###### 拒绝操作标识

###### 拒绝属性


#### 处理中 :id=MAINSTATE2<sup class="footnote-symbol"> <font color=gray size=1>[20]</font></sup>

###### 拒绝行为


###### 拒绝操作标识

###### 拒绝属性


#### 已修复 :id=MAINSTATE3<sup class="footnote-symbol"> <font color=gray size=1>[30]</font></sup>

###### 拒绝行为


###### 拒绝操作标识

###### 拒绝属性


#### 已拒绝 :id=MAINSTATE4<sup class="footnote-symbol"> <font color=gray size=1>[60]</font></sup>

###### 拒绝行为


###### 拒绝操作标识

###### 拒绝属性


#### 重新打开 :id=MAINSTATE5<sup class="footnote-symbol"> <font color=gray size=1>[40]</font></sup>

###### 允许行为


###### 允许操作标识

###### 允许属性


#### 已发布 :id=MAINSTATE6<sup class="footnote-symbol"> <font color=gray size=1>[50]</font></sup>

###### 允许行为


###### 允许操作标识

###### 允许属性


#### 挂起 :id=MAINSTATE7<sup class="footnote-symbol"> <font color=gray size=1>[70]</font></sup>

###### 允许行为


###### 允许操作标识

###### 允许属性

