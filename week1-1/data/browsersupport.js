!(function (e, n, s) {
  function t(e, n) {
    return typeof e === n;
  }
  function o() {
    var e, n, s, o, a, i, l;
    for (var c in f)
      if (f.hasOwnProperty(c)) {
        if (
          ((e = []),
          (n = f[c]),
          n.name &&
            (e.push(n.name.toLowerCase()),
            n.options && n.options.aliases && n.options.aliases.length))
        )
          for (s = 0; s < n.options.aliases.length; s++)
            e.push(n.options.aliases[s].toLowerCase());
        for (o = t(n.fn, "function") ? n.fn() : n.fn, a = 0; a < e.length; a++)
          (i = e[a]),
            (l = i.split(".")),
            1 === l.length
              ? (Modernizr[l[0]] = o)
              : (!Modernizr[l[0]] ||
                  Modernizr[l[0]] instanceof Boolean ||
                  (Modernizr[l[0]] = new Boolean(Modernizr[l[0]])),
                (Modernizr[l[0]][l[1]] = o)),
            r.push((o ? "" : "no-") + l.join("-"));
      }
  }
  function a(e) {
    var n = c.className,
      s = Modernizr._config.classPrefix || "";
    if ((u && (n = n.baseVal), Modernizr._config.enableJSClass)) {
      var t = new RegExp("(^|\\s)" + s + "no-js(\\s|$)");
      n = n.replace(t, "$1" + s + "js$2");
    }
    Modernizr._config.enableClasses &&
      ((n += " " + s + e.join(" " + s)),
      u ? (c.className.baseVal = n) : (c.className = n));
  }
  function i() {
    return "function" != typeof n.createElement
      ? n.createElement(arguments[0])
      : u
      ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0])
      : n.createElement.apply(n, arguments);
  }
  var r = [],
    f = [],
    l = {
      _version: "3.3.1",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0,
      },
      _q: [],
      on: function (e, n) {
        var s = this;
        setTimeout(function () {
          n(s[e]);
        }, 0);
      },
      addTest: function (e, n, s) {
        f.push({ name: e, fn: n, options: s });
      },
      addAsyncTest: function (e) {
        f.push({ name: null, fn: e });
      },
    },
    Modernizr = function () {};
  (Modernizr.prototype = l), (Modernizr = new Modernizr());
  var c = n.documentElement,
    u = "svg" === c.nodeName.toLowerCase();
  Modernizr.addTest("inlinesvg", function () {
    var e = i("div");
    return (
      (e.innerHTML = "<svg/>"),
      "http://www.w3.org/2000/svg" ==
        ("undefined" != typeof SVGRect &&
          e.firstChild &&
          e.firstChild.namespaceURI)
    );
  });
  var p = "Moz O ms Webkit",
    d = l._config.usePrefixes ? p.split(" ") : [];
  l._cssomPrefixes = d;
  var m = function (n) {
    var t,
      o = g.length,
      a = e.CSSRule;
    if ("undefined" == typeof a) return s;
    if (!n) return !1;
    if (
      ((n = n.replace(/^@/, "")),
      (t = n.replace(/-/g, "_").toUpperCase() + "_RULE"),
      t in a)
    )
      return "@" + n;
    for (var i = 0; o > i; i++) {
      var r = g[i],
        f = r.toUpperCase() + "_" + t;
      if (f in a) return "@-" + r.toLowerCase() + "-" + n;
    }
    return !1;
  };
  l.atRule = m;
  var g = l._config.usePrefixes
    ? " -webkit- -moz- -o- -ms- ".split(" ")
    : ["", ""];
  (l._prefixes = g), o(), a(r), delete l.addTest, delete l.addAsyncTest;
  for (var v = 0; v < Modernizr._q.length; v++) Modernizr._q[v]();
  e.Modernizr = Modernizr;
})(window, document);
(function () {
  function f(a) {
    var b = 0;
    return function () {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
    };
  }
  function k(a) {
    var b =
      "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    return b ? b.call(a) : { next: f(a) };
  }
  function l(a) {
    for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
    return c;
  }
  var m =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            function b() {}
            b.prototype = a;
            return new b();
          },
    n;
  if ("function" == typeof Object.setPrototypeOf) n = Object.setPrototypeOf;
  else {
    var q;
    a: {
      var r = { l: !0 },
        t = {};
      try {
        t.__proto__ = r;
        q = t.l;
        break a;
      } catch (a) {}
      q = !1;
    }
    n = q
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var u = n,
    v =
      "function" == typeof Object.defineProperties
        ? Object.defineProperty
        : function (a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value);
          },
    w =
      "undefined" != typeof window && window === this
        ? this
        : "undefined" != typeof global && null != global
        ? global
        : this;
  function x(a) {
    if (a) {
      for (var b = w, c = ["Object", "is"], d = 0; d < c.length - 1; d++) {
        var e = c[d];
        e in b || (b[e] = {});
        b = b[e];
      }
      c = c[c.length - 1];
      d = b[c];
      a = a(d);
      a != d &&
        null != a &&
        v(b, c, { configurable: !0, writable: !0, value: a });
    }
  }
  x(function (a) {
    return a
      ? a
      : function (a, c) {
          return a === c ? 0 !== a || 1 / a === 1 / c : a !== a && c !== c;
        };
  });
  function y(a) {
    var b = typeof a;
    if ("object" == b)
      if (a) {
        if (a instanceof Array) return "array";
        if (a instanceof Object) return b;
        var c = Object.prototype.toString.call(a);
        if ("[object Window]" == c) return "object";
        if (
          "[object Array]" == c ||
          ("number" == typeof a.length &&
            "undefined" != typeof a.splice &&
            "undefined" != typeof a.propertyIsEnumerable &&
            !a.propertyIsEnumerable("splice"))
        )
          return "array";
        if (
          "[object Function]" == c ||
          ("undefined" != typeof a.call &&
            "undefined" != typeof a.propertyIsEnumerable &&
            !a.propertyIsEnumerable("call"))
        )
          return "function";
      } else return "null";
    else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b;
  }
  function z(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.s = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
    a.u = function (a, c, g) {
      for (
        var d = Array(arguments.length - 2), e = 2;
        e < arguments.length;
        e++
      )
        d[e - 2] = arguments[e];
      return b.prototype[c].apply(a, d);
    };
  }
  function A(a) {
    var b = window.location.search;
    return Modernizr.inlinesvg ? !1 : (location.replace(a + b), !0);
  }
  var B = ["ispring", "compatibility", "performRedirectIfNeeded"],
    C = this;
  B[0] in C ||
    "undefined" == typeof C.execScript ||
    C.execScript("var " + B[0]);
  for (var D; B.length && (D = B.shift()); ) {
    var E;
    if ((E = !B.length)) E = void 0 !== A;
    E
      ? (C[D] = A)
      : (C = C[D] && C[D] !== Object.prototype[D] ? C[D] : (C[D] = {}));
  }
  A("data/html5-unsupported.html");
  function F(a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, F);
    else {
      var b = Error().stack;
      b && (this.stack = b);
    }
    a && (this.message = String(a));
  }
  z(F, Error);
  F.prototype.name = "CustomError";
  function G(a, b) {
    a = a.split("%s");
    for (var c = "", d = a.length - 1, e = 0; e < d; e++)
      c += a[e] + (e < b.length ? b[e] : "%s");
    F.call(this, c + a[d]);
  }
  z(G, F);
  G.prototype.name = "AssertionError";
  function H(a) {
    throw a;
  }
  function I(a, b, c) {
    if (!a) {
      var d = "Assertion failed";
      if (b) {
        d += ": " + b;
        var e = Array.prototype.slice.call(arguments, 2);
      }
      d = new G("" + d, e || []);
      H(d);
    }
    return a;
  }
  function J(a, b) {
    H(
      new G(
        "Failure" + (a ? ": " + a : ""),
        Array.prototype.slice.call(arguments, 1)
      )
    );
  }
  window.onerror = function (a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
    b = k(b);
    b.next();
    b.next();
    b.next();
    b.next();
    b.next();
    return !0;
  };
  H = function (a) {
    try {
      throw Error(a.message);
    } catch (b) {}
  };
  this.console ||
    ((window._log = ""),
    (this.console = {
      log: function (a) {
        window._log += "\n" + a;
      },
      warn: function (a) {
        window._log += "\nwarn: " + a;
      },
      error: function (a) {
        window._log += "\nerror: " + a;
      },
    }));
  var K = Array.prototype.indexOf
    ? function (a, b) {
        I(null != a.length);
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if ("string" == typeof a)
          return "string" == typeof b && 1 == b.length ? a.indexOf(b, 0) : -1;
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      };
  function L(a, b) {
    for (var c = 1; c < arguments.length; c++) {
      var d = arguments[c],
        e = y(d);
      if ("array" == e || ("object" == e && "number" == typeof d.length)) {
        e = a.length || 0;
        var g = d.length || 0;
        a.length = e + g;
        for (var h = 0; h < g; h++) a[e + h] = d[h];
      } else a.push(d);
    }
  }
  function M(a, b, c, d) {
    I(null != a.length);
    Array.prototype.splice.apply(a, N(arguments, 1));
  }
  function N(a, b, c) {
    I(null != a.length);
    return 2 >= arguments.length
      ? Array.prototype.slice.call(a, b)
      : Array.prototype.slice.call(a, b, c);
  }
  function O() {
    this.c = this.b = this.f = null;
  }
  O.prototype.push = function (a, b) {
    if (0 == b) this.c = this.c || [];
    else if (
      ((this.f = this.f || [0]), (this.b = this.b || {}), !(b in this.b))
    ) {
      this.b[b] = [];
      var c = this.f;
      var d = 0;
      for (var e = c.length, g; d < e; ) {
        var h = (d + e) >> 1;
        var p = c[h];
        p = b > p ? 1 : b < p ? -1 : 0;
        0 < p ? (d = h + 1) : ((e = h), (g = !p));
      }
      d = g ? d : ~d;
      0 > d && M(c, -(d + 1), 0, b);
    }
    b = P(this, b);
    I(b).push(a);
  };
  O.prototype.remove = function (a, b) {
    if ((b = P(this, b)))
      (a = K(b, a)),
        0 <= a && (I(null != b.length), Array.prototype.splice.call(b, a, 1));
  };
  function Q(a, b) {
    return 0 == b ? a.c || [] : b in I(a.b) ? I(P(a, b)) : [];
  }
  function R(a) {
    if (!a.b) return a.c ? a.c.slice() : [];
    for (var b = [], c = I(a.f), d = 0; d < c.length; ++d) {
      var e = P(a, c[d]);
      e && L(b, e);
    }
    return b;
  }
  function P(a, b) {
    return 0 == b ? a.c : I(a.b)[b];
  }
  function S(a) {
    this.h = this.a = null;
    this.j = void 0 === a ? null : a;
  }
  function T() {}
  S.prototype = m(T.prototype);
  S.prototype.constructor = S;
  if (u) u(S, T);
  else
    for (var U in T)
      if ("prototype" != U)
        if (Object.defineProperties) {
          var V = Object.getOwnPropertyDescriptor(T, U);
          V && Object.defineProperty(S, U, V);
        } else S[U] = T[U];
  S.s = T.prototype;
  S.prototype.m = function () {
    return this.j;
  };
  S.prototype.addHandler = function (a, b, c) {
    this.a = this.a || new O();
    this.a.push({ g: a, context: b }, c || 0);
  };
  S.prototype.removeHandler = function (a, b, c) {
    c = c || 0;
    if (this.a)
      for (var d = Q(this.a, c), e = d.length, g = 0; g < e; ++g) {
        var h = d[g];
        if (h.g == a && h.context == b) {
          a = g;
          if ((c = P(this.a, c)))
            I(null != c.length), Array.prototype.splice.call(c, a, 1);
          break;
        }
      }
    else J("EventDispatcher has no handlers!");
  };
  S.prototype.o = function (a, b, c) {
    if (!this.a) return !1;
    c = Q(this.a, c || 0);
    for (var d = c.length, e = 0; e < d; ++e) {
      var g = c[e];
      if (g.g == a && g.context == b) return !0;
    }
    return !1;
  };
  S.prototype.i = function (a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
    if (this.a) {
      c = R(this.a);
      for (var d = c.length, e = 0; e < d; ++e) {
        var g = c[e];
        if (-1 != K(R(this.a), g))
          try {
            g.g.apply(g.context, arguments);
          } catch (h) {}
      }
    }
    this.h &&
      this.h.forEach(function (a) {
        a.i.apply(a, b instanceof Array ? b : l(k(b)));
      });
  };
  S.prototype.dispatch = S.prototype.i;
  S.prototype.hasHandler = S.prototype.o;
  S.prototype.removeHandler = S.prototype.removeHandler;
  S.prototype.addHandler = S.prototype.addHandler;
  S.prototype.eventOwner = S.prototype.m;
})();
