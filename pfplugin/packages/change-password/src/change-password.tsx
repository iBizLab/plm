/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { PropType, defineComponent, reactive, ref } from 'vue';
import { useNamespace } from '@ibiz-template/vue3-util';
import { IModal, IModalData } from '@ibiz-template/runtime';
import type { FormRules } from 'element-plus';
import './change-password.scss';

export const ChangePassword = defineComponent({
  name: 'ChangePassword',
  props: {
    modal: { type: Object as PropType<IModal> },
  },
  setup(props) {
    const ns = useNamespace('change-password');
    const formRef = ref();

    const form = reactive<IData>({
      oldPassword: '',
      newPassword: '',
      surePassword: '',
    });

    const rules = reactive<FormRules<IData>>({
      oldPassword: [
        { required: true, message: '旧密码不能为空', trigger: 'blur' },
      ],
      newPassword: [
        { required: true, message: '新密码不能为空', trigger: 'blur' },
      ],
      surePassword: [
        { required: true, message: '确认密码不能为空', trigger: 'blur' },
      ],
    });

    const onConfirm = async () => {
      if (!formRef.value) return;
      await formRef.value.validate();
      const { oldPassword, newPassword, surePassword } = form;
      if (oldPassword === newPassword) {
        ibiz.message.error('新密码不能与旧密码一致');
        return;
      }
      if (newPassword !== surePassword) {
        ibiz.message.error('两次密码不一致');
        return;
      }
      if (props.modal) {
        const modalData: IModalData = { ok: true, data: [form] };
        props.modal?.dismiss(modalData);
      }
    };

    return { ns, form, rules, formRef, onConfirm };
  },
  render() {
    return (
      <el-form
        ref='formRef'
        model={this.form}
        rules={this.rules}
        class={this.ns.b()}
      >
        <el-form-item
          class={this.ns.b('item')}
          label='旧密码'
          prop='oldPassword'
        >
          <el-input
            type='password'
            show-password
            class={this.ns.be('item', 'content')}
            v-model={this.form.oldPassword}
            placeholder='输入旧密码'
          />
        </el-form-item>
        <el-form-item
          class={this.ns.b('item')}
          label='新密码'
          prop='newPassword'
        >
          <el-input
            type='password'
            show-password
            class={this.ns.be('item', 'content')}
            v-model={this.form.newPassword}
            placeholder='输入新密码'
          />
        </el-form-item>
        <el-form-item
          class={this.ns.b('item')}
          label='确认新密码'
          prop='surePassword'
        >
          <el-input
            type='password'
            show-password
            class={this.ns.be('item', 'content')}
            v-model={this.form.surePassword}
            placeholder='再次输入新密码'
          />
        </el-form-item>
        <div class={this.ns.b('footer')}>
          <el-button size='large' round onClick={this.onConfirm}>
            确认
          </el-button>
        </div>
      </el-form>
    );
  },
});
