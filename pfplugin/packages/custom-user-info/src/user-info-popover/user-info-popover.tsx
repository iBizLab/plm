import { PropType, defineComponent, resolveComponent, h } from 'vue';
import { useNamespace } from '@ibiz-template/vue3-util';
import { IModal } from '@ibiz-template/runtime';
import { CustomUserInfoController } from '../custom-user-info.controller';
import { Avatar } from '../avatar/avatar';
import './user-info-popover.scss';

export const UserInfoPopover = defineComponent({
  name: 'UserInfoPopover',
  props: {
    controller: {
      type: Object as PropType<CustomUserInfoController>,
      required: true,
    },
    context: { type: Object as PropType<IContext>, required: true },
    params: { type: Object as PropType<IParams>, default: () => ({}) },
    viewId: { type: String },
    modal: { type: Object as PropType<IModal> },
  },
  setup(props) {
    const ns = useNamespace('user-info-popover');
    const c = props.controller;

    const renderDefault = (): JSX.Element[] => {
      return [
        <div class={ns.e('header')}>
          <img src='./assets/images/login-header.png' />
        </div>,
        <div class={ns.e('content')}>
          <div class={ns.em('content', 'avatar-container')}>
            <Avatar
              class={ns.em('content', 'avatar')}
              label={c.userInfo.srfusername}
              img={c.userInfo.avatar}
            ></Avatar>
          </div>
          <div class={ns.em('content', 'info')}>
            <div class='user-name'>{c.userInfo.srfusername}</div>
            <div class='description'>{c.userInfo.srfpersonname}</div>
          </div>
        </div>,
        <el-divider
          class={ns.e('divider')}
          content-position='center'
        ></el-divider>,
        <div class={ns.e('footer')}>
          <el-button
            class={ns.e('log-out')}
            onClick={() => c.onLogOut()}
            text={true}
          >
            <iBizIcon
              class={ns.em('log-out', 'icon')}
              icon={{ cssClass: 'fa fa-sign-out' }}
            />
            <span class={ns.em('log-out', 'text')}>退出登录</span>
          </el-button>
        </div>,
      ];
    };

    const renderContent = (): JSX.Element | JSX.Element[] | null => {
      if (props.viewId) {
        return h(resolveComponent('IBizViewShell'), {
          context: props.context,
          params: props.params,
          viewId: props.viewId,
          modal: props.modal,
        });
      }
      return renderDefault();
    };

    return { ns, renderContent };
  },
  render() {
    return <div class={[this.ns.b()]}>{this.renderContent()}</div>;
  },
});
