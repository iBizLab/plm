<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```groovy
var Default = logic.getParam("Default");
//从Default中取出来工作项、需求、工单、用例的计数值
var work_item = Default.get("my_charge_work_item");
var idea = Default.get("my_charge_idea");
var ticket = Default.get("my_charge_ticket");
var test_case = Default.get("my_charge_test_case");
// 计算总和
var total = work_item + idea + ticket + test_case;

// 将总和保存回Default对象
Default.set("my_charge_total", total);

```
