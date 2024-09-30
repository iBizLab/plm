import { App } from 'vue';
import { registerEditorProvider } from '@ibiz-template/runtime';
import { withInstall } from '@ibiz-template/vue3-util';
import { JsonSchemaProvider } from './json-schema.provider';
import { JsonSchema } from './json-schema';

export const IBizJsonSchema = withInstall(JsonSchema, function (v: App) {
  v.component(JsonSchema.name, JsonSchema);
  registerEditorProvider('TEXTBOX_JSONSCHEMA', () => new JsonSchemaProvider());
});

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(app: App) {
    app.use(IBizJsonSchema);
  },
};
