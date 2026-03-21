<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
net.ibizsys.central.cloud.core.spring.rt.ServiceHub serviceHub = net.ibizsys.central.cloud.core.spring.rt.ServiceHub.getInstance();

        org.yaml.snakeyaml.Yaml yaml = new org.yaml.snakeyaml.Yaml();
        String strConfig = serviceHub.getConfig("cloud-oss");
        java.util.Map config = (!org.springframework.util.StringUtils.hasLength(strConfig)) ? new java.util.HashMap() : yaml.loadAs(strConfig, java.util.Map.class);

        java.util.Map aiimage = config.getOrDefault("aiimage",new java.util.HashMap());
        aiimage.put("agent","${sys.getDeploySystemId()}-ai--vl".toString());
        config.put("aiimage",aiimage);


        if(!config.containsKey("filepath")) {
            String filepath = "/app/file/oss/file";
            String allinone = serviceHub.getConfig("servicehub-allinone");
            if(org.springframework.util.StringUtils.hasLength(allinone)){
                java.util.Map allinoneConfig = yaml.loadAs(allinone, java.util.Map.class);
                if(allinoneConfig.containsKey("systemsettings")) {
                    java.util.Map systemsettings  = allinoneConfig.getOrDefault("systemsettings",new java.util.HashMap());
                    if(systemsettings.containsKey("cloudossutil")) {
                        java.util.Map cloudossutil  = systemsettings.getOrDefault("cloudossutil",new java.util.HashMap());
                        if(cloudossutil.containsKey("filepath")) {
                            filepath = cloudossutil.remove("filepath");
                            if (cloudossutil.size()==0) {
                                systemsettings.remove("cloudossutil");
                            }
                            serviceHub.publishConfig("servicehub-allinone",allinoneConfig)
                        }
                    }
                }
            }
            config.put("filepath", filepath)
        }
        if(!config.containsKey("libreoffice")) {
            java.util.Map libreoffice = new java.util.HashMap()
            libreoffice.put("path","/usr/bin/soffice")
            config.put("libreoffice",libreoffice)
        }


        serviceHub.publishConfig("cloud-oss", config);
```
