<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('default').getReal()
def result = logic.param('result').getReal()
result.set('id', _default.get('id'))
result.set('effective', 1)
result.set('check_access_pwd', 0)
def expiration_date = _default.get('expiration_date')
if(expiration_date != null){
    java.time.LocalDateTime expirationDateTime = expiration_date.toLocalDateTime();
    // 获取当前时间的 java.time.LocalDateTime 对象
    def currentDateTime = java.time.LocalDateTime.now()
    // 将 LocalDateTime 转换为 LocalDate
    def currentDate = currentDateTime.toLocalDate()
    def expirationDate = expirationDateTime.toLocalDate()
    if (expirationDate.isBefore(currentDate)) {
        // 超过有效期
        result.set('effective', 0)
    }
}
if(_default.get('access_password') != null){
    result.set('check_access_pwd', 1)
}
```
