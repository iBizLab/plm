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
state "[条件组]OR" as e37a3110d6f8835871ceba14c177542a [[$./end_at#ae37a3110d6f8835871ceba14c177542a {"[条件组]OR"}]] {
state " " as e37a3110d6f8835871ceba14c177542a_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 8249a7ee7578614f113528289886b5ed [[$./end_at#a8249a7ee7578614f113528289886b5ed {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 7421c83cfb32775d0042157490965f84 [[$./end_at#a7421c83cfb32775d0042157490965f84 {"[条件组]OR"}]] {
state " " as 7421c83cfb32775d0042157490965f84_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 909bb6bedd4e2f1ffc6d683f5f15125b [[$./end_at#a909bb6bedd4e2f1ffc6d683f5f15125b {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 774cf6b47056925b655d8e78b268307a [[$./end_at#a774cf6b47056925b655d8e78b268307a {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as 7421c83cfb32775d0042157490965f84_exit  <<exitPoint>>
}
state " " as e37a3110d6f8835871ceba14c177542a_exit  <<exitPoint>>
}


start --> e37a3110d6f8835871ceba14c177542a_entry 
e37a3110d6f8835871ceba14c177542a_entry --> 8249a7ee7578614f113528289886b5ed 
8249a7ee7578614f113528289886b5ed --> e37a3110d6f8835871ceba14c177542a_exit  : yes
8249a7ee7578614f113528289886b5ed -[#red]-> 7421c83cfb32775d0042157490965f84_entry  : no

7421c83cfb32775d0042157490965f84_entry --> 909bb6bedd4e2f1ffc6d683f5f15125b 
909bb6bedd4e2f1ffc6d683f5f15125b --> 7421c83cfb32775d0042157490965f84_exit  : yes
909bb6bedd4e2f1ffc6d683f5f15125b -[#red]-> 774cf6b47056925b655d8e78b268307a  : no

774cf6b47056925b655d8e78b268307a --> 7421c83cfb32775d0042157490965f84_exit  : yes
774cf6b47056925b655d8e78b268307a -[#red]-> end  : no
7421c83cfb32775d0042157490965f84_exit --> e37a3110d6f8835871ceba14c177542a_exit 
e37a3110d6f8835871ceba14c177542a_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=a909bb6bedd4e2f1ffc6d683f5f15125b



`START_AT(开始时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a774cf6b47056925b655d8e78b268307a



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间


##### (END_AT) 值为空(Nil) :id=a8249a7ee7578614f113528289886b5ed



`END_AT(结束时间)` ISNULL 






