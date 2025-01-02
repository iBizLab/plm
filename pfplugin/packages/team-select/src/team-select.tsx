/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Ref,
  VNode,
  computed,
  defineComponent,
  nextTick,
  onBeforeMount,
  onMounted,
  onUnmounted,
  ref,
  watch,
} from 'vue';
import {
  getDataPickerProps,
  getEditorEmits,
  useClickOutside,
  useNamespace,
} from '@ibiz-template/vue3-util';
import { ILayoutPanel } from '@ibiz/model-core';
import { OnClickOutsideResult } from '@ibiz-template/core';
import { TeamSelectController } from './team-select.controller';
import { VirtualList } from './virtual-list';
import { resource } from './global';

import './team-select.scss';

export const TeamSelect = defineComponent({
  name: 'TeamSelect',
  props: getDataPickerProps<TeamSelectController>(),
  emits: getEditorEmits(),
  setup(props, { emit }) {
    const ns = useNamespace('team-select');

    const c = props.controller!;

    // 下拉各项
    const dropDownItem = [
      { name: '成员', label: 'member' },
      { name: '部门', label: 'department' },
      { name: '团队', label: 'team' },
    ];

    const dropDownItemVisible = ref({
      member: false,
      department: false,
      team: false,
    });

    // 成员svg
    const numberSvg = () => {
      return (
        <svg
          viewBox='0 0 16 16'
          xmlns='http://www.w3.org/2000/svg'
          height='1em'
          width='1em'
          preserveAspectRatio='xMidYMid meet'
          focusable='false'
        >
          <g id='azvnormal/user-bold' stroke-width='1' fill-rule='evenodd'>
            <path
              d='M8 .828a4.172 4.172 0 0 1 2.548 7.476A6.696 6.696 0 0 1 14.7 14.5a.7.7 0 0 1-1.4 0 5.3 5.3 0 0 0-10.595-.222L2.7 14.5a.7.7 0 0 1-1.4 0l.006-.279a6.7 6.7 0 0 1 4.146-5.92A4.172 4.172 0 0 1 8 .828zm0 1.344a2.828 2.828 0 0 0-.326 5.637 6.797 6.797 0 0 1 .651-.002A2.828 2.828 0 0 0 8 2.172z'
              id='azv形状结合'
            ></path>
          </g>
        </svg>
      );
    };

    // 部门svg
    const departmentSvg = () => {
      return (
        <svg
          viewBox='0 0 16 16'
          xmlns='http://www.w3.org/2000/svg'
          height='1em'
          width='1em'
          preserveAspectRatio='xMidYMid meet'
          focusable='false'
        >
          <g
            id='aqo1.Base基础/1.icon图标/2.normal/部门'
            stroke-width='1'
            fill-rule='evenodd'
          >
            <path
              d='M9 1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-.39l-.016 2.138H11.5a2.1 2.1 0 0 1 2.095 1.95l.005.15V11h.4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h.4V9.238a.9.9 0 0 0-.787-.893l-.113-.007h-7a.9.9 0 0 0-.893.787l-.007.113V11H4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h.4V9.238a2.1 2.1 0 0 1 1.95-2.094l.15-.006h2.894L7.41 5H7a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h2zm4.8 11.2h-1.6v1.6h1.6v-1.6zm-10 0H2.2v1.6h1.6v-1.6zm5-10H7.2v1.6h1.6V2.2z'
              id='aqo形状结合'
            ></path>
          </g>
        </svg>
      );
    };

    // 团队svg
    const teamSvg = () => {
      return (
        <svg
          viewBox='0 0 16 16'
          xmlns='http://www.w3.org/2000/svg'
          height='1em'
          width='1em'
          preserveAspectRatio='xMidYMid meet'
          focusable='false'
        >
          <g id='azznormal/user-group' stroke-width='1' fill-rule='evenodd'>
            <path
              d='M8.2 8.85a5.602 5.602 0 0 1 3.399 5.04.6.6 0 1 1-1.19.11H10.4a4.4 4.4 0 0 0-8.8-.06l.003.06a.6.6 0 0 1-1.2 0H.4c0-2.311 1.4-4.296 3.4-5.15a3.6 3.6 0 1 1 4.402 0zM6 8.4a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8zm4.5 1.2V8.4a1.9 1.9 0 0 0 0-3.8V3.4a3.1 3.1 0 0 1 2.048 5.428A5.104 5.104 0 0 1 15.576 13h-.016a.6.6 0 1 1-1.198-.048A3.9 3.9 0 0 0 10.5 9.6zM6.632 13H5.424h1.208z'
              id='azz形状结合'
            ></path>
          </g>
        </svg>
      );
    };

    // 绘制各图标
    const renderItemSvg = (label: string) => {
      if (label === 'member') {
        return numberSvg();
      }
      if (label === 'department') {
        return departmentSvg();
      }
      if (label === 'team') {
        return teamSvg();
      }
    };

    // 右箭头
    const rightArrowSvg = () => {
      return (
        <svg
          viewBox='0 0 16 16'
          xmlns='http://www.w3.org/2000/svg'
          height='1em'
          width='1em'
          preserveAspectRatio='xMidYMid meet'
          focusable='false'
        >
          <g
            id='abbnavigation/angle-right'
            stroke-width='1'
            fill-rule='evenodd'
          >
            <path
              d='M7.978 11.498l-.005.005L2.3 5.831 3.13 5l4.848 4.848L12.826 5l.83.831-5.673 5.672-.005-.005z'
              id='abb形状结合'
              transform='rotate(-90 7.978 8.252)'
            ></path>
          </g>
        </svg>
      );
    };

    // 选中团队展示图标
    const teamMemberSvg = () => {
      return (
        <svg
          viewBox='0 0 16 16'
          xmlns='http://www.w3.org/2000/svg'
          height='1em'
          width='1em'
          preserveAspectRatio='xMidYMid meet'
          focusable='false'
        >
          <g id='azznormal/user-group' stroke-width='1' fill-rule='evenodd'>
            <path
              d='M8.2 8.85a5.602 5.602 0 0 1 3.399 5.04.6.6 0 1 1-1.19.11H10.4a4.4 4.4 0 0 0-8.8-.06l.003.06a.6.6 0 0 1-1.2 0H.4c0-2.311 1.4-4.296 3.4-5.15a3.6 3.6 0 1 1 4.402 0zM6 8.4a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8zm4.5 1.2V8.4a1.9 1.9 0 0 0 0-3.8V3.4a3.1 3.1 0 0 1 2.048 5.428A5.104 5.104 0 0 1 15.576 13h-.016a.6.6 0 1 1-1.198-.048A3.9 3.9 0 0 0 10.5 9.6zM6.632 13H5.424h1.208z'
              id='azz形状结合'
            ></path>
          </g>
        </svg>
      );
    };

    const deleteSvg = () => {
      return (
        <svg
          viewBox='0 0 16 16'
          xmlns='http://www.w3.org/2000/svg'
          height='1em'
          width='1em'
          preserveAspectRatio='xMidYMid meet'
          focusable='false'
        >
          <g
            id='agwtips/close-circle-bold-fill'
            stroke-width='1'
            fill-rule='evenodd'
          >
            <path
              d='M0 8c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8zm6.296.064l-2.298 2.298 1.768 1.768 2.298-2.298 2.298 2.298 1.768-1.768-2.298-2.298 2.298-2.298-1.768-1.768-2.298 2.298-2.298-2.298-1.768 1.768 2.298 2.298z'
              id='agw形状结合'
            ></path>
          </g>
        </svg>
      );
    };

    // 选择状态
    const selectState: Ref<'department' | 'member' | 'team'> = ref('member');

    // 加载中
    const loading: Ref<boolean> = ref(false);

    // 部门人员树伸缩状态
    const collapseState = ref(false);

    // 当前值
    const curValue: Ref<string | null> = ref('');

    // 实体数据集-user
    const items: Ref<IData[]> = ref([]);

    // 实体数据集-dept-user
    const deptItems: Ref<IData[]> = ref([]);

    // 团队数据集
    const teamItems: Ref<IData[]> = ref([]);

    // 团队成员数据集
    const teamMenberItems: Ref<Map<string, IData>> = ref(new Map());

    // 团队成员选中数据集
    const teamMenberItemsCheck: Ref<Map<string, Ref<boolean>>> = ref(new Map());

    // 搜索框
    const searchRef: Ref<any> = ref();

    // 下拉列表框
    const dropdownRef: Ref<any> = ref();

    const dropdownVisible: Ref<boolean> = ref(false);

    // popover
    const popoverRef: Ref<any> = ref();

    // 搜索值
    const searchValue = ref('');

    // 远程过滤后的人员数据
    const romateData: Ref<IData[]> = ref([]);

    // 过滤后的团队数据
    const romateTeamData: Ref<IData[]> = ref([]);

    // 远程搜索定时器标识
    const timer = ref();

    const selectedPersonnel: Ref<null | IData> = ref(null);

    // 点击外部
    let funcs: OnClickOutsideResult;

    // 所有头像加载失败项
    const errorLoadItems: Ref<string[]> = ref([]);

    // 是否显示表单默认内容
    const showFormDefaultContent = computed(() => {
      if (
        props.controlParams &&
        props.controlParams.editmode === 'hover' &&
        !props.readonly
      ) {
        return true;
      }
      return false;
    });

    // 获取主题色
    const getThemeVar = (): string | null => {
      const root = document.documentElement;
      if (!root) {
        return null;
      }
      const style = getComputedStyle(root);

      const primary = style.getPropertyValue('--ibiz-color-primary');
      return primary;
    };

    // 判断是不是汉字
    const isChineseCharacter = (char: string): boolean => {
      return /[\u4E00-\u9FA5]/.test(char);
    };

    // 判断字符串是否同时存在英文和中文
    const hasChineseAndEnglish = (str: string): boolean => {
      const regex = /[\u4e00-\u9fa5]+.*[a-zA-Z]+|[a-zA-Z]+.*[\u4e00-\u9fa5]+/;
      return regex.test(str);
    };

    // 字符串转16进制颜色
    const stringToHexColor = (textVal: string): string => {
      if (!textVal) return '';
      // 计算字符串的哈希值
      let hash = 0;
      for (let i = 0; i < textVal.length; i++) {
        if (isChineseCharacter(textVal)) {
          // eslint-disable-next-line no-bitwise
          hash = textVal.charCodeAt(i) + ((hash << 5) - hash);
          // eslint-disable-next-line operator-assignment, no-bitwise
          hash = hash & hash;
        } else {
          const charCode = textVal.charCodeAt(i);
          hash += charCode.toString(16) as unknown as number;
        }
      }

      // 将哈希值转换为16进制颜色代码
      const trimmedHash = String(hash).substring(0, 6);

      let r = parseInt(trimmedHash.substring(0, 2), 16);
      let g = parseInt(trimmedHash.substring(2, 4), 16);
      let b = parseInt(trimmedHash.substring(4, 6), 16);
      if (r < 0) {
        r = 10;
      }
      if (g < 0) {
        g = 10;
      }
      if (b < 0) {
        b = 10;
      }

      const colorCode = `#${r.toString(16).padStart(2, '0')}${g
        .toString(16)
        .padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
      if (colorCode === '#FFFFFF') {
        return getThemeVar() || colorCode;
      }
      return colorCode;
    };

    // 绘制文本标志头
    const renderTextPhoto = (text: string) => {
      if (text && text.toString().length < 2) {
        return text;
      }
      if (text && text.toString().length >= 2) {
        // 大于两个字符
        const tag = hasChineseAndEnglish(text);
        // 存在中英文混合情况，按顺序取第一个英文与第一个中文
        if (tag) {
          const engChar: string =
            text.split('').find((char: string) => {
              return /[a-zA-Z]/.test(char);
            }) || '';
          const chineseStr: string =
            text.split('').find((char: string) => {
              return /[\u4E00-\u9FA5]/.test(char);
            }) || '';
          return `${engChar}${chineseStr}`.toLowerCase();
        }
        // 只存在英文，取前两个
        const engTag = /[a-zA-Z]/.test(text);
        if (engTag) {
          return text
            .split('')
            .filter((char: string) => {
              return /[a-zA-Z]/.test(char);
            })
            .slice(0, 2)
            .join('')
            .toUpperCase();
        }
        // 只存在中文，取最后两个
        const chineseTag = /[\u4E00-\u9FA5]/.test(text);
        if (chineseTag) {
          return text
            .split('')
            .filter((char: string) => {
              return /[\u4E00-\u9FA5]/.test(char);
            })
            .slice(-2)
            .join('');
        }
        return text.replaceAll(' ', '').substring(0, 2);
      }
    };

    // 绘制选中的icon
    const renderSelectIcon = (key: string) => {
      return selectedPersonnel.value?.id === key ? (
        <div class={ns.bem('select-modal', 'personel-list', 'icon')}>
          <i class='fa fa-check' aria-hidden='true'></i>
        </div>
      ) : null;
    };

    const avatarLoadError = (avatarUrl: string) => {
      console.log('头像加载失败');
      errorLoadItems.value.push(avatarUrl);
    };

    // 获取用户头像
    const getUserAvatar = (avatarUrl: string) => {
      if (!avatarUrl) {
        return null;
      }
      const urlConfig = JSON.parse(avatarUrl);
      if (urlConfig.length === 0) {
        return null;
      }
      const { downloadUrl } = ibiz.util.file.calcFileUpDownUrl(
        c.context,
        c.params,
        props.data,
        c.editorParams,
      );
      const url = downloadUrl.replace('%fileId%', urlConfig[0].id);
      return (
        <img
          class={ns.bem('select-modal', 'personel-list', 'avatar')}
          src={url}
          onError={() => avatarLoadError(avatarUrl)}
          alt=''
        />
      );
    };

    // 绘制用户头像
    const renderUserAvatar = (userid: string, usertext: string) => {
      if (
        c.operatorMap &&
        c.operatorMap.get(userid) &&
        c.operatorMap.get(userid).data.iconurl &&
        !errorLoadItems.value.includes(c.operatorMap.get(userid).data.iconurl)
      ) {
        return getUserAvatar(c.operatorMap.get(userid).data.iconurl);
      }
      return renderTextPhoto(usertext);
    };

    const onACSelect = async (
      event: Event,
      data: IData,
      isTeam: boolean = false,
    ) => {
      event.preventDefault();
      event.stopPropagation();
      console.log('选中数据', data);

      // 关闭popover
      dropDownItemVisible.value.team = false;
      dropDownItemVisible.value.department = false;
      dropDownItemVisible.value.member = false;

      if (isTeam) {
        const checkValue = teamMenberItemsCheck.value.get(data.id)!;
        checkValue.value = true;
        // reviewer_type 30
        emit('change', data.id, c.valueItem);
        emit('change', data.name);
        if (c.teamValueItem) {
          emit('change', 30, c.teamValueItem);
        }
      } else {
        resetTeamMenberItemsCheck();
        if (selectState.value === 'member' || selectState.value === 'team') {
          emit('change', data[c.userFilterMap.id], c.valueItem);
        } else {
          emit('change', data[c.deptFilterMap.id], c.valueItem);
        }

        if (selectState.value === 'member' || selectState.value === 'team') {
          emit('change', data[c.userFilterMap.name]);
        } else {
          emit('change', data[c.deptFilterMap.name]);
        }

        if (c.teamValueItem) {
          emit('change', 20, c.teamValueItem);
        }
      }
      searchValue.value = '';

      dropdownRef.value.handleClose();
    };

    onBeforeMount(async () => {
      await dropdownClick();
      const type = calcId(props.data[c.valueItem]);
      if (type === 'team') {
        selectedPersonnel.value = {
          dataType: 'team',
          name: props.value,
        };
      } else if (type === 'member') {
        selectedPersonnel.value = {
          name: props.value,
          [c.userFilterMap.id]: props.data[c.valueItem],
          [c.deptFilterMap.id]: props.data[c.valueItem],
        };
      }
    });

    // 重置团队单选
    const resetTeamMenberItemsCheck = () => {
      const keysArray = Array.from(teamMenberItemsCheck.value.keys());
      keysArray.forEach(str => {
        const b = teamMenberItemsCheck.value.get(str);
        if (b) {
          b.value = false;
        }
      });
    };

    // 清空输入框
    const clearSelect = (_isTeam: boolean = false) => {
      searchValue.value = '';
      dropDownItemVisible.value.team = false;
      dropDownItemVisible.value.department = false;
      dropDownItemVisible.value.member = false;

      resetTeamMenberItemsCheck();

      emit('change', null, c.valueItem);
      emit('change', null);
    };

    // 绘制列表项
    const renderPersonItem = (
      item: IData,
      showSelect: boolean = true,
      showpadding: boolean = true,
    ) => {
      const usertext: string =
        selectState.value === 'member' || selectState.value === 'team'
          ? item[c.userFilterMap.name] || item.name
          : item[c.deptFilterMap.name] || item.name;
      const userid: string =
        selectState.value === 'member' || selectState.value === 'team'
          ? item[c.userFilterMap.id]
          : item[c.deptFilterMap.id];
      return (
        <div
          class={[
            ns.bem('select-modal', 'personel-list', 'item'),
            showpadding ? 'isShowPadding' : '',
            // ns.is('selected', selectedPersonnel.value?.id === userid),
          ]}
          onClick={e => onACSelect(e, item)}
        >
          <div class={ns.bem('select-modal', 'personel-list', 'text')}>
            <div
              class={ns.bem('select-modal', 'personel-list', 'text-img')}
              style={`background-color:${stringToHexColor(usertext)}`}
            >
              {renderUserAvatar(userid, usertext)}
            </div>
            <div class={ns.bem('select-modal', 'personel-list', 'text-label')}>
              {usertext}
            </div>
            {showSelect && userid === c.context.srfuserid ? (
              <div class={ns.bem('select-modal', 'personel-list', 'myself')}>
                我自己
              </div>
            ) : null}
          </div>
          {showSelect && renderSelectIcon(userid)}
        </div>
      );
    };

    // 绘制团队列表项
    const renderTeamItem = (item: IData) => {
      const tMItems = teamMenberItems.value.get(item.id);
      return (
        <div
          class={[
            ns.bem('select-modal', 'personel-list', 'item-team'),
            // ns.is('selected', refValue.value === userid),
          ]}
          onClick={e => onACSelect(e, item, true)}
        >
          <img
            src={`${resource.dir('assets/images/svg/user-group-avatar.svg')}`}
            style={'margin-right:6px'}
            alt=''
          />
          {item.name}
          {tMItems && ' · '}
          {tMItems && tMItems.length}
        </div>
      );
    };

    const renderPanelItem = (item: IData, modelData: ILayoutPanel): VNode => {
      const { context, params } = c;
      return (
        <iBizControlShell
          class={ns.b('panel-item')}
          data={item}
          modelData={modelData}
          context={context}
          params={params}
        ></iBizControlShell>
      );
    };

    // 绘制人员信息popover弹窗
    const renderUserInfoPop = (item: IData, panel: ILayoutPanel) => {
      const tempInfoPopRef = ref();
      return (
        <el-popover
          ref={tempInfoPopRef}
          target='hover'
          placement='right'
          offset={24}
          width={'auto'}
          // onShow={(e: HTMLElement) => {
          //   // 移入后对将当前项popover实例赋值
          //   userInfoPopRef = tempInfoPopRef;
          // }}
        >
          {{
            reference: () => {
              return renderPersonItem(item);
            },
            default: () => {
              return renderPanelItem(item, panel);
            },
          }}
        </el-popover>
      );
    };

    // 绘制人员列表
    const renderPersonelSelect = (tempItems: IData[]) => {
      // const actions = c.model.uiactionGroup?.uiactionGroupDetails || [];
      const _items = tempItems;
      const panel = c.deACMode?.itemLayoutPanel;
      return (
        <VirtualList
          items={_items}
          itemHeight={36}
          class={[
            ns.be('select-modal', 'personel-list'),
            ns.be('select-modal', `personel-list-${selectState.value}`),
            // ns.is('no-solider-tab', !c.isShowTab && actions.length > 0),
          ]}
          // onScrollEvent={(contentHeight: number, scrollTop: number) =>
          //   scrollEvent(contentHeight, scrollTop)
          // }
        >
          {{
            default: (item: IData) => {
              // 有面板显示面板，没有就显示项，暂不支持项插件
              return panel
                ? renderUserInfoPop(item, panel)
                : renderPersonItem(item, true);
            },
          }}
        </VirtualList>
      );
    };

    // 解决items值重复的问题
    const handleItems = (datas: IData[], key: string) => {
      datas.forEach((_data: IData) => {
        const index = items.value.findIndex((_item: IData) => {
          return _item[key] === _data[key];
        });
        if (index > -1) {
          items.value.splice(index, 1, _data);
        } else {
          items.value.push(_data);
        }
      });
    };

    const loadmember = async (_tag: boolean = false) => {
      // if (searchValue.value) return;
      loading.value = true;
      const params: IData = {};
      params.page = c.page;
      try {
        const res = await c.loadMore(props.data, 'member', params);
        if (res) {
          if (items.value.length === 0) {
            items.value = res.data;
          } else {
            handleItems(res.data, c.userFilterMap.id);
          }
        }
      } catch {
        loading.value = false;
      }
      loading.value = false;
    };

    const loaddepartment = async (_tag: boolean = false) => {
      loading.value = true;
      const params: IData = {};
      params.page = c.deptpage;
      try {
        const res = await c.loadMore(props.data, 'department', params);
        if (res) {
          if (deptItems.value.length === 0) {
            deptItems.value = res.data;
          } else {
            deptItems.value.push(...res.data);
          }
        }
      } catch {
        loading.value = false;
      }
      loading.value = false;
    };

    //  加载团队
    const loadteam = async (tag: string) => {
      // if (searchValue.value) return;
      if (tag !== 'team') return;
      loading.value = true;
      const params: IData = {};
      try {
        const res = await c.loadMore(props.data, 'team', params);
        if (res) {
          teamItems.value = res?.data;
          teamItems.value.forEach(item => {
            const a = teamMenberItemsCheck.value.get(item.id);
            if (a === undefined) {
              const r = ref(false);
              teamMenberItemsCheck.value.set(item.id, r);
            }
          });
        }
      } catch {
        loading.value = false;
      }
      loading.value = false;
    };

    // 加载团队成员
    const loadTMember = async (e: Event, item: IData) => {
      // e.preventDefault();
      // e.stopPropagation();
      const params: IData = {};
      const resTeamMember = await c.loadTeamMember(props.data, item.id, params);
      const tMenberItems = teamMenberItems.value.get(item.id);
      if (!tMenberItems) {
        if (resTeamMember) {
          teamMenberItems.value.set(item.id, resTeamMember.data);
        }
      }
      dropdownRef.value.handleOpen();
    };

    // 将其他团队置为false
    const setTeamMenberItemsCheckFalse = (id: string) => {
      const keysArray = Array.from(teamMenberItemsCheck.value.keys());
      const filteredArray = keysArray.filter(item => item !== id);
      filteredArray.forEach(str => {
        const b = teamMenberItemsCheck.value.get(str);
        if (b) {
          b.value = false;
        }
      });
    };

    // 团队单选点击
    const tMemberCheckbox = async (e: Event, item: IData) => {
      e.preventDefault();
      e.stopPropagation();
      const checkValue = teamMenberItemsCheck.value.get(item.id)!;
      if (!checkValue.value) {
        // 将团队勾选
        await onACSelect(e, item, true);
        setTeamMenberItemsCheckFalse(item.id);
      } else {
        clearSelect(true);
      }
      dropDownItemVisible.value.team = false;
      dropDownItemVisible.value.department = false;
      dropDownItemVisible.value.member = false;
      dropdownRef.value.handleClose();
    };

    const changeSelectState = async (tag: 'department' | 'member' | 'team') => {
      // if (selectState.value === tag) return;
      selectState.value = tag;
      if (selectState.value === 'member' && items.value.length === 0) {
        c.resetUserState();
        await loadmember();
      }
      if (selectState.value === 'department' && deptItems.value.length === 0) {
        c.resetDeptState();
        await loaddepartment();
      }
      // if (searchValue.value === 'team') {
      await loadteam(tag);
      // }
    };

    // 更改伸缩状态
    const collpaseChange = (e: Event, tag: boolean) => {
      e.stopPropagation();
      collapseState.value = tag;
      dropdownRef.value.handleOpen();
    };

    // 绘制部门人员树
    const renderDeptPersonelTree = () => {
      return (
        <div
          class={ns.be('select-modal', 'deptpersonel')}
          onClick={() => {
            dropdownRef.value.handleOpen();
          }}
        >
          <div class={ns.bem('select-modal', 'deptpersonel', 'dept')}>
            <div class='collpase-icon'>
              {collapseState.value ? (
                <i
                  class='fa fa-angle-right'
                  aria-hidden='true'
                  onClick={e => collpaseChange(e, false)}
                ></i>
              ) : (
                <i
                  class='fa fa-angle-down'
                  aria-hidden='true'
                  onClick={e => collpaseChange(e, true)}
                ></i>
              )}
            </div>
            <img src={`${resource.dir('assets/images/svg/org.svg')}`}></img>
            <span>{`${c.context.srfusername}的团队`}</span>
            <span>·</span>
            <span>{c.depttotal}</span>
          </div>
          {!collapseState.value ? (
            <div class={ns.bem('select-modal', 'deptpersonel', 'dept-person')}>
              {renderPersonelSelect(deptItems.value)}
            </div>
          ) : null}
        </div>
      );
    };

    const remoteSearch = async (value: string | number) => {
      loading.value = true;
      romateData.value = [];
      romateTeamData.value = [];
      try {
        const params: IData = {};
        Object.assign(params, { query: value, size: 1000 });
        const res = await c.getServiceData('member', props.data, params);
        const teamRes = await c.getServiceData('team', props.data, params);
        if (res) {
          res.data.forEach((item: IData) => {
            Object.keys(c.userFilterMap).forEach((key: string) => {
              item[key] = item[c.userFilterMap[key]];
            });
          });
          romateData.value = res.data;
          loading.value = false;
        }
        if (teamRes) {
          romateTeamData.value = teamRes.data;
        }
      } catch {
        loading.value = false;
      }
      dropdownRef.value.handleOpen();
    };

    // 处理过滤搜索
    const handleSearch = (value: string | number) => {
      clearTimeout(timer.value);
      timer.value = setTimeout(() => {
        if (value) {
          remoteSearch(value);
        }
        clearTimeout(timer.value);
      }, 300);
    };

    // 渲染团队
    const renderTeam = () => {
      return (
        <el-collapse class={ns.e('collapse')}>
          {teamItems.value.length === 0 ? (
            <div class={ns.e('no-team')}>暂无团队</div>
          ) : (
            teamItems.value.map(item => {
              const tMItems = teamMenberItems.value.get(item.id);
              const check = teamMenberItemsCheck.value.get(item.id);
              return (
                <el-collapse-item
                  class={ns.e('collapse-item')}
                  name={item.id}
                  title={item.caption}
                  onClick={(e: Event) => loadTMember(e, item)}
                >
                  {{
                    default: () => {
                      return (
                        <div>
                          {tMItems && tMItems.length > 0 ? (
                            tMItems.map(it => {
                              return renderPersonItem(it, true);
                            })
                          ) : (
                            <div class={ns.e('noteamItem')}>暂无人员</div>
                          )}
                        </div>
                      );
                    },
                    title: () => {
                      return (
                        <div class={ns.e('collapse-item-checkbox-wrapper')}>
                          <el-checkbox
                            class={ns.e('collapse-item-checkbox')}
                            size='large'
                            v-model={check!.value}
                            onClick={(e: Event) => tMemberCheckbox(e, item)}
                          />
                          <img
                            src={`${resource.dir(
                              'assets/images/svg/user-group-avatar.svg',
                            )}`}
                            style={'margin-right:6px'}
                            alt=''
                          />
                          {item.name}
                          {tMItems && ' · '}
                          {tMItems && tMItems.length}
                        </div>
                      );
                    },
                  }}
                </el-collapse-item>
              );
            })
          )}
        </el-collapse>
      );
    };

    // 绘制不同悬浮内容
    const renderItemContent = (label: 'department' | 'member' | 'team') => {
      if (label === 'department') {
        return renderDeptPersonelTree();
      }
      if (label === 'member') {
        return renderPersonelSelect(items.value);
      }
      if (label === 'team') {
        return renderTeam();
      }
      return <div>{label}</div>;
    };

    const renderPersonnel = () => {
      if (!searchValue.value && selectedPersonnel.value) {
        if (selectedPersonnel.value.dataType === 'team') {
          return (
            <div class={ns.e('personnel-team')}>
              <div class={ns.e('personnel-team-svg')}>{teamMemberSvg()}</div>
              <div>{selectedPersonnel.value.name}</div>
            </div>
          );
        }
        return renderPersonItem(selectedPersonnel.value, false, false);
      }
      return null;
    };

    const visibleChange = (visible: any) => {
      if (dropdownRef.value && dropdownRef.value.$el) {
        width.value = dropdownRef.value.$el.clientWidth;
      }
      dropdownVisible.value = visible;
    };

    const dropdownClick = async () => {
      if (props.readonly || props.disabled) {
        return;
      }
      await changeSelectState('member');
      await changeSelectState('department');
      await changeSelectState('team');
      selectState.value = 'member';
    };

    const dropdownItemClick = (e: Event, item: IData) => {
      e.stopPropagation();
      selectState.value = item.label;
      dropDownItemVisible.value[item.label] =
        !dropDownItemVisible.value[item.label];
      const keyArr = ['member', 'department', 'team'].filter(
        ite => ite !== item.label,
      );
      keyArr.forEach(i => {
        dropDownItemVisible.value[i] = false;
      });
    };

    const pxx = ref();
    const dropdownMenu = ref();

    const calcId = (id: string) => {
      const teamIndex = teamItems.value.findIndex(item => item.id === id);
      if (teamIndex >= 0) {
        return 'team';
      }
      const memberIndex = items.value.findIndex(item => item.id === id);
      if (memberIndex >= 0) {
        return 'member';
      }
      return '';
    };

    watch(
      () => props.value,
      newVal => {
        if (newVal || newVal === null || newVal === undefined) {
          if (newVal) {
            const type = calcId(props.data[c.valueItem]);
            if (type === 'team') {
              selectedPersonnel.value = {
                dataType: 'team',
                name: newVal,
              };
            } else {
              selectedPersonnel.value = {
                name: newVal,
                [c.userFilterMap.id]: props.data[c.valueItem],
                [c.deptFilterMap.id]: props.data[c.valueItem],
              };
            }
          } else {
            selectedPersonnel.value = null;
          }
        }
      },
      { immediate: true },
    );

    const width: Ref<number> = ref(0);

    onMounted(() => {
      if (pxx.value) {
        funcs = useClickOutside(pxx as any, async e => {
          //  pxx.value.contains(e.target)   true 不关闭  false 关闭
          //  再判断 是否点击的是 ibiz-team-select__popover-item
          if (!pxx.value) {
            return;
          }
          if (!pxx.value.contains(e.target)) {
            let classNameArr = [];
            if (
              e.target &&
              (e.target as any).className &&
              typeof (e.target as any).className === 'string'
            ) {
              classNameArr = (e.target as any).className.split(' ');
            }
            const index = classNameArr.findIndex(
              it => it === 'ibiz-team-select__popover-item',
            );
            if (index === -1) {
              dropDownItemVisible.value.team = false;
              dropDownItemVisible.value.department = false;
              dropDownItemVisible.value.member = false;
            }
          }
        });
      }
      width.value = dropdownRef.value.$el.clientWidth;
    });

    nextTick(() => {
      width.value = dropdownRef.value.$el.clientWidth;
    });

    onUnmounted(() => {
      if (funcs && funcs.stop) {
        funcs.stop();
      }
    });

    const handleFocus = (_e: KeyboardEvent): void => {
      dropDownItemVisible.value.team = false;
      dropDownItemVisible.value.department = false;
      dropDownItemVisible.value.member = false;
    };

    // 只读态显示
    const readOnlyItem = () => {
      if (!props.value) {
        return '未设置';
      }
      const type = calcId(props.data[c.valueItem]);
      if (type === 'team') {
        return (
          <div class={ns.e('personnel-team')}>
            <div class={ns.e('personnel-team-svg')}>{teamMemberSvg()}</div>
            <div>{props.value}</div>
          </div>
        );
      }
      return (
        <div class={ns.bem('select-modal', 'personel-list', 'text')}>
          <div
            class={ns.bem('select-modal', 'personel-list', 'text-img')}
            style={`background-color:${stringToHexColor(
              props.value as string,
            )}`}
          >
            {renderUserAvatar(props.data[c.valueItem], props.value as string)}
          </div>
          <div class={ns.bem('select-modal', 'personel-list', 'text-label')}>
            {props.value}
          </div>
        </div>
      );
    };

    return {
      ns,
      c,
      curValue,
      items,
      dropDownItem,
      numberSvg,
      departmentSvg,
      teamSvg,
      renderItemSvg,
      rightArrowSvg,
      deleteSvg,
      renderItemContent,
      showFormDefaultContent,
      searchValue,
      handleSearch,
      romateData,
      renderPersonItem,
      selectedPersonnel,
      searchRef,
      visibleChange,
      dropdownRef,
      dropdownClick,
      popoverRef,
      teamMenberItems,
      renderPersonnel,
      renderTeamItem,
      dropDownItemVisible,
      dropdownItemClick,
      romateTeamData,
      dropdownVisible,
      pxx,
      dropdownMenu,
      handleFocus,
      clearSelect,
      readOnlyItem,
      width,
    };
  },
  render() {
    return (
      <div class={[this.ns.b()]}>
        {this.$props.readonly || this.$props.disabled ? (
          this.readOnlyItem()
        ) : (
          <el-dropdown
            class={[this.ns.e('dropdown')]}
            ref='dropdownRef'
            popper-class={this.ns.e('popover')}
            onVisibleChange={this.visibleChange}
            trigger='click'
            hide-on-click
          >
            {{
              default: () => (
                <div class={[this.ns.e('dropdown-input')]}>
                  <el-input
                    class={[
                      this.ns.e('search-input'),
                      this.searchValue || this.selectedPersonnel
                        ? 'hasValue'
                        : '',
                    ]}
                    ref='searchRef'
                    v-model={this.searchValue}
                    placeholder={this.selectedPersonnel ? '' : '选择评审人'}
                    onInput={(value: string | number) =>
                      this.handleSearch(value)
                    }
                    onFocus={this.handleFocus}
                  >
                    {{
                      suffix: () => {
                        return (
                          <div class={[this.ns.e('dropdown-input-suffix')]}>
                            <img
                              class={[
                                this.ns.e('search-arrow'),
                                this.dropdownVisible ? 'isopen' : '',
                              ]}
                              src={`${resource.dir(
                                'assets/images/svg/arrow.svg',
                              )}`}
                              alt=''
                            />
                            <div
                              class={[this.ns.e('search-delete')]}
                              onClick={(e: Event) => {
                                e.stopPropagation();
                                this.clearSelect();
                              }}
                            >
                              {this.deleteSvg()}
                            </div>
                          </div>
                        );
                      },
                      prefix: () => {
                        return (
                          <div
                            class={[
                              this.ns.e('dropdown-input-prefix'),
                              this.dropdownVisible ? 'dark' : '',
                            ]}
                          >
                            {this.renderPersonnel()}
                          </div>
                        );
                      },
                    }}
                  </el-input>
                </div>
              ),
              dropdown: () => {
                if (this.searchValue) {
                  return (
                    <el-dropdown-menu>
                      {this.romateData.length > 0 &&
                        this.dropDownItem.map(item => {
                          if (item.label === 'member') {
                            return (
                              <div
                                class={this.ns.e('popover-item')}
                                style={
                                  this.width
                                    ? `width:${this.width}px`
                                    : 'pointer-events: none;'
                                }
                              >
                                <div class={this.ns.e('popover-item-center')}>
                                  <div class={this.ns.e('popover-item-name')}>
                                    {item.name}
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        })}
                      {this.romateData.map(item => {
                        return (
                          <div class={this.ns.e('search-romate-item')}>
                            {this.renderPersonItem(item, false, false)}
                          </div>
                        );
                      })}
                      {this.romateTeamData.length > 0 &&
                        this.dropDownItem.map(item => {
                          if (item.label === 'team') {
                            return (
                              <div
                                class={this.ns.e('popover-item')}
                                style={
                                  this.width
                                    ? `width:${this.width}px`
                                    : 'pointer-events: none;'
                                }
                              >
                                <div class={this.ns.e('popover-item-center')}>
                                  <div class={this.ns.e('popover-item-name')}>
                                    {item.name}
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        })}
                      {this.romateTeamData.map(item => {
                        return (
                          <div class={this.ns.e('search-romate-item')}>
                            {this.renderTeamItem(item)}
                          </div>
                        );
                      })}
                    </el-dropdown-menu>
                  );
                }
                return (
                  <el-dropdown-menu>
                    {this.dropDownItem.map(item => {
                      return (
                        <el-popover
                          trigger='click'
                          placement='right'
                          width={'380'}
                          show-after={100}
                          popper-class={[
                            this.ns.e('popover-content'),
                            item.label,
                          ]}
                          ref='popoverRef'
                          popper-options={{
                            modifiers: [
                              {
                                name: 'offset',
                                options: { offset: [110, -10] },
                              }, // 设置偏移量
                              {
                                name: 'preventOverflow',
                                options: { padding: 5 },
                              }, // 防止溢出时的设置
                            ],
                          }}
                          visible={this.dropDownItemVisible[item.label]}
                          // onShow={(e: HTMLElement) => {
                          //   // 移入后对将当前项popover实例赋值
                          //   userInfoPopRef = tempInfoPopRef;
                          // }}
                        >
                          {{
                            reference: () => {
                              return (
                                <div
                                  class={this.ns.e('popover-item')}
                                  style={
                                    this.width ? `width:${this.width}px` : ''
                                  }
                                  onClick={(e: Event) =>
                                    this.dropdownItemClick(e, item)
                                  }
                                  ref='dropdownMenu'
                                >
                                  <div class={this.ns.e('popover-item-center')}>
                                    <div class={this.ns.e('popover-item-left')}>
                                      {this.renderItemSvg(item.label)}
                                    </div>
                                    <div class={this.ns.e('popover-item-name')}>
                                      {item.name}
                                    </div>
                                  </div>
                                  <div class={this.ns.e('popover-item-right')}>
                                    {this.rightArrowSvg()}
                                  </div>
                                </div>
                              );
                            },
                            default: () => {
                              return (
                                <div
                                  onClick={(_e: Event) => {
                                    this.dropdownRef.handleOpen();
                                  }}
                                  class={[
                                    this.ns.e('popover-item-content'),
                                    item.label,
                                  ]}
                                  ref='pxx'
                                >
                                  {this.renderItemContent(
                                    item.label as
                                      | 'department'
                                      | 'member'
                                      | 'team',
                                  )}
                                </div>
                              );
                            },
                          }}
                        </el-popover>
                      );
                    })}
                  </el-dropdown-menu>
                );
              },
            }}
          </el-dropdown>
        )}
      </div>
    );
  },
});
