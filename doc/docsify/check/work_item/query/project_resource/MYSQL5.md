```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`END_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`START_AT`,
t1.`STATE`,
t1.`TITLE`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  ( t1.START_AT BETWEEN #{ctx.webcontext.n_date_scope_gtandeq}
AND #{ctx.webcontext.n_date_scope_ltandeq}  OR  t1.END_AT BETWEEN #{ctx.webcontext.n_date_scope_gtandeq}
AND #{ctx.webcontext.n_date_scope_ltandeq}  OR  (t1.start_at <= #{ctx.webcontext.n_date_scope_gtandeq}
and t1.end_at >= #{ctx.webcontext.n_date_scope_ltandeq}) ) )
```