<p class="panel-title"><b>执行sql语句</b></p>

```sql
UPDATE AI_AGENT_CONVERSATION  SET STATUS= 'ended' WHERE SESSION_ID <> ? AND  USER_ID = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).SESSION_ID(外部会话ID)`
2. `用户全局对象.srfpersonid`

