import { defineComponent, onBeforeUnmount, PropType, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useNamespace } from '@ibiz-template/vue3-util';
import { IPanelRawItem } from '@ibiz/model-core';
import { CustomUserInfoController } from './custom-user-info.controller';
import { Avatar } from './avatar/avatar';
import './custom-user-info.scss';

export const CustomUserInfo = defineComponent({
  name: 'CustomUserInfo',
  props: {
    modelData: {
      type: Object as PropType<IPanelRawItem>,
      required: true,
    },
    controller: {
      type: CustomUserInfoController,
      required: true,
    },
  },
  setup(prop) {
    const ns = useNamespace('custom-user-info');
    const c = prop.controller;
    const userInfo = ref({});

    const router = useRouter();
    c.setRouter(router);

    const onOpenUserInfoPopover = (): void => {
      c.openUserInfoPopover(userInfo.value as HTMLElement);
    };

    onBeforeUnmount(() => {
      c.onDestroyed();
    });

    return {
      c,
      ns,
      userInfo,
      onOpenUserInfoPopover,
    };
  },
  render() {
    return (
      <div
        ref='userInfo'
        class={[
          this.ns.b(),
          this.ns.m(this.modelData.id),
          ...this.c.containerClass,
          this.ns.is('left', this.c.menuAlign === 'LEFT'),
          this.ns.is('top', this.c.menuAlign === 'TOP'),
          this.ns.is('collapse', this.c.isCollapse),
        ]}
        onClick={this.onOpenUserInfoPopover}
      >
        <Avatar
          class={this.ns.e('avatar')}
          label={this.c.userInfo.srfusername}
          img={this.c.userInfo.avatar}
          readOnly={true}
        />
        {!this.c.isCollapse && (
          <div class={this.ns.e('info')}>
            <div class={this.ns.em('info', 'user-name')}>
              {this.c.userInfo.srfusername}
            </div>
            {this.c.menuAlign === 'LEFT' && (
              <div class={this.ns.em('info', 'description')}>
                {this.c.userInfo.srfpersonname}
              </div>
            )}
          </div>
        )}
      </div>
    );
  },
});
