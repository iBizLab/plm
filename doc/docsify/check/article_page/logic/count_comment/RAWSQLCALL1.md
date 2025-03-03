<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT COUNT(*) AS total FROM `comment` WHERE PRINCIPAL_TYPE = 'PAGE' AND CONTENT <> '<p><del>该评论已删除</del></p>' AND PRINCIPAL_ID = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).article_page`

将执行sql结果赋值给参数`comment_num(评论数)`
