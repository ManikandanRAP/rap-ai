(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    '+A98': function(a, e, t) {
      'use strict';
      t.r(e);
      var A = t('ERkP'),
        c = t.n(A),
        n = t('j/s1'),
        o = t('gyFy'),
        i = t.n(o),
        s = t('eQ1p'),
        d = t('6gYp'),
        g = t('zqX6'),
        r = t('2ecW'),
        p = t('rj7Q'),
        l = t('LUIQ'),
        b = t('iy5v'),
        f = t('vrFN'),
        m = t('sAFx'),
        w = (t('PN9k'), t('EMUa')),
        x = t('MFEH'),
        h = t.n(x),
        B = t('dWle'),
        S = (t('Eakc'), t('PPo7')),
        E = t('k/KV'),
        C = t('kQsd'),
        Q = t('J31B'),
        u =
          (t('XUv4'),
          function(a) {
            var e = a.sectionWrapper,
              t = a.row,
              A = (a.col, a.col_par),
              n = a.secTitleWrapper,
              o = a.secHeading,
              i =
                (a.secText,
                a.featureItemHeading,
                a.featureItemDes,
                a.featureBlockStyle),
              s = a.iconStyle,
              d = a.contentStyle,
              g = w.data;
            return c.a.createElement(
              B.a,
              Object.assign({}, e, { id: 'Ourpartners' }),
              c.a.createElement(
                C.a,
                { className: 'BoxItemsContainer ourPartnerPage_content' },
                c.a.createElement(
                  c.a.Fragment,
                  null,
                  c.a.createElement(
                    B.a,
                    n,
                    c.a.createElement(
                      h.a,
                      { bottom: !0, cascade: !0 },
                      c.a.createElement(
                        S.a,
                        Object.assign({}, o, { content: 'OUR PARTNERS' })
                      )
                    )
                  ),
                  c.a.createElement(
                    B.a,
                    Object.assign({}, t, { className: 'flex_center' }),
                    g.hostingJson.PARTNERS.map(function(a, e) {
                      return c.a.createElement(
                        B.a,
                        Object.assign({}, A, { key: 'partner-' + e }),
                        c.a.createElement(Q.a, {
                          wrapperStyle: i,
                          iconStyle: s,
                          contentStyle: d,
                          icon: c.a.createElement(E.a, {
                            src: a.avatar.childImageSharp.fluid.src,
                            alt: 'partners-' + e,
                            className: 'partners_image',
                          }),
                        })
                      );
                    })
                  )
                )
              )
            );
          });
      u.defaultProps = {
        sectionWrapper: {
          as: 'section',
          id: 'service_section',
          className: 'service_section',
          pt: ['30px', '30px', '40px', '40px'],
          pb: ['60px', '80px', '80px', '100px'],
        },
        secTitleWrapper: { mb: ['30px', '30px', '40px', '40px'] },
        secText: {
          as: 'span',
          display: 'block',
          textAlign: 'center',
          fontSize: '14px',
          letterSpacing: '0.15em',
          fontWeight: '700',
          color: '#eb4d4b',
          mb: '10px',
        },
        secHeading: {
          textAlign: 'center',
          fontSize: ['20px', '24px'],
          fontWeight: '400',
          color: '#0f2137',
          letterSpacing: '-0.025em',
          mb: '0',
        },
        row: { flexBox: !0, flexWrap: 'wrap' },
        col: {
          width: [1, '46.5%', '46.5%', '31%'],
          className: 'service_col',
          bg: '#fff',
        },
        col_par: {
          width: [1, '46.5%', '46.5%', '31%'],
          className: 'service_col partner_col',
          bg: '#fff',
        },
        featureBlockStyle: { p: '45px 55px', className: 'service_item' },
        iconStyle: {
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          mb: '45px',
        },
        contentStyle: { textAlign: 'center' },
        featureItemHeading: {
          fontSize: ['18px', '20px'],
          fontWeight: '400',
          color: '#0f2137',
          lineHeight: '1.5',
          mb: '20px',
          letterSpacing: '-0.020em',
        },
        featureItemDes: {
          fontSize: '15px',
          lineHeight: '1.84',
          color: '#343d48cc',
          mb: '0',
        },
      };
      var I = u;
      e.default = function() {
        return c.a.createElement(
          n.a,
          { theme: s.a },
          c.a.createElement(
            b.ParallaxProvider,
            null,
            c.a.createElement(f.a, { title: 'Cnetric Global Inc' }),
            c.a.createElement(g.a, null),
            c.a.createElement(d.c, null),
            c.a.createElement(
              d.a,
              { className: 'Partners_page' },
              c.a.createElement(
                i.a,
                { top: 0, innerZ: 9999, activeClass: 'sticky-nav-active' },
                c.a.createElement(l.b, null, c.a.createElement(r.a, null))
              ),
              c.a.createElement(m.a, null),
              c.a.createElement(I, null),
              c.a.createElement(p.a, null)
            ),
            c.a.createElement(
              'div',
              { id: 'footerWrapper', className: 'copyright' },
              c.a.createElement(
                'p',
                { style: { textAlign: 'center' } },
                'Copyright 2020 @Cnetric Global. All Rights Reserved.'
              )
            )
          )
        );
      };
    },
    '8oSd': function(a, e, t) {
      'use strict';
      t('Bu8c'),
        t('UQCJ'),
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.search = void 0);
      e.search = {
        viewBox: '0 0 24 24',
        children: [
          {
            name: 'circle',
            attribs: { cx: '11', cy: '11', r: '8' },
            children: [],
          },
          {
            name: 'line',
            attribs: { x1: '21', y1: '21', x2: '16.65', y2: '16.65' },
            children: [],
          },
        ],
        attribs: {
          fill: 'none',
          stroke: 'currentColor',
          'stroke-width': '2',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
        },
      };
    },
    EMUa: function(a) {
      a.exports = JSON.parse(
        '{"data":{"hostingJson":{"PARTNERS":[{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABUElEQVQoz4WRu0oDURCGZzfxkkjAwiqNrYiCIHkCUYslWgoBbRREtFMQ2yCoKGqxghAwRt0kZ1MIghYBQWyDT6F7IoiFT7B+Z7PGShz4mX9u/5yLJOvaSgDBrLqWPqWlFxhL4VN+hw/4Hb7c+pI03sSZRjvq71G/cdesH2EvsKTyKnBbbt6imm24F4iB8/wpUqWnSlyjvxZEhyG2zeGMepbhMfnDwjCU/2z49t3qBmw/4nQvMR8B12CfJaNgm61b1HMsdohzk80PK6H0CnGBp5mgd4P8GThI++0FI3IC9hicxrsMz/YrPQS/Ankas/gS/pyaEy++RHTXCJFzTQ5eQmPdFO8JDik8wC9IDsZDXlLp8fh9y/SckivwIRkjSG2TXBlejAWL8EUzuATmSbg07TD8FAkrPYW/Aw1yjyxahddAC8xw3TWuPQc/Bop6k5n8Ny8s00lhcZhzAAAAAElFTkSuQmCC","aspectRatio":3.037974683544304,"src":"/static/1aa7f5bd78f2262abcb6e76c4bb089af/bc8e0/Acquia_logo.png","srcSet":"/static/1aa7f5bd78f2262abcb6e76c4bb089af/8ac63/Acquia_logo.png 200w,\\n/static/1aa7f5bd78f2262abcb6e76c4bb089af/3891b/Acquia_logo.png 400w,\\n/static/1aa7f5bd78f2262abcb6e76c4bb089af/bc8e0/Acquia_logo.png 800w,\\n/static/1aa7f5bd78f2262abcb6e76c4bb089af/6050d/Acquia_logo.png 1200w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAA0UlEQVQoz61S2QqCQBT1t3vrR/qSKIqgqEDqIZ+KNk1zayH3GU/OkKaSRNqBy71nZjhzNwE1EMdxIU4580Ke1LGyqFD+8VfQUraFDO+Bj1titu/C8lxcfI9bPn6EIUzPSXwAw3XQkUR0D5tMNBMMCMHCUCHqKkanPaaajKGyg2QbnI/VI+ZnBUtT43x9tfnb1qSH9mwAL4qKgsxHlCKkBCSm/IwkPO0Pfd0zS8GS6MtbrCz9XXJVD7/1tXyfDaXplFk1NL82daf7aWUaCVbh74JPqc1hGTnnU58AAAAASUVORK5CYII=","aspectRatio":1.7777777777777777,"src":"/static/242fd8c27294ae7f46c10a883687c0de/bc8e0/coremedia_logo.png","srcSet":"/static/242fd8c27294ae7f46c10a883687c0de/8ac63/coremedia_logo.png 200w,\\n/static/242fd8c27294ae7f46c10a883687c0de/3891b/coremedia_logo.png 400w,\\n/static/242fd8c27294ae7f46c10a883687c0de/bc8e0/coremedia_logo.png 800w,\\n/static/242fd8c27294ae7f46c10a883687c0de/6050d/coremedia_logo.png 1200w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAACBklEQVQoz2OI3nGf4f/zSwyaK+8zqCy/x6y0+CYTAxBkllYzZBSWMeTmFTLkAHFuPowuAIuB+CAAo1FA7KE3DP//b4DzizeeZsyJjWTIyy9kzEXDOXC6AKwWRsNBz/EHTDC29LIH5aKL77oxEAliaroYgC5hUF9xj0Ft5UOoqPdlxkOXb4dV7LuzwGrri/968858C5293bggKzM0u6A4BuiiouyCElcg2zsnv6gSSIcBxYJy8wrEQNqrk6MYYRaorYIaeuP2Xa0Ldx6+23Lu5vdDtx7/P3fxUmNsXHxlYWFRd15u7vTizLSKwqzMaiBuKMpKrwYaNj8vNy8SpNd22h4mFMOevHgNtuH+3TsrLl6/9e7ajZsXl5+9Fykx53K47qq7QSqrHiVqL71eprX0ZpHCuldJqqseFmgtu5mhv+hSudrK+/lAvovaygeJQAONwAYuWLgEbMPmrdtrjh493rh/x/burLUnfSTXvEhVW/0oBaihRWX14zogbgVq7ITwH3Upr3lSCWT3A8WigHQz0EB3iIGLl2INcNVld7i1lt1iB2F0OaALOU3mnQI7BGgYL9BQDqCBrHAFK1auBtP///+HBPCj/6iGr3oIFgfFJDysIOIo6sByS5etAHOWLV/JsGb9RoaVy5YztK/ZyyC36jGD+qoHQEUPwArBeOUDsCHY+Q/A5gAAIbYKX9VzRWUAAAAASUVORK5CYII=","aspectRatio":2,"src":"/static/c6cec03ae982495859ab84175f6c9ce3/8c332/drupal_commerce_logo.png","srcSet":"/static/c6cec03ae982495859ab84175f6c9ce3/8ac63/drupal_commerce_logo.png 200w,\\n/static/c6cec03ae982495859ab84175f6c9ce3/3891b/drupal_commerce_logo.png 400w,\\n/static/c6cec03ae982495859ab84175f6c9ce3/8c332/drupal_commerce_logo.png 600w","sizes":"(max-width: 600px) 100vw, 600px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABTUlEQVQoz2NgoDYIDPSE0EGeDAFBCDZl4P9/BtPkEkadjCZGEDso0I0xAGpBIBRD+YzBAa4MDG1nGRhaTkBw60kgPgExB0wDDUAGHuFh5DkKZmiPDoR2iYyxA2J3SDB4aAExHxALAl3HBQwWHqDrRIBYGuh6MYaJL9kYm4/xAF3IAXShEBBzQww9CTV9yX9BhYJpS2SLZm4WrFxjEObnUOkf5JUGNKAWaGAGEOcB2ZUBQV4JIf7O6Ywtx8OAmtOBBkYAsS/YYBBoARqYZy/NCGI7xCS7eIaHuoGCIDjARRxogCYQCwFdKQmkJYCYD4SBfBmRipWiDB0XhRlajkuCXQhzHczb/ylNKiDDWqCG/YSKGadUMALDkFEltx8Yy+6gWGaExjJjIJQN5gd6MIpUrGAAuhBoyHFGsDeRYxmW5mBJBMwO9IAnF+qkSwoAAPbDffZOZyLjAAAAAElFTkSuQmCC","aspectRatio":1.9047619047619047,"src":"/static/a6d002fdf0d170dcb2eebb45f578ce89/8c332/dynamicweb-logo.png","srcSet":"/static/a6d002fdf0d170dcb2eebb45f578ce89/8ac63/dynamicweb-logo.png 200w,\\n/static/a6d002fdf0d170dcb2eebb45f578ce89/3891b/dynamicweb-logo.png 400w,\\n/static/a6d002fdf0d170dcb2eebb45f578ce89/8c332/dynamicweb-logo.png 600w","sizes":"(max-width: 600px) 100vw, 600px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABbElEQVQoz43Svy8DYRwG8Of0TrRaP5o0UoOIKi3Xpj1ppGlzde4SP0KFgVhUlNhYDAa6EBKRWCWESSy1GRgtRv8EI7EhtHk9V2ewueRz7/fe93vPvXctADSTB/8/6uyTwJJkj1WYfhqhwG/DBqXIT43kI3tRctYT1OvU9lo0Dq/vJ9RKM+iGDuiasvb8Dh/ZwbFIR7RLyzRPBZpmcoZ0SrJ3lHO6fWMFZpkhGWenazRn1yXK0z7t0TqtOPPbpFGOYpSmRTvwGbqHAedfMENVWKusU3SMVshDnWiI1UOKh+FWWWs+uELcyWYEHvXn1QS64A4HoHQXEHQPoqnNeeUL7vKKQXk6pS1OlrwCUz0CeVVgIi4wmWRj/wNSA7yOfsCIvsOIsY4IjLPH0gTG2jkWGXbJkFk6pIXaV55BwHUHTXlEtqUMVT5BRHmBrgjcS7dIyG8wXK8wpDP01fqekJVz/O0+MRwUMP/8Oyqw8A1IMWcvpNMZHAAAAABJRU5ErkJggg==","aspectRatio":3.029585798816568,"src":"/static/0095255d13d239476cf579192e2718a8/6ba37/easy_ask_logo.png","srcSet":"/static/0095255d13d239476cf579192e2718a8/8ac63/easy_ask_logo.png 200w,\\n/static/0095255d13d239476cf579192e2718a8/3891b/easy_ask_logo.png 400w,\\n/static/0095255d13d239476cf579192e2718a8/6ba37/easy_ask_logo.png 512w","sizes":"(max-width: 512px) 100vw, 512px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAAByElEQVQ4y32SsUscURCH3+56FkeKKIooeBgQoqnMGyNGlBSx1C61WKQRFEEJIoSAlyMgUTEIosV5WiVFTBBF0imIot6JhZ2N/gGSYGkh5pvbd+sZyC58/GbmZn7z3uOM+fez+VCl4EU1KcxTv0FHXV4R9alKwcR/2nA/sOrMduGGuDJaeL88xizcGLjGEdN+doe+o36BbkAXvH6wPPZ7aLgDm7AOh5A2cqILlEHX48ebhtcNnPm0G84QLxk5DWMp/Ias6w+iq8eYes4wSfzdmd7Ce9iDK2iMestPKCKRlmJjjynk/fCH/JjpvFTDa+Jz9A+LmqLrlvkU5621pcQrFWtk1tRJxnUe54C3yy/CjrFHKS17chBsMd8mXXgUZ/2SoaeU37jDtpqn9s1/X8SXff+VfeTFP5tIH9SV155LR9LKi2dt8rJH82YZSHDyIPpDiFQwk4AG6OdgCT1hmmQeZuCDxjROQEasXUZzMM610uhb+CxiJ8mHmJ2DRcgy9xNd0JP90gTUOEvxG7oA28S65BN8gTUYpvZDTYhX0K9SXCAfiafQSTWshWZ4DDXQCfXQSlM12oJWoU3QW7yBtSlIEne7uSfQqP1/AXHJw8NhUEUqAAAAAElFTkSuQmCC","aspectRatio":1.555041628122109,"src":"/static/4d3827ac795f001fc3ce2ab51f6f500f/bc8e0/ElastiPath_logo.png","srcSet":"/static/4d3827ac795f001fc3ce2ab51f6f500f/8ac63/ElastiPath_logo.png 200w,\\n/static/4d3827ac795f001fc3ce2ab51f6f500f/3891b/ElastiPath_logo.png 400w,\\n/static/4d3827ac795f001fc3ce2ab51f6f500f/bc8e0/ElastiPath_logo.png 800w,\\n/static/4d3827ac795f001fc3ce2ab51f6f500f/6050d/ElastiPath_logo.png 1200w,\\n/static/4d3827ac795f001fc3ce2ab51f6f500f/00405/ElastiPath_logo.png 1600w,\\n/static/4d3827ac795f001fc3ce2ab51f6f500f/1e2a2/ElastiPath_logo.png 1681w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAACMklEQVQ4y62Rz2sTQRTHZydZ6aZimh+KDWhoxYMSrNUWBal/gAdB/HHyJF4MoqnZ2XSzaTRQiloVUUH8Dzx5EDx4s8ZtrdlYKAhtr3pTqM0mYm2yr29ms4GINBYd+PK+b/bNZ9+bIaTDqub9ItYmesjXoLu3Mox5oVt4+xrZ+uIwb/14lJBb+4XA30Oc2X4R66/jUv3VLtkFKPdqN+XPtXHfY5HnfRL6LUDf72vvNC8X4QGFao58cq9DkqrGZoCF0wSsIdfPHZDcTvfHYWZv2jF3p6qTXYswIYAlF0g3B0LpsAsrnyBg9orXcGbiSVjeA1COQuVOAOo5CrVxMu92TKVarsOYgDABWnafTwCtGDjF8NrqbWV9TffxDgVwJePvMLJ1nDhmuOmPTjkfEhY+zhJ26zjFyLp9V/n1E4GVLLF4zfcxv1TRf4Mwxlrx25sRFzZ/nkJpcBG+DAAs9OO4MQArCvWHCkCBgm2QJV5XyVHJzv6hM1VVBfD5k4vkxdMzlO815gYnG7MHyw2zb7pR7H1Xn46a9pTydjVDP1ay0n1e8zIzQm+xpDjfas7r8F+XB/USiuCTjKnHVJWFNaZG8kYqpGnpIT1zI2boo6GMlj5kaNeDWZYK6yzVx1R1J9Ym8EwIz25vg6JRcPMUfryEMrDwMsYc6hlKQw2jkqgLzXgVa7i/gjqH58+2JvWoGLtRO/jfUF2oAcyPYAzwHL2M2oaedxRBH2rWBVE9bSP/r3vknA2QUB9rSo0mPQAAAABJRU5ErkJggg==","aspectRatio":1.3207964601769913,"src":"/static/f84c710c03e5e2b72268434a77c41207/bc8e0/google_analytics_logo.png","srcSet":"/static/f84c710c03e5e2b72268434a77c41207/8ac63/google_analytics_logo.png 200w,\\n/static/f84c710c03e5e2b72268434a77c41207/3891b/google_analytics_logo.png 400w,\\n/static/f84c710c03e5e2b72268434a77c41207/bc8e0/google_analytics_logo.png 800w,\\n/static/f84c710c03e5e2b72268434a77c41207/6050d/google_analytics_logo.png 1200w,\\n/static/f84c710c03e5e2b72268434a77c41207/00405/google_analytics_logo.png 1600w,\\n/static/f84c710c03e5e2b72268434a77c41207/4ae49/google_analytics_logo.png 2388w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAoklEQVQY02NgAIG0zWCKIXUzIwMMpG5mZiAEMoD6UjdB1W9Ck4QZlrpZCCgpCVWkAOTzAmkWIDYEYjOwXOomTiBWQujFMAxuCwcQPwLiw0DcAMR/gXg6EN8B4lKoWAwQHwDiC0DMBcTsUIegGAh1HdDWtE2zwHTqpjgguw1IWwDxFCCOBWoKA9JqQNwNxGVAHAHEMihmIHkZf3iBvI1TDqEXAOToR1LfHEGHAAAAAElFTkSuQmCC","aspectRatio":3.6721311475409837,"src":"/static/d0f5c9f05fef2fccb243538c5cd35f53/97656/HCL_logo.png","srcSet":"/static/d0f5c9f05fef2fccb243538c5cd35f53/8ac63/HCL_logo.png 200w,\\n/static/d0f5c9f05fef2fccb243538c5cd35f53/3891b/HCL_logo.png 400w,\\n/static/d0f5c9f05fef2fccb243538c5cd35f53/97656/HCL_logo.png 448w","sizes":"(max-width: 448px) 100vw, 448px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAABkElEQVQoz1WSWytEURTHz5ChXMoTXvaJXBIhpsgkkcuD64xhmpSEPOGcGkZqHlxCzETjbZrhs+z9zfzW2TuNqd/81163s/Y6x/NDnVaB3vUDvQejfmhWOWdQ8aXRpMcPe1L8kIUh5+tUgdlRtnYNbRZnTYXm3Q9MjeIU5xeSvrAr+L/RT1iEI5AciZ1IQ+IJZc8VeKNh3MPYwHhGs9ADM3BP43N0GAIe9oQOwDH2KxRVqDs4H3LDElqQOvrEZMI+KMOE534E70i8jJoH5ho9df5limTil2globklXkavvIbiQSiROOuu0c75Bj5IrnP9Coy73C2Q21wQe7MPNnnsPBr3XIM+CsrovwnxyYTT0DjhKjyQm3S7zWEfQqFxwk37VJ3zo+Y6IUWcz7FHZIfoI/Rjn0X7DXUvWoQpyDhfgpwmj79q9JZDU4d9Za9k31wQ+WSSBWWn+VF2f12wRG03L+cIX1XWRn4rE+rU33cYmjHsFfdNyveVIj5vb6LHiR/g26ZBG8UtrCVG3hyIf5148y/FGg5ZjsA/sAAAAABJRU5ErkJggg==","aspectRatio":2.2962962962962963,"src":"/static/386c15cc643288b3c7244ca3926985ed/bc8e0/ibm_logo.png","srcSet":"/static/386c15cc643288b3c7244ca3926985ed/8ac63/ibm_logo.png 200w,\\n/static/386c15cc643288b3c7244ca3926985ed/3891b/ibm_logo.png 400w,\\n/static/386c15cc643288b3c7244ca3926985ed/bc8e0/ibm_logo.png 800w,\\n/static/386c15cc643288b3c7244ca3926985ed/6050d/ibm_logo.png 1200w,\\n/static/386c15cc643288b3c7244ca3926985ed/00405/ibm_logo.png 1600w,\\n/static/386c15cc643288b3c7244ca3926985ed/46ad3/ibm_logo.png 4464w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAAB80lEQVQ4y6WTTUgVURSA582LV6BhEC1ECHE583xPSXLb7rUyFRVsJ7VrK0jrNm1rYeHGH3BpIEjITIJSSilqRi5aBG2CqI33StQTa/rOnTM6/uy6cDjnnp/vnnvmjuexwsi2BZHtEhtdSH2mqLq/upUkYWyGNV4MYyt+z8XjVJ9YON8EsfmNNLii2BSDyJQUOHgKeJGYH8QO7KvvJBhAF85aGjR+/jD2teq2A971zlmh3kiguQ5tDwWjdHNZ97dImCF5Ct9EZd0Bh9g3Ik+xF/FPh6fGlOvQLlU2KAIIrLd9LUnKK3Ug9nv4aj+pvHXAHuLdQH5hL1Czhz5A2nRshTzwBckHSAv2DkV/gd3QK4/qlbMZXiPeQu7j6qZrYkhnfSHI5ghkHkcdacemA7uYm+FtBfZTcJ3YFz38W/n1oQCHzwxWgX+QVuzP6B/IVT35vgJrwKbLy/V0NJEZcF8/Mne08yYOLB0Dl35KsAH7QfW9A3zlai/RpnPXFfYBfFR5lyQUPsP+1PHB5U0q4yP+hQw4R4IUNeuAR5B1fKvoe8gscpMuStJlem07hjyXBvRlPCHnYfZsVtgcArzi/e8SaseOXMNO6sz80P0p1pdHLnvVcrB35I/TmOa7tygxSRpExpFL2m3h/D/CHGkB66icZP+0yD8F5Zu6UCEsXwAAAABJRU5ErkJggg==","aspectRatio":1.556420233463035,"src":"/static/74f8179d86bc991e59c14d2d5912c6d9/bc8e0/JDA_Software_Logo.png","srcSet":"/static/74f8179d86bc991e59c14d2d5912c6d9/8ac63/JDA_Software_Logo.png 200w,\\n/static/74f8179d86bc991e59c14d2d5912c6d9/3891b/JDA_Software_Logo.png 400w,\\n/static/74f8179d86bc991e59c14d2d5912c6d9/bc8e0/JDA_Software_Logo.png 800w,\\n/static/74f8179d86bc991e59c14d2d5912c6d9/6050d/JDA_Software_Logo.png 1200w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAC4jAAAuIwF4pT92AAABL0lEQVQoz2NojVjIMCV9AwMMzIjbzQikQJiJAQFgfHQ5JjR5BOiLWc3fHbnChAEVyAAxCwMpYGHVDj4Q/fzUD/4mv4XPYiU6VIBcRVYmNjUgHQ3EpkAsCMSWQCwFxDpA7AC1yA6IhYBYHYhtwQYWO06qbQyct7A/cn1bue2s/wmK7QZAYWdGBqaJQLoGiGuBOAyIZwJxARCXAHEuEFcB8QQonQjEKUBsyBClWGuUbtD1rNx83v9CwxmLwQHDyFwGpJqAOAeIM4A4BohBYtZA7AXE9kCcDTXcDIiTgLgQiBXgXo+QbJDJM5qsBGJzsvCAgkEYGtDMQMwGxKJAzAv1KjtUmwSUzQ3EYmCRGJU6RuQw9VfKYmSgBKTpdTJEK9UzZGj3MeYZTAEbxs7MSbZ5AI2ZOSVKDvSsAAAAAElFTkSuQmCC","aspectRatio":2.6666666666666665,"src":"/static/c2ac413cc12b7507f7bd11cef342d3b3/bc8e0/Logo_akeneo.png","srcSet":"/static/c2ac413cc12b7507f7bd11cef342d3b3/8ac63/Logo_akeneo.png 200w,\\n/static/c2ac413cc12b7507f7bd11cef342d3b3/3891b/Logo_akeneo.png 400w,\\n/static/c2ac413cc12b7507f7bd11cef342d3b3/bc8e0/Logo_akeneo.png 800w,\\n/static/c2ac413cc12b7507f7bd11cef342d3b3/6050d/Logo_akeneo.png 1200w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAABG0lEQVQoz52Sv0oDQRCHd6OpAoqCkGLPxvxpNI2FAavLG0jAQkGLQMgtAR/AdD6Fr2CRTp/AB8s3u3O7lwQEc/Axs7tzv9/c7Zhi4o08xaQCbwNlpXveFGU8/9fjyiC2tYeBdcEkGlFj1dAoVmrCWWqKKC9lEd+HkTugq9QQLi3dWMI3nayJH3AKXc7PxQSu4ZJuOsQL9q+gIB/yW44aHabFJ90+EW/gC844W2GwIH+DFbzCFB6ofYc7ap5Zt5qtWo09+MH1F8cxxSesxeCRl0R0DjMM7lV44YJ49UI+CBql3xMdwK3m7Ybpscb4NVyQXqZcTLuuDZ+cxya3XedOb3R3Iv68lDgaSdRmMR0ZBOqxElweGyPTEKmS2QbeEWm79ipLcwAAAABJRU5ErkJggg==","aspectRatio":2.199830651989839,"src":"/static/43ac91dd1e52a552f5d1247bd60d922e/bc8e0/Logo-Mirakl.png","srcSet":"/static/43ac91dd1e52a552f5d1247bd60d922e/8ac63/Logo-Mirakl.png 200w,\\n/static/43ac91dd1e52a552f5d1247bd60d922e/3891b/Logo-Mirakl.png 400w,\\n/static/43ac91dd1e52a552f5d1247bd60d922e/bc8e0/Logo-Mirakl.png 800w,\\n/static/43ac91dd1e52a552f5d1247bd60d922e/6050d/Logo-Mirakl.png 1200w,\\n/static/43ac91dd1e52a552f5d1247bd60d922e/00405/Logo-Mirakl.png 1600w,\\n/static/43ac91dd1e52a552f5d1247bd60d922e/314bf/Logo-Mirakl.png 2598w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAA4sAAAOLAH5m+4QAAABRElEQVQY02NgAIKfGyuzf26q3gOky/9/fczKgAWICwgxATGjmKAwo7igMJM4mBZiFBcQZoTICzOA5Bi+L0pc9WtnW+2vne1yQFz8bWn6iv+LpXk4uIRsTBQl2YGaDIBYhgEPEBMQEodzPlXJL/k6yS39+4LY6q9TfQo+Vsp3/e/XMGRiF6yRERb2AbqqEqghRExQyBdIu4oJCAcDXRMJdGEoEPsAxcKAuAwo5g9U6w00UG4x0NBpn6sV2oH0vO81cl1nM2SdGRgE3aWEhGuACmOBCiuAuB7o0glAzUVAgzqAuBrITwValAbEpUB1RUC5JAagQQlAPO9zlXzrp2qF5d9rFcKPpsqqMTDwCQJdqAo0SAio0RZIg7wO0lwH1OgC5OsD+dJALAXEOkCXWwPFTcHeBhoYAMSbgTiOQFhxAF0ihk8NAGXlYEMh9nYHAAAAAElFTkSuQmCC","aspectRatio":3.4236804564907275,"src":"/static/385458e24be9eab74ea90c89f1910acf/bc8e0/magento_logo.png","srcSet":"/static/385458e24be9eab74ea90c89f1910acf/8ac63/magento_logo.png 200w,\\n/static/385458e24be9eab74ea90c89f1910acf/3891b/magento_logo.png 400w,\\n/static/385458e24be9eab74ea90c89f1910acf/bc8e0/magento_logo.png 800w,\\n/static/385458e24be9eab74ea90c89f1910acf/6050d/magento_logo.png 1200w,\\n/static/385458e24be9eab74ea90c89f1910acf/00405/magento_logo.png 1600w,\\n/static/385458e24be9eab74ea90c89f1910acf/1f96e/magento_logo.png 2400w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAACxKAAAsSgF3enRNAAABIElEQVQY02NgQAJcypYsIPpXgyATTOwHkP2zQZARwhZi+NkgxAZi/6wXKgSynwBxM0wtkM3IoG9oLKFnaJygbWAyy9rM0Pz/dgZOkOSXOiFGoAJhhMFCosiWA+UqoQbWQflSYAlLU0NfcxOjb57W+l9fV4ns+dMouP9bvVA60FXTgIpOAHEKEFcBDTwJxC0/6gUTgfx1QLwPiG8A8SQgngDE63/UC9UylPmqq36qFd4BxL5/GwU3fK8XigEa9hcouRBkK9BrH4D0I6DXeYH0aSD+BsSqQINBXr4FxBeA+DrQsgIgvsCwMFZB7F+T4EGgy1yAhi0BGhYDNGwLUNEKID4MxE1AQ6cBFR8EGjoXyK8GYpD8ASC+BsQgsfVQV/cBANFon4I8lHcDAAAAAElFTkSuQmCC","aspectRatio":3.901743264659271,"src":"/static/0efd908fd3b6ba362da05a4a6367db10/bc8e0/Moodle-Logo.png","srcSet":"/static/0efd908fd3b6ba362da05a4a6367db10/8ac63/Moodle-Logo.png 200w,\\n/static/0efd908fd3b6ba362da05a4a6367db10/3891b/Moodle-Logo.png 400w,\\n/static/0efd908fd3b6ba362da05a4a6367db10/bc8e0/Moodle-Logo.png 800w,\\n/static/0efd908fd3b6ba362da05a4a6367db10/6050d/Moodle-Logo.png 1200w,\\n/static/0efd908fd3b6ba362da05a4a6367db10/00405/Moodle-Logo.png 1600w,\\n/static/0efd908fd3b6ba362da05a4a6367db10/10926/Moodle-Logo.png 4924w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAABbElEQVQY022RP0hCURTGz5OISHQISokgMAUlMImswSGD/iwSEu/e53sO0R7VYpg+TRQhCRqlAimCCKyhIffWxqamiLaKfM8IBId4fTesqQs/vnse53585zwyc/Rk6PQFPaXuQb36IWrXa2+CJyKMq9My1yIyU1NglnEtKjNtWPQypkmo6RfxuGQWyAN9aKZs1zBON3Wp0d6lenh5PcS5WoNhBc06TK/AOe5HUAf9d4y05BH6suKovq31dcwinZg6Wa0cXYrvCk8kYTiFJG7G1LDMVR/uPpgOADeYBK5u3UNI9Gxk6cJI2i2YLgqT96xUaufpJhjbCiLhGftJqe1Bq9ADaB16DA5BAxRBAVSE4YaRoYqxbbs381QzdiQnxr/7zNM+DTX7kwqPwSCO5jngBUtIGscux4EfaaNip+iZBwt/o7fKNAqjx06RLOitVSb7RGzTqSmKFz8ggJ2F8DAAfN0xZ8AITDxQPxgDg98pRaQYYyfW2gAAAABJRU5ErkJggg==","aspectRatio":3.4246575342465753,"src":"/static/60b36bfd7da91b0360614b685c126954/53f65/Order-Dynamics-Logo.png","srcSet":"/static/60b36bfd7da91b0360614b685c126954/8ac63/Order-Dynamics-Logo.png 200w,\\n/static/60b36bfd7da91b0360614b685c126954/3891b/Order-Dynamics-Logo.png 400w,\\n/static/60b36bfd7da91b0360614b685c126954/53f65/Order-Dynamics-Logo.png 500w","sizes":"(max-width: 500px) 100vw, 500px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAAB0UlEQVQ4y2NgwAKU5RXAtAYQy4fEM8HElRQUGYFyjMhqiAZaIOL/fzBbhYtdSElRWQbdQqINBSmU94sEu0TR1CpbSU3jg7Kc/C9lecX5ytLSrCS7EKgY7E11BgY9+dSS/wqhif+VBQX+qikp/wcamgf2vrw8MykuZAZ7lYM1Vj4s6Y1cYn6korHlJFUt3f/KMjIzwAbK4TBQRUERTKsrq4DY4ECHuRCoWVdJS7dcSVl1nmzNhP+KnkH/VVgZ/cFBYevCLHHgIaP4lstg/RL77iEM1VRVwxc5LJIrjvRIt885q6SiFgsS00aSl3/7n0GodxGYLb77DrILlRmBbBmg66SAmF9eRpYRaACrCi83q0JQLKuifyQ4GMQvfQfTEgce8EscfKgMZh99xiAOcyHMQGjYFQDxHCCuBuJyIK5SlpVrBBrcKbn6eAnQi/USe+82SOx/0Ak0EMTvlth7zwTqZSa4C2UkJGEG6gOxHRCbArE5ENsqS0lpKhqYGEvN3a4mfuSpEVCjI9BAR6CBVkAD1YAGSoMN3H8f4mUYkJOSZiAXoEQI2IXicBeCYxiJZgImZEYlHQNGqYW7GYEuZAR5DehCJqALmUCxDHQhA1YXUgsAAEw3iCdnWSC0AAAAAElFTkSuQmCC","aspectRatio":1.5017064846416381,"src":"/static/72176282818230a6e3279bcca938ec7a/f7da6/partner_bloomreach_logo.png","srcSet":"/static/72176282818230a6e3279bcca938ec7a/8ac63/partner_bloomreach_logo.png 200w,\\n/static/72176282818230a6e3279bcca938ec7a/3891b/partner_bloomreach_logo.png 400w,\\n/static/72176282818230a6e3279bcca938ec7a/f7da6/partner_bloomreach_logo.png 440w","sizes":"(max-width: 440px) 100vw, 440px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAIAAAABPYjBAAAACXBIWXMAAAsSAAALEgHS3X78AAAA/0lEQVQI1wH0AAv/AKa20nyVvSOJoQ2uptr79J2mymuAsmyBs7/I3qq20tTZ6LS+2GR5rnKFtaez0cTM4Z+szN3i7aOvzq241ACOnsSnr9CJmsECkpvJ+/CepMpedqp5i7hNZaJleq9ZcKiBkr19j7qWpchjea10iLeaqMpKY6CBkr1WbaYAusTbk6HGlqfJVKW2////nKfKpLHP////fY+7gJG9m6nLrLfUp7PRsLvWgpO9hJW+gpO9eo25r7rVhZa/APv8/cbN4cHK3uTq8f////j5+/z8/v////b3+uDk7vj5+/n6/Pj6/Pj5/Pz8/fDy9+Dk7/z9/vj5+/f4+8dsrtZk+8FvAAAAAElFTkSuQmCC","aspectRatio":4.651162790697675,"src":"/static/c8c17eb69aad8808f4867a328301d86d/bc8e0/perfion_logo.png","srcSet":"/static/c8c17eb69aad8808f4867a328301d86d/8ac63/perfion_logo.png 200w,\\n/static/c8c17eb69aad8808f4867a328301d86d/3891b/perfion_logo.png 400w,\\n/static/c8c17eb69aad8808f4867a328301d86d/bc8e0/perfion_logo.png 800w,\\n/static/c8c17eb69aad8808f4867a328301d86d/5d2c5/perfion_logo.png 1000w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAIAAABM9SnKAAAACXBIWXMAAAsSAAALEgHS3X78AAABeUlEQVQY0wFuAZH+AC+06Sax6J7c9MTq+TO26Sqz6Ee969Lu+v///4vW8g2n5ACg407A7OL0/Pz+/1zE7Sex6J3b9Pz9/////wBgxe12zfADouR7z/EEo+OT2PMerOZKveyV2fQAmeFmx+6Q2PQIpORRwOza8vt3zvHm9vzS7vru+P3///8AdcvwldjzAJ7ibsrvBKDildjzIa3nSr3rMLTpV8Pt////////1/H7iNTyteT3JrHoIK/nl9r0+/7+//79ADa36iKw527L78bq+V/F7mDG7n/R8ev4/aPd9aTe9f7//////63i9wCd4sLo+Mfq+VTB7ACb4Y3V8////wC65vj////////M7fpcxe235fcosuix4/ac2/QAmOBoye+S2fQJpOQ7t+rB6fiD0vGw4vYAn+OCz+z/6cYAj9fz////////t+X3Favm1/H7Y8fuKLLo6ff9gdLxA6HjAJziPLnq6ff8wun4EKjlAJ7hSsDv7/Hs/LJdoJcPUw4uLwMAAAAASUVORK5CYII=","aspectRatio":3.5546218487394956,"src":"/static/5268f4782f2508f9a0e5d3db3d107228/10b9d/pros_logo.png","srcSet":"/static/5268f4782f2508f9a0e5d3db3d107228/8ac63/pros_logo.png 200w,\\n/static/5268f4782f2508f9a0e5d3db3d107228/3891b/pros_logo.png 400w,\\n/static/5268f4782f2508f9a0e5d3db3d107228/10b9d/pros_logo.png 423w","sizes":"(max-width: 423px) 100vw, 423px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAA7DAAAOwwHHb6hkAAABPklEQVQoz2NgYGDQFGVmWSzFwnKGjYFxCZCvxQABTByMjAwkALjid5XC4v93ySr9bxOV/A/kf0AyFBdgwSkzWUzqfya/0PdZ0gp/76rqfPfj4fvPzMCwECTHzsjIA6SEgFgAiHmgWkKBuACIZaEGswMxBxDLAzErQ6Sw2P/Fiqp/J7Lz/DslIv3niJzKfyUW1pNgPzMwlAOpNiDug2IQvx+IW4DYBYjNgVgHiAOAOASIuRkWrV3z/8S+/d/nZWb/XZqY/F2Nle0/AwvzMqhryoDYB4hBYZsLxJ1QsWYg5gViOyD2BmJ3ILYBu/D///8f/0PBiSuX/3dPnPgxNydHD2QaGxubMpDihLpCG4ilgNgLiBWhXuUHYjUglgRiGXDQfP78WevP79/L///7d/Hn16/LgeaCNDKkpaUxM5ABAEOmXEmH/TLLAAAAAElFTkSuQmCC","aspectRatio":2.965599051008304,"src":"/static/e1e56d538e969f0d48d542e0fb511494/bc8e0/Red_Hat_logo_RedHat.png","srcSet":"/static/e1e56d538e969f0d48d542e0fb511494/8ac63/Red_Hat_logo_RedHat.png 200w,\\n/static/e1e56d538e969f0d48d542e0fb511494/3891b/Red_Hat_logo_RedHat.png 400w,\\n/static/e1e56d538e969f0d48d542e0fb511494/bc8e0/Red_Hat_logo_RedHat.png 800w,\\n/static/e1e56d538e969f0d48d542e0fb511494/6050d/Red_Hat_logo_RedHat.png 1200w,\\n/static/e1e56d538e969f0d48d542e0fb511494/00405/Red_Hat_logo_RedHat.png 1600w,\\n/static/e1e56d538e969f0d48d542e0fb511494/9ab24/Red_Hat_logo_RedHat.png 5000w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsSAAALEgHS3X78AAAA8ElEQVQY02NgWPkwmmHOKykGIHANi+X19AvVZkACXv6hjBA6hNXLL5TR0w9I+4eyw+X9oPJ+oSpAbM2gs6yo8/hsg87uKBtne5+IZG//kBSgBnegwbZAOg2IM4EYJOYP1FAANNASSLsA+Tme/qEJYHm/EF+gWDOQHcmQFzcr8+1a1RnlmXaFRo7xxj4BIaFA1zQBJUuAdCsQtwPZRUAsDsR1QNwLNKgMSO8A4nSgQXFAegIQ5wGxLdjZ7+Rc01Yae2ow1KezBvmE8AIlhIGYF4q1gFgIiJmALlEF0opArAQ0yAhICwIxDxBLAS02BpkFALplWKb6K/80AAAAAElFTkSuQmCC","aspectRatio":5.0761421319796955,"src":"/static/b47381693cd4476094f1402ad4afd207/bc8e0/Riversand-logo.png","srcSet":"/static/b47381693cd4476094f1402ad4afd207/8ac63/Riversand-logo.png 200w,\\n/static/b47381693cd4476094f1402ad4afd207/3891b/Riversand-logo.png 400w,\\n/static/b47381693cd4476094f1402ad4afd207/bc8e0/Riversand-logo.png 800w,\\n/static/b47381693cd4476094f1402ad4afd207/6050d/Riversand-logo.png 1200w,\\n/static/b47381693cd4476094f1402ad4afd207/00405/Riversand-logo.png 1600w,\\n/static/b47381693cd4476094f1402ad4afd207/3ba25/Riversand-logo.png 2000w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADRElEQVQ4y31VS0hUURg+96pFGC6knRSB1MYIIisowsoWLlzULlr1okUtaimBLXoQtIgWgUI6zp1xzHeF5qNCSHoRZUpEYTVzZ3Qe6uCoZemM/qfvP/fOw0Y78HH++//nfOc//+NcIdzjQhimUMPwW7Jhakr2hEVqNAaBkCV7MBsBsfpIk2nC6dX/senCFeA5BzbAl4t1umiMpB1Yg1RLya5APr4LU9/3P2evd/p0ReYKaMqRpFNOn+2ZRVQAwz0gBMwB74BK+8BjwF3gFtbvzjqg4YembpMangiuYr4QD39J4R6TIJeiNSqhiwMDiJkUHTNStMcsm2GeUXtcgRKgaEWIbOGsaMcGp28B8jJAQAKQonmS9ayLa4a5KBrHmXARCNhr5oFueL4tM4b1om1a6tYmngkkEjJBXuJv1osGpVvWXVjjCUrd5bfQEeNDIiDdmiS8IdqgrPPGsYkwy40ePwkH5HovQ5Ftag6wTtq6ZXvm9QsqHIbpsbNj1qxvm5KH+8JLxR3jVN4foeMDE/Lo0wjt7Q5JgMr6wnRzJEb7e0K0qysoD/aGad+TEO2B7RBsGjwFT0zgCpdES1QWNPmXrg3H6OLbqHSMzlH10LQ0vv+U519H6erHGJ17FaULb6KYp6j26xydejlFJwcnqer9NN3+NCPXuVWYEnxdP7pA5rnM5fL+sKx4FqHK5xNU8ihIR/rDtONxkMrgzZUP07SlfUzpSrtCsvBBgNhLQB7oCSVEU5ivPMSEyCyy6LRjU6cgVfxYrvdx/Ki4c5w9yNRxDOMKDiQMSQXXCSYctGvuD7KZ4IxyFu0MUyrDfICVYdYluDb1zjmpIxm8HraqZIZLVWd0zFrFzMG1alHa9ai+NTcK2qpBqdYa5ghwHahGuexUXLXDyTr0b4fhDtCkyK1uSNiEcdU9hjkLTFghMnuxpyirv11jme2SKvLLqs2aIlYbtkxJ1Xrc142hDThsc8baPCBXcbjHMknwJPHTVPdFsxeeVhmzHopBoGLFoY5v6RfKmXxpMLfNQ0gy8+PJLjtG1afeK/mg/PSVvFr2c+UV6r3MGu2/048lkzp9OSlbzdDKsKz5qK42kqcxaep3gLl1dqX9P+MvO3anVJrByTUAAAAASUVORK5CYII=","aspectRatio":1,"src":"/static/60a1125d5e0bf980225d7b8d13e795a4/3891b/salesforce_logo.png","srcSet":"/static/60a1125d5e0bf980225d7b8d13e795a4/8ac63/salesforce_logo.png 200w,\\n/static/60a1125d5e0bf980225d7b8d13e795a4/3891b/salesforce_logo.png 400w","sizes":"(max-width: 400px) 100vw, 400px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABNklEQVQoz32RPUsDQRCG7yNoEBtF0qSJ2KmFlVaCSBBBCciuCUQtLEQUG9FG8AcI2qRMcSckWAmioF1QsLLYayJYWPgjLCVwPnPuxYDEg4eZHd55d/bGcewXRnoCFmEqrQVGeZwzPRo3qVMj94g+iEbwoSsswnZo9AxxHU7JR3uMRmDoJ1djzn8fwnGY56Zz4juY64+NmPgQGpXHeC+I1CFGl4HRVc5HaHdgDc0+NYlLsIt+UAzn4Am+oHP1VokFGi44zyJqY9giP4NneIEatUfiPRfcor0jb6BdEMMct3ear+W40S7HtukYJuWZcEDTFnEaVuAE6lCFG8xKTLmcTBjpbPrsip3wEzYRFDHJ9PlFA0wybPPcHwHNrt1oAcGqncRLt2q3J9t0ucT/NVZJn9S6Wzba+Qbw6t7CI1tWbQAAAABJRU5ErkJggg==","aspectRatio":2.857142857142857,"src":"/static/9917ecd396566fbd9e5ba6ce22bb4a56/bc8e0/shippo_logo.png","srcSet":"/static/9917ecd396566fbd9e5ba6ce22bb4a56/8ac63/shippo_logo.png 200w,\\n/static/9917ecd396566fbd9e5ba6ce22bb4a56/3891b/shippo_logo.png 400w,\\n/static/9917ecd396566fbd9e5ba6ce22bb4a56/bc8e0/shippo_logo.png 800w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAABKklEQVQY02OYtNdFa+Ieh+ldW12CGRhEGP4zMDCY+ykwQAEzEDMBMSMDJmCCYhDgg4tO2uN6YMGxkOetm13/R3faToKJs7IzswKpOiDWhQqxoRkoAMSRQNwIxBlwB9z5sv7/kTuT/9Svc/wf3WV39v9/kBsZOqCK1wPxUiAOAeI+IC4D4iYgng3EJVD2ASBuBeJ4IE5juP1q//9d15p+li+z/B/TZf9s0pkQDqiGmUA8BYj7gfgEENcA8XYgXgXEPUB8Foh7gbgBiJ2A+BYQWzK8/Hn2/9nH8/4XLzL9H9vj+N+30MAaKJHHyARWCHJZOJQGGVwMxPuBOBmII4A4HYjtoAauA3t69emCxbMOe14rW+zwLarD9kRir40OA25gC8QBWMQrgRgckwDBiVwjtiJEeAAAAABJRU5ErkJggg==","aspectRatio":3.465003465003465,"src":"/static/9d44931c77b4e0406d2a361296f321b3/bc8e0/Shopify_logo.png","srcSet":"/static/9d44931c77b4e0406d2a361296f321b3/8ac63/Shopify_logo.png 200w,\\n/static/9d44931c77b4e0406d2a361296f321b3/3891b/Shopify_logo.png 400w,\\n/static/9d44931c77b4e0406d2a361296f321b3/bc8e0/Shopify_logo.png 800w,\\n/static/9d44931c77b4e0406d2a361296f321b3/6050d/Shopify_logo.png 1200w,\\n/static/9d44931c77b4e0406d2a361296f321b3/00405/Shopify_logo.png 1600w,\\n/static/9d44931c77b4e0406d2a361296f321b3/9ab24/Shopify_logo.png 5000w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAABX0lEQVQoz4WSvUoDQRSF98cYC1mwsgla2Ig+gYmIfxCi4g9YWeyUOyFgISwKaimWIoKNIAQbwbyCCHcafQat8iLxm91ZWS3WgcO9c+bcc+/OrOf9WXFiihiA+1ibD6XNJfkFeFeWSyTINeJVLqXFU86QOAGGvfRrhOkZedpLP0eYDkG93LzaFFGsxXcFTfDGhNvwbeKrSmTZ6YLYDqClykyKGIDJEs+0MoXJ+L8T2bGtUZxN5u5PZ90HTHQL/wCuuK8+uEY7AF1XG6LJ6uy0Rf3PXVhjMJabyjk5D2CeKXpEfAN3h+kL+RNcWDyMKj8OhzV3UCs9jk9BxCfOgQijabgG+Qy6iCYN6uq/vlRLCOfb6bp0OEV8Qp5gNE9cQ3CAYIf9KrFlc3DIfomzBTQrNDkiWt0uPDWmzTRmExxjuI+xIi4i2oJbt2KV5bKHuAnXARvsZ9ljaODF6lr5nyCdb9gp33peadfdAAAAAElFTkSuQmCC","aspectRatio":2.142857142857143,"src":"/static/7917b5c7f4245889c2e8d23b40b5dc9a/bc8e0/Tata_Consultancy_Services_Logo.png","srcSet":"/static/7917b5c7f4245889c2e8d23b40b5dc9a/8ac63/Tata_Consultancy_Services_Logo.png 200w,\\n/static/7917b5c7f4245889c2e8d23b40b5dc9a/3891b/Tata_Consultancy_Services_Logo.png 400w,\\n/static/7917b5c7f4245889c2e8d23b40b5dc9a/bc8e0/Tata_Consultancy_Services_Logo.png 800w,\\n/static/7917b5c7f4245889c2e8d23b40b5dc9a/6050d/Tata_Consultancy_Services_Logo.png 1200w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAsUlEQVQI1yWOvQ5BQRCFb6WRCPECKsVsKYTuKrzHbKXWqsiNQksh8VOQEIVQiIRQiBCFhGfZfQLfUnx75syenZ3IW7OAplOTg9ipZJyVGr0KxF4li5acNVXqPJk6vkguDX18B1/gvoGmIo4LF10ae+obTAld8U+v5o3v4cfoB1bwgCOsydzRDWzhHBYLAxMY8WiG7qD966kk7l+HYSc44Jdoi+yQJSbUL29lQH+Oho/KX4t4dyKKSjMfAAAAAElFTkSuQmCC","aspectRatio":6.65587044534413,"src":"/static/9bd163ed5d0ff7fccae9f36749db3821/bc8e0/Temando-Logo.png","srcSet":"/static/9bd163ed5d0ff7fccae9f36749db3821/8ac63/Temando-Logo.png 200w,\\n/static/9bd163ed5d0ff7fccae9f36749db3821/3891b/Temando-Logo.png 400w,\\n/static/9bd163ed5d0ff7fccae9f36749db3821/bc8e0/Temando-Logo.png 800w,\\n/static/9bd163ed5d0ff7fccae9f36749db3821/6050d/Temando-Logo.png 1200w,\\n/static/9bd163ed5d0ff7fccae9f36749db3821/00405/Temando-Logo.png 1600w,\\n/static/9bd163ed5d0ff7fccae9f36749db3821/384ab/Temando-Logo.png 1644w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAAA9klEQVQY02MoOG8kU3DecDOQXgaku/PPGmkyUALyzxtNBRqWAsTJ+eeM5hVfM8zVMzGS0tE3DtY1NFLXNTDWBWJhHQPjFF19YzsgW1LXwEgByJYDYgkgH6TGCcgWA9LyDECD5gHxVKBhz4GuewM08Iylj5GRtq7xcqCBdUBFs3T1jY7q6BstAhq6F8ifDcRhQDwBiOuBOB2IS4C4DChfxAA0aGfBOaPJQJeGAtk7Ci4YnrAKMOLQ0QO60MhID6jIT8fAKBCowRfoMl8g20UHYkgM0FVA1xuZA9n6QGwBxFZALxvqA114FkhvA4bhemLCEOhaTlxyAIdbWlUqoQRmAAAAAElFTkSuQmCC","aspectRatio":3.9682539682539684,"src":"/static/804bdd0e759074e905a57956dc8abc5f/bc8e0/tradegecko_logo.png","srcSet":"/static/804bdd0e759074e905a57956dc8abc5f/8ac63/tradegecko_logo.png 200w,\\n/static/804bdd0e759074e905a57956dc8abc5f/3891b/tradegecko_logo.png 400w,\\n/static/804bdd0e759074e905a57956dc8abc5f/bc8e0/tradegecko_logo.png 800w,\\n/static/804bdd0e759074e905a57956dc8abc5f/5d2c5/tradegecko_logo.png 1000w","sizes":"(max-width: 800px) 100vw, 800px"}}}}]}}}'
      );
    },
    sAFx: function(a, e, t) {
      'use strict';
      t('PN9k');
      var A = t('ERkP'),
        c = t.n(A),
        n = (t('Wbzz'), t('2xV5'), t('dWle')),
        o = t('Eakc'),
        i = t('PPo7'),
        s = (t('xqb7'), t('IdJa'), t('FfcI'), t('kQsd')),
        d = t('yQns'),
        g = t('j/s1'),
        r = t('2UrR'),
        p = t.n(r),
        l = g.d.section.withConfig({
          displayName: 'bannerotherstyle__BannerWrapper4',
          componentId: 'sc-1alqtnq-0',
        })(
          [
            '\n  padding-top: 210px;\n  padding-bottom: 160px;\n  background-image: url(',
            ');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n//   min-height: 100vh;\n  display: flex;\n  align-items: center;\n  @media (max-width: 990px) {\n    padding-top: 170px;\n    padding-bottom: 120px;\n    min-height: auto;\n  }\n  @media (max-width: 575px) {\n    padding-top: 150px;\n    padding-bottom: 60px;\n  }\n  .particle {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    @media (max-width: 767px) {\n      display: none;\n    }\n  }\n',
          ],
          p.a
        ),
        b =
          (g.d.div.withConfig({
            displayName: 'bannerotherstyle__SearchWrapper',
            componentId: 'sc-1alqtnq-1',
          })([
            "\n  @media (min-width: 576px) {\n    display: flex;\n    align-items: stretch;\n    height: 70px;\n    box-shadow: 0px 6px 15.98px 1.02px rgba(56, 86, 122, 0.1);\n    border-radius: 10px;\n  }\n  @media (max-width: 990px) and (min-width: 576px) {\n    height: 65px;\n  }\n  .domain_search_input {\n    flex-grow: 1;\n    box-shadow: none;\n    outline: none;\n    .field-wrapper {\n      border: 0;\n    }\n    .field-wrapper,\n    input {\n      height: 100%;\n      box-shadow: none;\n      outline: none;\n    }\n    input {\n      font-size: 17px;\n      padding-left: 50px;\n      padding-right: 30px;\n      text-shadow: none;\n      border: 1px solid #ebebeb;\n      &:focus {\n        border-color: #ebebeb;\n      }\n\n      @media (min-width: 576px) {\n        border-right: 0;\n        border-top-left-radius: 10px;\n        border-bottom-left-radius: 10px;\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0;\n        border-color: #f4f5f7;\n        &:focus {\n          border-color: #f4f5f7;\n        }\n      }\n      @media (max-width: 575px) {\n        height: 52px;\n        padding-left: 20px;\n        margin-bottom: 20px;\n      }\n    }\n  }\n  .domain_search_select {\n    min-width: 165px;\n    @media (max-width: 575px) {\n      height: 52px;\n      margin-bottom: 20px;\n    }\n    .select__control,\n    .select-field__wrapper {\n      height: 100%;\n    }\n    .select__control {\n      padding: 0 15px 0 10px;\n      box-shadow: none;\n      position: relative;\n      border-color: #ebebeb;\n      @media (min-width: 576px) {\n        border-color: #f4f5f7;\n        border-left: 0;\n        border-right: 0;\n        border-radius: 0;\n        &:before {\n          content: '';\n          position: absolute;\n          width: 1px;\n          height: 55%;\n          background: #d9d9d9;\n          display: block;\n          top: 50%;\n          left: 0;\n          transform: translateY(-50%);\n        }\n      }\n\n      .select__placeholder {\n        font-size: 17px;\n        color: #0f2137;\n      }\n      .select__indicator {\n        color: #0f2137;\n      }\n    }\n    .select__indicator-separator {\n      display: none;\n    }\n  }\n\n  .domain_search_button {\n    width: 160px;\n    @media (min-width: 576px) {\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0;\n      border-top-right-radius: 10px;\n      border-bottom-right-radius: 10px;\n    }\n    @media (max-width: 575px) {\n      height: 52px;\n      width: 100%;\n    }\n  }\n",
          ]),
          g.d.ul.withConfig({
            displayName: 'bannerotherstyle__List',
            componentId: 'sc-1alqtnq-2',
          })([
            '\n  text-align: center;\n  margin-top: 17px;\n  li {\n    display: inline-block;\n    font-size: 17px;\n    font-weight: 400;\n    color: #0f2137;\n    padding: 8px 12px;\n\n    a {\n      font-size: 15px;\n      color: #87909b;\n      display: block;\n      &:hover {\n        color: #eb4d4b;\n      }\n    }\n  }\n',
          ]),
          g.d.div.withConfig({
            displayName: 'bannerotherstyle__DiscountWrapper',
            componentId: 'sc-1alqtnq-3',
          })(['\n  text-align: center;\n']),
          g.d.div.withConfig({
            displayName: 'bannerotherstyle__DiscountLabel',
            componentId: 'sc-1alqtnq-4',
          })([
            "\n  font-family: 'Open Sans', sans-serif;\n  display: inline-block;\n  border-radius: 4em;\n  border: 1px solid #f6f6f7;\n  padding: 7px 25px;\n  box-shadow: 0px 7px 25px 0px rgba(22, 53, 76, 0.05);\n  margin-bottom: 30px;\n  background-color: #fff;\n  @media (max-width: 575px) {\n    padding: 7px 10px;\n  }\n",
          ]),
          l),
        f =
          (t('x/64'),
          t('8oSd'),
          function(a) {
            var e = a.row,
              t = a.title,
              A = a.description,
              g = (a.button, a.textArea);
            a.searchArea, a.discountAmount, a.discountText;
            return c.a.createElement(
              b,
              { id: 'banner_section' },
              c.a.createElement(d.a, null),
              c.a.createElement(
                s.a,
                { className: 'banner_container aboutUs_banner' },
                c.a.createElement(
                  n.a,
                  e,
                  c.a.createElement(
                    n.a,
                    g,
                    c.a.createElement(
                      i.a,
                      Object.assign({}, t, {
                        content:
                          'The future of e-commerce is unified and universal',
                      })
                    ),
                    c.a.createElement(
                      o.a,
                      Object.assign({}, A, {
                        content:
                          'Unified commerce goes beyond omni-channel, putting the customer experience first, breaking down the walls between internal channel silos and leveraging a common commerce platform"- Boston Retail Partners',
                      })
                    )
                  )
                )
              ),
              c.a.createElement(
                s.a,
                { className: 'banner_container ContactUs_banner' },
                c.a.createElement(
                  n.a,
                  e,
                  c.a.createElement(
                    n.a,
                    g,
                    c.a.createElement(
                      i.a,
                      Object.assign({}, t, { content: 'Contact us' })
                    ),
                    c.a.createElement(
                      o.a,
                      Object.assign({}, A, {
                        content:
                          'We endeavour to answer all enquiries within 24 hours on business days.',
                      })
                    )
                  )
                )
              ),
              c.a.createElement(
                s.a,
                { className: 'banner_container company_banner' },
                c.a.createElement(
                  n.a,
                  e,
                  c.a.createElement(
                    n.a,
                    g,
                    c.a.createElement(
                      i.a,
                      Object.assign({}, t, {
                        content:
                          'The future of e-commerce is unified and universal',
                      })
                    ),
                    c.a.createElement(
                      o.a,
                      Object.assign({}, A, {
                        content:
                          'Unified commerce goes beyond omni-channel, putting the customer experience first, breaking down the walls between internal channel silos and leveraging a common commerce platform"- Boston Retail Partners',
                      })
                    )
                  )
                )
              ),
              c.a.createElement(
                s.a,
                { className: 'banner_container ourTeam_banner' },
                c.a.createElement(
                  n.a,
                  e,
                  c.a.createElement(
                    n.a,
                    g,
                    c.a.createElement(
                      i.a,
                      Object.assign({}, t, { content: 'Our Team' })
                    ),
                    c.a.createElement(
                      o.a,
                      Object.assign({}, A, {
                        content:
                          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                      })
                    )
                  )
                )
              ),
              c.a.createElement(
                s.a,
                { className: 'banner_container Partner_banner' },
                c.a.createElement(
                  n.a,
                  e,
                  c.a.createElement(
                    n.a,
                    g,
                    c.a.createElement(
                      i.a,
                      Object.assign({}, t, { content: 'Partners' })
                    ),
                    c.a.createElement(
                      o.a,
                      Object.assign({}, A, {
                        content:
                          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                      })
                    )
                  )
                )
              ),
              c.a.createElement(
                s.a,
                { className: 'banner_container universalcom_suite_banner' },
                c.a.createElement(
                  n.a,
                  e,
                  c.a.createElement(
                    n.a,
                    g,
                    c.a.createElement(
                      i.a,
                      Object.assign({}, t, {
                        content: 'Universal Commerce Suite',
                      })
                    ),
                    c.a.createElement(
                      o.a,
                      Object.assign({}, A, {
                        content:
                          'Best of Breed Innovation and Disruption on a Single Platform',
                      })
                    )
                  )
                )
              )
            );
          });
      f.defaultProps = {
        row: {
          flexBox: !0,
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
        },
        textArea: { width: ['98%', '95%', '95%', '95%', '85%'] },
        title: {
          fontSize: ['26px', '32px', '42px', '45px', '45px'],
          fontWeight: '400',
          color: '#0f2137',
          letterSpacing: '-0.025em',
          mb: ['5px', '8px', '8px', '8px', '8px'],
          lineHeight: '1.31',
          textAlign: 'center',
        },
        description: {
          fontSize: ['18px', '20px', '20px', '24px', '24px'],
          color: '#343d48cc',
          lineHeight: '1.75',
          mb: '0',
          textAlign: 'center',
        },
        button: {
          title: 'Search',
          type: 'button',
          fontSize: '18px',
          fontWeight: '500',
          color: '#fff',
          pl: '22px',
          pr: '22px',
          colors: 'primaryWithBg',
          iconPosition: 'left',
        },
        searchArea: {
          className: 'search_area',
          width: ['100%', '100%', '80%', '100%', '70%'],
          mt: ['45px', '50px', '60px', '60px', '60px'],
        },
        discountAmount: {
          fontSize: ['13px', '14px', '14px', '14px', '14px'],
          fontWeight: '600',
          color: '#eb4d4b',
          mb: 0,
          as: 'span',
          mr: '0.4em',
        },
        discountText: {
          fontSize: ['13px', '14px', '14px', '14px', '14px'],
          fontWeight: '400',
          color: '#0f2137',
          mb: 0,
          as: 'span',
        },
      };
      e.a = f;
    },
  },
]);
//# sourceMappingURL=component---src-pages-about-partners-js-43db266ef872f7fefc4c.js.map
