# 项目管理-scrum <!-- {docsify-ignore-all} -->


```plantuml
@startuml
<style>
root {
  HyperlinkColor #42b983
}
</style>
left to right direction

entity "ATTACHMENT\n附件" as ATTACHMENT [[$../module/Base/attachment {附件}]] {
        <&key> ID - 标识
        --
}
entity "FAVORITE\n收藏" as FAVORITE [[$../module/Base/favorite {收藏}]] {
        <&key> ID - 标识
        --
}
entity "PROGRESS\n项目进度" as PROGRESS [[$../module/ProjMgmt/progress {项目进度}]] {
        <&key> ID - 标识
        --
        <&link-intact> PROJECT_ID - 项目标识
}
entity "PROJECT\n项目" as PROJECT [[$../module/ProjMgmt/project {项目}]] {
        <&key> ID - 标识
        --
}
entity "PROJECT_MEMBER\n项目成员" as PROJECT_MEMBER [[$../module/ProjMgmt/project_member {项目成员}]] {
        <&key> ID - 标识
        --
        <&link-intact> USER_ID - 登录名
        <&link-intact> PROJECT_ID - 项目标识
}
entity "PROJECT_TAG\n项目标签" as PROJECT_TAG [[$../module/ProjMgmt/project_tag {项目标签}]] {
        <&key> ID - 标识
        --
}
entity "RELEASE\n项目发布" as RELEASE [[$../module/ProjMgmt/release {项目发布}]] {
        <&key> ID - 标识
        --
        <&link-intact> PROJECT_ID - 项目标识
}
entity "SPRINT\n迭代" as SPRINT [[$../module/ProjMgmt/sprint {迭代}]] {
        <&key> ID - 标识
        --
        <&link-intact> PROJECT_ID - 项目标识
        <&link-intact> PID - 父标识
}
entity "STAGE\n发布阶段" as STAGE [[$../module/ProjMgmt/stage {发布阶段}]] {
        <&key> ID - 标识
        --
        <&link-intact> RELEASE_ID - 项目发布标识
        <&link-intact> PID - 父标识
}
entity "TRANSITION_HISTORY\n流转记录" as TRANSITION_HISTORY [[$../module/ProjMgmt/transition_history {流转记录}]] {
        <&key> ID - 标识
        --
}
entity "VERSION\n版本" as VERSION [[$../module/Base/version {版本}]] {
        <&key> ID - 标识
        --
}
entity "WORK_ITEM\n工作项" as WORK_ITEM [[$../module/ProjMgmt/work_item {工作项}]] {
        <&key> ID - 标识
        --
        <&link-intact> STATE - 状态
        <&link-intact> ASSIGNEE_ID - 负责人
        <&link-intact> PROJECT_ID - 项目
        <&link-intact> WORK_ITEM_TYPE_ID - 工作项类型
        <&link-intact> PID - 父标识
        <&link-intact> SPRINT_ID - 迭代标识
        <&link-intact> BOARD_ID - 看板标识
        <&link-intact> ENTRY_ID - 看板栏标识
        <&link-intact> SWIMLANE_ID - 泳道标识
        <&link-intact> TOP_ID - 顶级工作项标识
        <&link-intact> RELEASE_ID - 项目发布标识
}
entity "WORK_ITEM_TYPE\n工作项类型" as WORK_ITEM_TYPE [[$../module/ProjMgmt/work_item_type {工作项类型}]] {
        <&key> ID - 标识
        --
        <&link-intact> PROJECT_ID - 项目标识
}

PROGRESS--> PROJECT : [[$../der/DER1N_PROGRESS_PROJECT_PROJECT_ID{DER1N_PROGRESS_PROJECT_PROJECT_ID} 1:N关系]]
PROJECT_MEMBER--> PROJECT : [[$../der/DER1N_PROJECT_MEMBER_PROJECT_PROJECT_ID{DER1N_PROJECT_MEMBER_PROJECT_PROJECT_ID} 1:N关系]]
RELEASE--> PROJECT : [[$../der/DER1N_RELEASE_PROJECT_PROJECT_ID{DER1N_RELEASE_PROJECT_PROJECT_ID} 1:N关系]]
SPRINT--> PROJECT : [[$../der/DER1N_SPRINT_PROJECT_PROJECT_ID{DER1N_SPRINT_PROJECT_PROJECT_ID} 1:N关系]]
WORK_ITEM--> PROJECT : [[$../der/DER1N_WORK_ITEM_PROJECT_PROJECT_ID{DER1N_WORK_ITEM_PROJECT_PROJECT_ID} 1:N关系]]
WORK_ITEM_TYPE--> PROJECT : [[$../der/DER1N_WORK_ITEM_TYPE_PROJECT_PROJECT_ID{DER1N_WORK_ITEM_TYPE_PROJECT_PROJECT_ID} 1:N关系]]
FAVORITE-- PROJECT : [[$../der/DERCCUSTOM_FAVORITE_PROJECT{DERCCUSTOM_FAVORITE_PROJECT} 自定义关系]]
STAGE--> RELEASE : [[$../der/DER1N_STAGE_RELEASE_RELEASE_ID{DER1N_STAGE_RELEASE_RELEASE_ID} 1:N关系]]
WORK_ITEM--> RELEASE : [[$../der/DER1N_WORK_ITEM_RELEASE_RELEASE_ID{DER1N_WORK_ITEM_RELEASE_RELEASE_ID} 1:N关系]]
SPRINT--> SPRINT : [[$../der/DER1N_SPRINT_SPRINT_PID{DER1N_SPRINT_SPRINT_PID} 1:N关系]]
WORK_ITEM--> SPRINT : [[$../der/DER1N_WORK_ITEM_SPRINT_SPRINT_ID{DER1N_WORK_ITEM_SPRINT_SPRINT_ID} 1:N关系]]
STAGE--> STAGE : [[$../der/DER1N_STAGE_STAGE_PID{DER1N_STAGE_STAGE_PID} 1:N关系]]
WORK_ITEM--> WORK_ITEM : [[$../der/DER1N_WORK_ITEM_WORK_ITEM_PID{DER1N_WORK_ITEM_WORK_ITEM_PID} 1:N关系]]
WORK_ITEM--> WORK_ITEM : [[$../der/DER1N_WORK_ITEM_WORK_ITEM_TOP_ID{DER1N_WORK_ITEM_WORK_ITEM_TOP_ID} 1:N关系]]
TRANSITION_HISTORY-- WORK_ITEM : [[$../der/DERCUSTOM_TRANSITION_HISTORY_WORK_ITEM{DERCUSTOM_TRANSITION_HISTORY_WORK_ITEM} 自定义关系]]
VERSION-- WORK_ITEM : [[$../der/DERCUSTOM_VERSION_WORK_ITEM{DERCUSTOM_VERSION_WORK_ITEM} 自定义关系]]
ATTACHMENT-- WORK_ITEM : [[$../der/DERCUSTOM_WORK_ITEM_ATTACHMENT{DERCUSTOM_WORK_ITEM_ATTACHMENT} 自定义关系]]
WORK_ITEM--> WORK_ITEM_TYPE : [[$../der/DER1N_WORK_ITEM_WORK_ITEM_TYPE_WORK_ITEM_TYPE_ID{DER1N_WORK_ITEM_WORK_ITEM_TYPE_WORK_ITEM_TYPE_ID} 1:N关系]]


hide methods
@enduml
```
