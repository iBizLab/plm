/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Ref, ref, watch, onMounted, defineComponent } from 'vue';
import {
  getDataPickerProps,
  getEditorEmits,
  useNamespace,
} from '@ibiz-template/vue3-util';
import { createUUID } from 'qx-util';
import { TeamPickerController } from './team-picker.controller';
import './team-picker.scss';
import { renderTextPhoto, stringToHexColor } from './team-picker.util';

export const TeamPicker = defineComponent({
  name: 'TeamPicker',
  props: getDataPickerProps<TeamPickerController>(),
  emits: getEditorEmits(),
  setup(props, { emit }) {
    const ns = useNamespace('team-picker');

    const c = props.controller!;

    // 当前值
    const curValue: Ref<string | null> = ref('');

    // 实体数据集
    const items: Ref<IData[]> = ref([]);

    const visible = ref(false); // 弹出框显示

    const uuid = createUUID(); // 输入框id

    const searchValue = ref<string>(''); // 弹出层搜索框值

    const inputWrapper = ref();

    // 选择值改变
    const onChange = () => {
      // 当前选中值
      const tempItem = items.value.find((item: IData) => {
        return item.id === curValue.value;
      });
      // 判断当前选中值的类型：组织，团队，个人,组织和个人都是自定义加的，所以有type,默认的团队没有
      // 获取配置的fillMap，{organization:代码表组织,user_group:代码表团队,user:代码表个人}
      // 当前项抛出对应的代码表值，当前项的值项抛出选中的那个值
      if (tempItem) {
        const curtype = c.fillMap[tempItem.type];
        emit('change', curtype);
        if (c.valueItem) {
          emit('change', tempItem.id, c.valueItem);
        }
      }
    };

    // 选中项
    const onSelect = (item: IData) => {
      curValue.value = item.id;
      visible.value = false;
      onChange();
    };

    // 绘制文字头像
    const renderTextAvatar = (item: IData) => {
      if (item.avatar) {
        const avatar = JSON.parse(item.avatar);
        const urls = ibiz.util.file.calcFileUpDownUrl(c.context, c.params);
        const avatarUrl = urls.downloadUrl.replace('%fileId%', avatar[0].id);
        return (
          <img class={ns.em('item', 'img-avatar')} src={avatarUrl} alt='' />
        );
      }
      const text = item.name;
      return (
        <div
          class={ns.em('item', 'text-avatar')}
          style={`background-color:${stringToHexColor(text)}`}
        >
          {renderTextPhoto(text)}
        </div>
      );
    };

    // 绘制组织
    const renderOrg = (item: IData) => {
      return (
        <div class={ns.e('item')}>
          <svg
            class={ns.em('item', 'org-icon')}
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            height='1em'
            width='1em'
            preserveAspectRatio='xMidYMid meet'
            focusable='false'
            fill='currentColor'
          >
            <g id='aqm画板' stroke-width='1' fill-rule='evenodd'>
              <path
                d='M11.838 0c6.538 0 11.838 5.373 11.838 12s-5.3 12-11.838 12C5.3 24 0 18.627 0 12S5.3 0 11.838 0zM13 4h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1l.41-.001-.016 2.139H8.5l-.15.006a2.1 2.1 0 0 0-1.95 2.094V14H6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-.4v-1.762l.007-.113a.9.9 0 0 1 .893-.787h7l.113.007a.9.9 0 0 1 .787.893V14H16a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-.4v-1.762l-.005-.15a2.1 2.1 0 0 0-2.095-1.95h-2.906l.016-2.139L13 8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm4.8 11.2v1.6h-1.6v-1.6h1.6zm-10 0v1.6H6.2v-1.6h1.6zm5-10v1.6h-1.6V5.2h1.6z'
                id='aqm形状结合'
              ></path>
            </g>
          </svg>
          <div class={ns.em('item', 'content')}>
            <span class={ns.em('item', 'type')}>组织</span>
            <span class={ns.em('item', 'type-divide')}>/</span>
            <span class={ns.em('item', 'orgname')} title={item.name}>
              {item.name}
            </span>
          </div>
        </div>
      );
    };

    // 绘制个人
    const renderPerson = (item: IData) => {
      return (
        <div class={ns.e('item')}>
          <div class={ns.em('item', 'text-icon')}>{renderTextAvatar(item)}</div>
          <div class={ns.em('item', 'content')}>
            <span class={ns.em('item', 'type')}>个人</span>
            <span class={ns.em('item', 'type-divide')}>/</span>
            <span class={ns.em('item', 'personname')} title={item.name}>
              {item.name}
            </span>
          </div>
        </div>
      );
    };

    // 绘制团队
    const renderTeam = (item: IData) => {
      return (
        <div class={ns.e('item')}>
          {item.avatar ? (
            <div class={ns.em('item', 'text-icon')}>
              {renderTextAvatar(item)}
            </div>
          ) : (
            <svg
              class={ns.em('item', 'team-icon')}
              viewBox='0 0 16 16'
              version='1.1'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
              preserveAspectRatio='xMidYMid meet'
              focusable='false'
              fill='currentColor'
            >
              <title>normal/user-group-avatar@1x</title>
              <g id='团队' stroke-width='1' fill-rule='evenodd'>
                <path
                  d='M8,0 C12.418278,-8.11624501e-16 16,3.581722 16,8 C16,12.418278 12.418278,16 8,16 C3.581722,16 5.41083001e-16,12.418278 0,8 C-5.41083001e-16,3.581722 3.581722,8.11624501e-16 8,0 Z M6.94814892,4.5 C5.8297723,4.5 4.92314892,5.40662338 4.92314892,6.525 C4.92314892,7.17754041 5.23179842,7.75799186 5.71074948,8.1273513 C4.58627683,8.60821226 3.79861678,9.72458136 3.80000182,11.025 C3.80000182,11.2113961 3.95110572,11.3625 4.13750182,11.3625 L4.20551985,11.3556432 C4.3593129,11.3241726 4.47500182,11.1880966 4.47500182,11.025 L4.473,11.01 L4.47841342,10.8622681 C4.55871908,9.62501422 5.54816314,8.63557016 6.78541699,8.5552645 L6.942,8.549 L6.96130368,8.55003422 C8.32215601,8.55711636 9.42316527,9.66248284 9.42824334,11.025 C9.42824334,11.2113961 9.57934724,11.3625 9.76574334,11.3625 C9.95213944,11.3625 10.1032433,11.2113961 10.1032433,11.025 L10.0963865,10.956982 L10.0931624,10.8462507 C10.0247081,9.62255373 9.25778371,8.58538265 8.18522666,8.12832813 C8.66449942,7.75799186 8.97314892,7.17754041 8.97314892,6.525 C8.97314892,5.40662338 8.06652554,4.5 6.94814892,4.5 Z M9.47939892,5.0625 L9.47939892,5.7375 C10.0696532,5.7375 10.5481489,6.21599567 10.5481489,6.80625 C10.5481489,7.39650433 10.0696532,7.875 9.47939892,7.875 L9.47939892,8.55 C10.5880137,8.55 11.5045613,9.37233726 11.651361,10.4406322 L11.6509718,10.4569843 C11.6509718,10.6433804 11.8020757,10.7944843 11.9884718,10.7944843 C12.1728418,10.7944843 12.3226827,10.6466474 12.3344785,10.4618968 C12.2317937,9.40890588 11.5598087,8.52274877 10.6305547,8.11605224 C10.9938747,7.79648694 11.2231489,7.3281434 11.2231489,6.80625 C11.2231489,5.84320347 10.4424455,5.0625 9.47939892,5.0625 Z M6.94814892,5.175 C7.69373333,5.175 8.29814892,5.77941559 8.29814892,6.525 C8.29814892,7.26653599 7.7002793,7.86843205 6.96028162,7.87494661 L6.943,7.875 L6.81813491,7.86882008 C6.13354819,7.80340381 5.59814892,7.22672651 5.59814892,6.525 C5.59814892,5.77941559 6.20256451,5.175 6.94814892,5.175 Z'
                  id='normal/user-group-circle-fill'
                ></path>
              </g>
            </svg>
          )}
          <div class={ns.em('item', 'content')}>
            <span class={ns.em('item', 'type')}>团队</span>
            <span class={ns.em('item', 'type-divide')}>/</span>
            <span class={ns.em('item', 'personname')} title={item.name}>
              {item.name}
            </span>
          </div>
        </div>
      );
    };

    // 绘制所属项
    const renderItem = (item: IData) => {
      if (item.type === 'organization') {
        return renderOrg(item);
      }
      if (item.type === 'user') {
        return renderPerson(item);
      }
      return renderTeam(item);
    };

    // 监听props.value
    watch(
      () => props.value,
      () => {
        // 同步获取对应的值项作为选中项
        if (c.valueItem) {
          const tempvalue = props.data[c.valueItem];
          curValue.value = tempvalue;
        }
      },
      {
        immediate: true,
      },
    );

    // 加载数据,团队数据默认加类型；type:user_group
    const load = async () => {
      let reader: string | null = null;
      if (props.readonly || props.disabled) {
        reader = 'fetch_reader';
      }
      const result = await c.getServiceData('', props.data, reader);
      if (result && result.data) {
        items.value = result.data.map((item: IData) => {
          return {
            ...item,
            type: 'user_group',
          };
        });
      }
    };

    // 绘制只读态,无边框，只有头像，所属类型以及所属名称
    // 先判断当前的值是属于哪一类的
    const renderReadOnlyState = () => {
      if (!props.value || !props.data[c.valueItem]) return null;
      const tempItem: IData = {};
      Object.keys(c.fillMap).some((key: string) => {
        if (c.fillMap[key] === props.value) {
          tempItem.type = key;
          return true;
        }
      });
      if (tempItem.type === 'user') {
        const select = c.operatorMap.get(props.data[c.valueItem]);
        if (select) {
          Object.assign(tempItem, select, {
            name: select.text,
            avatar: select.data.iconurl,
          });
        }
      } else {
        const select = items.value.find((item: IData) => {
          return item.id === props.data[c.valueItem];
        });
        if (select) {
          Object.assign(tempItem, select);
        }
      }
      return (
        <div class={ns.em('item', 'readonly')}>{renderItem(tempItem)}</div>
      );
    };

    // 打开底部弹窗
    const openPop = () => {
      searchValue.value = '';
      visible.value = true;
    };

    // 关闭弹窗
    const closePop = () => {
      visible.value = false;
    };

    // 绘制选中项
    const renderSelectItem = () => {
      if (!curValue.value) {
        return;
      }
      const tempItem = items.value.find((item: IData) => {
        return item.id === curValue.value;
      });
      if (tempItem) {
        return renderItem(tempItem);
      }
    };

    // 绘制选择框
    const renderSelect = () => {
      return (
        <div class={ns.e('select')}>
          <div
            id={uuid}
            class={[ns.em('select', 'input'), ns.is('focus', visible.value)]}
            ref={inputWrapper}
            onClick={openPop}
          >
            <div class={ns.em('select', 'input-content')}>
              {renderSelectItem()}
            </div>
            <div class={ns.em('select', 'input-icon')}>
              <van-icon name='arrow' />
            </div>
          </div>

          <van-popup
            v-model:show={visible.value}
            style={{ height: '80%' }}
            round
            close-icon-position='top-left'
            position='bottom'
          >
            <div class={ns.b('picker-pop')}>
              <div class={ns.be('picker-pop', 'header')}>
                <van-icon name='cross' onClick={closePop} />
                <span>选择</span>
              </div>
              <div class={ns.be('picker-pop', 'search')}>
                <van-field v-model={searchValue.value} placeholder='搜索'>
                  {{
                    'left-icon': () => {
                      return <ion-icon name='search-outline'></ion-icon>;
                    },
                  }}
                </van-field>
              </div>
              <div class={ns.be('picker-pop', 'list')}>
                {items.value.map((item: IData) => {
                  if (item.name.indexOf(searchValue.value) >= 0) {
                    return (
                      <div
                        class={ns.bem('picker-pop', 'list', 'item')}
                        onClick={() => onSelect(item)}
                      >
                        {renderItem(item)}
                        {curValue.value === item.id && (
                          <ion-icon
                            class={ns.bem('picker-pop', 'list', 'selected')}
                            name='checkmark-outline'
                          ></ion-icon>
                        )}
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </van-popup>
        </div>
      );
    };

    // 生命周期，加载数据
    onMounted(async () => {
      await load();
      // 判断是否添加组织,只读态都显示当前组织
      if (c.hasORG_M || props.readonly || props.disabled) {
        items.value.unshift({
          type: 'organization',
          id: c.context.srforgid,
          name: c.context.srforgname,
        });
      }

      // 判断是否添加个人,只读态不添加当前人，将去操作列表里获取人员数据
      if (c.showPerson && !props.readonly && !props.disabled) {
        items.value.push({
          type: 'user',
          id: c.context.srfpersonid,
          name: c.context.srfpersonname,
          avatar: c.context.avatar,
        });
      }

      // 当前项无值，不是只读态,不是禁用，并且items有值时
      // 看是否有视图参数srfdefaulttype=organization|user_group|user，
      // 有就根据视图参数抛出对应类型的第一个，否则就默认抛出所有数据中的第一个
      if (
        !props.value &&
        !props.readonly &&
        !props.disabled &&
        items.value &&
        items.value.length > 0
      ) {
        if (c.params && c.params.srfdefaulttype) {
          const tempItems = items.value.filter((item: IData) => {
            return item.type === c.params.srfdefaulttype;
          });
          if (tempItems.length > 0) {
            curValue.value = tempItems[0].id;
          } else {
            curValue.value = items.value[0].id;
          }
        } else {
          curValue.value = items.value[0].id;
        }
        onChange();
      }
    });

    return {
      c,
      ns,
      renderSelect,
      renderReadOnlyState,
    };
  },
  render() {
    return (
      <div
        class={[
          this.ns.b(),
          this.readonly || this.disabled ? this.ns.m('readonly') : '',
        ]}
      >
        {this.readonly || this.disabled
          ? this.renderReadOnlyState()
          : this.renderSelect()}
      </div>
    );
  },
});
