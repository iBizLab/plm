import './style.css';
var Q = Object.defineProperty;
var J = (n, t, o) => t in n ? Q(n, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[t] = o;
var c = (n, t, o) => (J(n, typeof t != "symbol" ? t + "" : t, o), o);
import { useNamespace as M, getDataPickerProps as Y, getEditorEmits as Z, renderString as ee, withInstall as ne } from "@ibiz-template/vue3-util";
import { EditorController as se, getDeACMode as ae, getAcItemProvider as oe, OpenAppViewCommand as H, registerEditorProvider as te } from "@ibiz-template/runtime";
import { RuntimeModelError as O } from "@ibiz-template/core";
import { mergeDeepLeft as le, isNil as ie } from "ramda";
import { createVNode as i, defineComponent as L, computed as S, ref as u, watch as j, withDirectives as we, vModelText as re, onMounted as $, onUnmounted as ce, resolveComponent as V, mergeProps as pe, isVNode as me } from "vue";
class ue extends se {
  constructor() {
    super(...arguments);
    /**
     * 是否多选
     */
    c(this, "multiple", !1);
    /**
     *选择视图相关参数
     */
    c(this, "pickupView", null);
    /**
     *链接视图相关参数
     */
    c(this, "linkView", null);
    /**
     *值项
     */
    c(this, "valueItem", "");
    /**
     * 主键属性名称
     */
    c(this, "keyName", "srfkey");
    /**
     * 主文本属性名称
     */
    c(this, "textName", "srfmajortext");
    /**
     * 数据集codeName
     */
    c(this, "interfaceName", "");
    /**
     * 自填模式sort排序
     */
    c(this, "sort", "");
    /**
     * 不支持AC（根据编辑器类型得）
     */
    c(this, "noAC", !1);
    /**
     * 不支持按钮（根据编辑器类型得）
     */
    c(this, "noButton", !1);
    /**
     * 实体自填模式模型
     */
    c(this, "deACMode");
    /**
     * 自填数据项集合（已排除了value和text)
     */
    c(this, "dataItems", []);
    // 对象标识属性
    c(this, "objectIdField", "");
    // 对象名称属性
    c(this, "objectNameField", "");
    // 对象值属性
    c(this, "objectValueField", "");
    /**
     * 自填列表项适配器
     *
     * @author zhanghengfeng
     * @date 2024-05-21 17:05:50
     * @type {IAcItemProvider}
     */
    c(this, "acItemProvider");
  }
  async onInit() {
    var a, l, p, r;
    if (super.onInit(), this.initParams(), this.valueItem = ((a = this.model.valueItemName) == null ? void 0 : a.toLowerCase()) || "", this.model.appDataEntityId && (this.model.appDEDataSetId && (this.interfaceName = this.model.appDEDataSetId), this.model.appDEACModeId && (this.deACMode = await ae(
      this.model.appDEACModeId,
      this.model.appDataEntityId,
      this.context.srfappid
    ), this.deACMode))) {
      const { minorSortAppDEFieldId: d, minorSortDir: h } = this.deACMode;
      d && h && (this.sort = "".concat(d.toLowerCase(), ",").concat(h.toLowerCase())), this.deACMode.textAppDEFieldId && (this.textName = this.deACMode.textAppDEFieldId), this.deACMode.valueAppDEFieldId && (this.keyName = this.deACMode.valueAppDEFieldId), this.deACMode.deacmodeDataItems && (this.dataItems = [], this.deACMode.deacmodeDataItems.forEach(
        (f) => {
          f.id !== "value" && f.id !== "text" && this.dataItems.push(f);
        }
      )), this.deACMode.itemSysPFPluginId && (this.acItemProvider = await oe(this.deACMode));
    }
    const o = [
      "PICKEREX_DROPDOWNVIEW",
      "PICKEREX_DROPDOWNVIEW_LINK",
      "PICKUPVIEW"
    ];
    this.model.editorType && o.includes(this.model.editorType) && this.initPickupViewParams(), this.objectIdField = (l = this.model.objectIdField) == null ? void 0 : l.toLowerCase(), this.objectNameField = (p = this.model.objectNameField) == null ? void 0 : p.toLowerCase(), this.objectValueField = (r = this.model.objectValueField) == null ? void 0 : r.toLowerCase();
  }
  /**
   * 初始化noAc和noButton
   */
  initParams() {
    switch (this.model.editorType) {
      case "PICKEREX_NOAC":
      case "PICKEREX_NOAC_LINK":
        this.noAC = !0;
        break;
      case "PICKEREX_NOBUTTON":
        this.noButton = !0;
        break;
      default:
        this.noButton = !1, this.noAC = !1;
    }
  }
  /**
   * 初始化选择视图相关参数
   */
  async initPickupViewParams() {
    this.model.pickupAppViewId && (this.pickupView = await ibiz.hub.config.view.get(
      this.model.pickupAppViewId
    ));
  }
  /**
   * 初始化链接视图相关参数
   */
  async initLinkViewParams() {
    this.model.linkAppViewId && (this.linkView = await ibiz.hub.config.view.get(this.model.linkAppViewId));
  }
  /**
   * 加载实体数据集数据
   *
   * @param {string} query 模糊匹配字符串
   * @param {IData} data 表单数据
   * @returns {*}  {Promise<IHttpResponse<IData[]>>}
   * @memberof EmojiInputEditorController
   */
  async getServiceData(o, a) {
    const { context: l, params: p } = this.handlePublicParams(
      a,
      this.context,
      this.params
    ), r = {};
    this.sort && !Object.is(this.sort, "") && Object.assign(r, { sort: this.sort }), o && Object.assign(r, { query: o }), Object.assign(r, { size: 1e3 });
    const d = le(p, r);
    if (this.interfaceName)
      return await ibiz.hub.getApp(this.context.srfappid).deService.exec(
        this.model.appDataEntityId,
        this.interfaceName,
        l,
        d
      );
    throw new O(
      this.model,
      ibiz.i18n.t("editor.common.entityConfigErr")
    );
  }
  /**
   * 打开数据选择视图
   *
   * @param {IData} data 数据对象
   * @param {IData[]} selectedData 选中项集合
   * @returns {*}  {(Promise<IData[] | undefined>)}
   * @memberof EmojiInputEditorController
   */
  async openPickUpView(o, a) {
    await this.initPickupViewParams();
    const { context: l, params: p } = this.handlePublicParams(
      o,
      this.context,
      this.params
    );
    if (a && (p.selecteddata = a), !this.pickupView)
      throw new O(
        this.model,
        ibiz.i18n.t("editor.common.selectViewConfigErr")
      );
    const r = await ibiz.commands.execute(
      H.TAG,
      this.pickupView.id,
      l,
      p,
      { openMode: "POPUPMODAL" }
    );
    if (r && r.ok && r.data)
      return r.data;
    ibiz.log.debug("模态取消或关闭异常", r);
  }
  /**
   * 打开数据链接视图
   */
  async openLinkView(o) {
    const a = this.context.clone();
    o[this.valueItem] && (a.srfkey = o[this.valueItem]);
    const { context: l, params: p } = this.handlePublicParams(
      o,
      a,
      this.params
    ), { linkAppViewId: r } = this.model;
    if (!r)
      throw new O(
        this.model,
        ibiz.i18n.t("editor.common.linkViewConfigErr")
      );
    return ibiz.commands.execute(
      H.TAG,
      r,
      l,
      p
    );
  }
  /**
   * 计算回填数据
   *
   * @author lxm
   * @date 2022-10-24 16:10:24
   * @param {IData} data 选中数据
   * @returns {*}  {Promise<Array<{ id: string; value: any }>>}
   */
  async calcFillDataItems(o) {
    return this.deACMode ? this.dataItems.length === 0 ? [] : await Promise.all(
      this.dataItems.map((l) => {
        const p = o[l.appDEFieldId];
        return l.format || l.convertToCodeItemText && l.codeListId || l.customCode, { id: l.id, value: p };
      })
    ) : [];
  }
  /**
   * 处理对象数据类型抛值
   * @param {IData} select
   * @return {*}
   * @author: zhujiamin
   * @Date: 2023-08-22 15:58:56
   */
  handleObjectParams(o) {
    const a = {};
    return this.objectIdField && Object.assign(a, {
      [this.objectIdField]: o[this.keyName]
    }), this.objectNameField && Object.assign(a, {
      [this.objectNameField]: o[this.textName]
    }), this.objectValueField && Object.assign(a, {
      [this.objectValueField]: {
        ...o
      }
    }), o.srfnodeid && Object.assign(a, {
      srfnodeid: o.srfnodeid
    }), a;
  }
}
class _e {
  constructor() {
    c(this, "formEditor", "IBizEmojiInput");
    c(this, "gridEditor", "IBizEmojiInput");
  }
  async createController(t, o) {
    const a = new ue(t, o);
    return await a.init(), a;
  }
}
class x {
  constructor(t, o, a) {
    c(this, "name");
    c(this, "icon");
    c(this, "text");
    this.name = t, this.icon = o, this.text = a;
  }
  get label() {
    return this.name;
  }
}
class e {
  constructor(t, o, a) {
    c(this, "data");
    c(this, "category");
    c(this, "aliases");
    this.data = t, this.category = o, this.aliases = a;
  }
}
const be = [
  new e("😀", "peoples", ["grinning"]),
  new e("😃", "peoples", ["smiley"]),
  new e("😄", "peoples", ["smile"]),
  new e("😁", "peoples", ["grin"]),
  new e("😆", "peoples", ["laughing", "satisfied"]),
  new e("😅", "peoples", ["sweat_smile"]),
  new e("😂", "peoples", ["joy"]),
  new e("🤣", "peoples", ["rofl"]),
  new e("😌", "peoples", ["relaxed"]),
  new e("😊", "peoples", ["blush"]),
  new e("😇", "peoples", ["innocent"]),
  new e("🙂", "peoples", ["slightly_smiling_face"]),
  new e("🙃", "peoples", ["upside_down_face"]),
  new e("😉", "peoples", ["wink"]),
  new e("😌", "peoples", ["relieved"]),
  new e("😍", "peoples", ["heart_eyes"]),
  new e("😘", "peoples", ["kissing_heart"]),
  new e("😗", "peoples", ["kissing"]),
  new e("😙", "peoples", ["kissing_smiling_eyes"]),
  new e("😚", "peoples", ["kissing_closed_eyes"]),
  new e("😋", "peoples", ["yum"]),
  new e("😜", "peoples", ["stuck_out_tongue_winking_eye"]),
  new e("😝", "peoples", ["stuck_out_tongue_closed_eyes"]),
  new e("😛", "peoples", ["stuck_out_tongue"]),
  new e("🤑", "peoples", ["money_mouth_face"]),
  new e("🤗", "peoples", ["hugs"]),
  new e("🤓", "peoples", ["nerd_face"]),
  new e("😎", "peoples", ["sunglasses"]),
  new e("🤡", "peoples", ["clown_face"]),
  new e("🤠", "peoples", ["cowboy_hat_face"]),
  new e("😏", "peoples", ["smirk"]),
  new e("😒", "peoples", ["unamused"]),
  new e("😞", "peoples", ["disappointed"]),
  new e("😔", "peoples", ["pensive"]),
  new e("😟", "peoples", ["worried"]),
  new e("😕", "peoples", ["confused"]),
  new e("🙁", "peoples", ["slightly_frowning_face"]),
  new e("☹️", "peoples", ["frowning_face"]),
  new e("😣", "peoples", ["persevere"]),
  new e("😖", "peoples", ["confounded"]),
  new e("😫", "peoples", ["tired_face"]),
  new e("😩", "peoples", ["weary"]),
  new e("😤", "peoples", ["triumph"]),
  new e("😠", "peoples", ["angry"]),
  new e("😡", "peoples", ["rage", "pout"]),
  new e("😶", "peoples", ["no_mouth"]),
  new e("😐", "peoples", ["neutral_face"]),
  new e("😑", "peoples", ["expressionless"]),
  new e("😯", "peoples", ["hushed"]),
  new e("😦", "peoples", ["frowning"]),
  new e("😧", "peoples", ["anguished"]),
  new e("😮", "peoples", ["open_mouth"]),
  new e("😲", "peoples", ["astonished"]),
  new e("😵", "peoples", ["dizzy_face"]),
  new e("😳", "peoples", ["flushed"]),
  new e("😱", "peoples", ["scream"]),
  new e("😨", "peoples", ["fearful"]),
  new e("😰", "peoples", ["cold_sweat"]),
  new e("😢", "peoples", ["cry"]),
  new e("😥", "peoples", ["disappointed_relieved"]),
  new e("🤤", "peoples", ["drooling_face"]),
  new e("😭", "peoples", ["sob"]),
  new e("😓", "peoples", ["sweat"]),
  new e("😪", "peoples", ["sleepy"]),
  new e("😴", "peoples", ["sleeping"]),
  new e("🙄", "peoples", ["roll_eyes"]),
  new e("🤔", "peoples", ["thinking"]),
  new e("🤥", "peoples", ["lying_face"]),
  new e("😬", "peoples", ["grimacing"]),
  new e("🤐", "peoples", ["zipper_mouth_face"]),
  new e("🤢", "peoples", ["nauseated_face"]),
  new e("🤧", "peoples", ["sneezing_face"]),
  new e("😷", "peoples", ["mask"]),
  new e("🤒", "peoples", ["face_with_thermometer"]),
  new e("🤕", "peoples", ["face_with_head_bandage"]),
  new e("😈", "peoples", ["smiling_imp"]),
  new e("👿", "peoples", ["imp"]),
  new e("👹", "peoples", ["japanese_ogre"]),
  new e("👺", "peoples", ["japanese_goblin"]),
  new e("💩", "peoples", ["hankey", "poop", "shit"]),
  new e("👻", "peoples", ["ghost"]),
  new e("💀", "peoples", ["skull"]),
  new e("☠️", "peoples", ["skull_and_crossbones"]),
  new e("👽", "peoples", ["alien"]),
  new e("👾", "peoples", ["space_invader"]),
  new e("🤖", "peoples", ["robot"]),
  new e("🎃", "peoples", ["jack_o_lantern"]),
  new e("😺", "peoples", ["smiley_cat"]),
  new e("😸", "peoples", ["smile_cat"]),
  new e("😹", "peoples", ["joy_cat"]),
  new e("😻", "peoples", ["heart_eyes_cat"]),
  new e("😼", "peoples", ["smirk_cat"]),
  new e("😽", "peoples", ["kissing_cat"]),
  new e("🙀", "peoples", ["scream_cat"]),
  new e("😿", "peoples", ["crying_cat_face"]),
  new e("😾", "peoples", ["pouting_cat"]),
  new e("👐", "peoples", ["open_hands"]),
  new e("🙌", "peoples", ["raised_hands"]),
  new e("👏", "peoples", ["clap"]),
  new e("🙏", "peoples", ["pray"]),
  new e("🤝", "peoples", ["handshake"]),
  new e("👍", "peoples", ["+1", "thumbsup"]),
  new e("👎", "peoples", ["-1", "thumbsdown"]),
  new e("👊", "peoples", ["fist_oncoming", "facepunch", "punch"]),
  new e("✊", "peoples", ["fist_raised", "fist"]),
  new e("🤛", "peoples", ["fist_left"]),
  new e("🤜", "peoples", ["fist_right"]),
  new e("🤞", "peoples", ["crossed_fingers"]),
  new e("✌️", "peoples", ["v"]),
  new e("🤘", "peoples", ["metal"]),
  new e("👌", "peoples", ["ok_hand"]),
  new e("👈", "peoples", ["point_left"]),
  new e("👉", "peoples", ["point_right"]),
  new e("👆", "peoples", ["point_up_2"]),
  new e("👇", "peoples", ["point_down"]),
  new e("☝️", "peoples", ["point_up"]),
  new e("✋", "peoples", ["hand", "raised_hand"]),
  new e("🤚", "peoples", ["raised_back_of_hand"]),
  new e("🖐", "peoples", ["raised_hand_with_fingers_splayed"]),
  new e("🖖", "peoples", ["vulcan_salute"]),
  new e("👋", "peoples", ["wave"]),
  new e("🤙", "peoples", ["call_me_hand"]),
  new e("💪", "peoples", ["muscle"]),
  new e("🖕", "peoples", ["middle_finger", "fu"]),
  new e("✍️", "peoples", ["writing_hand"]),
  new e("🤳", "peoples", ["selfie"]),
  new e("💅", "peoples", ["nail_care"]),
  new e("💍", "peoples", ["ring"]),
  new e("💄", "peoples", ["lipstick"]),
  new e("💋", "peoples", ["kiss"]),
  new e("👄", "peoples", ["lips"]),
  new e("👅", "peoples", ["tongue"]),
  new e("👂", "peoples", ["ear"]),
  new e("👃", "peoples", ["nose"]),
  new e("👣", "peoples", ["footprints"]),
  new e("👁", "peoples", ["eye"]),
  new e("👀", "peoples", ["eyes"]),
  new e("🗣", "peoples", ["speaking_head"]),
  new e("👤", "peoples", ["bust_in_silhouette"]),
  new e("👥", "peoples", ["busts_in_silhouette"]),
  new e("👶", "peoples", ["baby"]),
  new e("👦", "peoples", ["boy"]),
  new e("👧", "peoples", ["girl"]),
  new e("👨", "peoples", ["man"]),
  new e("👩", "peoples", ["woman"]),
  new e("👱‍♀", "peoples", ["blonde_woman"]),
  new e("👱", "peoples", ["blonde_man", "person_with_blond_hair"]),
  new e("👴", "peoples", ["older_man"]),
  new e("👵", "peoples", ["older_woman"]),
  new e("👲", "peoples", ["man_with_gua_pi_mao"]),
  new e("👳‍♀", "peoples", ["woman_with_turban"]),
  new e("👳", "peoples", ["man_with_turban"]),
  new e("👮‍♀", "peoples", ["policewoman"]),
  new e("👮", "peoples", ["policeman", "cop"]),
  new e("👷‍♀", "peoples", ["construction_worker_woman"]),
  new e("👷", "peoples", [
    "construction_worker_man",
    "construction_worker"
  ]),
  new e("💂‍♀", "peoples", ["guardswoman"]),
  new e("💂", "peoples", ["guardsman"]),
  new e("👩‍⚕", "peoples", ["woman_health_worker"]),
  new e("👨‍⚕", "peoples", ["man_health_worker"]),
  new e("👩‍🌾", "peoples", ["woman_farmer"]),
  new e("👨‍🌾", "peoples", ["man_farmer"]),
  new e("👩‍🍳", "peoples", ["woman_cook"]),
  new e("👨‍🍳", "peoples", ["man_cook"]),
  new e("👩‍🎓", "peoples", ["woman_student"]),
  new e("👨‍🎓", "peoples", ["man_student"]),
  new e("👩‍🎤", "peoples", ["woman_singer"]),
  new e("👨‍🎤", "peoples", ["man_singer"]),
  new e("👩‍🏫", "peoples", ["woman_teacher"]),
  new e("👨‍🏫", "peoples", ["man_teacher"]),
  new e("👩‍🏭", "peoples", ["woman_factory_worker"]),
  new e("👨‍🏭", "peoples", ["man_factory_worker"]),
  new e("👩‍💻", "peoples", ["woman_technologist"]),
  new e("👨‍💻", "peoples", ["man_technologist"]),
  new e("👩‍💼", "peoples", ["woman_office_worker"]),
  new e("👨‍💼", "peoples", ["man_office_worker"]),
  new e("👩‍🔧", "peoples", ["woman_mechanic"]),
  new e("👨‍🔧", "peoples", ["man_mechanic"]),
  new e("👩‍🔬", "peoples", ["woman_scientist"]),
  new e("👨‍🔬", "peoples", ["man_scientist"]),
  new e("👩‍🎨", "peoples", ["woman_artist"]),
  new e("👨‍🎨", "peoples", ["man_artist"]),
  new e("👩‍🚒", "peoples", ["woman_firefighter"]),
  new e("👨‍🚒", "peoples", ["man_firefighter"]),
  new e("👩‍🚀", "peoples", ["woman_astronaut"]),
  new e("👨‍🚀", "peoples", ["man_astronaut"]),
  new e("🤶", "peoples", ["mrs_claus"]),
  new e("🎅", "peoples", ["santa"]),
  new e("👸", "peoples", ["princess"]),
  new e("🤴", "peoples", ["prince"]),
  new e("👰", "peoples", ["bride_with_veil"]),
  new e("🤵", "peoples", ["man_in_tuxedo"]),
  new e("👼", "peoples", ["angel"]),
  new e("🤰", "peoples", ["pregnant_woman"]),
  new e("🙇‍♀", "peoples", ["bowing_woman"]),
  new e("🙇", "peoples", ["bowing_man", "bow"]),
  new e("💁", "peoples", [
    "tipping_hand_woman",
    "information_desk_person",
    "sassy_woman"
  ]),
  new e("💁‍♂", "peoples", ["tipping_hand_man", "sassy_man"]),
  new e("🙅", "peoples", ["no_good_woman", "no_good", "ng_woman"]),
  new e("🙅‍♂", "peoples", ["no_good_man", "ng_man"]),
  new e("🙆", "peoples", ["ok_woman"]),
  new e("🙆‍♂", "peoples", ["ok_man"]),
  new e("🙋", "peoples", ["raising_hand_woman", "raising_hand"]),
  new e("🙋‍♂", "peoples", ["raising_hand_man"]),
  new e("🤦‍♀", "peoples", ["woman_facepalming"]),
  new e("🤦‍♂", "peoples", ["man_facepalming"]),
  new e("🤷‍♀", "peoples", ["woman_shrugging"]),
  new e("🤷‍♂", "peoples", ["man_shrugging"]),
  new e("🙎", "peoples", ["pouting_woman", "person_with_pouting_face"]),
  new e("🙎‍♂", "peoples", ["pouting_man"]),
  new e("🙍", "peoples", ["frowning_woman", "person_frowning"]),
  new e("🙍‍♂", "peoples", ["frowning_man"]),
  new e("💇", "peoples", ["haircut_woman", "haircut"]),
  new e("💇‍♂", "peoples", ["haircut_man"]),
  new e("💆", "peoples", ["massage_woman", "massage"]),
  new e("💆‍♂", "peoples", ["massage_man"]),
  new e("🕴", "peoples", ["business_suit_levitating"]),
  new e("💃", "peoples", ["dancer"]),
  new e("🕺", "peoples", ["man_dancing"]),
  new e("👯", "peoples", ["dancing_women", "dancers"]),
  new e("👯‍♂", "peoples", ["dancing_men"]),
  new e("🚶‍♀", "peoples", ["walking_woman"]),
  new e("🚶", "peoples", ["walking_man", "walking"]),
  new e("🏃‍♀", "peoples", ["running_woman"]),
  new e("🏃", "peoples", ["running_man", "runner", "running"]),
  new e("👫", "peoples", ["couple"]),
  new e("👭", "peoples", ["two_women_holding_hands"]),
  new e("👬", "peoples", ["two_men_holding_hands"]),
  new e("💑", "peoples", [
    "couple_with_heart_woman_man",
    "couple_with_heart"
  ]),
  new e("👩‍❤️‍👩", "peoples", ["couple_with_heart_woman_woman"]),
  new e("👨‍❤️‍👨", "peoples", ["couple_with_heart_man_man"]),
  new e("💏", "peoples", ["couplekiss_man_woman"]),
  new e("👩‍❤️‍💋‍👩", "peoples", ["couplekiss_woman_woman"]),
  new e("👨‍❤️‍💋‍👨", "peoples", ["couplekiss_man_man"]),
  new e("👪", "peoples", ["family_man_woman_boy", "family"]),
  new e("👨‍👩‍👧", "peoples", ["family_man_woman_girl"]),
  new e("👨‍👩‍👧‍👦", "peoples", ["family_man_woman_girl_boy"]),
  new e("👨‍👩‍👦‍👦", "peoples", ["family_man_woman_boy_boy"]),
  new e("👨‍👩‍👧‍👧", "peoples", ["family_man_woman_girl_girl"]),
  new e("👩‍👩‍👦", "peoples", ["family_woman_woman_boy"]),
  new e("👩‍👩‍👧", "peoples", ["family_woman_woman_girl"]),
  new e("👩‍👩‍👧‍👦", "peoples", ["family_woman_woman_girl_boy"]),
  new e("👩‍👩‍👦‍👦", "peoples", ["family_woman_woman_boy_boy"]),
  new e("👩‍👩‍👧‍👧", "peoples", ["family_woman_woman_girl_girl"]),
  new e("👨‍👨‍👦", "peoples", ["family_man_man_boy"]),
  new e("👨‍👨‍👧", "peoples", ["family_man_man_girl"]),
  new e("👨‍👨‍👧‍👦", "peoples", ["family_man_man_girl_boy"]),
  new e("👨‍👨‍👦‍👦", "peoples", ["family_man_man_boy_boy"]),
  new e("👨‍👨‍👧‍👧", "peoples", ["family_man_man_girl_girl"]),
  new e("👩‍👦", "peoples", ["family_woman_boy"]),
  new e("👩‍👧", "peoples", ["family_woman_girl"]),
  new e("👩‍👧‍👦", "peoples", ["family_woman_girl_boy"]),
  new e("👩‍👦‍👦", "peoples", ["family_woman_boy_boy"]),
  new e("👩‍👧‍👧", "peoples", ["family_woman_girl_girl"]),
  new e("👨‍👦", "peoples", ["family_man_boy"]),
  new e("👨‍👧", "peoples", ["family_man_girl"]),
  new e("👨‍👧‍👦", "peoples", ["family_man_girl_boy"]),
  new e("👨‍👦‍👦", "peoples", ["family_man_boy_boy"]),
  new e("👨‍👧‍👧", "peoples", ["family_man_girl_girl"]),
  new e("👚", "peoples", ["womans_clothes"]),
  new e("👕", "peoples", ["shirt", "tshirt"]),
  new e("👖", "peoples", ["jeans"]),
  new e("👔", "peoples", ["necktie"]),
  new e("👗", "peoples", ["dress"]),
  new e("👙", "peoples", ["bikini"]),
  new e("👘", "peoples", ["kimono"]),
  new e("👠", "peoples", ["high_heel"]),
  new e("👡", "peoples", ["sandal"]),
  new e("👢", "peoples", ["boot"]),
  new e("👞", "peoples", ["mans_shoe", "shoe"]),
  new e("👟", "peoples", ["athletic_shoe"]),
  new e("👒", "peoples", ["womans_hat"]),
  new e("🎩", "peoples", ["tophat"]),
  new e("🎓", "peoples", ["mortar_board"]),
  new e("👑", "peoples", ["crown"]),
  new e("⛑", "peoples", ["rescue_worker_helmet"]),
  new e("🎒", "peoples", ["school_satchel"]),
  new e("👝", "peoples", ["pouch"]),
  new e("👛", "peoples", ["purse"]),
  new e("👜", "peoples", ["handbag"]),
  new e("💼", "peoples", ["briefcase"]),
  new e("👓", "peoples", ["eyeglasses"]),
  new e("🕶", "peoples", ["dark_sunglasses"]),
  new e("🌂", "peoples", ["closed_umbrella"]),
  new e("☂️", "peoples", ["open_umbrella"]),
  new e("🐶", "nature", ["dog"]),
  new e("🐱", "nature", ["cat"]),
  new e("🐭", "nature", ["mouse"]),
  new e("🐹", "nature", ["hamster"]),
  new e("🐰", "nature", ["rabbit"]),
  new e("🦊", "nature", ["fox_face"]),
  new e("🐻", "nature", ["bear"]),
  new e("🐼", "nature", ["panda_face"]),
  new e("🐨", "nature", ["koala"]),
  new e("🐯", "nature", ["tiger"]),
  new e("🦁", "nature", ["lion"]),
  new e("🐮", "nature", ["cow"]),
  new e("🐷", "nature", ["pig"]),
  new e("🐽", "nature", ["pig_nose"]),
  new e("🐸", "nature", ["frog"]),
  new e("🐵", "nature", ["monkey_face"]),
  new e("🙈", "nature", ["see_no_evil"]),
  new e("🙉", "nature", ["hear_no_evil"]),
  new e("🙊", "nature", ["speak_no_evil"]),
  new e("🐒", "nature", ["monkey"]),
  new e("🐔", "nature", ["chicken"]),
  new e("🐧", "nature", ["penguin"]),
  new e("🐦", "nature", ["bird"]),
  new e("🐤", "nature", ["baby_chick"]),
  new e("🐣", "nature", ["hatching_chick"]),
  new e("🐥", "nature", ["hatched_chick"]),
  new e("🦆", "nature", ["duck"]),
  new e("🦅", "nature", ["eagle"]),
  new e("🦉", "nature", ["owl"]),
  new e("🦇", "nature", ["bat"]),
  new e("🐺", "nature", ["wolf"]),
  new e("🐗", "nature", ["boar"]),
  new e("🐴", "nature", ["horse"]),
  new e("🦄", "nature", ["unicorn"]),
  new e("🐝", "nature", ["bee", "honeybee"]),
  new e("🐛", "nature", ["bug"]),
  new e("🦋", "nature", ["butterfly"]),
  new e("🐌", "nature", ["snail"]),
  new e("🐚", "nature", ["shell"]),
  new e("🐞", "nature", ["beetle"]),
  new e("🐜", "nature", ["ant"]),
  new e("🕷", "nature", ["spider"]),
  new e("🕸", "nature", ["spider_web"]),
  new e("🐢", "nature", ["turtle"]),
  new e("🐍", "nature", ["snake"]),
  new e("🦎", "nature", ["lizard"]),
  new e("🦂", "nature", ["scorpion"]),
  new e("🦀", "nature", ["crab"]),
  new e("🦑", "nature", ["squid"]),
  new e("🐙", "nature", ["octopus"]),
  new e("🦐", "nature", ["shrimp"]),
  new e("🐠", "nature", ["tropical_fish"]),
  new e("🐟", "nature", ["fish"]),
  new e("🐡", "nature", ["blowfish"]),
  new e("🐬", "nature", ["dolphin", "flipper"]),
  new e("🦈", "nature", ["shark"]),
  new e("🐳", "nature", ["whale"]),
  new e("🐋", "nature", ["whale2"]),
  new e("🐊", "nature", ["crocodile"]),
  new e("🐆", "nature", ["leopard"]),
  new e("🐅", "nature", ["tiger2"]),
  new e("🐃", "nature", ["water_buffalo"]),
  new e("🐂", "nature", ["ox"]),
  new e("🐄", "nature", ["cow2"]),
  new e("🦌", "nature", ["deer"]),
  new e("🐪", "nature", ["dromedary_camel"]),
  new e("🐫", "nature", ["camel"]),
  new e("🐘", "nature", ["elephant"]),
  new e("🦏", "nature", ["rhinoceros"]),
  new e("🦍", "nature", ["gorilla"]),
  new e("🐎", "nature", ["racehorse"]),
  new e("🐖", "nature", ["pig2"]),
  new e("🐐", "nature", ["goat"]),
  new e("🐏", "nature", ["ram"]),
  new e("🐑", "nature", ["sheep"]),
  new e("🐕", "nature", ["dog2"]),
  new e("🐩", "nature", ["poodle"]),
  new e("🐈", "nature", ["cat2"]),
  new e("🐓", "nature", ["rooster"]),
  new e("🦃", "nature", ["turkey"]),
  new e("🕊", "nature", ["dove"]),
  new e("🐇", "nature", ["rabbit2"]),
  new e("🐁", "nature", ["mouse2"]),
  new e("🐀", "nature", ["rat"]),
  new e("🐿", "nature", ["chipmunk"]),
  new e("🐾", "nature", ["feet", "paw_prints"]),
  new e("🐉", "nature", ["dragon"]),
  new e("🐲", "nature", ["dragon_face"]),
  new e("🌵", "nature", ["cactus"]),
  new e("🎄", "nature", ["christmas_tree"]),
  new e("🌲", "nature", ["evergreen_tree"]),
  new e("🌳", "nature", ["deciduous_tree"]),
  new e("🌴", "nature", ["palm_tree"]),
  new e("🌱", "nature", ["seedling"]),
  new e("🌿", "nature", ["herb"]),
  new e("☘️", "nature", ["shamrock"]),
  new e("🍀", "nature", ["four_leaf_clover"]),
  new e("🎍", "nature", ["bamboo"]),
  new e("🎋", "nature", ["tanabata_tree"]),
  new e("🍃", "nature", ["leaves"]),
  new e("🍂", "nature", ["fallen_leaf"]),
  new e("🍁", "nature", ["maple_leaf"]),
  new e("🍄", "nature", ["mushroom"]),
  new e("🌾", "nature", ["ear_of_rice"]),
  new e("💐", "nature", ["bouquet"]),
  new e("🌷", "nature", ["tulip"]),
  new e("🌹", "nature", ["rose"]),
  new e("🥀", "nature", ["wilted_flower"]),
  new e("🌻", "nature", ["sunflower"]),
  new e("🌼", "nature", ["blossom"]),
  new e("🌸", "nature", ["cherry_blossom"]),
  new e("🌺", "nature", ["hibiscus"]),
  new e("🌎", "nature", ["earth_americas"]),
  new e("🌍", "nature", ["earth_africa"]),
  new e("🌏", "nature", ["earth_asia"]),
  new e("🌕", "nature", ["full_moon"]),
  new e("🌖", "nature", ["waning_gibbous_moon"]),
  new e("🌗", "nature", ["last_quarter_moon"]),
  new e("🌘", "nature", ["waning_crescent_moon"]),
  new e("🌑", "nature", ["new_moon"]),
  new e("🌒", "nature", ["waxing_crescent_moon"]),
  new e("🌓", "nature", ["first_quarter_moon"]),
  new e("🌔", "nature", ["moon", "waxing_gibbous_moon"]),
  new e("🌚", "nature", ["new_moon_with_face"]),
  new e("🌝", "nature", ["full_moon_with_face"]),
  new e("🌞", "nature", ["sun_with_face"]),
  new e("🌛", "nature", ["first_quarter_moon_with_face"]),
  new e("🌜", "nature", ["last_quarter_moon_with_face"]),
  new e("🌙", "nature", ["crescent_moon"]),
  new e("💫", "nature", ["dizzy"]),
  new e("⭐️", "nature", ["star"]),
  new e("🌟", "nature", ["star2"]),
  new e("✨", "nature", ["sparkles"]),
  new e("⚡️", "nature", ["zap"]),
  new e("🔥", "nature", ["fire"]),
  new e("💥", "nature", ["boom", "collision"]),
  new e("☄", "nature", ["comet"]),
  new e("☀️", "nature", ["sunny"]),
  new e("🌤", "nature", ["sun_behind_small_cloud"]),
  new e("⛅️", "nature", ["partly_sunny"]),
  new e("🌥", "nature", ["sun_behind_large_cloud"]),
  new e("🌦", "nature", ["sun_behind_rain_cloud"]),
  new e("🌈", "nature", ["rainbow"]),
  new e("☁️", "nature", ["cloud"]),
  new e("🌧", "nature", ["cloud_with_rain"]),
  new e("⛈", "nature", ["cloud_with_lightning_and_rain"]),
  new e("🌩", "nature", ["cloud_with_lightning"]),
  new e("🌨", "nature", ["cloud_with_snow"]),
  new e("☃️", "nature", ["snowman_with_snow"]),
  new e("⛄️", "nature", ["snowman"]),
  new e("❄️", "nature", ["snowflake"]),
  new e("🌬", "nature", ["wind_face"]),
  new e("💨", "nature", ["dash"]),
  new e("🌪", "nature", ["tornado"]),
  new e("🌫", "nature", ["fog"]),
  new e("🌊", "nature", ["ocean"]),
  new e("💧", "nature", ["droplet"]),
  new e("💦", "nature", ["sweat_drops"]),
  new e("☔️", "nature", ["umbrella"]),
  new e("🍏", "foods", ["green_apple"]),
  new e("🍎", "foods", ["apple"]),
  new e("🍐", "foods", ["pear"]),
  new e("🍊", "foods", ["tangerine", "orange", "mandarin"]),
  new e("🍋", "foods", ["lemon"]),
  new e("🍌", "foods", ["banana"]),
  new e("🍉", "foods", ["watermelon"]),
  new e("🍇", "foods", ["grapes"]),
  new e("🍓", "foods", ["strawberry"]),
  new e("🍈", "foods", ["melon"]),
  new e("🍒", "foods", ["cherries"]),
  new e("🍑", "foods", ["peach"]),
  new e("🍍", "foods", ["pineapple"]),
  new e("🥝", "foods", ["kiwi_fruit"]),
  new e("🥑", "foods", ["avocado"]),
  new e("🍅", "foods", ["tomato"]),
  new e("🍆", "foods", ["eggplant"]),
  new e("🥒", "foods", ["cucumber"]),
  new e("🥕", "foods", ["carrot"]),
  new e("🌽", "foods", ["corn"]),
  new e("🌶", "foods", ["hot_pepper"]),
  new e("🥔", "foods", ["potato"]),
  new e("🍠", "foods", ["sweet_potato"]),
  new e("🌰", "foods", ["chestnut"]),
  new e("🥜", "foods", ["peanuts"]),
  new e("🍯", "foods", ["honey_pot"]),
  new e("🥐", "foods", ["croissant"]),
  new e("🍞", "foods", ["bread"]),
  new e("🥖", "foods", ["baguette_bread"]),
  new e("🧀", "foods", ["cheese"]),
  new e("🥚", "foods", ["egg"]),
  new e("🍳", "foods", ["fried_egg"]),
  new e("🥓", "foods", ["bacon"]),
  new e("🥞", "foods", ["pancakes"]),
  new e("🍤", "foods", ["fried_shrimp"]),
  new e("🍗", "foods", ["poultry_leg"]),
  new e("🍖", "foods", ["meat_on_bone"]),
  new e("🍕", "foods", ["pizza"]),
  new e("🌭", "foods", ["hotdog"]),
  new e("🍔", "foods", ["hamburger"]),
  new e("🍟", "foods", ["fries"]),
  new e("🥙", "foods", ["stuffed_flatbread"]),
  new e("🌮", "foods", ["taco"]),
  new e("🌯", "foods", ["burrito"]),
  new e("🥗", "foods", ["green_salad"]),
  new e("🥘", "foods", ["shallow_pan_of_food"]),
  new e("🍝", "foods", ["spaghetti"]),
  new e("🍜", "foods", ["ramen"]),
  new e("🍲", "foods", ["stew"]),
  new e("🍥", "foods", ["fish_cake"]),
  new e("🍣", "foods", ["sushi"]),
  new e("🍱", "foods", ["bento"]),
  new e("🍛", "foods", ["curry"]),
  new e("🍚", "foods", ["rice"]),
  new e("🍙", "foods", ["rice_ball"]),
  new e("🍘", "foods", ["rice_cracker"]),
  new e("🍢", "foods", ["oden"]),
  new e("🍡", "foods", ["dango"]),
  new e("🍧", "foods", ["shaved_ice"]),
  new e("🍨", "foods", ["ice_cream"]),
  new e("🍦", "foods", ["icecream"]),
  new e("🍰", "foods", ["cake"]),
  new e("🎂", "foods", ["birthday"]),
  new e("🍮", "foods", ["custard"]),
  new e("🍭", "foods", ["lollipop"]),
  new e("🍬", "foods", ["candy"]),
  new e("🍫", "foods", ["chocolate_bar"]),
  new e("🍿", "foods", ["popcorn"]),
  new e("🍩", "foods", ["doughnut"]),
  new e("🍪", "foods", ["cookie"]),
  new e("🥛", "foods", ["milk_glass"]),
  new e("🍼", "foods", ["baby_bottle"]),
  new e("☕️", "foods", ["coffee"]),
  new e("🍵", "foods", ["tea"]),
  new e("🍶", "foods", ["sake"]),
  new e("🍺", "foods", ["beer"]),
  new e("🍻", "foods", ["beers"]),
  new e("🥂", "foods", ["clinking_glasses"]),
  new e("🍷", "foods", ["wine_glass"]),
  new e("🥃", "foods", ["tumbler_glass"]),
  new e("🍸", "foods", ["cocktail"]),
  new e("🍹", "foods", ["tropical_drink"]),
  new e("🍾", "foods", ["champagne"]),
  new e("🥄", "foods", ["spoon"]),
  new e("🍴", "foods", ["fork_and_knife"]),
  new e("🍽", "foods", ["plate_with_cutlery"]),
  new e("⚽️", "activity", ["soccer"]),
  new e("🏀", "activity", ["basketball"]),
  new e("🏈", "activity", ["football"]),
  new e("⚾️", "activity", ["baseball"]),
  new e("🎾", "activity", ["tennis"]),
  new e("🏐", "activity", ["volleyball"]),
  new e("🏉", "activity", ["rugby_football"]),
  new e("🎱", "activity", ["8ball"]),
  new e("🏓", "activity", ["ping_pong"]),
  new e("🏸", "activity", ["badminton"]),
  new e("🥅", "activity", ["goal_net"]),
  new e("🏒", "activity", ["ice_hockey"]),
  new e("🏑", "activity", ["field_hockey"]),
  new e("🏏", "activity", ["cricket"]),
  new e("⛳️", "activity", ["golf"]),
  new e("🏹", "activity", ["bow_and_arrow"]),
  new e("🎣", "activity", ["fishing_pole_and_fish"]),
  new e("🥊", "activity", ["boxing_glove"]),
  new e("🥋", "activity", ["martial_arts_uniform"]),
  new e("⛸", "activity", ["ice_skate"]),
  new e("🎿", "activity", ["ski"]),
  new e("⛷", "activity", ["skier"]),
  new e("🏂", "activity", ["snowboarder"]),
  new e("🏋️‍♀️", "activity", ["weight_lifting_woman"]),
  new e("🏋", "activity", ["weight_lifting_man"]),
  new e("🤺", "activity", ["person_fencing"]),
  new e("🤼‍♀", "activity", ["women_wrestling"]),
  new e("🤼‍♂", "activity", ["men_wrestling"]),
  new e("🤸‍♀", "activity", ["woman_cartwheeling"]),
  new e("🤸‍♂", "activity", ["man_cartwheeling"]),
  new e("⛹️‍♀️", "activity", ["basketball_woman"]),
  new e("⛹", "activity", ["basketball_man"]),
  new e("🤾‍♀", "activity", ["woman_playing_handball"]),
  new e("🤾‍♂", "activity", ["man_playing_handball"]),
  new e("🏌️‍♀️", "activity", ["golfing_woman"]),
  new e("🏌", "activity", ["golfing_man"]),
  new e("🏄‍♀", "activity", ["surfing_woman"]),
  new e("🏄", "activity", ["surfing_man", "surfer"]),
  new e("🏊‍♀", "activity", ["swimming_woman"]),
  new e("🏊", "activity", ["swimming_man", "swimmer"]),
  new e("🤽‍♀", "activity", ["woman_playing_water_polo"]),
  new e("🤽‍♂", "activity", ["man_playing_water_polo"]),
  new e("🚣‍♀", "activity", ["rowing_woman"]),
  new e("🚣", "activity", ["rowing_man", "rowboat"]),
  new e("🏇", "activity", ["horse_racing"]),
  new e("🚴‍♀", "activity", ["biking_woman"]),
  new e("🚴", "activity", ["biking_man", "bicyclist"]),
  new e("🚵‍♀", "activity", ["mountain_biking_woman"]),
  new e("🚵", "activity", ["mountain_biking_man", "mountain_bicyclist"]),
  new e("🎽", "activity", ["running_shirt_with_sash"]),
  new e("🏅", "activity", ["medal_sports"]),
  new e("🎖", "activity", ["medal_military"]),
  new e("🥇", "activity", ["1st_place_medal"]),
  new e("🥈", "activity", ["2nd_place_medal"]),
  new e("🥉", "activity", ["3rd_place_medal"]),
  new e("🏆", "activity", ["trophy"]),
  new e("🏵", "activity", ["rosette"]),
  new e("🎗", "activity", ["reminder_ribbon"]),
  new e("🎫", "activity", ["ticket"]),
  new e("🎟", "activity", ["tickets"]),
  new e("🎪", "activity", ["circus_tent"]),
  new e("🤹‍♀", "activity", ["woman_juggling"]),
  new e("🤹‍♂", "activity", ["man_juggling"]),
  new e("🎭", "activity", ["performing_arts"]),
  new e("🎨", "activity", ["art"]),
  new e("🎬", "activity", ["clapper"]),
  new e("🎤", "activity", ["microphone"]),
  new e("🎧", "activity", ["headphones"]),
  new e("🎼", "activity", ["musical_score"]),
  new e("🎹", "activity", ["musical_keyboard"]),
  new e("🥁", "activity", ["drum"]),
  new e("🎷", "activity", ["saxophone"]),
  new e("🎺", "activity", ["trumpet"]),
  new e("🎸", "activity", ["guitar"]),
  new e("🎻", "activity", ["violin"]),
  new e("🎲", "activity", ["game_die"]),
  new e("🎯", "activity", ["dart"]),
  new e("🎳", "activity", ["bowling"]),
  new e("🎮", "activity", ["video_game"]),
  new e("🎰", "activity", ["slot_machine"]),
  new e("🚗", "places", ["car", "red_car"]),
  new e("🚕", "places", ["taxi"]),
  new e("🚙", "places", ["blue_car"]),
  new e("🚌", "places", ["bus"]),
  new e("🚎", "places", ["trolleybus"]),
  new e("🏎", "places", ["racing_car"]),
  new e("🚓", "places", ["police_car"]),
  new e("🚑", "places", ["ambulance"]),
  new e("🚒", "places", ["fire_engine"]),
  new e("🚐", "places", ["minibus"]),
  new e("🚚", "places", ["truck"]),
  new e("🚛", "places", ["articulated_lorry"]),
  new e("🚜", "places", ["tractor"]),
  new e("🛴", "places", ["kick_scooter"]),
  new e("🚲", "places", ["bike"]),
  new e("🛵", "places", ["motor_scooter"]),
  new e("🏍", "places", ["motorcycle"]),
  new e("🚨", "places", ["rotating_light"]),
  new e("🚔", "places", ["oncoming_police_car"]),
  new e("🚍", "places", ["oncoming_bus"]),
  new e("🚘", "places", ["oncoming_automobile"]),
  new e("🚖", "places", ["oncoming_taxi"]),
  new e("🚡", "places", ["aerial_tramway"]),
  new e("🚠", "places", ["mountain_cableway"]),
  new e("🚟", "places", ["suspension_railway"]),
  new e("🚃", "places", ["railway_car"]),
  new e("🚋", "places", ["train"]),
  new e("🚞", "places", ["mountain_railway"]),
  new e("🚝", "places", ["monorail"]),
  new e("🚄", "places", ["bullettrain_side"]),
  new e("🚅", "places", ["bullettrain_front"]),
  new e("🚈", "places", ["light_rail"]),
  new e("🚂", "places", ["steam_locomotive"]),
  new e("🚆", "places", ["train2"]),
  new e("🚇", "places", ["metro"]),
  new e("🚊", "places", ["tram"]),
  new e("🚉", "places", ["station"]),
  new e("🚁", "places", ["helicopter"]),
  new e("🛩", "places", ["small_airplane"]),
  new e("✈️", "places", ["airplane"]),
  new e("🛫", "places", ["flight_departure"]),
  new e("🛬", "places", ["flight_arrival"]),
  new e("🚀", "places", ["rocket"]),
  new e("🛰", "places", ["artificial_satellite"]),
  new e("💺", "places", ["seat"]),
  new e("🛶", "places", ["canoe"]),
  new e("⛵️", "places", ["boat", "sailboat"]),
  new e("🛥", "places", ["motor_boat"]),
  new e("🚤", "places", ["speedboat"]),
  new e("🛳", "places", ["passenger_ship"]),
  new e("⛴", "places", ["ferry"]),
  new e("🚢", "places", ["ship"]),
  new e("⚓️", "places", ["anchor"]),
  new e("🚧", "places", ["construction"]),
  new e("⛽️", "places", ["fuelpump"]),
  new e("🚏", "places", ["busstop"]),
  new e("🚦", "places", ["vertical_traffic_light"]),
  new e("🚥", "places", ["traffic_light"]),
  new e("🗺", "places", ["world_map"]),
  new e("🗿", "places", ["moyai"]),
  new e("🗽", "places", ["statue_of_liberty"]),
  new e("⛲️", "places", ["fountain"]),
  new e("🗼", "places", ["tokyo_tower"]),
  new e("🏰", "places", ["european_castle"]),
  new e("🏯", "places", ["japanese_castle"]),
  new e("🏟", "places", ["stadium"]),
  new e("🎡", "places", ["ferris_wheel"]),
  new e("🎢", "places", ["roller_coaster"]),
  new e("🎠", "places", ["carousel_horse"]),
  new e("⛱", "places", ["parasol_on_ground"]),
  new e("🏖", "places", ["beach_umbrella"]),
  new e("🏝", "places", ["desert_island"]),
  new e("⛰", "places", ["mountain"]),
  new e("🏔", "places", ["mountain_snow"]),
  new e("🗻", "places", ["mount_fuji"]),
  new e("🌋", "places", ["volcano"]),
  new e("🏜", "places", ["desert"]),
  new e("🏕", "places", ["camping"]),
  new e("⛺️", "places", ["tent"]),
  new e("🛤", "places", ["railway_track"]),
  new e("🛣", "places", ["motorway"]),
  new e("🏗", "places", ["building_construction"]),
  new e("🏭", "places", ["factory"]),
  new e("🏠", "places", ["house"]),
  new e("🏡", "places", ["house_with_garden"]),
  new e("🏘", "places", ["houses"]),
  new e("🏚", "places", ["derelict_house"]),
  new e("🏢", "places", ["office"]),
  new e("🏬", "places", ["department_store"]),
  new e("🏣", "places", ["post_office"]),
  new e("🏤", "places", ["european_post_office"]),
  new e("🏥", "places", ["hospital"]),
  new e("🏦", "places", ["bank"]),
  new e("🏨", "places", ["hotel"]),
  new e("🏪", "places", ["convenience_store"]),
  new e("🏫", "places", ["school"]),
  new e("🏩", "places", ["love_hotel"]),
  new e("💒", "places", ["wedding"]),
  new e("🏛", "places", ["classical_building"]),
  new e("⛪️", "places", ["church"]),
  new e("🕌", "places", ["mosque"]),
  new e("🕍", "places", ["synagogue"]),
  new e("🕋", "places", ["kaaba"]),
  new e("⛩", "places", ["shinto_shrine"]),
  new e("🗾", "places", ["japan"]),
  new e("🎑", "places", ["rice_scene"]),
  new e("🏞", "places", ["national_park"]),
  new e("🌅", "places", ["sunrise"]),
  new e("🌄", "places", ["sunrise_over_mountains"]),
  new e("🌠", "places", ["stars"]),
  new e("🎇", "places", ["sparkler"]),
  new e("🎆", "places", ["fireworks"]),
  new e("🌇", "places", ["city_sunrise"]),
  new e("🌆", "places", ["city_sunset"]),
  new e("🏙", "places", ["cityscape"]),
  new e("🌃", "places", ["night_with_stars"]),
  new e("🌌", "places", ["milky_way"]),
  new e("🌉", "places", ["bridge_at_night"]),
  new e("🌁", "places", ["foggy"]),
  new e("⌚️", "objects", ["watch"]),
  new e("📱", "objects", ["iphone"]),
  new e("📲", "objects", ["calling"]),
  new e("💻", "objects", ["computer"]),
  new e("⌨️", "objects", ["keyboard"]),
  new e("🖥", "objects", ["desktop_computer"]),
  new e("🖨", "objects", ["printer"]),
  new e("🖱", "objects", ["computer_mouse"]),
  new e("🖲", "objects", ["trackball"]),
  new e("🕹", "objects", ["joystick"]),
  new e("🗜", "objects", ["clamp"]),
  new e("💽", "objects", ["minidisc"]),
  new e("💾", "objects", ["floppy_disk"]),
  new e("💿", "objects", ["cd"]),
  new e("📀", "objects", ["dvd"]),
  new e("📼", "objects", ["vhs"]),
  new e("📷", "objects", ["camera"]),
  new e("📸", "objects", ["camera_flash"]),
  new e("📹", "objects", ["video_camera"]),
  new e("🎥", "objects", ["movie_camera"]),
  new e("📽", "objects", ["film_projector"]),
  new e("🎞", "objects", ["film_strip"]),
  new e("📞", "objects", ["telephone_receiver"]),
  new e("☎️", "objects", ["phone", "telephone"]),
  new e("📟", "objects", ["pager"]),
  new e("📠", "objects", ["fax"]),
  new e("📺", "objects", ["tv"]),
  new e("📻", "objects", ["radio"]),
  new e("🎙", "objects", ["studio_microphone"]),
  new e("🎚", "objects", ["level_slider"]),
  new e("🎛", "objects", ["control_knobs"]),
  new e("⏱", "objects", ["stopwatch"]),
  new e("⏲", "objects", ["timer_clock"]),
  new e("⏰", "objects", ["alarm_clock"]),
  new e("🕰", "objects", ["mantelpiece_clock"]),
  new e("⌛️", "objects", ["hourglass"]),
  new e("⏳", "objects", ["hourglass_flowing_sand"]),
  new e("📡", "objects", ["satellite"]),
  new e("🔋", "objects", ["battery"]),
  new e("🔌", "objects", ["electric_plug"]),
  new e("💡", "objects", ["bulb"]),
  new e("🔦", "objects", ["flashlight"]),
  new e("🕯", "objects", ["candle"]),
  new e("🗑", "objects", ["wastebasket"]),
  new e("🛢", "objects", ["oil_drum"]),
  new e("💸", "objects", ["money_with_wings"]),
  new e("💵", "objects", ["dollar"]),
  new e("💴", "objects", ["yen"]),
  new e("💶", "objects", ["euro"]),
  new e("💷", "objects", ["pound"]),
  new e("💰", "objects", ["moneybag"]),
  new e("💳", "objects", ["credit_card"]),
  new e("💎", "objects", ["gem"]),
  new e("⚖️", "objects", ["balance_scale"]),
  new e("🔧", "objects", ["wrench"]),
  new e("🔨", "objects", ["hammer"]),
  new e("⚒", "objects", ["hammer_and_pick"]),
  new e("🛠", "objects", ["hammer_and_wrench"]),
  new e("⛏", "objects", ["pick"]),
  new e("🔩", "objects", ["nut_and_bolt"]),
  new e("⚙️", "objects", ["gear"]),
  new e("⛓", "objects", ["chains"]),
  new e("🔫", "objects", ["gun"]),
  new e("💣", "objects", ["bomb"]),
  new e("🔪", "objects", ["hocho", "knife"]),
  new e("🗡", "objects", ["dagger"]),
  new e("⚔️", "objects", ["crossed_swords"]),
  new e("🛡", "objects", ["shield"]),
  new e("🚬", "objects", ["smoking"]),
  new e("⚰️", "objects", ["coffin"]),
  new e("⚱️", "objects", ["funeral_urn"]),
  new e("🏺", "objects", ["amphora"]),
  new e("🔮", "objects", ["crystal_ball"]),
  new e("📿", "objects", ["prayer_beads"]),
  new e("💈", "objects", ["barber"]),
  new e("⚗️", "objects", ["alembic"]),
  new e("🔭", "objects", ["telescope"]),
  new e("🔬", "objects", ["microscope"]),
  new e("🕳", "objects", ["hole"]),
  new e("💊", "objects", ["pill"]),
  new e("💉", "objects", ["syringe"]),
  new e("🌡", "objects", ["thermometer"]),
  new e("🚽", "objects", ["toilet"]),
  new e("🚰", "objects", ["potable_water"]),
  new e("🚿", "objects", ["shower"]),
  new e("🛁", "objects", ["bathtub"]),
  new e("🛀", "objects", ["bath"]),
  new e("🛎", "objects", ["bellhop_bell"]),
  new e("🔑", "objects", ["key"]),
  new e("🗝", "objects", ["old_key"]),
  new e("🚪", "objects", ["door"]),
  new e("🛋", "objects", ["couch_and_lamp"]),
  new e("🛏", "objects", ["bed"]),
  new e("🛌", "objects", ["sleeping_bed"]),
  new e("🖼", "objects", ["framed_picture"]),
  new e("🛍", "objects", ["shopping"]),
  new e("🛒", "objects", ["shopping_cart"]),
  new e("🎁", "objects", ["gift"]),
  new e("🎈", "objects", ["balloon"]),
  new e("🎏", "objects", ["flags"]),
  new e("🎀", "objects", ["ribbon"]),
  new e("🎊", "objects", ["confetti_ball"]),
  new e("🎉", "objects", ["tada"]),
  new e("🎎", "objects", ["dolls"]),
  new e("🏮", "objects", ["izakaya_lantern", "lantern"]),
  new e("🎐", "objects", ["wind_chime"]),
  new e("✉️", "objects", ["email", "envelope"]),
  new e("📩", "objects", ["envelope_with_arrow"]),
  new e("📨", "objects", ["incoming_envelope"]),
  new e("📧", "objects", ["e-mail"]),
  new e("💌", "objects", ["love_letter"]),
  new e("📥", "objects", ["inbox_tray"]),
  new e("📤", "objects", ["outbox_tray"]),
  new e("📦", "objects", ["package"]),
  new e("🏷", "objects", ["label"]),
  new e("📪", "objects", ["mailbox_closed"]),
  new e("📫", "objects", ["mailbox"]),
  new e("📬", "objects", ["mailbox_with_mail"]),
  new e("📭", "objects", ["mailbox_with_no_mail"]),
  new e("📮", "objects", ["postbox"]),
  new e("📯", "objects", ["postal_horn"]),
  new e("📜", "objects", ["scroll"]),
  new e("📃", "objects", ["page_with_curl"]),
  new e("📄", "objects", ["page_facing_up"]),
  new e("📑", "objects", ["bookmark_tabs"]),
  new e("📊", "objects", ["bar_chart"]),
  new e("📈", "objects", ["chart_with_upwards_trend"]),
  new e("📉", "objects", ["chart_with_downwards_trend"]),
  new e("🗒", "objects", ["spiral_notepad"]),
  new e("🗓", "objects", ["spiral_calendar"]),
  new e("📆", "objects", ["calendar"]),
  new e("📅", "objects", ["date"]),
  new e("📇", "objects", ["card_index"]),
  new e("🗃", "objects", ["card_file_box"]),
  new e("🗳", "objects", ["ballot_box"]),
  new e("🗄", "objects", ["file_cabinet"]),
  new e("📋", "objects", ["clipboard"]),
  new e("📁", "objects", ["file_folder"]),
  new e("📂", "objects", ["open_file_folder"]),
  new e("🗂", "objects", ["card_index_dividers"]),
  new e("🗞", "objects", ["newspaper_roll"]),
  new e("📰", "objects", ["newspaper"]),
  new e("📓", "objects", ["notebook"]),
  new e("📔", "objects", ["notebook_with_decorative_cover"]),
  new e("📒", "objects", ["ledger"]),
  new e("📕", "objects", ["closed_book"]),
  new e("📗", "objects", ["green_book"]),
  new e("📘", "objects", ["blue_book"]),
  new e("📙", "objects", ["orange_book"]),
  new e("📚", "objects", ["books"]),
  new e("📖", "objects", ["book", "open_book"]),
  new e("🔖", "objects", ["bookmark"]),
  new e("🔗", "objects", ["link"]),
  new e("📎", "objects", ["paperclip"]),
  new e("🖇", "objects", ["paperclips"]),
  new e("📐", "objects", ["triangular_ruler"]),
  new e("📏", "objects", ["straight_ruler"]),
  new e("📌", "objects", ["pushpin"]),
  new e("📍", "objects", ["round_pushpin"]),
  new e("✂️", "objects", ["scissors"]),
  new e("🖊", "objects", ["pen"]),
  new e("🖋", "objects", ["fountain_pen"]),
  new e("✒️", "objects", ["black_nib"]),
  new e("🖌", "objects", ["paintbrush"]),
  new e("🖍", "objects", ["crayon"]),
  new e("📝", "objects", ["memo", "pencil"]),
  new e("✏️", "objects", ["pencil2"]),
  new e("🔍", "objects", ["mag"]),
  new e("🔎", "objects", ["mag_right"]),
  new e("🔏", "objects", ["lock_with_ink_pen"]),
  new e("🔐", "objects", ["closed_lock_with_key"]),
  new e("🔒", "objects", ["lock"]),
  new e("🔓", "objects", ["unlock"]),
  new e("❤️", "symbols", ["heart"]),
  new e("💛", "symbols", ["yellow_heart"]),
  new e("💚", "symbols", ["green_heart"]),
  new e("💙", "symbols", ["blue_heart"]),
  new e("💜", "symbols", ["purple_heart"]),
  new e("🖤", "symbols", ["black_heart"]),
  new e("💔", "symbols", ["broken_heart"]),
  new e("❣️", "symbols", ["heavy_heart_exclamation"]),
  new e("💕", "symbols", ["two_hearts"]),
  new e("💞", "symbols", ["revolving_hearts"]),
  new e("💓", "symbols", ["heartbeat"]),
  new e("💗", "symbols", ["heartpulse"]),
  new e("💖", "symbols", ["sparkling_heart"]),
  new e("💘", "symbols", ["cupid"]),
  new e("💝", "symbols", ["gift_heart"]),
  new e("💟", "symbols", ["heart_decoration"]),
  new e("☮️", "symbols", ["peace_symbol"]),
  new e("✝️", "symbols", ["latin_cross"]),
  new e("☪️", "symbols", ["star_and_crescent"]),
  new e("🕉", "symbols", ["om"]),
  new e("☸️", "symbols", ["wheel_of_dharma"]),
  new e("✡️", "symbols", ["star_of_david"]),
  new e("🔯", "symbols", ["six_pointed_star"]),
  new e("🕎", "symbols", ["menorah"]),
  new e("☯️", "symbols", ["yin_yang"]),
  new e("☦️", "symbols", ["orthodox_cross"]),
  new e("🛐", "symbols", ["place_of_worship"]),
  new e("⛎", "symbols", ["ophiuchus"]),
  new e("♈️", "symbols", ["aries"]),
  new e("♉️", "symbols", ["taurus"]),
  new e("♊️", "symbols", ["gemini"]),
  new e("♋️", "symbols", ["cancer"]),
  new e("♌️", "symbols", ["leo"]),
  new e("♍️", "symbols", ["virgo"]),
  new e("♎️", "symbols", ["libra"]),
  new e("♏️", "symbols", ["scorpius"]),
  new e("♐️", "symbols", ["sagittarius"]),
  new e("♑️", "symbols", ["capricorn"]),
  new e("♒️", "symbols", ["aquarius"]),
  new e("♓️", "symbols", ["pisces"]),
  new e("🆔", "symbols", ["id"]),
  new e("⚛️", "symbols", ["atom_symbol"]),
  new e("🉑", "symbols", ["accept"]),
  new e("☢️", "symbols", ["radioactive"]),
  new e("☣️", "symbols", ["biohazard"]),
  new e("📴", "symbols", ["mobile_phone_off"]),
  new e("📳", "symbols", ["vibration_mode"]),
  new e("🈶", "symbols", ["u6709"]),
  new e("🈚️", "symbols", ["u7121"]),
  new e("🈸", "symbols", ["u7533"]),
  new e("🈺", "symbols", ["u55b6"]),
  new e("🈷️", "symbols", ["u6708"]),
  new e("✴️", "symbols", ["eight_pointed_black_star"]),
  new e("🆚", "symbols", ["vs"]),
  new e("💮", "symbols", ["white_flower"]),
  new e("🉐", "symbols", ["ideograph_advantage"]),
  new e("㊙️", "symbols", ["secret"]),
  new e("㊗️", "symbols", ["congratulations"]),
  new e("🈴", "symbols", ["u5408"]),
  new e("🈵", "symbols", ["u6e80"]),
  new e("🈹", "symbols", ["u5272"]),
  new e("🈲", "symbols", ["u7981"]),
  new e("🅰️", "symbols", ["a"]),
  new e("🅱️", "symbols", ["b"]),
  new e("🆎", "symbols", ["ab"]),
  new e("🆑", "symbols", ["cl"]),
  new e("🅾️", "symbols", ["o2"]),
  new e("🆘", "symbols", ["sos"]),
  new e("❌", "symbols", ["x"]),
  new e("⭕️", "symbols", ["o"]),
  new e("🛑", "symbols", ["stop_sign"]),
  new e("⛔️", "symbols", ["no_entry"]),
  new e("📛", "symbols", ["name_badge"]),
  new e("🚫", "symbols", ["no_entry_sign"]),
  new e("💯", "symbols", ["100"]),
  new e("💢", "symbols", ["anger"]),
  new e("♨️", "symbols", ["hotsprings"]),
  new e("🚷", "symbols", ["no_pedestrians"]),
  new e("🚯", "symbols", ["do_not_litter"]),
  new e("🚳", "symbols", ["no_bicycles"]),
  new e("🚱", "symbols", ["non-potable_water"]),
  new e("🔞", "symbols", ["underage"]),
  new e("📵", "symbols", ["no_mobile_phones"]),
  new e("🚭", "symbols", ["no_smoking"]),
  new e("❗️", "symbols", ["exclamation", "heavy_exclamation_mark"]),
  new e("❕", "symbols", ["grey_exclamation"]),
  new e("❓", "symbols", ["question"]),
  new e("❔", "symbols", ["grey_question"]),
  new e("‼️", "symbols", ["bangbang"]),
  new e("⁉️", "symbols", ["interrobang"]),
  new e("🔅", "symbols", ["low_brightness"]),
  new e("🔆", "symbols", ["high_brightness"]),
  new e("〽️", "symbols", ["part_alternation_mark"]),
  new e("⚠️", "symbols", ["warning"]),
  new e("🚸", "symbols", ["children_crossing"]),
  new e("🔱", "symbols", ["trident"]),
  new e("⚜️", "symbols", ["fleur_de_lis"]),
  new e("🔰", "symbols", ["beginner"]),
  new e("♻️", "symbols", ["recycle"]),
  new e("✅", "symbols", ["white_check_mark"]),
  new e("🈯️", "symbols", ["u6307"]),
  new e("💹", "symbols", ["chart"]),
  new e("❇️", "symbols", ["sparkle"]),
  new e("✳️", "symbols", ["eight_spoked_asterisk"]),
  new e("❎", "symbols", ["negative_squared_cross_mark"]),
  new e("🌐", "symbols", ["globe_with_meridians"]),
  new e("💠", "symbols", ["diamond_shape_with_a_dot_inside"]),
  new e("Ⓜ️", "symbols", ["m"]),
  new e("🌀", "symbols", ["cyclone"]),
  new e("💤", "symbols", ["zzz"]),
  new e("🏧", "symbols", ["atm"]),
  new e("🚾", "symbols", ["wc"]),
  new e("♿️", "symbols", ["wheelchair"]),
  new e("🅿️", "symbols", ["parking"]),
  new e("🈳", "symbols", ["u7a7a"]),
  new e("🈂️", "symbols", ["sa"]),
  new e("🛂", "symbols", ["passport_control"]),
  new e("🛃", "symbols", ["customs"]),
  new e("🛄", "symbols", ["baggage_claim"]),
  new e("🛅", "symbols", ["left_luggage"]),
  new e("🚹", "symbols", ["mens"]),
  new e("🚺", "symbols", ["womens"]),
  new e("🚼", "symbols", ["baby_symbol"]),
  new e("🚻", "symbols", ["restroom"]),
  new e("🚮", "symbols", ["put_litter_in_its_place"]),
  new e("🎦", "symbols", ["cinema"]),
  new e("📶", "symbols", ["signal_strength"]),
  new e("🈁", "symbols", ["koko"]),
  new e("🔣", "symbols", ["symbols"]),
  new e("ℹ️", "symbols", ["information_source"]),
  new e("🔤", "symbols", ["abc"]),
  new e("🔡", "symbols", ["abcd"]),
  new e("🔠", "symbols", ["capital_abcd"]),
  new e("🆖", "symbols", ["ng"]),
  new e("🆗", "symbols", ["ok"]),
  new e("🆙", "symbols", ["up"]),
  new e("🆒", "symbols", ["cool"]),
  new e("🆕", "symbols", ["new"]),
  new e("🆓", "symbols", ["free"]),
  new e("0️⃣", "symbols", ["zero"]),
  new e("1️⃣", "symbols", ["one"]),
  new e("2️⃣", "symbols", ["two"]),
  new e("3️⃣", "symbols", ["three"]),
  new e("4️⃣", "symbols", ["four"]),
  new e("5️⃣", "symbols", ["five"]),
  new e("6️⃣", "symbols", ["six"]),
  new e("7️⃣", "symbols", ["seven"]),
  new e("8️⃣", "symbols", ["eight"]),
  new e("9️⃣", "symbols", ["nine"]),
  new e("🔟", "symbols", ["keycap_ten"]),
  new e("🔢", "symbols", ["1234"]),
  new e("#️⃣", "symbols", ["hash"]),
  new e("*️⃣", "symbols", ["asterisk"]),
  new e("▶️", "symbols", ["arrow_forward"]),
  new e("⏸", "symbols", ["pause_button"]),
  new e("⏯", "symbols", ["play_or_pause_button"]),
  new e("⏹", "symbols", ["stop_button"]),
  new e("⏺", "symbols", ["record_button"]),
  new e("⏭", "symbols", ["next_track_button"]),
  new e("⏮", "symbols", ["previous_track_button"]),
  new e("⏩", "symbols", ["fast_forward"]),
  new e("⏪", "symbols", ["rewind"]),
  new e("⏫", "symbols", ["arrow_double_up"]),
  new e("⏬", "symbols", ["arrow_double_down"]),
  new e("◀️", "symbols", ["arrow_backward"]),
  new e("🔼", "symbols", ["arrow_up_small"]),
  new e("🔽", "symbols", ["arrow_down_small"]),
  new e("➡️", "symbols", ["arrow_right"]),
  new e("⬅️", "symbols", ["arrow_left"]),
  new e("⬆️", "symbols", ["arrow_up"]),
  new e("⬇️", "symbols", ["arrow_down"]),
  new e("↗️", "symbols", ["arrow_upper_right"]),
  new e("↘️", "symbols", ["arrow_lower_right"]),
  new e("↙️", "symbols", ["arrow_lower_left"]),
  new e("↖️", "symbols", ["arrow_upper_left"]),
  new e("↕️", "symbols", ["arrow_up_down"]),
  new e("↔️", "symbols", ["left_right_arrow"]),
  new e("↪️", "symbols", ["arrow_right_hook"]),
  new e("↩️", "symbols", ["leftwards_arrow_with_hook"]),
  new e("⤴️", "symbols", ["arrow_heading_up"]),
  new e("⤵️", "symbols", ["arrow_heading_down"]),
  new e("🔀", "symbols", ["twisted_rightwards_arrows"]),
  new e("🔁", "symbols", ["repeat"]),
  new e("🔂", "symbols", ["repeat_one"]),
  new e("🔄", "symbols", ["arrows_counterclockwise"]),
  new e("🔃", "symbols", ["arrows_clockwise"]),
  new e("🎵", "symbols", ["musical_note"]),
  new e("🎶", "symbols", ["notes"]),
  new e("➕", "symbols", ["heavy_plus_sign"]),
  new e("➖", "symbols", ["heavy_minus_sign"]),
  new e("➗", "symbols", ["heavy_division_sign"]),
  new e("✖️", "symbols", ["heavy_multiplication_x"]),
  new e("💲", "symbols", ["heavy_dollar_sign"]),
  new e("💱", "symbols", ["currency_exchange"]),
  new e("™️", "symbols", ["tm"]),
  new e("©️", "symbols", ["copyright"]),
  new e("®️", "symbols", ["registered"]),
  new e("〰️", "symbols", ["wavy_dash"]),
  new e("➰", "symbols", ["curly_loop"]),
  new e("➿", "symbols", ["loop"]),
  new e("🔚", "symbols", ["end"]),
  new e("🔙", "symbols", ["back"]),
  new e("🔛", "symbols", ["on"]),
  new e("🔝", "symbols", ["top"]),
  new e("🔜", "symbols", ["soon"]),
  new e("✔️", "symbols", ["heavy_check_mark"]),
  new e("☑️", "symbols", ["ballot_box_with_check"]),
  new e("🔘", "symbols", ["radio_button"]),
  new e("⚪️", "symbols", ["white_circle"]),
  new e("⚫️", "symbols", ["black_circle"]),
  new e("🔴", "symbols", ["red_circle"]),
  new e("🔵", "symbols", ["large_blue_circle"]),
  new e("🔺", "symbols", ["small_red_triangle"]),
  new e("🔻", "symbols", ["small_red_triangle_down"]),
  new e("🔸", "symbols", ["small_orange_diamond"]),
  new e("🔹", "symbols", ["small_blue_diamond"]),
  new e("🔶", "symbols", ["large_orange_diamond"]),
  new e("🔷", "symbols", ["large_blue_diamond"]),
  new e("🔳", "symbols", ["white_square_button"]),
  new e("🔲", "symbols", ["black_square_button"]),
  new e("▪️", "symbols", ["black_small_square"]),
  new e("▫️", "symbols", ["white_small_square"]),
  new e("◾️", "symbols", ["black_medium_small_square"]),
  new e("◽️", "symbols", ["white_medium_small_square"]),
  new e("◼️", "symbols", ["black_medium_square"]),
  new e("◻️", "symbols", ["white_medium_square"]),
  new e("⬛️", "symbols", ["black_large_square"]),
  new e("⬜️", "symbols", ["white_large_square"]),
  new e("🔈", "symbols", ["speaker"]),
  new e("🔇", "symbols", ["mute"]),
  new e("🔉", "symbols", ["sound"]),
  new e("🔊", "symbols", ["loud_sound"]),
  new e("🔔", "symbols", ["bell"]),
  new e("🔕", "symbols", ["no_bell"]),
  new e("📣", "symbols", ["mega"]),
  new e("📢", "symbols", ["loudspeaker"]),
  new e("👁‍🗨", "symbols", ["eye_speech_bubble"]),
  new e("💬", "symbols", ["speech_balloon"]),
  new e("💭", "symbols", ["thought_balloon"]),
  new e("🗯", "symbols", ["right_anger_bubble"]),
  new e("♠️", "symbols", ["spades"]),
  new e("♣️", "symbols", ["clubs"]),
  new e("♥️", "symbols", ["hearts"]),
  new e("♦️", "symbols", ["diamonds"]),
  new e("🃏", "symbols", ["black_joker"]),
  new e("🎴", "symbols", ["flower_playing_cards"]),
  new e("🀄️", "symbols", ["mahjong"]),
  new e("🕐", "symbols", ["clock1"]),
  new e("🕑", "symbols", ["clock2"]),
  new e("🕒", "symbols", ["clock3"]),
  new e("🕓", "symbols", ["clock4"]),
  new e("🕔", "symbols", ["clock5"]),
  new e("🕕", "symbols", ["clock6"]),
  new e("🕖", "symbols", ["clock7"]),
  new e("🕗", "symbols", ["clock8"]),
  new e("🕘", "symbols", ["clock9"]),
  new e("🕙", "symbols", ["clock10"]),
  new e("🕚", "symbols", ["clock11"]),
  new e("🕛", "symbols", ["clock12"]),
  new e("🕜", "symbols", ["clock130"]),
  new e("🕝", "symbols", ["clock230"]),
  new e("🕞", "symbols", ["clock330"]),
  new e("🕟", "symbols", ["clock430"]),
  new e("🕠", "symbols", ["clock530"]),
  new e("🕡", "symbols", ["clock630"]),
  new e("🕢", "symbols", ["clock730"]),
  new e("🕣", "symbols", ["clock830"]),
  new e("🕤", "symbols", ["clock930"]),
  new e("🕥", "symbols", ["clock1030"]),
  new e("🕦", "symbols", ["clock1130"]),
  new e("🕧", "symbols", ["clock1230"]),
  new e("🏳️", "flags", ["white_flag"]),
  new e("🏴", "flags", ["black_flag"]),
  new e("🏁", "flags", ["checkered_flag"]),
  new e("🚩", "flags", ["triangular_flag_on_post"]),
  new e("🏳️‍🌈", "flags", ["rainbow_flag"]),
  new e("🇦🇫", "flags", ["afghanistan"]),
  new e("🇦🇽", "flags", ["aland_islands"]),
  new e("🇦🇱", "flags", ["albania"]),
  new e("🇩🇿", "flags", ["algeria"]),
  new e("🇦🇸", "flags", ["american_samoa"]),
  new e("🇦🇩", "flags", ["andorra"]),
  new e("🇦🇴", "flags", ["angola"]),
  new e("🇦🇮", "flags", ["anguilla"]),
  new e("🇦🇶", "flags", ["antarctica"]),
  new e("🇦🇬", "flags", ["antigua_barbuda"]),
  new e("🇦🇷", "flags", ["argentina"]),
  new e("🇦🇲", "flags", ["armenia"]),
  new e("🇦🇼", "flags", ["aruba"]),
  new e("🇦🇺", "flags", ["australia"]),
  new e("🇦🇹", "flags", ["austria"]),
  new e("🇦🇿", "flags", ["azerbaijan"]),
  new e("🇧🇸", "flags", ["bahamas"]),
  new e("🇧🇭", "flags", ["bahrain"]),
  new e("🇧🇩", "flags", ["bangladesh"]),
  new e("🇧🇧", "flags", ["barbados"]),
  new e("🇧🇾", "flags", ["belarus"]),
  new e("🇧🇪", "flags", ["belgium"]),
  new e("🇧🇿", "flags", ["belize"]),
  new e("🇧🇯", "flags", ["benin"]),
  new e("🇧🇲", "flags", ["bermuda"]),
  new e("🇧🇹", "flags", ["bhutan"]),
  new e("🇧🇴", "flags", ["bolivia"]),
  new e("🇧🇶", "flags", ["caribbean_netherlands"]),
  new e("🇧🇦", "flags", ["bosnia_herzegovina"]),
  new e("🇧🇼", "flags", ["botswana"]),
  new e("🇧🇷", "flags", ["brazil"]),
  new e("🇮🇴", "flags", ["british_indian_ocean_territory"]),
  new e("🇻🇬", "flags", ["british_virgin_islands"]),
  new e("🇧🇳", "flags", ["brunei"]),
  new e("🇧🇬", "flags", ["bulgaria"]),
  new e("🇧🇫", "flags", ["burkina_faso"]),
  new e("🇧🇮", "flags", ["burundi"]),
  new e("🇨🇻", "flags", ["cape_verde"]),
  new e("🇰🇭", "flags", ["cambodia"]),
  new e("🇨🇲", "flags", ["cameroon"]),
  new e("🇨🇦", "flags", ["canada"]),
  new e("🇮🇨", "flags", ["canary_islands"]),
  new e("🇰🇾", "flags", ["cayman_islands"]),
  new e("🇨🇫", "flags", ["central_african_republic"]),
  new e("🇹🇩", "flags", ["chad"]),
  new e("🇨🇱", "flags", ["chile"]),
  new e("🇨🇳", "flags", ["cn"]),
  new e("🇨🇽", "flags", ["christmas_island"]),
  new e("🇨🇨", "flags", ["cocos_islands"]),
  new e("🇨🇴", "flags", ["colombia"]),
  new e("🇰🇲", "flags", ["comoros"]),
  new e("🇨🇬", "flags", ["congo_brazzaville"]),
  new e("🇨🇩", "flags", ["congo_kinshasa"]),
  new e("🇨🇰", "flags", ["cook_islands"]),
  new e("🇨🇷", "flags", ["costa_rica"]),
  new e("🇨🇮", "flags", ["cote_divoire"]),
  new e("🇭🇷", "flags", ["croatia"]),
  new e("🇨🇺", "flags", ["cuba"]),
  new e("🇨🇼", "flags", ["curacao"]),
  new e("🇨🇾", "flags", ["cyprus"]),
  new e("🇨🇿", "flags", ["czech_republic"]),
  new e("🇩🇰", "flags", ["denmark"]),
  new e("🇩🇯", "flags", ["djibouti"]),
  new e("🇩🇲", "flags", ["dominica"]),
  new e("🇩🇴", "flags", ["dominican_republic"]),
  new e("🇪🇨", "flags", ["ecuador"]),
  new e("🇪🇬", "flags", ["egypt"]),
  new e("🇸🇻", "flags", ["el_salvador"]),
  new e("🇬🇶", "flags", ["equatorial_guinea"]),
  new e("🇪🇷", "flags", ["eritrea"]),
  new e("🇪🇪", "flags", ["estonia"]),
  new e("🇪🇹", "flags", ["ethiopia"]),
  new e("🇪🇺", "flags", ["eu", "european_union"]),
  new e("🇫🇰", "flags", ["falkland_islands"]),
  new e("🇫🇴", "flags", ["faroe_islands"]),
  new e("🇫🇯", "flags", ["fiji"]),
  new e("🇫🇮", "flags", ["finland"]),
  new e("🇫🇷", "flags", ["fr"]),
  new e("🇬🇫", "flags", ["french_guiana"]),
  new e("🇵🇫", "flags", ["french_polynesia"]),
  new e("🇹🇫", "flags", ["french_southern_territories"]),
  new e("🇬🇦", "flags", ["gabon"]),
  new e("🇬🇲", "flags", ["gambia"]),
  new e("🇬🇪", "flags", ["georgia"]),
  new e("🇩🇪", "flags", ["de"]),
  new e("🇬🇭", "flags", ["ghana"]),
  new e("🇬🇮", "flags", ["gibraltar"]),
  new e("🇬🇷", "flags", ["greece"]),
  new e("🇬🇱", "flags", ["greenland"]),
  new e("🇬🇩", "flags", ["grenada"]),
  new e("🇬🇵", "flags", ["guadeloupe"]),
  new e("🇬🇺", "flags", ["guam"]),
  new e("🇬🇹", "flags", ["guatemala"]),
  new e("🇬🇬", "flags", ["guernsey"]),
  new e("🇬🇳", "flags", ["guinea"]),
  new e("🇬🇼", "flags", ["guinea_bissau"]),
  new e("🇬🇾", "flags", ["guyana"]),
  new e("🇭🇹", "flags", ["haiti"]),
  new e("🇭🇳", "flags", ["honduras"]),
  new e("🇭🇰", "flags", ["hong_kong"]),
  new e("🇭🇺", "flags", ["hungary"]),
  new e("🇮🇸", "flags", ["iceland"]),
  new e("🇮🇳", "flags", ["india"]),
  new e("🇮🇩", "flags", ["indonesia"]),
  new e("🇮🇷", "flags", ["iran"]),
  new e("🇮🇶", "flags", ["iraq"]),
  new e("🇮🇪", "flags", ["ireland"]),
  new e("🇮🇲", "flags", ["isle_of_man"]),
  new e("🇮🇱", "flags", ["israel"]),
  new e("🇮🇹", "flags", ["it"]),
  new e("🇯🇲", "flags", ["jamaica"]),
  new e("🇯🇵", "flags", ["jp"]),
  new e("🎌", "flags", ["crossed_flags"]),
  new e("🇯🇪", "flags", ["jersey"]),
  new e("🇯🇴", "flags", ["jordan"]),
  new e("🇰🇿", "flags", ["kazakhstan"]),
  new e("🇰🇪", "flags", ["kenya"]),
  new e("🇰🇮", "flags", ["kiribati"]),
  new e("🇽🇰", "flags", ["kosovo"]),
  new e("🇰🇼", "flags", ["kuwait"]),
  new e("🇰🇬", "flags", ["kyrgyzstan"]),
  new e("🇱🇦", "flags", ["laos"]),
  new e("🇱🇻", "flags", ["latvia"]),
  new e("🇱🇧", "flags", ["lebanon"]),
  new e("🇱🇸", "flags", ["lesotho"]),
  new e("🇱🇷", "flags", ["liberia"]),
  new e("🇱🇾", "flags", ["libya"]),
  new e("🇱🇮", "flags", ["liechtenstein"]),
  new e("🇱🇹", "flags", ["lithuania"]),
  new e("🇱🇺", "flags", ["luxembourg"]),
  new e("🇲🇴", "flags", ["macau"]),
  new e("🇲🇰", "flags", ["macedonia"]),
  new e("🇲🇬", "flags", ["madagascar"]),
  new e("🇲🇼", "flags", ["malawi"]),
  new e("🇲🇾", "flags", ["malaysia"]),
  new e("🇲🇻", "flags", ["maldives"]),
  new e("🇲🇱", "flags", ["mali"]),
  new e("🇲🇹", "flags", ["malta"]),
  new e("🇲🇭", "flags", ["marshall_islands"]),
  new e("🇲🇶", "flags", ["martinique"]),
  new e("🇲🇷", "flags", ["mauritania"]),
  new e("🇲🇺", "flags", ["mauritius"]),
  new e("🇾🇹", "flags", ["mayotte"]),
  new e("🇲🇽", "flags", ["mexico"]),
  new e("🇫🇲", "flags", ["micronesia"]),
  new e("🇲🇩", "flags", ["moldova"]),
  new e("🇲🇨", "flags", ["monaco"]),
  new e("🇲🇳", "flags", ["mongolia"]),
  new e("🇲🇪", "flags", ["montenegro"]),
  new e("🇲🇸", "flags", ["montserrat"]),
  new e("🇲🇦", "flags", ["morocco"]),
  new e("🇲🇿", "flags", ["mozambique"]),
  new e("🇲🇲", "flags", ["myanmar"]),
  new e("🇳🇦", "flags", ["namibia"]),
  new e("🇳🇷", "flags", ["nauru"]),
  new e("🇳🇵", "flags", ["nepal"]),
  new e("🇳🇱", "flags", ["netherlands"]),
  new e("🇳🇨", "flags", ["new_caledonia"]),
  new e("🇳🇿", "flags", ["new_zealand"]),
  new e("🇳🇮", "flags", ["nicaragua"]),
  new e("🇳🇪", "flags", ["niger"]),
  new e("🇳🇬", "flags", ["nigeria"]),
  new e("🇳🇺", "flags", ["niue"]),
  new e("🇳🇫", "flags", ["norfolk_island"]),
  new e("🇲🇵", "flags", ["northern_mariana_islands"]),
  new e("🇰🇵", "flags", ["north_korea"]),
  new e("🇳🇴", "flags", ["norway"]),
  new e("🇴🇲", "flags", ["oman"]),
  new e("🇵🇰", "flags", ["pakistan"]),
  new e("🇵🇼", "flags", ["palau"]),
  new e("🇵🇸", "flags", ["palestinian_territories"]),
  new e("🇵🇦", "flags", ["panama"]),
  new e("🇵🇬", "flags", ["papua_new_guinea"]),
  new e("🇵🇾", "flags", ["paraguay"]),
  new e("🇵🇪", "flags", ["peru"]),
  new e("🇵🇭", "flags", ["philippines"]),
  new e("🇵🇳", "flags", ["pitcairn_islands"]),
  new e("🇵🇱", "flags", ["poland"]),
  new e("🇵🇹", "flags", ["portugal"]),
  new e("🇵🇷", "flags", ["puerto_rico"]),
  new e("🇶🇦", "flags", ["qatar"]),
  new e("🇷🇪", "flags", ["reunion"]),
  new e("🇷🇴", "flags", ["romania"]),
  new e("🇷🇺", "flags", ["ru"]),
  new e("🇷🇼", "flags", ["rwanda"]),
  new e("🇧🇱", "flags", ["st_barthelemy"]),
  new e("🇸🇭", "flags", ["st_helena"]),
  new e("🇰🇳", "flags", ["st_kitts_nevis"]),
  new e("🇱🇨", "flags", ["st_lucia"]),
  new e("🇵🇲", "flags", ["st_pierre_miquelon"]),
  new e("🇻🇨", "flags", ["st_vincent_grenadines"]),
  new e("🇼🇸", "flags", ["samoa"]),
  new e("🇸🇲", "flags", ["san_marino"]),
  new e("🇸🇹", "flags", ["sao_tome_principe"]),
  new e("🇸🇦", "flags", ["saudi_arabia"]),
  new e("🇸🇳", "flags", ["senegal"]),
  new e("🇷🇸", "flags", ["serbia"]),
  new e("🇸🇨", "flags", ["seychelles"]),
  new e("🇸🇱", "flags", ["sierra_leone"]),
  new e("🇸🇬", "flags", ["singapore"]),
  new e("🇸🇽", "flags", ["sint_maarten"]),
  new e("🇸🇰", "flags", ["slovakia"]),
  new e("🇸🇮", "flags", ["slovenia"]),
  new e("🇸🇧", "flags", ["solomon_islands"]),
  new e("🇸🇴", "flags", ["somalia"]),
  new e("🇿🇦", "flags", ["south_africa"]),
  new e("🇬🇸", "flags", ["south_georgia_south_sandwich_islands"]),
  new e("🇰🇷", "flags", ["kr"]),
  new e("🇸🇸", "flags", ["south_sudan"]),
  new e("🇪🇸", "flags", ["es"]),
  new e("🇱🇰", "flags", ["sri_lanka"]),
  new e("🇸🇩", "flags", ["sudan"]),
  new e("🇸🇷", "flags", ["suriname"]),
  new e("🇸🇿", "flags", ["swaziland"]),
  new e("🇸🇪", "flags", ["sweden"]),
  new e("🇨🇭", "flags", ["switzerland"]),
  new e("🇸🇾", "flags", ["syria"]),
  new e("🇹🇼", "flags", ["taiwan"]),
  new e("🇹🇯", "flags", ["tajikistan"]),
  new e("🇹🇿", "flags", ["tanzania"]),
  new e("🇹🇭", "flags", ["thailand"]),
  new e("🇹🇱", "flags", ["timor_leste"]),
  new e("🇹🇬", "flags", ["togo"]),
  new e("🇹🇰", "flags", ["tokelau"]),
  new e("🇹🇴", "flags", ["tonga"]),
  new e("🇹🇹", "flags", ["trinidad_tobago"]),
  new e("🇹🇳", "flags", ["tunisia"]),
  new e("🇹🇷", "flags", ["tr"]),
  new e("🇹🇲", "flags", ["turkmenistan"]),
  new e("🇹🇨", "flags", ["turks_caicos_islands"]),
  new e("🇹🇻", "flags", ["tuvalu"]),
  new e("🇺🇬", "flags", ["uganda"]),
  new e("🇺🇦", "flags", ["ukraine"]),
  new e("🇦🇪", "flags", ["united_arab_emirates"]),
  new e("🇬🇧", "flags", ["gb", "uk"]),
  new e("🇺🇸", "flags", ["us"]),
  new e("🇻🇮", "flags", ["us_virgin_islands"]),
  new e("🇺🇾", "flags", ["uruguay"]),
  new e("🇺🇿", "flags", ["uzbekistan"]),
  new e("🇻🇺", "flags", ["vanuatu"]),
  new e("🇻🇦", "flags", ["vatican_city"]),
  new e("🇻🇪", "flags", ["venezuela"]),
  new e("🇻🇳", "flags", ["vietnam"]),
  new e("🇼🇫", "flags", ["wallis_futuna"]),
  new e("🇪🇭", "flags", ["western_sahara"]),
  new e("🇾🇪", "flags", ["yemen"]),
  new e("🇿🇲", "flags", ["zambia"]),
  new e("🇿🇼", "flags", ["zimbabwe"])
], E = {
  activity: '\n    <svg width="1em" height="1em"\n      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 303.6 303.6">\n      <path d="M291.503 11.6c-10.4-10.4-37.2-11.6-48.4-11.6-50.4 0-122.4 18.4-173.6 69.6-77.2 76.8-78.4 201.6-58.4 222 10.8 10.4 35.6 12 49.2 12 49.6 0 121.2-18.4 173.2-70 76.4-76.4 80.4-199.6 58-222zm-231.2 277.2c-24.4 0-36-4.8-38.8-7.6-5.2-5.2-8.4-24.4-6.8-49.6l57.2 56.8c-4 .4-8 .4-11.6.4zm162.8-66c-38.8 38.8-90.4 57.2-132.4 63.6l-74-73.6c6-42 24-94 63.2-133.2 38-38 88-56.4 130.8-62.8l75.6 75.6c-6 40.8-24.4 91.6-63.2 130.4zm65.2-148.8l-58.8-59.2c4.8-.4 9.2-.4 13.6-.4 24.4 0 35.6 4.8 38 7.2 5.6 5.6 9.2 25.6 7.2 52.4z"/>\n      <path d="M215.103 139.6l-20.8-20.8 13.2-13.2c2.8-2.8 2.8-7.6 0-10.4s-7.6-2.8-10.4 0l-13.2 13.6-20.8-20.8c-2.8-2.8-7.6-2.8-10.4 0-2.8 2.8-2.8 7.6 0 10.4l20.8 20.8-22 22-20.8-20.8c-2.8-2.8-7.6-2.8-10.4 0s-2.8 7.6 0 10.4l20.8 20.8-22 22-20.8-20.8c-2.8-2.8-7.6-2.8-10.4 0s-2.8 7.6 0 10.4l20.8 20.8-13.2 13.2c-2.8 2.8-2.8 7.6 0 10.4 1.6 1.6 3.2 2 5.2 2s3.6-.8 5.2-2l13.2-13.2 20.8 20.8c1.6 1.6 3.2 2 5.2 2s3.6-.8 5.2-2c2.8-2.8 2.8-7.6 0-10.4l-20.8-21.2 22-22 20.8 20.8c1.6 1.6 3.2 2 5.2 2s3.6-.8 5.2-2c2.8-2.8 2.8-7.6 0-10.4l-20.8-20.8 22-22 20.8 20.8c1.6 1.6 3.2 2 5.2 2s3.6-.8 5.2-2c2.8-2.8 2.8-7.6 0-10.4zM169.103 47.6c-1.2-4-5.2-6-9.2-4.8-3.2 1.2-80.8 25.6-110.4 98-1.6 4 0 8.4 4 9.6.8.4 2 .4 2.8.4 2.8 0 5.6-1.6 6.8-4.4 27.2-66 100.4-89.6 101.2-89.6 4-1.2 6-5.2 4.8-9.2z"/>\n    </svg>\n    ',
  flags: '\n    <svg width="1em" height="1em"\n      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\n      <path d="M472.928 34.72c-4.384-2.944-9.984-3.52-14.912-1.568-1.088.448-106.528 42.176-195.168.384C186.752-2.4 102.944 14.4 64 25.76V16c0-8.832-7.168-16-16-16S32 7.168 32 16v480c0 8.832 7.168 16 16 16s16-7.168 16-16V315.296c28.352-9.248 112.384-31.232 185.184 3.168 34.592 16.352 70.784 21.792 103.648 21.792 63.2 0 114.016-20.128 117.184-21.408 6.016-2.464 9.984-8.32 9.984-14.848V48c0-5.312-2.656-10.272-7.072-13.28zM448 292.672c-28.512 9.248-112.512 31.136-185.184-3.168C186.752 253.6 102.944 270.4 64 281.76V59.328c28.352-9.248 112.384-31.232 185.184 3.168 76 35.872 159.872 19.104 198.816 7.712v222.464z"/>\n    </svg>\n    ',
  foods: '\n    <svg width="1em" height="1em"\n      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.999 511.999">\n      <path d="M413.949 155.583a10.153 10.153 0 0 0-3.24-2.16c-.61-.25-1.24-.44-1.87-.57-3.25-.66-6.701.41-9.03 2.73a10.093 10.093 0 0 0-2.93 7.07 10.098 10.098 0 0 0 1.69 5.56c.36.54.779 1.05 1.24 1.52 1.86 1.86 4.44 2.93 7.07 2.93.65 0 1.31-.07 1.96-.2.63-.13 1.26-.32 1.87-.57a10.146 10.146 0 0 0 3.24-2.16c.47-.47.88-.98 1.25-1.52a10.098 10.098 0 0 0 1.49-3.6 10.038 10.038 0 0 0-2.74-9.03zM115.289 385.873c-.12-.64-.32-1.27-.57-1.87-.25-.6-.55-1.18-.91-1.73-.37-.54-.79-1.06-1.25-1.52a9.57 9.57 0 0 0-1.52-1.24c-.54-.36-1.12-.67-1.72-.92-.61-.25-1.24-.44-1.88-.57a9.847 9.847 0 0 0-3.9 0c-.64.13-1.27.32-1.87.57-.61.25-1.19.56-1.73.92-.55.36-1.06.78-1.52 1.24-.46.46-.88.98-1.24 1.52-.36.55-.67 1.13-.92 1.73-.25.6-.45 1.23-.57 1.87-.13.651-.2 1.3-.2 1.96 0 .65.07 1.3.2 1.95.12.64.32 1.27.57 1.87.25.6.56 1.18.92 1.73.36.54.78 1.06 1.24 1.52.46.46.97.88 1.52 1.24.54.36 1.12.67 1.73.92.6.25 1.23.44 1.87.57s1.3.2 1.95.2c.65 0 1.31-.07 1.95-.2.64-.13 1.27-.32 1.88-.57.6-.25 1.18-.56 1.72-.92.55-.36 1.059-.78 1.52-1.24.46-.46.88-.98 1.25-1.52.36-.55.66-1.13.91-1.73.25-.6.45-1.23.57-1.87.13-.65.2-1.3.2-1.95 0-.66-.07-1.31-.2-1.96z"/>\n      <path d="M511.999 222.726c0-14.215-9.228-26.315-22.007-30.624-1.628-74.155-62.456-133.978-136.994-133.978H159.002c-74.538 0-135.366 59.823-136.994 133.978C9.228 196.411 0 208.51 0 222.726a32.076 32.076 0 0 0 3.847 15.203 44.931 44.931 0 0 0-.795 8.427v.708c0 14.06 6.519 26.625 16.693 34.833-10.178 8.275-16.693 20.891-16.693 35.001 0 15.114 7.475 28.515 18.921 36.702v26.668c0 40.588 33.021 73.608 73.608 73.608h320.836c40.588 0 73.608-33.021 73.608-73.608V353.6c11.446-8.186 18.921-21.587 18.921-36.702 0-13.852-6.354-26.385-16.361-34.702 9.983-8.212 16.361-20.656 16.361-34.562v-.708c0-2.985-.294-5.944-.877-8.845a32.082 32.082 0 0 0 3.93-15.355zM44.033 173.229h322.441c5.523 0 10-4.477 10-10s-4.477-10-10-10H49.737c16.896-43.883 59.503-75.106 109.265-75.106h193.996c62.942 0 114.438 49.953 116.934 112.295H42.068c.234-5.848.9-11.588 1.965-17.189zM23.052 316.896c0-13.837 11.257-25.094 25.094-25.094h117.298l55.346 50.188H48.146c-13.837 0-25.094-11.256-25.094-25.094zm.976-62.945c.422.111.847.215 1.275.309 7.421 1.634 14.68 8.002 22.365 14.744a576.29 576.29 0 0 0 3.206 2.799h-3.081c-11.253-.001-20.774-7.551-23.765-17.852zm308.727 89.752l57.233-51.899 49.904.57-81.871 74.24-25.266-22.911zm7.861 34.126H295.12l17.467-15.839h10.563l17.466 15.839zm19.599-86.027l-82.499 74.811-82.499-74.811h164.998zm-59.529-20c.849-.842 1.677-1.675 2.49-2.493 9.531-9.587 17.059-17.16 32.89-17.16 15.832 0 23.359 7.573 32.89 17.162.812.817 1.64 1.65 2.489 2.491h-70.759zm-160.13 0a485.82 485.82 0 0 0 2.489-2.492c9.531-9.588 17.059-17.161 32.89-17.161 15.83 0 23.358 7.573 32.888 17.16.813.818 1.641 1.651 2.49 2.493h-70.757zm275.862 162.073H95.582c-29.56 0-53.608-24.049-53.608-53.608v-18.275h200.872l17.467 15.839H145.897c-5.523 0-10 4.477-10 10s4.477 10 10 10H467.07c-7.288 20.958-27.242 36.044-50.652 36.044zm53.608-56.046h-94.6l17.467-15.839h77.133v15.839zm-6.174-35.837h-48.906l54.624-49.533c11.135 2.604 19.376 12.665 19.376 24.439 0 13.836-11.257 25.094-25.094 25.094zm-2.728-70.19l.262-.227.101-.087.342-.298c.848-.738 1.682-1.469 2.501-2.187 4.105-3.601 8.089-7.095 12.04-9.819 3.446-2.375 6.868-4.164 10.326-4.925l.359-.081.04-.01.317-.076.065-.016a22.897 22.897 0 0 0 .42-.107l.196-.052a.374.374 0 0 0 .048-.012c-2.433 9.276-10.129 16.443-19.691 18.102a9.984 9.984 0 0 0-2.016-.205h-5.31zm21.271-37.073a40.746 40.746 0 0 0-4.536 1.281c-10.109 3.489-18.327 10.602-26.283 17.58l-.434.381c-9.178 8.052-17.923 15.723-29.033 17.834h-13.146c-11.249-1.93-17.833-8.552-25.823-16.591-10.213-10.275-22.923-23.062-47.074-23.062-24.15 0-36.86 12.786-47.074 23.06-7.992 8.04-14.576 14.663-25.829 16.593h-14.327c-11.253-1.93-17.837-8.553-25.829-16.593-10.213-10.274-22.923-23.06-47.072-23.06-24.151 0-36.861 12.787-47.074 23.062-7.991 8.039-14.574 14.661-25.824 16.591h-7.065c-14.134 0-24.325-8.939-35.113-18.404-9.248-8.112-18.81-16.501-31.252-19.241a12.237 12.237 0 0 1-7.025-4.453 10.027 10.027 0 0 0-1.153-1.252 12.234 12.234 0 0 1-1.428-5.727c-.001-6.788 5.52-12.309 12.307-12.309h447.384c6.787 0 12.308 5.521 12.308 12.308 0 5.729-4.039 10.776-9.605 12.002z"/>\n    </svg>\n    ',
  frequently: '\n    <svg\n      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 219.15 219.15" width="1em" height="1em">\n      <path d="M109.575 0C49.156 0 .001 49.155.001 109.574c0 60.42 49.154 109.576 109.573 109.576 60.42 0 109.574-49.156 109.574-109.576C219.149 49.155 169.995 0 109.575 0zm0 204.15c-52.148 0-94.573-42.427-94.573-94.576C15.001 57.426 57.427 15 109.575 15c52.148 0 94.574 42.426 94.574 94.574 0 52.15-42.426 94.576-94.574 94.576z"/>\n      <path d="M166.112 108.111h-52.051V51.249a7.5 7.5 0 0 0-15 0v64.362a7.5 7.5 0 0 0 7.5 7.5h59.551a7.5 7.5 0 0 0 0-15z"/>\n    </svg>\n    ',
  nature: '\n    <svg\n      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em">\n      <path d="M490.815 3.784C480.082 5.7 227.049 51.632 148.477 130.203c-39.153 39.153-64.259 87.884-70.694 137.218-5.881 45.081 4.347 85.929 28.878 116.708L.001 490.789 21.212 512l106.657-106.657c33.094 26.378 75.092 34.302 116.711 28.874 49.334-6.435 98.065-31.541 137.218-70.695C460.368 284.951 506.3 31.918 508.216 21.185L511.999 0l-21.184 3.784zm-43.303 39.493L309.407 181.383l-7.544-98.076c46.386-15.873 97.819-29.415 145.649-40.03zm-174.919 50.64l8.877 115.402-78.119 78.119-11.816-153.606c19.947-13.468 47.183-26.875 81.058-39.915zm-109.281 64.119l12.103 157.338-47.36 47.36c-39.246-52.892-24.821-139.885 35.257-204.698zm57.113 247.849c-26.548-.001-51.267-7.176-71.161-21.938l47.363-47.363 157.32 12.102c-40.432 37.475-89.488 57.201-133.522 57.199zm157.743-85.421l-153.605-11.816 78.118-78.118 115.403 8.877c-13.04 33.876-26.448 61.111-39.916 81.057zm50.526-110.326l-98.076-7.544L468.725 64.485c-10.589 47.717-24.147 99.232-40.031 145.653z"/>\n    </svg>\n    ',
  objects: '\n    <svg\n      xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 792 792">\n      <path d="M425.512 741.214H365.58c-14.183 0-25.164 11.439-25.164 25.622S351.397 792 365.58 792h59.932c15.101 0 26.54-10.981 26.54-25.164s-11.44-25.622-26.54-25.622zM472.638 671.209H319.821c-14.183 0-26.081 10.98-26.081 25.163s11.898 25.164 26.081 25.164h152.817c14.183 0 25.164-10.981 25.164-25.164s-10.982-25.163-25.164-25.163zM639.188 138.634c-25.164-42.548-59.181-76.135-102.49-101.113C493.526 12.621 446.566 0 395.771 0 320.28 0 247.19 31.684 197.205 81.445c-49.761 49.527-81.904 121.24-81.904 196.282 0 33.861 7.779 68.629 22.879 103.866 15.1 35.228 38.565 78.614 70.005 130.396 7.448 12.269 15.764 31.205 25.623 56.271 12.104 30.757 22.87 51.713 31.566 63.602 5.027 6.872 11.899 10.063 20.596 10.063h228.766c9.605 0 16.359-4.188 21.504-11.898 6.754-10.132 13.987-27.516 22.42-51.693 8.951-25.691 16.838-43.982 23.329-55.364 30.571-53.587 54.446-99.747 70.464-137.717 16.018-37.979 24.246-74.124 24.246-107.526 0-49.878-12.347-96.545-37.511-139.093zm-35.696 232.437c-15.012 34.348-36.398 76.974-65.427 126.736-9.41 16.125-18.458 37.003-26.989 63.592-3.367 10.474-7.32 20.596-11.439 30.2H300.153c-6.862-11.439-12.26-25.837-18.761-42.089-12.718-31.801-23.338-52.621-30.2-64.061-28.824-48.043-49.868-87.39-64.051-118.957s-20.537-60.859-21.044-88.766c-2.235-121.718 106.13-228.991 229.674-226.941 41.631.693 80.527 10.063 115.765 30.659 35.227 20.586 63.134 48.043 83.729 82.812 20.586 34.768 31.108 72.748 31.108 113.47-.001 27.449-7.692 58.596-22.881 93.345z"/>\n    </svg>\n    ',
  peoples: '\n    <svg\n      xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 106.059 106.059">\n      <path d="M90.544 90.542c20.687-20.684 20.685-54.341.002-75.024-20.688-20.689-54.347-20.689-75.031-.006-20.688 20.687-20.686 54.346.002 75.034 20.682 20.684 54.341 20.684 75.027-.004zM21.302 21.3c17.494-17.493 45.959-17.495 63.457.002 17.494 17.494 17.492 45.963-.002 63.455-17.494 17.494-45.96 17.496-63.455.003-17.498-17.498-17.496-45.966 0-63.46zM27 69.865s-2.958-11.438 6.705-8.874c0 0 17.144 9.295 38.651 0 9.662-2.563 6.705 8.874 6.705 8.874C73.539 86.824 53.03 85.444 53.03 85.444S32.521 86.824 27 69.865zm6.24-31.194a6.202 6.202 0 1 1 12.399.001 6.202 6.202 0 0 1-12.399-.001zm28.117 0a6.202 6.202 0 1 1 12.403.001 6.202 6.202 0 0 1-12.403-.001z"/>\n    </svg>\n    ',
  places: '\n    <svg\n      xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 611.999 611.998">\n      <path d="M596.583 15.454C586.226 5.224 573.354.523 558.423.523c-15.597 0-31.901 4.906-49.452 14.599-17.296 9.551-32.851 20.574-46.458 32.524h-.665c-2.655 2.322-10.953 10.287-25.219 24.553-14.272 14.272-26.217 26.223-35.845 36.51L112.401 26.406c-6.896-1.968-12.928.014-17.593 4.645L46.687 78.839c-4.326 4.297-5.805 9.268-4.977 15.597.829 6.287 3.979 10.627 9.629 13.607L280.32 228.839 161.514 347.978l-95.91 3.32c-4.645.164-8.637 1.643-12.276 5.311L5.872 404.397c-4.312 4.34-6.641 9.289-5.643 16.262 1.657 6.967 5.31 11.611 11.618 13.602l117.142 48.787 48.787 117.148c2.421 5.812 6.634 9.621 13.607 11.279h3.313c4.977 0 9.296-1.658 12.942-5.311l47.456-47.457c3.653-3.645 5.494-7.965 5.643-12.275l3.32-95.91 118.807-118.807 121.128 228.99c2.988 5.643 7.32 8.793 13.607 9.621 6.329.836 11.271-1.316 15.597-5.643l47.456-47.457c4.978-4.977 6.945-10.697 4.978-17.586l-82.296-288.389 59.732-59.739c10.287-10.287 21.699-24.149 33.183-45.134 5.777-10.542 10.032-20.886 12.942-31.194 5.722-20.218 3.258-44.07-12.608-59.73zm-59.4 110.176l-67.039 67.372c-5.628 5.657-6.811 11.122-4.977 17.586l81.637 288.388-22.563 22.238L403.438 292.89c-2.98-5.643-7.299-8.963-12.941-9.621-6.301-1.331-11.611.325-16.263 4.977l-141.37 141.37c-2.987 2.986-4.644 6.973-5.643 11.949l-3.32 95.904-22.896 23.236-41.48-98.566c-1.331-4.645-4.553-8.184-9.629-10.287L51.338 411.03l23.229-22.895 95.578-3.654c5.643-.99 9.622-2.654 12.276-5.309l141.37-141.371c4.651-4.645 6.308-9.954 4.984-16.262-.666-5.643-3.986-9.954-9.629-12.942L90.829 87.47l22.231-22.238 288.389 81.637c6.464 1.833 11.951.666 17.587-4.977l28.545-28.539 26.217-25.884 11.278-11.285 1.331-.666c27.873-23.895 55.088-38.16 72.016-38.16 5.969 0 9.954 1.324 11.611 3.979 18.917 18.585-21.099 72.484-32.851 84.293z"/>\n    </svg>\n    ',
  symbols: '\n    <svg\n      xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 511.626 511.626">\n      <path d="M475.366 71.949c-24.175-23.606-57.575-35.404-100.215-35.404-11.8 0-23.843 2.046-36.117 6.136-12.279 4.093-23.702 9.615-34.256 16.562-10.568 6.945-19.65 13.467-27.269 19.556a263.828 263.828 0 0 0-21.696 19.414 264.184 264.184 0 0 0-21.698-19.414c-7.616-6.089-16.702-12.607-27.268-19.556-10.564-6.95-21.985-12.468-34.261-16.562-12.275-4.089-24.316-6.136-36.116-6.136-42.637 0-76.039 11.801-100.211 35.404C12.087 95.55 0 128.286 0 170.16c0 12.753 2.24 25.891 6.711 39.398 4.471 13.514 9.566 25.031 15.275 34.546 5.708 9.514 12.181 18.792 19.414 27.834 7.233 9.041 12.519 15.272 15.846 18.698 3.33 3.426 5.948 5.903 7.851 7.427L243.25 469.938c3.427 3.426 7.614 5.144 12.562 5.144s9.138-1.718 12.563-5.144l177.87-171.31c43.588-43.58 65.38-86.406 65.38-128.472.001-41.877-12.085-74.61-36.259-98.207zm-53.961 199.846L255.813 431.391 89.938 271.507C54.344 235.922 36.55 202.133 36.55 170.156c0-15.415 2.046-29.026 6.136-40.824 4.093-11.8 9.327-21.177 15.703-28.124 6.377-6.949 14.132-12.607 23.268-16.988 9.141-4.377 18.086-7.328 26.84-8.85 8.754-1.52 18.079-2.281 27.978-2.281 9.896 0 20.557 2.424 31.977 7.279 11.418 4.853 21.934 10.944 31.545 18.271 9.613 7.332 17.845 14.183 24.7 20.557 6.851 6.38 12.559 12.229 17.128 17.559 3.424 4.189 8.091 6.283 13.989 6.283 5.9 0 10.562-2.094 13.99-6.283 4.568-5.33 10.28-11.182 17.131-17.559 6.852-6.374 15.085-13.222 24.694-20.557 9.613-7.327 20.129-13.418 31.553-18.271 11.416-4.854 22.08-7.279 31.977-7.279s19.219.761 27.977 2.281c8.757 1.521 17.702 4.473 26.84 8.85 9.137 4.38 16.892 10.042 23.267 16.988 6.376 6.947 11.612 16.324 15.705 28.124 4.086 11.798 6.132 25.409 6.132 40.824-.002 31.977-17.89 65.86-53.675 101.639z"/>\n    </svg>\n    '
}, de = () => [
  new x("frequently", E.frequently, "常用"),
  new x("peoples", E.peoples, "情绪"),
  new x("nature", E.nature, "自然"),
  new x("foods", E.foods, "食物与饮料"),
  new x("activity", E.activity, "活动"),
  new x("objects", E.objects, "对象"),
  new x("places", E.places, "旅行与地方"),
  new x("symbols", E.symbols, "符号"),
  new x("flags", E.flags, "旗帜")
], ge = () => i("svg", {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg",
  height: "1em",
  width: "1em",
  focusable: "false"
}, [i("g", {
  "stroke-width": "1"
}, [i("path", {
  d: "M6.751 12.303A5.557 5.557 0 0 1 1.2 6.751C1.2 3.691 3.69 1.2 6.751 1.2a5.558 5.558 0 0 1 5.551 5.551 5.557 5.557 0 0 1-5.551 5.552M6.751 0a6.751 6.751 0 1 0 4.309 11.949l3.855 3.855a.6.6 0 1 0 .849-.849l-3.854-3.853A6.751 6.751 0 0 0 6.751 0"
}, null)])]);
const he = /* @__PURE__ */ L({
  name: "IBizCategories",
  props: {
    categories: {
      type: Array,
      required: !0,
      default: () => []
    },
    current: {
      type: String,
      required: !0
    }
  },
  emits: ["select"],
  setup(n, {
    emit: t
  }) {
    return {
      ns: M("emoji-categories"),
      onSelect: (l) => {
        t("select", l);
      }
    };
  },
  render() {
    return i("div", {
      class: this.ns.b()
    }, [this.categories.map((n) => i("div", {
      class: [this.ns.e("category"), this.ns.is("active", n.name === this.current)],
      onClick: () => this.onSelect(n)
    }, [i("span", {
      class: this.ns.em("category", "svg"),
      title: n.label,
      innerHTML: n.icon
    }, null)]))]);
  }
});
const fe = /* @__PURE__ */ L({
  name: "IBizCategoryLabel",
  props: {
    name: {
      type: String,
      default: ""
    }
  },
  emits: ["select"],
  setup() {
    return {
      ns: M("emoji-category-label")
    };
  },
  render() {
    return i("div", {
      class: this.ns.b()
    }, [this.name]);
  }
});
const ye = /* @__PURE__ */ L({
  name: "IBizEmojiItem",
  props: {
    emoji: {
      type: Object,
      required: !0,
      default: () => {
      }
    },
    size: {
      type: Number,
      required: !0
    },
    withBorder: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["click"],
  setup(n, {
    emit: t
  }) {
    const o = M("emoji-item"), a = S(() => ({
      fontSize: "".concat(n.size - 5, "px"),
      lineHeight: "".concat(n.size, "px"),
      height: "".concat(n.size, "px"),
      width: "".concat(n.size, "px")
    }));
    return {
      ns: o,
      styleSize: a,
      onClick: () => {
        t("click", n.emoji);
      }
    };
  },
  render() {
    return i("span", {
      class: [this.ns.b(), this.ns.is("border", this.withBorder)],
      style: this.styleSize,
      onClick: this.onClick,
      innerHTML: this.emoji.data
    }, null);
  }
});
const K = (n, t) => {
  const o = (a) => a.toLowerCase().includes(n);
  return t.aliases.some((a) => o(a));
}, ve = /* @__PURE__ */ L({
  name: "IBizEmojiList",
  props: {
    data: {
      type: Object,
      required: !0
    },
    emojisByRow: {
      type: Number,
      required: !0
    },
    emojiWithBorder: {
      type: Boolean
    },
    emojiSize: {
      type: Number
    },
    filter: {
      type: String,
      default: ""
    },
    continuousList: {
      type: Boolean
    },
    category: {
      type: String,
      default: ""
    },
    categories: {
      type: Object,
      required: !0,
      default: () => {
      }
    },
    hasSearch: {
      type: Boolean
    }
  },
  emits: ["select", "data"],
  setup(n, {
    emit: t
  }) {
    const o = M("emoji-list"), a = u({}), l = u({}), p = S(() => {
      let m = n.data[n.category];
      const b = n.filter.trim().toLowerCase();
      return b && (m = m.filter((y) => K(b, y))), m;
    }), r = S(() => Object.keys(n.data)), d = (m, b) => {
      b && (l.value[m] = b);
    }, h = () => n.hasSearch ? 88 : 44, f = S(() => {
      const m = 100 / n.emojisByRow;
      return {
        gridTemplateColumns: "repeat(".concat(n.emojisByRow, ", ").concat(m, "%)")
      };
    }), _ = S(() => {
      const m = {};
      Object.assign(m, n.data);
      const b = n.filter.trim().toLowerCase();
      return b && r.value.forEach((y) => {
        m[y] = n.data[y].filter((C) => K(b, C));
      }), m;
    }), v = (m) => {
      t("select", m);
    };
    return j(() => n.data, () => {
      a.value.$el.scrollTop = 0;
    }), j(() => n.category, (m) => {
      if (n.continuousList) {
        const b = l.value[m].$el;
        a.value.scrollTop = b.offsetTop - h();
      }
    }), {
      ns: o,
      emojisRef: a,
      gridDynamic: f,
      dataFiltered: p,
      dataFilteredByCategory: _,
      onSelect: v,
      setCategoryRef: d,
      renderGridEmojis: (m) => {
        const {
          emojis: b,
          style: y,
          size: C,
          withBorder: q
        } = m;
        return b && b.length > 0 ? i("div", {
          class: [o.m("grid-emojis")],
          style: y
        }, [b.map((A) => i(ye, {
          emoji: A,
          size: C,
          withBorder: q,
          onClick: () => v(A)
        }, null))]) : "";
      }
    };
  },
  render() {
    return i("div", {
      class: [this.ns.b()]
    }, [i("div", {
      ref: "emojisRef",
      class: [this.ns.e("container")]
    }, [this.continuousList ? Object.keys(this.dataFilteredByCategory).map((n) => {
      const t = this.dataFilteredByCategory[n], o = this.categories[n], a = o ? o.text : n;
      return i("div", null, [t.length ? i(fe, {
        name: a,
        ref: (l) => this.setCategoryRef(n, l)
      }, null) : "", this.renderGridEmojis({
        emojis: t,
        style: this.gridDynamic,
        size: this.emojiSize,
        withBorder: this.emojiWithBorder
      })]);
    }) : this.renderGridEmojis({
      emojis: this.dataFiltered || [],
      style: this.gridDynamic,
      size: this.emojiSize,
      withBorder: this.emojiWithBorder
    })])]);
  }
});
const je = /* @__PURE__ */ L({
  name: "IBizInputSearch",
  emits: ["update"],
  setup(n, {
    emit: t
  }) {
    const o = M("emoji-input-search"), a = u(""), l = () => {
      t("update", a.value);
    };
    return {
      ns: o,
      inputSearch: a,
      onSearch: l,
      handleKeyUp: (r) => {
        r && r.code === "Enter" && l();
      }
    };
  },
  render() {
    return i("div", {
      class: [this.ns.b()]
    }, [i("div", {
      class: this.ns.e("container"),
      onKeyup: this.handleKeyUp
    }, [i("div", {
      class: this.ns.em("container", "search"),
      onClick: this.onSearch
    }, [ge()]), we(i("input", {
      class: this.ns.em("container", "input"),
      type: "text",
      "onUpdate:modelValue": (n) => this.inputSearch = n,
      placeholder: ibiz.i18n.t("app.search")
    }, null), [[re, this.inputSearch]])])]);
  }
});
const ke = /* @__PURE__ */ L({
  name: "IBizEmojiSelectEmojiTitle",
  props: {
    // 自定义表情符号数组，类型为IEmoji[]，必填项，默认值为emojisDefault
    customEmojis: {
      type: Array,
      required: !0,
      default: () => be
    },
    // 自定义分类数组，类型为ICategory[]，必填项，默认值为categoriesDefault
    customCategories: {
      type: Array,
      required: !0,
      default: () => []
    },
    // 频繁使用表情符号的数量限制
    limitFrequently: {
      type: Number,
      default: 15
    },
    // 每行显示的表情符号数量
    emojisByRow: {
      type: Number,
      default: 8
    },
    // 是否使用连续列表显示表情符号
    continuousList: {
      type: Boolean,
      default: !1
    },
    // 表情符号的大小
    emojiSize: {
      type: Number,
      default: 27
    },
    // 表情符号是否带有边框
    emojiWithBorder: {
      type: Boolean,
      default: !0
    },
    // 是否显示搜索框
    showSearch: {
      type: Boolean,
      default: !0
    },
    // 是否显示分类
    showCategories: {
      type: Boolean,
      default: !0
    },
    // 是否使用深色模式
    dark: {
      type: Boolean,
      default: !1
    },
    // 初始选择的分类
    initialCategory: {
      type: String,
      default: "peoples"
    },
    // 需要排除的分类数组
    exceptCategories: {
      type: Array,
      default: () => []
    },
    // 需要排除的表情符号数组
    exceptEmojis: {
      type: Array,
      default: () => []
    }
  },
  emits: ["select", "changeCategory", "customEmojis"],
  setup(n, {
    emit: t
  }) {
    const o = M("emoji-select"), a = u([]), l = u([]), p = u("peoples"), r = u([]), d = u([]), h = u([]), f = u({}), _ = u({}), v = u("");
    v.value = p.value;
    const I = u(""), m = l.value.map((w) => w.name);
    m.includes(p.value) || (p.value = m[0]);
    const b = async (w) => {
      I.value = w;
    }, y = S(() => l.value.filter((w) => !r.value.includes(w))), C = (w) => {
      w.forEach((g) => {
        Object.assign(f.value, {
          [g.name]: g
        });
      });
    }, q = (w) => {
      Object.assign(_.value, {
        frequently: []
      }), w.filter((g) => !d.value.includes(g)).forEach((g) => {
        const k = g.category;
        _.value[k] || Object.assign(_.value, {
          [k]: []
        }), _.value[k].push(g);
      });
    }, A = async () => {
      const w = h.value || [];
      Object.assign(_.value, {
        frequently: w.map((g) => a.value[g])
      });
    }, P = (w) => {
      const g = w.map((k) => a.value.indexOf(k));
      h.value = g;
    }, B = async (w) => {
      const g = _.value.frequently, k = [.../* @__PURE__ */ new Set([w, ...g])];
      _.value.frequently = k.slice(0, n.limitFrequently), P(k);
    }, F = async (w) => {
      const g = _.value[w.name].length;
      v.value = w.name, g && t("changeCategory", w);
    }, D = async (w) => {
      await B(w), t("select", w);
    };
    return j(() => n.customEmojis, (w) => {
      a.value = n.customEmojis, w && w.length && (_.value = {}, q(w));
    }, {
      immediate: !0,
      deep: !0
    }), j(() => n.customCategories, (w) => {
      w && w.length > 0 ? l.value = w : l.value = de(), C(l.value);
    }, {
      immediate: !0,
      deep: !0
    }), j(() => n.initialCategory, () => {
      p.value = n.initialCategory;
    }), j(() => n.exceptCategories, () => {
      r.value = n.exceptCategories;
    }), j(() => n.exceptEmojis, () => {
      d.value = n.exceptEmojis;
    }), $(() => {
      q(a.value), A();
    }), ce(() => {
      _.value = {}, h.value = [];
    }), {
      ns: o,
      mapEmojis: _,
      filterEmoji: I,
      mapCategories: f,
      currentCategory: v,
      categoriesFiltered: y,
      onSearch: b,
      onSelectEmoji: D,
      changeCategory: F
    };
  },
  render() {
    return i("div", {
      class: [this.ns.b(), this.ns.is("dark", this.dark)]
    }, [this.showCategories && i(he, {
      categories: this.categoriesFiltered,
      current: this.currentCategory,
      onSelect: this.changeCategory
    }, null), this.showSearch && i(je, {
      onUpdate: this.onSearch
    }, null), i(ve, {
      data: this.mapEmojis,
      category: this.currentCategory,
      filter: this.filterEmoji,
      categories: this.mapCategories,
      emojiWithBorder: this.emojiWithBorder,
      emojiSize: this.emojiSize,
      emojisByRow: this.emojisByRow,
      continuousList: this.continuousList,
      hasSearch: this.showSearch,
      onSelect: this.onSelectEmoji
    }, null)]);
  }
});
function ze(n) {
  return typeof n == "function" || Object.prototype.toString.call(n) === "[object Object]" && !me(n);
}
const N = /* @__PURE__ */ L({
  name: "IBizEmojiInput",
  props: Y(),
  emits: Z(),
  setup(n, {
    emit: t
  }) {
    const o = M("emoji-input"), a = n.controller, l = u(""), p = u([]), r = u(!1), d = u(""), h = u(!1), f = u(!1), _ = u(), v = u(!1);
    let I = null;
    const m = u(!1), b = S(() => !!(n.controlParams && n.controlParams.editmode === "hover" && !n.readonly));
    j(() => n.value, (s) => {
      (s || s === null) && (a.model.valueType === "OBJECT" ? l.value = s ? s[a.objectNameField] : null : l.value = s, s === null && (l.value = ""));
    }, {
      immediate: !0
    }), j(_, (s) => {
      n.autoFocus && s && s.focus && s.focus();
    });
    const y = async (s) => {
      if (r.value)
        if (a.model.appDataEntityId && v.value === !1) {
          v.value = !0;
          try {
            let z = "";
            s !== n.value && (z = s.trim());
            const U = await a.getServiceData(z, n.data);
            U && (p.value = U.data);
          } finally {
            if (v.value = !1, m.value = !0, I != null) {
              const z = I;
              I = null, await y(z);
            }
          }
        } else
          I = s;
    };
    $(() => {
      j(() => n.data[a.valueItem], async (s, z) => {
        s !== z && (!m.value && _.value && ie(n.value) && (r.value = !0, await y("")), d.value = s ? decodeURIComponent(atob(s)) : "", s === null && t("change", null));
      }, {
        immediate: !0,
        deep: !0
      });
    });
    const C = (s) => {
      s ? f.value = s : setTimeout(() => {
        f.value = s;
      }, 100);
    }, q = (s) => {
      s.stopPropagation(), s.preventDefault(), h.value = !0;
    }, A = (s) => {
      s.stopPropagation(), s.preventDefault(), d.value = "", h.value = !1, Object.assign(n.data, {
        [a.valueItem]: ""
      });
    }, P = (s) => {
      t("change", btoa(encodeURIComponent(s.data)), a.valueItem), h.value = !1;
    };
    let B;
    const F = (s) => {
      B !== s && t("change", s), B = void 0;
    }, D = (s) => {
      s && s.code === "Enter" && (t("enter", s), _.value.$el.dispatchEvent(s));
    }, w = (s) => {
      B = s.target.value, B !== n.value && t("change", B), t("blur", s), C(!1);
    }, g = (s) => {
      s && (p.value = [], y(""));
    }, k = () => {
      const {
        dataItems: s
      } = a;
      s != null && s.length && s.forEach((z) => {
        t("change", null, z.id);
      }), a.valueItem && t("change", null, a.valueItem), t("change", null);
    }, W = (s) => {
      r.value = !0, t("focus", s), C(!0);
    }, G = () => {
      r.value = !0;
    }, T = S(() => ee(l.value));
    j(T, (s, z) => {
      s !== z && t("infoTextChange", s);
    }, {
      immediate: !0
    });
    const X = () => {
      let s = i("span", {
        class: [o.e("button-content")],
        onClick: q
      }, [i("svg", {
        class: o.em("button-content", "icon"),
        viewBox: "0 0 1040 1024",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "p-id": "1490",
        width: "1em",
        height: "1em"
      }, [i("path", {
        d: "M512.075261 1024A511.774217 511.774217 0 1 1 730.482434 48.769072a37.630457 37.630457 0 1 1-32.061149 68.035867 436.513303 436.513303 0 1 0 250.468323 395.270322 37.630457 37.630457 0 0 1 75.260914 0 512.526826 512.526826 0 0 1-512.075261 511.924739z",
        "p-id": "1491"
      }, null), i("path", {
        d: "M333.857416 344.0929a57.348817 57.348817 0 1 0 57.348817 57.348817 57.499339 57.499339 0 0 0-57.348817-57.348817zM686.53006 344.0929a57.348817 57.348817 0 1 0 57.348817 57.348817 57.348817 57.348817 0 0 0-57.348817-57.348817zM515.236219 783.165074c-162.864619 0-262.359547-141.942084-262.359547-219.159782a30.104366 30.104366 0 0 1 60.208731 0c0 48.618551 76.314567 158.951051 202.150816 158.951051s193.571072-134.114949 193.571072-158.951051a30.104366 30.104366 0 0 1 60.208731 0c0 54.488902-90.012054 219.159782-253.779803 219.159782zM1009.549904 207.720123h-67.132735V139.985301a30.104366 30.104366 0 1 0-60.208732 0v67.734822h-67.734822a30.104366 30.104366 0 0 0-30.104366 30.104366 30.104366 30.104366 0 0 0 30.104366 30.104366h67.734822v67.734823a30.104366 30.104366 0 0 0 60.208732 0v-67.734823h67.734823a30.104366 30.104366 0 0 0 30.104365-30.104366 30.104366 30.104366 0 0 0-30.706453-30.104366z",
        "p-id": "1492"
      }, null)])]);
      return d.value && (s = i("span", {
        class: [o.e("button-content")]
      }, [i("svg", {
        class: o.em("button-content", "icon"),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024",
        width: "1em",
        height: "1em",
        onClick: A
      }, [i("path", {
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      }, null)]), i("span", {
        innerHTML: d.value
      }, null)])), s;
    }, R = () => {
      let s;
      return i(V("el-button"), {
        class: [o.e("button"), o.is("clear", !!d.value)]
      }, ze(s = X()) ? s : {
        default: () => [s]
      });
    };
    return {
      ns: o,
      c: a,
      emoji: d,
      curValue: l,
      valueText: T,
      loading: v,
      items: p,
      visible: h,
      onOpenChange: g,
      onClear: k,
      onEmojiSelect: P,
      renderEmojiSelect: () => i(V("el-popover"), {
        trigger: "click",
        placement: "bottom-start",
        width: "auto",
        visible: h.value,
        "onUpdate:visible": (s) => h.value = s,
        "hide-after": 0,
        "popper-class": [o.b("emoji-popper")]
      }, {
        reference: () => i("div", {
          class: [o.be("emoji", "reference"), o.is("no-emoji", !!d.value)]
        }, [R()]),
        default: () => i(ke, {
          continuousList: !0,
          dark: !0,
          onSelect: P
        }, null)
      }),
      onSearch: y,
      onFocus: W,
      onBlur: w,
      onClick: G,
      handleInputChange: F,
      handleKeyUp: D,
      editorRef: _,
      isEditable: f,
      setEditable: C,
      renderReference: R,
      showFormDefaultContent: b
    };
  },
  render() {
    const n = this.readonly ? this.value : i(V("el-input"), pe({
      ref: "editorRef",
      class: this.ns.e("input"),
      modelValue: this.curValue,
      "onUpdate:modelValue": (a) => this.curValue = a,
      placeholder: this.c.placeHolder,
      type: "text",
      resize: "none",
      onChange: this.handleInputChange,
      onKeyup: this.handleKeyUp,
      onBlur: this.onBlur,
      onFocus: this.onFocus,
      disabled: this.disabled
    }, this.$attrs), {
      prepend: () => this.renderEmojiSelect()
    }), t = i("div", {
      class: (this.ns.b(), this.ns.m("readonly"))
    }, [this.valueText]), o = i("div", {
      class: this.ns.b("form-default-content")
    }, [this.curValue ? this.valueText : "-"]);
    return i("div", {
      class: [this.ns.b(), this.disabled ? this.ns.m("disabled") : "", this.readonly ? this.ns.m("readonly") : "", this.ns.is("editable", this.isEditable), this.ns.is("show-default", this.showFormDefaultContent)]
    }, [this.showFormDefaultContent && o, this.readonly ? t : n]);
  }
}), Ce = ne(N, function(n) {
  n.component(N.name, N), te(
    "EDITOR_CUSTOMSTYLE_EMOJI_INPUT",
    () => new _e()
  );
}), qe = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(n) {
    n.use(Ce);
  }
};
export {
  Ce as IBizEmojiInput,
  qe as default
};
