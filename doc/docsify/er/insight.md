# 效能度量 <!-- {docsify-ignore-all} -->


```plantuml
@startuml
skinparam svgLinkTarget _blank
<style>
root {
  HyperlinkColor #42b983
}
</style>
left to right direction

entity "INSIGHT\n洞察力" as INSIGHT [[$../module/Base/insight {洞察力}]] {
        <&key> ID - 标识
        --
}
entity "INSIGHT_REPORT\n效能报表" as INSIGHT_REPORT [[$../module/Insight/insight_report {效能报表}]] {
        <&key> ID - 标识
        --
        <&link-intact> VIEW_ID - 视图标识
}
entity "INSIGHT_VIEW\n效能视图" as INSIGHT_VIEW [[$../module/Insight/insight_view {效能视图}]] {
        <&key> ID - 标识
        --
}
entity "PSSYSBICUBE\n智能报表立方体" as PSSYSBICUBE [[$../module/extension/PSSysBICube {智能报表立方体}]] {
        <&key> PSSYSBICUBEID - 智能报表立方体标识
        --
}
entity "PSSYSBICUBEDIMENSION\n智能报表立方体维度" as PSSYSBICUBEDIMENSION [[$../module/extension/PSSysBICubeDimension {智能报表立方体维度}]] {
        <&key> PSSYSBICUBEDIMENSIONID - 立方体维度标识
        --
}
entity "PSSYSBICUBEMEASURE\n智能报表立方体指标" as PSSYSBICUBEMEASURE [[$../module/extension/PSSysBICubeMeasure {智能报表立方体指标}]] {
        <&key> PSSYSBICUBEMEASUREID - 智能报表指标标识
        --
}
entity "PSSYSBIREPORT\n智能报表" as PSSYSBIREPORT [[$../module/extension/PSSysBIReport {智能报表}]] {
        <&key> PSSYSBIREPORTID - 智能报表标识
        --
}
entity "PSSYSBIREPORTITEM\n智能报表项" as PSSYSBIREPORTITEM [[$../module/extension/PSSysBIReportItem {智能报表项}]] {
        <&key> PSSYSBIREPORTITEMID - 智能报表项标识
        --
        <&link-intact> PSSYSBIREPORTID - 智能报表报表
}

INSIGHT_REPORT--> INSIGHT_VIEW : [[$../der/DER1N_INSIGHT_REPORT_INSIGHT_VIEW_VIEW_ID{DER1N_INSIGHT_REPORT_INSIGHT_VIEW_VIEW_ID} 1:N关系]]
PSSYSBIREPORTITEM--> PSSYSBIREPORT : [[$../der/DER1N_PSSYSBIREPORTITEM_PSSYSBIREPORT_PSSYSBIREPORTID{DER1N_PSSYSBIREPORTITEM_PSSYSBIREPORT_PSSYSBIREPORTID} 1:N关系]]


hide methods
@enduml
```
