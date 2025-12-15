<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
// 从逻辑参数获取数据集
def echart_page = logic.param('echart_page').getReal()

// 活跃总人数
def user_total = logic.param('user_total').getReal()
def total = user_total.get('total')

echart_page.eachWithIndex { currentRow, i ->
     // 计算活跃率
    def active_members = currentRow.get('active_members') ?: 0 
    def active_rate = total > 0 ?  (active_members.toDouble() / total.toDouble() * 100).round(2) :  "0.00"
    currentRow.set("active_rate", active_rate)  
}

 
```
