## 开始时间(START_AT) <!-- {docsify-ignore-all} -->

   

### 开始时间 :id=START_AT

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
state "[条件组]OR" as c87308c0dba5cef64550a332063c8c97 [[$./start_at#ac87308c0dba5cef64550a332063c8c97 {"[条件组]OR"}]] {
state " " as c87308c0dba5cef64550a332063c8c97_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 9b2148b9be63c9511f0cc4ae38390b73 [[$./start_at#a9b2148b9be63c9511f0cc4ae38390b73 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 8fa33b3384fac77dc73ed243cfd56d62 [[$./start_at#a8fa33b3384fac77dc73ed243cfd56d62 {"[条件组]OR"}]] {
state " " as 8fa33b3384fac77dc73ed243cfd56d62_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as c05d1c1475953eeeaa6a39eb268a40ff [[$./start_at#ac05d1c1475953eeeaa6a39eb268a40ff {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as f56441f348206697cfde4d1f5ef31e4f [[$./start_at#af56441f348206697cfde4d1f5ef31e4f {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 8fa33b3384fac77dc73ed243cfd56d62_exit  <<exitPoint>>
}
state " " as c87308c0dba5cef64550a332063c8c97_exit  <<exitPoint>>
}


start --> c87308c0dba5cef64550a332063c8c97_entry 
c87308c0dba5cef64550a332063c8c97_entry --> 9b2148b9be63c9511f0cc4ae38390b73 
9b2148b9be63c9511f0cc4ae38390b73 --> c87308c0dba5cef64550a332063c8c97_exit  : yes
9b2148b9be63c9511f0cc4ae38390b73 -[#red]-> 8fa33b3384fac77dc73ed243cfd56d62_entry  : no

8fa33b3384fac77dc73ed243cfd56d62_entry --> c05d1c1475953eeeaa6a39eb268a40ff 
c05d1c1475953eeeaa6a39eb268a40ff --> 8fa33b3384fac77dc73ed243cfd56d62_exit  : yes
c05d1c1475953eeeaa6a39eb268a40ff -[#red]-> f56441f348206697cfde4d1f5ef31e4f  : no

f56441f348206697cfde4d1f5ef31e4f --> 8fa33b3384fac77dc73ed243cfd56d62_exit  : yes
f56441f348206697cfde4d1f5ef31e4f -[#red]-> end  : no
8fa33b3384fac77dc73ed243cfd56d62_exit --> c87308c0dba5cef64550a332063c8c97_exit 
c87308c0dba5cef64550a332063c8c97_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=a9b2148b9be63c9511f0cc4ae38390b73



`START_AT(开始时间)` ISNULL 

##### (END_AT) 值为空(Nil) :id=ac05d1c1475953eeeaa6a39eb268a40ff



`END_AT(结束时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=af56441f348206697cfde4d1f5ef31e4f



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间







