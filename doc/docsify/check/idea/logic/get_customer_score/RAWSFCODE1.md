<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def list = logic.param("relation_page").getReal().content
def result = logic.param("result").getReal()
def score = 0
list.each{ item -> 
    sys.info('level', item.get("level"))
    switch(item.get("level")) {
        case '10':
            score += 3
            break
        case '20':
            score += 2
            break
        case '30':
            score += 1
            break
        case '40':
            score += 0
            break
        case '50':
            score += 1
            break
        default:
            score += 0;
    }
}

result.set("customer_score", score + "分") 
if (list.size() != 0) {
    result.set("customer_score_precent", score / (list.size() * 3))
} else {
    result.set("customer_score_precent", 0)
}
```
