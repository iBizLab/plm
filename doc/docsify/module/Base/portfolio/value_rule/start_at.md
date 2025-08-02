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
state "[条件组]OR" as 54ad2f8f201b1ab6a9511c12d898c16f [[$./start_at#a54ad2f8f201b1ab6a9511c12d898c16f {"[条件组]OR"}]] {
state " " as 54ad2f8f201b1ab6a9511c12d898c16f_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 7573160751f06db65639eb57393f6935 [[$./start_at#a7573160751f06db65639eb57393f6935 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as bdb10c86a9f2097bff4f00c7c12fdfec [[$./start_at#abdb10c86a9f2097bff4f00c7c12fdfec {"[条件组]OR"}]] {
state " " as bdb10c86a9f2097bff4f00c7c12fdfec_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as f1ea15f64ff21eccebea2f442edae7df [[$./start_at#af1ea15f64ff21eccebea2f442edae7df {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 4256be850a36306f0dd2a5b24786dd9b [[$./start_at#a4256be850a36306f0dd2a5b24786dd9b {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as bdb10c86a9f2097bff4f00c7c12fdfec_exit  <<exitPoint>>
}
state " " as 54ad2f8f201b1ab6a9511c12d898c16f_exit  <<exitPoint>>
}


start --> 54ad2f8f201b1ab6a9511c12d898c16f_entry 
54ad2f8f201b1ab6a9511c12d898c16f_entry --> 7573160751f06db65639eb57393f6935 
7573160751f06db65639eb57393f6935 --> 54ad2f8f201b1ab6a9511c12d898c16f_exit  : yes
7573160751f06db65639eb57393f6935 -[#red]-> bdb10c86a9f2097bff4f00c7c12fdfec_entry  : no

bdb10c86a9f2097bff4f00c7c12fdfec_entry --> f1ea15f64ff21eccebea2f442edae7df 
f1ea15f64ff21eccebea2f442edae7df --> bdb10c86a9f2097bff4f00c7c12fdfec_exit  : yes
f1ea15f64ff21eccebea2f442edae7df -[#red]-> 4256be850a36306f0dd2a5b24786dd9b  : no

4256be850a36306f0dd2a5b24786dd9b --> bdb10c86a9f2097bff4f00c7c12fdfec_exit  : yes
4256be850a36306f0dd2a5b24786dd9b -[#red]-> end  : no
bdb10c86a9f2097bff4f00c7c12fdfec_exit --> 54ad2f8f201b1ab6a9511c12d898c16f_exit 
54ad2f8f201b1ab6a9511c12d898c16f_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=af1ea15f64ff21eccebea2f442edae7df



`END_AT(结束时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a7573160751f06db65639eb57393f6935



`START_AT(开始时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a4256be850a36306f0dd2a5b24786dd9b



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间







