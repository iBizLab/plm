<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('Default').getReal();
def work_item = logic.param('work_item').getReal();

//获取代码表
def run_status = sys.codelist('TestMgmt__run_status');


def table_start = '<table style="width: auto;"><tbody><tr><th colSpan="1" rowSpan="1" width="56.32">#</th><th colSpan="1" rowSpan="1" width="auto">步骤描述</th><th colSpan="1" rowSpan="1" width="auto">预期结果</th><th colSpan="1" rowSpan="1" width="auto">实际结果</th><th colSpan="1" rowSpan="1" width="80">执行结果</th></tr>';
def table_end = '</tbody></table>';
def steps = _default.get('steps');
def text = '<p><strong>前置条件：</strong></p>' + (_default.get('precondition') ?: '') + '<p><strong>执行步骤：</strong></p>' + table_start;


def content = '<td colSpan="1" rowSpan="1" width="auto">';
def group = '<td colSpan="4" rowSpan="1" width="auto">';

def order = 1;
def group_order = 0.1;
steps.each { item ->
    println item;
    if(item.get('is_group') == 0){
        text += '<tr>' + content + order + '</td>';
        text += content;
        text += (item.get('description') ?: '') + '</td>';
        text += content;
        text += (item.get('expected_value') ?: '') + '</td>'
        text += content;
        text += (item.get('actual_value') ?: '') + '</td>';
        text += content;
        text += (run_status.getText(item.get('status1'))) ?: '' + '</td>' + '</tr>';
    }else if(item.get('is_group') == 1){
        text += '<tr>' + content + order + '</td>';
        text += group;
        text += (item.get('name') ?: '') + '</td>' + '</tr>';
        group_order = 0.1;
    }else{
        group_order += order;
        text += '<tr>' + content + group_order + '</td>';
        text += content;
        text += (item.get('description') ?: '') + '</td>';
        text += content;
        text += (item.get('expected_value') ?: '') + '</td>'
        text += content;
        text += (item.get('actual_value') ?: '') + '</td>';
        text += content;
        text += (run_status.getText(item.get('status1'))) ?: '' + '</td>' + '</tr>';
        group_order += 0.1;
    }
    order++;
}
text +=table_end;

work_item.set('description', text);
```
