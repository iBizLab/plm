<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def change_page = logic.param('change_page').getReal()
def work_item_page = logic.param('work_item_page').getReal()
def sprint = logic.param('sprint').getReal()
def result_list = logic.param('result_list').getReal()


def startDate = new Date(sprint.get('start_at').time)
def endDate = new Date(sprint.get('end_at').time)

def dateFormatter = new java.text.SimpleDateFormat("yyyy-MM-dd")
def calendar = java.util.Calendar.getInstance()
calendar.time = startDate
// 从开始到结束的所有日期
while (!calendar.time.after(endDate)) {
    def rep_date = dateFormatter.format(calendar.time)
    def rep_obj = sys.entity('work_item')    
    rep_obj.set('rep_date', rep_date)
    result_list.add(rep_obj)
    calendar.add(java.util.Calendar.DATE, 1)
}

// 计算开始迭代时的移入工作项数量
def begin_count = 0
change_page.each { it ->
    // 迭代未开始 移入的记录
    if(it.get('type') == '1' && it.get('sprint_status') == '1'){
        begin_count++
    }
    if(it.get('type') == '2' && it.get('sprint_status') == '1' ){
        begin_count--
    }
}
def rep_num = begin_count
result_list.eachWithIndex { item, index ->
    def rep_date = dateFormatter.format(new Date(item.get('rep_date').time))
    if(begin_count > 0){
        // 计算递减步长
        def decrementStep = begin_count / (result_list.size() - 1)
        // 理想线 根据日期 从开始日期 逐天递减
        def rep_value1 =  begin_count - (decrementStep * index)        
        def formattedValue = String.format('%.2f', rep_value1)
        item.set('rep_value1', formattedValue)
    } else {
        item.set('rep_value1', 0)
    }
    if(index == 0){
        item.set('rep_value1', begin_count)
    }
    item.set('rep_value2', rep_num)
    work_item_page.each { it ->
        if(it.get('completed_at') != null){
            // 工作项完成时间
            def completed_at = dateFormatter.format(new Date(it.get('completed_at').time))
            if(completed_at == rep_date){
                rep_num--
                if(rep_num < 0){
                    rep_num = 0
                }
                item.set('rep_value2', rep_num)
            }  
        }    
    }
    change_page.each { it ->
        if(it.get('create_time') != null){
           // 移入移出迭代时间
            def change_date = dateFormatter.format(new Date(it.get('create_time').time))
            if(change_date == rep_date){
                // 迭代开始后 移入的记录
                if(it.get('type') == '1' && it.get('sprint_status') == '2'){
                    rep_num++
                    item.set('rep_value2', rep_num)
                }
                if(it.get('type') == '2' && it.get('sprint_status') == '2'){
                    rep_num--
                    if(rep_num < 0){
                        rep_num = 0
                    }
                    item.set('rep_value2', rep_num)
                }
            } 
        }
    }
}


```
