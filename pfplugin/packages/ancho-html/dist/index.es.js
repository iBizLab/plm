import './style.css';
var ue = Object.defineProperty;
var ce = (e, r, a) => r in e ? ue(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a;
var Q = (e, r, a) => (ce(e, typeof r != "symbol" ? r + "" : r, a), a);
import { ScriptFactory as de, EditorController as pe, PluginStaticResource as ge, registerEditorProvider as fe } from "@ibiz-template/runtime";
import { defineComponent as se, ref as $, watch as ie, createVNode as I, resolveComponent as V, nextTick as ee, computed as be } from "vue";
import { useNamespace as oe, getRawProps as he, getEditorEmits as me } from "@ibiz-template/vue3-util";
import { createUUID as ne } from "qx-util";
var ae = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ye(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var le = { exports: {} };
(function(e) {
  var r = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */
  var a = function(u) {
    var c = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, S = 0, w = {}, o = {
      /**
       * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
       * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
       * additional languages or plugins yourself.
       *
       * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
       *
       * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.manual = true;
       * // add a new <script> to load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      manual: u.Prism && u.Prism.manual,
      /**
       * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
       * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
       * own worker, you don't want it to do this.
       *
       * By setting this value to `true`, Prism will not add its own listeners to the worker.
       *
       * You obviously have to change this value before Prism executes. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.disableWorkerMessageHandler = true;
       * // Load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      disableWorkerMessageHandler: u.Prism && u.Prism.disableWorkerMessageHandler,
      /**
       * A namespace for utility methods.
       *
       * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
       * change or disappear at any time.
       *
       * @namespace
       * @memberof Prism
       */
      util: {
        encode: function t(n) {
          return n instanceof g ? new g(n.type, t(n.content), n.alias) : Array.isArray(n) ? n.map(t) : n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
        },
        /**
         * Returns the name of the type of the given value.
         *
         * @param {any} o
         * @returns {string}
         * @example
         * type(null)      === 'Null'
         * type(undefined) === 'Undefined'
         * type(123)       === 'Number'
         * type('foo')     === 'String'
         * type(true)      === 'Boolean'
         * type([1, 2])    === 'Array'
         * type({})        === 'Object'
         * type(String)    === 'Function'
         * type(/abc+/)    === 'RegExp'
         */
        type: function(t) {
          return Object.prototype.toString.call(t).slice(8, -1);
        },
        /**
         * Returns a unique number for the given object. Later calls will still return the same number.
         *
         * @param {Object} obj
         * @returns {number}
         */
        objId: function(t) {
          return t.__id || Object.defineProperty(t, "__id", { value: ++S }), t.__id;
        },
        /**
         * Creates a deep clone of the given object.
         *
         * The main intended use of this function is to clone language definitions.
         *
         * @param {T} o
         * @param {Record<number, any>} [visited]
         * @returns {T}
         * @template T
         */
        clone: function t(n, s) {
          s = s || {};
          var i, l;
          switch (o.util.type(n)) {
            case "Object":
              if (l = o.util.objId(n), s[l])
                return s[l];
              i = /** @type {Record<string, any>} */
              {}, s[l] = i;
              for (var E in n)
                n.hasOwnProperty(E) && (i[E] = t(n[E], s));
              return (
                /** @type {any} */
                i
              );
            case "Array":
              return l = o.util.objId(n), s[l] ? s[l] : (i = [], s[l] = i, /** @type {Array} */
              /** @type {any} */
              n.forEach(function(_, y) {
                i[y] = t(_, s);
              }), /** @type {any} */
              i);
            default:
              return n;
          }
        },
        /**
         * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
         *
         * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
         *
         * @param {Element} element
         * @returns {string}
         */
        getLanguage: function(t) {
          for (; t; ) {
            var n = c.exec(t.className);
            if (n)
              return n[1].toLowerCase();
            t = t.parentElement;
          }
          return "none";
        },
        /**
         * Sets the Prism `language-xxxx` class of the given element.
         *
         * @param {Element} element
         * @param {string} language
         * @returns {void}
         */
        setLanguage: function(t, n) {
          t.className = t.className.replace(RegExp(c, "gi"), ""), t.classList.add("language-" + n);
        },
        /**
         * Returns the script element that is currently executing.
         *
         * This does __not__ work for line script element.
         *
         * @returns {HTMLScriptElement | null}
         */
        currentScript: function() {
          if (typeof document > "u")
            return null;
          if ("currentScript" in document && 1 < 2)
            return (
              /** @type {any} */
              document.currentScript
            );
          try {
            throw new Error();
          } catch (i) {
            var t = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(i.stack) || [])[1];
            if (t) {
              var n = document.getElementsByTagName("script");
              for (var s in n)
                if (n[s].src == t)
                  return n[s];
            }
            return null;
          }
        },
        /**
         * Returns whether a given class is active for `element`.
         *
         * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
         * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
         * given class is just the given class with a `no-` prefix.
         *
         * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
         * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
         * ancestors have the given class or the negated version of it, then the default activation will be returned.
         *
         * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
         * version of it, the class is considered active.
         *
         * @param {Element} element
         * @param {string} className
         * @param {boolean} [defaultActivation=false]
         * @returns {boolean}
         */
        isActive: function(t, n, s) {
          for (var i = "no-" + n; t; ) {
            var l = t.classList;
            if (l.contains(n))
              return !0;
            if (l.contains(i))
              return !1;
            t = t.parentElement;
          }
          return !!s;
        }
      },
      /**
       * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
       *
       * @namespace
       * @memberof Prism
       * @public
       */
      languages: {
        /**
         * The grammar for plain, unformatted text.
         */
        plain: w,
        plaintext: w,
        text: w,
        txt: w,
        /**
         * Creates a deep copy of the language with the given id and appends the given tokens.
         *
         * If a token in `redef` also appears in the copied language, then the existing token in the copied language
         * will be overwritten at its original position.
         *
         * ## Best practices
         *
         * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
         * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
         * understand the language definition because, normally, the order of tokens matters in Prism grammars.
         *
         * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
         * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
         *
         * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
         * @param {Grammar} redef The new tokens to append.
         * @returns {Grammar} The new language created.
         * @public
         * @example
         * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
         *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
         *     // at its original position
         *     'comment': { ... },
         *     // CSS doesn't have a 'color' token, so this token will be appended
         *     'color': /\b(?:red|green|blue)\b/
         * });
         */
        extend: function(t, n) {
          var s = o.util.clone(o.languages[t]);
          for (var i in n)
            s[i] = n[i];
          return s;
        },
        /**
         * Inserts tokens _before_ another token in a language definition or any other grammar.
         *
         * ## Usage
         *
         * This helper method makes it easy to modify existing languages. For example, the CSS language definition
         * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
         * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
         * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
         * this:
         *
         * ```js
         * Prism.languages.markup.style = {
         *     // token
         * };
         * ```
         *
         * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
         * before existing tokens. For the CSS example above, you would use it like this:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'cdata', {
         *     'style': {
         *         // token
         *     }
         * });
         * ```
         *
         * ## Special cases
         *
         * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
         * will be ignored.
         *
         * This behavior can be used to insert tokens after `before`:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'comment', {
         *     'comment': Prism.languages.markup.comment,
         *     // tokens after 'comment'
         * });
         * ```
         *
         * ## Limitations
         *
         * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
         * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
         * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
         * deleting properties which is necessary to insert at arbitrary positions.
         *
         * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
         * Instead, it will create a new object and replace all references to the target object with the new one. This
         * can be done without temporarily deleting properties, so the iteration order is well-defined.
         *
         * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
         * you hold the target object in a variable, then the value of the variable will not change.
         *
         * ```js
         * var oldMarkup = Prism.languages.markup;
         * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
         *
         * assert(oldMarkup !== Prism.languages.markup);
         * assert(newMarkup === Prism.languages.markup);
         * ```
         *
         * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
         * object to be modified.
         * @param {string} before The key to insert before.
         * @param {Grammar} insert An object containing the key-value pairs to be inserted.
         * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
         * object to be modified.
         *
         * Defaults to `Prism.languages`.
         * @returns {Grammar} The new grammar object.
         * @public
         */
        insertBefore: function(t, n, s, i) {
          i = i || /** @type {any} */
          o.languages;
          var l = i[t], E = {};
          for (var _ in l)
            if (l.hasOwnProperty(_)) {
              if (_ == n)
                for (var y in s)
                  s.hasOwnProperty(y) && (E[y] = s[y]);
              s.hasOwnProperty(_) || (E[_] = l[_]);
            }
          var F = i[t];
          return i[t] = E, o.languages.DFS(o.languages, function(N, U) {
            U === F && N != t && (this[N] = E);
          }), E;
        },
        // Traverse a language definition with Depth First Search
        DFS: function t(n, s, i, l) {
          l = l || {};
          var E = o.util.objId;
          for (var _ in n)
            if (n.hasOwnProperty(_)) {
              s.call(n, _, n[_], i || _);
              var y = n[_], F = o.util.type(y);
              F === "Object" && !l[E(y)] ? (l[E(y)] = !0, t(y, s, null, l)) : F === "Array" && !l[E(y)] && (l[E(y)] = !0, t(y, s, _, l));
            }
        }
      },
      plugins: {},
      /**
       * This is the most high-level function in Prism’s API.
       * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
       * each one of them.
       *
       * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
       *
       * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
       * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
       * @memberof Prism
       * @public
       */
      highlightAll: function(t, n) {
        o.highlightAllUnder(document, t, n);
      },
      /**
       * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
       * {@link Prism.highlightElement} on each one of them.
       *
       * The following hooks will be run:
       * 1. `before-highlightall`
       * 2. `before-all-elements-highlight`
       * 3. All hooks of {@link Prism.highlightElement} for each element.
       *
       * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
       * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
       * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
       * @memberof Prism
       * @public
       */
      highlightAllUnder: function(t, n, s) {
        var i = {
          callback: s,
          container: t,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        o.hooks.run("before-highlightall", i), i.elements = Array.prototype.slice.apply(i.container.querySelectorAll(i.selector)), o.hooks.run("before-all-elements-highlight", i);
        for (var l = 0, E; E = i.elements[l++]; )
          o.highlightElement(E, n === !0, i.callback);
      },
      /**
       * Highlights the code inside a single element.
       *
       * The following hooks will be run:
       * 1. `before-sanity-check`
       * 2. `before-highlight`
       * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
       * 4. `before-insert`
       * 5. `after-highlight`
       * 6. `complete`
       *
       * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
       * the element's language.
       *
       * @param {Element} element The element containing the code.
       * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
       * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
       * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
       * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
       *
       * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
       * asynchronous highlighting to work. You can build your own bundle on the
       * [Download page](https://prismjs.com/download.html).
       * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
       * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
       * @memberof Prism
       * @public
       */
      highlightElement: function(t, n, s) {
        var i = o.util.getLanguage(t), l = o.languages[i];
        o.util.setLanguage(t, i);
        var E = t.parentElement;
        E && E.nodeName.toLowerCase() === "pre" && o.util.setLanguage(E, i);
        var _ = t.textContent, y = {
          element: t,
          language: i,
          grammar: l,
          code: _
        };
        function F(U) {
          y.highlightedCode = U, o.hooks.run("before-insert", y), y.element.innerHTML = y.highlightedCode, o.hooks.run("after-highlight", y), o.hooks.run("complete", y), s && s.call(y.element);
        }
        if (o.hooks.run("before-sanity-check", y), E = y.element.parentElement, E && E.nodeName.toLowerCase() === "pre" && !E.hasAttribute("tabindex") && E.setAttribute("tabindex", "0"), !y.code) {
          o.hooks.run("complete", y), s && s.call(y.element);
          return;
        }
        if (o.hooks.run("before-highlight", y), !y.grammar) {
          F(o.util.encode(y.code));
          return;
        }
        if (n && u.Worker) {
          var N = new Worker(o.filename);
          N.onmessage = function(U) {
            F(U.data);
          }, N.postMessage(JSON.stringify({
            language: y.language,
            code: y.code,
            immediateClose: !0
          }));
        } else
          F(o.highlight(y.code, y.grammar, y.language));
      },
      /**
       * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
       * and the language definitions to use, and returns a string with the HTML produced.
       *
       * The following hooks will be run:
       * 1. `before-tokenize`
       * 2. `after-tokenize`
       * 3. `wrap`: On each {@link Token}.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @param {string} language The name of the language definition passed to `grammar`.
       * @returns {string} The highlighted HTML.
       * @memberof Prism
       * @public
       * @example
       * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
       */
      highlight: function(t, n, s) {
        var i = {
          code: t,
          grammar: n,
          language: s
        };
        if (o.hooks.run("before-tokenize", i), !i.grammar)
          throw new Error('The language "' + i.language + '" has no grammar.');
        return i.tokens = o.tokenize(i.code, i.grammar), o.hooks.run("after-tokenize", i), g.stringify(o.util.encode(i.tokens), i.language);
      },
      /**
       * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
       * and the language definitions to use, and returns an array with the tokenized code.
       *
       * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
       *
       * This method could be useful in other contexts as well, as a very crude parser.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @returns {TokenStream} An array of strings and tokens, a token stream.
       * @memberof Prism
       * @public
       * @example
       * let code = `var foo = 0;`;
       * let tokens = Prism.tokenize(code, Prism.languages.javascript);
       * tokens.forEach(token => {
       *     if (token instanceof Prism.Token && token.type === 'number') {
       *         console.log(`Found numeric literal: ${token.content}`);
       *     }
       * });
       */
      tokenize: function(t, n) {
        var s = n.rest;
        if (s) {
          for (var i in s)
            n[i] = s[i];
          delete n.rest;
        }
        var l = new f();
        return b(l, l.head, t), h(t, l, n, l.head, 0), k(l);
      },
      /**
       * @namespace
       * @memberof Prism
       * @public
       */
      hooks: {
        all: {},
        /**
         * Adds the given callback to the list of callbacks for the given hook.
         *
         * The callback will be invoked when the hook it is registered for is run.
         * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
         *
         * One callback function can be registered to multiple hooks and the same hook multiple times.
         *
         * @param {string} name The name of the hook.
         * @param {HookCallback} callback The callback function which is given environment variables.
         * @public
         */
        add: function(t, n) {
          var s = o.hooks.all;
          s[t] = s[t] || [], s[t].push(n);
        },
        /**
         * Runs a hook invoking all registered callbacks with the given environment variables.
         *
         * Callbacks will be invoked synchronously and in the order in which they were registered.
         *
         * @param {string} name The name of the hook.
         * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
         * @public
         */
        run: function(t, n) {
          var s = o.hooks.all[t];
          if (!(!s || !s.length))
            for (var i = 0, l; l = s[i++]; )
              l(n);
        }
      },
      Token: g
    };
    u.Prism = o;
    function g(t, n, s, i) {
      this.type = t, this.content = n, this.alias = s, this.length = (i || "").length | 0;
    }
    g.stringify = function t(n, s) {
      if (typeof n == "string")
        return n;
      if (Array.isArray(n)) {
        var i = "";
        return n.forEach(function(F) {
          i += t(F, s);
        }), i;
      }
      var l = {
        type: n.type,
        content: t(n.content, s),
        tag: "span",
        classes: ["token", n.type],
        attributes: {},
        language: s
      }, E = n.alias;
      E && (Array.isArray(E) ? Array.prototype.push.apply(l.classes, E) : l.classes.push(E)), o.hooks.run("wrap", l);
      var _ = "";
      for (var y in l.attributes)
        _ += " " + y + '="' + (l.attributes[y] || "").replace(/"/g, "&quot;") + '"';
      return "<" + l.tag + ' class="' + l.classes.join(" ") + '"' + _ + ">" + l.content + "</" + l.tag + ">";
    };
    function m(t, n, s, i) {
      t.lastIndex = n;
      var l = t.exec(s);
      if (l && i && l[1]) {
        var E = l[1].length;
        l.index += E, l[0] = l[0].slice(E);
      }
      return l;
    }
    function h(t, n, s, i, l, E) {
      for (var _ in s)
        if (!(!s.hasOwnProperty(_) || !s[_])) {
          var y = s[_];
          y = Array.isArray(y) ? y : [y];
          for (var F = 0; F < y.length; ++F) {
            if (E && E.cause == _ + "," + F)
              return;
            var N = y[F], U = N.inside, G = !!N.lookbehind, W = !!N.greedy, K = N.alias;
            if (W && !N.pattern.global) {
              var X = N.pattern.toString().match(/[imsuy]*$/)[0];
              N.pattern = RegExp(N.pattern.source, X + "g");
            }
            for (var Y = N.pattern || N, C = i.next, R = l; C !== n.tail && !(E && R >= E.reach); R += C.value.length, C = C.next) {
              var D = C.value;
              if (n.length > t.length)
                return;
              if (!(D instanceof g)) {
                var z = 1, M;
                if (W) {
                  if (M = m(Y, R, t, G), !M || M.index >= t.length)
                    break;
                  var d = M.index, J = M.index + M[0].length, H = R;
                  for (H += C.value.length; d >= H; )
                    C = C.next, H += C.value.length;
                  if (H -= C.value.length, R = H, C.value instanceof g)
                    continue;
                  for (var p = C; p !== n.tail && (H < J || typeof p.value == "string"); p = p.next)
                    z++, H += p.value.length;
                  z--, D = t.slice(R, H), M.index -= R;
                } else if (M = m(Y, 0, D, G), !M)
                  continue;
                var d = M.index, v = M[0], L = D.slice(0, d), B = D.slice(d + v.length), P = R + D.length;
                E && P > E.reach && (E.reach = P);
                var j = C.prev;
                L && (j = b(n, j, L), R += L.length), A(n, j, z);
                var Z = new g(_, U ? o.tokenize(v, U) : v, K, v);
                if (C = b(n, j, Z), B && b(n, C, B), z > 1) {
                  var q = {
                    cause: _ + "," + F,
                    reach: P
                  };
                  h(t, n, s, C.prev, R, q), E && q.reach > E.reach && (E.reach = q.reach);
                }
              }
            }
          }
        }
    }
    function f() {
      var t = { value: null, prev: null, next: null }, n = { value: null, prev: t, next: null };
      t.next = n, this.head = t, this.tail = n, this.length = 0;
    }
    function b(t, n, s) {
      var i = n.next, l = { value: s, prev: n, next: i };
      return n.next = l, i.prev = l, t.length++, l;
    }
    function A(t, n, s) {
      for (var i = n.next, l = 0; l < s && i !== t.tail; l++)
        i = i.next;
      n.next = i, i.prev = n, t.length -= l;
    }
    function k(t) {
      for (var n = [], s = t.head.next; s !== t.tail; )
        n.push(s.value), s = s.next;
      return n;
    }
    if (!u.document)
      return u.addEventListener && (o.disableWorkerMessageHandler || u.addEventListener("message", function(t) {
        var n = JSON.parse(t.data), s = n.language, i = n.code, l = n.immediateClose;
        u.postMessage(o.highlight(i, o.languages[s], s)), l && u.close();
      }, !1)), o;
    var T = o.util.currentScript();
    T && (o.filename = T.src, T.hasAttribute("data-manual") && (o.manual = !0));
    function O() {
      o.manual || o.highlightAll();
    }
    if (!o.manual) {
      var x = document.readyState;
      x === "loading" || x === "interactive" && T && T.defer ? document.addEventListener("DOMContentLoaded", O) : window.requestAnimationFrame ? window.requestAnimationFrame(O) : window.setTimeout(O, 16);
    }
    return o;
  }(r);
  e.exports && (e.exports = a), typeof ae < "u" && (ae.Prism = a);
})(le);
var Ee = le.exports;
const we = /* @__PURE__ */ ye(Ee);
Prism.languages.markup = {
  comment: {
    pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
    greedy: !0
  },
  prolog: {
    pattern: /<\?[\s\S]+?\?>/,
    greedy: !0
  },
  doctype: {
    // https://www.w3.org/TR/xml/#NT-doctypedecl
    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: !0,
    inside: {
      "internal-subset": {
        pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
        lookbehind: !0,
        greedy: !0,
        inside: null
        // see below
      },
      string: {
        pattern: /"[^"]*"|'[^']*'/,
        greedy: !0
      },
      punctuation: /^<!|>$|[[\]]/,
      "doctype-tag": /^DOCTYPE/i,
      name: /[^\s<>'"]+/
    }
  },
  cdata: {
    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
    greedy: !0
  },
  tag: {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: !0,
    inside: {
      tag: {
        pattern: /^<\/?[^\s>\/]+/,
        inside: {
          punctuation: /^<\/?/,
          namespace: /^[^\s>\/:]+:/
        }
      },
      "special-attr": [],
      "attr-value": {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
          punctuation: [
            {
              pattern: /^=/,
              alias: "attr-equals"
            },
            {
              pattern: /^(\s*)["']|["']$/,
              lookbehind: !0
            }
          ]
        }
      },
      punctuation: /\/?>/,
      "attr-name": {
        pattern: /[^\s>\/]+/,
        inside: {
          namespace: /^[^\s>\/:]+:/
        }
      }
    }
  },
  entity: [
    {
      pattern: /&[\da-z]{1,8};/i,
      alias: "named-entity"
    },
    /&#x?[\da-f]{1,8};/i
  ]
};
Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity;
Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup;
Prism.hooks.add("wrap", function(e) {
  e.type === "entity" && (e.attributes.title = e.content.replace(/&amp;/, "&"));
});
Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
  /**
   * Adds an inlined language to markup.
   *
   * An example of an inlined language is CSS with `<style>` tags.
   *
   * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addInlined('style', 'css');
   */
  value: function(r, a) {
    var u = {};
    u["language-" + a] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: !0,
      inside: Prism.languages[a]
    }, u.cdata = /^<!\[CDATA\[|\]\]>$/i;
    var c = {
      "included-cdata": {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: u
      }
    };
    c["language-" + a] = {
      pattern: /[\s\S]+/,
      inside: Prism.languages[a]
    };
    var S = {};
    S[r] = {
      pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
        return r;
      }), "i"),
      lookbehind: !0,
      greedy: !0,
      inside: c
    }, Prism.languages.insertBefore("markup", "cdata", S);
  }
});
Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
  /**
   * Adds an pattern to highlight languages embedded in HTML attributes.
   *
   * An example of an inlined language is CSS with `style` attributes.
   *
   * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addAttribute('style', 'css');
   */
  value: function(e, r) {
    Prism.languages.markup.tag.inside["special-attr"].push({
      pattern: RegExp(
        /(^|["'\s])/.source + "(?:" + e + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
        "i"
      ),
      lookbehind: !0,
      inside: {
        "attr-name": /^[^\s=]+/,
        "attr-value": {
          pattern: /=[\s\S]+/,
          inside: {
            value: {
              pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
              lookbehind: !0,
              alias: [r, "language-" + r],
              inside: Prism.languages[r]
            },
            punctuation: [
              {
                pattern: /^=/,
                alias: "attr-equals"
              },
              /"|'/
            ]
          }
        }
      }
    });
  }
});
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;
Prism.languages.xml = Prism.languages.extend("markup", {});
Prism.languages.ssml = Prism.languages.xml;
Prism.languages.atom = Prism.languages.xml;
Prism.languages.rss = Prism.languages.xml;
(function(e) {
  var r = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
  e.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
      pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + r.source + ")*?" + /(?:;|(?=\s*\{))/.source),
      inside: {
        rule: /^@[\w-]+/,
        "selector-function-argument": {
          pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
          lookbehind: !0,
          alias: "selector"
        },
        keyword: {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: !0
        }
        // See rest below
      }
    },
    url: {
      // https://drafts.csswg.org/css-values-3/#urls
      pattern: RegExp("\\burl\\((?:" + r.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
      greedy: !0,
      inside: {
        function: /^url/i,
        punctuation: /^\(|\)$/,
        string: {
          pattern: RegExp("^" + r.source + "$"),
          alias: "url"
        }
      }
    },
    selector: {
      pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + r.source + ")*(?=\\s*\\{)"),
      lookbehind: !0
    },
    string: {
      pattern: r,
      greedy: !0
    },
    property: {
      pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
      lookbehind: !0
    },
    important: /!important\b/i,
    function: {
      pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
      lookbehind: !0
    },
    punctuation: /[(){};:,]/
  }, e.languages.css.atrule.inside.rest = e.languages.css;
  var a = e.languages.markup;
  a && (a.tag.addInlined("style", "css"), a.tag.addAttribute("style", "css"));
})(Prism);
Prism.languages.clike = {
  comment: [
    {
      pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
      lookbehind: !0,
      greedy: !0
    },
    {
      pattern: /(^|[^\\:])\/\/.*/,
      lookbehind: !0,
      greedy: !0
    }
  ],
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0
  },
  "class-name": {
    pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: !0,
    inside: {
      punctuation: /[.\\]/
    }
  },
  keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
  boolean: /\b(?:false|true)\b/,
  function: /\b\w+(?=\()/,
  number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  punctuation: /[{}[\];(),.:]/
};
Prism.languages.javascript = Prism.languages.extend("clike", {
  "class-name": [
    Prism.languages.clike["class-name"],
    {
      pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
      lookbehind: !0
    }
  ],
  keyword: [
    {
      pattern: /((?:^|\})\s*)catch\b/,
      lookbehind: !0
    },
    {
      pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: !0
    }
  ],
  // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
  function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  number: {
    pattern: RegExp(
      /(^|[^\w$])/.source + "(?:" + // constant
      (/NaN|Infinity/.source + "|" + // binary integer
      /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
      /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
      /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
      /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
      /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
    ),
    lookbehind: !0
  },
  operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});
Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
Prism.languages.insertBefore("javascript", "keyword", {
  regex: {
    pattern: RegExp(
      // lookbehind
      // eslint-disable-next-line regexp/no-dupe-characters-character-class
      /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
      // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
      // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
      // with the only syntax, so we have to define 2 different regex patterns.
      /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
      /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
      /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
    ),
    lookbehind: !0,
    greedy: !0,
    inside: {
      "regex-source": {
        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
        lookbehind: !0,
        alias: "language-regex",
        inside: Prism.languages.regex
      },
      "regex-delimiter": /^\/|\/$/,
      "regex-flags": /^[a-z]+$/
    }
  },
  // This must be declared before keyword because we use "function" inside the look-forward
  "function-variable": {
    pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
    alias: "function"
  },
  parameter: [
    {
      pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
      lookbehind: !0,
      inside: Prism.languages.javascript
    },
    {
      pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
      lookbehind: !0,
      inside: Prism.languages.javascript
    },
    {
      pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
      lookbehind: !0,
      inside: Prism.languages.javascript
    },
    {
      pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
      lookbehind: !0,
      inside: Prism.languages.javascript
    }
  ],
  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});
Prism.languages.insertBefore("javascript", "string", {
  hashbang: {
    pattern: /^#!.*/,
    greedy: !0,
    alias: "comment"
  },
  "template-string": {
    pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
    greedy: !0,
    inside: {
      "template-punctuation": {
        pattern: /^`|`$/,
        alias: "string"
      },
      interpolation: {
        pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
        lookbehind: !0,
        inside: {
          "interpolation-punctuation": {
            pattern: /^\$\{|\}$/,
            alias: "punctuation"
          },
          rest: Prism.languages.javascript
        }
      },
      string: /[\s\S]+/
    }
  },
  "string-property": {
    pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
    lookbehind: !0,
    greedy: !0,
    alias: "property"
  }
});
Prism.languages.insertBefore("javascript", "operator", {
  "literal-property": {
    pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
    lookbehind: !0,
    alias: "property"
  }
});
Prism.languages.markup && (Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.markup.tag.addAttribute(
  /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
  "javascript"
));
Prism.languages.js = Prism.languages.javascript;
(function(e) {
  var r = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
  function a(h) {
    return h = h.replace(/<inner>/g, function() {
      return r;
    }), RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + h + ")");
  }
  var u = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source, c = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function() {
    return u;
  }), S = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
  e.languages.markdown = e.languages.extend("markup", {}), e.languages.insertBefore("markdown", "prolog", {
    "front-matter-block": {
      pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
      lookbehind: !0,
      greedy: !0,
      inside: {
        punctuation: /^---|---$/,
        "front-matter": {
          pattern: /\S+(?:\s+\S+)*/,
          alias: ["yaml", "language-yaml"],
          inside: e.languages.yaml
        }
      }
    },
    blockquote: {
      // > ...
      pattern: /^>(?:[\t ]*>)*/m,
      alias: "punctuation"
    },
    table: {
      pattern: RegExp("^" + c + S + "(?:" + c + ")*", "m"),
      inside: {
        "table-data-rows": {
          pattern: RegExp("^(" + c + S + ")(?:" + c + ")*$"),
          lookbehind: !0,
          inside: {
            "table-data": {
              pattern: RegExp(u),
              inside: e.languages.markdown
            },
            punctuation: /\|/
          }
        },
        "table-line": {
          pattern: RegExp("^(" + c + ")" + S + "$"),
          lookbehind: !0,
          inside: {
            punctuation: /\||:?-{3,}:?/
          }
        },
        "table-header-row": {
          pattern: RegExp("^" + c + "$"),
          inside: {
            "table-header": {
              pattern: RegExp(u),
              alias: "important",
              inside: e.languages.markdown
            },
            punctuation: /\|/
          }
        }
      }
    },
    code: [
      {
        // Prefixed by 4 spaces or 1 tab and preceded by an empty line
        pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
        lookbehind: !0,
        alias: "keyword"
      },
      {
        // ```optional language
        // code block
        // ```
        pattern: /^```[\s\S]*?^```$/m,
        greedy: !0,
        inside: {
          "code-block": {
            pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
            lookbehind: !0
          },
          "code-language": {
            pattern: /^(```).+/,
            lookbehind: !0
          },
          punctuation: /```/
        }
      }
    ],
    title: [
      {
        // title 1
        // =======
        // title 2
        // -------
        pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
        alias: "important",
        inside: {
          punctuation: /==+$|--+$/
        }
      },
      {
        // # title 1
        // ###### title 6
        pattern: /(^\s*)#.+/m,
        lookbehind: !0,
        alias: "important",
        inside: {
          punctuation: /^#+|#+$/
        }
      }
    ],
    hr: {
      // ***
      // ---
      // * * *
      // -----------
      pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
      lookbehind: !0,
      alias: "punctuation"
    },
    list: {
      // * item
      // + item
      // - item
      // 1. item
      pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
      lookbehind: !0,
      alias: "punctuation"
    },
    "url-reference": {
      // [id]: http://example.com "Optional title"
      // [id]: http://example.com 'Optional title'
      // [id]: http://example.com (Optional title)
      // [id]: <http://example.com> "Optional title"
      pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
      inside: {
        variable: {
          pattern: /^(!?\[)[^\]]+/,
          lookbehind: !0
        },
        string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
        punctuation: /^[\[\]!:]|[<>]/
      },
      alias: "url"
    },
    bold: {
      // **strong**
      // __strong__
      // allow one nested instance of italic text using the same delimiter
      pattern: a(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),
      lookbehind: !0,
      greedy: !0,
      inside: {
        content: {
          pattern: /(^..)[\s\S]+(?=..$)/,
          lookbehind: !0,
          inside: {}
          // see below
        },
        punctuation: /\*\*|__/
      }
    },
    italic: {
      // *em*
      // _em_
      // allow one nested instance of bold text using the same delimiter
      pattern: a(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),
      lookbehind: !0,
      greedy: !0,
      inside: {
        content: {
          pattern: /(^.)[\s\S]+(?=.$)/,
          lookbehind: !0,
          inside: {}
          // see below
        },
        punctuation: /[*_]/
      }
    },
    strike: {
      // ~~strike through~~
      // ~strike~
      // eslint-disable-next-line regexp/strict
      pattern: a(/(~~?)(?:(?!~)<inner>)+\2/.source),
      lookbehind: !0,
      greedy: !0,
      inside: {
        content: {
          pattern: /(^~~?)[\s\S]+(?=\1$)/,
          lookbehind: !0,
          inside: {}
          // see below
        },
        punctuation: /~~?/
      }
    },
    "code-snippet": {
      // `code`
      // ``code``
      pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
      lookbehind: !0,
      greedy: !0,
      alias: ["code", "keyword"]
    },
    url: {
      // [example](http://example.com "Optional title")
      // [example][id]
      // [example] [id]
      pattern: a(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),
      lookbehind: !0,
      greedy: !0,
      inside: {
        operator: /^!/,
        content: {
          pattern: /(^\[)[^\]]+(?=\])/,
          lookbehind: !0,
          inside: {}
          // see below
        },
        variable: {
          pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
          lookbehind: !0
        },
        url: {
          pattern: /(^\]\()[^\s)]+/,
          lookbehind: !0
        },
        string: {
          pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
          lookbehind: !0
        }
      }
    }
  }), ["url", "bold", "italic", "strike"].forEach(function(h) {
    ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(f) {
      h !== f && (e.languages.markdown[h].inside.content.inside[f] = e.languages.markdown[f]);
    });
  }), e.hooks.add("after-tokenize", function(h) {
    if (h.language !== "markdown" && h.language !== "md")
      return;
    function f(b) {
      if (!(!b || typeof b == "string"))
        for (var A = 0, k = b.length; A < k; A++) {
          var T = b[A];
          if (T.type !== "code") {
            f(T.content);
            continue;
          }
          var O = T.content[1], x = T.content[3];
          if (O && x && O.type === "code-language" && x.type === "code-block" && typeof O.content == "string") {
            var t = O.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp");
            t = (/[a-z][\w-]*/i.exec(t) || [""])[0].toLowerCase();
            var n = "language-" + t;
            x.alias ? typeof x.alias == "string" ? x.alias = [x.alias, n] : x.alias.push(n) : x.alias = [n];
          }
        }
    }
    f(h.tokens);
  }), e.hooks.add("wrap", function(h) {
    if (h.type === "code-block") {
      for (var f = "", b = 0, A = h.classes.length; b < A; b++) {
        var k = h.classes[b], T = /language-(.+)/.exec(k);
        if (T) {
          f = T[1];
          break;
        }
      }
      var O = e.languages[f];
      if (O)
        h.content = e.highlight(m(h.content), O, f);
      else if (f && f !== "none" && e.plugins.autoloader) {
        var x = "md-" + (/* @__PURE__ */ new Date()).valueOf() + "-" + Math.floor(Math.random() * 1e16);
        h.attributes.id = x, e.plugins.autoloader.loadLanguages(f, function() {
          var t = document.getElementById(x);
          t && (t.innerHTML = e.highlight(t.textContent, e.languages[f], f));
        });
      }
    }
  });
  var w = RegExp(e.languages.markup.tag.pattern.source, "gi"), o = {
    amp: "&",
    lt: "<",
    gt: ">",
    quot: '"'
  }, g = String.fromCodePoint || String.fromCharCode;
  function m(h) {
    var f = h.replace(w, "");
    return f = f.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(b, A) {
      if (A = A.toLowerCase(), A[0] === "#") {
        var k;
        return A[1] === "x" ? k = parseInt(A.slice(2), 16) : k = Number(A.slice(1)), g(k);
      } else {
        var T = o[A];
        return T || b;
      }
    }), f;
  }
  e.languages.md = e.languages.markdown;
})(Prism);
Prism.languages.sql = {
  comment: {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
    lookbehind: !0
  },
  variable: [
    {
      pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
      greedy: !0
    },
    /@[\w.$]+/
  ],
  string: {
    pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
    greedy: !0,
    lookbehind: !0
  },
  identifier: {
    pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
    greedy: !0,
    lookbehind: !0,
    inside: {
      punctuation: /^`|`$/
    }
  },
  function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
  // Should we highlight user defined functions too?
  keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
  boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
  number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
  operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
  punctuation: /[;[\]()`,.]/
};
(function(e) {
  e.languages.typescript = e.languages.extend("javascript", {
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
      lookbehind: !0,
      greedy: !0,
      inside: null
      // see below
    },
    builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
  }), e.languages.typescript.keyword.push(
    /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
    // keywords that have to be followed by an identifier
    /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
    // This is for `import type *, {}`
    /\btype\b(?=\s*(?:[\{*]|$))/
  ), delete e.languages.typescript.parameter, delete e.languages.typescript["literal-property"];
  var r = e.languages.extend("typescript", {});
  delete r["class-name"], e.languages.typescript["class-name"].inside = r, e.languages.insertBefore("typescript", "function", {
    decorator: {
      pattern: /@[$\w\xA0-\uFFFF]+/,
      inside: {
        at: {
          pattern: /^@/,
          alias: "operator"
        },
        function: /^[\s\S]+/
      }
    },
    "generic-function": {
      // e.g. foo<T extends "bar" | "baz">( ...
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
      greedy: !0,
      inside: {
        function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
        generic: {
          pattern: /<[\s\S]+/,
          // everything after the first <
          alias: "class-name",
          inside: r
        }
      }
    }
  }), e.languages.ts = e.languages.typescript;
})(Prism);
(function(e) {
  var r = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/, a = /(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source, u = {
    pattern: RegExp(/(^|[^\w.])/.source + a + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
    lookbehind: !0,
    inside: {
      namespace: {
        pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
        inside: {
          punctuation: /\./
        }
      },
      punctuation: /\./
    }
  };
  e.languages.java = e.languages.extend("clike", {
    string: {
      pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,
      lookbehind: !0,
      greedy: !0
    },
    "class-name": [
      u,
      {
        // variables, parameters, and constructor references
        // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
        pattern: RegExp(/(^|[^\w.])/.source + a + /[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),
        lookbehind: !0,
        inside: u.inside
      },
      {
        // class names based on keyword
        // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
        pattern: RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source + a + /[A-Z]\w*\b/.source),
        lookbehind: !0,
        inside: u.inside
      }
    ],
    keyword: r,
    function: [
      e.languages.clike.function,
      {
        pattern: /(::\s*)[a-z_]\w*/,
        lookbehind: !0
      }
    ],
    number: /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
    operator: {
      pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
      lookbehind: !0
    },
    constant: /\b[A-Z][A-Z_\d]+\b/
  }), e.languages.insertBefore("java", "string", {
    "triple-quoted-string": {
      // http://openjdk.java.net/jeps/355#Description
      pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
      greedy: !0,
      alias: "string"
    },
    char: {
      pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/,
      greedy: !0
    }
  }), e.languages.insertBefore("java", "class-name", {
    annotation: {
      pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
      lookbehind: !0,
      alias: "punctuation"
    },
    generics: {
      pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
      inside: {
        "class-name": u,
        keyword: r,
        punctuation: /[<>(),.:]/,
        operator: /[?&|]/
      }
    },
    import: [
      {
        pattern: RegExp(/(\bimport\s+)/.source + a + /(?:[A-Z]\w*|\*)(?=\s*;)/.source),
        lookbehind: !0,
        inside: {
          namespace: u.inside.namespace,
          punctuation: /\./,
          operator: /\*/,
          "class-name": /\w+/
        }
      },
      {
        pattern: RegExp(/(\bimport\s+static\s+)/.source + a + /(?:\w+|\*)(?=\s*;)/.source),
        lookbehind: !0,
        alias: "static",
        inside: {
          namespace: u.inside.namespace,
          static: /\b\w+$/,
          punctuation: /\./,
          operator: /\*/,
          "class-name": /\w+/
        }
      }
    ],
    namespace: {
      pattern: RegExp(
        /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g, function() {
          return r.source;
        })
      ),
      lookbehind: !0,
      inside: {
        punctuation: /\./
      }
    }
  });
})(Prism);
(function(e) {
  function r(a, u) {
    return "___" + a.toUpperCase() + u + "___";
  }
  Object.defineProperties(e.languages["markup-templating"] = {}, {
    buildPlaceholders: {
      /**
       * Tokenize all inline templating expressions matching `placeholderPattern`.
       *
       * If `replaceFilter` is provided, only matches of `placeholderPattern` for which `replaceFilter` returns
       * `true` will be replaced.
       *
       * @param {object} env The environment of the `before-tokenize` hook.
       * @param {string} language The language id.
       * @param {RegExp} placeholderPattern The matches of this pattern will be replaced by placeholders.
       * @param {(match: string) => boolean} [replaceFilter]
       */
      value: function(a, u, c, S) {
        if (a.language === u) {
          var w = a.tokenStack = [];
          a.code = a.code.replace(c, function(o) {
            if (typeof S == "function" && !S(o))
              return o;
            for (var g = w.length, m; a.code.indexOf(m = r(u, g)) !== -1; )
              ++g;
            return w[g] = o, m;
          }), a.grammar = e.languages.markup;
        }
      }
    },
    tokenizePlaceholders: {
      /**
       * Replace placeholders with proper tokens after tokenizing.
       *
       * @param {object} env The environment of the `after-tokenize` hook.
       * @param {string} language The language id.
       */
      value: function(a, u) {
        if (a.language !== u || !a.tokenStack)
          return;
        a.grammar = e.languages[u];
        var c = 0, S = Object.keys(a.tokenStack);
        function w(o) {
          for (var g = 0; g < o.length && !(c >= S.length); g++) {
            var m = o[g];
            if (typeof m == "string" || m.content && typeof m.content == "string") {
              var h = S[c], f = a.tokenStack[h], b = typeof m == "string" ? m : m.content, A = r(u, h), k = b.indexOf(A);
              if (k > -1) {
                ++c;
                var T = b.substring(0, k), O = new e.Token(u, e.tokenize(f, a.grammar), "language-" + u, f), x = b.substring(k + A.length), t = [];
                T && t.push.apply(t, w([T])), t.push(O), x && t.push.apply(t, w([x])), typeof m == "string" ? o.splice.apply(o, [g, 1].concat(t)) : m.content = t;
              }
            } else
              m.content && w(m.content);
          }
          return o;
        }
        w(a.tokens);
      }
    }
  });
})(Prism);
(function(e) {
  var r = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/, a = [
    {
      pattern: /\b(?:false|true)\b/i,
      alias: "boolean"
    },
    {
      pattern: /(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,
      greedy: !0,
      lookbehind: !0
    },
    {
      pattern: /(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,
      greedy: !0,
      lookbehind: !0
    },
    /\b(?:null)\b/i,
    /\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/
  ], u = /\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i, c = /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/, S = /[{}\[\](),:;]/;
  e.languages.php = {
    delimiter: {
      pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
      alias: "important"
    },
    comment: r,
    variable: /\$+(?:\w+\b|(?=\{))/,
    package: {
      pattern: /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
      lookbehind: !0,
      inside: {
        punctuation: /\\/
      }
    },
    "class-name-definition": {
      pattern: /(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,
      lookbehind: !0,
      alias: "class-name"
    },
    "function-definition": {
      pattern: /(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,
      lookbehind: !0,
      alias: "function"
    },
    keyword: [
      {
        pattern: /(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/i,
        alias: "type-casting",
        greedy: !0,
        lookbehind: !0
      },
      {
        pattern: /([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/i,
        alias: "type-hint",
        greedy: !0,
        lookbehind: !0
      },
      {
        pattern: /(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|never|object|self|static|string|void)\b/i,
        alias: "return-type",
        greedy: !0,
        lookbehind: !0
      },
      {
        pattern: /\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/i,
        alias: "type-declaration",
        greedy: !0
      },
      {
        pattern: /(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/i,
        alias: "type-declaration",
        greedy: !0,
        lookbehind: !0
      },
      {
        pattern: /\b(?:parent|self|static)(?=\s*::)/i,
        alias: "static-context",
        greedy: !0
      },
      {
        // yield from
        pattern: /(\byield\s+)from\b/i,
        lookbehind: !0
      },
      // `class` is always a keyword unlike other keywords
      /\bclass\b/i,
      {
        // https://www.php.net/manual/en/reserved.keywords.php
        //
        // keywords cannot be preceded by "->"
        // the complex lookbehind means `(?<!(?:->|::)\s*)`
        pattern: /((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|never|new|or|parent|print|private|protected|public|readonly|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__halt_compiler)\b/i,
        lookbehind: !0
      }
    ],
    "argument-name": {
      pattern: /([(,]\s*)\b[a-z_]\w*(?=\s*:(?!:))/i,
      lookbehind: !0
    },
    "class-name": [
      {
        pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,
        greedy: !0,
        lookbehind: !0
      },
      {
        pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/i,
        greedy: !0,
        lookbehind: !0
      },
      {
        pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,
        greedy: !0
      },
      {
        pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,
        alias: "class-name-fully-qualified",
        greedy: !0,
        lookbehind: !0,
        inside: {
          punctuation: /\\/
        }
      },
      {
        pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,
        alias: "class-name-fully-qualified",
        greedy: !0,
        inside: {
          punctuation: /\\/
        }
      },
      {
        pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
        alias: "class-name-fully-qualified",
        greedy: !0,
        lookbehind: !0,
        inside: {
          punctuation: /\\/
        }
      },
      {
        pattern: /\b[a-z_]\w*(?=\s*\$)/i,
        alias: "type-declaration",
        greedy: !0
      },
      {
        pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
        alias: ["class-name-fully-qualified", "type-declaration"],
        greedy: !0,
        inside: {
          punctuation: /\\/
        }
      },
      {
        pattern: /\b[a-z_]\w*(?=\s*::)/i,
        alias: "static-context",
        greedy: !0
      },
      {
        pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,
        alias: ["class-name-fully-qualified", "static-context"],
        greedy: !0,
        inside: {
          punctuation: /\\/
        }
      },
      {
        pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,
        alias: "type-hint",
        greedy: !0,
        lookbehind: !0
      },
      {
        pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
        alias: ["class-name-fully-qualified", "type-hint"],
        greedy: !0,
        lookbehind: !0,
        inside: {
          punctuation: /\\/
        }
      },
      {
        pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,
        alias: "return-type",
        greedy: !0,
        lookbehind: !0
      },
      {
        pattern: /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
        alias: ["class-name-fully-qualified", "return-type"],
        greedy: !0,
        lookbehind: !0,
        inside: {
          punctuation: /\\/
        }
      }
    ],
    constant: a,
    function: {
      pattern: /(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,
      lookbehind: !0,
      inside: {
        punctuation: /\\/
      }
    },
    property: {
      pattern: /(->\s*)\w+/,
      lookbehind: !0
    },
    number: u,
    operator: c,
    punctuation: S
  };
  var w = {
    pattern: /\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,
    lookbehind: !0,
    inside: e.languages.php
  }, o = [
    {
      pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,
      alias: "nowdoc-string",
      greedy: !0,
      inside: {
        delimiter: {
          pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
          alias: "symbol",
          inside: {
            punctuation: /^<<<'?|[';]$/
          }
        }
      }
    },
    {
      pattern: /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,
      alias: "heredoc-string",
      greedy: !0,
      inside: {
        delimiter: {
          pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
          alias: "symbol",
          inside: {
            punctuation: /^<<<"?|[";]$/
          }
        },
        interpolation: w
      }
    },
    {
      pattern: /`(?:\\[\s\S]|[^\\`])*`/,
      alias: "backtick-quoted-string",
      greedy: !0
    },
    {
      pattern: /'(?:\\[\s\S]|[^\\'])*'/,
      alias: "single-quoted-string",
      greedy: !0
    },
    {
      pattern: /"(?:\\[\s\S]|[^\\"])*"/,
      alias: "double-quoted-string",
      greedy: !0,
      inside: {
        interpolation: w
      }
    }
  ];
  e.languages.insertBefore("php", "variable", {
    string: o,
    attribute: {
      pattern: /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,
      greedy: !0,
      inside: {
        "attribute-content": {
          pattern: /^(#\[)[\s\S]+(?=\]$)/,
          lookbehind: !0,
          // inside can appear subset of php
          inside: {
            comment: r,
            string: o,
            "attribute-class-name": [
              {
                pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/i,
                alias: "class-name",
                greedy: !0,
                lookbehind: !0
              },
              {
                pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/i,
                alias: [
                  "class-name",
                  "class-name-fully-qualified"
                ],
                greedy: !0,
                lookbehind: !0,
                inside: {
                  punctuation: /\\/
                }
              }
            ],
            constant: a,
            number: u,
            operator: c,
            punctuation: S
          }
        },
        delimiter: {
          pattern: /^#\[|\]$/,
          alias: "punctuation"
        }
      }
    }
  }), e.hooks.add("before-tokenize", function(g) {
    if (/<\?/.test(g.code)) {
      var m = /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g;
      e.languages["markup-templating"].buildPlaceholders(g, "php", m);
    }
  }), e.hooks.add("after-tokenize", function(g) {
    e.languages["markup-templating"].tokenizePlaceholders(g, "php");
  });
})(Prism);
(function(e) {
  var r = e.util.clone(e.languages.javascript), a = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source, u = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source, c = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
  function S(g, m) {
    return g = g.replace(/<S>/g, function() {
      return a;
    }).replace(/<BRACES>/g, function() {
      return u;
    }).replace(/<SPREAD>/g, function() {
      return c;
    }), RegExp(g, m);
  }
  c = S(c).source, e.languages.jsx = e.languages.extend("markup", r), e.languages.jsx.tag.pattern = S(
    /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source
  ), e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/, e.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/, e.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, e.languages.jsx.tag.inside.comment = r.comment, e.languages.insertBefore("inside", "attr-name", {
    spread: {
      pattern: S(/<SPREAD>/.source),
      inside: e.languages.jsx
    }
  }, e.languages.jsx.tag), e.languages.insertBefore("inside", "special-attr", {
    script: {
      // Allow for two levels of nesting
      pattern: S(/=<BRACES>/.source),
      alias: "language-javascript",
      inside: {
        "script-punctuation": {
          pattern: /^=(?=\{)/,
          alias: "punctuation"
        },
        rest: e.languages.jsx
      }
    }
  }, e.languages.jsx.tag);
  var w = function(g) {
    return g ? typeof g == "string" ? g : typeof g.content == "string" ? g.content : g.content.map(w).join("") : "";
  }, o = function(g) {
    for (var m = [], h = 0; h < g.length; h++) {
      var f = g[h], b = !1;
      if (typeof f != "string" && (f.type === "tag" && f.content[0] && f.content[0].type === "tag" ? f.content[0].content[0].content === "</" ? m.length > 0 && m[m.length - 1].tagName === w(f.content[0].content[1]) && m.pop() : f.content[f.content.length - 1].content === "/>" || m.push({
        tagName: w(f.content[0].content[1]),
        openedBraces: 0
      }) : m.length > 0 && f.type === "punctuation" && f.content === "{" ? m[m.length - 1].openedBraces++ : m.length > 0 && m[m.length - 1].openedBraces > 0 && f.type === "punctuation" && f.content === "}" ? m[m.length - 1].openedBraces-- : b = !0), (b || typeof f == "string") && m.length > 0 && m[m.length - 1].openedBraces === 0) {
        var A = w(f);
        h < g.length - 1 && (typeof g[h + 1] == "string" || g[h + 1].type === "plain-text") && (A += w(g[h + 1]), g.splice(h + 1, 1)), h > 0 && (typeof g[h - 1] == "string" || g[h - 1].type === "plain-text") && (A = w(g[h - 1]) + A, g.splice(h - 1, 1), h--), g[h] = new e.Token("plain-text", A, null, A);
      }
      f.content && typeof f.content != "string" && o(f.content);
    }
  };
  e.hooks.add("after-tokenize", function(g) {
    g.language !== "jsx" && g.language !== "tsx" || o(g.tokens);
  });
})(Prism);
Prism.languages.go = Prism.languages.extend("clike", {
  string: {
    pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,
    lookbehind: !0,
    greedy: !0
  },
  keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
  boolean: /\b(?:_|false|iota|nil|true)\b/,
  number: [
    // binary and octal integers
    /\b0(?:b[01_]+|o[0-7_]+)i?\b/i,
    // hexadecimal integers and floats
    /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,
    // decimal integers and floats
    /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i
  ],
  operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
  builtin: /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/
});
Prism.languages.insertBefore("go", "string", {
  char: {
    pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/,
    greedy: !0
  }
});
delete Prism.languages.go["class-name"];
Prism.languages.c = Prism.languages.extend("clike", {
  comment: {
    pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: !0
  },
  string: {
    // https://en.cppreference.com/w/c/language/string_literal
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: !0
  },
  "class-name": {
    pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
    lookbehind: !0
  },
  keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
  function: /\b[a-z_]\w*(?=\s*\()/i,
  number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
  operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
});
Prism.languages.insertBefore("c", "string", {
  char: {
    // https://en.cppreference.com/w/c/language/character_constant
    pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
    greedy: !0
  }
});
Prism.languages.insertBefore("c", "string", {
  macro: {
    // allow for multiline macro definitions
    // spaces after the # character compile fine with gcc
    pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
    lookbehind: !0,
    greedy: !0,
    alias: "property",
    inside: {
      string: [
        {
          // highlight the path of the include statement as a string
          pattern: /^(#\s*include\s*)<[^>]+>/,
          lookbehind: !0
        },
        Prism.languages.c.string
      ],
      char: Prism.languages.c.char,
      comment: Prism.languages.c.comment,
      "macro-name": [
        {
          pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
          lookbehind: !0
        },
        {
          pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
          lookbehind: !0,
          alias: "function"
        }
      ],
      // highlight macro directives as keywords
      directive: {
        pattern: /^(#\s*)[a-z]+/,
        lookbehind: !0,
        alias: "keyword"
      },
      "directive-hash": /^#/,
      punctuation: /##|\\(?=[\r\n])/,
      expression: {
        pattern: /\S[\s\S]*/,
        inside: Prism.languages.c
      }
    }
  }
});
Prism.languages.insertBefore("c", "function", {
  // highlight predefined macros as constants
  constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
});
delete Prism.languages.c.boolean;
(function(e) {
  var r = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/, a = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function() {
    return r.source;
  });
  e.languages.cpp = e.languages.extend("c", {
    "class-name": [
      {
        pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function() {
          return r.source;
        })),
        lookbehind: !0
      },
      // This is intended to capture the class name of method implementations like:
      //   void foo::bar() const {}
      // However! The `foo` in the above example could also be a namespace, so we only capture the class name if
      // it starts with an uppercase letter. This approximation should give decent results.
      /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
      // This will capture the class name before destructors like:
      //   Foo::~Foo() {}
      /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
      // This also intends to capture the class name of method implementations but here the class has template
      // parameters, so it can't be a namespace (until C++ adds generic namespaces).
      /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/
    ],
    keyword: r,
    number: {
      pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
      greedy: !0
    },
    operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
    boolean: /\b(?:false|true)\b/
  }), e.languages.insertBefore("cpp", "string", {
    module: {
      // https://en.cppreference.com/w/cpp/language/modules
      pattern: RegExp(
        /(\b(?:import|module)\s+)/.source + "(?:" + // header-name
        /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + "|" + // module name or partition or both
        /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function() {
          return a;
        }) + ")"
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        string: /^[<"][\s\S]+/,
        operator: /:/,
        punctuation: /\./
      }
    },
    "raw-string": {
      pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
      alias: "string",
      greedy: !0
    }
  }), e.languages.insertBefore("cpp", "keyword", {
    "generic-function": {
      pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
      inside: {
        function: /^\w+/,
        generic: {
          pattern: /<[\s\S]+/,
          alias: "class-name",
          inside: e.languages.cpp
        }
      }
    }
  }), e.languages.insertBefore("cpp", "operator", {
    "double-colon": {
      pattern: /::/,
      alias: "punctuation"
    }
  }), e.languages.insertBefore("cpp", "class-name", {
    // the base clause is an optional list of parent classes
    // https://en.cppreference.com/w/cpp/language/class
    "base-clause": {
      pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
      lookbehind: !0,
      greedy: !0,
      inside: e.languages.extend("cpp", {})
    }
  }), e.languages.insertBefore("inside", "double-colon", {
    // All untokenized words that are not namespaces should be class names
    "class-name": /\b[a-z_]\w*\b(?!\s*::)/i
  }, e.languages.cpp["base-clause"]);
})(Prism);
(function(e) {
  function r(R, D) {
    return R.replace(/<<(\d+)>>/g, function(z, M) {
      return "(?:" + D[+M] + ")";
    });
  }
  function a(R, D, z) {
    return RegExp(r(R, D), z || "");
  }
  function u(R, D) {
    for (var z = 0; z < D; z++)
      R = R.replace(/<<self>>/g, function() {
        return "(?:" + R + ")";
      });
    return R.replace(/<<self>>/g, "[^\\s\\S]");
  }
  var c = {
    // keywords which represent a return or variable type
    type: "bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",
    // keywords which are used to declare a type
    typeDeclaration: "class enum interface record struct",
    // contextual keywords
    // ("var" and "dynamic" are missing because they are used like types)
    contextual: "add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",
    // all other keywords
    other: "abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield"
  };
  function S(R) {
    return "\\b(?:" + R.trim().replace(/ /g, "|") + ")\\b";
  }
  var w = S(c.typeDeclaration), o = RegExp(S(c.type + " " + c.typeDeclaration + " " + c.contextual + " " + c.other)), g = S(c.typeDeclaration + " " + c.contextual + " " + c.other), m = S(c.type + " " + c.typeDeclaration + " " + c.other), h = u(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source, 2), f = u(/\((?:[^()]|<<self>>)*\)/.source, 2), b = /@?\b[A-Za-z_]\w*\b/.source, A = r(/<<0>>(?:\s*<<1>>)?/.source, [b, h]), k = r(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source, [g, A]), T = /\[\s*(?:,\s*)*\]/.source, O = r(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source, [k, T]), x = r(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source, [h, f, T]), t = r(/\(<<0>>+(?:,<<0>>+)+\)/.source, [x]), n = r(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source, [t, k, T]), s = {
    keyword: o,
    punctuation: /[<>()?,.:[\]]/
  }, i = /'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source, l = /"(?:\\.|[^\\"\r\n])*"/.source, E = /@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;
  e.languages.csharp = e.languages.extend("clike", {
    string: [
      {
        pattern: a(/(^|[^$\\])<<0>>/.source, [E]),
        lookbehind: !0,
        greedy: !0
      },
      {
        pattern: a(/(^|[^@$\\])<<0>>/.source, [l]),
        lookbehind: !0,
        greedy: !0
      }
    ],
    "class-name": [
      {
        // Using static
        // using static System.Math;
        pattern: a(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source, [k]),
        lookbehind: !0,
        inside: s
      },
      {
        // Using alias (type)
        // using Project = PC.MyCompany.Project;
        pattern: a(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source, [b, n]),
        lookbehind: !0,
        inside: s
      },
      {
        // Using alias (alias)
        // using Project = PC.MyCompany.Project;
        pattern: a(/(\busing\s+)<<0>>(?=\s*=)/.source, [b]),
        lookbehind: !0
      },
      {
        // Type declarations
        // class Foo<A, B>
        // interface Foo<out A, B>
        pattern: a(/(\b<<0>>\s+)<<1>>/.source, [w, A]),
        lookbehind: !0,
        inside: s
      },
      {
        // Single catch exception declaration
        // catch(Foo)
        // (things like catch(Foo e) is covered by variable declaration)
        pattern: a(/(\bcatch\s*\(\s*)<<0>>/.source, [k]),
        lookbehind: !0,
        inside: s
      },
      {
        // Name of the type parameter of generic constraints
        // where Foo : class
        pattern: a(/(\bwhere\s+)<<0>>/.source, [b]),
        lookbehind: !0
      },
      {
        // Casts and checks via as and is.
        // as Foo<A>, is Bar<B>
        // (things like if(a is Foo b) is covered by variable declaration)
        pattern: a(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source, [O]),
        lookbehind: !0,
        inside: s
      },
      {
        // Variable, field and parameter declaration
        // (Foo bar, Bar baz, Foo[,,] bay, Foo<Bar, FooBar<Bar>> bax)
        pattern: a(/\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source, [n, m, b]),
        inside: s
      }
    ],
    keyword: o,
    // https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#literals
    number: /(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,
    operator: />>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,
    punctuation: /\?\.?|::|[{}[\];(),.:]/
  }), e.languages.insertBefore("csharp", "number", {
    range: {
      pattern: /\.\./,
      alias: "operator"
    }
  }), e.languages.insertBefore("csharp", "punctuation", {
    "named-parameter": {
      pattern: a(/([(,]\s*)<<0>>(?=\s*:)/.source, [b]),
      lookbehind: !0,
      alias: "punctuation"
    }
  }), e.languages.insertBefore("csharp", "class-name", {
    namespace: {
      // namespace Foo.Bar {}
      // using Foo.Bar;
      pattern: a(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source, [b]),
      lookbehind: !0,
      inside: {
        punctuation: /\./
      }
    },
    "type-expression": {
      // default(Foo), typeof(Foo<Bar>), sizeof(int)
      pattern: a(/(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source, [f]),
      lookbehind: !0,
      alias: "class-name",
      inside: s
    },
    "return-type": {
      // Foo<Bar> ForBar(); Foo IFoo.Bar() => 0
      // int this[int index] => 0; T IReadOnlyList<T>.this[int index] => this[index];
      // int Foo => 0; int Foo { get; set } = 0;
      pattern: a(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source, [n, k]),
      inside: s,
      alias: "class-name"
    },
    "constructor-invocation": {
      // new List<Foo<Bar[]>> { }
      pattern: a(/(\bnew\s+)<<0>>(?=\s*[[({])/.source, [n]),
      lookbehind: !0,
      inside: s,
      alias: "class-name"
    },
    /*'explicit-implementation': {
    	// int IFoo<Foo>.Bar => 0; void IFoo<Foo<Foo>>.Foo<T>();
    	pattern: replace(/\b<<0>>(?=\.<<1>>)/, className, methodOrPropertyDeclaration),
    	inside: classNameInside,
    	alias: 'class-name'
    },*/
    "generic-method": {
      // foo<Bar>()
      pattern: a(/<<0>>\s*<<1>>(?=\s*\()/.source, [b, h]),
      inside: {
        function: a(/^<<0>>/.source, [b]),
        generic: {
          pattern: RegExp(h),
          alias: "class-name",
          inside: s
        }
      }
    },
    "type-list": {
      // The list of types inherited or of generic constraints
      // class Foo<F> : Bar, IList<FooBar>
      // where F : Bar, IList<int>
      pattern: a(
        /\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/.source,
        [w, A, b, n, o.source, f, /\bnew\s*\(\s*\)/.source]
      ),
      lookbehind: !0,
      inside: {
        "record-arguments": {
          pattern: a(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source, [A, f]),
          lookbehind: !0,
          greedy: !0,
          inside: e.languages.csharp
        },
        keyword: o,
        "class-name": {
          pattern: RegExp(n),
          greedy: !0,
          inside: s
        },
        punctuation: /[,()]/
      }
    },
    preprocessor: {
      pattern: /(^[\t ]*)#.*/m,
      lookbehind: !0,
      alias: "property",
      inside: {
        // highlight preprocessor directives as keywords
        directive: {
          pattern: /(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,
          lookbehind: !0,
          alias: "keyword"
        }
      }
    }
  });
  var _ = l + "|" + i, y = r(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source, [_]), F = u(r(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [y]), 2), N = /\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source, U = r(/<<0>>(?:\s*\(<<1>>*\))?/.source, [k, F]);
  e.languages.insertBefore("csharp", "class-name", {
    attribute: {
      // Attributes
      // [Foo], [Foo(1), Bar(2, Prop = "foo")], [return: Foo(1), Bar(2)], [assembly: Foo(Bar)]
      pattern: a(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source, [N, U]),
      lookbehind: !0,
      greedy: !0,
      inside: {
        target: {
          pattern: a(/^<<0>>(?=\s*:)/.source, [N]),
          alias: "keyword"
        },
        "attribute-arguments": {
          pattern: a(/\(<<0>>*\)/.source, [F]),
          inside: e.languages.csharp
        },
        "class-name": {
          pattern: RegExp(k),
          inside: {
            punctuation: /\./
          }
        },
        punctuation: /[:,]/
      }
    }
  });
  var G = /:[^}\r\n]+/.source, W = u(r(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [y]), 2), K = r(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [W, G]), X = u(r(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source, [_]), 2), Y = r(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [X, G]);
  function C(R, D) {
    return {
      interpolation: {
        pattern: a(/((?:^|[^{])(?:\{\{)*)<<0>>/.source, [R]),
        lookbehind: !0,
        inside: {
          "format-string": {
            pattern: a(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source, [D, G]),
            lookbehind: !0,
            inside: {
              punctuation: /^:/
            }
          },
          punctuation: /^\{|\}$/,
          expression: {
            pattern: /[\s\S]+/,
            alias: "language-csharp",
            inside: e.languages.csharp
          }
        }
      },
      string: /[\s\S]+/
    };
  }
  e.languages.insertBefore("csharp", "string", {
    "interpolation-string": [
      {
        pattern: a(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source, [K]),
        lookbehind: !0,
        greedy: !0,
        inside: C(K, W)
      },
      {
        pattern: a(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source, [Y]),
        lookbehind: !0,
        greedy: !0,
        inside: C(Y, X)
      }
    ],
    char: {
      pattern: RegExp(i),
      greedy: !0
    }
  }), e.languages.dotnet = e.languages.cs = e.languages.csharp;
})(Prism);
Prism.languages.python = {
  comment: {
    pattern: /(^|[^\\])#.*/,
    lookbehind: !0,
    greedy: !0
  },
  "string-interpolation": {
    pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    greedy: !0,
    inside: {
      interpolation: {
        // "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
        pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
        lookbehind: !0,
        inside: {
          "format-spec": {
            pattern: /(:)[^:(){}]+(?=\}$)/,
            lookbehind: !0
          },
          "conversion-option": {
            pattern: /![sra](?=[:}]$)/,
            alias: "punctuation"
          },
          rest: null
        }
      },
      string: /[\s\S]+/
    }
  },
  "triple-quoted-string": {
    pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
    greedy: !0,
    alias: "string"
  },
  string: {
    pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: !0
  },
  function: {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: !0
  },
  "class-name": {
    pattern: /(\bclass\s+)\w+/i,
    lookbehind: !0
  },
  decorator: {
    pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
    lookbehind: !0,
    alias: ["annotation", "punctuation"],
    inside: {
      punctuation: /\./
    }
  },
  keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  boolean: /\b(?:False|None|True)\b/,
  number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
  operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  punctuation: /[{}[\];(),.:]/
};
Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python;
Prism.languages.py = Prism.languages.python;
Prism.languages.c = Prism.languages.extend("clike", {
  comment: {
    pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: !0
  },
  string: {
    // https://en.cppreference.com/w/c/language/string_literal
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: !0
  },
  "class-name": {
    pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
    lookbehind: !0
  },
  keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
  function: /\b[a-z_]\w*(?=\s*\()/i,
  number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
  operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
});
Prism.languages.insertBefore("c", "string", {
  char: {
    // https://en.cppreference.com/w/c/language/character_constant
    pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
    greedy: !0
  }
});
Prism.languages.insertBefore("c", "string", {
  macro: {
    // allow for multiline macro definitions
    // spaces after the # character compile fine with gcc
    pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
    lookbehind: !0,
    greedy: !0,
    alias: "property",
    inside: {
      string: [
        {
          // highlight the path of the include statement as a string
          pattern: /^(#\s*include\s*)<[^>]+>/,
          lookbehind: !0
        },
        Prism.languages.c.string
      ],
      char: Prism.languages.c.char,
      comment: Prism.languages.c.comment,
      "macro-name": [
        {
          pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
          lookbehind: !0
        },
        {
          pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
          lookbehind: !0,
          alias: "function"
        }
      ],
      // highlight macro directives as keywords
      directive: {
        pattern: /^(#\s*)[a-z]+/,
        lookbehind: !0,
        alias: "keyword"
      },
      "directive-hash": /^#/,
      punctuation: /##|\\(?=[\r\n])/,
      expression: {
        pattern: /\S[\s\S]*/,
        inside: Prism.languages.c
      }
    }
  }
});
Prism.languages.insertBefore("c", "function", {
  // highlight predefined macros as constants
  constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
});
delete Prism.languages.c.boolean;
Prism.languages["visual-basic"] = {
  comment: {
    pattern: /(?:['‘’]|REM\b)(?:[^\r\n_]|_(?:\r\n?|\n)?)*/i,
    inside: {
      keyword: /^REM/i
    }
  },
  directive: {
    pattern: /#(?:Const|Else|ElseIf|End|ExternalChecksum|ExternalSource|If|Region)(?:\b_[ \t]*(?:\r\n?|\n)|.)+/i,
    alias: "property",
    greedy: !0
  },
  string: {
    pattern: /\$?["“”](?:["“”]{2}|[^"“”])*["“”]C?/i,
    greedy: !0
  },
  date: {
    pattern: /#[ \t]*(?:\d+([/-])\d+\1\d+(?:[ \t]+(?:\d+[ \t]*(?:AM|PM)|\d+:\d+(?::\d+)?(?:[ \t]*(?:AM|PM))?))?|\d+[ \t]*(?:AM|PM)|\d+:\d+(?::\d+)?(?:[ \t]*(?:AM|PM))?)[ \t]*#/i,
    alias: "number"
  },
  number: /(?:(?:\b\d+(?:\.\d+)?|\.\d+)(?:E[+-]?\d+)?|&[HO][\dA-F]+)(?:[FRD]|U?[ILS])?/i,
  boolean: /\b(?:False|Nothing|True)\b/i,
  keyword: /\b(?:AddHandler|AddressOf|Alias|And(?:Also)?|As|Boolean|ByRef|Byte|ByVal|Call|Case|Catch|C(?:Bool|Byte|Char|Date|Dbl|Dec|Int|Lng|Obj|SByte|Short|Sng|Str|Type|UInt|ULng|UShort)|Char|Class|Const|Continue|Currency|Date|Decimal|Declare|Default|Delegate|Dim|DirectCast|Do|Double|Each|Else(?:If)?|End(?:If)?|Enum|Erase|Error|Event|Exit|Finally|For|Friend|Function|Get(?:Type|XMLNamespace)?|Global|GoSub|GoTo|Handles|If|Implements|Imports|In|Inherits|Integer|Interface|Is|IsNot|Let|Lib|Like|Long|Loop|Me|Mod|Module|Must(?:Inherit|Override)|My(?:Base|Class)|Namespace|Narrowing|New|Next|Not(?:Inheritable|Overridable)?|Object|Of|On|Operator|Option(?:al)?|Or(?:Else)?|Out|Overloads|Overridable|Overrides|ParamArray|Partial|Private|Property|Protected|Public|RaiseEvent|ReadOnly|ReDim|RemoveHandler|Resume|Return|SByte|Select|Set|Shadows|Shared|short|Single|Static|Step|Stop|String|Structure|Sub|SyncLock|Then|Throw|To|Try|TryCast|Type|TypeOf|U(?:Integer|Long|Short)|Until|Using|Variant|Wend|When|While|Widening|With(?:Events)?|WriteOnly|Xor)\b/i,
  operator: /[+\-*/\\^<=>&#@$%!]|\b_(?=[ \t]*[\r\n])/,
  punctuation: /[{}().,:?]/
};
Prism.languages.vb = Prism.languages["visual-basic"];
Prism.languages.vba = Prism.languages["visual-basic"];
(function(e) {
  e.languages.ruby = e.languages.extend("clike", {
    comment: {
      pattern: /#.*|^=begin\s[\s\S]*?^=end/m,
      greedy: !0
    },
    "class-name": {
      pattern: /(\b(?:class|module)\s+|\bcatch\s+\()[\w.\\]+|\b[A-Z_]\w*(?=\s*\.\s*new\b)/,
      lookbehind: !0,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword: /\b(?:BEGIN|END|alias|and|begin|break|case|class|def|define_method|defined|do|each|else|elsif|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|private|protected|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/,
    operator: /\.{2,3}|&\.|===|<?=>|[!=]?~|(?:&&|\|\||<<|>>|\*\*|[+\-*/%<>!^&|=])=?|[?:]/,
    punctuation: /[(){}[\].,;]/
  }), e.languages.insertBefore("ruby", "operator", {
    "double-colon": {
      pattern: /::/,
      alias: "punctuation"
    }
  });
  var r = {
    pattern: /((?:^|[^\\])(?:\\{2})*)#\{(?:[^{}]|\{[^{}]*\})*\}/,
    lookbehind: !0,
    inside: {
      content: {
        pattern: /^(#\{)[\s\S]+(?=\}$)/,
        lookbehind: !0,
        inside: e.languages.ruby
      },
      delimiter: {
        pattern: /^#\{|\}$/,
        alias: "punctuation"
      }
    }
  };
  delete e.languages.ruby.function;
  var a = "(?:" + [
    /([^a-zA-Z0-9\s{(\[<=])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source,
    /\((?:[^()\\]|\\[\s\S]|\((?:[^()\\]|\\[\s\S])*\))*\)/.source,
    /\{(?:[^{}\\]|\\[\s\S]|\{(?:[^{}\\]|\\[\s\S])*\})*\}/.source,
    /\[(?:[^\[\]\\]|\\[\s\S]|\[(?:[^\[\]\\]|\\[\s\S])*\])*\]/.source,
    /<(?:[^<>\\]|\\[\s\S]|<(?:[^<>\\]|\\[\s\S])*>)*>/.source
  ].join("|") + ")", u = /(?:"(?:\\.|[^"\\\r\n])*"|(?:\b[a-zA-Z_]\w*|[^\s\0-\x7F]+)[?!]?|\$.)/.source;
  e.languages.insertBefore("ruby", "keyword", {
    "regex-literal": [
      {
        pattern: RegExp(/%r/.source + a + /[egimnosux]{0,6}/.source),
        greedy: !0,
        inside: {
          interpolation: r,
          regex: /[\s\S]+/
        }
      },
      {
        pattern: /(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[egimnosux]{0,6}(?=\s*(?:$|[\r\n,.;})#]))/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          interpolation: r,
          regex: /[\s\S]+/
        }
      }
    ],
    variable: /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,
    symbol: [
      {
        pattern: RegExp(/(^|[^:]):/.source + u),
        lookbehind: !0,
        greedy: !0
      },
      {
        pattern: RegExp(/([\r\n{(,][ \t]*)/.source + u + /(?=:(?!:))/.source),
        lookbehind: !0,
        greedy: !0
      }
    ],
    "method-definition": {
      pattern: /(\bdef\s+)\w+(?:\s*\.\s*\w+)?/,
      lookbehind: !0,
      inside: {
        function: /\b\w+$/,
        keyword: /^self\b/,
        "class-name": /^\w+/,
        punctuation: /\./
      }
    }
  }), e.languages.insertBefore("ruby", "string", {
    "string-literal": [
      {
        pattern: RegExp(/%[qQiIwWs]?/.source + a),
        greedy: !0,
        inside: {
          interpolation: r,
          string: /[\s\S]+/
        }
      },
      {
        pattern: /("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/,
        greedy: !0,
        inside: {
          interpolation: r,
          string: /[\s\S]+/
        }
      },
      {
        pattern: /<<[-~]?([a-z_]\w*)[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
        alias: "heredoc-string",
        greedy: !0,
        inside: {
          delimiter: {
            pattern: /^<<[-~]?[a-z_]\w*|\b[a-z_]\w*$/i,
            inside: {
              symbol: /\b\w+/,
              punctuation: /^<<[-~]?/
            }
          },
          interpolation: r,
          string: /[\s\S]+/
        }
      },
      {
        pattern: /<<[-~]?'([a-z_]\w*)'[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
        alias: "heredoc-string",
        greedy: !0,
        inside: {
          delimiter: {
            pattern: /^<<[-~]?'[a-z_]\w*'|\b[a-z_]\w*$/i,
            inside: {
              symbol: /\b\w+/,
              punctuation: /^<<[-~]?'|'$/
            }
          },
          string: /[\s\S]+/
        }
      }
    ],
    "command-literal": [
      {
        pattern: RegExp(/%x/.source + a),
        greedy: !0,
        inside: {
          interpolation: r,
          command: {
            pattern: /[\s\S]+/,
            alias: "string"
          }
        }
      },
      {
        pattern: /`(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|[^\\`#\r\n])*`/,
        greedy: !0,
        inside: {
          interpolation: r,
          command: {
            pattern: /[\s\S]+/,
            alias: "string"
          }
        }
      }
    ]
  }), delete e.languages.ruby.string, e.languages.insertBefore("ruby", "number", {
    builtin: /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Fixnum|Float|Hash|IO|Integer|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|Stat|String|Struct|Symbol|TMS|Thread|ThreadGroup|Time|TrueClass)\b/,
    constant: /\b[A-Z][A-Z0-9_]*(?:[?!]|\b)/
  }), e.languages.rb = e.languages.ruby;
})(Prism);
Prism.languages.swift = {
  comment: {
    // Nested comments are supported up to 2 levels
    pattern: /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,
    lookbehind: !0,
    greedy: !0
  },
  "string-literal": [
    // https://docs.swift.org/swift-book/LanguageGuide/StringsAndCharacters.html
    {
      pattern: RegExp(
        /(^|[^"#])/.source + "(?:" + /"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source + "|" + /"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source + ")" + /(?!["#])/.source
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        interpolation: {
          pattern: /(\\\()(?:[^()]|\([^()]*\))*(?=\))/,
          lookbehind: !0,
          inside: null
          // see below
        },
        "interpolation-punctuation": {
          pattern: /^\)|\\\($/,
          alias: "punctuation"
        },
        punctuation: /\\(?=[\r\n])/,
        string: /[\s\S]+/
      }
    },
    {
      pattern: RegExp(
        /(^|[^"#])(#+)/.source + "(?:" + /"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source + "|" + /"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source + ")\\2"
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        interpolation: {
          pattern: /(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,
          lookbehind: !0,
          inside: null
          // see below
        },
        "interpolation-punctuation": {
          pattern: /^\)|\\#+\($/,
          alias: "punctuation"
        },
        string: /[\s\S]+/
      }
    }
  ],
  directive: {
    // directives with conditions
    pattern: RegExp(
      /#/.source + "(?:" + (/(?:elseif|if)\b/.source + "(?:[ 	]*" + /(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source + ")+") + "|" + /(?:else|endif)\b/.source + ")"
    ),
    alias: "property",
    inside: {
      "directive-name": /^#\w+/,
      boolean: /\b(?:false|true)\b/,
      number: /\b\d+(?:\.\d+)*\b/,
      operator: /!|&&|\|\||[<>]=?/,
      punctuation: /[(),]/
    }
  },
  literal: {
    pattern: /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,
    alias: "constant"
  },
  "other-directive": {
    pattern: /#\w+\b/,
    alias: "property"
  },
  attribute: {
    pattern: /@\w+/,
    alias: "atrule"
  },
  "function-definition": {
    pattern: /(\bfunc\s+)\w+/,
    lookbehind: !0,
    alias: "function"
  },
  label: {
    // https://docs.swift.org/swift-book/LanguageGuide/ControlFlow.html#ID141
    pattern: /\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,
    lookbehind: !0,
    alias: "important"
  },
  keyword: /\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,
  boolean: /\b(?:false|true)\b/,
  nil: {
    pattern: /\bnil\b/,
    alias: "constant"
  },
  "short-argument": /\$\d+\b/,
  omit: {
    pattern: /\b_\b/,
    alias: "keyword"
  },
  number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
  // A class name must start with an upper-case letter and be either 1 letter long or contain a lower-case letter.
  "class-name": /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,
  function: /\b[a-z_]\w*(?=\s*\()/i,
  constant: /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
  // Operators are generic in Swift. Developers can even create new operators (e.g. +++).
  // https://docs.swift.org/swift-book/ReferenceManual/zzSummaryOfTheGrammar.html#ID481
  // This regex only supports ASCII operators.
  operator: /[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,
  punctuation: /[{}[\]();,.:\\]/
};
Prism.languages.swift["string-literal"].forEach(function(e) {
  e.inside.interpolation.inside = Prism.languages.swift;
});
(function(e) {
  var r = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b", a = {
    pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
    lookbehind: !0,
    alias: "punctuation",
    // this looks reasonably well in all themes
    inside: null
    // see below
  }, u = {
    bash: a,
    environment: {
      pattern: RegExp("\\$" + r),
      alias: "constant"
    },
    variable: [
      // [0]: Arithmetic Environment
      {
        pattern: /\$?\(\([\s\S]+?\)\)/,
        greedy: !0,
        inside: {
          // If there is a $ sign at the beginning highlight $(( and )) as variable
          variable: [
            {
              pattern: /(^\$\(\([\s\S]+)\)\)/,
              lookbehind: !0
            },
            /^\$\(\(/
          ],
          number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
          // Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
          operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
          // If there is no $ sign at the beginning highlight (( and )) as punctuation
          punctuation: /\(\(?|\)\)?|,|;/
        }
      },
      // [1]: Command Substitution
      {
        pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
        greedy: !0,
        inside: {
          variable: /^\$\(|^`|\)$|`$/
        }
      },
      // [2]: Brace expansion
      {
        pattern: /\$\{[^}]+\}/,
        greedy: !0,
        inside: {
          operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
          punctuation: /[\[\]]/,
          environment: {
            pattern: RegExp("(\\{)" + r),
            lookbehind: !0,
            alias: "constant"
          }
        }
      },
      /\$(?:\w+|[#?*!@$])/
    ],
    // Escape sequences from echo and printf's manuals, and escaped quotes.
    entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
  };
  e.languages.bash = {
    shebang: {
      pattern: /^#!\s*\/.*/,
      alias: "important"
    },
    comment: {
      pattern: /(^|[^"{\\$])#.*/,
      lookbehind: !0
    },
    "function-name": [
      // a) function foo {
      // b) foo() {
      // c) function foo() {
      // but not “foo {”
      {
        // a) and c)
        pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
        lookbehind: !0,
        alias: "function"
      },
      {
        // b)
        pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
        alias: "function"
      }
    ],
    // Highlight variable names as variables in for and select beginnings.
    "for-or-select": {
      pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
      alias: "variable",
      lookbehind: !0
    },
    // Highlight variable names as variables in the left-hand part
    // of assignments (“=” and “+=”).
    "assign-left": {
      pattern: /(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,
      inside: {
        environment: {
          pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + r),
          lookbehind: !0,
          alias: "constant"
        }
      },
      alias: "variable",
      lookbehind: !0
    },
    // Highlight parameter names as variables
    parameter: {
      pattern: /(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,
      alias: "variable",
      lookbehind: !0
    },
    string: [
      // Support for Here-documents https://en.wikipedia.org/wiki/Here_document
      {
        pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
        lookbehind: !0,
        greedy: !0,
        inside: u
      },
      // Here-document with quotes around the tag
      // → No expansion (so no “inside”).
      {
        pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          bash: a
        }
      },
      // “Normal” string
      {
        // https://www.gnu.org/software/bash/manual/html_node/Double-Quotes.html
        pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
        lookbehind: !0,
        greedy: !0,
        inside: u
      },
      {
        // https://www.gnu.org/software/bash/manual/html_node/Single-Quotes.html
        pattern: /(^|[^$\\])'[^']*'/,
        lookbehind: !0,
        greedy: !0
      },
      {
        // https://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html
        pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
        greedy: !0,
        inside: {
          entity: u.entity
        }
      }
    ],
    environment: {
      pattern: RegExp("\\$?" + r),
      alias: "constant"
    },
    variable: u.variable,
    function: {
      pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    keyword: {
      pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    // https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
    builtin: {
      pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
      lookbehind: !0,
      // Alias added to make those easier to distinguish from strings.
      alias: "class-name"
    },
    boolean: {
      pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    "file-descriptor": {
      pattern: /\B&\d\b/,
      alias: "important"
    },
    operator: {
      // Lots of redirections here, but not just that.
      pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
      inside: {
        "file-descriptor": {
          pattern: /^\d/,
          alias: "important"
        }
      }
    },
    punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
    number: {
      pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
      lookbehind: !0
    }
  }, a.inside = e.languages.bash;
  for (var c = [
    "comment",
    "function-name",
    "for-or-select",
    "assign-left",
    "parameter",
    "string",
    "environment",
    "function",
    "keyword",
    "builtin",
    "boolean",
    "file-descriptor",
    "operator",
    "punctuation",
    "number"
  ], S = u.variable[1].inside, w = 0; w < c.length; w++)
    S[c[w]] = e.languages.bash[c[w]];
  e.languages.sh = e.languages.bash, e.languages.shell = e.languages.bash;
})(Prism);
Prism.languages.lua = {
  comment: /^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,
  // \z may be used to skip the following space
  string: {
    pattern: /(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[^z]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,
    greedy: !0
  },
  number: /\b0x[a-f\d]+(?:\.[a-f\d]*)?(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|(?:\.\d*)?(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,
  keyword: /\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,
  function: /(?!\d)\w+(?=\s*(?:[({]))/,
  operator: [
    /[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/,
    {
      // Match ".." but don't break "..."
      pattern: /(^|[^.])\.\.(?!\.)/,
      lookbehind: !0
    }
  ],
  punctuation: /[\[\](){},;]|\.+|:+/
};
(function(e) {
  var r = {
    pattern: /((?:^|[^\\$])(?:\\{2})*)\$(?:\w+|\{[^{}]*\})/,
    lookbehind: !0,
    inside: {
      "interpolation-punctuation": {
        pattern: /^\$\{?|\}$/,
        alias: "punctuation"
      },
      expression: {
        pattern: /[\s\S]+/,
        inside: null
        // see below
      }
    }
  };
  e.languages.groovy = e.languages.extend("clike", {
    string: {
      // https://groovy-lang.org/syntax.html#_dollar_slashy_string
      pattern: /'''(?:[^\\]|\\[\s\S])*?'''|'(?:\\.|[^\\'\r\n])*'/,
      greedy: !0
    },
    keyword: /\b(?:abstract|as|assert|boolean|break|byte|case|catch|char|class|const|continue|def|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|in|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|trait|transient|try|void|volatile|while)\b/,
    number: /\b(?:0b[01_]+|0x[\da-f_]+(?:\.[\da-f_p\-]+)?|[\d_]+(?:\.[\d_]+)?(?:e[+-]?\d+)?)[glidf]?\b/i,
    operator: {
      pattern: /(^|[^.])(?:~|==?~?|\?[.:]?|\*(?:[.=]|\*=?)?|\.[@&]|\.\.<|\.\.(?!\.)|-[-=>]?|\+[+=]?|!=?|<(?:<=?|=>?)?|>(?:>>?=?|=)?|&[&=]?|\|[|=]?|\/=?|\^=?|%=?)/,
      lookbehind: !0
    },
    punctuation: /\.+|[{}[\];(),:$]/
  }), e.languages.insertBefore("groovy", "string", {
    shebang: {
      pattern: /#!.+/,
      alias: "comment",
      greedy: !0
    },
    "interpolation-string": {
      // TODO: Slash strings (e.g. /foo/) can contain line breaks but this will cause a lot of trouble with
      // simple division (see JS regex), so find a fix maybe?
      pattern: /"""(?:[^\\]|\\[\s\S])*?"""|(["/])(?:\\.|(?!\1)[^\\\r\n])*\1|\$\/(?:[^/$]|\$(?:[/$]|(?![/$]))|\/(?!\$))*\/\$/,
      greedy: !0,
      inside: {
        interpolation: r,
        string: /[\s\S]+/
      }
    }
  }), e.languages.insertBefore("groovy", "punctuation", {
    "spock-block": /\b(?:and|cleanup|expect|given|setup|then|when|where):/
  }), e.languages.insertBefore("groovy", "function", {
    annotation: {
      pattern: /(^|[^.])@\w+/,
      lookbehind: !0,
      alias: "punctuation"
    }
  }), r.inside.expression.inside = e.languages.groovy;
})(Prism);
const te = /* @__PURE__ */ se({
  name: "AnchoHtmlNavBar",
  props: {
    type: {
      type: String,
      required: !1
    },
    content: {
      type: [String, Object, Number]
    },
    rawItem: {
      type: Object,
      required: !1
    },
    title: {
      type: String
    },
    parseScript: {
      type: String
    }
  },
  emits: ["click"],
  setup(e, {
    emit: r
  }) {
    const a = oe("ancho-html-nav-bar");
    let u = null, c = "";
    e.rawItem && (u = e.rawItem.rawItem, c = u.contentType);
    const S = $(e.type || c || ""), w = $("");
    let o = null;
    c === "IMAGE" && (o = u.sysImage), c === "RAW" || c === "HTML" ? c === "RAW" ? (S.value = "TEXT", w.value = u.caption) : w.value = u.content : ["VIDEO", "DIVIDER", "INFO", "WARNING", "ERROR"].includes(c) || c === "IMAGE" && o && (w.value = o);
    const g = (p) => /^https?:|^http?:|(\.png|\.svg|\.jpg|\.png|\.gif|\.psd|\.tif|\.bmp|\.jpeg)/.test(p), m = $({
      id: ne(),
      path: "",
      mute: !0,
      autoplay: !0,
      replay: !1,
      showcontrols: !0
    }), h = $({
      contentPosition: "center",
      html: ""
    }), f = $({
      type: "info",
      title: "",
      closeabled: !0,
      showIcon: !1
    }), b = $(""), A = $(!1), k = $([]), T = $(""), O = $([]), x = $(0), t = $(!1);
    let n = [], s = [];
    const i = $(!1), l = (p) => e.parseScript ? de.execScriptFn({
      value: p
    }, e.parseScript, {
      singleRowReturn: !0,
      isAsync: !1
    }) : p.replace(/@{[^,]*,"name":"(.*?)"}/g, "<span class='comment-tag'>@$1</span>").replace(/@{[^,]*,name=(.*?)}/g, "<span class='comment-tag'>@$1</span>").replace(/#{"id":"(.+?)","name":"(.+?)","identifier":"(.+?)","type":"(.+?)","icon":"((.|[\t\r\f\n\s])+?)"}/g, (d, v, L, B, P, j) => {
      const Z = j.trim(), q = JSON.stringify({
        id: v,
        name: L,
        identifier: B,
        type: P
      });
      return "<span markerClick='marker' params='".concat(q, "' class='comment-tag is-click'>").concat(Z, " ").concat(B, " ").concat(L, "</span>");
    }).replace(/#{"id":"(.+?)","name":"(.+?)","identifier":"(.+?)","icon":"((.|[\t\r\f\n\s])+?)"}/g, "<span class='comment-tag'>$4 $3 $2</span>").replace(/#{id=(.+?),name=(.+?),identifier=(.+?),icon=((.|[\t\r\f\n\s])+?)}/g, "<span class='comment-tag'>$4 $3 $2</span>"), E = (p) => p.replaceAll(/{"emoji":"(.+?)"}/g, (d, v) => {
      const L = decodeURIComponent(atob(v));
      return '<span class="emoji-tag">'.concat(L, "</span>");
    }).replaceAll(/<span\sdata-w-e-type="emoji"\sclass=['"]emoji['"]>(.+?)<\/span>/g, (d, v) => {
      const L = decodeURIComponent(atob(v));
      return "<span data-w-e-type=\"emoji\" class='emoji'>".concat(L, "</span>");
    }), _ = (p) => p.replaceAll(/<span data-w-e-type="insert" class='insert'>(.+?)<\/span>/g, (d, v) => {
      if (v) {
        const L = JSON.parse(v);
        Object.assign(L, {
          params: {
            readonly: !0
          }
        });
        const B = JSON.stringify(L);
        let P = "";
        switch (L.type) {
          case "date":
            P = '<span data-slate-inline="true"><date-elem data-value=\''.concat(B, "'></date-elem></span>");
            break;
          case "label":
            P = '<span data-slate-inline="true"><label-elem data-value=\''.concat(B, "'></label-elem></span>");
            break;
          case "prompt-box":
            P = "<p><prompt-box-elem data-value='".concat(B, "'></prompt-box-elem></p>");
            break;
          case "mind-map":
            P = "<p><mind-map-elem data-value='".concat(B, "'></mind-map-elem></p>");
            break;
          case "audio":
            P = "<p><audio-elem data-value='".concat(B, "'></audio-elem></p>");
            break;
          case "formula":
            P = '<span data-slate-inline="true"><formula-elem data-value=\''.concat(B, "'></formula-elem></span>");
            break;
          default:
            P = "";
            break;
        }
        return P;
      }
      return "";
    }).replaceAll(/<layout-elem data-w-e-type="layout" class='layout'>(.+?)<\/layout-elem>/g, (d, v) => {
      if (v) {
        const L = JSON.stringify({
          params: {
            readonly: !0
          }
        });
        return "<layout-elem class='layout' data-value='".concat(L, "'>").concat(v, "</layout-elem>");
      }
      return "";
    }).replaceAll(/<layout-column-elem data-w-e-type="layout-column" class='layout-column'>(.+?)<\/layout-column-elem>/g, (d, v) => v ? "<layout-column-elem class='layout-column'>".concat(v, "</layout-column-elem>") : ""), y = () => {
      if (S.value === "IMAGE" && typeof e.content == "string" && (g(e.content) ? w.value = {
        imagePath: e.content
      } : w.value = {
        cssClass: e.content
      }), ["TEXT", "HEADING1", "HEADING2", "HEADING3", "HEADING4", "HEADING5", "HEADING6", "PARAGRAPH", "HTML", "RAW"].includes(S.value) && (b.value = w.value, typeof b.value == "string")) {
        const p = b.value;
        b.value = p.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;nbsp;/g, " ").replace(/&nbsp;/g, " "), b.value = E(b.value), b.value = _(b.value), b.value = l(b.value);
      }
      if (["VIDEO", "DIVIDER", "INFO", "WARNING", "ERROR"].includes(S.value) && w.value) {
        let p = {};
        try {
          if (typeof w.value == "string")
            switch (p = new Function("return (".concat(w.value, ");"))(), S.value) {
              case "VIDEO":
                Object.assign(m.value, p);
                break;
              case "DIVIDER":
                Object.assign(h.value, p);
                break;
              case "INFO":
              case "WARNING":
              case "ERROR":
                f.value.type = S.value.toLocaleLowerCase(), Object.assign(f.value, p);
                break;
              default:
                break;
            }
        } catch (d) {
          ibiz.log.error(ibiz.i18n.t("component.rawItem.errorConfig", {
            type: S.value
          }));
        }
      }
    }, F = () => {
      if (s.length === 0)
        return;
      let p = n.length;
      s.forEach((d) => {
        const v = n.indexOf(d);
        v > -1 && p > v && (p = v);
      }), T.value = n[p];
    }, N = new IntersectionObserver((p) => {
      p.forEach((d) => {
        if (d.isIntersecting)
          d.target && d.target.id && s.push(d.target.id);
        else if (d.target && d.target.id) {
          const v = s.indexOf(d.target.id);
          v >= 0 && s.splice(v, 1);
        }
      }), F();
    }), U = (p, d = 1) => {
      if (d > 6)
        return [p];
      const v = [], L = new RegExp("<h".concat(d, "[\\s\\S]*?>[\\s\\S]*?<\\/h").concat(d, ">"), "g"), B = new RegExp("<h".concat(d, "[\\s\\S]*?>([\\s\\S]*?)<\\/h").concat(d, ">"), "g"), P = p.split(L), j = p.match(B) || [];
      j.length > 0 && (i.value = !0);
      for (let Z = 0; Z < P.length; Z++) {
        const q = "title_".concat(ne());
        n.push(q), v.push({
          id: q,
          title: j[Z - 1],
          level: d,
          children: U(P[Z], d + 1)
        });
      }
      return v;
    }, G = () => {
      var p;
      if (n = [], s = [], i.value = !1, k.value = [], O.value = [], S.value === "HTML" && b.value && typeof b.value == "string") {
        const d = ((p = b.value.match(/src="([^"]+)"/g)) == null ? void 0 : p.map((v) => v.slice(5, -1))) || [];
        O.value = d, k.value = U(b.value, 1);
      }
    }, W = (p) => {
      const d = document.getElementById(p);
      d && d.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, K = () => {
      A.value = !A.value;
    }, X = (p) => p.map((d) => [d.title ? I("p", {
      id: d.id,
      innerHTML: d.title
    }, null) : null, d.children && d.children.length > 0 ? X(d.children) : I("p", {
      innerHTML: d,
      onClick: D
    }, null)]), Y = (p) => {
      const d = />(.*?)</g;
      return (p.match(d) || []).map((L) => L.slice(1, -1)).join("");
    }, C = (p) => p.map((d) => I("div", {
      class: [a.bem("ancho", "title-item", "text")]
    }, [d.title ? I("p", {
      class: [a.bem("ancho", "title-item", "text-title"), a.bem("ancho", "title-item", "text-".concat(d.level)), a.is("ancho-select", T.value === d.id)],
      title: Y(d.title),
      innerHTML: d.title,
      onClick: () => W(d.id)
    }, null) : null, d.children && d.children.length > 0 ? C(d.children) : null])), R = (p) => {
      (p.key === "Escape" || p.keyCode === 27) && (t.value = !1, p.stopPropagation(), p.preventDefault());
    }, D = async (p) => {
      if (p && p.target instanceof HTMLElement && p.target.tagName === "IMG") {
        p.stopPropagation(), p.preventDefault();
        const d = p.target.getAttribute("src") || "";
        if (d) {
          const L = O.value.indexOf(d);
          x.value = L;
        }
        t.value = !0, await ee();
        const v = document.querySelector(".el-image-viewer__wrapper");
        v && v.addEventListener("keydown", R);
      }
    }, z = () => {
      t.value = !1;
    }, M = async (p) => {
      const d = p.target.getAttribute("markerClick"), v = p.target.getAttribute("params");
      !d || !v || r("click", p, JSON.parse(v));
    }, J = async () => {
      N.disconnect(), await ee(), n.forEach((p) => {
        const d = document.querySelector("#".concat(p));
        d && N.observe(d);
      });
    }, H = async () => {
      await ee(), we.highlightAll();
    };
    return y(), G(), ie(() => e.content, (p, d) => {
      p !== d && (w.value = p, y(), G(), J(), H());
    }, {
      immediate: !0
    }), {
      ns: a,
      rawItemText: b,
      playerParams: m,
      dividerParams: h,
      alertParams: f,
      rawItemType: S,
      rawItemContent: w,
      htmlContent: k,
      isCollapse: A,
      previewSrcList: O,
      selectAncho: T,
      showImg: t,
      previewImgIndex: x,
      showTitle: i,
      jumpAncho: W,
      changeCollapse: K,
      renderHTMLContent: X,
      renderAnchoList: C,
      closeImgPreview: z,
      imgClick: D,
      handleClick: M
    };
  },
  render() {
    const e = () => this.rawItemType === "IMAGE" ? I(V("i-biz-icon"), {
      class: [this.ns.e("image")],
      icon: this.rawItemContent
    }, null) : this.rawItemType === "TEXT" || this.rawItemType === "RAW" ? I("span", {
      class: this.ns.e("text")
    }, [this.rawItemText]) : this.rawItemType === "HEADING1" ? I("h1", {
      class: this.ns.e("h1")
    }, [this.rawItemText]) : this.rawItemType === "HEADING2" ? I("h2", {
      class: this.ns.e("h2")
    }, [this.rawItemText]) : this.rawItemType === "HEADING3" ? I("h3", {
      class: this.ns.e("h3")
    }, [this.rawItemText]) : this.rawItemType === "HEADING4" ? I("h4", {
      class: this.ns.e("h4")
    }, [this.rawItemText]) : this.rawItemType === "HEADING5" ? I("h5", {
      class: this.ns.e("h5")
    }, [this.rawItemText]) : this.rawItemType === "HEADING6" ? I("h6", {
      class: this.ns.e("h6")
    }, [this.rawItemText]) : this.rawItemType === "PARAGRAPH" ? I("p", {
      class: this.ns.e("paragraph")
    }, [this.rawItemText]) : this.rawItemType === "HTML" ? I("div", {
      class: this.ns.e("paragraph")
    }, [I("div", {
      class: this.ns.em("paragraph", "html-content")
    }, [this.renderHTMLContent(this.htmlContent)]), this.showTitle ? I("div", {
      class: this.ns.em("paragraph", "ancho-container")
    }, [I("div", {
      class: [this.ns.em("paragraph", "ancho"), this.ns.b("ancho"), this.ns.is("ancho-collapse", this.isCollapse)]
    }, [I("div", {
      class: this.ns.be("ancho", "directory"),
      title: this.title
    }, [I("i", {
      class: "fa fa-sitemap",
      "aria-hidden": "true",
      onClick: this.changeCollapse,
      title: this.isCollapse ? "展开" : "收起"
    }, null), this.isCollapse ? null : I("span", {
      class: this.ns.bem("ancho", "directory", "title")
    }, [this.title || "目录"])]), I("div", {
      class: this.ns.be("ancho", "title-item")
    }, [this.renderAnchoList(this.htmlContent)])])]) : null]) : this.rawItemType === "VIDEO" ? I("div", {
      class: this.ns.e("video")
    }, [I("video", {
      id: this.playerParams.id,
      src: this.playerParams.path,
      autoplay: this.playerParams.autoplay,
      controls: this.playerParams.showcontrols,
      loop: this.playerParams.replay,
      muted: this.playerParams.mute
    }, [I("source", {
      src: this.playerParams.path,
      type: "video/mp4"
    }, null), I("source", {
      src: this.playerParams.path,
      type: "video/ogg"
    }, null), I("source", {
      src: this.playerParams.path,
      type: "video/webm"
    }, null), ibiz.i18n.t("component.rawItem.noSupportVideo")])]) : this.rawItemType === "DIVIDER" ? I(V("el-divider"), {
      "content-position": this.dividerParams.contentPosition
    }, {
      default: () => [I("span", {
        innerHTML: this.dividerParams.html
      }, null)]
    }) : this.rawItemType === "INFO" || this.rawItemType === "WARNING" || this.rawItemType === "ERROR" ? I(V("el-alert"), {
      title: this.alertParams.title,
      type: this.alertParams.type,
      "show-icon": this.alertParams.showIcon,
      closable: this.alertParams.closeabled
    }, null) : this.rawItemType === "MARKDOWN" ? I(V("iBizMarkDown"), {
      value: this.content,
      disabled: !0
    }, null) : (["PLACEHOLDER"].includes(this.rawItemType), null);
    return I("div", {
      class: this.ns.b(),
      onClick: this.handleClick
    }, [e(), this.showImg ? I(V("el-image-viewer"), {
      urlList: this.previewSrcList,
      "initial-index": this.previewImgIndex,
      "hide-on-click-modal": !0,
      onClose: this.closeImgPreview
    }, null) : null]);
  }
}), re = /* @__PURE__ */ se({
  name: "AnchoHtml",
  props: he(),
  emits: {
    ...me(),
    /** 点击事件 */
    click: (e, r) => !0
  },
  setup(e, {
    emit: r
  }) {
    var b, A, k, T, O, x;
    const a = oe("raw"), c = e.controller.model, S = $(""), w = $(""), o = $("");
    let g = "TEXT", m = "";
    c.contentType && (g = c.contentType), (b = c.editorParams) != null && b.contenttype && (g = (A = c.editorParams) == null ? void 0 : A.contenttype), (k = c.editorParams) != null && k.template && (m = c.editorParams.template.replaceAll("//n", "\n")), (T = c.editorParams) != null && T.TEMPLATE && (m = c.editorParams.TEMPLATE.replaceAll("//n", "\n")), (O = c.editorParams) != null && O.TITLE && (w.value = e.data[c.editorParams.TITLE]), (x = c.editorParams) != null && x.PARSESCRIPT && (o.value = c.editorParams.PARSESCRIPT);
    const h = be(() => !!(e.controlParams && e.controlParams.editmode === "hover"));
    return ie(() => e.value, async (t, n) => {
      if (t !== n && ((typeof t == "string" || typeof t == "number") && (S.value = t), m && t)) {
        let s = null;
        if (typeof t == "string")
          try {
            s = JSON.parse(t);
          } catch (i) {
            ibiz.log.error("JSON字符串转换错误");
          }
        S.value = await ibiz.util.hbs.render(m, s || t);
      }
    }, {
      immediate: !0
    }), {
      ns: a,
      content: S,
      type: g,
      template: m,
      title: w,
      parseScript: o,
      showFormDefaultContent: h,
      onClick: (t, n) => {
        t.stopPropagation(), t.preventDefault(), r("click", t, {
          data: n
        });
      }
    };
  },
  render() {
    return I("div", {
      class: [this.ns.b(), this.disabled ? this.ns.m("disabled") : "", this.readonly ? this.ns.m("readonly") : "", this.ns.is("show-default", this.showFormDefaultContent)]
    }, [this.content && I(te, {
      class: this.ns.b("content"),
      content: this.content,
      parseScript: this.parseScript,
      type: this.type,
      title: this.title,
      onClick: this.onClick
    }, null)]);
  }
});
class Se extends pe {
}
class ve {
  constructor() {
    Q(this, "formEditor", "AnchoHtml");
    Q(this, "gridEditor", "AnchoHtml");
  }
  async createController(r, a) {
    const u = new Se(r, a);
    return await u.init(), u;
  }
}
const Ae = new ge(import.meta.url);
class Ie {
  /**
   * @description 获取Luckysheet对象
   * @static
   * @return {*}  {*}
   * @memberof MathJax
   */
  static getMathJax() {
    return window.MathJax;
  }
  /**
   * 动态加载脚本
   *
   * @static
   * @return {*}
   * @memberof MathJax
   */
  static loadScript(r) {
    return new Promise((a, u) => {
      const c = document.createElement("script");
      c.src = r, c.onload = a, c.onerror = u, document.head.appendChild(c);
    });
  }
  /**
   * 配置全局 MathJax
   * @param {FnType} callback Mathjax 加载完成的回调
   */
  static initMathJax(r) {
    window.MathJax = {
      tex: {
        inlineMath: [["$", "$"]],
        processEnvironments: !0,
        processRefs: !0
      },
      options: {
        skipHtmlTags: ["noscript", "style", "textarea", "pre", "code"],
        ignoreHtmlClass: "tex2jax_ignore"
      },
      startup: {
        pageReady: () => r && r()
      },
      svg: {
        fontCache: "global"
      }
    };
  }
  /**
   * 手动渲染公式
   * @param {HTMLElement} el 需要触发渲染的节点
   * @returns Promise
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static renderFormula(r) {
    return !window.MathJax || !window.MathJax.typesetPromise ? Promise.reject() : (r && !Array.isArray(r) && (r = [r]), window.MathJax.typesetPromise(r));
  }
  /**
   * 加载MathJax
   *
   * @static
   * @return {*}
   * @memberof MathJax
   */
  static loadMathJax() {
    return new Promise((r, a) => {
      if (this.getMathJax())
        r();
      else {
        this.initMathJax();
        const c = [this.loadScript(
          // 插件中使用 resource.dir
          Ae.dir("assets/mathjax/plugins/js/tex-svg.js")
          // 模板中使用
          // '/assets/mathjax/plugins/js/tex-svg.js',
        )];
        Promise.all(c).then(() => {
          r();
        }).catch(() => {
          ibiz.message.error("加载mathJax静态资源失败,请确认静态资源是否存在！"), a();
        });
      }
    });
  }
}
Ie.loadMathJax();
const Oe = {
  install(e) {
    e.component(te.name, te), e.component(re.name, re), fe("EDITOR_CUSTOMSTYLE_ANCHO_HTML", () => new ve());
  }
};
export {
  Oe as default
};
