import './style.css';
var Nl = Object.defineProperty;
var wl = (r, t, e) => t in r ? Nl(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var A = (r, t, e) => (wl(r, typeof t != "symbol" ? t + "" : t, e), e);
import { getHtmlProps as Al, getEditorEmits as xl, useNamespace as Mr, withInstall as Ll } from "@ibiz-template/vue3-util";
import { ScriptFactory as ln, EditorController as Tl, ControllerEvent as ql, getViewLogics as Cl, getUIActionById as Sl, OpenAppViewCommand as kl, registerEditorProvider as Ol } from "@ibiz-template/runtime";
import { isEqual as Br, cloneDeep as Be, merge as ee } from "lodash-es";
import { RuntimeError as Ri, CoreConst as Il, base64ToBlob as Rl } from "@ibiz-template/core";
import { defineComponent as Dr, ref as at, watch as nr, onMounted as _l, onUnmounted as Ml, createVNode as U, resolveComponent as Xt, computed as rr } from "vue";
import { getCookie as Bl } from "qx-util";
var k = /* @__PURE__ */ ((r) => (r[r.TYPE = 3] = "TYPE", r[r.LEVEL = 12] = "LEVEL", r[r.ATTRIBUTE = 13] = "ATTRIBUTE", r[r.BLOT = 14] = "BLOT", r[r.INLINE = 7] = "INLINE", r[r.BLOCK = 11] = "BLOCK", r[r.BLOCK_BLOT = 10] = "BLOCK_BLOT", r[r.INLINE_BLOT = 6] = "INLINE_BLOT", r[r.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", r[r.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", r[r.ANY = 15] = "ANY", r))(k || {});
class Bt {
  constructor(t, e, s = {}) {
    this.attrName = t, this.keyName = e;
    const n = k.TYPE & k.ATTRIBUTE;
    this.scope = s.scope != null ? (
      // Ignore type bits, force attribute bit
      s.scope & k.LEVEL | n
    ) : k.ATTRIBUTE, s.whitelist != null && (this.whitelist = s.whitelist);
  }
  static keys(t) {
    return Array.from(t.attributes).map((e) => e.name);
  }
  add(t, e) {
    return this.canAdd(t, e) ? (t.setAttribute(this.keyName, e), !0) : !1;
  }
  canAdd(t, e) {
    return this.whitelist == null ? !0 : typeof e == "string" ? this.whitelist.indexOf(e.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(e) > -1;
  }
  remove(t) {
    t.removeAttribute(this.keyName);
  }
  value(t) {
    const e = t.getAttribute(this.keyName);
    return this.canAdd(t, e) && e ? e : "";
  }
}
class De extends Error {
  constructor(t) {
    t = "[Parchment] " + t, super(t), this.message = t, this.name = this.constructor.name;
  }
}
const _i = class gr {
  constructor() {
    this.attributes = {}, this.classes = {}, this.tags = {}, this.types = {};
  }
  static find(t, e = !1) {
    if (t == null)
      return null;
    if (this.blots.has(t))
      return this.blots.get(t) || null;
    if (e) {
      let s = null;
      try {
        s = t.parentNode;
      } catch (n) {
        return null;
      }
      return this.find(s, e);
    }
    return null;
  }
  create(t, e, s) {
    const n = this.query(e);
    if (n == null)
      throw new De("Unable to create ".concat(e, " blot"));
    const i = n, o = (
      // @ts-expect-error Fix me later
      e instanceof Node || e.nodeType === Node.TEXT_NODE ? e : i.create(s)
    ), a = new i(t, o, s);
    return gr.blots.set(a.domNode, a), a;
  }
  find(t, e = !1) {
    return gr.find(t, e);
  }
  query(t, e = k.ANY) {
    let s;
    return typeof t == "string" ? s = this.types[t] || this.attributes[t] : t instanceof Text || t.nodeType === Node.TEXT_NODE ? s = this.types.text : typeof t == "number" ? t & k.LEVEL & k.BLOCK ? s = this.types.block : t & k.LEVEL & k.INLINE && (s = this.types.inline) : t instanceof Element && ((t.getAttribute("class") || "").split(/\s+/).some((n) => (s = this.classes[n], !!s)), s = s || this.tags[t.tagName]), s == null ? null : "scope" in s && e & k.LEVEL & s.scope && e & k.TYPE & s.scope ? s : null;
  }
  register(...t) {
    return t.map((e) => {
      const s = "blotName" in e, n = "attrName" in e;
      if (!s && !n)
        throw new De("Invalid definition");
      if (s && e.blotName === "abstract")
        throw new De("Cannot register abstract class");
      const i = s ? e.blotName : n ? e.attrName : void 0;
      return this.types[i] = e, n ? typeof e.keyName == "string" && (this.attributes[e.keyName] = e) : s && (e.className && (this.classes[e.className] = e), e.tagName && (Array.isArray(e.tagName) ? e.tagName = e.tagName.map((o) => o.toUpperCase()) : e.tagName = e.tagName.toUpperCase(), (Array.isArray(e.tagName) ? e.tagName : [e.tagName]).forEach((o) => {
        (this.tags[o] == null || e.className == null) && (this.tags[o] = e);
      }))), e;
    });
  }
};
_i.blots = /* @__PURE__ */ new WeakMap();
let Pe = _i;
function ei(r, t) {
  return (r.getAttribute("class") || "").split(/\s+/).filter((e) => e.indexOf("".concat(t, "-")) === 0);
}
class Dl extends Bt {
  static keys(t) {
    return (t.getAttribute("class") || "").split(/\s+/).map((e) => e.split("-").slice(0, -1).join("-"));
  }
  add(t, e) {
    return this.canAdd(t, e) ? (this.remove(t), t.classList.add("".concat(this.keyName, "-").concat(e)), !0) : !1;
  }
  remove(t) {
    ei(t, this.keyName).forEach((e) => {
      t.classList.remove(e);
    }), t.classList.length === 0 && t.removeAttribute("class");
  }
  value(t) {
    const e = (ei(t, this.keyName)[0] || "").slice(this.keyName.length + 1);
    return this.canAdd(t, e) ? e : "";
  }
}
const qt = Dl;
function ir(r) {
  const t = r.split("-"), e = t.slice(1).map((s) => s[0].toUpperCase() + s.slice(1)).join("");
  return t[0] + e;
}
class Ul extends Bt {
  static keys(t) {
    return (t.getAttribute("style") || "").split(";").map((e) => e.split(":")[0].trim());
  }
  add(t, e) {
    return this.canAdd(t, e) ? (t.style[ir(this.keyName)] = e, !0) : !1;
  }
  remove(t) {
    t.style[ir(this.keyName)] = "", t.getAttribute("style") || t.removeAttribute("style");
  }
  value(t) {
    const e = t.style[ir(this.keyName)];
    return this.canAdd(t, e) ? e : "";
  }
}
const se = Ul;
class Pl {
  constructor(t) {
    this.attributes = {}, this.domNode = t, this.build();
  }
  attribute(t, e) {
    e ? t.add(this.domNode, e) && (t.value(this.domNode) != null ? this.attributes[t.attrName] = t : delete this.attributes[t.attrName]) : (t.remove(this.domNode), delete this.attributes[t.attrName]);
  }
  build() {
    this.attributes = {};
    const t = Pe.find(this.domNode);
    if (t == null)
      return;
    const e = Bt.keys(this.domNode), s = qt.keys(this.domNode), n = se.keys(this.domNode);
    e.concat(s).concat(n).forEach((i) => {
      const o = t.scroll.query(i, k.ATTRIBUTE);
      o instanceof Bt && (this.attributes[o.attrName] = o);
    });
  }
  copy(t) {
    Object.keys(this.attributes).forEach((e) => {
      const s = this.attributes[e].value(this.domNode);
      t.format(e, s);
    });
  }
  move(t) {
    this.copy(t), Object.keys(this.attributes).forEach((e) => {
      this.attributes[e].remove(this.domNode);
    }), this.attributes = {};
  }
  values() {
    return Object.keys(this.attributes).reduce(
      (t, e) => (t[e] = this.attributes[e].value(this.domNode), t),
      {}
    );
  }
}
const on = Pl, Mi = class {
  constructor(t, e) {
    this.scroll = t, this.domNode = e, Pe.blots.set(e, this), this.prev = null, this.next = null;
  }
  static create(t) {
    if (this.tagName == null)
      throw new De("Blot definition missing tagName");
    let e, s;
    return Array.isArray(this.tagName) ? (typeof t == "string" ? (s = t.toUpperCase(), parseInt(s, 10).toString() === s && (s = parseInt(s, 10))) : typeof t == "number" && (s = t), typeof s == "number" ? e = document.createElement(this.tagName[s - 1]) : s && this.tagName.indexOf(s) > -1 ? e = document.createElement(s) : e = document.createElement(this.tagName[0])) : e = document.createElement(this.tagName), this.className && e.classList.add(this.className), e;
  }
  // Hack for accessing inherited static methods
  get statics() {
    return this.constructor;
  }
  attach() {
  }
  clone() {
    const t = this.domNode.cloneNode(!1);
    return this.scroll.create(t);
  }
  detach() {
    this.parent != null && this.parent.removeChild(this), Pe.blots.delete(this.domNode);
  }
  deleteAt(t, e) {
    this.isolate(t, e).remove();
  }
  formatAt(t, e, s, n) {
    const i = this.isolate(t, e);
    if (this.scroll.query(s, k.BLOT) != null && n)
      i.wrap(s, n);
    else if (this.scroll.query(s, k.ATTRIBUTE) != null) {
      const o = this.scroll.create(this.statics.scope);
      i.wrap(o), o.format(s, n);
    }
  }
  insertAt(t, e, s) {
    const n = s == null ? this.scroll.create("text", e) : this.scroll.create(e, s), i = this.split(t);
    this.parent.insertBefore(n, i || void 0);
  }
  isolate(t, e) {
    const s = this.split(t);
    if (s == null)
      throw new Error("Attempt to isolate at end");
    return s.split(e), s;
  }
  length() {
    return 1;
  }
  offset(t = this.parent) {
    return this.parent == null || this === t ? 0 : this.parent.children.offset(this) + this.parent.offset(t);
  }
  optimize(t) {
    this.statics.requiredContainer && !(this.parent instanceof this.statics.requiredContainer) && this.wrap(this.statics.requiredContainer.blotName);
  }
  remove() {
    this.domNode.parentNode != null && this.domNode.parentNode.removeChild(this.domNode), this.detach();
  }
  replaceWith(t, e) {
    const s = typeof t == "string" ? this.scroll.create(t, e) : t;
    return this.parent != null && (this.parent.insertBefore(s, this.next || void 0), this.remove()), s;
  }
  split(t, e) {
    return t === 0 ? this : this.next;
  }
  update(t, e) {
  }
  wrap(t, e) {
    const s = typeof t == "string" ? this.scroll.create(t, e) : t;
    if (this.parent != null && this.parent.insertBefore(s, this.next || void 0), typeof s.appendChild != "function")
      throw new De("Cannot wrap ".concat(t));
    return s.appendChild(this), s;
  }
};
Mi.blotName = "abstract";
let Bi = Mi;
const Di = class extends Bi {
  /**
   * Returns the value represented by domNode if it is this Blot's type
   * No checking that domNode can represent this Blot type is required so
   * applications needing it should check externally before calling.
   */
  static value(t) {
    return !0;
  }
  /**
   * Given location represented by node and offset from DOM Selection Range,
   * return index to that location.
   */
  index(t, e) {
    return this.domNode === t || this.domNode.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(e, 1) : -1;
  }
  /**
   * Given index to location within blot, return node and offset representing
   * that location, consumable by DOM Selection Range
   */
  position(t, e) {
    let s = Array.from(this.parent.domNode.childNodes).indexOf(this.domNode);
    return t > 0 && (s += 1), [this.parent.domNode, s];
  }
  /**
   * Return value represented by this blot
   * Should not change without interaction from API or
   * user change detectable by update()
   */
  value() {
    return {
      [this.statics.blotName]: this.statics.value(this.domNode) || !0
    };
  }
};
Di.scope = k.INLINE_BLOT;
let jl = Di;
const et = jl;
class $l {
  constructor() {
    this.head = null, this.tail = null, this.length = 0;
  }
  append(...t) {
    if (this.insertBefore(t[0], null), t.length > 1) {
      const e = t.slice(1);
      this.append(...e);
    }
  }
  at(t) {
    const e = this.iterator();
    let s = e();
    for (; s && t > 0; )
      t -= 1, s = e();
    return s;
  }
  contains(t) {
    const e = this.iterator();
    let s = e();
    for (; s; ) {
      if (s === t)
        return !0;
      s = e();
    }
    return !1;
  }
  indexOf(t) {
    const e = this.iterator();
    let s = e(), n = 0;
    for (; s; ) {
      if (s === t)
        return n;
      n += 1, s = e();
    }
    return -1;
  }
  insertBefore(t, e) {
    t != null && (this.remove(t), t.next = e, e != null ? (t.prev = e.prev, e.prev != null && (e.prev.next = t), e.prev = t, e === this.head && (this.head = t)) : this.tail != null ? (this.tail.next = t, t.prev = this.tail, this.tail = t) : (t.prev = null, this.head = this.tail = t), this.length += 1);
  }
  offset(t) {
    let e = 0, s = this.head;
    for (; s != null; ) {
      if (s === t)
        return e;
      e += s.length(), s = s.next;
    }
    return -1;
  }
  remove(t) {
    this.contains(t) && (t.prev != null && (t.prev.next = t.next), t.next != null && (t.next.prev = t.prev), t === this.head && (this.head = t.next), t === this.tail && (this.tail = t.prev), this.length -= 1);
  }
  iterator(t = this.head) {
    return () => {
      const e = t;
      return t != null && (t = t.next), e;
    };
  }
  find(t, e = !1) {
    const s = this.iterator();
    let n = s();
    for (; n; ) {
      const i = n.length();
      if (t < i || e && t === i && (n.next == null || n.next.length() !== 0))
        return [n, t];
      t -= i, n = s();
    }
    return [null, 0];
  }
  forEach(t) {
    const e = this.iterator();
    let s = e();
    for (; s; )
      t(s), s = e();
  }
  forEachAt(t, e, s) {
    if (e <= 0)
      return;
    const [n, i] = this.find(t);
    let o = t - i;
    const a = this.iterator(n);
    let u = a();
    for (; u && o < t + e; ) {
      const h = u.length();
      t > o ? s(
        u,
        t - o,
        Math.min(e, o + h - t)
      ) : s(u, 0, Math.min(h, t + e - o)), o += h, u = a();
    }
  }
  map(t) {
    return this.reduce((e, s) => (e.push(t(s)), e), []);
  }
  reduce(t, e) {
    const s = this.iterator();
    let n = s();
    for (; n; )
      e = t(e, n), n = s();
    return e;
  }
}
function si(r, t) {
  const e = t.find(r);
  if (e)
    return e;
  try {
    return t.create(r);
  } catch (s) {
    const n = t.create(k.INLINE);
    return Array.from(r.childNodes).forEach((i) => {
      n.domNode.appendChild(i);
    }), r.parentNode && r.parentNode.replaceChild(n.domNode, r), n.attach(), n;
  }
}
const Ui = class Yt extends Bi {
  constructor(t, e) {
    super(t, e), this.uiNode = null, this.build();
  }
  appendChild(t) {
    this.insertBefore(t);
  }
  attach() {
    super.attach(), this.children.forEach((t) => {
      t.attach();
    });
  }
  attachUI(t) {
    this.uiNode != null && this.uiNode.remove(), this.uiNode = t, Yt.uiClass && this.uiNode.classList.add(Yt.uiClass), this.uiNode.setAttribute("contenteditable", "false"), this.domNode.insertBefore(this.uiNode, this.domNode.firstChild);
  }
  /**
   * Called during construction, should fill its own children LinkedList.
   */
  build() {
    this.children = new $l(), Array.from(this.domNode.childNodes).filter((t) => t !== this.uiNode).reverse().forEach((t) => {
      try {
        const e = si(t, this.scroll);
        this.insertBefore(e, this.children.head || void 0);
      } catch (e) {
        if (e instanceof De)
          return;
        throw e;
      }
    });
  }
  deleteAt(t, e) {
    if (t === 0 && e === this.length())
      return this.remove();
    this.children.forEachAt(t, e, (s, n, i) => {
      s.deleteAt(n, i);
    });
  }
  descendant(t, e = 0) {
    const [s, n] = this.children.find(e);
    return t.blotName == null && t(s) || t.blotName != null && s instanceof t ? [s, n] : s instanceof Yt ? s.descendant(t, n) : [null, -1];
  }
  descendants(t, e = 0, s = Number.MAX_VALUE) {
    let n = [], i = s;
    return this.children.forEachAt(
      e,
      s,
      (o, a, u) => {
        (t.blotName == null && t(o) || t.blotName != null && o instanceof t) && n.push(o), o instanceof Yt && (n = n.concat(
          o.descendants(t, a, i)
        )), i -= u;
      }
    ), n;
  }
  detach() {
    this.children.forEach((t) => {
      t.detach();
    }), super.detach();
  }
  enforceAllowedChildren() {
    let t = !1;
    this.children.forEach((e) => {
      t || this.statics.allowedChildren.some(
        (s) => e instanceof s
      ) || (e.statics.scope === k.BLOCK_BLOT ? (e.next != null && this.splitAfter(e), e.prev != null && this.splitAfter(e.prev), e.parent.unwrap(), t = !0) : e instanceof Yt ? e.unwrap() : e.remove());
    });
  }
  formatAt(t, e, s, n) {
    this.children.forEachAt(t, e, (i, o, a) => {
      i.formatAt(o, a, s, n);
    });
  }
  insertAt(t, e, s) {
    const [n, i] = this.children.find(t);
    if (n)
      n.insertAt(i, e, s);
    else {
      const o = s == null ? this.scroll.create("text", e) : this.scroll.create(e, s);
      this.appendChild(o);
    }
  }
  insertBefore(t, e) {
    t.parent != null && t.parent.children.remove(t);
    let s = null;
    this.children.insertBefore(t, e || null), t.parent = this, e != null && (s = e.domNode), (this.domNode.parentNode !== t.domNode || this.domNode.nextSibling !== s) && this.domNode.insertBefore(t.domNode, s), t.attach();
  }
  length() {
    return this.children.reduce((t, e) => t + e.length(), 0);
  }
  moveChildren(t, e) {
    this.children.forEach((s) => {
      t.insertBefore(s, e);
    });
  }
  optimize(t) {
    if (super.optimize(t), this.enforceAllowedChildren(), this.uiNode != null && this.uiNode !== this.domNode.firstChild && this.domNode.insertBefore(this.uiNode, this.domNode.firstChild), this.children.length === 0)
      if (this.statics.defaultChild != null) {
        const e = this.scroll.create(this.statics.defaultChild.blotName);
        this.appendChild(e);
      } else
        this.remove();
  }
  path(t, e = !1) {
    const [s, n] = this.children.find(t, e), i = [[this, t]];
    return s instanceof Yt ? i.concat(s.path(n, e)) : (s != null && i.push([s, n]), i);
  }
  removeChild(t) {
    this.children.remove(t);
  }
  replaceWith(t, e) {
    const s = typeof t == "string" ? this.scroll.create(t, e) : t;
    return s instanceof Yt && this.moveChildren(s), super.replaceWith(s);
  }
  split(t, e = !1) {
    if (!e) {
      if (t === 0)
        return this;
      if (t === this.length())
        return this.next;
    }
    const s = this.clone();
    return this.parent && this.parent.insertBefore(s, this.next || void 0), this.children.forEachAt(t, this.length(), (n, i, o) => {
      const a = n.split(i, e);
      a != null && s.appendChild(a);
    }), s;
  }
  splitAfter(t) {
    const e = this.clone();
    for (; t.next != null; )
      e.appendChild(t.next);
    return this.parent && this.parent.insertBefore(e, this.next || void 0), e;
  }
  unwrap() {
    this.parent && this.moveChildren(this.parent, this.next || void 0), this.remove();
  }
  update(t, e) {
    const s = [], n = [];
    t.forEach((i) => {
      i.target === this.domNode && i.type === "childList" && (s.push(...i.addedNodes), n.push(...i.removedNodes));
    }), n.forEach((i) => {
      if (i.parentNode != null && // @ts-expect-error Fix me later
      i.tagName !== "IFRAME" && document.body.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_CONTAINED_BY)
        return;
      const o = this.scroll.find(i);
      o != null && (o.domNode.parentNode == null || o.domNode.parentNode === this.domNode) && o.detach();
    }), s.filter((i) => i.parentNode === this.domNode && i !== this.uiNode).sort((i, o) => i === o ? 0 : i.compareDocumentPosition(o) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1).forEach((i) => {
      let o = null;
      i.nextSibling != null && (o = this.scroll.find(i.nextSibling));
      const a = si(i, this.scroll);
      (a.next !== o || a.next == null) && (a.parent != null && a.parent.removeChild(this), this.insertBefore(a, o || void 0));
    }), this.enforceAllowedChildren();
  }
};
Ui.uiClass = "";
let Hl = Ui;
const Lt = Hl;
function Fl(r, t) {
  if (Object.keys(r).length !== Object.keys(t).length)
    return !1;
  for (const e in r)
    if (r[e] !== t[e])
      return !1;
  return !0;
}
const ke = class Oe extends Lt {
  static create(t) {
    return super.create(t);
  }
  static formats(t, e) {
    const s = e.query(Oe.blotName);
    if (!(s != null && t.tagName === s.tagName)) {
      if (typeof this.tagName == "string")
        return !0;
      if (Array.isArray(this.tagName))
        return t.tagName.toLowerCase();
    }
  }
  constructor(t, e) {
    super(t, e), this.attributes = new on(this.domNode);
  }
  format(t, e) {
    if (t === this.statics.blotName && !e)
      this.children.forEach((s) => {
        s instanceof Oe || (s = s.wrap(Oe.blotName, !0)), this.attributes.copy(s);
      }), this.unwrap();
    else {
      const s = this.scroll.query(t, k.INLINE);
      if (s == null)
        return;
      s instanceof Bt ? this.attributes.attribute(s, e) : e && (t !== this.statics.blotName || this.formats()[t] !== e) && this.replaceWith(t, e);
    }
  }
  formats() {
    const t = this.attributes.values(), e = this.statics.formats(this.domNode, this.scroll);
    return e != null && (t[this.statics.blotName] = e), t;
  }
  formatAt(t, e, s, n) {
    this.formats()[s] != null || this.scroll.query(s, k.ATTRIBUTE) ? this.isolate(t, e).format(s, n) : super.formatAt(t, e, s, n);
  }
  optimize(t) {
    super.optimize(t);
    const e = this.formats();
    if (Object.keys(e).length === 0)
      return this.unwrap();
    const s = this.next;
    s instanceof Oe && s.prev === this && Fl(e, s.formats()) && (s.moveChildren(this), s.remove());
  }
  replaceWith(t, e) {
    const s = super.replaceWith(t, e);
    return this.attributes.copy(s), s;
  }
  update(t, e) {
    super.update(t, e), t.some(
      (s) => s.target === this.domNode && s.type === "attributes"
    ) && this.attributes.build();
  }
  wrap(t, e) {
    const s = super.wrap(t, e);
    return s instanceof Oe && this.attributes.move(s), s;
  }
};
ke.allowedChildren = [ke, et], ke.blotName = "inline", ke.scope = k.INLINE_BLOT, ke.tagName = "SPAN";
let zl = ke;
const Ur = zl, Ie = class br extends Lt {
  static create(t) {
    return super.create(t);
  }
  static formats(t, e) {
    const s = e.query(br.blotName);
    if (!(s != null && t.tagName === s.tagName)) {
      if (typeof this.tagName == "string")
        return !0;
      if (Array.isArray(this.tagName))
        return t.tagName.toLowerCase();
    }
  }
  constructor(t, e) {
    super(t, e), this.attributes = new on(this.domNode);
  }
  format(t, e) {
    const s = this.scroll.query(t, k.BLOCK);
    s != null && (s instanceof Bt ? this.attributes.attribute(s, e) : t === this.statics.blotName && !e ? this.replaceWith(br.blotName) : e && (t !== this.statics.blotName || this.formats()[t] !== e) && this.replaceWith(t, e));
  }
  formats() {
    const t = this.attributes.values(), e = this.statics.formats(this.domNode, this.scroll);
    return e != null && (t[this.statics.blotName] = e), t;
  }
  formatAt(t, e, s, n) {
    this.scroll.query(s, k.BLOCK) != null ? this.format(s, n) : super.formatAt(t, e, s, n);
  }
  insertAt(t, e, s) {
    if (s == null || this.scroll.query(e, k.INLINE) != null)
      super.insertAt(t, e, s);
    else {
      const n = this.split(t);
      if (n != null) {
        const i = this.scroll.create(e, s);
        n.parent.insertBefore(i, n);
      } else
        throw new Error("Attempt to insertAt after block boundaries");
    }
  }
  replaceWith(t, e) {
    const s = super.replaceWith(t, e);
    return this.attributes.copy(s), s;
  }
  update(t, e) {
    super.update(t, e), t.some(
      (s) => s.target === this.domNode && s.type === "attributes"
    ) && this.attributes.build();
  }
};
Ie.blotName = "block", Ie.scope = k.BLOCK_BLOT, Ie.tagName = "P", Ie.allowedChildren = [
  Ur,
  Ie,
  et
];
let Vl = Ie;
const ms = Vl, yr = class extends Lt {
  checkMerge() {
    return this.next !== null && this.next.statics.blotName === this.statics.blotName;
  }
  deleteAt(t, e) {
    super.deleteAt(t, e), this.enforceAllowedChildren();
  }
  formatAt(t, e, s, n) {
    super.formatAt(t, e, s, n), this.enforceAllowedChildren();
  }
  insertAt(t, e, s) {
    super.insertAt(t, e, s), this.enforceAllowedChildren();
  }
  optimize(t) {
    super.optimize(t), this.children.length > 0 && this.next != null && this.checkMerge() && (this.next.moveChildren(this), this.next.remove());
  }
};
yr.blotName = "container", yr.scope = k.BLOCK_BLOT;
let Kl = yr;
const an = Kl;
class Gl extends et {
  static formats(t, e) {
  }
  format(t, e) {
    super.formatAt(0, this.length(), t, e);
  }
  formatAt(t, e, s, n) {
    t === 0 && e === this.length() ? this.format(s, n) : super.formatAt(t, e, s, n);
  }
  formats() {
    return this.statics.formats(this.domNode, this.scroll);
  }
}
const ut = Gl, Zl = {
  attributes: !0,
  characterData: !0,
  characterDataOldValue: !0,
  childList: !0,
  subtree: !0
}, Wl = 100, Re = class extends Lt {
  constructor(t, e) {
    super(null, e), this.registry = t, this.scroll = this, this.build(), this.observer = new MutationObserver((s) => {
      this.update(s);
    }), this.observer.observe(this.domNode, Zl), this.attach();
  }
  create(t, e) {
    return this.registry.create(this, t, e);
  }
  find(t, e = !1) {
    const s = this.registry.find(t, e);
    return s ? s.scroll === this ? s : e ? this.find(s.scroll.domNode.parentNode, !0) : null : null;
  }
  query(t, e = k.ANY) {
    return this.registry.query(t, e);
  }
  register(...t) {
    return this.registry.register(...t);
  }
  build() {
    this.scroll != null && super.build();
  }
  detach() {
    super.detach(), this.observer.disconnect();
  }
  deleteAt(t, e) {
    this.update(), t === 0 && e === this.length() ? this.children.forEach((s) => {
      s.remove();
    }) : super.deleteAt(t, e);
  }
  formatAt(t, e, s, n) {
    this.update(), super.formatAt(t, e, s, n);
  }
  insertAt(t, e, s) {
    this.update(), super.insertAt(t, e, s);
  }
  optimize(t = [], e = {}) {
    super.optimize(e);
    const s = e.mutationsMap || /* @__PURE__ */ new WeakMap();
    let n = Array.from(this.observer.takeRecords());
    for (; n.length > 0; )
      t.push(n.pop());
    const i = (u, h = !0) => {
      u == null || u === this || u.domNode.parentNode != null && (s.has(u.domNode) || s.set(u.domNode, []), h && i(u.parent));
    }, o = (u) => {
      s.has(u.domNode) && (u instanceof Lt && u.children.forEach(o), s.delete(u.domNode), u.optimize(e));
    };
    let a = t;
    for (let u = 0; a.length > 0; u += 1) {
      if (u >= Wl)
        throw new Error("[Parchment] Maximum optimize iterations reached");
      for (a.forEach((h) => {
        const d = this.find(h.target, !0);
        d != null && (d.domNode === h.target && (h.type === "childList" ? (i(this.find(h.previousSibling, !1)), Array.from(h.addedNodes).forEach((b) => {
          const m = this.find(b, !1);
          i(m, !1), m instanceof Lt && m.children.forEach((p) => {
            i(p, !1);
          });
        })) : h.type === "attributes" && i(d.prev)), i(d));
      }), this.children.forEach(o), a = Array.from(this.observer.takeRecords()), n = a.slice(); n.length > 0; )
        t.push(n.pop());
    }
  }
  update(t, e = {}) {
    t = t || this.observer.takeRecords();
    const s = /* @__PURE__ */ new WeakMap();
    t.map((n) => {
      const i = this.find(n.target, !0);
      return i == null ? null : s.has(i.domNode) ? (s.get(i.domNode).push(n), null) : (s.set(i.domNode, [n]), i);
    }).forEach((n) => {
      n != null && n !== this && s.has(n.domNode) && n.update(s.get(n.domNode) || [], e);
    }), e.mutationsMap = s, s.has(this.domNode) && super.update(s.get(this.domNode), e), this.optimize(t, e);
  }
};
Re.blotName = "scroll", Re.defaultChild = ms, Re.allowedChildren = [ms, an], Re.scope = k.BLOCK_BLOT, Re.tagName = "DIV";
let Xl = Re;
const Pr = Xl, vr = class Pi extends et {
  static create(t) {
    return document.createTextNode(t);
  }
  static value(t) {
    return t.data;
  }
  constructor(t, e) {
    super(t, e), this.text = this.statics.value(this.domNode);
  }
  deleteAt(t, e) {
    this.domNode.data = this.text = this.text.slice(0, t) + this.text.slice(t + e);
  }
  index(t, e) {
    return this.domNode === t ? e : -1;
  }
  insertAt(t, e, s) {
    s == null ? (this.text = this.text.slice(0, t) + e + this.text.slice(t), this.domNode.data = this.text) : super.insertAt(t, e, s);
  }
  length() {
    return this.text.length;
  }
  optimize(t) {
    super.optimize(t), this.text = this.statics.value(this.domNode), this.text.length === 0 ? this.remove() : this.next instanceof Pi && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove());
  }
  position(t, e = !1) {
    return [this.domNode, t];
  }
  split(t, e = !1) {
    if (!e) {
      if (t === 0)
        return this;
      if (t === this.length())
        return this.next;
    }
    const s = this.scroll.create(this.domNode.splitText(t));
    return this.parent.insertBefore(s, this.next || void 0), this.text = this.statics.value(this.domNode), s;
  }
  update(t, e) {
    t.some((s) => s.type === "characterData" && s.target === this.domNode) && (this.text = this.statics.value(this.domNode));
  }
  value() {
    return this.text;
  }
};
vr.blotName = "text", vr.scope = k.INLINE_BLOT;
let Yl = vr;
const sn = Yl, Jl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Attributor: Bt,
  AttributorStore: on,
  BlockBlot: ms,
  ClassAttributor: qt,
  ContainerBlot: an,
  EmbedBlot: ut,
  InlineBlot: Ur,
  LeafBlot: et,
  ParentBlot: Lt,
  Registry: Pe,
  Scope: k,
  ScrollBlot: Pr,
  StyleAttributor: se,
  TextBlot: sn
}, Symbol.toStringTag, { value: "Module" }));
var Jt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ji(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Er = { exports: {} }, ct = -1, rt = 1, Z = 0;
function ps(r, t, e, s, n) {
  if (r === t)
    return r ? [[Z, r]] : [];
  if (e != null) {
    var i = oo(r, t, e);
    if (i)
      return i;
  }
  var o = jr(r, t), a = r.substring(0, o);
  r = r.substring(o), t = t.substring(o), o = cn(r, t);
  var u = r.substring(r.length - o);
  r = r.substring(0, r.length - o), t = t.substring(0, t.length - o);
  var h = Ql(r, t);
  return a && h.unshift([Z, a]), u && h.push([Z, u]), $r(h, n), s && so(h), h;
}
function Ql(r, t) {
  var e;
  if (!r)
    return [[rt, t]];
  if (!t)
    return [[ct, r]];
  var s = r.length > t.length ? r : t, n = r.length > t.length ? t : r, i = s.indexOf(n);
  if (i !== -1)
    return e = [
      [rt, s.substring(0, i)],
      [Z, n],
      [rt, s.substring(i + n.length)]
    ], r.length > t.length && (e[0][0] = e[2][0] = ct), e;
  if (n.length === 1)
    return [
      [ct, r],
      [rt, t]
    ];
  var o = eo(r, t);
  if (o) {
    var a = o[0], u = o[1], h = o[2], d = o[3], b = o[4], m = ps(a, h), p = ps(u, d);
    return m.concat([[Z, b]], p);
  }
  return to(r, t);
}
function to(r, t) {
  for (var e = r.length, s = t.length, n = Math.ceil((e + s) / 2), i = n, o = 2 * n, a = new Array(o), u = new Array(o), h = 0; h < o; h++)
    a[h] = -1, u[h] = -1;
  a[i + 1] = 0, u[i + 1] = 0;
  for (var d = e - s, b = d % 2 !== 0, m = 0, p = 0, g = 0, N = 0, v = 0; v < n; v++) {
    for (var E = -v + m; E <= v - p; E += 2) {
      var x = i + E, L;
      E === -v || E !== v && a[x - 1] < a[x + 1] ? L = a[x + 1] : L = a[x - 1] + 1;
      for (var S = L - E; L < e && S < s && r.charAt(L) === t.charAt(S); )
        L++, S++;
      if (a[x] = L, L > e)
        p += 2;
      else if (S > s)
        m += 2;
      else if (b) {
        var T = i + d - E;
        if (T >= 0 && T < o && u[T] !== -1) {
          var I = e - u[T];
          if (L >= I)
            return ni(r, t, L, S);
        }
      }
    }
    for (var D = -v + g; D <= v - N; D += 2) {
      var T = i + D, I;
      D === -v || D !== v && u[T - 1] < u[T + 1] ? I = u[T + 1] : I = u[T - 1] + 1;
      for (var F = I - D; I < e && F < s && r.charAt(e - I - 1) === t.charAt(s - F - 1); )
        I++, F++;
      if (u[T] = I, I > e)
        N += 2;
      else if (F > s)
        g += 2;
      else if (!b) {
        var x = i + d - D;
        if (x >= 0 && x < o && a[x] !== -1) {
          var L = a[x], S = i + L - x;
          if (I = e - I, L >= I)
            return ni(r, t, L, S);
        }
      }
    }
  }
  return [
    [ct, r],
    [rt, t]
  ];
}
function ni(r, t, e, s) {
  var n = r.substring(0, e), i = t.substring(0, s), o = r.substring(e), a = t.substring(s), u = ps(n, i), h = ps(o, a);
  return u.concat(h);
}
function jr(r, t) {
  if (!r || !t || r.charAt(0) !== t.charAt(0))
    return 0;
  for (var e = 0, s = Math.min(r.length, t.length), n = s, i = 0; e < n; )
    r.substring(i, n) == t.substring(i, n) ? (e = n, i = e) : s = n, n = Math.floor((s - e) / 2 + e);
  return $i(r.charCodeAt(n - 1)) && n--, n;
}
function ri(r, t) {
  var e = r.length, s = t.length;
  if (e == 0 || s == 0)
    return 0;
  e > s ? r = r.substring(e - s) : e < s && (t = t.substring(0, e));
  var n = Math.min(e, s);
  if (r == t)
    return n;
  for (var i = 0, o = 1; ; ) {
    var a = r.substring(n - o), u = t.indexOf(a);
    if (u == -1)
      return i;
    o += u, (u == 0 || r.substring(n - o) == t.substring(0, o)) && (i = o, o++);
  }
}
function cn(r, t) {
  if (!r || !t || r.slice(-1) !== t.slice(-1))
    return 0;
  for (var e = 0, s = Math.min(r.length, t.length), n = s, i = 0; e < n; )
    r.substring(r.length - n, r.length - i) == t.substring(t.length - n, t.length - i) ? (e = n, i = e) : s = n, n = Math.floor((s - e) / 2 + e);
  return Hi(r.charCodeAt(r.length - n)) && n--, n;
}
function eo(r, t) {
  var e = r.length > t.length ? r : t, s = r.length > t.length ? t : r;
  if (e.length < 4 || s.length * 2 < e.length)
    return null;
  function n(p, g, N) {
    for (var v = p.substring(N, N + Math.floor(p.length / 4)), E = -1, x = "", L, S, T, I; (E = g.indexOf(v, E + 1)) !== -1; ) {
      var D = jr(
        p.substring(N),
        g.substring(E)
      ), F = cn(
        p.substring(0, N),
        g.substring(0, E)
      );
      x.length < F + D && (x = g.substring(E - F, E) + g.substring(E, E + D), L = p.substring(0, N - F), S = p.substring(N + D), T = g.substring(0, E - F), I = g.substring(E + D));
    }
    return x.length * 2 >= p.length ? [
      L,
      S,
      T,
      I,
      x
    ] : null;
  }
  var i = n(
    e,
    s,
    Math.ceil(e.length / 4)
  ), o = n(
    e,
    s,
    Math.ceil(e.length / 2)
  ), a;
  if (!i && !o)
    return null;
  o ? i ? a = i[4].length > o[4].length ? i : o : a = o : a = i;
  var u, h, d, b;
  r.length > t.length ? (u = a[0], h = a[1], d = a[2], b = a[3]) : (d = a[0], b = a[1], u = a[2], h = a[3]);
  var m = a[4];
  return [u, h, d, b, m];
}
function so(r) {
  for (var t = !1, e = [], s = 0, n = null, i = 0, o = 0, a = 0, u = 0, h = 0; i < r.length; )
    r[i][0] == Z ? (e[s++] = i, o = u, a = h, u = 0, h = 0, n = r[i][1]) : (r[i][0] == rt ? u += r[i][1].length : h += r[i][1].length, n && n.length <= Math.max(o, a) && n.length <= Math.max(u, h) && (r.splice(e[s - 1], 0, [
      ct,
      n
    ]), r[e[s - 1] + 1][0] = rt, s--, s--, i = s > 0 ? e[s - 1] : -1, o = 0, a = 0, u = 0, h = 0, n = null, t = !0)), i++;
  for (t && $r(r), io(r), i = 1; i < r.length; ) {
    if (r[i - 1][0] == ct && r[i][0] == rt) {
      var d = r[i - 1][1], b = r[i][1], m = ri(d, b), p = ri(b, d);
      m >= p ? (m >= d.length / 2 || m >= b.length / 2) && (r.splice(i, 0, [
        Z,
        b.substring(0, m)
      ]), r[i - 1][1] = d.substring(
        0,
        d.length - m
      ), r[i + 1][1] = b.substring(m), i++) : (p >= d.length / 2 || p >= b.length / 2) && (r.splice(i, 0, [
        Z,
        d.substring(0, p)
      ]), r[i - 1][0] = rt, r[i - 1][1] = b.substring(
        0,
        b.length - p
      ), r[i + 1][0] = ct, r[i + 1][1] = d.substring(p), i++), i++;
    }
    i++;
  }
}
var ii = /[^a-zA-Z0-9]/, li = /\s/, oi = /[\r\n]/, no = /\n\r?\n$/, ro = /^\r?\n\r?\n/;
function io(r) {
  function t(p, g) {
    if (!p || !g)
      return 6;
    var N = p.charAt(p.length - 1), v = g.charAt(0), E = N.match(ii), x = v.match(ii), L = E && N.match(li), S = x && v.match(li), T = L && N.match(oi), I = S && v.match(oi), D = T && p.match(no), F = I && g.match(ro);
    return D || F ? 5 : T || I ? 4 : E && !L && S ? 3 : L || S ? 2 : E || x ? 1 : 0;
  }
  for (var e = 1; e < r.length - 1; ) {
    if (r[e - 1][0] == Z && r[e + 1][0] == Z) {
      var s = r[e - 1][1], n = r[e][1], i = r[e + 1][1], o = cn(s, n);
      if (o) {
        var a = n.substring(n.length - o);
        s = s.substring(0, s.length - o), n = a + n.substring(0, n.length - o), i = a + i;
      }
      for (var u = s, h = n, d = i, b = t(s, n) + t(n, i); n.charAt(0) === i.charAt(0); ) {
        s += n.charAt(0), n = n.substring(1) + i.charAt(0), i = i.substring(1);
        var m = t(s, n) + t(n, i);
        m >= b && (b = m, u = s, h = n, d = i);
      }
      r[e - 1][1] != u && (u ? r[e - 1][1] = u : (r.splice(e - 1, 1), e--), r[e][1] = h, d ? r[e + 1][1] = d : (r.splice(e + 1, 1), e--));
    }
    e++;
  }
}
function $r(r, t) {
  r.push([Z, ""]);
  for (var e = 0, s = 0, n = 0, i = "", o = "", a; e < r.length; ) {
    if (e < r.length - 1 && !r[e][1]) {
      r.splice(e, 1);
      continue;
    }
    switch (r[e][0]) {
      case rt:
        n++, o += r[e][1], e++;
        break;
      case ct:
        s++, i += r[e][1], e++;
        break;
      case Z:
        var u = e - n - s - 1;
        if (t) {
          if (u >= 0 && zi(r[u][1])) {
            var h = r[u][1].slice(-1);
            if (r[u][1] = r[u][1].slice(
              0,
              -1
            ), i = h + i, o = h + o, !r[u][1]) {
              r.splice(u, 1), e--;
              var d = u - 1;
              r[d] && r[d][0] === rt && (n++, o = r[d][1] + o, d--), r[d] && r[d][0] === ct && (s++, i = r[d][1] + i, d--), u = d;
            }
          }
          if (Fi(r[e][1])) {
            var h = r[e][1].charAt(0);
            r[e][1] = r[e][1].slice(1), i += h, o += h;
          }
        }
        if (e < r.length - 1 && !r[e][1]) {
          r.splice(e, 1);
          break;
        }
        if (i.length > 0 || o.length > 0) {
          i.length > 0 && o.length > 0 && (a = jr(o, i), a !== 0 && (u >= 0 ? r[u][1] += o.substring(
            0,
            a
          ) : (r.splice(0, 0, [
            Z,
            o.substring(0, a)
          ]), e++), o = o.substring(a), i = i.substring(a)), a = cn(o, i), a !== 0 && (r[e][1] = o.substring(o.length - a) + r[e][1], o = o.substring(
            0,
            o.length - a
          ), i = i.substring(
            0,
            i.length - a
          )));
          var b = n + s;
          i.length === 0 && o.length === 0 ? (r.splice(e - b, b), e = e - b) : i.length === 0 ? (r.splice(e - b, b, [rt, o]), e = e - b + 1) : o.length === 0 ? (r.splice(e - b, b, [ct, i]), e = e - b + 1) : (r.splice(
            e - b,
            b,
            [ct, i],
            [rt, o]
          ), e = e - b + 2);
        }
        e !== 0 && r[e - 1][0] === Z ? (r[e - 1][1] += r[e][1], r.splice(e, 1)) : e++, n = 0, s = 0, i = "", o = "";
        break;
    }
  }
  r[r.length - 1][1] === "" && r.pop();
  var m = !1;
  for (e = 1; e < r.length - 1; )
    r[e - 1][0] === Z && r[e + 1][0] === Z && (r[e][1].substring(
      r[e][1].length - r[e - 1][1].length
    ) === r[e - 1][1] ? (r[e][1] = r[e - 1][1] + r[e][1].substring(
      0,
      r[e][1].length - r[e - 1][1].length
    ), r[e + 1][1] = r[e - 1][1] + r[e + 1][1], r.splice(e - 1, 1), m = !0) : r[e][1].substring(0, r[e + 1][1].length) == r[e + 1][1] && (r[e - 1][1] += r[e + 1][1], r[e][1] = r[e][1].substring(r[e + 1][1].length) + r[e + 1][1], r.splice(e + 1, 1), m = !0)), e++;
  m && $r(r, t);
}
function $i(r) {
  return r >= 55296 && r <= 56319;
}
function Hi(r) {
  return r >= 56320 && r <= 57343;
}
function Fi(r) {
  return Hi(r.charCodeAt(0));
}
function zi(r) {
  return $i(r.charCodeAt(r.length - 1));
}
function lo(r) {
  for (var t = [], e = 0; e < r.length; e++)
    r[e][1].length > 0 && t.push(r[e]);
  return t;
}
function lr(r, t, e, s) {
  return zi(r) || Fi(s) ? null : lo([
    [Z, r],
    [ct, t],
    [rt, e],
    [Z, s]
  ]);
}
function oo(r, t, e) {
  var s = typeof e == "number" ? { index: e, length: 0 } : e.oldRange, n = typeof e == "number" ? null : e.newRange, i = r.length, o = t.length;
  if (s.length === 0 && (n === null || n.length === 0)) {
    var a = s.index, u = r.slice(0, a), h = r.slice(a), d = n ? n.index : null;
    t: {
      var b = a + o - i;
      if (d !== null && d !== b || b < 0 || b > o)
        break t;
      var m = t.slice(0, b), p = t.slice(b);
      if (p !== h)
        break t;
      var g = Math.min(a, b), N = u.slice(0, g), v = m.slice(0, g);
      if (N !== v)
        break t;
      var E = u.slice(g), x = m.slice(g);
      return lr(N, E, x, h);
    }
    t: {
      if (d !== null && d !== a)
        break t;
      var L = a, m = t.slice(0, L), p = t.slice(L);
      if (m !== u)
        break t;
      var S = Math.min(i - L, o - L), T = h.slice(h.length - S), I = p.slice(p.length - S);
      if (T !== I)
        break t;
      var E = h.slice(0, h.length - S), x = p.slice(0, p.length - S);
      return lr(u, E, x, T);
    }
  }
  if (s.length > 0 && n && n.length === 0)
    t: {
      var N = r.slice(0, s.index), T = r.slice(s.index + s.length), g = N.length, S = T.length;
      if (o < g + S)
        break t;
      var v = t.slice(0, g), I = t.slice(o - S);
      if (N !== v || T !== I)
        break t;
      var E = r.slice(g, i - S), x = t.slice(g, o - S);
      return lr(N, E, x, T);
    }
  return null;
}
function un(r, t, e, s) {
  return ps(r, t, e, s, !0);
}
un.INSERT = rt;
un.DELETE = ct;
un.EQUAL = Z;
var ao = un, nn = { exports: {} };
nn.exports;
(function(r, t) {
  var e = 200, s = "__lodash_hash_undefined__", n = 9007199254740991, i = "[object Arguments]", o = "[object Array]", a = "[object Boolean]", u = "[object Date]", h = "[object Error]", d = "[object Function]", b = "[object GeneratorFunction]", m = "[object Map]", p = "[object Number]", g = "[object Object]", N = "[object Promise]", v = "[object RegExp]", E = "[object Set]", x = "[object String]", L = "[object Symbol]", S = "[object WeakMap]", T = "[object ArrayBuffer]", I = "[object DataView]", D = "[object Float32Array]", F = "[object Float64Array]", ht = "[object Int8Array]", kt = "[object Int16Array]", Dt = "[object Int32Array]", Ut = "[object Uint8Array]", be = "[object Uint8ClampedArray]", re = "[object Uint16Array]", Gt = "[object Uint32Array]", ye = /[\\^$.*+?()[\]{}|]/g, As = /\w*$/, B = /^\[object .+?Constructor\]$/, _ = /^(?:0|[1-9]\d*)$/, R = {};
  R[i] = R[o] = R[T] = R[I] = R[a] = R[u] = R[D] = R[F] = R[ht] = R[kt] = R[Dt] = R[m] = R[p] = R[g] = R[v] = R[E] = R[x] = R[L] = R[Ut] = R[be] = R[re] = R[Gt] = !0, R[h] = R[d] = R[S] = !1;
  var it = typeof Jt == "object" && Jt && Jt.Object === Object && Jt, z = typeof self == "object" && self && self.Object === Object && self, K = it || z || Function("return this")(), Fe = t && !t.nodeType && t, $ = Fe && !0 && r && !r.nodeType && r, ie = $ && $.exports === Fe;
  function pn(l, c) {
    return l.set(c[0], c[1]), l;
  }
  function vt(l, c) {
    return l.add(c), l;
  }
  function xs(l, c) {
    for (var f = -1, y = l ? l.length : 0; ++f < y && c(l[f], f, l) !== !1; )
      ;
    return l;
  }
  function Ls(l, c) {
    for (var f = -1, y = c.length, M = l.length; ++f < y; )
      l[M + f] = c[f];
    return l;
  }
  function ze(l, c, f, y) {
    var M = -1, O = l ? l.length : 0;
    for (y && O && (f = l[++M]); ++M < O; )
      f = c(f, l[M], M, l);
    return f;
  }
  function Ve(l, c) {
    for (var f = -1, y = Array(l); ++f < l; )
      y[f] = c(f);
    return y;
  }
  function Ts(l, c) {
    return l == null ? void 0 : l[c];
  }
  function Ke(l) {
    var c = !1;
    if (l != null && typeof l.toString != "function")
      try {
        c = !!(l + "");
      } catch (f) {
      }
    return c;
  }
  function qs(l) {
    var c = -1, f = Array(l.size);
    return l.forEach(function(y, M) {
      f[++c] = [M, y];
    }), f;
  }
  function Ge(l, c) {
    return function(f) {
      return l(c(f));
    };
  }
  function Cs(l) {
    var c = -1, f = Array(l.size);
    return l.forEach(function(y) {
      f[++c] = y;
    }), f;
  }
  var gn = Array.prototype, bn = Function.prototype, ve = Object.prototype, Ze = K["__core-js_shared__"], Ss = function() {
    var l = /[^.]+$/.exec(Ze && Ze.keys && Ze.keys.IE_PROTO || "");
    return l ? "Symbol(src)_1." + l : "";
  }(), ks = bn.toString, Ot = ve.hasOwnProperty, Ee = ve.toString, yn = RegExp(
    "^" + ks.call(Ot).replace(ye, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), le = ie ? K.Buffer : void 0, Ne = K.Symbol, We = K.Uint8Array, ft = Ge(Object.getPrototypeOf, Object), Os = Object.create, Is = ve.propertyIsEnumerable, vn = gn.splice, Xe = Object.getOwnPropertySymbols, we = le ? le.isBuffer : void 0, Rs = Ge(Object.keys, Object), Ae = Nt(K, "DataView"), oe = Nt(K, "Map"), Et = Nt(K, "Promise"), xe = Nt(K, "Set"), Ye = Nt(K, "WeakMap"), ae = Nt(Object, "create"), Je = nt(Ae), ce = nt(oe), Qe = nt(Et), ts = nt(xe), es = nt(Ye), Zt = Ne ? Ne.prototype : void 0, _s = Zt ? Zt.valueOf : void 0;
  function Pt(l) {
    var c = -1, f = l ? l.length : 0;
    for (this.clear(); ++c < f; ) {
      var y = l[c];
      this.set(y[0], y[1]);
    }
  }
  function En() {
    this.__data__ = ae ? ae(null) : {};
  }
  function Nn(l) {
    return this.has(l) && delete this.__data__[l];
  }
  function wn(l) {
    var c = this.__data__;
    if (ae) {
      var f = c[l];
      return f === s ? void 0 : f;
    }
    return Ot.call(c, l) ? c[l] : void 0;
  }
  function Ms(l) {
    var c = this.__data__;
    return ae ? c[l] !== void 0 : Ot.call(c, l);
  }
  function ss(l, c) {
    var f = this.__data__;
    return f[l] = ae && c === void 0 ? s : c, this;
  }
  Pt.prototype.clear = En, Pt.prototype.delete = Nn, Pt.prototype.get = wn, Pt.prototype.has = Ms, Pt.prototype.set = ss;
  function W(l) {
    var c = -1, f = l ? l.length : 0;
    for (this.clear(); ++c < f; ) {
      var y = l[c];
      this.set(y[0], y[1]);
    }
  }
  function An() {
    this.__data__ = [];
  }
  function xn(l) {
    var c = this.__data__, f = Te(c, l);
    if (f < 0)
      return !1;
    var y = c.length - 1;
    return f == y ? c.pop() : vn.call(c, f, 1), !0;
  }
  function Ln(l) {
    var c = this.__data__, f = Te(c, l);
    return f < 0 ? void 0 : c[f][1];
  }
  function Tn(l) {
    return Te(this.__data__, l) > -1;
  }
  function qn(l, c) {
    var f = this.__data__, y = Te(f, l);
    return y < 0 ? f.push([l, c]) : f[y][1] = c, this;
  }
  W.prototype.clear = An, W.prototype.delete = xn, W.prototype.get = Ln, W.prototype.has = Tn, W.prototype.set = qn;
  function J(l) {
    var c = -1, f = l ? l.length : 0;
    for (this.clear(); ++c < f; ) {
      var y = l[c];
      this.set(y[0], y[1]);
    }
  }
  function Cn() {
    this.__data__ = {
      hash: new Pt(),
      map: new (oe || W)(),
      string: new Pt()
    };
  }
  function Sn(l) {
    return he(this, l).delete(l);
  }
  function kn(l) {
    return he(this, l).get(l);
  }
  function On(l) {
    return he(this, l).has(l);
  }
  function In(l, c) {
    return he(this, l).set(l, c), this;
  }
  J.prototype.clear = Cn, J.prototype.delete = Sn, J.prototype.get = kn, J.prototype.has = On, J.prototype.set = In;
  function lt(l) {
    this.__data__ = new W(l);
  }
  function Rn() {
    this.__data__ = new W();
  }
  function _n(l) {
    return this.__data__.delete(l);
  }
  function Mn(l) {
    return this.__data__.get(l);
  }
  function Bn(l) {
    return this.__data__.has(l);
  }
  function Dn(l, c) {
    var f = this.__data__;
    if (f instanceof W) {
      var y = f.__data__;
      if (!oe || y.length < e - 1)
        return y.push([l, c]), this;
      f = this.__data__ = new J(y);
    }
    return f.set(l, c), this;
  }
  lt.prototype.clear = Rn, lt.prototype.delete = _n, lt.prototype.get = Mn, lt.prototype.has = Bn, lt.prototype.set = Dn;
  function Le(l, c) {
    var f = ls(l) || Ce(l) ? Ve(l.length, String) : [], y = f.length, M = !!y;
    for (var O in l)
      (c || Ot.call(l, O)) && !(M && (O == "length" || Yn(O, y))) && f.push(O);
    return f;
  }
  function Bs(l, c, f) {
    var y = l[c];
    (!(Ot.call(l, c) && $s(y, f)) || f === void 0 && !(c in l)) && (l[c] = f);
  }
  function Te(l, c) {
    for (var f = l.length; f--; )
      if ($s(l[f][0], c))
        return f;
    return -1;
  }
  function It(l, c) {
    return l && is(c, as(c), l);
  }
  function ns(l, c, f, y, M, O, P) {
    var j;
    if (y && (j = O ? y(l, M, O, P) : y(l)), j !== void 0)
      return j;
    if (!_t(l))
      return l;
    var V = ls(l);
    if (V) {
      if (j = Wn(l), !c)
        return Kn(l, j);
    } else {
      var H = $t(l), Q = H == d || H == b;
      if (Hs(l))
        return qe(l, c);
      if (H == g || H == i || Q && !O) {
        if (Ke(l))
          return O ? l : {};
        if (j = Rt(Q ? {} : l), !c)
          return Gn(l, It(j, l));
      } else {
        if (!R[H])
          return O ? l : {};
        j = Xn(l, H, ns, c);
      }
    }
    P || (P = new lt());
    var ot = P.get(l);
    if (ot)
      return ot;
    if (P.set(l, j), !V)
      var G = f ? Zn(l) : as(l);
    return xs(G || l, function(tt, X) {
      G && (X = tt, tt = l[X]), Bs(j, X, ns(tt, c, f, y, X, l, P));
    }), j;
  }
  function Un(l) {
    return _t(l) ? Os(l) : {};
  }
  function Pn(l, c, f) {
    var y = c(l);
    return ls(l) ? y : Ls(y, f(l));
  }
  function jn(l) {
    return Ee.call(l);
  }
  function $n(l) {
    if (!_t(l) || Qn(l))
      return !1;
    var c = os(l) || Ke(l) ? yn : B;
    return c.test(nt(l));
  }
  function Hn(l) {
    if (!Ps(l))
      return Rs(l);
    var c = [];
    for (var f in Object(l))
      Ot.call(l, f) && f != "constructor" && c.push(f);
    return c;
  }
  function qe(l, c) {
    if (c)
      return l.slice();
    var f = new l.constructor(l.length);
    return l.copy(f), f;
  }
  function rs(l) {
    var c = new l.constructor(l.byteLength);
    return new We(c).set(new We(l)), c;
  }
  function ue(l, c) {
    var f = c ? rs(l.buffer) : l.buffer;
    return new l.constructor(f, l.byteOffset, l.byteLength);
  }
  function Ds(l, c, f) {
    var y = c ? f(qs(l), !0) : qs(l);
    return ze(y, pn, new l.constructor());
  }
  function Us(l) {
    var c = new l.constructor(l.source, As.exec(l));
    return c.lastIndex = l.lastIndex, c;
  }
  function Fn(l, c, f) {
    var y = c ? f(Cs(l), !0) : Cs(l);
    return ze(y, vt, new l.constructor());
  }
  function zn(l) {
    return _s ? Object(_s.call(l)) : {};
  }
  function Vn(l, c) {
    var f = c ? rs(l.buffer) : l.buffer;
    return new l.constructor(f, l.byteOffset, l.length);
  }
  function Kn(l, c) {
    var f = -1, y = l.length;
    for (c || (c = Array(y)); ++f < y; )
      c[f] = l[f];
    return c;
  }
  function is(l, c, f, y) {
    f || (f = {});
    for (var M = -1, O = c.length; ++M < O; ) {
      var P = c[M], j = y ? y(f[P], l[P], P, f, l) : void 0;
      Bs(f, P, j === void 0 ? l[P] : j);
    }
    return f;
  }
  function Gn(l, c) {
    return is(l, jt(l), c);
  }
  function Zn(l) {
    return Pn(l, as, jt);
  }
  function he(l, c) {
    var f = l.__data__;
    return Jn(c) ? f[typeof c == "string" ? "string" : "hash"] : f.map;
  }
  function Nt(l, c) {
    var f = Ts(l, c);
    return $n(f) ? f : void 0;
  }
  var jt = Xe ? Ge(Xe, Object) : er, $t = jn;
  (Ae && $t(new Ae(new ArrayBuffer(1))) != I || oe && $t(new oe()) != m || Et && $t(Et.resolve()) != N || xe && $t(new xe()) != E || Ye && $t(new Ye()) != S) && ($t = function(l) {
    var c = Ee.call(l), f = c == g ? l.constructor : void 0, y = f ? nt(f) : void 0;
    if (y)
      switch (y) {
        case Je:
          return I;
        case ce:
          return m;
        case Qe:
          return N;
        case ts:
          return E;
        case es:
          return S;
      }
    return c;
  });
  function Wn(l) {
    var c = l.length, f = l.constructor(c);
    return c && typeof l[0] == "string" && Ot.call(l, "index") && (f.index = l.index, f.input = l.input), f;
  }
  function Rt(l) {
    return typeof l.constructor == "function" && !Ps(l) ? Un(ft(l)) : {};
  }
  function Xn(l, c, f, y) {
    var M = l.constructor;
    switch (c) {
      case T:
        return rs(l);
      case a:
      case u:
        return new M(+l);
      case I:
        return ue(l, y);
      case D:
      case F:
      case ht:
      case kt:
      case Dt:
      case Ut:
      case be:
      case re:
      case Gt:
        return Vn(l, y);
      case m:
        return Ds(l, y, f);
      case p:
      case x:
        return new M(l);
      case v:
        return Us(l);
      case E:
        return Fn(l, y, f);
      case L:
        return zn(l);
    }
  }
  function Yn(l, c) {
    return c = c == null ? n : c, !!c && (typeof l == "number" || _.test(l)) && l > -1 && l % 1 == 0 && l < c;
  }
  function Jn(l) {
    var c = typeof l;
    return c == "string" || c == "number" || c == "symbol" || c == "boolean" ? l !== "__proto__" : l === null;
  }
  function Qn(l) {
    return !!Ss && Ss in l;
  }
  function Ps(l) {
    var c = l && l.constructor, f = typeof c == "function" && c.prototype || ve;
    return l === f;
  }
  function nt(l) {
    if (l != null) {
      try {
        return ks.call(l);
      } catch (c) {
      }
      try {
        return l + "";
      } catch (c) {
      }
    }
    return "";
  }
  function js(l) {
    return ns(l, !0, !0);
  }
  function $s(l, c) {
    return l === c || l !== l && c !== c;
  }
  function Ce(l) {
    return tr(l) && Ot.call(l, "callee") && (!Is.call(l, "callee") || Ee.call(l) == i);
  }
  var ls = Array.isArray;
  function Se(l) {
    return l != null && Fs(l.length) && !os(l);
  }
  function tr(l) {
    return zs(l) && Se(l);
  }
  var Hs = we || sr;
  function os(l) {
    var c = _t(l) ? Ee.call(l) : "";
    return c == d || c == b;
  }
  function Fs(l) {
    return typeof l == "number" && l > -1 && l % 1 == 0 && l <= n;
  }
  function _t(l) {
    var c = typeof l;
    return !!l && (c == "object" || c == "function");
  }
  function zs(l) {
    return !!l && typeof l == "object";
  }
  function as(l) {
    return Se(l) ? Le(l) : Hn(l);
  }
  function er() {
    return [];
  }
  function sr() {
    return !1;
  }
  r.exports = js;
})(nn, nn.exports);
var Vi = nn.exports, rn = { exports: {} };
rn.exports;
(function(r, t) {
  var e = 200, s = "__lodash_hash_undefined__", n = 1, i = 2, o = 9007199254740991, a = "[object Arguments]", u = "[object Array]", h = "[object AsyncFunction]", d = "[object Boolean]", b = "[object Date]", m = "[object Error]", p = "[object Function]", g = "[object GeneratorFunction]", N = "[object Map]", v = "[object Number]", E = "[object Null]", x = "[object Object]", L = "[object Promise]", S = "[object Proxy]", T = "[object RegExp]", I = "[object Set]", D = "[object String]", F = "[object Symbol]", ht = "[object Undefined]", kt = "[object WeakMap]", Dt = "[object ArrayBuffer]", Ut = "[object DataView]", be = "[object Float32Array]", re = "[object Float64Array]", Gt = "[object Int8Array]", ye = "[object Int16Array]", As = "[object Int32Array]", B = "[object Uint8Array]", _ = "[object Uint8ClampedArray]", R = "[object Uint16Array]", it = "[object Uint32Array]", z = /[\\^$.*+?()[\]{}|]/g, K = /^\[object .+?Constructor\]$/, Fe = /^(?:0|[1-9]\d*)$/, $ = {};
  $[be] = $[re] = $[Gt] = $[ye] = $[As] = $[B] = $[_] = $[R] = $[it] = !0, $[a] = $[u] = $[Dt] = $[d] = $[Ut] = $[b] = $[m] = $[p] = $[N] = $[v] = $[x] = $[T] = $[I] = $[D] = $[kt] = !1;
  var ie = typeof Jt == "object" && Jt && Jt.Object === Object && Jt, pn = typeof self == "object" && self && self.Object === Object && self, vt = ie || pn || Function("return this")(), xs = t && !t.nodeType && t, Ls = xs && !0 && r && !r.nodeType && r, ze = Ls && Ls.exports === xs, Ve = ze && ie.process, Ts = function() {
    try {
      return Ve && Ve.binding && Ve.binding("util");
    } catch (l) {
    }
  }(), Ke = Ts && Ts.isTypedArray;
  function qs(l, c) {
    for (var f = -1, y = l == null ? 0 : l.length, M = 0, O = []; ++f < y; ) {
      var P = l[f];
      c(P, f, l) && (O[M++] = P);
    }
    return O;
  }
  function Ge(l, c) {
    for (var f = -1, y = c.length, M = l.length; ++f < y; )
      l[M + f] = c[f];
    return l;
  }
  function Cs(l, c) {
    for (var f = -1, y = l == null ? 0 : l.length; ++f < y; )
      if (c(l[f], f, l))
        return !0;
    return !1;
  }
  function gn(l, c) {
    for (var f = -1, y = Array(l); ++f < l; )
      y[f] = c(f);
    return y;
  }
  function bn(l) {
    return function(c) {
      return l(c);
    };
  }
  function ve(l, c) {
    return l.has(c);
  }
  function Ze(l, c) {
    return l == null ? void 0 : l[c];
  }
  function Ss(l) {
    var c = -1, f = Array(l.size);
    return l.forEach(function(y, M) {
      f[++c] = [M, y];
    }), f;
  }
  function ks(l, c) {
    return function(f) {
      return l(c(f));
    };
  }
  function Ot(l) {
    var c = -1, f = Array(l.size);
    return l.forEach(function(y) {
      f[++c] = y;
    }), f;
  }
  var Ee = Array.prototype, yn = Function.prototype, le = Object.prototype, Ne = vt["__core-js_shared__"], We = yn.toString, ft = le.hasOwnProperty, Os = function() {
    var l = /[^.]+$/.exec(Ne && Ne.keys && Ne.keys.IE_PROTO || "");
    return l ? "Symbol(src)_1." + l : "";
  }(), Is = le.toString, vn = RegExp(
    "^" + We.call(ft).replace(z, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Xe = ze ? vt.Buffer : void 0, we = vt.Symbol, Rs = vt.Uint8Array, Ae = le.propertyIsEnumerable, oe = Ee.splice, Et = we ? we.toStringTag : void 0, xe = Object.getOwnPropertySymbols, Ye = Xe ? Xe.isBuffer : void 0, ae = ks(Object.keys, Object), Je = jt(vt, "DataView"), ce = jt(vt, "Map"), Qe = jt(vt, "Promise"), ts = jt(vt, "Set"), es = jt(vt, "WeakMap"), Zt = jt(Object, "create"), _s = nt(Je), Pt = nt(ce), En = nt(Qe), Nn = nt(ts), wn = nt(es), Ms = we ? we.prototype : void 0, ss = Ms ? Ms.valueOf : void 0;
  function W(l) {
    var c = -1, f = l == null ? 0 : l.length;
    for (this.clear(); ++c < f; ) {
      var y = l[c];
      this.set(y[0], y[1]);
    }
  }
  function An() {
    this.__data__ = Zt ? Zt(null) : {}, this.size = 0;
  }
  function xn(l) {
    var c = this.has(l) && delete this.__data__[l];
    return this.size -= c ? 1 : 0, c;
  }
  function Ln(l) {
    var c = this.__data__;
    if (Zt) {
      var f = c[l];
      return f === s ? void 0 : f;
    }
    return ft.call(c, l) ? c[l] : void 0;
  }
  function Tn(l) {
    var c = this.__data__;
    return Zt ? c[l] !== void 0 : ft.call(c, l);
  }
  function qn(l, c) {
    var f = this.__data__;
    return this.size += this.has(l) ? 0 : 1, f[l] = Zt && c === void 0 ? s : c, this;
  }
  W.prototype.clear = An, W.prototype.delete = xn, W.prototype.get = Ln, W.prototype.has = Tn, W.prototype.set = qn;
  function J(l) {
    var c = -1, f = l == null ? 0 : l.length;
    for (this.clear(); ++c < f; ) {
      var y = l[c];
      this.set(y[0], y[1]);
    }
  }
  function Cn() {
    this.__data__ = [], this.size = 0;
  }
  function Sn(l) {
    var c = this.__data__, f = qe(c, l);
    if (f < 0)
      return !1;
    var y = c.length - 1;
    return f == y ? c.pop() : oe.call(c, f, 1), --this.size, !0;
  }
  function kn(l) {
    var c = this.__data__, f = qe(c, l);
    return f < 0 ? void 0 : c[f][1];
  }
  function On(l) {
    return qe(this.__data__, l) > -1;
  }
  function In(l, c) {
    var f = this.__data__, y = qe(f, l);
    return y < 0 ? (++this.size, f.push([l, c])) : f[y][1] = c, this;
  }
  J.prototype.clear = Cn, J.prototype.delete = Sn, J.prototype.get = kn, J.prototype.has = On, J.prototype.set = In;
  function lt(l) {
    var c = -1, f = l == null ? 0 : l.length;
    for (this.clear(); ++c < f; ) {
      var y = l[c];
      this.set(y[0], y[1]);
    }
  }
  function Rn() {
    this.size = 0, this.__data__ = {
      hash: new W(),
      map: new (ce || J)(),
      string: new W()
    };
  }
  function _n(l) {
    var c = Nt(this, l).delete(l);
    return this.size -= c ? 1 : 0, c;
  }
  function Mn(l) {
    return Nt(this, l).get(l);
  }
  function Bn(l) {
    return Nt(this, l).has(l);
  }
  function Dn(l, c) {
    var f = Nt(this, l), y = f.size;
    return f.set(l, c), this.size += f.size == y ? 0 : 1, this;
  }
  lt.prototype.clear = Rn, lt.prototype.delete = _n, lt.prototype.get = Mn, lt.prototype.has = Bn, lt.prototype.set = Dn;
  function Le(l) {
    var c = -1, f = l == null ? 0 : l.length;
    for (this.__data__ = new lt(); ++c < f; )
      this.add(l[c]);
  }
  function Bs(l) {
    return this.__data__.set(l, s), this;
  }
  function Te(l) {
    return this.__data__.has(l);
  }
  Le.prototype.add = Le.prototype.push = Bs, Le.prototype.has = Te;
  function It(l) {
    var c = this.__data__ = new J(l);
    this.size = c.size;
  }
  function ns() {
    this.__data__ = new J(), this.size = 0;
  }
  function Un(l) {
    var c = this.__data__, f = c.delete(l);
    return this.size = c.size, f;
  }
  function Pn(l) {
    return this.__data__.get(l);
  }
  function jn(l) {
    return this.__data__.has(l);
  }
  function $n(l, c) {
    var f = this.__data__;
    if (f instanceof J) {
      var y = f.__data__;
      if (!ce || y.length < e - 1)
        return y.push([l, c]), this.size = ++f.size, this;
      f = this.__data__ = new lt(y);
    }
    return f.set(l, c), this.size = f.size, this;
  }
  It.prototype.clear = ns, It.prototype.delete = Un, It.prototype.get = Pn, It.prototype.has = jn, It.prototype.set = $n;
  function Hn(l, c) {
    var f = Ce(l), y = !f && $s(l), M = !f && !y && Se(l), O = !f && !y && !M && zs(l), P = f || y || M || O, j = P ? gn(l.length, String) : [], V = j.length;
    for (var H in l)
      (c || ft.call(l, H)) && !(P && // Safari 9 has enumerable `arguments.length` in strict mode.
      (H == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      M && (H == "offset" || H == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      O && (H == "buffer" || H == "byteLength" || H == "byteOffset") || // Skip index properties.
      Xn(H, V))) && j.push(H);
    return j;
  }
  function qe(l, c) {
    for (var f = l.length; f--; )
      if (js(l[f][0], c))
        return f;
    return -1;
  }
  function rs(l, c, f) {
    var y = c(l);
    return Ce(l) ? y : Ge(y, f(l));
  }
  function ue(l) {
    return l == null ? l === void 0 ? ht : E : Et && Et in Object(l) ? $t(l) : Ps(l);
  }
  function Ds(l) {
    return _t(l) && ue(l) == a;
  }
  function Us(l, c, f, y, M) {
    return l === c ? !0 : l == null || c == null || !_t(l) && !_t(c) ? l !== l && c !== c : Fn(l, c, f, y, Us, M);
  }
  function Fn(l, c, f, y, M, O) {
    var P = Ce(l), j = Ce(c), V = P ? u : Rt(l), H = j ? u : Rt(c);
    V = V == a ? x : V, H = H == a ? x : H;
    var Q = V == x, ot = H == x, G = V == H;
    if (G && Se(l)) {
      if (!Se(c))
        return !1;
      P = !0, Q = !1;
    }
    if (G && !Q)
      return O || (O = new It()), P || zs(l) ? is(l, c, f, y, M, O) : Gn(l, c, V, f, y, M, O);
    if (!(f & n)) {
      var tt = Q && ft.call(l, "__wrapped__"), X = ot && ft.call(c, "__wrapped__");
      if (tt || X) {
        var Wt = tt ? l.value() : l, Ht = X ? c.value() : c;
        return O || (O = new It()), M(Wt, Ht, f, y, O);
      }
    }
    return G ? (O || (O = new It()), Zn(l, c, f, y, M, O)) : !1;
  }
  function zn(l) {
    if (!Fs(l) || Jn(l))
      return !1;
    var c = Hs(l) ? vn : K;
    return c.test(nt(l));
  }
  function Vn(l) {
    return _t(l) && os(l.length) && !!$[ue(l)];
  }
  function Kn(l) {
    if (!Qn(l))
      return ae(l);
    var c = [];
    for (var f in Object(l))
      ft.call(l, f) && f != "constructor" && c.push(f);
    return c;
  }
  function is(l, c, f, y, M, O) {
    var P = f & n, j = l.length, V = c.length;
    if (j != V && !(P && V > j))
      return !1;
    var H = O.get(l);
    if (H && O.get(c))
      return H == c;
    var Q = -1, ot = !0, G = f & i ? new Le() : void 0;
    for (O.set(l, c), O.set(c, l); ++Q < j; ) {
      var tt = l[Q], X = c[Q];
      if (y)
        var Wt = P ? y(X, tt, Q, c, l, O) : y(tt, X, Q, l, c, O);
      if (Wt !== void 0) {
        if (Wt)
          continue;
        ot = !1;
        break;
      }
      if (G) {
        if (!Cs(c, function(Ht, fe) {
          if (!ve(G, fe) && (tt === Ht || M(tt, Ht, f, y, O)))
            return G.push(fe);
        })) {
          ot = !1;
          break;
        }
      } else if (!(tt === X || M(tt, X, f, y, O))) {
        ot = !1;
        break;
      }
    }
    return O.delete(l), O.delete(c), ot;
  }
  function Gn(l, c, f, y, M, O, P) {
    switch (f) {
      case Ut:
        if (l.byteLength != c.byteLength || l.byteOffset != c.byteOffset)
          return !1;
        l = l.buffer, c = c.buffer;
      case Dt:
        return !(l.byteLength != c.byteLength || !O(new Rs(l), new Rs(c)));
      case d:
      case b:
      case v:
        return js(+l, +c);
      case m:
        return l.name == c.name && l.message == c.message;
      case T:
      case D:
        return l == c + "";
      case N:
        var j = Ss;
      case I:
        var V = y & n;
        if (j || (j = Ot), l.size != c.size && !V)
          return !1;
        var H = P.get(l);
        if (H)
          return H == c;
        y |= i, P.set(l, c);
        var Q = is(j(l), j(c), y, M, O, P);
        return P.delete(l), Q;
      case F:
        if (ss)
          return ss.call(l) == ss.call(c);
    }
    return !1;
  }
  function Zn(l, c, f, y, M, O) {
    var P = f & n, j = he(l), V = j.length, H = he(c), Q = H.length;
    if (V != Q && !P)
      return !1;
    for (var ot = V; ot--; ) {
      var G = j[ot];
      if (!(P ? G in c : ft.call(c, G)))
        return !1;
    }
    var tt = O.get(l);
    if (tt && O.get(c))
      return tt == c;
    var X = !0;
    O.set(l, c), O.set(c, l);
    for (var Wt = P; ++ot < V; ) {
      G = j[ot];
      var Ht = l[G], fe = c[G];
      if (y)
        var ti = P ? y(fe, Ht, G, c, l, O) : y(Ht, fe, G, l, c, O);
      if (!(ti === void 0 ? Ht === fe || M(Ht, fe, f, y, O) : ti)) {
        X = !1;
        break;
      }
      Wt || (Wt = G == "constructor");
    }
    if (X && !Wt) {
      var Vs = l.constructor, Ks = c.constructor;
      Vs != Ks && "constructor" in l && "constructor" in c && !(typeof Vs == "function" && Vs instanceof Vs && typeof Ks == "function" && Ks instanceof Ks) && (X = !1);
    }
    return O.delete(l), O.delete(c), X;
  }
  function he(l) {
    return rs(l, as, Wn);
  }
  function Nt(l, c) {
    var f = l.__data__;
    return Yn(c) ? f[typeof c == "string" ? "string" : "hash"] : f.map;
  }
  function jt(l, c) {
    var f = Ze(l, c);
    return zn(f) ? f : void 0;
  }
  function $t(l) {
    var c = ft.call(l, Et), f = l[Et];
    try {
      l[Et] = void 0;
      var y = !0;
    } catch (O) {
    }
    var M = Is.call(l);
    return y && (c ? l[Et] = f : delete l[Et]), M;
  }
  var Wn = xe ? function(l) {
    return l == null ? [] : (l = Object(l), qs(xe(l), function(c) {
      return Ae.call(l, c);
    }));
  } : er, Rt = ue;
  (Je && Rt(new Je(new ArrayBuffer(1))) != Ut || ce && Rt(new ce()) != N || Qe && Rt(Qe.resolve()) != L || ts && Rt(new ts()) != I || es && Rt(new es()) != kt) && (Rt = function(l) {
    var c = ue(l), f = c == x ? l.constructor : void 0, y = f ? nt(f) : "";
    if (y)
      switch (y) {
        case _s:
          return Ut;
        case Pt:
          return N;
        case En:
          return L;
        case Nn:
          return I;
        case wn:
          return kt;
      }
    return c;
  });
  function Xn(l, c) {
    return c = c == null ? o : c, !!c && (typeof l == "number" || Fe.test(l)) && l > -1 && l % 1 == 0 && l < c;
  }
  function Yn(l) {
    var c = typeof l;
    return c == "string" || c == "number" || c == "symbol" || c == "boolean" ? l !== "__proto__" : l === null;
  }
  function Jn(l) {
    return !!Os && Os in l;
  }
  function Qn(l) {
    var c = l && l.constructor, f = typeof c == "function" && c.prototype || le;
    return l === f;
  }
  function Ps(l) {
    return Is.call(l);
  }
  function nt(l) {
    if (l != null) {
      try {
        return We.call(l);
      } catch (c) {
      }
      try {
        return l + "";
      } catch (c) {
      }
    }
    return "";
  }
  function js(l, c) {
    return l === c || l !== l && c !== c;
  }
  var $s = Ds(function() {
    return arguments;
  }()) ? Ds : function(l) {
    return _t(l) && ft.call(l, "callee") && !Ae.call(l, "callee");
  }, Ce = Array.isArray;
  function ls(l) {
    return l != null && os(l.length) && !Hs(l);
  }
  var Se = Ye || sr;
  function tr(l, c) {
    return Us(l, c);
  }
  function Hs(l) {
    if (!Fs(l))
      return !1;
    var c = ue(l);
    return c == p || c == g || c == h || c == S;
  }
  function os(l) {
    return typeof l == "number" && l > -1 && l % 1 == 0 && l <= o;
  }
  function Fs(l) {
    var c = typeof l;
    return l != null && (c == "object" || c == "function");
  }
  function _t(l) {
    return l != null && typeof l == "object";
  }
  var zs = Ke ? bn(Ke) : Vn;
  function as(l) {
    return ls(l) ? Hn(l) : Kn(l);
  }
  function er() {
    return [];
  }
  function sr() {
    return !1;
  }
  r.exports = tr;
})(rn, rn.exports);
var Ki = rn.exports, Hr = {};
Object.defineProperty(Hr, "__esModule", { value: !0 });
const co = Vi, uo = Ki;
var Nr;
(function(r) {
  function t(i = {}, o = {}, a = !1) {
    typeof i != "object" && (i = {}), typeof o != "object" && (o = {});
    let u = co(o);
    a || (u = Object.keys(u).reduce((h, d) => (u[d] != null && (h[d] = u[d]), h), {}));
    for (const h in i)
      i[h] !== void 0 && o[h] === void 0 && (u[h] = i[h]);
    return Object.keys(u).length > 0 ? u : void 0;
  }
  r.compose = t;
  function e(i = {}, o = {}) {
    typeof i != "object" && (i = {}), typeof o != "object" && (o = {});
    const a = Object.keys(i).concat(Object.keys(o)).reduce((u, h) => (uo(i[h], o[h]) || (u[h] = o[h] === void 0 ? null : o[h]), u), {});
    return Object.keys(a).length > 0 ? a : void 0;
  }
  r.diff = e;
  function s(i = {}, o = {}) {
    i = i || {};
    const a = Object.keys(o).reduce((u, h) => (o[h] !== i[h] && i[h] !== void 0 && (u[h] = o[h]), u), {});
    return Object.keys(i).reduce((u, h) => (i[h] !== o[h] && o[h] === void 0 && (u[h] = null), u), a);
  }
  r.invert = s;
  function n(i, o, a = !1) {
    if (typeof i != "object")
      return o;
    if (typeof o != "object")
      return;
    if (!a)
      return o;
    const u = Object.keys(o).reduce((h, d) => (i[d] === void 0 && (h[d] = o[d]), h), {});
    return Object.keys(u).length > 0 ? u : void 0;
  }
  r.transform = n;
})(Nr || (Nr = {}));
Hr.default = Nr;
var hn = {};
Object.defineProperty(hn, "__esModule", { value: !0 });
var wr;
(function(r) {
  function t(e) {
    return typeof e.delete == "number" ? e.delete : typeof e.retain == "number" ? e.retain : typeof e.retain == "object" && e.retain !== null ? 1 : typeof e.insert == "string" ? e.insert.length : 1;
  }
  r.length = t;
})(wr || (wr = {}));
hn.default = wr;
var Fr = {};
Object.defineProperty(Fr, "__esModule", { value: !0 });
const ai = hn;
class ho {
  constructor(t) {
    this.ops = t, this.index = 0, this.offset = 0;
  }
  hasNext() {
    return this.peekLength() < 1 / 0;
  }
  next(t) {
    t || (t = 1 / 0);
    const e = this.ops[this.index];
    if (e) {
      const s = this.offset, n = ai.default.length(e);
      if (t >= n - s ? (t = n - s, this.index += 1, this.offset = 0) : this.offset += t, typeof e.delete == "number")
        return { delete: t };
      {
        const i = {};
        return e.attributes && (i.attributes = e.attributes), typeof e.retain == "number" ? i.retain = t : typeof e.retain == "object" && e.retain !== null ? i.retain = e.retain : typeof e.insert == "string" ? i.insert = e.insert.substr(s, t) : i.insert = e.insert, i;
      }
    } else
      return { retain: 1 / 0 };
  }
  peek() {
    return this.ops[this.index];
  }
  peekLength() {
    return this.ops[this.index] ? ai.default.length(this.ops[this.index]) - this.offset : 1 / 0;
  }
  peekType() {
    const t = this.ops[this.index];
    return t ? typeof t.delete == "number" ? "delete" : typeof t.retain == "number" || typeof t.retain == "object" && t.retain !== null ? "retain" : "insert" : "retain";
  }
  rest() {
    if (this.hasNext()) {
      if (this.offset === 0)
        return this.ops.slice(this.index);
      {
        const t = this.offset, e = this.index, s = this.next(), n = this.ops.slice(this.index);
        return this.offset = t, this.index = e, [s].concat(n);
      }
    } else
      return [];
  }
}
Fr.default = ho;
(function(r, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.AttributeMap = t.OpIterator = t.Op = void 0;
  const e = ao, s = Vi, n = Ki, i = Hr;
  t.AttributeMap = i.default;
  const o = hn;
  t.Op = o.default;
  const a = Fr;
  t.OpIterator = a.default;
  const u = String.fromCharCode(0), h = (b, m) => {
    if (typeof b != "object" || b === null)
      throw new Error("cannot retain a ".concat(typeof b));
    if (typeof m != "object" || m === null)
      throw new Error("cannot retain a ".concat(typeof m));
    const p = Object.keys(b)[0];
    if (!p || p !== Object.keys(m)[0])
      throw new Error("embed types not matched: ".concat(p, " != ").concat(Object.keys(m)[0]));
    return [p, b[p], m[p]];
  };
  class d {
    constructor(m) {
      Array.isArray(m) ? this.ops = m : m != null && Array.isArray(m.ops) ? this.ops = m.ops : this.ops = [];
    }
    static registerEmbed(m, p) {
      this.handlers[m] = p;
    }
    static unregisterEmbed(m) {
      delete this.handlers[m];
    }
    static getHandler(m) {
      const p = this.handlers[m];
      if (!p)
        throw new Error('no handlers for embed type "'.concat(m, '"'));
      return p;
    }
    insert(m, p) {
      const g = {};
      return typeof m == "string" && m.length === 0 ? this : (g.insert = m, p != null && typeof p == "object" && Object.keys(p).length > 0 && (g.attributes = p), this.push(g));
    }
    delete(m) {
      return m <= 0 ? this : this.push({ delete: m });
    }
    retain(m, p) {
      if (typeof m == "number" && m <= 0)
        return this;
      const g = { retain: m };
      return p != null && typeof p == "object" && Object.keys(p).length > 0 && (g.attributes = p), this.push(g);
    }
    push(m) {
      let p = this.ops.length, g = this.ops[p - 1];
      if (m = s(m), typeof g == "object") {
        if (typeof m.delete == "number" && typeof g.delete == "number")
          return this.ops[p - 1] = { delete: g.delete + m.delete }, this;
        if (typeof g.delete == "number" && m.insert != null && (p -= 1, g = this.ops[p - 1], typeof g != "object"))
          return this.ops.unshift(m), this;
        if (n(m.attributes, g.attributes)) {
          if (typeof m.insert == "string" && typeof g.insert == "string")
            return this.ops[p - 1] = { insert: g.insert + m.insert }, typeof m.attributes == "object" && (this.ops[p - 1].attributes = m.attributes), this;
          if (typeof m.retain == "number" && typeof g.retain == "number")
            return this.ops[p - 1] = { retain: g.retain + m.retain }, typeof m.attributes == "object" && (this.ops[p - 1].attributes = m.attributes), this;
        }
      }
      return p === this.ops.length ? this.ops.push(m) : this.ops.splice(p, 0, m), this;
    }
    chop() {
      const m = this.ops[this.ops.length - 1];
      return m && typeof m.retain == "number" && !m.attributes && this.ops.pop(), this;
    }
    filter(m) {
      return this.ops.filter(m);
    }
    forEach(m) {
      this.ops.forEach(m);
    }
    map(m) {
      return this.ops.map(m);
    }
    partition(m) {
      const p = [], g = [];
      return this.forEach((N) => {
        (m(N) ? p : g).push(N);
      }), [p, g];
    }
    reduce(m, p) {
      return this.ops.reduce(m, p);
    }
    changeLength() {
      return this.reduce((m, p) => p.insert ? m + o.default.length(p) : p.delete ? m - p.delete : m, 0);
    }
    length() {
      return this.reduce((m, p) => m + o.default.length(p), 0);
    }
    slice(m = 0, p = 1 / 0) {
      const g = [], N = new a.default(this.ops);
      let v = 0;
      for (; v < p && N.hasNext(); ) {
        let E;
        v < m ? E = N.next(m - v) : (E = N.next(p - v), g.push(E)), v += o.default.length(E);
      }
      return new d(g);
    }
    compose(m) {
      const p = new a.default(this.ops), g = new a.default(m.ops), N = [], v = g.peek();
      if (v != null && typeof v.retain == "number" && v.attributes == null) {
        let x = v.retain;
        for (; p.peekType() === "insert" && p.peekLength() <= x; )
          x -= p.peekLength(), N.push(p.next());
        v.retain - x > 0 && g.next(v.retain - x);
      }
      const E = new d(N);
      for (; p.hasNext() || g.hasNext(); )
        if (g.peekType() === "insert")
          E.push(g.next());
        else if (p.peekType() === "delete")
          E.push(p.next());
        else {
          const x = Math.min(p.peekLength(), g.peekLength()), L = p.next(x), S = g.next(x);
          if (S.retain) {
            const T = {};
            if (typeof L.retain == "number")
              T.retain = typeof S.retain == "number" ? x : S.retain;
            else if (typeof S.retain == "number")
              L.retain == null ? T.insert = L.insert : T.retain = L.retain;
            else {
              const D = L.retain == null ? "insert" : "retain", [F, ht, kt] = h(L[D], S.retain), Dt = d.getHandler(F);
              T[D] = {
                [F]: Dt.compose(ht, kt, D === "retain")
              };
            }
            const I = i.default.compose(L.attributes, S.attributes, typeof L.retain == "number");
            if (I && (T.attributes = I), E.push(T), !g.hasNext() && n(E.ops[E.ops.length - 1], T)) {
              const D = new d(p.rest());
              return E.concat(D).chop();
            }
          } else
            typeof S.delete == "number" && (typeof L.retain == "number" || typeof L.retain == "object" && L.retain !== null) && E.push(S);
        }
      return E.chop();
    }
    concat(m) {
      const p = new d(this.ops.slice());
      return m.ops.length > 0 && (p.push(m.ops[0]), p.ops = p.ops.concat(m.ops.slice(1))), p;
    }
    diff(m, p) {
      if (this.ops === m.ops)
        return new d();
      const g = [this, m].map((L) => L.map((S) => {
        if (S.insert != null)
          return typeof S.insert == "string" ? S.insert : u;
        const T = L === m ? "on" : "with";
        throw new Error("diff() called " + T + " non-document");
      }).join("")), N = new d(), v = e(g[0], g[1], p, !0), E = new a.default(this.ops), x = new a.default(m.ops);
      return v.forEach((L) => {
        let S = L[1].length;
        for (; S > 0; ) {
          let T = 0;
          switch (L[0]) {
            case e.INSERT:
              T = Math.min(x.peekLength(), S), N.push(x.next(T));
              break;
            case e.DELETE:
              T = Math.min(S, E.peekLength()), E.next(T), N.delete(T);
              break;
            case e.EQUAL:
              T = Math.min(E.peekLength(), x.peekLength(), S);
              const I = E.next(T), D = x.next(T);
              n(I.insert, D.insert) ? N.retain(T, i.default.diff(I.attributes, D.attributes)) : N.push(D).delete(T);
              break;
          }
          S -= T;
        }
      }), N.chop();
    }
    eachLine(m, p = "\n") {
      const g = new a.default(this.ops);
      let N = new d(), v = 0;
      for (; g.hasNext(); ) {
        if (g.peekType() !== "insert")
          return;
        const E = g.peek(), x = o.default.length(E) - g.peekLength(), L = typeof E.insert == "string" ? E.insert.indexOf(p, x) - x : -1;
        if (L < 0)
          N.push(g.next());
        else if (L > 0)
          N.push(g.next(L));
        else {
          if (m(N, g.next(1).attributes || {}, v) === !1)
            return;
          v += 1, N = new d();
        }
      }
      N.length() > 0 && m(N, {}, v);
    }
    invert(m) {
      const p = new d();
      return this.reduce((g, N) => {
        if (N.insert)
          p.delete(o.default.length(N));
        else {
          if (typeof N.retain == "number" && N.attributes == null)
            return p.retain(N.retain), g + N.retain;
          if (N.delete || typeof N.retain == "number") {
            const v = N.delete || N.retain;
            return m.slice(g, g + v).forEach((x) => {
              N.delete ? p.push(x) : N.retain && N.attributes && p.retain(o.default.length(x), i.default.invert(N.attributes, x.attributes));
            }), g + v;
          } else if (typeof N.retain == "object" && N.retain !== null) {
            const v = m.slice(g, g + 1), E = new a.default(v.ops).next(), [x, L, S] = h(N.retain, E.insert), T = d.getHandler(x);
            return p.retain({ [x]: T.invert(L, S) }, i.default.invert(N.attributes, E.attributes)), g + 1;
          }
        }
        return g;
      }, 0), p.chop();
    }
    transform(m, p = !1) {
      if (p = !!p, typeof m == "number")
        return this.transformPosition(m, p);
      const g = m, N = new a.default(this.ops), v = new a.default(g.ops), E = new d();
      for (; N.hasNext() || v.hasNext(); )
        if (N.peekType() === "insert" && (p || v.peekType() !== "insert"))
          E.retain(o.default.length(N.next()));
        else if (v.peekType() === "insert")
          E.push(v.next());
        else {
          const x = Math.min(N.peekLength(), v.peekLength()), L = N.next(x), S = v.next(x);
          if (L.delete)
            continue;
          if (S.delete)
            E.push(S);
          else {
            const T = L.retain, I = S.retain;
            let D = typeof I == "object" && I !== null ? I : x;
            if (typeof T == "object" && T !== null && typeof I == "object" && I !== null) {
              const F = Object.keys(T)[0];
              if (F === Object.keys(I)[0]) {
                const ht = d.getHandler(F);
                ht && (D = {
                  [F]: ht.transform(T[F], I[F], p)
                });
              }
            }
            E.retain(D, i.default.transform(L.attributes, S.attributes, p));
          }
        }
      return E.chop();
    }
    transformPosition(m, p = !1) {
      p = !!p;
      const g = new a.default(this.ops);
      let N = 0;
      for (; g.hasNext() && N <= m; ) {
        const v = g.peekLength(), E = g.peekType();
        if (g.next(), E === "delete") {
          m -= Math.min(v, m - N);
          continue;
        } else
          E === "insert" && (N < m || !p) && (m += v);
        N += v;
      }
      return m;
    }
  }
  d.Op = o.default, d.OpIterator = a.default, d.AttributeMap = i.default, d.handlers = {}, t.default = d, r.exports = d, r.exports.default = d;
})(Er, Er.exports);
var yt = Er.exports;
const C = /* @__PURE__ */ ji(yt);
class Ct extends ut {
  static value() {
  }
  optimize() {
    (this.prev || this.next) && this.remove();
  }
  length() {
    return 0;
  }
  value() {
    return "";
  }
}
Ct.blotName = "break";
Ct.tagName = "BR";
let Tt = class extends sn {
};
function fn(r) {
  return r.replace(/[&<>"']/g, (t) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[t]);
}
var gt;
let ne = (gt = class extends Ur {
  static compare(t, e) {
    const s = gt.order.indexOf(t), n = gt.order.indexOf(e);
    return s >= 0 || n >= 0 ? s - n : t === e ? 0 : t < e ? -1 : 1;
  }
  formatAt(t, e, s, n) {
    if (gt.compare(this.statics.blotName, s) < 0 && this.scroll.query(s, k.BLOT)) {
      const i = this.isolate(t, e);
      n && i.wrap(s, n);
    } else
      super.formatAt(t, e, s, n);
  }
  optimize(t) {
    if (super.optimize(t), this.parent instanceof gt && gt.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
      const e = this.parent.isolate(this.offset(), this.length());
      this.moveChildren(e), e.wrap(this);
    }
  }
}, A(gt, "allowedChildren", [gt, Ct, ut, Tt]), // Lower index means deeper in the DOM tree, since not found (-1) is for embeds
A(gt, "order", [
  "cursor",
  "inline",
  // Must be lower
  "link",
  // Chrome wants <a> to be lower
  "underline",
  "strike",
  "italic",
  "bold",
  "script",
  "code"
  // Must be higher
]), gt);
const ci = 1;
class Y extends ms {
  constructor() {
    super(...arguments);
    A(this, "cache", {});
  }
  delta() {
    return this.cache.delta == null && (this.cache.delta = Gi(this)), this.cache.delta;
  }
  deleteAt(e, s) {
    super.deleteAt(e, s), this.cache = {};
  }
  formatAt(e, s, n, i) {
    s <= 0 || (this.scroll.query(n, k.BLOCK) ? e + s === this.length() && this.format(n, i) : super.formatAt(e, Math.min(s, this.length() - e - 1), n, i), this.cache = {});
  }
  insertAt(e, s, n) {
    if (n != null) {
      super.insertAt(e, s, n), this.cache = {};
      return;
    }
    if (s.length === 0)
      return;
    const i = s.split("\n"), o = i.shift();
    o.length > 0 && (e < this.length() - 1 || this.children.tail == null ? super.insertAt(Math.min(e, this.length() - 1), o) : this.children.tail.insertAt(this.children.tail.length(), o), this.cache = {});
    let a = this;
    i.reduce((u, h) => (a = a.split(u, !0), a.insertAt(0, h), h.length), e + o.length);
  }
  insertBefore(e, s) {
    const {
      head: n
    } = this.children;
    super.insertBefore(e, s), n instanceof Ct && n.remove(), this.cache = {};
  }
  length() {
    return this.cache.length == null && (this.cache.length = super.length() + ci), this.cache.length;
  }
  moveChildren(e, s) {
    super.moveChildren(e, s), this.cache = {};
  }
  optimize(e) {
    super.optimize(e), this.cache = {};
  }
  path(e) {
    return super.path(e, !0);
  }
  removeChild(e) {
    super.removeChild(e), this.cache = {};
  }
  split(e) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (s && (e === 0 || e >= this.length() - ci)) {
      const i = this.clone();
      return e === 0 ? (this.parent.insertBefore(i, this), this) : (this.parent.insertBefore(i, this.next), i);
    }
    const n = super.split(e, s);
    return this.cache = {}, n;
  }
}
Y.blotName = "block";
Y.tagName = "P";
Y.defaultChild = Ct;
Y.allowedChildren = [Ct, ne, ut, Tt];
class bt extends ut {
  attach() {
    super.attach(), this.attributes = new on(this.domNode);
  }
  delta() {
    return new C().insert(this.value(), {
      ...this.formats(),
      ...this.attributes.values()
    });
  }
  format(t, e) {
    const s = this.scroll.query(t, k.BLOCK_ATTRIBUTE);
    s != null && this.attributes.attribute(s, e);
  }
  formatAt(t, e, s, n) {
    this.format(s, n);
  }
  insertAt(t, e, s) {
    if (s != null) {
      super.insertAt(t, e, s);
      return;
    }
    const n = e.split("\n"), i = n.pop(), o = n.map((u) => {
      const h = this.scroll.create(Y.blotName);
      return h.insertAt(0, u), h;
    }), a = this.split(t);
    o.forEach((u) => {
      this.parent.insertBefore(u, a);
    }), i && this.parent.insertBefore(this.scroll.create("text", i), a);
  }
}
bt.scope = k.BLOCK_BLOT;
function Gi(r) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return r.descendants(et).reduce((e, s) => s.length() === 0 ? e : e.insert(s.value(), mt(s, {}, t)), new C()).insert("\n", mt(r));
}
function mt(r) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  return r == null || ("formats" in r && typeof r.formats == "function" && (t = {
    ...t,
    ...r.formats()
  }, e && delete t["code-token"]), r.parent == null || r.parent.statics.blotName === "scroll" || r.parent.statics.scope !== r.statics.scope) ? t : mt(r.parent, t, e);
}
const dt = class dt extends ut {
  // Zero width no break space
  static value() {
  }
  constructor(t, e, s) {
    super(t, e), this.selection = s, this.textNode = document.createTextNode(dt.CONTENTS), this.domNode.appendChild(this.textNode), this.savedLength = 0;
  }
  detach() {
    this.parent != null && this.parent.removeChild(this);
  }
  format(t, e) {
    if (this.savedLength !== 0) {
      super.format(t, e);
      return;
    }
    let s = this, n = 0;
    for (; s != null && s.statics.scope !== k.BLOCK_BLOT; )
      n += s.offset(s.parent), s = s.parent;
    s != null && (this.savedLength = dt.CONTENTS.length, s.optimize(), s.formatAt(n, dt.CONTENTS.length, t, e), this.savedLength = 0);
  }
  index(t, e) {
    return t === this.textNode ? 0 : super.index(t, e);
  }
  length() {
    return this.savedLength;
  }
  position() {
    return [this.textNode, this.textNode.data.length];
  }
  remove() {
    super.remove(), this.parent = null;
  }
  restore() {
    if (this.selection.composing || this.parent == null)
      return null;
    const t = this.selection.getNativeRange();
    for (; this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode; )
      this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
    const e = this.prev instanceof Tt ? this.prev : null, s = e ? e.length() : 0, n = this.next instanceof Tt ? this.next : null, i = n ? n.text : "", {
      textNode: o
    } = this, a = o.data.split(dt.CONTENTS).join("");
    o.data = dt.CONTENTS;
    let u;
    if (e)
      u = e, (a || n) && (e.insertAt(e.length(), a + i), n && n.remove());
    else if (n)
      u = n, n.insertAt(0, a);
    else {
      const h = document.createTextNode(a);
      u = this.scroll.create(h), this.parent.insertBefore(u, this);
    }
    if (this.remove(), t) {
      const h = (m, p) => e && m === e.domNode ? p : m === o ? s + p - 1 : n && m === n.domNode ? s + a.length + p : null, d = h(t.start.node, t.start.offset), b = h(t.end.node, t.end.offset);
      if (d !== null && b !== null)
        return {
          startNode: u.domNode,
          startOffset: d,
          endNode: u.domNode,
          endOffset: b
        };
    }
    return null;
  }
  update(t, e) {
    if (t.some((s) => s.type === "characterData" && s.target === this.textNode)) {
      const s = this.restore();
      s && (e.range = s);
    }
  }
  // Avoid .ql-cursor being a descendant of `<a/>`.
  // The reason is Safari pushes down `<a/>` on text insertion.
  // That will cause DOM nodes not sync with the model.
  //
  // For example ({I} is the caret), given the markup:
  //    <a><span class="ql-cursor">\uFEFF{I}</span></a>
  // When typing a char "x", `<a/>` will be pushed down inside the `<span>` first:
  //    <span class="ql-cursor"><a>\uFEFF{I}</a></span>
  // And then "x" will be inserted after `<a/>`:
  //    <span class="ql-cursor"><a>\uFEFF</a>d{I}</span>
  optimize(t) {
    super.optimize(t);
    let {
      parent: e
    } = this;
    for (; e; ) {
      if (e.domNode.tagName === "A") {
        this.savedLength = dt.CONTENTS.length, e.isolate(this.offset(e), this.length()).unwrap(), this.savedLength = 0;
        break;
      }
      e = e.parent;
    }
  }
  value() {
    return "";
  }
};
A(dt, "blotName", "cursor"), A(dt, "className", "ql-cursor"), A(dt, "tagName", "span"), A(dt, "CONTENTS", "\uFEFF");
let je = dt;
var Zi = { exports: {} };
(function(r) {
  var t = Object.prototype.hasOwnProperty, e = "~";
  function s() {
  }
  Object.create && (s.prototype = /* @__PURE__ */ Object.create(null), new s().__proto__ || (e = !1));
  function n(u, h, d) {
    this.fn = u, this.context = h, this.once = d || !1;
  }
  function i(u, h, d, b, m) {
    if (typeof d != "function")
      throw new TypeError("The listener must be a function");
    var p = new n(d, b || u, m), g = e ? e + h : h;
    return u._events[g] ? u._events[g].fn ? u._events[g] = [u._events[g], p] : u._events[g].push(p) : (u._events[g] = p, u._eventsCount++), u;
  }
  function o(u, h) {
    --u._eventsCount === 0 ? u._events = new s() : delete u._events[h];
  }
  function a() {
    this._events = new s(), this._eventsCount = 0;
  }
  a.prototype.eventNames = function() {
    var h = [], d, b;
    if (this._eventsCount === 0)
      return h;
    for (b in d = this._events)
      t.call(d, b) && h.push(e ? b.slice(1) : b);
    return Object.getOwnPropertySymbols ? h.concat(Object.getOwnPropertySymbols(d)) : h;
  }, a.prototype.listeners = function(h) {
    var d = e ? e + h : h, b = this._events[d];
    if (!b)
      return [];
    if (b.fn)
      return [b.fn];
    for (var m = 0, p = b.length, g = new Array(p); m < p; m++)
      g[m] = b[m].fn;
    return g;
  }, a.prototype.listenerCount = function(h) {
    var d = e ? e + h : h, b = this._events[d];
    return b ? b.fn ? 1 : b.length : 0;
  }, a.prototype.emit = function(h, d, b, m, p, g) {
    var N = e ? e + h : h;
    if (!this._events[N])
      return !1;
    var v = this._events[N], E = arguments.length, x, L;
    if (v.fn) {
      switch (v.once && this.removeListener(h, v.fn, void 0, !0), E) {
        case 1:
          return v.fn.call(v.context), !0;
        case 2:
          return v.fn.call(v.context, d), !0;
        case 3:
          return v.fn.call(v.context, d, b), !0;
        case 4:
          return v.fn.call(v.context, d, b, m), !0;
        case 5:
          return v.fn.call(v.context, d, b, m, p), !0;
        case 6:
          return v.fn.call(v.context, d, b, m, p, g), !0;
      }
      for (L = 1, x = new Array(E - 1); L < E; L++)
        x[L - 1] = arguments[L];
      v.fn.apply(v.context, x);
    } else {
      var S = v.length, T;
      for (L = 0; L < S; L++)
        switch (v[L].once && this.removeListener(h, v[L].fn, void 0, !0), E) {
          case 1:
            v[L].fn.call(v[L].context);
            break;
          case 2:
            v[L].fn.call(v[L].context, d);
            break;
          case 3:
            v[L].fn.call(v[L].context, d, b);
            break;
          case 4:
            v[L].fn.call(v[L].context, d, b, m);
            break;
          default:
            if (!x)
              for (T = 1, x = new Array(E - 1); T < E; T++)
                x[T - 1] = arguments[T];
            v[L].fn.apply(v[L].context, x);
        }
    }
    return !0;
  }, a.prototype.on = function(h, d, b) {
    return i(this, h, d, b, !1);
  }, a.prototype.once = function(h, d, b) {
    return i(this, h, d, b, !0);
  }, a.prototype.removeListener = function(h, d, b, m) {
    var p = e ? e + h : h;
    if (!this._events[p])
      return this;
    if (!d)
      return o(this, p), this;
    var g = this._events[p];
    if (g.fn)
      g.fn === d && (!m || g.once) && (!b || g.context === b) && o(this, p);
    else {
      for (var N = 0, v = [], E = g.length; N < E; N++)
        (g[N].fn !== d || m && !g[N].once || b && g[N].context !== b) && v.push(g[N]);
      v.length ? this._events[p] = v.length === 1 ? v[0] : v : o(this, p);
    }
    return this;
  }, a.prototype.removeAllListeners = function(h) {
    var d;
    return h ? (d = e ? e + h : h, this._events[d] && o(this, d)) : (this._events = new s(), this._eventsCount = 0), this;
  }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = e, a.EventEmitter = a, r.exports = a;
})(Zi);
var fo = Zi.exports;
const mo = /* @__PURE__ */ ji(fo), Ar = /* @__PURE__ */ new WeakMap(), xr = ["error", "warn", "log", "info"];
let Lr = "warn";
function Wi(r) {
  if (Lr && xr.indexOf(r) <= xr.indexOf(Lr)) {
    for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)
      e[s - 1] = arguments[s];
    console[r](...e);
  }
}
function Kt(r) {
  return xr.reduce((t, e) => (t[e] = Wi.bind(console, e, r), t), {});
}
Kt.level = (r) => {
  Lr = r;
};
Wi.level = Kt.level;
const or = Kt("quill:events"), po = ["selectionchange", "mousedown", "mouseup", "click"];
po.forEach((r) => {
  document.addEventListener(r, function() {
    for (var t = arguments.length, e = new Array(t), s = 0; s < t; s++)
      e[s] = arguments[s];
    Array.from(document.querySelectorAll(".ql-container")).forEach((n) => {
      const i = Ar.get(n);
      i && i.emitter && i.emitter.handleDOM(...e);
    });
  });
});
class q extends mo {
  constructor() {
    super(), this.domListeners = {}, this.on("error", or.error);
  }
  emit() {
    for (var t = arguments.length, e = new Array(t), s = 0; s < t; s++)
      e[s] = arguments[s];
    return or.log.call(or, ...e), super.emit(...e);
  }
  handleDOM(t) {
    for (var e = arguments.length, s = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
      s[n - 1] = arguments[n];
    (this.domListeners[t.type] || []).forEach((i) => {
      let {
        node: o,
        handler: a
      } = i;
      (t.target === o || o.contains(t.target)) && a(t, ...s);
    });
  }
  listenDOM(t, e, s) {
    this.domListeners[t] || (this.domListeners[t] = []), this.domListeners[t].push({
      node: e,
      handler: s
    });
  }
}
A(q, "events", {
  EDITOR_CHANGE: "editor-change",
  SCROLL_BEFORE_UPDATE: "scroll-before-update",
  SCROLL_BLOT_MOUNT: "scroll-blot-mount",
  SCROLL_BLOT_UNMOUNT: "scroll-blot-unmount",
  SCROLL_OPTIMIZE: "scroll-optimize",
  SCROLL_UPDATE: "scroll-update",
  SCROLL_EMBED_UPDATE: "scroll-embed-update",
  SELECTION_CHANGE: "selection-change",
  TEXT_CHANGE: "text-change",
  COMPOSITION_BEFORE_START: "composition-before-start",
  COMPOSITION_START: "composition-start",
  COMPOSITION_BEFORE_END: "composition-before-end",
  COMPOSITION_END: "composition-end"
}), A(q, "sources", {
  API: "api",
  SILENT: "silent",
  USER: "user"
});
const ar = Kt("quill:selection");
class de {
  constructor(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    this.index = t, this.length = e;
  }
}
class go {
  constructor(t, e) {
    this.emitter = e, this.scroll = t, this.composing = !1, this.mouseDown = !1, this.root = this.scroll.domNode, this.cursor = this.scroll.create("cursor", this), this.savedRange = new de(0, 0), this.lastRange = this.savedRange, this.lastNative = null, this.handleComposition(), this.handleDragging(), this.emitter.listenDOM("selectionchange", document, () => {
      !this.mouseDown && !this.composing && setTimeout(this.update.bind(this, q.sources.USER), 1);
    }), this.emitter.on(q.events.SCROLL_BEFORE_UPDATE, () => {
      if (!this.hasFocus())
        return;
      const s = this.getNativeRange();
      s != null && s.start.node !== this.cursor.textNode && this.emitter.once(q.events.SCROLL_UPDATE, (n, i) => {
        try {
          this.root.contains(s.start.node) && this.root.contains(s.end.node) && this.setNativeRange(s.start.node, s.start.offset, s.end.node, s.end.offset);
          const o = i.some((a) => a.type === "characterData" || a.type === "childList" || a.type === "attributes" && a.target === this.root);
          this.update(o ? q.sources.SILENT : n);
        } catch (o) {
        }
      });
    }), this.emitter.on(q.events.SCROLL_OPTIMIZE, (s, n) => {
      if (n.range) {
        const {
          startNode: i,
          startOffset: o,
          endNode: a,
          endOffset: u
        } = n.range;
        this.setNativeRange(i, o, a, u), this.update(q.sources.SILENT);
      }
    }), this.update(q.sources.SILENT);
  }
  handleComposition() {
    this.emitter.on(q.events.COMPOSITION_BEFORE_START, () => {
      this.composing = !0;
    }), this.emitter.on(q.events.COMPOSITION_END, () => {
      if (this.composing = !1, this.cursor.parent) {
        const t = this.cursor.restore();
        if (!t)
          return;
        setTimeout(() => {
          this.setNativeRange(t.startNode, t.startOffset, t.endNode, t.endOffset);
        }, 1);
      }
    });
  }
  handleDragging() {
    this.emitter.listenDOM("mousedown", document.body, () => {
      this.mouseDown = !0;
    }), this.emitter.listenDOM("mouseup", document.body, () => {
      this.mouseDown = !1, this.update(q.sources.USER);
    });
  }
  focus() {
    this.hasFocus() || (this.root.focus({
      preventScroll: !0
    }), this.setRange(this.savedRange));
  }
  format(t, e) {
    this.scroll.update();
    const s = this.getNativeRange();
    if (!(s == null || !s.native.collapsed || this.scroll.query(t, k.BLOCK))) {
      if (s.start.node !== this.cursor.textNode) {
        const n = this.scroll.find(s.start.node, !1);
        if (n == null)
          return;
        if (n instanceof et) {
          const i = n.split(s.start.offset);
          n.parent.insertBefore(this.cursor, i);
        } else
          n.insertBefore(this.cursor, s.start.node);
        this.cursor.attach();
      }
      this.cursor.format(t, e), this.scroll.optimize(), this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length), this.update();
    }
  }
  getBounds(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    const s = this.scroll.length();
    t = Math.min(t, s - 1), e = Math.min(t + e, s - 1) - t;
    let n, [i, o] = this.scroll.leaf(t);
    if (i == null)
      return null;
    if (e > 0 && o === i.length()) {
      const [d] = this.scroll.leaf(t + 1);
      if (d) {
        const [b] = this.scroll.line(t), [m] = this.scroll.line(t + 1);
        b === m && (i = d, o = 0);
      }
    }
    [n, o] = i.position(o, !0);
    const a = document.createRange();
    if (e > 0)
      return a.setStart(n, o), [i, o] = this.scroll.leaf(t + e), i == null ? null : ([n, o] = i.position(o, !0), a.setEnd(n, o), a.getBoundingClientRect());
    let u = "left", h;
    if (n instanceof Text) {
      if (!n.data.length)
        return null;
      o < n.data.length ? (a.setStart(n, o), a.setEnd(n, o + 1)) : (a.setStart(n, o - 1), a.setEnd(n, o), u = "right"), h = a.getBoundingClientRect();
    } else {
      if (!(i.domNode instanceof Element))
        return null;
      h = i.domNode.getBoundingClientRect(), o > 0 && (u = "right");
    }
    return {
      bottom: h.top + h.height,
      height: h.height,
      left: h[u],
      right: h[u],
      top: h.top,
      width: 0
    };
  }
  getNativeRange() {
    const t = document.getSelection();
    if (t == null || t.rangeCount <= 0)
      return null;
    const e = t.getRangeAt(0);
    if (e == null)
      return null;
    const s = this.normalizeNative(e);
    return ar.info("getNativeRange", s), s;
  }
  getRange() {
    const t = this.scroll.domNode;
    if ("isConnected" in t && !t.isConnected)
      return [null, null];
    const e = this.getNativeRange();
    return e == null ? [null, null] : [this.normalizedToRange(e), e];
  }
  hasFocus() {
    return document.activeElement === this.root || document.activeElement != null && cr(this.root, document.activeElement);
  }
  normalizedToRange(t) {
    const e = [[t.start.node, t.start.offset]];
    t.native.collapsed || e.push([t.end.node, t.end.offset]);
    const s = e.map((o) => {
      const [a, u] = o, h = this.scroll.find(a, !0), d = h.offset(this.scroll);
      return u === 0 ? d : h instanceof et ? d + h.index(a, u) : d + h.length();
    }), n = Math.min(Math.max(...s), this.scroll.length() - 1), i = Math.min(n, ...s);
    return new de(i, n - i);
  }
  normalizeNative(t) {
    if (!cr(this.root, t.startContainer) || !t.collapsed && !cr(this.root, t.endContainer))
      return null;
    const e = {
      start: {
        node: t.startContainer,
        offset: t.startOffset
      },
      end: {
        node: t.endContainer,
        offset: t.endOffset
      },
      native: t
    };
    return [e.start, e.end].forEach((s) => {
      let {
        node: n,
        offset: i
      } = s;
      for (; !(n instanceof Text) && n.childNodes.length > 0; )
        if (n.childNodes.length > i)
          n = n.childNodes[i], i = 0;
        else if (n.childNodes.length === i)
          n = n.lastChild, n instanceof Text ? i = n.data.length : n.childNodes.length > 0 ? i = n.childNodes.length : i = n.childNodes.length + 1;
        else
          break;
      s.node = n, s.offset = i;
    }), e;
  }
  rangeToNative(t) {
    const e = this.scroll.length(), s = (n, i) => {
      n = Math.min(e - 1, n);
      const [o, a] = this.scroll.leaf(n);
      return o ? o.position(a, i) : [null, -1];
    };
    return [...s(t.index, !1), ...s(t.index + t.length, !0)];
  }
  setNativeRange(t, e) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : t, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : e, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
    if (ar.info("setNativeRange", t, e, s, n), t != null && (this.root.parentNode == null || t.parentNode == null || // @ts-expect-error Fix me later
    s.parentNode == null))
      return;
    const o = document.getSelection();
    if (o != null)
      if (t != null) {
        this.hasFocus() || this.root.focus({
          preventScroll: !0
        });
        const {
          native: a
        } = this.getNativeRange() || {};
        if (a == null || i || t !== a.startContainer || e !== a.startOffset || s !== a.endContainer || n !== a.endOffset) {
          t instanceof Element && t.tagName === "BR" && (e = Array.from(t.parentNode.childNodes).indexOf(t), t = t.parentNode), s instanceof Element && s.tagName === "BR" && (n = Array.from(s.parentNode.childNodes).indexOf(s), s = s.parentNode);
          const u = document.createRange();
          u.setStart(t, e), u.setEnd(s, n), o.removeAllRanges(), o.addRange(u);
        }
      } else
        o.removeAllRanges(), this.root.blur();
  }
  setRange(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : q.sources.API;
    if (typeof e == "string" && (s = e, e = !1), ar.info("setRange", t), t != null) {
      const n = this.rangeToNative(t);
      this.setNativeRange(...n, e);
    } else
      this.setNativeRange(null);
    this.update(s);
  }
  update() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : q.sources.USER;
    const e = this.lastRange, [s, n] = this.getRange();
    if (this.lastRange = s, this.lastNative = n, this.lastRange != null && (this.savedRange = this.lastRange), !Br(e, this.lastRange)) {
      if (!this.composing && n != null && n.native.collapsed && n.start.node !== this.cursor.textNode) {
        const o = this.cursor.restore();
        o && this.setNativeRange(o.startNode, o.startOffset, o.endNode, o.endOffset);
      }
      const i = [q.events.SELECTION_CHANGE, Be(this.lastRange), Be(e), t];
      this.emitter.emit(q.events.EDITOR_CHANGE, ...i), t !== q.sources.SILENT && this.emitter.emit(...i);
    }
  }
}
function cr(r, t) {
  try {
    t.parentNode;
  } catch (e) {
    return !1;
  }
  return r.contains(t);
}
const bo = /^[ -~]*$/;
class yo {
  constructor(t) {
    this.scroll = t, this.delta = this.getDelta();
  }
  applyDelta(t) {
    this.scroll.update();
    let e = this.scroll.length();
    this.scroll.batchStart();
    const s = ui(t), n = new C();
    return Eo(s.ops.slice()).reduce((o, a) => {
      const u = yt.Op.length(a);
      let h = a.attributes || {}, d = !1, b = !1;
      if (a.insert != null) {
        if (n.retain(u), typeof a.insert == "string") {
          const g = a.insert;
          b = !g.endsWith("\n") && (e <= o || !!this.scroll.descendant(bt, o)[0]), this.scroll.insertAt(o, g);
          const [N, v] = this.scroll.line(o);
          let E = ee({}, mt(N));
          if (N instanceof Y) {
            const [x] = N.descendant(et, v);
            x && (E = ee(E, mt(x)));
          }
          h = yt.AttributeMap.diff(E, h) || {};
        } else if (typeof a.insert == "object") {
          const g = Object.keys(a.insert)[0];
          if (g == null)
            return o;
          const N = this.scroll.query(g, k.INLINE) != null;
          if (N)
            (e <= o || this.scroll.descendant(bt, o)[0]) && (b = !0);
          else if (o > 0) {
            const [v, E] = this.scroll.descendant(et, o - 1);
            v instanceof Tt ? v.value()[E] !== "\n" && (d = !0) : v instanceof ut && v.statics.scope === k.INLINE_BLOT && (d = !0);
          }
          if (this.scroll.insertAt(o, g, a.insert[g]), N) {
            const [v] = this.scroll.descendant(et, o);
            if (v) {
              const E = ee({}, mt(v));
              h = yt.AttributeMap.diff(E, h) || {};
            }
          }
        }
        e += u;
      } else if (n.push(a), a.retain !== null && typeof a.retain == "object") {
        const g = Object.keys(a.retain)[0];
        if (g == null)
          return o;
        this.scroll.updateEmbedAt(o, g, a.retain[g]);
      }
      Object.keys(h).forEach((g) => {
        this.scroll.formatAt(o, u, g, h[g]);
      });
      const m = d ? 1 : 0, p = b ? 1 : 0;
      return e += m + p, n.retain(m), n.delete(p), o + u + m + p;
    }, 0), n.reduce((o, a) => typeof a.delete == "number" ? (this.scroll.deleteAt(o, a.delete), o) : o + yt.Op.length(a), 0), this.scroll.batchEnd(), this.scroll.optimize(), this.update(s);
  }
  deleteText(t, e) {
    return this.scroll.deleteAt(t, e), this.update(new C().retain(t).delete(e));
  }
  formatLine(t, e) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.scroll.update(), Object.keys(s).forEach((i) => {
      this.scroll.lines(t, Math.max(e, 1)).forEach((o) => {
        o.format(i, s[i]);
      });
    }), this.scroll.optimize();
    const n = new C().retain(t).retain(e, Be(s));
    return this.update(n);
  }
  formatText(t, e) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    Object.keys(s).forEach((i) => {
      this.scroll.formatAt(t, e, i, s[i]);
    });
    const n = new C().retain(t).retain(e, Be(s));
    return this.update(n);
  }
  getContents(t, e) {
    return this.delta.slice(t, t + e);
  }
  getDelta() {
    return this.scroll.lines().reduce((t, e) => t.concat(e.delta()), new C());
  }
  getFormat(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, s = [], n = [];
    e === 0 ? this.scroll.path(t).forEach((a) => {
      const [u] = a;
      u instanceof Y ? s.push(u) : u instanceof et && n.push(u);
    }) : (s = this.scroll.lines(t, e), n = this.scroll.descendants(et, t, e));
    const [i, o] = [s, n].map((a) => {
      const u = a.shift();
      if (u == null)
        return {};
      let h = mt(u);
      for (; Object.keys(h).length > 0; ) {
        const d = a.shift();
        if (d == null)
          return h;
        h = vo(mt(d), h);
      }
      return h;
    });
    return {
      ...i,
      ...o
    };
  }
  getHTML(t, e) {
    const [s, n] = this.scroll.line(t);
    if (s) {
      const i = s.length();
      return s.length() >= n + e && !(n === 0 && e === i) ? gs(s, n, e, !0) : gs(this.scroll, t, e, !0);
    }
    return "";
  }
  getText(t, e) {
    return this.getContents(t, e).filter((s) => typeof s.insert == "string").map((s) => s.insert).join("");
  }
  insertContents(t, e) {
    const s = ui(e), n = new C().retain(t).concat(s);
    return this.scroll.insertContents(t, s), this.update(n);
  }
  insertEmbed(t, e, s) {
    return this.scroll.insertAt(t, e, s), this.update(new C().retain(t).insert({
      [e]: s
    }));
  }
  insertText(t, e) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return e = e.replace(/\r\n/g, "\n").replace(/\r/g, "\n"), this.scroll.insertAt(t, e), Object.keys(s).forEach((n) => {
      this.scroll.formatAt(t, e.length, n, s[n]);
    }), this.update(new C().retain(t).insert(e, Be(s)));
  }
  isBlank() {
    if (this.scroll.children.length === 0)
      return !0;
    if (this.scroll.children.length > 1)
      return !1;
    const t = this.scroll.children.head;
    if ((t == null ? void 0 : t.statics.blotName) !== Y.blotName)
      return !1;
    const e = t;
    return e.children.length > 1 ? !1 : e.children.head instanceof Ct;
  }
  removeFormat(t, e) {
    const s = this.getText(t, e), [n, i] = this.scroll.line(t + e);
    let o = 0, a = new C();
    n != null && (o = n.length() - i, a = n.delta().slice(i, i + o - 1).insert("\n"));
    const h = this.getContents(t, e + o).diff(new C().insert(s).concat(a)), d = new C().retain(t).concat(h);
    return this.applyDelta(d);
  }
  update(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
    const n = this.delta;
    if (e.length === 1 && e[0].type === "characterData" && // @ts-expect-error Fix me later
    e[0].target.data.match(bo) && this.scroll.find(e[0].target)) {
      const i = this.scroll.find(e[0].target), o = mt(i), a = i.offset(this.scroll), u = e[0].oldValue.replace(je.CONTENTS, ""), h = new C().insert(u), d = new C().insert(i.value()), b = s && {
        oldRange: hi(s.oldRange, -a),
        newRange: hi(s.newRange, -a)
      };
      t = new C().retain(a).concat(h.diff(d, b)).reduce((p, g) => g.insert ? p.insert(g.insert, o) : p.push(g), new C()), this.delta = n.compose(t);
    } else
      this.delta = this.getDelta(), (!t || !Br(n.compose(t), this.delta)) && (t = n.diff(this.delta, s));
    return t;
  }
}
function _e(r, t, e) {
  if (r.length === 0) {
    const [p] = ur(e.pop());
    return t <= 0 ? "</li></".concat(p, ">") : "</li></".concat(p, ">").concat(_e([], t - 1, e));
  }
  const [{
    child: s,
    offset: n,
    length: i,
    indent: o,
    type: a
  }, ...u] = r, [h, d] = ur(a);
  if (o > t)
    return e.push(a), o === t + 1 ? "<".concat(h, "><li").concat(d, ">").concat(gs(s, n, i)).concat(_e(u, o, e)) : "<".concat(h, "><li>").concat(_e(r, t + 1, e));
  const b = e[e.length - 1];
  if (o === t && a === b)
    return "</li><li".concat(d, ">").concat(gs(s, n, i)).concat(_e(u, o, e));
  const [m] = ur(e.pop());
  return "</li></".concat(m, ">").concat(_e(r, t - 1, e));
}
function gs(r, t, e) {
  let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if ("html" in r && typeof r.html == "function")
    return r.html(t, e);
  if (r instanceof Tt)
    return fn(r.value().slice(t, t + e));
  if (r instanceof Lt) {
    if (r.statics.blotName === "list-container") {
      const h = [];
      return r.children.forEachAt(t, e, (d, b, m) => {
        const p = "formats" in d && typeof d.formats == "function" ? d.formats() : {};
        h.push({
          child: d,
          offset: b,
          length: m,
          indent: p.indent || 0,
          type: p.list
        });
      }), _e(h, -1, []);
    }
    const n = [];
    if (r.children.forEachAt(t, e, (h, d, b) => {
      n.push(gs(h, d, b));
    }), s || r.statics.blotName === "list")
      return n.join("");
    const {
      outerHTML: i,
      innerHTML: o
    } = r.domNode, [a, u] = i.split(">".concat(o, "<"));
    return a === "<table" ? '<table style="border: 1px solid #000;">'.concat(n.join(""), "<").concat(u) : "".concat(a, ">").concat(n.join(""), "<").concat(u);
  }
  return r.domNode instanceof Element ? r.domNode.outerHTML : "";
}
function vo(r, t) {
  return Object.keys(t).reduce((e, s) => {
    if (r[s] == null)
      return e;
    const n = t[s];
    return n === r[s] ? e[s] = n : Array.isArray(n) ? n.indexOf(r[s]) < 0 ? e[s] = n.concat([r[s]]) : e[s] = n : e[s] = [n, r[s]], e;
  }, {});
}
function ur(r) {
  const t = r === "ordered" ? "ol" : "ul";
  switch (r) {
    case "checked":
      return [t, ' data-list="checked"'];
    case "unchecked":
      return [t, ' data-list="unchecked"'];
    default:
      return [t, ""];
  }
}
function ui(r) {
  return r.reduce((t, e) => {
    if (typeof e.insert == "string") {
      const s = e.insert.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
      return t.insert(s, e.attributes);
    }
    return t.push(e);
  }, new C());
}
function hi(r, t) {
  let {
    index: e,
    length: s
  } = r;
  return new de(e + t, s);
}
function Eo(r) {
  const t = [];
  return r.forEach((e) => {
    typeof e.insert == "string" ? e.insert.split("\n").forEach((n, i) => {
      i && t.push({
        insert: "\n",
        attributes: e.attributes
      }), n && t.push({
        insert: n,
        attributes: e.attributes
      });
    }) : t.push(e);
  }), t;
}
class St {
  constructor(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.quill = t, this.options = e;
  }
}
A(St, "DEFAULTS", {});
const Gs = "\uFEFF";
class zr extends ut {
  constructor(t, e) {
    super(t, e), this.contentNode = document.createElement("span"), this.contentNode.setAttribute("contenteditable", "false"), Array.from(this.domNode.childNodes).forEach((s) => {
      this.contentNode.appendChild(s);
    }), this.leftGuard = document.createTextNode(Gs), this.rightGuard = document.createTextNode(Gs), this.domNode.appendChild(this.leftGuard), this.domNode.appendChild(this.contentNode), this.domNode.appendChild(this.rightGuard);
  }
  index(t, e) {
    return t === this.leftGuard ? 0 : t === this.rightGuard ? 1 : super.index(t, e);
  }
  restore(t) {
    let e = null, s;
    const n = t.data.split(Gs).join("");
    if (t === this.leftGuard)
      if (this.prev instanceof Tt) {
        const i = this.prev.length();
        this.prev.insertAt(i, n), e = {
          startNode: this.prev.domNode,
          startOffset: i + n.length
        };
      } else
        s = document.createTextNode(n), this.parent.insertBefore(this.scroll.create(s), this), e = {
          startNode: s,
          startOffset: n.length
        };
    else
      t === this.rightGuard && (this.next instanceof Tt ? (this.next.insertAt(0, n), e = {
        startNode: this.next.domNode,
        startOffset: n.length
      }) : (s = document.createTextNode(n), this.parent.insertBefore(this.scroll.create(s), this.next), e = {
        startNode: s,
        startOffset: n.length
      }));
    return t.data = Gs, e;
  }
  update(t, e) {
    t.forEach((s) => {
      if (s.type === "characterData" && (s.target === this.leftGuard || s.target === this.rightGuard)) {
        const n = this.restore(s.target);
        n && (e.range = n);
      }
    });
  }
}
class No {
  constructor(t, e) {
    A(this, "isComposing", !1);
    this.scroll = t, this.emitter = e, this.setupListeners();
  }
  setupListeners() {
    this.scroll.domNode.addEventListener("compositionstart", (t) => {
      this.isComposing || this.handleCompositionStart(t);
    }), this.scroll.domNode.addEventListener("compositionend", (t) => {
      this.isComposing && queueMicrotask(() => {
        this.handleCompositionEnd(t);
      });
    });
  }
  handleCompositionStart(t) {
    const e = t.target instanceof Node ? this.scroll.find(t.target, !0) : null;
    e && !(e instanceof zr) && (this.emitter.emit(q.events.COMPOSITION_BEFORE_START, t), this.scroll.batchStart(), this.emitter.emit(q.events.COMPOSITION_START, t), this.isComposing = !0);
  }
  handleCompositionEnd(t) {
    this.emitter.emit(q.events.COMPOSITION_BEFORE_END, t), this.scroll.batchEnd(), this.emitter.emit(q.events.COMPOSITION_END, t), this.isComposing = !1;
  }
}
const fs = class fs {
  constructor(t, e) {
    A(this, "modules", {});
    this.quill = t, this.options = e;
  }
  init() {
    Object.keys(this.options.modules).forEach((t) => {
      this.modules[t] == null && this.addModule(t);
    });
  }
  addModule(t) {
    const e = this.quill.constructor.import("modules/".concat(t));
    return this.modules[t] = new e(this.quill, this.options.modules[t] || {}), this.modules[t];
  }
};
A(fs, "DEFAULTS", {
  modules: {}
}), A(fs, "themes", {
  default: fs
});
let $e = fs;
const wo = (r) => r.parentElement || r.getRootNode().host || null, Ao = (r) => {
  const t = r.getBoundingClientRect(), e = "offsetWidth" in r && Math.abs(t.width) / r.offsetWidth || 1, s = "offsetHeight" in r && Math.abs(t.height) / r.offsetHeight || 1;
  return {
    top: t.top,
    right: t.left + r.clientWidth * e,
    bottom: t.top + r.clientHeight * s,
    left: t.left
  };
}, Zs = (r) => {
  const t = parseInt(r, 10);
  return Number.isNaN(t) ? 0 : t;
}, fi = (r, t, e, s, n, i) => r < e && t > s ? 0 : r < e ? -(e - r + n) : t > s ? t - r > s - e ? r + n - e : t - s + i : 0, xo = (r, t) => {
  var i, o, a, u, h;
  const e = r.ownerDocument;
  let s = t, n = r;
  for (; n; ) {
    const d = n === e.body, b = d ? {
      top: 0,
      right: (o = (i = window.visualViewport) == null ? void 0 : i.width) != null ? o : e.documentElement.clientWidth,
      bottom: (u = (a = window.visualViewport) == null ? void 0 : a.height) != null ? u : e.documentElement.clientHeight,
      left: 0
    } : Ao(n), m = getComputedStyle(n), p = fi(s.left, s.right, b.left, b.right, Zs(m.scrollPaddingLeft), Zs(m.scrollPaddingRight)), g = fi(s.top, s.bottom, b.top, b.bottom, Zs(m.scrollPaddingTop), Zs(m.scrollPaddingBottom));
    if (p || g)
      if (d)
        (h = e.defaultView) == null || h.scrollBy(p, g);
      else {
        const {
          scrollLeft: N,
          scrollTop: v
        } = n;
        g && (n.scrollTop += g), p && (n.scrollLeft += p);
        const E = n.scrollLeft - N, x = n.scrollTop - v;
        s = {
          left: s.left - E,
          top: s.top - x,
          right: s.right - E,
          bottom: s.bottom - x
        };
      }
    n = d || m.position === "fixed" ? null : wo(n);
  }
}, Lo = 100, To = ["block", "break", "cursor", "inline", "scroll", "text"], qo = (r, t, e) => {
  const s = new Pe();
  return To.forEach((n) => {
    const i = t.query(n);
    i && s.register(i);
  }), r.forEach((n) => {
    var a;
    let i = t.query(n);
    i || e.error('Cannot register "'.concat(n, '" specified in "formats" config. Are you sure it was registered?'));
    let o = 0;
    for (; i; )
      if (s.register(i), i = "blotName" in i && (a = i.requiredContainer) != null ? a : null, o += 1, o > Lo) {
        e.error('Cycle detected in registering blot requiredContainer: "'.concat(n, '"'));
        break;
      }
  }), s;
}, Ue = Kt("quill"), Ws = new Pe();
Lt.uiClass = "ql-ui";
const At = class At {
  static debug(t) {
    t === !0 && (t = "log"), Kt.level(t);
  }
  static find(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return Ar.get(t) || Ws.find(t, e);
  }
  static import(t) {
    return this.imports[t] == null && Ue.error("Cannot import ".concat(t, ". Are you sure it was registered?")), this.imports[t];
  }
  static register() {
    if (typeof (arguments.length <= 0 ? void 0 : arguments[0]) != "string") {
      const t = arguments.length <= 0 ? void 0 : arguments[0], e = !!(!(arguments.length <= 1) && arguments[1]), s = "attrName" in t ? t.attrName : t.blotName;
      typeof s == "string" ? this.register("formats/".concat(s), t, e) : Object.keys(t).forEach((n) => {
        this.register(n, t[n], e);
      });
    } else {
      const t = arguments.length <= 0 ? void 0 : arguments[0], e = arguments.length <= 1 ? void 0 : arguments[1], s = !!(!(arguments.length <= 2) && arguments[2]);
      this.imports[t] != null && !s && Ue.warn("Overwriting ".concat(t, " with"), e), this.imports[t] = e, (t.startsWith("blots/") || t.startsWith("formats/")) && e && typeof e != "boolean" && e.blotName !== "abstract" && Ws.register(e), typeof e.register == "function" && e.register(Ws);
    }
  }
  constructor(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.options = Co(t, e), this.container = this.options.container, this.container == null) {
      Ue.error("Invalid Quill container", t);
      return;
    }
    this.options.debug && At.debug(this.options.debug);
    const s = this.container.innerHTML.trim();
    this.container.classList.add("ql-container"), this.container.innerHTML = "", Ar.set(this.container, this), this.root = this.addContainer("ql-editor"), this.root.classList.add("ql-blank"), this.emitter = new q();
    const n = Pr.blotName, i = this.options.registry.query(n);
    if (!i || !("blotName" in i))
      throw new Error('Cannot initialize Quill without "'.concat(n, '" blot'));
    if (this.scroll = new i(this.options.registry, this.root, {
      emitter: this.emitter
    }), this.editor = new yo(this.scroll), this.selection = new go(this.scroll, this.emitter), this.composition = new No(this.scroll, this.emitter), this.theme = new this.options.theme(this, this.options), this.keyboard = this.theme.addModule("keyboard"), this.clipboard = this.theme.addModule("clipboard"), this.history = this.theme.addModule("history"), this.uploader = this.theme.addModule("uploader"), this.theme.addModule("input"), this.theme.addModule("uiNode"), this.theme.init(), this.emitter.on(q.events.EDITOR_CHANGE, (o) => {
      o === q.events.TEXT_CHANGE && this.root.classList.toggle("ql-blank", this.editor.isBlank());
    }), this.emitter.on(q.events.SCROLL_UPDATE, (o, a) => {
      const u = this.selection.lastRange, [h] = this.selection.getRange(), d = u && h ? {
        oldRange: u,
        newRange: h
      } : void 0;
      wt.call(this, () => this.editor.update(null, a, d), o);
    }), this.emitter.on(q.events.SCROLL_EMBED_UPDATE, (o, a) => {
      const u = this.selection.lastRange, [h] = this.selection.getRange(), d = u && h ? {
        oldRange: u,
        newRange: h
      } : void 0;
      wt.call(this, () => {
        const b = new C().retain(o.offset(this)).retain({
          [o.statics.blotName]: a
        });
        return this.editor.update(b, [], d);
      }, At.sources.USER);
    }), s) {
      const o = this.clipboard.convert({
        html: "".concat(s, "<p><br></p>"),
        text: "\n"
      });
      this.setContents(o);
    }
    this.history.clear(), this.options.placeholder && this.root.setAttribute("data-placeholder", this.options.placeholder), this.options.readOnly && this.disable(), this.allowReadOnlyEdits = !1;
  }
  addContainer(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (typeof t == "string") {
      const s = t;
      t = document.createElement("div"), t.classList.add(s);
    }
    return this.container.insertBefore(t, e), t;
  }
  blur() {
    this.selection.setRange(null);
  }
  deleteText(t, e, s) {
    return [t, e, , s] = Ft(t, e, s), wt.call(this, () => this.editor.deleteText(t, e), s, t, -1 * e);
  }
  disable() {
    this.enable(!1);
  }
  editReadOnly(t) {
    this.allowReadOnlyEdits = !0;
    const e = t();
    return this.allowReadOnlyEdits = !1, e;
  }
  enable() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    this.scroll.enable(t), this.container.classList.toggle("ql-disabled", !t);
  }
  focus() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.selection.focus(), t.preventScroll || this.scrollSelectionIntoView();
  }
  format(t, e) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : q.sources.API;
    return wt.call(this, () => {
      const n = this.getSelection(!0);
      let i = new C();
      if (n == null)
        return i;
      if (this.scroll.query(t, k.BLOCK))
        i = this.editor.formatLine(n.index, n.length, {
          [t]: e
        });
      else {
        if (n.length === 0)
          return this.selection.format(t, e), i;
        i = this.editor.formatText(n.index, n.length, {
          [t]: e
        });
      }
      return this.setSelection(n, q.sources.SILENT), i;
    }, s);
  }
  formatLine(t, e, s, n, i) {
    let o;
    return [t, e, o, i] = Ft(
      t,
      e,
      // @ts-expect-error
      s,
      n,
      i
    ), wt.call(this, () => this.editor.formatLine(t, e, o), i, t, 0);
  }
  formatText(t, e, s, n, i) {
    let o;
    return [t, e, o, i] = Ft(
      // @ts-expect-error
      t,
      e,
      s,
      n,
      i
    ), wt.call(this, () => this.editor.formatText(t, e, o), i, t, 0);
  }
  getBounds(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, s = null;
    if (typeof t == "number" ? s = this.selection.getBounds(t, e) : s = this.selection.getBounds(t.index, t.length), !s)
      return null;
    const n = this.container.getBoundingClientRect();
    return {
      bottom: s.bottom - n.top,
      height: s.height,
      left: s.left - n.left,
      right: s.right - n.left,
      top: s.top - n.top,
      width: s.width
    };
  }
  getContents() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.getLength() - t;
    return [t, e] = Ft(t, e), this.editor.getContents(t, e);
  }
  getFormat() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.getSelection(!0), e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return typeof t == "number" ? this.editor.getFormat(t, e) : this.editor.getFormat(t.index, t.length);
  }
  getIndex(t) {
    return t.offset(this.scroll);
  }
  getLength() {
    return this.scroll.length();
  }
  getLeaf(t) {
    return this.scroll.leaf(t);
  }
  getLine(t) {
    return this.scroll.line(t);
  }
  getLines() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE;
    return typeof t != "number" ? this.scroll.lines(t.index, t.length) : this.scroll.lines(t, e);
  }
  getModule(t) {
    return this.theme.modules[t];
  }
  getSelection() {
    return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1) && this.focus(), this.update(), this.selection.getRange()[0];
  }
  getSemanticHTML() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e = arguments.length > 1 ? arguments[1] : void 0;
    return typeof t == "number" && (e = e != null ? e : this.getLength() - t), [t, e] = Ft(t, e), this.editor.getHTML(t, e);
  }
  getText() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e = arguments.length > 1 ? arguments[1] : void 0;
    return typeof t == "number" && (e = e != null ? e : this.getLength() - t), [t, e] = Ft(t, e), this.editor.getText(t, e);
  }
  hasFocus() {
    return this.selection.hasFocus();
  }
  insertEmbed(t, e, s) {
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : At.sources.API;
    return wt.call(this, () => this.editor.insertEmbed(t, e, s), n, t);
  }
  insertText(t, e, s, n, i) {
    let o;
    return [t, , o, i] = Ft(t, 0, s, n, i), wt.call(this, () => this.editor.insertText(t, e, o), i, t, e.length);
  }
  isEnabled() {
    return this.scroll.isEnabled();
  }
  off() {
    return this.emitter.off(...arguments);
  }
  on() {
    return this.emitter.on(...arguments);
  }
  once() {
    return this.emitter.once(...arguments);
  }
  removeFormat(t, e, s) {
    return [t, e, , s] = Ft(t, e, s), wt.call(this, () => this.editor.removeFormat(t, e), s, t);
  }
  scrollRectIntoView(t) {
    xo(this.root, t);
  }
  /**
   * @deprecated Use Quill#scrollSelectionIntoView() instead.
   */
  scrollIntoView() {
    console.warn("Quill#scrollIntoView() has been deprecated and will be removed in the near future. Please use Quill#scrollSelectionIntoView() instead."), this.scrollSelectionIntoView();
  }
  /**
   * Scroll the current selection into the visible area.
   * If the selection is already visible, no scrolling will occur.
   */
  scrollSelectionIntoView() {
    const t = this.selection.lastRange, e = t && this.selection.getBounds(t.index, t.length);
    e && this.scrollRectIntoView(e);
  }
  setContents(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : q.sources.API;
    return wt.call(this, () => {
      t = new C(t);
      const s = this.getLength(), n = this.editor.deleteText(0, s), i = this.editor.insertContents(0, t), o = this.editor.deleteText(this.getLength() - 1, 1);
      return n.compose(i).compose(o);
    }, e);
  }
  setSelection(t, e, s) {
    t == null ? this.selection.setRange(null, e || At.sources.API) : ([t, e, , s] = Ft(t, e, s), this.selection.setRange(new de(Math.max(0, t), e), s), s !== q.sources.SILENT && this.scrollSelectionIntoView());
  }
  setText(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : q.sources.API;
    const s = new C().insert(t);
    return this.setContents(s, e);
  }
  update() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : q.sources.USER;
    const e = this.scroll.update(t);
    return this.selection.update(t), e;
  }
  updateContents(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : q.sources.API;
    return wt.call(this, () => (t = new C(t), this.editor.applyDelta(t)), e, !0);
  }
};
A(At, "DEFAULTS", {
  bounds: null,
  modules: {
    clipboard: !0,
    keyboard: !0,
    history: !0,
    uploader: !0
  },
  placeholder: "",
  readOnly: !1,
  registry: Ws,
  theme: "default"
}), A(At, "events", q.events), A(At, "sources", q.sources), A(At, "version", "2.0.2"), A(At, "imports", {
  delta: C,
  parchment: Jl,
  "core/module": St,
  "core/theme": $e
});
let w = At;
function di(r) {
  return typeof r == "string" ? document.querySelector(r) : r;
}
function hr(r) {
  return Object.entries(r != null ? r : {}).reduce((t, e) => {
    let [s, n] = e;
    return {
      ...t,
      [s]: n === !0 ? {} : n
    };
  }, {});
}
function mi(r) {
  return Object.fromEntries(Object.entries(r).filter((t) => t[1] !== void 0));
}
function Co(r, t) {
  const e = di(r);
  if (!e)
    throw new Error("Invalid Quill container");
  const n = !t.theme || t.theme === w.DEFAULTS.theme ? $e : w.import("themes/".concat(t.theme));
  if (!n)
    throw new Error("Invalid theme ".concat(t.theme, ". Did you register it?"));
  const {
    modules: i,
    ...o
  } = w.DEFAULTS, {
    modules: a,
    ...u
  } = n.DEFAULTS;
  let h = hr(t.modules);
  h != null && h.toolbar && h.toolbar.constructor !== Object && (h = {
    ...h,
    toolbar: {
      container: h.toolbar
    }
  });
  const d = ee({}, hr(i), hr(a), h), b = {
    ...o,
    ...mi(u),
    ...mi(t)
  };
  let m = t.registry;
  return m ? t.formats && Ue.warn('Ignoring "formats" option because "registry" is specified') : m = t.formats ? qo(t.formats, b.registry, Ue) : b.registry, {
    ...b,
    registry: m,
    container: e,
    theme: n,
    modules: Object.entries(d).reduce((p, g) => {
      let [N, v] = g;
      if (!v)
        return p;
      const E = w.import("modules/".concat(N));
      return E == null ? (Ue.error("Cannot load ".concat(N, " module. Are you sure you registered it?")), p) : {
        ...p,
        // @ts-expect-error
        [N]: ee({}, E.DEFAULTS || {}, v)
      };
    }, {}),
    bounds: di(b.bounds)
  };
}
function wt(r, t, e, s) {
  if (!this.isEnabled() && t === q.sources.USER && !this.allowReadOnlyEdits)
    return new C();
  let n = e == null ? null : this.getSelection();
  const i = this.editor.delta, o = r();
  if (n != null && (e === !0 && (e = n.index), s == null ? n = pi(n, o, t) : s !== 0 && (n = pi(n, e, s, t)), this.setSelection(n, q.sources.SILENT)), o.length() > 0) {
    const a = [q.events.TEXT_CHANGE, o, i, t];
    this.emitter.emit(q.events.EDITOR_CHANGE, ...a), t !== q.sources.SILENT && this.emitter.emit(...a);
  }
  return o;
}
function Ft(r, t, e, s, n) {
  let i = {};
  return typeof r.index == "number" && typeof r.length == "number" ? typeof t != "number" ? (n = s, s = e, e = t, t = r.length, r = r.index) : (t = r.length, r = r.index) : typeof t != "number" && (n = s, s = e, e = t, t = 0), typeof e == "object" ? (i = e, n = s) : typeof e == "string" && (s != null ? i[e] = s : n = e), n = n || q.sources.API, [r, t, i, n];
}
function pi(r, t, e, s) {
  const n = typeof e == "number" ? e : 0;
  if (r == null)
    return null;
  let i, o;
  return t && typeof t.transformPosition == "function" ? [i, o] = [r.index, r.index + r.length].map((a) => (
    // @ts-expect-error -- TODO: add a better type guard around `index`
    t.transformPosition(a, s !== q.sources.USER)
  )) : [i, o] = [r.index, r.index + r.length].map((a) => a < t || a === t && s === q.sources.USER ? a : n >= 0 ? a + n : Math.max(t, a + n)), new de(i, o - i);
}
class me extends an {
}
function gi(r) {
  return r instanceof Y || r instanceof bt;
}
function bi(r) {
  return typeof r.updateContent == "function";
}
class Me extends Pr {
  constructor(t, e, s) {
    let {
      emitter: n
    } = s;
    super(t, e), this.emitter = n, this.batch = !1, this.optimize(), this.enable(), this.domNode.addEventListener("dragstart", (i) => this.handleDragStart(i));
  }
  batchStart() {
    Array.isArray(this.batch) || (this.batch = []);
  }
  batchEnd() {
    if (!this.batch)
      return;
    const t = this.batch;
    this.batch = !1, this.update(t);
  }
  emitMount(t) {
    this.emitter.emit(q.events.SCROLL_BLOT_MOUNT, t);
  }
  emitUnmount(t) {
    this.emitter.emit(q.events.SCROLL_BLOT_UNMOUNT, t);
  }
  emitEmbedUpdate(t, e) {
    this.emitter.emit(q.events.SCROLL_EMBED_UPDATE, t, e);
  }
  deleteAt(t, e) {
    const [s, n] = this.line(t), [i] = this.line(t + e);
    if (super.deleteAt(t, e), i != null && s !== i && n > 0) {
      if (s instanceof bt || i instanceof bt) {
        this.optimize();
        return;
      }
      const o = i.children.head instanceof Ct ? null : i.children.head;
      s.moveChildren(i, o), s.remove();
    }
    this.optimize();
  }
  enable() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    this.domNode.setAttribute("contenteditable", t ? "true" : "false");
  }
  formatAt(t, e, s, n) {
    super.formatAt(t, e, s, n), this.optimize();
  }
  insertAt(t, e, s) {
    if (t >= this.length())
      if (s == null || this.scroll.query(e, k.BLOCK) == null) {
        const n = this.scroll.create(this.statics.defaultChild.blotName);
        this.appendChild(n), s == null && e.endsWith("\n") ? n.insertAt(0, e.slice(0, -1), s) : n.insertAt(0, e, s);
      } else {
        const n = this.scroll.create(e, s);
        this.appendChild(n);
      }
    else
      super.insertAt(t, e, s);
    this.optimize();
  }
  insertBefore(t, e) {
    if (t.statics.scope === k.INLINE_BLOT) {
      const s = this.scroll.create(this.statics.defaultChild.blotName);
      s.appendChild(t), super.insertBefore(s, e);
    } else
      super.insertBefore(t, e);
  }
  insertContents(t, e) {
    const s = this.deltaToRenderBlocks(e.concat(new C().insert("\n"))), n = s.pop();
    if (n == null)
      return;
    this.batchStart();
    const i = s.shift();
    if (i) {
      const u = i.type === "block" && (i.delta.length() === 0 || !this.descendant(bt, t)[0] && t < this.length()), h = i.type === "block" ? i.delta : new C().insert({
        [i.key]: i.value
      });
      fr(this, t, h);
      const d = i.type === "block" ? 1 : 0, b = t + h.length() + d;
      u && this.insertAt(b - 1, "\n");
      const m = mt(this.line(t)[0]), p = yt.AttributeMap.diff(m, i.attributes) || {};
      Object.keys(p).forEach((g) => {
        this.formatAt(b - 1, 1, g, p[g]);
      }), t = b;
    }
    let [o, a] = this.children.find(t);
    if (s.length && (o && (o = o.split(a), a = 0), s.forEach((u) => {
      if (u.type === "block") {
        const h = this.createBlock(u.attributes, o || void 0);
        fr(h, 0, u.delta);
      } else {
        const h = this.create(u.key, u.value);
        this.insertBefore(h, o || void 0), Object.keys(u.attributes).forEach((d) => {
          h.format(d, u.attributes[d]);
        });
      }
    })), n.type === "block" && n.delta.length()) {
      const u = o ? o.offset(o.scroll) + a : this.length();
      fr(this, u, n.delta);
    }
    this.batchEnd(), this.optimize();
  }
  isEnabled() {
    return this.domNode.getAttribute("contenteditable") === "true";
  }
  leaf(t) {
    const e = this.path(t).pop();
    if (!e)
      return [null, -1];
    const [s, n] = e;
    return s instanceof et ? [s, n] : [null, -1];
  }
  line(t) {
    return t === this.length() ? this.line(t - 1) : this.descendant(gi, t);
  }
  lines() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE;
    const s = (n, i, o) => {
      let a = [], u = o;
      return n.children.forEachAt(i, o, (h, d, b) => {
        gi(h) ? a.push(h) : h instanceof an && (a = a.concat(s(h, d, u))), u -= b;
      }), a;
    };
    return s(this, t, e);
  }
  optimize() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.batch || (super.optimize(t, e), t.length > 0 && this.emitter.emit(q.events.SCROLL_OPTIMIZE, t, e));
  }
  path(t) {
    return super.path(t).slice(1);
  }
  remove() {
  }
  update(t) {
    if (this.batch) {
      Array.isArray(t) && (this.batch = this.batch.concat(t));
      return;
    }
    let e = q.sources.USER;
    typeof t == "string" && (e = t), Array.isArray(t) || (t = this.observer.takeRecords()), t = t.filter((s) => {
      let {
        target: n
      } = s;
      const i = this.find(n, !0);
      return i && !bi(i);
    }), t.length > 0 && this.emitter.emit(q.events.SCROLL_BEFORE_UPDATE, e, t), super.update(t.concat([])), t.length > 0 && this.emitter.emit(q.events.SCROLL_UPDATE, e, t);
  }
  updateEmbedAt(t, e, s) {
    const [n] = this.descendant((i) => i instanceof bt, t);
    n && n.statics.blotName === e && bi(n) && n.updateContent(s);
  }
  handleDragStart(t) {
    t.preventDefault();
  }
  deltaToRenderBlocks(t) {
    const e = [];
    let s = new C();
    return t.forEach((n) => {
      var o;
      const i = n == null ? void 0 : n.insert;
      if (i)
        if (typeof i == "string") {
          const a = i.split("\n");
          a.slice(0, -1).forEach((h) => {
            var d;
            s.insert(h, n.attributes), e.push({
              type: "block",
              delta: s,
              attributes: (d = n.attributes) != null ? d : {}
            }), s = new C();
          });
          const u = a[a.length - 1];
          u && s.insert(u, n.attributes);
        } else {
          const a = Object.keys(i)[0];
          if (!a)
            return;
          this.query(a, k.INLINE) ? s.push(n) : (s.length() && e.push({
            type: "block",
            delta: s,
            attributes: {}
          }), s = new C(), e.push({
            type: "blockEmbed",
            key: a,
            value: i[a],
            attributes: (o = n.attributes) != null ? o : {}
          }));
        }
    }), s.length() && e.push({
      type: "block",
      delta: s,
      attributes: {}
    }), e;
  }
  createBlock(t, e) {
    let s;
    const n = {};
    Object.entries(t).forEach((a) => {
      let [u, h] = a;
      this.query(u, k.BLOCK & k.BLOT) != null ? s = u : n[u] = h;
    });
    const i = this.create(s || this.statics.defaultChild.blotName, s ? t[s] : void 0);
    this.insertBefore(i, e || void 0);
    const o = i.length();
    return Object.entries(n).forEach((a) => {
      let [u, h] = a;
      i.formatAt(0, o, u, h);
    }), i;
  }
}
A(Me, "blotName", "scroll"), A(Me, "className", "ql-editor"), A(Me, "tagName", "DIV"), A(Me, "defaultChild", Y), A(Me, "allowedChildren", [Y, bt, me]);
function fr(r, t, e) {
  e.reduce((s, n) => {
    const i = yt.Op.length(n);
    let o = n.attributes || {};
    if (n.insert != null) {
      if (typeof n.insert == "string") {
        const a = n.insert;
        r.insertAt(s, a);
        const [u] = r.descendant(et, s), h = mt(u);
        o = yt.AttributeMap.diff(h, o) || {};
      } else if (typeof n.insert == "object") {
        const a = Object.keys(n.insert)[0];
        if (a == null)
          return s;
        if (r.insertAt(s, a, n.insert[a]), r.scroll.query(a, k.INLINE) != null) {
          const [h] = r.descendant(et, s), d = mt(h);
          o = yt.AttributeMap.diff(d, o) || {};
        }
      }
    }
    return Object.keys(o).forEach((a) => {
      r.formatAt(s, i, a, o[a]);
    }), s + i;
  }, t);
}
const Vr = {
  scope: k.BLOCK,
  whitelist: ["right", "center", "justify"]
}, So = new Bt("align", "align", Vr), Xi = new qt("align", "ql-align", Vr), Yi = new se("align", "text-align", Vr);
class Ji extends se {
  value(t) {
    let e = super.value(t);
    if (!e.startsWith("rgb("))
      return e;
    e = e.replace(/^[^\d]+/, "").replace(/[^\d]+$/, "");
    const s = e.split(",").map((n) => "00".concat(parseInt(n, 10).toString(16)).slice(-2)).join("");
    return "#".concat(s);
  }
}
const ko = new qt("color", "ql-color", {
  scope: k.INLINE
}), Kr = new Ji("color", "color", {
  scope: k.INLINE
}), Oo = new qt("background", "ql-bg", {
  scope: k.INLINE
}), Gr = new Ji("background", "background-color", {
  scope: k.INLINE
});
class pe extends me {
  static create(t) {
    const e = super.create(t);
    return e.setAttribute("spellcheck", "false"), e;
  }
  code(t, e) {
    return this.children.map((s) => s.length() <= 1 ? "" : s.domNode.innerText).join("\n").slice(t, t + e);
  }
  html(t, e) {
    return "<pre>\n".concat(fn(this.code(t, e)), "\n</pre>");
  }
}
class st extends Y {
  static register() {
    w.register(pe);
  }
}
A(st, "TAB", "  ");
class Zr extends ne {
}
Zr.blotName = "code";
Zr.tagName = "CODE";
st.blotName = "code-block";
st.className = "ql-code-block";
st.tagName = "DIV";
pe.blotName = "code-block-container";
pe.className = "ql-code-block-container";
pe.tagName = "DIV";
pe.allowedChildren = [st];
st.allowedChildren = [Tt, Ct, je];
st.requiredContainer = pe;
const Wr = {
  scope: k.BLOCK,
  whitelist: ["rtl"]
}, Qi = new Bt("direction", "dir", Wr), tl = new qt("direction", "ql-direction", Wr), el = new se("direction", "direction", Wr), sl = {
  scope: k.INLINE,
  whitelist: ["serif", "monospace"]
}, nl = new qt("font", "ql-font", sl);
class Io extends se {
  value(t) {
    return super.value(t).replace(/["']/g, "");
  }
}
const rl = new Io("font", "font-family", sl), il = new qt("size", "ql-size", {
  scope: k.INLINE,
  whitelist: ["small", "large", "huge"]
}), ll = new se("size", "font-size", {
  scope: k.INLINE,
  whitelist: ["10px", "18px", "32px"]
}), Ro = Kt("quill:keyboard"), _o = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey";
class dn extends St {
  static match(t, e) {
    return ["altKey", "ctrlKey", "metaKey", "shiftKey"].some((s) => !!e[s] !== t[s] && e[s] !== null) ? !1 : e.key === t.key || e.key === t.which;
  }
  constructor(t, e) {
    super(t, e), this.bindings = {}, Object.keys(this.options.bindings).forEach((s) => {
      this.options.bindings[s] && this.addBinding(this.options.bindings[s]);
    }), this.addBinding({
      key: "Enter",
      shiftKey: null
    }, this.handleEnter), this.addBinding({
      key: "Enter",
      metaKey: null,
      ctrlKey: null,
      altKey: null
    }, () => {
    }), /Firefox/i.test(navigator.userAgent) ? (this.addBinding({
      key: "Backspace"
    }, {
      collapsed: !0
    }, this.handleBackspace), this.addBinding({
      key: "Delete"
    }, {
      collapsed: !0
    }, this.handleDelete)) : (this.addBinding({
      key: "Backspace"
    }, {
      collapsed: !0,
      prefix: /^.?$/
    }, this.handleBackspace), this.addBinding({
      key: "Delete"
    }, {
      collapsed: !0,
      suffix: /^.?$/
    }, this.handleDelete)), this.addBinding({
      key: "Backspace"
    }, {
      collapsed: !1
    }, this.handleDeleteRange), this.addBinding({
      key: "Delete"
    }, {
      collapsed: !1
    }, this.handleDeleteRange), this.addBinding({
      key: "Backspace",
      altKey: null,
      ctrlKey: null,
      metaKey: null,
      shiftKey: null
    }, {
      collapsed: !0,
      offset: 0
    }, this.handleBackspace), this.listen();
  }
  addBinding(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const n = Bo(t);
    if (n == null) {
      Ro.warn("Attempted to add invalid keyboard binding", n);
      return;
    }
    typeof e == "function" && (e = {
      handler: e
    }), typeof s == "function" && (s = {
      handler: s
    }), (Array.isArray(n.key) ? n.key : [n.key]).forEach((o) => {
      const a = {
        ...n,
        key: o,
        ...e,
        ...s
      };
      this.bindings[a.key] = this.bindings[a.key] || [], this.bindings[a.key].push(a);
    });
  }
  listen() {
    this.quill.root.addEventListener("keydown", (t) => {
      if (t.defaultPrevented || t.isComposing || t.keyCode === 229 && (t.key === "Enter" || t.key === "Backspace"))
        return;
      const n = (this.bindings[t.key] || []).concat(this.bindings[t.which] || []).filter((E) => dn.match(t, E));
      if (n.length === 0)
        return;
      const i = w.find(t.target, !0);
      if (i && i.scroll !== this.quill.scroll)
        return;
      const o = this.quill.getSelection();
      if (o == null || !this.quill.hasFocus())
        return;
      const [a, u] = this.quill.getLine(o.index), [h, d] = this.quill.getLeaf(o.index), [b, m] = o.length === 0 ? [h, d] : this.quill.getLeaf(o.index + o.length), p = h instanceof sn ? h.value().slice(0, d) : "", g = b instanceof sn ? b.value().slice(m) : "", N = {
        collapsed: o.length === 0,
        // @ts-expect-error Fix me later
        empty: o.length === 0 && a.length() <= 1,
        format: this.quill.getFormat(o),
        line: a,
        offset: u,
        prefix: p,
        suffix: g,
        event: t
      };
      n.some((E) => {
        if (E.collapsed != null && E.collapsed !== N.collapsed || E.empty != null && E.empty !== N.empty || E.offset != null && E.offset !== N.offset)
          return !1;
        if (Array.isArray(E.format)) {
          if (E.format.every((x) => N.format[x] == null))
            return !1;
        } else if (typeof E.format == "object" && !Object.keys(E.format).every((x) => E.format[x] === !0 ? N.format[x] != null : E.format[x] === !1 ? N.format[x] == null : Br(E.format[x], N.format[x])))
          return !1;
        return E.prefix != null && !E.prefix.test(N.prefix) || E.suffix != null && !E.suffix.test(N.suffix) ? !1 : E.handler.call(this, o, N, E) !== !0;
      }) && t.preventDefault();
    });
  }
  handleBackspace(t, e) {
    const s = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(e.prefix) ? 2 : 1;
    if (t.index === 0 || this.quill.getLength() <= 1)
      return;
    let n = {};
    const [i] = this.quill.getLine(t.index);
    let o = new C().retain(t.index - s).delete(s);
    if (e.offset === 0) {
      const [a] = this.quill.getLine(t.index - 1);
      if (a && !(a.statics.blotName === "block" && a.length() <= 1)) {
        const h = i.formats(), d = this.quill.getFormat(t.index - 1, 1);
        if (n = yt.AttributeMap.diff(h, d) || {}, Object.keys(n).length > 0) {
          const b = new C().retain(t.index + i.length() - 2).retain(1, n);
          o = o.compose(b);
        }
      }
    }
    this.quill.updateContents(o, w.sources.USER), this.quill.focus();
  }
  handleDelete(t, e) {
    const s = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(e.suffix) ? 2 : 1;
    if (t.index >= this.quill.getLength() - s)
      return;
    let n = {};
    const [i] = this.quill.getLine(t.index);
    let o = new C().retain(t.index).delete(s);
    if (e.offset >= i.length() - 1) {
      const [a] = this.quill.getLine(t.index + 1);
      if (a) {
        const u = i.formats(), h = this.quill.getFormat(t.index, 1);
        n = yt.AttributeMap.diff(u, h) || {}, Object.keys(n).length > 0 && (o = o.retain(a.length() - 1).retain(1, n));
      }
    }
    this.quill.updateContents(o, w.sources.USER), this.quill.focus();
  }
  handleDeleteRange(t) {
    Xr({
      range: t,
      quill: this.quill
    }), this.quill.focus();
  }
  handleEnter(t, e) {
    const s = Object.keys(e.format).reduce((i, o) => (this.quill.scroll.query(o, k.BLOCK) && !Array.isArray(e.format[o]) && (i[o] = e.format[o]), i), {}), n = new C().retain(t.index).delete(t.length).insert("\n", s);
    this.quill.updateContents(n, w.sources.USER), this.quill.setSelection(t.index + 1, w.sources.SILENT), this.quill.focus();
  }
}
const Mo = {
  bindings: {
    bold: dr("bold"),
    italic: dr("italic"),
    underline: dr("underline"),
    indent: {
      // highlight tab or tab at beginning of list, indent or blockquote
      key: "Tab",
      format: ["blockquote", "indent", "list"],
      handler(r, t) {
        return t.collapsed && t.offset !== 0 ? !0 : (this.quill.format("indent", "+1", w.sources.USER), !1);
      }
    },
    outdent: {
      key: "Tab",
      shiftKey: !0,
      format: ["blockquote", "indent", "list"],
      // highlight tab or tab at beginning of list, indent or blockquote
      handler(r, t) {
        return t.collapsed && t.offset !== 0 ? !0 : (this.quill.format("indent", "-1", w.sources.USER), !1);
      }
    },
    "outdent backspace": {
      key: "Backspace",
      collapsed: !0,
      shiftKey: null,
      metaKey: null,
      ctrlKey: null,
      altKey: null,
      format: ["indent", "list"],
      offset: 0,
      handler(r, t) {
        t.format.indent != null ? this.quill.format("indent", "-1", w.sources.USER) : t.format.list != null && this.quill.format("list", !1, w.sources.USER);
      }
    },
    "indent code-block": yi(!0),
    "outdent code-block": yi(!1),
    "remove tab": {
      key: "Tab",
      shiftKey: !0,
      collapsed: !0,
      prefix: /\t$/,
      handler(r) {
        this.quill.deleteText(r.index - 1, 1, w.sources.USER);
      }
    },
    tab: {
      key: "Tab",
      handler(r, t) {
        if (t.format.table)
          return !0;
        this.quill.history.cutoff();
        const e = new C().retain(r.index).delete(r.length).insert("	");
        return this.quill.updateContents(e, w.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(r.index + 1, w.sources.SILENT), !1;
      }
    },
    "blockquote empty enter": {
      key: "Enter",
      collapsed: !0,
      format: ["blockquote"],
      empty: !0,
      handler() {
        this.quill.format("blockquote", !1, w.sources.USER);
      }
    },
    "list empty enter": {
      key: "Enter",
      collapsed: !0,
      format: ["list"],
      empty: !0,
      handler(r, t) {
        const e = {
          list: !1
        };
        t.format.indent && (e.indent = !1), this.quill.formatLine(r.index, r.length, e, w.sources.USER);
      }
    },
    "checklist enter": {
      key: "Enter",
      collapsed: !0,
      format: {
        list: "checked"
      },
      handler(r) {
        const [t, e] = this.quill.getLine(r.index), s = {
          // @ts-expect-error Fix me later
          ...t.formats(),
          list: "checked"
        }, n = new C().retain(r.index).insert("\n", s).retain(t.length() - e - 1).retain(1, {
          list: "unchecked"
        });
        this.quill.updateContents(n, w.sources.USER), this.quill.setSelection(r.index + 1, w.sources.SILENT), this.quill.scrollSelectionIntoView();
      }
    },
    "header enter": {
      key: "Enter",
      collapsed: !0,
      format: ["header"],
      suffix: /^$/,
      handler(r, t) {
        const [e, s] = this.quill.getLine(r.index), n = new C().retain(r.index).insert("\n", t.format).retain(e.length() - s - 1).retain(1, {
          header: null
        });
        this.quill.updateContents(n, w.sources.USER), this.quill.setSelection(r.index + 1, w.sources.SILENT), this.quill.scrollSelectionIntoView();
      }
    },
    "table backspace": {
      key: "Backspace",
      format: ["table"],
      collapsed: !0,
      offset: 0,
      handler() {
      }
    },
    "table delete": {
      key: "Delete",
      format: ["table"],
      collapsed: !0,
      suffix: /^$/,
      handler() {
      }
    },
    "table enter": {
      key: "Enter",
      shiftKey: null,
      format: ["table"],
      handler(r) {
        const t = this.quill.getModule("table");
        if (t) {
          const [e, s, n, i] = t.getTable(r), o = Do(e, s, n, i);
          if (o == null)
            return;
          let a = e.offset();
          if (o < 0) {
            const u = new C().retain(a).insert("\n");
            this.quill.updateContents(u, w.sources.USER), this.quill.setSelection(r.index + 1, r.length, w.sources.SILENT);
          } else if (o > 0) {
            a += e.length();
            const u = new C().retain(a).insert("\n");
            this.quill.updateContents(u, w.sources.USER), this.quill.setSelection(a, w.sources.USER);
          }
        }
      }
    },
    "table tab": {
      key: "Tab",
      shiftKey: null,
      format: ["table"],
      handler(r, t) {
        const {
          event: e,
          line: s
        } = t, n = s.offset(this.quill.scroll);
        e.shiftKey ? this.quill.setSelection(n - 1, w.sources.USER) : this.quill.setSelection(n + s.length(), w.sources.USER);
      }
    },
    "list autofill": {
      key: " ",
      shiftKey: null,
      collapsed: !0,
      format: {
        "code-block": !1,
        blockquote: !1,
        table: !1
      },
      prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
      handler(r, t) {
        if (this.quill.scroll.query("list") == null)
          return !0;
        const {
          length: e
        } = t.prefix, [s, n] = this.quill.getLine(r.index);
        if (n > e)
          return !0;
        let i;
        switch (t.prefix.trim()) {
          case "[]":
          case "[ ]":
            i = "unchecked";
            break;
          case "[x]":
            i = "checked";
            break;
          case "-":
          case "*":
            i = "bullet";
            break;
          default:
            i = "ordered";
        }
        this.quill.insertText(r.index, " ", w.sources.USER), this.quill.history.cutoff();
        const o = new C().retain(r.index - n).delete(e + 1).retain(s.length() - 2 - n).retain(1, {
          list: i
        });
        return this.quill.updateContents(o, w.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(r.index - e, w.sources.SILENT), !1;
      }
    },
    "code exit": {
      key: "Enter",
      collapsed: !0,
      format: ["code-block"],
      prefix: /^$/,
      suffix: /^\s*$/,
      handler(r) {
        const [t, e] = this.quill.getLine(r.index);
        let s = 2, n = t;
        for (; n != null && n.length() <= 1 && n.formats()["code-block"]; )
          if (n = n.prev, s -= 1, s <= 0) {
            const i = new C().retain(r.index + t.length() - e - 2).retain(1, {
              "code-block": null
            }).delete(1);
            return this.quill.updateContents(i, w.sources.USER), this.quill.setSelection(r.index - 1, w.sources.SILENT), !1;
          }
        return !0;
      }
    },
    "embed left": Xs("ArrowLeft", !1),
    "embed left shift": Xs("ArrowLeft", !0),
    "embed right": Xs("ArrowRight", !1),
    "embed right shift": Xs("ArrowRight", !0),
    "table down": vi(!1),
    "table up": vi(!0)
  }
};
dn.DEFAULTS = Mo;
function yi(r) {
  return {
    key: "Tab",
    shiftKey: !r,
    format: {
      "code-block": !0
    },
    handler(t, e) {
      let {
        event: s
      } = e;
      const n = this.quill.scroll.query("code-block"), {
        TAB: i
      } = n;
      if (t.length === 0 && !s.shiftKey) {
        this.quill.insertText(t.index, i, w.sources.USER), this.quill.setSelection(t.index + i.length, w.sources.SILENT);
        return;
      }
      const o = t.length === 0 ? this.quill.getLines(t.index, 1) : this.quill.getLines(t);
      let {
        index: a,
        length: u
      } = t;
      o.forEach((h, d) => {
        r ? (h.insertAt(0, i), d === 0 ? a += i.length : u += i.length) : h.domNode.textContent.startsWith(i) && (h.deleteAt(0, i.length), d === 0 ? a -= i.length : u -= i.length);
      }), this.quill.update(w.sources.USER), this.quill.setSelection(a, u, w.sources.SILENT);
    }
  };
}
function Xs(r, t) {
  return {
    key: r,
    shiftKey: t,
    altKey: null,
    [r === "ArrowLeft" ? "prefix" : "suffix"]: /^$/,
    handler(s) {
      let {
        index: n
      } = s;
      r === "ArrowRight" && (n += s.length + 1);
      const [i] = this.quill.getLeaf(n);
      return i instanceof ut ? (r === "ArrowLeft" ? t ? this.quill.setSelection(s.index - 1, s.length + 1, w.sources.USER) : this.quill.setSelection(s.index - 1, w.sources.USER) : t ? this.quill.setSelection(s.index, s.length + 1, w.sources.USER) : this.quill.setSelection(s.index + s.length + 1, w.sources.USER), !1) : !0;
    }
  };
}
function dr(r) {
  return {
    key: r[0],
    shortKey: !0,
    handler(t, e) {
      this.quill.format(r, !e.format[r], w.sources.USER);
    }
  };
}
function vi(r) {
  return {
    key: r ? "ArrowUp" : "ArrowDown",
    collapsed: !0,
    format: ["table"],
    handler(t, e) {
      const s = r ? "prev" : "next", n = e.line, i = n.parent[s];
      if (i != null) {
        if (i.statics.blotName === "table-row") {
          let o = i.children.head, a = n;
          for (; a.prev != null; )
            a = a.prev, o = o.next;
          const u = o.offset(this.quill.scroll) + Math.min(e.offset, o.length() - 1);
          this.quill.setSelection(u, 0, w.sources.USER);
        }
      } else {
        const o = n.table()[s];
        o != null && (r ? this.quill.setSelection(o.offset(this.quill.scroll) + o.length() - 1, 0, w.sources.USER) : this.quill.setSelection(o.offset(this.quill.scroll), 0, w.sources.USER));
      }
      return !1;
    }
  };
}
function Bo(r) {
  if (typeof r == "string" || typeof r == "number")
    r = {
      key: r
    };
  else if (typeof r == "object")
    r = Be(r);
  else
    return null;
  return r.shortKey && (r[_o] = r.shortKey, delete r.shortKey), r;
}
function Xr(r) {
  let {
    quill: t,
    range: e
  } = r;
  const s = t.getLines(e);
  let n = {};
  if (s.length > 1) {
    const i = s[0].formats(), o = s[s.length - 1].formats();
    n = yt.AttributeMap.diff(o, i) || {};
  }
  t.deleteText(e, w.sources.USER), Object.keys(n).length > 0 && t.formatLine(e.index, 1, n, w.sources.USER), t.setSelection(e.index, w.sources.SILENT);
}
function Do(r, t, e, s) {
  return t.prev == null && t.next == null ? e.prev == null && e.next == null ? s === 0 ? -1 : 1 : e.prev == null ? -1 : 1 : t.prev == null ? -1 : t.next == null ? 1 : null;
}
const Uo = /font-weight:\s*normal/, Po = ["P", "OL", "UL"], Ei = (r) => r && Po.includes(r.tagName), jo = (r) => {
  Array.from(r.querySelectorAll("br")).filter((t) => Ei(t.previousElementSibling) && Ei(t.nextElementSibling)).forEach((t) => {
    var e;
    (e = t.parentNode) == null || e.removeChild(t);
  });
}, $o = (r) => {
  Array.from(r.querySelectorAll('b[style*="font-weight"]')).filter((t) => {
    var e;
    return (e = t.getAttribute("style")) == null ? void 0 : e.match(Uo);
  }).forEach((t) => {
    var s;
    const e = r.createDocumentFragment();
    e.append(...t.childNodes), (s = t.parentNode) == null || s.replaceChild(e, t);
  });
};
function Ho(r) {
  r.querySelector('[id^="docs-internal-guid-"]') && ($o(r), jo(r));
}
const Fo = /\bmso-list:[^;]*ignore/i, zo = /\bmso-list:[^;]*\bl(\d+)/i, Vo = /\bmso-list:[^;]*\blevel(\d+)/i, Ko = (r, t) => {
  const e = r.getAttribute("style"), s = e == null ? void 0 : e.match(zo);
  if (!s)
    return null;
  const n = Number(s[1]), i = e == null ? void 0 : e.match(Vo), o = i ? Number(i[1]) : 1, a = new RegExp("@list l".concat(n, ":level").concat(o, "\\s*\\{[^\\}]*mso-level-number-format:\\s*([\\w-]+)"), "i"), u = t.match(a), h = u && u[1] === "bullet" ? "bullet" : "ordered";
  return {
    id: n,
    indent: o,
    type: h,
    element: r
  };
}, Go = (r) => {
  var o, a;
  const t = Array.from(r.querySelectorAll("[style*=mso-list]")), e = [], s = [];
  t.forEach((u) => {
    (u.getAttribute("style") || "").match(Fo) ? e.push(u) : s.push(u);
  }), e.forEach((u) => {
    var h;
    return (h = u.parentNode) == null ? void 0 : h.removeChild(u);
  });
  const n = r.documentElement.innerHTML, i = s.map((u) => Ko(u, n)).filter((u) => u);
  for (; i.length; ) {
    const u = [];
    let h = i.shift();
    for (; h; )
      u.push(h), h = i.length && ((o = i[0]) == null ? void 0 : o.element) === h.element.nextElementSibling && // Different id means the next item doesn't belong to this group.
      i[0].id === h.id ? i.shift() : null;
    const d = document.createElement("ul");
    u.forEach((p) => {
      const g = document.createElement("li");
      g.setAttribute("data-list", p.type), p.indent > 1 && g.setAttribute("class", "ql-indent-".concat(p.indent - 1)), g.innerHTML = p.element.innerHTML, d.appendChild(g);
    });
    const b = (a = u[0]) == null ? void 0 : a.element, {
      parentNode: m
    } = b != null ? b : {};
    b && (m == null || m.replaceChild(d, b)), u.slice(1).forEach((p) => {
      let {
        element: g
      } = p;
      m == null || m.removeChild(g);
    });
  }
};
function Zo(r) {
  r.documentElement.getAttribute("xmlns:w") === "urn:schemas-microsoft-com:office:word" && Go(r);
}
const Wo = [Zo, Ho], Xo = (r) => {
  r.documentElement && Wo.forEach((t) => {
    t(r);
  });
}, Yo = Kt("quill:clipboard"), Jo = [[Node.TEXT_NODE, ua], [Node.TEXT_NODE, wi], ["br", na], [Node.ELEMENT_NODE, wi], [Node.ELEMENT_NODE, sa], [Node.ELEMENT_NODE, ea], [Node.ELEMENT_NODE, aa], ["li", la], ["ol, ul", oa], ["pre", ra], ["tr", ca], ["b", mr("bold")], ["i", mr("italic")], ["strike", mr("strike")], ["style", ia]], Qo = [So, Qi].reduce((r, t) => (r[t.keyName] = t, r), {}), Ni = [Yi, Gr, Kr, el, rl, ll].reduce((r, t) => (r[t.keyName] = t, r), {});
class ol extends St {
  constructor(t, e) {
    var s;
    super(t, e), this.quill.root.addEventListener("copy", (n) => this.onCaptureCopy(n, !1)), this.quill.root.addEventListener("cut", (n) => this.onCaptureCopy(n, !0)), this.quill.root.addEventListener("paste", this.onCapturePaste.bind(this)), this.matchers = [], Jo.concat((s = this.options.matchers) != null ? s : []).forEach((n) => {
      let [i, o] = n;
      this.addMatcher(i, o);
    });
  }
  addMatcher(t, e) {
    this.matchers.push([t, e]);
  }
  convert(t) {
    let {
      html: e,
      text: s
    } = t, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (n[st.blotName])
      return new C().insert(s || "", {
        [st.blotName]: n[st.blotName]
      });
    if (!e)
      return new C().insert(s || "", n);
    const i = this.convertHTML(e);
    return vs(i, "\n") && (i.ops[i.ops.length - 1].attributes == null || n.table) ? i.compose(new C().retain(i.length() - 1).delete(1)) : i;
  }
  normalizeHTML(t) {
    Xo(t);
  }
  convertHTML(t) {
    const e = new DOMParser().parseFromString(t, "text/html");
    this.normalizeHTML(e);
    const s = e.body, n = /* @__PURE__ */ new WeakMap(), [i, o] = this.prepareMatching(s, n);
    return Yr(this.quill.scroll, s, i, o, n);
  }
  dangerouslyPasteHTML(t, e) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : w.sources.API;
    if (typeof t == "string") {
      const n = this.convert({
        html: t,
        text: ""
      });
      this.quill.setContents(n, e), this.quill.setSelection(0, w.sources.SILENT);
    } else {
      const n = this.convert({
        html: e,
        text: ""
      });
      this.quill.updateContents(new C().retain(t).concat(n), s), this.quill.setSelection(t + n.length(), w.sources.SILENT);
    }
  }
  onCaptureCopy(t) {
    var o, a;
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (t.defaultPrevented)
      return;
    t.preventDefault();
    const [s] = this.quill.selection.getRange();
    if (s == null)
      return;
    const {
      html: n,
      text: i
    } = this.onCopy(s, e);
    (o = t.clipboardData) == null || o.setData("text/plain", i), (a = t.clipboardData) == null || a.setData("text/html", n), e && Xr({
      range: s,
      quill: this.quill
    });
  }
  /*
   * https://www.iana.org/assignments/media-types/text/uri-list
   */
  normalizeURIList(t) {
    return t.split(/\r?\n/).filter((e) => e[0] !== "#").join("\n");
  }
  onCapturePaste(t) {
    var o, a, u, h, d;
    if (t.defaultPrevented || !this.quill.isEnabled())
      return;
    t.preventDefault();
    const e = this.quill.getSelection(!0);
    if (e == null)
      return;
    const s = (o = t.clipboardData) == null ? void 0 : o.getData("text/html");
    let n = (a = t.clipboardData) == null ? void 0 : a.getData("text/plain");
    if (!s && !n) {
      const b = (u = t.clipboardData) == null ? void 0 : u.getData("text/uri-list");
      b && (n = this.normalizeURIList(b));
    }
    const i = Array.from(((h = t.clipboardData) == null ? void 0 : h.files) || []);
    if (!s && i.length > 0) {
      this.quill.uploader.upload(e, i);
      return;
    }
    if (s && i.length > 0) {
      const b = new DOMParser().parseFromString(s, "text/html");
      if (b.body.childElementCount === 1 && ((d = b.body.firstElementChild) == null ? void 0 : d.tagName) === "IMG") {
        this.quill.uploader.upload(e, i);
        return;
      }
    }
    this.onPaste(e, {
      html: s,
      text: n
    });
  }
  onCopy(t) {
    const e = this.quill.getText(t);
    return {
      html: this.quill.getSemanticHTML(t),
      text: e
    };
  }
  onPaste(t, e) {
    let {
      text: s,
      html: n
    } = e;
    const i = this.quill.getFormat(t.index), o = this.convert({
      text: s,
      html: n
    }, i);
    Yo.log("onPaste", o, {
      text: s,
      html: n
    });
    const a = new C().retain(t.index).delete(t.length).concat(o);
    this.quill.updateContents(a, w.sources.USER), this.quill.setSelection(a.length() - t.length, w.sources.SILENT), this.quill.scrollSelectionIntoView();
  }
  prepareMatching(t, e) {
    const s = [], n = [];
    return this.matchers.forEach((i) => {
      const [o, a] = i;
      switch (o) {
        case Node.TEXT_NODE:
          n.push(a);
          break;
        case Node.ELEMENT_NODE:
          s.push(a);
          break;
        default:
          Array.from(t.querySelectorAll(o)).forEach((u) => {
            if (e.has(u)) {
              const h = e.get(u);
              h == null || h.push(a);
            } else
              e.set(u, [a]);
          });
          break;
      }
    }), [s, n];
  }
}
A(ol, "DEFAULTS", {
  matchers: []
});
function ge(r, t, e, s) {
  return s.query(t) ? r.reduce((n, i) => {
    if (!i.insert)
      return n;
    if (i.attributes && i.attributes[t])
      return n.push(i);
    const o = e ? {
      [t]: e
    } : {};
    return n.insert(i.insert, {
      ...o,
      ...i.attributes
    });
  }, new C()) : r;
}
function vs(r, t) {
  let e = "";
  for (let s = r.ops.length - 1; s >= 0 && e.length < t.length; --s) {
    const n = r.ops[s];
    if (typeof n.insert != "string")
      break;
    e = n.insert + e;
  }
  return e.slice(-1 * t.length) === t;
}
function Qt(r, t) {
  if (!(r instanceof Element))
    return !1;
  const e = t.query(r);
  return e && e.prototype instanceof ut ? !1 : ["address", "article", "blockquote", "canvas", "dd", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "iframe", "li", "main", "nav", "ol", "output", "p", "pre", "section", "table", "td", "tr", "ul", "video"].includes(r.tagName.toLowerCase());
}
function ta(r, t) {
  return r.previousElementSibling && r.nextElementSibling && !Qt(r.previousElementSibling, t) && !Qt(r.nextElementSibling, t);
}
const Ys = /* @__PURE__ */ new WeakMap();
function al(r) {
  return r == null ? !1 : (Ys.has(r) || (r.tagName === "PRE" ? Ys.set(r, !0) : Ys.set(r, al(r.parentNode))), Ys.get(r));
}
function Yr(r, t, e, s, n) {
  return t.nodeType === t.TEXT_NODE ? s.reduce((i, o) => o(t, i, r), new C()) : t.nodeType === t.ELEMENT_NODE ? Array.from(t.childNodes || []).reduce((i, o) => {
    let a = Yr(r, o, e, s, n);
    return o.nodeType === t.ELEMENT_NODE && (a = e.reduce((u, h) => h(o, u, r), a), a = (n.get(o) || []).reduce((u, h) => h(o, u, r), a)), i.concat(a);
  }, new C()) : new C();
}
function mr(r) {
  return (t, e, s) => ge(e, r, !0, s);
}
function ea(r, t, e) {
  const s = Bt.keys(r), n = qt.keys(r), i = se.keys(r), o = {};
  return s.concat(n).concat(i).forEach((a) => {
    let u = e.query(a, k.ATTRIBUTE);
    u != null && (o[u.attrName] = u.value(r), o[u.attrName]) || (u = Qo[a], u != null && (u.attrName === a || u.keyName === a) && (o[u.attrName] = u.value(r) || void 0), u = Ni[a], u != null && (u.attrName === a || u.keyName === a) && (u = Ni[a], o[u.attrName] = u.value(r) || void 0));
  }), Object.entries(o).reduce((a, u) => {
    let [h, d] = u;
    return ge(a, h, d, e);
  }, t);
}
function sa(r, t, e) {
  const s = e.query(r);
  if (s == null)
    return t;
  if (s.prototype instanceof ut) {
    const n = {}, i = s.value(r);
    if (i != null)
      return n[s.blotName] = i, new C().insert(n, s.formats(r, e));
  } else if (s.prototype instanceof ms && !vs(t, "\n") && t.insert("\n"), "blotName" in s && "formats" in s && typeof s.formats == "function")
    return ge(t, s.blotName, s.formats(r, e), e);
  return t;
}
function na(r, t) {
  return vs(t, "\n") || t.insert("\n"), t;
}
function ra(r, t, e) {
  const s = e.query("code-block"), n = s && "formats" in s && typeof s.formats == "function" ? s.formats(r, e) : !0;
  return ge(t, "code-block", n, e);
}
function ia() {
  return new C();
}
function la(r, t, e) {
  const s = e.query(r);
  if (s == null || // @ts-expect-error
  s.blotName !== "list" || !vs(t, "\n"))
    return t;
  let n = -1, i = r.parentNode;
  for (; i != null; )
    ["OL", "UL"].includes(i.tagName) && (n += 1), i = i.parentNode;
  return n <= 0 ? t : t.reduce((o, a) => a.insert ? a.attributes && typeof a.attributes.indent == "number" ? o.push(a) : o.insert(a.insert, {
    indent: n,
    ...a.attributes || {}
  }) : o, new C());
}
function oa(r, t, e) {
  const s = r;
  let n = s.tagName === "OL" ? "ordered" : "bullet";
  const i = s.getAttribute("data-checked");
  return i && (n = i === "true" ? "checked" : "unchecked"), ge(t, "list", n, e);
}
function wi(r, t, e) {
  if (!vs(t, "\n")) {
    if (Qt(r, e) && (r.childNodes.length > 0 || r instanceof HTMLParagraphElement))
      return t.insert("\n");
    if (t.length() > 0 && r.nextSibling) {
      let s = r.nextSibling;
      for (; s != null; ) {
        if (Qt(s, e))
          return t.insert("\n");
        const n = e.query(s);
        if (n && n.prototype instanceof bt)
          return t.insert("\n");
        s = s.firstChild;
      }
    }
  }
  return t;
}
function aa(r, t, e) {
  var i;
  const s = {}, n = r.style || {};
  return n.fontStyle === "italic" && (s.italic = !0), n.textDecoration === "underline" && (s.underline = !0), n.textDecoration === "line-through" && (s.strike = !0), ((i = n.fontWeight) != null && i.startsWith("bold") || // @ts-expect-error Fix me later
  parseInt(n.fontWeight, 10) >= 700) && (s.bold = !0), t = Object.entries(s).reduce((o, a) => {
    let [u, h] = a;
    return ge(o, u, h, e);
  }, t), parseFloat(n.textIndent || 0) > 0 ? new C().insert("	").concat(t) : t;
}
function ca(r, t, e) {
  var n, i;
  const s = ((n = r.parentElement) == null ? void 0 : n.tagName) === "TABLE" ? r.parentElement : (i = r.parentElement) == null ? void 0 : i.parentElement;
  if (s != null) {
    const a = Array.from(s.querySelectorAll("tr")).indexOf(r) + 1;
    return ge(t, "table", a, e);
  }
  return t;
}
function ua(r, t, e) {
  var n;
  let s = r.data;
  if (((n = r.parentElement) == null ? void 0 : n.tagName) === "O:P")
    return t.insert(s.trim());
  if (!al(r)) {
    if (s.trim().length === 0 && s.includes("\n") && !ta(r, e))
      return t;
    const i = (o, a) => {
      const u = a.replace(/[^\u00a0]/g, "");
      return u.length < 1 && o ? " " : u;
    };
    s = s.replace(/\r\n/g, " ").replace(/\n/g, " "), s = s.replace(/\s\s+/g, i.bind(i, !0)), (r.previousSibling == null && r.parentElement != null && Qt(r.parentElement, e) || r.previousSibling instanceof Element && Qt(r.previousSibling, e)) && (s = s.replace(/^\s+/, i.bind(i, !1))), (r.nextSibling == null && r.parentElement != null && Qt(r.parentElement, e) || r.nextSibling instanceof Element && Qt(r.nextSibling, e)) && (s = s.replace(/\s+$/, i.bind(i, !1)));
  }
  return t.insert(s);
}
class cl extends St {
  constructor(e, s) {
    super(e, s);
    A(this, "lastRecorded", 0);
    A(this, "ignoreChange", !1);
    A(this, "stack", {
      undo: [],
      redo: []
    });
    A(this, "currentRange", null);
    this.quill.on(w.events.EDITOR_CHANGE, (n, i, o, a) => {
      n === w.events.SELECTION_CHANGE ? i && a !== w.sources.SILENT && (this.currentRange = i) : n === w.events.TEXT_CHANGE && (this.ignoreChange || (!this.options.userOnly || a === w.sources.USER ? this.record(i, o) : this.transform(i)), this.currentRange = Tr(this.currentRange, i));
    }), this.quill.keyboard.addBinding({
      key: "z",
      shortKey: !0
    }, this.undo.bind(this)), this.quill.keyboard.addBinding({
      key: ["z", "Z"],
      shortKey: !0,
      shiftKey: !0
    }, this.redo.bind(this)), /Win/i.test(navigator.platform) && this.quill.keyboard.addBinding({
      key: "y",
      shortKey: !0
    }, this.redo.bind(this)), this.quill.root.addEventListener("beforeinput", (n) => {
      n.inputType === "historyUndo" ? (this.undo(), n.preventDefault()) : n.inputType === "historyRedo" && (this.redo(), n.preventDefault());
    });
  }
  change(e, s) {
    if (this.stack[e].length === 0)
      return;
    const n = this.stack[e].pop();
    if (!n)
      return;
    const i = this.quill.getContents(), o = n.delta.invert(i);
    this.stack[s].push({
      delta: o,
      range: Tr(n.range, o)
    }), this.lastRecorded = 0, this.ignoreChange = !0, this.quill.updateContents(n.delta, w.sources.USER), this.ignoreChange = !1, this.restoreSelection(n);
  }
  clear() {
    this.stack = {
      undo: [],
      redo: []
    };
  }
  cutoff() {
    this.lastRecorded = 0;
  }
  record(e, s) {
    if (e.ops.length === 0)
      return;
    this.stack.redo = [];
    let n = e.invert(s), i = this.currentRange;
    const o = Date.now();
    if (
      // @ts-expect-error Fix me later
      this.lastRecorded + this.options.delay > o && this.stack.undo.length > 0
    ) {
      const a = this.stack.undo.pop();
      a && (n = n.compose(a.delta), i = a.range);
    } else
      this.lastRecorded = o;
    n.length() !== 0 && (this.stack.undo.push({
      delta: n,
      range: i
    }), this.stack.undo.length > this.options.maxStack && this.stack.undo.shift());
  }
  redo() {
    this.change("redo", "undo");
  }
  transform(e) {
    Ai(this.stack.undo, e), Ai(this.stack.redo, e);
  }
  undo() {
    this.change("undo", "redo");
  }
  restoreSelection(e) {
    if (e.range)
      this.quill.setSelection(e.range, w.sources.USER);
    else {
      const s = fa(this.quill.scroll, e.delta);
      this.quill.setSelection(s, w.sources.USER);
    }
  }
}
A(cl, "DEFAULTS", {
  delay: 1e3,
  maxStack: 100,
  userOnly: !1
});
function Ai(r, t) {
  let e = t;
  for (let s = r.length - 1; s >= 0; s -= 1) {
    const n = r[s];
    r[s] = {
      delta: e.transform(n.delta, !0),
      range: n.range && Tr(n.range, e)
    }, e = n.delta.transform(e), r[s].delta.length() === 0 && r.splice(s, 1);
  }
}
function ha(r, t) {
  const e = t.ops[t.ops.length - 1];
  return e == null ? !1 : e.insert != null ? typeof e.insert == "string" && e.insert.endsWith("\n") : e.attributes != null ? Object.keys(e.attributes).some((s) => r.query(s, k.BLOCK) != null) : !1;
}
function fa(r, t) {
  const e = t.reduce((n, i) => n + (i.delete || 0), 0);
  let s = t.length() - e;
  return ha(r, t) && (s -= 1), s;
}
function Tr(r, t) {
  if (!r)
    return r;
  const e = t.transformPosition(r.index), s = t.transformPosition(r.index + r.length);
  return {
    index: e,
    length: s - e
  };
}
class ul extends St {
  constructor(t, e) {
    super(t, e), t.root.addEventListener("drop", (s) => {
      var o;
      s.preventDefault();
      let n = null;
      if (document.caretRangeFromPoint)
        n = document.caretRangeFromPoint(s.clientX, s.clientY);
      else if (document.caretPositionFromPoint) {
        const a = document.caretPositionFromPoint(s.clientX, s.clientY);
        n = document.createRange(), n.setStart(a.offsetNode, a.offset), n.setEnd(a.offsetNode, a.offset);
      }
      const i = n && t.selection.normalizeNative(n);
      if (i) {
        const a = t.selection.normalizedToRange(i);
        (o = s.dataTransfer) != null && o.files && this.upload(a, s.dataTransfer.files);
      }
    });
  }
  upload(t, e) {
    const s = [];
    Array.from(e).forEach((n) => {
      var i;
      n && ((i = this.options.mimetypes) != null && i.includes(n.type)) && s.push(n);
    }), s.length > 0 && this.options.handler.call(this, t, s);
  }
}
ul.DEFAULTS = {
  mimetypes: ["image/png", "image/jpeg"],
  handler(r, t) {
    if (!this.quill.scroll.query("image"))
      return;
    const e = t.map((s) => new Promise((n) => {
      const i = new FileReader();
      i.onload = () => {
        n(i.result);
      }, i.readAsDataURL(s);
    }));
    Promise.all(e).then((s) => {
      const n = s.reduce((i, o) => i.insert({
        image: o
      }), new C().retain(r.index).delete(r.length));
      this.quill.updateContents(n, q.sources.USER), this.quill.setSelection(r.index + s.length, q.sources.SILENT);
    });
  }
};
const da = ["insertText", "insertReplacementText"];
class ma extends St {
  constructor(t, e) {
    super(t, e), t.root.addEventListener("beforeinput", (s) => {
      this.handleBeforeInput(s);
    }), /Android/i.test(navigator.userAgent) || t.on(w.events.COMPOSITION_BEFORE_START, () => {
      this.handleCompositionStart();
    });
  }
  deleteRange(t) {
    Xr({
      range: t,
      quill: this.quill
    });
  }
  replaceText(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    if (t.length === 0)
      return !1;
    if (e) {
      const s = this.quill.getFormat(t.index, 1);
      this.deleteRange(t), this.quill.updateContents(new C().retain(t.index).insert(e, s), w.sources.USER);
    } else
      this.deleteRange(t);
    return this.quill.setSelection(t.index + e.length, 0, w.sources.SILENT), !0;
  }
  handleBeforeInput(t) {
    if (this.quill.composition.isComposing || t.defaultPrevented || !da.includes(t.inputType))
      return;
    const e = t.getTargetRanges ? t.getTargetRanges()[0] : null;
    if (!e || e.collapsed === !0)
      return;
    const s = pa(t);
    if (s == null)
      return;
    const n = this.quill.selection.normalizeNative(e), i = n ? this.quill.selection.normalizedToRange(n) : null;
    i && this.replaceText(i, s) && t.preventDefault();
  }
  handleCompositionStart() {
    const t = this.quill.getSelection();
    t && this.replaceText(t);
  }
}
function pa(r) {
  var t;
  return typeof r.data == "string" ? r.data : (t = r.dataTransfer) != null && t.types.includes("text/plain") ? r.dataTransfer.getData("text/plain") : null;
}
const ga = /Mac/i.test(navigator.platform), ba = 100, ya = (r) => !!(r.key === "ArrowLeft" || r.key === "ArrowRight" || // RTL scripts or moving from the end of the previous line
r.key === "ArrowUp" || r.key === "ArrowDown" || r.key === "Home" || ga && r.key === "a" && r.ctrlKey === !0);
class va extends St {
  constructor(e, s) {
    super(e, s);
    A(this, "isListening", !1);
    A(this, "selectionChangeDeadline", 0);
    this.handleArrowKeys(), this.handleNavigationShortcuts();
  }
  handleArrowKeys() {
    this.quill.keyboard.addBinding({
      key: ["ArrowLeft", "ArrowRight"],
      offset: 0,
      shiftKey: null,
      handler(e, s) {
        let {
          line: n,
          event: i
        } = s;
        if (!(n instanceof Lt) || !n.uiNode)
          return !0;
        const o = getComputedStyle(n.domNode).direction === "rtl";
        return o && i.key !== "ArrowRight" || !o && i.key !== "ArrowLeft" ? !0 : (this.quill.setSelection(e.index - 1, e.length + (i.shiftKey ? 1 : 0), w.sources.USER), !1);
      }
    });
  }
  handleNavigationShortcuts() {
    this.quill.root.addEventListener("keydown", (e) => {
      !e.defaultPrevented && ya(e) && this.ensureListeningToSelectionChange();
    });
  }
  /**
   * We only listen to the `selectionchange` event when
   * there is an intention of moving the caret to the beginning using shortcuts.
   * This is primarily implemented to prevent infinite loops, as we are changing
   * the selection within the handler of a `selectionchange` event.
   */
  ensureListeningToSelectionChange() {
    if (this.selectionChangeDeadline = Date.now() + ba, this.isListening)
      return;
    this.isListening = !0;
    const e = () => {
      this.isListening = !1, Date.now() <= this.selectionChangeDeadline && this.handleSelectionChange();
    };
    document.addEventListener("selectionchange", e, {
      once: !0
    });
  }
  handleSelectionChange() {
    const e = document.getSelection();
    if (!e)
      return;
    const s = e.getRangeAt(0);
    if (s.collapsed !== !0 || s.startOffset !== 0)
      return;
    const n = this.quill.scroll.find(s.startContainer);
    if (!(n instanceof Lt) || !n.uiNode)
      return;
    const i = document.createRange();
    i.setStartAfter(n.uiNode), i.setEndAfter(n.uiNode), e.removeAllRanges(), e.addRange(i);
  }
}
w.register({
  "blots/block": Y,
  "blots/block/embed": bt,
  "blots/break": Ct,
  "blots/container": me,
  "blots/cursor": je,
  "blots/embed": zr,
  "blots/inline": ne,
  "blots/scroll": Me,
  "blots/text": Tt,
  "modules/clipboard": ol,
  "modules/history": cl,
  "modules/keyboard": dn,
  "modules/uploader": ul,
  "modules/input": ma,
  "modules/uiNode": va
});
class Ea extends qt {
  add(t, e) {
    let s = 0;
    if (e === "+1" || e === "-1") {
      const n = this.value(t) || 0;
      s = e === "+1" ? n + 1 : n - 1;
    } else
      typeof e == "number" && (s = e);
    return s === 0 ? (this.remove(t), !0) : super.add(t, s.toString());
  }
  canAdd(t, e) {
    return super.canAdd(t, e) || super.canAdd(t, parseInt(e, 10));
  }
  value(t) {
    return parseInt(super.value(t), 10) || void 0;
  }
}
const Na = new Ea("indent", "ql-indent", {
  scope: k.BLOCK,
  // @ts-expect-error
  whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
});
class qr extends Y {
}
A(qr, "blotName", "blockquote"), A(qr, "tagName", "blockquote");
class Cr extends Y {
  static formats(t) {
    return this.tagName.indexOf(t.tagName) + 1;
  }
}
A(Cr, "blotName", "header"), A(Cr, "tagName", ["H1", "H2", "H3", "H4", "H5", "H6"]);
class Es extends me {
}
Es.blotName = "list-container";
Es.tagName = "OL";
class Ns extends Y {
  static create(t) {
    const e = super.create();
    return e.setAttribute("data-list", t), e;
  }
  static formats(t) {
    return t.getAttribute("data-list") || void 0;
  }
  static register() {
    w.register(Es);
  }
  constructor(t, e) {
    super(t, e);
    const s = e.ownerDocument.createElement("span"), n = (i) => {
      if (!t.isEnabled())
        return;
      const o = this.statics.formats(e, t);
      o === "checked" ? (this.format("list", "unchecked"), i.preventDefault()) : o === "unchecked" && (this.format("list", "checked"), i.preventDefault());
    };
    s.addEventListener("mousedown", n), s.addEventListener("touchstart", n), this.attachUI(s);
  }
  format(t, e) {
    t === this.statics.blotName && e ? this.domNode.setAttribute("data-list", e) : super.format(t, e);
  }
}
Ns.blotName = "list";
Ns.tagName = "LI";
Es.allowedChildren = [Ns];
Ns.requiredContainer = Es;
class bs extends ne {
  static create() {
    return super.create();
  }
  static formats() {
    return !0;
  }
  optimize(t) {
    super.optimize(t), this.domNode.tagName !== this.statics.tagName[0] && this.replaceWith(this.statics.blotName);
  }
}
A(bs, "blotName", "bold"), A(bs, "tagName", ["STRONG", "B"]);
class Sr extends bs {
}
A(Sr, "blotName", "italic"), A(Sr, "tagName", ["EM", "I"]);
class te extends ne {
  static create(t) {
    const e = super.create(t);
    return e.setAttribute("href", this.sanitize(t)), e.setAttribute("rel", "noopener noreferrer"), e.setAttribute("target", "_blank"), e;
  }
  static formats(t) {
    return t.getAttribute("href");
  }
  static sanitize(t) {
    return hl(t, this.PROTOCOL_WHITELIST) ? t : this.SANITIZED_URL;
  }
  format(t, e) {
    t !== this.statics.blotName || !e ? super.format(t, e) : this.domNode.setAttribute("href", this.constructor.sanitize(e));
  }
}
A(te, "blotName", "link"), A(te, "tagName", "A"), A(te, "SANITIZED_URL", "about:blank"), A(te, "PROTOCOL_WHITELIST", ["http", "https", "mailto", "tel", "sms"]);
function hl(r, t) {
  const e = document.createElement("a");
  e.href = r;
  const s = e.href.slice(0, e.href.indexOf(":"));
  return t.indexOf(s) > -1;
}
class kr extends ne {
  static create(t) {
    return t === "super" ? document.createElement("sup") : t === "sub" ? document.createElement("sub") : super.create(t);
  }
  static formats(t) {
    if (t.tagName === "SUB")
      return "sub";
    if (t.tagName === "SUP")
      return "super";
  }
}
A(kr, "blotName", "script"), A(kr, "tagName", ["SUB", "SUP"]);
class Or extends bs {
}
A(Or, "blotName", "strike"), A(Or, "tagName", ["S", "STRIKE"]);
class Ir extends ne {
}
A(Ir, "blotName", "underline"), A(Ir, "tagName", "U");
class Js extends zr {
  static create(t) {
    if (window.katex == null)
      throw new Error("Formula module requires KaTeX.");
    const e = super.create(t);
    return typeof t == "string" && (window.katex.render(t, e, {
      throwOnError: !1,
      errorColor: "#f00"
    }), e.setAttribute("data-value", t)), e;
  }
  static value(t) {
    return t.getAttribute("data-value");
  }
  html() {
    const {
      formula: t
    } = this.value();
    return "<span>".concat(t, "</span>");
  }
}
A(Js, "blotName", "formula"), A(Js, "className", "ql-formula"), A(Js, "tagName", "SPAN");
const xi = ["alt", "height", "width"];
class Rr extends ut {
  static create(t) {
    const e = super.create(t);
    return typeof t == "string" && e.setAttribute("src", this.sanitize(t)), e;
  }
  static formats(t) {
    return xi.reduce((e, s) => (t.hasAttribute(s) && (e[s] = t.getAttribute(s)), e), {});
  }
  static match(t) {
    return /\.(jpe?g|gif|png)$/.test(t) || /^data:image\/.+;base64/.test(t);
  }
  static sanitize(t) {
    return hl(t, ["http", "https", "data"]) ? t : "//:0";
  }
  static value(t) {
    return t.getAttribute("src");
  }
  format(t, e) {
    xi.indexOf(t) > -1 ? e ? this.domNode.setAttribute(t, e) : this.domNode.removeAttribute(t) : super.format(t, e);
  }
}
A(Rr, "blotName", "image"), A(Rr, "tagName", "IMG");
const Li = ["height", "width"];
class Qs extends bt {
  static create(t) {
    const e = super.create(t);
    return e.setAttribute("frameborder", "0"), e.setAttribute("allowfullscreen", "true"), e.setAttribute("src", this.sanitize(t)), e;
  }
  static formats(t) {
    return Li.reduce((e, s) => (t.hasAttribute(s) && (e[s] = t.getAttribute(s)), e), {});
  }
  static sanitize(t) {
    return te.sanitize(t);
  }
  static value(t) {
    return t.getAttribute("src");
  }
  format(t, e) {
    Li.indexOf(t) > -1 ? e ? this.domNode.setAttribute(t, e) : this.domNode.removeAttribute(t) : super.format(t, e);
  }
  html() {
    const {
      video: t
    } = this.value();
    return '<a href="'.concat(t, '">').concat(t, "</a>");
  }
}
A(Qs, "blotName", "video"), A(Qs, "className", "ql-video"), A(Qs, "tagName", "IFRAME");
const us = new qt("code-token", "hljs", {
  scope: k.INLINE
});
class zt extends ne {
  static formats(t, e) {
    for (; t != null && t !== e.domNode; ) {
      if (t.classList && t.classList.contains(st.className))
        return super.formats(t, e);
      t = t.parentNode;
    }
  }
  constructor(t, e, s) {
    super(t, e, s), us.add(this.domNode, s);
  }
  format(t, e) {
    t !== zt.blotName ? super.format(t, e) : e ? us.add(this.domNode, e) : (us.remove(this.domNode), this.domNode.classList.remove(this.statics.className));
  }
  optimize() {
    super.optimize(...arguments), us.value(this.domNode) || this.unwrap();
  }
}
zt.blotName = "code-token";
zt.className = "ql-token";
class pt extends st {
  static create(t) {
    const e = super.create(t);
    return typeof t == "string" && e.setAttribute("data-language", t), e;
  }
  static formats(t) {
    return t.getAttribute("data-language") || "plain";
  }
  static register() {
  }
  // Syntax module will register
  format(t, e) {
    t === this.statics.blotName && e ? this.domNode.setAttribute("data-language", e) : super.format(t, e);
  }
  replaceWith(t, e) {
    return this.formatAt(0, this.length(), zt.blotName, !1), super.replaceWith(t, e);
  }
}
class hs extends pe {
  attach() {
    super.attach(), this.forceNext = !1, this.scroll.emitMount(this);
  }
  format(t, e) {
    t === pt.blotName && (this.forceNext = !0, this.children.forEach((s) => {
      s.format(t, e);
    }));
  }
  formatAt(t, e, s, n) {
    s === pt.blotName && (this.forceNext = !0), super.formatAt(t, e, s, n);
  }
  highlight(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (this.children.head == null)
      return;
    const s = Array.from(this.domNode.childNodes).filter((o) => o !== this.uiNode), n = "".concat(s.map((o) => o.textContent).join("\n"), "\n"), i = pt.formats(this.children.head.domNode);
    if (e || this.forceNext || this.cachedText !== n) {
      if (n.trim().length > 0 || this.cachedText == null) {
        const o = this.children.reduce((u, h) => u.concat(Gi(h, !1)), new C()), a = t(n, i);
        o.diff(a).reduce((u, h) => {
          let {
            retain: d,
            attributes: b
          } = h;
          return d ? (b && Object.keys(b).forEach((m) => {
            [pt.blotName, zt.blotName].includes(m) && this.formatAt(u, d, m, b[m]);
          }), u + d) : u;
        }, 0);
      }
      this.cachedText = n, this.forceNext = !1;
    }
  }
  html(t, e) {
    const [s] = this.children.find(t), n = s ? pt.formats(s.domNode) : "plain";
    return '<pre data-language="'.concat(n, '">\n').concat(fn(this.code(t, e)), "\n</pre>");
  }
  optimize(t) {
    if (super.optimize(t), this.parent != null && this.children.head != null && this.uiNode != null) {
      const e = pt.formats(this.children.head.domNode);
      e !== this.uiNode.value && (this.uiNode.value = e);
    }
  }
}
hs.allowedChildren = [pt];
pt.requiredContainer = hs;
pt.allowedChildren = [zt, je, Tt, Ct];
const wa = (r, t, e) => {
  if (typeof r.versionString == "string") {
    const s = r.versionString.split(".")[0];
    if (parseInt(s, 10) >= 11)
      return r.highlight(e, {
        language: t
      }).value;
  }
  return r.highlight(t, e).value;
};
class fl extends St {
  static register() {
    w.register(zt, !0), w.register(pt, !0), w.register(hs, !0);
  }
  constructor(t, e) {
    if (super(t, e), this.options.hljs == null)
      throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");
    this.languages = this.options.languages.reduce((s, n) => {
      let {
        key: i
      } = n;
      return s[i] = !0, s;
    }, {}), this.highlightBlot = this.highlightBlot.bind(this), this.initListener(), this.initTimer();
  }
  initListener() {
    this.quill.on(w.events.SCROLL_BLOT_MOUNT, (t) => {
      if (!(t instanceof hs))
        return;
      const e = this.quill.root.ownerDocument.createElement("select");
      this.options.languages.forEach((s) => {
        let {
          key: n,
          label: i
        } = s;
        const o = e.ownerDocument.createElement("option");
        o.textContent = i, o.setAttribute("value", n), e.appendChild(o);
      }), e.addEventListener("change", () => {
        t.format(pt.blotName, e.value), this.quill.root.focus(), this.highlight(t, !0);
      }), t.uiNode == null && (t.attachUI(e), t.children.head && (e.value = pt.formats(t.children.head.domNode)));
    });
  }
  initTimer() {
    let t = null;
    this.quill.on(w.events.SCROLL_OPTIMIZE, () => {
      t && clearTimeout(t), t = setTimeout(() => {
        this.highlight(), t = null;
      }, this.options.interval);
    });
  }
  highlight() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (this.quill.selection.composing)
      return;
    this.quill.update(w.sources.USER);
    const s = this.quill.getSelection();
    (t == null ? this.quill.scroll.descendants(hs) : [t]).forEach((i) => {
      i.highlight(this.highlightBlot, e);
    }), this.quill.update(w.sources.SILENT), s != null && this.quill.setSelection(s, w.sources.SILENT);
  }
  highlightBlot(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "plain";
    if (e = this.languages[e] ? e : "plain", e === "plain")
      return fn(t).split("\n").reduce((n, i, o) => (o !== 0 && n.insert("\n", {
        [st.blotName]: e
      }), n.insert(i)), new C());
    const s = this.quill.root.ownerDocument.createElement("div");
    return s.classList.add(st.className), s.innerHTML = wa(this.options.hljs, e, t), Yr(this.quill.scroll, s, [(n, i) => {
      const o = us.value(n);
      return o ? i.compose(new C().retain(i.length(), {
        [zt.blotName]: o
      })) : i;
    }], [(n, i) => n.data.split("\n").reduce((o, a, u) => (u !== 0 && o.insert("\n", {
      [st.blotName]: e
    }), o.insert(a)), i)], /* @__PURE__ */ new WeakMap());
  }
}
fl.DEFAULTS = {
  hljs: (() => window.hljs)(),
  interval: 1e3,
  languages: [{
    key: "plain",
    label: "Plain"
  }, {
    key: "bash",
    label: "Bash"
  }, {
    key: "cpp",
    label: "C++"
  }, {
    key: "cs",
    label: "C#"
  }, {
    key: "css",
    label: "CSS"
  }, {
    key: "diff",
    label: "Diff"
  }, {
    key: "xml",
    label: "HTML/XML"
  }, {
    key: "java",
    label: "Java"
  }, {
    key: "javascript",
    label: "JavaScript"
  }, {
    key: "markdown",
    label: "Markdown"
  }, {
    key: "php",
    label: "PHP"
  }, {
    key: "python",
    label: "Python"
  }, {
    key: "ruby",
    label: "Ruby"
  }, {
    key: "sql",
    label: "SQL"
  }]
};
const ds = class ds extends Y {
  static create(t) {
    const e = super.create();
    return t ? e.setAttribute("data-row", t) : e.setAttribute("data-row", Jr()), e;
  }
  static formats(t) {
    if (t.hasAttribute("data-row"))
      return t.getAttribute("data-row");
  }
  cellOffset() {
    return this.parent ? this.parent.children.indexOf(this) : -1;
  }
  format(t, e) {
    t === ds.blotName && e ? this.domNode.setAttribute("data-row", e) : super.format(t, e);
  }
  row() {
    return this.parent;
  }
  rowOffset() {
    return this.row() ? this.row().rowOffset() : -1;
  }
  table() {
    return this.row() && this.row().table();
  }
};
A(ds, "blotName", "table"), A(ds, "tagName", "TD");
let xt = ds;
class Vt extends me {
  checkMerge() {
    if (super.checkMerge() && this.next.children.head != null) {
      const t = this.children.head.formats(), e = this.children.tail.formats(), s = this.next.children.head.formats(), n = this.next.children.tail.formats();
      return t.table === e.table && t.table === s.table && t.table === n.table;
    }
    return !1;
  }
  optimize(t) {
    super.optimize(t), this.children.forEach((e) => {
      if (e.next == null)
        return;
      const s = e.formats(), n = e.next.formats();
      if (s.table !== n.table) {
        const i = this.splitAfter(e);
        i && i.optimize(), this.prev && this.prev.optimize();
      }
    });
  }
  rowOffset() {
    return this.parent ? this.parent.children.indexOf(this) : -1;
  }
  table() {
    return this.parent && this.parent.parent;
  }
}
A(Vt, "blotName", "table-row"), A(Vt, "tagName", "TR");
class Mt extends me {
}
A(Mt, "blotName", "table-body"), A(Mt, "tagName", "TBODY");
class He extends me {
  balanceCells() {
    const t = this.descendants(Vt), e = t.reduce((s, n) => Math.max(n.children.length, s), 0);
    t.forEach((s) => {
      new Array(e - s.children.length).fill(0).forEach(() => {
        let n;
        s.children.head != null && (n = xt.formats(s.children.head.domNode));
        const i = this.scroll.create(xt.blotName, n);
        s.appendChild(i), i.optimize();
      });
    });
  }
  cells(t) {
    return this.rows().map((e) => e.children.at(t));
  }
  deleteColumn(t) {
    const [e] = this.descendant(Mt);
    e == null || e.children.head == null || e.children.forEach((s) => {
      const n = s.children.at(t);
      n != null && n.remove();
    });
  }
  insertColumn(t) {
    const [e] = this.descendant(Mt);
    e == null || e.children.head == null || e.children.forEach((s) => {
      const n = s.children.at(t), i = xt.formats(s.children.head.domNode), o = this.scroll.create(xt.blotName, i);
      s.insertBefore(o, n);
    });
  }
  insertRow(t) {
    const [e] = this.descendant(Mt);
    if (e == null || e.children.head == null)
      return;
    const s = Jr(), n = this.scroll.create(Vt.blotName);
    e.children.head.children.forEach(() => {
      const o = this.scroll.create(xt.blotName, s);
      n.appendChild(o);
    });
    const i = e.children.at(t);
    e.insertBefore(n, i);
  }
  rows() {
    const t = this.children.head;
    return t == null ? [] : t.children.map((e) => e);
  }
}
A(He, "blotName", "table-container"), A(He, "tagName", "TABLE");
He.allowedChildren = [Mt];
Mt.requiredContainer = He;
Mt.allowedChildren = [Vt];
Vt.requiredContainer = Mt;
Vt.allowedChildren = [xt];
xt.requiredContainer = Vt;
function Jr() {
  const r = Math.random().toString(36).slice(2, 6);
  return "row-".concat(r);
}
class Aa extends St {
  static register() {
    w.register(xt), w.register(Vt), w.register(Mt), w.register(He);
  }
  constructor() {
    super(...arguments), this.listenBalanceCells();
  }
  balanceTables() {
    this.quill.scroll.descendants(He).forEach((t) => {
      t.balanceCells();
    });
  }
  deleteColumn() {
    const [t, , e] = this.getTable();
    e != null && (t.deleteColumn(e.cellOffset()), this.quill.update(w.sources.USER));
  }
  deleteRow() {
    const [, t] = this.getTable();
    t != null && (t.remove(), this.quill.update(w.sources.USER));
  }
  deleteTable() {
    const [t] = this.getTable();
    if (t == null)
      return;
    const e = t.offset();
    t.remove(), this.quill.update(w.sources.USER), this.quill.setSelection(e, w.sources.SILENT);
  }
  getTable() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.quill.getSelection();
    if (t == null)
      return [null, null, null, -1];
    const [e, s] = this.quill.getLine(t.index);
    if (e == null || e.statics.blotName !== xt.blotName)
      return [null, null, null, -1];
    const n = e.parent;
    return [n.parent.parent, n, e, s];
  }
  insertColumn(t) {
    const e = this.quill.getSelection();
    if (!e)
      return;
    const [s, n, i] = this.getTable(e);
    if (i == null)
      return;
    const o = i.cellOffset();
    s.insertColumn(o + t), this.quill.update(w.sources.USER);
    let a = n.rowOffset();
    t === 0 && (a += 1), this.quill.setSelection(e.index + a, e.length, w.sources.SILENT);
  }
  insertColumnLeft() {
    this.insertColumn(0);
  }
  insertColumnRight() {
    this.insertColumn(1);
  }
  insertRow(t) {
    const e = this.quill.getSelection();
    if (!e)
      return;
    const [s, n, i] = this.getTable(e);
    if (i == null)
      return;
    const o = n.rowOffset();
    s.insertRow(o + t), this.quill.update(w.sources.USER), t > 0 ? this.quill.setSelection(e, w.sources.SILENT) : this.quill.setSelection(e.index + n.children.length, e.length, w.sources.SILENT);
  }
  insertRowAbove() {
    this.insertRow(0);
  }
  insertRowBelow() {
    this.insertRow(1);
  }
  insertTable(t, e) {
    const s = this.quill.getSelection();
    if (s == null)
      return;
    const n = new Array(t).fill(0).reduce((i) => {
      const o = new Array(e).fill("\n").join("");
      return i.insert(o, {
        table: Jr()
      });
    }, new C().retain(s.index));
    this.quill.updateContents(n, w.sources.USER), this.quill.setSelection(s.index, w.sources.SILENT), this.balanceTables();
  }
  listenBalanceCells() {
    this.quill.on(w.events.SCROLL_OPTIMIZE, (t) => {
      t.some((e) => ["TD", "TR", "TBODY", "TABLE"].includes(e.target.tagName) ? (this.quill.once(w.events.TEXT_CHANGE, (s, n, i) => {
        i === w.sources.USER && this.balanceTables();
      }), !0) : !1);
    });
  }
}
const Ti = Kt("quill:toolbar");
class Qr extends St {
  constructor(t, e) {
    var s, n;
    if (super(t, e), Array.isArray(this.options.container)) {
      const i = document.createElement("div");
      i.setAttribute("role", "toolbar"), xa(i, this.options.container), (n = (s = t.container) == null ? void 0 : s.parentNode) == null || n.insertBefore(i, t.container), this.container = i;
    } else
      typeof this.options.container == "string" ? this.container = document.querySelector(this.options.container) : this.container = this.options.container;
    if (!(this.container instanceof HTMLElement)) {
      Ti.error("Container required for toolbar", this.options);
      return;
    }
    this.container.classList.add("ql-toolbar"), this.controls = [], this.handlers = {}, this.options.handlers && Object.keys(this.options.handlers).forEach((i) => {
      var a;
      const o = (a = this.options.handlers) == null ? void 0 : a[i];
      o && this.addHandler(i, o);
    }), Array.from(this.container.querySelectorAll("button, select")).forEach((i) => {
      this.attach(i);
    }), this.quill.on(w.events.EDITOR_CHANGE, () => {
      const [i] = this.quill.selection.getRange();
      this.update(i);
    });
  }
  addHandler(t, e) {
    this.handlers[t] = e;
  }
  attach(t) {
    let e = Array.from(t.classList).find((n) => n.indexOf("ql-") === 0);
    if (!e)
      return;
    if (e = e.slice(3), t.tagName === "BUTTON" && t.setAttribute("type", "button"), this.handlers[e] == null && this.quill.scroll.query(e) == null) {
      Ti.warn("ignoring attaching to nonexistent format", e, t);
      return;
    }
    const s = t.tagName === "SELECT" ? "change" : "click";
    t.addEventListener(s, (n) => {
      let i;
      if (t.tagName === "SELECT") {
        if (t.selectedIndex < 0)
          return;
        const a = t.options[t.selectedIndex];
        a.hasAttribute("selected") ? i = !1 : i = a.value || !1;
      } else
        t.classList.contains("ql-active") ? i = !1 : i = t.value || !t.hasAttribute("value"), n.preventDefault();
      this.quill.focus();
      const [o] = this.quill.selection.getRange();
      if (this.handlers[e] != null)
        this.handlers[e].call(this, i);
      else if (
        // @ts-expect-error
        this.quill.scroll.query(e).prototype instanceof ut
      ) {
        if (i = prompt("Enter ".concat(e)), !i)
          return;
        this.quill.updateContents(new C().retain(o.index).delete(o.length).insert({
          [e]: i
        }), w.sources.USER);
      } else
        this.quill.format(e, i, w.sources.USER);
      this.update(o);
    }), this.controls.push([e, t]);
  }
  update(t) {
    const e = t == null ? {} : this.quill.getFormat(t);
    this.controls.forEach((s) => {
      const [n, i] = s;
      if (i.tagName === "SELECT") {
        let o = null;
        if (t == null)
          o = null;
        else if (e[n] == null)
          o = i.querySelector("option[selected]");
        else if (!Array.isArray(e[n])) {
          let a = e[n];
          typeof a == "string" && (a = a.replace(/"/g, '\\"')), o = i.querySelector('option[value="'.concat(a, '"]'));
        }
        o == null ? (i.value = "", i.selectedIndex = -1) : o.selected = !0;
      } else if (t == null)
        i.classList.remove("ql-active"), i.setAttribute("aria-pressed", "false");
      else if (i.hasAttribute("value")) {
        const o = e[n], a = o === i.getAttribute("value") || o != null && o.toString() === i.getAttribute("value") || o == null && !i.getAttribute("value");
        i.classList.toggle("ql-active", a), i.setAttribute("aria-pressed", a.toString());
      } else {
        const o = e[n] != null;
        i.classList.toggle("ql-active", o), i.setAttribute("aria-pressed", o.toString());
      }
    });
  }
}
Qr.DEFAULTS = {};
function qi(r, t, e) {
  const s = document.createElement("button");
  s.setAttribute("type", "button"), s.classList.add("ql-".concat(t)), s.setAttribute("aria-pressed", "false"), e != null ? (s.value = e, s.setAttribute("aria-label", "".concat(t, ": ").concat(e))) : s.setAttribute("aria-label", t), r.appendChild(s);
}
function xa(r, t) {
  Array.isArray(t[0]) || (t = [t]), t.forEach((e) => {
    const s = document.createElement("span");
    s.classList.add("ql-formats"), e.forEach((n) => {
      if (typeof n == "string")
        qi(s, n);
      else {
        const i = Object.keys(n)[0], o = n[i];
        Array.isArray(o) ? La(s, i, o) : qi(s, i, o);
      }
    }), r.appendChild(s);
  });
}
function La(r, t, e) {
  const s = document.createElement("select");
  s.classList.add("ql-".concat(t)), e.forEach((n) => {
    const i = document.createElement("option");
    n !== !1 ? i.setAttribute("value", String(n)) : i.setAttribute("selected", "selected"), s.appendChild(i);
  }), r.appendChild(s);
}
Qr.DEFAULTS = {
  container: null,
  handlers: {
    clean() {
      const r = this.quill.getSelection();
      if (r != null)
        if (r.length === 0) {
          const t = this.quill.getFormat();
          Object.keys(t).forEach((e) => {
            this.quill.scroll.query(e, k.INLINE) != null && this.quill.format(e, !1, w.sources.USER);
          });
        } else
          this.quill.removeFormat(r.index, r.length, w.sources.USER);
    },
    direction(r) {
      const {
        align: t
      } = this.quill.getFormat();
      r === "rtl" && t == null ? this.quill.format("align", "right", w.sources.USER) : !r && t === "right" && this.quill.format("align", !1, w.sources.USER), this.quill.format("direction", r, w.sources.USER);
    },
    indent(r) {
      const t = this.quill.getSelection(), e = this.quill.getFormat(t), s = parseInt(e.indent || 0, 10);
      if (r === "+1" || r === "-1") {
        let n = r === "+1" ? 1 : -1;
        e.direction === "rtl" && (n *= -1), this.quill.format("indent", s + n, w.sources.USER);
      }
    },
    link(r) {
      r === !0 && (r = prompt("Enter link URL:")), this.quill.format("link", r, w.sources.USER);
    },
    list(r) {
      const t = this.quill.getSelection(), e = this.quill.getFormat(t);
      r === "check" ? e.list === "checked" || e.list === "unchecked" ? this.quill.format("list", !1, w.sources.USER) : this.quill.format("list", "unchecked", w.sources.USER) : this.quill.format("list", r, w.sources.USER);
    }
  }
};
const Ta = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"/></svg>', qa = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"/><line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"/></svg>', Ca = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"/><line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"/></svg>', Sa = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="15" x2="3" y1="14" y2="14"/><line class="ql-stroke" x1="15" x2="3" y1="4" y2="4"/></svg>', ka = '<svg viewbox="0 0 18 18"><g class="ql-fill ql-color-label"><polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"/><rect height="1" width="1" x="4" y="4"/><polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"/><rect height="1" width="1" x="2" y="6"/><rect height="1" width="1" x="3" y="5"/><rect height="1" width="1" x="4" y="7"/><polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"/><rect height="1" width="1" x="2" y="12"/><rect height="1" width="1" x="2" y="9"/><rect height="1" width="1" x="2" y="15"/><polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"/><rect height="1" width="1" x="3" y="8"/><path d="M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z"/><path d="M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z"/><path d="M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z"/><rect height="1" width="1" x="12" y="2"/><rect height="1" width="1" x="11" y="3"/><path d="M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z"/><rect height="1" width="1" x="2" y="3"/><rect height="1" width="1" x="6" y="2"/><rect height="1" width="1" x="3" y="2"/><rect height="1" width="1" x="5" y="3"/><rect height="1" width="1" x="9" y="2"/><rect height="1" width="1" x="15" y="14"/><polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"/><rect height="1" width="1" x="13" y="7"/><rect height="1" width="1" x="15" y="5"/><rect height="1" width="1" x="14" y="6"/><rect height="1" width="1" x="15" y="8"/><rect height="1" width="1" x="14" y="9"/><path d="M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z"/><rect height="1" width="1" x="14" y="3"/><polygon points="12 6.868 12 6 11.62 6 12 6.868"/><rect height="1" width="1" x="15" y="2"/><rect height="1" width="1" x="12" y="5"/><rect height="1" width="1" x="13" y="4"/><polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"/><rect height="1" width="1" x="9" y="14"/><rect height="1" width="1" x="8" y="15"/><path d="M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z"/><rect height="1" width="1" x="5" y="15"/><path d="M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z"/><rect height="1" width="1" x="11" y="15"/><path d="M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z"/><rect height="1" width="1" x="14" y="15"/><rect height="1" width="1" x="15" y="11"/></g><polyline class="ql-stroke" points="5.5 13 9 5 12.5 13"/><line class="ql-stroke" x1="11.63" x2="6.38" y1="11" y2="11"/></svg>', Oa = '<svg viewbox="0 0 18 18"><rect class="ql-fill ql-stroke" height="3" width="3" x="4" y="5"/><rect class="ql-fill ql-stroke" height="3" width="3" x="11" y="5"/><path class="ql-even ql-fill ql-stroke" d="M7,8c0,4.031-3,5-3,5"/><path class="ql-even ql-fill ql-stroke" d="M14,8c0,4.031-3,5-3,5"/></svg>', Ia = '<svg viewbox="0 0 18 18"><path class="ql-stroke" d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"/><path class="ql-stroke" d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"/></svg>', Ra = '<svg class="" viewbox="0 0 18 18"><line class="ql-stroke" x1="5" x2="13" y1="3" y2="3"/><line class="ql-stroke" x1="6" x2="9.35" y1="12" y2="3"/><line class="ql-stroke" x1="11" x2="15" y1="11" y2="15"/><line class="ql-stroke" x1="15" x2="11" y1="11" y2="15"/><rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="7" x="2" y="14"/></svg>', Ci = '<svg viewbox="0 0 18 18"><polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"/><polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"/><line class="ql-stroke" x1="10" x2="8" y1="5" y2="13"/></svg>', _a = '<svg viewbox="0 0 18 18"><line class="ql-color-label ql-stroke ql-transparent" x1="3" x2="15" y1="15" y2="15"/><polyline class="ql-stroke" points="5.5 11 9 3 12.5 11"/><line class="ql-stroke" x1="11.63" x2="6.38" y1="9" y2="9"/></svg>', Ma = '<svg viewbox="0 0 18 18"><polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"/><line class="ql-stroke ql-fill" x1="15" x2="11" y1="4" y2="4"/><path class="ql-fill" d="M11,3a3,3,0,0,0,0,6h1V3H11Z"/><rect class="ql-fill" height="11" width="1" x="11" y="4"/><rect class="ql-fill" height="11" width="1" x="13" y="4"/></svg>', Ba = '<svg viewbox="0 0 18 18"><polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"/><line class="ql-stroke ql-fill" x1="9" x2="5" y1="4" y2="4"/><path class="ql-fill" d="M5,3A3,3,0,0,0,5,9H6V3H5Z"/><rect class="ql-fill" height="11" width="1" x="5" y="4"/><rect class="ql-fill" height="11" width="1" x="7" y="4"/></svg>', Da = '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z"/><rect class="ql-fill" height="1.6" rx="0.8" ry="0.8" width="5" x="5.15" y="6.2"/><path class="ql-fill" d="M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z"/></svg>', Ua = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z"/></svg>', Pa = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>', ja = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.65186,12.30664a2.6742,2.6742,0,0,1-2.915,2.68457,3.96592,3.96592,0,0,1-2.25537-.6709.56007.56007,0,0,1-.13232-.83594L11.64648,13c.209-.34082.48389-.36328.82471-.1543a2.32654,2.32654,0,0,0,1.12256.33008c.71484,0,1.12207-.35156,1.12207-.78125,0-.61523-.61621-.86816-1.46338-.86816H13.2085a.65159.65159,0,0,1-.68213-.41895l-.05518-.10937a.67114.67114,0,0,1,.14307-.78125l.71533-.86914a8.55289,8.55289,0,0,1,.68213-.7373V8.58887a3.93913,3.93913,0,0,1-.748.05469H11.9873a.54085.54085,0,0,1-.605-.60547V7.59863a.54085.54085,0,0,1,.605-.60547h3.75146a.53773.53773,0,0,1,.60547.59375v.17676a1.03723,1.03723,0,0,1-.27539.748L14.74854,10.0293A2.31132,2.31132,0,0,1,16.65186,12.30664ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>', $a = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm7.05371,7.96582v.38477c0,.39648-.165.60547-.46191.60547h-.47314v1.29785a.54085.54085,0,0,1-.605.60547h-.69336a.54085.54085,0,0,1-.605-.60547V12.95605H11.333a.5412.5412,0,0,1-.60547-.60547v-.15332a1.199,1.199,0,0,1,.22021-.748l2.56348-4.05957a.7819.7819,0,0,1,.72607-.39648h1.27637a.54085.54085,0,0,1,.605.60547v3.7627h.33008A.54055.54055,0,0,1,17.05371,11.96582ZM14.28125,8.7207h-.022a4.18969,4.18969,0,0,1-.38525.81348l-1.188,1.80469v.02246h1.5293V9.60059A7.04058,7.04058,0,0,1,14.28125,8.7207Z"/></svg>', Ha = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.74023,12.18555a2.75131,2.75131,0,0,1-2.91553,2.80566,3.908,3.908,0,0,1-2.25537-.68164.54809.54809,0,0,1-.13184-.8252L11.73438,13c.209-.34082.48389-.36328.8252-.1543a2.23757,2.23757,0,0,0,1.1001.33008,1.01827,1.01827,0,0,0,1.1001-.96777c0-.61621-.53906-.97949-1.25439-.97949a2.15554,2.15554,0,0,0-.64893.09961,1.15209,1.15209,0,0,1-.814.01074l-.12109-.04395a.64116.64116,0,0,1-.45117-.71484l.231-3.00391a.56666.56666,0,0,1,.62744-.583H15.541a.54085.54085,0,0,1,.605.60547v.43945a.54085.54085,0,0,1-.605.60547H13.41748l-.04395.72559a1.29306,1.29306,0,0,1-.04395.30859h.022a2.39776,2.39776,0,0,1,.57227-.07715A2.53266,2.53266,0,0,1,16.74023,12.18555ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>', Fa = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M14.51758,9.64453a1.85627,1.85627,0,0,0-1.24316.38477H13.252a1.73532,1.73532,0,0,1,1.72754-1.4082,2.66491,2.66491,0,0,1,.5498.06641c.35254.05469.57227.01074.70508-.40723l.16406-.5166a.53393.53393,0,0,0-.373-.75977,4.83723,4.83723,0,0,0-1.17773-.14258c-2.43164,0-3.7627,2.17773-3.7627,4.43359,0,2.47559,1.60645,3.69629,3.19043,3.69629A2.70585,2.70585,0,0,0,16.96,12.19727,2.43861,2.43861,0,0,0,14.51758,9.64453Zm-.23047,3.58691c-.67187,0-1.22168-.81445-1.22168-1.45215,0-.47363.30762-.583.72559-.583.96875,0,1.27734.59375,1.27734,1.12207A.82182.82182,0,0,1,14.28711,13.23145ZM10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Z"/></svg>', za = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="13" y1="4" y2="4"/><line class="ql-stroke" x1="5" x2="11" y1="14" y2="14"/><line class="ql-stroke" x1="8" x2="10" y1="14" y2="4"/></svg>', Va = '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="10" width="12" x="3" y="4"/><circle class="ql-fill" cx="6" cy="7" r="1"/><polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"/></svg>', Ka = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"/></svg>', Ga = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-stroke" points="5 7 5 11 3 9 5 7"/></svg>', Za = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="11" y1="7" y2="11"/><path class="ql-even ql-stroke" d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"/><path class="ql-even ql-stroke" d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"/></svg>', Wa = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="6" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="6" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="6" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="3" y1="4" y2="4"/><line class="ql-stroke" x1="3" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="3" x2="3" y1="14" y2="14"/></svg>', Xa = '<svg class="" viewbox="0 0 18 18"><line class="ql-stroke" x1="9" x2="15" y1="4" y2="4"/><polyline class="ql-stroke" points="3 4 4 5 6 3"/><line class="ql-stroke" x1="9" x2="15" y1="14" y2="14"/><polyline class="ql-stroke" points="3 14 4 15 6 13"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-stroke" points="3 9 4 10 6 8"/></svg>', Ya = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="7" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="7" x2="15" y1="14" y2="14"/><line class="ql-stroke ql-thin" x1="2.5" x2="4.5" y1="5.5" y2="5.5"/><path class="ql-fill" d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"/><path class="ql-stroke ql-thin" d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"/><path class="ql-stroke ql-thin" d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"/></svg>', Ja = '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z"/><path class="ql-fill" d="M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z"/></svg>', Qa = '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z"/><path class="ql-fill" d="M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z"/></svg>', tc = '<svg viewbox="0 0 18 18"><line class="ql-stroke ql-thin" x1="15.5" x2="2.5" y1="8.5" y2="9.5"/><path class="ql-fill" d="M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z"/><path class="ql-fill" d="M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z"/></svg>', ec = '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="12" width="12" x="3" y="3"/><rect class="ql-fill" height="2" width="3" x="5" y="5"/><rect class="ql-fill" height="2" width="4" x="9" y="5"/><g class="ql-fill ql-transparent"><rect height="2" width="3" x="5" y="8"/><rect height="2" width="4" x="9" y="8"/><rect height="2" width="3" x="5" y="11"/><rect height="2" width="4" x="9" y="11"/></g></svg>', sc = '<svg viewbox="0 0 18 18"><path class="ql-stroke" d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"/><rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="12" x="3" y="15"/></svg>', nc = '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="12" width="12" x="3" y="3"/><rect class="ql-fill" height="12" width="1" x="5" y="3"/><rect class="ql-fill" height="12" width="1" x="12" y="3"/><rect class="ql-fill" height="2" width="8" x="5" y="8"/><rect class="ql-fill" height="1" width="3" x="3" y="5"/><rect class="ql-fill" height="1" width="3" x="3" y="7"/><rect class="ql-fill" height="1" width="3" x="3" y="10"/><rect class="ql-fill" height="1" width="3" x="3" y="12"/><rect class="ql-fill" height="1" width="3" x="12" y="5"/><rect class="ql-fill" height="1" width="3" x="12" y="7"/><rect class="ql-fill" height="1" width="3" x="12" y="10"/><rect class="ql-fill" height="1" width="3" x="12" y="12"/></svg>', ys = {
  align: {
    "": Ta,
    center: qa,
    right: Ca,
    justify: Sa
  },
  background: ka,
  blockquote: Oa,
  bold: Ia,
  clean: Ra,
  code: Ci,
  "code-block": Ci,
  color: _a,
  direction: {
    "": Ma,
    rtl: Ba
  },
  formula: Da,
  header: {
    1: Ua,
    2: Pa,
    3: ja,
    4: $a,
    5: Ha,
    6: Fa
  },
  italic: za,
  image: Va,
  indent: {
    "+1": Ka,
    "-1": Ga
  },
  link: Za,
  list: {
    bullet: Wa,
    check: Xa,
    ordered: Ya
  },
  script: {
    sub: Ja,
    super: Qa
  },
  strike: tc,
  table: ec,
  underline: sc,
  video: nc
}, rc = '<svg viewbox="0 0 18 18"><polygon class="ql-stroke" points="7 11 9 13 11 11 7 11"/><polygon class="ql-stroke" points="7 7 9 5 11 7 7 7"/></svg>';
let Si = 0;
function ki(r, t) {
  r.setAttribute(t, "".concat(r.getAttribute(t) !== "true"));
}
class mn {
  constructor(t) {
    this.select = t, this.container = document.createElement("span"), this.buildPicker(), this.select.style.display = "none", this.select.parentNode.insertBefore(this.container, this.select), this.label.addEventListener("mousedown", () => {
      this.togglePicker();
    }), this.label.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "Enter":
          this.togglePicker();
          break;
        case "Escape":
          this.escape(), e.preventDefault();
          break;
      }
    }), this.select.addEventListener("change", this.update.bind(this));
  }
  togglePicker() {
    this.container.classList.toggle("ql-expanded"), ki(this.label, "aria-expanded"), ki(this.options, "aria-hidden");
  }
  buildItem(t) {
    const e = document.createElement("span");
    e.tabIndex = "0", e.setAttribute("role", "button"), e.classList.add("ql-picker-item");
    const s = t.getAttribute("value");
    return s && e.setAttribute("data-value", s), t.textContent && e.setAttribute("data-label", t.textContent), e.addEventListener("click", () => {
      this.selectItem(e, !0);
    }), e.addEventListener("keydown", (n) => {
      switch (n.key) {
        case "Enter":
          this.selectItem(e, !0), n.preventDefault();
          break;
        case "Escape":
          this.escape(), n.preventDefault();
          break;
      }
    }), e;
  }
  buildLabel() {
    const t = document.createElement("span");
    return t.classList.add("ql-picker-label"), t.innerHTML = rc, t.tabIndex = "0", t.setAttribute("role", "button"), t.setAttribute("aria-expanded", "false"), this.container.appendChild(t), t;
  }
  buildOptions() {
    const t = document.createElement("span");
    t.classList.add("ql-picker-options"), t.setAttribute("aria-hidden", "true"), t.tabIndex = "-1", t.id = "ql-picker-options-".concat(Si), Si += 1, this.label.setAttribute("aria-controls", t.id), this.options = t, Array.from(this.select.options).forEach((e) => {
      const s = this.buildItem(e);
      t.appendChild(s), e.selected === !0 && this.selectItem(s);
    }), this.container.appendChild(t);
  }
  buildPicker() {
    Array.from(this.select.attributes).forEach((t) => {
      this.container.setAttribute(t.name, t.value);
    }), this.container.classList.add("ql-picker"), this.label = this.buildLabel(), this.buildOptions();
  }
  escape() {
    this.close(), setTimeout(() => this.label.focus(), 1);
  }
  close() {
    this.container.classList.remove("ql-expanded"), this.label.setAttribute("aria-expanded", "false"), this.options.setAttribute("aria-hidden", "true");
  }
  selectItem(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    const s = this.container.querySelector(".ql-selected");
    t !== s && (s != null && s.classList.remove("ql-selected"), t != null && (t.classList.add("ql-selected"), this.select.selectedIndex = Array.from(t.parentNode.children).indexOf(t), t.hasAttribute("data-value") ? this.label.setAttribute("data-value", t.getAttribute("data-value")) : this.label.removeAttribute("data-value"), t.hasAttribute("data-label") ? this.label.setAttribute("data-label", t.getAttribute("data-label")) : this.label.removeAttribute("data-label"), e && (this.select.dispatchEvent(new Event("change")), this.close())));
  }
  update() {
    let t;
    if (this.select.selectedIndex > -1) {
      const s = (
        // @ts-expect-error Fix me later
        this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex]
      );
      t = this.select.options[this.select.selectedIndex], this.selectItem(s);
    } else
      this.selectItem(null);
    const e = t != null && t !== this.select.querySelector("option[selected]");
    this.label.classList.toggle("ql-active", e);
  }
}
class dl extends mn {
  constructor(t, e) {
    super(t), this.label.innerHTML = e, this.container.classList.add("ql-color-picker"), Array.from(this.container.querySelectorAll(".ql-picker-item")).slice(0, 7).forEach((s) => {
      s.classList.add("ql-primary");
    });
  }
  buildItem(t) {
    const e = super.buildItem(t);
    return e.style.backgroundColor = t.getAttribute("value") || "", e;
  }
  selectItem(t, e) {
    super.selectItem(t, e);
    const s = this.label.querySelector(".ql-color-label"), n = t && t.getAttribute("data-value") || "";
    s && (s.tagName === "line" ? s.style.stroke = n : s.style.fill = n);
  }
}
class ml extends mn {
  constructor(t, e) {
    super(t), this.container.classList.add("ql-icon-picker"), Array.from(this.container.querySelectorAll(".ql-picker-item")).forEach((s) => {
      s.innerHTML = e[s.getAttribute("data-value") || ""];
    }), this.defaultItem = this.container.querySelector(".ql-selected"), this.selectItem(this.defaultItem);
  }
  selectItem(t, e) {
    super.selectItem(t, e);
    const s = t || this.defaultItem;
    if (s != null) {
      if (this.label.innerHTML === s.innerHTML)
        return;
      this.label.innerHTML = s.innerHTML;
    }
  }
}
const ic = (r) => {
  const {
    overflowY: t
  } = getComputedStyle(r, null);
  return t !== "visible" && t !== "clip";
};
class pl {
  constructor(t, e) {
    this.quill = t, this.boundsContainer = e || document.body, this.root = t.addContainer("ql-tooltip"), this.root.innerHTML = this.constructor.TEMPLATE, ic(this.quill.root) && this.quill.root.addEventListener("scroll", () => {
      this.root.style.marginTop = "".concat(-1 * this.quill.root.scrollTop, "px");
    }), this.hide();
  }
  hide() {
    this.root.classList.add("ql-hidden");
  }
  position(t) {
    const e = t.left + t.width / 2 - this.root.offsetWidth / 2, s = t.bottom + this.quill.root.scrollTop;
    this.root.style.left = "".concat(e, "px"), this.root.style.top = "".concat(s, "px"), this.root.classList.remove("ql-flip");
    const n = this.boundsContainer.getBoundingClientRect(), i = this.root.getBoundingClientRect();
    let o = 0;
    if (i.right > n.right && (o = n.right - i.right, this.root.style.left = "".concat(e + o, "px")), i.left < n.left && (o = n.left - i.left, this.root.style.left = "".concat(e + o, "px")), i.bottom > n.bottom) {
      const a = i.bottom - i.top, u = t.bottom - t.top + a;
      this.root.style.top = "".concat(s - u, "px"), this.root.classList.add("ql-flip");
    }
    return o;
  }
  show() {
    this.root.classList.remove("ql-editing"), this.root.classList.remove("ql-hidden");
  }
}
const lc = [!1, "center", "right", "justify"], oc = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"], ac = [!1, "serif", "monospace"], cc = ["1", "2", "3", !1], uc = ["small", !1, "large", "huge"];
class ws extends $e {
  constructor(t, e) {
    super(t, e);
    const s = (n) => {
      if (!document.body.contains(t.root)) {
        document.body.removeEventListener("click", s);
        return;
      }
      this.tooltip != null && // @ts-expect-error
      !this.tooltip.root.contains(n.target) && // @ts-expect-error
      document.activeElement !== this.tooltip.textbox && !this.quill.hasFocus() && this.tooltip.hide(), this.pickers != null && this.pickers.forEach((i) => {
        i.container.contains(n.target) || i.close();
      });
    };
    t.emitter.listenDOM("click", document.body, s);
  }
  addModule(t) {
    const e = super.addModule(t);
    return t === "toolbar" && this.extendToolbar(e), e;
  }
  buildButtons(t, e) {
    Array.from(t).forEach((s) => {
      (s.getAttribute("class") || "").split(/\s+/).forEach((i) => {
        if (i.startsWith("ql-") && (i = i.slice(3), e[i] != null))
          if (i === "direction")
            s.innerHTML = e[i][""] + e[i].rtl;
          else if (typeof e[i] == "string")
            s.innerHTML = e[i];
          else {
            const o = s.value || "";
            o != null && e[i][o] && (s.innerHTML = e[i][o]);
          }
      });
    });
  }
  buildPickers(t, e) {
    this.pickers = Array.from(t).map((n) => {
      if (n.classList.contains("ql-align") && (n.querySelector("option") == null && cs(n, lc), typeof e.align == "object"))
        return new ml(n, e.align);
      if (n.classList.contains("ql-background") || n.classList.contains("ql-color")) {
        const i = n.classList.contains("ql-background") ? "background" : "color";
        return n.querySelector("option") == null && cs(n, oc, i === "background" ? "#ffffff" : "#000000"), new dl(n, e[i]);
      }
      return n.querySelector("option") == null && (n.classList.contains("ql-font") ? cs(n, ac) : n.classList.contains("ql-header") ? cs(n, cc) : n.classList.contains("ql-size") && cs(n, uc)), new mn(n);
    });
    const s = () => {
      this.pickers.forEach((n) => {
        n.update();
      });
    };
    this.quill.on(q.events.EDITOR_CHANGE, s);
  }
}
ws.DEFAULTS = ee({}, $e.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        formula() {
          this.quill.theme.tooltip.edit("formula");
        },
        image() {
          let r = this.container.querySelector("input.ql-image[type=file]");
          r == null && (r = document.createElement("input"), r.setAttribute("type", "file"), r.setAttribute("accept", this.quill.uploader.options.mimetypes.join(", ")), r.classList.add("ql-image"), r.addEventListener("change", () => {
            const t = this.quill.getSelection(!0);
            this.quill.uploader.upload(t, r.files), r.value = "";
          }), this.container.appendChild(r)), r.click();
        },
        video() {
          this.quill.theme.tooltip.edit("video");
        }
      }
    }
  }
});
class gl extends pl {
  constructor(t, e) {
    super(t, e), this.textbox = this.root.querySelector('input[type="text"]'), this.listen();
  }
  listen() {
    this.textbox.addEventListener("keydown", (t) => {
      t.key === "Enter" ? (this.save(), t.preventDefault()) : t.key === "Escape" && (this.cancel(), t.preventDefault());
    });
  }
  cancel() {
    this.hide(), this.restoreFocus();
  }
  edit() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "link", e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (this.root.classList.remove("ql-hidden"), this.root.classList.add("ql-editing"), this.textbox == null)
      return;
    e != null ? this.textbox.value = e : t !== this.root.getAttribute("data-mode") && (this.textbox.value = "");
    const s = this.quill.getBounds(this.quill.selection.savedRange);
    s != null && this.position(s), this.textbox.select(), this.textbox.setAttribute("placeholder", this.textbox.getAttribute("data-".concat(t)) || ""), this.root.setAttribute("data-mode", t);
  }
  restoreFocus() {
    this.quill.focus({
      preventScroll: !0
    });
  }
  save() {
    let {
      value: t
    } = this.textbox;
    switch (this.root.getAttribute("data-mode")) {
      case "link": {
        const {
          scrollTop: e
        } = this.quill.root;
        this.linkRange ? (this.quill.formatText(this.linkRange, "link", t, q.sources.USER), delete this.linkRange) : (this.restoreFocus(), this.quill.format("link", t, q.sources.USER)), this.quill.root.scrollTop = e;
        break;
      }
      case "video":
        t = hc(t);
      case "formula": {
        if (!t)
          break;
        const e = this.quill.getSelection(!0);
        if (e != null) {
          const s = e.index + e.length;
          this.quill.insertEmbed(
            s,
            // @ts-expect-error Fix me later
            this.root.getAttribute("data-mode"),
            t,
            q.sources.USER
          ), this.root.getAttribute("data-mode") === "formula" && this.quill.insertText(s + 1, " ", q.sources.USER), this.quill.setSelection(s + 2, q.sources.USER);
        }
        break;
      }
    }
    this.textbox.value = "", this.hide();
  }
}
function hc(r) {
  let t = r.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || r.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
  return t ? "".concat(t[1] || "https", "://www.youtube.com/embed/").concat(t[2], "?showinfo=0") : (t = r.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) ? "".concat(t[1] || "https", "://player.vimeo.com/video/").concat(t[2], "/") : r;
}
function cs(r, t) {
  let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  t.forEach((s) => {
    const n = document.createElement("option");
    s === e ? n.setAttribute("selected", "selected") : n.setAttribute("value", String(s)), r.appendChild(n);
  });
}
const fc = [["bold", "italic", "link"], [{
  header: 1
}, {
  header: 2
}, "blockquote"]];
class bl extends gl {
  constructor(t, e) {
    super(t, e), this.quill.on(q.events.EDITOR_CHANGE, (s, n, i, o) => {
      if (s === q.events.SELECTION_CHANGE)
        if (n != null && n.length > 0 && o === q.sources.USER) {
          this.show(), this.root.style.left = "0px", this.root.style.width = "", this.root.style.width = "".concat(this.root.offsetWidth, "px");
          const a = this.quill.getLines(n.index, n.length);
          if (a.length === 1) {
            const u = this.quill.getBounds(n);
            u != null && this.position(u);
          } else {
            const u = a[a.length - 1], h = this.quill.getIndex(u), d = Math.min(u.length() - 1, n.index + n.length - h), b = this.quill.getBounds(new de(h, d));
            b != null && this.position(b);
          }
        } else
          document.activeElement !== this.textbox && this.quill.hasFocus() && this.hide();
    });
  }
  listen() {
    super.listen(), this.root.querySelector(".ql-close").addEventListener("click", () => {
      this.root.classList.remove("ql-editing");
    }), this.quill.on(q.events.SCROLL_OPTIMIZE, () => {
      setTimeout(() => {
        if (this.root.classList.contains("ql-hidden"))
          return;
        const t = this.quill.getSelection();
        if (t != null) {
          const e = this.quill.getBounds(t);
          e != null && this.position(e);
        }
      }, 1);
    });
  }
  cancel() {
    this.show();
  }
  position(t) {
    const e = super.position(t), s = this.root.querySelector(".ql-tooltip-arrow");
    return s.style.marginLeft = "", e !== 0 && (s.style.marginLeft = "".concat(-1 * e - s.offsetWidth / 2, "px")), e;
  }
}
A(bl, "TEMPLATE", ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', "</div>"].join(""));
class yl extends ws {
  constructor(t, e) {
    e.modules.toolbar != null && e.modules.toolbar.container == null && (e.modules.toolbar.container = fc), super(t, e), this.quill.container.classList.add("ql-bubble");
  }
  extendToolbar(t) {
    this.tooltip = new bl(this.quill, this.options.bounds), t.container != null && (this.tooltip.root.appendChild(t.container), this.buildButtons(t.container.querySelectorAll("button"), ys), this.buildPickers(t.container.querySelectorAll("select"), ys));
  }
}
yl.DEFAULTS = ee({}, ws.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        link(r) {
          r ? this.quill.theme.tooltip.edit() : this.quill.format("link", !1, w.sources.USER);
        }
      }
    }
  }
});
const dc = [[{
  header: ["1", "2", "3", !1]
}], ["bold", "italic", "underline", "link"], [{
  list: "ordered"
}, {
  list: "bullet"
}], ["clean"]];
class vl extends gl {
  constructor() {
    super(...arguments);
    A(this, "preview", this.root.querySelector("a.ql-preview"));
  }
  listen() {
    super.listen(), this.root.querySelector("a.ql-action").addEventListener("click", (e) => {
      this.root.classList.contains("ql-editing") ? this.save() : this.edit("link", this.preview.textContent), e.preventDefault();
    }), this.root.querySelector("a.ql-remove").addEventListener("click", (e) => {
      if (this.linkRange != null) {
        const s = this.linkRange;
        this.restoreFocus(), this.quill.formatText(s, "link", !1, q.sources.USER), delete this.linkRange;
      }
      e.preventDefault(), this.hide();
    }), this.quill.on(q.events.SELECTION_CHANGE, (e, s, n) => {
      if (e != null) {
        if (e.length === 0 && n === q.sources.USER) {
          const [i, o] = this.quill.scroll.descendant(te, e.index);
          if (i != null) {
            this.linkRange = new de(e.index - o, i.length());
            const a = te.formats(i.domNode);
            this.preview.textContent = a, this.preview.setAttribute("href", a), this.show();
            const u = this.quill.getBounds(this.linkRange);
            u != null && this.position(u);
            return;
          }
        } else
          delete this.linkRange;
        this.hide();
      }
    });
  }
  show() {
    super.show(), this.root.removeAttribute("data-mode");
  }
}
A(vl, "TEMPLATE", ['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join(""));
class El extends ws {
  constructor(t, e) {
    e.modules.toolbar != null && e.modules.toolbar.container == null && (e.modules.toolbar.container = dc), super(t, e), this.quill.container.classList.add("ql-snow");
  }
  extendToolbar(t) {
    t.container != null && (t.container.classList.add("ql-snow"), this.buildButtons(t.container.querySelectorAll("button"), ys), this.buildPickers(t.container.querySelectorAll("select"), ys), this.tooltip = new vl(this.quill, this.options.bounds), t.container.querySelector(".ql-link") && this.quill.keyboard.addBinding({
      key: "k",
      shortKey: !0
    }, (e, s) => {
      t.handlers.link.call(t, !s.format.link);
    }));
  }
}
El.DEFAULTS = ee({}, ws.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        link(r) {
          if (r) {
            const t = this.quill.getSelection();
            if (t == null || t.length === 0)
              return;
            let e = this.quill.getText(t);
            /^\S+@\S+\.\S+$/.test(e) && e.indexOf("mailto:") !== 0 && (e = "mailto:".concat(e));
            const {
              tooltip: s
            } = this.quill.theme;
            s.edit("link", e);
          } else
            this.quill.format("link", !1, w.sources.USER);
        }
      }
    }
  }
});
w.register({
  "attributors/attribute/direction": Qi,
  "attributors/class/align": Xi,
  "attributors/class/background": Oo,
  "attributors/class/color": ko,
  "attributors/class/direction": tl,
  "attributors/class/font": nl,
  "attributors/class/size": il,
  "attributors/style/align": Yi,
  "attributors/style/background": Gr,
  "attributors/style/color": Kr,
  "attributors/style/direction": el,
  "attributors/style/font": rl,
  "attributors/style/size": ll
}, !0);
w.register({
  "formats/align": Xi,
  "formats/direction": tl,
  "formats/indent": Na,
  "formats/background": Gr,
  "formats/color": Kr,
  "formats/font": nl,
  "formats/size": il,
  "formats/blockquote": qr,
  "formats/code-block": st,
  "formats/header": Cr,
  "formats/list": Ns,
  "formats/bold": bs,
  "formats/code": Zr,
  "formats/italic": Sr,
  "formats/link": te,
  "formats/script": kr,
  "formats/strike": Or,
  "formats/underline": Ir,
  "formats/formula": Js,
  "formats/image": Rr,
  "formats/video": Qs,
  "modules/syntax": fl,
  "modules/table": Aa,
  "modules/toolbar": Qr,
  "themes/bubble": yl,
  "themes/snow": El,
  "ui/icons": ys,
  "ui/picker": mn,
  "ui/icon-picker": ml,
  "ui/color-picker": dl,
  "ui/tooltip": pl
}, !0);
const mc = w.import("blots/inline");
class tn extends mc {
  static create(t) {
    const e = JSON.parse(t), { name: s, value: n } = e, i = super.create();
    return i.setAttribute("data-value", n), i.setAttribute("data-name", s), i;
  }
  static formats(t) {
    const e = t.dataset;
    return e.name ? JSON.stringify(e) : !0;
  }
}
A(tn, "blotName", "mention"), A(tn, "className", "ql-mention"), A(tn, "tagName", "span");
const pc = w.import("blots/inline");
class en extends pc {
  static create(t) {
    const e = JSON.parse(t), { name: s, value: n, identifier: i, icon: o } = e, a = super.create();
    return i && a.setAttribute("data-identifier", i), s && a.setAttribute("data-name", s), n && a.setAttribute("data-value", n), o && a.setAttribute("data-icon", o), a;
  }
  static formats(t) {
    const e = t.dataset;
    return e.name ? JSON.stringify(e) : !0;
  }
}
A(en, "blotName", "marker"), A(en, "className", "ql-marker"), A(en, "tagName", "mob-marker");
class gc {
  /**
   * 初始化
   *
   * @param {IDomEditor} editor
   * @memberof CommentMentionController
   */
  constructor(t, e) {
    /**
     *云系统操作者Map
     *
     * @memberof MenTionController
     */
    A(this, "operatorMap", /* @__PURE__ */ new Map());
    /**
     * 模型
     *
     * @type {IEditor}
     * @memberof MenTionController
     */
    A(this, "model");
    /**
     * 编辑器参数
     *
     * @type {IData}
     * @memberof MenTionController
     */
    A(this, "editorParams");
    /**
     * 上下文
     *
     * @type {IContext}
     */
    A(this, "context");
    /**
     * 视图参数
     *
     * @type {IParams}
     */
    A(this, "params");
    /**
     * 用户请求url
     *
     * @type {string}
     * @memberof CommentMentionController
     */
    A(this, "userUrl", "");
    /**
     * 人员UI转化
     */
    A(this, "userFieldMap", {
      value: "user_id",
      name: "name"
    });
    /**
     * 请求方法
     *
     * @type {('post' | 'get')}
     * @memberof CommentMentionController
     */
    A(this, "userMethod", "post");
    /**
     * 搜索字段
     *
     * @type {string}
     * @memberof CommentMentionController
     */
    A(this, "query", "");
    /**
     * 当前页
     *
     * @type {number}
     * @memberof CommentMentionController
     */
    A(this, "curPage", 0);
    /**
     * 分页条数
     *
     * @type {number}
     * @memberof CommentMentionController
     */
    A(this, "size", 20);
    /**
     * @description 视图luoj
     * @type {IAppViewLogic[]}
     * @memberof CommentMentionController
     */
    A(this, "appViewLogics", []);
    this.editorParams = t, this.model = e.model, this.context = e.context, this.params = e.params, this.appViewLogics = e.appViewLogics;
    const { USERURL: s, USERFIELDMAP: n, USERMETHOD: i, USERSIZE: o } = t;
    s && (this.userUrl = s), n && (this.userFieldMap = JSON.parse(n)), i && (this.userMethod = i.toLowerCase()), o && (this.size = Number(o)), this.getOperatorUserList();
  }
  /**
   * 获取云系统操作者
   *
   * @memberof MenTionController
   */
  async getOperatorUserList() {
    const t = await ibiz.hub.getApp(this.context.srfappid);
    let e = [];
    e = await t.codeList.get(
      "SysOperator",
      this.context,
      this.params
    ), this.operatorMap = new Map(
      e.map((s) => [s.value, s])
    );
  }
  /**
   * 转换ui数据
   *
   * @param {IData[]} data
   * @return {*}  {IData[]}
   * @memberof CommentMentionController
   */
  toUIData(t) {
    return t.map((e) => {
      const s = {};
      return Object.keys(this.userFieldMap).forEach((n) => {
        s[n] = e[this.userFieldMap[n]];
      }), s;
    });
  }
  /**
   * 获取用户信息
   *
   * @param {IData} data
   * @return {*}  {Promise<IData[]>}
   * @memberof CommentMentionController
   */
  async getUsers(t = {}) {
    if (!this.userUrl)
      throw new Ri("未配置提及用户USERURL编辑器参数！");
    const { data: e, context: s, params: n } = t, i = t.isInitialLoad === !0, o = t.isLoadMore === !0;
    i ? this.curPage = 0 : o && (this.curPage += 1);
    const a = ln.execScriptFn(
      { data: e, context: s, params: n },
      this.userUrl,
      {
        singleRowReturn: !0,
        isAsync: !1
      }
    ), u = {
      ...n,
      size: this.size,
      page: this.curPage
    }, h = await ibiz.net[this.userMethod](a, u);
    return h.ok ? this.toUIData(h.data) : [];
  }
  /**
   * @description 转换html
   * @param {string} value
   * @param {IData} data
   * @return {*}  {string}
   * @memberof CommentMentionController
   */
  transformHtml(t) {
    let e = t;
    return e = t.replaceAll(
      /<span class="ql-mention" data-value="(.+?)" data-name="(.+?)">@(.+?)<\/span>/g,
      (s, n, i, o) => {
        if (o === i)
          return '@{"id":"'.concat(n, '","name":"').concat(i, '"}');
        if (o < i)
          return "";
        const a = o.slice(i.length - o.length);
        return '@{"id":"'.concat(n, '","name":"').concat(i, '"}<span>').concat(a, "</span>");
      }
    ), e;
  }
  /**
   * @description 转换为delta
   * @param {string} value
   * @return {*}  {string}
   * @memberof CommentMentionController
   */
  transformDelta(t) {
    return t.replaceAll(
      /@{"id":"(.+?)","name":"(.+?)"}/g,
      (s, n, i) => this.getNodeInfo({ id: n, name: i })
    );
  }
  /**
   * @description 获取提及节点信息
   * @param {IData} data
   * @return {*}
   * @memberof CommentMentionController
   */
  getNodeInfo(t) {
    return '<span class="ql-mention" data-value="'.concat(t.id, '" data-name="').concat(t.name, '">@').concat(t.name, "</span>");
  }
  /**
   * @description 获取提及人员逻辑
   * @return {*}
   * @memberof CommentMentionController
   */
  getMentionLogic() {
    return this.appViewLogics.find((t) => t.name === "MENTION");
  }
}
class bc {
  /**
   * 初始化
   *
   * @param {IDomEditor} editor
   * @memberof CommentMarkerController
   */
  constructor(t, e) {
    /**
     * 模型
     *
     * @type {IEditor}
     * @memberof MenTionController
     */
    A(this, "model");
    /**
     * 编辑器参数
     *
     * @type {IData}
     * @memberof MenTionController
     */
    A(this, "editorParams");
    /**
     * 上下文
     *
     * @type {IContext}
     */
    A(this, "context");
    /**
     * 视图参数
     *
     * @type {IParams}
     */
    A(this, "params");
    /**
     * 用户请求url
     *
     * @type {string}
     * @memberof CommentMarkerController
     */
    A(this, "quoteUrl", "");
    /**
     * 人员UI转化
     */
    A(this, "quoteFieldMap", {
      value: "id",
      name: "name",
      identifier: "identifier",
      type: "owner_subtype"
    });
    /**
     * 代码表map
     *
     * @type {IData}
     * @memberof MarkerController
     */
    A(this, "quoteCodelistMap", /* @__PURE__ */ new Map());
    /**
     * 请求方法
     *
     * @type {('post' | 'get')}
     * @memberof CommentMarkerController
     */
    A(this, "quoteMethod", "post");
    /**
     * 搜索字段
     *
     * @type {string}
     * @memberof CommentMarkerController
     */
    A(this, "query", "");
    /**
     * 当前页
     *
     * @type {number}
     * @memberof CommentMarkerController
     */
    A(this, "curPage", 0);
    /**
     * 分页条数
     *
     * @type {number}
     * @memberof CommentMarkerController
     */
    A(this, "size", 20);
    /**
     * @description 视图luoj
     * @type {IAppViewLogic[]}
     * @memberof CommentMarkerController
     */
    A(this, "appViewLogics", []);
    this.editorParams = t, this.model = e.model, this.context = e.context, this.params = e.params, this.appViewLogics = e.appViewLogics;
    const {
      QUOTEURL: s,
      QUOTEFIELDMAP: n,
      QUOTEMETHOD: i,
      QUOTESIZE: o,
      QUOTECODELISTMAP: a
    } = t;
    if (s && (this.quoteUrl = s), n && (this.quoteFieldMap = JSON.parse(n)), i && (this.quoteMethod = i.toLowerCase()), o && (this.size = Number(o)), a) {
      const u = JSON.parse(a);
      this.setCodeListMap(u);
    }
  }
  /**
   * 加载代码表
   *
   * @param {string} appCodeListId
   * @return {*}  {(Promise<IData | undefined>)}
   * @memberof MarkerController
   */
  async loadCodeList(t) {
    const e = ibiz.hub.getApp(this.context.srfappid), s = e.codeList.getCodeList(t), n = await e.codeList.get(
      t,
      this.context,
      this.params
    );
    return { codeList: s, codeListItems: n };
  }
  // 设置代码表map
  async setCodeListMap(t) {
    for (const e in t) {
      const s = await this.loadCodeList(t[e]);
      s && this.quoteCodelistMap.set(e, s);
    }
  }
  /**
   * 转换ui数据
   *
   * @param {IData[]} data
   * @return {*}  {IData[]}
   * @memberof CommentMarkerController
   */
  toUIData(t) {
    return t.map((e) => {
      const s = {};
      return Object.keys(this.quoteFieldMap).forEach((n) => {
        s[n] = e[this.quoteFieldMap[n]];
      }), s;
    });
  }
  /**
   * 获取用户信息
   *
   * @param {IData} data
   * @return {*}  {Promise<IData[]>}
   * @memberof CommentMarkerController
   */
  async getWorkItems(t = {}) {
    if (!this.quoteUrl)
      throw new Ri("未配置提及用户QUOTEURL编辑器参数！");
    const { data: e, context: s, params: n } = t, i = t.isInitialLoad === !0, o = t.isLoadMore === !0;
    i ? this.curPage = 0 : o && (this.curPage += 1);
    const a = ln.execScriptFn(
      { data: e, context: s, params: n },
      this.quoteUrl,
      {
        singleRowReturn: !0,
        isAsync: !1
      }
    ), u = {
      ...n,
      size: this.size,
      page: this.curPage
    }, h = await ibiz.net[this.quoteMethod](a, u);
    return h.ok ? this.toUIData(h.data) : [];
  }
  /**
   * @description 转换html
   * @param {string} value
   * @param {IData} data
   * @return {*}  {string}
   * @memberof CommentMarkerController
   */
  transformHtml(t) {
    return t.replaceAll(
      /<mob-marker class="ql-marker" data-identifier="(.+?)" data-name="(.+?)" data-value="(.+?)" data-icon="((.|[\t\r\f\n\s])+?)">(.+?)<\/mob-marker>/g,
      (s, n, i, o, a) => '#{"id":"'.concat(o, '","name":"').concat(i, '","identifier":"').concat(n, '","icon":"').concat(a, '"}<span> </span>')
    );
  }
  /**
   * @description 转换为delta
   * @param {string} value
   * @return {*}  {string}
   * @memberof CommentMarkerController
   */
  transformDelta(t) {
    return t.replaceAll(
      /#{"id":"(.+?)","name":"(.+?)","identifier":"(.+?)","icon":"((.|[\t\r\f\n\s])+?)"}/g,
      (s, n, i, o, a) => this.getNodeInfo({ id: n, name: i, identifier: o, icon: a })
    );
  }
  /**
   * @description 获取提及节点信息
   * @param {IData} data
   * @return {*}
   * @memberof CommentMarkerController
   */
  getNodeInfo(t) {
    return '<mob-marker class="ql-marker" data-identifier="'.concat(t.identifier, '" data-name="').concat(t.name, '" data-value="').concat(t.id, '" data-icon="').concat(t.icon, '">').concat(t.name, "</mob-marker>");
  }
  /**
   * @description 获取代码表项
   * @param {(CodeListItem[] | undefined)} codelist
   * @param {(string | number)} value
   * @return {*}
   * @memberof CommentMarkerController
   */
  findCodeListItem(t, e) {
    if (t) {
      const s = t.find((n) => n.value == e);
      if (s)
        return s;
      for (let n = 0; n < t.length; n++) {
        const i = this.findCodeListItem(
          t[n].children,
          e
        );
        if (i)
          return i;
      }
    }
  }
  /**
   * @description 获取选中数据
   * @param {IData} data
   * @memberof CommentMarkerController
   */
  getSelection(t) {
    if (this.quoteCodelistMap.has("type") && t.type) {
      const e = this.quoteCodelistMap.get("type"), s = this.findCodeListItem(e.codeListItems, t.type);
      s && s.sysImage && Object.assign(t, {
        icon: s.sysImage.rawContent
      });
    }
    return t;
  }
  /**
   * @description 获取提及工作项逻辑
   * @return {*}
   * @memberof CommentMarkerController
   */
  getMarkerLogic() {
    return this.appViewLogics.find((t) => t.name === "MARKER");
  }
}
class yc extends HTMLElement {
  constructor() {
    super(...arguments);
    A(this, "shadow", this.attachShadow({ mode: "open" }));
    A(this, "document", this.shadow.ownerDocument);
  }
  // 监听的 attr
  static get observedAttributes() {
    return ["data-icon", "data-identifier", "data-name"];
  }
  attributeChangedCallback(e, s, n) {
    if (!(!n || s === n)) {
      if (e === "data-identifier") {
        const i = document.createElement("span");
        i.part.add("identifier"), i.innerHTML = n, this.shadow.appendChild(i);
      }
      if (e === "data-name") {
        const i = document.createElement("span");
        i.part.add("name"), i.innerHTML = n, this.shadow.appendChild(i);
      }
      if (e === "data-icon") {
        const i = document.createElement("span");
        i.part.add("svg"), i.innerHTML = n, this.shadow.firstChild ? this.shadow.insertBefore(i, this.shadow.firstChild) : this.shadow.appendChild(i);
        const o = document.createElement("style");
        o.innerHTML = "\n      svg {\n        height: 1em;\n        width: 1em;\n      }\n    ", this.shadow.appendChild(o);
      }
    }
  }
}
class _r {
  /**
   * 获取主题
   * @returns
   */
  static getThemeVar() {
    const t = document.documentElement;
    return t ? getComputedStyle(t).getPropertyValue("--ibiz-color-primary") : null;
  }
  /**
   * 是否包含中文字符
   * @param inputString
   * @returns
   */
  static isChineseCharacter(t) {
    return /[\u4e00-\u9fa5]/.test(t);
  }
  /**
   * 判断字符串是否同时存在英文和中文
   * @param str
   * @returns
   */
  static hasChineseAndEnglish(t) {
    return /[\u4e00-\u9fa5]+.*[a-zA-Z]+|[a-zA-Z]+.*[\u4e00-\u9fa5]+/.test(t);
  }
  /**
   * 字符串转16进制颜色
   * @param text
   * @returns
   */
  static stringToHexColor(t) {
    if (!t)
      return "";
    let e = 0;
    for (let u = 0; u < t.length; u++)
      if (this.isChineseCharacter(t))
        e = t.charCodeAt(u) + ((e << 5) - e), e = e & e;
      else {
        const h = t.charCodeAt(u);
        e += h.toString(16);
      }
    const s = String(e).substring(0, 6);
    let n = parseInt(s.substring(0, 2), 16), i = parseInt(s.substring(2, 4), 16), o = parseInt(s.substring(4, 6), 16);
    n < 0 && (n = 10), i < 0 && (i = 10), o < 0 && (o = 10);
    const a = "#".concat(n.toString(16).padStart(2, "0")).concat(i.toString(16).padStart(2, "0")).concat(o.toString(16).padStart(2, "0"));
    return a === "#FFFFFF" && this.getThemeVar() || a;
  }
  /**
   * 缩写名字
   * @param text
   * @returns
   */
  static avatarName(t) {
    if (t && t.toString().length < 2)
      return t;
    if (t && t.toString().length >= 2) {
      if (this.hasChineseAndEnglish(t)) {
        const i = t.split("").find((a) => /[a-zA-Z]/.test(a)) || "", o = t.split("").find((a) => /[\u4E00-\u9FA5]/.test(a)) || "";
        return "".concat(i).concat(o).toLowerCase();
      }
      return /[a-zA-Z]/.test(t) ? t.split("").filter((i) => /[a-zA-Z]/.test(i)).slice(0, 2).join("").toUpperCase() : /[\u4E00-\u9FA5]/.test(t) ? t.split("").filter((i) => /[\u4E00-\u9FA5]/.test(i)).slice(-2).join("") : t.replaceAll(" ", "").substring(0, 2);
    }
  }
  /**
   * 解析emoji表情
   *
   * @param {string} value
   * @return {*}  {string}
   */
  static getEmojiCustomHtml(t) {
    return t.replaceAll(/{"emoji":"(.+?)"}/g, (e, s) => {
      const n = decodeURIComponent(atob(s));
      return '<span class="emoji-tag">'.concat(n, "</span>");
    }).replaceAll(
      /<span data-w-e-type="emoji" class='emoji'>(.+?)<\/span>/g,
      (e, s) => {
        const n = decodeURIComponent(atob(s));
        return "<span data-w-e-type=\"emoji\" class='emoji'>".concat(n, "</span>");
      }
    );
  }
}
class vc extends Tl {
  constructor() {
    super(...arguments);
    /**
     * 上传参数
     */
    A(this, "uploadParams");
    /**
     * 下载参数
     */
    A(this, "exportParams");
    /**
     * @description 是否显示工具栏
     * @type {boolean}
     * @memberof MobCommentController
     */
    A(this, "showToolbar", !0);
    /**
     * @description 值模式(暂时只支持html模式，text模式存在问题)
     * @type {('text' | 'html')}
     * @memberof MobCommentController
     */
    A(this, "valueMode", "html");
    /**
     * @description 图片模式
     * @type {('base64' | 'file')}
     * @memberof MobCommentController
     */
    A(this, "imageMode", "file");
    /**
     * @description 提及控制器
     * @type {CommentMentionController}
     * @memberof MobCommentController
     */
    A(this, "mention");
    /**
     * @description 提及工作项控制器
     * @type {CommentMarkerController}
     * @memberof MobCommentController
     */
    A(this, "marker");
    /**
     * @description quill配置
     * @type {IData}
     * @memberof MobCommentController
     */
    A(this, "modules", {
      toolbar: []
    });
    /**
     * @description 视图逻辑
     * @type {IAppViewLogic[]}
     * @memberof MobCommentController
     */
    A(this, "appViewLogics", []);
    /**
     * 回复脚本
     *
     * @type {string}
     * @memberof MobCommentController
     */
    A(this, "replyScript", "");
    /**
     * @description 回复
     * @type {string}
     * @memberof MobCommentController
     */
    A(this, "reply", "");
    A(this, "evt", new ql(
      this.getEventArgs.bind(this)
    ));
  }
  /**
   * @description 视图
   * @private
   * @return {*}  {IViewController}
   * @memberof MobCommentController
   */
  get view() {
    return this.parent.panel ? this.parent.panel.view : this.parent.form ? this.parent.form.view : this.parent.grid.view;
  }
  getEventArgs() {
    return {
      context: this.context,
      params: this.params,
      data: [],
      eventArg: "",
      targetName: this.model.name,
      view: this.getView()
    };
  }
  initBlot() {
    w.register({ "formats/mention": tn }), w.register({ "formats/marker": en });
  }
  registerCustomElem() {
    window.customElements.get("mob-marker") || window.customElements.define("mob-marker", yc);
  }
  /**
   * @description 获取控制器参数
   * @protected
   * @return {*}
   * @memberof MobCommentController
   */
  getControllerParams() {
    return {
      model: this.model,
      context: this.context,
      params: this.params,
      appViewLogics: this.appViewLogics
    };
  }
  /**
   * 初始化
   *
   * @protected
   * @return {*}  {Promise<void>}
   * @memberof MobCommentController
   */
  async onInit() {
    if (await super.onInit(), this.appViewLogics = Cl(this.view.model), this.registerCustomElem(), this.editorParams) {
      const {
        uploadParams: e,
        exportParams: s,
        SHOWTOOLBAR: n,
        VALUEMODE: i,
        IMAGEMODE: o,
        MODULES: a,
        REPLYSCRIPT: u
      } = this.editorParams;
      if (e)
        try {
          this.uploadParams = JSON.parse(e);
        } catch (h) {
          ibiz.log.error(
            "编辑器[".concat(ibiz.log.error(
              h
            ), "]编辑器参数 uploadParams 非 json 格式")
          );
        }
      if (s)
        try {
          this.exportParams = JSON.parse(s);
        } catch (h) {
          ibiz.log.error(
            "编辑器[".concat(ibiz.log.error(
              h
            ), "]编辑器参数 exportParams 非 json 格式")
          );
        }
      n && (this.showToolbar = this.toBoolean(n)), i && (this.valueMode = i.toLowerCase()), o && (this.imageMode = o.toLowerCase()), a && (this.modules = ln.execScriptFn(
        { controller: this },
        a
      )), u && (this.replyScript = u);
    }
    this.initBlot(), this.mention = new gc(
      this.editorParams,
      this.getControllerParams()
    ), this.marker = new bc(
      this.editorParams,
      this.getControllerParams()
    );
  }
  /**
   * @description 获取用户数据
   * @return {*}  {Promise<IData[]>}
   * @memberof MobCommentController
   */
  async getMentions(e) {
    const { context: s, params: n } = this.handlePublicParams(
      e,
      this.context,
      this.params
    );
    return this.mention.getUsers({
      data: e,
      context: s,
      params: n
    });
  }
  /**
   * @description 获取工作项数据
   * @return {*}  {Promise<IData[]>}
   * @memberof MobCommentController
   */
  async getMarkers(e) {
    const { context: s, params: n } = this.handlePublicParams(
      e,
      this.context,
      this.params
    );
    return this.marker.getWorkItems({
      data: e,
      context: s,
      params: n
    });
  }
  /**
   * @description 转换为html
   * @param {string} value
   * @return {*}  {string}
   * @memberof MobCommentController
   */
  transformHtml(e) {
    let s = e;
    return s = this.mention.transformHtml(s), s = this.marker.transformHtml(s), s;
  }
  /**
   * @description 转换为delta
   * @param {string} value
   * @return {*}
   * @memberof MobCommentController
   */
  transformDelta(e) {
    let s = e;
    return s = this.mention.transformDelta(s), s = this.marker.transformDelta(s), s;
  }
  /**
   * @description 打开选择视图
   * @param {IData} data
   * @param {string} viewId
   * @return {*}  {(Promise<IData[] | undefined>)}
   * @memberof MobCommentController
   */
  async openPickUpView(e, s) {
    if (!s.appDEUIActionId) {
      ibiz.message.error("未配置MENTION视图自定义逻辑");
      return;
    }
    const n = await Sl(s.appDEUIActionId, s.appId);
    if (!n || !n.frontAppViewId) {
      ibiz.message.error("请配置界面行为打开视图");
      return;
    }
    const { context: i, params: o } = this.handlePublicParams(
      e,
      this.context,
      this.params
    ), a = await ibiz.hub.config.view.get(n.frontAppViewId), { openMode: u = "POPUPMODAL" } = a, h = await ibiz.commands.execute(
      kl.TAG,
      n.frontAppViewId,
      i,
      o,
      { openMode: u }
    );
    if (h && h.ok && h.data)
      return h.data;
    ibiz.log.debug("模态取消或关闭异常", h);
  }
  /**
   * 设置回复,data: {name: string, content: string}
   *
   * @param {IData} data
   * @memberof MobCommentController
   */
  setReply(e) {
    const s = _r.getEmojiCustomHtml("".concat(e.name, ": ").concat(e.content));
    this.evt.emit("onSetReply", {
      eventArg: s
    });
  }
  /**
   * @description 清空评论
   * @memberof MobCommentController
   */
  clearReply() {
    this.evt.emit("onRemoveReply", {
      eventArg: ""
    });
  }
  /**
   * 获取当前视图
   *
   * @return {*}
   * @memberof HtmlCommentController
   */
  getView() {
    const e = this.parent.form || this.parent.grid || this.parent.panel;
    if (e)
      return e.view;
  }
}
class Ec {
  constructor() {
    A(this, "formEditor", "IBizMobComment");
    A(this, "gridEditor", "IBizMobComment");
  }
  async createController(t, e) {
    const s = new vc(t, e);
    return await s.init(), s;
  }
}
const pr = /* @__PURE__ */ Dr({
  name: "IBizMobComment",
  props: Al(),
  emits: xl(),
  setup(r, {
    emit: t
  }) {
    const e = Mr("mob-comment"), s = r.controller, n = at(null), i = at(null), o = ibiz.i18n.getLang();
    let a;
    const u = at(!1), h = at({
      Authorization: "Bearer ".concat(Bl(Il.TOKEN))
    }), d = at(""), b = at(""), m = at(!1), p = at(!1), g = at([]), N = at([]), v = at(""), E = at(""), x = (B) => {
      const _ = B.ops.find((R) => R.insert && R.insert.image);
      if (_)
        return _.insert.image;
    }, L = () => {
      let B = "";
      return s.valueMode === "text" && (B = a.getText()), B = a.getSemanticHTML(), B = s.transformHtml(B), B;
    }, S = async (B) => {
      const _ = Rl(B), R = await ibiz.util.file.fileUpload(d.value, _, h.value), it = b.value.replace("%fileId%", R.fileid), z = L();
      t("change", z.replace(B, it));
    }, T = (B = v.value) => {
      const _ = a.getSelection(), R = a.clipboard.convert({
        html: "".concat(B, "<p><br></p>"),
        text: "\n"
      });
      a.setContents(R), _ && a.setSelection(_.index + 1, "user");
    }, I = ({
      selectedOptions: B
    }) => {
      const _ = B[0];
      if (!_)
        return;
      const R = a.getSelection(!0), it = R.index + R.length, z = JSON.stringify(_);
      a.insertText(it, "@".concat(_.name), "mention", z, "user"), a.setSelection(it + _.name.length + 1, "user"), m.value = !1;
    }, D = async () => {
      const B = s.mention.getMentionLogic();
      if (B) {
        const _ = await s.openPickUpView(r.data, B);
        if (_ && _[0]) {
          const R = _[0]._deData;
          I({
            selectedOptions: [{
              ...R,
              value: R.id
            }]
          });
        }
      } else
        g.value = await s.getMentions(r.data), m.value = !0;
    }, F = ({
      selectedOptions: B
    }) => {
      const _ = s.marker.getSelection(B[0]);
      if (!_)
        return;
      const R = a.getSelection(!0), it = R.index + R.length, z = JSON.stringify(_);
      a.insertText(it, "".concat(_.name), "marker", z, "user"), a.setSelection(it + _.name.length + 1, "user"), p.value = !1;
    }, ht = async () => {
      const B = s.marker.getMarkerLogic();
      if (B) {
        const _ = await s.openPickUpView(r.data, B);
        if (_ && _[0]) {
          const R = s.marker.toUIData(_);
          F({
            selectedOptions: R
          });
        }
      } else
        N.value = await s.getMarkers(r.data), p.value = !0;
    }, kt = () => {
      m.value = !1, T();
    }, Dt = () => {
      p.value = !1, T();
    }, Ut = (B) => {
      let _ = !0;
      const R = B.ops.find((z) => z.insert);
      if (R) {
        const z = R.insert;
        if (z === "@") {
          const K = a.getSelection(!0);
          a.deleteText(K.index, 1, "user"), D(), _ = !1;
        }
        if (z === "#") {
          const K = a.getSelection(!0);
          a.deleteText(K.index, 1, "user"), ht(), _ = !1;
        }
      }
      if (B.ops.find((z) => z.delete)) {
        const z = a.getSelection(!0);
        a.getContents(z.index - 1, 1).ops.some(($) => {
          var ie;
          return (ie = $.attributes) == null ? void 0 : ie.marker;
        }) && (a.deleteText(z.index - 1, 1, "user"), _ = !1);
      }
      return _;
    }, be = () => {
      if (!n.value)
        return;
      const B = s.showToolbar ? "snow" : "bubble";
      Object.assign(s.modules, {
        toolbar: i.value
      }), a = new w(n.value, {
        theme: B,
        modules: s.modules,
        readOnly: r.disabled || r.readonly,
        placeholder: s.placeHolder
      }), a.on("text-change", (_, R, it) => {
        if (it === "user" && Ut(_)) {
          const K = x(_);
          if (K && s.imageMode === "file") {
            S(K);
            return;
          }
          t("change", L());
        }
      }), a.on("selection-change", (_) => {
        _ ? u.value = !0 : u.value = !1;
      }), s.valueMode === "text" && a.setText(r.value || "");
    };
    nr(() => r.value, () => {
      if (r.value) {
        v.value = s.transformDelta(r.value);
        const B = a.getSemanticHTML();
        v.value !== B && T();
      } else
        v.value = "", T();
    }, {
      immediate: !0
    }), nr(() => [r.disabled, r.readonly], () => {
      a && (r.disabled || r.readonly ? a.enable(!1) : a.enable());
    }, {
      immediate: !0
    }), nr(() => r.data, (B) => {
      if (B) {
        const _ = ibiz.util.file.calcFileUpDownUrl(s.context, s.params, B, s.editorParams);
        d.value = _.uploadUrl, b.value = _.downloadUrl;
      }
    }, {
      immediate: !0,
      deep: !0
    }), _l(() => {
      be();
    });
    const re = (B) => {
      const {
        eventArg: _
      } = B;
      E.value = _, s.reply = _, a.setSelection(0, "silent");
    }, Gt = () => {
      E.value = "", s.reply = "";
    }, ye = () => {
      a.setSelection(0, "silent");
    };
    return s.evt.on("onSetReply", re), s.evt.on("onRemoveReply", Gt), s.evt.on("focus", ye), Ml(() => {
      s.evt.off("onSetReply", re), s.evt.off("onRemoveReply", Gt), s.evt.off("focus", ye);
    }), {
      ns: e,
      lang: o,
      editing: u,
      editorRef: n,
      toolbarRef: i,
      showAtPopup: m,
      showMkPopup: p,
      mentionItems: g,
      markerItems: N,
      curValue: v,
      handleMentionClick: D,
      handleMarkerClick: ht,
      onMentionCancel: kt,
      onMentionConfirm: I,
      onMarkerCancel: Dt,
      onMarkerConfirm: F,
      renderReply: () => {
        if (E.value) {
          const B = ln.execScriptFn({
            value: E.value
          }, s.replyScript, {
            singleRowReturn: !0,
            isAsync: !1
          });
          return U("div", {
            class: e.b("reply")
          }, [U("div", {
            class: e.be("reply", "content"),
            innerHTML: B
          }, null), U(Xt("ion-icon"), {
            name: "close-outline",
            onClick: () => Gt()
          }, null)]);
        }
      }
    };
  },
  render() {
    return U("div", {
      class: [this.ns.b(), this.disabled ? this.ns.m("disabled") : "", this.readonly ? this.ns.m("readonly") : "", this.ns.m(this.lang.toLowerCase()), this.ns.is("editing", this.editing)]
    }, [U("div", {
      class: this.ns.e("content")
    }, [U("div", {
      class: this.ns.e("ql-content"),
      ref: "editorRef"
    }, [this.controller.valueMode === "html" ? U("div", {
      innerHTML: this.curValue
    }, null) : null]), this.renderReply(), U("div", {
      class: this.ns.e("ql-toolbar"),
      ref: "toolbarRef"
    }, [U("button", {
      class: "ql-bold"
    }, null), U("button", {
      class: "ql-italic"
    }, null), U("button", {
      class: "ql-underline"
    }, null), U("button", {
      class: "ql-strike"
    }, null), U("button", {
      class: "ql-code-block"
    }, null), U("button", {
      class: "ql-list",
      value: "ordered"
    }, null), U("button", {
      class: "ql-list",
      value: "bullet"
    }, null), U("button", {
      class: "ql-mention",
      onClick: this.handleMentionClick
    }, [U("svg", {
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "4218",
      width: "200",
      height: "200"
    }, [U("path", {
      d: "M23.7 555c0-339.3 247-550 533.8-550 295.6 0 442.8 165.9 442.8 401.6 0 210.8-93.5 361.7-237 361.7-63.6 0-108.5-26.2-137.2-78.6-48.6 51.1-96 79.8-174.6 79.8-116 0-178.4-77.3-178.4-193.3 0-209.5 131-323 251.9-323 64.9 0 102.3 24.9 122.2 68.6l11.2-58.6 114.7 1.2L727 510.1c-7.5 36.2-11.2 63.6-11.2 81.1 0 44.9 22.5 71.1 56.1 71.1 63.6 0 106-89.8 106-243.2 0-205.8-114.7-300.6-323-300.6-220.8 0-405.4 163.4-405.4 436.5 0 238.2 132.2 350.5 390.4 350.5 94.8 0 174.6-12.5 255.7-36.2v109.8c-88.6 26.2-177.1 39.9-263.2 39.9-329.1 0-508.7-168.4-508.7-464z m585-44.9c3.7-20 6.2-39.9 6.2-53.6 0-56.1-15-96-83.6-96-83.6 0-133.5 108.5-133.5 212 0 44.9 13.7 88.6 77.3 88.6 73.7-0.1 114.9-57.4 133.6-151z",
      fill: "currentColot",
      "p-id": "4219"
    }, null)])]), U("button", {
      class: "ql-marker",
      onClick: this.handleMarkerClick
    }, [U("svg", {
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "6854",
      width: "200",
      height: "200"
    }, [U("path", {
      d: "M929.28 625.664l-234.496 0.512 24.064-229.888 210.432-0.512c20.992 0 38.4-17.408 38.4-38.4s-17.408-38.4-38.4-38.4H727.04l29.184-275.456c2.048-20.992-13.312-39.936-34.304-41.984-20.992-2.048-39.936 13.312-41.984 34.304L650.24 318.976l-232.448 0.512 29.184-275.456c2.048-20.992-13.312-39.936-34.304-41.984-20.992-2.048-39.936 13.312-41.984 34.304l-29.696 283.648-246.272 0.512c-20.992 0-38.4 17.408-38.4 38.4s17.408 38.4 38.4 38.4l238.08-0.512-24.064 229.888-214.016 0.512c-20.992 0-38.4 17.408-38.4 38.4s17.408 38.4 38.4 38.4l205.824-0.512-29.184 276.992c-2.048 20.992 13.312 39.936 34.304 41.984h4.096c19.456 0 35.84-14.848 37.888-34.304l30.208-285.184 232.448-0.512-29.184 277.504c-2.048 20.992 13.312 39.936 34.304 41.984h4.096c19.456 0 35.84-14.848 38.4-34.304l30.208-285.184 242.688-0.512c20.992 0 38.4-17.408 38.4-38.4-1.536-20.992-18.944-37.888-39.936-37.888z m-544.256 0.512l24.064-229.888 232.448-0.512-24.064 229.888-232.448 0.512z",
      fill: "currentColot",
      "p-id": "6855"
    }, null)])])])]), U(Xt("van-popup"), {
      show: this.showAtPopup,
      "onUpdate:show": (r) => this.showAtPopup = r,
      round: !0,
      position: "bottom"
    }, {
      default: () => [U(Xt("van-picker"), {
        columns: this.mentionItems,
        "confirm-button-text": ibiz.i18n.t("editor.common.confirm"),
        onCancel: this.onMentionCancel,
        onConfirm: this.onMentionConfirm
      }, {
        option: (r) => U(Xt("mobMenTionItem"), {
          item: r,
          controller: this.controller.mention
        }, null)
      })]
    }), U(Xt("van-popup"), {
      show: this.showMkPopup,
      "onUpdate:show": (r) => this.showMkPopup = r,
      round: !0,
      position: "bottom"
    }, {
      default: () => [U(Xt("van-picker"), {
        columns: this.markerItems,
        "confirm-button-text": ibiz.i18n.t("editor.common.confirm"),
        onCancel: this.onMarkerCancel,
        onConfirm: this.onMarkerConfirm
      }, {
        option: (r) => U(Xt("mobMarkerItem"), {
          item: r,
          controller: this.controller.marker
        }, null)
      })]
    })]);
  }
});
const Oi = /* @__PURE__ */ Dr({
  name: "MobMenTionItem",
  props: {
    controller: {
      type: Object,
      required: !0
    },
    item: {
      type: Object,
      required: !0
    }
  },
  setup(r) {
    const t = Mr("mob-mention-item"), e = r.controller, s = at([]), n = rr(() => _r.stringToHexColor(r.item.name)), i = rr(() => _r.avatarName(r.item.name)), o = (h) => {
      if (!h)
        return null;
      const d = JSON.parse(h);
      if (d.length === 0)
        return null;
      const {
        downloadUrl: b
      } = ibiz.util.file.calcFileUpDownUrl(e.context, e.params, e.editorParams);
      return b.replace("%fileId%", d[0].id);
    }, a = rr(() => {
      let h = "";
      if (e.operatorMap.has(r.item.id)) {
        const d = e.operatorMap.get(r.item.id);
        d.data.iconurl && (h = o(d.data.iconurl) || "");
      }
      return h;
    });
    return {
      ns: t,
      avatarBg: n,
      avatarName: i,
      url: a,
      errorLoadItems: s,
      avatarLoadError: (h) => {
        s.value.push(h);
      }
    };
  },
  render() {
    return U("div", {
      class: this.ns.b()
    }, [U("div", {
      class: this.ns.e("avatar"),
      style: "background: ".concat(this.avatarBg, ";")
    }, [this.url && !this.errorLoadItems.includes(this.url) ? U("img", {
      src: this.url,
      onError: () => this.avatarLoadError(this.url)
    }, null) : this.avatarName]), U("div", {
      class: this.ns.e("name")
    }, [this.item.name])]);
  }
});
const Ii = /* @__PURE__ */ Dr({
  name: "MobMarkerItem",
  props: {
    controller: {
      type: Object,
      required: !0
    },
    item: {
      type: Object,
      required: !0
    }
  },
  setup(r) {
    const t = Mr("mob-marker-item"), e = r.controller;
    return {
      ns: t,
      renderContent: (n, i) => {
        if (e.quoteCodelistMap.has(n)) {
          const o = e.quoteCodelistMap.get(n);
          return U(Xt("iBizCodeList"), {
            codeListItems: o.codeListItems,
            codeList: o.codeList,
            value: i
          }, null);
        }
        return i;
      }
    };
  },
  render() {
    return U("div", {
      class: this.ns.b()
    }, [U("div", {
      class: this.ns.e("type")
    }, [this.renderContent("type", this.item.type)]), U("div", {
      class: this.ns.e("identifier")
    }, [this.renderContent("identifier", this.item.identifier)]), U("div", {
      class: this.ns.e("name"),
      title: this.item.name
    }, [this.renderContent("name", this.item.name)])]);
  }
}), Nc = Ll(
  pr,
  function(r) {
    r.component(pr.name, pr), r.component(Oi.name, Oi), r.component(Ii.name, Ii), Ol(
      "MOBHTMLTEXT_COMMENT",
      () => new Ec()
    );
  }
), _c = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(r) {
    r.use(Nc);
  }
};
export {
  Nc as IBizMobHtmlComment,
  _c as default
};
