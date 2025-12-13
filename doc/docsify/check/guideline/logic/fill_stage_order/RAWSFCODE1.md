<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def stage_list = logic.param('stage_list').getReal();
def order = 1;
stage_list.each { stage ->
    println "Order: $order, Stage: $stage"
    stage.set("order", order);
    order++;
}

```
