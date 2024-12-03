<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def list = logic.param("relation_page").getReal().content
def result = logic.param("result").getReal()
def score = 0
def customer_num = list.size()
def very_important = 0
def very_important_precent = 0
def important = 0
def important_precent = 0
def normal = 0
def normal_precent = 0
def unknown = 0
def unknown_precent = 0
def not_important = 0
def not_important_precent = 0
def score_precent = 0

list.each{ item -> 
    sys.info('level', item.get("level"))
    switch(item.get("level")) {
        case '10':
            score += 3
            very_important++
            break
        case '20':
            score += 2
            important++
            break
        case '30':
            score += 1
            normal++
            break
        case '40':
            score += 0
            not_important++
            break
        case '50':
            score += 1
            unknown++
            break
        default:
            score += 0;
    }
}

if (customer_num != 0) {
    very_important_precent = very_important / customer_num
    important_precent = important / customer_num
    normal_precent = normal / customer_num
    unknown_precent = unknown / customer_num
    not_important_precent = not_important / customer_num
    score_precent = score / (customer_num * 3)
}

result.set("score", score + "分")
result.set("customer_num", customer_num)
result.set("very_important", very_important)
result.set("important", important)
result.set("normal", normal)
result.set("unknown", unknown)
result.set("not_important", not_important)
result.set("very_important_precent", very_important_precent)
result.set("important_precent", important_precent)
result.set("normal_precent", normal_precent)
result.set("unknown_precent", unknown_precent)
result.set("not_important_precent", not_important_precent)
result.set("score_precent", score_precent)
```
