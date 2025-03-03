import './style.css';
var Rl = Object.defineProperty;
var Ml = (r, t, e) => t in r ? Rl(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var N = (r, t, e) => (Ml(r, typeof t != "symbol" ? t + "" : t, e), e);
import { getHtmlProps as Hr, useNamespace as Os, useUIStore as Hi, getEditorEmits as ji, withInstall as Bl } from "@ibiz-template/vue3-util";
import { ScriptFactory as Is, EditorController as Ul, ControllerEvent as Dl, getViewLogics as Pl, getUIActionById as Hl, OpenAppViewCommand as jl, getPlatformType as $l, PlatformType as zl, registerEditorProvider as ar } from "@ibiz-template/runtime";
import { isEqual as jr, cloneDeep as Qe, merge as me } from "lodash-es";
import { RuntimeError as $i, CoreConst as zi, base64ToBlob as Fi } from "@ibiz-template/core";
import { defineComponent as _s, ref as V, onMounted as $r, nextTick as ln, onBeforeUnmount as Fl, watch as Se, createVNode as C, resolveComponent as W, onUnmounted as Vi, computed as on, isVNode as Vl } from "vue";
import { getCookie as Ki } from "qx-util";
var I = /* @__PURE__ */ ((r) => (r[r.TYPE = 3] = "TYPE", r[r.LEVEL = 12] = "LEVEL", r[r.ATTRIBUTE = 13] = "ATTRIBUTE", r[r.BLOT = 14] = "BLOT", r[r.INLINE = 7] = "INLINE", r[r.BLOCK = 11] = "BLOCK", r[r.BLOCK_BLOT = 10] = "BLOCK_BLOT", r[r.INLINE_BLOT = 6] = "INLINE_BLOT", r[r.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", r[r.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", r[r.ANY = 15] = "ANY", r))(I || {});
class Zt {
  constructor(t, e, s = {}) {
    this.attrName = t, this.keyName = e;
    const n = I.TYPE & I.ATTRIBUTE;
    this.scope = s.scope != null ? (
      // Ignore type bits, force attribute bit
      s.scope & I.LEVEL | n
    ) : I.ATTRIBUTE, s.whitelist != null && (this.whitelist = s.whitelist);
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
class ts extends Error {
  constructor(t) {
    t = "[Parchment] " + t, super(t), this.message = t, this.name = this.constructor.name;
  }
}
const Gi = class Er {
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
      throw new ts("Unable to create ".concat(e, " blot"));
    const i = n, o = (
      // @ts-expect-error Fix me later
      e instanceof Node || e.nodeType === Node.TEXT_NODE ? e : i.create(s)
    ), a = new i(t, o, s);
    return Er.blots.set(a.domNode, a), a;
  }
  find(t, e = !1) {
    return Er.find(t, e);
  }
  query(t, e = I.ANY) {
    let s;
    return typeof t == "string" ? s = this.types[t] || this.attributes[t] : t instanceof Text || t.nodeType === Node.TEXT_NODE ? s = this.types.text : typeof t == "number" ? t & I.LEVEL & I.BLOCK ? s = this.types.block : t & I.LEVEL & I.INLINE && (s = this.types.inline) : t instanceof Element && ((t.getAttribute("class") || "").split(/\s+/).some((n) => (s = this.classes[n], !!s)), s = s || this.tags[t.tagName]), s == null ? null : "scope" in s && e & I.LEVEL & s.scope && e & I.TYPE & s.scope ? s : null;
  }
  register(...t) {
    return t.map((e) => {
      const s = "blotName" in e, n = "attrName" in e;
      if (!s && !n)
        throw new ts("Invalid definition");
      if (s && e.blotName === "abstract")
        throw new ts("Cannot register abstract class");
      const i = s ? e.blotName : n ? e.attrName : void 0;
      return this.types[i] = e, n ? typeof e.keyName == "string" && (this.attributes[e.keyName] = e) : s && (e.className && (this.classes[e.className] = e), e.tagName && (Array.isArray(e.tagName) ? e.tagName = e.tagName.map((o) => o.toUpperCase()) : e.tagName = e.tagName.toUpperCase(), (Array.isArray(e.tagName) ? e.tagName : [e.tagName]).forEach((o) => {
        (this.tags[o] == null || e.className == null) && (this.tags[o] = e);
      }))), e;
    });
  }
};
Gi.blots = /* @__PURE__ */ new WeakMap();
let ss = Gi;
function li(r, t) {
  return (r.getAttribute("class") || "").split(/\s+/).filter((e) => e.indexOf("".concat(t, "-")) === 0);
}
class Kl extends Zt {
  static keys(t) {
    return (t.getAttribute("class") || "").split(/\s+/).map((e) => e.split("-").slice(0, -1).join("-"));
  }
  add(t, e) {
    return this.canAdd(t, e) ? (this.remove(t), t.classList.add("".concat(this.keyName, "-").concat(e)), !0) : !1;
  }
  remove(t) {
    li(t, this.keyName).forEach((e) => {
      t.classList.remove(e);
    }), t.classList.length === 0 && t.removeAttribute("class");
  }
  value(t) {
    const e = (li(t, this.keyName)[0] || "").slice(this.keyName.length + 1);
    return this.canAdd(t, e) ? e : "";
  }
}
const Pt = Kl;
function cr(r) {
  const t = r.split("-"), e = t.slice(1).map((s) => s[0].toUpperCase() + s.slice(1)).join("");
  return t[0] + e;
}
class Gl extends Zt {
  static keys(t) {
    return (t.getAttribute("style") || "").split(";").map((e) => e.split(":")[0].trim());
  }
  add(t, e) {
    return this.canAdd(t, e) ? (t.style[cr(this.keyName)] = e, !0) : !1;
  }
  remove(t) {
    t.style[cr(this.keyName)] = "", t.getAttribute("style") || t.removeAttribute("style");
  }
  value(t) {
    const e = t.style[cr(this.keyName)];
    return this.canAdd(t, e) ? e : "";
  }
}
const pe = Gl;
class Zl {
  constructor(t) {
    this.attributes = {}, this.domNode = t, this.build();
  }
  attribute(t, e) {
    e ? t.add(this.domNode, e) && (t.value(this.domNode) != null ? this.attributes[t.attrName] = t : delete this.attributes[t.attrName]) : (t.remove(this.domNode), delete this.attributes[t.attrName]);
  }
  build() {
    this.attributes = {};
    const t = ss.find(this.domNode);
    if (t == null)
      return;
    const e = Zt.keys(this.domNode), s = Pt.keys(this.domNode), n = pe.keys(this.domNode);
    e.concat(s).concat(n).forEach((i) => {
      const o = t.scroll.query(i, I.ATTRIBUTE);
      o instanceof Zt && (this.attributes[o.attrName] = o);
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
const pn = Zl, Zi = class {
  constructor(t, e) {
    this.scroll = t, this.domNode = e, ss.blots.set(e, this), this.prev = null, this.next = null;
  }
  static create(t) {
    if (this.tagName == null)
      throw new ts("Blot definition missing tagName");
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
    this.parent != null && this.parent.removeChild(this), ss.blots.delete(this.domNode);
  }
  deleteAt(t, e) {
    this.isolate(t, e).remove();
  }
  formatAt(t, e, s, n) {
    const i = this.isolate(t, e);
    if (this.scroll.query(s, I.BLOT) != null && n)
      i.wrap(s, n);
    else if (this.scroll.query(s, I.ATTRIBUTE) != null) {
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
      throw new ts("Cannot wrap ".concat(t));
    return s.appendChild(this), s;
  }
};
Zi.blotName = "abstract";
let Wi = Zi;
const Xi = class extends Wi {
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
Xi.scope = I.INLINE_BLOT;
let Wl = Xi;
const ut = Wl;
class Xl {
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
    let c = a();
    for (; c && o < t + e; ) {
      const h = c.length();
      t > o ? s(
        c,
        t - o,
        Math.min(e, o + h - t)
      ) : s(c, 0, Math.min(h, t + e - o)), o += h, c = a();
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
function oi(r, t) {
  const e = t.find(r);
  if (e)
    return e;
  try {
    return t.create(r);
  } catch (s) {
    const n = t.create(I.INLINE);
    return Array.from(r.childNodes).forEach((i) => {
      n.domNode.appendChild(i);
    }), r.parentNode && r.parentNode.replaceChild(n.domNode, r), n.attach(), n;
  }
}
const Yi = class ue extends Wi {
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
    this.uiNode != null && this.uiNode.remove(), this.uiNode = t, ue.uiClass && this.uiNode.classList.add(ue.uiClass), this.uiNode.setAttribute("contenteditable", "false"), this.domNode.insertBefore(this.uiNode, this.domNode.firstChild);
  }
  /**
   * Called during construction, should fill its own children LinkedList.
   */
  build() {
    this.children = new Xl(), Array.from(this.domNode.childNodes).filter((t) => t !== this.uiNode).reverse().forEach((t) => {
      try {
        const e = oi(t, this.scroll);
        this.insertBefore(e, this.children.head || void 0);
      } catch (e) {
        if (e instanceof ts)
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
    return t.blotName == null && t(s) || t.blotName != null && s instanceof t ? [s, n] : s instanceof ue ? s.descendant(t, n) : [null, -1];
  }
  descendants(t, e = 0, s = Number.MAX_VALUE) {
    let n = [], i = s;
    return this.children.forEachAt(
      e,
      s,
      (o, a, c) => {
        (t.blotName == null && t(o) || t.blotName != null && o instanceof t) && n.push(o), o instanceof ue && (n = n.concat(
          o.descendants(t, a, i)
        )), i -= c;
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
      ) || (e.statics.scope === I.BLOCK_BLOT ? (e.next != null && this.splitAfter(e), e.prev != null && this.splitAfter(e.prev), e.parent.unwrap(), t = !0) : e instanceof ue ? e.unwrap() : e.remove());
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
    return s instanceof ue ? i.concat(s.path(n, e)) : (s != null && i.push([s, n]), i);
  }
  removeChild(t) {
    this.children.remove(t);
  }
  replaceWith(t, e) {
    const s = typeof t == "string" ? this.scroll.create(t, e) : t;
    return s instanceof ue && this.moveChildren(s), super.replaceWith(s);
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
      const a = oi(i, this.scroll);
      (a.next !== o || a.next == null) && (a.parent != null && a.parent.removeChild(this), this.insertBefore(a, o || void 0));
    }), this.enforceAllowedChildren();
  }
};
Yi.uiClass = "";
let Yl = Yi;
const Ut = Yl;
function Jl(r, t) {
  if (Object.keys(r).length !== Object.keys(t).length)
    return !1;
  for (const e in r)
    if (r[e] !== t[e])
      return !1;
  return !0;
}
const Ge = class Ze extends Ut {
  static create(t) {
    return super.create(t);
  }
  static formats(t, e) {
    const s = e.query(Ze.blotName);
    if (!(s != null && t.tagName === s.tagName)) {
      if (typeof this.tagName == "string")
        return !0;
      if (Array.isArray(this.tagName))
        return t.tagName.toLowerCase();
    }
  }
  constructor(t, e) {
    super(t, e), this.attributes = new pn(this.domNode);
  }
  format(t, e) {
    if (t === this.statics.blotName && !e)
      this.children.forEach((s) => {
        s instanceof Ze || (s = s.wrap(Ze.blotName, !0)), this.attributes.copy(s);
      }), this.unwrap();
    else {
      const s = this.scroll.query(t, I.INLINE);
      if (s == null)
        return;
      s instanceof Zt ? this.attributes.attribute(s, e) : e && (t !== this.statics.blotName || this.formats()[t] !== e) && this.replaceWith(t, e);
    }
  }
  formats() {
    const t = this.attributes.values(), e = this.statics.formats(this.domNode, this.scroll);
    return e != null && (t[this.statics.blotName] = e), t;
  }
  formatAt(t, e, s, n) {
    this.formats()[s] != null || this.scroll.query(s, I.ATTRIBUTE) ? this.isolate(t, e).format(s, n) : super.formatAt(t, e, s, n);
  }
  optimize(t) {
    super.optimize(t);
    const e = this.formats();
    if (Object.keys(e).length === 0)
      return this.unwrap();
    const s = this.next;
    s instanceof Ze && s.prev === this && Jl(e, s.formats()) && (s.moveChildren(this), s.remove());
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
    return s instanceof Ze && this.attributes.move(s), s;
  }
};
Ge.allowedChildren = [Ge, ut], Ge.blotName = "inline", Ge.scope = I.INLINE_BLOT, Ge.tagName = "SPAN";
let Ql = Ge;
const zr = Ql, We = class Nr extends Ut {
  static create(t) {
    return super.create(t);
  }
  static formats(t, e) {
    const s = e.query(Nr.blotName);
    if (!(s != null && t.tagName === s.tagName)) {
      if (typeof this.tagName == "string")
        return !0;
      if (Array.isArray(this.tagName))
        return t.tagName.toLowerCase();
    }
  }
  constructor(t, e) {
    super(t, e), this.attributes = new pn(this.domNode);
  }
  format(t, e) {
    const s = this.scroll.query(t, I.BLOCK);
    s != null && (s instanceof Zt ? this.attributes.attribute(s, e) : t === this.statics.blotName && !e ? this.replaceWith(Nr.blotName) : e && (t !== this.statics.blotName || this.formats()[t] !== e) && this.replaceWith(t, e));
  }
  formats() {
    const t = this.attributes.values(), e = this.statics.formats(this.domNode, this.scroll);
    return e != null && (t[this.statics.blotName] = e), t;
  }
  formatAt(t, e, s, n) {
    this.scroll.query(s, I.BLOCK) != null ? this.format(s, n) : super.formatAt(t, e, s, n);
  }
  insertAt(t, e, s) {
    if (s == null || this.scroll.query(e, I.INLINE) != null)
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
We.blotName = "block", We.scope = I.BLOCK_BLOT, We.tagName = "P", We.allowedChildren = [
  zr,
  We,
  ut
];
let to = We;
const Ts = to, Ar = class extends Ut {
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
Ar.blotName = "container", Ar.scope = I.BLOCK_BLOT;
let eo = Ar;
const gn = eo;
class so extends ut {
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
const Et = so, no = {
  attributes: !0,
  characterData: !0,
  characterDataOldValue: !0,
  childList: !0,
  subtree: !0
}, ro = 100, Xe = class extends Ut {
  constructor(t, e) {
    super(null, e), this.registry = t, this.scroll = this, this.build(), this.observer = new MutationObserver((s) => {
      this.update(s);
    }), this.observer.observe(this.domNode, no), this.attach();
  }
  create(t, e) {
    return this.registry.create(this, t, e);
  }
  find(t, e = !1) {
    const s = this.registry.find(t, e);
    return s ? s.scroll === this ? s : e ? this.find(s.scroll.domNode.parentNode, !0) : null : null;
  }
  query(t, e = I.ANY) {
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
    const i = (c, h = !0) => {
      c == null || c === this || c.domNode.parentNode != null && (s.has(c.domNode) || s.set(c.domNode, []), h && i(c.parent));
    }, o = (c) => {
      s.has(c.domNode) && (c instanceof Ut && c.children.forEach(o), s.delete(c.domNode), c.optimize(e));
    };
    let a = t;
    for (let c = 0; a.length > 0; c += 1) {
      if (c >= ro)
        throw new Error("[Parchment] Maximum optimize iterations reached");
      for (a.forEach((h) => {
        const f = this.find(h.target, !0);
        f != null && (f.domNode === h.target && (h.type === "childList" ? (i(this.find(h.previousSibling, !1)), Array.from(h.addedNodes).forEach((g) => {
          const m = this.find(g, !1);
          i(m, !1), m instanceof Ut && m.children.forEach((p) => {
            i(p, !1);
          });
        })) : h.type === "attributes" && i(f.prev)), i(f));
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
Xe.blotName = "scroll", Xe.defaultChild = Ts, Xe.allowedChildren = [Ts, gn], Xe.scope = I.BLOCK_BLOT, Xe.tagName = "DIV";
let io = Xe;
const Fr = io, xr = class Ji extends ut {
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
    super.optimize(t), this.text = this.statics.value(this.domNode), this.text.length === 0 ? this.remove() : this.next instanceof Ji && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove());
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
xr.blotName = "text", xr.scope = I.INLINE_BLOT;
let lo = xr;
const dn = lo, oo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Attributor: Zt,
  AttributorStore: pn,
  BlockBlot: Ts,
  ClassAttributor: Pt,
  ContainerBlot: gn,
  EmbedBlot: Et,
  InlineBlot: zr,
  LeafBlot: ut,
  ParentBlot: Ut,
  Registry: ss,
  Scope: I,
  ScrollBlot: Fr,
  StyleAttributor: pe,
  TextBlot: dn
}, Symbol.toStringTag, { value: "Module" }));
var he = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Qi(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Lr = { exports: {} }, wt = -1, ft = 1, tt = 0;
function Cs(r, t, e, s, n) {
  if (r === t)
    return r ? [[tt, r]] : [];
  if (e != null) {
    var i = bo(r, t, e);
    if (i)
      return i;
  }
  var o = Vr(r, t), a = r.substring(0, o);
  r = r.substring(o), t = t.substring(o), o = bn(r, t);
  var c = r.substring(r.length - o);
  r = r.substring(0, r.length - o), t = t.substring(0, t.length - o);
  var h = ao(r, t);
  return a && h.unshift([tt, a]), c && h.push([tt, c]), Kr(h, n), s && ho(h), h;
}
function ao(r, t) {
  var e;
  if (!r)
    return [[ft, t]];
  if (!t)
    return [[wt, r]];
  var s = r.length > t.length ? r : t, n = r.length > t.length ? t : r, i = s.indexOf(n);
  if (i !== -1)
    return e = [
      [ft, s.substring(0, i)],
      [tt, n],
      [ft, s.substring(i + n.length)]
    ], r.length > t.length && (e[0][0] = e[2][0] = wt), e;
  if (n.length === 1)
    return [
      [wt, r],
      [ft, t]
    ];
  var o = uo(r, t);
  if (o) {
    var a = o[0], c = o[1], h = o[2], f = o[3], g = o[4], m = Cs(a, h), p = Cs(c, f);
    return m.concat([[tt, g]], p);
  }
  return co(r, t);
}
function co(r, t) {
  for (var e = r.length, s = t.length, n = Math.ceil((e + s) / 2), i = n, o = 2 * n, a = new Array(o), c = new Array(o), h = 0; h < o; h++)
    a[h] = -1, c[h] = -1;
  a[i + 1] = 0, c[i + 1] = 0;
  for (var f = e - s, g = f % 2 !== 0, m = 0, p = 0, b = 0, E = 0, v = 0; v < n; v++) {
    for (var y = -v + m; y <= v - p; y += 2) {
      var x = i + y, L;
      y === -v || y !== v && a[x - 1] < a[x + 1] ? L = a[x + 1] : L = a[x - 1] + 1;
      for (var S = L - y; L < e && S < s && r.charAt(L) === t.charAt(S); )
        L++, S++;
      if (a[x] = L, L > e)
        p += 2;
      else if (S > s)
        m += 2;
      else if (g) {
        var T = i + f - y;
        if (T >= 0 && T < o && c[T] !== -1) {
          var k = e - c[T];
          if (L >= k)
            return ai(r, t, L, S);
        }
      }
    }
    for (var B = -v + b; B <= v - E; B += 2) {
      var T = i + B, k;
      B === -v || B !== v && c[T - 1] < c[T + 1] ? k = c[T + 1] : k = c[T - 1] + 1;
      for (var j = k - B; k < e && j < s && r.charAt(e - k - 1) === t.charAt(s - j - 1); )
        k++, j++;
      if (c[T] = k, k > e)
        E += 2;
      else if (j > s)
        b += 2;
      else if (!g) {
        var x = i + f - B;
        if (x >= 0 && x < o && a[x] !== -1) {
          var L = a[x], S = i + L - x;
          if (k = e - k, L >= k)
            return ai(r, t, L, S);
        }
      }
    }
  }
  return [
    [wt, r],
    [ft, t]
  ];
}
function ai(r, t, e, s) {
  var n = r.substring(0, e), i = t.substring(0, s), o = r.substring(e), a = t.substring(s), c = Cs(n, i), h = Cs(o, a);
  return c.concat(h);
}
function Vr(r, t) {
  if (!r || !t || r.charAt(0) !== t.charAt(0))
    return 0;
  for (var e = 0, s = Math.min(r.length, t.length), n = s, i = 0; e < n; )
    r.substring(i, n) == t.substring(i, n) ? (e = n, i = e) : s = n, n = Math.floor((s - e) / 2 + e);
  return tl(r.charCodeAt(n - 1)) && n--, n;
}
function ci(r, t) {
  var e = r.length, s = t.length;
  if (e == 0 || s == 0)
    return 0;
  e > s ? r = r.substring(e - s) : e < s && (t = t.substring(0, e));
  var n = Math.min(e, s);
  if (r == t)
    return n;
  for (var i = 0, o = 1; ; ) {
    var a = r.substring(n - o), c = t.indexOf(a);
    if (c == -1)
      return i;
    o += c, (c == 0 || r.substring(n - o) == t.substring(0, o)) && (i = o, o++);
  }
}
function bn(r, t) {
  if (!r || !t || r.slice(-1) !== t.slice(-1))
    return 0;
  for (var e = 0, s = Math.min(r.length, t.length), n = s, i = 0; e < n; )
    r.substring(r.length - n, r.length - i) == t.substring(t.length - n, t.length - i) ? (e = n, i = e) : s = n, n = Math.floor((s - e) / 2 + e);
  return el(r.charCodeAt(r.length - n)) && n--, n;
}
function uo(r, t) {
  var e = r.length > t.length ? r : t, s = r.length > t.length ? t : r;
  if (e.length < 4 || s.length * 2 < e.length)
    return null;
  function n(p, b, E) {
    for (var v = p.substring(E, E + Math.floor(p.length / 4)), y = -1, x = "", L, S, T, k; (y = b.indexOf(v, y + 1)) !== -1; ) {
      var B = Vr(
        p.substring(E),
        b.substring(y)
      ), j = bn(
        p.substring(0, E),
        b.substring(0, y)
      );
      x.length < j + B && (x = b.substring(y - j, y) + b.substring(y, y + B), L = p.substring(0, E - j), S = p.substring(E + B), T = b.substring(0, y - j), k = b.substring(y + B));
    }
    return x.length * 2 >= p.length ? [
      L,
      S,
      T,
      k,
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
  var c, h, f, g;
  r.length > t.length ? (c = a[0], h = a[1], f = a[2], g = a[3]) : (f = a[0], g = a[1], c = a[2], h = a[3]);
  var m = a[4];
  return [c, h, f, g, m];
}
function ho(r) {
  for (var t = !1, e = [], s = 0, n = null, i = 0, o = 0, a = 0, c = 0, h = 0; i < r.length; )
    r[i][0] == tt ? (e[s++] = i, o = c, a = h, c = 0, h = 0, n = r[i][1]) : (r[i][0] == ft ? c += r[i][1].length : h += r[i][1].length, n && n.length <= Math.max(o, a) && n.length <= Math.max(c, h) && (r.splice(e[s - 1], 0, [
      wt,
      n
    ]), r[e[s - 1] + 1][0] = ft, s--, s--, i = s > 0 ? e[s - 1] : -1, o = 0, a = 0, c = 0, h = 0, n = null, t = !0)), i++;
  for (t && Kr(r), po(r), i = 1; i < r.length; ) {
    if (r[i - 1][0] == wt && r[i][0] == ft) {
      var f = r[i - 1][1], g = r[i][1], m = ci(f, g), p = ci(g, f);
      m >= p ? (m >= f.length / 2 || m >= g.length / 2) && (r.splice(i, 0, [
        tt,
        g.substring(0, m)
      ]), r[i - 1][1] = f.substring(
        0,
        f.length - m
      ), r[i + 1][1] = g.substring(m), i++) : (p >= f.length / 2 || p >= g.length / 2) && (r.splice(i, 0, [
        tt,
        f.substring(0, p)
      ]), r[i - 1][0] = ft, r[i - 1][1] = g.substring(
        0,
        g.length - p
      ), r[i + 1][0] = wt, r[i + 1][1] = f.substring(p), i++), i++;
    }
    i++;
  }
}
var ui = /[^a-zA-Z0-9]/, hi = /\s/, di = /[\r\n]/, fo = /\n\r?\n$/, mo = /^\r?\n\r?\n/;
function po(r) {
  function t(p, b) {
    if (!p || !b)
      return 6;
    var E = p.charAt(p.length - 1), v = b.charAt(0), y = E.match(ui), x = v.match(ui), L = y && E.match(hi), S = x && v.match(hi), T = L && E.match(di), k = S && v.match(di), B = T && p.match(fo), j = k && b.match(mo);
    return B || j ? 5 : T || k ? 4 : y && !L && S ? 3 : L || S ? 2 : y || x ? 1 : 0;
  }
  for (var e = 1; e < r.length - 1; ) {
    if (r[e - 1][0] == tt && r[e + 1][0] == tt) {
      var s = r[e - 1][1], n = r[e][1], i = r[e + 1][1], o = bn(s, n);
      if (o) {
        var a = n.substring(n.length - o);
        s = s.substring(0, s.length - o), n = a + n.substring(0, n.length - o), i = a + i;
      }
      for (var c = s, h = n, f = i, g = t(s, n) + t(n, i); n.charAt(0) === i.charAt(0); ) {
        s += n.charAt(0), n = n.substring(1) + i.charAt(0), i = i.substring(1);
        var m = t(s, n) + t(n, i);
        m >= g && (g = m, c = s, h = n, f = i);
      }
      r[e - 1][1] != c && (c ? r[e - 1][1] = c : (r.splice(e - 1, 1), e--), r[e][1] = h, f ? r[e + 1][1] = f : (r.splice(e + 1, 1), e--));
    }
    e++;
  }
}
function Kr(r, t) {
  r.push([tt, ""]);
  for (var e = 0, s = 0, n = 0, i = "", o = "", a; e < r.length; ) {
    if (e < r.length - 1 && !r[e][1]) {
      r.splice(e, 1);
      continue;
    }
    switch (r[e][0]) {
      case ft:
        n++, o += r[e][1], e++;
        break;
      case wt:
        s++, i += r[e][1], e++;
        break;
      case tt:
        var c = e - n - s - 1;
        if (t) {
          if (c >= 0 && nl(r[c][1])) {
            var h = r[c][1].slice(-1);
            if (r[c][1] = r[c][1].slice(
              0,
              -1
            ), i = h + i, o = h + o, !r[c][1]) {
              r.splice(c, 1), e--;
              var f = c - 1;
              r[f] && r[f][0] === ft && (n++, o = r[f][1] + o, f--), r[f] && r[f][0] === wt && (s++, i = r[f][1] + i, f--), c = f;
            }
          }
          if (sl(r[e][1])) {
            var h = r[e][1].charAt(0);
            r[e][1] = r[e][1].slice(1), i += h, o += h;
          }
        }
        if (e < r.length - 1 && !r[e][1]) {
          r.splice(e, 1);
          break;
        }
        if (i.length > 0 || o.length > 0) {
          i.length > 0 && o.length > 0 && (a = Vr(o, i), a !== 0 && (c >= 0 ? r[c][1] += o.substring(
            0,
            a
          ) : (r.splice(0, 0, [
            tt,
            o.substring(0, a)
          ]), e++), o = o.substring(a), i = i.substring(a)), a = bn(o, i), a !== 0 && (r[e][1] = o.substring(o.length - a) + r[e][1], o = o.substring(
            0,
            o.length - a
          ), i = i.substring(
            0,
            i.length - a
          )));
          var g = n + s;
          i.length === 0 && o.length === 0 ? (r.splice(e - g, g), e = e - g) : i.length === 0 ? (r.splice(e - g, g, [ft, o]), e = e - g + 1) : o.length === 0 ? (r.splice(e - g, g, [wt, i]), e = e - g + 1) : (r.splice(
            e - g,
            g,
            [wt, i],
            [ft, o]
          ), e = e - g + 2);
        }
        e !== 0 && r[e - 1][0] === tt ? (r[e - 1][1] += r[e][1], r.splice(e, 1)) : e++, n = 0, s = 0, i = "", o = "";
        break;
    }
  }
  r[r.length - 1][1] === "" && r.pop();
  var m = !1;
  for (e = 1; e < r.length - 1; )
    r[e - 1][0] === tt && r[e + 1][0] === tt && (r[e][1].substring(
      r[e][1].length - r[e - 1][1].length
    ) === r[e - 1][1] ? (r[e][1] = r[e - 1][1] + r[e][1].substring(
      0,
      r[e][1].length - r[e - 1][1].length
    ), r[e + 1][1] = r[e - 1][1] + r[e + 1][1], r.splice(e - 1, 1), m = !0) : r[e][1].substring(0, r[e + 1][1].length) == r[e + 1][1] && (r[e - 1][1] += r[e + 1][1], r[e][1] = r[e][1].substring(r[e + 1][1].length) + r[e + 1][1], r.splice(e + 1, 1), m = !0)), e++;
  m && Kr(r, t);
}
function tl(r) {
  return r >= 55296 && r <= 56319;
}
function el(r) {
  return r >= 56320 && r <= 57343;
}
function sl(r) {
  return el(r.charCodeAt(0));
}
function nl(r) {
  return tl(r.charCodeAt(r.length - 1));
}
function go(r) {
  for (var t = [], e = 0; e < r.length; e++)
    r[e][1].length > 0 && t.push(r[e]);
  return t;
}
function ur(r, t, e, s) {
  return nl(r) || sl(s) ? null : go([
    [tt, r],
    [wt, t],
    [ft, e],
    [tt, s]
  ]);
}
function bo(r, t, e) {
  var s = typeof e == "number" ? { index: e, length: 0 } : e.oldRange, n = typeof e == "number" ? null : e.newRange, i = r.length, o = t.length;
  if (s.length === 0 && (n === null || n.length === 0)) {
    var a = s.index, c = r.slice(0, a), h = r.slice(a), f = n ? n.index : null;
    t: {
      var g = a + o - i;
      if (f !== null && f !== g || g < 0 || g > o)
        break t;
      var m = t.slice(0, g), p = t.slice(g);
      if (p !== h)
        break t;
      var b = Math.min(a, g), E = c.slice(0, b), v = m.slice(0, b);
      if (E !== v)
        break t;
      var y = c.slice(b), x = m.slice(b);
      return ur(E, y, x, h);
    }
    t: {
      if (f !== null && f !== a)
        break t;
      var L = a, m = t.slice(0, L), p = t.slice(L);
      if (m !== c)
        break t;
      var S = Math.min(i - L, o - L), T = h.slice(h.length - S), k = p.slice(p.length - S);
      if (T !== k)
        break t;
      var y = h.slice(0, h.length - S), x = p.slice(0, p.length - S);
      return ur(c, y, x, T);
    }
  }
  if (s.length > 0 && n && n.length === 0)
    t: {
      var E = r.slice(0, s.index), T = r.slice(s.index + s.length), b = E.length, S = T.length;
      if (o < b + S)
        break t;
      var v = t.slice(0, b), k = t.slice(o - S);
      if (E !== v || T !== k)
        break t;
      var y = r.slice(b, i - S), x = t.slice(b, o - S);
      return ur(E, y, x, T);
    }
  return null;
}
function yn(r, t, e, s) {
  return Cs(r, t, e, s, !0);
}
yn.INSERT = ft;
yn.DELETE = wt;
yn.EQUAL = tt;
var yo = yn, fn = { exports: {} };
fn.exports;
(function(r, t) {
  var e = 200, s = "__lodash_hash_undefined__", n = 9007199254740991, i = "[object Arguments]", o = "[object Array]", a = "[object Boolean]", c = "[object Date]", h = "[object Error]", f = "[object Function]", g = "[object GeneratorFunction]", m = "[object Map]", p = "[object Number]", b = "[object Object]", E = "[object Promise]", v = "[object RegExp]", y = "[object Set]", x = "[object String]", L = "[object Symbol]", S = "[object WeakMap]", T = "[object ArrayBuffer]", k = "[object DataView]", B = "[object Float32Array]", j = "[object Float64Array]", Y = "[object Int8Array]", st = "[object Int16Array]", mt = "[object Int32Array]", pt = "[object Uint8Array]", Nt = "[object Uint8ClampedArray]", kt = "[object Uint16Array]", $t = "[object Uint32Array]", re = /[\\^$.*+?()[\]{}|]/g, be = /\w*$/, H = /^\[object .+?Constructor\]$/, D = /^(?:0|[1-9]\d*)$/, R = {};
  R[i] = R[o] = R[T] = R[k] = R[a] = R[c] = R[B] = R[j] = R[Y] = R[st] = R[mt] = R[m] = R[p] = R[b] = R[v] = R[y] = R[x] = R[L] = R[pt] = R[Nt] = R[kt] = R[$t] = !0, R[h] = R[f] = R[S] = !1;
  var et = typeof he == "object" && he && he.Object === Object && he, Z = typeof self == "object" && self && self.Object === Object && self, X = et || Z || Function("return this")(), ie = t && !t.nodeType && t, z = ie && !0 && r && !r.nodeType && r, Wt = z && z.exports === ie;
  function ls(l, u) {
    return l.set(u[0], u[1]), l;
  }
  function vt(l, u) {
    return l.add(u), l;
  }
  function Re(l, u) {
    for (var d = -1, w = l ? l.length : 0; ++d < w && u(l[d], d, l) !== !1; )
      ;
    return l;
  }
  function Me(l, u) {
    for (var d = -1, w = u.length, P = l.length; ++d < w; )
      l[P + d] = u[d];
    return l;
  }
  function le(l, u, d, w) {
    var P = -1, _ = l ? l.length : 0;
    for (w && _ && (d = l[++P]); ++P < _; )
      d = u(d, l[P], P, l);
    return d;
  }
  function Be(l, u) {
    for (var d = -1, w = Array(l); ++d < l; )
      w[d] = u(d);
    return w;
  }
  function U(l, u) {
    return l == null ? void 0 : l[u];
  }
  function M(l) {
    var u = !1;
    if (l != null && typeof l.toString != "function")
      try {
        u = !!(l + "");
      } catch (d) {
      }
    return u;
  }
  function K(l) {
    var u = -1, d = Array(l.size);
    return l.forEach(function(w, P) {
      d[++u] = [P, w];
    }), d;
  }
  function nt(l, u) {
    return function(d) {
      return l(u(d));
    };
  }
  function gt(l) {
    var u = -1, d = Array(l.size);
    return l.forEach(function(w) {
      d[++u] = w;
    }), d;
  }
  var ye = Array.prototype, Ot = Function.prototype, ve = Object.prototype, oe = X["__core-js_shared__"], we = function() {
    var l = /[^.]+$/.exec(oe && oe.keys && oe.keys.IE_PROTO || "");
    return l ? "Symbol(src)_1." + l : "";
  }(), Ee = Ot.toString, zt = ve.hasOwnProperty, Ue = ve.toString, An = RegExp(
    "^" + Ee.call(zt).replace(re, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Ne = Wt ? X.Buffer : void 0, De = X.Symbol, os = X.Uint8Array, At = nt(Object.getPrototypeOf, Object), Ds = Object.create, Ps = ve.propertyIsEnumerable, xn = ye.splice, as = Object.getOwnPropertySymbols, Pe = Ne ? Ne.isBuffer : void 0, Hs = nt(Object.keys, Object), He = _t(X, "DataView"), Ae = _t(X, "Map"), It = _t(X, "Promise"), je = _t(X, "Set"), cs = _t(X, "WeakMap"), xe = _t(Object, "create"), us = dt(He), Le = dt(Ae), hs = dt(It), ds = dt(je), fs = dt(cs), ae = De ? De.prototype : void 0, js = ae ? ae.valueOf : void 0;
  function Xt(l) {
    var u = -1, d = l ? l.length : 0;
    for (this.clear(); ++u < d; ) {
      var w = l[u];
      this.set(w[0], w[1]);
    }
  }
  function Ln() {
    this.__data__ = xe ? xe(null) : {};
  }
  function Tn(l) {
    return this.has(l) && delete this.__data__[l];
  }
  function Cn(l) {
    var u = this.__data__;
    if (xe) {
      var d = u[l];
      return d === s ? void 0 : d;
    }
    return zt.call(u, l) ? u[l] : void 0;
  }
  function $s(l) {
    var u = this.__data__;
    return xe ? u[l] !== void 0 : zt.call(u, l);
  }
  function ms(l, u) {
    var d = this.__data__;
    return d[l] = xe && u === void 0 ? s : u, this;
  }
  Xt.prototype.clear = Ln, Xt.prototype.delete = Tn, Xt.prototype.get = Cn, Xt.prototype.has = $s, Xt.prototype.set = ms;
  function rt(l) {
    var u = -1, d = l ? l.length : 0;
    for (this.clear(); ++u < d; ) {
      var w = l[u];
      this.set(w[0], w[1]);
    }
  }
  function qn() {
    this.__data__ = [];
  }
  function Sn(l) {
    var u = this.__data__, d = ze(u, l);
    if (d < 0)
      return !1;
    var w = u.length - 1;
    return d == w ? u.pop() : xn.call(u, d, 1), !0;
  }
  function kn(l) {
    var u = this.__data__, d = ze(u, l);
    return d < 0 ? void 0 : u[d][1];
  }
  function On(l) {
    return ze(this.__data__, l) > -1;
  }
  function In(l, u) {
    var d = this.__data__, w = ze(d, l);
    return w < 0 ? d.push([l, u]) : d[w][1] = u, this;
  }
  rt.prototype.clear = qn, rt.prototype.delete = Sn, rt.prototype.get = kn, rt.prototype.has = On, rt.prototype.set = In;
  function ot(l) {
    var u = -1, d = l ? l.length : 0;
    for (this.clear(); ++u < d; ) {
      var w = l[u];
      this.set(w[0], w[1]);
    }
  }
  function _n() {
    this.__data__ = {
      hash: new Xt(),
      map: new (Ae || rt)(),
      string: new Xt()
    };
  }
  function Rn(l) {
    return Ce(this, l).delete(l);
  }
  function Mn(l) {
    return Ce(this, l).get(l);
  }
  function Bn(l) {
    return Ce(this, l).has(l);
  }
  function Un(l, u) {
    return Ce(this, l).set(l, u), this;
  }
  ot.prototype.clear = _n, ot.prototype.delete = Rn, ot.prototype.get = Mn, ot.prototype.has = Bn, ot.prototype.set = Un;
  function bt(l) {
    this.__data__ = new rt(l);
  }
  function Dn() {
    this.__data__ = new rt();
  }
  function Pn(l) {
    return this.__data__.delete(l);
  }
  function Hn(l) {
    return this.__data__.get(l);
  }
  function jn(l) {
    return this.__data__.has(l);
  }
  function $n(l, u) {
    var d = this.__data__;
    if (d instanceof rt) {
      var w = d.__data__;
      if (!Ae || w.length < e - 1)
        return w.push([l, u]), this;
      d = this.__data__ = new ot(w);
    }
    return d.set(l, u), this;
  }
  bt.prototype.clear = Dn, bt.prototype.delete = Pn, bt.prototype.get = Hn, bt.prototype.has = jn, bt.prototype.set = $n;
  function $e(l, u) {
    var d = ys(l) || Ve(l) ? Be(l.length, String) : [], w = d.length, P = !!w;
    for (var _ in l)
      (u || zt.call(l, _)) && !(P && (_ == "length" || sr(_, w))) && d.push(_);
    return d;
  }
  function zs(l, u, d) {
    var w = l[u];
    (!(zt.call(l, u) && Zs(w, d)) || d === void 0 && !(u in l)) && (l[u] = d);
  }
  function ze(l, u) {
    for (var d = l.length; d--; )
      if (Zs(l[d][0], u))
        return d;
    return -1;
  }
  function Ft(l, u) {
    return l && bs(u, ws(u), l);
  }
  function ps(l, u, d, w, P, _, $) {
    var F;
    if (w && (F = _ ? w(l, P, _, $) : w(l)), F !== void 0)
      return F;
    if (!Kt(l))
      return l;
    var J = ys(l);
    if (J) {
      if (F = tr(l), !u)
        return Yn(l, F);
    } else {
      var G = Jt(l), at = G == f || G == g;
      if (Ws(l))
        return Fe(l, u);
      if (G == b || G == i || at && !_) {
        if (M(l))
          return _ ? l : {};
        if (F = Vt(at ? {} : l), !u)
          return Jn(l, Ft(F, l));
      } else {
        if (!R[G])
          return _ ? l : {};
        F = er(l, G, ps, u);
      }
    }
    $ || ($ = new bt());
    var yt = $.get(l);
    if (yt)
      return yt;
    if ($.set(l, F), !J)
      var Q = d ? Qn(l) : ws(l);
    return Re(Q || l, function(ct, it) {
      Q && (it = ct, ct = l[it]), zs(F, it, ps(ct, u, d, w, it, l, $));
    }), F;
  }
  function zn(l) {
    return Kt(l) ? Ds(l) : {};
  }
  function Fn(l, u, d) {
    var w = u(l);
    return ys(l) ? w : Me(w, d(l));
  }
  function Vn(l) {
    return Ue.call(l);
  }
  function Kn(l) {
    if (!Kt(l) || rr(l))
      return !1;
    var u = vs(l) || M(l) ? An : H;
    return u.test(dt(l));
  }
  function Gn(l) {
    if (!Ks(l))
      return Hs(l);
    var u = [];
    for (var d in Object(l))
      zt.call(l, d) && d != "constructor" && u.push(d);
    return u;
  }
  function Fe(l, u) {
    if (u)
      return l.slice();
    var d = new l.constructor(l.length);
    return l.copy(d), d;
  }
  function gs(l) {
    var u = new l.constructor(l.byteLength);
    return new os(u).set(new os(l)), u;
  }
  function Te(l, u) {
    var d = u ? gs(l.buffer) : l.buffer;
    return new l.constructor(d, l.byteOffset, l.byteLength);
  }
  function Fs(l, u, d) {
    var w = u ? d(K(l), !0) : K(l);
    return le(w, ls, new l.constructor());
  }
  function Vs(l) {
    var u = new l.constructor(l.source, be.exec(l));
    return u.lastIndex = l.lastIndex, u;
  }
  function Zn(l, u, d) {
    var w = u ? d(gt(l), !0) : gt(l);
    return le(w, vt, new l.constructor());
  }
  function Wn(l) {
    return js ? Object(js.call(l)) : {};
  }
  function Xn(l, u) {
    var d = u ? gs(l.buffer) : l.buffer;
    return new l.constructor(d, l.byteOffset, l.length);
  }
  function Yn(l, u) {
    var d = -1, w = l.length;
    for (u || (u = Array(w)); ++d < w; )
      u[d] = l[d];
    return u;
  }
  function bs(l, u, d, w) {
    d || (d = {});
    for (var P = -1, _ = u.length; ++P < _; ) {
      var $ = u[P], F = w ? w(d[$], l[$], $, d, l) : void 0;
      zs(d, $, F === void 0 ? l[$] : F);
    }
    return d;
  }
  function Jn(l, u) {
    return bs(l, Yt(l), u);
  }
  function Qn(l) {
    return Fn(l, ws, Yt);
  }
  function Ce(l, u) {
    var d = l.__data__;
    return nr(u) ? d[typeof u == "string" ? "string" : "hash"] : d.map;
  }
  function _t(l, u) {
    var d = U(l, u);
    return Kn(d) ? d : void 0;
  }
  var Yt = as ? nt(as, Object) : lr, Jt = Vn;
  (He && Jt(new He(new ArrayBuffer(1))) != k || Ae && Jt(new Ae()) != m || It && Jt(It.resolve()) != E || je && Jt(new je()) != y || cs && Jt(new cs()) != S) && (Jt = function(l) {
    var u = Ue.call(l), d = u == b ? l.constructor : void 0, w = d ? dt(d) : void 0;
    if (w)
      switch (w) {
        case us:
          return k;
        case Le:
          return m;
        case hs:
          return E;
        case ds:
          return y;
        case fs:
          return S;
      }
    return u;
  });
  function tr(l) {
    var u = l.length, d = l.constructor(u);
    return u && typeof l[0] == "string" && zt.call(l, "index") && (d.index = l.index, d.input = l.input), d;
  }
  function Vt(l) {
    return typeof l.constructor == "function" && !Ks(l) ? zn(At(l)) : {};
  }
  function er(l, u, d, w) {
    var P = l.constructor;
    switch (u) {
      case T:
        return gs(l);
      case a:
      case c:
        return new P(+l);
      case k:
        return Te(l, w);
      case B:
      case j:
      case Y:
      case st:
      case mt:
      case pt:
      case Nt:
      case kt:
      case $t:
        return Xn(l, w);
      case m:
        return Fs(l, w, d);
      case p:
      case x:
        return new P(l);
      case v:
        return Vs(l);
      case y:
        return Zn(l, w, d);
      case L:
        return Wn(l);
    }
  }
  function sr(l, u) {
    return u = u == null ? n : u, !!u && (typeof l == "number" || D.test(l)) && l > -1 && l % 1 == 0 && l < u;
  }
  function nr(l) {
    var u = typeof l;
    return u == "string" || u == "number" || u == "symbol" || u == "boolean" ? l !== "__proto__" : l === null;
  }
  function rr(l) {
    return !!we && we in l;
  }
  function Ks(l) {
    var u = l && l.constructor, d = typeof u == "function" && u.prototype || ve;
    return l === d;
  }
  function dt(l) {
    if (l != null) {
      try {
        return Ee.call(l);
      } catch (u) {
      }
      try {
        return l + "";
      } catch (u) {
      }
    }
    return "";
  }
  function Gs(l) {
    return ps(l, !0, !0);
  }
  function Zs(l, u) {
    return l === u || l !== l && u !== u;
  }
  function Ve(l) {
    return ir(l) && zt.call(l, "callee") && (!Ps.call(l, "callee") || Ue.call(l) == i);
  }
  var ys = Array.isArray;
  function Ke(l) {
    return l != null && Xs(l.length) && !vs(l);
  }
  function ir(l) {
    return Ys(l) && Ke(l);
  }
  var Ws = Pe || or;
  function vs(l) {
    var u = Kt(l) ? Ue.call(l) : "";
    return u == f || u == g;
  }
  function Xs(l) {
    return typeof l == "number" && l > -1 && l % 1 == 0 && l <= n;
  }
  function Kt(l) {
    var u = typeof l;
    return !!l && (u == "object" || u == "function");
  }
  function Ys(l) {
    return !!l && typeof l == "object";
  }
  function ws(l) {
    return Ke(l) ? $e(l) : Gn(l);
  }
  function lr() {
    return [];
  }
  function or() {
    return !1;
  }
  r.exports = Gs;
})(fn, fn.exports);
var rl = fn.exports, mn = { exports: {} };
mn.exports;
(function(r, t) {
  var e = 200, s = "__lodash_hash_undefined__", n = 1, i = 2, o = 9007199254740991, a = "[object Arguments]", c = "[object Array]", h = "[object AsyncFunction]", f = "[object Boolean]", g = "[object Date]", m = "[object Error]", p = "[object Function]", b = "[object GeneratorFunction]", E = "[object Map]", v = "[object Number]", y = "[object Null]", x = "[object Object]", L = "[object Promise]", S = "[object Proxy]", T = "[object RegExp]", k = "[object Set]", B = "[object String]", j = "[object Symbol]", Y = "[object Undefined]", st = "[object WeakMap]", mt = "[object ArrayBuffer]", pt = "[object DataView]", Nt = "[object Float32Array]", kt = "[object Float64Array]", $t = "[object Int8Array]", re = "[object Int16Array]", be = "[object Int32Array]", H = "[object Uint8Array]", D = "[object Uint8ClampedArray]", R = "[object Uint16Array]", et = "[object Uint32Array]", Z = /[\\^$.*+?()[\]{}|]/g, X = /^\[object .+?Constructor\]$/, ie = /^(?:0|[1-9]\d*)$/, z = {};
  z[Nt] = z[kt] = z[$t] = z[re] = z[be] = z[H] = z[D] = z[R] = z[et] = !0, z[a] = z[c] = z[mt] = z[f] = z[pt] = z[g] = z[m] = z[p] = z[E] = z[v] = z[x] = z[T] = z[k] = z[B] = z[st] = !1;
  var Wt = typeof he == "object" && he && he.Object === Object && he, ls = typeof self == "object" && self && self.Object === Object && self, vt = Wt || ls || Function("return this")(), Re = t && !t.nodeType && t, Me = Re && !0 && r && !r.nodeType && r, le = Me && Me.exports === Re, Be = le && Wt.process, U = function() {
    try {
      return Be && Be.binding && Be.binding("util");
    } catch (l) {
    }
  }(), M = U && U.isTypedArray;
  function K(l, u) {
    for (var d = -1, w = l == null ? 0 : l.length, P = 0, _ = []; ++d < w; ) {
      var $ = l[d];
      u($, d, l) && (_[P++] = $);
    }
    return _;
  }
  function nt(l, u) {
    for (var d = -1, w = u.length, P = l.length; ++d < w; )
      l[P + d] = u[d];
    return l;
  }
  function gt(l, u) {
    for (var d = -1, w = l == null ? 0 : l.length; ++d < w; )
      if (u(l[d], d, l))
        return !0;
    return !1;
  }
  function ye(l, u) {
    for (var d = -1, w = Array(l); ++d < l; )
      w[d] = u(d);
    return w;
  }
  function Ot(l) {
    return function(u) {
      return l(u);
    };
  }
  function ve(l, u) {
    return l.has(u);
  }
  function oe(l, u) {
    return l == null ? void 0 : l[u];
  }
  function we(l) {
    var u = -1, d = Array(l.size);
    return l.forEach(function(w, P) {
      d[++u] = [P, w];
    }), d;
  }
  function Ee(l, u) {
    return function(d) {
      return l(u(d));
    };
  }
  function zt(l) {
    var u = -1, d = Array(l.size);
    return l.forEach(function(w) {
      d[++u] = w;
    }), d;
  }
  var Ue = Array.prototype, An = Function.prototype, Ne = Object.prototype, De = vt["__core-js_shared__"], os = An.toString, At = Ne.hasOwnProperty, Ds = function() {
    var l = /[^.]+$/.exec(De && De.keys && De.keys.IE_PROTO || "");
    return l ? "Symbol(src)_1." + l : "";
  }(), Ps = Ne.toString, xn = RegExp(
    "^" + os.call(At).replace(Z, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), as = le ? vt.Buffer : void 0, Pe = vt.Symbol, Hs = vt.Uint8Array, He = Ne.propertyIsEnumerable, Ae = Ue.splice, It = Pe ? Pe.toStringTag : void 0, je = Object.getOwnPropertySymbols, cs = as ? as.isBuffer : void 0, xe = Ee(Object.keys, Object), us = Yt(vt, "DataView"), Le = Yt(vt, "Map"), hs = Yt(vt, "Promise"), ds = Yt(vt, "Set"), fs = Yt(vt, "WeakMap"), ae = Yt(Object, "create"), js = dt(us), Xt = dt(Le), Ln = dt(hs), Tn = dt(ds), Cn = dt(fs), $s = Pe ? Pe.prototype : void 0, ms = $s ? $s.valueOf : void 0;
  function rt(l) {
    var u = -1, d = l == null ? 0 : l.length;
    for (this.clear(); ++u < d; ) {
      var w = l[u];
      this.set(w[0], w[1]);
    }
  }
  function qn() {
    this.__data__ = ae ? ae(null) : {}, this.size = 0;
  }
  function Sn(l) {
    var u = this.has(l) && delete this.__data__[l];
    return this.size -= u ? 1 : 0, u;
  }
  function kn(l) {
    var u = this.__data__;
    if (ae) {
      var d = u[l];
      return d === s ? void 0 : d;
    }
    return At.call(u, l) ? u[l] : void 0;
  }
  function On(l) {
    var u = this.__data__;
    return ae ? u[l] !== void 0 : At.call(u, l);
  }
  function In(l, u) {
    var d = this.__data__;
    return this.size += this.has(l) ? 0 : 1, d[l] = ae && u === void 0 ? s : u, this;
  }
  rt.prototype.clear = qn, rt.prototype.delete = Sn, rt.prototype.get = kn, rt.prototype.has = On, rt.prototype.set = In;
  function ot(l) {
    var u = -1, d = l == null ? 0 : l.length;
    for (this.clear(); ++u < d; ) {
      var w = l[u];
      this.set(w[0], w[1]);
    }
  }
  function _n() {
    this.__data__ = [], this.size = 0;
  }
  function Rn(l) {
    var u = this.__data__, d = Fe(u, l);
    if (d < 0)
      return !1;
    var w = u.length - 1;
    return d == w ? u.pop() : Ae.call(u, d, 1), --this.size, !0;
  }
  function Mn(l) {
    var u = this.__data__, d = Fe(u, l);
    return d < 0 ? void 0 : u[d][1];
  }
  function Bn(l) {
    return Fe(this.__data__, l) > -1;
  }
  function Un(l, u) {
    var d = this.__data__, w = Fe(d, l);
    return w < 0 ? (++this.size, d.push([l, u])) : d[w][1] = u, this;
  }
  ot.prototype.clear = _n, ot.prototype.delete = Rn, ot.prototype.get = Mn, ot.prototype.has = Bn, ot.prototype.set = Un;
  function bt(l) {
    var u = -1, d = l == null ? 0 : l.length;
    for (this.clear(); ++u < d; ) {
      var w = l[u];
      this.set(w[0], w[1]);
    }
  }
  function Dn() {
    this.size = 0, this.__data__ = {
      hash: new rt(),
      map: new (Le || ot)(),
      string: new rt()
    };
  }
  function Pn(l) {
    var u = _t(this, l).delete(l);
    return this.size -= u ? 1 : 0, u;
  }
  function Hn(l) {
    return _t(this, l).get(l);
  }
  function jn(l) {
    return _t(this, l).has(l);
  }
  function $n(l, u) {
    var d = _t(this, l), w = d.size;
    return d.set(l, u), this.size += d.size == w ? 0 : 1, this;
  }
  bt.prototype.clear = Dn, bt.prototype.delete = Pn, bt.prototype.get = Hn, bt.prototype.has = jn, bt.prototype.set = $n;
  function $e(l) {
    var u = -1, d = l == null ? 0 : l.length;
    for (this.__data__ = new bt(); ++u < d; )
      this.add(l[u]);
  }
  function zs(l) {
    return this.__data__.set(l, s), this;
  }
  function ze(l) {
    return this.__data__.has(l);
  }
  $e.prototype.add = $e.prototype.push = zs, $e.prototype.has = ze;
  function Ft(l) {
    var u = this.__data__ = new ot(l);
    this.size = u.size;
  }
  function ps() {
    this.__data__ = new ot(), this.size = 0;
  }
  function zn(l) {
    var u = this.__data__, d = u.delete(l);
    return this.size = u.size, d;
  }
  function Fn(l) {
    return this.__data__.get(l);
  }
  function Vn(l) {
    return this.__data__.has(l);
  }
  function Kn(l, u) {
    var d = this.__data__;
    if (d instanceof ot) {
      var w = d.__data__;
      if (!Le || w.length < e - 1)
        return w.push([l, u]), this.size = ++d.size, this;
      d = this.__data__ = new bt(w);
    }
    return d.set(l, u), this.size = d.size, this;
  }
  Ft.prototype.clear = ps, Ft.prototype.delete = zn, Ft.prototype.get = Fn, Ft.prototype.has = Vn, Ft.prototype.set = Kn;
  function Gn(l, u) {
    var d = Ve(l), w = !d && Zs(l), P = !d && !w && Ke(l), _ = !d && !w && !P && Ys(l), $ = d || w || P || _, F = $ ? ye(l.length, String) : [], J = F.length;
    for (var G in l)
      (u || At.call(l, G)) && !($ && // Safari 9 has enumerable `arguments.length` in strict mode.
      (G == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      P && (G == "offset" || G == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      _ && (G == "buffer" || G == "byteLength" || G == "byteOffset") || // Skip index properties.
      er(G, J))) && F.push(G);
    return F;
  }
  function Fe(l, u) {
    for (var d = l.length; d--; )
      if (Gs(l[d][0], u))
        return d;
    return -1;
  }
  function gs(l, u, d) {
    var w = u(l);
    return Ve(l) ? w : nt(w, d(l));
  }
  function Te(l) {
    return l == null ? l === void 0 ? Y : y : It && It in Object(l) ? Jt(l) : Ks(l);
  }
  function Fs(l) {
    return Kt(l) && Te(l) == a;
  }
  function Vs(l, u, d, w, P) {
    return l === u ? !0 : l == null || u == null || !Kt(l) && !Kt(u) ? l !== l && u !== u : Zn(l, u, d, w, Vs, P);
  }
  function Zn(l, u, d, w, P, _) {
    var $ = Ve(l), F = Ve(u), J = $ ? c : Vt(l), G = F ? c : Vt(u);
    J = J == a ? x : J, G = G == a ? x : G;
    var at = J == x, yt = G == x, Q = J == G;
    if (Q && Ke(l)) {
      if (!Ke(u))
        return !1;
      $ = !0, at = !1;
    }
    if (Q && !at)
      return _ || (_ = new Ft()), $ || Ys(l) ? bs(l, u, d, w, P, _) : Jn(l, u, J, d, w, P, _);
    if (!(d & n)) {
      var ct = at && At.call(l, "__wrapped__"), it = yt && At.call(u, "__wrapped__");
      if (ct || it) {
        var ce = ct ? l.value() : l, Qt = it ? u.value() : u;
        return _ || (_ = new Ft()), P(ce, Qt, d, w, _);
      }
    }
    return Q ? (_ || (_ = new Ft()), Qn(l, u, d, w, P, _)) : !1;
  }
  function Wn(l) {
    if (!Xs(l) || nr(l))
      return !1;
    var u = Ws(l) ? xn : X;
    return u.test(dt(l));
  }
  function Xn(l) {
    return Kt(l) && vs(l.length) && !!z[Te(l)];
  }
  function Yn(l) {
    if (!rr(l))
      return xe(l);
    var u = [];
    for (var d in Object(l))
      At.call(l, d) && d != "constructor" && u.push(d);
    return u;
  }
  function bs(l, u, d, w, P, _) {
    var $ = d & n, F = l.length, J = u.length;
    if (F != J && !($ && J > F))
      return !1;
    var G = _.get(l);
    if (G && _.get(u))
      return G == u;
    var at = -1, yt = !0, Q = d & i ? new $e() : void 0;
    for (_.set(l, u), _.set(u, l); ++at < F; ) {
      var ct = l[at], it = u[at];
      if (w)
        var ce = $ ? w(it, ct, at, u, l, _) : w(ct, it, at, l, u, _);
      if (ce !== void 0) {
        if (ce)
          continue;
        yt = !1;
        break;
      }
      if (Q) {
        if (!gt(u, function(Qt, qe) {
          if (!ve(Q, qe) && (ct === Qt || P(ct, Qt, d, w, _)))
            return Q.push(qe);
        })) {
          yt = !1;
          break;
        }
      } else if (!(ct === it || P(ct, it, d, w, _))) {
        yt = !1;
        break;
      }
    }
    return _.delete(l), _.delete(u), yt;
  }
  function Jn(l, u, d, w, P, _, $) {
    switch (d) {
      case pt:
        if (l.byteLength != u.byteLength || l.byteOffset != u.byteOffset)
          return !1;
        l = l.buffer, u = u.buffer;
      case mt:
        return !(l.byteLength != u.byteLength || !_(new Hs(l), new Hs(u)));
      case f:
      case g:
      case v:
        return Gs(+l, +u);
      case m:
        return l.name == u.name && l.message == u.message;
      case T:
      case B:
        return l == u + "";
      case E:
        var F = we;
      case k:
        var J = w & n;
        if (F || (F = zt), l.size != u.size && !J)
          return !1;
        var G = $.get(l);
        if (G)
          return G == u;
        w |= i, $.set(l, u);
        var at = bs(F(l), F(u), w, P, _, $);
        return $.delete(l), at;
      case j:
        if (ms)
          return ms.call(l) == ms.call(u);
    }
    return !1;
  }
  function Qn(l, u, d, w, P, _) {
    var $ = d & n, F = Ce(l), J = F.length, G = Ce(u), at = G.length;
    if (J != at && !$)
      return !1;
    for (var yt = J; yt--; ) {
      var Q = F[yt];
      if (!($ ? Q in u : At.call(u, Q)))
        return !1;
    }
    var ct = _.get(l);
    if (ct && _.get(u))
      return ct == u;
    var it = !0;
    _.set(l, u), _.set(u, l);
    for (var ce = $; ++yt < J; ) {
      Q = F[yt];
      var Qt = l[Q], qe = u[Q];
      if (w)
        var ii = $ ? w(qe, Qt, Q, u, l, _) : w(Qt, qe, Q, l, u, _);
      if (!(ii === void 0 ? Qt === qe || P(Qt, qe, d, w, _) : ii)) {
        it = !1;
        break;
      }
      ce || (ce = Q == "constructor");
    }
    if (it && !ce) {
      var Js = l.constructor, Qs = u.constructor;
      Js != Qs && "constructor" in l && "constructor" in u && !(typeof Js == "function" && Js instanceof Js && typeof Qs == "function" && Qs instanceof Qs) && (it = !1);
    }
    return _.delete(l), _.delete(u), it;
  }
  function Ce(l) {
    return gs(l, ws, tr);
  }
  function _t(l, u) {
    var d = l.__data__;
    return sr(u) ? d[typeof u == "string" ? "string" : "hash"] : d.map;
  }
  function Yt(l, u) {
    var d = oe(l, u);
    return Wn(d) ? d : void 0;
  }
  function Jt(l) {
    var u = At.call(l, It), d = l[It];
    try {
      l[It] = void 0;
      var w = !0;
    } catch (_) {
    }
    var P = Ps.call(l);
    return w && (u ? l[It] = d : delete l[It]), P;
  }
  var tr = je ? function(l) {
    return l == null ? [] : (l = Object(l), K(je(l), function(u) {
      return He.call(l, u);
    }));
  } : lr, Vt = Te;
  (us && Vt(new us(new ArrayBuffer(1))) != pt || Le && Vt(new Le()) != E || hs && Vt(hs.resolve()) != L || ds && Vt(new ds()) != k || fs && Vt(new fs()) != st) && (Vt = function(l) {
    var u = Te(l), d = u == x ? l.constructor : void 0, w = d ? dt(d) : "";
    if (w)
      switch (w) {
        case js:
          return pt;
        case Xt:
          return E;
        case Ln:
          return L;
        case Tn:
          return k;
        case Cn:
          return st;
      }
    return u;
  });
  function er(l, u) {
    return u = u == null ? o : u, !!u && (typeof l == "number" || ie.test(l)) && l > -1 && l % 1 == 0 && l < u;
  }
  function sr(l) {
    var u = typeof l;
    return u == "string" || u == "number" || u == "symbol" || u == "boolean" ? l !== "__proto__" : l === null;
  }
  function nr(l) {
    return !!Ds && Ds in l;
  }
  function rr(l) {
    var u = l && l.constructor, d = typeof u == "function" && u.prototype || Ne;
    return l === d;
  }
  function Ks(l) {
    return Ps.call(l);
  }
  function dt(l) {
    if (l != null) {
      try {
        return os.call(l);
      } catch (u) {
      }
      try {
        return l + "";
      } catch (u) {
      }
    }
    return "";
  }
  function Gs(l, u) {
    return l === u || l !== l && u !== u;
  }
  var Zs = Fs(function() {
    return arguments;
  }()) ? Fs : function(l) {
    return Kt(l) && At.call(l, "callee") && !He.call(l, "callee");
  }, Ve = Array.isArray;
  function ys(l) {
    return l != null && vs(l.length) && !Ws(l);
  }
  var Ke = cs || or;
  function ir(l, u) {
    return Vs(l, u);
  }
  function Ws(l) {
    if (!Xs(l))
      return !1;
    var u = Te(l);
    return u == p || u == b || u == h || u == S;
  }
  function vs(l) {
    return typeof l == "number" && l > -1 && l % 1 == 0 && l <= o;
  }
  function Xs(l) {
    var u = typeof l;
    return l != null && (u == "object" || u == "function");
  }
  function Kt(l) {
    return l != null && typeof l == "object";
  }
  var Ys = M ? Ot(M) : Xn;
  function ws(l) {
    return ys(l) ? Gn(l) : Yn(l);
  }
  function lr() {
    return [];
  }
  function or() {
    return !1;
  }
  r.exports = ir;
})(mn, mn.exports);
var il = mn.exports, Gr = {};
Object.defineProperty(Gr, "__esModule", { value: !0 });
const vo = rl, wo = il;
var Tr;
(function(r) {
  function t(i = {}, o = {}, a = !1) {
    typeof i != "object" && (i = {}), typeof o != "object" && (o = {});
    let c = vo(o);
    a || (c = Object.keys(c).reduce((h, f) => (c[f] != null && (h[f] = c[f]), h), {}));
    for (const h in i)
      i[h] !== void 0 && o[h] === void 0 && (c[h] = i[h]);
    return Object.keys(c).length > 0 ? c : void 0;
  }
  r.compose = t;
  function e(i = {}, o = {}) {
    typeof i != "object" && (i = {}), typeof o != "object" && (o = {});
    const a = Object.keys(i).concat(Object.keys(o)).reduce((c, h) => (wo(i[h], o[h]) || (c[h] = o[h] === void 0 ? null : o[h]), c), {});
    return Object.keys(a).length > 0 ? a : void 0;
  }
  r.diff = e;
  function s(i = {}, o = {}) {
    i = i || {};
    const a = Object.keys(o).reduce((c, h) => (o[h] !== i[h] && i[h] !== void 0 && (c[h] = o[h]), c), {});
    return Object.keys(i).reduce((c, h) => (i[h] !== o[h] && o[h] === void 0 && (c[h] = null), c), a);
  }
  r.invert = s;
  function n(i, o, a = !1) {
    if (typeof i != "object")
      return o;
    if (typeof o != "object")
      return;
    if (!a)
      return o;
    const c = Object.keys(o).reduce((h, f) => (i[f] === void 0 && (h[f] = o[f]), h), {});
    return Object.keys(c).length > 0 ? c : void 0;
  }
  r.transform = n;
})(Tr || (Tr = {}));
Gr.default = Tr;
var vn = {};
Object.defineProperty(vn, "__esModule", { value: !0 });
var Cr;
(function(r) {
  function t(e) {
    return typeof e.delete == "number" ? e.delete : typeof e.retain == "number" ? e.retain : typeof e.retain == "object" && e.retain !== null ? 1 : typeof e.insert == "string" ? e.insert.length : 1;
  }
  r.length = t;
})(Cr || (Cr = {}));
vn.default = Cr;
var Zr = {};
Object.defineProperty(Zr, "__esModule", { value: !0 });
const fi = vn;
class Eo {
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
      const s = this.offset, n = fi.default.length(e);
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
    return this.ops[this.index] ? fi.default.length(this.ops[this.index]) - this.offset : 1 / 0;
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
Zr.default = Eo;
(function(r, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.AttributeMap = t.OpIterator = t.Op = void 0;
  const e = yo, s = rl, n = il, i = Gr;
  t.AttributeMap = i.default;
  const o = vn;
  t.Op = o.default;
  const a = Zr;
  t.OpIterator = a.default;
  const c = String.fromCharCode(0), h = (g, m) => {
    if (typeof g != "object" || g === null)
      throw new Error("cannot retain a ".concat(typeof g));
    if (typeof m != "object" || m === null)
      throw new Error("cannot retain a ".concat(typeof m));
    const p = Object.keys(g)[0];
    if (!p || p !== Object.keys(m)[0])
      throw new Error("embed types not matched: ".concat(p, " != ").concat(Object.keys(m)[0]));
    return [p, g[p], m[p]];
  };
  class f {
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
      const b = {};
      return typeof m == "string" && m.length === 0 ? this : (b.insert = m, p != null && typeof p == "object" && Object.keys(p).length > 0 && (b.attributes = p), this.push(b));
    }
    delete(m) {
      return m <= 0 ? this : this.push({ delete: m });
    }
    retain(m, p) {
      if (typeof m == "number" && m <= 0)
        return this;
      const b = { retain: m };
      return p != null && typeof p == "object" && Object.keys(p).length > 0 && (b.attributes = p), this.push(b);
    }
    push(m) {
      let p = this.ops.length, b = this.ops[p - 1];
      if (m = s(m), typeof b == "object") {
        if (typeof m.delete == "number" && typeof b.delete == "number")
          return this.ops[p - 1] = { delete: b.delete + m.delete }, this;
        if (typeof b.delete == "number" && m.insert != null && (p -= 1, b = this.ops[p - 1], typeof b != "object"))
          return this.ops.unshift(m), this;
        if (n(m.attributes, b.attributes)) {
          if (typeof m.insert == "string" && typeof b.insert == "string")
            return this.ops[p - 1] = { insert: b.insert + m.insert }, typeof m.attributes == "object" && (this.ops[p - 1].attributes = m.attributes), this;
          if (typeof m.retain == "number" && typeof b.retain == "number")
            return this.ops[p - 1] = { retain: b.retain + m.retain }, typeof m.attributes == "object" && (this.ops[p - 1].attributes = m.attributes), this;
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
      const p = [], b = [];
      return this.forEach((E) => {
        (m(E) ? p : b).push(E);
      }), [p, b];
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
      const b = [], E = new a.default(this.ops);
      let v = 0;
      for (; v < p && E.hasNext(); ) {
        let y;
        v < m ? y = E.next(m - v) : (y = E.next(p - v), b.push(y)), v += o.default.length(y);
      }
      return new f(b);
    }
    compose(m) {
      const p = new a.default(this.ops), b = new a.default(m.ops), E = [], v = b.peek();
      if (v != null && typeof v.retain == "number" && v.attributes == null) {
        let x = v.retain;
        for (; p.peekType() === "insert" && p.peekLength() <= x; )
          x -= p.peekLength(), E.push(p.next());
        v.retain - x > 0 && b.next(v.retain - x);
      }
      const y = new f(E);
      for (; p.hasNext() || b.hasNext(); )
        if (b.peekType() === "insert")
          y.push(b.next());
        else if (p.peekType() === "delete")
          y.push(p.next());
        else {
          const x = Math.min(p.peekLength(), b.peekLength()), L = p.next(x), S = b.next(x);
          if (S.retain) {
            const T = {};
            if (typeof L.retain == "number")
              T.retain = typeof S.retain == "number" ? x : S.retain;
            else if (typeof S.retain == "number")
              L.retain == null ? T.insert = L.insert : T.retain = L.retain;
            else {
              const B = L.retain == null ? "insert" : "retain", [j, Y, st] = h(L[B], S.retain), mt = f.getHandler(j);
              T[B] = {
                [j]: mt.compose(Y, st, B === "retain")
              };
            }
            const k = i.default.compose(L.attributes, S.attributes, typeof L.retain == "number");
            if (k && (T.attributes = k), y.push(T), !b.hasNext() && n(y.ops[y.ops.length - 1], T)) {
              const B = new f(p.rest());
              return y.concat(B).chop();
            }
          } else
            typeof S.delete == "number" && (typeof L.retain == "number" || typeof L.retain == "object" && L.retain !== null) && y.push(S);
        }
      return y.chop();
    }
    concat(m) {
      const p = new f(this.ops.slice());
      return m.ops.length > 0 && (p.push(m.ops[0]), p.ops = p.ops.concat(m.ops.slice(1))), p;
    }
    diff(m, p) {
      if (this.ops === m.ops)
        return new f();
      const b = [this, m].map((L) => L.map((S) => {
        if (S.insert != null)
          return typeof S.insert == "string" ? S.insert : c;
        const T = L === m ? "on" : "with";
        throw new Error("diff() called " + T + " non-document");
      }).join("")), E = new f(), v = e(b[0], b[1], p, !0), y = new a.default(this.ops), x = new a.default(m.ops);
      return v.forEach((L) => {
        let S = L[1].length;
        for (; S > 0; ) {
          let T = 0;
          switch (L[0]) {
            case e.INSERT:
              T = Math.min(x.peekLength(), S), E.push(x.next(T));
              break;
            case e.DELETE:
              T = Math.min(S, y.peekLength()), y.next(T), E.delete(T);
              break;
            case e.EQUAL:
              T = Math.min(y.peekLength(), x.peekLength(), S);
              const k = y.next(T), B = x.next(T);
              n(k.insert, B.insert) ? E.retain(T, i.default.diff(k.attributes, B.attributes)) : E.push(B).delete(T);
              break;
          }
          S -= T;
        }
      }), E.chop();
    }
    eachLine(m, p = "\n") {
      const b = new a.default(this.ops);
      let E = new f(), v = 0;
      for (; b.hasNext(); ) {
        if (b.peekType() !== "insert")
          return;
        const y = b.peek(), x = o.default.length(y) - b.peekLength(), L = typeof y.insert == "string" ? y.insert.indexOf(p, x) - x : -1;
        if (L < 0)
          E.push(b.next());
        else if (L > 0)
          E.push(b.next(L));
        else {
          if (m(E, b.next(1).attributes || {}, v) === !1)
            return;
          v += 1, E = new f();
        }
      }
      E.length() > 0 && m(E, {}, v);
    }
    invert(m) {
      const p = new f();
      return this.reduce((b, E) => {
        if (E.insert)
          p.delete(o.default.length(E));
        else {
          if (typeof E.retain == "number" && E.attributes == null)
            return p.retain(E.retain), b + E.retain;
          if (E.delete || typeof E.retain == "number") {
            const v = E.delete || E.retain;
            return m.slice(b, b + v).forEach((x) => {
              E.delete ? p.push(x) : E.retain && E.attributes && p.retain(o.default.length(x), i.default.invert(E.attributes, x.attributes));
            }), b + v;
          } else if (typeof E.retain == "object" && E.retain !== null) {
            const v = m.slice(b, b + 1), y = new a.default(v.ops).next(), [x, L, S] = h(E.retain, y.insert), T = f.getHandler(x);
            return p.retain({ [x]: T.invert(L, S) }, i.default.invert(E.attributes, y.attributes)), b + 1;
          }
        }
        return b;
      }, 0), p.chop();
    }
    transform(m, p = !1) {
      if (p = !!p, typeof m == "number")
        return this.transformPosition(m, p);
      const b = m, E = new a.default(this.ops), v = new a.default(b.ops), y = new f();
      for (; E.hasNext() || v.hasNext(); )
        if (E.peekType() === "insert" && (p || v.peekType() !== "insert"))
          y.retain(o.default.length(E.next()));
        else if (v.peekType() === "insert")
          y.push(v.next());
        else {
          const x = Math.min(E.peekLength(), v.peekLength()), L = E.next(x), S = v.next(x);
          if (L.delete)
            continue;
          if (S.delete)
            y.push(S);
          else {
            const T = L.retain, k = S.retain;
            let B = typeof k == "object" && k !== null ? k : x;
            if (typeof T == "object" && T !== null && typeof k == "object" && k !== null) {
              const j = Object.keys(T)[0];
              if (j === Object.keys(k)[0]) {
                const Y = f.getHandler(j);
                Y && (B = {
                  [j]: Y.transform(T[j], k[j], p)
                });
              }
            }
            y.retain(B, i.default.transform(L.attributes, S.attributes, p));
          }
        }
      return y.chop();
    }
    transformPosition(m, p = !1) {
      p = !!p;
      const b = new a.default(this.ops);
      let E = 0;
      for (; b.hasNext() && E <= m; ) {
        const v = b.peekLength(), y = b.peekType();
        if (b.next(), y === "delete") {
          m -= Math.min(v, m - E);
          continue;
        } else
          y === "insert" && (E < m || !p) && (m += v);
        E += v;
      }
      return m;
    }
  }
  f.Op = o.default, f.OpIterator = a.default, f.AttributeMap = i.default, f.handlers = {}, t.default = f, r.exports = f, r.exports.default = f;
})(Lr, Lr.exports);
var St = Lr.exports;
const O = /* @__PURE__ */ Qi(St);
class Ht extends Et {
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
Ht.blotName = "break";
Ht.tagName = "BR";
let Dt = class extends dn {
};
function wn(r) {
  return r.replace(/[&<>"']/g, (t) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[t]);
}
var Ct;
let ge = (Ct = class extends zr {
  static compare(t, e) {
    const s = Ct.order.indexOf(t), n = Ct.order.indexOf(e);
    return s >= 0 || n >= 0 ? s - n : t === e ? 0 : t < e ? -1 : 1;
  }
  formatAt(t, e, s, n) {
    if (Ct.compare(this.statics.blotName, s) < 0 && this.scroll.query(s, I.BLOT)) {
      const i = this.isolate(t, e);
      n && i.wrap(s, n);
    } else
      super.formatAt(t, e, s, n);
  }
  optimize(t) {
    if (super.optimize(t), this.parent instanceof Ct && Ct.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
      const e = this.parent.isolate(this.offset(), this.length());
      this.moveChildren(e), e.wrap(this);
    }
  }
}, N(Ct, "allowedChildren", [Ct, Ht, Et, Dt]), // Lower index means deeper in the DOM tree, since not found (-1) is for embeds
N(Ct, "order", [
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
]), Ct);
const mi = 1;
class lt extends Ts {
  constructor() {
    super(...arguments);
    N(this, "cache", {});
  }
  delta() {
    return this.cache.delta == null && (this.cache.delta = ll(this)), this.cache.delta;
  }
  deleteAt(e, s) {
    super.deleteAt(e, s), this.cache = {};
  }
  formatAt(e, s, n, i) {
    s <= 0 || (this.scroll.query(n, I.BLOCK) ? e + s === this.length() && this.format(n, i) : super.formatAt(e, Math.min(s, this.length() - e - 1), n, i), this.cache = {});
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
    i.reduce((c, h) => (a = a.split(c, !0), a.insertAt(0, h), h.length), e + o.length);
  }
  insertBefore(e, s) {
    const {
      head: n
    } = this.children;
    super.insertBefore(e, s), n instanceof Ht && n.remove(), this.cache = {};
  }
  length() {
    return this.cache.length == null && (this.cache.length = super.length() + mi), this.cache.length;
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
    if (s && (e === 0 || e >= this.length() - mi)) {
      const i = this.clone();
      return e === 0 ? (this.parent.insertBefore(i, this), this) : (this.parent.insertBefore(i, this.next), i);
    }
    const n = super.split(e, s);
    return this.cache = {}, n;
  }
}
lt.blotName = "block";
lt.tagName = "P";
lt.defaultChild = Ht;
lt.allowedChildren = [Ht, ge, Et, Dt];
class qt extends Et {
  attach() {
    super.attach(), this.attributes = new pn(this.domNode);
  }
  delta() {
    return new O().insert(this.value(), {
      ...this.formats(),
      ...this.attributes.values()
    });
  }
  format(t, e) {
    const s = this.scroll.query(t, I.BLOCK_ATTRIBUTE);
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
    const n = e.split("\n"), i = n.pop(), o = n.map((c) => {
      const h = this.scroll.create(lt.blotName);
      return h.insertAt(0, c), h;
    }), a = this.split(t);
    o.forEach((c) => {
      this.parent.insertBefore(c, a);
    }), i && this.parent.insertBefore(this.scroll.create("text", i), a);
  }
}
qt.scope = I.BLOCK_BLOT;
function ll(r) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return r.descendants(ut).reduce((e, s) => s.length() === 0 ? e : e.insert(s.value(), Lt(s, {}, t)), new O()).insert("\n", Lt(r));
}
function Lt(r) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  return r == null || ("formats" in r && typeof r.formats == "function" && (t = {
    ...t,
    ...r.formats()
  }, e && delete t["code-token"]), r.parent == null || r.parent.statics.blotName === "scroll" || r.parent.statics.scope !== r.statics.scope) ? t : Lt(r.parent, t, e);
}
const xt = class xt extends Et {
  // Zero width no break space
  static value() {
  }
  constructor(t, e, s) {
    super(t, e), this.selection = s, this.textNode = document.createTextNode(xt.CONTENTS), this.domNode.appendChild(this.textNode), this.savedLength = 0;
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
    for (; s != null && s.statics.scope !== I.BLOCK_BLOT; )
      n += s.offset(s.parent), s = s.parent;
    s != null && (this.savedLength = xt.CONTENTS.length, s.optimize(), s.formatAt(n, xt.CONTENTS.length, t, e), this.savedLength = 0);
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
    const e = this.prev instanceof Dt ? this.prev : null, s = e ? e.length() : 0, n = this.next instanceof Dt ? this.next : null, i = n ? n.text : "", {
      textNode: o
    } = this, a = o.data.split(xt.CONTENTS).join("");
    o.data = xt.CONTENTS;
    let c;
    if (e)
      c = e, (a || n) && (e.insertAt(e.length(), a + i), n && n.remove());
    else if (n)
      c = n, n.insertAt(0, a);
    else {
      const h = document.createTextNode(a);
      c = this.scroll.create(h), this.parent.insertBefore(c, this);
    }
    if (this.remove(), t) {
      const h = (m, p) => e && m === e.domNode ? p : m === o ? s + p - 1 : n && m === n.domNode ? s + a.length + p : null, f = h(t.start.node, t.start.offset), g = h(t.end.node, t.end.offset);
      if (f !== null && g !== null)
        return {
          startNode: c.domNode,
          startOffset: f,
          endNode: c.domNode,
          endOffset: g
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
        this.savedLength = xt.CONTENTS.length, e.isolate(this.offset(e), this.length()).unwrap(), this.savedLength = 0;
        break;
      }
      e = e.parent;
    }
  }
  value() {
    return "";
  }
};
N(xt, "blotName", "cursor"), N(xt, "className", "ql-cursor"), N(xt, "tagName", "span"), N(xt, "CONTENTS", "\uFEFF");
let ns = xt;
var ol = { exports: {} };
(function(r) {
  var t = Object.prototype.hasOwnProperty, e = "~";
  function s() {
  }
  Object.create && (s.prototype = /* @__PURE__ */ Object.create(null), new s().__proto__ || (e = !1));
  function n(c, h, f) {
    this.fn = c, this.context = h, this.once = f || !1;
  }
  function i(c, h, f, g, m) {
    if (typeof f != "function")
      throw new TypeError("The listener must be a function");
    var p = new n(f, g || c, m), b = e ? e + h : h;
    return c._events[b] ? c._events[b].fn ? c._events[b] = [c._events[b], p] : c._events[b].push(p) : (c._events[b] = p, c._eventsCount++), c;
  }
  function o(c, h) {
    --c._eventsCount === 0 ? c._events = new s() : delete c._events[h];
  }
  function a() {
    this._events = new s(), this._eventsCount = 0;
  }
  a.prototype.eventNames = function() {
    var h = [], f, g;
    if (this._eventsCount === 0)
      return h;
    for (g in f = this._events)
      t.call(f, g) && h.push(e ? g.slice(1) : g);
    return Object.getOwnPropertySymbols ? h.concat(Object.getOwnPropertySymbols(f)) : h;
  }, a.prototype.listeners = function(h) {
    var f = e ? e + h : h, g = this._events[f];
    if (!g)
      return [];
    if (g.fn)
      return [g.fn];
    for (var m = 0, p = g.length, b = new Array(p); m < p; m++)
      b[m] = g[m].fn;
    return b;
  }, a.prototype.listenerCount = function(h) {
    var f = e ? e + h : h, g = this._events[f];
    return g ? g.fn ? 1 : g.length : 0;
  }, a.prototype.emit = function(h, f, g, m, p, b) {
    var E = e ? e + h : h;
    if (!this._events[E])
      return !1;
    var v = this._events[E], y = arguments.length, x, L;
    if (v.fn) {
      switch (v.once && this.removeListener(h, v.fn, void 0, !0), y) {
        case 1:
          return v.fn.call(v.context), !0;
        case 2:
          return v.fn.call(v.context, f), !0;
        case 3:
          return v.fn.call(v.context, f, g), !0;
        case 4:
          return v.fn.call(v.context, f, g, m), !0;
        case 5:
          return v.fn.call(v.context, f, g, m, p), !0;
        case 6:
          return v.fn.call(v.context, f, g, m, p, b), !0;
      }
      for (L = 1, x = new Array(y - 1); L < y; L++)
        x[L - 1] = arguments[L];
      v.fn.apply(v.context, x);
    } else {
      var S = v.length, T;
      for (L = 0; L < S; L++)
        switch (v[L].once && this.removeListener(h, v[L].fn, void 0, !0), y) {
          case 1:
            v[L].fn.call(v[L].context);
            break;
          case 2:
            v[L].fn.call(v[L].context, f);
            break;
          case 3:
            v[L].fn.call(v[L].context, f, g);
            break;
          case 4:
            v[L].fn.call(v[L].context, f, g, m);
            break;
          default:
            if (!x)
              for (T = 1, x = new Array(y - 1); T < y; T++)
                x[T - 1] = arguments[T];
            v[L].fn.apply(v[L].context, x);
        }
    }
    return !0;
  }, a.prototype.on = function(h, f, g) {
    return i(this, h, f, g, !1);
  }, a.prototype.once = function(h, f, g) {
    return i(this, h, f, g, !0);
  }, a.prototype.removeListener = function(h, f, g, m) {
    var p = e ? e + h : h;
    if (!this._events[p])
      return this;
    if (!f)
      return o(this, p), this;
    var b = this._events[p];
    if (b.fn)
      b.fn === f && (!m || b.once) && (!g || b.context === g) && o(this, p);
    else {
      for (var E = 0, v = [], y = b.length; E < y; E++)
        (b[E].fn !== f || m && !b[E].once || g && b[E].context !== g) && v.push(b[E]);
      v.length ? this._events[p] = v.length === 1 ? v[0] : v : o(this, p);
    }
    return this;
  }, a.prototype.removeAllListeners = function(h) {
    var f;
    return h ? (f = e ? e + h : h, this._events[f] && o(this, f)) : (this._events = new s(), this._eventsCount = 0), this;
  }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = e, a.EventEmitter = a, r.exports = a;
})(ol);
var No = ol.exports;
const Ao = /* @__PURE__ */ Qi(No), qr = /* @__PURE__ */ new WeakMap(), Sr = ["error", "warn", "log", "info"];
let kr = "warn";
function al(r) {
  if (kr && Sr.indexOf(r) <= Sr.indexOf(kr)) {
    for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)
      e[s - 1] = arguments[s];
    console[r](...e);
  }
}
function ne(r) {
  return Sr.reduce((t, e) => (t[e] = al.bind(console, e, r), t), {});
}
ne.level = (r) => {
  kr = r;
};
al.level = ne.level;
const hr = ne("quill:events"), xo = ["selectionchange", "mousedown", "mouseup", "click"];
xo.forEach((r) => {
  document.addEventListener(r, function() {
    for (var t = arguments.length, e = new Array(t), s = 0; s < t; s++)
      e[s] = arguments[s];
    Array.from(document.querySelectorAll(".ql-container")).forEach((n) => {
      const i = qr.get(n);
      i && i.emitter && i.emitter.handleDOM(...e);
    });
  });
});
class q extends Ao {
  constructor() {
    super(), this.domListeners = {}, this.on("error", hr.error);
  }
  emit() {
    for (var t = arguments.length, e = new Array(t), s = 0; s < t; s++)
      e[s] = arguments[s];
    return hr.log.call(hr, ...e), super.emit(...e);
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
N(q, "events", {
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
}), N(q, "sources", {
  API: "api",
  SILENT: "silent",
  USER: "user"
});
const dr = ne("quill:selection");
class ke {
  constructor(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    this.index = t, this.length = e;
  }
}
class Lo {
  constructor(t, e) {
    this.emitter = e, this.scroll = t, this.composing = !1, this.mouseDown = !1, this.root = this.scroll.domNode, this.cursor = this.scroll.create("cursor", this), this.savedRange = new ke(0, 0), this.lastRange = this.savedRange, this.lastNative = null, this.handleComposition(), this.handleDragging(), this.emitter.listenDOM("selectionchange", document, () => {
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
          endOffset: c
        } = n.range;
        this.setNativeRange(i, o, a, c), this.update(q.sources.SILENT);
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
    if (!(s == null || !s.native.collapsed || this.scroll.query(t, I.BLOCK))) {
      if (s.start.node !== this.cursor.textNode) {
        const n = this.scroll.find(s.start.node, !1);
        if (n == null)
          return;
        if (n instanceof ut) {
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
      const [f] = this.scroll.leaf(t + 1);
      if (f) {
        const [g] = this.scroll.line(t), [m] = this.scroll.line(t + 1);
        g === m && (i = f, o = 0);
      }
    }
    [n, o] = i.position(o, !0);
    const a = document.createRange();
    if (e > 0)
      return a.setStart(n, o), [i, o] = this.scroll.leaf(t + e), i == null ? null : ([n, o] = i.position(o, !0), a.setEnd(n, o), a.getBoundingClientRect());
    let c = "left", h;
    if (n instanceof Text) {
      if (!n.data.length)
        return null;
      o < n.data.length ? (a.setStart(n, o), a.setEnd(n, o + 1)) : (a.setStart(n, o - 1), a.setEnd(n, o), c = "right"), h = a.getBoundingClientRect();
    } else {
      if (!(i.domNode instanceof Element))
        return null;
      h = i.domNode.getBoundingClientRect(), o > 0 && (c = "right");
    }
    return {
      bottom: h.top + h.height,
      height: h.height,
      left: h[c],
      right: h[c],
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
    return dr.info("getNativeRange", s), s;
  }
  getRange() {
    const t = this.scroll.domNode;
    if ("isConnected" in t && !t.isConnected)
      return [null, null];
    const e = this.getNativeRange();
    return e == null ? [null, null] : [this.normalizedToRange(e), e];
  }
  hasFocus() {
    return document.activeElement === this.root || document.activeElement != null && fr(this.root, document.activeElement);
  }
  normalizedToRange(t) {
    const e = [[t.start.node, t.start.offset]];
    t.native.collapsed || e.push([t.end.node, t.end.offset]);
    const s = e.map((o) => {
      const [a, c] = o, h = this.scroll.find(a, !0), f = h.offset(this.scroll);
      return c === 0 ? f : h instanceof ut ? f + h.index(a, c) : f + h.length();
    }), n = Math.min(Math.max(...s), this.scroll.length() - 1), i = Math.min(n, ...s);
    return new ke(i, n - i);
  }
  normalizeNative(t) {
    if (!fr(this.root, t.startContainer) || !t.collapsed && !fr(this.root, t.endContainer))
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
    if (dr.info("setNativeRange", t, e, s, n), t != null && (this.root.parentNode == null || t.parentNode == null || // @ts-expect-error Fix me later
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
          const c = document.createRange();
          c.setStart(t, e), c.setEnd(s, n), o.removeAllRanges(), o.addRange(c);
        }
      } else
        o.removeAllRanges(), this.root.blur();
  }
  setRange(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : q.sources.API;
    if (typeof e == "string" && (s = e, e = !1), dr.info("setRange", t), t != null) {
      const n = this.rangeToNative(t);
      this.setNativeRange(...n, e);
    } else
      this.setNativeRange(null);
    this.update(s);
  }
  update() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : q.sources.USER;
    const e = this.lastRange, [s, n] = this.getRange();
    if (this.lastRange = s, this.lastNative = n, this.lastRange != null && (this.savedRange = this.lastRange), !jr(e, this.lastRange)) {
      if (!this.composing && n != null && n.native.collapsed && n.start.node !== this.cursor.textNode) {
        const o = this.cursor.restore();
        o && this.setNativeRange(o.startNode, o.startOffset, o.endNode, o.endOffset);
      }
      const i = [q.events.SELECTION_CHANGE, Qe(this.lastRange), Qe(e), t];
      this.emitter.emit(q.events.EDITOR_CHANGE, ...i), t !== q.sources.SILENT && this.emitter.emit(...i);
    }
  }
}
function fr(r, t) {
  try {
    t.parentNode;
  } catch (e) {
    return !1;
  }
  return r.contains(t);
}
const To = /^[ -~]*$/;
class Co {
  constructor(t) {
    this.scroll = t, this.delta = this.getDelta();
  }
  applyDelta(t) {
    this.scroll.update();
    let e = this.scroll.length();
    this.scroll.batchStart();
    const s = pi(t), n = new O();
    return So(s.ops.slice()).reduce((o, a) => {
      const c = St.Op.length(a);
      let h = a.attributes || {}, f = !1, g = !1;
      if (a.insert != null) {
        if (n.retain(c), typeof a.insert == "string") {
          const b = a.insert;
          g = !b.endsWith("\n") && (e <= o || !!this.scroll.descendant(qt, o)[0]), this.scroll.insertAt(o, b);
          const [E, v] = this.scroll.line(o);
          let y = me({}, Lt(E));
          if (E instanceof lt) {
            const [x] = E.descendant(ut, v);
            x && (y = me(y, Lt(x)));
          }
          h = St.AttributeMap.diff(y, h) || {};
        } else if (typeof a.insert == "object") {
          const b = Object.keys(a.insert)[0];
          if (b == null)
            return o;
          const E = this.scroll.query(b, I.INLINE) != null;
          if (E)
            (e <= o || this.scroll.descendant(qt, o)[0]) && (g = !0);
          else if (o > 0) {
            const [v, y] = this.scroll.descendant(ut, o - 1);
            v instanceof Dt ? v.value()[y] !== "\n" && (f = !0) : v instanceof Et && v.statics.scope === I.INLINE_BLOT && (f = !0);
          }
          if (this.scroll.insertAt(o, b, a.insert[b]), E) {
            const [v] = this.scroll.descendant(ut, o);
            if (v) {
              const y = me({}, Lt(v));
              h = St.AttributeMap.diff(y, h) || {};
            }
          }
        }
        e += c;
      } else if (n.push(a), a.retain !== null && typeof a.retain == "object") {
        const b = Object.keys(a.retain)[0];
        if (b == null)
          return o;
        this.scroll.updateEmbedAt(o, b, a.retain[b]);
      }
      Object.keys(h).forEach((b) => {
        this.scroll.formatAt(o, c, b, h[b]);
      });
      const m = f ? 1 : 0, p = g ? 1 : 0;
      return e += m + p, n.retain(m), n.delete(p), o + c + m + p;
    }, 0), n.reduce((o, a) => typeof a.delete == "number" ? (this.scroll.deleteAt(o, a.delete), o) : o + St.Op.length(a), 0), this.scroll.batchEnd(), this.scroll.optimize(), this.update(s);
  }
  deleteText(t, e) {
    return this.scroll.deleteAt(t, e), this.update(new O().retain(t).delete(e));
  }
  formatLine(t, e) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.scroll.update(), Object.keys(s).forEach((i) => {
      this.scroll.lines(t, Math.max(e, 1)).forEach((o) => {
        o.format(i, s[i]);
      });
    }), this.scroll.optimize();
    const n = new O().retain(t).retain(e, Qe(s));
    return this.update(n);
  }
  formatText(t, e) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    Object.keys(s).forEach((i) => {
      this.scroll.formatAt(t, e, i, s[i]);
    });
    const n = new O().retain(t).retain(e, Qe(s));
    return this.update(n);
  }
  getContents(t, e) {
    return this.delta.slice(t, t + e);
  }
  getDelta() {
    return this.scroll.lines().reduce((t, e) => t.concat(e.delta()), new O());
  }
  getFormat(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, s = [], n = [];
    e === 0 ? this.scroll.path(t).forEach((a) => {
      const [c] = a;
      c instanceof lt ? s.push(c) : c instanceof ut && n.push(c);
    }) : (s = this.scroll.lines(t, e), n = this.scroll.descendants(ut, t, e));
    const [i, o] = [s, n].map((a) => {
      const c = a.shift();
      if (c == null)
        return {};
      let h = Lt(c);
      for (; Object.keys(h).length > 0; ) {
        const f = a.shift();
        if (f == null)
          return h;
        h = qo(Lt(f), h);
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
      return s.length() >= n + e && !(n === 0 && e === i) ? qs(s, n, e, !0) : qs(this.scroll, t, e, !0);
    }
    return "";
  }
  getText(t, e) {
    return this.getContents(t, e).filter((s) => typeof s.insert == "string").map((s) => s.insert).join("");
  }
  insertContents(t, e) {
    const s = pi(e), n = new O().retain(t).concat(s);
    return this.scroll.insertContents(t, s), this.update(n);
  }
  insertEmbed(t, e, s) {
    return this.scroll.insertAt(t, e, s), this.update(new O().retain(t).insert({
      [e]: s
    }));
  }
  insertText(t, e) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return e = e.replace(/\r\n/g, "\n").replace(/\r/g, "\n"), this.scroll.insertAt(t, e), Object.keys(s).forEach((n) => {
      this.scroll.formatAt(t, e.length, n, s[n]);
    }), this.update(new O().retain(t).insert(e, Qe(s)));
  }
  isBlank() {
    if (this.scroll.children.length === 0)
      return !0;
    if (this.scroll.children.length > 1)
      return !1;
    const t = this.scroll.children.head;
    if ((t == null ? void 0 : t.statics.blotName) !== lt.blotName)
      return !1;
    const e = t;
    return e.children.length > 1 ? !1 : e.children.head instanceof Ht;
  }
  removeFormat(t, e) {
    const s = this.getText(t, e), [n, i] = this.scroll.line(t + e);
    let o = 0, a = new O();
    n != null && (o = n.length() - i, a = n.delta().slice(i, i + o - 1).insert("\n"));
    const h = this.getContents(t, e + o).diff(new O().insert(s).concat(a)), f = new O().retain(t).concat(h);
    return this.applyDelta(f);
  }
  update(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
    const n = this.delta;
    if (e.length === 1 && e[0].type === "characterData" && // @ts-expect-error Fix me later
    e[0].target.data.match(To) && this.scroll.find(e[0].target)) {
      const i = this.scroll.find(e[0].target), o = Lt(i), a = i.offset(this.scroll), c = e[0].oldValue.replace(ns.CONTENTS, ""), h = new O().insert(c), f = new O().insert(i.value()), g = s && {
        oldRange: gi(s.oldRange, -a),
        newRange: gi(s.newRange, -a)
      };
      t = new O().retain(a).concat(h.diff(f, g)).reduce((p, b) => b.insert ? p.insert(b.insert, o) : p.push(b), new O()), this.delta = n.compose(t);
    } else
      this.delta = this.getDelta(), (!t || !jr(n.compose(t), this.delta)) && (t = n.diff(this.delta, s));
    return t;
  }
}
function Ye(r, t, e) {
  if (r.length === 0) {
    const [p] = mr(e.pop());
    return t <= 0 ? "</li></".concat(p, ">") : "</li></".concat(p, ">").concat(Ye([], t - 1, e));
  }
  const [{
    child: s,
    offset: n,
    length: i,
    indent: o,
    type: a
  }, ...c] = r, [h, f] = mr(a);
  if (o > t)
    return e.push(a), o === t + 1 ? "<".concat(h, "><li").concat(f, ">").concat(qs(s, n, i)).concat(Ye(c, o, e)) : "<".concat(h, "><li>").concat(Ye(r, t + 1, e));
  const g = e[e.length - 1];
  if (o === t && a === g)
    return "</li><li".concat(f, ">").concat(qs(s, n, i)).concat(Ye(c, o, e));
  const [m] = mr(e.pop());
  return "</li></".concat(m, ">").concat(Ye(r, t - 1, e));
}
function qs(r, t, e) {
  let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if ("html" in r && typeof r.html == "function")
    return r.html(t, e);
  if (r instanceof Dt)
    return wn(r.value().slice(t, t + e));
  if (r instanceof Ut) {
    if (r.statics.blotName === "list-container") {
      const h = [];
      return r.children.forEachAt(t, e, (f, g, m) => {
        const p = "formats" in f && typeof f.formats == "function" ? f.formats() : {};
        h.push({
          child: f,
          offset: g,
          length: m,
          indent: p.indent || 0,
          type: p.list
        });
      }), Ye(h, -1, []);
    }
    const n = [];
    if (r.children.forEachAt(t, e, (h, f, g) => {
      n.push(qs(h, f, g));
    }), s || r.statics.blotName === "list")
      return n.join("");
    const {
      outerHTML: i,
      innerHTML: o
    } = r.domNode, [a, c] = i.split(">".concat(o, "<"));
    return a === "<table" ? '<table style="border: 1px solid #000;">'.concat(n.join(""), "<").concat(c) : "".concat(a, ">").concat(n.join(""), "<").concat(c);
  }
  return r.domNode instanceof Element ? r.domNode.outerHTML : "";
}
function qo(r, t) {
  return Object.keys(t).reduce((e, s) => {
    if (r[s] == null)
      return e;
    const n = t[s];
    return n === r[s] ? e[s] = n : Array.isArray(n) ? n.indexOf(r[s]) < 0 ? e[s] = n.concat([r[s]]) : e[s] = n : e[s] = [n, r[s]], e;
  }, {});
}
function mr(r) {
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
function pi(r) {
  return r.reduce((t, e) => {
    if (typeof e.insert == "string") {
      const s = e.insert.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
      return t.insert(s, e.attributes);
    }
    return t.push(e);
  }, new O());
}
function gi(r, t) {
  let {
    index: e,
    length: s
  } = r;
  return new ke(e + t, s);
}
function So(r) {
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
class jt {
  constructor(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.quill = t, this.options = e;
  }
}
N(jt, "DEFAULTS", {});
const tn = "\uFEFF";
class Wr extends Et {
  constructor(t, e) {
    super(t, e), this.contentNode = document.createElement("span"), this.contentNode.setAttribute("contenteditable", "false"), Array.from(this.domNode.childNodes).forEach((s) => {
      this.contentNode.appendChild(s);
    }), this.leftGuard = document.createTextNode(tn), this.rightGuard = document.createTextNode(tn), this.domNode.appendChild(this.leftGuard), this.domNode.appendChild(this.contentNode), this.domNode.appendChild(this.rightGuard);
  }
  index(t, e) {
    return t === this.leftGuard ? 0 : t === this.rightGuard ? 1 : super.index(t, e);
  }
  restore(t) {
    let e = null, s;
    const n = t.data.split(tn).join("");
    if (t === this.leftGuard)
      if (this.prev instanceof Dt) {
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
      t === this.rightGuard && (this.next instanceof Dt ? (this.next.insertAt(0, n), e = {
        startNode: this.next.domNode,
        startOffset: n.length
      }) : (s = document.createTextNode(n), this.parent.insertBefore(this.scroll.create(s), this.next), e = {
        startNode: s,
        startOffset: n.length
      }));
    return t.data = tn, e;
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
class ko {
  constructor(t, e) {
    N(this, "isComposing", !1);
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
    e && !(e instanceof Wr) && (this.emitter.emit(q.events.COMPOSITION_BEFORE_START, t), this.scroll.batchStart(), this.emitter.emit(q.events.COMPOSITION_START, t), this.isComposing = !0);
  }
  handleCompositionEnd(t) {
    this.emitter.emit(q.events.COMPOSITION_BEFORE_END, t), this.scroll.batchEnd(), this.emitter.emit(q.events.COMPOSITION_END, t), this.isComposing = !1;
  }
}
const xs = class xs {
  constructor(t, e) {
    N(this, "modules", {});
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
N(xs, "DEFAULTS", {
  modules: {}
}), N(xs, "themes", {
  default: xs
});
let rs = xs;
const Oo = (r) => r.parentElement || r.getRootNode().host || null, Io = (r) => {
  const t = r.getBoundingClientRect(), e = "offsetWidth" in r && Math.abs(t.width) / r.offsetWidth || 1, s = "offsetHeight" in r && Math.abs(t.height) / r.offsetHeight || 1;
  return {
    top: t.top,
    right: t.left + r.clientWidth * e,
    bottom: t.top + r.clientHeight * s,
    left: t.left
  };
}, en = (r) => {
  const t = parseInt(r, 10);
  return Number.isNaN(t) ? 0 : t;
}, bi = (r, t, e, s, n, i) => r < e && t > s ? 0 : r < e ? -(e - r + n) : t > s ? t - r > s - e ? r + n - e : t - s + i : 0, _o = (r, t) => {
  var i, o, a, c, h;
  const e = r.ownerDocument;
  let s = t, n = r;
  for (; n; ) {
    const f = n === e.body, g = f ? {
      top: 0,
      right: (o = (i = window.visualViewport) == null ? void 0 : i.width) != null ? o : e.documentElement.clientWidth,
      bottom: (c = (a = window.visualViewport) == null ? void 0 : a.height) != null ? c : e.documentElement.clientHeight,
      left: 0
    } : Io(n), m = getComputedStyle(n), p = bi(s.left, s.right, g.left, g.right, en(m.scrollPaddingLeft), en(m.scrollPaddingRight)), b = bi(s.top, s.bottom, g.top, g.bottom, en(m.scrollPaddingTop), en(m.scrollPaddingBottom));
    if (p || b)
      if (f)
        (h = e.defaultView) == null || h.scrollBy(p, b);
      else {
        const {
          scrollLeft: E,
          scrollTop: v
        } = n;
        b && (n.scrollTop += b), p && (n.scrollLeft += p);
        const y = n.scrollLeft - E, x = n.scrollTop - v;
        s = {
          left: s.left - y,
          top: s.top - x,
          right: s.right - y,
          bottom: s.bottom - x
        };
      }
    n = f || m.position === "fixed" ? null : Oo(n);
  }
}, Ro = 100, Mo = ["block", "break", "cursor", "inline", "scroll", "text"], Bo = (r, t, e) => {
  const s = new ss();
  return Mo.forEach((n) => {
    const i = t.query(n);
    i && s.register(i);
  }), r.forEach((n) => {
    var a;
    let i = t.query(n);
    i || e.error('Cannot register "'.concat(n, '" specified in "formats" config. Are you sure it was registered?'));
    let o = 0;
    for (; i; )
      if (s.register(i), i = "blotName" in i && (a = i.requiredContainer) != null ? a : null, o += 1, o > Ro) {
        e.error('Cycle detected in registering blot requiredContainer: "'.concat(n, '"'));
        break;
      }
  }), s;
}, es = ne("quill"), sn = new ss();
Ut.uiClass = "ql-ui";
const Mt = class Mt {
  static debug(t) {
    t === !0 && (t = "log"), ne.level(t);
  }
  static find(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return qr.get(t) || sn.find(t, e);
  }
  static import(t) {
    return this.imports[t] == null && es.error("Cannot import ".concat(t, ". Are you sure it was registered?")), this.imports[t];
  }
  static register() {
    if (typeof (arguments.length <= 0 ? void 0 : arguments[0]) != "string") {
      const t = arguments.length <= 0 ? void 0 : arguments[0], e = !!(!(arguments.length <= 1) && arguments[1]), s = "attrName" in t ? t.attrName : t.blotName;
      typeof s == "string" ? this.register("formats/".concat(s), t, e) : Object.keys(t).forEach((n) => {
        this.register(n, t[n], e);
      });
    } else {
      const t = arguments.length <= 0 ? void 0 : arguments[0], e = arguments.length <= 1 ? void 0 : arguments[1], s = !!(!(arguments.length <= 2) && arguments[2]);
      this.imports[t] != null && !s && es.warn("Overwriting ".concat(t, " with"), e), this.imports[t] = e, (t.startsWith("blots/") || t.startsWith("formats/")) && e && typeof e != "boolean" && e.blotName !== "abstract" && sn.register(e), typeof e.register == "function" && e.register(sn);
    }
  }
  constructor(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.options = Uo(t, e), this.container = this.options.container, this.container == null) {
      es.error("Invalid Quill container", t);
      return;
    }
    this.options.debug && Mt.debug(this.options.debug);
    const s = this.container.innerHTML.trim();
    this.container.classList.add("ql-container"), this.container.innerHTML = "", qr.set(this.container, this), this.root = this.addContainer("ql-editor"), this.root.classList.add("ql-blank"), this.emitter = new q();
    const n = Fr.blotName, i = this.options.registry.query(n);
    if (!i || !("blotName" in i))
      throw new Error('Cannot initialize Quill without "'.concat(n, '" blot'));
    if (this.scroll = new i(this.options.registry, this.root, {
      emitter: this.emitter
    }), this.editor = new Co(this.scroll), this.selection = new Lo(this.scroll, this.emitter), this.composition = new ko(this.scroll, this.emitter), this.theme = new this.options.theme(this, this.options), this.keyboard = this.theme.addModule("keyboard"), this.clipboard = this.theme.addModule("clipboard"), this.history = this.theme.addModule("history"), this.uploader = this.theme.addModule("uploader"), this.theme.addModule("input"), this.theme.addModule("uiNode"), this.theme.init(), this.emitter.on(q.events.EDITOR_CHANGE, (o) => {
      o === q.events.TEXT_CHANGE && this.root.classList.toggle("ql-blank", this.editor.isBlank());
    }), this.emitter.on(q.events.SCROLL_UPDATE, (o, a) => {
      const c = this.selection.lastRange, [h] = this.selection.getRange(), f = c && h ? {
        oldRange: c,
        newRange: h
      } : void 0;
      Rt.call(this, () => this.editor.update(null, a, f), o);
    }), this.emitter.on(q.events.SCROLL_EMBED_UPDATE, (o, a) => {
      const c = this.selection.lastRange, [h] = this.selection.getRange(), f = c && h ? {
        oldRange: c,
        newRange: h
      } : void 0;
      Rt.call(this, () => {
        const g = new O().retain(o.offset(this)).retain({
          [o.statics.blotName]: a
        });
        return this.editor.update(g, [], f);
      }, Mt.sources.USER);
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
    return [t, e, , s] = te(t, e, s), Rt.call(this, () => this.editor.deleteText(t, e), s, t, -1 * e);
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
    return Rt.call(this, () => {
      const n = this.getSelection(!0);
      let i = new O();
      if (n == null)
        return i;
      if (this.scroll.query(t, I.BLOCK))
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
    return [t, e, o, i] = te(
      t,
      e,
      // @ts-expect-error
      s,
      n,
      i
    ), Rt.call(this, () => this.editor.formatLine(t, e, o), i, t, 0);
  }
  formatText(t, e, s, n, i) {
    let o;
    return [t, e, o, i] = te(
      // @ts-expect-error
      t,
      e,
      s,
      n,
      i
    ), Rt.call(this, () => this.editor.formatText(t, e, o), i, t, 0);
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
    return [t, e] = te(t, e), this.editor.getContents(t, e);
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
    return typeof t == "number" && (e = e != null ? e : this.getLength() - t), [t, e] = te(t, e), this.editor.getHTML(t, e);
  }
  getText() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e = arguments.length > 1 ? arguments[1] : void 0;
    return typeof t == "number" && (e = e != null ? e : this.getLength() - t), [t, e] = te(t, e), this.editor.getText(t, e);
  }
  hasFocus() {
    return this.selection.hasFocus();
  }
  insertEmbed(t, e, s) {
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Mt.sources.API;
    return Rt.call(this, () => this.editor.insertEmbed(t, e, s), n, t);
  }
  insertText(t, e, s, n, i) {
    let o;
    return [t, , o, i] = te(t, 0, s, n, i), Rt.call(this, () => this.editor.insertText(t, e, o), i, t, e.length);
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
    return [t, e, , s] = te(t, e, s), Rt.call(this, () => this.editor.removeFormat(t, e), s, t);
  }
  scrollRectIntoView(t) {
    _o(this.root, t);
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
    return Rt.call(this, () => {
      t = new O(t);
      const s = this.getLength(), n = this.editor.deleteText(0, s), i = this.editor.insertContents(0, t), o = this.editor.deleteText(this.getLength() - 1, 1);
      return n.compose(i).compose(o);
    }, e);
  }
  setSelection(t, e, s) {
    t == null ? this.selection.setRange(null, e || Mt.sources.API) : ([t, e, , s] = te(t, e, s), this.selection.setRange(new ke(Math.max(0, t), e), s), s !== q.sources.SILENT && this.scrollSelectionIntoView());
  }
  setText(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : q.sources.API;
    const s = new O().insert(t);
    return this.setContents(s, e);
  }
  update() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : q.sources.USER;
    const e = this.scroll.update(t);
    return this.selection.update(t), e;
  }
  updateContents(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : q.sources.API;
    return Rt.call(this, () => (t = new O(t), this.editor.applyDelta(t)), e, !0);
  }
};
N(Mt, "DEFAULTS", {
  bounds: null,
  modules: {
    clipboard: !0,
    keyboard: !0,
    history: !0,
    uploader: !0
  },
  placeholder: "",
  readOnly: !1,
  registry: sn,
  theme: "default"
}), N(Mt, "events", q.events), N(Mt, "sources", q.sources), N(Mt, "version", "2.0.2"), N(Mt, "imports", {
  delta: O,
  parchment: oo,
  "core/module": jt,
  "core/theme": rs
});
let A = Mt;
function yi(r) {
  return typeof r == "string" ? document.querySelector(r) : r;
}
function pr(r) {
  return Object.entries(r != null ? r : {}).reduce((t, e) => {
    let [s, n] = e;
    return {
      ...t,
      [s]: n === !0 ? {} : n
    };
  }, {});
}
function vi(r) {
  return Object.fromEntries(Object.entries(r).filter((t) => t[1] !== void 0));
}
function Uo(r, t) {
  const e = yi(r);
  if (!e)
    throw new Error("Invalid Quill container");
  const n = !t.theme || t.theme === A.DEFAULTS.theme ? rs : A.import("themes/".concat(t.theme));
  if (!n)
    throw new Error("Invalid theme ".concat(t.theme, ". Did you register it?"));
  const {
    modules: i,
    ...o
  } = A.DEFAULTS, {
    modules: a,
    ...c
  } = n.DEFAULTS;
  let h = pr(t.modules);
  h != null && h.toolbar && h.toolbar.constructor !== Object && (h = {
    ...h,
    toolbar: {
      container: h.toolbar
    }
  });
  const f = me({}, pr(i), pr(a), h), g = {
    ...o,
    ...vi(c),
    ...vi(t)
  };
  let m = t.registry;
  return m ? t.formats && es.warn('Ignoring "formats" option because "registry" is specified') : m = t.formats ? Bo(t.formats, g.registry, es) : g.registry, {
    ...g,
    registry: m,
    container: e,
    theme: n,
    modules: Object.entries(f).reduce((p, b) => {
      let [E, v] = b;
      if (!v)
        return p;
      const y = A.import("modules/".concat(E));
      return y == null ? (es.error("Cannot load ".concat(E, " module. Are you sure you registered it?")), p) : {
        ...p,
        // @ts-expect-error
        [E]: me({}, y.DEFAULTS || {}, v)
      };
    }, {}),
    bounds: yi(g.bounds)
  };
}
function Rt(r, t, e, s) {
  if (!this.isEnabled() && t === q.sources.USER && !this.allowReadOnlyEdits)
    return new O();
  let n = e == null ? null : this.getSelection();
  const i = this.editor.delta, o = r();
  if (n != null && (e === !0 && (e = n.index), s == null ? n = wi(n, o, t) : s !== 0 && (n = wi(n, e, s, t)), this.setSelection(n, q.sources.SILENT)), o.length() > 0) {
    const a = [q.events.TEXT_CHANGE, o, i, t];
    this.emitter.emit(q.events.EDITOR_CHANGE, ...a), t !== q.sources.SILENT && this.emitter.emit(...a);
  }
  return o;
}
function te(r, t, e, s, n) {
  let i = {};
  return typeof r.index == "number" && typeof r.length == "number" ? typeof t != "number" ? (n = s, s = e, e = t, t = r.length, r = r.index) : (t = r.length, r = r.index) : typeof t != "number" && (n = s, s = e, e = t, t = 0), typeof e == "object" ? (i = e, n = s) : typeof e == "string" && (s != null ? i[e] = s : n = e), n = n || q.sources.API, [r, t, i, n];
}
function wi(r, t, e, s) {
  const n = typeof e == "number" ? e : 0;
  if (r == null)
    return null;
  let i, o;
  return t && typeof t.transformPosition == "function" ? [i, o] = [r.index, r.index + r.length].map((a) => (
    // @ts-expect-error -- TODO: add a better type guard around `index`
    t.transformPosition(a, s !== q.sources.USER)
  )) : [i, o] = [r.index, r.index + r.length].map((a) => a < t || a === t && s === q.sources.USER ? a : n >= 0 ? a + n : Math.max(t, a + n)), new ke(i, o - i);
}
class Oe extends gn {
}
function Ei(r) {
  return r instanceof lt || r instanceof qt;
}
function Ni(r) {
  return typeof r.updateContent == "function";
}
class Je extends Fr {
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
      if (s instanceof qt || i instanceof qt) {
        this.optimize();
        return;
      }
      const o = i.children.head instanceof Ht ? null : i.children.head;
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
      if (s == null || this.scroll.query(e, I.BLOCK) == null) {
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
    if (t.statics.scope === I.INLINE_BLOT) {
      const s = this.scroll.create(this.statics.defaultChild.blotName);
      s.appendChild(t), super.insertBefore(s, e);
    } else
      super.insertBefore(t, e);
  }
  insertContents(t, e) {
    const s = this.deltaToRenderBlocks(e.concat(new O().insert("\n"))), n = s.pop();
    if (n == null)
      return;
    this.batchStart();
    const i = s.shift();
    if (i) {
      const c = i.type === "block" && (i.delta.length() === 0 || !this.descendant(qt, t)[0] && t < this.length()), h = i.type === "block" ? i.delta : new O().insert({
        [i.key]: i.value
      });
      gr(this, t, h);
      const f = i.type === "block" ? 1 : 0, g = t + h.length() + f;
      c && this.insertAt(g - 1, "\n");
      const m = Lt(this.line(t)[0]), p = St.AttributeMap.diff(m, i.attributes) || {};
      Object.keys(p).forEach((b) => {
        this.formatAt(g - 1, 1, b, p[b]);
      }), t = g;
    }
    let [o, a] = this.children.find(t);
    if (s.length && (o && (o = o.split(a), a = 0), s.forEach((c) => {
      if (c.type === "block") {
        const h = this.createBlock(c.attributes, o || void 0);
        gr(h, 0, c.delta);
      } else {
        const h = this.create(c.key, c.value);
        this.insertBefore(h, o || void 0), Object.keys(c.attributes).forEach((f) => {
          h.format(f, c.attributes[f]);
        });
      }
    })), n.type === "block" && n.delta.length()) {
      const c = o ? o.offset(o.scroll) + a : this.length();
      gr(this, c, n.delta);
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
    return s instanceof ut ? [s, n] : [null, -1];
  }
  line(t) {
    return t === this.length() ? this.line(t - 1) : this.descendant(Ei, t);
  }
  lines() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE;
    const s = (n, i, o) => {
      let a = [], c = o;
      return n.children.forEachAt(i, o, (h, f, g) => {
        Ei(h) ? a.push(h) : h instanceof gn && (a = a.concat(s(h, f, c))), c -= g;
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
      return i && !Ni(i);
    }), t.length > 0 && this.emitter.emit(q.events.SCROLL_BEFORE_UPDATE, e, t), super.update(t.concat([])), t.length > 0 && this.emitter.emit(q.events.SCROLL_UPDATE, e, t);
  }
  updateEmbedAt(t, e, s) {
    const [n] = this.descendant((i) => i instanceof qt, t);
    n && n.statics.blotName === e && Ni(n) && n.updateContent(s);
  }
  handleDragStart(t) {
    t.preventDefault();
  }
  deltaToRenderBlocks(t) {
    const e = [];
    let s = new O();
    return t.forEach((n) => {
      var o;
      const i = n == null ? void 0 : n.insert;
      if (i)
        if (typeof i == "string") {
          const a = i.split("\n");
          a.slice(0, -1).forEach((h) => {
            var f;
            s.insert(h, n.attributes), e.push({
              type: "block",
              delta: s,
              attributes: (f = n.attributes) != null ? f : {}
            }), s = new O();
          });
          const c = a[a.length - 1];
          c && s.insert(c, n.attributes);
        } else {
          const a = Object.keys(i)[0];
          if (!a)
            return;
          this.query(a, I.INLINE) ? s.push(n) : (s.length() && e.push({
            type: "block",
            delta: s,
            attributes: {}
          }), s = new O(), e.push({
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
      let [c, h] = a;
      this.query(c, I.BLOCK & I.BLOT) != null ? s = c : n[c] = h;
    });
    const i = this.create(s || this.statics.defaultChild.blotName, s ? t[s] : void 0);
    this.insertBefore(i, e || void 0);
    const o = i.length();
    return Object.entries(n).forEach((a) => {
      let [c, h] = a;
      i.formatAt(0, o, c, h);
    }), i;
  }
}
N(Je, "blotName", "scroll"), N(Je, "className", "ql-editor"), N(Je, "tagName", "DIV"), N(Je, "defaultChild", lt), N(Je, "allowedChildren", [lt, qt, Oe]);
function gr(r, t, e) {
  e.reduce((s, n) => {
    const i = St.Op.length(n);
    let o = n.attributes || {};
    if (n.insert != null) {
      if (typeof n.insert == "string") {
        const a = n.insert;
        r.insertAt(s, a);
        const [c] = r.descendant(ut, s), h = Lt(c);
        o = St.AttributeMap.diff(h, o) || {};
      } else if (typeof n.insert == "object") {
        const a = Object.keys(n.insert)[0];
        if (a == null)
          return s;
        if (r.insertAt(s, a, n.insert[a]), r.scroll.query(a, I.INLINE) != null) {
          const [h] = r.descendant(ut, s), f = Lt(h);
          o = St.AttributeMap.diff(f, o) || {};
        }
      }
    }
    return Object.keys(o).forEach((a) => {
      r.formatAt(s, i, a, o[a]);
    }), s + i;
  }, t);
}
const Xr = {
  scope: I.BLOCK,
  whitelist: ["right", "center", "justify"]
}, Do = new Zt("align", "align", Xr), cl = new Pt("align", "ql-align", Xr), ul = new pe("align", "text-align", Xr);
class hl extends pe {
  value(t) {
    let e = super.value(t);
    if (!e.startsWith("rgb("))
      return e;
    e = e.replace(/^[^\d]+/, "").replace(/[^\d]+$/, "");
    const s = e.split(",").map((n) => "00".concat(parseInt(n, 10).toString(16)).slice(-2)).join("");
    return "#".concat(s);
  }
}
const Po = new Pt("color", "ql-color", {
  scope: I.INLINE
}), Yr = new hl("color", "color", {
  scope: I.INLINE
}), Ho = new Pt("background", "ql-bg", {
  scope: I.INLINE
}), Jr = new hl("background", "background-color", {
  scope: I.INLINE
});
class Ie extends Oe {
  static create(t) {
    const e = super.create(t);
    return e.setAttribute("spellcheck", "false"), e;
  }
  code(t, e) {
    return this.children.map((s) => s.length() <= 1 ? "" : s.domNode.innerText).join("\n").slice(t, t + e);
  }
  html(t, e) {
    return "<pre>\n".concat(wn(this.code(t, e)), "\n</pre>");
  }
}
class ht extends lt {
  static register() {
    A.register(Ie);
  }
}
N(ht, "TAB", "  ");
class Qr extends ge {
}
Qr.blotName = "code";
Qr.tagName = "CODE";
ht.blotName = "code-block";
ht.className = "ql-code-block";
ht.tagName = "DIV";
Ie.blotName = "code-block-container";
Ie.className = "ql-code-block-container";
Ie.tagName = "DIV";
Ie.allowedChildren = [ht];
ht.allowedChildren = [Dt, Ht, ns];
ht.requiredContainer = Ie;
const ti = {
  scope: I.BLOCK,
  whitelist: ["rtl"]
}, dl = new Zt("direction", "dir", ti), fl = new Pt("direction", "ql-direction", ti), ml = new pe("direction", "direction", ti), pl = {
  scope: I.INLINE,
  whitelist: ["serif", "monospace"]
}, gl = new Pt("font", "ql-font", pl);
class jo extends pe {
  value(t) {
    return super.value(t).replace(/["']/g, "");
  }
}
const bl = new jo("font", "font-family", pl), yl = new Pt("size", "ql-size", {
  scope: I.INLINE,
  whitelist: ["small", "large", "huge"]
}), vl = new pe("size", "font-size", {
  scope: I.INLINE,
  whitelist: ["10px", "18px", "32px"]
}), $o = ne("quill:keyboard"), zo = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey";
class En extends jt {
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
    const n = Vo(t);
    if (n == null) {
      $o.warn("Attempted to add invalid keyboard binding", n);
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
      const n = (this.bindings[t.key] || []).concat(this.bindings[t.which] || []).filter((y) => En.match(t, y));
      if (n.length === 0)
        return;
      const i = A.find(t.target, !0);
      if (i && i.scroll !== this.quill.scroll)
        return;
      const o = this.quill.getSelection();
      if (o == null || !this.quill.hasFocus())
        return;
      const [a, c] = this.quill.getLine(o.index), [h, f] = this.quill.getLeaf(o.index), [g, m] = o.length === 0 ? [h, f] : this.quill.getLeaf(o.index + o.length), p = h instanceof dn ? h.value().slice(0, f) : "", b = g instanceof dn ? g.value().slice(m) : "", E = {
        collapsed: o.length === 0,
        // @ts-expect-error Fix me later
        empty: o.length === 0 && a.length() <= 1,
        format: this.quill.getFormat(o),
        line: a,
        offset: c,
        prefix: p,
        suffix: b,
        event: t
      };
      n.some((y) => {
        if (y.collapsed != null && y.collapsed !== E.collapsed || y.empty != null && y.empty !== E.empty || y.offset != null && y.offset !== E.offset)
          return !1;
        if (Array.isArray(y.format)) {
          if (y.format.every((x) => E.format[x] == null))
            return !1;
        } else if (typeof y.format == "object" && !Object.keys(y.format).every((x) => y.format[x] === !0 ? E.format[x] != null : y.format[x] === !1 ? E.format[x] == null : jr(y.format[x], E.format[x])))
          return !1;
        return y.prefix != null && !y.prefix.test(E.prefix) || y.suffix != null && !y.suffix.test(E.suffix) ? !1 : y.handler.call(this, o, E, y) !== !0;
      }) && t.preventDefault();
    });
  }
  handleBackspace(t, e) {
    const s = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(e.prefix) ? 2 : 1;
    if (t.index === 0 || this.quill.getLength() <= 1)
      return;
    let n = {};
    const [i] = this.quill.getLine(t.index);
    let o = new O().retain(t.index - s).delete(s);
    if (e.offset === 0) {
      const [a] = this.quill.getLine(t.index - 1);
      if (a && !(a.statics.blotName === "block" && a.length() <= 1)) {
        const h = i.formats(), f = this.quill.getFormat(t.index - 1, 1);
        if (n = St.AttributeMap.diff(h, f) || {}, Object.keys(n).length > 0) {
          const g = new O().retain(t.index + i.length() - 2).retain(1, n);
          o = o.compose(g);
        }
      }
    }
    this.quill.updateContents(o, A.sources.USER), this.quill.focus();
  }
  handleDelete(t, e) {
    const s = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(e.suffix) ? 2 : 1;
    if (t.index >= this.quill.getLength() - s)
      return;
    let n = {};
    const [i] = this.quill.getLine(t.index);
    let o = new O().retain(t.index).delete(s);
    if (e.offset >= i.length() - 1) {
      const [a] = this.quill.getLine(t.index + 1);
      if (a) {
        const c = i.formats(), h = this.quill.getFormat(t.index, 1);
        n = St.AttributeMap.diff(c, h) || {}, Object.keys(n).length > 0 && (o = o.retain(a.length() - 1).retain(1, n));
      }
    }
    this.quill.updateContents(o, A.sources.USER), this.quill.focus();
  }
  handleDeleteRange(t) {
    ei({
      range: t,
      quill: this.quill
    }), this.quill.focus();
  }
  handleEnter(t, e) {
    const s = Object.keys(e.format).reduce((i, o) => (this.quill.scroll.query(o, I.BLOCK) && !Array.isArray(e.format[o]) && (i[o] = e.format[o]), i), {}), n = new O().retain(t.index).delete(t.length).insert("\n", s);
    this.quill.updateContents(n, A.sources.USER), this.quill.setSelection(t.index + 1, A.sources.SILENT), this.quill.focus();
  }
}
const Fo = {
  bindings: {
    bold: br("bold"),
    italic: br("italic"),
    underline: br("underline"),
    indent: {
      // highlight tab or tab at beginning of list, indent or blockquote
      key: "Tab",
      format: ["blockquote", "indent", "list"],
      handler(r, t) {
        return t.collapsed && t.offset !== 0 ? !0 : (this.quill.format("indent", "+1", A.sources.USER), !1);
      }
    },
    outdent: {
      key: "Tab",
      shiftKey: !0,
      format: ["blockquote", "indent", "list"],
      // highlight tab or tab at beginning of list, indent or blockquote
      handler(r, t) {
        return t.collapsed && t.offset !== 0 ? !0 : (this.quill.format("indent", "-1", A.sources.USER), !1);
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
        t.format.indent != null ? this.quill.format("indent", "-1", A.sources.USER) : t.format.list != null && this.quill.format("list", !1, A.sources.USER);
      }
    },
    "indent code-block": Ai(!0),
    "outdent code-block": Ai(!1),
    "remove tab": {
      key: "Tab",
      shiftKey: !0,
      collapsed: !0,
      prefix: /\t$/,
      handler(r) {
        this.quill.deleteText(r.index - 1, 1, A.sources.USER);
      }
    },
    tab: {
      key: "Tab",
      handler(r, t) {
        if (t.format.table)
          return !0;
        this.quill.history.cutoff();
        const e = new O().retain(r.index).delete(r.length).insert("	");
        return this.quill.updateContents(e, A.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(r.index + 1, A.sources.SILENT), !1;
      }
    },
    "blockquote empty enter": {
      key: "Enter",
      collapsed: !0,
      format: ["blockquote"],
      empty: !0,
      handler() {
        this.quill.format("blockquote", !1, A.sources.USER);
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
        t.format.indent && (e.indent = !1), this.quill.formatLine(r.index, r.length, e, A.sources.USER);
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
        }, n = new O().retain(r.index).insert("\n", s).retain(t.length() - e - 1).retain(1, {
          list: "unchecked"
        });
        this.quill.updateContents(n, A.sources.USER), this.quill.setSelection(r.index + 1, A.sources.SILENT), this.quill.scrollSelectionIntoView();
      }
    },
    "header enter": {
      key: "Enter",
      collapsed: !0,
      format: ["header"],
      suffix: /^$/,
      handler(r, t) {
        const [e, s] = this.quill.getLine(r.index), n = new O().retain(r.index).insert("\n", t.format).retain(e.length() - s - 1).retain(1, {
          header: null
        });
        this.quill.updateContents(n, A.sources.USER), this.quill.setSelection(r.index + 1, A.sources.SILENT), this.quill.scrollSelectionIntoView();
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
          const [e, s, n, i] = t.getTable(r), o = Ko(e, s, n, i);
          if (o == null)
            return;
          let a = e.offset();
          if (o < 0) {
            const c = new O().retain(a).insert("\n");
            this.quill.updateContents(c, A.sources.USER), this.quill.setSelection(r.index + 1, r.length, A.sources.SILENT);
          } else if (o > 0) {
            a += e.length();
            const c = new O().retain(a).insert("\n");
            this.quill.updateContents(c, A.sources.USER), this.quill.setSelection(a, A.sources.USER);
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
        e.shiftKey ? this.quill.setSelection(n - 1, A.sources.USER) : this.quill.setSelection(n + s.length(), A.sources.USER);
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
        this.quill.insertText(r.index, " ", A.sources.USER), this.quill.history.cutoff();
        const o = new O().retain(r.index - n).delete(e + 1).retain(s.length() - 2 - n).retain(1, {
          list: i
        });
        return this.quill.updateContents(o, A.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(r.index - e, A.sources.SILENT), !1;
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
            const i = new O().retain(r.index + t.length() - e - 2).retain(1, {
              "code-block": null
            }).delete(1);
            return this.quill.updateContents(i, A.sources.USER), this.quill.setSelection(r.index - 1, A.sources.SILENT), !1;
          }
        return !0;
      }
    },
    "embed left": nn("ArrowLeft", !1),
    "embed left shift": nn("ArrowLeft", !0),
    "embed right": nn("ArrowRight", !1),
    "embed right shift": nn("ArrowRight", !0),
    "table down": xi(!1),
    "table up": xi(!0)
  }
};
En.DEFAULTS = Fo;
function Ai(r) {
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
        this.quill.insertText(t.index, i, A.sources.USER), this.quill.setSelection(t.index + i.length, A.sources.SILENT);
        return;
      }
      const o = t.length === 0 ? this.quill.getLines(t.index, 1) : this.quill.getLines(t);
      let {
        index: a,
        length: c
      } = t;
      o.forEach((h, f) => {
        r ? (h.insertAt(0, i), f === 0 ? a += i.length : c += i.length) : h.domNode.textContent.startsWith(i) && (h.deleteAt(0, i.length), f === 0 ? a -= i.length : c -= i.length);
      }), this.quill.update(A.sources.USER), this.quill.setSelection(a, c, A.sources.SILENT);
    }
  };
}
function nn(r, t) {
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
      return i instanceof Et ? (r === "ArrowLeft" ? t ? this.quill.setSelection(s.index - 1, s.length + 1, A.sources.USER) : this.quill.setSelection(s.index - 1, A.sources.USER) : t ? this.quill.setSelection(s.index, s.length + 1, A.sources.USER) : this.quill.setSelection(s.index + s.length + 1, A.sources.USER), !1) : !0;
    }
  };
}
function br(r) {
  return {
    key: r[0],
    shortKey: !0,
    handler(t, e) {
      this.quill.format(r, !e.format[r], A.sources.USER);
    }
  };
}
function xi(r) {
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
          const c = o.offset(this.quill.scroll) + Math.min(e.offset, o.length() - 1);
          this.quill.setSelection(c, 0, A.sources.USER);
        }
      } else {
        const o = n.table()[s];
        o != null && (r ? this.quill.setSelection(o.offset(this.quill.scroll) + o.length() - 1, 0, A.sources.USER) : this.quill.setSelection(o.offset(this.quill.scroll), 0, A.sources.USER));
      }
      return !1;
    }
  };
}
function Vo(r) {
  if (typeof r == "string" || typeof r == "number")
    r = {
      key: r
    };
  else if (typeof r == "object")
    r = Qe(r);
  else
    return null;
  return r.shortKey && (r[zo] = r.shortKey, delete r.shortKey), r;
}
function ei(r) {
  let {
    quill: t,
    range: e
  } = r;
  const s = t.getLines(e);
  let n = {};
  if (s.length > 1) {
    const i = s[0].formats(), o = s[s.length - 1].formats();
    n = St.AttributeMap.diff(o, i) || {};
  }
  t.deleteText(e, A.sources.USER), Object.keys(n).length > 0 && t.formatLine(e.index, 1, n, A.sources.USER), t.setSelection(e.index, A.sources.SILENT);
}
function Ko(r, t, e, s) {
  return t.prev == null && t.next == null ? e.prev == null && e.next == null ? s === 0 ? -1 : 1 : e.prev == null ? -1 : 1 : t.prev == null ? -1 : t.next == null ? 1 : null;
}
const Go = /font-weight:\s*normal/, Zo = ["P", "OL", "UL"], Li = (r) => r && Zo.includes(r.tagName), Wo = (r) => {
  Array.from(r.querySelectorAll("br")).filter((t) => Li(t.previousElementSibling) && Li(t.nextElementSibling)).forEach((t) => {
    var e;
    (e = t.parentNode) == null || e.removeChild(t);
  });
}, Xo = (r) => {
  Array.from(r.querySelectorAll('b[style*="font-weight"]')).filter((t) => {
    var e;
    return (e = t.getAttribute("style")) == null ? void 0 : e.match(Go);
  }).forEach((t) => {
    var s;
    const e = r.createDocumentFragment();
    e.append(...t.childNodes), (s = t.parentNode) == null || s.replaceChild(e, t);
  });
};
function Yo(r) {
  r.querySelector('[id^="docs-internal-guid-"]') && (Xo(r), Wo(r));
}
const Jo = /\bmso-list:[^;]*ignore/i, Qo = /\bmso-list:[^;]*\bl(\d+)/i, ta = /\bmso-list:[^;]*\blevel(\d+)/i, ea = (r, t) => {
  const e = r.getAttribute("style"), s = e == null ? void 0 : e.match(Qo);
  if (!s)
    return null;
  const n = Number(s[1]), i = e == null ? void 0 : e.match(ta), o = i ? Number(i[1]) : 1, a = new RegExp("@list l".concat(n, ":level").concat(o, "\\s*\\{[^\\}]*mso-level-number-format:\\s*([\\w-]+)"), "i"), c = t.match(a), h = c && c[1] === "bullet" ? "bullet" : "ordered";
  return {
    id: n,
    indent: o,
    type: h,
    element: r
  };
}, sa = (r) => {
  var o, a;
  const t = Array.from(r.querySelectorAll("[style*=mso-list]")), e = [], s = [];
  t.forEach((c) => {
    (c.getAttribute("style") || "").match(Jo) ? e.push(c) : s.push(c);
  }), e.forEach((c) => {
    var h;
    return (h = c.parentNode) == null ? void 0 : h.removeChild(c);
  });
  const n = r.documentElement.innerHTML, i = s.map((c) => ea(c, n)).filter((c) => c);
  for (; i.length; ) {
    const c = [];
    let h = i.shift();
    for (; h; )
      c.push(h), h = i.length && ((o = i[0]) == null ? void 0 : o.element) === h.element.nextElementSibling && // Different id means the next item doesn't belong to this group.
      i[0].id === h.id ? i.shift() : null;
    const f = document.createElement("ul");
    c.forEach((p) => {
      const b = document.createElement("li");
      b.setAttribute("data-list", p.type), p.indent > 1 && b.setAttribute("class", "ql-indent-".concat(p.indent - 1)), b.innerHTML = p.element.innerHTML, f.appendChild(b);
    });
    const g = (a = c[0]) == null ? void 0 : a.element, {
      parentNode: m
    } = g != null ? g : {};
    g && (m == null || m.replaceChild(f, g)), c.slice(1).forEach((p) => {
      let {
        element: b
      } = p;
      m == null || m.removeChild(b);
    });
  }
};
function na(r) {
  r.documentElement.getAttribute("xmlns:w") === "urn:schemas-microsoft-com:office:word" && sa(r);
}
const ra = [na, Yo], ia = (r) => {
  r.documentElement && ra.forEach((t) => {
    t(r);
  });
}, la = ne("quill:clipboard"), oa = [[Node.TEXT_NODE, va], [Node.TEXT_NODE, Ci], ["br", da], [Node.ELEMENT_NODE, Ci], [Node.ELEMENT_NODE, ha], [Node.ELEMENT_NODE, ua], [Node.ELEMENT_NODE, ba], ["li", pa], ["ol, ul", ga], ["pre", fa], ["tr", ya], ["b", yr("bold")], ["i", yr("italic")], ["strike", yr("strike")], ["style", ma]], aa = [Do, dl].reduce((r, t) => (r[t.keyName] = t, r), {}), Ti = [ul, Jr, Yr, ml, bl, vl].reduce((r, t) => (r[t.keyName] = t, r), {});
class wl extends jt {
  constructor(t, e) {
    var s;
    super(t, e), this.quill.root.addEventListener("copy", (n) => this.onCaptureCopy(n, !1)), this.quill.root.addEventListener("cut", (n) => this.onCaptureCopy(n, !0)), this.quill.root.addEventListener("paste", this.onCapturePaste.bind(this)), this.matchers = [], oa.concat((s = this.options.matchers) != null ? s : []).forEach((n) => {
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
    if (n[ht.blotName])
      return new O().insert(s || "", {
        [ht.blotName]: n[ht.blotName]
      });
    if (!e)
      return new O().insert(s || "", n);
    const i = this.convertHTML(e);
    return Rs(i, "\n") && (i.ops[i.ops.length - 1].attributes == null || n.table) ? i.compose(new O().retain(i.length() - 1).delete(1)) : i;
  }
  normalizeHTML(t) {
    ia(t);
  }
  convertHTML(t) {
    const e = new DOMParser().parseFromString(t, "text/html");
    this.normalizeHTML(e);
    const s = e.body, n = /* @__PURE__ */ new WeakMap(), [i, o] = this.prepareMatching(s, n);
    return si(this.quill.scroll, s, i, o, n);
  }
  dangerouslyPasteHTML(t, e) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : A.sources.API;
    if (typeof t == "string") {
      const n = this.convert({
        html: t,
        text: ""
      });
      this.quill.setContents(n, e), this.quill.setSelection(0, A.sources.SILENT);
    } else {
      const n = this.convert({
        html: e,
        text: ""
      });
      this.quill.updateContents(new O().retain(t).concat(n), s), this.quill.setSelection(t + n.length(), A.sources.SILENT);
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
    (o = t.clipboardData) == null || o.setData("text/plain", i), (a = t.clipboardData) == null || a.setData("text/html", n), e && ei({
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
    var o, a, c, h, f;
    if (t.defaultPrevented || !this.quill.isEnabled())
      return;
    t.preventDefault();
    const e = this.quill.getSelection(!0);
    if (e == null)
      return;
    const s = (o = t.clipboardData) == null ? void 0 : o.getData("text/html");
    let n = (a = t.clipboardData) == null ? void 0 : a.getData("text/plain");
    if (!s && !n) {
      const g = (c = t.clipboardData) == null ? void 0 : c.getData("text/uri-list");
      g && (n = this.normalizeURIList(g));
    }
    const i = Array.from(((h = t.clipboardData) == null ? void 0 : h.files) || []);
    if (!s && i.length > 0) {
      this.quill.uploader.upload(e, i);
      return;
    }
    if (s && i.length > 0) {
      const g = new DOMParser().parseFromString(s, "text/html");
      if (g.body.childElementCount === 1 && ((f = g.body.firstElementChild) == null ? void 0 : f.tagName) === "IMG") {
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
    la.log("onPaste", o, {
      text: s,
      html: n
    });
    const a = new O().retain(t.index).delete(t.length).concat(o);
    this.quill.updateContents(a, A.sources.USER), this.quill.setSelection(a.length() - t.length, A.sources.SILENT), this.quill.scrollSelectionIntoView();
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
          Array.from(t.querySelectorAll(o)).forEach((c) => {
            if (e.has(c)) {
              const h = e.get(c);
              h == null || h.push(a);
            } else
              e.set(c, [a]);
          });
          break;
      }
    }), [s, n];
  }
}
N(wl, "DEFAULTS", {
  matchers: []
});
function _e(r, t, e, s) {
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
  }, new O()) : r;
}
function Rs(r, t) {
  let e = "";
  for (let s = r.ops.length - 1; s >= 0 && e.length < t.length; --s) {
    const n = r.ops[s];
    if (typeof n.insert != "string")
      break;
    e = n.insert + e;
  }
  return e.slice(-1 * t.length) === t;
}
function de(r, t) {
  if (!(r instanceof Element))
    return !1;
  const e = t.query(r);
  return e && e.prototype instanceof Et ? !1 : ["address", "article", "blockquote", "canvas", "dd", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "iframe", "li", "main", "nav", "ol", "output", "p", "pre", "section", "table", "td", "tr", "ul", "video"].includes(r.tagName.toLowerCase());
}
function ca(r, t) {
  return r.previousElementSibling && r.nextElementSibling && !de(r.previousElementSibling, t) && !de(r.nextElementSibling, t);
}
const rn = /* @__PURE__ */ new WeakMap();
function El(r) {
  return r == null ? !1 : (rn.has(r) || (r.tagName === "PRE" ? rn.set(r, !0) : rn.set(r, El(r.parentNode))), rn.get(r));
}
function si(r, t, e, s, n) {
  return t.nodeType === t.TEXT_NODE ? s.reduce((i, o) => o(t, i, r), new O()) : t.nodeType === t.ELEMENT_NODE ? Array.from(t.childNodes || []).reduce((i, o) => {
    let a = si(r, o, e, s, n);
    return o.nodeType === t.ELEMENT_NODE && (a = e.reduce((c, h) => h(o, c, r), a), a = (n.get(o) || []).reduce((c, h) => h(o, c, r), a)), i.concat(a);
  }, new O()) : new O();
}
function yr(r) {
  return (t, e, s) => _e(e, r, !0, s);
}
function ua(r, t, e) {
  const s = Zt.keys(r), n = Pt.keys(r), i = pe.keys(r), o = {};
  return s.concat(n).concat(i).forEach((a) => {
    let c = e.query(a, I.ATTRIBUTE);
    c != null && (o[c.attrName] = c.value(r), o[c.attrName]) || (c = aa[a], c != null && (c.attrName === a || c.keyName === a) && (o[c.attrName] = c.value(r) || void 0), c = Ti[a], c != null && (c.attrName === a || c.keyName === a) && (c = Ti[a], o[c.attrName] = c.value(r) || void 0));
  }), Object.entries(o).reduce((a, c) => {
    let [h, f] = c;
    return _e(a, h, f, e);
  }, t);
}
function ha(r, t, e) {
  const s = e.query(r);
  if (s == null)
    return t;
  if (s.prototype instanceof Et) {
    const n = {}, i = s.value(r);
    if (i != null)
      return n[s.blotName] = i, new O().insert(n, s.formats(r, e));
  } else if (s.prototype instanceof Ts && !Rs(t, "\n") && t.insert("\n"), "blotName" in s && "formats" in s && typeof s.formats == "function")
    return _e(t, s.blotName, s.formats(r, e), e);
  return t;
}
function da(r, t) {
  return Rs(t, "\n") || t.insert("\n"), t;
}
function fa(r, t, e) {
  const s = e.query("code-block"), n = s && "formats" in s && typeof s.formats == "function" ? s.formats(r, e) : !0;
  return _e(t, "code-block", n, e);
}
function ma() {
  return new O();
}
function pa(r, t, e) {
  const s = e.query(r);
  if (s == null || // @ts-expect-error
  s.blotName !== "list" || !Rs(t, "\n"))
    return t;
  let n = -1, i = r.parentNode;
  for (; i != null; )
    ["OL", "UL"].includes(i.tagName) && (n += 1), i = i.parentNode;
  return n <= 0 ? t : t.reduce((o, a) => a.insert ? a.attributes && typeof a.attributes.indent == "number" ? o.push(a) : o.insert(a.insert, {
    indent: n,
    ...a.attributes || {}
  }) : o, new O());
}
function ga(r, t, e) {
  const s = r;
  let n = s.tagName === "OL" ? "ordered" : "bullet";
  const i = s.getAttribute("data-checked");
  return i && (n = i === "true" ? "checked" : "unchecked"), _e(t, "list", n, e);
}
function Ci(r, t, e) {
  if (!Rs(t, "\n")) {
    if (de(r, e) && (r.childNodes.length > 0 || r instanceof HTMLParagraphElement))
      return t.insert("\n");
    if (t.length() > 0 && r.nextSibling) {
      let s = r.nextSibling;
      for (; s != null; ) {
        if (de(s, e))
          return t.insert("\n");
        const n = e.query(s);
        if (n && n.prototype instanceof qt)
          return t.insert("\n");
        s = s.firstChild;
      }
    }
  }
  return t;
}
function ba(r, t, e) {
  var i;
  const s = {}, n = r.style || {};
  return n.fontStyle === "italic" && (s.italic = !0), n.textDecoration === "underline" && (s.underline = !0), n.textDecoration === "line-through" && (s.strike = !0), ((i = n.fontWeight) != null && i.startsWith("bold") || // @ts-expect-error Fix me later
  parseInt(n.fontWeight, 10) >= 700) && (s.bold = !0), t = Object.entries(s).reduce((o, a) => {
    let [c, h] = a;
    return _e(o, c, h, e);
  }, t), parseFloat(n.textIndent || 0) > 0 ? new O().insert("	").concat(t) : t;
}
function ya(r, t, e) {
  var n, i;
  const s = ((n = r.parentElement) == null ? void 0 : n.tagName) === "TABLE" ? r.parentElement : (i = r.parentElement) == null ? void 0 : i.parentElement;
  if (s != null) {
    const a = Array.from(s.querySelectorAll("tr")).indexOf(r) + 1;
    return _e(t, "table", a, e);
  }
  return t;
}
function va(r, t, e) {
  var n;
  let s = r.data;
  if (((n = r.parentElement) == null ? void 0 : n.tagName) === "O:P")
    return t.insert(s.trim());
  if (!El(r)) {
    if (s.trim().length === 0 && s.includes("\n") && !ca(r, e))
      return t;
    const i = (o, a) => {
      const c = a.replace(/[^\u00a0]/g, "");
      return c.length < 1 && o ? " " : c;
    };
    s = s.replace(/\r\n/g, " ").replace(/\n/g, " "), s = s.replace(/\s\s+/g, i.bind(i, !0)), (r.previousSibling == null && r.parentElement != null && de(r.parentElement, e) || r.previousSibling instanceof Element && de(r.previousSibling, e)) && (s = s.replace(/^\s+/, i.bind(i, !1))), (r.nextSibling == null && r.parentElement != null && de(r.parentElement, e) || r.nextSibling instanceof Element && de(r.nextSibling, e)) && (s = s.replace(/\s+$/, i.bind(i, !1)));
  }
  return t.insert(s);
}
class Nl extends jt {
  constructor(e, s) {
    super(e, s);
    N(this, "lastRecorded", 0);
    N(this, "ignoreChange", !1);
    N(this, "stack", {
      undo: [],
      redo: []
    });
    N(this, "currentRange", null);
    this.quill.on(A.events.EDITOR_CHANGE, (n, i, o, a) => {
      n === A.events.SELECTION_CHANGE ? i && a !== A.sources.SILENT && (this.currentRange = i) : n === A.events.TEXT_CHANGE && (this.ignoreChange || (!this.options.userOnly || a === A.sources.USER ? this.record(i, o) : this.transform(i)), this.currentRange = Or(this.currentRange, i));
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
      range: Or(n.range, o)
    }), this.lastRecorded = 0, this.ignoreChange = !0, this.quill.updateContents(n.delta, A.sources.USER), this.ignoreChange = !1, this.restoreSelection(n);
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
    qi(this.stack.undo, e), qi(this.stack.redo, e);
  }
  undo() {
    this.change("undo", "redo");
  }
  restoreSelection(e) {
    if (e.range)
      this.quill.setSelection(e.range, A.sources.USER);
    else {
      const s = Ea(this.quill.scroll, e.delta);
      this.quill.setSelection(s, A.sources.USER);
    }
  }
}
N(Nl, "DEFAULTS", {
  delay: 1e3,
  maxStack: 100,
  userOnly: !1
});
function qi(r, t) {
  let e = t;
  for (let s = r.length - 1; s >= 0; s -= 1) {
    const n = r[s];
    r[s] = {
      delta: e.transform(n.delta, !0),
      range: n.range && Or(n.range, e)
    }, e = n.delta.transform(e), r[s].delta.length() === 0 && r.splice(s, 1);
  }
}
function wa(r, t) {
  const e = t.ops[t.ops.length - 1];
  return e == null ? !1 : e.insert != null ? typeof e.insert == "string" && e.insert.endsWith("\n") : e.attributes != null ? Object.keys(e.attributes).some((s) => r.query(s, I.BLOCK) != null) : !1;
}
function Ea(r, t) {
  const e = t.reduce((n, i) => n + (i.delete || 0), 0);
  let s = t.length() - e;
  return wa(r, t) && (s -= 1), s;
}
function Or(r, t) {
  if (!r)
    return r;
  const e = t.transformPosition(r.index), s = t.transformPosition(r.index + r.length);
  return {
    index: e,
    length: s - e
  };
}
class Al extends jt {
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
Al.DEFAULTS = {
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
      }), new O().retain(r.index).delete(r.length));
      this.quill.updateContents(n, q.sources.USER), this.quill.setSelection(r.index + s.length, q.sources.SILENT);
    });
  }
};
const Na = ["insertText", "insertReplacementText"];
class Aa extends jt {
  constructor(t, e) {
    super(t, e), t.root.addEventListener("beforeinput", (s) => {
      this.handleBeforeInput(s);
    }), /Android/i.test(navigator.userAgent) || t.on(A.events.COMPOSITION_BEFORE_START, () => {
      this.handleCompositionStart();
    });
  }
  deleteRange(t) {
    ei({
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
      this.deleteRange(t), this.quill.updateContents(new O().retain(t.index).insert(e, s), A.sources.USER);
    } else
      this.deleteRange(t);
    return this.quill.setSelection(t.index + e.length, 0, A.sources.SILENT), !0;
  }
  handleBeforeInput(t) {
    if (this.quill.composition.isComposing || t.defaultPrevented || !Na.includes(t.inputType))
      return;
    const e = t.getTargetRanges ? t.getTargetRanges()[0] : null;
    if (!e || e.collapsed === !0)
      return;
    const s = xa(t);
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
function xa(r) {
  var t;
  return typeof r.data == "string" ? r.data : (t = r.dataTransfer) != null && t.types.includes("text/plain") ? r.dataTransfer.getData("text/plain") : null;
}
const La = /Mac/i.test(navigator.platform), Ta = 100, Ca = (r) => !!(r.key === "ArrowLeft" || r.key === "ArrowRight" || // RTL scripts or moving from the end of the previous line
r.key === "ArrowUp" || r.key === "ArrowDown" || r.key === "Home" || La && r.key === "a" && r.ctrlKey === !0);
class qa extends jt {
  constructor(e, s) {
    super(e, s);
    N(this, "isListening", !1);
    N(this, "selectionChangeDeadline", 0);
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
        if (!(n instanceof Ut) || !n.uiNode)
          return !0;
        const o = getComputedStyle(n.domNode).direction === "rtl";
        return o && i.key !== "ArrowRight" || !o && i.key !== "ArrowLeft" ? !0 : (this.quill.setSelection(e.index - 1, e.length + (i.shiftKey ? 1 : 0), A.sources.USER), !1);
      }
    });
  }
  handleNavigationShortcuts() {
    this.quill.root.addEventListener("keydown", (e) => {
      !e.defaultPrevented && Ca(e) && this.ensureListeningToSelectionChange();
    });
  }
  /**
   * We only listen to the `selectionchange` event when
   * there is an intention of moving the caret to the beginning using shortcuts.
   * This is primarily implemented to prevent infinite loops, as we are changing
   * the selection within the handler of a `selectionchange` event.
   */
  ensureListeningToSelectionChange() {
    if (this.selectionChangeDeadline = Date.now() + Ta, this.isListening)
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
    if (!(n instanceof Ut) || !n.uiNode)
      return;
    const i = document.createRange();
    i.setStartAfter(n.uiNode), i.setEndAfter(n.uiNode), e.removeAllRanges(), e.addRange(i);
  }
}
A.register({
  "blots/block": lt,
  "blots/block/embed": qt,
  "blots/break": Ht,
  "blots/container": Oe,
  "blots/cursor": ns,
  "blots/embed": Wr,
  "blots/inline": ge,
  "blots/scroll": Je,
  "blots/text": Dt,
  "modules/clipboard": wl,
  "modules/history": Nl,
  "modules/keyboard": En,
  "modules/uploader": Al,
  "modules/input": Aa,
  "modules/uiNode": qa
});
class Sa extends Pt {
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
const ka = new Sa("indent", "ql-indent", {
  scope: I.BLOCK,
  // @ts-expect-error
  whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
});
class Ir extends lt {
}
N(Ir, "blotName", "blockquote"), N(Ir, "tagName", "blockquote");
class _r extends lt {
  static formats(t) {
    return this.tagName.indexOf(t.tagName) + 1;
  }
}
N(_r, "blotName", "header"), N(_r, "tagName", ["H1", "H2", "H3", "H4", "H5", "H6"]);
class Ms extends Oe {
}
Ms.blotName = "list-container";
Ms.tagName = "OL";
class Bs extends lt {
  static create(t) {
    const e = super.create();
    return e.setAttribute("data-list", t), e;
  }
  static formats(t) {
    return t.getAttribute("data-list") || void 0;
  }
  static register() {
    A.register(Ms);
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
Bs.blotName = "list";
Bs.tagName = "LI";
Ms.allowedChildren = [Bs];
Bs.requiredContainer = Ms;
class Ss extends ge {
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
N(Ss, "blotName", "bold"), N(Ss, "tagName", ["STRONG", "B"]);
class Rr extends Ss {
}
N(Rr, "blotName", "italic"), N(Rr, "tagName", ["EM", "I"]);
class fe extends ge {
  static create(t) {
    const e = super.create(t);
    return e.setAttribute("href", this.sanitize(t)), e.setAttribute("rel", "noopener noreferrer"), e.setAttribute("target", "_blank"), e;
  }
  static formats(t) {
    return t.getAttribute("href");
  }
  static sanitize(t) {
    return xl(t, this.PROTOCOL_WHITELIST) ? t : this.SANITIZED_URL;
  }
  format(t, e) {
    t !== this.statics.blotName || !e ? super.format(t, e) : this.domNode.setAttribute("href", this.constructor.sanitize(e));
  }
}
N(fe, "blotName", "link"), N(fe, "tagName", "A"), N(fe, "SANITIZED_URL", "about:blank"), N(fe, "PROTOCOL_WHITELIST", ["http", "https", "mailto", "tel", "sms"]);
function xl(r, t) {
  const e = document.createElement("a");
  e.href = r;
  const s = e.href.slice(0, e.href.indexOf(":"));
  return t.indexOf(s) > -1;
}
class Mr extends ge {
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
N(Mr, "blotName", "script"), N(Mr, "tagName", ["SUB", "SUP"]);
class Br extends Ss {
}
N(Br, "blotName", "strike"), N(Br, "tagName", ["S", "STRIKE"]);
class Ur extends ge {
}
N(Ur, "blotName", "underline"), N(Ur, "tagName", "U");
class an extends Wr {
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
N(an, "blotName", "formula"), N(an, "className", "ql-formula"), N(an, "tagName", "SPAN");
const Si = ["alt", "height", "width"];
class Dr extends Et {
  static create(t) {
    const e = super.create(t);
    return typeof t == "string" && e.setAttribute("src", this.sanitize(t)), e;
  }
  static formats(t) {
    return Si.reduce((e, s) => (t.hasAttribute(s) && (e[s] = t.getAttribute(s)), e), {});
  }
  static match(t) {
    return /\.(jpe?g|gif|png)$/.test(t) || /^data:image\/.+;base64/.test(t);
  }
  static sanitize(t) {
    return xl(t, ["http", "https", "data"]) ? t : "//:0";
  }
  static value(t) {
    return t.getAttribute("src");
  }
  format(t, e) {
    Si.indexOf(t) > -1 ? e ? this.domNode.setAttribute(t, e) : this.domNode.removeAttribute(t) : super.format(t, e);
  }
}
N(Dr, "blotName", "image"), N(Dr, "tagName", "IMG");
const ki = ["height", "width"];
class cn extends qt {
  static create(t) {
    const e = super.create(t);
    return e.setAttribute("frameborder", "0"), e.setAttribute("allowfullscreen", "true"), e.setAttribute("src", this.sanitize(t)), e;
  }
  static formats(t) {
    return ki.reduce((e, s) => (t.hasAttribute(s) && (e[s] = t.getAttribute(s)), e), {});
  }
  static sanitize(t) {
    return fe.sanitize(t);
  }
  static value(t) {
    return t.getAttribute("src");
  }
  format(t, e) {
    ki.indexOf(t) > -1 ? e ? this.domNode.setAttribute(t, e) : this.domNode.removeAttribute(t) : super.format(t, e);
  }
  html() {
    const {
      video: t
    } = this.value();
    return '<a href="'.concat(t, '">').concat(t, "</a>");
  }
}
N(cn, "blotName", "video"), N(cn, "className", "ql-video"), N(cn, "tagName", "IFRAME");
const Ns = new Pt("code-token", "hljs", {
  scope: I.INLINE
});
class ee extends ge {
  static formats(t, e) {
    for (; t != null && t !== e.domNode; ) {
      if (t.classList && t.classList.contains(ht.className))
        return super.formats(t, e);
      t = t.parentNode;
    }
  }
  constructor(t, e, s) {
    super(t, e, s), Ns.add(this.domNode, s);
  }
  format(t, e) {
    t !== ee.blotName ? super.format(t, e) : e ? Ns.add(this.domNode, e) : (Ns.remove(this.domNode), this.domNode.classList.remove(this.statics.className));
  }
  optimize() {
    super.optimize(...arguments), Ns.value(this.domNode) || this.unwrap();
  }
}
ee.blotName = "code-token";
ee.className = "ql-token";
class Tt extends ht {
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
    return this.formatAt(0, this.length(), ee.blotName, !1), super.replaceWith(t, e);
  }
}
class As extends Ie {
  attach() {
    super.attach(), this.forceNext = !1, this.scroll.emitMount(this);
  }
  format(t, e) {
    t === Tt.blotName && (this.forceNext = !0, this.children.forEach((s) => {
      s.format(t, e);
    }));
  }
  formatAt(t, e, s, n) {
    s === Tt.blotName && (this.forceNext = !0), super.formatAt(t, e, s, n);
  }
  highlight(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (this.children.head == null)
      return;
    const s = Array.from(this.domNode.childNodes).filter((o) => o !== this.uiNode), n = "".concat(s.map((o) => o.textContent).join("\n"), "\n"), i = Tt.formats(this.children.head.domNode);
    if (e || this.forceNext || this.cachedText !== n) {
      if (n.trim().length > 0 || this.cachedText == null) {
        const o = this.children.reduce((c, h) => c.concat(ll(h, !1)), new O()), a = t(n, i);
        o.diff(a).reduce((c, h) => {
          let {
            retain: f,
            attributes: g
          } = h;
          return f ? (g && Object.keys(g).forEach((m) => {
            [Tt.blotName, ee.blotName].includes(m) && this.formatAt(c, f, m, g[m]);
          }), c + f) : c;
        }, 0);
      }
      this.cachedText = n, this.forceNext = !1;
    }
  }
  html(t, e) {
    const [s] = this.children.find(t), n = s ? Tt.formats(s.domNode) : "plain";
    return '<pre data-language="'.concat(n, '">\n').concat(wn(this.code(t, e)), "\n</pre>");
  }
  optimize(t) {
    if (super.optimize(t), this.parent != null && this.children.head != null && this.uiNode != null) {
      const e = Tt.formats(this.children.head.domNode);
      e !== this.uiNode.value && (this.uiNode.value = e);
    }
  }
}
As.allowedChildren = [Tt];
Tt.requiredContainer = As;
Tt.allowedChildren = [ee, ns, Dt, Ht];
const Oa = (r, t, e) => {
  if (typeof r.versionString == "string") {
    const s = r.versionString.split(".")[0];
    if (parseInt(s, 10) >= 11)
      return r.highlight(e, {
        language: t
      }).value;
  }
  return r.highlight(t, e).value;
};
class Ll extends jt {
  static register() {
    A.register(ee, !0), A.register(Tt, !0), A.register(As, !0);
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
    this.quill.on(A.events.SCROLL_BLOT_MOUNT, (t) => {
      if (!(t instanceof As))
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
        t.format(Tt.blotName, e.value), this.quill.root.focus(), this.highlight(t, !0);
      }), t.uiNode == null && (t.attachUI(e), t.children.head && (e.value = Tt.formats(t.children.head.domNode)));
    });
  }
  initTimer() {
    let t = null;
    this.quill.on(A.events.SCROLL_OPTIMIZE, () => {
      t && clearTimeout(t), t = setTimeout(() => {
        this.highlight(), t = null;
      }, this.options.interval);
    });
  }
  highlight() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (this.quill.selection.composing)
      return;
    this.quill.update(A.sources.USER);
    const s = this.quill.getSelection();
    (t == null ? this.quill.scroll.descendants(As) : [t]).forEach((i) => {
      i.highlight(this.highlightBlot, e);
    }), this.quill.update(A.sources.SILENT), s != null && this.quill.setSelection(s, A.sources.SILENT);
  }
  highlightBlot(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "plain";
    if (e = this.languages[e] ? e : "plain", e === "plain")
      return wn(t).split("\n").reduce((n, i, o) => (o !== 0 && n.insert("\n", {
        [ht.blotName]: e
      }), n.insert(i)), new O());
    const s = this.quill.root.ownerDocument.createElement("div");
    return s.classList.add(ht.className), s.innerHTML = Oa(this.options.hljs, e, t), si(this.quill.scroll, s, [(n, i) => {
      const o = Ns.value(n);
      return o ? i.compose(new O().retain(i.length(), {
        [ee.blotName]: o
      })) : i;
    }], [(n, i) => n.data.split("\n").reduce((o, a, c) => (c !== 0 && o.insert("\n", {
      [ht.blotName]: e
    }), o.insert(a)), i)], /* @__PURE__ */ new WeakMap());
  }
}
Ll.DEFAULTS = {
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
const Ls = class Ls extends lt {
  static create(t) {
    const e = super.create();
    return t ? e.setAttribute("data-row", t) : e.setAttribute("data-row", ni()), e;
  }
  static formats(t) {
    if (t.hasAttribute("data-row"))
      return t.getAttribute("data-row");
  }
  cellOffset() {
    return this.parent ? this.parent.children.indexOf(this) : -1;
  }
  format(t, e) {
    t === Ls.blotName && e ? this.domNode.setAttribute("data-row", e) : super.format(t, e);
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
N(Ls, "blotName", "table"), N(Ls, "tagName", "TD");
let Bt = Ls;
class se extends Oe {
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
N(se, "blotName", "table-row"), N(se, "tagName", "TR");
class Gt extends Oe {
}
N(Gt, "blotName", "table-body"), N(Gt, "tagName", "TBODY");
class is extends Oe {
  balanceCells() {
    const t = this.descendants(se), e = t.reduce((s, n) => Math.max(n.children.length, s), 0);
    t.forEach((s) => {
      new Array(e - s.children.length).fill(0).forEach(() => {
        let n;
        s.children.head != null && (n = Bt.formats(s.children.head.domNode));
        const i = this.scroll.create(Bt.blotName, n);
        s.appendChild(i), i.optimize();
      });
    });
  }
  cells(t) {
    return this.rows().map((e) => e.children.at(t));
  }
  deleteColumn(t) {
    const [e] = this.descendant(Gt);
    e == null || e.children.head == null || e.children.forEach((s) => {
      const n = s.children.at(t);
      n != null && n.remove();
    });
  }
  insertColumn(t) {
    const [e] = this.descendant(Gt);
    e == null || e.children.head == null || e.children.forEach((s) => {
      const n = s.children.at(t), i = Bt.formats(s.children.head.domNode), o = this.scroll.create(Bt.blotName, i);
      s.insertBefore(o, n);
    });
  }
  insertRow(t) {
    const [e] = this.descendant(Gt);
    if (e == null || e.children.head == null)
      return;
    const s = ni(), n = this.scroll.create(se.blotName);
    e.children.head.children.forEach(() => {
      const o = this.scroll.create(Bt.blotName, s);
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
N(is, "blotName", "table-container"), N(is, "tagName", "TABLE");
is.allowedChildren = [Gt];
Gt.requiredContainer = is;
Gt.allowedChildren = [se];
se.requiredContainer = Gt;
se.allowedChildren = [Bt];
Bt.requiredContainer = se;
function ni() {
  const r = Math.random().toString(36).slice(2, 6);
  return "row-".concat(r);
}
class Ia extends jt {
  static register() {
    A.register(Bt), A.register(se), A.register(Gt), A.register(is);
  }
  constructor() {
    super(...arguments), this.listenBalanceCells();
  }
  balanceTables() {
    this.quill.scroll.descendants(is).forEach((t) => {
      t.balanceCells();
    });
  }
  deleteColumn() {
    const [t, , e] = this.getTable();
    e != null && (t.deleteColumn(e.cellOffset()), this.quill.update(A.sources.USER));
  }
  deleteRow() {
    const [, t] = this.getTable();
    t != null && (t.remove(), this.quill.update(A.sources.USER));
  }
  deleteTable() {
    const [t] = this.getTable();
    if (t == null)
      return;
    const e = t.offset();
    t.remove(), this.quill.update(A.sources.USER), this.quill.setSelection(e, A.sources.SILENT);
  }
  getTable() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.quill.getSelection();
    if (t == null)
      return [null, null, null, -1];
    const [e, s] = this.quill.getLine(t.index);
    if (e == null || e.statics.blotName !== Bt.blotName)
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
    s.insertColumn(o + t), this.quill.update(A.sources.USER);
    let a = n.rowOffset();
    t === 0 && (a += 1), this.quill.setSelection(e.index + a, e.length, A.sources.SILENT);
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
    s.insertRow(o + t), this.quill.update(A.sources.USER), t > 0 ? this.quill.setSelection(e, A.sources.SILENT) : this.quill.setSelection(e.index + n.children.length, e.length, A.sources.SILENT);
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
        table: ni()
      });
    }, new O().retain(s.index));
    this.quill.updateContents(n, A.sources.USER), this.quill.setSelection(s.index, A.sources.SILENT), this.balanceTables();
  }
  listenBalanceCells() {
    this.quill.on(A.events.SCROLL_OPTIMIZE, (t) => {
      t.some((e) => ["TD", "TR", "TBODY", "TABLE"].includes(e.target.tagName) ? (this.quill.once(A.events.TEXT_CHANGE, (s, n, i) => {
        i === A.sources.USER && this.balanceTables();
      }), !0) : !1);
    });
  }
}
const Oi = ne("quill:toolbar");
class ri extends jt {
  constructor(t, e) {
    var s, n;
    if (super(t, e), Array.isArray(this.options.container)) {
      const i = document.createElement("div");
      i.setAttribute("role", "toolbar"), _a(i, this.options.container), (n = (s = t.container) == null ? void 0 : s.parentNode) == null || n.insertBefore(i, t.container), this.container = i;
    } else
      typeof this.options.container == "string" ? this.container = document.querySelector(this.options.container) : this.container = this.options.container;
    if (!(this.container instanceof HTMLElement)) {
      Oi.error("Container required for toolbar", this.options);
      return;
    }
    this.container.classList.add("ql-toolbar"), this.controls = [], this.handlers = {}, this.options.handlers && Object.keys(this.options.handlers).forEach((i) => {
      var a;
      const o = (a = this.options.handlers) == null ? void 0 : a[i];
      o && this.addHandler(i, o);
    }), Array.from(this.container.querySelectorAll("button, select")).forEach((i) => {
      this.attach(i);
    }), this.quill.on(A.events.EDITOR_CHANGE, () => {
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
      Oi.warn("ignoring attaching to nonexistent format", e, t);
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
        this.quill.scroll.query(e).prototype instanceof Et
      ) {
        if (i = prompt("Enter ".concat(e)), !i)
          return;
        this.quill.updateContents(new O().retain(o.index).delete(o.length).insert({
          [e]: i
        }), A.sources.USER);
      } else
        this.quill.format(e, i, A.sources.USER);
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
ri.DEFAULTS = {};
function Ii(r, t, e) {
  const s = document.createElement("button");
  s.setAttribute("type", "button"), s.classList.add("ql-".concat(t)), s.setAttribute("aria-pressed", "false"), e != null ? (s.value = e, s.setAttribute("aria-label", "".concat(t, ": ").concat(e))) : s.setAttribute("aria-label", t), r.appendChild(s);
}
function _a(r, t) {
  Array.isArray(t[0]) || (t = [t]), t.forEach((e) => {
    const s = document.createElement("span");
    s.classList.add("ql-formats"), e.forEach((n) => {
      if (typeof n == "string")
        Ii(s, n);
      else {
        const i = Object.keys(n)[0], o = n[i];
        Array.isArray(o) ? Ra(s, i, o) : Ii(s, i, o);
      }
    }), r.appendChild(s);
  });
}
function Ra(r, t, e) {
  const s = document.createElement("select");
  s.classList.add("ql-".concat(t)), e.forEach((n) => {
    const i = document.createElement("option");
    n !== !1 ? i.setAttribute("value", String(n)) : i.setAttribute("selected", "selected"), s.appendChild(i);
  }), r.appendChild(s);
}
ri.DEFAULTS = {
  container: null,
  handlers: {
    clean() {
      const r = this.quill.getSelection();
      if (r != null)
        if (r.length === 0) {
          const t = this.quill.getFormat();
          Object.keys(t).forEach((e) => {
            this.quill.scroll.query(e, I.INLINE) != null && this.quill.format(e, !1, A.sources.USER);
          });
        } else
          this.quill.removeFormat(r.index, r.length, A.sources.USER);
    },
    direction(r) {
      const {
        align: t
      } = this.quill.getFormat();
      r === "rtl" && t == null ? this.quill.format("align", "right", A.sources.USER) : !r && t === "right" && this.quill.format("align", !1, A.sources.USER), this.quill.format("direction", r, A.sources.USER);
    },
    indent(r) {
      const t = this.quill.getSelection(), e = this.quill.getFormat(t), s = parseInt(e.indent || 0, 10);
      if (r === "+1" || r === "-1") {
        let n = r === "+1" ? 1 : -1;
        e.direction === "rtl" && (n *= -1), this.quill.format("indent", s + n, A.sources.USER);
      }
    },
    link(r) {
      r === !0 && (r = prompt("Enter link URL:")), this.quill.format("link", r, A.sources.USER);
    },
    list(r) {
      const t = this.quill.getSelection(), e = this.quill.getFormat(t);
      r === "check" ? e.list === "checked" || e.list === "unchecked" ? this.quill.format("list", !1, A.sources.USER) : this.quill.format("list", "unchecked", A.sources.USER) : this.quill.format("list", r, A.sources.USER);
    }
  }
};
const Ma = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"/></svg>', Ba = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"/><line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"/></svg>', Ua = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"/><line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"/></svg>', Da = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="15" x2="3" y1="14" y2="14"/><line class="ql-stroke" x1="15" x2="3" y1="4" y2="4"/></svg>', Pa = '<svg viewbox="0 0 18 18"><g class="ql-fill ql-color-label"><polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"/><rect height="1" width="1" x="4" y="4"/><polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"/><rect height="1" width="1" x="2" y="6"/><rect height="1" width="1" x="3" y="5"/><rect height="1" width="1" x="4" y="7"/><polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"/><rect height="1" width="1" x="2" y="12"/><rect height="1" width="1" x="2" y="9"/><rect height="1" width="1" x="2" y="15"/><polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"/><rect height="1" width="1" x="3" y="8"/><path d="M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z"/><path d="M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z"/><path d="M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z"/><rect height="1" width="1" x="12" y="2"/><rect height="1" width="1" x="11" y="3"/><path d="M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z"/><rect height="1" width="1" x="2" y="3"/><rect height="1" width="1" x="6" y="2"/><rect height="1" width="1" x="3" y="2"/><rect height="1" width="1" x="5" y="3"/><rect height="1" width="1" x="9" y="2"/><rect height="1" width="1" x="15" y="14"/><polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"/><rect height="1" width="1" x="13" y="7"/><rect height="1" width="1" x="15" y="5"/><rect height="1" width="1" x="14" y="6"/><rect height="1" width="1" x="15" y="8"/><rect height="1" width="1" x="14" y="9"/><path d="M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z"/><rect height="1" width="1" x="14" y="3"/><polygon points="12 6.868 12 6 11.62 6 12 6.868"/><rect height="1" width="1" x="15" y="2"/><rect height="1" width="1" x="12" y="5"/><rect height="1" width="1" x="13" y="4"/><polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"/><rect height="1" width="1" x="9" y="14"/><rect height="1" width="1" x="8" y="15"/><path d="M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z"/><rect height="1" width="1" x="5" y="15"/><path d="M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z"/><rect height="1" width="1" x="11" y="15"/><path d="M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z"/><rect height="1" width="1" x="14" y="15"/><rect height="1" width="1" x="15" y="11"/></g><polyline class="ql-stroke" points="5.5 13 9 5 12.5 13"/><line class="ql-stroke" x1="11.63" x2="6.38" y1="11" y2="11"/></svg>', Ha = '<svg viewbox="0 0 18 18"><rect class="ql-fill ql-stroke" height="3" width="3" x="4" y="5"/><rect class="ql-fill ql-stroke" height="3" width="3" x="11" y="5"/><path class="ql-even ql-fill ql-stroke" d="M7,8c0,4.031-3,5-3,5"/><path class="ql-even ql-fill ql-stroke" d="M14,8c0,4.031-3,5-3,5"/></svg>', ja = '<svg viewbox="0 0 18 18"><path class="ql-stroke" d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"/><path class="ql-stroke" d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"/></svg>', $a = '<svg class="" viewbox="0 0 18 18"><line class="ql-stroke" x1="5" x2="13" y1="3" y2="3"/><line class="ql-stroke" x1="6" x2="9.35" y1="12" y2="3"/><line class="ql-stroke" x1="11" x2="15" y1="11" y2="15"/><line class="ql-stroke" x1="15" x2="11" y1="11" y2="15"/><rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="7" x="2" y="14"/></svg>', _i = '<svg viewbox="0 0 18 18"><polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"/><polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"/><line class="ql-stroke" x1="10" x2="8" y1="5" y2="13"/></svg>', za = '<svg viewbox="0 0 18 18"><line class="ql-color-label ql-stroke ql-transparent" x1="3" x2="15" y1="15" y2="15"/><polyline class="ql-stroke" points="5.5 11 9 3 12.5 11"/><line class="ql-stroke" x1="11.63" x2="6.38" y1="9" y2="9"/></svg>', Fa = '<svg viewbox="0 0 18 18"><polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"/><line class="ql-stroke ql-fill" x1="15" x2="11" y1="4" y2="4"/><path class="ql-fill" d="M11,3a3,3,0,0,0,0,6h1V3H11Z"/><rect class="ql-fill" height="11" width="1" x="11" y="4"/><rect class="ql-fill" height="11" width="1" x="13" y="4"/></svg>', Va = '<svg viewbox="0 0 18 18"><polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"/><line class="ql-stroke ql-fill" x1="9" x2="5" y1="4" y2="4"/><path class="ql-fill" d="M5,3A3,3,0,0,0,5,9H6V3H5Z"/><rect class="ql-fill" height="11" width="1" x="5" y="4"/><rect class="ql-fill" height="11" width="1" x="7" y="4"/></svg>', Ka = '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z"/><rect class="ql-fill" height="1.6" rx="0.8" ry="0.8" width="5" x="5.15" y="6.2"/><path class="ql-fill" d="M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z"/></svg>', Ga = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z"/></svg>', Za = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>', Wa = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.65186,12.30664a2.6742,2.6742,0,0,1-2.915,2.68457,3.96592,3.96592,0,0,1-2.25537-.6709.56007.56007,0,0,1-.13232-.83594L11.64648,13c.209-.34082.48389-.36328.82471-.1543a2.32654,2.32654,0,0,0,1.12256.33008c.71484,0,1.12207-.35156,1.12207-.78125,0-.61523-.61621-.86816-1.46338-.86816H13.2085a.65159.65159,0,0,1-.68213-.41895l-.05518-.10937a.67114.67114,0,0,1,.14307-.78125l.71533-.86914a8.55289,8.55289,0,0,1,.68213-.7373V8.58887a3.93913,3.93913,0,0,1-.748.05469H11.9873a.54085.54085,0,0,1-.605-.60547V7.59863a.54085.54085,0,0,1,.605-.60547h3.75146a.53773.53773,0,0,1,.60547.59375v.17676a1.03723,1.03723,0,0,1-.27539.748L14.74854,10.0293A2.31132,2.31132,0,0,1,16.65186,12.30664ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>', Xa = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm7.05371,7.96582v.38477c0,.39648-.165.60547-.46191.60547h-.47314v1.29785a.54085.54085,0,0,1-.605.60547h-.69336a.54085.54085,0,0,1-.605-.60547V12.95605H11.333a.5412.5412,0,0,1-.60547-.60547v-.15332a1.199,1.199,0,0,1,.22021-.748l2.56348-4.05957a.7819.7819,0,0,1,.72607-.39648h1.27637a.54085.54085,0,0,1,.605.60547v3.7627h.33008A.54055.54055,0,0,1,17.05371,11.96582ZM14.28125,8.7207h-.022a4.18969,4.18969,0,0,1-.38525.81348l-1.188,1.80469v.02246h1.5293V9.60059A7.04058,7.04058,0,0,1,14.28125,8.7207Z"/></svg>', Ya = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.74023,12.18555a2.75131,2.75131,0,0,1-2.91553,2.80566,3.908,3.908,0,0,1-2.25537-.68164.54809.54809,0,0,1-.13184-.8252L11.73438,13c.209-.34082.48389-.36328.8252-.1543a2.23757,2.23757,0,0,0,1.1001.33008,1.01827,1.01827,0,0,0,1.1001-.96777c0-.61621-.53906-.97949-1.25439-.97949a2.15554,2.15554,0,0,0-.64893.09961,1.15209,1.15209,0,0,1-.814.01074l-.12109-.04395a.64116.64116,0,0,1-.45117-.71484l.231-3.00391a.56666.56666,0,0,1,.62744-.583H15.541a.54085.54085,0,0,1,.605.60547v.43945a.54085.54085,0,0,1-.605.60547H13.41748l-.04395.72559a1.29306,1.29306,0,0,1-.04395.30859h.022a2.39776,2.39776,0,0,1,.57227-.07715A2.53266,2.53266,0,0,1,16.74023,12.18555ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>', Ja = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M14.51758,9.64453a1.85627,1.85627,0,0,0-1.24316.38477H13.252a1.73532,1.73532,0,0,1,1.72754-1.4082,2.66491,2.66491,0,0,1,.5498.06641c.35254.05469.57227.01074.70508-.40723l.16406-.5166a.53393.53393,0,0,0-.373-.75977,4.83723,4.83723,0,0,0-1.17773-.14258c-2.43164,0-3.7627,2.17773-3.7627,4.43359,0,2.47559,1.60645,3.69629,3.19043,3.69629A2.70585,2.70585,0,0,0,16.96,12.19727,2.43861,2.43861,0,0,0,14.51758,9.64453Zm-.23047,3.58691c-.67187,0-1.22168-.81445-1.22168-1.45215,0-.47363.30762-.583.72559-.583.96875,0,1.27734.59375,1.27734,1.12207A.82182.82182,0,0,1,14.28711,13.23145ZM10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Z"/></svg>', Qa = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="13" y1="4" y2="4"/><line class="ql-stroke" x1="5" x2="11" y1="14" y2="14"/><line class="ql-stroke" x1="8" x2="10" y1="14" y2="4"/></svg>', tc = '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="10" width="12" x="3" y="4"/><circle class="ql-fill" cx="6" cy="7" r="1"/><polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"/></svg>', ec = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"/></svg>', sc = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-stroke" points="5 7 5 11 3 9 5 7"/></svg>', nc = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="11" y1="7" y2="11"/><path class="ql-even ql-stroke" d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"/><path class="ql-even ql-stroke" d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"/></svg>', rc = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="6" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="6" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="6" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="3" y1="4" y2="4"/><line class="ql-stroke" x1="3" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="3" x2="3" y1="14" y2="14"/></svg>', ic = '<svg class="" viewbox="0 0 18 18"><line class="ql-stroke" x1="9" x2="15" y1="4" y2="4"/><polyline class="ql-stroke" points="3 4 4 5 6 3"/><line class="ql-stroke" x1="9" x2="15" y1="14" y2="14"/><polyline class="ql-stroke" points="3 14 4 15 6 13"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-stroke" points="3 9 4 10 6 8"/></svg>', lc = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="7" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="7" x2="15" y1="14" y2="14"/><line class="ql-stroke ql-thin" x1="2.5" x2="4.5" y1="5.5" y2="5.5"/><path class="ql-fill" d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"/><path class="ql-stroke ql-thin" d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"/><path class="ql-stroke ql-thin" d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"/></svg>', oc = '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z"/><path class="ql-fill" d="M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z"/></svg>', ac = '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z"/><path class="ql-fill" d="M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z"/></svg>', cc = '<svg viewbox="0 0 18 18"><line class="ql-stroke ql-thin" x1="15.5" x2="2.5" y1="8.5" y2="9.5"/><path class="ql-fill" d="M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z"/><path class="ql-fill" d="M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z"/></svg>', uc = '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="12" width="12" x="3" y="3"/><rect class="ql-fill" height="2" width="3" x="5" y="5"/><rect class="ql-fill" height="2" width="4" x="9" y="5"/><g class="ql-fill ql-transparent"><rect height="2" width="3" x="5" y="8"/><rect height="2" width="4" x="9" y="8"/><rect height="2" width="3" x="5" y="11"/><rect height="2" width="4" x="9" y="11"/></g></svg>', hc = '<svg viewbox="0 0 18 18"><path class="ql-stroke" d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"/><rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="12" x="3" y="15"/></svg>', dc = '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="12" width="12" x="3" y="3"/><rect class="ql-fill" height="12" width="1" x="5" y="3"/><rect class="ql-fill" height="12" width="1" x="12" y="3"/><rect class="ql-fill" height="2" width="8" x="5" y="8"/><rect class="ql-fill" height="1" width="3" x="3" y="5"/><rect class="ql-fill" height="1" width="3" x="3" y="7"/><rect class="ql-fill" height="1" width="3" x="3" y="10"/><rect class="ql-fill" height="1" width="3" x="3" y="12"/><rect class="ql-fill" height="1" width="3" x="12" y="5"/><rect class="ql-fill" height="1" width="3" x="12" y="7"/><rect class="ql-fill" height="1" width="3" x="12" y="10"/><rect class="ql-fill" height="1" width="3" x="12" y="12"/></svg>', ks = {
  align: {
    "": Ma,
    center: Ba,
    right: Ua,
    justify: Da
  },
  background: Pa,
  blockquote: Ha,
  bold: ja,
  clean: $a,
  code: _i,
  "code-block": _i,
  color: za,
  direction: {
    "": Fa,
    rtl: Va
  },
  formula: Ka,
  header: {
    1: Ga,
    2: Za,
    3: Wa,
    4: Xa,
    5: Ya,
    6: Ja
  },
  italic: Qa,
  image: tc,
  indent: {
    "+1": ec,
    "-1": sc
  },
  link: nc,
  list: {
    bullet: rc,
    check: ic,
    ordered: lc
  },
  script: {
    sub: oc,
    super: ac
  },
  strike: cc,
  table: uc,
  underline: hc,
  video: dc
}, fc = '<svg viewbox="0 0 18 18"><polygon class="ql-stroke" points="7 11 9 13 11 11 7 11"/><polygon class="ql-stroke" points="7 7 9 5 11 7 7 7"/></svg>';
let Ri = 0;
function Mi(r, t) {
  r.setAttribute(t, "".concat(r.getAttribute(t) !== "true"));
}
class Nn {
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
    this.container.classList.toggle("ql-expanded"), Mi(this.label, "aria-expanded"), Mi(this.options, "aria-hidden");
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
    return t.classList.add("ql-picker-label"), t.innerHTML = fc, t.tabIndex = "0", t.setAttribute("role", "button"), t.setAttribute("aria-expanded", "false"), this.container.appendChild(t), t;
  }
  buildOptions() {
    const t = document.createElement("span");
    t.classList.add("ql-picker-options"), t.setAttribute("aria-hidden", "true"), t.tabIndex = "-1", t.id = "ql-picker-options-".concat(Ri), Ri += 1, this.label.setAttribute("aria-controls", t.id), this.options = t, Array.from(this.select.options).forEach((e) => {
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
class Tl extends Nn {
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
class Cl extends Nn {
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
const mc = (r) => {
  const {
    overflowY: t
  } = getComputedStyle(r, null);
  return t !== "visible" && t !== "clip";
};
class ql {
  constructor(t, e) {
    this.quill = t, this.boundsContainer = e || document.body, this.root = t.addContainer("ql-tooltip"), this.root.innerHTML = this.constructor.TEMPLATE, mc(this.quill.root) && this.quill.root.addEventListener("scroll", () => {
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
      const a = i.bottom - i.top, c = t.bottom - t.top + a;
      this.root.style.top = "".concat(s - c, "px"), this.root.classList.add("ql-flip");
    }
    return o;
  }
  show() {
    this.root.classList.remove("ql-editing"), this.root.classList.remove("ql-hidden");
  }
}
const pc = [!1, "center", "right", "justify"], gc = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"], bc = [!1, "serif", "monospace"], yc = ["1", "2", "3", !1], vc = ["small", !1, "large", "huge"];
class Us extends rs {
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
      if (n.classList.contains("ql-align") && (n.querySelector("option") == null && Es(n, pc), typeof e.align == "object"))
        return new Cl(n, e.align);
      if (n.classList.contains("ql-background") || n.classList.contains("ql-color")) {
        const i = n.classList.contains("ql-background") ? "background" : "color";
        return n.querySelector("option") == null && Es(n, gc, i === "background" ? "#ffffff" : "#000000"), new Tl(n, e[i]);
      }
      return n.querySelector("option") == null && (n.classList.contains("ql-font") ? Es(n, bc) : n.classList.contains("ql-header") ? Es(n, yc) : n.classList.contains("ql-size") && Es(n, vc)), new Nn(n);
    });
    const s = () => {
      this.pickers.forEach((n) => {
        n.update();
      });
    };
    this.quill.on(q.events.EDITOR_CHANGE, s);
  }
}
Us.DEFAULTS = me({}, rs.DEFAULTS, {
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
class Sl extends ql {
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
        t = wc(t);
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
function wc(r) {
  let t = r.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || r.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
  return t ? "".concat(t[1] || "https", "://www.youtube.com/embed/").concat(t[2], "?showinfo=0") : (t = r.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) ? "".concat(t[1] || "https", "://player.vimeo.com/video/").concat(t[2], "/") : r;
}
function Es(r, t) {
  let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  t.forEach((s) => {
    const n = document.createElement("option");
    s === e ? n.setAttribute("selected", "selected") : n.setAttribute("value", String(s)), r.appendChild(n);
  });
}
const Ec = [["bold", "italic", "link"], [{
  header: 1
}, {
  header: 2
}, "blockquote"]];
class kl extends Sl {
  constructor(t, e) {
    super(t, e), this.quill.on(q.events.EDITOR_CHANGE, (s, n, i, o) => {
      if (s === q.events.SELECTION_CHANGE)
        if (n != null && n.length > 0 && o === q.sources.USER) {
          this.show(), this.root.style.left = "0px", this.root.style.width = "", this.root.style.width = "".concat(this.root.offsetWidth, "px");
          const a = this.quill.getLines(n.index, n.length);
          if (a.length === 1) {
            const c = this.quill.getBounds(n);
            c != null && this.position(c);
          } else {
            const c = a[a.length - 1], h = this.quill.getIndex(c), f = Math.min(c.length() - 1, n.index + n.length - h), g = this.quill.getBounds(new ke(h, f));
            g != null && this.position(g);
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
N(kl, "TEMPLATE", ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', "</div>"].join(""));
class Ol extends Us {
  constructor(t, e) {
    e.modules.toolbar != null && e.modules.toolbar.container == null && (e.modules.toolbar.container = Ec), super(t, e), this.quill.container.classList.add("ql-bubble");
  }
  extendToolbar(t) {
    this.tooltip = new kl(this.quill, this.options.bounds), t.container != null && (this.tooltip.root.appendChild(t.container), this.buildButtons(t.container.querySelectorAll("button"), ks), this.buildPickers(t.container.querySelectorAll("select"), ks));
  }
}
Ol.DEFAULTS = me({}, Us.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        link(r) {
          r ? this.quill.theme.tooltip.edit() : this.quill.format("link", !1, A.sources.USER);
        }
      }
    }
  }
});
const Nc = [[{
  header: ["1", "2", "3", !1]
}], ["bold", "italic", "underline", "link"], [{
  list: "ordered"
}, {
  list: "bullet"
}], ["clean"]];
class Il extends Sl {
  constructor() {
    super(...arguments);
    N(this, "preview", this.root.querySelector("a.ql-preview"));
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
          const [i, o] = this.quill.scroll.descendant(fe, e.index);
          if (i != null) {
            this.linkRange = new ke(e.index - o, i.length());
            const a = fe.formats(i.domNode);
            this.preview.textContent = a, this.preview.setAttribute("href", a), this.show();
            const c = this.quill.getBounds(this.linkRange);
            c != null && this.position(c);
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
N(Il, "TEMPLATE", ['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join(""));
class _l extends Us {
  constructor(t, e) {
    e.modules.toolbar != null && e.modules.toolbar.container == null && (e.modules.toolbar.container = Nc), super(t, e), this.quill.container.classList.add("ql-snow");
  }
  extendToolbar(t) {
    t.container != null && (t.container.classList.add("ql-snow"), this.buildButtons(t.container.querySelectorAll("button"), ks), this.buildPickers(t.container.querySelectorAll("select"), ks), this.tooltip = new Il(this.quill, this.options.bounds), t.container.querySelector(".ql-link") && this.quill.keyboard.addBinding({
      key: "k",
      shortKey: !0
    }, (e, s) => {
      t.handlers.link.call(t, !s.format.link);
    }));
  }
}
_l.DEFAULTS = me({}, Us.DEFAULTS, {
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
            this.quill.format("link", !1, A.sources.USER);
        }
      }
    }
  }
});
A.register({
  "attributors/attribute/direction": dl,
  "attributors/class/align": cl,
  "attributors/class/background": Ho,
  "attributors/class/color": Po,
  "attributors/class/direction": fl,
  "attributors/class/font": gl,
  "attributors/class/size": yl,
  "attributors/style/align": ul,
  "attributors/style/background": Jr,
  "attributors/style/color": Yr,
  "attributors/style/direction": ml,
  "attributors/style/font": bl,
  "attributors/style/size": vl
}, !0);
A.register({
  "formats/align": cl,
  "formats/direction": fl,
  "formats/indent": ka,
  "formats/background": Jr,
  "formats/color": Yr,
  "formats/font": gl,
  "formats/size": yl,
  "formats/blockquote": Ir,
  "formats/code-block": ht,
  "formats/header": _r,
  "formats/list": Bs,
  "formats/bold": Ss,
  "formats/code": Qr,
  "formats/italic": Rr,
  "formats/link": fe,
  "formats/script": Mr,
  "formats/strike": Br,
  "formats/underline": Ur,
  "formats/formula": an,
  "formats/image": Dr,
  "formats/video": cn,
  "modules/syntax": Ll,
  "modules/table": Ia,
  "modules/toolbar": ri,
  "themes/bubble": Ol,
  "themes/snow": _l,
  "ui/icons": ks,
  "ui/picker": Nn,
  "ui/icon-picker": Cl,
  "ui/color-picker": Tl,
  "ui/tooltip": ql
}, !0);
const Ac = A.import("blots/inline");
class un extends Ac {
  static create(t) {
    const e = JSON.parse(t), { name: s, id: n } = e, i = super.create();
    return i.setAttribute("data-id", n), i.setAttribute("data-name", s), i;
  }
  static formats(t) {
    const e = t.dataset;
    return e.name ? JSON.stringify(e) : !0;
  }
}
N(un, "blotName", "mention"), N(un, "className", "ql-mention"), N(un, "tagName", "mob-mention");
const xc = A.import("blots/inline");
class hn extends xc {
  static create(t) {
    const e = JSON.parse(t), {
      name: s,
      id: n,
      identifier: i,
      owner_subtype: o,
      owner_id: a,
      owner_type: c,
      recent_parent: h,
      icon: f
    } = e, g = super.create();
    return n && g.setAttribute("data-id", n), s && g.setAttribute("data-name", s), i && g.setAttribute("data-identifier", i), o && g.setAttribute("data-owner_subtype", o), a && g.setAttribute("data-owner_id", a), c && g.setAttribute("data-owner_type", c), h && g.setAttribute("data-recent_parent", h), f && g.setAttribute("data-icon", f), g;
  }
  static formats(t) {
    const e = t.dataset;
    return e.name ? JSON.stringify(e) : !0;
  }
}
N(hn, "blotName", "marker"), N(hn, "className", "ql-marker"), N(hn, "tagName", "mob-marker");
class Lc {
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
    N(this, "operatorMap", /* @__PURE__ */ new Map());
    /**
     * 模型
     *
     * @type {IEditor}
     * @memberof MenTionController
     */
    N(this, "model");
    /**
     * 编辑器参数
     *
     * @type {IData}
     * @memberof MenTionController
     */
    N(this, "editorParams");
    /**
     * 上下文
     *
     * @type {IContext}
     */
    N(this, "context");
    /**
     * 视图参数
     *
     * @type {IParams}
     */
    N(this, "params");
    /**
     * 用户请求url
     *
     * @type {string}
     * @memberof CommentMentionController
     */
    N(this, "userUrl", "");
    /**
     * 人员UI转化
     */
    N(this, "userFieldMap", {
      id: "user_id",
      name: "name"
    });
    /**
     * 请求方法
     *
     * @type {('post' | 'get')}
     * @memberof CommentMentionController
     */
    N(this, "userMethod", "post");
    /**
     * 搜索字段
     *
     * @type {string}
     * @memberof CommentMentionController
     */
    N(this, "query", "");
    /**
     * 当前页
     *
     * @type {number}
     * @memberof CommentMentionController
     */
    N(this, "curPage", 0);
    /**
     * 分页条数
     *
     * @type {number}
     * @memberof CommentMentionController
     */
    N(this, "size", 20);
    /**
     * @description 视图luoj
     * @type {IAppViewLogic[]}
     * @memberof CommentMentionController
     */
    N(this, "appViewLogics", []);
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
      throw new $i("未配置提及用户USERURL编辑器参数！");
    const { data: e, context: s, params: n } = t, i = t.isInitialLoad === !0, o = t.isLoadMore === !0;
    i ? this.curPage = 0 : o && (this.curPage += 1);
    const a = Is.execScriptFn(
      { data: e, context: s, params: n },
      this.userUrl,
      {
        singleRowReturn: !0,
        isAsync: !1
      }
    ), c = {
      ...n,
      size: this.size,
      page: this.curPage
    }, h = await ibiz.net[this.userMethod](a, c);
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
    return t.replaceAll(
      /<mob-mention class="ql-mention" data-id="(.+?)" data-name="(.+?)">@(.+?)<\/mob-mention>/g,
      (s, n, i) => '@{"id":"'.concat(n, '","name":"').concat(i, '"}<span> </span>')
    );
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
    return '<mob-mention class="ql-mention" data-id="'.concat(t.id, '" data-name="').concat(t.name, '">@').concat(t.name, "</mob-mention>");
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
class Tc {
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
    N(this, "model");
    /**
     * 编辑器参数
     *
     * @type {IData}
     * @memberof MenTionController
     */
    N(this, "editorParams");
    /**
     * 上下文
     *
     * @type {IContext}
     */
    N(this, "context");
    /**
     * 视图参数
     *
     * @type {IParams}
     */
    N(this, "params");
    /**
     * 用户请求url
     *
     * @type {string}
     * @memberof CommentMarkerController
     */
    N(this, "quoteUrl", "");
    /**
     * 人员UI转化
     */
    N(this, "quoteFieldMap", {
      id: "id",
      name: "name",
      identifier: "identifier",
      owner_subtype: "owner_subtype",
      owner_id: "owner_id",
      owner_type: "owner_type",
      recent_parent: "recent_parent"
    });
    /**
     * 代码表map
     *
     * @type {IData}
     * @memberof MarkerController
     */
    N(this, "quoteCodelistMap", /* @__PURE__ */ new Map());
    /**
     * 请求方法
     *
     * @type {('post' | 'get')}
     * @memberof CommentMarkerController
     */
    N(this, "quoteMethod", "post");
    /**
     * 搜索字段
     *
     * @type {string}
     * @memberof CommentMarkerController
     */
    N(this, "query", "");
    /**
     * 当前页
     *
     * @type {number}
     * @memberof CommentMarkerController
     */
    N(this, "curPage", 0);
    /**
     * 分页条数
     *
     * @type {number}
     * @memberof CommentMarkerController
     */
    N(this, "size", 20);
    /**
     * @description 视图luoj
     * @type {IAppViewLogic[]}
     * @memberof CommentMarkerController
     */
    N(this, "appViewLogics", []);
    this.editorParams = t, this.model = e.model, this.context = e.context, this.params = e.params, this.appViewLogics = e.appViewLogics;
    const {
      QUOTEURL: s,
      QUOTEFIELDMAP: n,
      QUOTEMETHOD: i,
      QUOTESIZE: o,
      QUOTECODELISTMAP: a
    } = t;
    if (s && (this.quoteUrl = s), n && (this.quoteFieldMap = JSON.parse(n)), i && (this.quoteMethod = i.toLowerCase()), o && (this.size = Number(o)), a) {
      const c = JSON.parse(a);
      this.setCodeListMap(c);
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
      throw new $i("未配置提及用户QUOTEURL编辑器参数！");
    const { data: e, context: s, params: n } = t, i = t.isInitialLoad === !0, o = t.isLoadMore === !0;
    i ? this.curPage = 0 : o && (this.curPage += 1);
    const a = Is.execScriptFn(
      { data: e, context: s, params: n },
      this.quoteUrl,
      {
        singleRowReturn: !0,
        isAsync: !1
      }
    ), c = {
      ...n,
      size: this.size,
      page: this.curPage
    }, h = await ibiz.net[this.quoteMethod](a, c);
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
      /<mob-marker class="ql-marker" data-id="(.+?)" data-name="(.+?)" data-identifier="(.+?)" data-owner_subtype="(.+?)" data-owner_id="(.+?)" data-owner_type="(.+?)" data-recent_parent="(.+?)" data-icon="((.|[\t\r\f\n\s])+?)\)*\">(.+?)<\/mob-marker>/g,
      (s, n, i, o, a, c, h, f) => '#{"id":"'.concat(n, '","name":"').concat(i, '","identifier":"').concat(o, '","owner_id":"').concat(c, '","owner_type":"').concat(h, '","owner_subtype":"').concat(a, '","recent_parent":"').concat(f, '"}<span> </span>')
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
      /\#\{(\".+?\":\".+?\")(,\"icon\":\"((.|[\t\r\f\n\s])+?)\")*\}/g,
      (s, n, i) => {
        const o = JSON.parse("{".concat(n, "}"));
        return i && (i = i.slice(8).slice(1, -1)), this.getNodeInfo({ icon: i, ...o });
      }
    );
  }
  /**
   * @description 获取提及节点信息
   * @param {IData} data
   * @return {*}
   * @memberof CommentMarkerController
   */
  getNodeInfo(t) {
    if (!t.icon && this.quoteCodelistMap.has("type") && t.owner_subtype) {
      const e = this.quoteCodelistMap.get("type"), s = this.findCodeListItem(
        e.codeListItems,
        t.owner_subtype
      );
      s && s.sysImage && Object.assign(t, {
        icon: s.sysImage.rawContent.replaceAll('"', "'")
      });
    }
    return '<mob-marker class="ql-marker" data-id="'.concat(t.id, '" data-name="').concat(t.name, '" data-identifier="').concat(t.identifier, '" data-owner_subtype="').concat(t.owner_subtype, '" data-owner_id="').concat(t.owner_id, '" data-owner_type="').concat(t.owner_type, '" data-recent_parent="').concat(t.recent_parent, '" data-icon="').concat(t.icon, '">').concat(t.name, "</mob-marker>");
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
    if (this.quoteCodelistMap.has("type") && t.owner_subtype) {
      const e = this.quoteCodelistMap.get("type"), s = this.findCodeListItem(
        e.codeListItems,
        t.owner_subtype
      );
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
class Cc extends HTMLElement {
  constructor() {
    super(...arguments);
    N(this, "shadow", this.attachShadow({ mode: "open" }));
    N(this, "document", this.shadow.ownerDocument);
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
class qc extends HTMLElement {
  constructor() {
    super(...arguments);
    N(this, "shadow", this.attachShadow({ mode: "open" }));
    N(this, "document", this.shadow.ownerDocument);
  }
  // 监听的 attr
  static get observedAttributes() {
    return ["data-name"];
  }
  attributeChangedCallback(e, s, n) {
    if (!(!n || s === n) && e === "data-name") {
      const i = document.createElement("span");
      i.part.add("name"), i.innerHTML = "@".concat(n), this.shadow.appendChild(i);
    }
  }
}
class Pr {
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
    for (let c = 0; c < t.length; c++)
      if (this.isChineseCharacter(t))
        e = t.charCodeAt(c) + ((e << 5) - e), e = e & e;
      else {
        const h = t.charCodeAt(c);
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
class Sc extends Ul {
  constructor() {
    super(...arguments);
    /**
     * 上传参数
     */
    N(this, "uploadParams");
    /**
     * 下载参数
     */
    N(this, "exportParams");
    /**
     * @description 是否显示工具栏
     * @type {boolean}
     * @memberof MobCommentController
     */
    N(this, "showToolbar", !0);
    /**
     * @description 值模式(暂时只支持html模式，text模式存在问题)
     * @type {('text' | 'html')}
     * @memberof MobCommentController
     */
    N(this, "valueMode", "html");
    /**
     * @description 图片模式
     * @type {('base64' | 'file')}
     * @memberof MobCommentController
     */
    N(this, "imageMode", "file");
    /**
     * @description 提及控制器
     * @type {CommentMentionController}
     * @memberof MobCommentController
     */
    N(this, "mention");
    /**
     * @description 提及工作项控制器
     * @type {CommentMarkerController}
     * @memberof MobCommentController
     */
    N(this, "marker");
    /**
     * @description quill配置
     * @type {IData}
     * @memberof MobCommentController
     */
    N(this, "modules", {
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["link", "image", "code-block"]
      ]
    });
    /**
     * 是否显示伸缩按钮
     *
     * @type {boolean}
     * @memberof MobCommentController
     */
    N(this, "showCollapse", !0);
    /**
     * 收缩时的高度
     *
     * @type {number}
     * @memberof MobCommentController
     */
    N(this, "defaultHeight", 200);
    /**
     * 自动聚焦
     *
     * @type {boolean}
     * @memberof MobCommentController
     */
    N(this, "autoFocus", !1);
    /**
     * @description 视图逻辑
     * @type {IAppViewLogic[]}
     * @memberof MobCommentController
     */
    N(this, "appViewLogics", []);
    /**
     * 回复脚本
     *
     * @type {string}
     * @memberof MobCommentController
     */
    N(this, "replyScript", "");
    /**
     * @description 回复
     * @type {string}
     * @memberof MobCommentController
     */
    N(this, "reply", "");
    N(this, "evt", new Dl(
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
    A.register({ "formats/mention": un }), A.register({ "formats/marker": hn });
  }
  registerCustomElem() {
    window.customElements.get("mob-marker") || window.customElements.define("mob-marker", Cc), window.customElements.get("mob-mention") || window.customElements.define("mob-mention", qc);
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
    if (await super.onInit(), this.appViewLogics = Pl(this.view.model), this.registerCustomElem(), this.editorParams) {
      const {
        uploadParams: e,
        exportParams: s,
        SHOWTOOLBAR: n,
        VALUEMODE: i,
        IMAGEMODE: o,
        MODULES: a,
        REPLYSCRIPT: c,
        DEFAULTHEIGHT: h,
        SHOWCOLLAPSE: f,
        AUTOFOCUS: g
      } = this.editorParams;
      if (e)
        try {
          this.uploadParams = JSON.parse(e);
        } catch (m) {
          ibiz.log.error(
            "编辑器[".concat(ibiz.log.error(
              m
            ), "]编辑器参数 uploadParams 非 json 格式")
          );
        }
      if (s)
        try {
          this.exportParams = JSON.parse(s);
        } catch (m) {
          ibiz.log.error(
            "编辑器[".concat(ibiz.log.error(
              m
            ), "]编辑器参数 exportParams 非 json 格式")
          );
        }
      n && (this.showToolbar = this.toBoolean(n)), i && (this.valueMode = i.toLowerCase()), o && (this.imageMode = o.toLowerCase()), a && (this.modules = Is.execScriptFn(
        { controller: this },
        a
      )), c && (this.replyScript = c), h && (this.defaultHeight = Number(h)), f && (this.showCollapse = this.toBoolean(f)), g && (this.autoFocus = this.toBoolean(g));
    }
    this.initBlot(), this.mention = new Lc(
      this.editorParams,
      this.getControllerParams()
    ), this.marker = new Tc(
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
    const n = await Hl(s.appDEUIActionId, s.appId);
    if (!n || !n.frontAppViewId) {
      ibiz.message.error("请配置界面行为打开视图");
      return;
    }
    const { context: i, params: o } = this.handlePublicParams(
      e,
      this.context,
      this.params
    ), a = await ibiz.hub.config.view.get(n.frontAppViewId), { openMode: c = "POPUPMODAL" } = a, h = await ibiz.commands.execute(
      jl.TAG,
      n.frontAppViewId,
      i,
      o,
      { openMode: c }
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
    const s = Pr.getEmojiCustomHtml("".concat(e.name, ": ").concat(e.content));
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
class vr {
  constructor(t) {
    N(this, "formEditor", "IBizMobComment");
    N(this, "gridEditor", "IBizMobComment");
    t === "REPLY" && (this.formEditor = "IBizMobReplyComment", this.gridEditor = "IBizMobReplyComment");
  }
  async createController(t, e) {
    const s = new Sc(t, e);
    return await s.init(), s;
  }
}
const kc = /* @__PURE__ */ _s({
  name: "IBizQuillCollapse",
  props: {
    ...Hr(),
    showCollapse: {
      type: Boolean
    },
    defaultHeight: {
      type: Number,
      default: 200
    },
    isCollapse: {
      type: Boolean,
      default: !1
    }
  },
  setup(r, {
    emit: t
  }) {
    const e = Os("quill-preview"), s = r.controller, n = V(null), i = ibiz.i18n.getLang();
    let o = null;
    const a = V(""), c = V("auto"), h = V(!1), {
      zIndex: f
    } = Hi(), g = f.increment(), m = () => {
      n.value && (o = new A(n.value, {
        theme: "bubble",
        modules: s.modules,
        readOnly: !0,
        placeholder: s.placeHolder
      }), s.valueMode === "text" && o.setText(r.value || ""));
    }, p = () => {
      if (r.showCollapse && n.value) {
        const T = n.value.offsetHeight;
        T < r.defaultHeight ? (c.value = "".concat(T, "px"), h.value = !1) : (c.value = "".concat(r.defaultHeight, "px"), h.value = !0);
      }
    }, b = async (T) => {
      if (!T)
        return;
      const k = T.querySelectorAll("img"), B = T.offsetHeight;
      let j = B > 42 ? B : 42;
      const Y = [];
      k.forEach((st) => {
        const mt = new Promise((pt) => {
          const Nt = () => {
            const kt = st.offsetHeight;
            j += kt, pt();
          };
          st.addEventListener("load", Nt), st._onLoad = Nt;
        });
        Y.push(mt);
      }), await Promise.all(Y), j > r.defaultHeight ? (c.value = "".concat(r.defaultHeight, "px"), h.value = !0) : j > B && (c.value = "".concat(j, "px"));
    }, E = (T) => {
      if (!T)
        return;
      const k = T.querySelectorAll("img");
      k == null || k.forEach((B) => {
        B._onLoad && (B.removeEventListener("load", B._onLoad), delete B._onLoad);
      });
    };
    $r(() => {
      m(), ln(() => {
        p(), b(n.value);
      });
    }), Fl(() => {
      E(n.value);
    });
    const v = () => {
      t("edit");
    }, y = () => {
      a.value = "";
    }, x = (T) => {
      const k = T.target;
      k && k.tagName === "IMG" && (a.value = k.src);
    }, L = () => {
      t("collapse", !r.isCollapse), p();
    }, S = () => C("div", {
      class: e.b("collapse-btn"),
      onClick: L
    }, [C("span", null, [r.isCollapse ? ibiz.i18n.t("editor.html.expand") : ibiz.i18n.t("editor.html.collapse")]), r.isCollapse && C(W("ion-icon"), {
      name: "caret-down-outline"
    }, null), !r.isCollapse && C(W("ion-icon"), {
      name: "caret-up-outline"
    }, null)]);
    return Se(() => r.value, () => {
      p();
    }, {
      immediate: !0
    }), {
      ns: e,
      lang: i,
      editorRef: n,
      previewImage: a,
      collapseHeight: c,
      showCollapseBtn: h,
      modalZIndex: g,
      handleClick: v,
      handleContentClick: x,
      handlePreviewClose: y,
      renderCollapseBtn: S
    };
  },
  render() {
    return C("div", {
      class: [this.ns.b(), this.disabled ? this.ns.m("disabled") : "", this.readonly ? this.ns.m("readonly") : "", this.ns.m(this.lang.toLowerCase()), this.showCollapse ? this.ns.m("show-collapse") : "", this.ns.is("collapse", this.isCollapse)],
      style: "--default-height: ".concat(this.collapseHeight)
    }, [C("div", {
      ref: "editorRef",
      onClick: this.handleContentClick
    }, [this.controller.valueMode === "html" ? C("div", {
      innerHTML: this.value
    }, null) : null]), !this.readonly && !this.disabled ? C("div", {
      onClick: this.handleClick,
      class: this.ns.e("edit")
    }, [C(W("ion-icon"), {
      name: "create-outline"
    }, null)]) : null, this.showCollapse && this.showCollapseBtn && this.renderCollapseBtn(), C(W("van-popup"), {
      class: this.ns.e("image-popup"),
      show: !!this.previewImage,
      "close-on-popstate": !0,
      "z-index": this.modalZIndex,
      onClose: this.handlePreviewClose
    }, {
      default: () => [C(W("iBizPreviewImage"), {
        url: this.previewImage
      }, null)]
    })]);
  }
});
function Bi(r) {
  return typeof r == "function" || Object.prototype.toString.call(r) === "[object Object]" && !Vl(r);
}
const wr = /* @__PURE__ */ _s({
  name: "IBizMobComment",
  props: Hr(),
  emits: ji(),
  setup(r, {
    emit: t
  }) {
    const e = Os("mob-comment"), s = r.controller, n = V(null), i = V(null), o = ibiz.i18n.getLang();
    let a;
    const c = V(!1), h = V({
      Authorization: "Bearer ".concat(Ki(zi.TOKEN))
    }), f = V(""), g = V(""), m = V(!1), p = V(!1), b = V([]), E = V([]), v = V(!1), y = s.editorParams.MODE === "DEFAULT", x = V(""), L = V(""), {
      zIndex: S
    } = Hi(), T = S.increment(), k = (U) => {
      const M = U.ops.find((K) => K.insert && K.insert.image);
      if (M)
        return M.insert.image;
    }, B = () => {
      let U = "";
      return s.valueMode === "text" && (U = a.getText()), U = a.getSemanticHTML(), U = s.transformHtml(U), U;
    }, j = async (U) => {
      const M = Fi(U), K = await ibiz.util.file.fileUpload(f.value, M, h.value), nt = g.value.replace("%fileId%", K.fileid), gt = B();
      t("change", gt.replace(U, nt));
    }, Y = (U = x.value) => {
      if (!a)
        return;
      const M = a == null ? void 0 : a.getSelection(), K = a.clipboard.convert({
        html: "".concat(U, "<p><br></p>"),
        text: "\n"
      });
      a.setContents(K), M && a.setSelection(M.index + 1, "user");
    }, st = ({
      selectedOptions: U
    }) => {
      const M = U[0];
      if (!M)
        return;
      const K = a.getSelection(!0), nt = K.index + K.length, gt = JSON.stringify(M);
      a.insertText(nt, "@".concat(M.name), "mention", gt, "user"), a.setSelection(nt + M.name.length + 1, "user"), m.value = !1;
    }, mt = async () => {
      const U = s.mention.getMentionLogic();
      if (U) {
        y && (v.value = !0);
        const M = await s.openPickUpView(r.data, U);
        if (M && M[0]) {
          const K = M[0]._deData;
          st({
            selectedOptions: [{
              ...K,
              value: K.id
            }]
          });
        }
        y && (v.value = !1);
      } else
        b.value = await s.getMentions(r.data), m.value = !0;
    }, pt = ({
      selectedOptions: U
    }) => {
      const M = s.marker.getSelection(U[0]);
      if (!M)
        return;
      const K = a.getSelection(!0), nt = K.index + K.length, gt = JSON.stringify(M);
      a.insertText(nt, "".concat(M.name), "marker", gt, "user"), a.setSelection(nt + M.name.length + 1, "user"), p.value = !1;
    }, Nt = async () => {
      const U = s.marker.getMarkerLogic();
      if (U) {
        y && (v.value = !0);
        const M = await s.openPickUpView(r.data, U);
        if (M && M[0]) {
          const K = s.marker.toUIData(M);
          pt({
            selectedOptions: K
          });
        }
        y && (v.value = !1);
      } else
        E.value = await s.getMarkers(r.data), p.value = !0;
    }, kt = () => {
      m.value = !1, Y();
    }, $t = () => {
      p.value = !1, Y();
    }, re = (U) => {
      let M = !0;
      const K = U.ops.find((Ot) => Ot.insert), nt = a.getSelection(!0), gt = Math.max(nt.index - 1, 0);
      if (K) {
        const Ot = K.insert;
        Ot === "@" && (a.history.undo(), mt(), M = !1), Ot === "#" && (a.history.undo(), Nt(), M = !1);
      }
      return U.ops.find((Ot) => Ot.delete) && a.getContents(gt, 1).ops.some((oe) => {
        var we, Ee;
        return ((we = oe.attributes) == null ? void 0 : we.marker) || ((Ee = oe.attributes) == null ? void 0 : Ee.mention);
      }) && (a.deleteText(gt, 1, "user"), M = !1), M;
    }, be = () => {
      if (!n.value)
        return;
      const U = s.showToolbar ? "snow" : "bubble";
      y || Object.assign(s.modules, {
        toolbar: i.value
      }), a = new A(n.value, {
        theme: U,
        modules: s.modules,
        readOnly: r.disabled || r.readonly,
        placeholder: s.placeHolder
      }), a.on("text-change", (M, K, nt) => {
        if (nt === "user" && re(M)) {
          const ye = k(M);
          if (ye && s.imageMode === "file") {
            j(ye);
            return;
          }
          y || t("change", B());
        }
      }), a.on("selection-change", (M) => {
        M ? (c.value = !0, t("focus")) : (y && v.value || (c.value = !1), t("blur"));
      }), s.valueMode === "text" && a.setText(r.value || "");
    };
    Se(() => r.value, () => {
      if (r.value) {
        x.value = s.transformDelta(r.value);
        const U = a == null ? void 0 : a.getSemanticHTML();
        x.value !== U && Y();
      } else
        x.value = "", a && Y();
    }, {
      immediate: !0
    }), Se(() => [r.disabled, r.readonly], () => {
      a && (r.disabled || r.readonly ? a.enable(!1) : a.enable());
    }, {
      immediate: !0
    }), Se(() => r.data, (U) => {
      if (U) {
        const M = ibiz.util.file.calcFileUpDownUrl(s.context, s.params, U, s.editorParams);
        f.value = M.uploadUrl, g.value = M.downloadUrl;
      }
    }, {
      immediate: !0,
      deep: !0
    });
    const H = () => typeof window.pageYOffset < "u" ? window.pageYOffset : document.documentElement.scrollTop, D = () => {
      ln(() => {
        setTimeout(() => {
          const U = H();
          a == null || a.focus(), $l() === zl.IOS && ln(() => {
            window.scrollTo(0, U);
          });
        }, 200);
      });
    };
    $r(() => {
      be(), s.autoFocus && D();
    });
    const R = (U) => {
      const {
        eventArg: M
      } = U;
      L.value = M, s.reply = M, a.setSelection(0, "silent");
    }, et = () => {
      L.value = "", s.reply = "";
    }, Z = () => {
      a.setSelection(0, "silent");
    };
    s.evt.on("onSetReply", R), s.evt.on("onRemoveReply", et), s.evt.on("focus", Z), Vi(() => {
      s.evt.off("onSetReply", R), s.evt.off("onRemoveReply", et), s.evt.off("focus", Z);
    });
    const X = () => {
      if (L.value) {
        const U = Is.execScriptFn({
          value: L.value,
          controller: s
        }, s.replyScript, {
          singleRowReturn: !0,
          isAsync: !1
        });
        return C("div", {
          class: e.b("reply")
        }, [C("div", {
          class: e.be("reply", "content"),
          innerHTML: U
        }, null), C(W("ion-icon"), {
          name: "close-outline",
          onClick: () => et()
        }, null)]);
      }
    }, ie = V(!1), z = V(!0), Wt = () => {
      a || be();
    }, ls = () => {
      c.value = !1, ie.value = !1;
    }, vt = () => {
      t("change", B()), ln(() => {
        c.value = !1, ie.value = !1;
      });
    }, Re = () => {
      y && (v.value = !0);
    }, Me = () => {
      y && (v.value = !1);
    }, le = on({
      get() {
        return c.value || v.value;
      },
      set(U) {
        c.value = U;
      }
    });
    return {
      ns: e,
      lang: o,
      isDefault: y,
      editing: c,
      editorRef: n,
      toolbarRef: i,
      showAtPopup: m,
      showMkPopup: p,
      mentionItems: b,
      markerItems: E,
      curValue: x,
      modalZIndex: T,
      handleMentionClick: mt,
      handleMarkerClick: Nt,
      onMentionCancel: kt,
      onMentionConfirm: st,
      onMarkerCancel: $t,
      onMarkerConfirm: pt,
      renderReply: X,
      renderCollpase: () => {
        let U, M;
        return C("div", {
          class: e.b("collapse")
        }, [!c.value && C(kc, {
          value: x.value,
          controller: s,
          disabled: r.disabled,
          readonly: r.readonly,
          showCollapse: s.showCollapse,
          defaultHeight: s.defaultHeight,
          isCollapse: z.value,
          onEdit: () => {
            c.value = !0;
          },
          onCollapse: (K) => {
            z.value = K;
          }
        }, null), C(W("van-action-sheet"), {
          show: le.value,
          "onUpdate:show": (K) => le.value = K,
          teleport: "body",
          class: [e.be("collapse", "popup"), e.m(o.toLowerCase())],
          "close-on-click-overlay": !1,
          "z-index": T,
          onOpened: Wt
        }, {
          default: () => [C("div", {
            class: e.be("collapse", "content")
          }, [C("div", {
            ref: "editorRef"
          }, [s.valueMode === "html" ? C("div", {
            innerHTML: x.value
          }, null) : null])]), C("div", {
            class: e.be("collapse", "footer")
          }, [C(W("van-button"), {
            class: e.e("cancel"),
            onClick: ls
          }, Bi(U = ibiz.i18n.t("editor.common.cancel")) ? U : {
            default: () => [U]
          }), C(W("van-button"), {
            class: e.e("confirm"),
            onClick: vt,
            type: "primary"
          }, Bi(M = ibiz.i18n.t("editor.common.confirm")) ? M : {
            default: () => [M]
          })])]
        })]);
      },
      onOpen: Re,
      onClose: Me
    };
  },
  render() {
    return this.isDefault ? this.renderCollpase() : C("div", {
      class: [this.ns.b(), this.disabled ? this.ns.m("disabled") : "", this.readonly ? this.ns.m("readonly") : "", this.ns.m(this.lang.toLowerCase()), this.ns.is("editing", this.editing)]
    }, [C("div", {
      class: this.ns.e("content")
    }, [C("div", {
      class: this.ns.e("ql-content"),
      ref: "editorRef"
    }, [this.controller.valueMode === "html" ? C("div", {
      innerHTML: this.curValue
    }, null) : null]), this.renderReply(), C("div", {
      class: this.ns.e("ql-toolbar"),
      ref: "toolbarRef"
    }, [C("button", {
      class: "ql-bold"
    }, null), C("button", {
      class: "ql-italic"
    }, null), C("button", {
      class: "ql-underline"
    }, null), C("button", {
      class: "ql-strike"
    }, null), C("button", {
      class: "ql-code-block"
    }, null), C("button", {
      class: "ql-list",
      value: "ordered"
    }, null), C("button", {
      class: "ql-list",
      value: "bullet"
    }, null), C("button", {
      class: "ql-mention",
      onClick: this.handleMentionClick
    }, [C("svg", {
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "4218",
      width: "200",
      height: "200"
    }, [C("path", {
      d: "M23.7 555c0-339.3 247-550 533.8-550 295.6 0 442.8 165.9 442.8 401.6 0 210.8-93.5 361.7-237 361.7-63.6 0-108.5-26.2-137.2-78.6-48.6 51.1-96 79.8-174.6 79.8-116 0-178.4-77.3-178.4-193.3 0-209.5 131-323 251.9-323 64.9 0 102.3 24.9 122.2 68.6l11.2-58.6 114.7 1.2L727 510.1c-7.5 36.2-11.2 63.6-11.2 81.1 0 44.9 22.5 71.1 56.1 71.1 63.6 0 106-89.8 106-243.2 0-205.8-114.7-300.6-323-300.6-220.8 0-405.4 163.4-405.4 436.5 0 238.2 132.2 350.5 390.4 350.5 94.8 0 174.6-12.5 255.7-36.2v109.8c-88.6 26.2-177.1 39.9-263.2 39.9-329.1 0-508.7-168.4-508.7-464z m585-44.9c3.7-20 6.2-39.9 6.2-53.6 0-56.1-15-96-83.6-96-83.6 0-133.5 108.5-133.5 212 0 44.9 13.7 88.6 77.3 88.6 73.7-0.1 114.9-57.4 133.6-151z",
      fill: "currentColot",
      "p-id": "4219"
    }, null)])]), C("button", {
      class: "ql-marker",
      onClick: this.handleMarkerClick
    }, [C("svg", {
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "6854",
      width: "200",
      height: "200"
    }, [C("path", {
      d: "M929.28 625.664l-234.496 0.512 24.064-229.888 210.432-0.512c20.992 0 38.4-17.408 38.4-38.4s-17.408-38.4-38.4-38.4H727.04l29.184-275.456c2.048-20.992-13.312-39.936-34.304-41.984-20.992-2.048-39.936 13.312-41.984 34.304L650.24 318.976l-232.448 0.512 29.184-275.456c2.048-20.992-13.312-39.936-34.304-41.984-20.992-2.048-39.936 13.312-41.984 34.304l-29.696 283.648-246.272 0.512c-20.992 0-38.4 17.408-38.4 38.4s17.408 38.4 38.4 38.4l238.08-0.512-24.064 229.888-214.016 0.512c-20.992 0-38.4 17.408-38.4 38.4s17.408 38.4 38.4 38.4l205.824-0.512-29.184 276.992c-2.048 20.992 13.312 39.936 34.304 41.984h4.096c19.456 0 35.84-14.848 37.888-34.304l30.208-285.184 232.448-0.512-29.184 277.504c-2.048 20.992 13.312 39.936 34.304 41.984h4.096c19.456 0 35.84-14.848 38.4-34.304l30.208-285.184 242.688-0.512c20.992 0 38.4-17.408 38.4-38.4-1.536-20.992-18.944-37.888-39.936-37.888z m-544.256 0.512l24.064-229.888 232.448-0.512-24.064 229.888-232.448 0.512z",
      fill: "currentColot",
      "p-id": "6855"
    }, null)])])])]), C(W("van-popup"), {
      show: this.showAtPopup,
      "onUpdate:show": (r) => this.showAtPopup = r,
      round: !0,
      position: "bottom",
      onOpen: this.onOpen,
      onClose: this.onClose
    }, {
      default: () => [C(W("van-picker"), {
        columns: this.mentionItems,
        "confirm-button-text": ibiz.i18n.t("editor.common.confirm"),
        onCancel: this.onMentionCancel,
        onConfirm: this.onMentionConfirm
      }, {
        option: (r) => C(W("mobMenTionItem"), {
          item: r,
          controller: this.controller.mention
        }, null)
      })]
    }), C(W("van-popup"), {
      show: this.showMkPopup,
      "onUpdate:show": (r) => this.showMkPopup = r,
      round: !0,
      position: "bottom",
      onOpen: this.onOpen,
      onClose: this.onClose
    }, {
      default: () => [C(W("van-picker"), {
        columns: this.markerItems,
        "confirm-button-text": ibiz.i18n.t("editor.common.confirm"),
        onCancel: this.onMarkerCancel,
        onConfirm: this.onMarkerConfirm
      }, {
        option: (r) => C(W("mobMarkerItem"), {
          item: r,
          controller: this.controller.marker
        }, null)
      })]
    })]);
  }
}), Ui = /* @__PURE__ */ _s({
  name: "IBizMobReplyComment",
  props: Hr(),
  emits: ji(),
  setup(r, {
    emit: t
  }) {
    const e = Os("mob-comment"), s = r.controller, n = V(null), i = V(null), o = ibiz.i18n.getLang();
    let a;
    const c = V(!1), h = V({
      Authorization: "Bearer ".concat(Ki(zi.TOKEN))
    }), f = V(""), g = V(""), m = V(!1), p = V(!1), b = V([]), E = V([]), v = V(""), y = V(""), x = (H) => {
      const D = H.ops.find((R) => R.insert && R.insert.image);
      if (D)
        return D.insert.image;
    }, L = () => {
      let H = "";
      return s.valueMode === "text" && (H = a.getText()), H = a.getSemanticHTML(), H = s.transformHtml(H), H;
    }, S = async (H) => {
      const D = Fi(H), R = await ibiz.util.file.fileUpload(f.value, D, h.value), et = g.value.replace("%fileId%", R.fileid), Z = L();
      t("change", Z.replace(H, et));
    }, T = (H = v.value) => {
      const D = a.getSelection(), R = a.clipboard.convert({
        html: "".concat(H, "<p><br></p>"),
        text: "\n"
      });
      a.setContents(R), D && a.setSelection(D.index + 1, "user");
    }, k = ({
      selectedOptions: H
    }) => {
      const D = H[0];
      if (!D)
        return;
      const R = a.getSelection(!0), et = R.index + R.length, Z = JSON.stringify(D);
      a.insertText(et, "@".concat(D.name), "mention", Z, "user"), a.setSelection(et + D.name.length + 1, "user"), m.value = !1;
    }, B = async () => {
      const H = s.mention.getMentionLogic();
      if (H) {
        const D = await s.openPickUpView(r.data, H);
        if (D && D[0]) {
          const R = D[0]._deData;
          k({
            selectedOptions: [{
              ...R,
              value: R.id
            }]
          });
        }
      } else
        b.value = await s.getMentions(r.data), m.value = !0;
    }, j = ({
      selectedOptions: H
    }) => {
      const D = s.marker.getSelection(H[0]);
      if (!D)
        return;
      const R = a.getSelection(!0), et = R.index + R.length, Z = JSON.stringify(D);
      a.insertText(et, "".concat(D.name), "marker", Z, "user"), a.setSelection(et + D.name.length + 1, "user"), p.value = !1;
    }, Y = async () => {
      const H = s.marker.getMarkerLogic();
      if (H) {
        const D = await s.openPickUpView(r.data, H);
        if (D && D[0]) {
          const R = s.marker.toUIData(D);
          j({
            selectedOptions: R
          });
        }
      } else
        E.value = await s.getMarkers(r.data), p.value = !0;
    }, st = () => {
      m.value = !1, T();
    }, mt = () => {
      p.value = !1, T();
    }, pt = (H) => {
      let D = !0;
      const R = H.ops.find((Z) => Z.insert);
      if (R) {
        const Z = R.insert;
        if (Z === "@") {
          const X = a.getSelection(!0);
          a.deleteText(X.index, 1, "user"), B(), D = !1;
        }
        if (Z === "#") {
          const X = a.getSelection(!0);
          a.deleteText(X.index, 1, "user"), Y(), D = !1;
        }
      }
      if (H.ops.find((Z) => Z.delete)) {
        const Z = a.getSelection(!0);
        a.getContents(Z.index - 1, 1).ops.some((z) => {
          var Wt;
          return (Wt = z.attributes) == null ? void 0 : Wt.marker;
        }) && (a.deleteText(Z.index - 1, 1, "user"), D = !1);
      }
      return D;
    }, Nt = () => {
      if (!n.value)
        return;
      const H = s.showToolbar ? "snow" : "bubble";
      Object.assign(s.modules, {
        toolbar: i.value
      }), a = new A(n.value, {
        theme: H,
        modules: s.modules,
        readOnly: r.disabled || r.readonly,
        placeholder: s.placeHolder
      }), a.on("text-change", (D, R, et) => {
        if (et === "user" && pt(D)) {
          const X = x(D);
          if (X && s.imageMode === "file") {
            S(X);
            return;
          }
          t("change", L());
        }
      }), a.on("selection-change", (D) => {
        D ? (c.value = !0, t("focus")) : (c.value = !1, t("blur"));
      }), s.valueMode === "text" && a.setText(r.value || "");
    };
    Se(() => r.value, () => {
      if (r.value) {
        v.value = s.transformDelta(r.value);
        const H = a.getSemanticHTML();
        v.value !== H && T();
      } else
        v.value = "", a && T();
    }, {
      immediate: !0
    }), Se(() => [r.disabled, r.readonly], () => {
      a && (r.disabled || r.readonly ? a.enable(!1) : a.enable());
    }, {
      immediate: !0
    }), Se(() => r.data, (H) => {
      if (H) {
        const D = ibiz.util.file.calcFileUpDownUrl(s.context, s.params, H, s.editorParams);
        f.value = D.uploadUrl, g.value = D.downloadUrl;
      }
    }, {
      immediate: !0,
      deep: !0
    }), $r(() => {
      Nt();
    });
    const kt = (H) => {
      const {
        eventArg: D
      } = H;
      y.value = D, s.reply = D, a.setSelection(0, "silent");
    }, $t = () => {
      y.value = "", s.reply = "";
    }, re = () => {
      a.setSelection(0, "silent");
    };
    return s.evt.on("onSetReply", kt), s.evt.on("onRemoveReply", $t), s.evt.on("focus", re), Vi(() => {
      s.evt.off("onSetReply", kt), s.evt.off("onRemoveReply", $t), s.evt.off("focus", re);
    }), {
      ns: e,
      lang: o,
      editing: c,
      editorRef: n,
      toolbarRef: i,
      showAtPopup: m,
      showMkPopup: p,
      mentionItems: b,
      markerItems: E,
      curValue: v,
      handleMentionClick: B,
      handleMarkerClick: Y,
      onMentionCancel: st,
      onMentionConfirm: k,
      onMarkerCancel: mt,
      onMarkerConfirm: j,
      renderReply: () => {
        if (y.value) {
          const H = Is.execScriptFn({
            value: y.value
          }, s.replyScript, {
            singleRowReturn: !0,
            isAsync: !1
          });
          return C("div", {
            class: e.b("reply")
          }, [C("div", {
            class: e.be("reply", "content"),
            innerHTML: H
          }, null), C(W("ion-icon"), {
            name: "close-outline",
            onClick: () => $t()
          }, null)]);
        }
      }
    };
  },
  render() {
    return C("div", {
      class: [this.ns.b(), this.disabled ? this.ns.m("disabled") : "", this.readonly ? this.ns.m("readonly") : "", this.ns.m(this.lang.toLowerCase()), this.ns.is("editing", this.editing), this.ns.is("reply", !0)]
    }, [C("div", {
      class: this.ns.e("content")
    }, [C("div", {
      class: this.ns.e("ql-toolbar"),
      ref: "toolbarRef"
    }, [C("button", {
      class: "ql-bold"
    }, null), C("button", {
      class: "ql-italic"
    }, null), C("button", {
      class: "ql-underline"
    }, null), C("button", {
      class: "ql-strike"
    }, null), C("button", {
      class: "ql-code-block"
    }, null), C("button", {
      class: "ql-list",
      value: "ordered"
    }, null), C("button", {
      class: "ql-list",
      value: "bullet"
    }, null), C("button", {
      class: "ql-mention",
      onClick: this.handleMentionClick
    }, [C("svg", {
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "4218",
      width: "200",
      height: "200"
    }, [C("path", {
      d: "M23.7 555c0-339.3 247-550 533.8-550 295.6 0 442.8 165.9 442.8 401.6 0 210.8-93.5 361.7-237 361.7-63.6 0-108.5-26.2-137.2-78.6-48.6 51.1-96 79.8-174.6 79.8-116 0-178.4-77.3-178.4-193.3 0-209.5 131-323 251.9-323 64.9 0 102.3 24.9 122.2 68.6l11.2-58.6 114.7 1.2L727 510.1c-7.5 36.2-11.2 63.6-11.2 81.1 0 44.9 22.5 71.1 56.1 71.1 63.6 0 106-89.8 106-243.2 0-205.8-114.7-300.6-323-300.6-220.8 0-405.4 163.4-405.4 436.5 0 238.2 132.2 350.5 390.4 350.5 94.8 0 174.6-12.5 255.7-36.2v109.8c-88.6 26.2-177.1 39.9-263.2 39.9-329.1 0-508.7-168.4-508.7-464z m585-44.9c3.7-20 6.2-39.9 6.2-53.6 0-56.1-15-96-83.6-96-83.6 0-133.5 108.5-133.5 212 0 44.9 13.7 88.6 77.3 88.6 73.7-0.1 114.9-57.4 133.6-151z",
      fill: "currentColot",
      "p-id": "4219"
    }, null)])]), C("button", {
      class: "ql-marker",
      onClick: this.handleMarkerClick
    }, [C("svg", {
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "6854",
      width: "200",
      height: "200"
    }, [C("path", {
      d: "M929.28 625.664l-234.496 0.512 24.064-229.888 210.432-0.512c20.992 0 38.4-17.408 38.4-38.4s-17.408-38.4-38.4-38.4H727.04l29.184-275.456c2.048-20.992-13.312-39.936-34.304-41.984-20.992-2.048-39.936 13.312-41.984 34.304L650.24 318.976l-232.448 0.512 29.184-275.456c2.048-20.992-13.312-39.936-34.304-41.984-20.992-2.048-39.936 13.312-41.984 34.304l-29.696 283.648-246.272 0.512c-20.992 0-38.4 17.408-38.4 38.4s17.408 38.4 38.4 38.4l238.08-0.512-24.064 229.888-214.016 0.512c-20.992 0-38.4 17.408-38.4 38.4s17.408 38.4 38.4 38.4l205.824-0.512-29.184 276.992c-2.048 20.992 13.312 39.936 34.304 41.984h4.096c19.456 0 35.84-14.848 37.888-34.304l30.208-285.184 232.448-0.512-29.184 277.504c-2.048 20.992 13.312 39.936 34.304 41.984h4.096c19.456 0 35.84-14.848 38.4-34.304l30.208-285.184 242.688-0.512c20.992 0 38.4-17.408 38.4-38.4-1.536-20.992-18.944-37.888-39.936-37.888z m-544.256 0.512l24.064-229.888 232.448-0.512-24.064 229.888-232.448 0.512z",
      fill: "currentColot",
      "p-id": "6855"
    }, null)])])]), C("div", {
      class: this.ns.e("ql-content"),
      ref: "editorRef"
    }, [this.controller.valueMode === "html" ? C("div", {
      innerHTML: this.curValue
    }, null) : null]), this.renderReply()]), C(W("van-popup"), {
      show: this.showAtPopup,
      "onUpdate:show": (r) => this.showAtPopup = r,
      round: !0,
      position: "bottom"
    }, {
      default: () => [C(W("van-picker"), {
        columns: this.mentionItems,
        "confirm-button-text": ibiz.i18n.t("editor.common.confirm"),
        onCancel: this.onMentionCancel,
        onConfirm: this.onMentionConfirm
      }, {
        option: (r) => C(W("mobMenTionItem"), {
          item: r,
          controller: this.controller.mention
        }, null)
      })]
    }), C(W("van-popup"), {
      show: this.showMkPopup,
      "onUpdate:show": (r) => this.showMkPopup = r,
      round: !0,
      position: "bottom"
    }, {
      default: () => [C(W("van-picker"), {
        columns: this.markerItems,
        "confirm-button-text": ibiz.i18n.t("editor.common.confirm"),
        onCancel: this.onMarkerCancel,
        onConfirm: this.onMarkerConfirm
      }, {
        option: (r) => C(W("mobMarkerItem"), {
          item: r,
          controller: this.controller.marker
        }, null)
      })]
    })]);
  }
});
const Di = /* @__PURE__ */ _s({
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
    const t = Os("mob-mention-item"), e = r.controller, s = V([]), n = on(() => Pr.stringToHexColor(r.item.name)), i = on(() => Pr.avatarName(r.item.name)), o = (h) => {
      if (!h)
        return null;
      const f = JSON.parse(h);
      if (f.length === 0)
        return null;
      const {
        downloadUrl: g
      } = ibiz.util.file.calcFileUpDownUrl(e.context, e.params, e.editorParams);
      return g.replace("%fileId%", f[0].id);
    }, a = on(() => {
      let h = "";
      if (e.operatorMap.has(r.item.id)) {
        const f = e.operatorMap.get(r.item.id);
        f.data.iconurl && (h = o(f.data.iconurl) || "");
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
    return C("div", {
      class: this.ns.b()
    }, [C("div", {
      class: this.ns.e("avatar"),
      style: "background: ".concat(this.avatarBg, ";")
    }, [this.url && !this.errorLoadItems.includes(this.url) ? C("img", {
      src: this.url,
      onError: () => this.avatarLoadError(this.url)
    }, null) : this.avatarName]), C("div", {
      class: this.ns.e("name")
    }, [this.item.name])]);
  }
});
const Pi = /* @__PURE__ */ _s({
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
    const t = Os("mob-marker-item"), e = r.controller;
    return {
      ns: t,
      renderContent: (n, i) => {
        if (e.quoteCodelistMap.has(n)) {
          const o = e.quoteCodelistMap.get(n);
          return C(W("iBizCodeList"), {
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
    return C("div", {
      class: this.ns.b()
    }, [C("div", {
      class: this.ns.e("type")
    }, [this.renderContent("type", this.item.type)]), C("div", {
      class: this.ns.e("identifier")
    }, [this.renderContent("identifier", this.item.identifier)]), C("div", {
      class: this.ns.e("name"),
      title: this.item.name
    }, [this.renderContent("name", this.item.name)])]);
  }
}), Oc = Bl(
  wr,
  function(r) {
    r.component(wr.name, wr), r.component(Ui.name, Ui), r.component(Di.name, Di), r.component(Pi.name, Pi), ar(
      "MOBHTMLTEXT_COMMENT",
      () => new vr()
    ), ar(
      "MOBHTMLTEXT_MOB_COLLAPSE",
      () => new vr()
    ), ar(
      "MOBHTMLTEXT_REPLY_COMMENT",
      () => new vr("REPLY")
    );
  }
), Fc = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(r) {
    r.use(Oc);
  }
};
export {
  Oc as IBizMobHtmlComment,
  Fc as default
};
