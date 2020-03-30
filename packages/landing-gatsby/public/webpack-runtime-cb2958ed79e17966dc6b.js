!(function(e) {
  function s(s) {
    for (
      var o, n, r = s[0], p = s[1], d = s[2], i = 0, f = [];
      i < r.length;
      i++
    )
      (n = r[i]),
        Object.prototype.hasOwnProperty.call(t, n) && t[n] && f.push(t[n][0]),
        (t[n] = 0);
    for (o in p) Object.prototype.hasOwnProperty.call(p, o) && (e[o] = p[o]);
    for (m && m(s); f.length; ) f.shift()();
    return a.push.apply(a, d || []), c();
  }
  function c() {
    for (var e, s = 0; s < a.length; s++) {
      for (var c = a[s], o = !0, n = 1; n < c.length; n++) {
        var p = c[n];
        0 !== t[p] && (o = !1);
      }
      o && (a.splice(s--, 1), (e = r((r.s = c[0]))));
    }
    return e;
  }
  var o = {},
    n = { 38: 0 },
    t = { 38: 0 },
    a = [];
  function r(s) {
    if (o[s]) return o[s].exports;
    var c = (o[s] = { i: s, l: !1, exports: {} });
    return e[s].call(c.exports, c, c.exports, r), (c.l = !0), c.exports;
  }
  (r.e = function(e) {
    var s = [];
    n[e]
      ? s.push(n[e])
      : 0 !== n[e] &&
        { 1: 1 }[e] &&
        s.push(
          (n[e] = new Promise(function(s, c) {
            for (
              var o =
                  ({
                    1: 'styles',
                    3: 'component---src-pages-404-js',
                    4: 'component---src-pages-about-company-js',
                    5: 'component---src-pages-about-customers-js',
                    6: 'component---src-pages-about-partners-js',
                    7: 'component---src-pages-about-team-js',
                    8: 'component---src-pages-contact-js',
                    9: 'component---src-pages-index-js',
                    10: 'component---src-pages-products-universal-commerce-suite-js',
                    11: 'component---src-pages-services-5-g-js',
                    12: 'component---src-pages-services-analytics-insights-js',
                    13: 'component---src-pages-services-apis-graphql-js',
                    14: 'component---src-pages-services-cloud-transformation-js',
                    15: 'component---src-pages-services-core-media-js',
                    16: 'component---src-pages-services-dr-commerce-js',
                    17: 'component---src-pages-services-elastic-path-js',
                    18: 'component---src-pages-services-hcl-commerce-js',
                    19: 'component---src-pages-services-ibm-redhat-js',
                    20: 'component---src-pages-services-microservice-mesh-js',
                    21: 'component---src-pages-services-social-commerce-js',
                    22: 'component---src-pages-services-strategy-roadmap-js',
                    23: 'component---src-pages-services-technology-js',
                    24: 'component---src-pages-solutions-automation-ai-js',
                    25: 'component---src-pages-solutions-b-2-b-js',
                    26: 'component---src-pages-solutions-b-2-c-js',
                    27: 'component---src-pages-solutions-banking-js',
                    28: 'component---src-pages-solutions-digital-experience-cx-js',
                    29: 'component---src-pages-solutions-experience-analytics-js',
                    30: 'component---src-pages-solutions-food-grocery-js',
                    31: 'component---src-pages-solutions-headless-commerce-js',
                    32: 'component---src-pages-solutions-iot-blockchain-js',
                    33: 'component---src-pages-solutions-marketing-js',
                    34: 'component---src-pages-solutions-omnichannel-js',
                    35: 'component---src-pages-solutions-order-management-js',
                    36: 'component---src-pages-solutions-retail-js',
                    37: 'component---src-pages-testpage-js',
                  }[e] || e) +
                  '.' +
                  {
                    1: '2a898155daf2cbf35607',
                    3: '31d6cfe0d16ae931b73c',
                    4: '31d6cfe0d16ae931b73c',
                    5: '31d6cfe0d16ae931b73c',
                    6: '31d6cfe0d16ae931b73c',
                    7: '31d6cfe0d16ae931b73c',
                    8: '31d6cfe0d16ae931b73c',
                    9: '31d6cfe0d16ae931b73c',
                    10: '31d6cfe0d16ae931b73c',
                    11: '31d6cfe0d16ae931b73c',
                    12: '31d6cfe0d16ae931b73c',
                    13: '31d6cfe0d16ae931b73c',
                    14: '31d6cfe0d16ae931b73c',
                    15: '31d6cfe0d16ae931b73c',
                    16: '31d6cfe0d16ae931b73c',
                    17: '31d6cfe0d16ae931b73c',
                    18: '31d6cfe0d16ae931b73c',
                    19: '31d6cfe0d16ae931b73c',
                    20: '31d6cfe0d16ae931b73c',
                    21: '31d6cfe0d16ae931b73c',
                    22: '31d6cfe0d16ae931b73c',
                    23: '31d6cfe0d16ae931b73c',
                    24: '31d6cfe0d16ae931b73c',
                    25: '31d6cfe0d16ae931b73c',
                    26: '31d6cfe0d16ae931b73c',
                    27: '31d6cfe0d16ae931b73c',
                    28: '31d6cfe0d16ae931b73c',
                    29: '31d6cfe0d16ae931b73c',
                    30: '31d6cfe0d16ae931b73c',
                    31: '31d6cfe0d16ae931b73c',
                    32: '31d6cfe0d16ae931b73c',
                    33: '31d6cfe0d16ae931b73c',
                    34: '31d6cfe0d16ae931b73c',
                    35: '31d6cfe0d16ae931b73c',
                    36: '31d6cfe0d16ae931b73c',
                    37: '31d6cfe0d16ae931b73c',
                  }[e] +
                  '.css',
                t = r.p + o,
                a = document.getElementsByTagName('link'),
                p = 0;
              p < a.length;
              p++
            ) {
              var d =
                (m = a[p]).getAttribute('data-href') || m.getAttribute('href');
              if ('stylesheet' === m.rel && (d === o || d === t)) return s();
            }
            var i = document.getElementsByTagName('style');
            for (p = 0; p < i.length; p++) {
              var m;
              if ((d = (m = i[p]).getAttribute('data-href')) === o || d === t)
                return s();
            }
            var f = document.createElement('link');
            (f.rel = 'stylesheet'),
              (f.type = 'text/css'),
              (f.onload = s),
              (f.onerror = function(s) {
                var o = (s && s.target && s.target.src) || t,
                  a = new Error(
                    'Loading CSS chunk ' + e + ' failed.\n(' + o + ')'
                  );
                (a.code = 'CSS_CHUNK_LOAD_FAILED'),
                  (a.request = o),
                  delete n[e],
                  f.parentNode.removeChild(f),
                  c(a);
              }),
              (f.href = t),
              document.getElementsByTagName('head')[0].appendChild(f);
          }).then(function() {
            n[e] = 0;
          }))
        );
    var c = t[e];
    if (0 !== c)
      if (c) s.push(c[2]);
      else {
        var o = new Promise(function(s, o) {
          c = t[e] = [s, o];
        });
        s.push((c[2] = o));
        var a,
          p = document.createElement('script');
        (p.charset = 'utf-8'),
          (p.timeout = 120),
          r.nc && p.setAttribute('nonce', r.nc),
          (p.src = (function(e) {
            return (
              r.p +
              '' +
              ({
                1: 'styles',
                3: 'component---src-pages-404-js',
                4: 'component---src-pages-about-company-js',
                5: 'component---src-pages-about-customers-js',
                6: 'component---src-pages-about-partners-js',
                7: 'component---src-pages-about-team-js',
                8: 'component---src-pages-contact-js',
                9: 'component---src-pages-index-js',
                10: 'component---src-pages-products-universal-commerce-suite-js',
                11: 'component---src-pages-services-5-g-js',
                12: 'component---src-pages-services-analytics-insights-js',
                13: 'component---src-pages-services-apis-graphql-js',
                14: 'component---src-pages-services-cloud-transformation-js',
                15: 'component---src-pages-services-core-media-js',
                16: 'component---src-pages-services-dr-commerce-js',
                17: 'component---src-pages-services-elastic-path-js',
                18: 'component---src-pages-services-hcl-commerce-js',
                19: 'component---src-pages-services-ibm-redhat-js',
                20: 'component---src-pages-services-microservice-mesh-js',
                21: 'component---src-pages-services-social-commerce-js',
                22: 'component---src-pages-services-strategy-roadmap-js',
                23: 'component---src-pages-services-technology-js',
                24: 'component---src-pages-solutions-automation-ai-js',
                25: 'component---src-pages-solutions-b-2-b-js',
                26: 'component---src-pages-solutions-b-2-c-js',
                27: 'component---src-pages-solutions-banking-js',
                28: 'component---src-pages-solutions-digital-experience-cx-js',
                29: 'component---src-pages-solutions-experience-analytics-js',
                30: 'component---src-pages-solutions-food-grocery-js',
                31: 'component---src-pages-solutions-headless-commerce-js',
                32: 'component---src-pages-solutions-iot-blockchain-js',
                33: 'component---src-pages-solutions-marketing-js',
                34: 'component---src-pages-solutions-omnichannel-js',
                35: 'component---src-pages-solutions-order-management-js',
                36: 'component---src-pages-solutions-retail-js',
                37: 'component---src-pages-testpage-js',
              }[e] || e) +
              '-' +
              {
                1: 'b073f52694c9c4072572',
                3: 'e422e880195789030654',
                4: '5bf274865ecf77ed7ef3',
                5: 'd8922e03801f51f7690c',
                6: '43db266ef872f7fefc4c',
                7: '540ea45e80199bd9e0b5',
                8: '633fbe21350c494be6b3',
                9: '6e7d5fcd5f38cc7ce202',
                10: '8ab7ff2c6000a22f03e0',
                11: '8f50d7826c40edc703ee',
                12: 'a567741b9d74edf106ad',
                13: '706bf97c7c20ce98be26',
                14: 'b3917675f117b65ad4a2',
                15: 'e84595db31d09c1f8d68',
                16: 'e421054ab2d53666cd7c',
                17: '966ae9f1b4e4107b81af',
                18: 'acd4b09397a67e53b1c6',
                19: '2a947de2d89319c9abc3',
                20: 'e334efe63b1e9286ff09',
                21: '32d15968c5a113018885',
                22: 'c0afff131ec15918d653',
                23: '55b6843654e711f08fd1',
                24: 'f459a3c6d09d67187fb7',
                25: '556677db5a4520fcf982',
                26: '901cf4932273ac9385c7',
                27: '330d41482ea789cf04d8',
                28: '604caeea17ca9d7731c6',
                29: '37f708a1214c6fe78ea1',
                30: '6248284a758e46ae72eb',
                31: '2d7be2c5adf63ba33f56',
                32: '86556cc153f21c2b97e4',
                33: '5f42efdd15a06adf35d7',
                34: 'b3d77576de02e0283921',
                35: 'f8e6b17db0bcde58c108',
                36: '2f6928d836916d9fb8c8',
                37: '303e243a18a39f51aa26',
              }[e] +
              '.js'
            );
          })(e));
        var d = new Error();
        a = function(s) {
          (p.onerror = p.onload = null), clearTimeout(i);
          var c = t[e];
          if (0 !== c) {
            if (c) {
              var o = s && ('load' === s.type ? 'missing' : s.type),
                n = s && s.target && s.target.src;
              (d.message =
                'Loading chunk ' + e + ' failed.\n(' + o + ': ' + n + ')'),
                (d.name = 'ChunkLoadError'),
                (d.type = o),
                (d.request = n),
                c[1](d);
            }
            t[e] = void 0;
          }
        };
        var i = setTimeout(function() {
          a({ type: 'timeout', target: p });
        }, 12e4);
        (p.onerror = p.onload = a), document.head.appendChild(p);
      }
    return Promise.all(s);
  }),
    (r.m = e),
    (r.c = o),
    (r.d = function(e, s, c) {
      r.o(e, s) || Object.defineProperty(e, s, { enumerable: !0, get: c });
    }),
    (r.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (r.t = function(e, s) {
      if ((1 & s && (e = r(e)), 8 & s)) return e;
      if (4 & s && 'object' == typeof e && e && e.__esModule) return e;
      var c = Object.create(null);
      if (
        (r.r(c),
        Object.defineProperty(c, 'default', { enumerable: !0, value: e }),
        2 & s && 'string' != typeof e)
      )
        for (var o in e)
          r.d(
            c,
            o,
            function(s) {
              return e[s];
            }.bind(null, o)
          );
      return c;
    }),
    (r.n = function(e) {
      var s =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return r.d(s, 'a', s), s;
    }),
    (r.o = function(e, s) {
      return Object.prototype.hasOwnProperty.call(e, s);
    }),
    (r.p = '/'),
    (r.oe = function(e) {
      throw (console.error(e), e);
    });
  var p = (window.webpackJsonp = window.webpackJsonp || []),
    d = p.push.bind(p);
  (p.push = s), (p = p.slice());
  for (var i = 0; i < p.length; i++) s(p[i]);
  var m = d;
  c();
})([]);
//# sourceMappingURL=webpack-runtime-cb2958ed79e17966dc6b.js.map
