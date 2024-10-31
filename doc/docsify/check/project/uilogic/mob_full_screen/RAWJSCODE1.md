<p class="panel-title"><b>执行代码</b></p>

```javascript
console.log('执行全屏逻辑');
if (uiLogic.ctrl) {
   const contentElement = uiLogic.ctrl.contentElement;
    if (contentElement) {
        ibiz.fullscreenUtil.openElementFullscreen(contentElement,{srftitle:'测试标题',showClose:true});
    }
}
```
