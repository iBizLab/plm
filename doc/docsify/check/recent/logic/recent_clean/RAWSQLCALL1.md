<p class="panel-title"><b>执行sql语句</b></p>

```sql
update recent inner join 
(
	SELECT
		t1.id 
	FROM
		recent t1
		JOIN (
		SELECT
			create_man,
			owner_type,
			OWNER_SUBTYPE,
			SUBSTRING_INDEX( GROUP_CONCAT( id ORDER BY UPDATE_TIME DESC ), ',', 100 ) AS top_ids 
		FROM
			recent where IS_DELETED=0
		GROUP BY
			create_man,
			owner_type,
			OWNER_SUBTYPE 
		) t2 ON t1.create_man = t2.create_man 
		AND t1.owner_type = t2.owner_type 
		AND t1.OWNER_SUBTYPE = t2.OWNER_SUBTYPE 
		AND FIND_IN_SET( t1.id, t2.top_ids ) = 0 
 ) as tb on recent.id=tb.id
 set IS_DELETED=1
```


