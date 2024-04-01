import { useNamespace } from '@ibiz-template/vue3-util';
import { computed, defineComponent, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import './403-view.scss';

export const View403 = defineComponent({
  name: 'IBizView403',
  setup() {
    const ns = useNamespace('403-view');
    const router = useRouter();
    const route = useRoute();
    const gotoIndexView = async (): Promise<void> => {
      await router.push('/');
      window.location.reload();
    };

    onMounted(() => ibiz.util.hiddenAppLoading());

    const isTop = computed(() => {
      return route && !route.params.view1;
    });

    return { ns, isTop, gotoIndexView };
  },
  render() {
    return (
      <div class={[this.ns.b(), this.ns.is('top', this.isTop)]}>
        <img class={this.ns.b('img')} src='./assets/images/404.png' />
        <div class={this.ns.b('text')}>
          <div class={this.ns.be('text', 'text1')}>
            抱歉，您没有访问该页面的权限
          </div>
        </div>
      </div>
    );
  },
});
