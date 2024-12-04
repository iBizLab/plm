import './style.css';
var Ol = Object.defineProperty;
var Il = (r, t, e) => t in r ? Ol(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var A = (r, t, e) => (Il(r, typeof t != "symbol" ? t + "" : t, e), e);
import { getHtmlProps as Bi, getEditorEmits as Ui, useNamespace as an, withInstall as Rl } from "@ibiz-template/vue3-util";
import { ScriptFactory as ws, EditorController as Ml, ControllerEvent as _l, getViewLogics as Bl, getUIActionById as Ul, OpenAppViewCommand as Dl, registerEditorProvider as ei } from "@ibiz-template/runtime";
import { isEqual as Ur, cloneDeep as Ue, merge as ie } from "lodash-es";
import { RuntimeError as Di, CoreConst as Pi, base64ToBlob as ji } from "@ibiz-template/core";
import { defineComponent as cn, ref as G, watch as De, onMounted as Hi, onUnmounted as $i, createVNode as O, resolveComponent as ot, computed as lr } from "vue";
import { getCookie as zi } from "qx-util";
var M = /* @__PURE__ */ ((r) => (r[r.TYPE = 3] = "TYPE", r[r.LEVEL = 12] = "LEVEL", r[r.ATTRIBUTE = 13] = "ATTRIBUTE", r[r.BLOT = 14] = "BLOT", r[r.INLINE = 7] = "INLINE", r[r.BLOCK = 11] = "BLOCK", r[r.BLOCK_BLOT = 10] = "BLOCK_BLOT", r[r.INLINE_BLOT = 6] = "INLINE_BLOT", r[r.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", r[r.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", r[r.ANY = 15] = "ANY", r))(M || {});
class $t {
  constructor(t, e, s = {}) {
    this.attrName = t, this.keyName = e;
    const n = M.TYPE & M.ATTRIBUTE;
    this.scope = s.scope != null ? (
      // Ignore type bits, force attribute bit
      s.scope & M.LEVEL | n
    ) : M.ATTRIBUTE, s.whitelist != null && (this.whitelist = s.whitelist);
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
class Pe extends Error {
  constructor(t) {
    t = "[Parchment] " + t, super(t), this.message = t, this.name = this.constructor.name;
  }
}
const Fi = class yr {
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
      throw new Pe("Unable to create ".concat(e, " blot"));
    const i = n, o = (
      // @ts-expect-error Fix me later
      e instanceof Node || e.nodeType === Node.TEXT_NODE ? e : i.create(s)
    ), a = new i(t, o, s);
    return yr.blots.set(a.domNode, a), a;
  }
  find(t, e = !1) {
    return yr.find(t, e);
  }
  query(t, e = M.ANY) {
    let s;
    return typeof t == "string" ? s = this.types[t] || this.attributes[t] : t instanceof Text || t.nodeType === Node.TEXT_NODE ? s = this.types.text : typeof t == "number" ? t & M.LEVEL & M.BLOCK ? s = this.types.block : t & M.LEVEL & M.INLINE && (s = this.types.inline) : t instanceof Element && ((t.getAttribute("class") || "").split(/\s+/).some((n) => (s = this.classes[n], !!s)), s = s || this.tags[t.tagName]), s == null ? null : "scope" in s && e & M.LEVEL & s.scope && e & M.TYPE & s.scope ? s : null;
  }
  register(...t) {
    return t.map((e) => {
      const s = "blotName" in e, n = "attrName" in e;
      if (!s && !n)
        throw new Pe("Invalid definition");
      if (s && e.blotName === "abstract")
        throw new Pe("Cannot register abstract class");
      const i = s ? e.blotName : n ? e.attrName : void 0;
      return this.types[i] = e, n ? typeof e.keyName == "string" && (this.attributes[e.keyName] = e) : s && (e.className && (this.classes[e.className] = e), e.tagName && (Array.isArray(e.tagName) ? e.tagName = e.tagName.map((o) => o.toUpperCase()) : e.tagName = e.tagName.toUpperCase(), (Array.isArray(e.tagName) ? e.tagName : [e.tagName]).forEach((o) => {
        (this.tags[o] == null || e.className == null) && (this.tags[o] = e);
      }))), e;
    });
  }
};
Fi.blots = /* @__PURE__ */ new WeakMap();
let He = Fi;
function si(r, t) {
  return (r.getAttribute("class") || "").split(/\s+/).filter((e) => e.indexOf("".concat(t, "-")) === 0);
}
class Pl extends $t {
  static keys(t) {
    return (t.getAttribute("class") || "").split(/\s+/).map((e) => e.split("-").slice(0, -1).join("-"));
  }
  add(t, e) {
    return this.canAdd(t, e) ? (this.remove(t), t.classList.add("".concat(this.keyName, "-").concat(e)), !0) : !1;
  }
  remove(t) {
    si(t, this.keyName).forEach((e) => {
      t.classList.remove(e);
    }), t.classList.length === 0 && t.removeAttribute("class");
  }
  value(t) {
    const e = (si(t, this.keyName)[0] || "").slice(this.keyName.length + 1);
    return this.canAdd(t, e) ? e : "";
  }
}
const It = Pl;
function or(r) {
  const t = r.split("-"), e = t.slice(1).map((s) => s[0].toUpperCase() + s.slice(1)).join("");
  return t[0] + e;
}
class jl extends $t {
  static keys(t) {
    return (t.getAttribute("style") || "").split(";").map((e) => e.split(":")[0].trim());
  }
  add(t, e) {
    return this.canAdd(t, e) ? (t.style[or(this.keyName)] = e, !0) : !1;
  }
  remove(t) {
    t.style[or(this.keyName)] = "", t.getAttribute("style") || t.removeAttribute("style");
  }
  value(t) {
    const e = t.style[or(this.keyName)];
    return this.canAdd(t, e) ? e : "";
  }
}
const le = jl;
class Hl {
  constructor(t) {
    this.attributes = {}, this.domNode = t, this.build();
  }
  attribute(t, e) {
    e ? t.add(this.domNode, e) && (t.value(this.domNode) != null ? this.attributes[t.attrName] = t : delete this.attributes[t.attrName]) : (t.remove(this.domNode), delete this.attributes[t.attrName]);
  }
  build() {
    this.attributes = {};
    const t = He.find(this.domNode);
    if (t == null)
      return;
    const e = $t.keys(this.domNode), s = It.keys(this.domNode), n = le.keys(this.domNode);
    e.concat(s).concat(n).forEach((i) => {
      const o = t.scroll.query(i, M.ATTRIBUTE);
      o instanceof $t && (this.attributes[o.attrName] = o);
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
const un = Hl, Vi = class {
  constructor(t, e) {
    this.scroll = t, this.domNode = e, He.blots.set(e, this), this.prev = null, this.next = null;
  }
  static create(t) {
    if (this.tagName == null)
      throw new Pe("Blot definition missing tagName");
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
    this.parent != null && this.parent.removeChild(this), He.blots.delete(this.domNode);
  }
  deleteAt(t, e) {
    this.isolate(t, e).remove();
  }
  formatAt(t, e, s, n) {
    const i = this.isolate(t, e);
    if (this.scroll.query(s, M.BLOT) != null && n)
      i.wrap(s, n);
    else if (this.scroll.query(s, M.ATTRIBUTE) != null) {
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
      throw new Pe("Cannot wrap ".concat(t));
    return s.appendChild(this), s;
  }
};
Vi.blotName = "abstract";
let Ki = Vi;
const Gi = class extends Ki {
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
Gi.scope = M.INLINE_BLOT;
let $l = Gi;
const nt = $l;
class zl {
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
function ni(r, t) {
  const e = t.find(r);
  if (e)
    return e;
  try {
    return t.create(r);
  } catch (s) {
    const n = t.create(M.INLINE);
    return Array.from(r.childNodes).forEach((i) => {
      n.domNode.appendChild(i);
    }), r.parentNode && r.parentNode.replaceChild(n.domNode, r), n.attach(), n;
  }
}
const Zi = class ee extends Ki {
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
    this.uiNode != null && this.uiNode.remove(), this.uiNode = t, ee.uiClass && this.uiNode.classList.add(ee.uiClass), this.uiNode.setAttribute("contenteditable", "false"), this.domNode.insertBefore(this.uiNode, this.domNode.firstChild);
  }
  /**
   * Called during construction, should fill its own children LinkedList.
   */
  build() {
    this.children = new zl(), Array.from(this.domNode.childNodes).filter((t) => t !== this.uiNode).reverse().forEach((t) => {
      try {
        const e = ni(t, this.scroll);
        this.insertBefore(e, this.children.head || void 0);
      } catch (e) {
        if (e instanceof Pe)
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
    return t.blotName == null && t(s) || t.blotName != null && s instanceof t ? [s, n] : s instanceof ee ? s.descendant(t, n) : [null, -1];
  }
  descendants(t, e = 0, s = Number.MAX_VALUE) {
    let n = [], i = s;
    return this.children.forEachAt(
      e,
      s,
      (o, a, c) => {
        (t.blotName == null && t(o) || t.blotName != null && o instanceof t) && n.push(o), o instanceof ee && (n = n.concat(
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
      ) || (e.statics.scope === M.BLOCK_BLOT ? (e.next != null && this.splitAfter(e), e.prev != null && this.splitAfter(e.prev), e.parent.unwrap(), t = !0) : e instanceof ee ? e.unwrap() : e.remove());
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
    return s instanceof ee ? i.concat(s.path(n, e)) : (s != null && i.push([s, n]), i);
  }
  removeChild(t) {
    this.children.remove(t);
  }
  replaceWith(t, e) {
    const s = typeof t == "string" ? this.scroll.create(t, e) : t;
    return s instanceof ee && this.moveChildren(s), super.replaceWith(s);
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
      const a = ni(i, this.scroll);
      (a.next !== o || a.next == null) && (a.parent != null && a.parent.removeChild(this), this.insertBefore(a, o || void 0));
    }), this.enforceAllowedChildren();
  }
};
Zi.uiClass = "";
let Fl = Zi;
const kt = Fl;
function Vl(r, t) {
  if (Object.keys(r).length !== Object.keys(t).length)
    return !1;
  for (const e in r)
    if (r[e] !== t[e])
      return !1;
  return !0;
}
const Oe = class Ie extends kt {
  static create(t) {
    return super.create(t);
  }
  static formats(t, e) {
    const s = e.query(Ie.blotName);
    if (!(s != null && t.tagName === s.tagName)) {
      if (typeof this.tagName == "string")
        return !0;
      if (Array.isArray(this.tagName))
        return t.tagName.toLowerCase();
    }
  }
  constructor(t, e) {
    super(t, e), this.attributes = new un(this.domNode);
  }
  format(t, e) {
    if (t === this.statics.blotName && !e)
      this.children.forEach((s) => {
        s instanceof Ie || (s = s.wrap(Ie.blotName, !0)), this.attributes.copy(s);
      }), this.unwrap();
    else {
      const s = this.scroll.query(t, M.INLINE);
      if (s == null)
        return;
      s instanceof $t ? this.attributes.attribute(s, e) : e && (t !== this.statics.blotName || this.formats()[t] !== e) && this.replaceWith(t, e);
    }
  }
  formats() {
    const t = this.attributes.values(), e = this.statics.formats(this.domNode, this.scroll);
    return e != null && (t[this.statics.blotName] = e), t;
  }
  formatAt(t, e, s, n) {
    this.formats()[s] != null || this.scroll.query(s, M.ATTRIBUTE) ? this.isolate(t, e).format(s, n) : super.formatAt(t, e, s, n);
  }
  optimize(t) {
    super.optimize(t);
    const e = this.formats();
    if (Object.keys(e).length === 0)
      return this.unwrap();
    const s = this.next;
    s instanceof Ie && s.prev === this && Vl(e, s.formats()) && (s.moveChildren(this), s.remove());
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
    return s instanceof Ie && this.attributes.move(s), s;
  }
};
Oe.allowedChildren = [Oe, nt], Oe.blotName = "inline", Oe.scope = M.INLINE_BLOT, Oe.tagName = "SPAN";
let Kl = Oe;
const Dr = Kl, Re = class vr extends kt {
  static create(t) {
    return super.create(t);
  }
  static formats(t, e) {
    const s = e.query(vr.blotName);
    if (!(s != null && t.tagName === s.tagName)) {
      if (typeof this.tagName == "string")
        return !0;
      if (Array.isArray(this.tagName))
        return t.tagName.toLowerCase();
    }
  }
  constructor(t, e) {
    super(t, e), this.attributes = new un(this.domNode);
  }
  format(t, e) {
    const s = this.scroll.query(t, M.BLOCK);
    s != null && (s instanceof $t ? this.attributes.attribute(s, e) : t === this.statics.blotName && !e ? this.replaceWith(vr.blotName) : e && (t !== this.statics.blotName || this.formats()[t] !== e) && this.replaceWith(t, e));
  }
  formats() {
    const t = this.attributes.values(), e = this.statics.formats(this.domNode, this.scroll);
    return e != null && (t[this.statics.blotName] = e), t;
  }
  formatAt(t, e, s, n) {
    this.scroll.query(s, M.BLOCK) != null ? this.format(s, n) : super.formatAt(t, e, s, n);
  }
  insertAt(t, e, s) {
    if (s == null || this.scroll.query(e, M.INLINE) != null)
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
Re.blotName = "block", Re.scope = M.BLOCK_BLOT, Re.tagName = "P", Re.allowedChildren = [
  Dr,
  Re,
  nt
];
let Gl = Re;
const gs = Gl, Er = class extends kt {
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
Er.blotName = "container", Er.scope = M.BLOCK_BLOT;
let Zl = Er;
const hn = Zl;
class Wl extends nt {
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
const ft = Wl, Xl = {
  attributes: !0,
  characterData: !0,
  characterDataOldValue: !0,
  childList: !0,
  subtree: !0
}, Yl = 100, Me = class extends kt {
  constructor(t, e) {
    super(null, e), this.registry = t, this.scroll = this, this.build(), this.observer = new MutationObserver((s) => {
      this.update(s);
    }), this.observer.observe(this.domNode, Xl), this.attach();
  }
  create(t, e) {
    return this.registry.create(this, t, e);
  }
  find(t, e = !1) {
    const s = this.registry.find(t, e);
    return s ? s.scroll === this ? s : e ? this.find(s.scroll.domNode.parentNode, !0) : null : null;
  }
  query(t, e = M.ANY) {
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
      s.has(c.domNode) && (c instanceof kt && c.children.forEach(o), s.delete(c.domNode), c.optimize(e));
    };
    let a = t;
    for (let c = 0; a.length > 0; c += 1) {
      if (c >= Yl)
        throw new Error("[Parchment] Maximum optimize iterations reached");
      for (a.forEach((h) => {
        const m = this.find(h.target, !0);
        m != null && (m.domNode === h.target && (h.type === "childList" ? (i(this.find(h.previousSibling, !1)), Array.from(h.addedNodes).forEach((b) => {
          const d = this.find(b, !1);
          i(d, !1), d instanceof kt && d.children.forEach((p) => {
            i(p, !1);
          });
        })) : h.type === "attributes" && i(m.prev)), i(m));
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
Me.blotName = "scroll", Me.defaultChild = gs, Me.allowedChildren = [gs, hn], Me.scope = M.BLOCK_BLOT, Me.tagName = "DIV";
let Jl = Me;
const Pr = Jl, wr = class Wi extends nt {
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
    super.optimize(t), this.text = this.statics.value(this.domNode), this.text.length === 0 ? this.remove() : this.next instanceof Wi && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove());
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
wr.blotName = "text", wr.scope = M.INLINE_BLOT;
let Ql = wr;
const rn = Ql, to = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Attributor: $t,
  AttributorStore: un,
  BlockBlot: gs,
  ClassAttributor: It,
  ContainerBlot: hn,
  EmbedBlot: ft,
  InlineBlot: Dr,
  LeafBlot: nt,
  ParentBlot: kt,
  Registry: He,
  Scope: M,
  ScrollBlot: Pr,
  StyleAttributor: le,
  TextBlot: rn
}, Symbol.toStringTag, { value: "Module" }));
var se = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Xi(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Nr = { exports: {} }, ht = -1, at = 1, X = 0;
function bs(r, t, e, s, n) {
  if (r === t)
    return r ? [[X, r]] : [];
  if (e != null) {
    var i = co(r, t, e);
    if (i)
      return i;
  }
  var o = jr(r, t), a = r.substring(0, o);
  r = r.substring(o), t = t.substring(o), o = fn(r, t);
  var c = r.substring(r.length - o);
  r = r.substring(0, r.length - o), t = t.substring(0, t.length - o);
  var h = eo(r, t);
  return a && h.unshift([X, a]), c && h.push([X, c]), Hr(h, n), s && ro(h), h;
}
function eo(r, t) {
  var e;
  if (!r)
    return [[at, t]];
  if (!t)
    return [[ht, r]];
  var s = r.length > t.length ? r : t, n = r.length > t.length ? t : r, i = s.indexOf(n);
  if (i !== -1)
    return e = [
      [at, s.substring(0, i)],
      [X, n],
      [at, s.substring(i + n.length)]
    ], r.length > t.length && (e[0][0] = e[2][0] = ht), e;
  if (n.length === 1)
    return [
      [ht, r],
      [at, t]
    ];
  var o = no(r, t);
  if (o) {
    var a = o[0], c = o[1], h = o[2], m = o[3], b = o[4], d = bs(a, h), p = bs(c, m);
    return d.concat([[X, b]], p);
  }
  return so(r, t);
}
function so(r, t) {
  for (var e = r.length, s = t.length, n = Math.ceil((e + s) / 2), i = n, o = 2 * n, a = new Array(o), c = new Array(o), h = 0; h < o; h++)
    a[h] = -1, c[h] = -1;
  a[i + 1] = 0, c[i + 1] = 0;
  for (var m = e - s, b = m % 2 !== 0, d = 0, p = 0, g = 0, w = 0, v = 0; v < n; v++) {
    for (var E = -v + d; E <= v - p; E += 2) {
      var x = i + E, T;
      E === -v || E !== v && a[x - 1] < a[x + 1] ? T = a[x + 1] : T = a[x - 1] + 1;
      for (var I = T - E; T < e && I < s && r.charAt(T) === t.charAt(I); )
        T++, I++;
      if (a[x] = T, T > e)
        p += 2;
      else if (I > s)
        d += 2;
      else if (b) {
        var q = i + m - E;
        if (q >= 0 && q < o && c[q] !== -1) {
          var B = e - c[q];
          if (T >= B)
            return ri(r, t, T, I);
        }
      }
    }
    for (var D = -v + g; D <= v - w; D += 2) {
      var q = i + D, B;
      D === -v || D !== v && c[q - 1] < c[q + 1] ? B = c[q + 1] : B = c[q - 1] + 1;
      for (var z = B - D; B < e && z < s && r.charAt(e - B - 1) === t.charAt(s - z - 1); )
        B++, z++;
      if (c[q] = B, B > e)
        w += 2;
      else if (z > s)
        g += 2;
      else if (!b) {
        var x = i + m - D;
        if (x >= 0 && x < o && a[x] !== -1) {
          var T = a[x], I = i + T - x;
          if (B = e - B, T >= B)
            return ri(r, t, T, I);
        }
      }
    }
  }
  return [
    [ht, r],
    [at, t]
  ];
}
function ri(r, t, e, s) {
  var n = r.substring(0, e), i = t.substring(0, s), o = r.substring(e), a = t.substring(s), c = bs(n, i), h = bs(o, a);
  return c.concat(h);
}
function jr(r, t) {
  if (!r || !t || r.charAt(0) !== t.charAt(0))
    return 0;
  for (var e = 0, s = Math.min(r.length, t.length), n = s, i = 0; e < n; )
    r.substring(i, n) == t.substring(i, n) ? (e = n, i = e) : s = n, n = Math.floor((s - e) / 2 + e);
  return Yi(r.charCodeAt(n - 1)) && n--, n;
}
function ii(r, t) {
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
function fn(r, t) {
  if (!r || !t || r.slice(-1) !== t.slice(-1))
    return 0;
  for (var e = 0, s = Math.min(r.length, t.length), n = s, i = 0; e < n; )
    r.substring(r.length - n, r.length - i) == t.substring(t.length - n, t.length - i) ? (e = n, i = e) : s = n, n = Math.floor((s - e) / 2 + e);
  return Ji(r.charCodeAt(r.length - n)) && n--, n;
}
function no(r, t) {
  var e = r.length > t.length ? r : t, s = r.length > t.length ? t : r;
  if (e.length < 4 || s.length * 2 < e.length)
    return null;
  function n(p, g, w) {
    for (var v = p.substring(w, w + Math.floor(p.length / 4)), E = -1, x = "", T, I, q, B; (E = g.indexOf(v, E + 1)) !== -1; ) {
      var D = jr(
        p.substring(w),
        g.substring(E)
      ), z = fn(
        p.substring(0, w),
        g.substring(0, E)
      );
      x.length < z + D && (x = g.substring(E - z, E) + g.substring(E, E + D), T = p.substring(0, w - z), I = p.substring(w + D), q = g.substring(0, E - z), B = g.substring(E + D));
    }
    return x.length * 2 >= p.length ? [
      T,
      I,
      q,
      B,
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
  var c, h, m, b;
  r.length > t.length ? (c = a[0], h = a[1], m = a[2], b = a[3]) : (m = a[0], b = a[1], c = a[2], h = a[3]);
  var d = a[4];
  return [c, h, m, b, d];
}
function ro(r) {
  for (var t = !1, e = [], s = 0, n = null, i = 0, o = 0, a = 0, c = 0, h = 0; i < r.length; )
    r[i][0] == X ? (e[s++] = i, o = c, a = h, c = 0, h = 0, n = r[i][1]) : (r[i][0] == at ? c += r[i][1].length : h += r[i][1].length, n && n.length <= Math.max(o, a) && n.length <= Math.max(c, h) && (r.splice(e[s - 1], 0, [
      ht,
      n
    ]), r[e[s - 1] + 1][0] = at, s--, s--, i = s > 0 ? e[s - 1] : -1, o = 0, a = 0, c = 0, h = 0, n = null, t = !0)), i++;
  for (t && Hr(r), oo(r), i = 1; i < r.length; ) {
    if (r[i - 1][0] == ht && r[i][0] == at) {
      var m = r[i - 1][1], b = r[i][1], d = ii(m, b), p = ii(b, m);
      d >= p ? (d >= m.length / 2 || d >= b.length / 2) && (r.splice(i, 0, [
        X,
        b.substring(0, d)
      ]), r[i - 1][1] = m.substring(
        0,
        m.length - d
      ), r[i + 1][1] = b.substring(d), i++) : (p >= m.length / 2 || p >= b.length / 2) && (r.splice(i, 0, [
        X,
        m.substring(0, p)
      ]), r[i - 1][0] = at, r[i - 1][1] = b.substring(
        0,
        b.length - p
      ), r[i + 1][0] = ht, r[i + 1][1] = m.substring(p), i++), i++;
    }
    i++;
  }
}
var li = /[^a-zA-Z0-9]/, oi = /\s/, ai = /[\r\n]/, io = /\n\r?\n$/, lo = /^\r?\n\r?\n/;
function oo(r) {
  function t(p, g) {
    if (!p || !g)
      return 6;
    var w = p.charAt(p.length - 1), v = g.charAt(0), E = w.match(li), x = v.match(li), T = E && w.match(oi), I = x && v.match(oi), q = T && w.match(ai), B = I && v.match(ai), D = q && p.match(io), z = B && g.match(lo);
    return D || z ? 5 : q || B ? 4 : E && !T && I ? 3 : T || I ? 2 : E || x ? 1 : 0;
  }
  for (var e = 1; e < r.length - 1; ) {
    if (r[e - 1][0] == X && r[e + 1][0] == X) {
      var s = r[e - 1][1], n = r[e][1], i = r[e + 1][1], o = fn(s, n);
      if (o) {
        var a = n.substring(n.length - o);
        s = s.substring(0, s.length - o), n = a + n.substring(0, n.length - o), i = a + i;
      }
      for (var c = s, h = n, m = i, b = t(s, n) + t(n, i); n.charAt(0) === i.charAt(0); ) {
        s += n.charAt(0), n = n.substring(1) + i.charAt(0), i = i.substring(1);
        var d = t(s, n) + t(n, i);
        d >= b && (b = d, c = s, h = n, m = i);
      }
      r[e - 1][1] != c && (c ? r[e - 1][1] = c : (r.splice(e - 1, 1), e--), r[e][1] = h, m ? r[e + 1][1] = m : (r.splice(e + 1, 1), e--));
    }
    e++;
  }
}
function Hr(r, t) {
  r.push([X, ""]);
  for (var e = 0, s = 0, n = 0, i = "", o = "", a; e < r.length; ) {
    if (e < r.length - 1 && !r[e][1]) {
      r.splice(e, 1);
      continue;
    }
    switch (r[e][0]) {
      case at:
        n++, o += r[e][1], e++;
        break;
      case ht:
        s++, i += r[e][1], e++;
        break;
      case X:
        var c = e - n - s - 1;
        if (t) {
          if (c >= 0 && tl(r[c][1])) {
            var h = r[c][1].slice(-1);
            if (r[c][1] = r[c][1].slice(
              0,
              -1
            ), i = h + i, o = h + o, !r[c][1]) {
              r.splice(c, 1), e--;
              var m = c - 1;
              r[m] && r[m][0] === at && (n++, o = r[m][1] + o, m--), r[m] && r[m][0] === ht && (s++, i = r[m][1] + i, m--), c = m;
            }
          }
          if (Qi(r[e][1])) {
            var h = r[e][1].charAt(0);
            r[e][1] = r[e][1].slice(1), i += h, o += h;
          }
        }
        if (e < r.length - 1 && !r[e][1]) {
          r.splice(e, 1);
          break;
        }
        if (i.length > 0 || o.length > 0) {
          i.length > 0 && o.length > 0 && (a = jr(o, i), a !== 0 && (c >= 0 ? r[c][1] += o.substring(
            0,
            a
          ) : (r.splice(0, 0, [
            X,
            o.substring(0, a)
          ]), e++), o = o.substring(a), i = i.substring(a)), a = fn(o, i), a !== 0 && (r[e][1] = o.substring(o.length - a) + r[e][1], o = o.substring(
            0,
            o.length - a
          ), i = i.substring(
            0,
            i.length - a
          )));
          var b = n + s;
          i.length === 0 && o.length === 0 ? (r.splice(e - b, b), e = e - b) : i.length === 0 ? (r.splice(e - b, b, [at, o]), e = e - b + 1) : o.length === 0 ? (r.splice(e - b, b, [ht, i]), e = e - b + 1) : (r.splice(
            e - b,
            b,
            [ht, i],
            [at, o]
          ), e = e - b + 2);
        }
        e !== 0 && r[e - 1][0] === X ? (r[e - 1][1] += r[e][1], r.splice(e, 1)) : e++, n = 0, s = 0, i = "", o = "";
        break;
    }
  }
  r[r.length - 1][1] === "" && r.pop();
  var d = !1;
  for (e = 1; e < r.length - 1; )
    r[e - 1][0] === X && r[e + 1][0] === X && (r[e][1].substring(
      r[e][1].length - r[e - 1][1].length
    ) === r[e - 1][1] ? (r[e][1] = r[e - 1][1] + r[e][1].substring(
      0,
      r[e][1].length - r[e - 1][1].length
    ), r[e + 1][1] = r[e - 1][1] + r[e + 1][1], r.splice(e - 1, 1), d = !0) : r[e][1].substring(0, r[e + 1][1].length) == r[e + 1][1] && (r[e - 1][1] += r[e + 1][1], r[e][1] = r[e][1].substring(r[e + 1][1].length) + r[e + 1][1], r.splice(e + 1, 1), d = !0)), e++;
  d && Hr(r, t);
}
function Yi(r) {
  return r >= 55296 && r <= 56319;
}
function Ji(r) {
  return r >= 56320 && r <= 57343;
}
function Qi(r) {
  return Ji(r.charCodeAt(0));
}
function tl(r) {
  return Yi(r.charCodeAt(r.length - 1));
}
function ao(r) {
  for (var t = [], e = 0; e < r.length; e++)
    r[e][1].length > 0 && t.push(r[e]);
  return t;
}
function ar(r, t, e, s) {
  return tl(r) || Qi(s) ? null : ao([
    [X, r],
    [ht, t],
    [at, e],
    [X, s]
  ]);
}
function co(r, t, e) {
  var s = typeof e == "number" ? { index: e, length: 0 } : e.oldRange, n = typeof e == "number" ? null : e.newRange, i = r.length, o = t.length;
  if (s.length === 0 && (n === null || n.length === 0)) {
    var a = s.index, c = r.slice(0, a), h = r.slice(a), m = n ? n.index : null;
    t: {
      var b = a + o - i;
      if (m !== null && m !== b || b < 0 || b > o)
        break t;
      var d = t.slice(0, b), p = t.slice(b);
      if (p !== h)
        break t;
      var g = Math.min(a, b), w = c.slice(0, g), v = d.slice(0, g);
      if (w !== v)
        break t;
      var E = c.slice(g), x = d.slice(g);
      return ar(w, E, x, h);
    }
    t: {
      if (m !== null && m !== a)
        break t;
      var T = a, d = t.slice(0, T), p = t.slice(T);
      if (d !== c)
        break t;
      var I = Math.min(i - T, o - T), q = h.slice(h.length - I), B = p.slice(p.length - I);
      if (q !== B)
        break t;
      var E = h.slice(0, h.length - I), x = p.slice(0, p.length - I);
      return ar(c, E, x, q);
    }
  }
  if (s.length > 0 && n && n.length === 0)
    t: {
      var w = r.slice(0, s.index), q = r.slice(s.index + s.length), g = w.length, I = q.length;
      if (o < g + I)
        break t;
      var v = t.slice(0, g), B = t.slice(o - I);
      if (w !== v || q !== B)
        break t;
      var E = r.slice(g, i - I), x = t.slice(g, o - I);
      return ar(w, E, x, q);
    }
  return null;
}
function dn(r, t, e, s) {
  return bs(r, t, e, s, !0);
}
dn.INSERT = at;
dn.DELETE = ht;
dn.EQUAL = X;
var uo = dn, ln = { exports: {} };
ln.exports;
(function(r, t) {
  var e = 200, s = "__lodash_hash_undefined__", n = 9007199254740991, i = "[object Arguments]", o = "[object Array]", a = "[object Boolean]", c = "[object Date]", h = "[object Error]", m = "[object Function]", b = "[object GeneratorFunction]", d = "[object Map]", p = "[object Number]", g = "[object Object]", w = "[object Promise]", v = "[object RegExp]", E = "[object Set]", x = "[object String]", T = "[object Symbol]", I = "[object WeakMap]", q = "[object ArrayBuffer]", B = "[object DataView]", D = "[object Float32Array]", z = "[object Float64Array]", it = "[object Int8Array]", dt = "[object Int16Array]", Nt = "[object Int32Array]", At = "[object Uint8Array]", Jt = "[object Uint8ClampedArray]", _t = "[object Uint16Array]", mt = "[object Uint32Array]", zt = /[\\^$.*+?()[\]{}|]/g, Ve = /\w*$/, C = /^\[object .+?Constructor\]$/, L = /^(?:0|[1-9]\d*)$/, S = {};
  S[i] = S[o] = S[q] = S[B] = S[a] = S[c] = S[D] = S[z] = S[it] = S[dt] = S[Nt] = S[d] = S[p] = S[g] = S[v] = S[E] = S[x] = S[T] = S[At] = S[Jt] = S[_t] = S[mt] = !0, S[h] = S[m] = S[I] = !1;
  var K = typeof se == "object" && se && se.Object === Object && se, P = typeof self == "object" && self && self.Object === Object && self, V = K || P || Function("return this")(), ve = t && !t.nodeType && t, $ = ve && !0 && r && !r.nodeType && r, Bt = $ && $.exports === ve;
  function yn(l, u) {
    return l.set(u[0], u[1]), l;
  }
  function xt(l, u) {
    return l.add(u), l;
  }
  function Ls(l, u) {
    for (var f = -1, y = l ? l.length : 0; ++f < y && u(l[f], f, l) !== !1; )
      ;
    return l;
  }
  function Cs(l, u) {
    for (var f = -1, y = u.length, U = l.length; ++f < y; )
      l[U + f] = u[f];
    return l;
  }
  function Ke(l, u, f, y) {
    var U = -1, _ = l ? l.length : 0;
    for (y && _ && (f = l[++U]); ++U < _; )
      f = u(f, l[U], U, l);
    return f;
  }
  function Ge(l, u) {
    for (var f = -1, y = Array(l); ++f < l; )
      y[f] = u(f);
    return y;
  }
  function qs(l, u) {
    return l == null ? void 0 : l[u];
  }
  function Ze(l) {
    var u = !1;
    if (l != null && typeof l.toString != "function")
      try {
        u = !!(l + "");
      } catch (f) {
      }
    return u;
  }
  function Ss(l) {
    var u = -1, f = Array(l.size);
    return l.forEach(function(y, U) {
      f[++u] = [U, y];
    }), f;
  }
  function We(l, u) {
    return function(f) {
      return l(u(f));
    };
  }
  function ks(l) {
    var u = -1, f = Array(l.size);
    return l.forEach(function(y) {
      f[++u] = y;
    }), f;
  }
  var vn = Array.prototype, En = Function.prototype, Ee = Object.prototype, Xe = V["__core-js_shared__"], Os = function() {
    var l = /[^.]+$/.exec(Xe && Xe.keys && Xe.keys.IE_PROTO || "");
    return l ? "Symbol(src)_1." + l : "";
  }(), Is = En.toString, Ut = Ee.hasOwnProperty, we = Ee.toString, wn = RegExp(
    "^" + Is.call(Ut).replace(zt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), ae = Bt ? V.Buffer : void 0, Ne = V.Symbol, Ye = V.Uint8Array, pt = We(Object.getPrototypeOf, Object), Rs = Object.create, Ms = Ee.propertyIsEnumerable, Nn = vn.splice, Je = Object.getOwnPropertySymbols, Ae = ae ? ae.isBuffer : void 0, _s = We(Object.keys, Object), xe = Lt(V, "DataView"), ce = Lt(V, "Map"), Tt = Lt(V, "Promise"), Te = Lt(V, "Set"), Qe = Lt(V, "WeakMap"), ue = Lt(Object, "create"), ts = lt(xe), he = lt(ce), es = lt(Tt), ss = lt(Te), ns = lt(Qe), Qt = Ne ? Ne.prototype : void 0, Bs = Qt ? Qt.valueOf : void 0;
  function Ft(l) {
    var u = -1, f = l ? l.length : 0;
    for (this.clear(); ++u < f; ) {
      var y = l[u];
      this.set(y[0], y[1]);
    }
  }
  function An() {
    this.__data__ = ue ? ue(null) : {};
  }
  function xn(l) {
    return this.has(l) && delete this.__data__[l];
  }
  function Tn(l) {
    var u = this.__data__;
    if (ue) {
      var f = u[l];
      return f === s ? void 0 : f;
    }
    return Ut.call(u, l) ? u[l] : void 0;
  }
  function Us(l) {
    var u = this.__data__;
    return ue ? u[l] !== void 0 : Ut.call(u, l);
  }
  function rs(l, u) {
    var f = this.__data__;
    return f[l] = ue && u === void 0 ? s : u, this;
  }
  Ft.prototype.clear = An, Ft.prototype.delete = xn, Ft.prototype.get = Tn, Ft.prototype.has = Us, Ft.prototype.set = rs;
  function Y(l) {
    var u = -1, f = l ? l.length : 0;
    for (this.clear(); ++u < f; ) {
      var y = l[u];
      this.set(y[0], y[1]);
    }
  }
  function Ln() {
    this.__data__ = [];
  }
  function Cn(l) {
    var u = this.__data__, f = Ce(u, l);
    if (f < 0)
      return !1;
    var y = u.length - 1;
    return f == y ? u.pop() : Nn.call(u, f, 1), !0;
  }
  function qn(l) {
    var u = this.__data__, f = Ce(u, l);
    return f < 0 ? void 0 : u[f][1];
  }
  function Sn(l) {
    return Ce(this.__data__, l) > -1;
  }
  function kn(l, u) {
    var f = this.__data__, y = Ce(f, l);
    return y < 0 ? f.push([l, u]) : f[y][1] = u, this;
  }
  Y.prototype.clear = Ln, Y.prototype.delete = Cn, Y.prototype.get = qn, Y.prototype.has = Sn, Y.prototype.set = kn;
  function tt(l) {
    var u = -1, f = l ? l.length : 0;
    for (this.clear(); ++u < f; ) {
      var y = l[u];
      this.set(y[0], y[1]);
    }
  }
  function On() {
    this.__data__ = {
      hash: new Ft(),
      map: new (ce || Y)(),
      string: new Ft()
    };
  }
  function In(l) {
    return de(this, l).delete(l);
  }
  function Rn(l) {
    return de(this, l).get(l);
  }
  function Mn(l) {
    return de(this, l).has(l);
  }
  function _n(l, u) {
    return de(this, l).set(l, u), this;
  }
  tt.prototype.clear = On, tt.prototype.delete = In, tt.prototype.get = Rn, tt.prototype.has = Mn, tt.prototype.set = _n;
  function ct(l) {
    this.__data__ = new Y(l);
  }
  function Bn() {
    this.__data__ = new Y();
  }
  function Un(l) {
    return this.__data__.delete(l);
  }
  function Dn(l) {
    return this.__data__.get(l);
  }
  function Pn(l) {
    return this.__data__.has(l);
  }
  function jn(l, u) {
    var f = this.__data__;
    if (f instanceof Y) {
      var y = f.__data__;
      if (!ce || y.length < e - 1)
        return y.push([l, u]), this;
      f = this.__data__ = new tt(y);
    }
    return f.set(l, u), this;
  }
  ct.prototype.clear = Bn, ct.prototype.delete = Un, ct.prototype.get = Dn, ct.prototype.has = Pn, ct.prototype.set = jn;
  function Le(l, u) {
    var f = as(l) || Se(l) ? Ge(l.length, String) : [], y = f.length, U = !!y;
    for (var _ in l)
      (u || Ut.call(l, _)) && !(U && (_ == "length" || tr(_, y))) && f.push(_);
    return f;
  }
  function Ds(l, u, f) {
    var y = l[u];
    (!(Ut.call(l, u) && zs(y, f)) || f === void 0 && !(u in l)) && (l[u] = f);
  }
  function Ce(l, u) {
    for (var f = l.length; f--; )
      if (zs(l[f][0], u))
        return f;
    return -1;
  }
  function Dt(l, u) {
    return l && os(u, us(u), l);
  }
  function is(l, u, f, y, U, _, j) {
    var H;
    if (y && (H = _ ? y(l, U, _, j) : y(l)), H !== void 0)
      return H;
    if (!jt(l))
      return l;
    var Z = as(l);
    if (Z) {
      if (H = Jn(l), !u)
        return Wn(l, H);
    } else {
      var F = Kt(l), et = F == m || F == b;
      if (Fs(l))
        return qe(l, u);
      if (F == g || F == i || et && !_) {
        if (Ze(l))
          return _ ? l : {};
        if (H = Pt(et ? {} : l), !u)
          return Xn(l, Dt(H, l));
      } else {
        if (!S[F])
          return _ ? l : {};
        H = Qn(l, F, is, u);
      }
    }
    j || (j = new ct());
    var ut = j.get(l);
    if (ut)
      return ut;
    if (j.set(l, H), !Z)
      var W = f ? Yn(l) : us(l);
    return Ls(W || l, function(st, J) {
      W && (J = st, st = l[J]), Ds(H, J, is(st, u, f, y, J, l, j));
    }), H;
  }
  function Hn(l) {
    return jt(l) ? Rs(l) : {};
  }
  function $n(l, u, f) {
    var y = u(l);
    return as(l) ? y : Cs(y, f(l));
  }
  function zn(l) {
    return we.call(l);
  }
  function Fn(l) {
    if (!jt(l) || sr(l))
      return !1;
    var u = cs(l) || Ze(l) ? wn : C;
    return u.test(lt(l));
  }
  function Vn(l) {
    if (!Hs(l))
      return _s(l);
    var u = [];
    for (var f in Object(l))
      Ut.call(l, f) && f != "constructor" && u.push(f);
    return u;
  }
  function qe(l, u) {
    if (u)
      return l.slice();
    var f = new l.constructor(l.length);
    return l.copy(f), f;
  }
  function ls(l) {
    var u = new l.constructor(l.byteLength);
    return new Ye(u).set(new Ye(l)), u;
  }
  function fe(l, u) {
    var f = u ? ls(l.buffer) : l.buffer;
    return new l.constructor(f, l.byteOffset, l.byteLength);
  }
  function Ps(l, u, f) {
    var y = u ? f(Ss(l), !0) : Ss(l);
    return Ke(y, yn, new l.constructor());
  }
  function js(l) {
    var u = new l.constructor(l.source, Ve.exec(l));
    return u.lastIndex = l.lastIndex, u;
  }
  function Kn(l, u, f) {
    var y = u ? f(ks(l), !0) : ks(l);
    return Ke(y, xt, new l.constructor());
  }
  function Gn(l) {
    return Bs ? Object(Bs.call(l)) : {};
  }
  function Zn(l, u) {
    var f = u ? ls(l.buffer) : l.buffer;
    return new l.constructor(f, l.byteOffset, l.length);
  }
  function Wn(l, u) {
    var f = -1, y = l.length;
    for (u || (u = Array(y)); ++f < y; )
      u[f] = l[f];
    return u;
  }
  function os(l, u, f, y) {
    f || (f = {});
    for (var U = -1, _ = u.length; ++U < _; ) {
      var j = u[U], H = y ? y(f[j], l[j], j, f, l) : void 0;
      Ds(f, j, H === void 0 ? l[j] : H);
    }
    return f;
  }
  function Xn(l, u) {
    return os(l, Vt(l), u);
  }
  function Yn(l) {
    return $n(l, us, Vt);
  }
  function de(l, u) {
    var f = l.__data__;
    return er(u) ? f[typeof u == "string" ? "string" : "hash"] : f.map;
  }
  function Lt(l, u) {
    var f = qs(l, u);
    return Fn(f) ? f : void 0;
  }
  var Vt = Je ? We(Je, Object) : rr, Kt = zn;
  (xe && Kt(new xe(new ArrayBuffer(1))) != B || ce && Kt(new ce()) != d || Tt && Kt(Tt.resolve()) != w || Te && Kt(new Te()) != E || Qe && Kt(new Qe()) != I) && (Kt = function(l) {
    var u = we.call(l), f = u == g ? l.constructor : void 0, y = f ? lt(f) : void 0;
    if (y)
      switch (y) {
        case ts:
          return B;
        case he:
          return d;
        case es:
          return w;
        case ss:
          return E;
        case ns:
          return I;
      }
    return u;
  });
  function Jn(l) {
    var u = l.length, f = l.constructor(u);
    return u && typeof l[0] == "string" && Ut.call(l, "index") && (f.index = l.index, f.input = l.input), f;
  }
  function Pt(l) {
    return typeof l.constructor == "function" && !Hs(l) ? Hn(pt(l)) : {};
  }
  function Qn(l, u, f, y) {
    var U = l.constructor;
    switch (u) {
      case q:
        return ls(l);
      case a:
      case c:
        return new U(+l);
      case B:
        return fe(l, y);
      case D:
      case z:
      case it:
      case dt:
      case Nt:
      case At:
      case Jt:
      case _t:
      case mt:
        return Zn(l, y);
      case d:
        return Ps(l, y, f);
      case p:
      case x:
        return new U(l);
      case v:
        return js(l);
      case E:
        return Kn(l, y, f);
      case T:
        return Gn(l);
    }
  }
  function tr(l, u) {
    return u = u == null ? n : u, !!u && (typeof l == "number" || L.test(l)) && l > -1 && l % 1 == 0 && l < u;
  }
  function er(l) {
    var u = typeof l;
    return u == "string" || u == "number" || u == "symbol" || u == "boolean" ? l !== "__proto__" : l === null;
  }
  function sr(l) {
    return !!Os && Os in l;
  }
  function Hs(l) {
    var u = l && l.constructor, f = typeof u == "function" && u.prototype || Ee;
    return l === f;
  }
  function lt(l) {
    if (l != null) {
      try {
        return Is.call(l);
      } catch (u) {
      }
      try {
        return l + "";
      } catch (u) {
      }
    }
    return "";
  }
  function $s(l) {
    return is(l, !0, !0);
  }
  function zs(l, u) {
    return l === u || l !== l && u !== u;
  }
  function Se(l) {
    return nr(l) && Ut.call(l, "callee") && (!Ms.call(l, "callee") || we.call(l) == i);
  }
  var as = Array.isArray;
  function ke(l) {
    return l != null && Vs(l.length) && !cs(l);
  }
  function nr(l) {
    return Ks(l) && ke(l);
  }
  var Fs = Ae || ir;
  function cs(l) {
    var u = jt(l) ? we.call(l) : "";
    return u == m || u == b;
  }
  function Vs(l) {
    return typeof l == "number" && l > -1 && l % 1 == 0 && l <= n;
  }
  function jt(l) {
    var u = typeof l;
    return !!l && (u == "object" || u == "function");
  }
  function Ks(l) {
    return !!l && typeof l == "object";
  }
  function us(l) {
    return ke(l) ? Le(l) : Vn(l);
  }
  function rr() {
    return [];
  }
  function ir() {
    return !1;
  }
  r.exports = $s;
})(ln, ln.exports);
var el = ln.exports, on = { exports: {} };
on.exports;
(function(r, t) {
  var e = 200, s = "__lodash_hash_undefined__", n = 1, i = 2, o = 9007199254740991, a = "[object Arguments]", c = "[object Array]", h = "[object AsyncFunction]", m = "[object Boolean]", b = "[object Date]", d = "[object Error]", p = "[object Function]", g = "[object GeneratorFunction]", w = "[object Map]", v = "[object Number]", E = "[object Null]", x = "[object Object]", T = "[object Promise]", I = "[object Proxy]", q = "[object RegExp]", B = "[object Set]", D = "[object String]", z = "[object Symbol]", it = "[object Undefined]", dt = "[object WeakMap]", Nt = "[object ArrayBuffer]", At = "[object DataView]", Jt = "[object Float32Array]", _t = "[object Float64Array]", mt = "[object Int8Array]", zt = "[object Int16Array]", Ve = "[object Int32Array]", C = "[object Uint8Array]", L = "[object Uint8ClampedArray]", S = "[object Uint16Array]", K = "[object Uint32Array]", P = /[\\^$.*+?()[\]{}|]/g, V = /^\[object .+?Constructor\]$/, ve = /^(?:0|[1-9]\d*)$/, $ = {};
  $[Jt] = $[_t] = $[mt] = $[zt] = $[Ve] = $[C] = $[L] = $[S] = $[K] = !0, $[a] = $[c] = $[Nt] = $[m] = $[At] = $[b] = $[d] = $[p] = $[w] = $[v] = $[x] = $[q] = $[B] = $[D] = $[dt] = !1;
  var Bt = typeof se == "object" && se && se.Object === Object && se, yn = typeof self == "object" && self && self.Object === Object && self, xt = Bt || yn || Function("return this")(), Ls = t && !t.nodeType && t, Cs = Ls && !0 && r && !r.nodeType && r, Ke = Cs && Cs.exports === Ls, Ge = Ke && Bt.process, qs = function() {
    try {
      return Ge && Ge.binding && Ge.binding("util");
    } catch (l) {
    }
  }(), Ze = qs && qs.isTypedArray;
  function Ss(l, u) {
    for (var f = -1, y = l == null ? 0 : l.length, U = 0, _ = []; ++f < y; ) {
      var j = l[f];
      u(j, f, l) && (_[U++] = j);
    }
    return _;
  }
  function We(l, u) {
    for (var f = -1, y = u.length, U = l.length; ++f < y; )
      l[U + f] = u[f];
    return l;
  }
  function ks(l, u) {
    for (var f = -1, y = l == null ? 0 : l.length; ++f < y; )
      if (u(l[f], f, l))
        return !0;
    return !1;
  }
  function vn(l, u) {
    for (var f = -1, y = Array(l); ++f < l; )
      y[f] = u(f);
    return y;
  }
  function En(l) {
    return function(u) {
      return l(u);
    };
  }
  function Ee(l, u) {
    return l.has(u);
  }
  function Xe(l, u) {
    return l == null ? void 0 : l[u];
  }
  function Os(l) {
    var u = -1, f = Array(l.size);
    return l.forEach(function(y, U) {
      f[++u] = [U, y];
    }), f;
  }
  function Is(l, u) {
    return function(f) {
      return l(u(f));
    };
  }
  function Ut(l) {
    var u = -1, f = Array(l.size);
    return l.forEach(function(y) {
      f[++u] = y;
    }), f;
  }
  var we = Array.prototype, wn = Function.prototype, ae = Object.prototype, Ne = xt["__core-js_shared__"], Ye = wn.toString, pt = ae.hasOwnProperty, Rs = function() {
    var l = /[^.]+$/.exec(Ne && Ne.keys && Ne.keys.IE_PROTO || "");
    return l ? "Symbol(src)_1." + l : "";
  }(), Ms = ae.toString, Nn = RegExp(
    "^" + Ye.call(pt).replace(P, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Je = Ke ? xt.Buffer : void 0, Ae = xt.Symbol, _s = xt.Uint8Array, xe = ae.propertyIsEnumerable, ce = we.splice, Tt = Ae ? Ae.toStringTag : void 0, Te = Object.getOwnPropertySymbols, Qe = Je ? Je.isBuffer : void 0, ue = Is(Object.keys, Object), ts = Vt(xt, "DataView"), he = Vt(xt, "Map"), es = Vt(xt, "Promise"), ss = Vt(xt, "Set"), ns = Vt(xt, "WeakMap"), Qt = Vt(Object, "create"), Bs = lt(ts), Ft = lt(he), An = lt(es), xn = lt(ss), Tn = lt(ns), Us = Ae ? Ae.prototype : void 0, rs = Us ? Us.valueOf : void 0;
  function Y(l) {
    var u = -1, f = l == null ? 0 : l.length;
    for (this.clear(); ++u < f; ) {
      var y = l[u];
      this.set(y[0], y[1]);
    }
  }
  function Ln() {
    this.__data__ = Qt ? Qt(null) : {}, this.size = 0;
  }
  function Cn(l) {
    var u = this.has(l) && delete this.__data__[l];
    return this.size -= u ? 1 : 0, u;
  }
  function qn(l) {
    var u = this.__data__;
    if (Qt) {
      var f = u[l];
      return f === s ? void 0 : f;
    }
    return pt.call(u, l) ? u[l] : void 0;
  }
  function Sn(l) {
    var u = this.__data__;
    return Qt ? u[l] !== void 0 : pt.call(u, l);
  }
  function kn(l, u) {
    var f = this.__data__;
    return this.size += this.has(l) ? 0 : 1, f[l] = Qt && u === void 0 ? s : u, this;
  }
  Y.prototype.clear = Ln, Y.prototype.delete = Cn, Y.prototype.get = qn, Y.prototype.has = Sn, Y.prototype.set = kn;
  function tt(l) {
    var u = -1, f = l == null ? 0 : l.length;
    for (this.clear(); ++u < f; ) {
      var y = l[u];
      this.set(y[0], y[1]);
    }
  }
  function On() {
    this.__data__ = [], this.size = 0;
  }
  function In(l) {
    var u = this.__data__, f = qe(u, l);
    if (f < 0)
      return !1;
    var y = u.length - 1;
    return f == y ? u.pop() : ce.call(u, f, 1), --this.size, !0;
  }
  function Rn(l) {
    var u = this.__data__, f = qe(u, l);
    return f < 0 ? void 0 : u[f][1];
  }
  function Mn(l) {
    return qe(this.__data__, l) > -1;
  }
  function _n(l, u) {
    var f = this.__data__, y = qe(f, l);
    return y < 0 ? (++this.size, f.push([l, u])) : f[y][1] = u, this;
  }
  tt.prototype.clear = On, tt.prototype.delete = In, tt.prototype.get = Rn, tt.prototype.has = Mn, tt.prototype.set = _n;
  function ct(l) {
    var u = -1, f = l == null ? 0 : l.length;
    for (this.clear(); ++u < f; ) {
      var y = l[u];
      this.set(y[0], y[1]);
    }
  }
  function Bn() {
    this.size = 0, this.__data__ = {
      hash: new Y(),
      map: new (he || tt)(),
      string: new Y()
    };
  }
  function Un(l) {
    var u = Lt(this, l).delete(l);
    return this.size -= u ? 1 : 0, u;
  }
  function Dn(l) {
    return Lt(this, l).get(l);
  }
  function Pn(l) {
    return Lt(this, l).has(l);
  }
  function jn(l, u) {
    var f = Lt(this, l), y = f.size;
    return f.set(l, u), this.size += f.size == y ? 0 : 1, this;
  }
  ct.prototype.clear = Bn, ct.prototype.delete = Un, ct.prototype.get = Dn, ct.prototype.has = Pn, ct.prototype.set = jn;
  function Le(l) {
    var u = -1, f = l == null ? 0 : l.length;
    for (this.__data__ = new ct(); ++u < f; )
      this.add(l[u]);
  }
  function Ds(l) {
    return this.__data__.set(l, s), this;
  }
  function Ce(l) {
    return this.__data__.has(l);
  }
  Le.prototype.add = Le.prototype.push = Ds, Le.prototype.has = Ce;
  function Dt(l) {
    var u = this.__data__ = new tt(l);
    this.size = u.size;
  }
  function is() {
    this.__data__ = new tt(), this.size = 0;
  }
  function Hn(l) {
    var u = this.__data__, f = u.delete(l);
    return this.size = u.size, f;
  }
  function $n(l) {
    return this.__data__.get(l);
  }
  function zn(l) {
    return this.__data__.has(l);
  }
  function Fn(l, u) {
    var f = this.__data__;
    if (f instanceof tt) {
      var y = f.__data__;
      if (!he || y.length < e - 1)
        return y.push([l, u]), this.size = ++f.size, this;
      f = this.__data__ = new ct(y);
    }
    return f.set(l, u), this.size = f.size, this;
  }
  Dt.prototype.clear = is, Dt.prototype.delete = Hn, Dt.prototype.get = $n, Dt.prototype.has = zn, Dt.prototype.set = Fn;
  function Vn(l, u) {
    var f = Se(l), y = !f && zs(l), U = !f && !y && ke(l), _ = !f && !y && !U && Ks(l), j = f || y || U || _, H = j ? vn(l.length, String) : [], Z = H.length;
    for (var F in l)
      (u || pt.call(l, F)) && !(j && // Safari 9 has enumerable `arguments.length` in strict mode.
      (F == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      U && (F == "offset" || F == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      _ && (F == "buffer" || F == "byteLength" || F == "byteOffset") || // Skip index properties.
      Qn(F, Z))) && H.push(F);
    return H;
  }
  function qe(l, u) {
    for (var f = l.length; f--; )
      if ($s(l[f][0], u))
        return f;
    return -1;
  }
  function ls(l, u, f) {
    var y = u(l);
    return Se(l) ? y : We(y, f(l));
  }
  function fe(l) {
    return l == null ? l === void 0 ? it : E : Tt && Tt in Object(l) ? Kt(l) : Hs(l);
  }
  function Ps(l) {
    return jt(l) && fe(l) == a;
  }
  function js(l, u, f, y, U) {
    return l === u ? !0 : l == null || u == null || !jt(l) && !jt(u) ? l !== l && u !== u : Kn(l, u, f, y, js, U);
  }
  function Kn(l, u, f, y, U, _) {
    var j = Se(l), H = Se(u), Z = j ? c : Pt(l), F = H ? c : Pt(u);
    Z = Z == a ? x : Z, F = F == a ? x : F;
    var et = Z == x, ut = F == x, W = Z == F;
    if (W && ke(l)) {
      if (!ke(u))
        return !1;
      j = !0, et = !1;
    }
    if (W && !et)
      return _ || (_ = new Dt()), j || Ks(l) ? os(l, u, f, y, U, _) : Xn(l, u, Z, f, y, U, _);
    if (!(f & n)) {
      var st = et && pt.call(l, "__wrapped__"), J = ut && pt.call(u, "__wrapped__");
      if (st || J) {
        var te = st ? l.value() : l, Gt = J ? u.value() : u;
        return _ || (_ = new Dt()), U(te, Gt, f, y, _);
      }
    }
    return W ? (_ || (_ = new Dt()), Yn(l, u, f, y, U, _)) : !1;
  }
  function Gn(l) {
    if (!Vs(l) || er(l))
      return !1;
    var u = Fs(l) ? Nn : V;
    return u.test(lt(l));
  }
  function Zn(l) {
    return jt(l) && cs(l.length) && !!$[fe(l)];
  }
  function Wn(l) {
    if (!sr(l))
      return ue(l);
    var u = [];
    for (var f in Object(l))
      pt.call(l, f) && f != "constructor" && u.push(f);
    return u;
  }
  function os(l, u, f, y, U, _) {
    var j = f & n, H = l.length, Z = u.length;
    if (H != Z && !(j && Z > H))
      return !1;
    var F = _.get(l);
    if (F && _.get(u))
      return F == u;
    var et = -1, ut = !0, W = f & i ? new Le() : void 0;
    for (_.set(l, u), _.set(u, l); ++et < H; ) {
      var st = l[et], J = u[et];
      if (y)
        var te = j ? y(J, st, et, u, l, _) : y(st, J, et, l, u, _);
      if (te !== void 0) {
        if (te)
          continue;
        ut = !1;
        break;
      }
      if (W) {
        if (!ks(u, function(Gt, me) {
          if (!Ee(W, me) && (st === Gt || U(st, Gt, f, y, _)))
            return W.push(me);
        })) {
          ut = !1;
          break;
        }
      } else if (!(st === J || U(st, J, f, y, _))) {
        ut = !1;
        break;
      }
    }
    return _.delete(l), _.delete(u), ut;
  }
  function Xn(l, u, f, y, U, _, j) {
    switch (f) {
      case At:
        if (l.byteLength != u.byteLength || l.byteOffset != u.byteOffset)
          return !1;
        l = l.buffer, u = u.buffer;
      case Nt:
        return !(l.byteLength != u.byteLength || !_(new _s(l), new _s(u)));
      case m:
      case b:
      case v:
        return $s(+l, +u);
      case d:
        return l.name == u.name && l.message == u.message;
      case q:
      case D:
        return l == u + "";
      case w:
        var H = Os;
      case B:
        var Z = y & n;
        if (H || (H = Ut), l.size != u.size && !Z)
          return !1;
        var F = j.get(l);
        if (F)
          return F == u;
        y |= i, j.set(l, u);
        var et = os(H(l), H(u), y, U, _, j);
        return j.delete(l), et;
      case z:
        if (rs)
          return rs.call(l) == rs.call(u);
    }
    return !1;
  }
  function Yn(l, u, f, y, U, _) {
    var j = f & n, H = de(l), Z = H.length, F = de(u), et = F.length;
    if (Z != et && !j)
      return !1;
    for (var ut = Z; ut--; ) {
      var W = H[ut];
      if (!(j ? W in u : pt.call(u, W)))
        return !1;
    }
    var st = _.get(l);
    if (st && _.get(u))
      return st == u;
    var J = !0;
    _.set(l, u), _.set(u, l);
    for (var te = j; ++ut < Z; ) {
      W = H[ut];
      var Gt = l[W], me = u[W];
      if (y)
        var ti = j ? y(me, Gt, W, u, l, _) : y(Gt, me, W, l, u, _);
      if (!(ti === void 0 ? Gt === me || U(Gt, me, f, y, _) : ti)) {
        J = !1;
        break;
      }
      te || (te = W == "constructor");
    }
    if (J && !te) {
      var Gs = l.constructor, Zs = u.constructor;
      Gs != Zs && "constructor" in l && "constructor" in u && !(typeof Gs == "function" && Gs instanceof Gs && typeof Zs == "function" && Zs instanceof Zs) && (J = !1);
    }
    return _.delete(l), _.delete(u), J;
  }
  function de(l) {
    return ls(l, us, Jn);
  }
  function Lt(l, u) {
    var f = l.__data__;
    return tr(u) ? f[typeof u == "string" ? "string" : "hash"] : f.map;
  }
  function Vt(l, u) {
    var f = Xe(l, u);
    return Gn(f) ? f : void 0;
  }
  function Kt(l) {
    var u = pt.call(l, Tt), f = l[Tt];
    try {
      l[Tt] = void 0;
      var y = !0;
    } catch (_) {
    }
    var U = Ms.call(l);
    return y && (u ? l[Tt] = f : delete l[Tt]), U;
  }
  var Jn = Te ? function(l) {
    return l == null ? [] : (l = Object(l), Ss(Te(l), function(u) {
      return xe.call(l, u);
    }));
  } : rr, Pt = fe;
  (ts && Pt(new ts(new ArrayBuffer(1))) != At || he && Pt(new he()) != w || es && Pt(es.resolve()) != T || ss && Pt(new ss()) != B || ns && Pt(new ns()) != dt) && (Pt = function(l) {
    var u = fe(l), f = u == x ? l.constructor : void 0, y = f ? lt(f) : "";
    if (y)
      switch (y) {
        case Bs:
          return At;
        case Ft:
          return w;
        case An:
          return T;
        case xn:
          return B;
        case Tn:
          return dt;
      }
    return u;
  });
  function Qn(l, u) {
    return u = u == null ? o : u, !!u && (typeof l == "number" || ve.test(l)) && l > -1 && l % 1 == 0 && l < u;
  }
  function tr(l) {
    var u = typeof l;
    return u == "string" || u == "number" || u == "symbol" || u == "boolean" ? l !== "__proto__" : l === null;
  }
  function er(l) {
    return !!Rs && Rs in l;
  }
  function sr(l) {
    var u = l && l.constructor, f = typeof u == "function" && u.prototype || ae;
    return l === f;
  }
  function Hs(l) {
    return Ms.call(l);
  }
  function lt(l) {
    if (l != null) {
      try {
        return Ye.call(l);
      } catch (u) {
      }
      try {
        return l + "";
      } catch (u) {
      }
    }
    return "";
  }
  function $s(l, u) {
    return l === u || l !== l && u !== u;
  }
  var zs = Ps(function() {
    return arguments;
  }()) ? Ps : function(l) {
    return jt(l) && pt.call(l, "callee") && !xe.call(l, "callee");
  }, Se = Array.isArray;
  function as(l) {
    return l != null && cs(l.length) && !Fs(l);
  }
  var ke = Qe || ir;
  function nr(l, u) {
    return js(l, u);
  }
  function Fs(l) {
    if (!Vs(l))
      return !1;
    var u = fe(l);
    return u == p || u == g || u == h || u == I;
  }
  function cs(l) {
    return typeof l == "number" && l > -1 && l % 1 == 0 && l <= o;
  }
  function Vs(l) {
    var u = typeof l;
    return l != null && (u == "object" || u == "function");
  }
  function jt(l) {
    return l != null && typeof l == "object";
  }
  var Ks = Ze ? En(Ze) : Zn;
  function us(l) {
    return as(l) ? Vn(l) : Wn(l);
  }
  function rr() {
    return [];
  }
  function ir() {
    return !1;
  }
  r.exports = nr;
})(on, on.exports);
var sl = on.exports, $r = {};
Object.defineProperty($r, "__esModule", { value: !0 });
const ho = el, fo = sl;
var Ar;
(function(r) {
  function t(i = {}, o = {}, a = !1) {
    typeof i != "object" && (i = {}), typeof o != "object" && (o = {});
    let c = ho(o);
    a || (c = Object.keys(c).reduce((h, m) => (c[m] != null && (h[m] = c[m]), h), {}));
    for (const h in i)
      i[h] !== void 0 && o[h] === void 0 && (c[h] = i[h]);
    return Object.keys(c).length > 0 ? c : void 0;
  }
  r.compose = t;
  function e(i = {}, o = {}) {
    typeof i != "object" && (i = {}), typeof o != "object" && (o = {});
    const a = Object.keys(i).concat(Object.keys(o)).reduce((c, h) => (fo(i[h], o[h]) || (c[h] = o[h] === void 0 ? null : o[h]), c), {});
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
    const c = Object.keys(o).reduce((h, m) => (i[m] === void 0 && (h[m] = o[m]), h), {});
    return Object.keys(c).length > 0 ? c : void 0;
  }
  r.transform = n;
})(Ar || (Ar = {}));
$r.default = Ar;
var mn = {};
Object.defineProperty(mn, "__esModule", { value: !0 });
var xr;
(function(r) {
  function t(e) {
    return typeof e.delete == "number" ? e.delete : typeof e.retain == "number" ? e.retain : typeof e.retain == "object" && e.retain !== null ? 1 : typeof e.insert == "string" ? e.insert.length : 1;
  }
  r.length = t;
})(xr || (xr = {}));
mn.default = xr;
var zr = {};
Object.defineProperty(zr, "__esModule", { value: !0 });
const ci = mn;
class mo {
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
      const s = this.offset, n = ci.default.length(e);
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
    return this.ops[this.index] ? ci.default.length(this.ops[this.index]) - this.offset : 1 / 0;
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
zr.default = mo;
(function(r, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.AttributeMap = t.OpIterator = t.Op = void 0;
  const e = uo, s = el, n = sl, i = $r;
  t.AttributeMap = i.default;
  const o = mn;
  t.Op = o.default;
  const a = zr;
  t.OpIterator = a.default;
  const c = String.fromCharCode(0), h = (b, d) => {
    if (typeof b != "object" || b === null)
      throw new Error("cannot retain a ".concat(typeof b));
    if (typeof d != "object" || d === null)
      throw new Error("cannot retain a ".concat(typeof d));
    const p = Object.keys(b)[0];
    if (!p || p !== Object.keys(d)[0])
      throw new Error("embed types not matched: ".concat(p, " != ").concat(Object.keys(d)[0]));
    return [p, b[p], d[p]];
  };
  class m {
    constructor(d) {
      Array.isArray(d) ? this.ops = d : d != null && Array.isArray(d.ops) ? this.ops = d.ops : this.ops = [];
    }
    static registerEmbed(d, p) {
      this.handlers[d] = p;
    }
    static unregisterEmbed(d) {
      delete this.handlers[d];
    }
    static getHandler(d) {
      const p = this.handlers[d];
      if (!p)
        throw new Error('no handlers for embed type "'.concat(d, '"'));
      return p;
    }
    insert(d, p) {
      const g = {};
      return typeof d == "string" && d.length === 0 ? this : (g.insert = d, p != null && typeof p == "object" && Object.keys(p).length > 0 && (g.attributes = p), this.push(g));
    }
    delete(d) {
      return d <= 0 ? this : this.push({ delete: d });
    }
    retain(d, p) {
      if (typeof d == "number" && d <= 0)
        return this;
      const g = { retain: d };
      return p != null && typeof p == "object" && Object.keys(p).length > 0 && (g.attributes = p), this.push(g);
    }
    push(d) {
      let p = this.ops.length, g = this.ops[p - 1];
      if (d = s(d), typeof g == "object") {
        if (typeof d.delete == "number" && typeof g.delete == "number")
          return this.ops[p - 1] = { delete: g.delete + d.delete }, this;
        if (typeof g.delete == "number" && d.insert != null && (p -= 1, g = this.ops[p - 1], typeof g != "object"))
          return this.ops.unshift(d), this;
        if (n(d.attributes, g.attributes)) {
          if (typeof d.insert == "string" && typeof g.insert == "string")
            return this.ops[p - 1] = { insert: g.insert + d.insert }, typeof d.attributes == "object" && (this.ops[p - 1].attributes = d.attributes), this;
          if (typeof d.retain == "number" && typeof g.retain == "number")
            return this.ops[p - 1] = { retain: g.retain + d.retain }, typeof d.attributes == "object" && (this.ops[p - 1].attributes = d.attributes), this;
        }
      }
      return p === this.ops.length ? this.ops.push(d) : this.ops.splice(p, 0, d), this;
    }
    chop() {
      const d = this.ops[this.ops.length - 1];
      return d && typeof d.retain == "number" && !d.attributes && this.ops.pop(), this;
    }
    filter(d) {
      return this.ops.filter(d);
    }
    forEach(d) {
      this.ops.forEach(d);
    }
    map(d) {
      return this.ops.map(d);
    }
    partition(d) {
      const p = [], g = [];
      return this.forEach((w) => {
        (d(w) ? p : g).push(w);
      }), [p, g];
    }
    reduce(d, p) {
      return this.ops.reduce(d, p);
    }
    changeLength() {
      return this.reduce((d, p) => p.insert ? d + o.default.length(p) : p.delete ? d - p.delete : d, 0);
    }
    length() {
      return this.reduce((d, p) => d + o.default.length(p), 0);
    }
    slice(d = 0, p = 1 / 0) {
      const g = [], w = new a.default(this.ops);
      let v = 0;
      for (; v < p && w.hasNext(); ) {
        let E;
        v < d ? E = w.next(d - v) : (E = w.next(p - v), g.push(E)), v += o.default.length(E);
      }
      return new m(g);
    }
    compose(d) {
      const p = new a.default(this.ops), g = new a.default(d.ops), w = [], v = g.peek();
      if (v != null && typeof v.retain == "number" && v.attributes == null) {
        let x = v.retain;
        for (; p.peekType() === "insert" && p.peekLength() <= x; )
          x -= p.peekLength(), w.push(p.next());
        v.retain - x > 0 && g.next(v.retain - x);
      }
      const E = new m(w);
      for (; p.hasNext() || g.hasNext(); )
        if (g.peekType() === "insert")
          E.push(g.next());
        else if (p.peekType() === "delete")
          E.push(p.next());
        else {
          const x = Math.min(p.peekLength(), g.peekLength()), T = p.next(x), I = g.next(x);
          if (I.retain) {
            const q = {};
            if (typeof T.retain == "number")
              q.retain = typeof I.retain == "number" ? x : I.retain;
            else if (typeof I.retain == "number")
              T.retain == null ? q.insert = T.insert : q.retain = T.retain;
            else {
              const D = T.retain == null ? "insert" : "retain", [z, it, dt] = h(T[D], I.retain), Nt = m.getHandler(z);
              q[D] = {
                [z]: Nt.compose(it, dt, D === "retain")
              };
            }
            const B = i.default.compose(T.attributes, I.attributes, typeof T.retain == "number");
            if (B && (q.attributes = B), E.push(q), !g.hasNext() && n(E.ops[E.ops.length - 1], q)) {
              const D = new m(p.rest());
              return E.concat(D).chop();
            }
          } else
            typeof I.delete == "number" && (typeof T.retain == "number" || typeof T.retain == "object" && T.retain !== null) && E.push(I);
        }
      return E.chop();
    }
    concat(d) {
      const p = new m(this.ops.slice());
      return d.ops.length > 0 && (p.push(d.ops[0]), p.ops = p.ops.concat(d.ops.slice(1))), p;
    }
    diff(d, p) {
      if (this.ops === d.ops)
        return new m();
      const g = [this, d].map((T) => T.map((I) => {
        if (I.insert != null)
          return typeof I.insert == "string" ? I.insert : c;
        const q = T === d ? "on" : "with";
        throw new Error("diff() called " + q + " non-document");
      }).join("")), w = new m(), v = e(g[0], g[1], p, !0), E = new a.default(this.ops), x = new a.default(d.ops);
      return v.forEach((T) => {
        let I = T[1].length;
        for (; I > 0; ) {
          let q = 0;
          switch (T[0]) {
            case e.INSERT:
              q = Math.min(x.peekLength(), I), w.push(x.next(q));
              break;
            case e.DELETE:
              q = Math.min(I, E.peekLength()), E.next(q), w.delete(q);
              break;
            case e.EQUAL:
              q = Math.min(E.peekLength(), x.peekLength(), I);
              const B = E.next(q), D = x.next(q);
              n(B.insert, D.insert) ? w.retain(q, i.default.diff(B.attributes, D.attributes)) : w.push(D).delete(q);
              break;
          }
          I -= q;
        }
      }), w.chop();
    }
    eachLine(d, p = "\n") {
      const g = new a.default(this.ops);
      let w = new m(), v = 0;
      for (; g.hasNext(); ) {
        if (g.peekType() !== "insert")
          return;
        const E = g.peek(), x = o.default.length(E) - g.peekLength(), T = typeof E.insert == "string" ? E.insert.indexOf(p, x) - x : -1;
        if (T < 0)
          w.push(g.next());
        else if (T > 0)
          w.push(g.next(T));
        else {
          if (d(w, g.next(1).attributes || {}, v) === !1)
            return;
          v += 1, w = new m();
        }
      }
      w.length() > 0 && d(w, {}, v);
    }
    invert(d) {
      const p = new m();
      return this.reduce((g, w) => {
        if (w.insert)
          p.delete(o.default.length(w));
        else {
          if (typeof w.retain == "number" && w.attributes == null)
            return p.retain(w.retain), g + w.retain;
          if (w.delete || typeof w.retain == "number") {
            const v = w.delete || w.retain;
            return d.slice(g, g + v).forEach((x) => {
              w.delete ? p.push(x) : w.retain && w.attributes && p.retain(o.default.length(x), i.default.invert(w.attributes, x.attributes));
            }), g + v;
          } else if (typeof w.retain == "object" && w.retain !== null) {
            const v = d.slice(g, g + 1), E = new a.default(v.ops).next(), [x, T, I] = h(w.retain, E.insert), q = m.getHandler(x);
            return p.retain({ [x]: q.invert(T, I) }, i.default.invert(w.attributes, E.attributes)), g + 1;
          }
        }
        return g;
      }, 0), p.chop();
    }
    transform(d, p = !1) {
      if (p = !!p, typeof d == "number")
        return this.transformPosition(d, p);
      const g = d, w = new a.default(this.ops), v = new a.default(g.ops), E = new m();
      for (; w.hasNext() || v.hasNext(); )
        if (w.peekType() === "insert" && (p || v.peekType() !== "insert"))
          E.retain(o.default.length(w.next()));
        else if (v.peekType() === "insert")
          E.push(v.next());
        else {
          const x = Math.min(w.peekLength(), v.peekLength()), T = w.next(x), I = v.next(x);
          if (T.delete)
            continue;
          if (I.delete)
            E.push(I);
          else {
            const q = T.retain, B = I.retain;
            let D = typeof B == "object" && B !== null ? B : x;
            if (typeof q == "object" && q !== null && typeof B == "object" && B !== null) {
              const z = Object.keys(q)[0];
              if (z === Object.keys(B)[0]) {
                const it = m.getHandler(z);
                it && (D = {
                  [z]: it.transform(q[z], B[z], p)
                });
              }
            }
            E.retain(D, i.default.transform(T.attributes, I.attributes, p));
          }
        }
      return E.chop();
    }
    transformPosition(d, p = !1) {
      p = !!p;
      const g = new a.default(this.ops);
      let w = 0;
      for (; g.hasNext() && w <= d; ) {
        const v = g.peekLength(), E = g.peekType();
        if (g.next(), E === "delete") {
          d -= Math.min(v, d - w);
          continue;
        } else
          E === "insert" && (w < d || !p) && (d += v);
        w += v;
      }
      return d;
    }
  }
  m.Op = o.default, m.OpIterator = a.default, m.AttributeMap = i.default, m.handlers = {}, t.default = m, r.exports = m, r.exports.default = m;
})(Nr, Nr.exports);
var wt = Nr.exports;
const R = /* @__PURE__ */ Xi(wt);
class Rt extends ft {
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
Rt.blotName = "break";
Rt.tagName = "BR";
let Ot = class extends rn {
};
function pn(r) {
  return r.replace(/[&<>"']/g, (t) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[t]);
}
var vt;
let oe = (vt = class extends Dr {
  static compare(t, e) {
    const s = vt.order.indexOf(t), n = vt.order.indexOf(e);
    return s >= 0 || n >= 0 ? s - n : t === e ? 0 : t < e ? -1 : 1;
  }
  formatAt(t, e, s, n) {
    if (vt.compare(this.statics.blotName, s) < 0 && this.scroll.query(s, M.BLOT)) {
      const i = this.isolate(t, e);
      n && i.wrap(s, n);
    } else
      super.formatAt(t, e, s, n);
  }
  optimize(t) {
    if (super.optimize(t), this.parent instanceof vt && vt.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
      const e = this.parent.isolate(this.offset(), this.length());
      this.moveChildren(e), e.wrap(this);
    }
  }
}, A(vt, "allowedChildren", [vt, Rt, ft, Ot]), // Lower index means deeper in the DOM tree, since not found (-1) is for embeds
A(vt, "order", [
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
]), vt);
const ui = 1;
class Q extends gs {
  constructor() {
    super(...arguments);
    A(this, "cache", {});
  }
  delta() {
    return this.cache.delta == null && (this.cache.delta = nl(this)), this.cache.delta;
  }
  deleteAt(e, s) {
    super.deleteAt(e, s), this.cache = {};
  }
  formatAt(e, s, n, i) {
    s <= 0 || (this.scroll.query(n, M.BLOCK) ? e + s === this.length() && this.format(n, i) : super.formatAt(e, Math.min(s, this.length() - e - 1), n, i), this.cache = {});
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
    super.insertBefore(e, s), n instanceof Rt && n.remove(), this.cache = {};
  }
  length() {
    return this.cache.length == null && (this.cache.length = super.length() + ui), this.cache.length;
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
    if (s && (e === 0 || e >= this.length() - ui)) {
      const i = this.clone();
      return e === 0 ? (this.parent.insertBefore(i, this), this) : (this.parent.insertBefore(i, this.next), i);
    }
    const n = super.split(e, s);
    return this.cache = {}, n;
  }
}
Q.blotName = "block";
Q.tagName = "P";
Q.defaultChild = Rt;
Q.allowedChildren = [Rt, oe, ft, Ot];
class Et extends ft {
  attach() {
    super.attach(), this.attributes = new un(this.domNode);
  }
  delta() {
    return new R().insert(this.value(), {
      ...this.formats(),
      ...this.attributes.values()
    });
  }
  format(t, e) {
    const s = this.scroll.query(t, M.BLOCK_ATTRIBUTE);
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
      const h = this.scroll.create(Q.blotName);
      return h.insertAt(0, c), h;
    }), a = this.split(t);
    o.forEach((c) => {
      this.parent.insertBefore(c, a);
    }), i && this.parent.insertBefore(this.scroll.create("text", i), a);
  }
}
Et.scope = M.BLOCK_BLOT;
function nl(r) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return r.descendants(nt).reduce((e, s) => s.length() === 0 ? e : e.insert(s.value(), bt(s, {}, t)), new R()).insert("\n", bt(r));
}
function bt(r) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  return r == null || ("formats" in r && typeof r.formats == "function" && (t = {
    ...t,
    ...r.formats()
  }, e && delete t["code-token"]), r.parent == null || r.parent.statics.blotName === "scroll" || r.parent.statics.scope !== r.statics.scope) ? t : bt(r.parent, t, e);
}
const gt = class gt extends ft {
  // Zero width no break space
  static value() {
  }
  constructor(t, e, s) {
    super(t, e), this.selection = s, this.textNode = document.createTextNode(gt.CONTENTS), this.domNode.appendChild(this.textNode), this.savedLength = 0;
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
    for (; s != null && s.statics.scope !== M.BLOCK_BLOT; )
      n += s.offset(s.parent), s = s.parent;
    s != null && (this.savedLength = gt.CONTENTS.length, s.optimize(), s.formatAt(n, gt.CONTENTS.length, t, e), this.savedLength = 0);
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
    const e = this.prev instanceof Ot ? this.prev : null, s = e ? e.length() : 0, n = this.next instanceof Ot ? this.next : null, i = n ? n.text : "", {
      textNode: o
    } = this, a = o.data.split(gt.CONTENTS).join("");
    o.data = gt.CONTENTS;
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
      const h = (d, p) => e && d === e.domNode ? p : d === o ? s + p - 1 : n && d === n.domNode ? s + a.length + p : null, m = h(t.start.node, t.start.offset), b = h(t.end.node, t.end.offset);
      if (m !== null && b !== null)
        return {
          startNode: c.domNode,
          startOffset: m,
          endNode: c.domNode,
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
        this.savedLength = gt.CONTENTS.length, e.isolate(this.offset(e), this.length()).unwrap(), this.savedLength = 0;
        break;
      }
      e = e.parent;
    }
  }
  value() {
    return "";
  }
};
A(gt, "blotName", "cursor"), A(gt, "className", "ql-cursor"), A(gt, "tagName", "span"), A(gt, "CONTENTS", "\uFEFF");
let $e = gt;
var rl = { exports: {} };
(function(r) {
  var t = Object.prototype.hasOwnProperty, e = "~";
  function s() {
  }
  Object.create && (s.prototype = /* @__PURE__ */ Object.create(null), new s().__proto__ || (e = !1));
  function n(c, h, m) {
    this.fn = c, this.context = h, this.once = m || !1;
  }
  function i(c, h, m, b, d) {
    if (typeof m != "function")
      throw new TypeError("The listener must be a function");
    var p = new n(m, b || c, d), g = e ? e + h : h;
    return c._events[g] ? c._events[g].fn ? c._events[g] = [c._events[g], p] : c._events[g].push(p) : (c._events[g] = p, c._eventsCount++), c;
  }
  function o(c, h) {
    --c._eventsCount === 0 ? c._events = new s() : delete c._events[h];
  }
  function a() {
    this._events = new s(), this._eventsCount = 0;
  }
  a.prototype.eventNames = function() {
    var h = [], m, b;
    if (this._eventsCount === 0)
      return h;
    for (b in m = this._events)
      t.call(m, b) && h.push(e ? b.slice(1) : b);
    return Object.getOwnPropertySymbols ? h.concat(Object.getOwnPropertySymbols(m)) : h;
  }, a.prototype.listeners = function(h) {
    var m = e ? e + h : h, b = this._events[m];
    if (!b)
      return [];
    if (b.fn)
      return [b.fn];
    for (var d = 0, p = b.length, g = new Array(p); d < p; d++)
      g[d] = b[d].fn;
    return g;
  }, a.prototype.listenerCount = function(h) {
    var m = e ? e + h : h, b = this._events[m];
    return b ? b.fn ? 1 : b.length : 0;
  }, a.prototype.emit = function(h, m, b, d, p, g) {
    var w = e ? e + h : h;
    if (!this._events[w])
      return !1;
    var v = this._events[w], E = arguments.length, x, T;
    if (v.fn) {
      switch (v.once && this.removeListener(h, v.fn, void 0, !0), E) {
        case 1:
          return v.fn.call(v.context), !0;
        case 2:
          return v.fn.call(v.context, m), !0;
        case 3:
          return v.fn.call(v.context, m, b), !0;
        case 4:
          return v.fn.call(v.context, m, b, d), !0;
        case 5:
          return v.fn.call(v.context, m, b, d, p), !0;
        case 6:
          return v.fn.call(v.context, m, b, d, p, g), !0;
      }
      for (T = 1, x = new Array(E - 1); T < E; T++)
        x[T - 1] = arguments[T];
      v.fn.apply(v.context, x);
    } else {
      var I = v.length, q;
      for (T = 0; T < I; T++)
        switch (v[T].once && this.removeListener(h, v[T].fn, void 0, !0), E) {
          case 1:
            v[T].fn.call(v[T].context);
            break;
          case 2:
            v[T].fn.call(v[T].context, m);
            break;
          case 3:
            v[T].fn.call(v[T].context, m, b);
            break;
          case 4:
            v[T].fn.call(v[T].context, m, b, d);
            break;
          default:
            if (!x)
              for (q = 1, x = new Array(E - 1); q < E; q++)
                x[q - 1] = arguments[q];
            v[T].fn.apply(v[T].context, x);
        }
    }
    return !0;
  }, a.prototype.on = function(h, m, b) {
    return i(this, h, m, b, !1);
  }, a.prototype.once = function(h, m, b) {
    return i(this, h, m, b, !0);
  }, a.prototype.removeListener = function(h, m, b, d) {
    var p = e ? e + h : h;
    if (!this._events[p])
      return this;
    if (!m)
      return o(this, p), this;
    var g = this._events[p];
    if (g.fn)
      g.fn === m && (!d || g.once) && (!b || g.context === b) && o(this, p);
    else {
      for (var w = 0, v = [], E = g.length; w < E; w++)
        (g[w].fn !== m || d && !g[w].once || b && g[w].context !== b) && v.push(g[w]);
      v.length ? this._events[p] = v.length === 1 ? v[0] : v : o(this, p);
    }
    return this;
  }, a.prototype.removeAllListeners = function(h) {
    var m;
    return h ? (m = e ? e + h : h, this._events[m] && o(this, m)) : (this._events = new s(), this._eventsCount = 0), this;
  }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = e, a.EventEmitter = a, r.exports = a;
})(rl);
var po = rl.exports;
const go = /* @__PURE__ */ Xi(po), Tr = /* @__PURE__ */ new WeakMap(), Lr = ["error", "warn", "log", "info"];
let Cr = "warn";
function il(r) {
  if (Cr && Lr.indexOf(r) <= Lr.indexOf(Cr)) {
    for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)
      e[s - 1] = arguments[s];
    console[r](...e);
  }
}
function Yt(r) {
  return Lr.reduce((t, e) => (t[e] = il.bind(console, e, r), t), {});
}
Yt.level = (r) => {
  Cr = r;
};
il.level = Yt.level;
const cr = Yt("quill:events"), bo = ["selectionchange", "mousedown", "mouseup", "click"];
bo.forEach((r) => {
  document.addEventListener(r, function() {
    for (var t = arguments.length, e = new Array(t), s = 0; s < t; s++)
      e[s] = arguments[s];
    Array.from(document.querySelectorAll(".ql-container")).forEach((n) => {
      const i = Tr.get(n);
      i && i.emitter && i.emitter.handleDOM(...e);
    });
  });
});
class k extends go {
  constructor() {
    super(), this.domListeners = {}, this.on("error", cr.error);
  }
  emit() {
    for (var t = arguments.length, e = new Array(t), s = 0; s < t; s++)
      e[s] = arguments[s];
    return cr.log.call(cr, ...e), super.emit(...e);
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
A(k, "events", {
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
}), A(k, "sources", {
  API: "api",
  SILENT: "silent",
  USER: "user"
});
const ur = Yt("quill:selection");
class pe {
  constructor(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    this.index = t, this.length = e;
  }
}
class yo {
  constructor(t, e) {
    this.emitter = e, this.scroll = t, this.composing = !1, this.mouseDown = !1, this.root = this.scroll.domNode, this.cursor = this.scroll.create("cursor", this), this.savedRange = new pe(0, 0), this.lastRange = this.savedRange, this.lastNative = null, this.handleComposition(), this.handleDragging(), this.emitter.listenDOM("selectionchange", document, () => {
      !this.mouseDown && !this.composing && setTimeout(this.update.bind(this, k.sources.USER), 1);
    }), this.emitter.on(k.events.SCROLL_BEFORE_UPDATE, () => {
      if (!this.hasFocus())
        return;
      const s = this.getNativeRange();
      s != null && s.start.node !== this.cursor.textNode && this.emitter.once(k.events.SCROLL_UPDATE, (n, i) => {
        try {
          this.root.contains(s.start.node) && this.root.contains(s.end.node) && this.setNativeRange(s.start.node, s.start.offset, s.end.node, s.end.offset);
          const o = i.some((a) => a.type === "characterData" || a.type === "childList" || a.type === "attributes" && a.target === this.root);
          this.update(o ? k.sources.SILENT : n);
        } catch (o) {
        }
      });
    }), this.emitter.on(k.events.SCROLL_OPTIMIZE, (s, n) => {
      if (n.range) {
        const {
          startNode: i,
          startOffset: o,
          endNode: a,
          endOffset: c
        } = n.range;
        this.setNativeRange(i, o, a, c), this.update(k.sources.SILENT);
      }
    }), this.update(k.sources.SILENT);
  }
  handleComposition() {
    this.emitter.on(k.events.COMPOSITION_BEFORE_START, () => {
      this.composing = !0;
    }), this.emitter.on(k.events.COMPOSITION_END, () => {
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
      this.mouseDown = !1, this.update(k.sources.USER);
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
    if (!(s == null || !s.native.collapsed || this.scroll.query(t, M.BLOCK))) {
      if (s.start.node !== this.cursor.textNode) {
        const n = this.scroll.find(s.start.node, !1);
        if (n == null)
          return;
        if (n instanceof nt) {
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
      const [m] = this.scroll.leaf(t + 1);
      if (m) {
        const [b] = this.scroll.line(t), [d] = this.scroll.line(t + 1);
        b === d && (i = m, o = 0);
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
    return ur.info("getNativeRange", s), s;
  }
  getRange() {
    const t = this.scroll.domNode;
    if ("isConnected" in t && !t.isConnected)
      return [null, null];
    const e = this.getNativeRange();
    return e == null ? [null, null] : [this.normalizedToRange(e), e];
  }
  hasFocus() {
    return document.activeElement === this.root || document.activeElement != null && hr(this.root, document.activeElement);
  }
  normalizedToRange(t) {
    const e = [[t.start.node, t.start.offset]];
    t.native.collapsed || e.push([t.end.node, t.end.offset]);
    const s = e.map((o) => {
      const [a, c] = o, h = this.scroll.find(a, !0), m = h.offset(this.scroll);
      return c === 0 ? m : h instanceof nt ? m + h.index(a, c) : m + h.length();
    }), n = Math.min(Math.max(...s), this.scroll.length() - 1), i = Math.min(n, ...s);
    return new pe(i, n - i);
  }
  normalizeNative(t) {
    if (!hr(this.root, t.startContainer) || !t.collapsed && !hr(this.root, t.endContainer))
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
    if (ur.info("setNativeRange", t, e, s, n), t != null && (this.root.parentNode == null || t.parentNode == null || // @ts-expect-error Fix me later
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
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : k.sources.API;
    if (typeof e == "string" && (s = e, e = !1), ur.info("setRange", t), t != null) {
      const n = this.rangeToNative(t);
      this.setNativeRange(...n, e);
    } else
      this.setNativeRange(null);
    this.update(s);
  }
  update() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : k.sources.USER;
    const e = this.lastRange, [s, n] = this.getRange();
    if (this.lastRange = s, this.lastNative = n, this.lastRange != null && (this.savedRange = this.lastRange), !Ur(e, this.lastRange)) {
      if (!this.composing && n != null && n.native.collapsed && n.start.node !== this.cursor.textNode) {
        const o = this.cursor.restore();
        o && this.setNativeRange(o.startNode, o.startOffset, o.endNode, o.endOffset);
      }
      const i = [k.events.SELECTION_CHANGE, Ue(this.lastRange), Ue(e), t];
      this.emitter.emit(k.events.EDITOR_CHANGE, ...i), t !== k.sources.SILENT && this.emitter.emit(...i);
    }
  }
}
function hr(r, t) {
  try {
    t.parentNode;
  } catch (e) {
    return !1;
  }
  return r.contains(t);
}
const vo = /^[ -~]*$/;
class Eo {
  constructor(t) {
    this.scroll = t, this.delta = this.getDelta();
  }
  applyDelta(t) {
    this.scroll.update();
    let e = this.scroll.length();
    this.scroll.batchStart();
    const s = hi(t), n = new R();
    return No(s.ops.slice()).reduce((o, a) => {
      const c = wt.Op.length(a);
      let h = a.attributes || {}, m = !1, b = !1;
      if (a.insert != null) {
        if (n.retain(c), typeof a.insert == "string") {
          const g = a.insert;
          b = !g.endsWith("\n") && (e <= o || !!this.scroll.descendant(Et, o)[0]), this.scroll.insertAt(o, g);
          const [w, v] = this.scroll.line(o);
          let E = ie({}, bt(w));
          if (w instanceof Q) {
            const [x] = w.descendant(nt, v);
            x && (E = ie(E, bt(x)));
          }
          h = wt.AttributeMap.diff(E, h) || {};
        } else if (typeof a.insert == "object") {
          const g = Object.keys(a.insert)[0];
          if (g == null)
            return o;
          const w = this.scroll.query(g, M.INLINE) != null;
          if (w)
            (e <= o || this.scroll.descendant(Et, o)[0]) && (b = !0);
          else if (o > 0) {
            const [v, E] = this.scroll.descendant(nt, o - 1);
            v instanceof Ot ? v.value()[E] !== "\n" && (m = !0) : v instanceof ft && v.statics.scope === M.INLINE_BLOT && (m = !0);
          }
          if (this.scroll.insertAt(o, g, a.insert[g]), w) {
            const [v] = this.scroll.descendant(nt, o);
            if (v) {
              const E = ie({}, bt(v));
              h = wt.AttributeMap.diff(E, h) || {};
            }
          }
        }
        e += c;
      } else if (n.push(a), a.retain !== null && typeof a.retain == "object") {
        const g = Object.keys(a.retain)[0];
        if (g == null)
          return o;
        this.scroll.updateEmbedAt(o, g, a.retain[g]);
      }
      Object.keys(h).forEach((g) => {
        this.scroll.formatAt(o, c, g, h[g]);
      });
      const d = m ? 1 : 0, p = b ? 1 : 0;
      return e += d + p, n.retain(d), n.delete(p), o + c + d + p;
    }, 0), n.reduce((o, a) => typeof a.delete == "number" ? (this.scroll.deleteAt(o, a.delete), o) : o + wt.Op.length(a), 0), this.scroll.batchEnd(), this.scroll.optimize(), this.update(s);
  }
  deleteText(t, e) {
    return this.scroll.deleteAt(t, e), this.update(new R().retain(t).delete(e));
  }
  formatLine(t, e) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.scroll.update(), Object.keys(s).forEach((i) => {
      this.scroll.lines(t, Math.max(e, 1)).forEach((o) => {
        o.format(i, s[i]);
      });
    }), this.scroll.optimize();
    const n = new R().retain(t).retain(e, Ue(s));
    return this.update(n);
  }
  formatText(t, e) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    Object.keys(s).forEach((i) => {
      this.scroll.formatAt(t, e, i, s[i]);
    });
    const n = new R().retain(t).retain(e, Ue(s));
    return this.update(n);
  }
  getContents(t, e) {
    return this.delta.slice(t, t + e);
  }
  getDelta() {
    return this.scroll.lines().reduce((t, e) => t.concat(e.delta()), new R());
  }
  getFormat(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, s = [], n = [];
    e === 0 ? this.scroll.path(t).forEach((a) => {
      const [c] = a;
      c instanceof Q ? s.push(c) : c instanceof nt && n.push(c);
    }) : (s = this.scroll.lines(t, e), n = this.scroll.descendants(nt, t, e));
    const [i, o] = [s, n].map((a) => {
      const c = a.shift();
      if (c == null)
        return {};
      let h = bt(c);
      for (; Object.keys(h).length > 0; ) {
        const m = a.shift();
        if (m == null)
          return h;
        h = wo(bt(m), h);
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
      return s.length() >= n + e && !(n === 0 && e === i) ? ys(s, n, e, !0) : ys(this.scroll, t, e, !0);
    }
    return "";
  }
  getText(t, e) {
    return this.getContents(t, e).filter((s) => typeof s.insert == "string").map((s) => s.insert).join("");
  }
  insertContents(t, e) {
    const s = hi(e), n = new R().retain(t).concat(s);
    return this.scroll.insertContents(t, s), this.update(n);
  }
  insertEmbed(t, e, s) {
    return this.scroll.insertAt(t, e, s), this.update(new R().retain(t).insert({
      [e]: s
    }));
  }
  insertText(t, e) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return e = e.replace(/\r\n/g, "\n").replace(/\r/g, "\n"), this.scroll.insertAt(t, e), Object.keys(s).forEach((n) => {
      this.scroll.formatAt(t, e.length, n, s[n]);
    }), this.update(new R().retain(t).insert(e, Ue(s)));
  }
  isBlank() {
    if (this.scroll.children.length === 0)
      return !0;
    if (this.scroll.children.length > 1)
      return !1;
    const t = this.scroll.children.head;
    if ((t == null ? void 0 : t.statics.blotName) !== Q.blotName)
      return !1;
    const e = t;
    return e.children.length > 1 ? !1 : e.children.head instanceof Rt;
  }
  removeFormat(t, e) {
    const s = this.getText(t, e), [n, i] = this.scroll.line(t + e);
    let o = 0, a = new R();
    n != null && (o = n.length() - i, a = n.delta().slice(i, i + o - 1).insert("\n"));
    const h = this.getContents(t, e + o).diff(new R().insert(s).concat(a)), m = new R().retain(t).concat(h);
    return this.applyDelta(m);
  }
  update(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
    const n = this.delta;
    if (e.length === 1 && e[0].type === "characterData" && // @ts-expect-error Fix me later
    e[0].target.data.match(vo) && this.scroll.find(e[0].target)) {
      const i = this.scroll.find(e[0].target), o = bt(i), a = i.offset(this.scroll), c = e[0].oldValue.replace($e.CONTENTS, ""), h = new R().insert(c), m = new R().insert(i.value()), b = s && {
        oldRange: fi(s.oldRange, -a),
        newRange: fi(s.newRange, -a)
      };
      t = new R().retain(a).concat(h.diff(m, b)).reduce((p, g) => g.insert ? p.insert(g.insert, o) : p.push(g), new R()), this.delta = n.compose(t);
    } else
      this.delta = this.getDelta(), (!t || !Ur(n.compose(t), this.delta)) && (t = n.diff(this.delta, s));
    return t;
  }
}
function _e(r, t, e) {
  if (r.length === 0) {
    const [p] = fr(e.pop());
    return t <= 0 ? "</li></".concat(p, ">") : "</li></".concat(p, ">").concat(_e([], t - 1, e));
  }
  const [{
    child: s,
    offset: n,
    length: i,
    indent: o,
    type: a
  }, ...c] = r, [h, m] = fr(a);
  if (o > t)
    return e.push(a), o === t + 1 ? "<".concat(h, "><li").concat(m, ">").concat(ys(s, n, i)).concat(_e(c, o, e)) : "<".concat(h, "><li>").concat(_e(r, t + 1, e));
  const b = e[e.length - 1];
  if (o === t && a === b)
    return "</li><li".concat(m, ">").concat(ys(s, n, i)).concat(_e(c, o, e));
  const [d] = fr(e.pop());
  return "</li></".concat(d, ">").concat(_e(r, t - 1, e));
}
function ys(r, t, e) {
  let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if ("html" in r && typeof r.html == "function")
    return r.html(t, e);
  if (r instanceof Ot)
    return pn(r.value().slice(t, t + e));
  if (r instanceof kt) {
    if (r.statics.blotName === "list-container") {
      const h = [];
      return r.children.forEachAt(t, e, (m, b, d) => {
        const p = "formats" in m && typeof m.formats == "function" ? m.formats() : {};
        h.push({
          child: m,
          offset: b,
          length: d,
          indent: p.indent || 0,
          type: p.list
        });
      }), _e(h, -1, []);
    }
    const n = [];
    if (r.children.forEachAt(t, e, (h, m, b) => {
      n.push(ys(h, m, b));
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
function wo(r, t) {
  return Object.keys(t).reduce((e, s) => {
    if (r[s] == null)
      return e;
    const n = t[s];
    return n === r[s] ? e[s] = n : Array.isArray(n) ? n.indexOf(r[s]) < 0 ? e[s] = n.concat([r[s]]) : e[s] = n : e[s] = [n, r[s]], e;
  }, {});
}
function fr(r) {
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
function hi(r) {
  return r.reduce((t, e) => {
    if (typeof e.insert == "string") {
      const s = e.insert.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
      return t.insert(s, e.attributes);
    }
    return t.push(e);
  }, new R());
}
function fi(r, t) {
  let {
    index: e,
    length: s
  } = r;
  return new pe(e + t, s);
}
function No(r) {
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
class Mt {
  constructor(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.quill = t, this.options = e;
  }
}
A(Mt, "DEFAULTS", {});
const Ws = "\uFEFF";
class Fr extends ft {
  constructor(t, e) {
    super(t, e), this.contentNode = document.createElement("span"), this.contentNode.setAttribute("contenteditable", "false"), Array.from(this.domNode.childNodes).forEach((s) => {
      this.contentNode.appendChild(s);
    }), this.leftGuard = document.createTextNode(Ws), this.rightGuard = document.createTextNode(Ws), this.domNode.appendChild(this.leftGuard), this.domNode.appendChild(this.contentNode), this.domNode.appendChild(this.rightGuard);
  }
  index(t, e) {
    return t === this.leftGuard ? 0 : t === this.rightGuard ? 1 : super.index(t, e);
  }
  restore(t) {
    let e = null, s;
    const n = t.data.split(Ws).join("");
    if (t === this.leftGuard)
      if (this.prev instanceof Ot) {
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
      t === this.rightGuard && (this.next instanceof Ot ? (this.next.insertAt(0, n), e = {
        startNode: this.next.domNode,
        startOffset: n.length
      }) : (s = document.createTextNode(n), this.parent.insertBefore(this.scroll.create(s), this.next), e = {
        startNode: s,
        startOffset: n.length
      }));
    return t.data = Ws, e;
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
class Ao {
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
    e && !(e instanceof Fr) && (this.emitter.emit(k.events.COMPOSITION_BEFORE_START, t), this.scroll.batchStart(), this.emitter.emit(k.events.COMPOSITION_START, t), this.isComposing = !0);
  }
  handleCompositionEnd(t) {
    this.emitter.emit(k.events.COMPOSITION_BEFORE_END, t), this.scroll.batchEnd(), this.emitter.emit(k.events.COMPOSITION_END, t), this.isComposing = !1;
  }
}
const ms = class ms {
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
A(ms, "DEFAULTS", {
  modules: {}
}), A(ms, "themes", {
  default: ms
});
let ze = ms;
const xo = (r) => r.parentElement || r.getRootNode().host || null, To = (r) => {
  const t = r.getBoundingClientRect(), e = "offsetWidth" in r && Math.abs(t.width) / r.offsetWidth || 1, s = "offsetHeight" in r && Math.abs(t.height) / r.offsetHeight || 1;
  return {
    top: t.top,
    right: t.left + r.clientWidth * e,
    bottom: t.top + r.clientHeight * s,
    left: t.left
  };
}, Xs = (r) => {
  const t = parseInt(r, 10);
  return Number.isNaN(t) ? 0 : t;
}, di = (r, t, e, s, n, i) => r < e && t > s ? 0 : r < e ? -(e - r + n) : t > s ? t - r > s - e ? r + n - e : t - s + i : 0, Lo = (r, t) => {
  var i, o, a, c, h;
  const e = r.ownerDocument;
  let s = t, n = r;
  for (; n; ) {
    const m = n === e.body, b = m ? {
      top: 0,
      right: (o = (i = window.visualViewport) == null ? void 0 : i.width) != null ? o : e.documentElement.clientWidth,
      bottom: (c = (a = window.visualViewport) == null ? void 0 : a.height) != null ? c : e.documentElement.clientHeight,
      left: 0
    } : To(n), d = getComputedStyle(n), p = di(s.left, s.right, b.left, b.right, Xs(d.scrollPaddingLeft), Xs(d.scrollPaddingRight)), g = di(s.top, s.bottom, b.top, b.bottom, Xs(d.scrollPaddingTop), Xs(d.scrollPaddingBottom));
    if (p || g)
      if (m)
        (h = e.defaultView) == null || h.scrollBy(p, g);
      else {
        const {
          scrollLeft: w,
          scrollTop: v
        } = n;
        g && (n.scrollTop += g), p && (n.scrollLeft += p);
        const E = n.scrollLeft - w, x = n.scrollTop - v;
        s = {
          left: s.left - E,
          top: s.top - x,
          right: s.right - E,
          bottom: s.bottom - x
        };
      }
    n = m || d.position === "fixed" ? null : xo(n);
  }
}, Co = 100, qo = ["block", "break", "cursor", "inline", "scroll", "text"], So = (r, t, e) => {
  const s = new He();
  return qo.forEach((n) => {
    const i = t.query(n);
    i && s.register(i);
  }), r.forEach((n) => {
    var a;
    let i = t.query(n);
    i || e.error('Cannot register "'.concat(n, '" specified in "formats" config. Are you sure it was registered?'));
    let o = 0;
    for (; i; )
      if (s.register(i), i = "blotName" in i && (a = i.requiredContainer) != null ? a : null, o += 1, o > Co) {
        e.error('Cycle detected in registering blot requiredContainer: "'.concat(n, '"'));
        break;
      }
  }), s;
}, je = Yt("quill"), Ys = new He();
kt.uiClass = "ql-ui";
const qt = class qt {
  static debug(t) {
    t === !0 && (t = "log"), Yt.level(t);
  }
  static find(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return Tr.get(t) || Ys.find(t, e);
  }
  static import(t) {
    return this.imports[t] == null && je.error("Cannot import ".concat(t, ". Are you sure it was registered?")), this.imports[t];
  }
  static register() {
    if (typeof (arguments.length <= 0 ? void 0 : arguments[0]) != "string") {
      const t = arguments.length <= 0 ? void 0 : arguments[0], e = !!(!(arguments.length <= 1) && arguments[1]), s = "attrName" in t ? t.attrName : t.blotName;
      typeof s == "string" ? this.register("formats/".concat(s), t, e) : Object.keys(t).forEach((n) => {
        this.register(n, t[n], e);
      });
    } else {
      const t = arguments.length <= 0 ? void 0 : arguments[0], e = arguments.length <= 1 ? void 0 : arguments[1], s = !!(!(arguments.length <= 2) && arguments[2]);
      this.imports[t] != null && !s && je.warn("Overwriting ".concat(t, " with"), e), this.imports[t] = e, (t.startsWith("blots/") || t.startsWith("formats/")) && e && typeof e != "boolean" && e.blotName !== "abstract" && Ys.register(e), typeof e.register == "function" && e.register(Ys);
    }
  }
  constructor(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.options = ko(t, e), this.container = this.options.container, this.container == null) {
      je.error("Invalid Quill container", t);
      return;
    }
    this.options.debug && qt.debug(this.options.debug);
    const s = this.container.innerHTML.trim();
    this.container.classList.add("ql-container"), this.container.innerHTML = "", Tr.set(this.container, this), this.root = this.addContainer("ql-editor"), this.root.classList.add("ql-blank"), this.emitter = new k();
    const n = Pr.blotName, i = this.options.registry.query(n);
    if (!i || !("blotName" in i))
      throw new Error('Cannot initialize Quill without "'.concat(n, '" blot'));
    if (this.scroll = new i(this.options.registry, this.root, {
      emitter: this.emitter
    }), this.editor = new Eo(this.scroll), this.selection = new yo(this.scroll, this.emitter), this.composition = new Ao(this.scroll, this.emitter), this.theme = new this.options.theme(this, this.options), this.keyboard = this.theme.addModule("keyboard"), this.clipboard = this.theme.addModule("clipboard"), this.history = this.theme.addModule("history"), this.uploader = this.theme.addModule("uploader"), this.theme.addModule("input"), this.theme.addModule("uiNode"), this.theme.init(), this.emitter.on(k.events.EDITOR_CHANGE, (o) => {
      o === k.events.TEXT_CHANGE && this.root.classList.toggle("ql-blank", this.editor.isBlank());
    }), this.emitter.on(k.events.SCROLL_UPDATE, (o, a) => {
      const c = this.selection.lastRange, [h] = this.selection.getRange(), m = c && h ? {
        oldRange: c,
        newRange: h
      } : void 0;
      Ct.call(this, () => this.editor.update(null, a, m), o);
    }), this.emitter.on(k.events.SCROLL_EMBED_UPDATE, (o, a) => {
      const c = this.selection.lastRange, [h] = this.selection.getRange(), m = c && h ? {
        oldRange: c,
        newRange: h
      } : void 0;
      Ct.call(this, () => {
        const b = new R().retain(o.offset(this)).retain({
          [o.statics.blotName]: a
        });
        return this.editor.update(b, [], m);
      }, qt.sources.USER);
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
    return [t, e, , s] = Zt(t, e, s), Ct.call(this, () => this.editor.deleteText(t, e), s, t, -1 * e);
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
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : k.sources.API;
    return Ct.call(this, () => {
      const n = this.getSelection(!0);
      let i = new R();
      if (n == null)
        return i;
      if (this.scroll.query(t, M.BLOCK))
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
      return this.setSelection(n, k.sources.SILENT), i;
    }, s);
  }
  formatLine(t, e, s, n, i) {
    let o;
    return [t, e, o, i] = Zt(
      t,
      e,
      // @ts-expect-error
      s,
      n,
      i
    ), Ct.call(this, () => this.editor.formatLine(t, e, o), i, t, 0);
  }
  formatText(t, e, s, n, i) {
    let o;
    return [t, e, o, i] = Zt(
      // @ts-expect-error
      t,
      e,
      s,
      n,
      i
    ), Ct.call(this, () => this.editor.formatText(t, e, o), i, t, 0);
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
    return [t, e] = Zt(t, e), this.editor.getContents(t, e);
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
    return typeof t == "number" && (e = e != null ? e : this.getLength() - t), [t, e] = Zt(t, e), this.editor.getHTML(t, e);
  }
  getText() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e = arguments.length > 1 ? arguments[1] : void 0;
    return typeof t == "number" && (e = e != null ? e : this.getLength() - t), [t, e] = Zt(t, e), this.editor.getText(t, e);
  }
  hasFocus() {
    return this.selection.hasFocus();
  }
  insertEmbed(t, e, s) {
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : qt.sources.API;
    return Ct.call(this, () => this.editor.insertEmbed(t, e, s), n, t);
  }
  insertText(t, e, s, n, i) {
    let o;
    return [t, , o, i] = Zt(t, 0, s, n, i), Ct.call(this, () => this.editor.insertText(t, e, o), i, t, e.length);
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
    return [t, e, , s] = Zt(t, e, s), Ct.call(this, () => this.editor.removeFormat(t, e), s, t);
  }
  scrollRectIntoView(t) {
    Lo(this.root, t);
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
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : k.sources.API;
    return Ct.call(this, () => {
      t = new R(t);
      const s = this.getLength(), n = this.editor.deleteText(0, s), i = this.editor.insertContents(0, t), o = this.editor.deleteText(this.getLength() - 1, 1);
      return n.compose(i).compose(o);
    }, e);
  }
  setSelection(t, e, s) {
    t == null ? this.selection.setRange(null, e || qt.sources.API) : ([t, e, , s] = Zt(t, e, s), this.selection.setRange(new pe(Math.max(0, t), e), s), s !== k.sources.SILENT && this.scrollSelectionIntoView());
  }
  setText(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : k.sources.API;
    const s = new R().insert(t);
    return this.setContents(s, e);
  }
  update() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : k.sources.USER;
    const e = this.scroll.update(t);
    return this.selection.update(t), e;
  }
  updateContents(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : k.sources.API;
    return Ct.call(this, () => (t = new R(t), this.editor.applyDelta(t)), e, !0);
  }
};
A(qt, "DEFAULTS", {
  bounds: null,
  modules: {
    clipboard: !0,
    keyboard: !0,
    history: !0,
    uploader: !0
  },
  placeholder: "",
  readOnly: !1,
  registry: Ys,
  theme: "default"
}), A(qt, "events", k.events), A(qt, "sources", k.sources), A(qt, "version", "2.0.2"), A(qt, "imports", {
  delta: R,
  parchment: to,
  "core/module": Mt,
  "core/theme": ze
});
let N = qt;
function mi(r) {
  return typeof r == "string" ? document.querySelector(r) : r;
}
function dr(r) {
  return Object.entries(r != null ? r : {}).reduce((t, e) => {
    let [s, n] = e;
    return {
      ...t,
      [s]: n === !0 ? {} : n
    };
  }, {});
}
function pi(r) {
  return Object.fromEntries(Object.entries(r).filter((t) => t[1] !== void 0));
}
function ko(r, t) {
  const e = mi(r);
  if (!e)
    throw new Error("Invalid Quill container");
  const n = !t.theme || t.theme === N.DEFAULTS.theme ? ze : N.import("themes/".concat(t.theme));
  if (!n)
    throw new Error("Invalid theme ".concat(t.theme, ". Did you register it?"));
  const {
    modules: i,
    ...o
  } = N.DEFAULTS, {
    modules: a,
    ...c
  } = n.DEFAULTS;
  let h = dr(t.modules);
  h != null && h.toolbar && h.toolbar.constructor !== Object && (h = {
    ...h,
    toolbar: {
      container: h.toolbar
    }
  });
  const m = ie({}, dr(i), dr(a), h), b = {
    ...o,
    ...pi(c),
    ...pi(t)
  };
  let d = t.registry;
  return d ? t.formats && je.warn('Ignoring "formats" option because "registry" is specified') : d = t.formats ? So(t.formats, b.registry, je) : b.registry, {
    ...b,
    registry: d,
    container: e,
    theme: n,
    modules: Object.entries(m).reduce((p, g) => {
      let [w, v] = g;
      if (!v)
        return p;
      const E = N.import("modules/".concat(w));
      return E == null ? (je.error("Cannot load ".concat(w, " module. Are you sure you registered it?")), p) : {
        ...p,
        // @ts-expect-error
        [w]: ie({}, E.DEFAULTS || {}, v)
      };
    }, {}),
    bounds: mi(b.bounds)
  };
}
function Ct(r, t, e, s) {
  if (!this.isEnabled() && t === k.sources.USER && !this.allowReadOnlyEdits)
    return new R();
  let n = e == null ? null : this.getSelection();
  const i = this.editor.delta, o = r();
  if (n != null && (e === !0 && (e = n.index), s == null ? n = gi(n, o, t) : s !== 0 && (n = gi(n, e, s, t)), this.setSelection(n, k.sources.SILENT)), o.length() > 0) {
    const a = [k.events.TEXT_CHANGE, o, i, t];
    this.emitter.emit(k.events.EDITOR_CHANGE, ...a), t !== k.sources.SILENT && this.emitter.emit(...a);
  }
  return o;
}
function Zt(r, t, e, s, n) {
  let i = {};
  return typeof r.index == "number" && typeof r.length == "number" ? typeof t != "number" ? (n = s, s = e, e = t, t = r.length, r = r.index) : (t = r.length, r = r.index) : typeof t != "number" && (n = s, s = e, e = t, t = 0), typeof e == "object" ? (i = e, n = s) : typeof e == "string" && (s != null ? i[e] = s : n = e), n = n || k.sources.API, [r, t, i, n];
}
function gi(r, t, e, s) {
  const n = typeof e == "number" ? e : 0;
  if (r == null)
    return null;
  let i, o;
  return t && typeof t.transformPosition == "function" ? [i, o] = [r.index, r.index + r.length].map((a) => (
    // @ts-expect-error -- TODO: add a better type guard around `index`
    t.transformPosition(a, s !== k.sources.USER)
  )) : [i, o] = [r.index, r.index + r.length].map((a) => a < t || a === t && s === k.sources.USER ? a : n >= 0 ? a + n : Math.max(t, a + n)), new pe(i, o - i);
}
class ge extends hn {
}
function bi(r) {
  return r instanceof Q || r instanceof Et;
}
function yi(r) {
  return typeof r.updateContent == "function";
}
class Be extends Pr {
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
    this.emitter.emit(k.events.SCROLL_BLOT_MOUNT, t);
  }
  emitUnmount(t) {
    this.emitter.emit(k.events.SCROLL_BLOT_UNMOUNT, t);
  }
  emitEmbedUpdate(t, e) {
    this.emitter.emit(k.events.SCROLL_EMBED_UPDATE, t, e);
  }
  deleteAt(t, e) {
    const [s, n] = this.line(t), [i] = this.line(t + e);
    if (super.deleteAt(t, e), i != null && s !== i && n > 0) {
      if (s instanceof Et || i instanceof Et) {
        this.optimize();
        return;
      }
      const o = i.children.head instanceof Rt ? null : i.children.head;
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
      if (s == null || this.scroll.query(e, M.BLOCK) == null) {
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
    if (t.statics.scope === M.INLINE_BLOT) {
      const s = this.scroll.create(this.statics.defaultChild.blotName);
      s.appendChild(t), super.insertBefore(s, e);
    } else
      super.insertBefore(t, e);
  }
  insertContents(t, e) {
    const s = this.deltaToRenderBlocks(e.concat(new R().insert("\n"))), n = s.pop();
    if (n == null)
      return;
    this.batchStart();
    const i = s.shift();
    if (i) {
      const c = i.type === "block" && (i.delta.length() === 0 || !this.descendant(Et, t)[0] && t < this.length()), h = i.type === "block" ? i.delta : new R().insert({
        [i.key]: i.value
      });
      mr(this, t, h);
      const m = i.type === "block" ? 1 : 0, b = t + h.length() + m;
      c && this.insertAt(b - 1, "\n");
      const d = bt(this.line(t)[0]), p = wt.AttributeMap.diff(d, i.attributes) || {};
      Object.keys(p).forEach((g) => {
        this.formatAt(b - 1, 1, g, p[g]);
      }), t = b;
    }
    let [o, a] = this.children.find(t);
    if (s.length && (o && (o = o.split(a), a = 0), s.forEach((c) => {
      if (c.type === "block") {
        const h = this.createBlock(c.attributes, o || void 0);
        mr(h, 0, c.delta);
      } else {
        const h = this.create(c.key, c.value);
        this.insertBefore(h, o || void 0), Object.keys(c.attributes).forEach((m) => {
          h.format(m, c.attributes[m]);
        });
      }
    })), n.type === "block" && n.delta.length()) {
      const c = o ? o.offset(o.scroll) + a : this.length();
      mr(this, c, n.delta);
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
    return s instanceof nt ? [s, n] : [null, -1];
  }
  line(t) {
    return t === this.length() ? this.line(t - 1) : this.descendant(bi, t);
  }
  lines() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE;
    const s = (n, i, o) => {
      let a = [], c = o;
      return n.children.forEachAt(i, o, (h, m, b) => {
        bi(h) ? a.push(h) : h instanceof hn && (a = a.concat(s(h, m, c))), c -= b;
      }), a;
    };
    return s(this, t, e);
  }
  optimize() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.batch || (super.optimize(t, e), t.length > 0 && this.emitter.emit(k.events.SCROLL_OPTIMIZE, t, e));
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
    let e = k.sources.USER;
    typeof t == "string" && (e = t), Array.isArray(t) || (t = this.observer.takeRecords()), t = t.filter((s) => {
      let {
        target: n
      } = s;
      const i = this.find(n, !0);
      return i && !yi(i);
    }), t.length > 0 && this.emitter.emit(k.events.SCROLL_BEFORE_UPDATE, e, t), super.update(t.concat([])), t.length > 0 && this.emitter.emit(k.events.SCROLL_UPDATE, e, t);
  }
  updateEmbedAt(t, e, s) {
    const [n] = this.descendant((i) => i instanceof Et, t);
    n && n.statics.blotName === e && yi(n) && n.updateContent(s);
  }
  handleDragStart(t) {
    t.preventDefault();
  }
  deltaToRenderBlocks(t) {
    const e = [];
    let s = new R();
    return t.forEach((n) => {
      var o;
      const i = n == null ? void 0 : n.insert;
      if (i)
        if (typeof i == "string") {
          const a = i.split("\n");
          a.slice(0, -1).forEach((h) => {
            var m;
            s.insert(h, n.attributes), e.push({
              type: "block",
              delta: s,
              attributes: (m = n.attributes) != null ? m : {}
            }), s = new R();
          });
          const c = a[a.length - 1];
          c && s.insert(c, n.attributes);
        } else {
          const a = Object.keys(i)[0];
          if (!a)
            return;
          this.query(a, M.INLINE) ? s.push(n) : (s.length() && e.push({
            type: "block",
            delta: s,
            attributes: {}
          }), s = new R(), e.push({
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
      this.query(c, M.BLOCK & M.BLOT) != null ? s = c : n[c] = h;
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
A(Be, "blotName", "scroll"), A(Be, "className", "ql-editor"), A(Be, "tagName", "DIV"), A(Be, "defaultChild", Q), A(Be, "allowedChildren", [Q, Et, ge]);
function mr(r, t, e) {
  e.reduce((s, n) => {
    const i = wt.Op.length(n);
    let o = n.attributes || {};
    if (n.insert != null) {
      if (typeof n.insert == "string") {
        const a = n.insert;
        r.insertAt(s, a);
        const [c] = r.descendant(nt, s), h = bt(c);
        o = wt.AttributeMap.diff(h, o) || {};
      } else if (typeof n.insert == "object") {
        const a = Object.keys(n.insert)[0];
        if (a == null)
          return s;
        if (r.insertAt(s, a, n.insert[a]), r.scroll.query(a, M.INLINE) != null) {
          const [h] = r.descendant(nt, s), m = bt(h);
          o = wt.AttributeMap.diff(m, o) || {};
        }
      }
    }
    return Object.keys(o).forEach((a) => {
      r.formatAt(s, i, a, o[a]);
    }), s + i;
  }, t);
}
const Vr = {
  scope: M.BLOCK,
  whitelist: ["right", "center", "justify"]
}, Oo = new $t("align", "align", Vr), ll = new It("align", "ql-align", Vr), ol = new le("align", "text-align", Vr);
class al extends le {
  value(t) {
    let e = super.value(t);
    if (!e.startsWith("rgb("))
      return e;
    e = e.replace(/^[^\d]+/, "").replace(/[^\d]+$/, "");
    const s = e.split(",").map((n) => "00".concat(parseInt(n, 10).toString(16)).slice(-2)).join("");
    return "#".concat(s);
  }
}
const Io = new It("color", "ql-color", {
  scope: M.INLINE
}), Kr = new al("color", "color", {
  scope: M.INLINE
}), Ro = new It("background", "ql-bg", {
  scope: M.INLINE
}), Gr = new al("background", "background-color", {
  scope: M.INLINE
});
class be extends ge {
  static create(t) {
    const e = super.create(t);
    return e.setAttribute("spellcheck", "false"), e;
  }
  code(t, e) {
    return this.children.map((s) => s.length() <= 1 ? "" : s.domNode.innerText).join("\n").slice(t, t + e);
  }
  html(t, e) {
    return "<pre>\n".concat(pn(this.code(t, e)), "\n</pre>");
  }
}
class rt extends Q {
  static register() {
    N.register(be);
  }
}
A(rt, "TAB", "  ");
class Zr extends oe {
}
Zr.blotName = "code";
Zr.tagName = "CODE";
rt.blotName = "code-block";
rt.className = "ql-code-block";
rt.tagName = "DIV";
be.blotName = "code-block-container";
be.className = "ql-code-block-container";
be.tagName = "DIV";
be.allowedChildren = [rt];
rt.allowedChildren = [Ot, Rt, $e];
rt.requiredContainer = be;
const Wr = {
  scope: M.BLOCK,
  whitelist: ["rtl"]
}, cl = new $t("direction", "dir", Wr), ul = new It("direction", "ql-direction", Wr), hl = new le("direction", "direction", Wr), fl = {
  scope: M.INLINE,
  whitelist: ["serif", "monospace"]
}, dl = new It("font", "ql-font", fl);
class Mo extends le {
  value(t) {
    return super.value(t).replace(/["']/g, "");
  }
}
const ml = new Mo("font", "font-family", fl), pl = new It("size", "ql-size", {
  scope: M.INLINE,
  whitelist: ["small", "large", "huge"]
}), gl = new le("size", "font-size", {
  scope: M.INLINE,
  whitelist: ["10px", "18px", "32px"]
}), _o = Yt("quill:keyboard"), Bo = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey";
class gn extends Mt {
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
    const n = Do(t);
    if (n == null) {
      _o.warn("Attempted to add invalid keyboard binding", n);
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
      const n = (this.bindings[t.key] || []).concat(this.bindings[t.which] || []).filter((E) => gn.match(t, E));
      if (n.length === 0)
        return;
      const i = N.find(t.target, !0);
      if (i && i.scroll !== this.quill.scroll)
        return;
      const o = this.quill.getSelection();
      if (o == null || !this.quill.hasFocus())
        return;
      const [a, c] = this.quill.getLine(o.index), [h, m] = this.quill.getLeaf(o.index), [b, d] = o.length === 0 ? [h, m] : this.quill.getLeaf(o.index + o.length), p = h instanceof rn ? h.value().slice(0, m) : "", g = b instanceof rn ? b.value().slice(d) : "", w = {
        collapsed: o.length === 0,
        // @ts-expect-error Fix me later
        empty: o.length === 0 && a.length() <= 1,
        format: this.quill.getFormat(o),
        line: a,
        offset: c,
        prefix: p,
        suffix: g,
        event: t
      };
      n.some((E) => {
        if (E.collapsed != null && E.collapsed !== w.collapsed || E.empty != null && E.empty !== w.empty || E.offset != null && E.offset !== w.offset)
          return !1;
        if (Array.isArray(E.format)) {
          if (E.format.every((x) => w.format[x] == null))
            return !1;
        } else if (typeof E.format == "object" && !Object.keys(E.format).every((x) => E.format[x] === !0 ? w.format[x] != null : E.format[x] === !1 ? w.format[x] == null : Ur(E.format[x], w.format[x])))
          return !1;
        return E.prefix != null && !E.prefix.test(w.prefix) || E.suffix != null && !E.suffix.test(w.suffix) ? !1 : E.handler.call(this, o, w, E) !== !0;
      }) && t.preventDefault();
    });
  }
  handleBackspace(t, e) {
    const s = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(e.prefix) ? 2 : 1;
    if (t.index === 0 || this.quill.getLength() <= 1)
      return;
    let n = {};
    const [i] = this.quill.getLine(t.index);
    let o = new R().retain(t.index - s).delete(s);
    if (e.offset === 0) {
      const [a] = this.quill.getLine(t.index - 1);
      if (a && !(a.statics.blotName === "block" && a.length() <= 1)) {
        const h = i.formats(), m = this.quill.getFormat(t.index - 1, 1);
        if (n = wt.AttributeMap.diff(h, m) || {}, Object.keys(n).length > 0) {
          const b = new R().retain(t.index + i.length() - 2).retain(1, n);
          o = o.compose(b);
        }
      }
    }
    this.quill.updateContents(o, N.sources.USER), this.quill.focus();
  }
  handleDelete(t, e) {
    const s = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(e.suffix) ? 2 : 1;
    if (t.index >= this.quill.getLength() - s)
      return;
    let n = {};
    const [i] = this.quill.getLine(t.index);
    let o = new R().retain(t.index).delete(s);
    if (e.offset >= i.length() - 1) {
      const [a] = this.quill.getLine(t.index + 1);
      if (a) {
        const c = i.formats(), h = this.quill.getFormat(t.index, 1);
        n = wt.AttributeMap.diff(c, h) || {}, Object.keys(n).length > 0 && (o = o.retain(a.length() - 1).retain(1, n));
      }
    }
    this.quill.updateContents(o, N.sources.USER), this.quill.focus();
  }
  handleDeleteRange(t) {
    Xr({
      range: t,
      quill: this.quill
    }), this.quill.focus();
  }
  handleEnter(t, e) {
    const s = Object.keys(e.format).reduce((i, o) => (this.quill.scroll.query(o, M.BLOCK) && !Array.isArray(e.format[o]) && (i[o] = e.format[o]), i), {}), n = new R().retain(t.index).delete(t.length).insert("\n", s);
    this.quill.updateContents(n, N.sources.USER), this.quill.setSelection(t.index + 1, N.sources.SILENT), this.quill.focus();
  }
}
const Uo = {
  bindings: {
    bold: pr("bold"),
    italic: pr("italic"),
    underline: pr("underline"),
    indent: {
      // highlight tab or tab at beginning of list, indent or blockquote
      key: "Tab",
      format: ["blockquote", "indent", "list"],
      handler(r, t) {
        return t.collapsed && t.offset !== 0 ? !0 : (this.quill.format("indent", "+1", N.sources.USER), !1);
      }
    },
    outdent: {
      key: "Tab",
      shiftKey: !0,
      format: ["blockquote", "indent", "list"],
      // highlight tab or tab at beginning of list, indent or blockquote
      handler(r, t) {
        return t.collapsed && t.offset !== 0 ? !0 : (this.quill.format("indent", "-1", N.sources.USER), !1);
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
        t.format.indent != null ? this.quill.format("indent", "-1", N.sources.USER) : t.format.list != null && this.quill.format("list", !1, N.sources.USER);
      }
    },
    "indent code-block": vi(!0),
    "outdent code-block": vi(!1),
    "remove tab": {
      key: "Tab",
      shiftKey: !0,
      collapsed: !0,
      prefix: /\t$/,
      handler(r) {
        this.quill.deleteText(r.index - 1, 1, N.sources.USER);
      }
    },
    tab: {
      key: "Tab",
      handler(r, t) {
        if (t.format.table)
          return !0;
        this.quill.history.cutoff();
        const e = new R().retain(r.index).delete(r.length).insert("	");
        return this.quill.updateContents(e, N.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(r.index + 1, N.sources.SILENT), !1;
      }
    },
    "blockquote empty enter": {
      key: "Enter",
      collapsed: !0,
      format: ["blockquote"],
      empty: !0,
      handler() {
        this.quill.format("blockquote", !1, N.sources.USER);
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
        t.format.indent && (e.indent = !1), this.quill.formatLine(r.index, r.length, e, N.sources.USER);
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
        }, n = new R().retain(r.index).insert("\n", s).retain(t.length() - e - 1).retain(1, {
          list: "unchecked"
        });
        this.quill.updateContents(n, N.sources.USER), this.quill.setSelection(r.index + 1, N.sources.SILENT), this.quill.scrollSelectionIntoView();
      }
    },
    "header enter": {
      key: "Enter",
      collapsed: !0,
      format: ["header"],
      suffix: /^$/,
      handler(r, t) {
        const [e, s] = this.quill.getLine(r.index), n = new R().retain(r.index).insert("\n", t.format).retain(e.length() - s - 1).retain(1, {
          header: null
        });
        this.quill.updateContents(n, N.sources.USER), this.quill.setSelection(r.index + 1, N.sources.SILENT), this.quill.scrollSelectionIntoView();
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
          const [e, s, n, i] = t.getTable(r), o = Po(e, s, n, i);
          if (o == null)
            return;
          let a = e.offset();
          if (o < 0) {
            const c = new R().retain(a).insert("\n");
            this.quill.updateContents(c, N.sources.USER), this.quill.setSelection(r.index + 1, r.length, N.sources.SILENT);
          } else if (o > 0) {
            a += e.length();
            const c = new R().retain(a).insert("\n");
            this.quill.updateContents(c, N.sources.USER), this.quill.setSelection(a, N.sources.USER);
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
        e.shiftKey ? this.quill.setSelection(n - 1, N.sources.USER) : this.quill.setSelection(n + s.length(), N.sources.USER);
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
        this.quill.insertText(r.index, " ", N.sources.USER), this.quill.history.cutoff();
        const o = new R().retain(r.index - n).delete(e + 1).retain(s.length() - 2 - n).retain(1, {
          list: i
        });
        return this.quill.updateContents(o, N.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(r.index - e, N.sources.SILENT), !1;
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
            const i = new R().retain(r.index + t.length() - e - 2).retain(1, {
              "code-block": null
            }).delete(1);
            return this.quill.updateContents(i, N.sources.USER), this.quill.setSelection(r.index - 1, N.sources.SILENT), !1;
          }
        return !0;
      }
    },
    "embed left": Js("ArrowLeft", !1),
    "embed left shift": Js("ArrowLeft", !0),
    "embed right": Js("ArrowRight", !1),
    "embed right shift": Js("ArrowRight", !0),
    "table down": Ei(!1),
    "table up": Ei(!0)
  }
};
gn.DEFAULTS = Uo;
function vi(r) {
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
        this.quill.insertText(t.index, i, N.sources.USER), this.quill.setSelection(t.index + i.length, N.sources.SILENT);
        return;
      }
      const o = t.length === 0 ? this.quill.getLines(t.index, 1) : this.quill.getLines(t);
      let {
        index: a,
        length: c
      } = t;
      o.forEach((h, m) => {
        r ? (h.insertAt(0, i), m === 0 ? a += i.length : c += i.length) : h.domNode.textContent.startsWith(i) && (h.deleteAt(0, i.length), m === 0 ? a -= i.length : c -= i.length);
      }), this.quill.update(N.sources.USER), this.quill.setSelection(a, c, N.sources.SILENT);
    }
  };
}
function Js(r, t) {
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
      return i instanceof ft ? (r === "ArrowLeft" ? t ? this.quill.setSelection(s.index - 1, s.length + 1, N.sources.USER) : this.quill.setSelection(s.index - 1, N.sources.USER) : t ? this.quill.setSelection(s.index, s.length + 1, N.sources.USER) : this.quill.setSelection(s.index + s.length + 1, N.sources.USER), !1) : !0;
    }
  };
}
function pr(r) {
  return {
    key: r[0],
    shortKey: !0,
    handler(t, e) {
      this.quill.format(r, !e.format[r], N.sources.USER);
    }
  };
}
function Ei(r) {
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
          this.quill.setSelection(c, 0, N.sources.USER);
        }
      } else {
        const o = n.table()[s];
        o != null && (r ? this.quill.setSelection(o.offset(this.quill.scroll) + o.length() - 1, 0, N.sources.USER) : this.quill.setSelection(o.offset(this.quill.scroll), 0, N.sources.USER));
      }
      return !1;
    }
  };
}
function Do(r) {
  if (typeof r == "string" || typeof r == "number")
    r = {
      key: r
    };
  else if (typeof r == "object")
    r = Ue(r);
  else
    return null;
  return r.shortKey && (r[Bo] = r.shortKey, delete r.shortKey), r;
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
    n = wt.AttributeMap.diff(o, i) || {};
  }
  t.deleteText(e, N.sources.USER), Object.keys(n).length > 0 && t.formatLine(e.index, 1, n, N.sources.USER), t.setSelection(e.index, N.sources.SILENT);
}
function Po(r, t, e, s) {
  return t.prev == null && t.next == null ? e.prev == null && e.next == null ? s === 0 ? -1 : 1 : e.prev == null ? -1 : 1 : t.prev == null ? -1 : t.next == null ? 1 : null;
}
const jo = /font-weight:\s*normal/, Ho = ["P", "OL", "UL"], wi = (r) => r && Ho.includes(r.tagName), $o = (r) => {
  Array.from(r.querySelectorAll("br")).filter((t) => wi(t.previousElementSibling) && wi(t.nextElementSibling)).forEach((t) => {
    var e;
    (e = t.parentNode) == null || e.removeChild(t);
  });
}, zo = (r) => {
  Array.from(r.querySelectorAll('b[style*="font-weight"]')).filter((t) => {
    var e;
    return (e = t.getAttribute("style")) == null ? void 0 : e.match(jo);
  }).forEach((t) => {
    var s;
    const e = r.createDocumentFragment();
    e.append(...t.childNodes), (s = t.parentNode) == null || s.replaceChild(e, t);
  });
};
function Fo(r) {
  r.querySelector('[id^="docs-internal-guid-"]') && (zo(r), $o(r));
}
const Vo = /\bmso-list:[^;]*ignore/i, Ko = /\bmso-list:[^;]*\bl(\d+)/i, Go = /\bmso-list:[^;]*\blevel(\d+)/i, Zo = (r, t) => {
  const e = r.getAttribute("style"), s = e == null ? void 0 : e.match(Ko);
  if (!s)
    return null;
  const n = Number(s[1]), i = e == null ? void 0 : e.match(Go), o = i ? Number(i[1]) : 1, a = new RegExp("@list l".concat(n, ":level").concat(o, "\\s*\\{[^\\}]*mso-level-number-format:\\s*([\\w-]+)"), "i"), c = t.match(a), h = c && c[1] === "bullet" ? "bullet" : "ordered";
  return {
    id: n,
    indent: o,
    type: h,
    element: r
  };
}, Wo = (r) => {
  var o, a;
  const t = Array.from(r.querySelectorAll("[style*=mso-list]")), e = [], s = [];
  t.forEach((c) => {
    (c.getAttribute("style") || "").match(Vo) ? e.push(c) : s.push(c);
  }), e.forEach((c) => {
    var h;
    return (h = c.parentNode) == null ? void 0 : h.removeChild(c);
  });
  const n = r.documentElement.innerHTML, i = s.map((c) => Zo(c, n)).filter((c) => c);
  for (; i.length; ) {
    const c = [];
    let h = i.shift();
    for (; h; )
      c.push(h), h = i.length && ((o = i[0]) == null ? void 0 : o.element) === h.element.nextElementSibling && // Different id means the next item doesn't belong to this group.
      i[0].id === h.id ? i.shift() : null;
    const m = document.createElement("ul");
    c.forEach((p) => {
      const g = document.createElement("li");
      g.setAttribute("data-list", p.type), p.indent > 1 && g.setAttribute("class", "ql-indent-".concat(p.indent - 1)), g.innerHTML = p.element.innerHTML, m.appendChild(g);
    });
    const b = (a = c[0]) == null ? void 0 : a.element, {
      parentNode: d
    } = b != null ? b : {};
    b && (d == null || d.replaceChild(m, b)), c.slice(1).forEach((p) => {
      let {
        element: g
      } = p;
      d == null || d.removeChild(g);
    });
  }
};
function Xo(r) {
  r.documentElement.getAttribute("xmlns:w") === "urn:schemas-microsoft-com:office:word" && Wo(r);
}
const Yo = [Xo, Fo], Jo = (r) => {
  r.documentElement && Yo.forEach((t) => {
    t(r);
  });
}, Qo = Yt("quill:clipboard"), ta = [[Node.TEXT_NODE, fa], [Node.TEXT_NODE, Ai], ["br", ia], [Node.ELEMENT_NODE, Ai], [Node.ELEMENT_NODE, ra], [Node.ELEMENT_NODE, na], [Node.ELEMENT_NODE, ua], ["li", aa], ["ol, ul", ca], ["pre", la], ["tr", ha], ["b", gr("bold")], ["i", gr("italic")], ["strike", gr("strike")], ["style", oa]], ea = [Oo, cl].reduce((r, t) => (r[t.keyName] = t, r), {}), Ni = [ol, Gr, Kr, hl, ml, gl].reduce((r, t) => (r[t.keyName] = t, r), {});
class bl extends Mt {
  constructor(t, e) {
    var s;
    super(t, e), this.quill.root.addEventListener("copy", (n) => this.onCaptureCopy(n, !1)), this.quill.root.addEventListener("cut", (n) => this.onCaptureCopy(n, !0)), this.quill.root.addEventListener("paste", this.onCapturePaste.bind(this)), this.matchers = [], ta.concat((s = this.options.matchers) != null ? s : []).forEach((n) => {
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
    if (n[rt.blotName])
      return new R().insert(s || "", {
        [rt.blotName]: n[rt.blotName]
      });
    if (!e)
      return new R().insert(s || "", n);
    const i = this.convertHTML(e);
    return Ns(i, "\n") && (i.ops[i.ops.length - 1].attributes == null || n.table) ? i.compose(new R().retain(i.length() - 1).delete(1)) : i;
  }
  normalizeHTML(t) {
    Jo(t);
  }
  convertHTML(t) {
    const e = new DOMParser().parseFromString(t, "text/html");
    this.normalizeHTML(e);
    const s = e.body, n = /* @__PURE__ */ new WeakMap(), [i, o] = this.prepareMatching(s, n);
    return Yr(this.quill.scroll, s, i, o, n);
  }
  dangerouslyPasteHTML(t, e) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : N.sources.API;
    if (typeof t == "string") {
      const n = this.convert({
        html: t,
        text: ""
      });
      this.quill.setContents(n, e), this.quill.setSelection(0, N.sources.SILENT);
    } else {
      const n = this.convert({
        html: e,
        text: ""
      });
      this.quill.updateContents(new R().retain(t).concat(n), s), this.quill.setSelection(t + n.length(), N.sources.SILENT);
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
    var o, a, c, h, m;
    if (t.defaultPrevented || !this.quill.isEnabled())
      return;
    t.preventDefault();
    const e = this.quill.getSelection(!0);
    if (e == null)
      return;
    const s = (o = t.clipboardData) == null ? void 0 : o.getData("text/html");
    let n = (a = t.clipboardData) == null ? void 0 : a.getData("text/plain");
    if (!s && !n) {
      const b = (c = t.clipboardData) == null ? void 0 : c.getData("text/uri-list");
      b && (n = this.normalizeURIList(b));
    }
    const i = Array.from(((h = t.clipboardData) == null ? void 0 : h.files) || []);
    if (!s && i.length > 0) {
      this.quill.uploader.upload(e, i);
      return;
    }
    if (s && i.length > 0) {
      const b = new DOMParser().parseFromString(s, "text/html");
      if (b.body.childElementCount === 1 && ((m = b.body.firstElementChild) == null ? void 0 : m.tagName) === "IMG") {
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
    Qo.log("onPaste", o, {
      text: s,
      html: n
    });
    const a = new R().retain(t.index).delete(t.length).concat(o);
    this.quill.updateContents(a, N.sources.USER), this.quill.setSelection(a.length() - t.length, N.sources.SILENT), this.quill.scrollSelectionIntoView();
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
A(bl, "DEFAULTS", {
  matchers: []
});
function ye(r, t, e, s) {
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
  }, new R()) : r;
}
function Ns(r, t) {
  let e = "";
  for (let s = r.ops.length - 1; s >= 0 && e.length < t.length; --s) {
    const n = r.ops[s];
    if (typeof n.insert != "string")
      break;
    e = n.insert + e;
  }
  return e.slice(-1 * t.length) === t;
}
function ne(r, t) {
  if (!(r instanceof Element))
    return !1;
  const e = t.query(r);
  return e && e.prototype instanceof ft ? !1 : ["address", "article", "blockquote", "canvas", "dd", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "iframe", "li", "main", "nav", "ol", "output", "p", "pre", "section", "table", "td", "tr", "ul", "video"].includes(r.tagName.toLowerCase());
}
function sa(r, t) {
  return r.previousElementSibling && r.nextElementSibling && !ne(r.previousElementSibling, t) && !ne(r.nextElementSibling, t);
}
const Qs = /* @__PURE__ */ new WeakMap();
function yl(r) {
  return r == null ? !1 : (Qs.has(r) || (r.tagName === "PRE" ? Qs.set(r, !0) : Qs.set(r, yl(r.parentNode))), Qs.get(r));
}
function Yr(r, t, e, s, n) {
  return t.nodeType === t.TEXT_NODE ? s.reduce((i, o) => o(t, i, r), new R()) : t.nodeType === t.ELEMENT_NODE ? Array.from(t.childNodes || []).reduce((i, o) => {
    let a = Yr(r, o, e, s, n);
    return o.nodeType === t.ELEMENT_NODE && (a = e.reduce((c, h) => h(o, c, r), a), a = (n.get(o) || []).reduce((c, h) => h(o, c, r), a)), i.concat(a);
  }, new R()) : new R();
}
function gr(r) {
  return (t, e, s) => ye(e, r, !0, s);
}
function na(r, t, e) {
  const s = $t.keys(r), n = It.keys(r), i = le.keys(r), o = {};
  return s.concat(n).concat(i).forEach((a) => {
    let c = e.query(a, M.ATTRIBUTE);
    c != null && (o[c.attrName] = c.value(r), o[c.attrName]) || (c = ea[a], c != null && (c.attrName === a || c.keyName === a) && (o[c.attrName] = c.value(r) || void 0), c = Ni[a], c != null && (c.attrName === a || c.keyName === a) && (c = Ni[a], o[c.attrName] = c.value(r) || void 0));
  }), Object.entries(o).reduce((a, c) => {
    let [h, m] = c;
    return ye(a, h, m, e);
  }, t);
}
function ra(r, t, e) {
  const s = e.query(r);
  if (s == null)
    return t;
  if (s.prototype instanceof ft) {
    const n = {}, i = s.value(r);
    if (i != null)
      return n[s.blotName] = i, new R().insert(n, s.formats(r, e));
  } else if (s.prototype instanceof gs && !Ns(t, "\n") && t.insert("\n"), "blotName" in s && "formats" in s && typeof s.formats == "function")
    return ye(t, s.blotName, s.formats(r, e), e);
  return t;
}
function ia(r, t) {
  return Ns(t, "\n") || t.insert("\n"), t;
}
function la(r, t, e) {
  const s = e.query("code-block"), n = s && "formats" in s && typeof s.formats == "function" ? s.formats(r, e) : !0;
  return ye(t, "code-block", n, e);
}
function oa() {
  return new R();
}
function aa(r, t, e) {
  const s = e.query(r);
  if (s == null || // @ts-expect-error
  s.blotName !== "list" || !Ns(t, "\n"))
    return t;
  let n = -1, i = r.parentNode;
  for (; i != null; )
    ["OL", "UL"].includes(i.tagName) && (n += 1), i = i.parentNode;
  return n <= 0 ? t : t.reduce((o, a) => a.insert ? a.attributes && typeof a.attributes.indent == "number" ? o.push(a) : o.insert(a.insert, {
    indent: n,
    ...a.attributes || {}
  }) : o, new R());
}
function ca(r, t, e) {
  const s = r;
  let n = s.tagName === "OL" ? "ordered" : "bullet";
  const i = s.getAttribute("data-checked");
  return i && (n = i === "true" ? "checked" : "unchecked"), ye(t, "list", n, e);
}
function Ai(r, t, e) {
  if (!Ns(t, "\n")) {
    if (ne(r, e) && (r.childNodes.length > 0 || r instanceof HTMLParagraphElement))
      return t.insert("\n");
    if (t.length() > 0 && r.nextSibling) {
      let s = r.nextSibling;
      for (; s != null; ) {
        if (ne(s, e))
          return t.insert("\n");
        const n = e.query(s);
        if (n && n.prototype instanceof Et)
          return t.insert("\n");
        s = s.firstChild;
      }
    }
  }
  return t;
}
function ua(r, t, e) {
  var i;
  const s = {}, n = r.style || {};
  return n.fontStyle === "italic" && (s.italic = !0), n.textDecoration === "underline" && (s.underline = !0), n.textDecoration === "line-through" && (s.strike = !0), ((i = n.fontWeight) != null && i.startsWith("bold") || // @ts-expect-error Fix me later
  parseInt(n.fontWeight, 10) >= 700) && (s.bold = !0), t = Object.entries(s).reduce((o, a) => {
    let [c, h] = a;
    return ye(o, c, h, e);
  }, t), parseFloat(n.textIndent || 0) > 0 ? new R().insert("	").concat(t) : t;
}
function ha(r, t, e) {
  var n, i;
  const s = ((n = r.parentElement) == null ? void 0 : n.tagName) === "TABLE" ? r.parentElement : (i = r.parentElement) == null ? void 0 : i.parentElement;
  if (s != null) {
    const a = Array.from(s.querySelectorAll("tr")).indexOf(r) + 1;
    return ye(t, "table", a, e);
  }
  return t;
}
function fa(r, t, e) {
  var n;
  let s = r.data;
  if (((n = r.parentElement) == null ? void 0 : n.tagName) === "O:P")
    return t.insert(s.trim());
  if (!yl(r)) {
    if (s.trim().length === 0 && s.includes("\n") && !sa(r, e))
      return t;
    const i = (o, a) => {
      const c = a.replace(/[^\u00a0]/g, "");
      return c.length < 1 && o ? " " : c;
    };
    s = s.replace(/\r\n/g, " ").replace(/\n/g, " "), s = s.replace(/\s\s+/g, i.bind(i, !0)), (r.previousSibling == null && r.parentElement != null && ne(r.parentElement, e) || r.previousSibling instanceof Element && ne(r.previousSibling, e)) && (s = s.replace(/^\s+/, i.bind(i, !1))), (r.nextSibling == null && r.parentElement != null && ne(r.parentElement, e) || r.nextSibling instanceof Element && ne(r.nextSibling, e)) && (s = s.replace(/\s+$/, i.bind(i, !1)));
  }
  return t.insert(s);
}
class vl extends Mt {
  constructor(e, s) {
    super(e, s);
    A(this, "lastRecorded", 0);
    A(this, "ignoreChange", !1);
    A(this, "stack", {
      undo: [],
      redo: []
    });
    A(this, "currentRange", null);
    this.quill.on(N.events.EDITOR_CHANGE, (n, i, o, a) => {
      n === N.events.SELECTION_CHANGE ? i && a !== N.sources.SILENT && (this.currentRange = i) : n === N.events.TEXT_CHANGE && (this.ignoreChange || (!this.options.userOnly || a === N.sources.USER ? this.record(i, o) : this.transform(i)), this.currentRange = qr(this.currentRange, i));
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
      range: qr(n.range, o)
    }), this.lastRecorded = 0, this.ignoreChange = !0, this.quill.updateContents(n.delta, N.sources.USER), this.ignoreChange = !1, this.restoreSelection(n);
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
    xi(this.stack.undo, e), xi(this.stack.redo, e);
  }
  undo() {
    this.change("undo", "redo");
  }
  restoreSelection(e) {
    if (e.range)
      this.quill.setSelection(e.range, N.sources.USER);
    else {
      const s = ma(this.quill.scroll, e.delta);
      this.quill.setSelection(s, N.sources.USER);
    }
  }
}
A(vl, "DEFAULTS", {
  delay: 1e3,
  maxStack: 100,
  userOnly: !1
});
function xi(r, t) {
  let e = t;
  for (let s = r.length - 1; s >= 0; s -= 1) {
    const n = r[s];
    r[s] = {
      delta: e.transform(n.delta, !0),
      range: n.range && qr(n.range, e)
    }, e = n.delta.transform(e), r[s].delta.length() === 0 && r.splice(s, 1);
  }
}
function da(r, t) {
  const e = t.ops[t.ops.length - 1];
  return e == null ? !1 : e.insert != null ? typeof e.insert == "string" && e.insert.endsWith("\n") : e.attributes != null ? Object.keys(e.attributes).some((s) => r.query(s, M.BLOCK) != null) : !1;
}
function ma(r, t) {
  const e = t.reduce((n, i) => n + (i.delete || 0), 0);
  let s = t.length() - e;
  return da(r, t) && (s -= 1), s;
}
function qr(r, t) {
  if (!r)
    return r;
  const e = t.transformPosition(r.index), s = t.transformPosition(r.index + r.length);
  return {
    index: e,
    length: s - e
  };
}
class El extends Mt {
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
El.DEFAULTS = {
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
      }), new R().retain(r.index).delete(r.length));
      this.quill.updateContents(n, k.sources.USER), this.quill.setSelection(r.index + s.length, k.sources.SILENT);
    });
  }
};
const pa = ["insertText", "insertReplacementText"];
class ga extends Mt {
  constructor(t, e) {
    super(t, e), t.root.addEventListener("beforeinput", (s) => {
      this.handleBeforeInput(s);
    }), /Android/i.test(navigator.userAgent) || t.on(N.events.COMPOSITION_BEFORE_START, () => {
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
      this.deleteRange(t), this.quill.updateContents(new R().retain(t.index).insert(e, s), N.sources.USER);
    } else
      this.deleteRange(t);
    return this.quill.setSelection(t.index + e.length, 0, N.sources.SILENT), !0;
  }
  handleBeforeInput(t) {
    if (this.quill.composition.isComposing || t.defaultPrevented || !pa.includes(t.inputType))
      return;
    const e = t.getTargetRanges ? t.getTargetRanges()[0] : null;
    if (!e || e.collapsed === !0)
      return;
    const s = ba(t);
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
function ba(r) {
  var t;
  return typeof r.data == "string" ? r.data : (t = r.dataTransfer) != null && t.types.includes("text/plain") ? r.dataTransfer.getData("text/plain") : null;
}
const ya = /Mac/i.test(navigator.platform), va = 100, Ea = (r) => !!(r.key === "ArrowLeft" || r.key === "ArrowRight" || // RTL scripts or moving from the end of the previous line
r.key === "ArrowUp" || r.key === "ArrowDown" || r.key === "Home" || ya && r.key === "a" && r.ctrlKey === !0);
class wa extends Mt {
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
        if (!(n instanceof kt) || !n.uiNode)
          return !0;
        const o = getComputedStyle(n.domNode).direction === "rtl";
        return o && i.key !== "ArrowRight" || !o && i.key !== "ArrowLeft" ? !0 : (this.quill.setSelection(e.index - 1, e.length + (i.shiftKey ? 1 : 0), N.sources.USER), !1);
      }
    });
  }
  handleNavigationShortcuts() {
    this.quill.root.addEventListener("keydown", (e) => {
      !e.defaultPrevented && Ea(e) && this.ensureListeningToSelectionChange();
    });
  }
  /**
   * We only listen to the `selectionchange` event when
   * there is an intention of moving the caret to the beginning using shortcuts.
   * This is primarily implemented to prevent infinite loops, as we are changing
   * the selection within the handler of a `selectionchange` event.
   */
  ensureListeningToSelectionChange() {
    if (this.selectionChangeDeadline = Date.now() + va, this.isListening)
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
    if (!(n instanceof kt) || !n.uiNode)
      return;
    const i = document.createRange();
    i.setStartAfter(n.uiNode), i.setEndAfter(n.uiNode), e.removeAllRanges(), e.addRange(i);
  }
}
N.register({
  "blots/block": Q,
  "blots/block/embed": Et,
  "blots/break": Rt,
  "blots/container": ge,
  "blots/cursor": $e,
  "blots/embed": Fr,
  "blots/inline": oe,
  "blots/scroll": Be,
  "blots/text": Ot,
  "modules/clipboard": bl,
  "modules/history": vl,
  "modules/keyboard": gn,
  "modules/uploader": El,
  "modules/input": ga,
  "modules/uiNode": wa
});
class Na extends It {
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
const Aa = new Na("indent", "ql-indent", {
  scope: M.BLOCK,
  // @ts-expect-error
  whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
});
class Sr extends Q {
}
A(Sr, "blotName", "blockquote"), A(Sr, "tagName", "blockquote");
class kr extends Q {
  static formats(t) {
    return this.tagName.indexOf(t.tagName) + 1;
  }
}
A(kr, "blotName", "header"), A(kr, "tagName", ["H1", "H2", "H3", "H4", "H5", "H6"]);
class As extends ge {
}
As.blotName = "list-container";
As.tagName = "OL";
class xs extends Q {
  static create(t) {
    const e = super.create();
    return e.setAttribute("data-list", t), e;
  }
  static formats(t) {
    return t.getAttribute("data-list") || void 0;
  }
  static register() {
    N.register(As);
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
xs.blotName = "list";
xs.tagName = "LI";
As.allowedChildren = [xs];
xs.requiredContainer = As;
class vs extends oe {
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
A(vs, "blotName", "bold"), A(vs, "tagName", ["STRONG", "B"]);
class Or extends vs {
}
A(Or, "blotName", "italic"), A(Or, "tagName", ["EM", "I"]);
class re extends oe {
  static create(t) {
    const e = super.create(t);
    return e.setAttribute("href", this.sanitize(t)), e.setAttribute("rel", "noopener noreferrer"), e.setAttribute("target", "_blank"), e;
  }
  static formats(t) {
    return t.getAttribute("href");
  }
  static sanitize(t) {
    return wl(t, this.PROTOCOL_WHITELIST) ? t : this.SANITIZED_URL;
  }
  format(t, e) {
    t !== this.statics.blotName || !e ? super.format(t, e) : this.domNode.setAttribute("href", this.constructor.sanitize(e));
  }
}
A(re, "blotName", "link"), A(re, "tagName", "A"), A(re, "SANITIZED_URL", "about:blank"), A(re, "PROTOCOL_WHITELIST", ["http", "https", "mailto", "tel", "sms"]);
function wl(r, t) {
  const e = document.createElement("a");
  e.href = r;
  const s = e.href.slice(0, e.href.indexOf(":"));
  return t.indexOf(s) > -1;
}
class Ir extends oe {
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
A(Ir, "blotName", "script"), A(Ir, "tagName", ["SUB", "SUP"]);
class Rr extends vs {
}
A(Rr, "blotName", "strike"), A(Rr, "tagName", ["S", "STRIKE"]);
class Mr extends oe {
}
A(Mr, "blotName", "underline"), A(Mr, "tagName", "U");
class tn extends Fr {
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
A(tn, "blotName", "formula"), A(tn, "className", "ql-formula"), A(tn, "tagName", "SPAN");
const Ti = ["alt", "height", "width"];
class _r extends ft {
  static create(t) {
    const e = super.create(t);
    return typeof t == "string" && e.setAttribute("src", this.sanitize(t)), e;
  }
  static formats(t) {
    return Ti.reduce((e, s) => (t.hasAttribute(s) && (e[s] = t.getAttribute(s)), e), {});
  }
  static match(t) {
    return /\.(jpe?g|gif|png)$/.test(t) || /^data:image\/.+;base64/.test(t);
  }
  static sanitize(t) {
    return wl(t, ["http", "https", "data"]) ? t : "//:0";
  }
  static value(t) {
    return t.getAttribute("src");
  }
  format(t, e) {
    Ti.indexOf(t) > -1 ? e ? this.domNode.setAttribute(t, e) : this.domNode.removeAttribute(t) : super.format(t, e);
  }
}
A(_r, "blotName", "image"), A(_r, "tagName", "IMG");
const Li = ["height", "width"];
class en extends Et {
  static create(t) {
    const e = super.create(t);
    return e.setAttribute("frameborder", "0"), e.setAttribute("allowfullscreen", "true"), e.setAttribute("src", this.sanitize(t)), e;
  }
  static formats(t) {
    return Li.reduce((e, s) => (t.hasAttribute(s) && (e[s] = t.getAttribute(s)), e), {});
  }
  static sanitize(t) {
    return re.sanitize(t);
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
A(en, "blotName", "video"), A(en, "className", "ql-video"), A(en, "tagName", "IFRAME");
const fs = new It("code-token", "hljs", {
  scope: M.INLINE
});
class Wt extends oe {
  static formats(t, e) {
    for (; t != null && t !== e.domNode; ) {
      if (t.classList && t.classList.contains(rt.className))
        return super.formats(t, e);
      t = t.parentNode;
    }
  }
  constructor(t, e, s) {
    super(t, e, s), fs.add(this.domNode, s);
  }
  format(t, e) {
    t !== Wt.blotName ? super.format(t, e) : e ? fs.add(this.domNode, e) : (fs.remove(this.domNode), this.domNode.classList.remove(this.statics.className));
  }
  optimize() {
    super.optimize(...arguments), fs.value(this.domNode) || this.unwrap();
  }
}
Wt.blotName = "code-token";
Wt.className = "ql-token";
class yt extends rt {
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
    return this.formatAt(0, this.length(), Wt.blotName, !1), super.replaceWith(t, e);
  }
}
class ds extends be {
  attach() {
    super.attach(), this.forceNext = !1, this.scroll.emitMount(this);
  }
  format(t, e) {
    t === yt.blotName && (this.forceNext = !0, this.children.forEach((s) => {
      s.format(t, e);
    }));
  }
  formatAt(t, e, s, n) {
    s === yt.blotName && (this.forceNext = !0), super.formatAt(t, e, s, n);
  }
  highlight(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (this.children.head == null)
      return;
    const s = Array.from(this.domNode.childNodes).filter((o) => o !== this.uiNode), n = "".concat(s.map((o) => o.textContent).join("\n"), "\n"), i = yt.formats(this.children.head.domNode);
    if (e || this.forceNext || this.cachedText !== n) {
      if (n.trim().length > 0 || this.cachedText == null) {
        const o = this.children.reduce((c, h) => c.concat(nl(h, !1)), new R()), a = t(n, i);
        o.diff(a).reduce((c, h) => {
          let {
            retain: m,
            attributes: b
          } = h;
          return m ? (b && Object.keys(b).forEach((d) => {
            [yt.blotName, Wt.blotName].includes(d) && this.formatAt(c, m, d, b[d]);
          }), c + m) : c;
        }, 0);
      }
      this.cachedText = n, this.forceNext = !1;
    }
  }
  html(t, e) {
    const [s] = this.children.find(t), n = s ? yt.formats(s.domNode) : "plain";
    return '<pre data-language="'.concat(n, '">\n').concat(pn(this.code(t, e)), "\n</pre>");
  }
  optimize(t) {
    if (super.optimize(t), this.parent != null && this.children.head != null && this.uiNode != null) {
      const e = yt.formats(this.children.head.domNode);
      e !== this.uiNode.value && (this.uiNode.value = e);
    }
  }
}
ds.allowedChildren = [yt];
yt.requiredContainer = ds;
yt.allowedChildren = [Wt, $e, Ot, Rt];
const xa = (r, t, e) => {
  if (typeof r.versionString == "string") {
    const s = r.versionString.split(".")[0];
    if (parseInt(s, 10) >= 11)
      return r.highlight(e, {
        language: t
      }).value;
  }
  return r.highlight(t, e).value;
};
class Nl extends Mt {
  static register() {
    N.register(Wt, !0), N.register(yt, !0), N.register(ds, !0);
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
    this.quill.on(N.events.SCROLL_BLOT_MOUNT, (t) => {
      if (!(t instanceof ds))
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
        t.format(yt.blotName, e.value), this.quill.root.focus(), this.highlight(t, !0);
      }), t.uiNode == null && (t.attachUI(e), t.children.head && (e.value = yt.formats(t.children.head.domNode)));
    });
  }
  initTimer() {
    let t = null;
    this.quill.on(N.events.SCROLL_OPTIMIZE, () => {
      t && clearTimeout(t), t = setTimeout(() => {
        this.highlight(), t = null;
      }, this.options.interval);
    });
  }
  highlight() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (this.quill.selection.composing)
      return;
    this.quill.update(N.sources.USER);
    const s = this.quill.getSelection();
    (t == null ? this.quill.scroll.descendants(ds) : [t]).forEach((i) => {
      i.highlight(this.highlightBlot, e);
    }), this.quill.update(N.sources.SILENT), s != null && this.quill.setSelection(s, N.sources.SILENT);
  }
  highlightBlot(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "plain";
    if (e = this.languages[e] ? e : "plain", e === "plain")
      return pn(t).split("\n").reduce((n, i, o) => (o !== 0 && n.insert("\n", {
        [rt.blotName]: e
      }), n.insert(i)), new R());
    const s = this.quill.root.ownerDocument.createElement("div");
    return s.classList.add(rt.className), s.innerHTML = xa(this.options.hljs, e, t), Yr(this.quill.scroll, s, [(n, i) => {
      const o = fs.value(n);
      return o ? i.compose(new R().retain(i.length(), {
        [Wt.blotName]: o
      })) : i;
    }], [(n, i) => n.data.split("\n").reduce((o, a, c) => (c !== 0 && o.insert("\n", {
      [rt.blotName]: e
    }), o.insert(a)), i)], /* @__PURE__ */ new WeakMap());
  }
}
Nl.DEFAULTS = {
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
const ps = class ps extends Q {
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
    t === ps.blotName && e ? this.domNode.setAttribute("data-row", e) : super.format(t, e);
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
A(ps, "blotName", "table"), A(ps, "tagName", "TD");
let St = ps;
class Xt extends ge {
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
A(Xt, "blotName", "table-row"), A(Xt, "tagName", "TR");
class Ht extends ge {
}
A(Ht, "blotName", "table-body"), A(Ht, "tagName", "TBODY");
class Fe extends ge {
  balanceCells() {
    const t = this.descendants(Xt), e = t.reduce((s, n) => Math.max(n.children.length, s), 0);
    t.forEach((s) => {
      new Array(e - s.children.length).fill(0).forEach(() => {
        let n;
        s.children.head != null && (n = St.formats(s.children.head.domNode));
        const i = this.scroll.create(St.blotName, n);
        s.appendChild(i), i.optimize();
      });
    });
  }
  cells(t) {
    return this.rows().map((e) => e.children.at(t));
  }
  deleteColumn(t) {
    const [e] = this.descendant(Ht);
    e == null || e.children.head == null || e.children.forEach((s) => {
      const n = s.children.at(t);
      n != null && n.remove();
    });
  }
  insertColumn(t) {
    const [e] = this.descendant(Ht);
    e == null || e.children.head == null || e.children.forEach((s) => {
      const n = s.children.at(t), i = St.formats(s.children.head.domNode), o = this.scroll.create(St.blotName, i);
      s.insertBefore(o, n);
    });
  }
  insertRow(t) {
    const [e] = this.descendant(Ht);
    if (e == null || e.children.head == null)
      return;
    const s = Jr(), n = this.scroll.create(Xt.blotName);
    e.children.head.children.forEach(() => {
      const o = this.scroll.create(St.blotName, s);
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
A(Fe, "blotName", "table-container"), A(Fe, "tagName", "TABLE");
Fe.allowedChildren = [Ht];
Ht.requiredContainer = Fe;
Ht.allowedChildren = [Xt];
Xt.requiredContainer = Ht;
Xt.allowedChildren = [St];
St.requiredContainer = Xt;
function Jr() {
  const r = Math.random().toString(36).slice(2, 6);
  return "row-".concat(r);
}
class Ta extends Mt {
  static register() {
    N.register(St), N.register(Xt), N.register(Ht), N.register(Fe);
  }
  constructor() {
    super(...arguments), this.listenBalanceCells();
  }
  balanceTables() {
    this.quill.scroll.descendants(Fe).forEach((t) => {
      t.balanceCells();
    });
  }
  deleteColumn() {
    const [t, , e] = this.getTable();
    e != null && (t.deleteColumn(e.cellOffset()), this.quill.update(N.sources.USER));
  }
  deleteRow() {
    const [, t] = this.getTable();
    t != null && (t.remove(), this.quill.update(N.sources.USER));
  }
  deleteTable() {
    const [t] = this.getTable();
    if (t == null)
      return;
    const e = t.offset();
    t.remove(), this.quill.update(N.sources.USER), this.quill.setSelection(e, N.sources.SILENT);
  }
  getTable() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.quill.getSelection();
    if (t == null)
      return [null, null, null, -1];
    const [e, s] = this.quill.getLine(t.index);
    if (e == null || e.statics.blotName !== St.blotName)
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
    s.insertColumn(o + t), this.quill.update(N.sources.USER);
    let a = n.rowOffset();
    t === 0 && (a += 1), this.quill.setSelection(e.index + a, e.length, N.sources.SILENT);
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
    s.insertRow(o + t), this.quill.update(N.sources.USER), t > 0 ? this.quill.setSelection(e, N.sources.SILENT) : this.quill.setSelection(e.index + n.children.length, e.length, N.sources.SILENT);
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
    }, new R().retain(s.index));
    this.quill.updateContents(n, N.sources.USER), this.quill.setSelection(s.index, N.sources.SILENT), this.balanceTables();
  }
  listenBalanceCells() {
    this.quill.on(N.events.SCROLL_OPTIMIZE, (t) => {
      t.some((e) => ["TD", "TR", "TBODY", "TABLE"].includes(e.target.tagName) ? (this.quill.once(N.events.TEXT_CHANGE, (s, n, i) => {
        i === N.sources.USER && this.balanceTables();
      }), !0) : !1);
    });
  }
}
const Ci = Yt("quill:toolbar");
class Qr extends Mt {
  constructor(t, e) {
    var s, n;
    if (super(t, e), Array.isArray(this.options.container)) {
      const i = document.createElement("div");
      i.setAttribute("role", "toolbar"), La(i, this.options.container), (n = (s = t.container) == null ? void 0 : s.parentNode) == null || n.insertBefore(i, t.container), this.container = i;
    } else
      typeof this.options.container == "string" ? this.container = document.querySelector(this.options.container) : this.container = this.options.container;
    if (!(this.container instanceof HTMLElement)) {
      Ci.error("Container required for toolbar", this.options);
      return;
    }
    this.container.classList.add("ql-toolbar"), this.controls = [], this.handlers = {}, this.options.handlers && Object.keys(this.options.handlers).forEach((i) => {
      var a;
      const o = (a = this.options.handlers) == null ? void 0 : a[i];
      o && this.addHandler(i, o);
    }), Array.from(this.container.querySelectorAll("button, select")).forEach((i) => {
      this.attach(i);
    }), this.quill.on(N.events.EDITOR_CHANGE, () => {
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
      Ci.warn("ignoring attaching to nonexistent format", e, t);
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
        this.quill.scroll.query(e).prototype instanceof ft
      ) {
        if (i = prompt("Enter ".concat(e)), !i)
          return;
        this.quill.updateContents(new R().retain(o.index).delete(o.length).insert({
          [e]: i
        }), N.sources.USER);
      } else
        this.quill.format(e, i, N.sources.USER);
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
function La(r, t) {
  Array.isArray(t[0]) || (t = [t]), t.forEach((e) => {
    const s = document.createElement("span");
    s.classList.add("ql-formats"), e.forEach((n) => {
      if (typeof n == "string")
        qi(s, n);
      else {
        const i = Object.keys(n)[0], o = n[i];
        Array.isArray(o) ? Ca(s, i, o) : qi(s, i, o);
      }
    }), r.appendChild(s);
  });
}
function Ca(r, t, e) {
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
            this.quill.scroll.query(e, M.INLINE) != null && this.quill.format(e, !1, N.sources.USER);
          });
        } else
          this.quill.removeFormat(r.index, r.length, N.sources.USER);
    },
    direction(r) {
      const {
        align: t
      } = this.quill.getFormat();
      r === "rtl" && t == null ? this.quill.format("align", "right", N.sources.USER) : !r && t === "right" && this.quill.format("align", !1, N.sources.USER), this.quill.format("direction", r, N.sources.USER);
    },
    indent(r) {
      const t = this.quill.getSelection(), e = this.quill.getFormat(t), s = parseInt(e.indent || 0, 10);
      if (r === "+1" || r === "-1") {
        let n = r === "+1" ? 1 : -1;
        e.direction === "rtl" && (n *= -1), this.quill.format("indent", s + n, N.sources.USER);
      }
    },
    link(r) {
      r === !0 && (r = prompt("Enter link URL:")), this.quill.format("link", r, N.sources.USER);
    },
    list(r) {
      const t = this.quill.getSelection(), e = this.quill.getFormat(t);
      r === "check" ? e.list === "checked" || e.list === "unchecked" ? this.quill.format("list", !1, N.sources.USER) : this.quill.format("list", "unchecked", N.sources.USER) : this.quill.format("list", r, N.sources.USER);
    }
  }
};
const qa = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"/></svg>', Sa = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"/><line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"/></svg>', ka = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"/><line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"/></svg>', Oa = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="15" x2="3" y1="14" y2="14"/><line class="ql-stroke" x1="15" x2="3" y1="4" y2="4"/></svg>', Ia = '<svg viewbox="0 0 18 18"><g class="ql-fill ql-color-label"><polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"/><rect height="1" width="1" x="4" y="4"/><polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"/><rect height="1" width="1" x="2" y="6"/><rect height="1" width="1" x="3" y="5"/><rect height="1" width="1" x="4" y="7"/><polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"/><rect height="1" width="1" x="2" y="12"/><rect height="1" width="1" x="2" y="9"/><rect height="1" width="1" x="2" y="15"/><polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"/><rect height="1" width="1" x="3" y="8"/><path d="M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z"/><path d="M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z"/><path d="M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z"/><rect height="1" width="1" x="12" y="2"/><rect height="1" width="1" x="11" y="3"/><path d="M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z"/><rect height="1" width="1" x="2" y="3"/><rect height="1" width="1" x="6" y="2"/><rect height="1" width="1" x="3" y="2"/><rect height="1" width="1" x="5" y="3"/><rect height="1" width="1" x="9" y="2"/><rect height="1" width="1" x="15" y="14"/><polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"/><rect height="1" width="1" x="13" y="7"/><rect height="1" width="1" x="15" y="5"/><rect height="1" width="1" x="14" y="6"/><rect height="1" width="1" x="15" y="8"/><rect height="1" width="1" x="14" y="9"/><path d="M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z"/><rect height="1" width="1" x="14" y="3"/><polygon points="12 6.868 12 6 11.62 6 12 6.868"/><rect height="1" width="1" x="15" y="2"/><rect height="1" width="1" x="12" y="5"/><rect height="1" width="1" x="13" y="4"/><polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"/><rect height="1" width="1" x="9" y="14"/><rect height="1" width="1" x="8" y="15"/><path d="M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z"/><rect height="1" width="1" x="5" y="15"/><path d="M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z"/><rect height="1" width="1" x="11" y="15"/><path d="M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z"/><rect height="1" width="1" x="14" y="15"/><rect height="1" width="1" x="15" y="11"/></g><polyline class="ql-stroke" points="5.5 13 9 5 12.5 13"/><line class="ql-stroke" x1="11.63" x2="6.38" y1="11" y2="11"/></svg>', Ra = '<svg viewbox="0 0 18 18"><rect class="ql-fill ql-stroke" height="3" width="3" x="4" y="5"/><rect class="ql-fill ql-stroke" height="3" width="3" x="11" y="5"/><path class="ql-even ql-fill ql-stroke" d="M7,8c0,4.031-3,5-3,5"/><path class="ql-even ql-fill ql-stroke" d="M14,8c0,4.031-3,5-3,5"/></svg>', Ma = '<svg viewbox="0 0 18 18"><path class="ql-stroke" d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"/><path class="ql-stroke" d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"/></svg>', _a = '<svg class="" viewbox="0 0 18 18"><line class="ql-stroke" x1="5" x2="13" y1="3" y2="3"/><line class="ql-stroke" x1="6" x2="9.35" y1="12" y2="3"/><line class="ql-stroke" x1="11" x2="15" y1="11" y2="15"/><line class="ql-stroke" x1="15" x2="11" y1="11" y2="15"/><rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="7" x="2" y="14"/></svg>', Si = '<svg viewbox="0 0 18 18"><polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"/><polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"/><line class="ql-stroke" x1="10" x2="8" y1="5" y2="13"/></svg>', Ba = '<svg viewbox="0 0 18 18"><line class="ql-color-label ql-stroke ql-transparent" x1="3" x2="15" y1="15" y2="15"/><polyline class="ql-stroke" points="5.5 11 9 3 12.5 11"/><line class="ql-stroke" x1="11.63" x2="6.38" y1="9" y2="9"/></svg>', Ua = '<svg viewbox="0 0 18 18"><polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"/><line class="ql-stroke ql-fill" x1="15" x2="11" y1="4" y2="4"/><path class="ql-fill" d="M11,3a3,3,0,0,0,0,6h1V3H11Z"/><rect class="ql-fill" height="11" width="1" x="11" y="4"/><rect class="ql-fill" height="11" width="1" x="13" y="4"/></svg>', Da = '<svg viewbox="0 0 18 18"><polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"/><line class="ql-stroke ql-fill" x1="9" x2="5" y1="4" y2="4"/><path class="ql-fill" d="M5,3A3,3,0,0,0,5,9H6V3H5Z"/><rect class="ql-fill" height="11" width="1" x="5" y="4"/><rect class="ql-fill" height="11" width="1" x="7" y="4"/></svg>', Pa = '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z"/><rect class="ql-fill" height="1.6" rx="0.8" ry="0.8" width="5" x="5.15" y="6.2"/><path class="ql-fill" d="M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z"/></svg>', ja = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z"/></svg>', Ha = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>', $a = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.65186,12.30664a2.6742,2.6742,0,0,1-2.915,2.68457,3.96592,3.96592,0,0,1-2.25537-.6709.56007.56007,0,0,1-.13232-.83594L11.64648,13c.209-.34082.48389-.36328.82471-.1543a2.32654,2.32654,0,0,0,1.12256.33008c.71484,0,1.12207-.35156,1.12207-.78125,0-.61523-.61621-.86816-1.46338-.86816H13.2085a.65159.65159,0,0,1-.68213-.41895l-.05518-.10937a.67114.67114,0,0,1,.14307-.78125l.71533-.86914a8.55289,8.55289,0,0,1,.68213-.7373V8.58887a3.93913,3.93913,0,0,1-.748.05469H11.9873a.54085.54085,0,0,1-.605-.60547V7.59863a.54085.54085,0,0,1,.605-.60547h3.75146a.53773.53773,0,0,1,.60547.59375v.17676a1.03723,1.03723,0,0,1-.27539.748L14.74854,10.0293A2.31132,2.31132,0,0,1,16.65186,12.30664ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>', za = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm7.05371,7.96582v.38477c0,.39648-.165.60547-.46191.60547h-.47314v1.29785a.54085.54085,0,0,1-.605.60547h-.69336a.54085.54085,0,0,1-.605-.60547V12.95605H11.333a.5412.5412,0,0,1-.60547-.60547v-.15332a1.199,1.199,0,0,1,.22021-.748l2.56348-4.05957a.7819.7819,0,0,1,.72607-.39648h1.27637a.54085.54085,0,0,1,.605.60547v3.7627h.33008A.54055.54055,0,0,1,17.05371,11.96582ZM14.28125,8.7207h-.022a4.18969,4.18969,0,0,1-.38525.81348l-1.188,1.80469v.02246h1.5293V9.60059A7.04058,7.04058,0,0,1,14.28125,8.7207Z"/></svg>', Fa = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.74023,12.18555a2.75131,2.75131,0,0,1-2.91553,2.80566,3.908,3.908,0,0,1-2.25537-.68164.54809.54809,0,0,1-.13184-.8252L11.73438,13c.209-.34082.48389-.36328.8252-.1543a2.23757,2.23757,0,0,0,1.1001.33008,1.01827,1.01827,0,0,0,1.1001-.96777c0-.61621-.53906-.97949-1.25439-.97949a2.15554,2.15554,0,0,0-.64893.09961,1.15209,1.15209,0,0,1-.814.01074l-.12109-.04395a.64116.64116,0,0,1-.45117-.71484l.231-3.00391a.56666.56666,0,0,1,.62744-.583H15.541a.54085.54085,0,0,1,.605.60547v.43945a.54085.54085,0,0,1-.605.60547H13.41748l-.04395.72559a1.29306,1.29306,0,0,1-.04395.30859h.022a2.39776,2.39776,0,0,1,.57227-.07715A2.53266,2.53266,0,0,1,16.74023,12.18555ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>', Va = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M14.51758,9.64453a1.85627,1.85627,0,0,0-1.24316.38477H13.252a1.73532,1.73532,0,0,1,1.72754-1.4082,2.66491,2.66491,0,0,1,.5498.06641c.35254.05469.57227.01074.70508-.40723l.16406-.5166a.53393.53393,0,0,0-.373-.75977,4.83723,4.83723,0,0,0-1.17773-.14258c-2.43164,0-3.7627,2.17773-3.7627,4.43359,0,2.47559,1.60645,3.69629,3.19043,3.69629A2.70585,2.70585,0,0,0,16.96,12.19727,2.43861,2.43861,0,0,0,14.51758,9.64453Zm-.23047,3.58691c-.67187,0-1.22168-.81445-1.22168-1.45215,0-.47363.30762-.583.72559-.583.96875,0,1.27734.59375,1.27734,1.12207A.82182.82182,0,0,1,14.28711,13.23145ZM10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Z"/></svg>', Ka = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="13" y1="4" y2="4"/><line class="ql-stroke" x1="5" x2="11" y1="14" y2="14"/><line class="ql-stroke" x1="8" x2="10" y1="14" y2="4"/></svg>', Ga = '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="10" width="12" x="3" y="4"/><circle class="ql-fill" cx="6" cy="7" r="1"/><polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"/></svg>', Za = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"/></svg>', Wa = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-stroke" points="5 7 5 11 3 9 5 7"/></svg>', Xa = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="11" y1="7" y2="11"/><path class="ql-even ql-stroke" d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"/><path class="ql-even ql-stroke" d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"/></svg>', Ya = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="6" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="6" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="6" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="3" y1="4" y2="4"/><line class="ql-stroke" x1="3" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="3" x2="3" y1="14" y2="14"/></svg>', Ja = '<svg class="" viewbox="0 0 18 18"><line class="ql-stroke" x1="9" x2="15" y1="4" y2="4"/><polyline class="ql-stroke" points="3 4 4 5 6 3"/><line class="ql-stroke" x1="9" x2="15" y1="14" y2="14"/><polyline class="ql-stroke" points="3 14 4 15 6 13"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-stroke" points="3 9 4 10 6 8"/></svg>', Qa = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="7" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="7" x2="15" y1="14" y2="14"/><line class="ql-stroke ql-thin" x1="2.5" x2="4.5" y1="5.5" y2="5.5"/><path class="ql-fill" d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"/><path class="ql-stroke ql-thin" d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"/><path class="ql-stroke ql-thin" d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"/></svg>', tc = '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z"/><path class="ql-fill" d="M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z"/></svg>', ec = '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z"/><path class="ql-fill" d="M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z"/></svg>', sc = '<svg viewbox="0 0 18 18"><line class="ql-stroke ql-thin" x1="15.5" x2="2.5" y1="8.5" y2="9.5"/><path class="ql-fill" d="M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z"/><path class="ql-fill" d="M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z"/></svg>', nc = '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="12" width="12" x="3" y="3"/><rect class="ql-fill" height="2" width="3" x="5" y="5"/><rect class="ql-fill" height="2" width="4" x="9" y="5"/><g class="ql-fill ql-transparent"><rect height="2" width="3" x="5" y="8"/><rect height="2" width="4" x="9" y="8"/><rect height="2" width="3" x="5" y="11"/><rect height="2" width="4" x="9" y="11"/></g></svg>', rc = '<svg viewbox="0 0 18 18"><path class="ql-stroke" d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"/><rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="12" x="3" y="15"/></svg>', ic = '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="12" width="12" x="3" y="3"/><rect class="ql-fill" height="12" width="1" x="5" y="3"/><rect class="ql-fill" height="12" width="1" x="12" y="3"/><rect class="ql-fill" height="2" width="8" x="5" y="8"/><rect class="ql-fill" height="1" width="3" x="3" y="5"/><rect class="ql-fill" height="1" width="3" x="3" y="7"/><rect class="ql-fill" height="1" width="3" x="3" y="10"/><rect class="ql-fill" height="1" width="3" x="3" y="12"/><rect class="ql-fill" height="1" width="3" x="12" y="5"/><rect class="ql-fill" height="1" width="3" x="12" y="7"/><rect class="ql-fill" height="1" width="3" x="12" y="10"/><rect class="ql-fill" height="1" width="3" x="12" y="12"/></svg>', Es = {
  align: {
    "": qa,
    center: Sa,
    right: ka,
    justify: Oa
  },
  background: Ia,
  blockquote: Ra,
  bold: Ma,
  clean: _a,
  code: Si,
  "code-block": Si,
  color: Ba,
  direction: {
    "": Ua,
    rtl: Da
  },
  formula: Pa,
  header: {
    1: ja,
    2: Ha,
    3: $a,
    4: za,
    5: Fa,
    6: Va
  },
  italic: Ka,
  image: Ga,
  indent: {
    "+1": Za,
    "-1": Wa
  },
  link: Xa,
  list: {
    bullet: Ya,
    check: Ja,
    ordered: Qa
  },
  script: {
    sub: tc,
    super: ec
  },
  strike: sc,
  table: nc,
  underline: rc,
  video: ic
}, lc = '<svg viewbox="0 0 18 18"><polygon class="ql-stroke" points="7 11 9 13 11 11 7 11"/><polygon class="ql-stroke" points="7 7 9 5 11 7 7 7"/></svg>';
let ki = 0;
function Oi(r, t) {
  r.setAttribute(t, "".concat(r.getAttribute(t) !== "true"));
}
class bn {
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
    this.container.classList.toggle("ql-expanded"), Oi(this.label, "aria-expanded"), Oi(this.options, "aria-hidden");
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
    return t.classList.add("ql-picker-label"), t.innerHTML = lc, t.tabIndex = "0", t.setAttribute("role", "button"), t.setAttribute("aria-expanded", "false"), this.container.appendChild(t), t;
  }
  buildOptions() {
    const t = document.createElement("span");
    t.classList.add("ql-picker-options"), t.setAttribute("aria-hidden", "true"), t.tabIndex = "-1", t.id = "ql-picker-options-".concat(ki), ki += 1, this.label.setAttribute("aria-controls", t.id), this.options = t, Array.from(this.select.options).forEach((e) => {
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
class Al extends bn {
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
class xl extends bn {
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
const oc = (r) => {
  const {
    overflowY: t
  } = getComputedStyle(r, null);
  return t !== "visible" && t !== "clip";
};
class Tl {
  constructor(t, e) {
    this.quill = t, this.boundsContainer = e || document.body, this.root = t.addContainer("ql-tooltip"), this.root.innerHTML = this.constructor.TEMPLATE, oc(this.quill.root) && this.quill.root.addEventListener("scroll", () => {
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
const ac = [!1, "center", "right", "justify"], cc = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"], uc = [!1, "serif", "monospace"], hc = ["1", "2", "3", !1], fc = ["small", !1, "large", "huge"];
class Ts extends ze {
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
      if (n.classList.contains("ql-align") && (n.querySelector("option") == null && hs(n, ac), typeof e.align == "object"))
        return new xl(n, e.align);
      if (n.classList.contains("ql-background") || n.classList.contains("ql-color")) {
        const i = n.classList.contains("ql-background") ? "background" : "color";
        return n.querySelector("option") == null && hs(n, cc, i === "background" ? "#ffffff" : "#000000"), new Al(n, e[i]);
      }
      return n.querySelector("option") == null && (n.classList.contains("ql-font") ? hs(n, uc) : n.classList.contains("ql-header") ? hs(n, hc) : n.classList.contains("ql-size") && hs(n, fc)), new bn(n);
    });
    const s = () => {
      this.pickers.forEach((n) => {
        n.update();
      });
    };
    this.quill.on(k.events.EDITOR_CHANGE, s);
  }
}
Ts.DEFAULTS = ie({}, ze.DEFAULTS, {
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
class Ll extends Tl {
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
        this.linkRange ? (this.quill.formatText(this.linkRange, "link", t, k.sources.USER), delete this.linkRange) : (this.restoreFocus(), this.quill.format("link", t, k.sources.USER)), this.quill.root.scrollTop = e;
        break;
      }
      case "video":
        t = dc(t);
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
            k.sources.USER
          ), this.root.getAttribute("data-mode") === "formula" && this.quill.insertText(s + 1, " ", k.sources.USER), this.quill.setSelection(s + 2, k.sources.USER);
        }
        break;
      }
    }
    this.textbox.value = "", this.hide();
  }
}
function dc(r) {
  let t = r.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || r.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
  return t ? "".concat(t[1] || "https", "://www.youtube.com/embed/").concat(t[2], "?showinfo=0") : (t = r.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) ? "".concat(t[1] || "https", "://player.vimeo.com/video/").concat(t[2], "/") : r;
}
function hs(r, t) {
  let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  t.forEach((s) => {
    const n = document.createElement("option");
    s === e ? n.setAttribute("selected", "selected") : n.setAttribute("value", String(s)), r.appendChild(n);
  });
}
const mc = [["bold", "italic", "link"], [{
  header: 1
}, {
  header: 2
}, "blockquote"]];
class Cl extends Ll {
  constructor(t, e) {
    super(t, e), this.quill.on(k.events.EDITOR_CHANGE, (s, n, i, o) => {
      if (s === k.events.SELECTION_CHANGE)
        if (n != null && n.length > 0 && o === k.sources.USER) {
          this.show(), this.root.style.left = "0px", this.root.style.width = "", this.root.style.width = "".concat(this.root.offsetWidth, "px");
          const a = this.quill.getLines(n.index, n.length);
          if (a.length === 1) {
            const c = this.quill.getBounds(n);
            c != null && this.position(c);
          } else {
            const c = a[a.length - 1], h = this.quill.getIndex(c), m = Math.min(c.length() - 1, n.index + n.length - h), b = this.quill.getBounds(new pe(h, m));
            b != null && this.position(b);
          }
        } else
          document.activeElement !== this.textbox && this.quill.hasFocus() && this.hide();
    });
  }
  listen() {
    super.listen(), this.root.querySelector(".ql-close").addEventListener("click", () => {
      this.root.classList.remove("ql-editing");
    }), this.quill.on(k.events.SCROLL_OPTIMIZE, () => {
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
A(Cl, "TEMPLATE", ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', "</div>"].join(""));
class ql extends Ts {
  constructor(t, e) {
    e.modules.toolbar != null && e.modules.toolbar.container == null && (e.modules.toolbar.container = mc), super(t, e), this.quill.container.classList.add("ql-bubble");
  }
  extendToolbar(t) {
    this.tooltip = new Cl(this.quill, this.options.bounds), t.container != null && (this.tooltip.root.appendChild(t.container), this.buildButtons(t.container.querySelectorAll("button"), Es), this.buildPickers(t.container.querySelectorAll("select"), Es));
  }
}
ql.DEFAULTS = ie({}, Ts.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        link(r) {
          r ? this.quill.theme.tooltip.edit() : this.quill.format("link", !1, N.sources.USER);
        }
      }
    }
  }
});
const pc = [[{
  header: ["1", "2", "3", !1]
}], ["bold", "italic", "underline", "link"], [{
  list: "ordered"
}, {
  list: "bullet"
}], ["clean"]];
class Sl extends Ll {
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
        this.restoreFocus(), this.quill.formatText(s, "link", !1, k.sources.USER), delete this.linkRange;
      }
      e.preventDefault(), this.hide();
    }), this.quill.on(k.events.SELECTION_CHANGE, (e, s, n) => {
      if (e != null) {
        if (e.length === 0 && n === k.sources.USER) {
          const [i, o] = this.quill.scroll.descendant(re, e.index);
          if (i != null) {
            this.linkRange = new pe(e.index - o, i.length());
            const a = re.formats(i.domNode);
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
A(Sl, "TEMPLATE", ['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join(""));
class kl extends Ts {
  constructor(t, e) {
    e.modules.toolbar != null && e.modules.toolbar.container == null && (e.modules.toolbar.container = pc), super(t, e), this.quill.container.classList.add("ql-snow");
  }
  extendToolbar(t) {
    t.container != null && (t.container.classList.add("ql-snow"), this.buildButtons(t.container.querySelectorAll("button"), Es), this.buildPickers(t.container.querySelectorAll("select"), Es), this.tooltip = new Sl(this.quill, this.options.bounds), t.container.querySelector(".ql-link") && this.quill.keyboard.addBinding({
      key: "k",
      shortKey: !0
    }, (e, s) => {
      t.handlers.link.call(t, !s.format.link);
    }));
  }
}
kl.DEFAULTS = ie({}, Ts.DEFAULTS, {
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
            this.quill.format("link", !1, N.sources.USER);
        }
      }
    }
  }
});
N.register({
  "attributors/attribute/direction": cl,
  "attributors/class/align": ll,
  "attributors/class/background": Ro,
  "attributors/class/color": Io,
  "attributors/class/direction": ul,
  "attributors/class/font": dl,
  "attributors/class/size": pl,
  "attributors/style/align": ol,
  "attributors/style/background": Gr,
  "attributors/style/color": Kr,
  "attributors/style/direction": hl,
  "attributors/style/font": ml,
  "attributors/style/size": gl
}, !0);
N.register({
  "formats/align": ll,
  "formats/direction": ul,
  "formats/indent": Aa,
  "formats/background": Gr,
  "formats/color": Kr,
  "formats/font": dl,
  "formats/size": pl,
  "formats/blockquote": Sr,
  "formats/code-block": rt,
  "formats/header": kr,
  "formats/list": xs,
  "formats/bold": vs,
  "formats/code": Zr,
  "formats/italic": Or,
  "formats/link": re,
  "formats/script": Ir,
  "formats/strike": Rr,
  "formats/underline": Mr,
  "formats/formula": tn,
  "formats/image": _r,
  "formats/video": en,
  "modules/syntax": Nl,
  "modules/table": Ta,
  "modules/toolbar": Qr,
  "themes/bubble": ql,
  "themes/snow": kl,
  "ui/icons": Es,
  "ui/picker": bn,
  "ui/icon-picker": xl,
  "ui/color-picker": Al,
  "ui/tooltip": Tl
}, !0);
const gc = N.import("blots/inline");
class sn extends gc {
  static create(t) {
    const e = JSON.parse(t), { name: s, value: n } = e, i = super.create();
    return i.setAttribute("data-value", n), i.setAttribute("data-name", s), i;
  }
  static formats(t) {
    const e = t.dataset;
    return e.name ? JSON.stringify(e) : !0;
  }
}
A(sn, "blotName", "mention"), A(sn, "className", "ql-mention"), A(sn, "tagName", "span");
const bc = N.import("blots/inline");
class nn extends bc {
  static create(t) {
    const e = JSON.parse(t), { name: s, value: n, identifier: i, icon: o } = e, a = super.create();
    return i && a.setAttribute("data-identifier", i), s && a.setAttribute("data-name", s), n && a.setAttribute("data-value", n), o && a.setAttribute("data-icon", o), a;
  }
  static formats(t) {
    const e = t.dataset;
    return e.name ? JSON.stringify(e) : !0;
  }
}
A(nn, "blotName", "marker"), A(nn, "className", "ql-marker"), A(nn, "tagName", "mob-marker");
class yc {
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
      throw new Di("未配置提及用户USERURL编辑器参数！");
    const { data: e, context: s, params: n } = t, i = t.isInitialLoad === !0, o = t.isLoadMore === !0;
    i ? this.curPage = 0 : o && (this.curPage += 1);
    const a = ws.execScriptFn(
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
class vc {
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
      throw new Di("未配置提及用户QUOTEURL编辑器参数！");
    const { data: e, context: s, params: n } = t, i = t.isInitialLoad === !0, o = t.isLoadMore === !0;
    i ? this.curPage = 0 : o && (this.curPage += 1);
    const a = ws.execScriptFn(
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
class Ec extends HTMLElement {
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
class Br {
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
class wc extends Ml {
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
    A(this, "evt", new _l(
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
    N.register({ "formats/mention": sn }), N.register({ "formats/marker": nn });
  }
  registerCustomElem() {
    window.customElements.get("mob-marker") || window.customElements.define("mob-marker", Ec);
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
    if (await super.onInit(), this.appViewLogics = Bl(this.view.model), this.registerCustomElem(), this.editorParams) {
      const {
        uploadParams: e,
        exportParams: s,
        SHOWTOOLBAR: n,
        VALUEMODE: i,
        IMAGEMODE: o,
        MODULES: a,
        REPLYSCRIPT: c
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
      n && (this.showToolbar = this.toBoolean(n)), i && (this.valueMode = i.toLowerCase()), o && (this.imageMode = o.toLowerCase()), a && (this.modules = ws.execScriptFn(
        { controller: this },
        a
      )), c && (this.replyScript = c);
    }
    this.initBlot(), this.mention = new yc(
      this.editorParams,
      this.getControllerParams()
    ), this.marker = new vc(
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
    const n = await Ul(s.appDEUIActionId, s.appId);
    if (!n || !n.frontAppViewId) {
      ibiz.message.error("请配置界面行为打开视图");
      return;
    }
    const { context: i, params: o } = this.handlePublicParams(
      e,
      this.context,
      this.params
    ), a = await ibiz.hub.config.view.get(n.frontAppViewId), { openMode: c = "POPUPMODAL" } = a, h = await ibiz.commands.execute(
      Dl.TAG,
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
    const s = Br.getEmojiCustomHtml("".concat(e.name, ": ").concat(e.content));
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
class Ii {
  constructor(t) {
    A(this, "formEditor", "IBizMobComment");
    A(this, "gridEditor", "IBizMobComment");
    t === "REPLY" && (this.formEditor = "IBizMobReplyComment", this.gridEditor = "IBizMobReplyComment");
  }
  async createController(t, e) {
    const s = new wc(t, e);
    return await s.init(), s;
  }
}
const br = /* @__PURE__ */ cn({
  name: "IBizMobComment",
  props: Bi(),
  emits: Ui(),
  setup(r, {
    emit: t
  }) {
    const e = an("mob-comment"), s = r.controller, n = G(null), i = G(null), o = ibiz.i18n.getLang();
    let a;
    const c = G(!1), h = G({
      Authorization: "Bearer ".concat(zi(Pi.TOKEN))
    }), m = G(""), b = G(""), d = G(!1), p = G(!1), g = G([]), w = G([]), v = G(""), E = G(""), x = (C) => {
      const L = C.ops.find((S) => S.insert && S.insert.image);
      if (L)
        return L.insert.image;
    }, T = () => {
      let C = "";
      return s.valueMode === "text" && (C = a.getText()), C = a.getSemanticHTML(), C = s.transformHtml(C), C;
    }, I = async (C) => {
      const L = ji(C), S = await ibiz.util.file.fileUpload(m.value, L, h.value), K = b.value.replace("%fileId%", S.fileid), P = T();
      t("change", P.replace(C, K));
    }, q = (C = v.value) => {
      const L = a.getSelection(), S = a.clipboard.convert({
        html: "".concat(C, "<p><br></p>"),
        text: "\n"
      });
      a.setContents(S), L && a.setSelection(L.index + 1, "user");
    }, B = ({
      selectedOptions: C
    }) => {
      const L = C[0];
      if (!L)
        return;
      const S = a.getSelection(!0), K = S.index + S.length, P = JSON.stringify(L);
      a.insertText(K, "@".concat(L.name), "mention", P, "user"), a.setSelection(K + L.name.length + 1, "user"), d.value = !1;
    }, D = async () => {
      const C = s.mention.getMentionLogic();
      if (C) {
        const L = await s.openPickUpView(r.data, C);
        if (L && L[0]) {
          const S = L[0]._deData;
          B({
            selectedOptions: [{
              ...S,
              value: S.id
            }]
          });
        }
      } else
        g.value = await s.getMentions(r.data), d.value = !0;
    }, z = ({
      selectedOptions: C
    }) => {
      const L = s.marker.getSelection(C[0]);
      if (!L)
        return;
      const S = a.getSelection(!0), K = S.index + S.length, P = JSON.stringify(L);
      a.insertText(K, "".concat(L.name), "marker", P, "user"), a.setSelection(K + L.name.length + 1, "user"), p.value = !1;
    }, it = async () => {
      const C = s.marker.getMarkerLogic();
      if (C) {
        const L = await s.openPickUpView(r.data, C);
        if (L && L[0]) {
          const S = s.marker.toUIData(L);
          z({
            selectedOptions: S
          });
        }
      } else
        w.value = await s.getMarkers(r.data), p.value = !0;
    }, dt = () => {
      d.value = !1, q();
    }, Nt = () => {
      p.value = !1, q();
    }, At = (C) => {
      let L = !0;
      const S = C.ops.find((P) => P.insert);
      if (S) {
        const P = S.insert;
        if (P === "@") {
          const V = a.getSelection(!0);
          a.deleteText(V.index, 1, "user"), D(), L = !1;
        }
        if (P === "#") {
          const V = a.getSelection(!0);
          a.deleteText(V.index, 1, "user"), it(), L = !1;
        }
      }
      if (C.ops.find((P) => P.delete)) {
        const P = a.getSelection(!0);
        a.getContents(P.index - 1, 1).ops.some(($) => {
          var Bt;
          return (Bt = $.attributes) == null ? void 0 : Bt.marker;
        }) && (a.deleteText(P.index - 1, 1, "user"), L = !1);
      }
      return L;
    }, Jt = () => {
      if (!n.value)
        return;
      const C = s.showToolbar ? "snow" : "bubble";
      Object.assign(s.modules, {
        toolbar: i.value
      }), a = new N(n.value, {
        theme: C,
        modules: s.modules,
        readOnly: r.disabled || r.readonly,
        placeholder: s.placeHolder
      }), a.on("text-change", (L, S, K) => {
        if (K === "user" && At(L)) {
          const V = x(L);
          if (V && s.imageMode === "file") {
            I(V);
            return;
          }
          t("change", T());
        }
      }), a.on("selection-change", (L) => {
        L ? (c.value = !0, t("focus")) : (c.value = !1, t("blur"));
      }), s.valueMode === "text" && a.setText(r.value || "");
    };
    De(() => r.value, () => {
      if (r.value) {
        v.value = s.transformDelta(r.value);
        const C = a.getSemanticHTML();
        v.value !== C && q();
      } else
        v.value = "", a && q();
    }, {
      immediate: !0
    }), De(() => [r.disabled, r.readonly], () => {
      a && (r.disabled || r.readonly ? a.enable(!1) : a.enable());
    }, {
      immediate: !0
    }), De(() => r.data, (C) => {
      if (C) {
        const L = ibiz.util.file.calcFileUpDownUrl(s.context, s.params, C, s.editorParams);
        m.value = L.uploadUrl, b.value = L.downloadUrl;
      }
    }, {
      immediate: !0,
      deep: !0
    }), Hi(() => {
      Jt();
    });
    const _t = (C) => {
      const {
        eventArg: L
      } = C;
      E.value = L, s.reply = L, a.setSelection(0, "silent");
    }, mt = () => {
      E.value = "", s.reply = "";
    }, zt = () => {
      a.setSelection(0, "silent");
    };
    return s.evt.on("onSetReply", _t), s.evt.on("onRemoveReply", mt), s.evt.on("focus", zt), $i(() => {
      s.evt.off("onSetReply", _t), s.evt.off("onRemoveReply", mt), s.evt.off("focus", zt);
    }), {
      ns: e,
      lang: o,
      editing: c,
      editorRef: n,
      toolbarRef: i,
      showAtPopup: d,
      showMkPopup: p,
      mentionItems: g,
      markerItems: w,
      curValue: v,
      handleMentionClick: D,
      handleMarkerClick: it,
      onMentionCancel: dt,
      onMentionConfirm: B,
      onMarkerCancel: Nt,
      onMarkerConfirm: z,
      renderReply: () => {
        if (E.value) {
          const C = ws.execScriptFn({
            value: E.value
          }, s.replyScript, {
            singleRowReturn: !0,
            isAsync: !1
          });
          return O("div", {
            class: e.b("reply")
          }, [O("div", {
            class: e.be("reply", "content"),
            innerHTML: C
          }, null), O(ot("ion-icon"), {
            name: "close-outline",
            onClick: () => mt()
          }, null)]);
        }
      }
    };
  },
  render() {
    return O("div", {
      class: [this.ns.b(), this.disabled ? this.ns.m("disabled") : "", this.readonly ? this.ns.m("readonly") : "", this.ns.m(this.lang.toLowerCase()), this.ns.is("editing", this.editing)]
    }, [O("div", {
      class: this.ns.e("content")
    }, [O("div", {
      class: this.ns.e("ql-content"),
      ref: "editorRef"
    }, [this.controller.valueMode === "html" ? O("div", {
      innerHTML: this.curValue
    }, null) : null]), this.renderReply(), O("div", {
      class: this.ns.e("ql-toolbar"),
      ref: "toolbarRef"
    }, [O("button", {
      class: "ql-bold"
    }, null), O("button", {
      class: "ql-italic"
    }, null), O("button", {
      class: "ql-underline"
    }, null), O("button", {
      class: "ql-strike"
    }, null), O("button", {
      class: "ql-code-block"
    }, null), O("button", {
      class: "ql-list",
      value: "ordered"
    }, null), O("button", {
      class: "ql-list",
      value: "bullet"
    }, null), O("button", {
      class: "ql-mention",
      onClick: this.handleMentionClick
    }, [O("svg", {
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "4218",
      width: "200",
      height: "200"
    }, [O("path", {
      d: "M23.7 555c0-339.3 247-550 533.8-550 295.6 0 442.8 165.9 442.8 401.6 0 210.8-93.5 361.7-237 361.7-63.6 0-108.5-26.2-137.2-78.6-48.6 51.1-96 79.8-174.6 79.8-116 0-178.4-77.3-178.4-193.3 0-209.5 131-323 251.9-323 64.9 0 102.3 24.9 122.2 68.6l11.2-58.6 114.7 1.2L727 510.1c-7.5 36.2-11.2 63.6-11.2 81.1 0 44.9 22.5 71.1 56.1 71.1 63.6 0 106-89.8 106-243.2 0-205.8-114.7-300.6-323-300.6-220.8 0-405.4 163.4-405.4 436.5 0 238.2 132.2 350.5 390.4 350.5 94.8 0 174.6-12.5 255.7-36.2v109.8c-88.6 26.2-177.1 39.9-263.2 39.9-329.1 0-508.7-168.4-508.7-464z m585-44.9c3.7-20 6.2-39.9 6.2-53.6 0-56.1-15-96-83.6-96-83.6 0-133.5 108.5-133.5 212 0 44.9 13.7 88.6 77.3 88.6 73.7-0.1 114.9-57.4 133.6-151z",
      fill: "currentColot",
      "p-id": "4219"
    }, null)])]), O("button", {
      class: "ql-marker",
      onClick: this.handleMarkerClick
    }, [O("svg", {
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "6854",
      width: "200",
      height: "200"
    }, [O("path", {
      d: "M929.28 625.664l-234.496 0.512 24.064-229.888 210.432-0.512c20.992 0 38.4-17.408 38.4-38.4s-17.408-38.4-38.4-38.4H727.04l29.184-275.456c2.048-20.992-13.312-39.936-34.304-41.984-20.992-2.048-39.936 13.312-41.984 34.304L650.24 318.976l-232.448 0.512 29.184-275.456c2.048-20.992-13.312-39.936-34.304-41.984-20.992-2.048-39.936 13.312-41.984 34.304l-29.696 283.648-246.272 0.512c-20.992 0-38.4 17.408-38.4 38.4s17.408 38.4 38.4 38.4l238.08-0.512-24.064 229.888-214.016 0.512c-20.992 0-38.4 17.408-38.4 38.4s17.408 38.4 38.4 38.4l205.824-0.512-29.184 276.992c-2.048 20.992 13.312 39.936 34.304 41.984h4.096c19.456 0 35.84-14.848 37.888-34.304l30.208-285.184 232.448-0.512-29.184 277.504c-2.048 20.992 13.312 39.936 34.304 41.984h4.096c19.456 0 35.84-14.848 38.4-34.304l30.208-285.184 242.688-0.512c20.992 0 38.4-17.408 38.4-38.4-1.536-20.992-18.944-37.888-39.936-37.888z m-544.256 0.512l24.064-229.888 232.448-0.512-24.064 229.888-232.448 0.512z",
      fill: "currentColot",
      "p-id": "6855"
    }, null)])])])]), O(ot("van-popup"), {
      show: this.showAtPopup,
      "onUpdate:show": (r) => this.showAtPopup = r,
      round: !0,
      position: "bottom"
    }, {
      default: () => [O(ot("van-picker"), {
        columns: this.mentionItems,
        "confirm-button-text": ibiz.i18n.t("editor.common.confirm"),
        onCancel: this.onMentionCancel,
        onConfirm: this.onMentionConfirm
      }, {
        option: (r) => O(ot("mobMenTionItem"), {
          item: r,
          controller: this.controller.mention
        }, null)
      })]
    }), O(ot("van-popup"), {
      show: this.showMkPopup,
      "onUpdate:show": (r) => this.showMkPopup = r,
      round: !0,
      position: "bottom"
    }, {
      default: () => [O(ot("van-picker"), {
        columns: this.markerItems,
        "confirm-button-text": ibiz.i18n.t("editor.common.confirm"),
        onCancel: this.onMarkerCancel,
        onConfirm: this.onMarkerConfirm
      }, {
        option: (r) => O(ot("mobMarkerItem"), {
          item: r,
          controller: this.controller.marker
        }, null)
      })]
    })]);
  }
}), Ri = /* @__PURE__ */ cn({
  name: "IBizMobReplyComment",
  props: Bi(),
  emits: Ui(),
  setup(r, {
    emit: t
  }) {
    const e = an("mob-comment"), s = r.controller, n = G(null), i = G(null), o = ibiz.i18n.getLang();
    let a;
    const c = G(!1), h = G({
      Authorization: "Bearer ".concat(zi(Pi.TOKEN))
    }), m = G(""), b = G(""), d = G(!1), p = G(!1), g = G([]), w = G([]), v = G(""), E = G(""), x = (C) => {
      const L = C.ops.find((S) => S.insert && S.insert.image);
      if (L)
        return L.insert.image;
    }, T = () => {
      let C = "";
      return s.valueMode === "text" && (C = a.getText()), C = a.getSemanticHTML(), C = s.transformHtml(C), C;
    }, I = async (C) => {
      const L = ji(C), S = await ibiz.util.file.fileUpload(m.value, L, h.value), K = b.value.replace("%fileId%", S.fileid), P = T();
      t("change", P.replace(C, K));
    }, q = (C = v.value) => {
      const L = a.getSelection(), S = a.clipboard.convert({
        html: "".concat(C, "<p><br></p>"),
        text: "\n"
      });
      a.setContents(S), L && a.setSelection(L.index + 1, "user");
    }, B = ({
      selectedOptions: C
    }) => {
      const L = C[0];
      if (!L)
        return;
      const S = a.getSelection(!0), K = S.index + S.length, P = JSON.stringify(L);
      a.insertText(K, "@".concat(L.name), "mention", P, "user"), a.setSelection(K + L.name.length + 1, "user"), d.value = !1;
    }, D = async () => {
      const C = s.mention.getMentionLogic();
      if (C) {
        const L = await s.openPickUpView(r.data, C);
        if (L && L[0]) {
          const S = L[0]._deData;
          B({
            selectedOptions: [{
              ...S,
              value: S.id
            }]
          });
        }
      } else
        g.value = await s.getMentions(r.data), d.value = !0;
    }, z = ({
      selectedOptions: C
    }) => {
      const L = s.marker.getSelection(C[0]);
      if (!L)
        return;
      const S = a.getSelection(!0), K = S.index + S.length, P = JSON.stringify(L);
      a.insertText(K, "".concat(L.name), "marker", P, "user"), a.setSelection(K + L.name.length + 1, "user"), p.value = !1;
    }, it = async () => {
      const C = s.marker.getMarkerLogic();
      if (C) {
        const L = await s.openPickUpView(r.data, C);
        if (L && L[0]) {
          const S = s.marker.toUIData(L);
          z({
            selectedOptions: S
          });
        }
      } else
        w.value = await s.getMarkers(r.data), p.value = !0;
    }, dt = () => {
      d.value = !1, q();
    }, Nt = () => {
      p.value = !1, q();
    }, At = (C) => {
      let L = !0;
      const S = C.ops.find((P) => P.insert);
      if (S) {
        const P = S.insert;
        if (P === "@") {
          const V = a.getSelection(!0);
          a.deleteText(V.index, 1, "user"), D(), L = !1;
        }
        if (P === "#") {
          const V = a.getSelection(!0);
          a.deleteText(V.index, 1, "user"), it(), L = !1;
        }
      }
      if (C.ops.find((P) => P.delete)) {
        const P = a.getSelection(!0);
        a.getContents(P.index - 1, 1).ops.some(($) => {
          var Bt;
          return (Bt = $.attributes) == null ? void 0 : Bt.marker;
        }) && (a.deleteText(P.index - 1, 1, "user"), L = !1);
      }
      return L;
    }, Jt = () => {
      if (!n.value)
        return;
      const C = s.showToolbar ? "snow" : "bubble";
      Object.assign(s.modules, {
        toolbar: i.value
      }), a = new N(n.value, {
        theme: C,
        modules: s.modules,
        readOnly: r.disabled || r.readonly,
        placeholder: s.placeHolder
      }), a.on("text-change", (L, S, K) => {
        if (K === "user" && At(L)) {
          const V = x(L);
          if (V && s.imageMode === "file") {
            I(V);
            return;
          }
          t("change", T());
        }
      }), a.on("selection-change", (L) => {
        L ? (c.value = !0, t("focus")) : (c.value = !1, t("blur"));
      }), s.valueMode === "text" && a.setText(r.value || "");
    };
    De(() => r.value, () => {
      if (r.value) {
        v.value = s.transformDelta(r.value);
        const C = a.getSemanticHTML();
        v.value !== C && q();
      } else
        v.value = "", a && q();
    }, {
      immediate: !0
    }), De(() => [r.disabled, r.readonly], () => {
      a && (r.disabled || r.readonly ? a.enable(!1) : a.enable());
    }, {
      immediate: !0
    }), De(() => r.data, (C) => {
      if (C) {
        const L = ibiz.util.file.calcFileUpDownUrl(s.context, s.params, C, s.editorParams);
        m.value = L.uploadUrl, b.value = L.downloadUrl;
      }
    }, {
      immediate: !0,
      deep: !0
    }), Hi(() => {
      Jt();
    });
    const _t = (C) => {
      const {
        eventArg: L
      } = C;
      E.value = L, s.reply = L, a.setSelection(0, "silent");
    }, mt = () => {
      E.value = "", s.reply = "";
    }, zt = () => {
      a.setSelection(0, "silent");
    };
    return s.evt.on("onSetReply", _t), s.evt.on("onRemoveReply", mt), s.evt.on("focus", zt), $i(() => {
      s.evt.off("onSetReply", _t), s.evt.off("onRemoveReply", mt), s.evt.off("focus", zt);
    }), {
      ns: e,
      lang: o,
      editing: c,
      editorRef: n,
      toolbarRef: i,
      showAtPopup: d,
      showMkPopup: p,
      mentionItems: g,
      markerItems: w,
      curValue: v,
      handleMentionClick: D,
      handleMarkerClick: it,
      onMentionCancel: dt,
      onMentionConfirm: B,
      onMarkerCancel: Nt,
      onMarkerConfirm: z,
      renderReply: () => {
        if (E.value) {
          const C = ws.execScriptFn({
            value: E.value
          }, s.replyScript, {
            singleRowReturn: !0,
            isAsync: !1
          });
          return O("div", {
            class: e.b("reply")
          }, [O("div", {
            class: e.be("reply", "content"),
            innerHTML: C
          }, null), O(ot("ion-icon"), {
            name: "close-outline",
            onClick: () => mt()
          }, null)]);
        }
      }
    };
  },
  render() {
    return O("div", {
      class: [this.ns.b(), this.disabled ? this.ns.m("disabled") : "", this.readonly ? this.ns.m("readonly") : "", this.ns.m(this.lang.toLowerCase()), this.ns.is("editing", this.editing), this.ns.is("reply", !0)]
    }, [O("div", {
      class: this.ns.e("content")
    }, [O("div", {
      class: this.ns.e("ql-toolbar"),
      ref: "toolbarRef"
    }, [O("button", {
      class: "ql-bold"
    }, null), O("button", {
      class: "ql-italic"
    }, null), O("button", {
      class: "ql-underline"
    }, null), O("button", {
      class: "ql-strike"
    }, null), O("button", {
      class: "ql-code-block"
    }, null), O("button", {
      class: "ql-list",
      value: "ordered"
    }, null), O("button", {
      class: "ql-list",
      value: "bullet"
    }, null), O("button", {
      class: "ql-mention",
      onClick: this.handleMentionClick
    }, [O("svg", {
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "4218",
      width: "200",
      height: "200"
    }, [O("path", {
      d: "M23.7 555c0-339.3 247-550 533.8-550 295.6 0 442.8 165.9 442.8 401.6 0 210.8-93.5 361.7-237 361.7-63.6 0-108.5-26.2-137.2-78.6-48.6 51.1-96 79.8-174.6 79.8-116 0-178.4-77.3-178.4-193.3 0-209.5 131-323 251.9-323 64.9 0 102.3 24.9 122.2 68.6l11.2-58.6 114.7 1.2L727 510.1c-7.5 36.2-11.2 63.6-11.2 81.1 0 44.9 22.5 71.1 56.1 71.1 63.6 0 106-89.8 106-243.2 0-205.8-114.7-300.6-323-300.6-220.8 0-405.4 163.4-405.4 436.5 0 238.2 132.2 350.5 390.4 350.5 94.8 0 174.6-12.5 255.7-36.2v109.8c-88.6 26.2-177.1 39.9-263.2 39.9-329.1 0-508.7-168.4-508.7-464z m585-44.9c3.7-20 6.2-39.9 6.2-53.6 0-56.1-15-96-83.6-96-83.6 0-133.5 108.5-133.5 212 0 44.9 13.7 88.6 77.3 88.6 73.7-0.1 114.9-57.4 133.6-151z",
      fill: "currentColot",
      "p-id": "4219"
    }, null)])]), O("button", {
      class: "ql-marker",
      onClick: this.handleMarkerClick
    }, [O("svg", {
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "6854",
      width: "200",
      height: "200"
    }, [O("path", {
      d: "M929.28 625.664l-234.496 0.512 24.064-229.888 210.432-0.512c20.992 0 38.4-17.408 38.4-38.4s-17.408-38.4-38.4-38.4H727.04l29.184-275.456c2.048-20.992-13.312-39.936-34.304-41.984-20.992-2.048-39.936 13.312-41.984 34.304L650.24 318.976l-232.448 0.512 29.184-275.456c2.048-20.992-13.312-39.936-34.304-41.984-20.992-2.048-39.936 13.312-41.984 34.304l-29.696 283.648-246.272 0.512c-20.992 0-38.4 17.408-38.4 38.4s17.408 38.4 38.4 38.4l238.08-0.512-24.064 229.888-214.016 0.512c-20.992 0-38.4 17.408-38.4 38.4s17.408 38.4 38.4 38.4l205.824-0.512-29.184 276.992c-2.048 20.992 13.312 39.936 34.304 41.984h4.096c19.456 0 35.84-14.848 37.888-34.304l30.208-285.184 232.448-0.512-29.184 277.504c-2.048 20.992 13.312 39.936 34.304 41.984h4.096c19.456 0 35.84-14.848 38.4-34.304l30.208-285.184 242.688-0.512c20.992 0 38.4-17.408 38.4-38.4-1.536-20.992-18.944-37.888-39.936-37.888z m-544.256 0.512l24.064-229.888 232.448-0.512-24.064 229.888-232.448 0.512z",
      fill: "currentColot",
      "p-id": "6855"
    }, null)])])]), O("div", {
      class: this.ns.e("ql-content"),
      ref: "editorRef"
    }, [this.controller.valueMode === "html" ? O("div", {
      innerHTML: this.curValue
    }, null) : null]), this.renderReply()]), O(ot("van-popup"), {
      show: this.showAtPopup,
      "onUpdate:show": (r) => this.showAtPopup = r,
      round: !0,
      position: "bottom"
    }, {
      default: () => [O(ot("van-picker"), {
        columns: this.mentionItems,
        "confirm-button-text": ibiz.i18n.t("editor.common.confirm"),
        onCancel: this.onMentionCancel,
        onConfirm: this.onMentionConfirm
      }, {
        option: (r) => O(ot("mobMenTionItem"), {
          item: r,
          controller: this.controller.mention
        }, null)
      })]
    }), O(ot("van-popup"), {
      show: this.showMkPopup,
      "onUpdate:show": (r) => this.showMkPopup = r,
      round: !0,
      position: "bottom"
    }, {
      default: () => [O(ot("van-picker"), {
        columns: this.markerItems,
        "confirm-button-text": ibiz.i18n.t("editor.common.confirm"),
        onCancel: this.onMarkerCancel,
        onConfirm: this.onMarkerConfirm
      }, {
        option: (r) => O(ot("mobMarkerItem"), {
          item: r,
          controller: this.controller.marker
        }, null)
      })]
    })]);
  }
});
const Mi = /* @__PURE__ */ cn({
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
    const t = an("mob-mention-item"), e = r.controller, s = G([]), n = lr(() => Br.stringToHexColor(r.item.name)), i = lr(() => Br.avatarName(r.item.name)), o = (h) => {
      if (!h)
        return null;
      const m = JSON.parse(h);
      if (m.length === 0)
        return null;
      const {
        downloadUrl: b
      } = ibiz.util.file.calcFileUpDownUrl(e.context, e.params, e.editorParams);
      return b.replace("%fileId%", m[0].id);
    }, a = lr(() => {
      let h = "";
      if (e.operatorMap.has(r.item.id)) {
        const m = e.operatorMap.get(r.item.id);
        m.data.iconurl && (h = o(m.data.iconurl) || "");
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
    return O("div", {
      class: this.ns.b()
    }, [O("div", {
      class: this.ns.e("avatar"),
      style: "background: ".concat(this.avatarBg, ";")
    }, [this.url && !this.errorLoadItems.includes(this.url) ? O("img", {
      src: this.url,
      onError: () => this.avatarLoadError(this.url)
    }, null) : this.avatarName]), O("div", {
      class: this.ns.e("name")
    }, [this.item.name])]);
  }
});
const _i = /* @__PURE__ */ cn({
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
    const t = an("mob-marker-item"), e = r.controller;
    return {
      ns: t,
      renderContent: (n, i) => {
        if (e.quoteCodelistMap.has(n)) {
          const o = e.quoteCodelistMap.get(n);
          return O(ot("iBizCodeList"), {
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
    return O("div", {
      class: this.ns.b()
    }, [O("div", {
      class: this.ns.e("type")
    }, [this.renderContent("type", this.item.type)]), O("div", {
      class: this.ns.e("identifier")
    }, [this.renderContent("identifier", this.item.identifier)]), O("div", {
      class: this.ns.e("name"),
      title: this.item.name
    }, [this.renderContent("name", this.item.name)])]);
  }
}), Nc = Rl(
  br,
  function(r) {
    r.component(br.name, br), r.component(Ri.name, Ri), r.component(Mi.name, Mi), r.component(_i.name, _i), ei(
      "MOBHTMLTEXT_COMMENT",
      () => new Ii()
    ), ei(
      "MOBHTMLTEXT_REPLY_COMMENT",
      () => new Ii("REPLY")
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
