## 结束时间(END_AT) <!-- {docsify-ignore-all} -->

   

### 结束时间 :id=END_AT

```plantuml
@startuml
hide empty description
<style>
root {
  HyperlinkColor #42b983
}
</style>

state "start" as start  <<start>>
state "end" as end <<end>>
state "[条件组]OR" as 1ee81dc2be0e466a7ad0eb9a8abcb4a3 [[$./end_at#a1ee81dc2be0e466a7ad0eb9a8abcb4a3 {"[条件组]OR"}]] {
state " " as 1ee81dc2be0e466a7ad0eb9a8abcb4a3_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 0347d695dc96778634a5d0af4fffbcfd [[$./end_at#a0347d695dc96778634a5d0af4fffbcfd {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 64b2935e71a51b5340e4245c966da50f [[$./end_at#a64b2935e71a51b5340e4245c966da50f {"[条件组]OR"}]] {
state " " as 64b2935e71a51b5340e4245c966da50f_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as e79de0524ba60c00ab6ee428e41e97ca [[$./end_at#ae79de0524ba60c00ab6ee428e41e97ca {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 66fe5741aabf440b8d7f8dc8bea37fa7 [[$./end_at#a66fe5741aabf440b8d7f8dc8bea37fa7 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as 64b2935e71a51b5340e4245c966da50f_exit  <<exitPoint>>
}
state " " as 1ee81dc2be0e466a7ad0eb9a8abcb4a3_exit  <<exitPoint>>
}


start --> 1ee81dc2be0e466a7ad0eb9a8abcb4a3_entry 
1ee81dc2be0e466a7ad0eb9a8abcb4a3_entry --> 0347d695dc96778634a5d0af4fffbcfd 
0347d695dc96778634a5d0af4fffbcfd --> 1ee81dc2be0e466a7ad0eb9a8abcb4a3_exit  : yes
0347d695dc96778634a5d0af4fffbcfd -[#red]-> 64b2935e71a51b5340e4245c966da50f_entry  : no

64b2935e71a51b5340e4245c966da50f_entry --> e79de0524ba60c00ab6ee428e41e97ca 
e79de0524ba60c00ab6ee428e41e97ca --> 64b2935e71a51b5340e4245c966da50f_exit  : yes
e79de0524ba60c00ab6ee428e41e97ca -[#red]-> 66fe5741aabf440b8d7f8dc8bea37fa7  : no

66fe5741aabf440b8d7f8dc8bea37fa7 --> 64b2935e71a51b5340e4245c966da50f_exit  : yes
66fe5741aabf440b8d7f8dc8bea37fa7 -[#red]-> end  : no
64b2935e71a51b5340e4245c966da50f_exit --> 1ee81dc2be0e466a7ad0eb9a8abcb4a3_exit 
1ee81dc2be0e466a7ad0eb9a8abcb4a3_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=a0347d695dc96778634a5d0af4fffbcfd



`END_AT(结束时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=ae79de0524ba60c00ab6ee428e41e97ca



`START_AT(开始时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a66fe5741aabf440b8d7f8dc8bea37fa7



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间







