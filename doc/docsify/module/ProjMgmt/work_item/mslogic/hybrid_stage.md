## Hybrid项目-阶段-状态迁移 <!-- {docsify-ignore-all} -->

   

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
state "打开" as MAINSTATE1  [[$./hybrid_stage#mainstate1 {"打开"}]]
state "进行中" as MAINSTATE2  [[$./hybrid_stage#mainstate2 {"进行中"}]]
state "已完成" as MAINSTATE3  [[$./hybrid_stage#mainstate3 {"已完成"}]]


MAINSTATE1 --> MAINSTATE2
MAINSTATE2 --> MAINSTATE3
MAINSTATE3 --> MAINSTATE1
MAINSTATE3 --> MAINSTATE2
MAINSTATE2 --> MAINSTATE1
MAINSTATE1 --> MAINSTATE3


@enduml
```

### 主状态说明

#### 打开 :id=MAINSTATE1<sup class="footnote-symbol"> <font color=gray size=1>[10]</font></sup>

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

