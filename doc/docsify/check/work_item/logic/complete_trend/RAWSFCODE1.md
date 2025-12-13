<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def result_list = logic.param('result_list').getReal()
def result_page = logic.param('result_page').getReal()
def work_item = logic.param('work_item').getReal()

// 七天前未完成数量
def not_completed = work_item.get('seven_ago_not_completed')
def completed = work_item.get('seven_ago_completed')

def dateFormatter = new java.text.SimpleDateFormat("yyyy-MM-dd")
def calendar = java.util.Calendar.getInstance()

// 获取当前日期
def endDate = calendar.time

// 获取6天前的日期
calendar.add(Calendar.DAY_OF_MONTH, -6)
def startDate = calendar.time

// 生成日期列表
def datesInRange = []
calendar.time = startDate // 重置日历到起始日期

while (calendar.time <= endDate) {
    def rep_date = dateFormatter.format(calendar.time)
    def rep_obj = sys.entity('work_item')
    rep_obj.set('rep_date', rep_date) 
    result_list.add(rep_obj)
    calendar.add(java.util.Calendar.DATE, 1)
}
result_list.each { it ->
    def rep_date = dateFormatter.format(new Date(it.get('rep_date').time))
    result_page.each { item ->
        def state_type = item.get('state_type')
        if(state_type != null){
            if(state_type == 'completed' && item.get('completed_at') != null){
                def completed_at = dateFormatter.format(new Date(item.get('completed_at').time))
                if(completed_at == rep_date){
                    completed++
                    not_completed--
                }   
            } else if(state_type != 'completed' && item.get('create_time') != null){
                def create_time = dateFormatter.format(new Date(item.get('create_time').time))
                if(create_time == rep_date){
                    not_completed++
                }
            }
        }
    }
    it.set('rep_value1', not_completed)
    it.set('rep_value2', completed)
}


```
