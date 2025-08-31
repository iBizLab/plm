<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def page_ideas = logic.param('page_ideas').getReal()
def relation_idea = logic.param('re_page_idea').getReal()
def relation_work_item = logic.param('re_page_item').getReal()
def relation_ticket = logic.param('re_page_ticket').getReal()
def relation_test_case = logic.param('re_page_case').getReal()
def result = logic.param('result').getReal()


// 5. 主循环处理
page_ideas.each { idea ->
    String id = idea.get("id")

    List<Object> relationIdeaList = new ArrayList<Object>()
    List<Object> relationWorkItemList = new ArrayList<Object>()
    List<Object> relationTicketList = new ArrayList<Object>()
    List<Object> relationCaseList = new ArrayList<Object>()

    relation_idea.each { it ->
        String principal_id = it.get("principal_id")
        if (principal_id.equals(id)) {
            relationIdeaList.add(it)
        }
    }
    relation_work_item.each { it ->
        String principal_id = it.get("principal_id")
        if (principal_id.equals(id)) {
            relationWorkItemList.add(it)
        }
    }
    relation_ticket.each { it ->
        String principal_id = it.get("principal_id")
        if (principal_id.equals(id)) {
            relationTicketList.add(it)

        }
    }
    relation_test_case.each { it ->
        String principal_id = it.get("principal_id")
        if (principal_id.equals(id)) {
            relationCaseList.add(it)
        }
    }
    def re_idea = sys.createEntity(null, false)
    def re_item = sys.createEntity(null, false)
    def re_ticket = sys.createEntity(null, false)
    def re_case = sys.createEntity(null, false)

    re_idea.set("content", relationIdeaList)
    re_item.set("content", relationWorkItemList)
    re_ticket.set("content", relationTicketList)
    re_case.set("content", relationCaseList)

    // 组装数据
    idea.set("re_idea", re_idea)
    idea.set("re_item", re_item)
    idea.set("re_ticket", re_ticket)
    idea.set("re_case", re_case)
    idea.set("idea_sum", relationIdeaList.size())
    idea.set("work_item_sum", relationWorkItemList.size())
    idea.set("ticket_sum", relationTicketList.size())
    idea.set("test_case_sum", relationCaseList.size())

    // 添加到结果集
    result.add(idea)
}
```
