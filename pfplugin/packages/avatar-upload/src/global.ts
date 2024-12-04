// 文件路径: [插件项目的根目录]/src/global.ts

import { PluginStaticResource } from '@ibiz-template/runtime';

const resource = new PluginStaticResource(import.meta.url);

export { resource };
