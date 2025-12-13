<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('Default').getReal()
def deRuntime = logic.param('Default').getDataEntityRuntime();
def strThemeModel = _default.get("theme_model")
def themeModel = deRuntime.deserializeEntity(strThemeModel);
_default.set("search_conds",themeModel.get("searchconds"))
```
