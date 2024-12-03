<p class="panel-title"><b>执行代码</b></p>

```javascript
const review_content = uiLogic.review_content;
const content_version = review_content.change_version;


if(content_version && content_version.length >0){
    content_version.forEach((c_version, index) => {
        if(c_version.srflistmapfield == 'from'){
            review_content.base_version = c_version.id;
        }
        if(c_version.srflistmapfield == 'to'){
            review_content.compare_version = c_version.id;
        }
    })

}


```
