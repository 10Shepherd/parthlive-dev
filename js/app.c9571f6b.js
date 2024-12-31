var _____WB$wombat$assign$function_____ = function (name) {
  return (
    (self._wb_wombat &&
      self._wb_wombat.local_init &&
      self._wb_wombat.local_init(name)) ||
    self[name]
  );
};
if (!self.__WB_pmw) {
  self.__WB_pmw = function (obj) {
    this.__WB_source = obj;
    return this;
  };
}
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

  (function (t) {
    function e(e) {
      for (
        var r, o, s = e[0], c = e[1], l = e[2], f = 0, p = [];
        f < s.length;
        f++
      )
        (o = s[f]),
          Object.prototype.hasOwnProperty.call(n, o) && n[o] && p.push(n[o][0]),
          (n[o] = 0);
      for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (t[r] = c[r]);
      u && u(e);
      while (p.length) p.shift()();
      return i.push.apply(i, l || []), a();
    }
    function a() {
      for (var t, e = 0; e < i.length; e++) {
        for (var a = i[e], r = !0, s = 1; s < a.length; s++) {
          var c = a[s];
          0 !== n[c] && (r = !1);
        }
        r && (i.splice(e--, 1), (t = o((o.s = a[0]))));
      }
      return t;
    }
    var r = {},
      n = { app: 0 },
      i = [];
    function o(e) {
      if (r[e]) return r[e].exports;
      var a = (r[e] = { i: e, l: !1, exports: {} });
      return t[e].call(a.exports, a, a.exports, o), (a.l = !0), a.exports;
    }
    (o.m = t),
      (o.c = r),
      (o.d = function (t, e, a) {
        o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a });
      }),
      (o.r = function (t) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (o.t = function (t, e) {
        if ((1 & e && (t = o(t)), 8 & e)) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var a = Object.create(null);
        if (
          (o.r(a),
          Object.defineProperty(a, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var r in t)
            o.d(
              a,
              r,
              function (e) {
                return t[e];
              }.bind(null, r)
            );
        return a;
      }),
      (o.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t["default"];
              }
            : function () {
                return t;
              };
        return o.d(e, "a", e), e;
      }),
      (o.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (o.p = "/");
    var s = (window["webpackJsonp"] = window["webpackJsonp"] || []),
      c = s.push.bind(s);
    (s.push = e), (s = s.slice());
    for (var l = 0; l < s.length; l++) e(s[l]);
    var u = c;
    i.push([0, "chunk-vendors"]), a();
  })({
    0: function (t, e, a) {
      t.exports = a("56d7");
    },
    "034f": function (t, e, a) {
      "use strict";
      var r = a("85ec"),
        n = a.n(r);
      n.a;
    },
    "1aa5": function (t, e, a) {
      t.exports = a.p + "img/ocd.4d62372e.png";
    },
    "56d7": function (t, e, a) {
      "use strict";
      a.r(e);
      a("e260"), a("e6cf"), a("cca6"), a("a79d");
      var r = a("2b0e"),
        n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { attrs: { id: "app" } }, [a("router-view")], 1);
        },
        i = [],
        o = (a("034f"), a("2877")),
        s = {},
        c = Object(o["a"])(s, n, i, !1, null, null, null),
        l = c.exports,
        u = a("8c4f"),
        f = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", [
            a("div", { staticClass: "white black-text" }, [
              a("div", { staticClass: "white black-text right-align" }, [
                a("div", { staticClass: "top-contact-bar" }, [
                  a(
                    "span",
                    {
                      staticClass: "institute-number",
                      on: {
                        click: function (e) {
                          return t.call("8384858685");
                        },
                      },
                    },
                    [
                      t._v("help desk "),
                      a(
                        "i",
                        {
                          staticClass: "material-icons",
                          staticStyle: {
                            "padding-right": "4px",
                            "font-size": "1rem",
                            "line-height": "1rem",
                            "vertical-align": "middle",
                          },
                        },
                        [t._v("call")]
                      ),
                      t._v("8384858685"),
                    ]
                  ),
                ]),
              ]),
            ]),
            t._m(0),
            t._m(1),
          ]);
        },
        p = [
          function () {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
            return r("div", { staticClass: "page" }, [
              r("div", { staticClass: "header" }, [
                r(
                  "a",
                  {
                    attrs: { href: "https://parthinfo.com", target: "_blank" },
                  },
                  [r("img", { staticClass: "logo", attrs: { src: a("cf05") } })]
                ),
                r("div", { staticClass: "title" }, [
                  r("b", [t._v("Parth Live")]),
                ]),
                r("div", { staticClass: "slogan" }, [
                  t._v("“Rise, awake and stop not till the goal is reached”."),
                ]),
                r("div", { staticClass: "section" }, [
                  r(
                    "div",
                    {
                      staticStyle: {
                        padding: "56.25% 0 0 0",
                        position: "relative",
                        "border-radius": "10px",
                        overflow: "hidden",
                        background: "black",
                      },
                    },
                    [
                      r("iframe", {
                        staticStyle: {
                          position: "absolute",
                          top: "0",
                          left: "0",
                          width: "100%",
                          height: "100%",
                        },
                        attrs: {
                          src: "https://www.youtube.com/embed/l-nLZzy-LEA",
                          frameborder: "0",
                          allow: "autoplay; fullscreen; picture-in-picture;",
                          allowfullscreen: "",
                        },
                      }),
                    ]
                  ),
                ]),
                r(
                  "a",
                  {
                    staticClass: "btn-flat institute-number feedback-btn",
                    attrs: {
                      target: "_blank",
                      href: "https://docs.google.com/forms/d/e/1FAIpQLSeHp9h23v1vhoaSzI6UdxVzEL_QDALOJmYgtNKgn28L6A0a7w/viewform?usp=sf_link",
                    },
                  },
                  [t._v("Feedback - अभिप्राय")]
                ),
              ]),
            ]);
          },
          function () {
            var t = this,
              e = t.$createElement,
              a = t._self._c || e;
            return a("footer", { staticClass: "page-footer grey lighten-3" }, [
              a("div", { staticClass: "footer-copyright" }, [
                a("div", { staticClass: "container" }, [
                  a(
                    "a",
                    {
                      staticClass: "black-text",
                      attrs: {
                        href: "https://parthinfo.com",
                        target: "_blank",
                      },
                    },
                    [t._v("© 2020 Parth Knowledge Network Pvt. Ltd")]
                  ),
                ]),
              ]),
            ]);
          },
        ],
        d = {
          methods: {
            call: function (t) {
              var e = "tel:" + t;
              window.open(e, "_blank");
            },
          },
        },
        h = d,
        v = (a("f57c"), Object(o["a"])(h, f, p, !1, null, "336fc1c9", null)),
        b = v.exports;
      r["a"].use(u["a"]);
      var g = [
          { path: "/", redirect: "/home" },
          { path: "/home", name: "Home", component: b },
          { path: "*", redirect: "/" },
        ],
        m = new u["a"]({ routes: g }),
        _ = m;
      (r["a"].config.productionTip = !1),
        new r["a"]({
          router: _,
          render: function (t) {
            return t(l);
          },
        }).$mount("#app");
    },
    "79bc": function (t, e, a) {},
    "85ec": function (t, e, a) {},
    cf05: function (t, e, a) {
      t.exports = a.p + "img/logo.55c195c9.png";
    },
    f57c: function (t, e, a) {
      "use strict";
      var r = a("79bc"),
        n = a.n(r);
      n.a;
    },
  });
  //# sourceMappingURL=app.c9571f6b.js.map
}
/*
     FILE ARCHIVED ON 02:42:55 Dec 08, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:25:53 Mar 15, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.15
  exclusion.robots.policy: 0.127
  cdx.remote: 0.182
  esindex: 0.025
  LoadShardBlock: 529.027 (6)
  PetaboxLoader3.datanode: 332.846 (9)
  load_resource: 278.174 (2)
  PetaboxLoader3.resolve: 117.097 (2)
  loaddict: 31.687
*/