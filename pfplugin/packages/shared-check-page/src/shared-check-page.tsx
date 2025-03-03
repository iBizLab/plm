import {
  PropType,
  defineComponent,
  h,
  onBeforeMount,
  ref,
  resolveComponent,
} from 'vue';
import { IAppView } from '@ibiz/model-core';
import { IModal, convertNavData } from '@ibiz-template/runtime';
import { useNamespace } from '@ibiz-template/vue3-util';
import { notNilEmpty } from 'qx-util';
import { resource } from './global';
import './shared-check-page.scss';

export const SharedCheckPage = defineComponent({
  name: 'SharedCheckPage',
  props: {
    context: { type: Object as PropType<IContext>, default: () => {} },
    params: { type: Object as PropType<IParams>, default: () => ({}) },
    modelData: { type: Object as PropType<IAppView>, required: true },
    modal: { type: Object as PropType<IModal> },
    state: { type: Object as PropType<IData> },
  },
  setup(props) {
    const ns = useNamespace('shared-check-page');
    const uiState = ref(''); // invalid: 链接无效, checkPwd: 验证密码, pass: 校验通过
    const loading = ref(false); // 加载状态
    const password = ref(''); // 密码
    const btnLoading = ref(false); // 密码验证加载
    const checkErrorMsg = ref('');
    const handleCustomParams = () => {
      let params: IData = {};
      const navParams = props.modelData.appViewNavParams;
      if (notNilEmpty(navParams)) {
        params = convertNavData(navParams!, props.params, props.context);
      }
      return params;
    };

    // 验证密码
    const verifyLinkPwd = async () => {
      if (!password.value.length) {
        checkErrorMsg.value = '密码不能为空';
        return;
      }
      btnLoading.value = true;
      const param = handleCustomParams();
      const url = `${param.check_entity}/${param.check_key}/check_access_password`;
      try {
        const res = await ibiz.net.post(url, {
          id: param.check_key,
          access_password: password.value,
        });
        btnLoading.value = false;
        if (res && res.ok && res.data) {
          if (res.data.check_access_password === '1') {
            uiState.value = 'pass';
          } else {
            checkErrorMsg.value = '密码错误';
          }
        }
      } catch {
        btnLoading.value = false;
      }
    };

    // 校验链接有效性
    const verifyLinkValidity = async () => {
      loading.value = true;
      const param = handleCustomParams();
      const url = `${param.check_entity}/${param.check_key}/check_shared`;
      try {
        const result = await ibiz.net.get(url);
        loading.value = false;
        if (result && result.ok && result.data) {
          const { effective, check_access_pwd } = result.data;
          if (effective === 0) {
            // 链接已失效
            uiState.value = 'invalid';
          } else if (effective === 1) {
            if (check_access_pwd === 0) {
              // 不需要校验密码
              uiState.value = 'pass';
            } else if (check_access_pwd === 1) {
              // 需要校验密码
              uiState.value = 'checkPwd';
            }
          }
        }
      } catch {
        loading.value = false;
      }
    };
    // 密码框值改变
    const onChange = () => {
      checkErrorMsg.value = '';
    };
    // 回车
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event && event.code === 'Enter') {
        verifyLinkPwd();
      }
    };
    onBeforeMount(async () => {
      verifyLinkValidity();
    });
    // 链接失效
    const renderInvalid = () => {
      return (
        <div class={ns.e('link-invalid')}>
          <div class={ns.e('link-container')}>
            <div class={ns.em('link-container', 'header')}>
              <img
                class={ns.em('pwd-container', 'header-logo')}
                src={`${resource.dir('assets/images/share.png')}`}
              />
              <span>Wiki</span>
            </div>
            <div class={ns.em('link-container', 'content')}>
              <img
                class={ns.em('link-container', 'unlink')}
                src={`${resource.dir('assets/images/unlink.png')}`}
              />
              <span class={ns.em('link-container', 'tip')}>
                页面共享链接已过期
              </span>
            </div>
          </div>
        </div>
      );
    };
    // 校验密码
    const renderVerifyPwd = () => {
      return (
        <div class={ns.e('verify-pwd')}>
          <div class={ns.e('pwd-container')}>
            <div class={ns.em('pwd-container', 'header')}>
              <img
                src={`${resource.dir('assets/images/share.png')}`}
                class={ns.em('pwd-container', 'header-logo')}
              />
              <span>Wiki</span>
            </div>
            <div class={ns.em('pwd-container', 'content')}>
              <p>访问密码</p>
              <el-input
                class={[
                  ns.em('pwd-container', 'input'),
                  ns.is('error', !!checkErrorMsg.value.length),
                ]}
                placeholder='请输入密码'
                v-model={password.value}
                onInput={onChange}
                onkeydown={handleKeyDown}
              ></el-input>
              <el-button
                loading={btnLoading.value}
                class={ns.em('pwd-container', 'submit')}
                onClick={verifyLinkPwd}
              >
                确定
              </el-button>
              <p
                class={[
                  ns.e('error-msg'),
                  ns.is('visible', !!checkErrorMsg.value.length),
                ]}
              >
                {checkErrorMsg.value}
              </p>
            </div>
          </div>
        </div>
      );
    };
    return { ns, uiState, loading, renderInvalid, renderVerifyPwd };
  },
  render() {
    let content;
    if (this.uiState === 'invalid') {
      content = this.renderInvalid();
    }
    if (this.uiState === 'checkPwd') {
      content = this.renderVerifyPwd();
    }
    if (this.uiState === 'pass') {
      content = h(
        resolveComponent('IBizView') as string,
        {
          context: this.$props.context,
          params: this.$props.params,
          modelData: this.modelData,
          modal: this.modal,
          ...this.$attrs,
        },
        this.$slots,
      );
    }
    return (
      <div class={this.ns.b()} v-loading={this.loading}>
        {content}
      </div>
    );
  },
});
