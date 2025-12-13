<p class="panel-title"><b>执行代码</b></p>

```javascript
const appDataEntityId = 'plmweb.review_content';
const context = uiLogic.ctx;
const data_arr = uiLogic.default;

const keyMapping = {
    srfkey: 'target_id',
};

const propertyMap = uiLogic.view.model.appViewParams?.find(
    item => item.key.toLowerCase() === 'PROPERTYMAP'.toLowerCase(),
);

if (propertyMap) {
    const keyValuePairs = propertyMap.value.split(',');
    // 遍历键值对数组并添加到 keyMapping 映射对象中
    for (const pair of keyValuePairs) {
        const [sourceKey, targetKey] = pair.split(':');
        if (sourceKey && targetKey) {
            keyMapping[sourceKey] = targetKey;
        }
    }
}

// *转换属性
const addData = data_arr.map(item => {
    const tempData = {};
    // 遍历映射对象，将属性从 item 复制到 tempData
    Object.keys(keyMapping).forEach(key => {
        const targetKey = keyMapping[key];
        tempData[targetKey] = item[key];
    });
    // 获取 change_version 中 from 对象的 owner_type
    const ownerType = context.principal_type.toUpperCase();
    // 将 target_type 字段设置为 owner_type
    tempData['target_type'] = ownerType;
    keyMapping['srfkey'] = item['id'];
    return tempData;
});

// 获取实体服务并调用创建接口
const service = ibiz.hub.getApp(context.srfappid).deService;
service.exec(appDataEntityId, 'Create', context, addData);

```
