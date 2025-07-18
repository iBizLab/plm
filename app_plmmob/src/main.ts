/* eslint-disable @typescript-eslint/no-explicit-any */
import { runApp } from '@ibiz-template/mob-vue3-components';
import VueTextFormat from 'vue-text-format';
import UserRegister from './user-register';

runApp([VueTextFormat as any, UserRegister]);
