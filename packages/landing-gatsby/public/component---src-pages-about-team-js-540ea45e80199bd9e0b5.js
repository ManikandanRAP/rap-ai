(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    '8oSd': function(a, A, e) {
      'use strict';
      e('Bu8c'),
        e('UQCJ'),
        Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.search = void 0);
      A.search = {
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
    Opke: function(a, A, e) {
      'use strict';
      e.r(A);
      var c = e('ERkP'),
        t = e.n(c),
        n = e('j/s1'),
        o = e('gyFy'),
        i = e.n(o),
        g = e('eQ1p'),
        s = e('6gYp'),
        d = e('zqX6'),
        b = e('2ecW'),
        l = e('rj7Q'),
        f = e('LUIQ'),
        p = e('iy5v'),
        r = e('vrFN'),
        w = e('sAFx'),
        m = (e('PN9k'), e('VTcC')),
        B = e('MFEH'),
        h = e.n(B),
        E = e('dWle'),
        S = e('Eakc'),
        C = e('PPo7'),
        x = e('k/KV'),
        Q = e('kQsd'),
        I = e('J31B'),
        R =
          (e('Zsql'),
          function(a) {
            var A = a.sectionWrapper,
              e = a.row,
              c = a.col,
              n = a.col_par,
              o = a.secTitleWrapper,
              i = a.secHeading,
              g = (a.secText, a.featureItemHeading),
              s = a.featureItemDes,
              d = a.featureBlockStyle,
              b = a.iconStyle,
              l = a.contentStyle,
              f = m.data;
            return t.a.createElement(
              E.a,
              Object.assign({}, A, { id: 'OurTeam' }),
              t.a.createElement(
                Q.a,
                { className: 'BoxItemsContainer ourTeamPage_content' },
                t.a.createElement(
                  t.a.Fragment,
                  null,
                  t.a.createElement(
                    E.a,
                    Object.assign({}, e, { className: 'flex_center' }),
                    f.hostingJson.OURTEAM_DATA.map(function(a, A) {
                      return t.a.createElement(
                        E.a,
                        Object.assign({}, c, { key: 'team-' + A }),
                        t.a.createElement(I.a, {
                          wrapperStyle: d,
                          iconStyle: b,
                          contentStyle: l,
                          title: t.a.createElement(
                            C.a,
                            Object.assign({}, g, { content: a.title })
                          ),
                          description: t.a.createElement(
                            S.a,
                            Object.assign({}, s, { content: a.description })
                          ),
                          icon: t.a.createElement(x.a, {
                            src: a.icon.publicURL,
                            alt: 'icon-' + A,
                            className: 'team_image',
                          }),
                        })
                      );
                    })
                  )
                )
              ),
              t.a.createElement(
                Q.a,
                { className: 'BoxItemsContainer ourPartnerPage_content' },
                t.a.createElement(
                  t.a.Fragment,
                  null,
                  t.a.createElement(
                    E.a,
                    o,
                    t.a.createElement(
                      h.a,
                      { bottom: !0, cascade: !0 },
                      t.a.createElement(
                        C.a,
                        Object.assign({}, i, { content: 'OUR PARTNERS' })
                      )
                    )
                  ),
                  t.a.createElement(
                    E.a,
                    Object.assign({}, e, { className: 'flex_center' }),
                    f.hostingJson.PARTNERS.map(function(a, A) {
                      return t.a.createElement(
                        E.a,
                        Object.assign({}, n, { key: 'partner-' + A }),
                        t.a.createElement(I.a, {
                          wrapperStyle: d,
                          iconStyle: b,
                          contentStyle: l,
                          icon: t.a.createElement(x.a, {
                            src: a.avatar.childImageSharp.fluid.src,
                            alt: 'partners-' + A,
                            className: 'partners_image',
                          }),
                        })
                      );
                    })
                  )
                )
              ),
              t.a.createElement(
                Q.a,
                { className: 'BoxItemsContainer ourCustomerPage_content' },
                t.a.createElement(
                  t.a.Fragment,
                  null,
                  t.a.createElement(
                    E.a,
                    Object.assign({}, o, { style: { marginTop: '80px' } }),
                    t.a.createElement(
                      h.a,
                      { bottom: !0, cascade: !0 },
                      t.a.createElement(
                        C.a,
                        Object.assign({}, i, { content: 'OUR CUSTOMERS' })
                      )
                    )
                  ),
                  t.a.createElement(
                    E.a,
                    Object.assign({}, e, { className: 'flex_center' }),
                    f.hostingJson.CUSTOMERS_S.map(function(a, A) {
                      return t.a.createElement(
                        E.a,
                        Object.assign({}, n, { key: 'customers-' + A }),
                        t.a.createElement(I.a, {
                          wrapperStyle: d,
                          iconStyle: b,
                          contentStyle: l,
                          icon: t.a.createElement(x.a, {
                            src: a.avatar.childImageSharp.fluid.src,
                            alt: 'customers-' + A,
                            className: 'customers_image',
                          }),
                        })
                      );
                    })
                  )
                )
              )
            );
          });
      R.defaultProps = {
        sectionWrapper: {
          as: 'section',
          id: 'service_section',
          className: 'service_section',
          pt: ['60px', '80px', '80px', '80px'],
          pb: ['60px', '80px', '80px', '100px'],
        },
        secTitleWrapper: { mb: ['50px', '60px', '60px', '75px'] },
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
      var u = R;
      A.default = function() {
        return t.a.createElement(
          n.a,
          { theme: g.a },
          t.a.createElement(
            p.ParallaxProvider,
            null,
            t.a.createElement(r.a, { title: 'Cnetric Global Inc' }),
            t.a.createElement(d.a, null),
            t.a.createElement(s.c, null),
            t.a.createElement(
              s.a,
              { className: 'ourTeam_page' },
              t.a.createElement(
                i.a,
                { top: 0, innerZ: 9999, activeClass: 'sticky-nav-active' },
                t.a.createElement(f.b, null, t.a.createElement(b.a, null))
              ),
              t.a.createElement(w.a, null),
              t.a.createElement(u, null),
              t.a.createElement(l.a, null)
            ),
            t.a.createElement(
              'div',
              { id: 'footerWrapper', className: 'copyright' },
              t.a.createElement(
                'p',
                { style: { textAlign: 'center' } },
                'Copyright 2020 @Cnetric Global. All Rights Reserved.'
              )
            )
          )
        );
      };
    },
    VTcC: function(a) {
      a.exports = JSON.parse(
        '{"data":{"hostingJson":{"OURTEAM_DATA":[{"title":"Manohar Durai","description":"Founder & CEO","icon":{"publicURL":"/static/manohar-85c84e8832b6a3816dd91ef252e41c53.png"}},{"title":"Ross Collins","description":"Chief Digital Officer","icon":{"publicURL":"/static/ross-6b23bc0501ea7c387563ccc008b254ee.png"}},{"title":"Santhosh Kumar","description":"Chief Technology Officer","icon":{"publicURL":"/static/santhosh-d1a07f6188ef35319eac3bb72274668d.png"}},{"title":"Arul Mony","description":"SVP – Presales and Alliances","icon":{"publicURL":"/static/arul-0be9780f206db76df226261b70cb9f95.png"}},{"title":"Thomas John","description":"Chief Marketing Officer","icon":{"publicURL":"/static/TJ-5f5fca94a2854e1fc3f77a1e84c4d103.png"}},{"title":"Dennis Menéndez","description":"SVP - Client Success (Americas)","icon":{"publicURL":"/static/dennis-cc2b62af3e24993731a1035e7e6e3ab8.png"}},{"title":"Raja Ganguly","description":"GM - LATAM","icon":{"publicURL":"/static/raja-7732beba9dc0c57808576d34749af33f.png"}},{"title":"James Fong","description":"VP - Digital Experience & Commerce","icon":{"publicURL":"/static/james-f71f22f5e79318d665bdff0154069c8e.png"}},{"title":"Augustin Gohil","description":"VP - Digital Marketing Solutions","icon":{"publicURL":"/static/augustin-5c87be3cbc9b9ec02c2aad9e2738fa45.png"}},{"title":"Ashwin Anand","description":"Director - Digital Commerce Solutions","icon":{"publicURL":"/static/ashwin-6388b2a0e36103566b7f6b32fbc20d19.png"}},{"title":"Laura Wainberg","description":"General Manager (LATAM)","icon":{"publicURL":"/static/laura-af5314c5e57e981f1bc392a09109d471.png"}},{"title":"Andrew Burgess","description":"GM - Client Success (APAC)","icon":{"publicURL":"/static/andrew-716e84467fb8919b67714aad67158b25.png"}},{"title":"Jorge Antunez","description":"Regional VP - Sales (Americas)","icon":{"publicURL":"/static/jorge-dd97207482602015958fa05badd6b71b.png"}}],"PARTNERS":[{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABUElEQVQoz4WRu0oDURCGZzfxkkjAwiqNrYiCIHkCUYslWgoBbRREtFMQ2yCoKGqxghAwRt0kZ1MIghYBQWyDT6F7IoiFT7B+Z7PGShz4mX9u/5yLJOvaSgDBrLqWPqWlFxhL4VN+hw/4Hb7c+pI03sSZRjvq71G/cdesH2EvsKTyKnBbbt6imm24F4iB8/wpUqWnSlyjvxZEhyG2zeGMepbhMfnDwjCU/2z49t3qBmw/4nQvMR8B12CfJaNgm61b1HMsdohzk80PK6H0CnGBp5mgd4P8GThI++0FI3IC9hicxrsMz/YrPQS/Ankas/gS/pyaEy++RHTXCJFzTQ5eQmPdFO8JDik8wC9IDsZDXlLp8fh9y/SckivwIRkjSG2TXBlejAWL8EUzuATmSbg07TD8FAkrPYW/Aw1yjyxahddAC8xw3TWuPQc/Bop6k5n8Ny8s00lhcZhzAAAAAElFTkSuQmCC","aspectRatio":3.037974683544304,"src":"/static/1aa7f5bd78f2262abcb6e76c4bb089af/bc8e0/Acquia_logo.png","srcSet":"/static/1aa7f5bd78f2262abcb6e76c4bb089af/8ac63/Acquia_logo.png 200w,\\n/static/1aa7f5bd78f2262abcb6e76c4bb089af/3891b/Acquia_logo.png 400w,\\n/static/1aa7f5bd78f2262abcb6e76c4bb089af/bc8e0/Acquia_logo.png 800w,\\n/static/1aa7f5bd78f2262abcb6e76c4bb089af/6050d/Acquia_logo.png 1200w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAA0UlEQVQoz61S2QqCQBT1t3vrR/qSKIqgqEDqIZ+KNk1zayH3GU/OkKaSRNqBy71nZjhzNwE1EMdxIU4580Ke1LGyqFD+8VfQUraFDO+Bj1titu/C8lxcfI9bPn6EIUzPSXwAw3XQkUR0D5tMNBMMCMHCUCHqKkanPaaajKGyg2QbnI/VI+ZnBUtT43x9tfnb1qSH9mwAL4qKgsxHlCKkBCSm/IwkPO0Pfd0zS8GS6MtbrCz9XXJVD7/1tXyfDaXplFk1NL82daf7aWUaCVbh74JPqc1hGTnnU58AAAAASUVORK5CYII=","aspectRatio":1.7777777777777777,"src":"/static/242fd8c27294ae7f46c10a883687c0de/bc8e0/coremedia_logo.png","srcSet":"/static/242fd8c27294ae7f46c10a883687c0de/8ac63/coremedia_logo.png 200w,\\n/static/242fd8c27294ae7f46c10a883687c0de/3891b/coremedia_logo.png 400w,\\n/static/242fd8c27294ae7f46c10a883687c0de/bc8e0/coremedia_logo.png 800w,\\n/static/242fd8c27294ae7f46c10a883687c0de/6050d/coremedia_logo.png 1200w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAACBklEQVQoz2OI3nGf4f/zSwyaK+8zqCy/x6y0+CYTAxBkllYzZBSWMeTmFTLkAHFuPowuAIuB+CAAo1FA7KE3DP//b4DzizeeZsyJjWTIyy9kzEXDOXC6AKwWRsNBz/EHTDC29LIH5aKL77oxEAliaroYgC5hUF9xj0Ft5UOoqPdlxkOXb4dV7LuzwGrri/968858C5293bggKzM0u6A4BuiiouyCElcg2zsnv6gSSIcBxYJy8wrEQNqrk6MYYRaorYIaeuP2Xa0Ldx6+23Lu5vdDtx7/P3fxUmNsXHxlYWFRd15u7vTizLSKwqzMaiBuKMpKrwYaNj8vNy8SpNd22h4mFMOevHgNtuH+3TsrLl6/9e7ajZsXl5+9Fykx53K47qq7QSqrHiVqL71eprX0ZpHCuldJqqseFmgtu5mhv+hSudrK+/lAvovaygeJQAONwAYuWLgEbMPmrdtrjh493rh/x/burLUnfSTXvEhVW/0oBaihRWX14zogbgVq7ITwH3Upr3lSCWT3A8WigHQz0EB3iIGLl2INcNVld7i1lt1iB2F0OaALOU3mnQI7BGgYL9BQDqCBrHAFK1auBtP///+HBPCj/6iGr3oIFgfFJDysIOIo6sByS5etAHOWLV/JsGb9RoaVy5YztK/ZyyC36jGD+qoHQEUPwArBeOUDsCHY+Q/A5gAAIbYKX9VzRWUAAAAASUVORK5CYII=","aspectRatio":2,"src":"/static/c6cec03ae982495859ab84175f6c9ce3/8c332/drupal_commerce_logo.png","srcSet":"/static/c6cec03ae982495859ab84175f6c9ce3/8ac63/drupal_commerce_logo.png 200w,\\n/static/c6cec03ae982495859ab84175f6c9ce3/3891b/drupal_commerce_logo.png 400w,\\n/static/c6cec03ae982495859ab84175f6c9ce3/8c332/drupal_commerce_logo.png 600w","sizes":"(max-width: 600px) 100vw, 600px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABTUlEQVQoz2NgoDYIDPSE0EGeDAFBCDZl4P9/BtPkEkadjCZGEDso0I0xAGpBIBRD+YzBAa4MDG1nGRhaTkBw60kgPgExB0wDDUAGHuFh5DkKZmiPDoR2iYyxA2J3SDB4aAExHxALAl3HBQwWHqDrRIBYGuh6MYaJL9kYm4/xAF3IAXShEBBzQww9CTV9yX9BhYJpS2SLZm4WrFxjEObnUOkf5JUGNKAWaGAGEOcB2ZUBQV4JIf7O6Ywtx8OAmtOBBkYAsS/YYBBoARqYZy/NCGI7xCS7eIaHuoGCIDjARRxogCYQCwFdKQmkJYCYD4SBfBmRipWiDB0XhRlajkuCXQhzHczb/ylNKiDDWqCG/YSKGadUMALDkFEltx8Yy+6gWGaExjJjIJQN5gd6MIpUrGAAuhBoyHFGsDeRYxmW5mBJBMwO9IAnF+qkSwoAAPbDffZOZyLjAAAAAElFTkSuQmCC","aspectRatio":1.9047619047619047,"src":"/static/a6d002fdf0d170dcb2eebb45f578ce89/8c332/dynamicweb-logo.png","srcSet":"/static/a6d002fdf0d170dcb2eebb45f578ce89/8ac63/dynamicweb-logo.png 200w,\\n/static/a6d002fdf0d170dcb2eebb45f578ce89/3891b/dynamicweb-logo.png 400w,\\n/static/a6d002fdf0d170dcb2eebb45f578ce89/8c332/dynamicweb-logo.png 600w","sizes":"(max-width: 600px) 100vw, 600px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABbElEQVQoz43Svy8DYRwG8Of0TrRaP5o0UoOIKi3Xpj1ppGlzde4SP0KFgVhUlNhYDAa6EBKRWCWESSy1GRgtRv8EI7EhtHk9V2ewueRz7/fe93vPvXctADSTB/8/6uyTwJJkj1WYfhqhwG/DBqXIT43kI3tRctYT1OvU9lo0Dq/vJ9RKM+iGDuiasvb8Dh/ZwbFIR7RLyzRPBZpmcoZ0SrJ3lHO6fWMFZpkhGWenazRn1yXK0z7t0TqtOPPbpFGOYpSmRTvwGbqHAedfMENVWKusU3SMVshDnWiI1UOKh+FWWWs+uELcyWYEHvXn1QS64A4HoHQXEHQPoqnNeeUL7vKKQXk6pS1OlrwCUz0CeVVgIi4wmWRj/wNSA7yOfsCIvsOIsY4IjLPH0gTG2jkWGXbJkFk6pIXaV55BwHUHTXlEtqUMVT5BRHmBrgjcS7dIyG8wXK8wpDP01fqekJVz/O0+MRwUMP/8Oyqw8A1IMWcvpNMZHAAAAABJRU5ErkJggg==","aspectRatio":3.029585798816568,"src":"/static/0095255d13d239476cf579192e2718a8/6ba37/easy_ask_logo.png","srcSet":"/static/0095255d13d239476cf579192e2718a8/8ac63/easy_ask_logo.png 200w,\\n/static/0095255d13d239476cf579192e2718a8/3891b/easy_ask_logo.png 400w,\\n/static/0095255d13d239476cf579192e2718a8/6ba37/easy_ask_logo.png 512w","sizes":"(max-width: 512px) 100vw, 512px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAAByElEQVQ4y32SsUscURCH3+56FkeKKIooeBgQoqnMGyNGlBSx1C61WKQRFEEJIoSAlyMgUTEIosV5WiVFTBBF0imIot6JhZ2N/gGSYGkh5pvbd+sZyC58/GbmZn7z3uOM+fez+VCl4EU1KcxTv0FHXV4R9alKwcR/2nA/sOrMduGGuDJaeL88xizcGLjGEdN+doe+o36BbkAXvH6wPPZ7aLgDm7AOh5A2cqILlEHX48ebhtcNnPm0G84QLxk5DWMp/Ias6w+iq8eYes4wSfzdmd7Ce9iDK2iMestPKCKRlmJjjynk/fCH/JjpvFTDa+Jz9A+LmqLrlvkU5621pcQrFWtk1tRJxnUe54C3yy/CjrFHKS17chBsMd8mXXgUZ/2SoaeU37jDtpqn9s1/X8SXff+VfeTFP5tIH9SV155LR9LKi2dt8rJH82YZSHDyIPpDiFQwk4AG6OdgCT1hmmQeZuCDxjROQEasXUZzMM610uhb+CxiJ8mHmJ2DRcgy9xNd0JP90gTUOEvxG7oA28S65BN8gTUYpvZDTYhX0K9SXCAfiafQSTWshWZ4DDXQCfXQSlM12oJWoU3QW7yBtSlIEne7uSfQqP1/AXHJw8NhUEUqAAAAAElFTkSuQmCC","aspectRatio":1.555041628122109,"src":"/static/4d3827ac795f001fc3ce2ab51f6f500f/bc8e0/ElastiPath_logo.png","srcSet":"/static/4d3827ac795f001fc3ce2ab51f6f500f/8ac63/ElastiPath_logo.png 200w,\\n/static/4d3827ac795f001fc3ce2ab51f6f500f/3891b/ElastiPath_logo.png 400w,\\n/static/4d3827ac795f001fc3ce2ab51f6f500f/bc8e0/ElastiPath_logo.png 800w,\\n/static/4d3827ac795f001fc3ce2ab51f6f500f/6050d/ElastiPath_logo.png 1200w,\\n/static/4d3827ac795f001fc3ce2ab51f6f500f/00405/ElastiPath_logo.png 1600w,\\n/static/4d3827ac795f001fc3ce2ab51f6f500f/1e2a2/ElastiPath_logo.png 1681w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAACMklEQVQ4y62Rz2sTQRTHZydZ6aZimh+KDWhoxYMSrNUWBal/gAdB/HHyJF4MoqnZ2XSzaTRQiloVUUH8Dzx5EDx4s8ZtrdlYKAhtr3pTqM0mYm2yr29ms4GINBYd+PK+b/bNZ9+bIaTDqub9ItYmesjXoLu3Mox5oVt4+xrZ+uIwb/14lJBb+4XA30Oc2X4R66/jUv3VLtkFKPdqN+XPtXHfY5HnfRL6LUDf72vvNC8X4QGFao58cq9DkqrGZoCF0wSsIdfPHZDcTvfHYWZv2jF3p6qTXYswIYAlF0g3B0LpsAsrnyBg9orXcGbiSVjeA1COQuVOAOo5CrVxMu92TKVarsOYgDABWnafTwCtGDjF8NrqbWV9TffxDgVwJePvMLJ1nDhmuOmPTjkfEhY+zhJ26zjFyLp9V/n1E4GVLLF4zfcxv1TRf4Mwxlrx25sRFzZ/nkJpcBG+DAAs9OO4MQArCvWHCkCBgm2QJV5XyVHJzv6hM1VVBfD5k4vkxdMzlO815gYnG7MHyw2zb7pR7H1Xn46a9pTydjVDP1ay0n1e8zIzQm+xpDjfas7r8F+XB/USiuCTjKnHVJWFNaZG8kYqpGnpIT1zI2boo6GMlj5kaNeDWZYK6yzVx1R1J9Ym8EwIz25vg6JRcPMUfryEMrDwMsYc6hlKQw2jkqgLzXgVa7i/gjqH58+2JvWoGLtRO/jfUF2oAcyPYAzwHL2M2oaedxRBH2rWBVE9bSP/r3vknA2QUB9rSo0mPQAAAABJRU5ErkJggg==","aspectRatio":1.3207964601769913,"src":"/static/f84c710c03e5e2b72268434a77c41207/bc8e0/google_analytics_logo.png","srcSet":"/static/f84c710c03e5e2b72268434a77c41207/8ac63/google_analytics_logo.png 200w,\\n/static/f84c710c03e5e2b72268434a77c41207/3891b/google_analytics_logo.png 400w,\\n/static/f84c710c03e5e2b72268434a77c41207/bc8e0/google_analytics_logo.png 800w,\\n/static/f84c710c03e5e2b72268434a77c41207/6050d/google_analytics_logo.png 1200w,\\n/static/f84c710c03e5e2b72268434a77c41207/00405/google_analytics_logo.png 1600w,\\n/static/f84c710c03e5e2b72268434a77c41207/4ae49/google_analytics_logo.png 2388w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAoklEQVQY02NgAIG0zWCKIXUzIwMMpG5mZiAEMoD6UjdB1W9Ck4QZlrpZCCgpCVWkAOTzAmkWIDYEYjOwXOomTiBWQujFMAxuCwcQPwLiw0DcAMR/gXg6EN8B4lKoWAwQHwDiC0DMBcTsUIegGAh1HdDWtE2zwHTqpjgguw1IWwDxFCCOBWoKA9JqQNwNxGVAHAHEMihmIHkZf3iBvI1TDqEXAOToR1LfHEGHAAAAAElFTkSuQmCC","aspectRatio":3.6721311475409837,"src":"/static/d0f5c9f05fef2fccb243538c5cd35f53/97656/HCL_logo.png","srcSet":"/static/d0f5c9f05fef2fccb243538c5cd35f53/8ac63/HCL_logo.png 200w,\\n/static/d0f5c9f05fef2fccb243538c5cd35f53/3891b/HCL_logo.png 400w,\\n/static/d0f5c9f05fef2fccb243538c5cd35f53/97656/HCL_logo.png 448w","sizes":"(max-width: 448px) 100vw, 448px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAABkElEQVQoz1WSWytEURTHz5ChXMoTXvaJXBIhpsgkkcuD64xhmpSEPOGcGkZqHlxCzETjbZrhs+z9zfzW2TuNqd/81163s/Y6x/NDnVaB3vUDvQejfmhWOWdQ8aXRpMcPe1L8kIUh5+tUgdlRtnYNbRZnTYXm3Q9MjeIU5xeSvrAr+L/RT1iEI5AciZ1IQ+IJZc8VeKNh3MPYwHhGs9ADM3BP43N0GAIe9oQOwDH2KxRVqDs4H3LDElqQOvrEZMI+KMOE534E70i8jJoH5ho9df5limTil2globklXkavvIbiQSiROOuu0c75Bj5IrnP9Coy73C2Q21wQe7MPNnnsPBr3XIM+CsrovwnxyYTT0DjhKjyQm3S7zWEfQqFxwk37VJ3zo+Y6IUWcz7FHZIfoI/Rjn0X7DXUvWoQpyDhfgpwmj79q9JZDU4d9Za9k31wQ+WSSBWWn+VF2f12wRG03L+cIX1XWRn4rE+rU33cYmjHsFfdNyveVIj5vb6LHiR/g26ZBG8UtrCVG3hyIf5148y/FGg5ZjsA/sAAAAABJRU5ErkJggg==","aspectRatio":2.2962962962962963,"src":"/static/386c15cc643288b3c7244ca3926985ed/bc8e0/ibm_logo.png","srcSet":"/static/386c15cc643288b3c7244ca3926985ed/8ac63/ibm_logo.png 200w,\\n/static/386c15cc643288b3c7244ca3926985ed/3891b/ibm_logo.png 400w,\\n/static/386c15cc643288b3c7244ca3926985ed/bc8e0/ibm_logo.png 800w,\\n/static/386c15cc643288b3c7244ca3926985ed/6050d/ibm_logo.png 1200w,\\n/static/386c15cc643288b3c7244ca3926985ed/00405/ibm_logo.png 1600w,\\n/static/386c15cc643288b3c7244ca3926985ed/46ad3/ibm_logo.png 4464w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAAB80lEQVQ4y6WTTUgVURSA582LV6BhEC1ECHE583xPSXLb7rUyFRVsJ7VrK0jrNm1rYeHGH3BpIEjITIJSSilqRi5aBG2CqI33StQTa/rOnTM6/uy6cDjnnp/vnnvmjuexwsi2BZHtEhtdSH2mqLq/upUkYWyGNV4MYyt+z8XjVJ9YON8EsfmNNLii2BSDyJQUOHgKeJGYH8QO7KvvJBhAF85aGjR+/jD2teq2A971zlmh3kiguQ5tDwWjdHNZ97dImCF5Ct9EZd0Bh9g3Ik+xF/FPh6fGlOvQLlU2KAIIrLd9LUnKK3Ug9nv4aj+pvHXAHuLdQH5hL1Czhz5A2nRshTzwBckHSAv2DkV/gd3QK4/qlbMZXiPeQu7j6qZrYkhnfSHI5ghkHkcdacemA7uYm+FtBfZTcJ3YFz38W/n1oQCHzwxWgX+QVuzP6B/IVT35vgJrwKbLy/V0NJEZcF8/Mne08yYOLB0Dl35KsAH7QfW9A3zlai/RpnPXFfYBfFR5lyQUPsP+1PHB5U0q4yP+hQw4R4IUNeuAR5B1fKvoe8gscpMuStJlem07hjyXBvRlPCHnYfZsVtgcArzi/e8SaseOXMNO6sz80P0p1pdHLnvVcrB35I/TmOa7tygxSRpExpFL2m3h/D/CHGkB66icZP+0yD8F5Zu6UCEsXwAAAABJRU5ErkJggg==","aspectRatio":1.556420233463035,"src":"/static/74f8179d86bc991e59c14d2d5912c6d9/bc8e0/JDA_Software_Logo.png","srcSet":"/static/74f8179d86bc991e59c14d2d5912c6d9/8ac63/JDA_Software_Logo.png 200w,\\n/static/74f8179d86bc991e59c14d2d5912c6d9/3891b/JDA_Software_Logo.png 400w,\\n/static/74f8179d86bc991e59c14d2d5912c6d9/bc8e0/JDA_Software_Logo.png 800w,\\n/static/74f8179d86bc991e59c14d2d5912c6d9/6050d/JDA_Software_Logo.png 1200w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAC4jAAAuIwF4pT92AAABL0lEQVQoz2NojVjIMCV9AwMMzIjbzQikQJiJAQFgfHQ5JjR5BOiLWc3fHbnChAEVyAAxCwMpYGHVDj4Q/fzUD/4mv4XPYiU6VIBcRVYmNjUgHQ3EpkAsCMSWQCwFxDpA7AC1yA6IhYBYHYhtwQYWO06qbQyct7A/cn1bue2s/wmK7QZAYWdGBqaJQLoGiGuBOAyIZwJxARCXAHEuEFcB8QQonQjEKUBsyBClWGuUbtD1rNx83v9CwxmLwQHDyFwGpJqAOAeIM4A4BohBYtZA7AXE9kCcDTXcDIiTgLgQiBXgXo+QbJDJM5qsBGJzsvCAgkEYGtDMQMwGxKJAzAv1KjtUmwSUzQ3EYmCRGJU6RuQw9VfKYmSgBKTpdTJEK9UzZGj3MeYZTAEbxs7MSbZ5AI2ZOSVKDvSsAAAAAElFTkSuQmCC","aspectRatio":2.6666666666666665,"src":"/static/c2ac413cc12b7507f7bd11cef342d3b3/bc8e0/Logo_akeneo.png","srcSet":"/static/c2ac413cc12b7507f7bd11cef342d3b3/8ac63/Logo_akeneo.png 200w,\\n/static/c2ac413cc12b7507f7bd11cef342d3b3/3891b/Logo_akeneo.png 400w,\\n/static/c2ac413cc12b7507f7bd11cef342d3b3/bc8e0/Logo_akeneo.png 800w,\\n/static/c2ac413cc12b7507f7bd11cef342d3b3/6050d/Logo_akeneo.png 1200w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAABG0lEQVQoz52Sv0oDQRCHd6OpAoqCkGLPxvxpNI2FAavLG0jAQkGLQMgtAR/AdD6Fr2CRTp/AB8s3u3O7lwQEc/Axs7tzv9/c7Zhi4o08xaQCbwNlpXveFGU8/9fjyiC2tYeBdcEkGlFj1dAoVmrCWWqKKC9lEd+HkTugq9QQLi3dWMI3nayJH3AKXc7PxQSu4ZJuOsQL9q+gIB/yW44aHabFJ90+EW/gC844W2GwIH+DFbzCFB6ofYc7ap5Zt5qtWo09+MH1F8cxxSesxeCRl0R0DjMM7lV44YJ49UI+CBql3xMdwK3m7Ybpscb4NVyQXqZcTLuuDZ+cxya3XedOb3R3Iv68lDgaSdRmMR0ZBOqxElweGyPTEKmS2QbeEWm79ipLcwAAAABJRU5ErkJggg==","aspectRatio":2.199830651989839,"src":"/static/43ac91dd1e52a552f5d1247bd60d922e/bc8e0/Logo-Mirakl.png","srcSet":"/static/43ac91dd1e52a552f5d1247bd60d922e/8ac63/Logo-Mirakl.png 200w,\\n/static/43ac91dd1e52a552f5d1247bd60d922e/3891b/Logo-Mirakl.png 400w,\\n/static/43ac91dd1e52a552f5d1247bd60d922e/bc8e0/Logo-Mirakl.png 800w,\\n/static/43ac91dd1e52a552f5d1247bd60d922e/6050d/Logo-Mirakl.png 1200w,\\n/static/43ac91dd1e52a552f5d1247bd60d922e/00405/Logo-Mirakl.png 1600w,\\n/static/43ac91dd1e52a552f5d1247bd60d922e/314bf/Logo-Mirakl.png 2598w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAA4sAAAOLAH5m+4QAAABRElEQVQY02NgAIKfGyuzf26q3gOky/9/fczKgAWICwgxATGjmKAwo7igMJM4mBZiFBcQZoTICzOA5Bi+L0pc9WtnW+2vne1yQFz8bWn6iv+LpXk4uIRsTBQl2YGaDIBYhgEPEBMQEodzPlXJL/k6yS39+4LY6q9TfQo+Vsp3/e/XMGRiF6yRERb2AbqqEqghRExQyBdIu4oJCAcDXRMJdGEoEPsAxcKAuAwo5g9U6w00UG4x0NBpn6sV2oH0vO81cl1nM2SdGRgE3aWEhGuACmOBCiuAuB7o0glAzUVAgzqAuBrITwValAbEpUB1RUC5JAagQQlAPO9zlXzrp2qF5d9rFcKPpsqqMTDwCQJdqAo0SAio0RZIg7wO0lwH1OgC5OsD+dJALAXEOkCXWwPFTcHeBhoYAMSbgTiOQFhxAF0ihk8NAGXlYEMh9nYHAAAAAElFTkSuQmCC","aspectRatio":3.4236804564907275,"src":"/static/385458e24be9eab74ea90c89f1910acf/bc8e0/magento_logo.png","srcSet":"/static/385458e24be9eab74ea90c89f1910acf/8ac63/magento_logo.png 200w,\\n/static/385458e24be9eab74ea90c89f1910acf/3891b/magento_logo.png 400w,\\n/static/385458e24be9eab74ea90c89f1910acf/bc8e0/magento_logo.png 800w,\\n/static/385458e24be9eab74ea90c89f1910acf/6050d/magento_logo.png 1200w,\\n/static/385458e24be9eab74ea90c89f1910acf/00405/magento_logo.png 1600w,\\n/static/385458e24be9eab74ea90c89f1910acf/1f96e/magento_logo.png 2400w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAACxKAAAsSgF3enRNAAABIElEQVQY02NgQAJcypYsIPpXgyATTOwHkP2zQZARwhZi+NkgxAZi/6wXKgSynwBxM0wtkM3IoG9oLKFnaJygbWAyy9rM0Pz/dgZOkOSXOiFGoAJhhMFCosiWA+UqoQbWQflSYAlLU0NfcxOjb57W+l9fV4ns+dMouP9bvVA60FXTgIpOAHEKEFcBDTwJxC0/6gUTgfx1QLwPiG8A8SQgngDE63/UC9UylPmqq36qFd4BxL5/GwU3fK8XigEa9hcouRBkK9BrH4D0I6DXeYH0aSD+BsSqQINBXr4FxBeA+DrQsgIgvsCwMFZB7F+T4EGgy1yAhi0BGhYDNGwLUNEKID4MxE1AQ6cBFR8EGjoXyK8GYpD8ASC+BsQgsfVQV/cBANFon4I8lHcDAAAAAElFTkSuQmCC","aspectRatio":3.901743264659271,"src":"/static/0efd908fd3b6ba362da05a4a6367db10/bc8e0/Moodle-Logo.png","srcSet":"/static/0efd908fd3b6ba362da05a4a6367db10/8ac63/Moodle-Logo.png 200w,\\n/static/0efd908fd3b6ba362da05a4a6367db10/3891b/Moodle-Logo.png 400w,\\n/static/0efd908fd3b6ba362da05a4a6367db10/bc8e0/Moodle-Logo.png 800w,\\n/static/0efd908fd3b6ba362da05a4a6367db10/6050d/Moodle-Logo.png 1200w,\\n/static/0efd908fd3b6ba362da05a4a6367db10/00405/Moodle-Logo.png 1600w,\\n/static/0efd908fd3b6ba362da05a4a6367db10/10926/Moodle-Logo.png 4924w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAABbElEQVQY022RP0hCURTGz5OISHQISokgMAUlMImswSGD/iwSEu/e53sO0R7VYpg+TRQhCRqlAimCCKyhIffWxqamiLaKfM8IBId4fTesqQs/vnse53585zwyc/Rk6PQFPaXuQb36IWrXa2+CJyKMq9My1yIyU1NglnEtKjNtWPQypkmo6RfxuGQWyAN9aKZs1zBON3Wp0d6lenh5PcS5WoNhBc06TK/AOe5HUAf9d4y05BH6suKovq31dcwinZg6Wa0cXYrvCk8kYTiFJG7G1LDMVR/uPpgOADeYBK5u3UNI9Gxk6cJI2i2YLgqT96xUaufpJhjbCiLhGftJqe1Bq9ADaB16DA5BAxRBAVSE4YaRoYqxbbs381QzdiQnxr/7zNM+DTX7kwqPwSCO5jngBUtIGscux4EfaaNip+iZBwt/o7fKNAqjx06RLOitVSb7RGzTqSmKFz8ggJ2F8DAAfN0xZ8AITDxQPxgDg98pRaQYYyfW2gAAAABJRU5ErkJggg==","aspectRatio":3.4246575342465753,"src":"/static/60b36bfd7da91b0360614b685c126954/53f65/Order-Dynamics-Logo.png","srcSet":"/static/60b36bfd7da91b0360614b685c126954/8ac63/Order-Dynamics-Logo.png 200w,\\n/static/60b36bfd7da91b0360614b685c126954/3891b/Order-Dynamics-Logo.png 400w,\\n/static/60b36bfd7da91b0360614b685c126954/53f65/Order-Dynamics-Logo.png 500w","sizes":"(max-width: 500px) 100vw, 500px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAAB0UlEQVQ4y2NgwAKU5RXAtAYQy4fEM8HElRQUGYFyjMhqiAZaIOL/fzBbhYtdSElRWQbdQqINBSmU94sEu0TR1CpbSU3jg7Kc/C9lecX5ytLSrCS7EKgY7E11BgY9+dSS/wqhif+VBQX+qikp/wcamgf2vrw8MykuZAZ7lYM1Vj4s6Y1cYn6korHlJFUt3f/KMjIzwAbK4TBQRUERTKsrq4DY4ECHuRCoWVdJS7dcSVl1nmzNhP+KnkH/VVgZ/cFBYevCLHHgIaP4lstg/RL77iEM1VRVwxc5LJIrjvRIt885q6SiFgsS00aSl3/7n0GodxGYLb77DrILlRmBbBmg66SAmF9eRpYRaACrCi83q0JQLKuifyQ4GMQvfQfTEgce8EscfKgMZh99xiAOcyHMQGjYFQDxHCCuBuJyIK5SlpVrBBrcKbn6eAnQi/USe+82SOx/0Ak0EMTvlth7zwTqZSa4C2UkJGEG6gOxHRCbArE5ENsqS0lpKhqYGEvN3a4mfuSpEVCjI9BAR6CBVkAD1YAGSoMN3H8f4mUYkJOSZiAXoEQI2IXicBeCYxiJZgImZEYlHQNGqYW7GYEuZAR5DehCJqALmUCxDHQhA1YXUgsAAEw3iCdnWSC0AAAAAElFTkSuQmCC","aspectRatio":1.5017064846416381,"src":"/static/72176282818230a6e3279bcca938ec7a/f7da6/partner_bloomreach_logo.png","srcSet":"/static/72176282818230a6e3279bcca938ec7a/8ac63/partner_bloomreach_logo.png 200w,\\n/static/72176282818230a6e3279bcca938ec7a/3891b/partner_bloomreach_logo.png 400w,\\n/static/72176282818230a6e3279bcca938ec7a/f7da6/partner_bloomreach_logo.png 440w","sizes":"(max-width: 440px) 100vw, 440px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAIAAAABPYjBAAAACXBIWXMAAAsSAAALEgHS3X78AAAA/0lEQVQI1wH0AAv/AKa20nyVvSOJoQ2uptr79J2mymuAsmyBs7/I3qq20tTZ6LS+2GR5rnKFtaez0cTM4Z+szN3i7aOvzq241ACOnsSnr9CJmsECkpvJ+/CepMpedqp5i7hNZaJleq9ZcKiBkr19j7qWpchjea10iLeaqMpKY6CBkr1WbaYAusTbk6HGlqfJVKW2////nKfKpLHP////fY+7gJG9m6nLrLfUp7PRsLvWgpO9hJW+gpO9eo25r7rVhZa/APv8/cbN4cHK3uTq8f////j5+/z8/v////b3+uDk7vj5+/n6/Pj6/Pj5/Pz8/fDy9+Dk7/z9/vj5+/f4+8dsrtZk+8FvAAAAAElFTkSuQmCC","aspectRatio":4.651162790697675,"src":"/static/c8c17eb69aad8808f4867a328301d86d/bc8e0/perfion_logo.png","srcSet":"/static/c8c17eb69aad8808f4867a328301d86d/8ac63/perfion_logo.png 200w,\\n/static/c8c17eb69aad8808f4867a328301d86d/3891b/perfion_logo.png 400w,\\n/static/c8c17eb69aad8808f4867a328301d86d/bc8e0/perfion_logo.png 800w,\\n/static/c8c17eb69aad8808f4867a328301d86d/5d2c5/perfion_logo.png 1000w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAIAAABM9SnKAAAACXBIWXMAAAsSAAALEgHS3X78AAABeUlEQVQY0wFuAZH+AC+06Sax6J7c9MTq+TO26Sqz6Ee969Lu+v///4vW8g2n5ACg407A7OL0/Pz+/1zE7Sex6J3b9Pz9/////wBgxe12zfADouR7z/EEo+OT2PMerOZKveyV2fQAmeFmx+6Q2PQIpORRwOza8vt3zvHm9vzS7vru+P3///8AdcvwldjzAJ7ibsrvBKDildjzIa3nSr3rMLTpV8Pt////////1/H7iNTyteT3JrHoIK/nl9r0+/7+//79ADa36iKw527L78bq+V/F7mDG7n/R8ev4/aPd9aTe9f7//////63i9wCd4sLo+Mfq+VTB7ACb4Y3V8////wC65vj////////M7fpcxe235fcosuix4/ac2/QAmOBoye+S2fQJpOQ7t+rB6fiD0vGw4vYAn+OCz+z/6cYAj9fz////////t+X3Favm1/H7Y8fuKLLo6ff9gdLxA6HjAJziPLnq6ff8wun4EKjlAJ7hSsDv7/Hs/LJdoJcPUw4uLwMAAAAASUVORK5CYII=","aspectRatio":3.5546218487394956,"src":"/static/5268f4782f2508f9a0e5d3db3d107228/10b9d/pros_logo.png","srcSet":"/static/5268f4782f2508f9a0e5d3db3d107228/8ac63/pros_logo.png 200w,\\n/static/5268f4782f2508f9a0e5d3db3d107228/3891b/pros_logo.png 400w,\\n/static/5268f4782f2508f9a0e5d3db3d107228/10b9d/pros_logo.png 423w","sizes":"(max-width: 423px) 100vw, 423px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAA7DAAAOwwHHb6hkAAABPklEQVQoz2NgYGDQFGVmWSzFwnKGjYFxCZCvxQABTByMjAwkALjid5XC4v93ySr9bxOV/A/kf0AyFBdgwSkzWUzqfya/0PdZ0gp/76rqfPfj4fvPzMCwECTHzsjIA6SEgFgAiHmgWkKBuACIZaEGswMxBxDLAzErQ6Sw2P/Fiqp/J7Lz/DslIv3niJzKfyUW1pNgPzMwlAOpNiDug2IQvx+IW4DYBYjNgVgHiAOAOASIuRkWrV3z/8S+/d/nZWb/XZqY/F2Nle0/AwvzMqhryoDYB4hBYZsLxJ1QsWYg5gViOyD2BmJ3ILYBu/D///8f/0PBiSuX/3dPnPgxNydHD2QaGxubMpDihLpCG4ilgNgLiBWhXuUHYjUglgRiGXDQfP78WevP79/L///7d/Hn16/LgeaCNDKkpaUxM5ABAEOmXEmH/TLLAAAAAElFTkSuQmCC","aspectRatio":2.965599051008304,"src":"/static/e1e56d538e969f0d48d542e0fb511494/bc8e0/Red_Hat_logo_RedHat.png","srcSet":"/static/e1e56d538e969f0d48d542e0fb511494/8ac63/Red_Hat_logo_RedHat.png 200w,\\n/static/e1e56d538e969f0d48d542e0fb511494/3891b/Red_Hat_logo_RedHat.png 400w,\\n/static/e1e56d538e969f0d48d542e0fb511494/bc8e0/Red_Hat_logo_RedHat.png 800w,\\n/static/e1e56d538e969f0d48d542e0fb511494/6050d/Red_Hat_logo_RedHat.png 1200w,\\n/static/e1e56d538e969f0d48d542e0fb511494/00405/Red_Hat_logo_RedHat.png 1600w,\\n/static/e1e56d538e969f0d48d542e0fb511494/9ab24/Red_Hat_logo_RedHat.png 5000w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsSAAALEgHS3X78AAAA8ElEQVQY02NgWPkwmmHOKykGIHANi+X19AvVZkACXv6hjBA6hNXLL5TR0w9I+4eyw+X9oPJ+oSpAbM2gs6yo8/hsg87uKBtne5+IZG//kBSgBnegwbZAOg2IM4EYJOYP1FAANNASSLsA+Tme/qEJYHm/EF+gWDOQHcmQFzcr8+1a1RnlmXaFRo7xxj4BIaFA1zQBJUuAdCsQtwPZRUAsDsR1QNwLNKgMSO8A4nSgQXFAegIQ5wGxLdjZ7+Rc01Yae2ow1KezBvmE8AIlhIGYF4q1gFgIiJmALlEF0opArAQ0yAhICwIxDxBLAS02BpkFALplWKb6K/80AAAAAElFTkSuQmCC","aspectRatio":5.0761421319796955,"src":"/static/b47381693cd4476094f1402ad4afd207/bc8e0/Riversand-logo.png","srcSet":"/static/b47381693cd4476094f1402ad4afd207/8ac63/Riversand-logo.png 200w,\\n/static/b47381693cd4476094f1402ad4afd207/3891b/Riversand-logo.png 400w,\\n/static/b47381693cd4476094f1402ad4afd207/bc8e0/Riversand-logo.png 800w,\\n/static/b47381693cd4476094f1402ad4afd207/6050d/Riversand-logo.png 1200w,\\n/static/b47381693cd4476094f1402ad4afd207/00405/Riversand-logo.png 1600w,\\n/static/b47381693cd4476094f1402ad4afd207/3ba25/Riversand-logo.png 2000w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADRElEQVQ4y31VS0hUURg+96pFGC6knRSB1MYIIisowsoWLlzULlr1okUtaimBLXoQtIgWgUI6zp1xzHeF5qNCSHoRZUpEYTVzZ3Qe6uCoZemM/qfvP/fOw0Y78HH++//nfOc//+NcIdzjQhimUMPwW7Jhakr2hEVqNAaBkCV7MBsBsfpIk2nC6dX/senCFeA5BzbAl4t1umiMpB1Yg1RLya5APr4LU9/3P2evd/p0ReYKaMqRpFNOn+2ZRVQAwz0gBMwB74BK+8BjwF3gFtbvzjqg4YembpMangiuYr4QD39J4R6TIJeiNSqhiwMDiJkUHTNStMcsm2GeUXtcgRKgaEWIbOGsaMcGp28B8jJAQAKQonmS9ayLa4a5KBrHmXARCNhr5oFueL4tM4b1om1a6tYmngkkEjJBXuJv1osGpVvWXVjjCUrd5bfQEeNDIiDdmiS8IdqgrPPGsYkwy40ePwkH5HovQ5Ftag6wTtq6ZXvm9QsqHIbpsbNj1qxvm5KH+8JLxR3jVN4foeMDE/Lo0wjt7Q5JgMr6wnRzJEb7e0K0qysoD/aGad+TEO2B7RBsGjwFT0zgCpdES1QWNPmXrg3H6OLbqHSMzlH10LQ0vv+U519H6erHGJ17FaULb6KYp6j26xydejlFJwcnqer9NN3+NCPXuVWYEnxdP7pA5rnM5fL+sKx4FqHK5xNU8ihIR/rDtONxkMrgzZUP07SlfUzpSrtCsvBBgNhLQB7oCSVEU5ivPMSEyCyy6LRjU6cgVfxYrvdx/Ki4c5w9yNRxDOMKDiQMSQXXCSYctGvuD7KZ4IxyFu0MUyrDfICVYdYluDb1zjmpIxm8HraqZIZLVWd0zFrFzMG1alHa9ai+NTcK2qpBqdYa5ghwHahGuexUXLXDyTr0b4fhDtCkyK1uSNiEcdU9hjkLTFghMnuxpyirv11jme2SKvLLqs2aIlYbtkxJ1Xrc142hDThsc8baPCBXcbjHMknwJPHTVPdFsxeeVhmzHopBoGLFoY5v6RfKmXxpMLfNQ0gy8+PJLjtG1afeK/mg/PSVvFr2c+UV6r3MGu2/048lkzp9OSlbzdDKsKz5qK42kqcxaep3gLl1dqX9P+MvO3anVJrByTUAAAAASUVORK5CYII=","aspectRatio":1,"src":"/static/60a1125d5e0bf980225d7b8d13e795a4/3891b/salesforce_logo.png","srcSet":"/static/60a1125d5e0bf980225d7b8d13e795a4/8ac63/salesforce_logo.png 200w,\\n/static/60a1125d5e0bf980225d7b8d13e795a4/3891b/salesforce_logo.png 400w","sizes":"(max-width: 400px) 100vw, 400px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABNklEQVQoz32RPUsDQRCG7yNoEBtF0qSJ2KmFlVaCSBBBCciuCUQtLEQUG9FG8AcI2qRMcSckWAmioF1QsLLYayJYWPgjLCVwPnPuxYDEg4eZHd55d/bGcewXRnoCFmEqrQVGeZwzPRo3qVMj94g+iEbwoSsswnZo9AxxHU7JR3uMRmDoJ1djzn8fwnGY56Zz4juY64+NmPgQGpXHeC+I1CFGl4HRVc5HaHdgDc0+NYlLsIt+UAzn4Am+oHP1VokFGi44zyJqY9giP4NneIEatUfiPRfcor0jb6BdEMMct3ear+W40S7HtukYJuWZcEDTFnEaVuAE6lCFG8xKTLmcTBjpbPrsip3wEzYRFDHJ9PlFA0wybPPcHwHNrt1oAcGqncRLt2q3J9t0ucT/NVZJn9S6Wzba+Qbw6t7CI1tWbQAAAABJRU5ErkJggg==","aspectRatio":2.857142857142857,"src":"/static/9917ecd396566fbd9e5ba6ce22bb4a56/bc8e0/shippo_logo.png","srcSet":"/static/9917ecd396566fbd9e5ba6ce22bb4a56/8ac63/shippo_logo.png 200w,\\n/static/9917ecd396566fbd9e5ba6ce22bb4a56/3891b/shippo_logo.png 400w,\\n/static/9917ecd396566fbd9e5ba6ce22bb4a56/bc8e0/shippo_logo.png 800w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAABKklEQVQY02OYtNdFa+Ieh+ldW12CGRhEGP4zMDCY+ykwQAEzEDMBMSMDJmCCYhDgg4tO2uN6YMGxkOetm13/R3faToKJs7IzswKpOiDWhQqxoRkoAMSRQNwIxBlwB9z5sv7/kTuT/9Svc/wf3WV39v9/kBsZOqCK1wPxUiAOAeI+IC4D4iYgng3EJVD2ASBuBeJ4IE5juP1q//9d15p+li+z/B/TZf9s0pkQDqiGmUA8BYj7gfgEENcA8XYgXgXEPUB8Foh7gbgBiJ2A+BYQWzK8/Hn2/9nH8/4XLzL9H9vj+N+30MAaKJHHyARWCHJZOJQGGVwMxPuBOBmII4A4HYjtoAauA3t69emCxbMOe14rW+zwLarD9kRir40OA25gC8QBWMQrgRgckwDBiVwjtiJEeAAAAABJRU5ErkJggg==","aspectRatio":3.465003465003465,"src":"/static/9d44931c77b4e0406d2a361296f321b3/bc8e0/Shopify_logo.png","srcSet":"/static/9d44931c77b4e0406d2a361296f321b3/8ac63/Shopify_logo.png 200w,\\n/static/9d44931c77b4e0406d2a361296f321b3/3891b/Shopify_logo.png 400w,\\n/static/9d44931c77b4e0406d2a361296f321b3/bc8e0/Shopify_logo.png 800w,\\n/static/9d44931c77b4e0406d2a361296f321b3/6050d/Shopify_logo.png 1200w,\\n/static/9d44931c77b4e0406d2a361296f321b3/00405/Shopify_logo.png 1600w,\\n/static/9d44931c77b4e0406d2a361296f321b3/9ab24/Shopify_logo.png 5000w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAABX0lEQVQoz4WSvUoDQRSF98cYC1mwsgla2Ig+gYmIfxCi4g9YWeyUOyFgISwKaimWIoKNIAQbwbyCCHcafQat8iLxm91ZWS3WgcO9c+bcc+/OrOf9WXFiihiA+1ibD6XNJfkFeFeWSyTINeJVLqXFU86QOAGGvfRrhOkZedpLP0eYDkG93LzaFFGsxXcFTfDGhNvwbeKrSmTZ6YLYDqClykyKGIDJEs+0MoXJ+L8T2bGtUZxN5u5PZ90HTHQL/wCuuK8+uEY7AF1XG6LJ6uy0Rf3PXVhjMJabyjk5D2CeKXpEfAN3h+kL+RNcWDyMKj8OhzV3UCs9jk9BxCfOgQijabgG+Qy6iCYN6uq/vlRLCOfb6bp0OEV8Qp5gNE9cQ3CAYIf9KrFlc3DIfomzBTQrNDkiWt0uPDWmzTRmExxjuI+xIi4i2oJbt2KV5bKHuAnXARvsZ9ljaODF6lr5nyCdb9gp33peadfdAAAAAElFTkSuQmCC","aspectRatio":2.142857142857143,"src":"/static/7917b5c7f4245889c2e8d23b40b5dc9a/bc8e0/Tata_Consultancy_Services_Logo.png","srcSet":"/static/7917b5c7f4245889c2e8d23b40b5dc9a/8ac63/Tata_Consultancy_Services_Logo.png 200w,\\n/static/7917b5c7f4245889c2e8d23b40b5dc9a/3891b/Tata_Consultancy_Services_Logo.png 400w,\\n/static/7917b5c7f4245889c2e8d23b40b5dc9a/bc8e0/Tata_Consultancy_Services_Logo.png 800w,\\n/static/7917b5c7f4245889c2e8d23b40b5dc9a/6050d/Tata_Consultancy_Services_Logo.png 1200w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAsUlEQVQI1yWOvQ5BQRCFb6WRCPECKsVsKYTuKrzHbKXWqsiNQksh8VOQEIVQiIRQiBCFhGfZfQLfUnx75syenZ3IW7OAplOTg9ipZJyVGr0KxF4li5acNVXqPJk6vkguDX18B1/gvoGmIo4LF10ae+obTAld8U+v5o3v4cfoB1bwgCOsydzRDWzhHBYLAxMY8WiG7qD966kk7l+HYSc44Jdoi+yQJSbUL29lQH+Oho/KX4t4dyKKSjMfAAAAAElFTkSuQmCC","aspectRatio":6.65587044534413,"src":"/static/9bd163ed5d0ff7fccae9f36749db3821/bc8e0/Temando-Logo.png","srcSet":"/static/9bd163ed5d0ff7fccae9f36749db3821/8ac63/Temando-Logo.png 200w,\\n/static/9bd163ed5d0ff7fccae9f36749db3821/3891b/Temando-Logo.png 400w,\\n/static/9bd163ed5d0ff7fccae9f36749db3821/bc8e0/Temando-Logo.png 800w,\\n/static/9bd163ed5d0ff7fccae9f36749db3821/6050d/Temando-Logo.png 1200w,\\n/static/9bd163ed5d0ff7fccae9f36749db3821/00405/Temando-Logo.png 1600w,\\n/static/9bd163ed5d0ff7fccae9f36749db3821/384ab/Temando-Logo.png 1644w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAAA9klEQVQY02MoOG8kU3DecDOQXgaku/PPGmkyUALyzxtNBRqWAsTJ+eeM5hVfM8zVMzGS0tE3DtY1NFLXNTDWBWJhHQPjFF19YzsgW1LXwEgByJYDYgkgH6TGCcgWA9LyDECD5gHxVKBhz4GuewM08Iylj5GRtq7xcqCBdUBFs3T1jY7q6BstAhq6F8ifDcRhQDwBiOuBOB2IS4C4DChfxAA0aGfBOaPJQJeGAtk7Ci4YnrAKMOLQ0QO60MhID6jIT8fAKBCowRfoMl8g20UHYkgM0FVA1xuZA9n6QGwBxFZALxvqA114FkhvA4bhemLCEOhaTlxyAIdbWlUqoQRmAAAAAElFTkSuQmCC","aspectRatio":3.9682539682539684,"src":"/static/804bdd0e759074e905a57956dc8abc5f/bc8e0/tradegecko_logo.png","srcSet":"/static/804bdd0e759074e905a57956dc8abc5f/8ac63/tradegecko_logo.png 200w,\\n/static/804bdd0e759074e905a57956dc8abc5f/3891b/tradegecko_logo.png 400w,\\n/static/804bdd0e759074e905a57956dc8abc5f/bc8e0/tradegecko_logo.png 800w,\\n/static/804bdd0e759074e905a57956dc8abc5f/5d2c5/tradegecko_logo.png 1000w","sizes":"(max-width: 800px) 100vw, 800px"}}}}],"CUSTOMERS_S":[{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQCAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAADAv/aAAwDAQACEAMQAAABdS2Im9oFj//EABsQAAICAwEAAAAAAAAAAAAAAAEDAhEAEiET/9oACAEBAAEFAnX6SZMFZ2XWVyI5/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAgBAwEBPwFXgz//xAAWEQADAAAAAAAAAAAAAAAAAAAQEiH/2gAIAQIBAT8BWj//xAAbEAACAgMBAAAAAAAAAAAAAAABAgAREiBRgf/aAAgBAQAGPwItZqpkG8inun//xAAcEAEAAgMAAwAAAAAAAAAAAAABABEhMVFBkcH/2gAIAQEAAT8hAYQFFtRm8OnErHwuUzvfZTD7A69z/9oADAMBAAIAAwAAABAwP//EABYRAQEBAAAAAAAAAAAAAAAAAAERAP/aAAgBAwEBPxAhEuiu/8QAFhEBAQEAAAAAAAAAAAAAAAAAAREA/9oACAECAQE/EFtXBCb/xAAcEAEAAgMAAwAAAAAAAAAAAAABABEhQVFhkeH/2gAIAQEAAT8QNxAeZ1D1FMWtEbv5BcKDlLLKnpchsKs2jl5dT//Z","aspectRatio":1.8411967779056386,"src":"/static/510699edf4fd752affc5baf83f26a3d3/2f1b1/aditya-birla-group-logo.jpg","srcSet":"/static/510699edf4fd752affc5baf83f26a3d3/fd013/aditya-birla-group-logo.jpg 200w,\\n/static/510699edf4fd752affc5baf83f26a3d3/25252/aditya-birla-group-logo.jpg 400w,\\n/static/510699edf4fd752affc5baf83f26a3d3/2f1b1/aditya-birla-group-logo.jpg 800w,\\n/static/510699edf4fd752affc5baf83f26a3d3/0ff54/aditya-birla-group-logo.jpg 1200w,\\n/static/510699edf4fd752affc5baf83f26a3d3/06655/aditya-birla-group-logo.jpg 1600w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABMElEQVQoz42Rv0uCURSGjz8KHOK7bU4O9QdEVDhIkyi6tKSU0Y8hmxoaFBRcXBzECMTJCFqCoKgxmqI5+h9Ch8QtSZoCew4c6xu78HDee97znXPvd0VYffHSPfEe4AtG7I8sH4QQuaDYQof64gKmqXHqh+WvwHUG4iafMj8ZEt+B3DdFC+JbND4kl/Tt1/w+XhSWZUSjD6CgR6M94ipT3zDj6DmoQoJ9UW+ClyKW4IX6dWKO3Cb+FnRFmyHa02NjzqBvYRa9SLzho0doQp39nQ0j74roV3iCU2hogwymTtixox/Dtl3rnFNcUXONvoAzvEuIoO9BGz7DCpTU04YxxBg27HEKvv+SpGGXmgP0LnEfTmxYDbLky+Qq6CVoqZG3qfwfL24Ppc0C8s9F/e8r/wBZnpGj65uSrQAAAABJRU5ErkJggg==","aspectRatio":3.007518796992481,"src":"/static/95b86977aaec6c5b15af581c30901b92/bc8e0/Bharti_Airtel_Limited_logo.png","srcSet":"/static/95b86977aaec6c5b15af581c30901b92/8ac63/Bharti_Airtel_Limited_logo.png 200w,\\n/static/95b86977aaec6c5b15af581c30901b92/3891b/Bharti_Airtel_Limited_logo.png 400w,\\n/static/95b86977aaec6c5b15af581c30901b92/bc8e0/Bharti_Airtel_Limited_logo.png 800w,\\n/static/95b86977aaec6c5b15af581c30901b92/6050d/Bharti_Airtel_Limited_logo.png 1200w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAACiaAAAomgEXOiGyAAABHUlEQVQY052QMUtCURiGDxFC3TtpyDkQnc9+QC4uLYKEgeYaOOigjQ0turiF/0BqiMBq7gfUIPeCf0BwssU0cBLdnPM5peXsgZfv/d73u++531GKE2rxQiPJ0Nio6zta1NYn1LZI0JjAWmBsGVR+dGPPQAbsgDw4wStw+R48xvwl9RAcoF+gJ8nKqq6Rb4RnFxJoW4CfM3QE7sGMoRQYor8QMgm0XKM/gCb9gHoFpuCJua91YHvjj48J/kQrgTkBVfou/JaAPv0dHy9+L5YZ3g18EBhpwEdutSIhbuUG/BSeo3641anvrPKI9gbHlx6Bzn8FLUJqeGl4H68O76nVe3nujRDj657ABGG7DHlgHy2C7/9tYkT+ufXpI252CWyCg0LmU1UNAAAAAElFTkSuQmCC","aspectRatio":3.6363636363636362,"src":"/static/039d6631d7e8724f3ef30784fca6cfea/bc8e0/canon-inc-logo.png","srcSet":"/static/039d6631d7e8724f3ef30784fca6cfea/8ac63/canon-inc-logo.png 200w,\\n/static/039d6631d7e8724f3ef30784fca6cfea/3891b/canon-inc-logo.png 400w,\\n/static/039d6631d7e8724f3ef30784fca6cfea/bc8e0/canon-inc-logo.png 800w,\\n/static/039d6631d7e8724f3ef30784fca6cfea/6050d/canon-inc-logo.png 1200w,\\n/static/039d6631d7e8724f3ef30784fca6cfea/00405/canon-inc-logo.png 1600w,\\n/static/039d6631d7e8724f3ef30784fca6cfea/1f96e/canon-inc-logo.png 2400w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABrklEQVQoz32SzStEURjGz8wVG/+FZkOJaZSPQcqClZrEwgY7H5Ean/dsCJnMQgpNKSnkIxZSysLcs7CVDUnIP+BvGL9z7p0zF3Hqad7nOe/7nHfu+wqhj1RCuJ4J+Y0GWj3xDjgWrjoCJxGZ3xQzzzUiVigzOWMFYetNrQoRY6qc4KIXnArpNYjgFO5ERKTfm5Iruc+RrLxHKTYQQJW8KIzazlzVwsWZNddJ0it726uLaJrKrA83Lu++i9nHuK2VXkTY46oQMS/2YFITxKW7uYeojadfko68TQUPOiGvRf3CGqLuahuMw/Xf3casGe7Cp0A32ELv4ztmHZlfIR5Ci4EmcsfhC8QfuosYZAO8ggw8g1EcPBEvotX6gzGd811VjvgE/Qr0YzIBHtFb0U+14SoXbQhMVKXhncSVYJR4Hm0y0PTE2ykeQMNU0bVaAmnQAN8yw/x1zIS9KvHfkV4CdPyd4KpoaKpd4LBUjC69cpPjm1WgXcLrba0/aeFPW4Z2yC61Nwg/QI/9eDhBzgXoCrbAsQtdxLdN982LpklwTdEN2CcnD87Rqu3+FWtC5wuEiO/HWeTfAAAAAABJRU5ErkJggg==","aspectRatio":1.899441340782123,"src":"/static/e2e584806e63433740a7700279add54e/7247e/Cencosud_logo.png","srcSet":"/static/e2e584806e63433740a7700279add54e/8ac63/Cencosud_logo.png 200w,\\n/static/e2e584806e63433740a7700279add54e/7247e/Cencosud_logo.png 340w","sizes":"(max-width: 340px) 100vw, 340px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA4sAAAOLAH5m+4QAAADEElEQVQ4y31VXUgUURRe9UXfpOjHv9WZXXVm1xR1Q+ytgn4gArXAggjs14rYoB56rPChKMuFeinqMSqo7IciiF517+yWqK2tlUa7IWX2tqA4Zzrn3rmzM4oOnLl/53z33HvO+a7PZ3+GqvkMRRd9RS9gil7kW+FD3SLSWWrnVvCxPFiRa74Y5yOGqncwIRFcL5brDIHz9po9iR1UtPsCDNtSVLqMMoVrMKKGLBIEBlybQtArhqKVSm9Fq3Ng3hG76XK3NjSaTgfDEsTCTU0S6tMcreF4GqXNfSp5SgIpFAtaKwLnxgIEpM2jEAhgC8I73ppGIDQvdPQc9lttDwvlncmjl+BkajwQJsUF8sYFQq0zjleo5OHCeG2DxWrqU0YwXCKvj5Btd7Voum6TABO7gwRdKmM79kCivtEa3lizkNaaCDxqe5nPDAQxRspVK14VXBzeUI1eBIQ3VUGLofC79NeSsTVz7wEkwy0wdf7iYjZ6wRpaW2F40uZjc5s/XqbkJrq6rdnnL81sfwwmj/VCuucEJBta4FNkC+DRINm4mTyDyeOnIbX/IGSu3zJZmWKx6rpcQmvyO4DD6/3tyVAzIBiMbt0Jqc5u+BW7A5kbAzBz9z7MvX4L2dhtmH06CLTZn0dP+NrnvfvMr71nrQTaokPtHsCEBNy2C1JdByDTPwC/Hz7mgP/ef+Dy7cw5Pkfe/R18BZNHTsJ3PLIArGlffuROPPKzF2b2ZgzSh4/Cj0t9kLnWz8F/9l2F0e27YaL7EMy9eYdXcgqG1pRBfF0VRTqHkfZ7y08GpTKAQfFDvDJIfboffn/MXyeCVK5QcHiLNotjtTwzDFcdr5o2MnXyEgiJedShXPwS5HkbdSpGFjVPbGV5Yq8gXGdcbJxCuxJ3kTilx6j0FI2XHrNLj8gBFVE0CWZSWfLSQ10qV9u20KEuL2ssJwdR00vJQXfIgakucqCfZBzJGsYK9IVeA45t+tJLPTGQ9GUTpYtgNS/BClLtYCSqFsFxsZu5JRc6BOt9AjQJWsDUVZ4AxfsEMNcT8B90sFMxJ/HfJAAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/cbf45e615947f0d44c1fd94bf34b7cb6/bc8e0/claro-logo-png.png","srcSet":"/static/cbf45e615947f0d44c1fd94bf34b7cb6/8ac63/claro-logo-png.png 200w,\\n/static/cbf45e615947f0d44c1fd94bf34b7cb6/3891b/claro-logo-png.png 400w,\\n/static/cbf45e615947f0d44c1fd94bf34b7cb6/bc8e0/claro-logo-png.png 800w,\\n/static/cbf45e615947f0d44c1fd94bf34b7cb6/6050d/claro-logo-png.png 1200w,\\n/static/cbf45e615947f0d44c1fd94bf34b7cb6/00405/claro-logo-png.png 1600w,\\n/static/cbf45e615947f0d44c1fd94bf34b7cb6/1f96e/claro-logo-png.png 2400w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABTElEQVQoz12SP0sDQRDFzyABLawEC8VdnRX8BBYWCrlOtPIKIYgWEkxjY0BQBMEyYKeNRRpRLCRdihj/FIKIchEFC1Gwuvsa/iZZ8cjBY/e9efNm7rggNZILMo/yxLq+rJYYmUyM20Dv79FzPbzbl1o3Cgog/x/spsGcN4YE/vj7cGJlicEjng8pZ9jEX2pE0DfN9+Ado4Bt8AVicAkWqbUIncd/m1o5RruhbxatxXkCfwEFfcUPNXY3lWWm7dD0hmmsM9DKGZ4mnjpbXKPH1DfRP+F19Db3Kto6mNIQtpNB35yHlyjEmW+6l+oA464IewSn1BfgFbBG4Aw9eNwrvlVtOALPmCr6nShG8AvOBlqVsw3fonZHWIn7E5sVCWiAXTwPLFLExyu7w8BvVsZ0jhD6rQbAAaihG85xavu+FnW2NbLiecigGijrH/ILFhm1vL5xTM0AAAAASUVORK5CYII=","aspectRatio":3.076923076923077,"src":"/static/a8c6e7c80d4c7470ced5d2f317e7b00c/bc8e0/Coles_logo.png","srcSet":"/static/a8c6e7c80d4c7470ced5d2f317e7b00c/8ac63/Coles_logo.png 200w,\\n/static/a8c6e7c80d4c7470ced5d2f317e7b00c/3891b/Coles_logo.png 400w,\\n/static/a8c6e7c80d4c7470ced5d2f317e7b00c/bc8e0/Coles_logo.png 800w,\\n/static/a8c6e7c80d4c7470ced5d2f317e7b00c/6050d/Coles_logo.png 1200w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAABkklEQVQY02NgAIL7XBK89znEc4G4+oGIIhMDGrjPKcHMgAU8EFLEFLzHKSFxj0P8KhDfBOLl9zjFE4D0ViDeBcReQNwCxGuAuBuI9wDxBiDOgbJBctlAfBikF+ggeYa7nBKFfzml/9/gkva9yitn+IxT8v8tTsnCO5wSx4H4FRA/BOI7N7mka+5wSPy5zSnZ8QCo5ianVOktLqnORyA2l1TQEw7J/0ADyxj+MzApvGXmO/CSReDjR2ae/nfMfBvesPAf+sDMs/43A1vNJyaeNR+ZePb/ZmCv+8zEvfs/AwPTB2beXe+Zeff/ZWAtANKHXrPw73zHwrfhHpekNAND6BoDVq/prRr2zZOYvGZWs3lOr3OwKFkq7Npfx+4xtcTOonQ1r/ukemHXvmYlh9ZpDP4Lg0F8oJq5rJ7TCmWdOqr8jbNruT2mFIPDkM1zmiuD96x5DL7ze4H0FCCeyuC/qIPBZzaI38sQsKSMwXv2RCDuYfCZ28fsNWMqkD2JwW/hZAavmTMZfOZMBqpvBaqtA5kHAPwrnda1dgJgAAAAAElFTkSuQmCC","aspectRatio":3.206684256816183,"src":"/static/107678c230fda25f844537e7f795460d/bc8e0/costco-png-logo.png","srcSet":"/static/107678c230fda25f844537e7f795460d/8ac63/costco-png-logo.png 200w,\\n/static/107678c230fda25f844537e7f795460d/3891b/costco-png-logo.png 400w,\\n/static/107678c230fda25f844537e7f795460d/bc8e0/costco-png-logo.png 800w,\\n/static/107678c230fda25f844537e7f795460d/6050d/costco-png-logo.png 1200w,\\n/static/107678c230fda25f844537e7f795460d/00405/costco-png-logo.png 1600w,\\n/static/107678c230fda25f844537e7f795460d/e4aeb/costco-png-logo.png 3646w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAA90lEQVQY00WPPUoDYRRFj51oKdZaiUtwAQZURBBBBcFG15DoAgQ7W1EbG3EBLsBSJGRGJpOAYHT8KRJQIf6A4Mz1TmbA4vEevHfOdz/UJFWMFJE9b6HmJLqbRdEEqg+h/jEKx1BjFL1so2vQ0yaKp9DNOPq9NNsmM6/chYG0f4i+z8mSFXRl4H4R3c6gZNXyCmpNo4dlS0fcffO44XkYdRbQ6x76PCX7OPHjRxZ2a6S9GnrbJ8uhXNaZQ71d9HXmeb5I+X5QyH4uiqTJmm+XLF8v2G7VzI6FCvzl0HFDx86/3iqr7aq74sHufw7KHpU9v2uYDQa79A+oqMH8henqEAAAAABJRU5ErkJggg==","aspectRatio":4.533091568449683,"src":"/static/3abd138f3c91a27766cec7d541fe8133/bc8e0/DHL_logo.png","srcSet":"/static/3abd138f3c91a27766cec7d541fe8133/8ac63/DHL_logo.png 200w,\\n/static/3abd138f3c91a27766cec7d541fe8133/3891b/DHL_logo.png 400w,\\n/static/3abd138f3c91a27766cec7d541fe8133/bc8e0/DHL_logo.png 800w,\\n/static/3abd138f3c91a27766cec7d541fe8133/6050d/DHL_logo.png 1200w,\\n/static/3abd138f3c91a27766cec7d541fe8133/00405/DHL_logo.png 1600w,\\n/static/3abd138f3c91a27766cec7d541fe8133/9ab24/DHL_logo.png 5000w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAARlAAAEZQAGA43XUAAABX0lEQVQoz42SvUsDQRDF9665zkKsbMS7REux30UM0RQKIhYSi4Cg8ZsgpAgiSgQrCVinsApqQOxEkDRieVelsgjaCPkzzt/crREUxIXHvJt5+3b2dlQY6OHI141uZiYOA7OtWESPvLJchb520bhwB+6k0TiRxKQuUUt0VRTot152Vsye2VQDRtklm9U/Fz6pNvJNn5POcD8Fdb7rGO2RG03rOgO/pFZl0zQoJPBNka6qNLIIX7VeFXG+BjVMymwqwa/gDUyK6ZV1AZyABWq3aF7AORrDYU+YjMNb1LfAqxgesXmeuAyOSXYQ3CE8tB3OATrXS+TaxAe6aqIb4nsNPLLvBqyArvzINoZNhB2wT1LMSwg3qHnwMfIXoAKfAnm4YBNNGazD7ZX1gXTYf5/IxR+T+Zji7o8f7f71EBz4+1G43gjt3/eyOV5a71ihJ6PwPTaMyGBszNfYDCbB5hLdJ7ytvTXF7yP0AAAAAElFTkSuQmCC","aspectRatio":2.608695652173913,"src":"/static/9f529eb0f639ed9e77e71f04d4245997/37d5a/DKSH_logo.png","srcSet":"/static/9f529eb0f639ed9e77e71f04d4245997/8ac63/DKSH_logo.png 200w,\\n/static/9f529eb0f639ed9e77e71f04d4245997/37d5a/DKSH_logo.png 300w","sizes":"(max-width: 300px) 100vw, 300px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAA9hAAAPYQGoP6dpAAABoElEQVQoz2NgwAHatl0G0////2dImHeUyaVnN3Pc3CNMf///BYs3b7nEQDSYvP8aguPYx4gi6TkFzj9+7zXxhoJcxqBQDdacu/SUiWXb9nygSy0hssEMX/7+IWxI2JEmMJ15eC6DfNVKJhBboWJdqFnrtheBUw/ssuva+ci6fbsvSNy8YxNTwcl5YPX+h+uwG6i2NR5M265tY2DwmMQMYnNkLdvJnb18Vfi0Az3mLVtfGdRvWQkSlyxbypx0YBpYvceBcoa1jw5hN9R8VzYKX6x4ZRBPzvKXArmr9vHlrPysUrsmBVneYW8hbi/7HaoBh5nPwWo95/2lza77yiuCT1aUA118UHtW9w3TNbXb/I9VdHsdqC4NPFxfE3a0SRek3heoD6sLQ440gOmAw3UifodqDZz2F1v7H2jSDTiXa5D2LE3N/FCii9u+SjOgvLXXwSqr0vMzlUDqjXZk4PYy0HUMpADbPfm4JUOONILpQGCsgbzhvL+EKehIA6P7/gom9wMVjLrbU5i8DlYyBhyqY/I+WMVUcn4GOIhMdmbCXQgAJgCj29rdOOsAAAAASUVORK5CYII=","aspectRatio":2,"src":"/static/e14148be422cea2c902329053c816683/37d5a/GencoMarketplace_Logo.png","srcSet":"/static/e14148be422cea2c902329053c816683/8ac63/GencoMarketplace_Logo.png 200w,\\n/static/e14148be422cea2c902329053c816683/37d5a/GencoMarketplace_Logo.png 300w","sizes":"(max-width: 300px) 100vw, 300px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAABUklEQVQoz5VRyU4CQRCdb/YLSIwH9UDIGMUQIS64RUETTAwaPRA9GPCgo8gShm0E2Zzp7hmY7q7BZhnH9UDlpfJSyXtVLyUNv5bjDGcpyaOcj8QA4+4MOYz4lLgTx53/FH9u/r3/n4ukic0gdTe4zVAlb50kHdtmapM+lVi9wSoay6vwbvBGy75XHGLaGYVrbxPHqdiKnePgLvKH8doOWtkjWzKSF3XfKgpEenML+rxM9hMkeqr7AlbiCocOXPH4JDv9wAplEjliBdU8TlqJOJJlEolRJWcsrfcvb/oXKbIdN/xhwXEw6oq9YF48O/2M/JuAieCATdFproSWQyIF3ji0zq6/iUVO0A1odwERAf7aZDVNRB0BEyAm15pMrYGBaLY4sfPOhk7PfnyhuSKr1GmxDDri7S7NFlhVExMBMDBvdVi1LnwF+etVM5bkfXImjOsDN8hrZB2F76MAAAAASUVORK5CYII=","aspectRatio":1.7797619047619047,"src":"/static/406bba6dfe822ca7071202ea9581b939/57735/hhgregg_logo.png","srcSet":"/static/406bba6dfe822ca7071202ea9581b939/8ac63/hhgregg_logo.png 200w,\\n/static/406bba6dfe822ca7071202ea9581b939/57735/hhgregg_logo.png 299w","sizes":"(max-width: 299px) 100vw, 299px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsSAAALEgHS3X78AAAAnklEQVQY02NgYGDQAOL7QMwFxB1AvIMBAo4CcTZUHsQWAeICIN4Jle8G4nggFgPieqhYDYgwA+JHQCwLxF1AfAqIWaB0ExDzAvF+qIZOIL4CZa8A4gogloLqA4E2mIH3oQaCNJyAGgiiW6AKG6A0SONFKHsXlC+LpA5MawLxM6iXJwLxYajkeSCuQjOwDoj3QNVuhKqXAOJjQCwAxO0ANjMgOzV34SYAAAAASUVORK5CYII=","aspectRatio":5.638766519823789,"src":"/static/19f907ea26ee3014cd14cda167f10cf3/bc8e0/Hobbyhall_logo.png","srcSet":"/static/19f907ea26ee3014cd14cda167f10cf3/8ac63/Hobbyhall_logo.png 200w,\\n/static/19f907ea26ee3014cd14cda167f10cf3/3891b/Hobbyhall_logo.png 400w,\\n/static/19f907ea26ee3014cd14cda167f10cf3/bc8e0/Hobbyhall_logo.png 800w,\\n/static/19f907ea26ee3014cd14cda167f10cf3/6050d/Hobbyhall_logo.png 1200w,\\n/static/19f907ea26ee3014cd14cda167f10cf3/54311/Hobbyhall_logo.png 1280w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAoElEQVQY043NPQrCUAzA8bd5Ak8gXdyKCHVQEQVBBC+gIHZwKwi1g5uo4Cj0AEUQOjgoeAGnflDEC7h29gRC/w+y18AvL4S8RH1N440QNyzhYIUTFlLvccQUHlzYmOOADZ54KVIszQwPXPHBGakewg4XBNgiR4K78GVhpBeOUUcHA4zQQlveLiys0UNVek0YGKIm/ybqn/j1G/rwDJWy2QIEMG3BixnDfAAAAABJRU5ErkJggg==","aspectRatio":4.464285714285714,"src":"/static/c134c9ccf7d950af3debbcff525d2bce/bc8e0/Honeywell_logo.png","srcSet":"/static/c134c9ccf7d950af3debbcff525d2bce/8ac63/Honeywell_logo.png 200w,\\n/static/c134c9ccf7d950af3debbcff525d2bce/3891b/Honeywell_logo.png 400w,\\n/static/c134c9ccf7d950af3debbcff525d2bce/bc8e0/Honeywell_logo.png 800w,\\n/static/c134c9ccf7d950af3debbcff525d2bce/6050d/Honeywell_logo.png 1200w,\\n/static/c134c9ccf7d950af3debbcff525d2bce/00405/Honeywell_logo.png 1600w,\\n/static/c134c9ccf7d950af3debbcff525d2bce/9ab24/Honeywell_logo.png 5000w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA4sAAAOLAH5m+4QAAABzElEQVQ4y+2Sv0tbURTH814sSFBaClGIi4pQqjEvSlv8QWMTcCqNDShIBqWDEvXdvKQaEEQ3LThEBRsVmggWsha37u1eunTxf3DrUJf4Ofe9RhxU3Bxy4Ms5995zPvfc947P17CHZ9FESeS34lpmNPHZH3lzYMhZZnHZZ6uczlNZ19vK0ZK1+P9nNlrwcu40kk0BK+WYGpB3L0LsOyZAV3I53bWiKbp7H42XYnQ4G4mXwlI4l1kJUNR0Da6cJ8i47cm9g+OVGsALK1H6OZw8rYXHDj+Vd1PtS3a+CHCd21/TZQEfA/aBTudZz3A2yXqE/QktlWsWYBed/UG/gX6nw/O+2JFd3EqHABYo2iB5H8AJflVlnWk76+ywv4mqANfY+yI5ANsE2A3sDP1CVYB/w2MHufJe6inAJYoG6KgfJYkfA+4gDopn3Ukcku+ImgAbAnw+OF6uAfuHfgy9+ybPL8rnWLTzGe/Jm+grOqRwhcKPAI85q6Bt4oD7fd2f0gIohd6iUTpMA+yTBDp8RlIPT7QAvcRH8BbAXuJXxEPoBTmP6sCbLGhV7zXPdZgebIbakx5sOjS8JxskGnQjMrVnZJReuzPo6mroG/YA7RJiyt9baiDLkwAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/4e8612a8cdf09c815ad4b006734d9a55/bc8e0/hutchison-telecom-logo.png","srcSet":"/static/4e8612a8cdf09c815ad4b006734d9a55/8ac63/hutchison-telecom-logo.png 200w,\\n/static/4e8612a8cdf09c815ad4b006734d9a55/3891b/hutchison-telecom-logo.png 400w,\\n/static/4e8612a8cdf09c815ad4b006734d9a55/bc8e0/hutchison-telecom-logo.png 800w,\\n/static/4e8612a8cdf09c815ad4b006734d9a55/6050d/hutchison-telecom-logo.png 1200w,\\n/static/4e8612a8cdf09c815ad4b006734d9a55/00405/hutchison-telecom-logo.png 1600w,\\n/static/4e8612a8cdf09c815ad4b006734d9a55/1f96e/hutchison-telecom-logo.png 2400w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAABeUlEQVQY02O4xMDA8Mmc3/azl1rAJxtR+3fcDEyfDNiZPmozML8142cAgeCYTAb/xAIw9o3PA+J8hqDkIga/hHywPEgcDp4wMDB+shSc8TnI4PQnB8mFDGhgYmgAEwMeADMsLq8GaEkh0HXGnGwf9Vl7P+oyRwPpro8WAmof9dnmfjBg7/6vwMDumlxqGBCXox6QVCgC1CwNdKG4X3y+eGBykRzQhWwgw4A0o0d0NsSGT9oM3B/1WG5/NObu/6TPevmjAfseoMGnPhqwXflsyJ7E0LRTJDQ63RBomBZQow3QQCOfuDw9oJclsTr5kw4jyMC7H425JgINvPLRkGMl0LBjH404d3034bKRyO2Tj0zM1QhILBAHGmoQlFLE7R2bqwo0WN8nPk8FaIkskK0AlFMG8gUZPuqxsgJdlf/RlNcDSOcBI0YY6OVqoJez/gMtdEsslg1IyNcBatQFuszaJy5X0jsuVwJIGwCxDtAQDaC4EdBQLa/YXG4Aqk2E+9oOEj0AAAAASUVORK5CYII=","aspectRatio":3.241573033707865,"src":"/static/041ca1ad41d7527915c91390017b0f3e/fb37c/iie_logo.png","srcSet":"/static/041ca1ad41d7527915c91390017b0f3e/8ac63/iie_logo.png 200w,\\n/static/041ca1ad41d7527915c91390017b0f3e/3891b/iie_logo.png 400w,\\n/static/041ca1ad41d7527915c91390017b0f3e/fb37c/iie_logo.png 577w","sizes":"(max-width: 577px) 100vw, 577px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAACP0lEQVQoz02Sy2tTURDGb/B/cOUDhKitbV735p20aZPUJK2YWImxTWPz6AMjaSzGEJKmSfMCEdSFFLGIIqIgiouK4gNcuFZ3RRR0IYgpFEEUTfR8zrlqzYEDw8ec33wzc4S1VGqLQAeVygVWKLRRLn+k2/xVKDRRKjd5/FOOS00sLf25xSLX1+nNOm7e2iH8PQZJp5CDrXv3DJ87PPoB1SruTU7iyVQClIznszN4GI/L8dpcCrmREVwMBtEu5PE4kUAt4Eewv++qVqtZMUui7x9Y2KdW3R93OYHFxR8HbFY243Yx1GqMklnAbmPkkLnNJnbS62F6UccaAT97Nj3FvBYzkyQRJkl8bxB1RzqB1yecBCwW22MOBzvl84K7nRgcQIIKbWRPg3JwIxzGm7k5vEgeZ2g02FPqpFutapGJnZxjlHTy+AQSr4SdgzKQu0p7PHKb4wMORLlO8NuRCHb39mDa7cKnTAY0S7Yai/JCbY/FrJSBoqgQ+o0GTZdadX6MPyyVWmGCUMsycLTPjhP7h4CFBbxMJvE2nYZFL0EeSb3OHsRj6NGov/uslu2b7dIwv1CVjYr/IHfCzhwKMHKMGLWqJEd3jkXwOZsF5clwDqQFggMfJeLo1WowZDbtMkria5pjXbDqpUvburtmv+Vyd2kR+JrLtVeOhpAd9mE1GkUrn+fO8YocZnw+XA6FuMZIY+/m5+G3286SLwUtpkrQ/4uh+V3jQGqP/0VsXmqX/iT/AZ0aY1wrFoHlZaXQcX4DTjJkHtRoFqgAAAAASUVORK5CYII=","aspectRatio":2.3104693140794224,"src":"/static/149dacedb2d9059e22e8d83fcd394bf0/bc8e0/Just_Group_plc_logo.png","srcSet":"/static/149dacedb2d9059e22e8d83fcd394bf0/8ac63/Just_Group_plc_logo.png 200w,\\n/static/149dacedb2d9059e22e8d83fcd394bf0/3891b/Just_Group_plc_logo.png 400w,\\n/static/149dacedb2d9059e22e8d83fcd394bf0/bc8e0/Just_Group_plc_logo.png 800w,\\n/static/149dacedb2d9059e22e8d83fcd394bf0/6050d/Just_Group_plc_logo.png 1200w,\\n/static/149dacedb2d9059e22e8d83fcd394bf0/54311/Just_Group_plc_logo.png 1280w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAAA5klEQVQY02NgAIJnW73Ur68P8HixzVOQAR0EL2UgDXitlfAo6lCeMDFHRz5xBieD3yo2lrDFbAwhSw2AWBisJmSpMhBzQ2kQ5gRiDiDmAWI5IFYAYlEglgcqXrKOwX+lKtAgD6BrsoH8OqBEIhBHALEfVOMMIG4E4jAgDgXiKiCeBcSpQNwMxJFAnAfEW0Bems4YssSCOXSxJ1DAA4grgDgYiLPAGoKX8kMNlgLiJCAOAmI3qKF2QJwCkV8SBaTLQN5hhHqBCSUoQpaKATEzWDxkqQAQ8wGxLNSLoCDhhWJJKBYBeRkAEQhjuGlEUR8AAAAASUVORK5CYII=","aspectRatio":3.78125,"src":"/static/d1ec3c7d6b546ec83d30b9ce6188ed0a/ee330/king-power-logo.png","srcSet":"/static/d1ec3c7d6b546ec83d30b9ce6188ed0a/8ac63/king-power-logo.png 200w,\\n/static/d1ec3c7d6b546ec83d30b9ce6188ed0a/3891b/king-power-logo.png 400w,\\n/static/d1ec3c7d6b546ec83d30b9ce6188ed0a/ee330/king-power-logo.png 726w","sizes":"(max-width: 726px) 100vw, 726px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA4sAAAOLAH5m+4QAAACj0lEQVQ4y42Uy2sUQRDGZ+Mj+EBQDOhZgofuntkN6kHQk1fRf0LwrBgPnmJQ1EOUXLzqIUqiIHg0oAiKCl4kAUVDElCYTWTVJOsruzPjr1+7O+ssZOCj+vHVV1XdXRNUQ5nlIRq/ymEWK3E74ItDORCHYuZbpLKqEgmc1EFzE/aTNfhVJc9pflAk+KcSZYjcAP04zNaNg2g6TltMidSIhWLYBFeiQBBHG1FMQXjxu2IcGjkxpcVsZgS96CrpY68oQwlJpstYXSYO+cwQIkBXZojp7IpLto6xtUl3mVps1WQmLxh/LRZasWphyW3nFELacbbpEtYdR0ss9mLYuIdgAURKWT7QsKusVaYW9VluVLC5WlbaTrszKzHu82Way/DfRgRtdsJcFGWOuKxKiJX8c4l7Zyj808idobukrG5vd8T5tkQJZEV7X4oRSbqCmM5wD320SLRXySY7+w5l879H7UVDcbm7/MD0Zx7rK7ZvJ8AT3YY4rrs+tlCmcxprHaIu2yDQzt878JUssqGy/jncdC31+i+itUjmeDr7GmgOmb4fa/eykrNgjkiLRFjAzjGvkcVVR9qjM2XvC5Z9qXnzjrtgfJX8DM74F34I7GVhEw4aW/SjDbo+1na0xkps17wl+x63gZD9nV6wTsoDLAAxqC1ZDQLJeBc4zjvsZ74VHOYIIvtnEfti63MazMM55tvmBziP43NwArwh+mMyfg9xkvk7xrfAKdanmc+wfg08Y/wRe59AK4wfme5B7CdYJMIr86ZCGUOImN9F5Dr2KEIfGI8zHmX/JfynzD8xPgl3P/Nlst3tzkO+RbmC1aRLkB5COojzFeZnwREwidMdePcYPyDAOHYKVFjfjKU6MQYO/AMcpcJ5vZVp8wAAAABJRU5ErkJggg==","aspectRatio":1.0212765957446808,"src":"/static/0758ce38034e10d0ebbe2e4eaaf1fb75/bc8e0/kmart-logo.png","srcSet":"/static/0758ce38034e10d0ebbe2e4eaaf1fb75/8ac63/kmart-logo.png 200w,\\n/static/0758ce38034e10d0ebbe2e4eaaf1fb75/3891b/kmart-logo.png 400w,\\n/static/0758ce38034e10d0ebbe2e4eaaf1fb75/bc8e0/kmart-logo.png 800w,\\n/static/0758ce38034e10d0ebbe2e4eaaf1fb75/6050d/kmart-logo.png 1200w,\\n/static/0758ce38034e10d0ebbe2e4eaaf1fb75/00405/kmart-logo.png 1600w,\\n/static/0758ce38034e10d0ebbe2e4eaaf1fb75/1f96e/kmart-logo.png 2400w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsSAAALEgHS3X78AAAEiElEQVQ4y42UeVBTVxTGL1AZ6oYKshkWWaUobR1tNWCVjjNaBlAqBdkUGXa1bjhMJTVYOlpQa0WKFQuVhLBIFKIEiJjI0qYKiUGUkRAgVmiKtDql006HkNyvyUPQP3tm7rtn3nvn97573r0fIabo9vQn9wPXECZ397VQbYmwJP8jVOs3Wna5+ViYc4V3AFGYONOXl9Hj7GY1k6sJcf9zhWfqrxuCSx4Fh4h6Q7ZIHgVtqh9hsy8882DtURDiMvOuYpEjI0Dhs/LV14bcPRiYlBDXXwIDy+Vxqf8UZ53BoaMCpOSJkXhcjPQTjeByalB5+ByUsckTw75+RTxCFjJqF9rNiiFq1rQylfW8reqw7S++5fIRwpEg80rPVMzZTr1DvGDKKV5gcEqomrJLqNE7pzUYNuQ04WpeGQaCN6plhHiZ67sWO1mS7mWe03LfeDPk0fZoJJtU2Cdf11dL1TTjnIwWNzygp6qV1GVnBV2RXE19kwTUZxefusbxjEvTb04WfyXEADu4v/ylUiZKCZnfH7RRW1jUgnWfSfRRXDFkPaPUNrKMrj94HV39z+CzpwreSVXwNc2mnPomV1GfhAq47m+abOWWYMDV/ewsULPEbq/sQD5CTnbqpd1apJxro7VtGmoTVorA9Ksob3kMtwQ+XGJ5s8MjsZK6xfPp3G1lxo85jRgIjxyrJcSeAY6+t7a+4LgA/vtvTD0c+p1WtPbTYtFDnK/vxZcCBRrkwwjliGG+d+VWP7IudOBa5xCOXpbTyzcf0owfVAZZ4gForedsNvMshtjBPx/JF8EvXWh4+uwvKuwYBOfKPfzU9xukqhHkm6C653+jwgSruaPB84l/cffxGJQD41Cpx8A+LtXf3vcFdC6OOxmFT9ns28e4dVib3WjoeDDKqBvSTaCg9j6utg+itKkPfU+eo1U5ApFci97hP2BqCSSKp7S+Q0O99jca5Ok5GLSxCWWATzw9TwtzS+B3qEn/aVEbtnGbKZfXhbDPmxCVL4GwcxAbDjfgBL8b9zXjyDzfbm4HTf36Do0vkBo/yWtGf8SO8UZCHBngj4S83RcVh9A8CRZsLzMuN/0Ap5gKyornw2u3ALxWNdbsE8I69BKjeOuxRjo/4nvKii7HklTRpIRTjEE398Lp47YikNmHj11YJ5VHT2J1rlTvGMs3+CdVwj+5CqxYHhXfe4LsUjnezayj4rtamnjqFlalVFH7tBuTlwrqoFnHVnEJsWGA8mXer06Mp3ep4gAX0Sda4JjaoHfaVWNwiKkwvr9PaLwo6jWerVMZt3CaDV5ZDXp2rgQCbjk0QR88EBPibK6/Z+swbSrt1rYWs1D7pel94Tt0wpwi7OVcw+bsG1h9pAnvZLcgOKcZHx0U4nQuDx2JWUZtQMB33xAy11ynnLdoGqbweouZ2+bYWuBiAQNuJWTxKMslbWjThyJVzO5BWVzGuCQu60X7zjSdOjJaORK4qlBr6vus2yywe+U2ZvuagUo9VpKe5X5Wr3teDSFWY6YljRPioSNkyevPhsO3WXYucraYEWb21f8ADcJslJO+J9MAAAAASUVORK5CYII=","aspectRatio":1.1900383141762452,"src":"/static/bc01093746ae64e6b1d91d134bfe90e5/bc8e0/kroger_logo.png","srcSet":"/static/bc01093746ae64e6b1d91d134bfe90e5/8ac63/kroger_logo.png 200w,\\n/static/bc01093746ae64e6b1d91d134bfe90e5/3891b/kroger_logo.png 400w,\\n/static/bc01093746ae64e6b1d91d134bfe90e5/bc8e0/kroger_logo.png 800w,\\n/static/bc01093746ae64e6b1d91d134bfe90e5/6050d/kroger_logo.png 1200w,\\n/static/bc01093746ae64e6b1d91d134bfe90e5/f0c64/kroger_logo.png 1553w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAADCUlEQVQ4y41UWU9TQRQeREx8ML4QJb7wQvwBRuOSkPAkEI0oIdhWKHRxYVOJFANFiKENEjQaKLZAKVBoy6KQyF5AlADSCrIUXtCmG6HpBm2xpbd3aJ22pAJFw+Tm3DNzzzfffOecuWDnH8Pj8ThcbpXJhnwID48Bh67iEHq9XrpgGqS1DCvWkO/G4ZHAKA5FSxVrgCwE94QXyvrcfupQ/kPAKAbD8ctlfYAkjLgvAXeb3g4q0HZYCDk4lJYzsgKIgnCaOIwqAuTWqNxOrXkLrR8g3weGfql66+9zj7sBseMYQlJEx2liQGjKFs6EKgehtDnCuUhaTbuIcPqhAGRIwjLFgCI+QRXLlEb0Fd+DBwcyPKfSA9LH5hZCQzMJpHWFU0Qn6S0RdBEgCRKqhlH9cBgChrtgT1zFxMWn5ZN91/Ne59MrGaU1Wf0dSSRWMas2+9aLQu7X9b2Z2wVj/gP3zKpAqkT2KT61vITIYq4OxTY2kbIqC6obMkRtBDL7WVS+1IW5vB4P9PODQAHR3OXGogukxHLGl+6bIHkgncX0ys9z+OSEEvb66BXT+CUCuwwkt1f2LgQzB4J5qhpYAoQ2+WDCT2kcl0/VjMSyuY8qeFmG8WtF1U8kYmLOm+eA1HM2r11psPoyByEI0DoxLCavE9xpjMl9FV9cmFhckMhknKG9AynCq4yiU5m10Q+qIqnVaHdwg/eyczZADoLlbZ36RXw/QayT3eZ8T+EtJHFmKfwZeuMksf4HuX46gy9Pq/uW2TBJ4U/NqUy7zP4LtLON4Tqz3eXGMZ8a3LCx4cbdhk27YxvTGM3bGGbYtOHQjYRa7A6b04XqgnwQKK9Ca2F2yZZ05v559aLWUvpBrtCZOVKFxmTjjS3Pq03p3M9Tq3qpQscdW1ZoTXs0ez1Gm7N3Xm2wOoaWtGqTfWBRY7I7Rpd1diemNNgsW86xFZ3WbF+zbE2v6pVGq7/P4d8OQ/OARW0UtIH+Ca4Enf0dBiG6hugUSDJ6+ZT7fWR9BkKUDuSgx78I//cnOeL4A3eQ1QLqOp50AAAAAElFTkSuQmCC","aspectRatio":1,"src":"/static/f06f37d0463e1feec54688c2bd811a6c/0c2b2/lkh_electric_logo.png","srcSet":"/static/f06f37d0463e1feec54688c2bd811a6c/8ac63/lkh_electric_logo.png 200w,\\n/static/f06f37d0463e1feec54688c2bd811a6c/0c2b2/lkh_electric_logo.png 225w","sizes":"(max-width: 225px) 100vw, 225px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAABXElEQVQoz52RPUsDQRCGdzdIYipB8COglVFUREMKQW2SIrapFMRCE/fCKUKQFEEEO3tBLDQWYh1EIn5U+iv0h1iJmvhs3MTcxYg48Ny7uzfz3tysEC1RtVoTQorvdZjzbuGLmk87RsMM7Yc49EIUVmEHpqDrT2ZVa4aOkbxnu0ujB+gVugwhKIL60dRxnLpqrcWbUg3DEWtQQW+gDCfVr6630XP/mNoMja67bqCUSNR/5zUQiJG88i7l/oeUh6yf4AFKL8HggMl5jkTUmut6PLyL32cbhkCn921mqALtaF3UjrO7lcnMmvls5HJJuhhPFwrDS/n84FEqFdrMZuPkzJEbpqbH1Da9zMPMzx5cwCWJjxScomdQgWs4hjKUeHeL3mnzca3vYcHeg/IYoqPso+gEzEASpmHS7s35FMxDDIZgEfoaF9sMz+Yf0az3dSjZS6MWZZE+Ws9VS734BKHdsr4UmmKoAAAAAElFTkSuQmCC","aspectRatio":1.7777777777777777,"src":"/static/d66b0b26ba92827f7fd0523eb46b4150/bc8e0/Mahindra-logo.png","srcSet":"/static/d66b0b26ba92827f7fd0523eb46b4150/8ac63/Mahindra-logo.png 200w,\\n/static/d66b0b26ba92827f7fd0523eb46b4150/3891b/Mahindra-logo.png 400w,\\n/static/d66b0b26ba92827f7fd0523eb46b4150/bc8e0/Mahindra-logo.png 800w,\\n/static/d66b0b26ba92827f7fd0523eb46b4150/6050d/Mahindra-logo.png 1200w,\\n/static/d66b0b26ba92827f7fd0523eb46b4150/00405/Mahindra-logo.png 1600w,\\n/static/d66b0b26ba92827f7fd0523eb46b4150/a76e0/Mahindra-logo.png 2560w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAAAvUlEQVQY003PPwuBURTH8asYzEokhcHiJXgfymxDnvLfYpTJQBaT0aRkMUuZzBYpGW1SSorvyU/c+nTuPfecc5/HOedeOCOLGw7oKD9EDmv0lFtijgIGys3Uu4fb4okTjri4zxqr+IokyjrbkC4S6Cu3wwMjayxhgxWmuGtgWsULnbt/X2N1eQ2w3ETRU63zKfoRdr8VRfCvJoYUMgghgIjurS9umwZqqCvaK200ta/qbHcV/XpRd9/6lqL3BodHMdxE6KZZAAAAAElFTkSuQmCC","aspectRatio":3.950617283950617,"src":"/static/42beee053b9542a5890e06639b537212/bc8e0/Myer_Logo.png","srcSet":"/static/42beee053b9542a5890e06639b537212/8ac63/Myer_Logo.png 200w,\\n/static/42beee053b9542a5890e06639b537212/3891b/Myer_Logo.png 400w,\\n/static/42beee053b9542a5890e06639b537212/bc8e0/Myer_Logo.png 800w,\\n/static/42beee053b9542a5890e06639b537212/6050d/Myer_Logo.png 1200w,\\n/static/42beee053b9542a5890e06639b537212/54311/Myer_Logo.png 1280w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABJUlEQVQoz6WSv0oDQRDGdy8nxAiKJIitDxDuunR7hU1AYysR0kQk6UJSGaLF1YKYlPEBfIoIFnmWvcfwN7e7l4BaufAxM99+M7N/RhWJ0UVqIpuU0IpF7JEpmwiMWO1ieJeDzUqdaIpSY9SPJUWtS9S75CzsSQFdaVPRSCNTQRKaOAPsPQnn6o9F4kXw0bY5Xe1XIZvvIAMzCn74K9+APlwPXOJLsxf8IXaEXcONwS3+lOJ32Afia0necPQu17rC3/qrPCFYgWeQw79S6M06bgnmcHN0jxTLsRO4T7iFvEsKNgRfkB1f8FA+Ca5FwgH8Ce96Cn9M4zPiGk9whG2AGD4mboD6/tWrT1H/WXSO9n448icM4+FGw41NycuPhxEpPGwYIfANZ+muxAhyyrYAAAAASUVORK5CYII=","aspectRatio":2.4813895781637716,"src":"/static/77220d9924e3cfbeb3dd62e019603a6e/bc8e0/new-vodafone-logo.png","srcSet":"/static/77220d9924e3cfbeb3dd62e019603a6e/8ac63/new-vodafone-logo.png 200w,\\n/static/77220d9924e3cfbeb3dd62e019603a6e/3891b/new-vodafone-logo.png 400w,\\n/static/77220d9924e3cfbeb3dd62e019603a6e/bc8e0/new-vodafone-logo.png 800w,\\n/static/77220d9924e3cfbeb3dd62e019603a6e/6050d/new-vodafone-logo.png 1200w,\\n/static/77220d9924e3cfbeb3dd62e019603a6e/00405/new-vodafone-logo.png 1600w,\\n/static/77220d9924e3cfbeb3dd62e019603a6e/3ba25/new-vodafone-logo.png 2000w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAABfElEQVQY0zWM2yuDcRjHf5jMofwBS3MohUJJ5AoXSmajMcNsuJoovDRiLqTUyunC4UZywQ6vmRxmcy6HXmehENMiCinh9sfXuxcXn/o8n+fpIaEalhOVWLngcpYjSjMnUlu5oDIbR4otgvupLMI+kHdf81f94mui4sldol3YqpC33R0mJz5IVGPbJEgzA83gATrtV2gYP8OA0wP1wB5SWtcQxywhvX0d8cwyYuvdyDBuIKFpGcreXchMO0htWUGwfhVMYTOM2TqQKhdIuHaK9ix6qMl5Q7dv3uj8yTPd937QfvctNXOP9Pj+k65evNLN6zfqOHoS3Hn6Qt3nL9R1+U4Z0xz1ZiV9mdLk3366WUoCSm0oaGTR0edGbq0ZZQY7qo0zqOmcRWW7Q6DUMAVt27TgdV1zUDRYUWV0gOleQKZ+AmplC3LyOiCusIOEaO2ILBiBRDaImMIRRPEulQ//ohhG5B//HsH3aP7ON0vzhyApGkVoJQsx/ydMw+IHKjDsyjcEK/gAAAAASUVORK5CYII=","aspectRatio":3.764705882352941,"src":"/static/00b009b98a9c1df776b001b2cafa206c/6ba37/officeworks_logo.png","srcSet":"/static/00b009b98a9c1df776b001b2cafa206c/8ac63/officeworks_logo.png 200w,\\n/static/00b009b98a9c1df776b001b2cafa206c/3891b/officeworks_logo.png 400w,\\n/static/00b009b98a9c1df776b001b2cafa206c/6ba37/officeworks_logo.png 512w","sizes":"(max-width: 512px) 100vw, 512px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA4sAAAOLAH5m+4QAAABLElEQVQ4y+3Uu0oDQRSA4ckFEwkKamNIELsoWnh5BSG1RarcjDEhaKMIamOjooiJSYidVXqLmBSiRcDC9/BR/EfOwLBZ123EJge+Yndn5pyzM7tKjcNHBP5isaDfwSGPSsz1HHZx/lO1zoUmEPVIfIIUhpixKh6pehVnuEIDW1ZCU8kCrpHFkUuyRdPCI55wiwwmcSnVKqsDPeEFBbkOS7Jlmfc9ri0L6djGvgzMu1Swhjp2kMY9njHAK9b1oLg1ISOV6cGzcm8em7hAGcdo4g2nqGIFEUwrq3TzwjvSQhctvONO2tfJ+3jwOi5md5L4lA05kA3KoShVm6hhynFCRo6PeekVfKCHQ7m3hBtHJ79+MebhBhKIYU8S6TNXsroJ/Ms3qlwOcWj8H/QVXzcvI+uHEb5YAAAAAElFTkSuQmCC","aspectRatio":1,"src":"/static/629713debaa7e075e8d15f829046138c/bc8e0/ray-ban-logo.png","srcSet":"/static/629713debaa7e075e8d15f829046138c/8ac63/ray-ban-logo.png 200w,\\n/static/629713debaa7e075e8d15f829046138c/3891b/ray-ban-logo.png 400w,\\n/static/629713debaa7e075e8d15f829046138c/bc8e0/ray-ban-logo.png 800w,\\n/static/629713debaa7e075e8d15f829046138c/6050d/ray-ban-logo.png 1200w,\\n/static/629713debaa7e075e8d15f829046138c/00405/ray-ban-logo.png 1600w,\\n/static/629713debaa7e075e8d15f829046138c/1f96e/ray-ban-logo.png 2400w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAA3ElEQVQ4y+3SyQrCMBAG4MSWXhVcQKzNUosXtwqK4IIigjcV8f1fxT+alMEqikftwEeS6TRNmjBWxB9ELOSNaIVMRzIbU7TundzErz5qQrWjrHV9FzoS9xyKeUcq7h6Y/jQdm7xn+onSblJOW/IxD0p05jISF0gghRlMoAtLOEIVFGxhYOtOWsgR2j00YQMNpoWooHOGvk3OoQcxrOAAdVjb8dDWpliMye2gBgsIzZJL4LvtuOXbrfimtePA5R+2HLj3cz+VFPFnh0IPzRwAfSd7/sk1+eraFPHDcQWxWDPFj1PTTQAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/3f924df78abd59e66e13e05119c63e87/bc8e0/retailer-david-jones_logo.png","srcSet":"/static/3f924df78abd59e66e13e05119c63e87/8ac63/retailer-david-jones_logo.png 200w,\\n/static/3f924df78abd59e66e13e05119c63e87/3891b/retailer-david-jones_logo.png 400w,\\n/static/3f924df78abd59e66e13e05119c63e87/bc8e0/retailer-david-jones_logo.png 800w,\\n/static/3f924df78abd59e66e13e05119c63e87/3f078/retailer-david-jones_logo.png 1152w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABtElEQVQoz2NgoBAUrjzvV77m4jaTiv8sMBErIHYFYjUgFgBiNiDmBWIWML9opQGQ5mIoXAUS52AoWqXAU75OCaQ1Yu6xKR077/6vWHN15eRjizTmn51vCDLQH4hTgDgXiEOAuAyIw4G4EIgDgbgEiFOBOAeIM4A4kal4lR1DxkJlwfbD//U6dp+t3L7QdcP1eY9WXpq/BGSgMRBHAXEwSDEQVwGxKRD7QsWyoIalAbEl0KVRQFfrgVwoXLNyGkPBys+Mxcv/6/QsORu9bIkByEAboAJZjMApWsmCLcxYq+bwsvn+52RYKKcaty/7Te/hBQt5iw7W8jcc+s+Qv+IoyEBRIC6GetMZiGOArggA0ulAHA3EcVCvg7wdwFC0PIohZ6ud1CEGEYkVdi+U1tq9sN0cOzVx2Z6zklV7i0AGGgJxJBAHQb03AYjtofxyIC4FGwQJ4xLGolWxDPlLLP7//8+avnrnIttV5bdlVzp/lFvl+FN9o10CyEAtIGYHx2DhSikglgN6lxka4+JAzA9NDWIgdWyla1SBPMaq9ef1q9Zeu9229kUu90plDqWVng0KKz3mAwBVtdCum2EsdwAAAABJRU5ErkJggg==","aspectRatio":2.591792656587473,"src":"/static/c8f80125fe7bb3e09a8141e47f9a4ada/bc8e0/standard_chartered_logo.png","srcSet":"/static/c8f80125fe7bb3e09a8141e47f9a4ada/8ac63/standard_chartered_logo.png 200w,\\n/static/c8f80125fe7bb3e09a8141e47f9a4ada/3891b/standard_chartered_logo.png 400w,\\n/static/c8f80125fe7bb3e09a8141e47f9a4ada/bc8e0/standard_chartered_logo.png 800w,\\n/static/c8f80125fe7bb3e09a8141e47f9a4ada/6050d/standard_chartered_logo.png 1200w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAAAlUlEQVQY06XQTQqCUBDA8dHAqNDEPqhlJ1B3LZUSQmgZtWhXa6/lOVp0Fxfeof5PJ3i0rIEfM294DMPIQPpwRcb4PH8K1yp2aPHECkv4WGOGDWJEVs/kLTwkCO3JNau9DOorjihxRoEKe5xwwQEpbtq/fw/M0OCBOUaaAz1FrpsvdPNA/0zMIEzNpt0w64ZDR8T594Zv9iQOMFVJTckAAAAASUVORK5CYII=","aspectRatio":4,"src":"/static/88fdd66e00e9e4b56734a490f50c9f04/23495/sunglass_hut_logo.png","srcSet":"/static/88fdd66e00e9e4b56734a490f50c9f04/8ac63/sunglass_hut_logo.png 200w,\\n/static/88fdd66e00e9e4b56734a490f50c9f04/3891b/sunglass_hut_logo.png 400w,\\n/static/88fdd66e00e9e4b56734a490f50c9f04/23495/sunglass_hut_logo.png 640w","sizes":"(max-width: 640px) 100vw, 640px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAAsSAAALEgHS3X78AAACSUlEQVQ4y4WTv2tUQRDH37udxMQLiQoJWJxB89bkENSAJhYJJiBWCoqQQrAV4m78EcGoWAQh2GlhIfgXWAhaCoKVjWCTA7EQLfwDbASJpDg/e2/ey97lDhe+7M7M7ne+M7ubJDpM5vLZ+kR0nY/1JB6S+Ur3fdEwmS/JIt8SSd4x/2BuiHXPjHU13aekPQhDphCUHeKXUl9r4vsJ4XOx/q1Mrgb7N/ZMTNpzoMKosutSf9DEftMWt+6cHL3dJPk3sKcQUojoJIvXn8WuBMIJtfuAaP9eyNRak/IvtWzrTa+SU51H2fwHlV8Kf+hvQci8JPWHqPSPckInIb5LZUQ4RnCL8hqqKA293WmHu5K3w69rH/uLS5X4gooM0lLjG2z8C8b0UB+JioMbSnih84Xs7qMtL8WHsrCfdvR5AmwT/w6mSXKHHp7WM2m7wlZZ8Rt0r6R+n+b7D6j2kD8B2+Gy8M0Qh9DfBZ/AcFxl+8PWXqrim/i/QrAFfhF7zXwsik/iex/UdS29/HoRqT6NETDY7nPHIdgE82pXTKfC8O3ImppMwZOQ6CuyrpTv0frH4CPYoNRa/CJ631LU3/5suZvfgCGJKir7COl+FO4lwyFUZGAQex84kCvPf0SoQIrXYL1E6lOJ/zZZrrJxFuI5yO5hr3LgFlgGNyC6hn8BHARniV+GYBZFF8M3JL7AvMh8Ksl75UZV4UnFeTAPpvHPgTOsj5CwCmoQjnNmAMIT+KdM+GHWjbM+HDc99KTKXCUwBEbAMGTBN1B8s/+Nf8SSuEx+3+MsAAAAAElFTkSuQmCC","aspectRatio":1.1148272017837235,"src":"/static/92ca85cecc1c49a0a81b16b3eba7f9c9/bc8e0/Telefonica-o2-logo.png","srcSet":"/static/92ca85cecc1c49a0a81b16b3eba7f9c9/8ac63/Telefonica-o2-logo.png 200w,\\n/static/92ca85cecc1c49a0a81b16b3eba7f9c9/3891b/Telefonica-o2-logo.png 400w,\\n/static/92ca85cecc1c49a0a81b16b3eba7f9c9/bc8e0/Telefonica-o2-logo.png 800w,\\n/static/92ca85cecc1c49a0a81b16b3eba7f9c9/5d2c5/Telefonica-o2-logo.png 1000w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAAB1klEQVQ4y72TzUsbQRjGn5mNeOvFg1fBv6JeS3voxQ9SYtZUqlB68CClIIhCPHgSBI/2ZKHYJtkoCQhmm+9EUTGCeFEv/gESSLO7qYlJO313JzEHqauXDrzsuzvv/uZ5n5kB/stQo/CMfZG5P8LZeFixg1MoakTxTGjMnqL8EbB87S7lbzb/WcbVsDtr4OIGSJtOriwWHBXs7fYwVyNBUvfR44986g1oS72T0Zf2HOXsQeDUkSWT1dPux5GvOrzfWgjEBfxRAXWLntqMM0cWuKpkmTb0oNGDxM8PiF0HMZebx0SMYNo63sWfwaf1dLx+cLw4Jf9+GM6qPGn4UBIChxRrZ3X4COj97ncKZ3Wq8bl76C0RMCmBLGm8QqYukKk1sFD8jXFq9fNlHEJI345bwOtNdyjLUcvhsnxJGgnsk8LpGCkMNZH9I5CtrThziSp3hY2etI9MypQq9m76oVfPESoLbFw1yY4WhUUnYVDWGcxdYvvYIG1JBcVffSjWNRRuhaPW9jRlPm8D3VUiY9ob04F3f9itDJEFyxTvUarL71nzkVfP9rEDtdvfqdxvLW898T7bq3faLzi7z2kjFOh0CnJWt5snj73u3Wa0CMtKGE8RrFi7V/4XlHHNnXvxdugAAAAASUVORK5CYII=","aspectRatio":1.3438320209973753,"src":"/static/9b2aa12870accd4a03cc3d1586b1eb8a/6ba37/telstra_logo.png","srcSet":"/static/9b2aa12870accd4a03cc3d1586b1eb8a/8ac63/telstra_logo.png 200w,\\n/static/9b2aa12870accd4a03cc3d1586b1eb8a/3891b/telstra_logo.png 400w,\\n/static/9b2aa12870accd4a03cc3d1586b1eb8a/6ba37/telstra_logo.png 512w","sizes":"(max-width: 512px) 100vw, 512px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAA7BAAAOwQG4kWvtAAABeElEQVQoz5VSPUvDUBS97yPJS41GaEKppIPuguBSpyIKddJBOkjAj0mh4lBQydbipuJinbS0CDp1clDQwc1BxUEE6dIfIbgJ8aSVUquDHjg5N/fr3dwXklKIwaEUiYt3bu7f0gsROfN58jyPNE0jKSU8xKKH67rkOA5ZlkXxeLxlR4jsRCJB2WyW2ghD6mA0w1HNqc0ObNvWv3wMB/EemwG80WgQacpciQrkdTjX9xa63U1M0xxWSk2jaM0wjHX6CwTRjay8zojT5qUm+C4+sWgoNavrehlNCtCAc95E0y3Eovg2fFPQYyFEMRaLpaEnyM3ncjmPhJQP8uqjKsYmD7GtZ12ZVRQ/IsGH7oFHKD4Ay7BLYA28w/sOeA4+gffwVYIg0Ela9plaKmUU0YjU9Hq/ZU1ggk00TEJXocvgAuxxTFKHFlBcgC8NbsBeRMMadpz6dQVcSEH/hO/70V/AwtblDiRZdMs4iXXlsB+7FqLlwzSsJ/4t9xM4HkJmlIXP/AAAAABJRU5ErkJggg==","aspectRatio":2.493333333333333,"src":"/static/e012d6dfe6d1a436ee899f2097f7ebf1/07abd/verifone-logo.png","srcSet":"/static/e012d6dfe6d1a436ee899f2097f7ebf1/8ac63/verifone-logo.png 200w,\\n/static/e012d6dfe6d1a436ee899f2097f7ebf1/3891b/verifone-logo.png 400w,\\n/static/e012d6dfe6d1a436ee899f2097f7ebf1/07abd/verifone-logo.png 748w","sizes":"(max-width: 748px) 100vw, 748px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAABmElEQVQoz62STUgCURSF34yThcuCwIhAiaIg3AQSQqs2QhCUQRBIQtEPVJqbwAqSCAqjSDQCaWEkLQz7haKyHxdGBLkIjBDSRVjYRlzUprmdUStsWwMf5747553h3TeMDjdZOpHgkzdXQtzl5DOMMSoSOJHns1AORr/q7DuO++59eVkyHOLYfz/p+KP+ORR0JHzrzcSYTFQoVCLHKfHF2jyloB7UgXJQA5TwVECrQRlQS7BMNGJ4T6aIorf0MDJAsV5zB0JdoiC4cQw7TJc4mh51FHUEdQ90B9iABWsv1AhW4fGwtw2Pj4626H5vO5VpM1Dc4Z5A4Iwol3thMMMYB13gBbwCE/ph6AqYReATdBT4wT6LLDmNqf4hSrd2Usw4SK7AiRaBpg9BsIvSBp4/gy5Cg+AczIFj4EN/GYFS8ALqAPQ0O8OLsanuO6ttzd9nbpfWVFyixnwa8vOrBE1Ag00aqA5U5WfaiEBprlqgknqMiAouiCzWv936pK6FXU/Py8h/INsdHpdlQwv/QanmqZCffu5f/O59Am+Z3GuXs/lAAAAAAElFTkSuQmCC","aspectRatio":2.272727272727273,"src":"/static/268ca5690c7e810b574454a7bd94f60e/bc8e0/yamaha-logo.png","srcSet":"/static/268ca5690c7e810b574454a7bd94f60e/8ac63/yamaha-logo.png 200w,\\n/static/268ca5690c7e810b574454a7bd94f60e/3891b/yamaha-logo.png 400w,\\n/static/268ca5690c7e810b574454a7bd94f60e/bc8e0/yamaha-logo.png 800w,\\n/static/268ca5690c7e810b574454a7bd94f60e/6050d/yamaha-logo.png 1200w,\\n/static/268ca5690c7e810b574454a7bd94f60e/00405/yamaha-logo.png 1600w,\\n/static/268ca5690c7e810b574454a7bd94f60e/9ab24/yamaha-logo.png 5000w","sizes":"(max-width: 800px) 100vw, 800px"}}}}]}}}'
      );
    },
    sAFx: function(a, A, e) {
      'use strict';
      e('PN9k');
      var c = e('ERkP'),
        t = e.n(c),
        n = (e('Wbzz'), e('2xV5'), e('dWle')),
        o = e('Eakc'),
        i = e('PPo7'),
        g = (e('xqb7'), e('IdJa'), e('FfcI'), e('kQsd')),
        s = e('yQns'),
        d = e('j/s1'),
        b = e('2UrR'),
        l = e.n(b),
        f = d.d.section.withConfig({
          displayName: 'bannerotherstyle__BannerWrapper4',
          componentId: 'sc-1alqtnq-0',
        })(
          [
            '\n  padding-top: 210px;\n  padding-bottom: 160px;\n  background-image: url(',
            ');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n//   min-height: 100vh;\n  display: flex;\n  align-items: center;\n  @media (max-width: 990px) {\n    padding-top: 170px;\n    padding-bottom: 120px;\n    min-height: auto;\n  }\n  @media (max-width: 575px) {\n    padding-top: 150px;\n    padding-bottom: 60px;\n  }\n  .particle {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    @media (max-width: 767px) {\n      display: none;\n    }\n  }\n',
          ],
          l.a
        ),
        p =
          (d.d.div.withConfig({
            displayName: 'bannerotherstyle__SearchWrapper',
            componentId: 'sc-1alqtnq-1',
          })([
            "\n  @media (min-width: 576px) {\n    display: flex;\n    align-items: stretch;\n    height: 70px;\n    box-shadow: 0px 6px 15.98px 1.02px rgba(56, 86, 122, 0.1);\n    border-radius: 10px;\n  }\n  @media (max-width: 990px) and (min-width: 576px) {\n    height: 65px;\n  }\n  .domain_search_input {\n    flex-grow: 1;\n    box-shadow: none;\n    outline: none;\n    .field-wrapper {\n      border: 0;\n    }\n    .field-wrapper,\n    input {\n      height: 100%;\n      box-shadow: none;\n      outline: none;\n    }\n    input {\n      font-size: 17px;\n      padding-left: 50px;\n      padding-right: 30px;\n      text-shadow: none;\n      border: 1px solid #ebebeb;\n      &:focus {\n        border-color: #ebebeb;\n      }\n\n      @media (min-width: 576px) {\n        border-right: 0;\n        border-top-left-radius: 10px;\n        border-bottom-left-radius: 10px;\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0;\n        border-color: #f4f5f7;\n        &:focus {\n          border-color: #f4f5f7;\n        }\n      }\n      @media (max-width: 575px) {\n        height: 52px;\n        padding-left: 20px;\n        margin-bottom: 20px;\n      }\n    }\n  }\n  .domain_search_select {\n    min-width: 165px;\n    @media (max-width: 575px) {\n      height: 52px;\n      margin-bottom: 20px;\n    }\n    .select__control,\n    .select-field__wrapper {\n      height: 100%;\n    }\n    .select__control {\n      padding: 0 15px 0 10px;\n      box-shadow: none;\n      position: relative;\n      border-color: #ebebeb;\n      @media (min-width: 576px) {\n        border-color: #f4f5f7;\n        border-left: 0;\n        border-right: 0;\n        border-radius: 0;\n        &:before {\n          content: '';\n          position: absolute;\n          width: 1px;\n          height: 55%;\n          background: #d9d9d9;\n          display: block;\n          top: 50%;\n          left: 0;\n          transform: translateY(-50%);\n        }\n      }\n\n      .select__placeholder {\n        font-size: 17px;\n        color: #0f2137;\n      }\n      .select__indicator {\n        color: #0f2137;\n      }\n    }\n    .select__indicator-separator {\n      display: none;\n    }\n  }\n\n  .domain_search_button {\n    width: 160px;\n    @media (min-width: 576px) {\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0;\n      border-top-right-radius: 10px;\n      border-bottom-right-radius: 10px;\n    }\n    @media (max-width: 575px) {\n      height: 52px;\n      width: 100%;\n    }\n  }\n",
          ]),
          d.d.ul.withConfig({
            displayName: 'bannerotherstyle__List',
            componentId: 'sc-1alqtnq-2',
          })([
            '\n  text-align: center;\n  margin-top: 17px;\n  li {\n    display: inline-block;\n    font-size: 17px;\n    font-weight: 400;\n    color: #0f2137;\n    padding: 8px 12px;\n\n    a {\n      font-size: 15px;\n      color: #87909b;\n      display: block;\n      &:hover {\n        color: #eb4d4b;\n      }\n    }\n  }\n',
          ]),
          d.d.div.withConfig({
            displayName: 'bannerotherstyle__DiscountWrapper',
            componentId: 'sc-1alqtnq-3',
          })(['\n  text-align: center;\n']),
          d.d.div.withConfig({
            displayName: 'bannerotherstyle__DiscountLabel',
            componentId: 'sc-1alqtnq-4',
          })([
            "\n  font-family: 'Open Sans', sans-serif;\n  display: inline-block;\n  border-radius: 4em;\n  border: 1px solid #f6f6f7;\n  padding: 7px 25px;\n  box-shadow: 0px 7px 25px 0px rgba(22, 53, 76, 0.05);\n  margin-bottom: 30px;\n  background-color: #fff;\n  @media (max-width: 575px) {\n    padding: 7px 10px;\n  }\n",
          ]),
          f),
        r =
          (e('x/64'),
          e('8oSd'),
          function(a) {
            var A = a.row,
              e = a.title,
              c = a.description,
              d = (a.button, a.textArea);
            a.searchArea, a.discountAmount, a.discountText;
            return t.a.createElement(
              p,
              { id: 'banner_section' },
              t.a.createElement(s.a, null),
              t.a.createElement(
                g.a,
                { className: 'banner_container aboutUs_banner' },
                t.a.createElement(
                  n.a,
                  A,
                  t.a.createElement(
                    n.a,
                    d,
                    t.a.createElement(
                      i.a,
                      Object.assign({}, e, {
                        content:
                          'The future of e-commerce is unified and universal',
                      })
                    ),
                    t.a.createElement(
                      o.a,
                      Object.assign({}, c, {
                        content:
                          'Unified commerce goes beyond omni-channel, putting the customer experience first, breaking down the walls between internal channel silos and leveraging a common commerce platform"- Boston Retail Partners',
                      })
                    )
                  )
                )
              ),
              t.a.createElement(
                g.a,
                { className: 'banner_container ContactUs_banner' },
                t.a.createElement(
                  n.a,
                  A,
                  t.a.createElement(
                    n.a,
                    d,
                    t.a.createElement(
                      i.a,
                      Object.assign({}, e, { content: 'Contact us' })
                    ),
                    t.a.createElement(
                      o.a,
                      Object.assign({}, c, {
                        content:
                          'We endeavour to answer all enquiries within 24 hours on business days.',
                      })
                    )
                  )
                )
              ),
              t.a.createElement(
                g.a,
                { className: 'banner_container company_banner' },
                t.a.createElement(
                  n.a,
                  A,
                  t.a.createElement(
                    n.a,
                    d,
                    t.a.createElement(
                      i.a,
                      Object.assign({}, e, {
                        content:
                          'The future of e-commerce is unified and universal',
                      })
                    ),
                    t.a.createElement(
                      o.a,
                      Object.assign({}, c, {
                        content:
                          'Unified commerce goes beyond omni-channel, putting the customer experience first, breaking down the walls between internal channel silos and leveraging a common commerce platform"- Boston Retail Partners',
                      })
                    )
                  )
                )
              ),
              t.a.createElement(
                g.a,
                { className: 'banner_container ourTeam_banner' },
                t.a.createElement(
                  n.a,
                  A,
                  t.a.createElement(
                    n.a,
                    d,
                    t.a.createElement(
                      i.a,
                      Object.assign({}, e, { content: 'Our Team' })
                    ),
                    t.a.createElement(
                      o.a,
                      Object.assign({}, c, {
                        content:
                          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                      })
                    )
                  )
                )
              ),
              t.a.createElement(
                g.a,
                { className: 'banner_container Partner_banner' },
                t.a.createElement(
                  n.a,
                  A,
                  t.a.createElement(
                    n.a,
                    d,
                    t.a.createElement(
                      i.a,
                      Object.assign({}, e, { content: 'Partners' })
                    ),
                    t.a.createElement(
                      o.a,
                      Object.assign({}, c, {
                        content:
                          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                      })
                    )
                  )
                )
              ),
              t.a.createElement(
                g.a,
                { className: 'banner_container universalcom_suite_banner' },
                t.a.createElement(
                  n.a,
                  A,
                  t.a.createElement(
                    n.a,
                    d,
                    t.a.createElement(
                      i.a,
                      Object.assign({}, e, {
                        content: 'Universal Commerce Suite',
                      })
                    ),
                    t.a.createElement(
                      o.a,
                      Object.assign({}, c, {
                        content:
                          'Best of Breed Innovation and Disruption on a Single Platform',
                      })
                    )
                  )
                )
              )
            );
          });
      r.defaultProps = {
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
      A.a = r;
    },
  },
]);
//# sourceMappingURL=component---src-pages-about-team-js-540ea45e80199bd9e0b5.js.map
