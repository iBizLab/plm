# 版本清单(ps_core_prd_func_spec_version)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)
#### 工具栏(toolbar)

## 视图界面逻辑
* `onLoadSuccess`
```javascript
console.log("spec ver list");

// 如果 versions 不存在，则初始化为包含 latest 的数组
data[0].versions = data[0].versions || [];

// 检查是否需要添加 latest
if (data[0].versions.length === 0 || 
    (data[0].versions[0].version && data[0].versions[0].version !== 'latest')) {
  data[0].versions.unshift({
    "version": "latest", 
    "http_url_to_repo": data[0].httpurltorepo, 
    "default_branch": data[0].default_branch
  });
  }


  // 增强版版本比较函数，支持 beta, alpha, rc 等预发布版本
  const compareVersions = (v1, v2) => {
    if (!v1 || !v2) return 0;
    
    // 解析版本号
    const parseVersion = (version) => {
      // 移除 v 前缀并转换为小写
      version = (version || '').toString().toLowerCase().replace(/^v/, '');
      
      // 分割主版本和预发布标签
      const dashParts = version.split('-');
      const main = dashParts[0];
      const prerelease = dashParts.slice(1).join('-') || '';
      
      // 解析主版本号 (1.2.3.4 等)
      const mainParts = main.split('.').map(part => {
        const num = parseInt(part, 10);
        return isNaN(num) ? 0 : num;
      });
      
      // 解析预发布标签 (beta.1, alpha.2, rc.3 等)
      const prereleaseParts = prerelease.split('.').map(part => {
        const num = parseInt(part, 10);
        return isNaN(num) ? part : num;
      });
      
      return {
        main: mainParts,
        prerelease: prereleaseParts,
        original: version
      };
    };
    
    const p1 = parseVersion(v1);
    const p2 = parseVersion(v2);
    
    // 比较主版本号
    for (let i = 0; i < Math.max(p1.main.length, p2.main.length); i++) {
      const n1 = p1.main[i] || 0;
      const n2 = p2.main[i] || 0;
      if (n1 < n2) return -1;
      if (n1 > n2) return 1;
    }
    
    // 如果主版本号相同，比较预发布标签
    // 规则: 无预发布标签 > 有预发布标签
    if (p1.prerelease.length === 0 && p2.prerelease.length > 0) return 1;
    if (p1.prerelease.length > 0 && p2.prerelease.length === 0) return -1;
    
    // 比较预发布标签
    for (let i = 0; i < Math.max(p1.prerelease.length, p2.prerelease.length); i++) {
      const r1 = p1.prerelease[i];
      const r2 = p2.prerelease[i];
      
      // 如果一个标签存在，另一个不存在，存在的小
      if (typeof r1 === 'undefined' && typeof r2 !== 'undefined') return -1;
      if (typeof r1 !== 'undefined' && typeof r2 === 'undefined') return 1;
      
      // 比较类型：数字 < 字符串
      if (typeof r1 === 'number' && typeof r2 === 'string') return -1;
      if (typeof r1 === 'string' && typeof r2 === 'number') return 1;
      
      // 相同类型比较
      if (typeof r1 === 'number' && typeof r2 === 'number') {
        if (r1 < r2) return -1;
        if (r1 > r2) return 1;
      } else if (typeof r1 === 'string' && typeof r2 === 'string') {
        // 预发布标签排序: alpha < beta < rc < 无标签
        const prereleaseOrder = { 'alpha': 0, 'beta': 1, 'rc': 2 };
        const order1 = prereleaseOrder[r1] !== undefined ? prereleaseOrder[r1] : 3;
        const order2 = prereleaseOrder[r2] !== undefined ? prereleaseOrder[r2] : 3;
        
        if (order1 < order2) return -1;
        if (order1 > order2) return 1;
        
        // 如果标签相同，比较标签值
        const compare = r1.localeCompare(r2);
        if (compare !== 0) return compare;
      }
    }
    
    return 0; // 完全相同
  };
  
  // 获取当前版本
  const major_system_version = data[0].major_system_version || '1.0.0';
  console.log("当前主系统版本:", major_system_version || "未知");
  
  // 遍历每个版本，计算 disable_install
  let installableCount = 0;
  let latestInstallable = false;
  
if(data[0].versions) {
  data[0].versions.forEach((version, index) => {
    const minRequired = version.min_required;
    const versionName = version.version || 'unknown';
    if(!version.http_url_to_repo) {
          version.http_url_to_repo = data[0].httpurltorepo;
    }
     if(!version.default_branch) {
          version.default_branch = data[0].default_branch;
    }

    version.state = data[0].funcstate;
    if(version.state ==1 || version.state == 3) {
        if(data[0].currentversion && data[0].currentversion == version.version ) {
             version.current_install=true;
        }
        else if (!data[0].currentversion && version.version === 'latest') {
             version.current_install=true;
        }
    }
    
    // 如果 min_required 为空，可以安装
    if (!minRequired || minRequired.trim() === '') {
      version.disable_install = false;
      version.can_install = true;
      version.install_reason = "无版本要求";
      installableCount++;
      
      if (versionName === 'latest') {
        latestInstallable = true;
      }
      
      console.log(` ${versionName}: 可安装 (无版本要求)`);
      return;
    }
    
    
    // 比较版本
    const comparison = compareVersions(major_system_version, minRequired);
    
    if (comparison < 0) {
      version.disable_install = true;
      version.can_install = false;
      version.install_reason = `当前主系统版本 ${major_system_version} 低于要求版本 ${minRequired}`;
      console.log(` ${versionName}: 不可安装 (需要 ${minRequired}+)`);
    } else {
      version.disable_install = false;
      version.can_install = true;
      version.install_reason = `满足主系统版本要求 (当前: ${major_system_version}, 需要: ${minRequired})`;
      installableCount++;
      
      if (versionName === 'latest') {
        latestInstallable = true;
      }
      
      console.log(` ${versionName}: 可安装 (满足要求)`);
    }
  });

}
```


<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>