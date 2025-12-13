```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`FILE_ID`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`TITLE`,
t2.TITLE as `WORK_ITEM_TITLE`,
t2.IDENTIFIER as `WORK_ITEM_IDENTIFIER`,
t2.WORK_ITEM_TYPE_ID as `WORK_ITEM_TYPE_ID`
FROM `ATTACHMENT` `t1`, `WORK_ITEM` `t2`
WHERE t1.OWNER_ID = t2.ID and t1.OWNER_TYPE = 'WORK_ITEM' and t1.OWNER_SUBTYPE = 'DELIVERABLE'
and t2.is_archived = 0 and t2.is_deleted = 0
and exists(select 1 from `project` t3 where t3.id = t2.project_id and t3.id = #{ctx.webcontext.project_id})

```