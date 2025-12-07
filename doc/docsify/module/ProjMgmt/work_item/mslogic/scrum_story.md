## Scrum项目-用户故事-状态迁移 <!-- {docsify-ignore-all} -->

   

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
state "打开" as MAINSTATE1  [[$./scrum_story#mainstate1 {"打开"}]]
state "规划中" as MAINSTATE5  [[$./scrum_story#mainstate5 {"规划中"}]]
state "规划完成" as MAINSTATE6  [[$./scrum_story#mainstate6 {"规划完成"}]]
state "进行中" as MAINSTATE2  [[$./scrum_story#mainstate2 {"进行中"}]]
state "已完成" as MAINSTATE3  [[$./scrum_story#mainstate3 {"已完成"}]]
state "挂起" as MAINSTATE4  [[$./scrum_story#mainstate4 {"挂起"}]]
state "被拒绝" as MAINSTATE7  [[$./scrum_story#mainstate7 {"被拒绝"}]]


MAINSTATE1 --> MAINSTATE5
MAINSTATE5 --> MAINSTATE6
MAINSTATE6 --> MAINSTATE2
MAINSTATE2 --> MAINSTATE3
MAINSTATE3 --> MAINSTATE1
MAINSTATE2 --> MAINSTATE4
MAINSTATE4 --> MAINSTATE7
MAINSTATE7 --> MAINSTATE1
MAINSTATE7 --> MAINSTATE4
MAINSTATE4 --> MAINSTATE1
MAINSTATE4 --> MAINSTATE5
MAINSTATE4 --> MAINSTATE2
MAINSTATE4 --> MAINSTATE3
MAINSTATE6 --> MAINSTATE4
MAINSTATE5 --> MAINSTATE4
MAINSTATE1 --> MAINSTATE7
MAINSTATE1 --> MAINSTATE2
MAINSTATE1 --> MAINSTATE4


@enduml
```

### 主状态说明

#### 打开 :id=MAINSTATE1<sup class="footnote-symbol"> <font color=gray size=1>[10]</font></sup>

###### 拒绝行为


###### 拒绝操作标识

###### 拒绝属性


#### 被拒绝 :id=MAINSTATE7<sup class="footnote-symbol"> <font color=gray size=1>[60]</font></sup>

###### 拒绝行为


###### 拒绝操作标识

###### 允许属性


#### 规划中 :id=MAINSTATE5<sup class="footnote-symbol"> <font color=gray size=1>[14]</font></sup>

###### 拒绝行为


###### 拒绝操作标识

###### 允许属性


#### 规划完成 :id=MAINSTATE6<sup class="footnote-symbol"> <font color=gray size=1>[16]</font></sup>

###### 拒绝行为


###### 拒绝操作标识

###### 允许属性


#### 挂起 :id=MAINSTATE4<sup class="footnote-symbol"> <font color=gray size=1>[50]</font></sup>

###### 拒绝行为


###### 拒绝操作标识

###### 拒绝属性


#### 进行中 :id=MAINSTATE2<sup class="footnote-symbol"> <font color=gray size=1>[20]</font></sup>

###### 拒绝行为


###### 拒绝操作标识

###### 拒绝属性


#### 已完成 :id=MAINSTATE3<sup class="footnote-symbol"> <font color=gray size=1>[40]</font></sup>

###### 拒绝行为


###### 拒绝操作标识

###### 拒绝属性

