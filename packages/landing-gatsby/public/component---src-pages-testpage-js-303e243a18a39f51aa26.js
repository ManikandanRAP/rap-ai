(window.webpackJsonp = window.webpackJsonp || []).push([
  [37],
  {
    '+nJi': function(e, t, n) {
      var a = n('HnfQ'),
        i = n('yPRz'),
        r = i.each,
        o = i.isFunction,
        c = i.isArray;
      function s() {
        if (!window.matchMedia)
          throw new Error(
            'matchMedia not present, legacy browsers require a polyfill'
          );
        (this.queries = {}),
          (this.browserIsIncapable = !window.matchMedia('only all').matches);
      }
      (s.prototype = {
        constructor: s,
        register: function(e, t, n) {
          var i = this.queries,
            s = n && this.browserIsIncapable;
          return (
            i[e] || (i[e] = new a(e, s)),
            o(t) && (t = { match: t }),
            c(t) || (t = [t]),
            r(t, function(t) {
              o(t) && (t = { match: t }), i[e].addHandler(t);
            }),
            this
          );
        },
        unregister: function(e, t) {
          var n = this.queries[e];
          return (
            n && (t ? n.removeHandler(t) : (n.clear(), delete this.queries[e])),
            this
          );
        },
      }),
        (e.exports = s);
    },
    '/MYt': function(e, t) {
      e.exports =
        'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMy4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSIxMDJweCIgaGVpZ2h0PSI5OC43cHgiIHZpZXdCb3g9IjAgMCAxMDIgOTguNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAyIDk4Ljc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiMwRjQ2Q0E7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KPC9zdHlsZT4NCjxnIGlkPSJSb2JvdGljX1Byb2Nlc3NfMV8iPg0KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik05NiwzOC43YzAtMy40LDAtMTkuNCwwLTE5LjRjMC0xLjgtMS41LTMuMy0zLjMtMy4zYy0xLjgsMC0zLjMsMS41LTMuMywzLjNjMCwwLDAsMTYuNywwLDE5LjYiLz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNODksMzkuM2MtMC4zLDAtMS4zLDAtMS4zLDBoLTEwVjQ2aDEwYzAsMCwwLjgsMCwxLjEsMCIvPg0KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik03Ny43LDM0LjNWNjFsLTguMywzLjNIMzIuN0wyNC4zLDYxVjM0LjNINzcuN3oiLz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzYsOTFWNzQuM2MwLTEuOCwxLjUtMy4zLDMuMy0zLjNoMTBjMS44LDAsMy4zLDEuNSwzLjMsMy4zdjIwYzAsMS44LTEuNSwzLjMtMy4zLDMuM2gtMTANCgkJYy0xLjgsMC0zLjMtMS41LTMuMy0zLjNWOTF6Ii8+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTY3LjEsMjYuOGMtMC40LDEuNS0xLDMtMS44LDQuNGwyLjQsMy4ySDM0LjNsMi40LTMuMmMtMC44LTEuNC0xLjQtMi44LTEuOC00LjRMMjkuMywyNnYtNi43bDUuNS0wLjgNCgkJYzAuNC0xLjUsMS0zLDEuOC00LjRsLTMuNC00LjVMMzgsNWw0LjUsMy40YzEuNC0wLjgsMi44LTEuNCw0LjQtMS44TDQ3LjcsMWg2LjdsMC44LDUuNWMxLjUsMC40LDMsMSw0LjQsMS44TDY0LDVsNC43LDQuNw0KCQlsLTMuNCw0LjVjMC44LDEuNCwxLjQsMi44LDEuOCw0LjRsNS41LDAuOFYyNkw2Ny4xLDI2Ljh6Ii8+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTY5LjMsNjQuM3YxNWwtNSwxNUgzNy43bC01LTE1di0xNUg2OS4zeiIvPg0KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNiw5MXYzLjNjMCwxLjgtMS41LDMuMy0zLjMsMy4zaC0xMGMtMS44LDAtMy4zLTEuNS0zLjMtMy4zdi0yMGMwLTEuOCwxLjUtMy4zLDMuMy0zLjNoMTANCgkJYzEuOCwwLDMuMywxLjUsMy4zLDMuM1Y5MXoiLz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTMsMzkuM2MyLDAsMTEuMywwLDExLjMsMFY0NmMwLDAtOC43LDAtMTEuMSwwIi8+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTYsMzljMC0zLjcsMC0xOS42LDAtMTkuNmMwLTAuNywwLjItMS40LDAuNy0yIi8+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTEyLjEsMTcuNGMwLjQsMC41LDAuNiwxLjIsMC42LDEuOWMwLDAsMCwxNiwwLDE5LjQiLz4NCgk8Zz4NCgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTk5LjMsODF2Ni43aC02Ljd2LTMuM1Y4MUg5OS4zeiIvPg0KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNOTYsMzguOWMxLjEsMC45LDEuNywyLjMsMS43LDMuN2MwLDIuOC0yLjIsNS01LDVjLTIuOCwwLTUtMi4yLTUtNWMwLTEuMiwwLjUtMi40LDEuMy0zLjMNCgkJCWMwLjEtMC4xLDAuMi0wLjMsMC40LTAuNEM5MS4yLDM3LjIsOTQuMSwzNy4yLDk2LDM4Ljl6Ii8+DQoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik03Niw4NC4zdjVINjZsMy4zLTEwSDc2Vjg0LjN6Ii8+DQoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik01NC42LDQyLjdoLTcuMUgzMi43VjU2aDM2LjdWNDIuN0g1NC42eiIvPg0KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzIuNyw3OS4zbDMuMywxMEgyNnYtNXYtNUgzMi43eiIvPg0KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNOS4zLDg0LjN2My4zSDIuN1Y4MWg2LjdWODQuM3oiLz4NCgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTEzLjEsMzkuM2MxLjgsMi4xLDEuNyw1LjItMC40LDcuMWMtMC45LDAuOC0yLjEsMS4zLTMuMywxLjNjLTIuOCwwLTUtMi4yLTUtNWMwLTIuOCwyLjItNSw1LTUNCgkJCWMxLjIsMCwyLjQsMC41LDMuMywxLjNDMTIuOCwzOS4xLDEyLjksMzkuMiwxMy4xLDM5LjN6Ii8+DQoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik01MSw3Mi43Yy0zLjcsMC02LjcsMy02LjcsNi43YzAsMy43LDMsNi43LDYuNyw2LjdjMy43LDAsNi43LTMsNi43LTYuN0M1Ny43LDc1LjcsNTQuNyw3Mi43LDUxLDcyLjd6Ii8+DQoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik04OS45LDE3LjJjLTMuMi0xLjEtNS42LTQuMi01LjYtNy45aDMuM2MwLDIuOCwyLjIsNSw1LDVzNS0yLjIsNS01aDMuM2MwLDMuNi0yLjIsNi42LTUuNCw3LjgiLz4NCgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTkuMywxNy43QzQuNywxNy43LDEsMTMuOSwxLDkuM2gzLjNjMCwyLjgsMi4yLDUsNSw1czUtMi4yLDUtNWgzLjNDMTcuNywxMy45LDEzLjksMTcuNyw5LjMsMTcuN3oiLz4NCgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTUxLDE2Yy0zLjcsMC02LjcsMy02LjcsNi43czMsNi43LDYuNyw2LjdjMy43LDAsNi43LTMsNi43LTYuN1M1NC43LDE2LDUxLDE2eiIvPg0KCTwvZz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDkuMyw0Ny43aDMuM1Y1MWgtMy4zVjQ3Ljd6Ii8+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTU2LDQ3LjdoMy4zVjUxSDU2VjQ3Ljd6Ii8+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyLjcsNDcuN0g0NlY1MWgtMy4zVjQ3Ljd6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==';
    },
    '/rHm': function(e, t) {
      e.exports =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjZmZmIiBzdHJva2U9IiMwZjQ2Y2EiPjxnIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48cGF0aCBkPSJNMTIuMzUgOTcuOXM2Ljg0LTYuODQgNi44NC0yNy4zOC0zLjQzLTI3LjM4LTMuNDMtMjcuMzhoMzAuOFM0My4xNCA1MCA0My4xNCA3MC41M3M2Ljg0IDI3LjM4IDYuODQgMjcuMzhIMTIuMzV6Ii8+PHBhdGggZD0iTTEyLjM1IDM2LjNINTB2Ni44NEgxMi4zNVYzNi4zeiIvPjxwYXRoIGQ9Ik00Ni41NyAzNi4zdi00LjI4QTguNTUgOC41NSAwIDAgMSA1MCAyNS4xOWMyLjE1LTEuNjIgMy40My00LjE1IDMuNDMtNi44NFYyLjFoLTEzLjd2Ni44NGE4LjU2IDguNTYgMCAwIDEtOC41NiA4LjU2IDguNTYgOC41NiAwIDAgMC04LjU2IDguNTZ2MS43YTYuODQgNi44NCAwIDAgMC02Ljg0IDYuODR2MS43aDMwLjh6bTEwLjI3IDYxLjZzNi44NC02Ljg0IDYuODQtMjcuMzgtMy40My0yNy4zOC0zLjQzLTI3LjM4aDMwLjhzLTMuNDIgNi44Ni0zLjQyIDI3LjQgNi44NCAyNy4zOCA2Ljg0IDI3LjM4SDU2Ljg0eiIvPjxwYXRoIGQ9Ik0zMi45IDYwLjI2aDQ3LjlWOTcuOUgzMi45VjYwLjI2ek01Ni44NCAzNi4zSDk0LjV2Ni44NEg1Ni44NFYzNi4zeiIvPjxwYXRoIGQ9Ik03Mi4yNSA2NS40aDMuNDN2My40M2gtMy40M1Y2NS40em0wIDYuODVoMy40M3YzLjQzaC0zLjQzdi0zLjQzek02NS40IDY1LjRoMy40M3YzLjQzSDY1LjRWNjUuNHptMCA2Ljg1aDMuNDN2My40M0g2NS40di0zLjQzem0tNi44NS02Ljg1aDMuNDN2My40M2gtMy40M1Y2NS40em0wIDYuODVoMy40M3YzLjQzaC0zLjQzdi0zLjQzek05MS4wNyAzNi4zdi00LjI4YTguNTUgOC41NSAwIDAgMSAzLjQzLTYuODRjMi4xNS0xLjYyIDMuNDMtNC4xNSAzLjQzLTYuODRWMi4xaC0xMy43djYuODRhOC41NiA4LjU2IDAgMCAxLTguNTYgOC41NiA4LjU2IDguNTYgMCAwIDAtOC41NiA4LjU2djEuN2E2Ljg0IDYuODQgMCAwIDAtNi44NCA2Ljg0djEuN2gzMC44em0tNTkuOS01LjEzaC0zLjQyYTguNTcgOC41NyAwIDAgMSA4LjU2LTguNTZ2My40M2MtMi44NCAwLTUuMTQgMi4zLTUuMTQgNS4xM3oiLz48cGF0aCBkPSJNNzkuMSAzMS4xN2gtMy40M2E4LjU3IDguNTcgMCAwIDEgOC41Ni04LjU2djMuNDNjLTIuODMgMC01LjEzIDIuMy01LjEzIDUuMTN6bS0zOS4zNy04LjU1VjE5LjJhNS4xMyA1LjEzIDAgMCAwIDUuMTMtNS4xM2gzLjQzYy0uMDEgNC43Mi0zLjg0IDguNTQtOC41NiA4LjU1em0zNS45MyAzMC44aDMuNDN2Ni44NGgtMy40M3YtNi44NHptLTYuODQgMGgzLjQzdjYuODRoLTMuNDN2LTYuODR6TTU4LjU1IDg5LjM2SDgwLjh2My40M0g1OC41NXYtMy40M3ptMzAuOC04MC40M2gzLjQzdjYuODRoLTMuNDNWOC45M3oiLz48cGF0aCBkPSJNMi4wOCA5Ny45YzAtMTYuMDYgMTMuMDMtMjkuMSAyOS4xLTI5LjFzMjkuMSAxMy4wMyAyOS4xIDI5LjFIMi4wOHoiLz48cGF0aCBkPSJNMjIuNjIgODQuMjNhNi44NCA2Ljg0IDAgMCAxIDYuODQgNi44NHY2Ljg0aC0xMy43di02Ljg0YTYuODQgNi44NCAwIDAgMSA2Ljg1LTYuODR6Ii8+PC9nPjxwYXRoIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTM0LjYgODUuOTRoMy40M3YzLjQzSDM0LjZ2LTMuNDN6bTYuODQgMGgzLjQzdjMuNDNoLTMuNDN2LTMuNDN6Ii8+PC9zdmc+';
    },
    '/rgr': function(e) {
      e.exports = JSON.parse(
        '{"data":{"hostingJson":{"FAQ_DATA":[{"title":"How to contact with Customer Service?","description":"Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!. ","expend":true},{"title":"App installation failed, how to update system information?","description":"Please read the documentation carefully . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum . ","expend":null},{"title":"Website reponse taking time, how to improve?","description":"At first, Please check your internet connection . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .","expend":null},{"title":"New update fixed all bug and issues?","description":"We are giving the update of this theme continuously . You will receive an email Notification when we push an update. Always try to be updated with us .","expend":null}]}}}'
      );
    },
    '1IzR': function(e, t) {
      e.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAf4AAAGuCAMAAABGP5TgAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACLlBMVEW8vLybm5tpaWmYmJiQkJCRkZFvb29VVVV6enq7u7sjIyMAAAC3t7d9fX1QUFAnJycVFRUHBwcEBAQPDw8mJiZISEizs7OLi4sBAQEFBQWPj49gYGAzMzMbGxsNDQ0DAwMLCwsaGho5OTlhYWGZmZkSEhJDQ0NnZ2e1tbVdXV1YWFiysrKwsLC6urpycnIeHh4lJSWsrKyUlJSTk5MUFBSOjo5CQkKhoaEpKSkoKCidnZ2IiIijo6MRERGHh4d5eXmNjY0ICAiBgYFmZmanp6cZGRkWFhYCAgKFhYWpqakYGBgGBgakpKSrq6u5ubk1NTU0NDSvr69+fn44ODgMDAympqYfHx8kJCQQEBA/Pz+GhoZzc3M6OjptbW17e3u2trZJSUlwcHCSkpKMjIygoKCampqCgoKWlpatra1qampsbGwxMTE+Pj5NTU0ODg6ioqJeXl60tLSfn59PT09ZWVmEhIQsLCwhISE7Ozuqqqq4uLgJCQkdHR1XV1cqKioKCgpHR0dTU1OxsbFubm4rKyuVlZUgICClpaWJiYmAgIBaWlpMTExcXFyXl5d1dXVBQUFLS0tWVlZSUlJbW1tjY2NEREQuLi48PDxra2tAQEAiIiKcnJxFRUUXFxdGRkZ3d3dfX19lZWVKSkpUVFQcHBwyMjJ4eHioqKh/f39xcXFkZGQ2NjaDg4MTExMtLS2urq5iYmIwMDB0dHSenp4vLy89PT03Nzd2dnaKior+/v7L3XEbAAAAAWJLR0S5OrgWYAAAC2tJREFUeNrt3Ptb1FYawPGIN4aIwojrQJWLt0UFLV5r8VpRuqJULHitulgVqkWLW+2CVqxa76tWd71UW9ut26621V1bu/5565w3mcnlZCYBsc8zfj8/zZycJC95SXJyzskYBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFKG5OXlDX05uxo6bNiw4b/335vjRozUyg+oHiswTTMvYOGowtFjiorjY0vGFf5h4JGNTzzfVak2iLLXJkwsr6ismjR5SuDqLzaYXDXV1JoWUP2PZmD6q6ePTa9fOWPmAAOrKTL16a+dNdsR6Ov5sZcQTK6qMyOlf048MP1zJ7q3MG/+wCJbYOrTv/ANT6iL3hz8YHJVfaT0L15iBqV/abF3E/FlAwms0NSnf/kKX6wr3hrsYHLWyijpb7DOKU3658etFUtXrW60Pla83f+4/lSuT/8wO/sVa16f2GTn1rOjFx1M7loQIf1r15hB6V9nNSGmzX9+J25++x35Vt7Q77jWm9r0tyyxLvgbknfzUePfla+tbYMaTO7amDwym0JVHb7ZDEz/FjnCW+3v2+Tq+15/w9pu6tM/TRU2rkwV7NDs6EUHk7t2qmvjn8NUbbevqJr075JUlaVLlspF9/3+hbW7WJ/+PVLY7ijam1BFHYMXTA7rUMdlRPaKne857gy+9E9QxR84i/apov39iqp5kalP/zhV9qGmrGvQgslls9RxmZutWmzWATND+g+qM3BirWsVSeGb2Tat81FyzalVvvR3q7ZeYrGr8iG1nzWDFkwu+4tqFO/MUqu+xMr7gZHa9H/sP9/sJ7cZ/QiqoyK55uESX/rrtSex6h4yawYpmJx2JHlUPslS6a/2WV+weIM2/Z+ok7LHXdh7VJ2F0WOqPibtEX/6P1V73+epf1yV7h6cYHJarC95VE5kqVUlyU98ttPQpr9HFY7xrib/NQuTHxvmKrs9NdqkuMVdOlpdzGdq0n+y7FTX6crPPVuRS9Oh0MHAdlB7OnlJ+s8kB9+06d+hCj/zriY9StvUftTJZx4966rQKc/nx6pdpeeS9+7EckOTfr2prot/9mBgO68OSrZB1WT6yz9oTn7Upv+CKvSNEY5XxRfVZ2limutdFeSMbNrjKmyZZ6cvZPqHqK1URQgGlkvqom6dfd3rAgZGq8y+C9bJpU2/PBP+zbtagyo+7qxjXnYst/4ltrvXuqIuCMnGaMj0X1Vb+SJKMBCTksdk9vM2QP21guRDVeuR63v8tfb/PXV31qZfNdVM3/9OrFQ9v8mXTumtLU83yXZL772nL05duyvU7T1c+veqrcTXRgkGYnXymPyj9pRzePTGsAwraNOv2o99AVtPWE+Vh2XrN+2FvdJiK3K3+2Sk55L6HCb9sVvqIdG8EC0YJLWoQ3f7S9MlcTH4IOnSXy0NOH9l6WuxR1ouytY3WF/lHt3oHoePqZGeTb3qS/b07yy0Qt/fHDEYPPe+qVfSGbSGLv1rVdkb/srS+zrE+tYtl5glcrqXSVf9dPcaqnO29I58yZj+hva8j9/ps+J9N/3sEDIYPJcXkH7zTEvAGrr0T9E06pWbakHq/J4j1+m7yc8nv1Kfj7i6Zo1DaqTHHs7LmP5l6WArbzmme4UNBobxtX0E10wv62xuOXTvij2qtz+mX0OX/rnum3raXbWgPvX9G9n2OcOeZuAZgm8eo/4l7F1nTP/kVPab2p0T+UIHA6NADmDx9tStc/FN66B+q19Dl/75qmyLv/IJtSA9y6ZWZumtqjbyZSfn3fXVSM+Kg/bXjOn/p+NaVfxdXfRg0Cvn+v07zkLrFD3ao11Fl/5zqmyBv7KkyDERb6E8613vkZlcXe7qn6ubQ3rwOWP6/+W6WY1NndXhg3nlyaSKsWvdpdfkiOpHxyKl/6rviEtPT+lpaWC4HzBkpGd9uiBj+r/NP1QzqqH+WqVEm7AfKCIEg57h33/j7fLtlVvCZu3dX5f+5UHXW5mIsdVZNMlxyfaMvqux59Yf0gWhun1aumRrpXOiBwOdf8sB1fb+6NI/PHNryzXFqi41X9B84K5cr54Ev3eUhOz0bZdHyC+bIwcDnZgMoT3ULQt+8PvRX1make6ry0929t0ztoyWn31pCzvid102eC96MNC5rY6Udqa/Lv1tquyIv7L0tNxxF8o92CyqcRerfW52dTeFTX/sjNrio34EA428oEOoT3+3NOT8laWf1dODaN1a+twNTnkS3OsqC5t+ayZXYmb0YKAhPWoFukXaIZ+j6gHCX1mNslS4m5DWyJ9pnnZ2+D1uVbfvt1zULJO4fF6XKd5ueYAdHzkY6GyVtpRukTb9Mruu11tXxliL3IXp+eL/cZTeMbM4nDFgObNnRQ4GOnJ9/q9uUYbpHt6JfNYMiwmusm3pjMYdUzIGmH4JYGXUYKD1QB2qLbpF2vRf12dI5le5Zt1Zc/7k/fzZ6XG6COkfVWP4XHFcTsIH84qbubxw36Wu0f4FM9ShGqlbR5t+mXDzkbeuzK584iiple6+9TXyaJnedbj017124kZRQvNMv1/V2RctmFfdL+qINHb7FsjEeW3/aIaJ3uu9dWUmp7OFL8N0fW1WjhKpnvpw6V+nPpb7m2/y5vHeaMG86mpVa8g/BvpYNaQTj3Xr6F/zUN3ETe752tabFVWOkg5poSdf0JSuhZ+DphUo/gc/6TL0dUfuln+RtkjBQGbb3fUWq3FX84Z2FX365b2qe+5CeRq/li6QMR15R6tTfnnnQyMDf/rlbf5x3opyu7df4QkXDIyH6pgUe+a/rZO3Oc9rV9GnX24jBa6rsvVWpWN2lRrTMY/KBdga8b9nBPOnP18bcJ06s635oWGDgfGDDJbcdhXGZCR9Ta12FX36jUeqeKWzSN6pdky6WyoJP2V9lQe0vrNGIH/6q2Vyn/uZpFkafk2pCQphgoFh/1aGa2ZPs8yKCZoWE5D+emnK/eQoqfA0LB5La/9X+6zsaZV7THA/nKbT15ri5UxtrzVjLT0/IUQwSOqxpsqOTE32arB+COdEwBoB6bcevZpm2d+XrfA2wJ/KhTv9bv4T2dNDI4gm/aNktnBiRirgs7Jn14uC2YOBYqXArGpXl86OL6wfVZl9MmCFoPSvtf6RfqtPns3LrRmD5elfXPqflNxyrCO/3hQP/F1O3ZDPLivAiQ+SAdeWjZanF7P1lyjBwJKaMJso2nTfnjZvFgXekYPSb5xPWOs23T9m/zBPY7rvzcrII+elvk3KzgS9VKId8dtr/1CbuXnj6lL7c9+uKMEgZbJ9pBzOBL8LE5h+40mjdzMVhamFMWmOFbvfrx8h9YIex/QDvuf7/AF/5X0xMWMwcJhf5DlQia7q4NrB6TeeeX4duOhZepk8YnrXi/0qO3ym31fAeP/CTd6A7/qHATIFA6fqfascxyn+dEqmyhnSb7R86jgxK79zNB+mSHffcW8r/6BcmefpO/+CpnvEdhQ4T+unHbqVg4OBR2zXwx83LomXji35+nLdQDbUnT+u5EC8aeqmq8u6B7KdrIau/G3j5orSJYvGXX4cVOelBQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8zv4PcVIf1NK20FwAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDEtMTZUMDA6MzY6MjAtMDY6MDDyLJIKAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTAxLTE2VDAwOjM2OjIwLTA2OjAwg3EqtgAAAABJRU5ErkJggg==';
    },
    '1YaQ': function(e, t) {
      e.exports =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDMuMTgiIGhlaWdodD0iMTAxLjUzIj48c3R5bGU+PCFbQ0RBVEFbLkJ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kfS5De3N0cm9rZS1taXRlcmxpbWl0OjEwfV1dPjwvc3R5bGU+PGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMGY0NmNhIiBzdHJva2Utd2lkdGg9IjIiIGNsYXNzPSJCIEMiPjxnIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PHBhdGggZD0iTTE5LjMyIDE4LjQ3TDIuODggMjUuNTJsNDguNTYgMjAuMTIgNDguODUtMjAuMTItMTcuODctNy42Nm0tMTEuMi00LjhMNTguMSA3LjQiLz48cGF0aCBkPSJNNDMuNTMgOC4xTDMyIDEzLjAzIi8+PC9nPjxwYXRoIGQ9Ik0yLjg4IDI1LjUydjUzLjIybDQ4LjU2IDIwLjczVjQ1LjY0eiIvPjxwYXRoIGQ9Ik0xMDAuMyAyNS41Mkw1MS40NCA0NS42NHY1My44M2w0OC44Ni0yMC43M3ptLTQ5LjI2IDMuNWMtMy45MyAwLTcuMS0xLjMtNy4xLTIuOXY4LjM0YzAgMS42IDMuMiAyLjkgNy4xIDIuOSAzLjkzIDAgNy4xLTEuMyA3LjEtMi45di04LjM0YzAgMS42LTMuMTggMi45LTcuMSAyLjl6Ii8+PHBhdGggZD0iTTUxLjA0IDI5LjAzYzMuOTMgMCA3LjEtMS4zIDcuMS0yLjlzLTMuMTgtMi45LTcuMS0yLjktNy4xIDEuMy03LjEgMi45Yy0uMDEgMS42IDMuMTggMi45IDcuMSAyLjl6TTI2LjkgMTguMTJjLTMuOTMgMC03LjEtMS4zLTcuMS0yLjl2OC4zNGMwIDEuNiAzLjIgMi45IDcuMSAyLjkgMy45MyAwIDcuMS0xLjMgNy4xLTIuOVYxNS4yYzAgMS42LTMuMTggMi45LTcuMSAyLjl6Ii8+PHBhdGggZD0iTTI2LjkgMTguMTJjMy45MyAwIDcuMS0xLjMgNy4xLTIuOXMtMy4xOC0yLjktNy4xLTIuOS03LjEgMS4zLTcuMSAyLjkgMy4xOCAyLjkgNy4xIDIuOXptNDguMjguNjhjLTMuOTMgMC03LjEtMS4zLTcuMS0yLjl2OC4zNGMwIDEuNiAzLjIgMi45IDcuMSAyLjkgMy45MyAwIDcuMS0xLjMgNy4xLTIuOVYxNS45Yy4wMSAxLjYtMy4xOCAyLjktNy4xIDIuOXoiLz48cGF0aCBkPSJNNzUuMTggMTguOGMzLjkzIDAgNy4xLTEuMyA3LjEtMi45Uzc5LjEgMTMgNzUuMTggMTNzLTcuMSAxLjMtNy4xIDIuOSAzLjIgMi45IDcuMSAyLjl6TTUxLjA0IDcuODhjLTMuOTMgMC03LjEtMS4zLTcuMS0yLjl2OC4zNGMwIDEuNiAzLjIgMi45IDcuMSAyLjkgMy45MyAwIDcuMS0xLjMgNy4xLTIuOVY0Ljk3YzAgMS42LTMuMTggMi45LTcuMSAyLjl6Ii8+PHBhdGggZD0iTTUxLjA0IDcuODhjMy45MyAwIDcuMS0xLjMgNy4xLTIuOXMtMy4xOC0yLjktNy4xLTIuOS03LjEgMS4zLTcuMSAyLjljLS4wMSAxLjYgMy4xOCAyLjkgNy4xIDIuOXoiLz48L2c+PC9zdmc+';
    },
    '1kx4': function(e, t, n) {
      n('rmZQ');
      e.exports = function(e) {
        return e
          .replace(/[A-Z]/g, function(e) {
            return '-' + e.toLowerCase();
          })
          .toLowerCase();
      };
    },
    '35q9': function(e, t) {
      e.exports =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjZmZmIiBzdHJva2U9IiMwZjQ2Y2EiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48cGF0aCBkPSJNNzIuMjMgOC45MmMtMTEuODMgMC0xOC41NyA1LjktMjIuMTcgMTAuNS0zLjUtNC42Mi0xMC40OC0xMC41LTIyLjMtMTAuNS0yMC45NSAwLTI1LjkgMjAuNC0yNS45IDI3LjU2IDAgMTguNzQgMTcuMTIgMjkuMDUgNDUuNyA1My44Mi42LjUzIDEuNTQuODMgMi41Ljc3LjY4LS4wNCAxLjM3LS4yNCAyLS43NyAyNS41LTIyLjEgNDYuMDgtMzMuNCA0Ni4wOC01My44MiAwLTE1LjctMTEuMjYtMjcuNTYtMjUuOS0yNy41NmgweiIvPjxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTcuODIgNTMuNThoMjIuNmw2LjQ4LTEzLjcgMTMuNyAyNy4zNyA3LjItMTMuNjhoMTIuMjUiLz48L3N2Zz4=';
    },
    '4I+i': function(e, t, n) {
      e.exports =
        n.p + 'static/sliderimage2-4167d76debd1caa5f1380afcc9b66e77.jpg';
    },
    '4OKs': function(e, t) {
      e.exports =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDMuMTgiIGhlaWdodD0iMTAxLjUzIiBmaWxsPSJub25lIiBzdHJva2U9IiMwZjQ2Y2EiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48cGF0aCBkPSJNNTUuMDggNzIuMjVoMHoiLz48cGF0aCBkPSJNNzMuMDcgNTQuMjVoLTE4djE4YzkuMjItMS41IDE2LjUtOC44IDE4LTE4em0tMTgtMjQuOTd2MThoMThjLTEuNS05LjIyLTguOC0xNi41LTE4LTE4ek04MC4xIDU0LjI1Qzc4LjUzIDY3LjMgNjguMTQgNzcuNyA1NS4wOCA3OS4zdjIwLjY1YzI0LjQtMS43IDQzLjk4LTIxLjI4IDQ1LjctNDUuN0g4MC4xek01NS4wOCAxLjZ2MjAuNjVjMTMuMDYgMS42IDIzLjQ1IDExLjk3IDI1LjA0IDI1LjA0aDIwLjY1Yy0xLjcyLTI0LjQzLTIxLjI3LTQ0LTQ1LjctNDUuN3pNMi40IDQ3LjI4aDIwLjY1YzEuNi0xMy4wNiAxMS45Ny0yMy40NSAyNS4wNC0yNS4wNFYxLjZDMjMuNyAzLjMgNC4xMyAyMi44NiAyLjQgNDcuMjh6bTI3LjcgMGgxOHYtMThjLTkuMjIgMS41LTE2LjUgOC43OC0xOCAxOHptLTcuMDMgNi45N0gyLjRjMS43MiAyNC40IDIxLjI4IDQzLjk4IDQ1LjcgNDUuN1Y3OS4zYy0xMy4wNi0xLjYtMjMuNDUtMTItMjUuMDMtMjUuMDV6bTcuMDMgMGMxLjUgOS4yIDguNzggMTYuNSAxOCAxOHYtMThoLTE4eiIvPjwvc3ZnPg==';
    },
    '58Qm': function(e, t, n) {
      'use strict';
      var a = n('ERkP'),
        i = n.n(a),
        r = n('bG7j');
      t.a = function(e) {
        var t = e.children;
        return i.a.createElement(r.f, { className: 'glide__slide' }, t);
      };
    },
    '6c1n': function(e, t, n) {
      'use strict';
      n('LnO1'),
        n('3eMz'),
        n('dtAy'),
        n('4oWw'),
        n('tRfV'),
        n('DjDK'),
        n('8NJi');
      var a = n('IGGJ');
      (t.__esModule = !0), (t.default = void 0);
      var i,
        r = a(n('1Pcy')),
        o = a(n('W/Kd')),
        c = a(n('LdEA')),
        s = a(n('97Jx')),
        l = a(n('ERkP')),
        u = a(n('aWzz')),
        d = function(e) {
          var t = (0, s.default)({}, e),
            n = t.resolutions,
            a = t.sizes,
            i = t.critical;
          return (
            n && ((t.fixed = n), delete t.resolutions),
            a && ((t.fluid = a), delete t.sizes),
            i && (t.loading = 'eager'),
            t.fluid && (t.fluid = b([].concat(t.fluid))),
            t.fixed && (t.fixed = b([].concat(t.fixed))),
            t
          );
        },
        p = function(e) {
          var t = e.media;
          return !!t && y && !!window.matchMedia(t).matches;
        },
        g = function(e) {
          var t = e.fluid,
            n = e.fixed;
          return f(t || n).src;
        },
        f = function(e) {
          if (
            y &&
            (function(e) {
              return (
                !!e &&
                Array.isArray(e) &&
                e.some(function(e) {
                  return void 0 !== e.media;
                })
              );
            })(e)
          ) {
            var t = e.findIndex(p);
            if (-1 !== t) return e[t];
          }
          return e[0];
        },
        A = Object.create({}),
        m = function(e) {
          var t = d(e),
            n = g(t);
          return A[n] || !1;
        },
        M =
          'undefined' != typeof HTMLImageElement &&
          'loading' in HTMLImageElement.prototype,
        y = 'undefined' != typeof window,
        L = y && window.IntersectionObserver,
        j = new WeakMap();
      function h(e) {
        return e.map(function(e) {
          var t = e.src,
            n = e.srcSet,
            a = e.srcSetWebp,
            i = e.media,
            r = e.sizes;
          return l.default.createElement(
            l.default.Fragment,
            { key: t },
            a &&
              l.default.createElement('source', {
                type: 'image/webp',
                media: i,
                srcSet: a,
                sizes: r,
              }),
            l.default.createElement('source', { media: i, srcSet: n, sizes: r })
          );
        });
      }
      function b(e) {
        var t = [],
          n = [];
        return (
          e.forEach(function(e) {
            return (e.media ? t : n).push(e);
          }),
          [].concat(t, n)
        );
      }
      function N(e) {
        return e.map(function(e) {
          var t = e.src,
            n = e.media,
            a = e.tracedSVG;
          return l.default.createElement('source', {
            key: t,
            media: n,
            srcSet: a,
          });
        });
      }
      function I(e) {
        return e.map(function(e) {
          var t = e.src,
            n = e.media,
            a = e.base64;
          return l.default.createElement('source', {
            key: t,
            media: n,
            srcSet: a,
          });
        });
      }
      function x(e, t) {
        var n = e.srcSet,
          a = e.srcSetWebp,
          i = e.media,
          r = e.sizes;
        return (
          '<source ' +
          (t ? "type='image/webp' " : '') +
          (i ? 'media="' + i + '" ' : '') +
          'srcset="' +
          (t ? a : n) +
          '" ' +
          (r ? 'sizes="' + r + '" ' : '') +
          '/>'
        );
      }
      var S = function(e, t) {
          var n =
            (void 0 === i &&
              'undefined' != typeof window &&
              window.IntersectionObserver &&
              (i = new window.IntersectionObserver(
                function(e) {
                  e.forEach(function(e) {
                    if (j.has(e.target)) {
                      var t = j.get(e.target);
                      (e.isIntersecting || e.intersectionRatio > 0) &&
                        (i.unobserve(e.target), j.delete(e.target), t());
                    }
                  });
                },
                { rootMargin: '200px' }
              )),
            i);
          return (
            n && (n.observe(e), j.set(e, t)),
            function() {
              n.unobserve(e), j.delete(e);
            }
          );
        },
        w = function(e) {
          var t = e.src ? 'src="' + e.src + '" ' : 'src="" ',
            n = e.sizes ? 'sizes="' + e.sizes + '" ' : '',
            a = e.srcSet ? 'srcset="' + e.srcSet + '" ' : '',
            i = e.title ? 'title="' + e.title + '" ' : '',
            r = e.alt ? 'alt="' + e.alt + '" ' : 'alt="" ',
            o = e.width ? 'width="' + e.width + '" ' : '',
            c = e.height ? 'height="' + e.height + '" ' : '',
            s = e.crossOrigin ? 'crossorigin="' + e.crossOrigin + '" ' : '',
            l = e.loading ? 'loading="' + e.loading + '" ' : '',
            u = e.draggable ? 'draggable="' + e.draggable + '" ' : '';
          return (
            '<picture>' +
            e.imageVariants
              .map(function(e) {
                return (e.srcSetWebp ? x(e, !0) : '') + x(e);
              })
              .join('') +
            '<img ' +
            l +
            o +
            c +
            n +
            a +
            t +
            r +
            i +
            s +
            u +
            'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'
          );
        },
        v = function(e) {
          var t = e.src,
            n = e.imageVariants,
            a = e.generateSources,
            i = e.spreadProps,
            r = e.ariaHidden,
            o = l.default.createElement(
              E,
              (0, s.default)({ src: t }, i, { ariaHidden: r })
            );
          return n.length > 1
            ? l.default.createElement('picture', null, a(n), o)
            : o;
        },
        E = l.default.forwardRef(function(e, t) {
          var n = e.sizes,
            a = e.srcSet,
            i = e.src,
            r = e.style,
            o = e.onLoad,
            u = e.onError,
            d = e.loading,
            p = e.draggable,
            g = e.ariaHidden,
            f = (0, c.default)(e, [
              'sizes',
              'srcSet',
              'src',
              'style',
              'onLoad',
              'onError',
              'loading',
              'draggable',
              'ariaHidden',
            ]);
          return l.default.createElement(
            'img',
            (0, s.default)(
              { 'aria-hidden': g, sizes: n, srcSet: a, src: i },
              f,
              {
                onLoad: o,
                onError: u,
                ref: t,
                loading: d,
                draggable: p,
                style: (0, s.default)(
                  {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  },
                  r
                ),
              }
            )
          );
        });
      E.propTypes = {
        style: u.default.object,
        onError: u.default.func,
        onLoad: u.default.func,
      };
      var D = (function(e) {
        function t(t) {
          var n;
          ((n = e.call(this, t) || this).seenBefore = y && m(t)),
            (n.isCritical = 'eager' === t.loading || t.critical),
            (n.addNoScript = !(n.isCritical && !t.fadeIn)),
            (n.useIOSupport = !M && L && !n.isCritical && !n.seenBefore);
          var a = n.isCritical || (y && (M || !n.useIOSupport));
          return (
            (n.state = {
              isVisible: a,
              imgLoaded: !1,
              imgCached: !1,
              fadeIn: !n.seenBefore && t.fadeIn,
            }),
            (n.imageRef = l.default.createRef()),
            (n.handleImageLoaded = n.handleImageLoaded.bind((0, r.default)(n))),
            (n.handleRef = n.handleRef.bind((0, r.default)(n))),
            n
          );
        }
        (0, o.default)(t, e);
        var n = t.prototype;
        return (
          (n.componentDidMount = function() {
            if (
              (this.state.isVisible &&
                'function' == typeof this.props.onStartLoad &&
                this.props.onStartLoad({ wasCached: m(this.props) }),
              this.isCritical)
            ) {
              var e = this.imageRef.current;
              e && e.complete && this.handleImageLoaded();
            }
          }),
          (n.componentWillUnmount = function() {
            this.cleanUpListeners && this.cleanUpListeners();
          }),
          (n.handleRef = function(e) {
            var t = this;
            this.useIOSupport &&
              e &&
              (this.cleanUpListeners = S(e, function() {
                var e = m(t.props);
                t.state.isVisible ||
                  'function' != typeof t.props.onStartLoad ||
                  t.props.onStartLoad({ wasCached: e }),
                  t.setState({ isVisible: !0 }, function() {
                    return t.setState({
                      imgLoaded: e,
                      imgCached: !!t.imageRef.current.currentSrc,
                    });
                  });
              }));
          }),
          (n.handleImageLoaded = function() {
            var e, t, n;
            (e = this.props),
              (t = d(e)),
              (n = g(t)),
              (A[n] = !0),
              this.setState({ imgLoaded: !0 }),
              this.props.onLoad && this.props.onLoad();
          }),
          (n.render = function() {
            var e = d(this.props),
              t = e.title,
              n = e.alt,
              a = e.className,
              i = e.style,
              r = void 0 === i ? {} : i,
              o = e.imgStyle,
              c = void 0 === o ? {} : o,
              u = e.placeholderStyle,
              p = void 0 === u ? {} : u,
              g = e.placeholderClassName,
              A = e.fluid,
              m = e.fixed,
              M = e.backgroundColor,
              y = e.durationFadeIn,
              L = e.Tag,
              j = e.itemProp,
              b = e.loading,
              x = e.draggable,
              S = !1 === this.state.fadeIn || this.state.imgLoaded,
              D = !0 === this.state.fadeIn && !this.state.imgCached,
              C = (0, s.default)(
                {
                  opacity: S ? 1 : 0,
                  transition: D ? 'opacity ' + y + 'ms' : 'none',
                },
                c
              ),
              T = 'boolean' == typeof M ? 'lightgray' : M,
              z = { transitionDelay: y + 'ms' },
              O = (0, s.default)(
                { opacity: this.state.imgLoaded ? 0 : 1 },
                D && z,
                {},
                c,
                {},
                p
              ),
              k = {
                title: t,
                alt: this.state.isVisible ? '' : n,
                style: O,
                className: g,
                itemProp: j,
              };
            if (A) {
              var Y = A,
                P = f(A);
              return l.default.createElement(
                L,
                {
                  className: (a || '') + ' gatsby-image-wrapper',
                  style: (0, s.default)(
                    { position: 'relative', overflow: 'hidden' },
                    r
                  ),
                  ref: this.handleRef,
                  key: 'fluid-' + JSON.stringify(P.srcSet),
                },
                l.default.createElement(L, {
                  'aria-hidden': !0,
                  style: {
                    width: '100%',
                    paddingBottom: 100 / P.aspectRatio + '%',
                  },
                }),
                T &&
                  l.default.createElement(L, {
                    'aria-hidden': !0,
                    title: t,
                    style: (0, s.default)(
                      {
                        backgroundColor: T,
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        opacity: this.state.imgLoaded ? 0 : 1,
                        right: 0,
                        left: 0,
                      },
                      D && z
                    ),
                  }),
                P.base64 &&
                  l.default.createElement(v, {
                    ariaHidden: !0,
                    src: P.base64,
                    spreadProps: k,
                    imageVariants: Y,
                    generateSources: I,
                  }),
                P.tracedSVG &&
                  l.default.createElement(v, {
                    ariaHidden: !0,
                    src: P.tracedSVG,
                    spreadProps: k,
                    imageVariants: Y,
                    generateSources: N,
                  }),
                this.state.isVisible &&
                  l.default.createElement(
                    'picture',
                    null,
                    h(Y),
                    l.default.createElement(E, {
                      alt: n,
                      title: t,
                      sizes: P.sizes,
                      src: P.src,
                      crossOrigin: this.props.crossOrigin,
                      srcSet: P.srcSet,
                      style: C,
                      ref: this.imageRef,
                      onLoad: this.handleImageLoaded,
                      onError: this.props.onError,
                      itemProp: j,
                      loading: b,
                      draggable: x,
                    })
                  ),
                this.addNoScript &&
                  l.default.createElement('noscript', {
                    dangerouslySetInnerHTML: {
                      __html: w(
                        (0, s.default)({ alt: n, title: t, loading: b }, P, {
                          imageVariants: Y,
                        })
                      ),
                    },
                  })
              );
            }
            if (m) {
              var Q = m,
                R = f(m),
                B = (0, s.default)(
                  {
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'inline-block',
                    width: R.width,
                    height: R.height,
                  },
                  r
                );
              return (
                'inherit' === r.display && delete B.display,
                l.default.createElement(
                  L,
                  {
                    className: (a || '') + ' gatsby-image-wrapper',
                    style: B,
                    ref: this.handleRef,
                    key: 'fixed-' + JSON.stringify(R.srcSet),
                  },
                  T &&
                    l.default.createElement(L, {
                      'aria-hidden': !0,
                      title: t,
                      style: (0, s.default)(
                        {
                          backgroundColor: T,
                          width: R.width,
                          opacity: this.state.imgLoaded ? 0 : 1,
                          height: R.height,
                        },
                        D && z
                      ),
                    }),
                  R.base64 &&
                    l.default.createElement(v, {
                      ariaHidden: !0,
                      src: R.base64,
                      spreadProps: k,
                      imageVariants: Q,
                      generateSources: I,
                    }),
                  R.tracedSVG &&
                    l.default.createElement(v, {
                      ariaHidden: !0,
                      src: R.tracedSVG,
                      spreadProps: k,
                      imageVariants: Q,
                      generateSources: N,
                    }),
                  this.state.isVisible &&
                    l.default.createElement(
                      'picture',
                      null,
                      h(Q),
                      l.default.createElement(E, {
                        alt: n,
                        title: t,
                        width: R.width,
                        height: R.height,
                        sizes: R.sizes,
                        src: R.src,
                        crossOrigin: this.props.crossOrigin,
                        srcSet: R.srcSet,
                        style: C,
                        ref: this.imageRef,
                        onLoad: this.handleImageLoaded,
                        onError: this.props.onError,
                        itemProp: j,
                        loading: b,
                        draggable: x,
                      })
                    ),
                  this.addNoScript &&
                    l.default.createElement('noscript', {
                      dangerouslySetInnerHTML: {
                        __html: w(
                          (0, s.default)({ alt: n, title: t, loading: b }, R, {
                            imageVariants: Q,
                          })
                        ),
                      },
                    })
                )
              );
            }
            return null;
          }),
          t
        );
      })(l.default.Component);
      D.defaultProps = {
        fadeIn: !0,
        durationFadeIn: 500,
        alt: '',
        Tag: 'div',
        loading: 'lazy',
      };
      var C = u.default.shape({
          width: u.default.number.isRequired,
          height: u.default.number.isRequired,
          src: u.default.string.isRequired,
          srcSet: u.default.string.isRequired,
          base64: u.default.string,
          tracedSVG: u.default.string,
          srcWebp: u.default.string,
          srcSetWebp: u.default.string,
          media: u.default.string,
        }),
        T = u.default.shape({
          aspectRatio: u.default.number.isRequired,
          src: u.default.string.isRequired,
          srcSet: u.default.string.isRequired,
          sizes: u.default.string.isRequired,
          base64: u.default.string,
          tracedSVG: u.default.string,
          srcWebp: u.default.string,
          srcSetWebp: u.default.string,
          media: u.default.string,
        });
      D.propTypes = {
        resolutions: C,
        sizes: T,
        fixed: u.default.oneOfType([C, u.default.arrayOf(C)]),
        fluid: u.default.oneOfType([T, u.default.arrayOf(T)]),
        fadeIn: u.default.bool,
        durationFadeIn: u.default.number,
        title: u.default.string,
        alt: u.default.string,
        className: u.default.oneOfType([u.default.string, u.default.object]),
        critical: u.default.bool,
        crossOrigin: u.default.oneOfType([u.default.string, u.default.bool]),
        style: u.default.object,
        imgStyle: u.default.object,
        placeholderStyle: u.default.object,
        placeholderClassName: u.default.string,
        backgroundColor: u.default.oneOfType([
          u.default.string,
          u.default.bool,
        ]),
        onLoad: u.default.func,
        onError: u.default.func,
        onStartLoad: u.default.func,
        Tag: u.default.string,
        itemProp: u.default.string,
        loading: u.default.oneOf(['auto', 'lazy', 'eager']),
        draggable: u.default.bool,
      };
      var z = D;
      t.default = z;
    },
    '7Ub4': function(e, t, n) {
      'use strict';
      n('qCVI'),
        n('Yyzt'),
        n('+5EW'),
        n('RwQI'),
        n('cM8k'),
        n('3EZN'),
        n('4SWW'),
        n('r0id'),
        n('lE7+'),
        n('LnO1'),
        n('3eMz'),
        n('dtAy'),
        n('DB+v'),
        n('PN9k'),
        n('XjK0'),
        n('SCO9'),
        n('UQCJ'),
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var a = s(n('ERkP')),
        i = n('y1MW'),
        r = s(n('Rkrg')),
        o = s(n('vTYv')),
        c = n('M4TR');
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function l(e) {
        return (l =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function u() {
        return (u =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          }).apply(this, arguments);
      }
      function d(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(n, !0).forEach(function(t) {
                M(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : d(n).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function g(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            'value' in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      function f(e) {
        return (f = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function A(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function m(e, t) {
        return (m =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function M(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var y = (0, c.canUseDOM)() && n('qrWy'),
        L = (function(e) {
          function t(e) {
            var n;
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, t),
              (n = (function(e, t) {
                return !t || ('object' !== l(t) && 'function' != typeof t)
                  ? A(e)
                  : t;
              })(this, f(t).call(this, e))),
              M(A(n), 'innerSliderRefHandler', function(e) {
                return (n.innerSlider = e);
              }),
              M(A(n), 'slickPrev', function() {
                return n.innerSlider.slickPrev();
              }),
              M(A(n), 'slickNext', function() {
                return n.innerSlider.slickNext();
              }),
              M(A(n), 'slickGoTo', function(e) {
                var t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
                return n.innerSlider.slickGoTo(e, t);
              }),
              M(A(n), 'slickPause', function() {
                return n.innerSlider.pause('paused');
              }),
              M(A(n), 'slickPlay', function() {
                return n.innerSlider.autoPlay('play');
              }),
              (n.state = { breakpoint: null }),
              (n._responsiveMediaHandlers = []),
              n
            );
          }
          var n, s, d;
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function'
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && m(e, t);
            })(t, e),
            (n = t),
            (s = [
              {
                key: 'media',
                value: function(e, t) {
                  y.register(e, t),
                    this._responsiveMediaHandlers.push({
                      query: e,
                      handler: t,
                    });
                },
              },
              {
                key: 'UNSAFE_componentWillMount',
                value: function() {
                  var e = this;
                  if (this.props.responsive) {
                    var t = this.props.responsive.map(function(e) {
                      return e.breakpoint;
                    });
                    t.sort(function(e, t) {
                      return e - t;
                    }),
                      t.forEach(function(n, a) {
                        var i;
                        (i =
                          0 === a
                            ? (0, r.default)({ minWidth: 0, maxWidth: n })
                            : (0, r.default)({
                                minWidth: t[a - 1] + 1,
                                maxWidth: n,
                              })),
                          (0, c.canUseDOM)() &&
                            e.media(i, function() {
                              e.setState({ breakpoint: n });
                            });
                      });
                    var n = (0, r.default)({ minWidth: t.slice(-1)[0] });
                    (0, c.canUseDOM)() &&
                      this.media(n, function() {
                        e.setState({ breakpoint: null });
                      });
                  }
                },
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  this._responsiveMediaHandlers.forEach(function(e) {
                    y.unregister(e.query, e.handler);
                  });
                },
              },
              {
                key: 'render',
                value: function() {
                  var e,
                    t,
                    n = this;
                  (e = this.state.breakpoint
                    ? 'unslick' ===
                      (t = this.props.responsive.filter(function(e) {
                        return e.breakpoint === n.state.breakpoint;
                      }))[0].settings
                      ? 'unslick'
                      : p({}, o.default, {}, this.props, {}, t[0].settings)
                    : p({}, o.default, {}, this.props)).centerMode &&
                    (e.slidesToScroll, (e.slidesToScroll = 1)),
                    e.fade &&
                      (e.slidesToShow,
                      e.slidesToScroll,
                      (e.slidesToShow = 1),
                      (e.slidesToScroll = 1));
                  var r = a.default.Children.toArray(this.props.children);
                  (r = r.filter(function(e) {
                    return 'string' == typeof e ? !!e.trim() : !!e;
                  })),
                    e.variableWidth &&
                      (e.rows > 1 || e.slidesPerRow > 1) &&
                      (console.warn(
                        'variableWidth is not supported in case of rows > 1 or slidesPerRow > 1'
                      ),
                      (e.variableWidth = !1));
                  for (
                    var c = [], s = null, l = 0;
                    l < r.length;
                    l += e.rows * e.slidesPerRow
                  ) {
                    for (
                      var d = [], g = l;
                      g < l + e.rows * e.slidesPerRow;
                      g += e.slidesPerRow
                    ) {
                      for (
                        var f = [], A = g;
                        A < g + e.slidesPerRow &&
                        (e.variableWidth &&
                          r[A].props.style &&
                          (s = r[A].props.style.width),
                        !(A >= r.length));
                        A += 1
                      )
                        f.push(
                          a.default.cloneElement(r[A], {
                            key: 100 * l + 10 * g + A,
                            tabIndex: -1,
                            style: {
                              width: ''.concat(100 / e.slidesPerRow, '%'),
                              display: 'inline-block',
                            },
                          })
                        );
                      d.push(
                        a.default.createElement('div', { key: 10 * l + g }, f)
                      );
                    }
                    e.variableWidth
                      ? c.push(
                          a.default.createElement(
                            'div',
                            { key: l, style: { width: s } },
                            d
                          )
                        )
                      : c.push(a.default.createElement('div', { key: l }, d));
                  }
                  if ('unslick' === e) {
                    var m = 'regular slider ' + (this.props.className || '');
                    return a.default.createElement('div', { className: m }, c);
                  }
                  return (
                    c.length <= e.slidesToShow && (e.unslick = !0),
                    a.default.createElement(
                      i.InnerSlider,
                      u(
                        {
                          style: this.props.style,
                          ref: this.innerSliderRefHandler,
                        },
                        e
                      ),
                      c
                    )
                  );
                },
              },
            ]) && g(n.prototype, s),
            d && g(n, d),
            t
          );
        })(a.default.Component);
      t.default = L;
    },
    '8NJi': function(e, t, n) {
      'use strict';
      n('kDPR')('fixed', function(e) {
        return function() {
          return e(this, 'tt', '', '');
        };
      });
    },
    '8oSd': function(e, t, n) {
      'use strict';
      n('Bu8c'),
        n('UQCJ'),
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.search = void 0);
      t.search = {
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
    '9WH7': function(e) {
      e.exports = JSON.parse(
        '{"data":{"hostingJson":{"TESTIMONIALSS":[{"name":"Denny Hilguston","designation":"CEO of Dell Co.","review":"Best working experience  with this amazing team & in future, we want to work together","avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsSAAALEgHS3X78AAAA0UlEQVQY0y2QTQsBURSGr4+NlR9iY2Eh/8HWzsjGRlKzmB1RUkpSlIkkYqWQ5TSf5q6kZK2Uf+K5ulNPz3vuOfd0GxGGYULwBUGQ833fpDbwDMqe51m4jW1cAJu5ItTIBrMlers4jrNqRxRFQtBQWdDM0HzAmrMjDMhb/MFfqJPvUCVf4MriBn7hvH5UUkgpheM4KXVAcwE9OHFxA3PyG24wpJa4D2e1kHoET3JF3//vUSGt7Lpui4EpdQePYQlNmHC2xxZe4a7+HQedTXVfPewHv52+pUAmQdcAAAAASUVORK5CYII=","aspectRatio":4.683333333333334,"src":"/static/edf1383bdf29a8c274140af20bb3ff54/bc8e0/yamaha.png","srcSet":"/static/edf1383bdf29a8c274140af20bb3ff54/8ac63/yamaha.png 200w,\\n/static/edf1383bdf29a8c274140af20bb3ff54/3891b/yamaha.png 400w,\\n/static/edf1383bdf29a8c274140af20bb3ff54/bc8e0/yamaha.png 800w,\\n/static/edf1383bdf29a8c274140af20bb3ff54/6050d/yamaha.png 1200w,\\n/static/edf1383bdf29a8c274140af20bb3ff54/06168/yamaha.png 1405w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"name":"Justin Albuz","designation":"Co Founder of IBM","review":"Impressed with master class support of the team and really look forward for the future.","avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAAAkklEQVQoz7XQSwuCQBSG4dGRILrQwhatXLUQBCNCdxkRpKW2iKL//0t6Bz5BAnd54GFu55wZxpgRwoP/hx6263PCFWssEWChuYsV5pjIVDm+5jNEqLB3BR+8UeOCsrdue/sPHNDgiTPuuOn8hcKoa4YcR43OTq/P9HpXtEGqvFQXJNhqL/n9CzvwRyHigTNrxowvJOsLwUC7kzEAAAAASUVORK5CYII=","aspectRatio":3,"src":"/static/e771f64b2528c5b56a8f4701eed09af9/bc8e0/honeywell.png","srcSet":"/static/e771f64b2528c5b56a8f4701eed09af9/8ac63/honeywell.png 200w,\\n/static/e771f64b2528c5b56a8f4701eed09af9/3891b/honeywell.png 400w,\\n/static/e771f64b2528c5b56a8f4701eed09af9/bc8e0/honeywell.png 800w,\\n/static/e771f64b2528c5b56a8f4701eed09af9/6050d/honeywell.png 1200w,\\n/static/e771f64b2528c5b56a8f4701eed09af9/00405/honeywell.png 1600w,\\n/static/e771f64b2528c5b56a8f4701eed09af9/b292d/honeywell.png 1701w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"name":"Milly Cristiana","designation":"Manager of Hp co.","review":"I have bought more than 10 themes on ThemeForest, and this is the first one I review.","avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAAAeklEQVQY063QywqCQBSAYRfSFclLFFkp2KY2QiApQbve/5n8D/yP4MAHw7nNYZJk6dM1ba0NDt4zXHRDaj5yR+s65OZPKFDFwDd+eGDCgDt67x9c9ccTL/u+GNHaP8TA0umreMFNUrcsjEXdGXvjO2u29kdsHfnFv3AGqRYcW7wy9LQAAAAASUVORK5CYII=","aspectRatio":4,"src":"/static/cd11a0c28b88d399d869061ecd1b08af/bc8e0/davidjones.png","srcSet":"/static/cd11a0c28b88d399d869061ecd1b08af/8ac63/davidjones.png 200w,\\n/static/cd11a0c28b88d399d869061ecd1b08af/3891b/davidjones.png 400w,\\n/static/cd11a0c28b88d399d869061ecd1b08af/bc8e0/davidjones.png 800w,\\n/static/cd11a0c28b88d399d869061ecd1b08af/6050d/davidjones.png 1200w,\\n/static/cd11a0c28b88d399d869061ecd1b08af/00405/davidjones.png 1600w,\\n/static/cd11a0c28b88d399d869061ecd1b08af/e6bc2/davidjones.png 2268w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"name":"Milly Cristiana","designation":"Manager of Hp co.","review":"I have bought more than 10 themes on ThemeForest, and this is the first one I review.","avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsSAAALEgHS3X78AAAAhklEQVQY02NgQAKbNm1iIAQ2b97sDFSnD8T2QCwH0wcUR1WILAikY4H8aiD2BmITkEYg5gdiAaCcIxAHAtkBULXYHQIUZITSOlDD+KB0M1DTYiC9CIh7gbgOiGuAOAoobg01lBGrC6E0LxDXAnExEGcC8USg4jlAGoTtgexmqEUKIBej+w4A47t3hA+YU/EAAAAASUVORK5CYII=","aspectRatio":4.683333333333334,"src":"/static/03d9eb4043da602c63ecf11892ae9896/bc8e0/claro.png","srcSet":"/static/03d9eb4043da602c63ecf11892ae9896/8ac63/claro.png 200w,\\n/static/03d9eb4043da602c63ecf11892ae9896/3891b/claro.png 400w,\\n/static/03d9eb4043da602c63ecf11892ae9896/bc8e0/claro.png 800w,\\n/static/03d9eb4043da602c63ecf11892ae9896/6050d/claro.png 1200w,\\n/static/03d9eb4043da602c63ecf11892ae9896/06168/claro.png 1405w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"name":"Milly Cristiana","designation":"Manager of Hp co.","review":"I have bought more than 10 themes on ThemeForest, and this is the first one I review.","avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAAA/klEQVQoz3WSz0oCURSH7+hilJhIDVz5BkFPUAtXQyBupGkR5cJdIUYRQUYUgujCje1mnqCn7PvBmfF20QMf98z585t77r0uz3Mn0+pRs9gZfMKHIX8AzaAnKorCVVaKykhEFjuHb+h4uVO+N5BZTd25QMcXwz/2dpxB14QUTyzeg/tyCnIJpJW4t6MRTODNdiH/FZ7hGl5gBluYwwWMYQlrdOJQ8BYelIRfNZC7M4Eb+IJH+IGVnal+uNAPTWs3soTx23bAMesVNPDr0MI/UYNWGOoIVAtHEP+7iwOX0od3FxixJ920X7tXzH82FJbP5tKOYGrjyk+9iaqeUuMPDG/t1IJuxT0AAAAASUVORK5CYII=","aspectRatio":2.4779541446208113,"src":"/static/5297b307f2cf9329596a6334f0fde885/bc8e0/cencosud.png","srcSet":"/static/5297b307f2cf9329596a6334f0fde885/8ac63/cencosud.png 200w,\\n/static/5297b307f2cf9329596a6334f0fde885/3891b/cencosud.png 400w,\\n/static/5297b307f2cf9329596a6334f0fde885/bc8e0/cencosud.png 800w,\\n/static/5297b307f2cf9329596a6334f0fde885/6050d/cencosud.png 1200w,\\n/static/5297b307f2cf9329596a6334f0fde885/06168/cencosud.png 1405w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"name":"Milly Cristiana","designation":"Manager of Hp co.","review":"I have bought more than 10 themes on ThemeForest, and this is the first one I review.","avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsSAAALEgHS3X78AAAAu0lEQVQY003PsQvBQRTA8d9AycAfIDEhA6P8F0wGo/IfUErJwGQwKllIiiiLRb+735koG4oMVrH4C+T76gavPr3r3t27e45SKoQpligJz/N85JjrummHYJ1ABClIzY+czWEkEUVcDo/w1VoHZQNNY0yAXMMbeewwwxkVtNHHBlXcMcFBGm7xdP6Cn63Za+CGOhYYwGCIFwr42IdP6HDvKg0zeKCHrB3lYhuOMcfK1jXK9mddmQZFHNHC/gcLX85HY7UZNAAAAABJRU5ErkJggg==","aspectRatio":4.683333333333334,"src":"/static/a7f153aaf2be5f2a99c767a7e501c3fa/bc8e0/canon.png","srcSet":"/static/a7f153aaf2be5f2a99c767a7e501c3fa/8ac63/canon.png 200w,\\n/static/a7f153aaf2be5f2a99c767a7e501c3fa/3891b/canon.png 400w,\\n/static/a7f153aaf2be5f2a99c767a7e501c3fa/bc8e0/canon.png 800w,\\n/static/a7f153aaf2be5f2a99c767a7e501c3fa/6050d/canon.png 1200w,\\n/static/a7f153aaf2be5f2a99c767a7e501c3fa/06168/canon.png 1405w","sizes":"(max-width: 800px) 100vw, 800px"}}}}]}}}'
      );
    },
    Ael1: function(e, t) {
      e.exports =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDEuMjQiIGhlaWdodD0iOTguNDUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBmNDZjYSIgc3Ryb2tlLXdpZHRoPSIyIj48Y2lyY2xlIGN4PSI1OS4yMyIgY3k9IjU2LjEyIiByPSI0MC43NyIvPjxwYXRoIGQ9Ik0zMi43IDM3Ljg4YzEuOCAwIDEuOC0yLjggMC0yLjgtMS44MiAwLTEuODIgMi44IDAgMi44aDB6TTM2IDgyLjJjMS44IDAgMS44LTIuOCAwLTIuOC0xLjgyIDAtMS44MiAyLjggMCAyLjhoMHptNDguMTQtNDIuOTRjMS44IDAgMS44LTIuOCAwLTIuOHMtMS44IDIuOCAwIDIuOGgwek03Ny44MiA4Mi4yYzEuOCAwIDEuOC0yLjggMC0yLjgtMS44MyAwLTEuODMgMi44IDAgMi44aDB6TTU4LjggMzkuMDV2MTcuMDdINDguNDhtLTMwLjU4IDBoLTUuOTVtNy4zMi0xMS43MmgtMTJtLTQuMDcgMEgwbTU4LjY2LTI5LjA1VjBtMCAyMS42M1YyNW0wIDYxLjk3djMuMzdtLTMzLjg0LTM1Ljl2My4zN202Ni40Mi0zLjM3djMuMzciIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPjwvc3ZnPg==';
    },
    BEkx: function(e, t) {
      e.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAmsAAAGpCAMAAADlWoH0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACN1BMVEW8vLy6urqTk5NiYmI/Pz8jIyMSEhIJCQkHBwcVFRU2NjZhYWGQkJC4uLihoaFGRkZ0dHSOjo5eXl43NzcdHR0MDAwEBAQkJCRvb2+enp6qqqpycnKCgoK7u7uXl5dpaWlFRUUpKSkKCgoDAwMLCwsZGRkuLi5NTU2mpqZYWFgAAABZWVmrq6s6OjpJSUmsrKwoKChwcHC1tbUzMzOjo6NWVlY8PDwFBQVISEiysrJTU1MGBgZcXFyEhIRgYGB5eXlra2tDQ0MYGBgsLCynp6epqakPDw8iIiKdnZ2AgIANDQ00NDSvr694eHgUFBSlpaW3t7ctLS2Pj48BAQGfn5+NjY2tra2MjIxfX18TExMCAgJaWlqLi4uurq6bm5tsbGwxMTEODg5RUVGFhYWoqKgrKyt9fX1nZ2eSkpKioqKxsbGcnJxOTk4eHh6zs7NHR0dkZGSJiYkcHBx6enq2trYhISERERGwsLBVVVW5ublBQUF1dXWkpKQlJSUnJycbGxuBgYF/f38WFhaWlpYvLy9LS0uampo7Ozt3d3cqKipbW1uIiIgXFxcmJiYyMjJPT09KSkqKioo1NTVQUFAICAhlZWWRkZFSUlKVlZUwMDB8fHyGhoZ+fn5xcXFERER7e3toaGiZmZlAQEC0tLQgICCUlJSDg4Nubm52dnZzc3OYmJhUVFQ9PT1CQkJdXV0fHx9mZmYQEBA4ODgaGhpXV1dtbW2goKA5OTljY2NqampMTEw+Pj7+/v73DXjXAAAAAWJLR0S8StLi7wAAEL1JREFUeNrt3fl7FEUawPFJhCQQJgQJIQSGI2DUxiwQwQABFAgoIWJkMMh4ARJMiCBChA0bN56rcriogNd6ICgIHuCBrv5zS9Jv9fRRXd1zxH0e8v38AlM1VdPpfqePuiaRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgWEnpbePGl5VXTBg/sXJSMm6pqsk3VUfUPOX2qTXTaismTJ9cN2N0Nr5+5rBZhnekZs+ZO29Cw/zaBXc03ll91+hsBuK46+4yy2XawnvilWsafvffTO9Y5K158ZLm4m996t6RuueFvmHpMs9GWNb0urDNuK/FYHnxt32sWbGyxfJpXVUSo+BqKyLWkmsq/DVPuD9V7O1/wDLG2qLl862Aspn6zZhgGawdhZ0/tkxap9uv69siC27YGBFrVQ/qam6sL+72P9RqjLVN7frA2aw7d3eYQo1YK9TDtfodu+WRiIKdj1rmWNu6QF9z2dZibn9yumWKtcp0WOSs2xZ892PE2ihaEnosarqMBVPjLHOsba8Iq7l1exH/gLtVrdpYe9wQOjuWBt4+h1gbPbMyztnmiSfrk089/Uyjs2t3mgqm7lRvC4m1Gdmz2q7dzz6yYk/pA90qrstLi/YHTHK+K7pY2+tsQ2bzcz29++7p2/R89pZs/wH/+18g1kbNIw2yGysOOg0dLx5S+/ZweMHUcucI6GOtf79zFrvNeejreUmdUjqK9AesyN5samJtjxPva6ucxGTdEZX6gr/AdMuEWCtASp3Eyma7Uo8+qlIPhBVsHpc9AvpY+7vKXtfnSh1QITquSH/B5Ox2aGLtmPomeb81e+apMlO870/KA/lTo7jPx6p/yC7fMuhJ7n9Z0meGlKv/pxURa73qiWPI+9SZ2i3prxTlD3jVMsVan1xfa30hlWheLGUavelP26mvjdoOH7s6X5Ov/eu+jBkZO6NbX27KFisq1tSNT0OvLyP1hp3xUjGa2ep3GWPtTcl5JlhQNe7+y5P8sJ341mjt8DGsTnZ4XSBHXZp6NaWSC72PrrpYe0ravKy3A1lt0+ycvYVvf2qzZYq1TrkZfVlTdKYUutuTKhf+NaO1w8cwuVN/J3iKKZVDUR0s1DPed8esizUVxfdq8o6H3l7l6hk5RYZUeEI24lVN0ZKTdt4pT+q7duKzo7O7x7IeORa6Bog77Kx/+9O7TjsntfSW8FibKO95T5NXL7dymqbU3GyzG/DenxMSa8vkMq7tbvvAzsx4xhnYHSFWkTs24OzuRl3endrjd/R4uXM6azn8t9BYKzkjZxzt5061M88WuPnJUyPVtG8IizW5M5yqLa2eKqpcaRvspLLR2+VjljRNacfinPuwcsmmrTO8D//907JXztc+SoTHWp/2bkg5aGd+XODmP2FX80kiLNZ2me6+zskmnnOlfWoKThTgIXvP7hqIXeJANtTGdSQMsfYfeden2mq22pln5IMHhO5Sl1KZwVvKc5mRWo4lwmJNbe1npr/ec5WXL8Hxv/AgjBFyZ/15/BJOrB35YvhleKx9Ke/T9w7skdzzI6+aa9RFWXMDN1fyygJ9s9JhMNwBERJr/XvnLFv7xqHyTdqN2K45r31lJ+kLoAByHP8Rv4TEWub5oyMvw2NN+sNr9dU0y2G+3375umr27Q6cvFR3ZvrJQCXSAXEiERprir4hTzVju4cKS9QPJlBksmdzeBy0Y22z6nQKj7Xd5pvsFu+1qlKdLv1trqopTnPft8nOeH74/xGxprdWorgzm9RsX5XbR22Pj1kX7MaLihza74djbf1jzsvwWHvezqkJqafWe/Uu6ZaQKvcOmVNdDNa8wC1lvd06MTTSq59PrA3Ig8NFV9rXdtJO+1Vz6TfVly6f6C36MOIx6F/2nh3vJKSqZn07p27vlc7QIgcyTe5hjuGxdtV4XrsgIeQ0tvSqlpTNnvedldSG4EVton0xt1sG84m1y1L3blea9CUsu/nfwVXd6sq+67u9/aN8KG55chWSvr+SV75X429a360OGd9R4p2AFB5rPxjv19rkg/Y7Kd+qq+hl19uuqKMdHNp0yXMRziPWUj9K3e5e+X/bSV8kzjV5e+GOnCXaCnLN9cVOLfHOOWg/2BmjhvBY+0zq0TfAPym5G7NJTeqDFzlJzvNpYJCZ6jCYLm3+ecSa6kNb575CyqV80lwrYOixHCqH30p7L1be/G/fqcDOrXk9uobwWFM9kV9oy62xAqe9LjV8MTuuTY37PXTBX37A3twW9YySe6xtUOdw99NISrrqGyyNzG1/4aG55ci3t+7m1fSMZue2vB1ZQ3isLZJKTmvL3as+w9UXuVqlqV6MZ1VAXgmUP27nfKle5xxrqfel8gnuaaJLLaM7eUjIm/RKHk4c1s9uST8TVUN4rKnur4ajmrxB5/NWuFLVWLMd+0ZeLrour+cEyvdkRjIanWOfc6zdrjbgE3fqJnOsWR/81Ufo1iHjoGd9Oj9s5x6OqMEQa3Kbre2LXOl8gLtb4cKQ51z4k7yaGDibHPjZDuNs+0iusXZYfb634/MH158+tPDTuy50ts2ua3Kd8x/4i4/QreOivQNnttv/Xj89a9u+5qXblw05+7blirkGQ6ypeZblwZbivlbnAxa500szcj6ddPPFEnlHsG9KfWp1NiXHWDuhnm+vez7feT65+YD8SjbCu7KLAtReifkJ8JHZUnaola9x7lxS1c7iFz92GmswxJrqlLAu+hfO6HzJOaSWN5BWqSOdTPTK2ST9YqDiWXZOkyspt1iboqatzvd1fJ1Um7XMu3ZOn5OxmFu2/LhbOYbco7gSXc40o2vGGkyxVq2qWO/tf7/gHrbtzRpQE2bOptRErl8C9d5jdxhsdJ+Scoq1Kc5F0Xc/elSS04GHokXOTL4vYn0E/HZkj/kp3xy15p2SMe2AqQZTrJVcVJXXuKcDVs2zXFZ4y0izmVW+TJ1HgotzyRONZ8xdLrF2wpmMv9uX85FcWi8FCz3SLmVejvMRCMjG2sbAMjGL1GX0V1MNplhLfJ1R1acnn5e0pcvs4ynD+i1/N+cly6MhuAaCtMF6m3dziLVXncVLJgeuh6m2KdWr1q7UFftGlRq9w3FLc+5CdFM5VOvWKVMNxlhTAw9HrJv7y7UnlqtVi4Zu2P8Gu7Ded4ea5jn4hn1WOuk9IcaPtTqnuWVtnDW/st4h1grhPG9qj5FMlkrvMdRgjjWVHXC9alDOp4EinvmekwPZA/YU4rSvwyh2rB136p6bW6g5J7aiHoGxw7mh0s43eFsyTXfDEbGW0gfbjvOJbfb/NEOOXO2pQ8F7RWkBu+pLjhlryWw/Z859AAPlxFoB1KCxFu1ynl2Su9JQQ0SsJRJnM8FQW7zHmSyom1XvrM9ROzuQJy1wP/oHXcSLtY43nG1YmPve2kysFUA1XYZMZ5IGst8MNUTGWqL0JV+kVRwcvnjJ2Uu3fsw+9ZxYE3gGlZ6FYBDGirUbzj1Dek4id48TawVQV7jd+uzv7dzx0TWY1mYuedi9ytSCq/a6oQ/or4WurJue8GedttMrA2XixNqUdueEmVcj2UxirQDqRjlk8QqZqLzOUEOMWLvp6Wtv1SzIVOzo3v2NOlXJcCFN5/6M7FqUmXO+PN1oFJ2dmo247LR1LMhvJNomYq0AaiLRJX223IcfMdQQL9Y0pFsg2AGVdA+k+9n3cFBArDkDO6yTD+W3t94j1gogM4KtkKFDt9m5pqXI8o21Ejl5bQjkHPcEzWlvZt6xll1u1fpnvkt1vEqsFUCNZ6zUZ0s/0UVDDfnG2ut2ueDMFxmZ5vC2xuQba8nsGpj35f1LHp8Ra4WQhf4m63Nlrm+joYJ8Y+13u1yTP11GplnpS3J35R30k2esJe9zclZGNasl91wJeUslsVYI+bpP1+fKQO03DRXkG2uySO9//enyoGl94Axb9IRjfrE24ISaeaDxJ291Dw3PQgiZmv0bsVYIaV5IaxciVhM9TMcnItb6B3t0y1ImNkinpP+H0FQ/0LoLiaTq1HAv2HusKYS8uV1e/uD5O5zOglbzMh3Pydv00yxS7cRaIdRcjmpd5nnJ/NpQgSHWVjfWLAi7PstkQX8PVZfMMBhZu6NU4rF8aSKaqX3N+aWNaRE/FiPrYYV8c9Q6m0XY7WOTzMd9R5f3i9wxme5wDLH2op31syZLrR7qnwSn+jH+GHm1Ul51x+gkN8Ta/SrUrp+PqET9EtW0Tl3uV8RaYeQe3b/I/7BmuWYYf8XQEGvqyPUFs2TEbqtvJoGa+j7BHi/ULM8JYY/JbuGx1qeaho9Er5CjmvZ03QqDGTvvVGQt0OuSx71TwXOHWjqox1TedL8moRLsuu/YoY3ipWpJjxOS8Jj6bYLZiSihsTaglpE+E2NWivrmHQoOBk6pGa3Rc2YRQv2Iyip/hloSzfw9NsXacbnf8rfXpv60M+Z7nwycpYqyIfiHpOyPXEsjNNbUNyY9K6qKRHbJaOv3QJYKw6EcR70hq00uMenL3vS7ZBVwy3yMTLFWJTX86UtXUwl8/e7SS2Ft2eckrVC/URYyOCArLNbUnxeybK/f6bDI/FauoNbqou79MUb1E6YPup8Bbkgrr/mH9iLaPNT0GM9UqH51Ji3zjuJ2liRyD0dX49DT7yXMwmJNjWS52DwQLvuHb1CX8Yr73bWk1PegaL+hNTY5ly6r0VkrZuA5Z5/PMJc2xtrTajp9U7YL8km1ElXmhOe9/Sp9rif5c0mdEPGjfCGxVh/yI7xeD2cLLHESX8jO9il1fnpr3dEECtCW/THN9b+eP5ps23r3Sd1h0DK35V5V1dTO3Tt4INnVcy07iMPXZfChOtt5g+optXjRMfN2hMRadnBHzFhTY/aGt/nY5W0dybbSs4udpAV9CRRk2/XQoxB5l2OOtf7G0Jo/9L7zPTW76RVfFWrp+oiVRUJi7Q4rDnes9b8b/r4zrMBWsN5DITs3epX/iD6qFSE//Jr2/WBLhzq3Bk9fqi9zWlvCQB9rVVYsnpN3/1thb9tVvF9yHsM6/tTt24YYTUlRfe8dv+lq3ujvlzymMoLrxNS3S95OU/+FPtYOW7F4bxRSa/Q3eY3GYEdse4NXm6m9McpFj/O4FBibkT7tv9F3YkL3I49qCWXLNB9FH2sHrVj8N6XnPw6+p6yORWOKJVntWWaj5b6eWMVijCnq+L3MXfOuqzf879ijTl3faStQM+FbDWO39bG2yool+AA05atWzzvG/3ohgSIa/OyFeWVnMg2vrd99eF/h1WUN9Bz86cEtFa1lF6dWbu/8f/+Z8TSvXjhxf3ttpmFH9/Ilcc7wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBb3/8ARCRx01ooJ/cAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDEtMTZUMDA6MzY6MTktMDY6MDDpO9A6AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTAxLTE2VDAwOjM2OjE5LTA2OjAwmGZohgAAAABJRU5ErkJggg==';
    },
    CIbz: function(e, t, n) {
      'use strict';
      n('PN9k');
      var a = n('ERkP'),
        i = n.n(a),
        r = n('uR1b'),
        o = (n('Ihd7'), n('bG7j')),
        c = function(e) {
          var t = e.className,
            n = e.children,
            c = e.options,
            s = e.controls,
            l = e.prevButton,
            u = e.nextButton,
            d = e.prevWrapper,
            p = e.nextWrapper,
            g = e.bullets,
            f = e.numberOfBullets,
            A = e.buttonWrapperStyle,
            m = e.bulletWrapperStyle,
            M = e.bulletButtonStyle,
            y = e.carouselSelector,
            L = ['glide'];
          t && L.push(t);
          for (var j = [], h = 0; h < f; h++) j.push(h);
          return (
            Object(a.useEffect)(function() {
              new r.a(y ? '#' + y : '#glide', Object.assign({}, c)).mount();
            }),
            i.a.createElement(
              o.g,
              { className: L.join(' '), id: y || 'glide' },
              i.a.createElement(
                'div',
                { className: 'glide__track', 'data-glide-el': 'track' },
                i.a.createElement('ul', { className: 'glide__slides' }, n)
              ),
              s &&
                i.a.createElement(
                  o.c,
                  Object.assign(
                    {
                      className: 'glide__controls',
                      'data-glide-el': 'controls',
                    },
                    A
                  ),
                  i.a.createElement(
                    o.d,
                    Object.assign({}, d, {
                      className: 'glide__prev--area',
                      'data-glide-dir': '<',
                      'aria-label': 'prev',
                    }),
                    l || i.a.createElement(o.e, null, 'Prev')
                  ),
                  i.a.createElement(
                    o.d,
                    Object.assign({}, p, {
                      className: 'glide__next--area',
                      'data-glide-dir': '>',
                      'aria-label': 'next',
                    }),
                    u || i.a.createElement(o.e, null, 'Next')
                  )
                ),
              g &&
                i.a.createElement(
                  o.b,
                  Object.assign(
                    {
                      className: 'glide__bullets',
                      'data-glide-el': 'controls[nav]',
                    },
                    m
                  ),
                  i.a.createElement(
                    a.Fragment,
                    null,
                    j.map(function(e) {
                      return i.a.createElement(
                        o.a,
                        Object.assign(
                          {
                            key: e,
                            className: 'glide__bullet',
                            'data-glide-dir': '=' + e,
                            'aria-label': 'bullet' + (e + 1),
                          },
                          M
                        )
                      );
                    })
                  )
                )
            )
          );
        };
      (c.defaultProps = { controls: !0, bullets: !1 }), (t.a = c);
    },
    DjDK: function(e, t, n) {
      'use strict';
      var a = n('7zcn'),
        i = n('QY3j')(6),
        r = 'findIndex',
        o = !0;
      r in [] &&
        Array(1)[r](function() {
          o = !1;
        }),
        a(a.P + a.F * o, 'Array', {
          findIndex: function(e) {
            return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
          },
        }),
        n('lrpY')(r);
    },
    'E/ZA': function(e, t, n) {
      (function(t) {
        n('rmZQ'), n('p+GS'), n('AA1/'), n('dtAy');
        var a = /^\s+|\s+$/g,
          i = /^[-+]0x[0-9a-f]+$/i,
          r = /^0b[01]+$/i,
          o = /^0o[0-7]+$/i,
          c = parseInt,
          s = 'object' == typeof t && t && t.Object === Object && t,
          l = 'object' == typeof self && self && self.Object === Object && self,
          u = s || l || Function('return this')(),
          d = Object.prototype.toString,
          p = Math.max,
          g = Math.min,
          f = function() {
            return u.Date.now();
          };
        function A(e) {
          var t = typeof e;
          return !!e && ('object' == t || 'function' == t);
        }
        function m(e) {
          if ('number' == typeof e) return e;
          if (
            (function(e) {
              return (
                'symbol' == typeof e ||
                ((function(e) {
                  return !!e && 'object' == typeof e;
                })(e) &&
                  '[object Symbol]' == d.call(e))
              );
            })(e)
          )
            return NaN;
          if (A(e)) {
            var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
            e = A(t) ? t + '' : t;
          }
          if ('string' != typeof e) return 0 === e ? e : +e;
          e = e.replace(a, '');
          var n = r.test(e);
          return n || o.test(e)
            ? c(e.slice(2), n ? 2 : 8)
            : i.test(e)
            ? NaN
            : +e;
        }
        e.exports = function(e, t, n) {
          var a,
            i,
            r,
            o,
            c,
            s,
            l = 0,
            u = !1,
            d = !1,
            M = !0;
          if ('function' != typeof e)
            throw new TypeError('Expected a function');
          function y(t) {
            var n = a,
              r = i;
            return (a = i = void 0), (l = t), (o = e.apply(r, n));
          }
          function L(e) {
            return (l = e), (c = setTimeout(h, t)), u ? y(e) : o;
          }
          function j(e) {
            var n = e - s;
            return void 0 === s || n >= t || n < 0 || (d && e - l >= r);
          }
          function h() {
            var e = f();
            if (j(e)) return b(e);
            c = setTimeout(
              h,
              (function(e) {
                var n = t - (e - s);
                return d ? g(n, r - (e - l)) : n;
              })(e)
            );
          }
          function b(e) {
            return (c = void 0), M && a ? y(e) : ((a = i = void 0), o);
          }
          function N() {
            var e = f(),
              n = j(e);
            if (((a = arguments), (i = this), (s = e), n)) {
              if (void 0 === c) return L(s);
              if (d) return (c = setTimeout(h, t)), y(s);
            }
            return void 0 === c && (c = setTimeout(h, t)), o;
          }
          return (
            (t = m(t) || 0),
            A(n) &&
              ((u = !!n.leading),
              (r = (d = 'maxWait' in n) ? p(m(n.maxWait) || 0, t) : r),
              (M = 'trailing' in n ? !!n.trailing : M)),
            (N.cancel = function() {
              void 0 !== c && clearTimeout(c),
                (l = 0),
                (a = s = i = c = void 0);
            }),
            (N.flush = function() {
              return void 0 === c ? o : b(f());
            }),
            N
          );
        };
      }.call(this, n('fRV1')));
    },
    EMUa: function(e) {
      e.exports = JSON.parse(
        '{"data":{"hostingJson":{"PARTNERS":[{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABUElEQVQoz4WRu0oDURCGZzfxkkjAwiqNrYiCIHkCUYslWgoBbRREtFMQ2yCoKGqxghAwRt0kZ1MIghYBQWyDT6F7IoiFT7B+Z7PGShz4mX9u/5yLJOvaSgDBrLqWPqWlFxhL4VN+hw/4Hb7c+pI03sSZRjvq71G/cdesH2EvsKTyKnBbbt6imm24F4iB8/wpUqWnSlyjvxZEhyG2zeGMepbhMfnDwjCU/2z49t3qBmw/4nQvMR8B12CfJaNgm61b1HMsdohzk80PK6H0CnGBp5mgd4P8GThI++0FI3IC9hicxrsMz/YrPQS/Ankas/gS/pyaEy++RHTXCJFzTQ5eQmPdFO8JDik8wC9IDsZDXlLp8fh9y/SckivwIRkjSG2TXBlejAWL8EUzuATmSbg07TD8FAkrPYW/Aw1yjyxahddAC8xw3TWuPQc/Bop6k5n8Ny8s00lhcZhzAAAAAElFTkSuQmCC","aspectRatio":3.037974683544304,"src":"/static/1aa7f5bd78f2262abcb6e76c4bb089af/bc8e0/Acquia_logo.png","srcSet":"/static/1aa7f5bd78f2262abcb6e76c4bb089af/8ac63/Acquia_logo.png 200w,\\n/static/1aa7f5bd78f2262abcb6e76c4bb089af/3891b/Acquia_logo.png 400w,\\n/static/1aa7f5bd78f2262abcb6e76c4bb089af/bc8e0/Acquia_logo.png 800w,\\n/static/1aa7f5bd78f2262abcb6e76c4bb089af/6050d/Acquia_logo.png 1200w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAA0UlEQVQoz61S2QqCQBT1t3vrR/qSKIqgqEDqIZ+KNk1zayH3GU/OkKaSRNqBy71nZjhzNwE1EMdxIU4580Ke1LGyqFD+8VfQUraFDO+Bj1titu/C8lxcfI9bPn6EIUzPSXwAw3XQkUR0D5tMNBMMCMHCUCHqKkanPaaajKGyg2QbnI/VI+ZnBUtT43x9tfnb1qSH9mwAL4qKgsxHlCKkBCSm/IwkPO0Pfd0zS8GS6MtbrCz9XXJVD7/1tXyfDaXplFk1NL82daf7aWUaCVbh74JPqc1hGTnnU58AAAAASUVORK5CYII=","aspectRatio":1.7777777777777777,"src":"/static/242fd8c27294ae7f46c10a883687c0de/bc8e0/coremedia_logo.png","srcSet":"/static/242fd8c27294ae7f46c10a883687c0de/8ac63/coremedia_logo.png 200w,\\n/static/242fd8c27294ae7f46c10a883687c0de/3891b/coremedia_logo.png 400w,\\n/static/242fd8c27294ae7f46c10a883687c0de/bc8e0/coremedia_logo.png 800w,\\n/static/242fd8c27294ae7f46c10a883687c0de/6050d/coremedia_logo.png 1200w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAACBklEQVQoz2OI3nGf4f/zSwyaK+8zqCy/x6y0+CYTAxBkllYzZBSWMeTmFTLkAHFuPowuAIuB+CAAo1FA7KE3DP//b4DzizeeZsyJjWTIyy9kzEXDOXC6AKwWRsNBz/EHTDC29LIH5aKL77oxEAliaroYgC5hUF9xj0Ft5UOoqPdlxkOXb4dV7LuzwGrri/968858C5293bggKzM0u6A4BuiiouyCElcg2zsnv6gSSIcBxYJy8wrEQNqrk6MYYRaorYIaeuP2Xa0Ldx6+23Lu5vdDtx7/P3fxUmNsXHxlYWFRd15u7vTizLSKwqzMaiBuKMpKrwYaNj8vNy8SpNd22h4mFMOevHgNtuH+3TsrLl6/9e7ajZsXl5+9Fykx53K47qq7QSqrHiVqL71eprX0ZpHCuldJqqseFmgtu5mhv+hSudrK+/lAvovaygeJQAONwAYuWLgEbMPmrdtrjh493rh/x/burLUnfSTXvEhVW/0oBaihRWX14zogbgVq7ITwH3Upr3lSCWT3A8WigHQz0EB3iIGLl2INcNVld7i1lt1iB2F0OaALOU3mnQI7BGgYL9BQDqCBrHAFK1auBtP///+HBPCj/6iGr3oIFgfFJDysIOIo6sByS5etAHOWLV/JsGb9RoaVy5YztK/ZyyC36jGD+qoHQEUPwArBeOUDsCHY+Q/A5gAAIbYKX9VzRWUAAAAASUVORK5CYII=","aspectRatio":2,"src":"/static/c6cec03ae982495859ab84175f6c9ce3/8c332/drupal_commerce_logo.png","srcSet":"/static/c6cec03ae982495859ab84175f6c9ce3/8ac63/drupal_commerce_logo.png 200w,\\n/static/c6cec03ae982495859ab84175f6c9ce3/3891b/drupal_commerce_logo.png 400w,\\n/static/c6cec03ae982495859ab84175f6c9ce3/8c332/drupal_commerce_logo.png 600w","sizes":"(max-width: 600px) 100vw, 600px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABTUlEQVQoz2NgoDYIDPSE0EGeDAFBCDZl4P9/BtPkEkadjCZGEDso0I0xAGpBIBRD+YzBAa4MDG1nGRhaTkBw60kgPgExB0wDDUAGHuFh5DkKZmiPDoR2iYyxA2J3SDB4aAExHxALAl3HBQwWHqDrRIBYGuh6MYaJL9kYm4/xAF3IAXShEBBzQww9CTV9yX9BhYJpS2SLZm4WrFxjEObnUOkf5JUGNKAWaGAGEOcB2ZUBQV4JIf7O6Ywtx8OAmtOBBkYAsS/YYBBoARqYZy/NCGI7xCS7eIaHuoGCIDjARRxogCYQCwFdKQmkJYCYD4SBfBmRipWiDB0XhRlajkuCXQhzHczb/ylNKiDDWqCG/YSKGadUMALDkFEltx8Yy+6gWGaExjJjIJQN5gd6MIpUrGAAuhBoyHFGsDeRYxmW5mBJBMwO9IAnF+qkSwoAAPbDffZOZyLjAAAAAElFTkSuQmCC","aspectRatio":1.9047619047619047,"src":"/static/a6d002fdf0d170dcb2eebb45f578ce89/8c332/dynamicweb-logo.png","srcSet":"/static/a6d002fdf0d170dcb2eebb45f578ce89/8ac63/dynamicweb-logo.png 200w,\\n/static/a6d002fdf0d170dcb2eebb45f578ce89/3891b/dynamicweb-logo.png 400w,\\n/static/a6d002fdf0d170dcb2eebb45f578ce89/8c332/dynamicweb-logo.png 600w","sizes":"(max-width: 600px) 100vw, 600px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABbElEQVQoz43Svy8DYRwG8Of0TrRaP5o0UoOIKi3Xpj1ppGlzde4SP0KFgVhUlNhYDAa6EBKRWCWESSy1GRgtRv8EI7EhtHk9V2ewueRz7/fe93vPvXctADSTB/8/6uyTwJJkj1WYfhqhwG/DBqXIT43kI3tRctYT1OvU9lo0Dq/vJ9RKM+iGDuiasvb8Dh/ZwbFIR7RLyzRPBZpmcoZ0SrJ3lHO6fWMFZpkhGWenazRn1yXK0z7t0TqtOPPbpFGOYpSmRTvwGbqHAedfMENVWKusU3SMVshDnWiI1UOKh+FWWWs+uELcyWYEHvXn1QS64A4HoHQXEHQPoqnNeeUL7vKKQXk6pS1OlrwCUz0CeVVgIi4wmWRj/wNSA7yOfsCIvsOIsY4IjLPH0gTG2jkWGXbJkFk6pIXaV55BwHUHTXlEtqUMVT5BRHmBrgjcS7dIyG8wXK8wpDP01fqekJVz/O0+MRwUMP/8Oyqw8A1IMWcvpNMZHAAAAABJRU5ErkJggg==","aspectRatio":3.029585798816568,"src":"/static/0095255d13d239476cf579192e2718a8/6ba37/easy_ask_logo.png","srcSet":"/static/0095255d13d239476cf579192e2718a8/8ac63/easy_ask_logo.png 200w,\\n/static/0095255d13d239476cf579192e2718a8/3891b/easy_ask_logo.png 400w,\\n/static/0095255d13d239476cf579192e2718a8/6ba37/easy_ask_logo.png 512w","sizes":"(max-width: 512px) 100vw, 512px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAAByElEQVQ4y32SsUscURCH3+56FkeKKIooeBgQoqnMGyNGlBSx1C61WKQRFEEJIoSAlyMgUTEIosV5WiVFTBBF0imIot6JhZ2N/gGSYGkh5pvbd+sZyC58/GbmZn7z3uOM+fez+VCl4EU1KcxTv0FHXV4R9alKwcR/2nA/sOrMduGGuDJaeL88xizcGLjGEdN+doe+o36BbkAXvH6wPPZ7aLgDm7AOh5A2cqILlEHX48ebhtcNnPm0G84QLxk5DWMp/Ias6w+iq8eYes4wSfzdmd7Ce9iDK2iMestPKCKRlmJjjynk/fCH/JjpvFTDa+Jz9A+LmqLrlvkU5621pcQrFWtk1tRJxnUe54C3yy/CjrFHKS17chBsMd8mXXgUZ/2SoaeU37jDtpqn9s1/X8SXff+VfeTFP5tIH9SV155LR9LKi2dt8rJH82YZSHDyIPpDiFQwk4AG6OdgCT1hmmQeZuCDxjROQEasXUZzMM610uhb+CxiJ8mHmJ2DRcgy9xNd0JP90gTUOEvxG7oA28S65BN8gTUYpvZDTYhX0K9SXCAfiafQSTWshWZ4DDXQCfXQSlM12oJWoU3QW7yBtSlIEne7uSfQqP1/AXHJw8NhUEUqAAAAAElFTkSuQmCC","aspectRatio":1.555041628122109,"src":"/static/4d3827ac795f001fc3ce2ab51f6f500f/bc8e0/ElastiPath_logo.png","srcSet":"/static/4d3827ac795f001fc3ce2ab51f6f500f/8ac63/ElastiPath_logo.png 200w,\\n/static/4d3827ac795f001fc3ce2ab51f6f500f/3891b/ElastiPath_logo.png 400w,\\n/static/4d3827ac795f001fc3ce2ab51f6f500f/bc8e0/ElastiPath_logo.png 800w,\\n/static/4d3827ac795f001fc3ce2ab51f6f500f/6050d/ElastiPath_logo.png 1200w,\\n/static/4d3827ac795f001fc3ce2ab51f6f500f/00405/ElastiPath_logo.png 1600w,\\n/static/4d3827ac795f001fc3ce2ab51f6f500f/1e2a2/ElastiPath_logo.png 1681w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAACMklEQVQ4y62Rz2sTQRTHZydZ6aZimh+KDWhoxYMSrNUWBal/gAdB/HHyJF4MoqnZ2XSzaTRQiloVUUH8Dzx5EDx4s8ZtrdlYKAhtr3pTqM0mYm2yr29ms4GINBYd+PK+b/bNZ9+bIaTDqub9ItYmesjXoLu3Mox5oVt4+xrZ+uIwb/14lJBb+4XA30Oc2X4R66/jUv3VLtkFKPdqN+XPtXHfY5HnfRL6LUDf72vvNC8X4QGFao58cq9DkqrGZoCF0wSsIdfPHZDcTvfHYWZv2jF3p6qTXYswIYAlF0g3B0LpsAsrnyBg9orXcGbiSVjeA1COQuVOAOo5CrVxMu92TKVarsOYgDABWnafTwCtGDjF8NrqbWV9TffxDgVwJePvMLJ1nDhmuOmPTjkfEhY+zhJ26zjFyLp9V/n1E4GVLLF4zfcxv1TRf4Mwxlrx25sRFzZ/nkJpcBG+DAAs9OO4MQArCvWHCkCBgm2QJV5XyVHJzv6hM1VVBfD5k4vkxdMzlO815gYnG7MHyw2zb7pR7H1Xn46a9pTydjVDP1ay0n1e8zIzQm+xpDjfas7r8F+XB/USiuCTjKnHVJWFNaZG8kYqpGnpIT1zI2boo6GMlj5kaNeDWZYK6yzVx1R1J9Ym8EwIz25vg6JRcPMUfryEMrDwMsYc6hlKQw2jkqgLzXgVa7i/gjqH58+2JvWoGLtRO/jfUF2oAcyPYAzwHL2M2oaedxRBH2rWBVE9bSP/r3vknA2QUB9rSo0mPQAAAABJRU5ErkJggg==","aspectRatio":1.3207964601769913,"src":"/static/f84c710c03e5e2b72268434a77c41207/bc8e0/google_analytics_logo.png","srcSet":"/static/f84c710c03e5e2b72268434a77c41207/8ac63/google_analytics_logo.png 200w,\\n/static/f84c710c03e5e2b72268434a77c41207/3891b/google_analytics_logo.png 400w,\\n/static/f84c710c03e5e2b72268434a77c41207/bc8e0/google_analytics_logo.png 800w,\\n/static/f84c710c03e5e2b72268434a77c41207/6050d/google_analytics_logo.png 1200w,\\n/static/f84c710c03e5e2b72268434a77c41207/00405/google_analytics_logo.png 1600w,\\n/static/f84c710c03e5e2b72268434a77c41207/4ae49/google_analytics_logo.png 2388w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAoklEQVQY02NgAIG0zWCKIXUzIwMMpG5mZiAEMoD6UjdB1W9Ck4QZlrpZCCgpCVWkAOTzAmkWIDYEYjOwXOomTiBWQujFMAxuCwcQPwLiw0DcAMR/gXg6EN8B4lKoWAwQHwDiC0DMBcTsUIegGAh1HdDWtE2zwHTqpjgguw1IWwDxFCCOBWoKA9JqQNwNxGVAHAHEMihmIHkZf3iBvI1TDqEXAOToR1LfHEGHAAAAAElFTkSuQmCC","aspectRatio":3.6721311475409837,"src":"/static/d0f5c9f05fef2fccb243538c5cd35f53/97656/HCL_logo.png","srcSet":"/static/d0f5c9f05fef2fccb243538c5cd35f53/8ac63/HCL_logo.png 200w,\\n/static/d0f5c9f05fef2fccb243538c5cd35f53/3891b/HCL_logo.png 400w,\\n/static/d0f5c9f05fef2fccb243538c5cd35f53/97656/HCL_logo.png 448w","sizes":"(max-width: 448px) 100vw, 448px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAABkElEQVQoz1WSWytEURTHz5ChXMoTXvaJXBIhpsgkkcuD64xhmpSEPOGcGkZqHlxCzETjbZrhs+z9zfzW2TuNqd/81163s/Y6x/NDnVaB3vUDvQejfmhWOWdQ8aXRpMcPe1L8kIUh5+tUgdlRtnYNbRZnTYXm3Q9MjeIU5xeSvrAr+L/RT1iEI5AciZ1IQ+IJZc8VeKNh3MPYwHhGs9ADM3BP43N0GAIe9oQOwDH2KxRVqDs4H3LDElqQOvrEZMI+KMOE534E70i8jJoH5ho9df5limTil2globklXkavvIbiQSiROOuu0c75Bj5IrnP9Coy73C2Q21wQe7MPNnnsPBr3XIM+CsrovwnxyYTT0DjhKjyQm3S7zWEfQqFxwk37VJ3zo+Y6IUWcz7FHZIfoI/Rjn0X7DXUvWoQpyDhfgpwmj79q9JZDU4d9Za9k31wQ+WSSBWWn+VF2f12wRG03L+cIX1XWRn4rE+rU33cYmjHsFfdNyveVIj5vb6LHiR/g26ZBG8UtrCVG3hyIf5148y/FGg5ZjsA/sAAAAABJRU5ErkJggg==","aspectRatio":2.2962962962962963,"src":"/static/386c15cc643288b3c7244ca3926985ed/bc8e0/ibm_logo.png","srcSet":"/static/386c15cc643288b3c7244ca3926985ed/8ac63/ibm_logo.png 200w,\\n/static/386c15cc643288b3c7244ca3926985ed/3891b/ibm_logo.png 400w,\\n/static/386c15cc643288b3c7244ca3926985ed/bc8e0/ibm_logo.png 800w,\\n/static/386c15cc643288b3c7244ca3926985ed/6050d/ibm_logo.png 1200w,\\n/static/386c15cc643288b3c7244ca3926985ed/00405/ibm_logo.png 1600w,\\n/static/386c15cc643288b3c7244ca3926985ed/46ad3/ibm_logo.png 4464w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAAB80lEQVQ4y6WTTUgVURSA582LV6BhEC1ECHE583xPSXLb7rUyFRVsJ7VrK0jrNm1rYeHGH3BpIEjITIJSSilqRi5aBG2CqI33StQTa/rOnTM6/uy6cDjnnp/vnnvmjuexwsi2BZHtEhtdSH2mqLq/upUkYWyGNV4MYyt+z8XjVJ9YON8EsfmNNLii2BSDyJQUOHgKeJGYH8QO7KvvJBhAF85aGjR+/jD2teq2A971zlmh3kiguQ5tDwWjdHNZ97dImCF5Ct9EZd0Bh9g3Ik+xF/FPh6fGlOvQLlU2KAIIrLd9LUnKK3Ug9nv4aj+pvHXAHuLdQH5hL1Czhz5A2nRshTzwBckHSAv2DkV/gd3QK4/qlbMZXiPeQu7j6qZrYkhnfSHI5ghkHkcdacemA7uYm+FtBfZTcJ3YFz38W/n1oQCHzwxWgX+QVuzP6B/IVT35vgJrwKbLy/V0NJEZcF8/Mne08yYOLB0Dl35KsAH7QfW9A3zlai/RpnPXFfYBfFR5lyQUPsP+1PHB5U0q4yP+hQw4R4IUNeuAR5B1fKvoe8gscpMuStJlem07hjyXBvRlPCHnYfZsVtgcArzi/e8SaseOXMNO6sz80P0p1pdHLnvVcrB35I/TmOa7tygxSRpExpFL2m3h/D/CHGkB66icZP+0yD8F5Zu6UCEsXwAAAABJRU5ErkJggg==","aspectRatio":1.556420233463035,"src":"/static/74f8179d86bc991e59c14d2d5912c6d9/bc8e0/JDA_Software_Logo.png","srcSet":"/static/74f8179d86bc991e59c14d2d5912c6d9/8ac63/JDA_Software_Logo.png 200w,\\n/static/74f8179d86bc991e59c14d2d5912c6d9/3891b/JDA_Software_Logo.png 400w,\\n/static/74f8179d86bc991e59c14d2d5912c6d9/bc8e0/JDA_Software_Logo.png 800w,\\n/static/74f8179d86bc991e59c14d2d5912c6d9/6050d/JDA_Software_Logo.png 1200w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAC4jAAAuIwF4pT92AAABL0lEQVQoz2NojVjIMCV9AwMMzIjbzQikQJiJAQFgfHQ5JjR5BOiLWc3fHbnChAEVyAAxCwMpYGHVDj4Q/fzUD/4mv4XPYiU6VIBcRVYmNjUgHQ3EpkAsCMSWQCwFxDpA7AC1yA6IhYBYHYhtwQYWO06qbQyct7A/cn1bue2s/wmK7QZAYWdGBqaJQLoGiGuBOAyIZwJxARCXAHEuEFcB8QQonQjEKUBsyBClWGuUbtD1rNx83v9CwxmLwQHDyFwGpJqAOAeIM4A4BohBYtZA7AXE9kCcDTXcDIiTgLgQiBXgXo+QbJDJM5qsBGJzsvCAgkEYGtDMQMwGxKJAzAv1KjtUmwSUzQ3EYmCRGJU6RuQw9VfKYmSgBKTpdTJEK9UzZGj3MeYZTAEbxs7MSbZ5AI2ZOSVKDvSsAAAAAElFTkSuQmCC","aspectRatio":2.6666666666666665,"src":"/static/c2ac413cc12b7507f7bd11cef342d3b3/bc8e0/Logo_akeneo.png","srcSet":"/static/c2ac413cc12b7507f7bd11cef342d3b3/8ac63/Logo_akeneo.png 200w,\\n/static/c2ac413cc12b7507f7bd11cef342d3b3/3891b/Logo_akeneo.png 400w,\\n/static/c2ac413cc12b7507f7bd11cef342d3b3/bc8e0/Logo_akeneo.png 800w,\\n/static/c2ac413cc12b7507f7bd11cef342d3b3/6050d/Logo_akeneo.png 1200w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAABG0lEQVQoz52Sv0oDQRCHd6OpAoqCkGLPxvxpNI2FAavLG0jAQkGLQMgtAR/AdD6Fr2CRTp/AB8s3u3O7lwQEc/Axs7tzv9/c7Zhi4o08xaQCbwNlpXveFGU8/9fjyiC2tYeBdcEkGlFj1dAoVmrCWWqKKC9lEd+HkTugq9QQLi3dWMI3nayJH3AKXc7PxQSu4ZJuOsQL9q+gIB/yW44aHabFJ90+EW/gC844W2GwIH+DFbzCFB6ofYc7ap5Zt5qtWo09+MH1F8cxxSesxeCRl0R0DjMM7lV44YJ49UI+CBql3xMdwK3m7Ybpscb4NVyQXqZcTLuuDZ+cxya3XedOb3R3Iv68lDgaSdRmMR0ZBOqxElweGyPTEKmS2QbeEWm79ipLcwAAAABJRU5ErkJggg==","aspectRatio":2.199830651989839,"src":"/static/43ac91dd1e52a552f5d1247bd60d922e/bc8e0/Logo-Mirakl.png","srcSet":"/static/43ac91dd1e52a552f5d1247bd60d922e/8ac63/Logo-Mirakl.png 200w,\\n/static/43ac91dd1e52a552f5d1247bd60d922e/3891b/Logo-Mirakl.png 400w,\\n/static/43ac91dd1e52a552f5d1247bd60d922e/bc8e0/Logo-Mirakl.png 800w,\\n/static/43ac91dd1e52a552f5d1247bd60d922e/6050d/Logo-Mirakl.png 1200w,\\n/static/43ac91dd1e52a552f5d1247bd60d922e/00405/Logo-Mirakl.png 1600w,\\n/static/43ac91dd1e52a552f5d1247bd60d922e/314bf/Logo-Mirakl.png 2598w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAA4sAAAOLAH5m+4QAAABRElEQVQY02NgAIKfGyuzf26q3gOky/9/fczKgAWICwgxATGjmKAwo7igMJM4mBZiFBcQZoTICzOA5Bi+L0pc9WtnW+2vne1yQFz8bWn6iv+LpXk4uIRsTBQl2YGaDIBYhgEPEBMQEodzPlXJL/k6yS39+4LY6q9TfQo+Vsp3/e/XMGRiF6yRERb2AbqqEqghRExQyBdIu4oJCAcDXRMJdGEoEPsAxcKAuAwo5g9U6w00UG4x0NBpn6sV2oH0vO81cl1nM2SdGRgE3aWEhGuACmOBCiuAuB7o0glAzUVAgzqAuBrITwValAbEpUB1RUC5JAagQQlAPO9zlXzrp2qF5d9rFcKPpsqqMTDwCQJdqAo0SAio0RZIg7wO0lwH1OgC5OsD+dJALAXEOkCXWwPFTcHeBhoYAMSbgTiOQFhxAF0ihk8NAGXlYEMh9nYHAAAAAElFTkSuQmCC","aspectRatio":3.4236804564907275,"src":"/static/385458e24be9eab74ea90c89f1910acf/bc8e0/magento_logo.png","srcSet":"/static/385458e24be9eab74ea90c89f1910acf/8ac63/magento_logo.png 200w,\\n/static/385458e24be9eab74ea90c89f1910acf/3891b/magento_logo.png 400w,\\n/static/385458e24be9eab74ea90c89f1910acf/bc8e0/magento_logo.png 800w,\\n/static/385458e24be9eab74ea90c89f1910acf/6050d/magento_logo.png 1200w,\\n/static/385458e24be9eab74ea90c89f1910acf/00405/magento_logo.png 1600w,\\n/static/385458e24be9eab74ea90c89f1910acf/1f96e/magento_logo.png 2400w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAACxKAAAsSgF3enRNAAABIElEQVQY02NgQAJcypYsIPpXgyATTOwHkP2zQZARwhZi+NkgxAZi/6wXKgSynwBxM0wtkM3IoG9oLKFnaJygbWAyy9rM0Pz/dgZOkOSXOiFGoAJhhMFCosiWA+UqoQbWQflSYAlLU0NfcxOjb57W+l9fV4ns+dMouP9bvVA60FXTgIpOAHEKEFcBDTwJxC0/6gUTgfx1QLwPiG8A8SQgngDE63/UC9UylPmqq36qFd4BxL5/GwU3fK8XigEa9hcouRBkK9BrH4D0I6DXeYH0aSD+BsSqQINBXr4FxBeA+DrQsgIgvsCwMFZB7F+T4EGgy1yAhi0BGhYDNGwLUNEKID4MxE1AQ6cBFR8EGjoXyK8GYpD8ASC+BsQgsfVQV/cBANFon4I8lHcDAAAAAElFTkSuQmCC","aspectRatio":3.901743264659271,"src":"/static/0efd908fd3b6ba362da05a4a6367db10/bc8e0/Moodle-Logo.png","srcSet":"/static/0efd908fd3b6ba362da05a4a6367db10/8ac63/Moodle-Logo.png 200w,\\n/static/0efd908fd3b6ba362da05a4a6367db10/3891b/Moodle-Logo.png 400w,\\n/static/0efd908fd3b6ba362da05a4a6367db10/bc8e0/Moodle-Logo.png 800w,\\n/static/0efd908fd3b6ba362da05a4a6367db10/6050d/Moodle-Logo.png 1200w,\\n/static/0efd908fd3b6ba362da05a4a6367db10/00405/Moodle-Logo.png 1600w,\\n/static/0efd908fd3b6ba362da05a4a6367db10/10926/Moodle-Logo.png 4924w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAABbElEQVQY022RP0hCURTGz5OISHQISokgMAUlMImswSGD/iwSEu/e53sO0R7VYpg+TRQhCRqlAimCCKyhIffWxqamiLaKfM8IBId4fTesqQs/vnse53585zwyc/Rk6PQFPaXuQb36IWrXa2+CJyKMq9My1yIyU1NglnEtKjNtWPQypkmo6RfxuGQWyAN9aKZs1zBON3Wp0d6lenh5PcS5WoNhBc06TK/AOe5HUAf9d4y05BH6suKovq31dcwinZg6Wa0cXYrvCk8kYTiFJG7G1LDMVR/uPpgOADeYBK5u3UNI9Gxk6cJI2i2YLgqT96xUaufpJhjbCiLhGftJqe1Bq9ADaB16DA5BAxRBAVSE4YaRoYqxbbs381QzdiQnxr/7zNM+DTX7kwqPwSCO5jngBUtIGscux4EfaaNip+iZBwt/o7fKNAqjx06RLOitVSb7RGzTqSmKFz8ggJ2F8DAAfN0xZ8AITDxQPxgDg98pRaQYYyfW2gAAAABJRU5ErkJggg==","aspectRatio":3.4246575342465753,"src":"/static/60b36bfd7da91b0360614b685c126954/53f65/Order-Dynamics-Logo.png","srcSet":"/static/60b36bfd7da91b0360614b685c126954/8ac63/Order-Dynamics-Logo.png 200w,\\n/static/60b36bfd7da91b0360614b685c126954/3891b/Order-Dynamics-Logo.png 400w,\\n/static/60b36bfd7da91b0360614b685c126954/53f65/Order-Dynamics-Logo.png 500w","sizes":"(max-width: 500px) 100vw, 500px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAAB0UlEQVQ4y2NgwAKU5RXAtAYQy4fEM8HElRQUGYFyjMhqiAZaIOL/fzBbhYtdSElRWQbdQqINBSmU94sEu0TR1CpbSU3jg7Kc/C9lecX5ytLSrCS7EKgY7E11BgY9+dSS/wqhif+VBQX+qikp/wcamgf2vrw8MykuZAZ7lYM1Vj4s6Y1cYn6korHlJFUt3f/KMjIzwAbK4TBQRUERTKsrq4DY4ECHuRCoWVdJS7dcSVl1nmzNhP+KnkH/VVgZ/cFBYevCLHHgIaP4lstg/RL77iEM1VRVwxc5LJIrjvRIt885q6SiFgsS00aSl3/7n0GodxGYLb77DrILlRmBbBmg66SAmF9eRpYRaACrCi83q0JQLKuifyQ4GMQvfQfTEgce8EscfKgMZh99xiAOcyHMQGjYFQDxHCCuBuJyIK5SlpVrBBrcKbn6eAnQi/USe+82SOx/0Ak0EMTvlth7zwTqZSa4C2UkJGEG6gOxHRCbArE5ENsqS0lpKhqYGEvN3a4mfuSpEVCjI9BAR6CBVkAD1YAGSoMN3H8f4mUYkJOSZiAXoEQI2IXicBeCYxiJZgImZEYlHQNGqYW7GYEuZAR5DehCJqALmUCxDHQhA1YXUgsAAEw3iCdnWSC0AAAAAElFTkSuQmCC","aspectRatio":1.5017064846416381,"src":"/static/72176282818230a6e3279bcca938ec7a/f7da6/partner_bloomreach_logo.png","srcSet":"/static/72176282818230a6e3279bcca938ec7a/8ac63/partner_bloomreach_logo.png 200w,\\n/static/72176282818230a6e3279bcca938ec7a/3891b/partner_bloomreach_logo.png 400w,\\n/static/72176282818230a6e3279bcca938ec7a/f7da6/partner_bloomreach_logo.png 440w","sizes":"(max-width: 440px) 100vw, 440px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAIAAAABPYjBAAAACXBIWXMAAAsSAAALEgHS3X78AAAA/0lEQVQI1wH0AAv/AKa20nyVvSOJoQ2uptr79J2mymuAsmyBs7/I3qq20tTZ6LS+2GR5rnKFtaez0cTM4Z+szN3i7aOvzq241ACOnsSnr9CJmsECkpvJ+/CepMpedqp5i7hNZaJleq9ZcKiBkr19j7qWpchjea10iLeaqMpKY6CBkr1WbaYAusTbk6HGlqfJVKW2////nKfKpLHP////fY+7gJG9m6nLrLfUp7PRsLvWgpO9hJW+gpO9eo25r7rVhZa/APv8/cbN4cHK3uTq8f////j5+/z8/v////b3+uDk7vj5+/n6/Pj6/Pj5/Pz8/fDy9+Dk7/z9/vj5+/f4+8dsrtZk+8FvAAAAAElFTkSuQmCC","aspectRatio":4.651162790697675,"src":"/static/c8c17eb69aad8808f4867a328301d86d/bc8e0/perfion_logo.png","srcSet":"/static/c8c17eb69aad8808f4867a328301d86d/8ac63/perfion_logo.png 200w,\\n/static/c8c17eb69aad8808f4867a328301d86d/3891b/perfion_logo.png 400w,\\n/static/c8c17eb69aad8808f4867a328301d86d/bc8e0/perfion_logo.png 800w,\\n/static/c8c17eb69aad8808f4867a328301d86d/5d2c5/perfion_logo.png 1000w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAIAAABM9SnKAAAACXBIWXMAAAsSAAALEgHS3X78AAABeUlEQVQY0wFuAZH+AC+06Sax6J7c9MTq+TO26Sqz6Ee969Lu+v///4vW8g2n5ACg407A7OL0/Pz+/1zE7Sex6J3b9Pz9/////wBgxe12zfADouR7z/EEo+OT2PMerOZKveyV2fQAmeFmx+6Q2PQIpORRwOza8vt3zvHm9vzS7vru+P3///8AdcvwldjzAJ7ibsrvBKDildjzIa3nSr3rMLTpV8Pt////////1/H7iNTyteT3JrHoIK/nl9r0+/7+//79ADa36iKw527L78bq+V/F7mDG7n/R8ev4/aPd9aTe9f7//////63i9wCd4sLo+Mfq+VTB7ACb4Y3V8////wC65vj////////M7fpcxe235fcosuix4/ac2/QAmOBoye+S2fQJpOQ7t+rB6fiD0vGw4vYAn+OCz+z/6cYAj9fz////////t+X3Favm1/H7Y8fuKLLo6ff9gdLxA6HjAJziPLnq6ff8wun4EKjlAJ7hSsDv7/Hs/LJdoJcPUw4uLwMAAAAASUVORK5CYII=","aspectRatio":3.5546218487394956,"src":"/static/5268f4782f2508f9a0e5d3db3d107228/10b9d/pros_logo.png","srcSet":"/static/5268f4782f2508f9a0e5d3db3d107228/8ac63/pros_logo.png 200w,\\n/static/5268f4782f2508f9a0e5d3db3d107228/3891b/pros_logo.png 400w,\\n/static/5268f4782f2508f9a0e5d3db3d107228/10b9d/pros_logo.png 423w","sizes":"(max-width: 423px) 100vw, 423px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAA7DAAAOwwHHb6hkAAABPklEQVQoz2NgYGDQFGVmWSzFwnKGjYFxCZCvxQABTByMjAwkALjid5XC4v93ySr9bxOV/A/kf0AyFBdgwSkzWUzqfya/0PdZ0gp/76rqfPfj4fvPzMCwECTHzsjIA6SEgFgAiHmgWkKBuACIZaEGswMxBxDLAzErQ6Sw2P/Fiqp/J7Lz/DslIv3niJzKfyUW1pNgPzMwlAOpNiDug2IQvx+IW4DYBYjNgVgHiAOAOASIuRkWrV3z/8S+/d/nZWb/XZqY/F2Nle0/AwvzMqhryoDYB4hBYZsLxJ1QsWYg5gViOyD2BmJ3ILYBu/D///8f/0PBiSuX/3dPnPgxNydHD2QaGxubMpDihLpCG4ilgNgLiBWhXuUHYjUglgRiGXDQfP78WevP79/L///7d/Hn16/LgeaCNDKkpaUxM5ABAEOmXEmH/TLLAAAAAElFTkSuQmCC","aspectRatio":2.965599051008304,"src":"/static/e1e56d538e969f0d48d542e0fb511494/bc8e0/Red_Hat_logo_RedHat.png","srcSet":"/static/e1e56d538e969f0d48d542e0fb511494/8ac63/Red_Hat_logo_RedHat.png 200w,\\n/static/e1e56d538e969f0d48d542e0fb511494/3891b/Red_Hat_logo_RedHat.png 400w,\\n/static/e1e56d538e969f0d48d542e0fb511494/bc8e0/Red_Hat_logo_RedHat.png 800w,\\n/static/e1e56d538e969f0d48d542e0fb511494/6050d/Red_Hat_logo_RedHat.png 1200w,\\n/static/e1e56d538e969f0d48d542e0fb511494/00405/Red_Hat_logo_RedHat.png 1600w,\\n/static/e1e56d538e969f0d48d542e0fb511494/9ab24/Red_Hat_logo_RedHat.png 5000w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsSAAALEgHS3X78AAAA8ElEQVQY02NgWPkwmmHOKykGIHANi+X19AvVZkACXv6hjBA6hNXLL5TR0w9I+4eyw+X9oPJ+oSpAbM2gs6yo8/hsg87uKBtne5+IZG//kBSgBnegwbZAOg2IM4EYJOYP1FAANNASSLsA+Tme/qEJYHm/EF+gWDOQHcmQFzcr8+1a1RnlmXaFRo7xxj4BIaFA1zQBJUuAdCsQtwPZRUAsDsR1QNwLNKgMSO8A4nSgQXFAegIQ5wGxLdjZ7+Rc01Yae2ow1KezBvmE8AIlhIGYF4q1gFgIiJmALlEF0opArAQ0yAhICwIxDxBLAS02BpkFALplWKb6K/80AAAAAElFTkSuQmCC","aspectRatio":5.0761421319796955,"src":"/static/b47381693cd4476094f1402ad4afd207/bc8e0/Riversand-logo.png","srcSet":"/static/b47381693cd4476094f1402ad4afd207/8ac63/Riversand-logo.png 200w,\\n/static/b47381693cd4476094f1402ad4afd207/3891b/Riversand-logo.png 400w,\\n/static/b47381693cd4476094f1402ad4afd207/bc8e0/Riversand-logo.png 800w,\\n/static/b47381693cd4476094f1402ad4afd207/6050d/Riversand-logo.png 1200w,\\n/static/b47381693cd4476094f1402ad4afd207/00405/Riversand-logo.png 1600w,\\n/static/b47381693cd4476094f1402ad4afd207/3ba25/Riversand-logo.png 2000w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADRElEQVQ4y31VS0hUURg+96pFGC6knRSB1MYIIisowsoWLlzULlr1okUtaimBLXoQtIgWgUI6zp1xzHeF5qNCSHoRZUpEYTVzZ3Qe6uCoZemM/qfvP/fOw0Y78HH++//nfOc//+NcIdzjQhimUMPwW7Jhakr2hEVqNAaBkCV7MBsBsfpIk2nC6dX/senCFeA5BzbAl4t1umiMpB1Yg1RLya5APr4LU9/3P2evd/p0ReYKaMqRpFNOn+2ZRVQAwz0gBMwB74BK+8BjwF3gFtbvzjqg4YembpMangiuYr4QD39J4R6TIJeiNSqhiwMDiJkUHTNStMcsm2GeUXtcgRKgaEWIbOGsaMcGp28B8jJAQAKQonmS9ayLa4a5KBrHmXARCNhr5oFueL4tM4b1om1a6tYmngkkEjJBXuJv1osGpVvWXVjjCUrd5bfQEeNDIiDdmiS8IdqgrPPGsYkwy40ePwkH5HovQ5Ftag6wTtq6ZXvm9QsqHIbpsbNj1qxvm5KH+8JLxR3jVN4foeMDE/Lo0wjt7Q5JgMr6wnRzJEb7e0K0qysoD/aGad+TEO2B7RBsGjwFT0zgCpdES1QWNPmXrg3H6OLbqHSMzlH10LQ0vv+U519H6erHGJ17FaULb6KYp6j26xydejlFJwcnqer9NN3+NCPXuVWYEnxdP7pA5rnM5fL+sKx4FqHK5xNU8ihIR/rDtONxkMrgzZUP07SlfUzpSrtCsvBBgNhLQB7oCSVEU5ivPMSEyCyy6LRjU6cgVfxYrvdx/Ki4c5w9yNRxDOMKDiQMSQXXCSYctGvuD7KZ4IxyFu0MUyrDfICVYdYluDb1zjmpIxm8HraqZIZLVWd0zFrFzMG1alHa9ai+NTcK2qpBqdYa5ghwHahGuexUXLXDyTr0b4fhDtCkyK1uSNiEcdU9hjkLTFghMnuxpyirv11jme2SKvLLqs2aIlYbtkxJ1Xrc142hDThsc8baPCBXcbjHMknwJPHTVPdFsxeeVhmzHopBoGLFoY5v6RfKmXxpMLfNQ0gy8+PJLjtG1afeK/mg/PSVvFr2c+UV6r3MGu2/048lkzp9OSlbzdDKsKz5qK42kqcxaep3gLl1dqX9P+MvO3anVJrByTUAAAAASUVORK5CYII=","aspectRatio":1,"src":"/static/60a1125d5e0bf980225d7b8d13e795a4/3891b/salesforce_logo.png","srcSet":"/static/60a1125d5e0bf980225d7b8d13e795a4/8ac63/salesforce_logo.png 200w,\\n/static/60a1125d5e0bf980225d7b8d13e795a4/3891b/salesforce_logo.png 400w","sizes":"(max-width: 400px) 100vw, 400px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABNklEQVQoz32RPUsDQRCG7yNoEBtF0qSJ2KmFlVaCSBBBCciuCUQtLEQUG9FG8AcI2qRMcSckWAmioF1QsLLYayJYWPgjLCVwPnPuxYDEg4eZHd55d/bGcewXRnoCFmEqrQVGeZwzPRo3qVMj94g+iEbwoSsswnZo9AxxHU7JR3uMRmDoJ1djzn8fwnGY56Zz4juY64+NmPgQGpXHeC+I1CFGl4HRVc5HaHdgDc0+NYlLsIt+UAzn4Am+oHP1VokFGi44zyJqY9giP4NneIEatUfiPRfcor0jb6BdEMMct3ear+W40S7HtukYJuWZcEDTFnEaVuAE6lCFG8xKTLmcTBjpbPrsip3wEzYRFDHJ9PlFA0wybPPcHwHNrt1oAcGqncRLt2q3J9t0ucT/NVZJn9S6Wzba+Qbw6t7CI1tWbQAAAABJRU5ErkJggg==","aspectRatio":2.857142857142857,"src":"/static/9917ecd396566fbd9e5ba6ce22bb4a56/bc8e0/shippo_logo.png","srcSet":"/static/9917ecd396566fbd9e5ba6ce22bb4a56/8ac63/shippo_logo.png 200w,\\n/static/9917ecd396566fbd9e5ba6ce22bb4a56/3891b/shippo_logo.png 400w,\\n/static/9917ecd396566fbd9e5ba6ce22bb4a56/bc8e0/shippo_logo.png 800w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAABKklEQVQY02OYtNdFa+Ieh+ldW12CGRhEGP4zMDCY+ykwQAEzEDMBMSMDJmCCYhDgg4tO2uN6YMGxkOetm13/R3faToKJs7IzswKpOiDWhQqxoRkoAMSRQNwIxBlwB9z5sv7/kTuT/9Svc/wf3WV39v9/kBsZOqCK1wPxUiAOAeI+IC4D4iYgng3EJVD2ASBuBeJ4IE5juP1q//9d15p+li+z/B/TZf9s0pkQDqiGmUA8BYj7gfgEENcA8XYgXgXEPUB8Foh7gbgBiJ2A+BYQWzK8/Hn2/9nH8/4XLzL9H9vj+N+30MAaKJHHyARWCHJZOJQGGVwMxPuBOBmII4A4HYjtoAauA3t69emCxbMOe14rW+zwLarD9kRir40OA25gC8QBWMQrgRgckwDBiVwjtiJEeAAAAABJRU5ErkJggg==","aspectRatio":3.465003465003465,"src":"/static/9d44931c77b4e0406d2a361296f321b3/bc8e0/Shopify_logo.png","srcSet":"/static/9d44931c77b4e0406d2a361296f321b3/8ac63/Shopify_logo.png 200w,\\n/static/9d44931c77b4e0406d2a361296f321b3/3891b/Shopify_logo.png 400w,\\n/static/9d44931c77b4e0406d2a361296f321b3/bc8e0/Shopify_logo.png 800w,\\n/static/9d44931c77b4e0406d2a361296f321b3/6050d/Shopify_logo.png 1200w,\\n/static/9d44931c77b4e0406d2a361296f321b3/00405/Shopify_logo.png 1600w,\\n/static/9d44931c77b4e0406d2a361296f321b3/9ab24/Shopify_logo.png 5000w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAABX0lEQVQoz4WSvUoDQRSF98cYC1mwsgla2Ig+gYmIfxCi4g9YWeyUOyFgISwKaimWIoKNIAQbwbyCCHcafQat8iLxm91ZWS3WgcO9c+bcc+/OrOf9WXFiihiA+1ibD6XNJfkFeFeWSyTINeJVLqXFU86QOAGGvfRrhOkZedpLP0eYDkG93LzaFFGsxXcFTfDGhNvwbeKrSmTZ6YLYDqClykyKGIDJEs+0MoXJ+L8T2bGtUZxN5u5PZ90HTHQL/wCuuK8+uEY7AF1XG6LJ6uy0Rf3PXVhjMJabyjk5D2CeKXpEfAN3h+kL+RNcWDyMKj8OhzV3UCs9jk9BxCfOgQijabgG+Qy6iCYN6uq/vlRLCOfb6bp0OEV8Qp5gNE9cQ3CAYIf9KrFlc3DIfomzBTQrNDkiWt0uPDWmzTRmExxjuI+xIi4i2oJbt2KV5bKHuAnXARvsZ9ljaODF6lr5nyCdb9gp33peadfdAAAAAElFTkSuQmCC","aspectRatio":2.142857142857143,"src":"/static/7917b5c7f4245889c2e8d23b40b5dc9a/bc8e0/Tata_Consultancy_Services_Logo.png","srcSet":"/static/7917b5c7f4245889c2e8d23b40b5dc9a/8ac63/Tata_Consultancy_Services_Logo.png 200w,\\n/static/7917b5c7f4245889c2e8d23b40b5dc9a/3891b/Tata_Consultancy_Services_Logo.png 400w,\\n/static/7917b5c7f4245889c2e8d23b40b5dc9a/bc8e0/Tata_Consultancy_Services_Logo.png 800w,\\n/static/7917b5c7f4245889c2e8d23b40b5dc9a/6050d/Tata_Consultancy_Services_Logo.png 1200w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAsUlEQVQI1yWOvQ5BQRCFb6WRCPECKsVsKYTuKrzHbKXWqsiNQksh8VOQEIVQiIRQiBCFhGfZfQLfUnx75syenZ3IW7OAplOTg9ipZJyVGr0KxF4li5acNVXqPJk6vkguDX18B1/gvoGmIo4LF10ae+obTAld8U+v5o3v4cfoB1bwgCOsydzRDWzhHBYLAxMY8WiG7qD966kk7l+HYSc44Jdoi+yQJSbUL29lQH+Oho/KX4t4dyKKSjMfAAAAAElFTkSuQmCC","aspectRatio":6.65587044534413,"src":"/static/9bd163ed5d0ff7fccae9f36749db3821/bc8e0/Temando-Logo.png","srcSet":"/static/9bd163ed5d0ff7fccae9f36749db3821/8ac63/Temando-Logo.png 200w,\\n/static/9bd163ed5d0ff7fccae9f36749db3821/3891b/Temando-Logo.png 400w,\\n/static/9bd163ed5d0ff7fccae9f36749db3821/bc8e0/Temando-Logo.png 800w,\\n/static/9bd163ed5d0ff7fccae9f36749db3821/6050d/Temando-Logo.png 1200w,\\n/static/9bd163ed5d0ff7fccae9f36749db3821/00405/Temando-Logo.png 1600w,\\n/static/9bd163ed5d0ff7fccae9f36749db3821/384ab/Temando-Logo.png 1644w","sizes":"(max-width: 800px) 100vw, 800px"}}}},{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAAA9klEQVQY02MoOG8kU3DecDOQXgaku/PPGmkyUALyzxtNBRqWAsTJ+eeM5hVfM8zVMzGS0tE3DtY1NFLXNTDWBWJhHQPjFF19YzsgW1LXwEgByJYDYgkgH6TGCcgWA9LyDECD5gHxVKBhz4GuewM08Iylj5GRtq7xcqCBdUBFs3T1jY7q6BstAhq6F8ifDcRhQDwBiOuBOB2IS4C4DChfxAA0aGfBOaPJQJeGAtk7Ci4YnrAKMOLQ0QO60MhID6jIT8fAKBCowRfoMl8g20UHYkgM0FVA1xuZA9n6QGwBxFZALxvqA114FkhvA4bhemLCEOhaTlxyAIdbWlUqoQRmAAAAAElFTkSuQmCC","aspectRatio":3.9682539682539684,"src":"/static/804bdd0e759074e905a57956dc8abc5f/bc8e0/tradegecko_logo.png","srcSet":"/static/804bdd0e759074e905a57956dc8abc5f/8ac63/tradegecko_logo.png 200w,\\n/static/804bdd0e759074e905a57956dc8abc5f/3891b/tradegecko_logo.png 400w,\\n/static/804bdd0e759074e905a57956dc8abc5f/bc8e0/tradegecko_logo.png 800w,\\n/static/804bdd0e759074e905a57956dc8abc5f/5d2c5/tradegecko_logo.png 1000w","sizes":"(max-width: 800px) 100vw, 800px"}}}}]}}}'
      );
    },
    EW4T: function(e, t, n) {
      'use strict';
      n('UQCJ'),
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.plus = void 0);
      t.plus = {
        viewBox: '0 0 20 20',
        children: [
          {
            name: 'path',
            attribs: {
              d:
                'M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601\r\n\tC4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399\r\n\tC15.952,9,16,9.447,16,10z',
            },
          },
        ],
      };
    },
    F1LP: function(e, t, n) {
      'use strict';
      n('PN9k');
      var a = n('ERkP'),
        i = n.n(a),
        r = n('MFEH'),
        o = n.n(r),
        c = n('dWle'),
        s = n('Eakc'),
        l = n('PPo7'),
        u = n('xqb7'),
        d = (n('kaGt'), n('k/KV')),
        p = n('kQsd'),
        g = n('6gYp'),
        f =
          (n('LrXc'),
          n('mIu7'),
          n('3HcQ'),
          n('NwWq'),
          n('maFc'),
          n('Yx6B'),
          n('6w2u'),
          n('zprd'),
          n('B01d'),
          n('oJks'),
          n('Hozq'),
          n('HllF'),
          n('9pnl'),
          n('sIZv'),
          n('IX0j'),
          n('OJ1S'),
          n('VhxM'),
          n('2gO3'),
          n('Ael1')),
        A = n.n(f),
        m = (n('Us+g'), n('1YaQ'), n('pd3y'), n('pXmH'), n('/rHm'), n('4OKs')),
        M = n.n(m),
        y = n('c2g6'),
        L = n.n(y),
        j = (n('dmOZ'), n('cGUT')),
        h = n.n(j),
        b =
          (n('35q9'),
          n('xP/0'),
          n('Hh3V'),
          n('lPOj'),
          n('uZbH'),
          n('le+n'),
          n('TGjy'),
          n('qha7'),
          n('U8vK')),
        N = n.n(b),
        I = n('JX5i'),
        x = n.n(I),
        S = n('/MYt'),
        w = n.n(S),
        v = n('HAw/'),
        E = n.n(v),
        D =
          (n('QXSe'),
          function(e) {
            var t,
              n,
              a,
              r,
              u,
              f = e.sectionWrapper,
              m = e.row,
              y = (e.col, e.col1, e.col2),
              j =
                (e.secTitleWrapper,
                e.secHeading,
                e.secText,
                e.featureItemHeading),
              b = e.featureItemDes,
              I = e.featureItemSubHeading;
            return i.a.createElement(
              c.a,
              f,
              i.a.createElement(
                p.a,
                { className: 'Icon_Hover_Container HomePlatform_IconHover' },
                i.a.createElement(
                  c.a,
                  Object.assign({}, m, {
                    className: 'feature_hover_section_container',
                  }),
                  i.a.createElement(
                    c.a,
                    y,
                    g.b.animation
                      ? i.a.createElement(
                          o.a,
                          { bottom: !0, delay: 120 },
                          i.a.createElement(g.b, {
                            className: 'feature_hover_sectionItem_container',
                          })
                        )
                      : i.a.createElement(g.b, {
                          className:
                            'feature_hover_sectionItem_container text_center',
                          title: i.a.createElement(
                            l.a,
                            Object.assign({}, j, {
                              className: 'text_center',
                              content: 'EyeMagic',
                            })
                          ),
                          description: i.a.createElement(
                            s.a,
                            Object.assign({}, b, {
                              className: 'text_center',
                              content:
                                'Speed up document processing using computer vision capabilities including advanced handwriting recognition.',
                            })
                          ),
                          icon: i.a.createElement(d.a, {
                            src: L.a,
                            alt: 'EyeMagic',
                            className: 'home_features_icon',
                          }),
                        })
                  ),
                  i.a.createElement(
                    c.a,
                    y,
                    g.b.animation
                      ? i.a.createElement(
                          o.a,
                          { bottom: !0, delay: 120 },
                          i.a.createElement(g.b, {
                            className: 'feature_hover_sectionItem_container',
                          })
                        )
                      : i.a.createElement(g.b, {
                          className:
                            'feature_hover_sectionItem_container text_center',
                          title: i.a.createElement(
                            l.a,
                            Object.assign({}, j, {
                              className: 'text_center',
                              content: 'ResponseGenie',
                            })
                          ),
                          description: i.a.createElement(
                            s.a,
                            Object.assign({}, b, {
                              className: 'text_center',
                              content:
                                'Improve response time and enhance customer engagement with content, intent analysis and entity extraction.',
                            })
                          ),
                          icon: i.a.createElement(d.a, {
                            src: x.a,
                            alt: 'ResponseGenie',
                            className: 'home_features_icon',
                          }),
                        })
                  ),
                  i.a.createElement(
                    c.a,
                    y,
                    g.b.animation
                      ? i.a.createElement(
                          o.a,
                          { bottom: !0, delay: 120 },
                          i.a.createElement(g.b, {
                            className: 'feature_hover_sectionItem_container',
                          })
                        )
                      : i.a.createElement(g.b, {
                          className:
                            'feature_hover_sectionItem_container text_center',
                          title: i.a.createElement(
                            l.a,
                            Object.assign({}, j, {
                              className: 'text_center',
                              content: 'RPA',
                            })
                          ),
                          description: i.a.createElement(
                            s.a,
                            Object.assign({}, b, {
                              className: 'text_center',
                              content:
                                'Reduce costs by automating business workflows with the combined power of AI, RPA and IPA for greater efficiency.',
                            })
                          ),
                          icon: i.a.createElement(d.a, {
                            src: w.a,
                            alt: 'RPA',
                            className: 'home_features_icon',
                          }),
                        })
                  )
                )
              ),
              i.a.createElement(
                p.a,
                {
                  className:
                    'Icon_Hover_Container HomeMaximizeProcessEfficiency_IconHover',
                },
                i.a.createElement(
                  c.a,
                  Object.assign({}, m, {
                    className: 'feature_hover_section_container',
                  }),
                  i.a.createElement(
                    c.a,
                    y,
                    g.b.animation
                      ? i.a.createElement(
                          o.a,
                          { bottom: !0, delay: 120 },
                          i.a.createElement(g.b, {
                            className: 'feature_hover_sectionItem_container',
                          })
                        )
                      : i.a.createElement(
                          g.b,
                          (((t = {
                            className:
                              'feature_hover_sectionItem_container text_center',
                            title: i.a.createElement(
                              l.a,
                              Object.assign({}, j, {
                                className: 'text_center',
                                content: 'Accelerate Processes',
                              })
                            ),
                            description: i.a.createElement(
                              s.a,
                              Object.assign({}, I, {
                                className: 'text_center',
                                content: 'From days to minutes',
                              })
                            ),
                          }).description = i.a.createElement(
                            s.a,
                            Object.assign({}, b, {
                              className: 'text_center',
                              content:
                                'Speed up document processing using computer vision capabilities including advanced handwriting recognition.',
                            })
                          )),
                          (t.icon = i.a.createElement(d.a, {
                            src: A.a,
                            alt: 'Accelerate Process',
                            className: 'home_features_icon',
                          })),
                          t)
                        )
                  ),
                  i.a.createElement(
                    c.a,
                    y,
                    g.b.animation
                      ? i.a.createElement(
                          o.a,
                          { bottom: !0, delay: 120 },
                          i.a.createElement(g.b, {
                            className: 'feature_hover_sectionItem_container',
                          })
                        )
                      : i.a.createElement(
                          g.b,
                          (((n = {
                            className:
                              'feature_hover_sectionItem_container text_center',
                            title: i.a.createElement(
                              l.a,
                              Object.assign({}, j, {
                                className: 'text_center',
                                content: 'Scale-up with Ease',
                              })
                            ),
                            description: i.a.createElement(
                              s.a,
                              Object.assign({}, I, {
                                className: 'text_center',
                                content: 'Unlimited Capacity',
                              })
                            ),
                          }).description = i.a.createElement(
                            s.a,
                            Object.assign({}, b, {
                              className: 'text_center',
                              content:
                                'Augment capacity with automation and scale-up volumes with greater accuracy and efficiency.',
                            })
                          )),
                          (n.icon = i.a.createElement(d.a, {
                            src: E.a,
                            alt: 'Scaleup with ease',
                            className: 'home_features_icon',
                          })),
                          n)
                        )
                  ),
                  i.a.createElement(
                    c.a,
                    y,
                    g.b.animation
                      ? i.a.createElement(
                          o.a,
                          { bottom: !0, delay: 120 },
                          i.a.createElement(g.b, {
                            className: 'feature_hover_sectionItem_container',
                          })
                        )
                      : i.a.createElement(
                          g.b,
                          (((a = {
                            className:
                              'feature_hover_sectionItem_container text_center',
                            title: i.a.createElement(
                              l.a,
                              Object.assign({}, j, {
                                className: 'text_center',
                                content: 'Reduce Operating Costs',
                              })
                            ),
                            description: i.a.createElement(
                              s.a,
                              Object.assign({}, I, {
                                className: 'text_center',
                                content: '30% – 70% Reduction',
                              })
                            ),
                          }).description = i.a.createElement(
                            s.a,
                            Object.assign({}, b, {
                              className: 'text_center',
                              content:
                                'Cut down Opex with automation powered by AI that provides accurate results faster at lesser cost.',
                            })
                          )),
                          (a.icon = i.a.createElement(d.a, {
                            src: N.a,
                            alt: 'Reduce Operating Costs',
                            className: 'home_features_icon',
                          })),
                          a)
                        )
                  ),
                  i.a.createElement(
                    c.a,
                    y,
                    g.b.animation
                      ? i.a.createElement(
                          o.a,
                          { bottom: !0, delay: 120 },
                          i.a.createElement(g.b, {
                            className: 'feature_hover_sectionItem_container',
                          })
                        )
                      : i.a.createElement(
                          g.b,
                          (((r = {
                            className:
                              'feature_hover_sectionItem_container text_center',
                            title: i.a.createElement(
                              l.a,
                              Object.assign({}, j, {
                                className: 'text_center',
                                content: 'Enhance Accuracy',
                              })
                            ),
                            description: i.a.createElement(
                              s.a,
                              Object.assign({}, I, {
                                className: 'text_center',
                                content: 'Reduction in errors',
                              })
                            ),
                          }).description = i.a.createElement(
                            s.a,
                            Object.assign({}, b, {
                              className: 'text_center',
                              content:
                                'Guaranteed accurate outputs and results through intelligent automation that minimizes errors.',
                            })
                          )),
                          (r.icon = i.a.createElement(d.a, {
                            src: M.a,
                            alt: 'Enhance Accuracy',
                            className: 'home_features_icon',
                          })),
                          r)
                        )
                  ),
                  i.a.createElement(
                    c.a,
                    y,
                    g.b.animation
                      ? i.a.createElement(
                          o.a,
                          { bottom: !0, delay: 120 },
                          i.a.createElement(g.b, {
                            className: 'feature_hover_sectionItem_container',
                          })
                        )
                      : i.a.createElement(
                          g.b,
                          (((u = {
                            className:
                              'feature_hover_sectionItem_container text_center',
                            title: i.a.createElement(
                              l.a,
                              Object.assign({}, j, {
                                className: 'text_center',
                                content: 'Free Up Critical Resources',
                              })
                            ),
                            description: i.a.createElement(
                              s.a,
                              Object.assign({}, I, {
                                className: 'text_center',
                                content: 'More man hours for critical tasks',
                              })
                            ),
                          }).description = i.a.createElement(
                            s.a,
                            Object.assign({}, b, {
                              className: 'text_center',
                              content:
                                'Free up critical resources for higher value-add tasks rather than repetitive low-value ones.',
                            })
                          )),
                          (u.icon = i.a.createElement(d.a, {
                            src: h.a,
                            alt: 'Free up critical resources',
                            className: 'home_features_icon',
                          })),
                          u)
                        )
                  )
                )
              )
            );
          });
      D.defaultProps = {
        sectionWrapper: {
          as: 'section',
          id: 'feature_hover_section',
          className: 'service_section',
          pt: ['15px', '15px', '15px', '15px'],
          background: 'transparent',
        },
        secTitleWrapper: { mb: ['10px', '10px', '10x', '10px'] },
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
          fontSize: ['16px', '16px'],
          fontWeight: '400',
          color: '#0f2137',
          letterSpacing: '-0.025em',
          mb: '0',
        },
        row: { flexBox: !0, flexWrap: 'wrap', ml: '-15px', mr: '-15px' },
        col: {
          className: 'col',
          width: [1, 0.5, 0.5, 0.25],
          pr: '15px',
          pl: '15px',
          mb: '20px',
        },
        col1: {
          className: 'col1',
          width: [1, 0.5, 0.5, 0.33],
          pr: '15px',
          pl: '15px',
          mb: '20px',
        },
        col2: {
          className: 'col2',
          width: [1, 0.5, 0.5, 0.33],
          pr: '15px',
          pl: '15px',
          mb: '20px',
        },
        featureItemHeading: {
          fontSize: ['16px', '16px', '18px', '18px'],
          fontWeight: '400',
          color: '#0f2137',
          lineHeight: '1.5',
          mb: ['5px', '5px', '5px', '5px'],
          letterSpacing: '-0.020em',
          maxWidth: ['auto', 'auto', 'auto', '180px'],
        },
        featureItemDes: {
          fontSize: ['14px', '14px', '15px', '15px'],
          lineHeight: '1.75',
          color: '#343d48cc',
          mb: ['10px', '10px', '10px', '10px'],
        },
        featureItemSubHeading: {
          fontSize: ['14px', '14px', '15px', '15px'],
          fontWeight: '400',
          lineHeight: '1.75',
          color: '#343d48cc',
          mb: ['10px', '10px', '10px', '10px'],
        },
      };
      var C = D,
        T = n('tqR7'),
        z = n.n(T),
        O = n('mADY'),
        k = n.n(O),
        Y = (n('RRl3'), n('Wbzz')),
        P =
          (n('AVYp'),
          function(e) {
            var t = e.sectionWrapper,
              n = e.row,
              a = e.col,
              r = (e.col1, e.col2, e.col3, e.title),
              g = e.description,
              f = e.subtitle,
              A = e.button,
              m = e.textArea;
            e.imageArea,
              e.imageAreaRow,
              e.imageWrapper,
              e.imageWrapperOne,
              e.imageWrapperTwo,
              e.secTitleWrapper,
              e.secHeading,
              e.secText;
            return i.a.createElement(
              c.a,
              Object.assign({}, t, { id: 'info_home' }),
              i.a.createElement(
                p.a,
                null,
                i.a.createElement(
                  l.a,
                  Object.assign({}, r, {
                    className: 'text_center',
                    content: 'The Platform',
                  })
                ),
                i.a.createElement(
                  c.a,
                  { className: 'HomeSection1' },
                  i.a.createElement(
                    c.a,
                    { className: 'info_order_change' },
                    i.a.createElement(
                      o.a,
                      { bottom: !0, cascade: !0 },
                      i.a.createElement(
                        s.a,
                        Object.assign({}, g, {
                          className: 'intro_text_container2',
                          content:
                            'The RAP AI platform with its core engines – EyeMagic and ResponseGenie automates a range of tasks and processes across various industries with extremely high efficiency and accuracy. IPA (Intelligent Process Automation) combines the power of business process automation, RPA and AI to extract structured content from a range of sources.',
                        })
                      )
                    )
                  ),
                  i.a.createElement(C, null)
                ),
                i.a.createElement('div', { className: 'empty_space30' })
              ),
              i.a.createElement(
                c.a,
                { className: 'section_background_color' },
                i.a.createElement('div', { className: 'empty_space10' }),
                i.a.createElement(
                  p.a,
                  null,
                  i.a.createElement(
                    l.a,
                    Object.assign({}, r, {
                      className: 'text_center',
                      content: 'Maximize Process Efficiency',
                    })
                  ),
                  i.a.createElement(
                    c.a,
                    { className: 'HomeSection2' },
                    i.a.createElement(
                      c.a,
                      { className: 'info_order_change' },
                      i.a.createElement(
                        o.a,
                        { bottom: !0, cascade: !0 },
                        i.a.createElement(
                          s.a,
                          Object.assign({}, g, {
                            className: 'intro_text_container2',
                            content:
                              'The RAP AI platform is a cutting-edge, AI-powered content intelligence platform that automates extraction of structured data from unstructured content – ranging from emails, images, support tickets, documents, contracts, checks, pretty much anything.',
                          })
                        )
                      )
                    ),
                    i.a.createElement('br', null),
                    i.a.createElement(C, null)
                  ),
                  i.a.createElement('div', { className: 'empty_space40' })
                )
              ),
              i.a.createElement(
                c.a,
                { className: 'section_background_color' },
                i.a.createElement(
                  p.a,
                  null,
                  i.a.createElement(
                    c.a,
                    Object.assign({}, n, {
                      style: { alignItems: 'center', justifyContent: 'center' },
                    }),
                    i.a.createElement(
                      c.a,
                      Object.assign({}, a, m, {
                        className: 'info_order_change',
                      }),
                      i.a.createElement(
                        o.a,
                        { bottom: !0, cascade: !0 },
                        i.a.createElement(
                          l.a,
                          Object.assign({}, r, {
                            style: { marginBottom: '5px' },
                            content: 'Dr. Commerce',
                          })
                        ),
                        i.a.createElement(
                          s.a,
                          Object.assign({}, f, {
                            style: { fontWeight: '500' },
                            content:
                              'For Your eCommerce Health Today and Tomorrow',
                          })
                        ),
                        i.a.createElement(
                          s.a,
                          Object.assign({}, g, {
                            content:
                              'Are you hitting your target eCommerce KPIs and realizing the available omnichannel opportunity in your industry? Dr. Commerce can look at your current symptoms and prescribe remedies to meet your short term online business goals. Furthermore, with a more comprehensive review, Dr. Commerce can help you prioritize longer-term actions that will bring you to peak omnichannel performance.',
                          })
                        ),
                        i.a.createElement(
                          Y.Link,
                          { to: '/contact' },
                          i.a.createElement(
                            u.a,
                            Object.assign({}, A, { title: 'Learn More' })
                          )
                        )
                      ),
                      i.a.createElement('div', { className: 'empty_space40' })
                    ),
                    i.a.createElement(
                      c.a,
                      Object.assign({}, a, m, {
                        className: 'Home_Image_container',
                      }),
                      i.a.createElement(
                        o.a,
                        { bottom: !0, cascade: !0 },
                        i.a.createElement(d.a, {
                          src: z.a,
                          alt: 'Info Image One',
                        })
                      )
                    )
                  )
                )
              ),
              i.a.createElement(
                p.a,
                null,
                i.a.createElement(
                  c.a,
                  Object.assign({}, n, {
                    style: { alignItems: 'center', justifyContent: 'center' },
                  }),
                  i.a.createElement(
                    c.a,
                    Object.assign({}, a, m, {
                      className: 'Home_Image_container',
                    }),
                    i.a.createElement(
                      o.a,
                      { bottom: !0, cascade: !0 },
                      i.a.createElement(d.a, {
                        src: k.a,
                        alt: 'Info Image One',
                      })
                    )
                  ),
                  i.a.createElement(
                    c.a,
                    Object.assign({}, a, m, { className: 'info_order_change' }),
                    i.a.createElement(
                      o.a,
                      { bottom: !0, cascade: !0 },
                      i.a.createElement(
                        l.a,
                        Object.assign({}, r, {
                          style: { marginBottom: '5px' },
                          content: 'Universal Commerce',
                        })
                      ),
                      i.a.createElement(
                        s.a,
                        Object.assign({}, f, {
                          style: { fontWeight: 500 },
                          content:
                            'Best of Breed Innovation and Disruption on a Single Platform',
                        })
                      ),
                      i.a.createElement(
                        s.a,
                        Object.assign({}, g, {
                          content:
                            'Rule your eCommerce empire with ease and confidence through a single platform. That’s right, a single window to your entire eCommerce ecosystem, no matter how big. No more silos that slow things down. Jump to light speed with the sophisticated power of Universal Commerce that unifies all your eCommerce operations.',
                        })
                      ),
                      i.a.createElement(
                        Y.Link,
                        { to: '/contact', className: 'LinkButton' },
                        i.a.createElement(
                          u.a,
                          Object.assign({}, A, { title: 'Learn More' })
                        )
                      ),
                      i.a.createElement('br', null)
                    )
                  )
                )
              )
            );
          });
      P.defaultProps = {
        sectionWrapper: {
          as: 'section',
          pb: ['25px', '25px', '25px', '25px', '25px'],
          id: 'info_section',
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
        row: {
          flexBox: !0,
          flexWrap: 'wrap',
          ml: '-15px',
          mr: '-15px',
          alignItems: 'center',
        },
        imageAreaRow: { flexDirection: 'row-reverse' },
        col: { pr: '15px', pl: '15px' },
        col1: { width: ['100%', '100%', '100%', '49%', '49%'] },
        col2: { width: ['100%', '100%', '100%', '49%', '49%'] },
        col3: { width: '70%' },
        textArea: { width: ['100%', '100%', '100%', '49%', '49%'] },
        imageArea: {
          width: ['100%', '100%', '50%'],
          flexBox: !0,
          flexDirection: 'row-reverse',
        },
        imageWrapper: { boxShadow: 'none' },
        imageWrapperOne: { ml: '-200px' },
        imageWrapperTwo: { alignSelf: 'flex-end', mb: '-60px' },
        title: {
          fontSize: ['30px', '30px', '35px', '40px', '45px'],
          color: '#0F2137',
          letterSpacing: '-0.025em',
          mb: '25px',
          mt: '25px',
        },
        subtitle: {
          fontSize: ['20px', '22px', '22px', '22px', '22px'],
          fontFamily: 'RobotoSlab-SemiBold',
          mb: '25px',
          color: '#5E7086',
        },
        description: {
          fontSize: ['16px', '18px', '18px', '18px', '18px'],
          color: '#252525',
          lineHeight: '1.5',
          mb: '10px',
        },
        button: {
          type: 'button',
          fontSize: '14px',
          fontWeight: '600',
          color: '#fff',
          borderRadius: '4px',
          pl: '22px',
          pr: '22px',
          colors: 'primaryWithBg',
          height: '{5}',
          marginTop: '14px',
        },
      };
      t.a = P;
    },
    'HAw/': function(e, t) {
      e.exports =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDMuMTgiIGhlaWdodD0iMTAxLjUzIiBmaWxsPSJub25lIiBzdHJva2U9IiMwZjQ2Y2EiIHN0cm9rZS13aWR0aD0iMiI+PGcgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00NS42NSA2N3YzMy4yN0gxLjQ0di00NC4yaDM1LjQiLz48cGF0aCBkPSJNMzcuMDQgMS42OGg2NC40djY0LjRoLTY0LjR6Ii8+PC9nPjxwYXRoIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTY1Ljc3IDE0Ljk4SDg2LjZ2MjEuNCIvPjxwYXRoIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTEyLjc1IDg4LjgzTDg2LjYgMTQuOTgiLz48L3N2Zz4=';
    },
    HJRI: function(e, t, n) {
      'use strict';
      n('Fup4'),
        n('RwQI'),
        n('cM8k'),
        n('3EZN'),
        n('4SWW'),
        n('r0id'),
        n('lE7+'),
        n('LnO1'),
        n('3eMz'),
        n('dtAy'),
        n('DB+v'),
        n('PN9k'),
        n('XjK0'),
        n('SCO9'),
        n('UQCJ'),
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.NextArrow = t.PrevArrow = void 0);
      var a = o(n('ERkP')),
        i = o(n('O94r')),
        r = n('M4TR');
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c(e) {
        return (c =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function s() {
        return (s =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          }).apply(this, arguments);
      }
      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(n, !0).forEach(function(t) {
                d(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(n).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function d(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function p(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function g(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            'value' in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      function f(e, t, n) {
        return t && g(e.prototype, t), n && g(e, n), e;
      }
      function A(e, t) {
        return !t || ('object' !== c(t) && 'function' != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function m(e) {
        return (m = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function M(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && y(e, t);
      }
      function y(e, t) {
        return (y =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var L = (function(e) {
        function t() {
          return p(this, t), A(this, m(t).apply(this, arguments));
        }
        return (
          M(t, e),
          f(t, [
            {
              key: 'clickHandler',
              value: function(e, t) {
                t && t.preventDefault(), this.props.clickHandler(e, t);
              },
            },
            {
              key: 'render',
              value: function() {
                var e = { 'slick-arrow': !0, 'slick-prev': !0 },
                  t = this.clickHandler.bind(this, { message: 'previous' });
                !this.props.infinite &&
                  (0 === this.props.currentSlide ||
                    this.props.slideCount <= this.props.slidesToShow) &&
                  ((e['slick-disabled'] = !0), (t = null));
                var n = {
                    key: '0',
                    'data-role': 'none',
                    className: (0, i.default)(e),
                    style: { display: 'block' },
                    onClick: t,
                  },
                  r = {
                    currentSlide: this.props.currentSlide,
                    slideCount: this.props.slideCount,
                  };
                return this.props.prevArrow
                  ? a.default.cloneElement(
                      this.props.prevArrow,
                      u({}, n, {}, r)
                    )
                  : a.default.createElement(
                      'button',
                      s({ key: '0', type: 'button' }, n),
                      ' ',
                      'Previous'
                    );
              },
            },
          ]),
          t
        );
      })(a.default.PureComponent);
      t.PrevArrow = L;
      var j = (function(e) {
        function t() {
          return p(this, t), A(this, m(t).apply(this, arguments));
        }
        return (
          M(t, e),
          f(t, [
            {
              key: 'clickHandler',
              value: function(e, t) {
                t && t.preventDefault(), this.props.clickHandler(e, t);
              },
            },
            {
              key: 'render',
              value: function() {
                var e = { 'slick-arrow': !0, 'slick-next': !0 },
                  t = this.clickHandler.bind(this, { message: 'next' });
                (0, r.canGoNext)(this.props) ||
                  ((e['slick-disabled'] = !0), (t = null));
                var n = {
                    key: '1',
                    'data-role': 'none',
                    className: (0, i.default)(e),
                    style: { display: 'block' },
                    onClick: t,
                  },
                  o = {
                    currentSlide: this.props.currentSlide,
                    slideCount: this.props.slideCount,
                  };
                return this.props.nextArrow
                  ? a.default.cloneElement(
                      this.props.nextArrow,
                      u({}, n, {}, o)
                    )
                  : a.default.createElement(
                      'button',
                      s({ key: '1', type: 'button' }, n),
                      ' ',
                      'Next'
                    );
              },
            },
          ]),
          t
        );
      })(a.default.PureComponent);
      t.NextArrow = j;
    },
    Hh3V: function(e, t) {
      e.exports =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+PGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMGY0NmNhIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCI+PHBhdGggZD0iTTk4LjMzIDEwLjIzdjUxLjI0SDEuNjdWMTAuMjNjMC0zLjkyIDMuMTgtNy4xIDcuMS03LjFoODIuNDVjMy45My0uMDEgNy4xIDMuMTcgNy4xIDcuMXoiLz48cGF0aCBkPSJNNjMuNDUgMjYuOTRsLTEuNyAzLjE0LTkuNTQtOS42IDIuNjQtMi4zNCA4LjYgOC44em0zLjE4IDExLjdoMy41MnY1LjloLTMuNTJ2LTUuOXptLTM2LjgtMThoMy41MmwtLjAxIDQuN2gtMy41MmwuMDEtNC43em00Ljk4IDE3LjU0bDIuNS0yLjUgOC44NSA5LjEzLTIuNSAyLjUtOC44NS05LjEzeiIvPjxwYXRoIGQ9Ik00Ny45MyAzOC42NGgzLjUydjUuNGgtMy41MnYtNS40em01MC40IDIyLjgzdjYuNDhjMCAzLjkyLTMuMTggNy4xLTcuMSA3LjFIOC43N2MtMy45MiAwLTcuMS0zLjE4LTcuMS03LjF2LTYuNDhoOTYuNjZ6TTM2LjQgNzUuMDZoMjcuMnYxOC45SDM2LjR2LTE4Ljl6bS00LjgtNjcuOGMtMy42NyAwLTYuNjUgMi45OC02LjY1IDYuNjVhNi42NSA2LjY1IDAgMSAwIDEzLjMgMGMwLTMuNjctMi45OC02LjY1LTYuNjUtNi42NXptMzYuOCAxMy4zYTYuNjUgNi42NSAwIDAgMCA2LjY1LTYuNjVjMC0zLjY3LTIuOTgtNi42NS02LjY1LTYuNjVzLTYuNjUgMi45OC02LjY1IDYuNjVjMCAzLjY2IDIuOTggNi42NCA2LjY1IDYuNjV6TTQ5LjcgNy4yNWMtMy42NyAwLTYuNjUgMi45OC02LjY1IDYuNjVzMi45OCA2LjY1IDYuNjUgNi42NSA2LjY1LTIuOTggNi42NS02LjY1LTIuOTgtNi42NS02LjY1LTYuNjV6Ii8+PHVzZSB4bGluazpocmVmPSIjQiIvPjx1c2UgeGxpbms6aHJlZj0iI0IiIHg9IjM2LjgiLz48cGF0aCBkPSJNNDkuNyAyNS4zM2MtMy42NyAwLTYuNjUgMi45OC02LjY1IDYuNjVzMi45OCA2LjY1IDYuNjUgNi42NSA2LjY1LTIuOTggNi42NS02LjY1LTIuOTgtNi42NS02LjY1LTYuNjV6bS0xNS41NSAxOS4yYzMuNCAxLjQgNSA1LjMgMy42IDguN3MtNS4zIDUtOC43IDMuNi01LTUuMy0zLjYtOC43IDUuMy01IDguNy0zLjZ6bTQwLjggNS4wOGE2LjY1MSA2LjY1MSAwIDEgMS0xMy4xMyAyLjEzYy0uNi0zLjYzIDEuODctNy4wNSA1LjUtNy42MyAzLjYzLS42IDcuMDQgMS44OCA3LjYzIDUuNXpNNDkuNyA0NC4wNGMtMy42NyAwLTYuNjUgMi45OC02LjY1IDYuNjVhNi42NSA2LjY1IDAgMSAwIDEzLjMgMGMwLTMuNjgtMi45OC02LjY2LTYuNjUtNi42NXptMjIuNzcgNTIuODRIMjcuNTNhMS40NiAxLjQ2IDAgMCAxLTEuNDYtMS40NmMwLS44LjY1LTEuNDYgMS40Ni0xLjQ2aDQ0Ljk0YTEuNDYgMS40NiAwIDEgMSAwIDIuOTJ6Ii8+PC9nPjxkZWZzID48cGF0aCBpZD0iQiIgZD0iTTMxLjYgMjUuMzNjLTMuNjcgMC02LjY1IDIuOTgtNi42NSA2LjY1czIuOTggNi42NSA2LjY1IDYuNjUgNi42NS0yLjk4IDYuNjUtNi42NWE2LjY1IDYuNjUgMCAwIDAtNi42NS02LjY1eiIvPjwvZGVmcz48L3N2Zz4=';
    },
    HnfQ: function(e, t, n) {
      var a = n('lxLN'),
        i = n('yPRz').each;
      function r(e, t) {
        (this.query = e),
          (this.isUnconditional = t),
          (this.handlers = []),
          (this.mql = window.matchMedia(e));
        var n = this;
        (this.listener = function(e) {
          (n.mql = e.currentTarget || e), n.assess();
        }),
          this.mql.addListener(this.listener);
      }
      (r.prototype = {
        constuctor: r,
        addHandler: function(e) {
          var t = new a(e);
          this.handlers.push(t), this.matches() && t.on();
        },
        removeHandler: function(e) {
          var t = this.handlers;
          i(t, function(n, a) {
            if (n.equals(e)) return n.destroy(), !t.splice(a, 1);
          });
        },
        matches: function() {
          return this.mql.matches || this.isUnconditional;
        },
        clear: function() {
          i(this.handlers, function(e) {
            e.destroy();
          }),
            this.mql.removeListener(this.listener),
            (this.handlers.length = 0);
        },
        assess: function() {
          var e = this.matches() ? 'on' : 'off';
          i(this.handlers, function(t) {
            t[e]();
          });
        },
      }),
        (e.exports = r);
    },
    JX5i: function(e, t) {
      e.exports =
        'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMy4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSI0OC43cHgiIGhlaWdodD0iMTAwcHgiIHZpZXdCb3g9IjAgMCA0OC43IDEwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDguNyAxMDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiMwRjQ2Q0E7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCjwvc3R5bGU+DQo8Zz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTcsMTIuOGw1LjIsMi4xYzAsMC03LjEsNC40LTcuNSw5LjNDMTQuNywyNC4xLDEzLjcsMTYuMSwxNywxMi44eiIvPg0KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNi44LDI1LjZjMCwwLDIuMS02LjgsNy44LTlsNC45LDQuM0MyOS41LDIwLjksMjEsMTkuMywxNi44LDI1LjZ6Ii8+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTguOSwxMmw1LjgsMC41YzAsMC0zLDIuOS0yLjUsMTEuN0MxMi4yLDI0LjEsNi4xLDIxLjQsOC45LDEyeiIvPg0KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMC4xLDkuNWMwLDAsMy45LTQuMiw2LjEtNS40YzAsMCwxNC45LTAuNSwxNS4zLDE1LjdDMzEuNSwxOS45LDI0LjMsOC40LDEwLjEsOS41eiIvPg0KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMC44LDIuNWMwLDAsNC4xLTEuNCw5LjctMC45YzAsMCwxMSw2LjEsNC4yLDE3LjhDMzQuNywxOS41LDM0LjMsMy44LDIwLjgsMi41eiIvPg0KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zNy45LDE4LjFMMzcuOSwxOC4xYzEuNS0yLjYsMi4xLTUuOSwxLjUtOC45Yy0wLjMtMS41LTAuOC0yLjktMS42LTQuMmMtMC40LTAuNi0wLjgtMS4zLTEuMy0xLjgNCgkJYy0wLjUtMC42LTEuMi0xLTEuNi0xLjZjMS41LDAuNSwyLjksMS4zLDQuMSwyLjNjMS4yLDEuMSwyLjIsMi40LDIuNiw0YzAuNCwxLjIsMC40LDIuNiwwLjMsMy45Yy0wLjEsMS4zLTAuNSwyLjYtMS4xLDMuNw0KCQlDNDAuMSwxNi41LDM5LjEsMTcuNSwzNy45LDE4LjF6Ii8+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE1LjEsMzEuNmMwLDAtMi42LDEuNi0zLjUsMy45YzAsMC01LjEtMC44LTcuNSwwLjJDNC4xLDM1LjYsMTEuOCwzMS43LDE1LjEsMzEuNnoiLz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzIuMiwzNC41YzAsMCw1LDEuMiw3LjYsMTJjLTAuMSwwLDUuMSwwLDYuNiwxLjlDNDYuMyw0OC4zLDQyLjcsMzcuOSwzMi4yLDM0LjV6Ii8+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE5LjYsNTguNGMwLDAsMy4xLTAuNyw3LTUuN2MwLDAsNS4zLTYuMywxMi4zLTIuOGwtMC41LDAuMmMtMC40LDAuMi0wLjgsMC40LTEuMiwwLjZjLTAuNywwLjQtMS40LDEtMS45LDEuNg0KCQljLTEuMSwxLjQtMi4xLDIuOS0zLjIsNC4zYy0wLjcsMC44LTEuNSwxLjctMi4zLDIuNEMyOS44LDU5LjEsMjYuMiw2Mi40LDE5LjYsNTguNHoiLz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTUuNyw1OS41YzAuMywwLjMsMC42LDAuNSwxLDAuN2MxLDAuNiwyLDEuMiwzLjEsMS41YzEuOCwwLjYsMy43LDAuOSw1LjUsMWMyLjcsMC4xLDUuNS0wLjMsOC4xLTAuOQ0KCQljMC41LTAuMSwxLTAuMywxLjUtMC40YzAuNS0wLjEsMS0wLjMsMS41LTAuNGMwLjEsMC4yLDAsMC40LDAsMC42YzAsMC4zLTAuMSwwLjctMC4yLDFjLTAuMiwxLjEtMC42LDIuMS0xLjEsMw0KCQljLTAuNCwwLjgtMSwxLjYtMS42LDIuM2MtMC43LDAuNy0xLjQsMS40LTIuMSwyYy0wLjcsMC43LTEuNSwxLjQtMi4yLDJjLTEuNiwxLjUtMy40LDMuMS0zLjcsNS40Yy0wLjMsMi4yLDEsNCwyLjksNS4xbDkuMSw0LjgNCgkJYzEuMywwLjcsMi41LDEuOSwzLjEsMy4yYzAuOSwyLDAuMSw0LjQtMS4zLDZjLTAuNCwwLjQtMC44LDAuNy0xLjIsMS4xYy0wLjIsMC4yLTAuNSwwLjMtMC44LDAuNWMtMC4yLDAuMS0wLjYsMC4zLTAuOCwwLjUNCgkJYzAsMCwzLjctMy41LDAuMy03LjVjLTAuMi0wLjItMC41LTAuNC0wLjctMC42Yy0wLjktMC42LTItMS4xLTMtMS41Yy0yLjEtMC44LTQuMi0xLjQtNi40LTEuOWMtMS41LTAuMy0zLjEtMC41LTQuNS0xLjENCgkJcy0yLjctMS41LTMuOS0yLjRjLTEuMS0wLjgtMi0xLjgtMi41LTNjLTAuNi0xLjMtMC45LTIuOC0xLTQuMmMtMC4xLTEuMy0wLjEtMi42LDAuMi0zLjhjMC4zLTEuNCwwLjktMi43LDEuMS00LjENCgkJYzAuNC0yLjIsMC00LjQtMC4xLTYuNkMxNiw2MSwxNS45LDYwLjIsMTUuNyw1OS41eiIvPg0KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zNC43LDU4LjVjMCwwLDEwLjIsMi40LDEyLjctNy4zYzAuMS0wLjItMi42LTAuNi0yLjgtMC43Yy0xLjYtMC4yLTMuOSwwLjEtNSwxLjVjLTAuOSwxLjMtMS44LDIuNS0yLjgsMy44DQoJCUMzNi4zLDU2LjcsMzUuNiw1Ny43LDM0LjcsNTguNXoiLz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMS4yLDQxYzAsMCwzLjktNS43LDExLTIuM2MwLDAsNC4xLDEuNSw2LjksNi43YzAtMC4xLDMsNC4xLDQuOSw1LjNjMC0wLjEtMi44LDUuNi03LjUsNi4zDQoJCWMtMC4yLDAtMC42LTAuMy0wLjctMC40Yy0wLjYtMC4zLTAuNi0wLjItMS4yLTAuNmMtMS43LTEuMi0zLjMtMi42LTQuMy00LjRjLTEuNC0yLjQtMy00LjYtNC43LTYuOGMtMC44LTEtMS42LTItMi41LTIuOQ0KCQljLTAuNC0wLjQtMS4yLTEuMy0xLjgtMS4xIi8+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE3LjIsMjcuMnYwLjFsMC42LDMuNWw2LjQsMy45YzAsMCwzLjksMS42LDEuOCw1LjljMCwwLTIsMy40LDAuNCw1YzAtMC4xLDAuMSwwLjUsMi4zLDAuMw0KCQljLTAuMS0wLjEtMi4zLTAuMi0xLjktMi42YzAsMCwxLjEtMy4zLDIuMS00LjFjMC0wLjEsMC42LTMuNSwwLTQuMmMwLjEtMC4xLDEuNS0yLjMsMS41LTIuM2wtMS45LDEuNmMwLDAtMS43LTEuMi0zLjEsMC4xDQoJCWMwLjEsMC02LjktMy44LTYuOS0zLjhMMTcuMiwyNy4yeiIvPg0KPC9nPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTTIzLjcsNDYuNGMwLDAsMiwzLjksMSw3LjEiLz4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMC4zLDI0LjRjMCwwLDEsMi41LDAuOCw1LjYiLz4NCjwvc3ZnPg0K';
    },
    KcZA: function(e) {
      e.exports = JSON.parse(
        '{"data":{"hostingJson":{"DOMAIN_NAMES":[{"label":".com","value":"com"},{"label":".net","value":"net"},{"label":".org","value":"org"},{"label":".co","value":"co"},{"label":".edu","value":"edu"},{"label":".me","value":"me"}],"DOMAIN_PRICE":[{"content":".com $9.26","url":null},{"content":".sg $7.91","url":null},{"content":".space $12.54","url":null},{"content":".info $9.13","url":null},{"content":"& much more","url":"#"}]}}}'
      );
    },
    Kt4n: function(e, t, n) {
      e.exports =
        n.p + 'static/contactMap-81b788fc1e9f40b78f06edcb30702b45.svg';
    },
    LaGA: function(e, t, n) {
      'use strict';
      n.r(t),
        function(e) {
          n('tRfV'),
            n('+5EW'),
            n('RwQI'),
            n('NCol'),
            n('DB+v'),
            n('lE7+'),
            n('Ph8W'),
            n('7fQw'),
            n('Fup4'),
            n('r0id'),
            n('UQCJ'),
            n('+iZ3'),
            n('LnO1'),
            n('3eMz'),
            n('dtAy'),
            n('4oWw'),
            n('PRJl');
          var a = (function() {
              if ('undefined' != typeof Map) return Map;
              function e(e, t) {
                var n = -1;
                return (
                  e.some(function(e, a) {
                    return e[0] === t && ((n = a), !0);
                  }),
                  n
                );
              }
              return (function() {
                function t() {
                  this.__entries__ = [];
                }
                return (
                  Object.defineProperty(t.prototype, 'size', {
                    get: function() {
                      return this.__entries__.length;
                    },
                    enumerable: !0,
                    configurable: !0,
                  }),
                  (t.prototype.get = function(t) {
                    var n = e(this.__entries__, t),
                      a = this.__entries__[n];
                    return a && a[1];
                  }),
                  (t.prototype.set = function(t, n) {
                    var a = e(this.__entries__, t);
                    ~a
                      ? (this.__entries__[a][1] = n)
                      : this.__entries__.push([t, n]);
                  }),
                  (t.prototype.delete = function(t) {
                    var n = this.__entries__,
                      a = e(n, t);
                    ~a && n.splice(a, 1);
                  }),
                  (t.prototype.has = function(t) {
                    return !!~e(this.__entries__, t);
                  }),
                  (t.prototype.clear = function() {
                    this.__entries__.splice(0);
                  }),
                  (t.prototype.forEach = function(e, t) {
                    void 0 === t && (t = null);
                    for (var n = 0, a = this.__entries__; n < a.length; n++) {
                      var i = a[n];
                      e.call(t, i[1], i[0]);
                    }
                  }),
                  t
                );
              })();
            })(),
            i =
              'undefined' != typeof window &&
              'undefined' != typeof document &&
              window.document === document,
            r =
              void 0 !== e && e.Math === Math
                ? e
                : 'undefined' != typeof self && self.Math === Math
                ? self
                : 'undefined' != typeof window && window.Math === Math
                ? window
                : Function('return this')(),
            o =
              'function' == typeof requestAnimationFrame
                ? requestAnimationFrame.bind(r)
                : function(e) {
                    return setTimeout(function() {
                      return e(Date.now());
                    }, 1e3 / 60);
                  };
          var c = [
              'top',
              'right',
              'bottom',
              'left',
              'width',
              'height',
              'size',
              'weight',
            ],
            s = 'undefined' != typeof MutationObserver,
            l = (function() {
              function e() {
                (this.connected_ = !1),
                  (this.mutationEventsAdded_ = !1),
                  (this.mutationsObserver_ = null),
                  (this.observers_ = []),
                  (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
                  (this.refresh = (function(e, t) {
                    var n = !1,
                      a = !1,
                      i = 0;
                    function r() {
                      n && ((n = !1), e()), a && s();
                    }
                    function c() {
                      o(r);
                    }
                    function s() {
                      var e = Date.now();
                      if (n) {
                        if (e - i < 2) return;
                        a = !0;
                      } else (n = !0), (a = !1), setTimeout(c, t);
                      i = e;
                    }
                    return s;
                  })(this.refresh.bind(this), 20));
              }
              return (
                (e.prototype.addObserver = function(e) {
                  ~this.observers_.indexOf(e) || this.observers_.push(e),
                    this.connected_ || this.connect_();
                }),
                (e.prototype.removeObserver = function(e) {
                  var t = this.observers_,
                    n = t.indexOf(e);
                  ~n && t.splice(n, 1),
                    !t.length && this.connected_ && this.disconnect_();
                }),
                (e.prototype.refresh = function() {
                  this.updateObservers_() && this.refresh();
                }),
                (e.prototype.updateObservers_ = function() {
                  var e = this.observers_.filter(function(e) {
                    return e.gatherActive(), e.hasActive();
                  });
                  return (
                    e.forEach(function(e) {
                      return e.broadcastActive();
                    }),
                    e.length > 0
                  );
                }),
                (e.prototype.connect_ = function() {
                  i &&
                    !this.connected_ &&
                    (document.addEventListener(
                      'transitionend',
                      this.onTransitionEnd_
                    ),
                    window.addEventListener('resize', this.refresh),
                    s
                      ? ((this.mutationsObserver_ = new MutationObserver(
                          this.refresh
                        )),
                        this.mutationsObserver_.observe(document, {
                          attributes: !0,
                          childList: !0,
                          characterData: !0,
                          subtree: !0,
                        }))
                      : (document.addEventListener(
                          'DOMSubtreeModified',
                          this.refresh
                        ),
                        (this.mutationEventsAdded_ = !0)),
                    (this.connected_ = !0));
                }),
                (e.prototype.disconnect_ = function() {
                  i &&
                    this.connected_ &&
                    (document.removeEventListener(
                      'transitionend',
                      this.onTransitionEnd_
                    ),
                    window.removeEventListener('resize', this.refresh),
                    this.mutationsObserver_ &&
                      this.mutationsObserver_.disconnect(),
                    this.mutationEventsAdded_ &&
                      document.removeEventListener(
                        'DOMSubtreeModified',
                        this.refresh
                      ),
                    (this.mutationsObserver_ = null),
                    (this.mutationEventsAdded_ = !1),
                    (this.connected_ = !1));
                }),
                (e.prototype.onTransitionEnd_ = function(e) {
                  var t = e.propertyName,
                    n = void 0 === t ? '' : t;
                  c.some(function(e) {
                    return !!~n.indexOf(e);
                  }) && this.refresh();
                }),
                (e.getInstance = function() {
                  return (
                    this.instance_ || (this.instance_ = new e()), this.instance_
                  );
                }),
                (e.instance_ = null),
                e
              );
            })(),
            u = function(e, t) {
              for (var n = 0, a = Object.keys(t); n < a.length; n++) {
                var i = a[n];
                Object.defineProperty(e, i, {
                  value: t[i],
                  enumerable: !1,
                  writable: !1,
                  configurable: !0,
                });
              }
              return e;
            },
            d = function(e) {
              return (e && e.ownerDocument && e.ownerDocument.defaultView) || r;
            },
            p = y(0, 0, 0, 0);
          function g(e) {
            return parseFloat(e) || 0;
          }
          function f(e) {
            for (var t = [], n = 1; n < arguments.length; n++)
              t[n - 1] = arguments[n];
            return t.reduce(function(t, n) {
              return t + g(e['border-' + n + '-width']);
            }, 0);
          }
          function A(e) {
            var t = e.clientWidth,
              n = e.clientHeight;
            if (!t && !n) return p;
            var a = d(e).getComputedStyle(e),
              i = (function(e) {
                for (
                  var t = {}, n = 0, a = ['top', 'right', 'bottom', 'left'];
                  n < a.length;
                  n++
                ) {
                  var i = a[n],
                    r = e['padding-' + i];
                  t[i] = g(r);
                }
                return t;
              })(a),
              r = i.left + i.right,
              o = i.top + i.bottom,
              c = g(a.width),
              s = g(a.height);
            if (
              ('border-box' === a.boxSizing &&
                (Math.round(c + r) !== t && (c -= f(a, 'left', 'right') + r),
                Math.round(s + o) !== n && (s -= f(a, 'top', 'bottom') + o)),
              !(function(e) {
                return e === d(e).document.documentElement;
              })(e))
            ) {
              var l = Math.round(c + r) - t,
                u = Math.round(s + o) - n;
              1 !== Math.abs(l) && (c -= l), 1 !== Math.abs(u) && (s -= u);
            }
            return y(i.left, i.top, c, s);
          }
          var m =
            'undefined' != typeof SVGGraphicsElement
              ? function(e) {
                  return e instanceof d(e).SVGGraphicsElement;
                }
              : function(e) {
                  return (
                    e instanceof d(e).SVGElement &&
                    'function' == typeof e.getBBox
                  );
                };
          function M(e) {
            return i
              ? m(e)
                ? (function(e) {
                    var t = e.getBBox();
                    return y(0, 0, t.width, t.height);
                  })(e)
                : A(e)
              : p;
          }
          function y(e, t, n, a) {
            return { x: e, y: t, width: n, height: a };
          }
          var L = (function() {
              function e(e) {
                (this.broadcastWidth = 0),
                  (this.broadcastHeight = 0),
                  (this.contentRect_ = y(0, 0, 0, 0)),
                  (this.target = e);
              }
              return (
                (e.prototype.isActive = function() {
                  var e = M(this.target);
                  return (
                    (this.contentRect_ = e),
                    e.width !== this.broadcastWidth ||
                      e.height !== this.broadcastHeight
                  );
                }),
                (e.prototype.broadcastRect = function() {
                  var e = this.contentRect_;
                  return (
                    (this.broadcastWidth = e.width),
                    (this.broadcastHeight = e.height),
                    e
                  );
                }),
                e
              );
            })(),
            j = function(e, t) {
              var n,
                a,
                i,
                r,
                o,
                c,
                s,
                l =
                  ((a = (n = t).x),
                  (i = n.y),
                  (r = n.width),
                  (o = n.height),
                  (c =
                    'undefined' != typeof DOMRectReadOnly
                      ? DOMRectReadOnly
                      : Object),
                  (s = Object.create(c.prototype)),
                  u(s, {
                    x: a,
                    y: i,
                    width: r,
                    height: o,
                    top: i,
                    right: a + r,
                    bottom: o + i,
                    left: a,
                  }),
                  s);
              u(this, { target: e, contentRect: l });
            },
            h = (function() {
              function e(e, t, n) {
                if (
                  ((this.activeObservations_ = []),
                  (this.observations_ = new a()),
                  'function' != typeof e)
                )
                  throw new TypeError(
                    'The callback provided as parameter 1 is not a function.'
                  );
                (this.callback_ = e),
                  (this.controller_ = t),
                  (this.callbackCtx_ = n);
              }
              return (
                (e.prototype.observe = function(e) {
                  if (!arguments.length)
                    throw new TypeError(
                      '1 argument required, but only 0 present.'
                    );
                  if (
                    'undefined' != typeof Element &&
                    Element instanceof Object
                  ) {
                    if (!(e instanceof d(e).Element))
                      throw new TypeError(
                        'parameter 1 is not of type "Element".'
                      );
                    var t = this.observations_;
                    t.has(e) ||
                      (t.set(e, new L(e)),
                      this.controller_.addObserver(this),
                      this.controller_.refresh());
                  }
                }),
                (e.prototype.unobserve = function(e) {
                  if (!arguments.length)
                    throw new TypeError(
                      '1 argument required, but only 0 present.'
                    );
                  if (
                    'undefined' != typeof Element &&
                    Element instanceof Object
                  ) {
                    if (!(e instanceof d(e).Element))
                      throw new TypeError(
                        'parameter 1 is not of type "Element".'
                      );
                    var t = this.observations_;
                    t.has(e) &&
                      (t.delete(e),
                      t.size || this.controller_.removeObserver(this));
                  }
                }),
                (e.prototype.disconnect = function() {
                  this.clearActive(),
                    this.observations_.clear(),
                    this.controller_.removeObserver(this);
                }),
                (e.prototype.gatherActive = function() {
                  var e = this;
                  this.clearActive(),
                    this.observations_.forEach(function(t) {
                      t.isActive() && e.activeObservations_.push(t);
                    });
                }),
                (e.prototype.broadcastActive = function() {
                  if (this.hasActive()) {
                    var e = this.callbackCtx_,
                      t = this.activeObservations_.map(function(e) {
                        return new j(e.target, e.broadcastRect());
                      });
                    this.callback_.call(e, t, e), this.clearActive();
                  }
                }),
                (e.prototype.clearActive = function() {
                  this.activeObservations_.splice(0);
                }),
                (e.prototype.hasActive = function() {
                  return this.activeObservations_.length > 0;
                }),
                e
              );
            })(),
            b = 'undefined' != typeof WeakMap ? new WeakMap() : new a(),
            N = function e(t) {
              if (!(this instanceof e))
                throw new TypeError('Cannot call a class as a function.');
              if (!arguments.length)
                throw new TypeError('1 argument required, but only 0 present.');
              var n = l.getInstance(),
                a = new h(t, n, this);
              b.set(this, a);
            };
          ['observe', 'unobserve', 'disconnect'].forEach(function(e) {
            N.prototype[e] = function() {
              var t;
              return (t = b.get(this))[e].apply(t, arguments);
            };
          });
          var I = void 0 !== r.ResizeObserver ? r.ResizeObserver : N;
          t.default = I;
        }.call(this, n('fRV1'));
    },
    LpDn: function(e, t, n) {
      e.exports =
        n.p + 'static/sliderimage4-edb53ba7b6e98b0b3b57e2f86e056999.jpg';
    },
    M4TR: function(e, t, n) {
      'use strict';
      n('NCol'),
        n('4oWw'),
        n('nruA'),
        n('/CC1'),
        n('NlgC'),
        n('zpx+'),
        n('Ph8W'),
        n('3EZN'),
        n('4SWW'),
        n('r0id'),
        n('lE7+'),
        n('SCO9'),
        n('LnO1'),
        n('3eMz'),
        n('dtAy'),
        n('DB+v'),
        n('UQCJ'),
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.canUseDOM = t.slidesOnLeft = t.slidesOnRight = t.siblingDirection = t.getTotalSlides = t.getPostClones = t.getPreClones = t.getTrackLeft = t.getTrackAnimateCSS = t.getTrackCSS = t.checkSpecKeys = t.getSlideCount = t.checkNavigable = t.getNavigableIndexes = t.swipeEnd = t.swipeMove = t.swipeStart = t.keyHandler = t.changeSlide = t.slideHandler = t.initializedState = t.extractObject = t.canGoNext = t.getSwipeDirection = t.getHeight = t.getWidth = t.lazySlidesOnRight = t.lazySlidesOnLeft = t.lazyEndIndex = t.lazyStartIndex = t.getRequiredLazySlides = t.getOnDemandLazySlides = void 0);
      var a = r(n('ERkP')),
        i = r(n('7nmT'));
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(n, !0).forEach(function(t) {
                s(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : o(n).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function s(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var l = function(e) {
        for (var t = [], n = u(e), a = d(e), i = n; i < a; i++)
          e.lazyLoadedList.indexOf(i) < 0 && t.push(i);
        return t;
      };
      t.getOnDemandLazySlides = l;
      t.getRequiredLazySlides = function(e) {
        for (var t = [], n = u(e), a = d(e), i = n; i < a; i++) t.push(i);
        return t;
      };
      var u = function(e) {
        return e.currentSlide - p(e);
      };
      t.lazyStartIndex = u;
      var d = function(e) {
        return e.currentSlide + g(e);
      };
      t.lazyEndIndex = d;
      var p = function(e) {
        return e.centerMode
          ? Math.floor(e.slidesToShow / 2) +
              (parseInt(e.centerPadding) > 0 ? 1 : 0)
          : 0;
      };
      t.lazySlidesOnLeft = p;
      var g = function(e) {
        return e.centerMode
          ? Math.floor((e.slidesToShow - 1) / 2) +
              1 +
              (parseInt(e.centerPadding) > 0 ? 1 : 0)
          : e.slidesToShow;
      };
      t.lazySlidesOnRight = g;
      var f = function(e) {
        return (e && e.offsetWidth) || 0;
      };
      t.getWidth = f;
      var A = function(e) {
        return (e && e.offsetHeight) || 0;
      };
      t.getHeight = A;
      var m = function(e) {
        var t,
          n,
          a,
          i,
          r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (
          (t = e.startX - e.curX),
          (n = e.startY - e.curY),
          (a = Math.atan2(n, t)),
          (i = Math.round((180 * a) / Math.PI)) < 0 && (i = 360 - Math.abs(i)),
          (i <= 45 && i >= 0) || (i <= 360 && i >= 315)
            ? 'left'
            : i >= 135 && i <= 225
            ? 'right'
            : !0 === r
            ? i >= 35 && i <= 135
              ? 'up'
              : 'down'
            : 'vertical'
        );
      };
      t.getSwipeDirection = m;
      var M = function(e) {
        var t = !0;
        return (
          e.infinite ||
            (((e.centerMode && e.currentSlide >= e.slideCount - 1) ||
              e.slideCount <= e.slidesToShow ||
              e.currentSlide >= e.slideCount - e.slidesToShow) &&
              (t = !1)),
          t
        );
      };
      t.canGoNext = M;
      t.extractObject = function(e, t) {
        var n = {};
        return (
          t.forEach(function(t) {
            return (n[t] = e[t]);
          }),
          n
        );
      };
      t.initializedState = function(e) {
        var t,
          n = a.default.Children.count(e.children),
          r = Math.ceil(f(i.default.findDOMNode(e.listRef))),
          o = Math.ceil(f(i.default.findDOMNode(e.trackRef)));
        if (e.vertical) t = r;
        else {
          var c = e.centerMode && 2 * parseInt(e.centerPadding);
          'string' == typeof e.centerPadding &&
            '%' === e.centerPadding.slice(-1) &&
            (c *= r / 100),
            (t = Math.ceil((r - c) / e.slidesToShow));
        }
        var s =
            i.default.findDOMNode(e.listRef) &&
            A(
              i.default.findDOMNode(e.listRef).querySelector('[data-index="0"]')
            ),
          u = s * e.slidesToShow,
          d = void 0 === e.currentSlide ? e.initialSlide : e.currentSlide;
        e.rtl && void 0 === e.currentSlide && (d = n - 1 - e.initialSlide);
        var p = e.lazyLoadedList || [],
          g = l({ currentSlide: d, lazyLoadedList: p });
        p.concat(g);
        var m = {
          slideCount: n,
          slideWidth: t,
          listWidth: r,
          trackWidth: o,
          currentSlide: d,
          slideHeight: s,
          listHeight: u,
          lazyLoadedList: p,
        };
        return (
          null === e.autoplaying && e.autoplay && (m.autoplaying = 'playing'), m
        );
      };
      t.slideHandler = function(e) {
        var t = e.waitForAnimate,
          n = e.animating,
          a = e.fade,
          i = e.infinite,
          r = e.index,
          o = e.slideCount,
          s = e.lazyLoadedList,
          u = e.lazyLoad,
          d = e.currentSlide,
          p = e.centerMode,
          g = e.slidesToScroll,
          f = e.slidesToShow,
          A = e.useCSS;
        if (t && n) return {};
        var m,
          y,
          L,
          j = r,
          h = {},
          x = {};
        if (a) {
          if (!i && (r < 0 || r >= o)) return {};
          r < 0 ? (j = r + o) : r >= o && (j = r - o),
            u && s.indexOf(j) < 0 && s.push(j),
            (h = { animating: !0, currentSlide: j, lazyLoadedList: s }),
            (x = { animating: !1 });
        } else
          (m = j),
            j < 0
              ? ((m = j + o), i ? o % g != 0 && (m = o - (o % g)) : (m = 0))
              : !M(e) && j > d
              ? (j = m = d)
              : p && j >= o
              ? ((j = i ? o : o - 1), (m = i ? 0 : o - 1))
              : j >= o &&
                ((m = j - o), i ? o % g != 0 && (m = 0) : (m = o - f)),
            (y = I(c({}, e, { slideIndex: j }))),
            (L = I(c({}, e, { slideIndex: m }))),
            i || (y === L && (j = m), (y = L)),
            u && s.concat(l(c({}, e, { currentSlide: j }))),
            A
              ? ((h = {
                  animating: !0,
                  currentSlide: m,
                  trackStyle: N(c({}, e, { left: y })),
                  lazyLoadedList: s,
                }),
                (x = {
                  animating: !1,
                  currentSlide: m,
                  trackStyle: b(c({}, e, { left: L })),
                  swipeLeft: null,
                }))
              : (h = {
                  currentSlide: m,
                  trackStyle: b(c({}, e, { left: L })),
                  lazyLoadedList: s,
                });
        return { state: h, nextState: x };
      };
      t.changeSlide = function(e, t) {
        var n,
          a,
          i,
          r,
          o = e.slidesToScroll,
          s = e.slidesToShow,
          l = e.slideCount,
          u = e.currentSlide,
          d = e.lazyLoad,
          p = e.infinite;
        if (((n = l % o != 0 ? 0 : (l - u) % o), 'previous' === t.message))
          (r = u - (i = 0 === n ? o : s - n)),
            d && !p && (r = -1 === (a = u - i) ? l - 1 : a);
        else if ('next' === t.message)
          (r = u + (i = 0 === n ? o : n)), d && !p && (r = ((u + o) % l) + n);
        else if ('dots' === t.message) {
          if ((r = t.index * t.slidesToScroll) === t.currentSlide) return null;
        } else if ('children' === t.message) {
          if ((r = t.index) === t.currentSlide) return null;
          if (p) {
            var g = v(c({}, e, { targetSlide: r }));
            r > t.currentSlide && 'left' === g
              ? (r -= l)
              : r < t.currentSlide && 'right' === g && (r += l);
          }
        } else if (
          'index' === t.message &&
          (r = Number(t.index)) === t.currentSlide
        )
          return null;
        return r;
      };
      t.keyHandler = function(e, t, n) {
        return e.target.tagName.match('TEXTAREA|INPUT|SELECT') || !t
          ? ''
          : 37 === e.keyCode
          ? n
            ? 'next'
            : 'previous'
          : 39 === e.keyCode
          ? n
            ? 'previous'
            : 'next'
          : '';
      };
      t.swipeStart = function(e, t, n) {
        return (
          'IMG' === e.target.tagName && e.preventDefault(),
          !t || (!n && -1 !== e.type.indexOf('mouse'))
            ? ''
            : {
                dragging: !0,
                touchObject: {
                  startX: e.touches ? e.touches[0].pageX : e.clientX,
                  startY: e.touches ? e.touches[0].pageY : e.clientY,
                  curX: e.touches ? e.touches[0].pageX : e.clientX,
                  curY: e.touches ? e.touches[0].pageY : e.clientY,
                },
              }
        );
      };
      t.swipeMove = function(e, t) {
        var n = t.scrolling,
          a = t.animating,
          i = t.vertical,
          r = t.swipeToSlide,
          o = t.verticalSwiping,
          s = t.rtl,
          l = t.currentSlide,
          u = t.edgeFriction,
          d = t.edgeDragged,
          p = t.onEdge,
          g = t.swiped,
          f = t.swiping,
          A = t.slideCount,
          y = t.slidesToScroll,
          L = t.infinite,
          j = t.touchObject,
          h = t.swipeEvent,
          N = t.listHeight,
          x = t.listWidth;
        if (!n) {
          if (a) return e.preventDefault();
          i && r && o && e.preventDefault();
          var S,
            w = {},
            v = I(t);
          (j.curX = e.touches ? e.touches[0].pageX : e.clientX),
            (j.curY = e.touches ? e.touches[0].pageY : e.clientY),
            (j.swipeLength = Math.round(
              Math.sqrt(Math.pow(j.curX - j.startX, 2))
            ));
          var E = Math.round(Math.sqrt(Math.pow(j.curY - j.startY, 2)));
          if (!o && !f && E > 10) return { scrolling: !0 };
          o && (j.swipeLength = E);
          var D = (s ? -1 : 1) * (j.curX > j.startX ? 1 : -1);
          o && (D = j.curY > j.startY ? 1 : -1);
          var C = Math.ceil(A / y),
            T = m(t.touchObject, o),
            z = j.swipeLength;
          return (
            L ||
              (((0 === l && 'right' === T) ||
                (l + 1 >= C && 'left' === T) ||
                (!M(t) && 'left' === T)) &&
                ((z = j.swipeLength * u),
                !1 === d && p && (p(T), (w.edgeDragged = !0)))),
            !g && h && (h(T), (w.swiped = !0)),
            (S = i ? v + z * (N / x) * D : s ? v - z * D : v + z * D),
            o && (S = v + z * D),
            (w = c({}, w, {
              touchObject: j,
              swipeLeft: S,
              trackStyle: b(c({}, t, { left: S })),
            })),
            Math.abs(j.curX - j.startX) < 0.8 * Math.abs(j.curY - j.startY)
              ? w
              : (j.swipeLength > 10 && ((w.swiping = !0), e.preventDefault()),
                w)
          );
        }
      };
      t.swipeEnd = function(e, t) {
        var n = t.dragging,
          a = t.swipe,
          i = t.touchObject,
          r = t.listWidth,
          o = t.touchThreshold,
          s = t.verticalSwiping,
          l = t.listHeight,
          u = t.currentSlide,
          d = t.swipeToSlide,
          p = t.scrolling,
          g = t.onSwipe;
        if (!n) return a && e.preventDefault(), {};
        var f = s ? l / o : r / o,
          A = m(i, s),
          M = {
            dragging: !1,
            edgeDragged: !1,
            scrolling: !1,
            swiping: !1,
            swiped: !1,
            swipeLeft: null,
            touchObject: {},
          };
        if (p) return M;
        if (!i.swipeLength) return M;
        if (i.swipeLength > f) {
          var y, h;
          switch ((e.preventDefault(), g && g(A), A)) {
            case 'left':
            case 'up':
              (h = u + j(t)), (y = d ? L(t, h) : h), (M.currentDirection = 0);
              break;
            case 'right':
            case 'down':
              (h = u - j(t)), (y = d ? L(t, h) : h), (M.currentDirection = 1);
              break;
            default:
              y = u;
          }
          M.triggerSlideHandler = y;
        } else {
          var b = I(t);
          M.trackStyle = N(c({}, t, { left: b }));
        }
        return M;
      };
      var y = function(e) {
        for (
          var t = e.infinite ? 2 * e.slideCount : e.slideCount,
            n = e.infinite ? -1 * e.slidesToShow : 0,
            a = e.infinite ? -1 * e.slidesToShow : 0,
            i = [];
          n < t;

        )
          i.push(n),
            (n = a + e.slidesToScroll),
            (a += Math.min(e.slidesToScroll, e.slidesToShow));
        return i;
      };
      t.getNavigableIndexes = y;
      var L = function(e, t) {
        var n = y(e),
          a = 0;
        if (t > n[n.length - 1]) t = n[n.length - 1];
        else
          for (var i in n) {
            if (t < n[i]) {
              t = a;
              break;
            }
            a = n[i];
          }
        return t;
      };
      t.checkNavigable = L;
      var j = function(e) {
        var t = e.centerMode
          ? e.slideWidth * Math.floor(e.slidesToShow / 2)
          : 0;
        if (e.swipeToSlide) {
          var n,
            a = i.default
              .findDOMNode(e.listRef)
              .querySelectorAll('.slick-slide');
          if (
            (Array.from(a).every(function(a) {
              if (e.vertical) {
                if (a.offsetTop + A(a) / 2 > -1 * e.swipeLeft)
                  return (n = a), !1;
              } else if (a.offsetLeft - t + f(a) / 2 > -1 * e.swipeLeft) return (n = a), !1;
              return !0;
            }),
            !n)
          )
            return 0;
          var r = !0 === e.rtl ? e.slideCount - e.currentSlide : e.currentSlide;
          return Math.abs(n.dataset.index - r) || 1;
        }
        return e.slidesToScroll;
      };
      t.getSlideCount = j;
      var h = function(e, t) {
        return t.reduce(function(t, n) {
          return t && e.hasOwnProperty(n);
        }, !0)
          ? null
          : console.error('Keys Missing:', e);
      };
      t.checkSpecKeys = h;
      var b = function(e) {
        var t, n;
        h(e, [
          'left',
          'variableWidth',
          'slideCount',
          'slidesToShow',
          'slideWidth',
        ]);
        var a = e.slideCount + 2 * e.slidesToShow;
        e.vertical ? (n = a * e.slideHeight) : (t = w(e) * e.slideWidth);
        var i = { opacity: 1, transition: '', WebkitTransition: '' };
        e.useTransform
          ? (i = c({}, i, {
              WebkitTransform: e.vertical
                ? 'translate3d(0px, ' + e.left + 'px, 0px)'
                : 'translate3d(' + e.left + 'px, 0px, 0px)',
              transform: e.vertical
                ? 'translate3d(0px, ' + e.left + 'px, 0px)'
                : 'translate3d(' + e.left + 'px, 0px, 0px)',
              msTransform: e.vertical
                ? 'translateY(' + e.left + 'px)'
                : 'translateX(' + e.left + 'px)',
            }))
          : e.vertical
          ? (i.top = e.left)
          : (i.left = e.left);
        return (
          e.fade && (i = { opacity: 1 }),
          t && (i.width = t),
          n && (i.height = n),
          window &&
            !window.addEventListener &&
            window.attachEvent &&
            (e.vertical
              ? (i.marginTop = e.left + 'px')
              : (i.marginLeft = e.left + 'px')),
          i
        );
      };
      t.getTrackCSS = b;
      var N = function(e) {
        h(e, [
          'left',
          'variableWidth',
          'slideCount',
          'slidesToShow',
          'slideWidth',
          'speed',
          'cssEase',
        ]);
        var t = b(e);
        return (
          e.useTransform
            ? ((t.WebkitTransition =
                '-webkit-transform ' + e.speed + 'ms ' + e.cssEase),
              (t.transition = 'transform ' + e.speed + 'ms ' + e.cssEase))
            : e.vertical
            ? (t.transition = 'top ' + e.speed + 'ms ' + e.cssEase)
            : (t.transition = 'left ' + e.speed + 'ms ' + e.cssEase),
          t
        );
      };
      t.getTrackAnimateCSS = N;
      var I = function(e) {
        if (e.unslick) return 0;
        h(e, [
          'slideIndex',
          'trackRef',
          'infinite',
          'centerMode',
          'slideCount',
          'slidesToShow',
          'slidesToScroll',
          'slideWidth',
          'listWidth',
          'variableWidth',
          'slideHeight',
        ]);
        var t,
          n,
          a = e.slideIndex,
          r = e.trackRef,
          o = e.infinite,
          c = e.centerMode,
          s = e.slideCount,
          l = e.slidesToShow,
          u = e.slidesToScroll,
          d = e.slideWidth,
          p = e.listWidth,
          g = e.variableWidth,
          f = e.slideHeight,
          A = e.fade,
          m = e.vertical;
        if (A || 1 === e.slideCount) return 0;
        var M = 0;
        if (
          (o
            ? ((M = -x(e)),
              s % u != 0 && a + u > s && (M = -(a > s ? l - (a - s) : s % u)),
              c && (M += parseInt(l / 2)))
            : (s % u != 0 && a + u > s && (M = l - (s % u)),
              c && (M = parseInt(l / 2))),
          (t = m ? a * f * -1 + M * f : a * d * -1 + M * d),
          !0 === g)
        ) {
          var y,
            L = i.default.findDOMNode(r);
          if (
            ((y = a + x(e)),
            (t = (n = L && L.childNodes[y]) ? -1 * n.offsetLeft : 0),
            !0 === c)
          ) {
            (y = o ? a + x(e) : a), (n = L && L.children[y]), (t = 0);
            for (var j = 0; j < y; j++)
              t -= L && L.children[j] && L.children[j].offsetWidth;
            (t -= parseInt(e.centerPadding)),
              (t += n && (p - n.offsetWidth) / 2);
          }
        }
        return t;
      };
      t.getTrackLeft = I;
      var x = function(e) {
        return e.unslick || !e.infinite
          ? 0
          : e.variableWidth
          ? e.slideCount
          : e.slidesToShow + (e.centerMode ? 1 : 0);
      };
      t.getPreClones = x;
      var S = function(e) {
        return e.unslick || !e.infinite ? 0 : e.slideCount;
      };
      t.getPostClones = S;
      var w = function(e) {
        return 1 === e.slideCount ? 1 : x(e) + e.slideCount + S(e);
      };
      t.getTotalSlides = w;
      var v = function(e) {
        return e.targetSlide > e.currentSlide
          ? e.targetSlide > e.currentSlide + E(e)
            ? 'left'
            : 'right'
          : e.targetSlide < e.currentSlide - D(e)
          ? 'right'
          : 'left';
      };
      t.siblingDirection = v;
      var E = function(e) {
        var t = e.slidesToShow,
          n = e.centerMode,
          a = e.rtl,
          i = e.centerPadding;
        if (n) {
          var r = (t - 1) / 2 + 1;
          return parseInt(i) > 0 && (r += 1), a && t % 2 == 0 && (r += 1), r;
        }
        return a ? 0 : t - 1;
      };
      t.slidesOnRight = E;
      var D = function(e) {
        var t = e.slidesToShow,
          n = e.centerMode,
          a = e.rtl,
          i = e.centerPadding;
        if (n) {
          var r = (t - 1) / 2 + 1;
          return parseInt(i) > 0 && (r += 1), a || t % 2 != 0 || (r += 1), r;
        }
        return a ? t - 1 : 0;
      };
      t.slidesOnLeft = D;
      t.canUseDOM = function() {
        return !(
          'undefined' == typeof window ||
          !window.document ||
          !window.document.createElement
        );
      };
    },
    P1ZW: function(e, t, n) {
      'use strict';
      n('Ph8W'),
        n('3EZN'),
        n('4SWW'),
        n('r0id'),
        n('lE7+'),
        n('LnO1'),
        n('3eMz'),
        n('dtAy'),
        n('DB+v'),
        n('RwQI'),
        n('cM8k'),
        n('PN9k'),
        n('XjK0'),
        n('SCO9'),
        n('UQCJ'),
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.Track = void 0);
      var a = o(n('ERkP')),
        i = o(n('O94r')),
        r = n('M4TR');
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c(e) {
        return (c =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function s() {
        return (s =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          }).apply(this, arguments);
      }
      function l(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            'value' in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      function d(e, t) {
        return !t || ('object' !== c(t) && 'function' != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function p(e) {
        return (p = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function g(e, t) {
        return (g =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function f(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function A(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(n, !0).forEach(function(t) {
                m(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : f(n).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function m(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var M = function(e) {
          var t, n, a, i, r;
          return (
            (a =
              (r = e.rtl ? e.slideCount - 1 - e.index : e.index) < 0 ||
              r >= e.slideCount),
            e.centerMode
              ? ((i = Math.floor(e.slidesToShow / 2)),
                (n = (r - e.currentSlide) % e.slideCount == 0),
                r > e.currentSlide - i - 1 &&
                  r <= e.currentSlide + i &&
                  (t = !0))
              : (t =
                  e.currentSlide <= r && r < e.currentSlide + e.slidesToShow),
            {
              'slick-slide': !0,
              'slick-active': t,
              'slick-center': n,
              'slick-cloned': a,
              'slick-current': r === e.currentSlide,
            }
          );
        },
        y = function(e, t) {
          return e.key || t;
        },
        L = function(e) {
          var t,
            n = [],
            o = [],
            c = [],
            s = a.default.Children.count(e.children),
            l = (0, r.lazyStartIndex)(e),
            u = (0, r.lazyEndIndex)(e);
          return (
            a.default.Children.forEach(e.children, function(d, p) {
              var g,
                f = {
                  message: 'children',
                  index: p,
                  slidesToScroll: e.slidesToScroll,
                  currentSlide: e.currentSlide,
                };
              g =
                !e.lazyLoad || (e.lazyLoad && e.lazyLoadedList.indexOf(p) >= 0)
                  ? d
                  : a.default.createElement('div', null);
              var m = (function(e) {
                  var t = {};
                  return (
                    (void 0 !== e.variableWidth && !1 !== e.variableWidth) ||
                      (t.width = e.slideWidth),
                    e.fade &&
                      ((t.position = 'relative'),
                      e.vertical
                        ? (t.top = -e.index * parseInt(e.slideHeight))
                        : (t.left = -e.index * parseInt(e.slideWidth)),
                      (t.opacity = e.currentSlide === e.index ? 1 : 0),
                      (t.transition =
                        'opacity ' +
                        e.speed +
                        'ms ' +
                        e.cssEase +
                        ', visibility ' +
                        e.speed +
                        'ms ' +
                        e.cssEase),
                      (t.WebkitTransition =
                        'opacity ' +
                        e.speed +
                        'ms ' +
                        e.cssEase +
                        ', visibility ' +
                        e.speed +
                        'ms ' +
                        e.cssEase)),
                    t
                  );
                })(A({}, e, { index: p })),
                L = g.props.className || '',
                j = M(A({}, e, { index: p }));
              if (
                (n.push(
                  a.default.cloneElement(g, {
                    key: 'original' + y(g, p),
                    'data-index': p,
                    className: (0, i.default)(j, L),
                    tabIndex: '-1',
                    'aria-hidden': !j['slick-active'],
                    style: A({ outline: 'none' }, g.props.style || {}, {}, m),
                    onClick: function(t) {
                      g.props && g.props.onClick && g.props.onClick(t),
                        e.focusOnSelect && e.focusOnSelect(f);
                    },
                  })
                ),
                e.infinite && !1 === e.fade)
              ) {
                var h = s - p;
                h <= (0, r.getPreClones)(e) &&
                  s !== e.slidesToShow &&
                  ((t = -h) >= l && (g = d),
                  (j = M(A({}, e, { index: t }))),
                  o.push(
                    a.default.cloneElement(g, {
                      key: 'precloned' + y(g, t),
                      'data-index': t,
                      tabIndex: '-1',
                      className: (0, i.default)(j, L),
                      'aria-hidden': !j['slick-active'],
                      style: A({}, g.props.style || {}, {}, m),
                      onClick: function(t) {
                        g.props && g.props.onClick && g.props.onClick(t),
                          e.focusOnSelect && e.focusOnSelect(f);
                      },
                    })
                  )),
                  s !== e.slidesToShow &&
                    ((t = s + p) < u && (g = d),
                    (j = M(A({}, e, { index: t }))),
                    c.push(
                      a.default.cloneElement(g, {
                        key: 'postcloned' + y(g, t),
                        'data-index': t,
                        tabIndex: '-1',
                        className: (0, i.default)(j, L),
                        'aria-hidden': !j['slick-active'],
                        style: A({}, g.props.style || {}, {}, m),
                        onClick: function(t) {
                          g.props && g.props.onClick && g.props.onClick(t),
                            e.focusOnSelect && e.focusOnSelect(f);
                        },
                      })
                    ));
              }
            }),
            e.rtl ? o.concat(n, c).reverse() : o.concat(n, c)
          );
        },
        j = (function(e) {
          function t() {
            return l(this, t), d(this, p(t).apply(this, arguments));
          }
          var n, i, r;
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function'
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && g(e, t);
            })(t, e),
            (n = t),
            (i = [
              {
                key: 'render',
                value: function() {
                  var e = L(this.props),
                    t = this.props,
                    n = {
                      onMouseEnter: t.onMouseEnter,
                      onMouseOver: t.onMouseOver,
                      onMouseLeave: t.onMouseLeave,
                    };
                  return a.default.createElement(
                    'div',
                    s(
                      {
                        className: 'slick-track',
                        style: this.props.trackStyle,
                      },
                      n
                    ),
                    e
                  );
                },
              },
            ]) && u(n.prototype, i),
            r && u(n, r),
            t
          );
        })(a.default.PureComponent);
      t.Track = j;
    },
    PTh7: function(e, t, n) {
      'use strict';
      n('PN9k');
      var a = n('EMUa'),
        i = n('ERkP'),
        r = n.n(i),
        o = n('dWle'),
        c = n('kQsd'),
        s = n('uR1b'),
        l = (n('Ihd7'), n('j/s1')),
        u = n('GkOb'),
        d = l.d.div.withConfig({
          displayName: 'glide1style__GlideWrapper1',
          componentId: 'bpy0e6-0',
        })(['\n  ', '\n  ', '\n  ', '\n'], u.O, u.v, u.J),
        p = l.d.li.withConfig({
          displayName: 'glide1style__GlideSlideWrapper1',
          componentId: 'bpy0e6-1',
        })(
          ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
          u.J,
          u.m,
          u.j,
          u.l,
          u.i
        ),
        g = l.d.div.withConfig({
          displayName: 'glide1style__ButtonWrapper',
          componentId: 'bpy0e6-2',
        })(
          [
            '\n  display: inline-block;\n  ',
            '\n  ',
            '\n  ',
            '\n  ',
            '\n  ',
            '\n  ',
            '\n  ',
            '\n  ',
            '\n  ',
            '\n  ',
            '\n  ',
            '\n',
          ],
          u.o,
          u.J,
          u.m,
          u.j,
          u.l,
          u.i,
          u.H,
          u.M,
          u.x,
          u.I,
          u.k
        ),
        f = l.d.div.withConfig({
          displayName: 'glide1style__ButtonControlWrapper',
          componentId: 'bpy0e6-3',
        })(
          [
            '\n  ',
            '\n  ',
            '\n  ',
            '\n  ',
            '\n  ',
            '\n  ',
            '\n  ',
            '\n  ',
            '\n  ',
            '\n',
          ],
          u.o,
          u.J,
          u.a,
          u.w,
          u.H,
          u.M,
          u.x,
          u.I,
          u.k
        ),
        A = l.d.div.withConfig({
          displayName: 'glide1style__BulletControlWrapper',
          componentId: 'bpy0e6-4',
        })(
          ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
          u.o,
          u.J,
          u.a,
          u.w,
          u.r
        ),
        m = l.d.button.withConfig({
          displayName: 'glide1style__BulletButton',
          componentId: 'bpy0e6-5',
        })(
          [
            '\n  cursor: pointer;\n  width: 10px;\n  height: 10px;\n  margin: 4px;\n  border: 0;\n  padding: 0;\n  outline: none;\n  border-radius: 50%;\n  background-color: #D6D6D6;\n  &:hover,\n  &.glide__bullet--active {\n    background-color: #869791;\n  }\n  ',
            '\n  ',
            '\n  ',
            '\n  ',
            '\n  ',
            '\n  ',
            '\n  ',
            '\n  ',
            '\n',
          ],
          u.o,
          u.J,
          u.m,
          u.j,
          u.l,
          u.i,
          u.O,
          u.v
        ),
        M = l.d.button.withConfig({
          displayName: 'glide1style__DefaultBtn',
          componentId: 'bpy0e6-6',
        })(['\n  cursor: pointer;\n  margin: 10px 3px;\n']),
        y = d,
        L = function(e) {
          var t = e.className,
            n = e.children,
            a = e.options,
            o = e.controls,
            c = e.prevButton,
            l = e.nextButton,
            u = e.prevWrapper,
            d = e.nextWrapper,
            p = e.bullets,
            L = e.numberOfBullets,
            j = e.buttonWrapperStyle,
            h = e.bulletWrapperStyle,
            b = e.bulletButtonStyle,
            N = e.carouselSelector,
            I = ['glide'];
          t && I.push(t);
          for (var x = [], S = 0; S < L; S++) x.push(S);
          return (
            Object(i.useEffect)(function() {
              new s.a(N ? '#' + N : '#glide3', Object.assign({}, a)).mount();
            }),
            r.a.createElement(
              y,
              { className: I.join(' '), id: N || 'glide3' },
              r.a.createElement(
                'div',
                { className: 'glide__track', 'data-glide-el': 'track' },
                r.a.createElement('ul', { className: 'glide__slides' }, n)
              ),
              o &&
                r.a.createElement(
                  f,
                  Object.assign(
                    {
                      className: 'glide__controls',
                      'data-glide-el': 'controls',
                    },
                    j
                  ),
                  r.a.createElement(
                    g,
                    Object.assign({}, u, {
                      className: 'glide__prev--area',
                      'data-glide-dir': '<',
                      'aria-label': 'prev',
                    }),
                    c || r.a.createElement(M, null, 'Prev')
                  ),
                  r.a.createElement(
                    g,
                    Object.assign({}, d, {
                      className: 'glide__next--area',
                      'data-glide-dir': '>',
                      'aria-label': 'next',
                    }),
                    l || r.a.createElement(M, null, 'Next')
                  )
                ),
              p &&
                r.a.createElement(
                  A,
                  Object.assign(
                    {
                      className: 'glide__bullets',
                      'data-glide-el': 'controls[nav]',
                    },
                    h
                  ),
                  r.a.createElement(
                    i.Fragment,
                    null,
                    x.map(function(e) {
                      return r.a.createElement(
                        m,
                        Object.assign(
                          {
                            key: e,
                            className: 'glide__bullet',
                            'data-glide-dir': '=' + e,
                            'aria-label': 'bullet' + (e + 1),
                          },
                          b
                        )
                      );
                    })
                  )
                )
            )
          );
        };
      L.defaultProps = { controls: !0, bullets: !1 };
      var j = L,
        h = function(e) {
          var t = e.children;
          return r.a.createElement(p, { className: 'glide__slide' }, t);
        },
        b = (n('Eakc'), n('PPo7')),
        N = n('xqb7'),
        I = l.d.section.withConfig({
          displayName: 'glidesliderstyle__GliderSlider1Wrapper',
          componentId: 'dll1kv-0',
        })([
          '\n  img {\n      width: 100%;\n      height: 100%;\n      max-width: 150px;\n      max-height: 100px;\n      display: block;\n      margin: 0 auto;\n      object-fit: contain;\n  }\n  button {\n    display: none;\n  }\n  ul.glide__slides {\n    align-items: center !important;\n  }\n  @media only screen and (max-width: 575px){\n    img {\n        max-width: 130px;\n        max-height: 80px;\n    }\n  }\n',
        ]),
        x = n('k/KV'),
        S = function(e) {
          var t = e.secTitleWrapper,
            n = (e.secText, e.secHeading),
            i = a.data;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              I,
              { className: 'section_background_color' },
              r.a.createElement(
                c.a,
                { fullWidth: !0, noGutter: !0 },
                r.a.createElement(
                  o.a,
                  t,
                  r.a.createElement(
                    b.a,
                    Object.assign({}, n, { content: 'Our Partners' })
                  )
                ),
                r.a.createElement(
                  j,
                  {
                    options: {
                      type: 'carousel',
                      autoplay: 1e3,
                      perView: 5,
                      gap: 0,
                      animationDuration: 3e3,
                      animationTimingFunc: 'linear',
                      peek: { before: 100, after: 100 },
                      breakpoints: {
                        800: { perView: 3, peek: { before: 80, after: 80 } },
                        575: { perView: 2, peek: { before: 30, after: 30 } },
                      },
                    },
                    nextButton: r.a.createElement(N.a, {
                      icon: r.a.createElement('i', {
                        className: 'flaticon-next',
                      }),
                      variant: 'textButton',
                      'aria-label': 'next button',
                    }),
                    prevButton: r.a.createElement(N.a, {
                      icon: r.a.createElement('i', {
                        className: 'flaticon-left-arrow',
                      }),
                      variant: 'textButton',
                      'aria-label': 'prev button',
                    }),
                  },
                  r.a.createElement(
                    r.a.Fragment,
                    null,
                    i.hostingJson.PARTNERS.map(function(e, t) {
                      return r.a.createElement(
                        h,
                        { key: 'partners-slide-' + t },
                        r.a.createElement(x.a, {
                          src: e.avatar.childImageSharp.fluid.src,
                          alt: 'partners-' + t,
                        })
                      );
                    })
                  )
                ),
                r.a.createElement('div', { className: 'empty_space30' })
              )
            )
          );
        };
      S.defaultProps = {
        secTitleWrapper: { as: 'section' },
        secText: {
          as: 'span',
          display: 'block',
          textAlign: 'center',
          fontSize: ['30px', '30px', '35px', '40px', '45px'],
          pb: '20px',
          mt: '25px',
        },
        secHeading: {
          textAlign: 'center',
          fontSize: ['30px', '30px', '35px', '40px', '45px'],
          color: 'headingColor',
          pt: '40px',
          pb: '30px',
        },
      };
      t.a = S;
    },
    Rkrg: function(e, t, n) {
      n('r0id'), n('LnO1'), n('3eMz'), n('dtAy'), n('DB+v');
      var a = n('1kx4'),
        i = function(e) {
          var t = '',
            n = Object.keys(e);
          return (
            n.forEach(function(i, r) {
              var o = e[i];
              (function(e) {
                return /[height|width]$/.test(e);
              })((i = a(i))) &&
                'number' == typeof o &&
                (o += 'px'),
                (t +=
                  !0 === o
                    ? i
                    : !1 === o
                    ? 'not ' + i
                    : '(' + i + ': ' + o + ')'),
                r < n.length - 1 && (t += ' and ');
            }),
            t
          );
        };
      e.exports = function(e) {
        var t = '';
        return 'string' == typeof e
          ? e
          : e instanceof Array
          ? (e.forEach(function(n, a) {
              (t += i(n)), a < e.length - 1 && (t += ', ');
            }),
            t)
          : i(e);
      };
    },
    TGjy: function(e, t) {
      e.exports =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMwZjQ2Y2EiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PGcgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48cGF0aCBkPSJNMTMuNTIgNDYuNjVoNzIuMWwxMi41NCAyNC4yMkgxLjgzeiIvPjxwYXRoIGQ9Ik05LjM4IDY3LjUzSDkwLjNjMCAuMTctOC43Ni0xNy45NS04Ljc2LTE3Ljk1aC02My4zTDkuMzggNjcuNTN6bTkuMTYtMjAuODhMNTAgMTQuNjhsMTUgMTUuMiAxMy41Mi0xMy42NC02LjM2LTYuNDggMjUuNjctNi43Mi02LjY3IDI1LjQ3LTYuNC02LjE2LTE5LjggMTkuNzRMNTAgMjcuNCAzMC41NiA0Ni42NXpNMS44MyA3MC44N2g5Ni4zNHYyLjg4SDEuODN6bTAgNi4xM2g5Ni4zNHYyLjhIMS44M3ptMCA1LjdoOTYuMzR2Mi44SDEuODN6bTAgNS43M2g5Ni4zNHYyLjhIMS44M3ptMCA1LjcyaDk2LjM0djIuOEgxLjgzeiIvPjwvZz48ZWxsaXBzZSBjeD0iNDkuODMiIGN5PSI1OC41NSIgcng9IjguODYiIHJ5PSI3LjM3Ii8+PC9nPjxwYXRoIGZpbGw9IiMwZjQ2Y2EiIGQ9Ik01MC4zIDUzLjZ2LjU2Yy4zNy4wNC43LjEuOTUuMjNhMS45NCAxLjk0IDAgMCAxIC42OS41MmMuMTYuMTguMjguMzYuMzYuNTQuMDguMi4xMy4zNi4xMy41IDAgLjE3LS4wNi4zMi0uMi40NWEuNjIuNjIgMCAwIDEtLjQ2LjE5Yy0uMzQgMC0uNTYtLjE4LS42Ni0uNTVhMS4xNyAxLjE3IDAgMCAwLS44Mi0uODZ2Mi4xNmwxLjAyLjMyYy4yNS4xLjQ4LjI0LjY4LjQyLjIuMi4zOC40Mi41LjY4cy4xNy41NS4xNy44N2MwIC40LS4xLjc2LS4yOCAxLjEtLjE4LjM0LS40Ni42Mi0uODIuODRzLS44LjM1LTEuMjguNHYxLjNjMCAuMi0uMDIuMzUtLjA2LjQ1LS4wNC4xLS4xMy4xNC0uMjYuMTQtLjEyIDAtLjItLjA0LS4yNi0uMS0uMDUtLjA4LS4wOC0uMi0uMDgtLjM1VjYyYy0uNC0uMDQtLjc2LS4xNC0xLjA2LS4zcy0uNTYtLjMzLS43Ni0uNTRhMi4zMiAyLjMyIDAgMCAxLS40NS0uNjcgMS43MiAxLjcyIDAgMCAxLS4xNS0uNjljMC0uMTcuMDYtLjMyLjItLjQ1cy4zLS4yLjQ4LS4yYy4xNiAwIC4zLjA0LjQuMXMuMTguMTcuMjIuM2wuMjQuNjVjLjA3LjE1LjE3LjMuMy40cy4zMy4yMi41Ni4zdi0yLjRjLS40Ni0uMTMtLjg1LS4yNy0xLjE2LS40M2EyLjA0IDIuMDQgMCAwIDEtLjc2LS42N2MtLjItLjMtLjMtLjY2LS4zLTEuMTIgMC0uNi4yLTEuMDguNTctMS40NnMuOTMtLjYgMS42NC0uNjZ2LS41NWMwLS4zLjEtLjQ0LjMzLS40NC4yNi0uMDEuMzcuMTMuMzcuNHptLS42NiAzLjU2di0yYy0uMy4xLS41Mi4yLS42OC4zNHMtLjI0LjM2LS4yNC42NGMwIC4yNy4wOC40OC4yMy42Mi4xNS4xNS4zOC4yOC43LjR6bS42NiAxLjU0djIuMjdjLjM1LS4wNy42Mi0uMi44LS40MnMuMy0uNDYuMy0uNzRjMC0uMy0uMS0uNTMtLjI4LS43LS4yLS4xNi0uNDYtLjMtLjgyLS40eiIvPjwvc3ZnPg==';
    },
    TrzB: function(e, t, n) {
      var a, i;
      n('zpx+'),
        n('rmZQ'),
        n('T7D0'),
        void 0 ===
          (i =
            'function' ==
            typeof (a = function(e, t, n) {
              return function(e, t, n, a, i, r) {
                function o(e) {
                  return 'number' == typeof e && !isNaN(e);
                }
                var c = this;
                if (
                  ((c.version = function() {
                    return '1.9.3';
                  }),
                  (c.options = {
                    useEasing: !0,
                    useGrouping: !0,
                    separator: ',',
                    decimal: '.',
                    easingFn: function(e, t, n, a) {
                      return (
                        (n * (1 - Math.pow(2, (-10 * e) / a)) * 1024) / 1023 + t
                      );
                    },
                    formattingFn: function(e) {
                      var t,
                        n,
                        a,
                        i,
                        r,
                        o,
                        s = e < 0;
                      if (
                        ((e = Math.abs(e).toFixed(c.decimals)),
                        (n = (t = (e += '').split('.'))[0]),
                        (a = t.length > 1 ? c.options.decimal + t[1] : ''),
                        c.options.useGrouping)
                      ) {
                        for (i = '', r = 0, o = n.length; r < o; ++r)
                          0 !== r &&
                            r % 3 == 0 &&
                            (i = c.options.separator + i),
                            (i = n[o - r - 1] + i);
                        n = i;
                      }
                      return (
                        c.options.numerals.length &&
                          ((n = n.replace(/[0-9]/g, function(e) {
                            return c.options.numerals[+e];
                          })),
                          (a = a.replace(/[0-9]/g, function(e) {
                            return c.options.numerals[+e];
                          }))),
                        (s ? '-' : '') +
                          c.options.prefix +
                          n +
                          a +
                          c.options.suffix
                      );
                    },
                    prefix: '',
                    suffix: '',
                    numerals: [],
                  }),
                  r && 'object' == typeof r)
                )
                  for (var s in c.options)
                    r.hasOwnProperty(s) &&
                      null !== r[s] &&
                      (c.options[s] = r[s]);
                '' === c.options.separator
                  ? (c.options.useGrouping = !1)
                  : (c.options.separator = '' + c.options.separator);
                for (
                  var l = 0, u = ['webkit', 'moz', 'ms', 'o'], d = 0;
                  d < u.length && !window.requestAnimationFrame;
                  ++d
                )
                  (window.requestAnimationFrame =
                    window[u[d] + 'RequestAnimationFrame']),
                    (window.cancelAnimationFrame =
                      window[u[d] + 'CancelAnimationFrame'] ||
                      window[u[d] + 'CancelRequestAnimationFrame']);
                window.requestAnimationFrame ||
                  (window.requestAnimationFrame = function(e, t) {
                    var n = new Date().getTime(),
                      a = Math.max(0, 16 - (n - l)),
                      i = window.setTimeout(function() {
                        e(n + a);
                      }, a);
                    return (l = n + a), i;
                  }),
                  window.cancelAnimationFrame ||
                    (window.cancelAnimationFrame = function(e) {
                      clearTimeout(e);
                    }),
                  (c.initialize = function() {
                    return !(
                      !c.initialized &&
                      ((c.error = ''),
                      (c.d =
                        'string' == typeof e ? document.getElementById(e) : e),
                      c.d
                        ? ((c.startVal = Number(t)),
                          (c.endVal = Number(n)),
                          o(c.startVal) && o(c.endVal)
                            ? ((c.decimals = Math.max(0, a || 0)),
                              (c.dec = Math.pow(10, c.decimals)),
                              (c.duration = 1e3 * Number(i) || 2e3),
                              (c.countDown = c.startVal > c.endVal),
                              (c.frameVal = c.startVal),
                              (c.initialized = !0),
                              0)
                            : ((c.error =
                                '[CountUp] startVal (' +
                                t +
                                ') or endVal (' +
                                n +
                                ') is not a number'),
                              1))
                        : ((c.error = '[CountUp] target is null or undefined'),
                          1))
                    );
                  }),
                  (c.printValue = function(e) {
                    var t = c.options.formattingFn(e);
                    'INPUT' === c.d.tagName
                      ? (this.d.value = t)
                      : 'text' === c.d.tagName || 'tspan' === c.d.tagName
                      ? (this.d.textContent = t)
                      : (this.d.innerHTML = t);
                  }),
                  (c.count = function(e) {
                    c.startTime || (c.startTime = e), (c.timestamp = e);
                    var t = e - c.startTime;
                    (c.remaining = c.duration - t),
                      c.options.useEasing
                        ? c.countDown
                          ? (c.frameVal =
                              c.startVal -
                              c.options.easingFn(
                                t,
                                0,
                                c.startVal - c.endVal,
                                c.duration
                              ))
                          : (c.frameVal = c.options.easingFn(
                              t,
                              c.startVal,
                              c.endVal - c.startVal,
                              c.duration
                            ))
                        : c.countDown
                        ? (c.frameVal =
                            c.startVal -
                            (c.startVal - c.endVal) * (t / c.duration))
                        : (c.frameVal =
                            c.startVal +
                            (c.endVal - c.startVal) * (t / c.duration)),
                      c.countDown
                        ? (c.frameVal =
                            c.frameVal < c.endVal ? c.endVal : c.frameVal)
                        : (c.frameVal =
                            c.frameVal > c.endVal ? c.endVal : c.frameVal),
                      (c.frameVal = Math.round(c.frameVal * c.dec) / c.dec),
                      c.printValue(c.frameVal),
                      t < c.duration
                        ? (c.rAF = requestAnimationFrame(c.count))
                        : c.callback && c.callback();
                  }),
                  (c.start = function(e) {
                    c.initialize() &&
                      ((c.callback = e),
                      (c.rAF = requestAnimationFrame(c.count)));
                  }),
                  (c.pauseResume = function() {
                    c.paused
                      ? ((c.paused = !1),
                        delete c.startTime,
                        (c.duration = c.remaining),
                        (c.startVal = c.frameVal),
                        requestAnimationFrame(c.count))
                      : ((c.paused = !0), cancelAnimationFrame(c.rAF));
                  }),
                  (c.reset = function() {
                    (c.paused = !1),
                      delete c.startTime,
                      (c.initialized = !1),
                      c.initialize() &&
                        (cancelAnimationFrame(c.rAF), c.printValue(c.startVal));
                  }),
                  (c.update = function(e) {
                    if (c.initialize()) {
                      if (!o((e = Number(e))))
                        return void (c.error =
                          '[CountUp] update() - new endVal is not a number: ' +
                          e);
                      (c.error = ''),
                        e !== c.frameVal &&
                          (cancelAnimationFrame(c.rAF),
                          (c.paused = !1),
                          delete c.startTime,
                          (c.startVal = c.frameVal),
                          (c.endVal = e),
                          (c.countDown = c.startVal > c.endVal),
                          (c.rAF = requestAnimationFrame(c.count)));
                    }
                  }),
                  c.initialize() && c.printValue(c.startVal);
              };
            })
              ? a.call(t, n, t, e)
              : a) || (e.exports = i);
    },
    U8vK: function(e, t) {
      e.exports =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2Ny41NyIgaGVpZ2h0PSIxMDEuNTMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBmNDZjYSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiPjxwYXRoIGQ9Ik0zMy44IDY1LjE3YzE3LjQ4IDAgMzEuNy0xNC4yMiAzMS43LTMxLjdTNTEuMjYgMS42IDMzLjggMS42IDIuMSAxNiAyLjEgMzMuNDdzMTQuMjIgMzEuNyAzMS43IDMxLjd6bS4wMy0yOS42NmE4LjY1IDguNjUgMCAwIDEtOC42NC04LjY0YzAtMy43NCAyLjQtNi45IDUuNzMtOC4xVjE2LjJhMi44OCAyLjg4IDAgMSAxIDUuNzYgMHYyLjU2YzMuMzYgMS4xOCA1LjggNC4zNiA1LjggOC4xMmEyLjg4IDIuODggMCAwIDEtNS43NiAwIDIuODggMi44OCAwIDEgMC0yLjg4IDIuODggOC42NSA4LjY1IDAgMCAxIDguNjQgOC42NGMwIDMuNzYtMi40MyA2Ljk0LTUuOCA4LjEydjQuMjVhMi44OCAyLjg4IDAgMCAxLTUuNzYgMFY0Ni41Yy0zLjMzLTEuMi01LjczLTQuMzYtNS43My04LjFhMi44OCAyLjg4IDAgMCAxIDUuNzYgMCAyLjg4IDIuODggMCAxIDAgNS43NiAwIDIuOSAyLjkgMCAwIDAtMi44OC0yLjl6bTE0LjE0IDQ4LjkyYy0uNDQtMS4wOC0xLjUtMS43OC0yLjY2LTEuNzhoLTUuNzZ2LTEyLjJjLTEuODguMy0zLjguNS01Ljc2LjVzLTMuODgtLjItNS43Ni0uNXYxMi4yaC01Ljc2Yy0xLjE2IDAtMi4yMi43LTIuNjYgMS43OC0uNDUgMS4wOC0uMiAyLjMyLjYyIDMuMTRMMzEuNzUgOTkuMWMuNTYuNTYgMS4zLjg0IDIuMDQuODRzMS40Ny0uMjggMi4wNC0uODRsMTEuNTMtMTEuNTNhMi44OSAyLjg5IDAgMCAwIC42LTMuMTR6Ii8+PC9zdmc+';
    },
    UPIJ: function(e) {
      e.exports = JSON.parse(
        '{"data":{"hostingJson":{"SERVICES_DATA":[{"title":"Development Server ","description":"Get Lightspeed Development Server for your website and fly in the web","icon":{"publicURL":"/static/icon1-3514e790b8a03c39ad656fa5ff7a1a10.svg"}},{"title":"Web Protection","description":"Best Protection and some tools are provided with our Web servers .","icon":{"publicURL":"/static/icon2-c3c53d3814f3bcb4e189efa4439fc1c5.svg"}},{"title":"E-commerce Shop","description":"You can build any kind of E-commerce Shop with payment security tools","icon":{"publicURL":"/static/icon3-dabd92f823ee26b634de5158a84e1a27.svg"}},{"title":"Money Back Guarantee","description":"We have provided 30 days money back guarantee for our customer","icon":{"publicURL":"/static/icon4-8575155f7266f3f456e8fed82d526325.svg"}},{"title":"Client Satisfaction","description":"Client Satisfaction is our first priority and We are best at it","icon":{"publicURL":"/static/icon5-e4c71731e1a1f5a4b5c906b4dbe1fa88.svg"}},{"title":"24/7 Online Support","description":"A Dedicated support team is always ready to provide best support ","icon":{"publicURL":"/static/icon6-7882ca3c1fd3f35c6d3c0513eebd03e3.svg"}}]}}}'
      );
    },
    'Us+g': function(e, t) {
      e.exports =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+PGcgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjMGY0NmNhIiBzdHJva2Utd2lkdGg9IjIiPjxnIHN0cm9rZS1taXRlcmxpbWl0PSIxMCI+PHBhdGggZD0iTTk4LjI4IDk4LjI4SDEuNzJ2LTYuNjZsMS42Ni0zLjMzSDk2LjZsMS42NiAzLjMzdjYuNjZ6TTUwIDEuNzJMMy40IDI4LjM2djEwaDkzLjJ2LTEwTDUwIDEuNzJ6Ii8+PHBhdGggZD0iTTMwLjAyIDUxLjY2aDEzLjMydjQuNThhMi4wOCAyLjA4IDAgMCAxLTIuMDggMi4wOEgzMi4xYTIuMDggMi4wOCAwIDAgMS0yLjA4LTIuMDh2LTQuNTh6TTQzLjM0IDg4LjNIMzAuMDJ2LTQuNmEyLjA4IDIuMDggMCAwIDEgMi4wOC0yLjA4aDkuMTZhMi4wOCAyLjA4IDAgMCAxIDIuMDggMi4wOHY0LjU4em0xMy4zMi0zNi42NGgxMy4zMnY0LjU4YTIuMDggMi4wOCAwIDAgMS0yLjA4IDIuMDhoLTkuMTZhMi4wOCAyLjA4IDAgMCAxLTIuMDgtMi4wOHYtNC41OHpNNjkuOTggODguM0g1Ni42NnYtNC42YTIuMDggMi4wOCAwIDAgMSAyLjA4LTIuMDhoOS4xNmEyLjA4IDIuMDggMCAwIDEgMi4wOCAyLjA4djQuNTh6TTMuNCA1MS42NmgxMy4zdjQuNThhMi4wOCAyLjA4IDAgMCAxLTIuMDggMi4wOEg1LjQ3YTIuMDggMi4wOCAwIDAgMS0yLjA4LTIuMDh2LTQuNTh6TTE2LjcgODguM0gzLjR2LTQuNmEyLjA4IDIuMDggMCAwIDEgMi4wOC0yLjA4aDkuMTZhMi4wOCAyLjA4IDAgMCAxIDIuMDggMi4wOHY0LjU4eiIvPjx1c2UgeGxpbms6aHJlZj0iI0IiLz48cGF0aCBkPSJNNjUuNCA3OC45bC0uNzggMi43M0g2MGwtLjc4LTIuNzNjLTEuNjYtNS44My0xLjY2LTEyIDAtMTcuODRsLjc4LTIuNzNoNC42M2wuNzggMi43M2MxLjY2IDUuODQgMS42NiAxMi4wMiAwIDE3Ljg0em0tNTMuMjcgMGwtLjc4IDIuNzNINi43MmwtLjc4LTIuNzNjLTEuNjYtNS44My0xLjY2LTEyIDAtMTcuODRsLjc4LTIuNzNoNC42M2wuNzggMi43M2MxLjY2IDUuODQgMS42NiAxMi4wMiAwIDE3Ljg0eiIvPjx1c2UgeGxpbms6aHJlZj0iI0IiIHg9IjUzLjI3Ii8+PHBhdGggZD0iTTgzLjMgNTEuNjZoMTMuM3Y0LjU4YTIuMDggMi4wOCAwIDAgMS0yLjA4IDIuMDhoLTkuMTZhMi4wOCAyLjA4IDAgMCAxLTIuMDgtMi4wOHYtNC41OHpNOTYuNiA4OC4zSDgzLjN2LTQuNmEyLjA4IDIuMDggMCAwIDEgMi4wOC0yLjA4aDkuMTZhMi4wOCAyLjA4IDAgMCAxIDIuMDggMi4wOHY0LjU4eiIvPjxwYXRoIGQ9Ik0xMC4wNSAzMS43TDUwIDEwLjA1IDg5Ljk1IDMxLjd2Ni42NmgtNzkuOVYzMS43ek0zLjQgNDVoOTMuMnY2LjY2SDMuNFY0NXoiLz48L2c+PGNpcmNsZSBjeD0iNTAiIGN5PSIyNy4yMiIgcj0iNC45OSIvPjxwYXRoIGQ9Ik0zMS43IDI1LjAzaDYuNjZ2NS41MkgzMS43di01LjUyem0yOS45NSAwaDYuNjZ2NS41MmgtNi42NnYtNS41MnpNOTYuNiA0NUgzLjRsLTEuNjYtNi42Nkg5OC4zTDk2LjYgNDV6IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz48L2c+PGRlZnMgPjxwYXRoIGlkPSJCIiBkPSJNMzguNzYgNzguOWwtLjc4IDIuNzNoLTQuNjNsLS43OC0yLjczYy0xLjY2LTUuODMtMS42Ni0xMiAwLTE3Ljg0bC43OC0yLjczaDQuNjNsLjc4IDIuNzNhMzIuMzkgMzIuMzkgMCAwIDEgMCAxNy44NHoiLz48L2RlZnM+PC9zdmc+';
    },
    'Vd+E': function(e) {
      e.exports = JSON.parse(
        '{"data":{"domains":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAIAAADUsmlHAAAACXBIWXMAAAsSAAALEgHS3X78AAAApElEQVQ4y+1SQQrDIBD002KwggeDh1w8hvzBixQbi63izzpY6kEaaPGaOSy7y87ssEoeAyAneYz8/OBdxhhb2ZqHZEzfK3LOKaVSSgjBe48+EsRDMrSFEFLKZVnmeTbGbNvGOV/XFZEx5pyDYpMg3Vowp2lSSl0qkGutoUUpBdlaC0ffydi87/utAkPwCf/Ximb+p4O1U8Fnd8U/nqrbdn7PAbwAGV0KohPUSbQAAAAASUVORK5CYII=","aspectRatio":1.126865671641791,"src":"/static/2c1778e827f8881e66907162a65a6394/08115/circle.png","srcSet":"/static/2c1778e827f8881e66907162a65a6394/8ac63/circle.png 200w,\\n/static/2c1778e827f8881e66907162a65a6394/3891b/circle.png 400w,\\n/static/2c1778e827f8881e66907162a65a6394/08115/circle.png 604w","sizes":"(max-width: 604px) 100vw, 604px"}}}}}'
      );
    },
    WG1E: function(e) {
      e.exports = JSON.parse(
        '{"data":{"hostingJson":{"FEATURES_DATA":[{"title":"Domain Registration & Web Hosting","icon":"flaticon-trophy violate","description":"We have support team for 24/7 operation. They provide help and ongoing assistance at any time.","animation":true,"avatar":{"publicURL":"/static/Accelerate-Processes-c45dbff8c13b043530f842014a121995.svg"}},{"title":"Website Design & Development","icon":"flaticon-startup yellow","description":"Transferring from another host? Our expert support team is standing by to transfer your site.","animation":true,"avatar":{"publicURL":"/static/Reduce-Operating-costs-4ce9005b3e38281908f11bba7f28c8d6.svg"}},{"title":"Dedicated Server & Cloud Hosting","icon":"flaticon-creative green","description":"LiteSpeed Web Server is a high-performance HTTP server and known for its high performance.","animation":true,"avatar":{"publicURL":"/static/Scale-up-with-ease-e2b03bb9ec55dc951a79788ea3fbb349.svg"}}]}}}'
      );
    },
    WYFQ: function(e, t, n) {
      'use strict';
      function a(e, t) {
        var n = {};
        for (var a in e)
          t.indexOf(a) >= 0 ||
            (Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]));
        return n;
      }
      function i(e, t) {
        var n = t.left,
          a = t.right,
          i = t.up,
          r = t.down,
          o = t.top,
          c = t.bottom,
          s = t.mirror,
          l = t.opposite,
          d =
            (n ? 1 : 0) |
            (a ? 2 : 0) |
            (o || r ? 4 : 0) |
            (c || i ? 8 : 0) |
            (s ? 16 : 0) |
            (l ? 32 : 0) |
            (e ? 64 : 0);
        if (p.hasOwnProperty(d)) return p[d];
        if (!s != !(e && l)) {
          var g = [a, n, c, o, r, i];
          (n = g[0]),
            (a = g[1]),
            (o = g[2]),
            (c = g[3]),
            (i = g[4]),
            (r = g[5]);
        }
        var f = n || a,
          A = o || c || i || r,
          m = void 0;
        return (
          f || A
            ? e
              ? (m =
                  '40% {\n          opacity: 1;\n          transform: scale3d(.475, .475, .475) translate3d(' +
                  (f ? (n ? '' : '-') + '42px' : '0') +
                  ', ' +
                  (A ? (r || o ? '-' : '') + '60px' : '0') +
                  ', 0);\n        }\n        to {\n          opacity: 0;\n          transform: scale(.1) translate3d(' +
                  (f ? (a ? '' : '-') + '2000px' : '0') +
                  ', ' +
                  (A ? (i || c ? '' : '-') + '2000px' : '0') +
                  ', 0);\n          transform-origin: ' +
                  (A ? 'center bottom' : (n ? 'left' : 'right') + ' center') +
                  ';\n        }')
              : (m =
                  'from {\n          opacity: 0;\n          transform: scale3d(.1, .1, .1) translate3d(' +
                  (f ? (n ? '-' : '') + '1000px' : '0') +
                  ', ' +
                  (A ? (r || o ? '-' : '') + '1000px' : '0') +
                  ', 0);\n          animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n        }\n        60% {\n          opacity: 1;\n          transform: scale3d(.475, .475, .475) translate3d(' +
                  (f ? (a ? '-' : '') + '10px' : '0') +
                  ', ' +
                  (A ? (i || c ? '-' : '') + '60px' : '0') +
                  ', 0);\n          animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n        }')
            : (m =
                (e ? 'to' : 'from') +
                ' {opacity: 0; transform: scale3d(.1, .1, .1);} ' +
                (e ? 'from' : 'to') +
                ' { opacity: 1; transform: none;}'),
          (p[d] = (0, u.animation)(m)),
          p[d]
        );
      }
      function r() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : u.defaults,
          t = e.children,
          n = (e.out, e.forever),
          r = e.timeout,
          o = e.duration,
          c = void 0 === o ? u.defaults.duration : o,
          s = e.delay,
          d = void 0 === s ? u.defaults.delay : s,
          p = e.count,
          g = void 0 === p ? u.defaults.count : p,
          f = a(e, [
            'children',
            'out',
            'forever',
            'timeout',
            'duration',
            'delay',
            'count',
          ]),
          A = {
            make: i,
            duration: void 0 === r ? c : r,
            delay: d,
            forever: n,
            count: g,
            style: { animationFillMode: 'both' },
            reverse: f.left,
          };
        return (0, l.default)(f, A, A, t);
      }
      n('UQCJ'),
        n('Ph8W'),
        Object.defineProperty(t, '__esModule', { value: !0 });
      var o,
        c = n('aWzz'),
        s = n('Oksl'),
        l = (o = s) && o.__esModule ? o : { default: o },
        u = n('Mxmr'),
        d = {
          out: c.bool,
          left: c.bool,
          right: c.bool,
          top: c.bool,
          bottom: c.bool,
          mirror: c.bool,
          opposite: c.bool,
          duration: c.number,
          timeout: c.number,
          delay: c.number,
          count: c.number,
          forever: c.bool,
        },
        p = {};
      (r.propTypes = d), (t.default = r), (e.exports = t.default);
    },
    bG7j: function(e, t, n) {
      'use strict';
      n.d(t, 'f', function() {
        return o;
      }),
        n.d(t, 'c', function() {
          return s;
        }),
        n.d(t, 'd', function() {
          return c;
        }),
        n.d(t, 'b', function() {
          return l;
        }),
        n.d(t, 'a', function() {
          return u;
        }),
        n.d(t, 'e', function() {
          return d;
        });
      var a = n('j/s1'),
        i = n('GkOb'),
        r = a.d.div.withConfig({
          displayName: 'glidestyle__GlideWrapper',
          componentId: 'sc-1df9bf1-0',
        })(['\n  ', '\n  ', '\n  ', '\n'], i.O, i.v, i.J),
        o = a.d.li.withConfig({
          displayName: 'glidestyle__GlideSlideWrapper',
          componentId: 'sc-1df9bf1-1',
        })(
          ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
          i.J,
          i.m,
          i.j,
          i.l,
          i.i
        ),
        c = a.d.div.withConfig({
          displayName: 'glidestyle__ButtonWrapper',
          componentId: 'sc-1df9bf1-2',
        })(
          [
            '\n  display: inline-block;\n  ',
            '\n  ',
            '\n  ',
            '\n  ',
            '\n  ',
            '\n  ',
            '\n  ',
            '\n  ',
            '\n  ',
            '\n  ',
            '\n  ',
            '\n',
          ],
          i.o,
          i.J,
          i.m,
          i.j,
          i.l,
          i.i,
          i.H,
          i.M,
          i.x,
          i.I,
          i.k
        ),
        s = a.d.div.withConfig({
          displayName: 'glidestyle__ButtonControlWrapper',
          componentId: 'sc-1df9bf1-3',
        })(
          [
            '\n  ',
            '\n  ',
            '\n  ',
            '\n  ',
            '\n  ',
            '\n  ',
            '\n  ',
            '\n  ',
            '\n  ',
            '\n',
          ],
          i.o,
          i.J,
          i.a,
          i.w,
          i.H,
          i.M,
          i.x,
          i.I,
          i.k
        ),
        l = a.d.div.withConfig({
          displayName: 'glidestyle__BulletControlWrapper',
          componentId: 'sc-1df9bf1-4',
        })(
          ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
          i.o,
          i.J,
          i.a,
          i.w,
          i.r
        ),
        u = a.d.button.withConfig({
          displayName: 'glidestyle__BulletButton',
          componentId: 'sc-1df9bf1-5',
        })(
          [
            '\n  cursor: pointer;\n  width: 10px;\n  height: 10px;\n  margin: 4px;\n  border: 0;\n  padding: 0;\n  outline: none;\n  border-radius: 50%;\n  background-color: #D6D6D6;\n\n  &:hover,\n  &.glide__bullet--active {\n    background-color: #869791;\n  }\n\n  ',
            '\n  ',
            '\n  ',
            '\n  ',
            '\n  ',
            '\n  ',
            '\n  ',
            '\n  ',
            '\n',
          ],
          i.o,
          i.J,
          i.m,
          i.j,
          i.l,
          i.i,
          i.O,
          i.v
        ),
        d = a.d.button.withConfig({
          displayName: 'glidestyle__DefaultBtn',
          componentId: 'sc-1df9bf1-6',
        })(['\n  cursor: pointer;\n  margin: 10px 3px;\n']);
      t.g = r;
    },
    c2g6: function(e, t) {
      e.exports =
        'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMy4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSIxMDBweCIgaGVpZ2h0PSIxMDBweCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMCAxMDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiMwRjQ2Q0E7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Qxe2ZpbGw6IzBGNDZDQTt9DQo8L3N0eWxlPg0KPGc+DQoJPGxpbmUgY2xhc3M9InN0MCIgeDE9IjUwLjIiIHkxPSIzNS45IiB4Mj0iNTAuMiIgeTI9IjI2LjYiLz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNTUuMiwzNS45di0xLjhsNC40LTQuNWMwLDAsMC0yLjMsMC0yLjUiLz4NCgk8cG9seWxpbmUgY2xhc3M9InN0MCIgcG9pbnRzPSI0NS4xLDM1LjkgNDUuMSwzNCA0MC44LDI5LjggNDAuOCwyNy41IAkiLz4NCgk8cG9seWxpbmUgY2xhc3M9InN0MCIgcG9pbnRzPSI2My44LDM4LjEgNjUuNywzOC4xIDY5LjQsMzMuNCA2OS40LDI5LjUgCSIvPg0KCTxwb2x5bGluZSBjbGFzcz0ic3QwIiBwb2ludHM9IjM2LjMsMzcuNyAzNS4yLDM3LjcgMzAuNywzMy4zIDMwLjcsMzAuMiAJIi8+DQoJPHBvbHlsaW5lIGNsYXNzPSJzdDAiIHBvaW50cz0iNjQuMiw0Mi40IDY3LjIsNDIuNCA3Ni4xLDMyLjkgNzguNSwzMi45IAkiLz4NCgk8cG9seWxpbmUgY2xhc3M9InN0MCIgcG9pbnRzPSI2NC4yLDQ3LjMgNzAuOCw0Ny4zIDc3LjQsNDAuMyA4Ni41LDQwLjMgCSIvPg0KCTxwb2x5bGluZSBjbGFzcz0ic3QwIiBwb2ludHM9IjY0LjIsNDkuNSA3Ny41LDQ5LjUgNzkuNCw0Ny4zIAkiLz4NCgk8cG9seWxpbmUgY2xhc3M9InN0MCIgcG9pbnRzPSI2NC4yLDUyLjggNzAuNCw1Mi44IDc3LjMsNTkuNyA4Niw1OS43IAkiLz4NCgk8cG9seWxpbmUgY2xhc3M9InN0MCIgcG9pbnRzPSI4Mi4zLDUxLjcgODQuNiw0OS45IDk0LjYsNDkuOSAJIi8+DQoJPHBvbHlsaW5lIGNsYXNzPSJzdDAiIHBvaW50cz0iNjQuMiw1Ny43IDY3LjcsNTcuNyA3Niw2Ni45IDc4LjUsNjYuOSAJIi8+DQoJPHBvbHlsaW5lIGNsYXNzPSJzdDAiIHBvaW50cz0iNjMuOCw2MS42IDY1LjYsNjEuNiA2OS40LDY2LjQgNjkuNCw3MC43IAkiLz4NCgk8cG9seWxpbmUgY2xhc3M9InN0MCIgcG9pbnRzPSI1NS4yLDYzLjkgNTUuMiw2NS44IDU5LjYsNzAgNTkuNiw3My4yIAkiLz4NCgk8bGluZSBjbGFzcz0ic3QwIiB4MT0iNTAuMiIgeTE9IjYzLjkiIHgyPSI1MC4yIiB5Mj0iNzMuNyIvPg0KCTxwb2x5bGluZSBjbGFzcz0ic3QwIiBwb2ludHM9IjQ1LjEsNjMuOSA0NS4xLDY1LjggNDEuMSw3MCA0MS4xLDczLjQgCSIvPg0KCTxwb2x5bGluZSBjbGFzcz0ic3QwIiBwb2ludHM9IjM2LjksNjIgMzUuMSw2MiAzMSw2Ni45IDMxLDcwLjUgCSIvPg0KCTxwb2x5bGluZSBjbGFzcz0ic3QwIiBwb2ludHM9IjM2LjMsNTcuNyAzMy4xLDU3LjcgMjQuNSw2Ny4yIDIxLjcsNjcuMiAJIi8+DQoJPHBvbHlsaW5lIGNsYXNzPSJzdDAiIHBvaW50cz0iMzYuMyw1Mi44IDI5LjUsNTIuOCAyMy41LDU5LjcgMTMuOSw1OS43IAkiLz4NCgk8cG9seWxpbmUgY2xhc3M9InN0MCIgcG9pbnRzPSI2LjgsNDkuOSAxNS42LDQ5LjkgMTcuOSw1Mi4xIAkiLz4NCgk8cG9seWxpbmUgY2xhc3M9InN0MCIgcG9pbnRzPSIzNi4zLDQ5LjUgMjIuNiw0OS41IDIxLjcsNDguMiAJIi8+DQoJPHBvbHlsaW5lIGNsYXNzPSJzdDAiIHBvaW50cz0iMzYuMyw0Ny4zIDI5LjksNDcuMyAyMy4xLDQwLjMgMTQuMyw0MC4zIAkiLz4NCgk8cG9seWxpbmUgY2xhc3M9InN0MCIgcG9pbnRzPSIzNi4zLDQyLjIgMzIuOCw0Mi4yIDI0LjMsMzIuOSAyMi41LDMyLjkgCSIvPg0KCTxjaXJjbGUgY2xhc3M9InN0MSIgY3g9IjQwLjgiIGN5PSIyNC42IiByPSIzIi8+DQoJPGNpcmNsZSBjbGFzcz0ic3QxIiBjeD0iNTAuMiIgY3k9IjIzLjciIHI9IjMiLz4NCgk8Y2lyY2xlIGNsYXNzPSJzdDEiIGN4PSI1OS41IiBjeT0iMjQuMiIgcj0iMyIvPg0KCTxjaXJjbGUgY2xhc3M9InN0MSIgY3g9IjY5LjQiIGN5PSIyNy4xIiByPSIzIi8+DQoJPGNpcmNsZSBjbGFzcz0ic3QxIiBjeD0iODEiIGN5PSIzMy4yIiByPSIzIi8+DQoJPGNpcmNsZSBjbGFzcz0ic3QxIiBjeD0iODkiIGN5PSI0MC41IiByPSIzIi8+DQoJPGNpcmNsZSBjbGFzcz0ic3QxIiBjeD0iODAuOSIgY3k9IjQ1LjMiIHI9IjMiLz4NCgk8Y2lyY2xlIGNsYXNzPSJzdDEiIGN4PSI4MSIgY3k9IjUzLjciIHI9IjMiLz4NCgk8Y2lyY2xlIGNsYXNzPSJzdDEiIGN4PSI5Ni4yIiBjeT0iNDkuOSIgcj0iMyIvPg0KCTxjaXJjbGUgY2xhc3M9InN0MSIgY3g9Ijg5IiBjeT0iNTkuNyIgcj0iMyIvPg0KCTxjaXJjbGUgY2xhc3M9InN0MSIgY3g9IjgwLjkiIGN5PSI2Ny4xIiByPSIzIi8+DQoJPGNpcmNsZSBjbGFzcz0ic3QxIiBjeD0iNjkuNCIgY3k9IjczLjIiIHI9IjMiLz4NCgk8Y2lyY2xlIGNsYXNzPSJzdDEiIGN4PSI1OS42IiBjeT0iNzYuMSIgcj0iMyIvPg0KCTxjaXJjbGUgY2xhc3M9InN0MSIgY3g9IjUwLjIiIGN5PSI3Ni4zIiByPSIzIi8+DQoJPGNpcmNsZSBjbGFzcz0ic3QxIiBjeD0iNDAuOCIgY3k9Ijc1LjgiIHI9IjMiLz4NCgk8Y2lyY2xlIGNsYXNzPSJzdDEiIGN4PSIzMSIgY3k9IjczLjIiIHI9IjMiLz4NCgk8Y2lyY2xlIGNsYXNzPSJzdDEiIGN4PSIxOS4zIiBjeT0iNjYuOCIgcj0iMyIvPg0KCTxjaXJjbGUgY2xhc3M9InN0MSIgY3g9IjEwLjkiIGN5PSI1OS43IiByPSIzIi8+DQoJPGNpcmNsZSBjbGFzcz0ic3QxIiBjeD0iMTkuOSIgY3k9IjUzLjciIHI9IjMiLz4NCgk8Y2lyY2xlIGNsYXNzPSJzdDEiIGN4PSIzLjgiIGN5PSI1MC4yIiByPSIzIi8+DQoJPGNpcmNsZSBjbGFzcz0ic3QxIiBjeD0iMTkuOSIgY3k9IjQ1LjkiIHI9IjMiLz4NCgk8Y2lyY2xlIGNsYXNzPSJzdDEiIGN4PSIxMS40IiBjeT0iNDAuMyIgcj0iMyIvPg0KCTxjaXJjbGUgY2xhc3M9InN0MSIgY3g9IjE5LjkiIGN5PSIzMi45IiByPSIzIi8+DQoJPGNpcmNsZSBjbGFzcz0ic3QxIiBjeD0iMzAuOSIgY3k9IjI3LjUiIHI9IjMiLz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjAuNCw2My45SDQwLjFjLTIuMSwwLTMuOC0xLjctMy44LTMuOFYzOS43YzAtMi4xLDEuNy0zLjgsMy44LTMuOGgyMC4zYzIuMSwwLDMuOCwxLjcsMy44LDMuOHYyMC40DQoJCUM2NC4yLDYyLjIsNjIuNSw2My45LDYwLjQsNjMuOXoiLz4NCgk8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSI0My43IiBjeT0iNDQiIHI9IjMuMiIvPg0KPC9nPg0KPC9zdmc+DQo=';
    },
    cGUT: function(e, t) {
      e.exports =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAzLjE4IiBoZWlnaHQ9IjEwMS41MyI+PGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMGY0NmNhIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCI+PHBhdGggZD0iTTE4LjM4IDE5Ljc1YTguNzQgOC43NCAwIDAgMC03LjkgOC43djkuM2MwIDEuNiAxLjMgMi45IDIuOSAyLjloMTkuOTVjMS42IDAgMi45LTEuMyAyLjktMi45di05LjNjMC00LjU1LTMuNDctOC4zLTcuOS04LjciLz48dXNlIHhsaW5rOmhyZWY9IiNCIi8+PHBhdGggZD0iTTQ0LjE1IDE5Ljc1YTguNzQgOC43NCAwIDAgMC03LjkgOC43djkuM2MwIDEuNiAxLjMgMi45IDIuOSAyLjlINTkuMWMxLjYgMCAyLjktMS4zIDIuOS0yLjl2LTkuM2E4Ljc0IDguNzQgMCAwIDAtNy45MS04LjciLz48dXNlIHhsaW5rOmhyZWY9IiNCIiB4PSIyNS43OCIvPjxwYXRoIGQ9Ik02OS45MiAxOS43NWE4LjczIDguNzMgMCAwIDAtNy45IDguN3Y5LjNjMCAxLjYgMS4zIDIuOSAyLjkgMi45aDE5Ljk1YzEuNiAwIDIuOS0xLjMgMi45LTIuOXYtOS4zYTguNzQgOC43NCAwIDAgMC03LjkyLTguNyIvPjx1c2UgeGxpbms6aHJlZj0iI0IiIHg9IjUxLjU1Ii8+PHBhdGggZD0iTTI1LjQ4IDk5Ljk3bDE0LTE0LjM1LTIzLjc0LTIzLjA1TDEuNiA3Ny4yM2wyMy45IDIyLjc0eiIvPjxwYXRoIGQ9Ik03Ni42OCA2Mi40M0w5MC40IDQ4Ljg1YzUuMTItNS4xMiAxNC45OCAxLjM0IDkuNjUgNy42TDgzLjQ1IDc2Yy0uNjUuNzYtMS40IDEuNDQtMi4yMiAyLjAyLTIuNjggMS43LTUuODcgMi4yOC05IDIuMjhINDcuNTZhNDUuNTMgNDUuNTMgMCAwIDAtNS4zNC4zMWwtNy4xLjgtMTQuNy0xNC4yOHM4LjM0LTE1Ljc1IDI0LjctMTEuMjNjMy4wNi44NSA2LjIzIDEuMjUgOS40IDEuMjVoMTYuMmM3LjYzIDAgNy43IDEyLjEyLS4wNiAxMi4xMmgtMTQuMSIvPjwvZz48ZGVmcyA+PHBhdGggaWQ9IkIiIGQ9Ik0zMy4xMiAxMS4zMmMwIDUuNC00LjM3IDkuNzYtOS43NiA5Ljc2cy05Ljc2LTQuMzctOS43Ni05Ljc2IDQuMzctOS43NiA5Ljc2LTkuNzYgOS43NiA0LjM3IDkuNzYgOS43NnoiLz48L2RlZnM+PC9zdmc+';
    },
    ccmb: function(e, t, n) {
      e.exports =
        n.p + 'static/sliderimage1-47e922596ba5d46705bdbaf183740aea.jpg';
    },
    dmOZ: function(e, t) {
      e.exports =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+PHN0eWxlPjwhW0NEQVRBWy5Ce3N0cm9rZS1taXRlcmxpbWl0OjEwfS5De3N0cm9rZS1saW5lam9pbjpyb3VuZH1dXT48L3N0eWxlPjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBmNDZjYSIgc3Ryb2tlLXdpZHRoPSIyIiBjbGFzcz0iQiI+PGcgY2xhc3M9IkMiPjxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTcxLjcgMzguMDJWMjQuOUw1MS42NyA0Ljg2SDQuOTJjLTEuODUuMDEtMy4zNCAxLjUtMy4zNCAzLjM0djgzLjVhMy4zNiAzLjM2IDAgMCAwIDMuMzQgMy4zNGg2My40NWMxLjQtLjAxIDIuNjYtLjkgMy4xNC0yLjIyIi8+PHBhdGggZD0iTTcxLjcgMjQuOUg1NWMtMS44NCAwLTMuMzQtMS41LTMuMzQtMy4zNFY0Ljg2TDcxLjcgMjQuOXoiLz48L2c+PHBhdGggZD0iTTE3LjE0IDE0Ljg4SDcuMTJjLS45MiAwLTEuNjctLjc1LTEuNjctMS42N3MuNzUtMS42NyAxLjY3LTEuNjdoMTAuMDJjLjkyIDAgMS42Ny43NSAxLjY3IDEuNjdzLS43NSAxLjY3LTEuNjcgMS42N3ptMjYuMTggMEgyOC4zYy0uOTIgMC0xLjY3LS43NS0xLjY3LTEuNjdzLjc1LTEuNjcgMS42Ny0xLjY3aDE1LjAzYy45MiAwIDEuNjcuNzUgMS42NyAxLjY3cy0uNzUgMS42Ny0xLjY3IDEuNjd6bTE0LjUgMTguMzdINy4wNGMtLjg4IDAtMS42LS43NS0xLjYtMS42N3MuNy0xLjY3IDEuNi0xLjY3aDUwLjhjLjg4IDAgMS42Ljc1IDEuNiAxLjY3cy0uNyAxLjY3LTEuNiAxLjY3eiIvPjx1c2UgeGxpbms6aHJlZj0iI0IiLz48cGF0aCBkPSJNNTcuODMgMzkuOTNIMzUuNmMtLjg4IDAtMS42LS43NS0xLjYtMS42N3MuNy0xLjY3IDEuNi0xLjY3aDIyLjIyYy44OCAwIDEuNi43NSAxLjYgMS42N3MtLjcgMS42Ny0xLjYgMS42N3ptLTkuMTUgNi42SDYuOTdjLS44NCAwLTEuNTItLjcyLTEuNTItMS42cy42OC0xLjYgMS41Mi0xLjZoNDEuN2MuODQgMCAxLjUyLjcyIDEuNTIgMS42cy0uNjggMS42LTEuNSAxLjZ6bS0xOS40MiA2Ljc0SDcuMDRjLS44OCAwLTEuNi0uNzUtMS42LTEuNjdzLjctMS42NyAxLjYtMS42N2gyMi4yMmMuODggMCAxLjYuNzUgMS42IDEuNjcgMCAuOTMtLjcgMS42Ny0xLjYgMS42N3ptMTcuNDYgMEgzNS42Yy0uODggMC0xLjYtLjc1LTEuNi0xLjY3cy43LTEuNjcgMS42LTEuNjdoMTEuMWMuODggMCAxLjYuNzUgMS42IDEuNjcgMCAuOTMtLjcgMS42Ny0xLjYgMS42N3ptMCA2LjY4SDcuMDRjLS44OCAwLTEuNi0uNzUtMS42LTEuNjdzLjctMS42NyAxLjYtMS42N2gzOS42OGMuODggMCAxLjYuNzUgMS42IDEuNjdzLS43IDEuNjctMS42IDEuNjd6Ii8+PHVzZSB4bGluazpocmVmPSIjQiIgeT0iMjYuNzEiLz48cGF0aCBkPSJNNDYuNzIgNjYuNjRIMzUuNmMtLjg4IDAtMS42LS43NS0xLjYtMS42N3MuNy0xLjY3IDEuNi0xLjY3aDExLjFjLjg4IDAgMS42Ljc1IDEuNiAxLjY3cy0uNyAxLjY3LTEuNiAxLjY3em0uMDMgNi42OEg3LjA0Yy0uODggMC0xLjYtLjc1LTEuNi0xLjY3cy43LTEuNjcgMS42LTEuNjdoMzkuN2MuODggMCAxLjYuNzUgMS42IDEuNjdzLS43IDEuNjctMS42IDEuNjd6bTguNCAxMy4zNkg3LjA0Yy0uODggMC0xLjYtLjc1LTEuNi0xLjY3cy43LTEuNjcgMS42LTEuNjdoNDguMTJjLjg4IDAgMS42Ljc1IDEuNiAxLjY3cy0uNyAxLjY3LTEuNiAxLjY3eiIvPjx1c2UgeGxpbms6aHJlZj0iI0IiIHk9IjQwLjA3Ii8+PHBhdGggZD0iTTQ4LjYgODBoLTEzYy0uODggMC0xLjYtLjc1LTEuNi0xLjY3cy43LTEuNjcgMS42LTEuNjdoMTNjLjg4IDAgMS42Ljc1IDEuNiAxLjY3UzQ5LjQ4IDgwIDQ4LjYgODB6Ii8+PGcgY2xhc3M9IkMiPjxwYXRoIGQ9Ik03NS41MyA5NC45OGwxNi40My0xMS43YzQuMDQtMi44NiA2LjQ1LTcuNSA2LjQ2LTEyLjQ1di0yMy42YzAtLjMzLS4yLS42My0uNS0uNzdsLTIyLjU0LTkuNzRjLS4yLS4xLS40NS0uMS0uNjcgMGwtMjIuNTQgOS43NGMtLjMuMTMtLjUuNDMtLjUuNzd2MjMuNmMuMDEgNC45NSAyLjQyIDkuNiA2LjQ2IDEyLjQ1bDE2LjQzIDExLjdjLjMuMi42OC4yLjk3IDB6Ii8+PHBhdGggZD0iTTYyIDc3Ljg0YTguNjIgOC42MiAwIDAgMS0zLjY1LTcuMDFWNTEuMDhsMTYuNy03LjIgMTYuNyA3LjJ2MTkuNzZjLS4wMSAyLjgtMS4zOCA1LjQtMy42NSA3bC0xMy4wNCA5LjNMNjIgNzcuODR6Ii8+PHBhdGggZD0iTTcxLjcgNzVhMS43MSAxLjcxIDAgMCAxLTEtLjMzbC02LjY4LTVjLS43NC0uNTUtLjktMS42LS4zMy0yLjM0LjU1LS43NCAxLjYtLjkgMi4zNC0uMzNsNS4zOCA0LjA0IDEyLjM1LTE1LjQ0YTEuNjcgMS42NyAwIDEgMSAyLjYxIDIuMDlsLTEzLjM2IDE2LjdjLS4zMy40LS44LjYyLTEuMy42MnoiLz48L2c+PC9nPjxkZWZzID48cGF0aCBpZD0iQiIgZD0iTTI5LjI2IDM5LjkzSDcuMDRjLS44OCAwLTEuNi0uNzUtMS42LTEuNjdzLjctMS42NyAxLjYtMS42N2gyMi4yMmMuODggMCAxLjYuNzUgMS42IDEuNjdzLS43IDEuNjctMS42IDEuNjd6Ii8+PC9kZWZzPjwvc3ZnPg==';
    },
    frp7: function(e, t, n) {
      'use strict';
      n('Fup4'),
        n('T7D0'),
        n('+5EW'),
        n('RwQI'),
        n('cM8k'),
        n('3EZN'),
        n('4SWW'),
        n('r0id'),
        n('lE7+'),
        n('LnO1'),
        n('3eMz'),
        n('dtAy'),
        n('DB+v'),
        n('XjK0'),
        n('SCO9'),
        n('UQCJ'),
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.Dots = void 0);
      var a = r(n('ERkP')),
        i = r(n('O94r'));
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function o(e) {
        return (o =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function c(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function s(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function l(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            'value' in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      function d(e, t) {
        return !t || ('object' !== o(t) && 'function' != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function p(e) {
        return (p = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function g(e, t) {
        return (g =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var f = (function(e) {
        function t() {
          return l(this, t), d(this, p(t).apply(this, arguments));
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && g(e, t);
          })(t, e),
          (n = t),
          (r = [
            {
              key: 'clickHandler',
              value: function(e, t) {
                t.preventDefault(), this.props.clickHandler(e);
              },
            },
            {
              key: 'render',
              value: function() {
                var e,
                  t = this,
                  n = (e = {
                    slideCount: this.props.slideCount,
                    slidesToScroll: this.props.slidesToScroll,
                    slidesToShow: this.props.slidesToShow,
                    infinite: this.props.infinite,
                  }).infinite
                    ? Math.ceil(e.slideCount / e.slidesToScroll)
                    : Math.ceil(
                        (e.slideCount - e.slidesToShow) / e.slidesToScroll
                      ) + 1,
                  r = this.props,
                  o = {
                    onMouseEnter: r.onMouseEnter,
                    onMouseOver: r.onMouseOver,
                    onMouseLeave: r.onMouseLeave,
                  },
                  l = Array.apply(
                    null,
                    Array(n + 1)
                      .join('0')
                      .split('')
                  ).map(function(e, n) {
                    var r = n * t.props.slidesToScroll,
                      o =
                        n * t.props.slidesToScroll +
                        (t.props.slidesToScroll - 1),
                      c = (0, i.default)({
                        'slick-active':
                          t.props.currentSlide >= r &&
                          t.props.currentSlide <= o,
                      }),
                      s = {
                        message: 'dots',
                        index: n,
                        slidesToScroll: t.props.slidesToScroll,
                        currentSlide: t.props.currentSlide,
                      },
                      l = t.clickHandler.bind(t, s);
                    return a.default.createElement(
                      'li',
                      { key: n, className: c },
                      a.default.cloneElement(t.props.customPaging(n), {
                        onClick: l,
                      })
                    );
                  });
                return a.default.cloneElement(
                  this.props.appendDots(l),
                  (function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {};
                      t % 2
                        ? c(n, !0).forEach(function(t) {
                            s(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : c(n).forEach(function(t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t)
                            );
                          });
                    }
                    return e;
                  })({ className: this.props.dotsClass }, o)
                );
              },
            },
          ]) && u(n.prototype, r),
          o && u(n, o),
          t
        );
      })(a.default.PureComponent);
      t.Dots = f;
    },
    gSg6: function(e, t, n) {
      'use strict';
      n('UQCJ'),
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.checkmark = void 0);
      t.checkmark = {
        viewBox: '0 0 16 16',
        children: [
          {
            name: 'path',
            attribs: {
              fill: '#000000',
              d: 'M13.5 2l-7.5 7.5-3.5-3.5-2.5 2.5 6 6 10-10z',
            },
          },
        ],
      };
    },
    iE6P: function(e, t, n) {
      'use strict';
      n('UQCJ'),
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var a = {
        animating: !1,
        autoplaying: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        dragging: !1,
        edgeDragged: !1,
        initialized: !1,
        lazyLoadedList: [],
        listHeight: null,
        listWidth: null,
        scrolling: !1,
        slideCount: null,
        slideHeight: null,
        slideWidth: null,
        swipeLeft: null,
        swiped: !1,
        swiping: !1,
        touchObject: { startX: 0, startY: 0, curX: 0, curY: 0 },
        trackStyle: {},
        trackWidth: 0,
      };
      t.default = a;
    },
    iN3x: function(e, t, n) {
      'use strict';
      function a(e) {
        return e && 'object' == typeof e && 'default' in e ? e.default : e;
      }
      n('p+GS'),
        n('AA1/'),
        n('XjK0'),
        n('/CC1'),
        n('cM8k'),
        n('RwQI'),
        n('3EZN'),
        n('4SWW'),
        n('r0id'),
        n('lE7+'),
        n('SCO9'),
        n('LnO1'),
        n('3eMz'),
        n('dtAy'),
        n('DB+v'),
        n('UQCJ'),
        Object.defineProperty(t, '__esModule', { value: !0 });
      var i = a(n('aWzz')),
        r = n('ERkP'),
        o = a(r),
        c = a(n('lEaq')),
        s = a(n('TrzB'));
      function l(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            'value' in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      function d(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function p(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function g(e) {
        return (g = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function f(e, t) {
        return (f =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function A(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function m(e, t) {
        return !t || ('object' != typeof t && 'function' != typeof t)
          ? A(e)
          : t;
      }
      function M(e, t) {
        return (
          (function(e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function(e, t) {
            if (
              !(
                Symbol.iterator in Object(e) ||
                '[object Arguments]' === Object.prototype.toString.call(e)
              )
            )
              return;
            var n = [],
              a = !0,
              i = !1,
              r = void 0;
            try {
              for (
                var o, c = e[Symbol.iterator]();
                !(a = (o = c.next()).done) &&
                (n.push(o.value), !t || n.length !== t);
                a = !0
              );
            } catch (s) {
              (i = !0), (r = s);
            } finally {
              try {
                a || null == c.return || c.return();
              } finally {
                if (i) throw r;
              }
            }
            return n;
          })(e, t) ||
          (function() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance'
            );
          })()
        );
      }
      var y = function(e, t) {
          var n = t.decimal,
            a = t.decimals,
            i = t.duration,
            r = t.easingFn,
            o = t.end,
            c = t.formattingFn,
            l = t.prefix,
            u = t.separator,
            d = t.start,
            p = t.suffix,
            g = t.useEasing;
          return new s(e, d, o, a, i, {
            decimal: n,
            easingFn: r,
            formattingFn: c,
            separator: u,
            prefix: l,
            suffix: p,
            useEasing: g,
            useGrouping: !!u,
          });
        },
        L = (function(e) {
          function t() {
            var e, n;
            l(this, t);
            for (var a = arguments.length, i = new Array(a), r = 0; r < a; r++)
              i[r] = arguments[r];
            return (
              d(
                A((n = m(this, (e = g(t)).call.apply(e, [this].concat(i))))),
                'createInstance',
                function() {
                  return (
                    'function' == typeof n.props.children &&
                      c(
                        n.containerRef.current &&
                          (n.containerRef.current instanceof HTMLElement ||
                            n.containerRef.current instanceof SVGTextElement ||
                            n.containerRef.current instanceof SVGTSpanElement),
                        'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an HTMLElement, eg. <span ref={containerRef} />.'
                      ),
                    y(n.containerRef.current, n.props)
                  );
                }
              ),
              d(A(n), 'pauseResume', function() {
                var e = A(n),
                  t = e.reset,
                  a = e.restart,
                  i = e.update,
                  r = n.props.onPauseResume;
                n.instance.pauseResume(), r({ reset: t, start: a, update: i });
              }),
              d(A(n), 'reset', function() {
                var e = A(n),
                  t = e.pauseResume,
                  a = e.restart,
                  i = e.update,
                  r = n.props.onReset;
                n.instance.reset(), r({ pauseResume: t, start: a, update: i });
              }),
              d(A(n), 'restart', function() {
                n.reset(), n.start();
              }),
              d(A(n), 'start', function() {
                var e = A(n),
                  t = e.pauseResume,
                  a = e.reset,
                  i = e.restart,
                  r = e.update,
                  o = n.props,
                  c = o.delay,
                  s = o.onEnd,
                  l = o.onStart,
                  u = function() {
                    return n.instance.start(function() {
                      return s({
                        pauseResume: t,
                        reset: a,
                        start: i,
                        update: r,
                      });
                    });
                  };
                c > 0 ? (n.timeoutId = setTimeout(u, 1e3 * c)) : u(),
                  l({ pauseResume: t, reset: a, update: r });
              }),
              d(A(n), 'update', function(e) {
                var t = A(n),
                  a = t.pauseResume,
                  i = t.reset,
                  r = t.restart,
                  o = n.props.onUpdate;
                n.instance.update(e), o({ pauseResume: a, reset: i, start: r });
              }),
              d(A(n), 'containerRef', o.createRef()),
              n
            );
          }
          var n, a, i;
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function'
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && f(e, t);
            })(t, e),
            (n = t),
            (a = [
              {
                key: 'componentDidMount',
                value: function() {
                  var e = this.props,
                    t = e.children,
                    n = e.delay;
                  (this.instance = this.createInstance()),
                    ('function' == typeof t && 0 !== n) || this.start();
                },
              },
              {
                key: 'shouldComponentUpdate',
                value: function(e) {
                  var t = this.props,
                    n = t.end,
                    a = t.start,
                    i = t.suffix,
                    r = t.prefix,
                    o = t.redraw,
                    c = t.duration,
                    s = t.separator,
                    l = t.decimals,
                    u = t.decimal;
                  return (
                    c !== e.duration ||
                    n !== e.end ||
                    a !== e.start ||
                    i !== e.suffix ||
                    r !== e.prefix ||
                    s !== e.separator ||
                    l !== e.decimals ||
                    u !== e.decimal ||
                    o
                  );
                },
              },
              {
                key: 'componentDidUpdate',
                value: function(e) {
                  var t = this.props,
                    n = t.end,
                    a = t.start,
                    i = t.suffix,
                    r = t.prefix,
                    o = t.duration,
                    c = t.separator,
                    s = t.decimals,
                    l = t.decimal,
                    u = t.preserveValue;
                  (o === e.duration &&
                    a === e.start &&
                    i === e.suffix &&
                    r === e.prefix &&
                    c === e.separator &&
                    s === e.decimals &&
                    l === e.decimal) ||
                    (this.instance.reset(),
                    (this.instance = this.createInstance()),
                    this.start()),
                    n !== e.end &&
                      (u || this.instance.reset(), this.instance.update(n));
                },
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  this.timeoutId && clearTimeout(this.timeoutId),
                    this.instance.reset();
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.children,
                    n = e.className,
                    a = e.style,
                    i = this.containerRef,
                    r = this.pauseResume,
                    c = this.reset,
                    s = this.restart,
                    l = this.update;
                  return 'function' == typeof t
                    ? t({
                        countUpRef: i,
                        pauseResume: r,
                        reset: c,
                        start: s,
                        update: l,
                      })
                    : o.createElement('span', {
                        className: n,
                        ref: i,
                        style: a,
                      });
                },
              },
            ]) && u(n.prototype, a),
            i && u(n, i),
            t
          );
        })(r.Component);
      d(L, 'propTypes', {
        decimal: i.string,
        decimals: i.number,
        delay: i.number,
        easingFn: i.func,
        end: i.number.isRequired,
        formattingFn: i.func,
        onEnd: i.func,
        onStart: i.func,
        prefix: i.string,
        redraw: i.bool,
        separator: i.string,
        start: i.number,
        startOnMount: i.bool,
        suffix: i.string,
        style: i.object,
        useEasing: i.bool,
        preserveValue: i.bool,
      }),
        d(L, 'defaultProps', {
          decimal: '.',
          decimals: 0,
          delay: null,
          duration: null,
          easingFn: null,
          formattingFn: null,
          onEnd: function() {},
          onPauseResume: function() {},
          onReset: function() {},
          onStart: function() {},
          onUpdate: function() {},
          prefix: '',
          redraw: !1,
          separator: '',
          start: 0,
          startOnMount: !0,
          suffix: '',
          style: void 0,
          useEasing: !0,
          preserveValue: !1,
        });
      var j = { innerHTML: null };
      (t.default = L),
        (t.useCountUp = function(e) {
          var t = (function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? p(Object(n), !0).forEach(function(t) {
                      d(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : p(Object(n)).forEach(function(t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t)
                      );
                    });
              }
              return e;
            })({}, L.defaultProps, {}, e),
            n = t.start,
            a = t.formattingFn,
            i = M(r.useState('function' == typeof a ? a(n) : n), 2),
            o = i[0],
            c = i[1],
            s = r.useRef(null),
            l = function() {
              var e = s.current;
              if (null !== e) return e;
              var n = (function() {
                var e = y(j, t),
                  n = e.options.formattingFn;
                return (
                  (e.options.formattingFn = function() {
                    var e = n.apply(void 0, arguments);
                    c(e);
                  }),
                  e
                );
              })();
              return (s.current = n), n;
            },
            u = function() {
              var e = t.onReset;
              l().reset(), e({ pauseResume: f, start: g, update: A });
            },
            g = function e() {
              var n = t.onStart,
                a = t.onEnd;
              l().reset(),
                l().start(function() {
                  a({ pauseResume: f, reset: u, start: e, update: A });
                }),
                n({ pauseResume: f, reset: u, update: A });
            },
            f = function() {
              var e = t.onPauseResume;
              l().pauseResume(), e({ reset: u, start: g, update: A });
            },
            A = function(e) {
              var n = t.onUpdate;
              l().update(e), n({ pauseResume: f, reset: u, start: g });
            };
          return (
            r.useEffect(function() {
              var e = t.delay,
                n = t.onStart,
                a = t.onEnd;
              if (t.startOnMount)
                var i = setTimeout(function() {
                  n({ pauseResume: f, reset: u, update: A }),
                    l().start(function() {
                      clearTimeout(i),
                        a({ pauseResume: f, reset: u, start: g, update: A });
                    });
                }, 1e3 * e);
              return u;
            }, []),
            { countUp: o, start: g, pauseResume: f, reset: u, update: A }
          );
        });
    },
    jWoA: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n('ERkP'),
        i = n.n(a),
        r = n('j/s1'),
        o = n('gyFy'),
        c = n.n(o),
        s = n('eQ1p'),
        l = n('6gYp'),
        u = n('zqX6'),
        d = n('2ecW'),
        p = (n('PN9k'), n('WG1E')),
        g = n('MFEH'),
        f = n.n(g),
        A = n('dWle'),
        m = n('Eakc'),
        M = n('PPo7'),
        y = n('kQsd'),
        L = n('tQ4Z'),
        j = n.n(L),
        h = n('JTqY'),
        b = n.n(h),
        N = n('2Xqf'),
        I = n.n(N),
        x = n('yMlv'),
        S = n.n(x),
        w = n('DDc3'),
        v = n.n(w),
        E = n('k/KV'),
        D =
          (n('Rim2'),
          function(e) {
            var t = e.sectionWrapper,
              n = e.row,
              a = e.col,
              r = e.secTitleWrapper,
              o = e.secHeading,
              c = e.secText,
              s = e.featureItemHeading,
              u = e.featureItemDes,
              d = p.data;
            return i.a.createElement(
              A.a,
              t,
              i.a.createElement(
                y.a,
                null,
                i.a.createElement(
                  A.a,
                  r,
                  i.a.createElement(
                    f.a,
                    { bottom: !0, cascade: !0 },
                    i.a.createElement(
                      m.a,
                      Object.assign({}, c, { content: 'OUR SERVICES' })
                    ),
                    i.a.createElement(
                      M.a,
                      Object.assign({}, o, {
                        content: 'Our Featured Service that We Provide',
                      })
                    )
                  )
                ),
                i.a.createElement(
                  A.a,
                  Object.assign({}, n, { className: 'home_feature_section' }),
                  d.hostingJson.FEATURES_DATA.map(function(e, t) {
                    return i.a.createElement(
                      A.a,
                      Object.assign({}, a, { key: 'feature-' + t }),
                      e.animation
                        ? i.a.createElement(
                            f.a,
                            { bottom: !0, delay: 120 * t },
                            i.a.createElement(l.b, {
                              className: 'home_FeatureItem_container',
                              title: i.a.createElement(
                                M.a,
                                Object.assign({}, s, { content: e.title })
                              ),
                              description: i.a.createElement(
                                m.a,
                                Object.assign({}, u, { content: e.description })
                              ),
                              icon: i.a.createElement(E.a, {
                                src: e.avatar.publicURL,
                                alt: 'icon-' + t,
                                className: 'home_features_icon',
                              }),
                              additionalContent: i.a.createElement(
                                i.a.Fragment,
                                null,
                                i.a.createElement('img', {
                                  className: 'hover-shape-1 hover-shape',
                                  src: j.a,
                                  alt: 'Shape One',
                                }),
                                i.a.createElement('img', {
                                  className: 'hover-shape-2 hover-shape',
                                  src: b.a,
                                  alt: 'Shape Two',
                                }),
                                i.a.createElement('img', {
                                  className: 'hover-shape-3 hover-shape',
                                  src: I.a,
                                  alt: 'Shape Three',
                                }),
                                i.a.createElement('img', {
                                  className: 'hover-shape-4 hover-shape',
                                  src: S.a,
                                  alt: 'Shape Four',
                                }),
                                i.a.createElement('img', {
                                  className: 'hover-shape-5 hover-shape',
                                  src: v.a,
                                  alt: 'Shape Five',
                                })
                              ),
                              button: i.a.createElement(
                                'a',
                                { href: '#1', 'aria-label': 'link-' + t },
                                i.a.createElement('i', {
                                  className: 'flaticon-next',
                                })
                              ),
                            })
                          )
                        : i.a.createElement(l.b, {
                            className: 'home_FeatureItem_container',
                            title: i.a.createElement(
                              M.a,
                              Object.assign({}, s, { content: e.title })
                            ),
                            description: i.a.createElement(
                              m.a,
                              Object.assign({}, u, { content: e.description })
                            ),
                            icon: i.a.createElement(E.a, {
                              src: e.avatar.publicURL,
                              alt: 'icon-' + t,
                              className: 'home_features_icon',
                            }),
                            additionalContent: i.a.createElement(
                              i.a.Fragment,
                              null,
                              i.a.createElement('img', {
                                className: 'hover-shape-1 hover-shape',
                                src: j.a,
                                alt: 'Shape One',
                              }),
                              i.a.createElement('img', {
                                className: 'hover-shape-2 hover-shape',
                                src: b.a,
                                alt: 'Shape Two',
                              }),
                              i.a.createElement('img', {
                                className: 'hover-shape-3 hover-shape',
                                src: I.a,
                                alt: 'Shape Three',
                              }),
                              i.a.createElement('img', {
                                className: 'hover-shape-4 hover-shape',
                                src: S.a,
                                alt: 'Shape Four',
                              }),
                              i.a.createElement('img', {
                                className: 'hover-shape-5 hover-shape',
                                src: v.a,
                                alt: 'Shape Five',
                              })
                            ),
                            button: i.a.createElement(
                              'a',
                              { href: '#1', 'aria-label': 'link-' + t },
                              i.a.createElement('i', {
                                className: 'flaticon-next',
                              })
                            ),
                          })
                    );
                  })
                )
              )
            );
          });
      D.defaultProps = {
        sectionWrapper: {
          as: 'section',
          pt: ['60px', '80px', '80px', '80px'],
          pb: ['60px', '80px', '80px', '80px'],
          id: 'feature_section',
        },
        secTitleWrapper: { mb: ['50px', '60px'] },
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
        row: { flexBox: !0, flexWrap: 'wrap', ml: '-15px', mr: '-15px' },
        col: {
          className: 'col',
          width: [1, 0.5, 1 / 3, 1 / 3],
          pr: '15px',
          pl: '15px',
          mb: '30px',
        },
        featureItemHeading: {
          fontSize: ['18px', '18px', '16px', '20px'],
          fontWeight: '400',
          color: '#0f2137',
          lineHeight: '1.5',
          mb: ['10px', '10px', '10px', '10px'],
          letterSpacing: '-0.020em',
          maxWidth: ['auto', 'auto', 'auto', '180px'],
        },
        featureItemDes: {
          fontSize: ['14px', '14px', '14px', '15px'],
          lineHeight: '1.75',
          color: '#343d48cc',
          mb: ['20px', '20px', '20px', '20px'],
        },
      };
      var C = D,
        T = n('F1LP'),
        z = n('Vd+E'),
        O = n('6c1n'),
        k = n.n(O),
        Y = n('xqb7'),
        P = function(e) {
          var t = e.sectionWrapper,
            n = e.row,
            a = e.col,
            r = e.title,
            o = e.description,
            c = e.button,
            s = e.textArea,
            l = e.imageArea,
            u = z.data;
          return i.a.createElement(
            A.a,
            t,
            i.a.createElement(
              y.a,
              null,
              i.a.createElement(
                A.a,
                n,
                i.a.createElement(
                  A.a,
                  Object.assign({}, a, l),
                  i.a.createElement(k.a, {
                    fluid:
                      (null !== u.domains) | void 0
                        ? u.domains.childImageSharp.fluid
                        : {},
                    alt: 'Domain Image',
                  })
                ),
                i.a.createElement(
                  A.a,
                  Object.assign({}, a, s),
                  i.a.createElement(
                    f.a,
                    { bottom: !0, cascade: !0 },
                    i.a.createElement(
                      M.a,
                      Object.assign({}, r, {
                        content:
                          'Available domain extension with your custom name',
                      })
                    ),
                    i.a.createElement(
                      m.a,
                      Object.assign({}, o, {
                        content:
                          'You can check the domain avaibility by our domain tool and choose your desired domain without any hagitation if available.',
                      })
                    ),
                    i.a.createElement(
                      A.a,
                      null,
                      i.a.createElement(
                        'a',
                        { href: '#1' },
                        i.a.createElement(
                          Y.a,
                          Object.assign({}, c, { title: 'EXPLORE MORE' })
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        };
      P.defaultProps = {
        sectionWrapper: {
          as: 'section',
          pt: ['0', '0', '40px', '80px'],
          pb: ['40px', '40px', '80px', '80px'],
        },
        row: {
          flexBox: !0,
          flexWrap: 'wrap',
          ml: '-15px',
          mr: '-15px',
          alignItems: 'center',
        },
        imageAreaRow: { flexDirection: 'row-reverse' },
        col: { pr: '15px', pl: '15px' },
        textArea: { width: ['100%', '100%', '55%', '50%', '42%'] },
        imageArea: {
          width: ['100%', '100%', '45%', '50%', '58%'],
          mb: ['40px', '40px', '0', '0', '0'],
        },
        title: {
          fontSize: ['26px', '38px', '38px', '48px', '48px'],
          fontWeight: '300',
          color: '#0f2137',
          letterSpacing: '-0.025em',
          mb: '20px',
        },
        description: {
          fontSize: '16px',
          color: '#343d48cc',
          lineHeight: '1.75',
          mb: '33px',
        },
        button: {
          type: 'button',
          fontSize: '14px',
          fontWeight: '600',
          color: '#fff',
          borderRadius: '4px',
          pl: '22px',
          pr: '22px',
          colors: 'primaryWithBg',
        },
      };
      var Q = n('BEkx'),
        R = n.n(Q),
        B = n('zTaV'),
        W = n.n(B),
        H = function(e) {
          var t = e.sectionWrapper,
            n = e.row,
            a = e.col,
            r = e.title,
            o = e.description,
            c = e.button,
            s = e.textArea,
            l = e.imageArea,
            u = e.imageOne,
            d = e.imageTwo;
          return i.a.createElement(
            A.a,
            t,
            i.a.createElement(
              y.a,
              null,
              i.a.createElement(
                A.a,
                n,
                i.a.createElement(
                  A.a,
                  Object.assign({}, a, s),
                  i.a.createElement(
                    f.a,
                    { bottom: !0, cascade: !0 },
                    i.a.createElement(
                      M.a,
                      Object.assign({}, r, {
                        content:
                          'We have supported all payment gateways on domain hosting',
                      })
                    ),
                    i.a.createElement(
                      m.a,
                      Object.assign({}, o, {
                        content:
                          'You can pay your bills with your desired payment system. No pain of using a specific credit card for bill payments',
                      })
                    ),
                    i.a.createElement(
                      A.a,
                      null,
                      i.a.createElement(
                        'a',
                        { href: '#1' },
                        i.a.createElement(
                          Y.a,
                          Object.assign({}, c, { title: 'LEARN MORE' })
                        )
                      )
                    )
                  )
                ),
                i.a.createElement(
                  A.a,
                  Object.assign({}, a, l),
                  i.a.createElement(
                    f.a,
                    { right: !0 },
                    i.a.createElement(
                      E.a,
                      Object.assign({}, u, { src: R.a, alt: 'Card Image' })
                    )
                  ),
                  i.a.createElement(
                    f.a,
                    { bottom: !0 },
                    i.a.createElement(
                      E.a,
                      Object.assign({}, d, { src: W.a, alt: 'Payment logos' })
                    )
                  )
                )
              )
            )
          );
        };
      H.defaultProps = {
        sectionWrapper: {
          as: 'section',
          pt: ['60px', '80px', '80px', '80px'],
          pb: ['40px', '40px', '40px', '80px'],
        },
        row: {
          flexBox: !0,
          flexWrap: 'wrap',
          ml: '-15px',
          mr: '-15px',
          alignItems: 'center',
        },
        imageAreaRow: { flexDirection: 'row-reverse' },
        col: { pr: '15px', pl: '15px' },
        textArea: {
          width: ['100%', '100%', '55%', '50%', '42%'],
          mb: ['40px', '40px', '0', '0', '0'],
        },
        imageArea: { width: ['100%', '100%', '45%', '50%', '58%'] },
        title: {
          fontSize: ['26px', '38px', '38px', '48px', '48px'],
          fontWeight: '300',
          color: 'headingColor',
          letterSpacing: '-0.025em',
          mb: '20px',
        },
        description: {
          fontSize: '16px',
          color: 'textColor',
          lineHeight: '1.75',
          mb: '33px',
        },
        button: {
          type: 'button',
          fontSize: '14px',
          fontWeight: '600',
          color: 'white',
          borderRadius: '4px',
          pl: '22px',
          pr: '22px',
          colors: 'primaryWithBg',
        },
        imageOne: { mb: '40px', ml: 'auto', mr: 'auto' },
        imageTwo: { ml: 'auto', mr: 'auto' },
      };
      var G = n('WYFQ'),
        U = n.n(G),
        _ = n('1IzR'),
        V = n.n(_),
        J = function(e) {
          var t = e.sectionWrapper,
            n = e.row,
            a = e.title,
            r = e.description,
            o = e.textArea,
            c = e.imageArea,
            s = e.ImageOne;
          return i.a.createElement(
            A.a,
            t,
            i.a.createElement(
              y.a,
              null,
              i.a.createElement(
                A.a,
                n,
                i.a.createElement(
                  A.a,
                  o,
                  i.a.createElement(
                    f.a,
                    { bottom: !0, cascade: !0 },
                    i.a.createElement(
                      M.a,
                      Object.assign({}, a, {
                        content: '30 Days Money Back Guarantee',
                      })
                    ),
                    i.a.createElement(
                      m.a,
                      Object.assign({}, r, {
                        content:
                          'We have provided 30 Days Money Back Guarantee in case of dissatisfaction with our product. We care for our customers and their values. ',
                      })
                    )
                  )
                )
              ),
              i.a.createElement(
                A.a,
                n,
                i.a.createElement(
                  A.a,
                  c,
                  i.a.createElement(
                    U.a,
                    null,
                    i.a.createElement(
                      E.a,
                      Object.assign({}, s, { src: V.a, alt: 'Guarantee' })
                    )
                  )
                )
              )
            )
          );
        };
      J.defaultProps = {
        sectionWrapper: {
          as: 'section',
          pt: ['0px', '0px', '0px', '80px'],
          pb: ['0px', '0px', '0px', '25px'],
        },
        row: { flexBox: !0, flexWrap: 'wrap', justifyContent: 'center' },
        textArea: {
          width: [1, 1, '65%', 0.5],
          mb: ['40px', '50px', '60px', '80px'],
        },
        imageArea: { width: [1, 1, '40%', 1, 0.5] },
        title: {
          fontSize: ['28px', '30px', '32px', '36px', '36px'],
          fontWeight: '300',
          color: 'headingColor',
          letterSpacing: '-0.025em',
          mb: '20px',
          textAlign: 'center',
        },
        description: {
          fontSize: ['15px', '15px', '16px', '16px', '16px'],
          color: 'textColor',
          lineHeight: '1.75',
          mb: '0',
          textAlign: 'center',
        },
        ImageOne: { ml: 'auto', mr: 'auto' },
      };
      var Z,
        F = n('/rgr');
      n('E9dt'),
        n('4oWw'),
        n('nruA'),
        n('p+GS'),
        n('AA1/'),
        n('XjK0'),
        n('/CC1'),
        n('Ph8W'),
        n('cM8k'),
        n('RwQI'),
        n('r0id'),
        n('lE7+'),
        n('SCO9'),
        n('LnO1'),
        n('3eMz'),
        n('dtAy'),
        n('DB+v'),
        n('UQCJ');
      function X(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function q(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            'value' in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      function K(e, t, n) {
        return t && q(e.prototype, t), n && q(e, n), e;
      }
      function $(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function ee() {
        return (ee =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          }).apply(this, arguments);
      }
      function te(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && ae(e, t);
      }
      function ne(e) {
        return (ne = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function ae(e, t) {
        return (ae =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function ie(e, t) {
        if (null == e) return {};
        var n,
          a,
          i = (function(e, t) {
            if (null == e) return {};
            var n,
              a,
              i = {},
              r = Object.keys(e);
            for (a = 0; a < r.length; a++)
              (n = r[a]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (a = 0; a < r.length; a++)
            (n = r[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function re(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function oe(e, t) {
        return !t || ('object' != typeof t && 'function' != typeof t)
          ? re(e)
          : t;
      }
      function ce(e) {
        return (
          (function(e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++)
                n[t] = e[t];
              return n;
            }
          })(e) ||
          (function(e) {
            if (
              Symbol.iterator in Object(e) ||
              '[object Arguments]' === Object.prototype.toString.call(e)
            )
              return Array.from(e);
          })(e) ||
          (function() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance'
            );
          })()
        );
      }
      !(function(e) {
        (e.Accordion = 'Accordion'),
          (e.AccordionItem = 'AccordionItem'),
          (e.AccordionItemButton = 'AccordionItemButton'),
          (e.AccordionItemHeading = 'AccordionItemHeading'),
          (e.AccordionItemPanel = 'AccordionItemPanel');
      })(Z || (Z = {}));
      var se = Z,
        le = function e(t) {
          var n = this,
            a = t.expanded,
            i = void 0 === a ? [] : a,
            r = t.allowMultipleExpanded,
            o = void 0 !== r && r,
            c = t.allowZeroExpanded,
            s = void 0 !== c && c;
          X(this, e),
            $(this, 'expanded', void 0),
            $(this, 'allowMultipleExpanded', void 0),
            $(this, 'allowZeroExpanded', void 0),
            $(this, 'toggleExpanded', function(e) {
              return n.isItemDisabled(e)
                ? n
                : n.isItemExpanded(e)
                ? n.augment({
                    expanded: n.expanded.filter(function(t) {
                      return t !== e;
                    }),
                  })
                : n.augment({
                    expanded: n.allowMultipleExpanded
                      ? [].concat(ce(n.expanded), [e])
                      : [e],
                  });
            }),
            $(this, 'isItemDisabled', function(e) {
              var t = n.isItemExpanded(e),
                a = 1 === n.expanded.length;
              return Boolean(t && !n.allowZeroExpanded && a);
            }),
            $(this, 'isItemExpanded', function(e) {
              return -1 !== n.expanded.indexOf(e);
            }),
            $(this, 'getPanelAttributes', function(e) {
              var t = n.isItemExpanded(e);
              return {
                role: n.allowMultipleExpanded ? void 0 : 'region',
                'aria-hidden': n.allowMultipleExpanded ? !t : void 0,
                'aria-labelledby': n.getButtonId(e),
                id: n.getPanelId(e),
                hidden: !t || void 0,
              };
            }),
            $(this, 'getHeadingAttributes', function(e) {
              return { role: 'heading' };
            }),
            $(this, 'getButtonAttributes', function(e) {
              var t = n.isItemExpanded(e),
                a = n.isItemDisabled(e);
              return {
                id: n.getButtonId(e),
                'aria-disabled': a,
                'aria-expanded': t,
                'aria-controls': n.getPanelId(e),
                role: 'button',
                tabIndex: 0,
              };
            }),
            $(this, 'getPanelId', function(e) {
              return 'accordion__panel-'.concat(e);
            }),
            $(this, 'getButtonId', function(e) {
              return 'accordion__heading-'.concat(e);
            }),
            $(this, 'augment', function(t) {
              return new e(
                (function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                      a = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                      (a = a.concat(
                        Object.getOwnPropertySymbols(n).filter(function(e) {
                          return Object.getOwnPropertyDescriptor(
                            n,
                            e
                          ).enumerable;
                        })
                      )),
                      a.forEach(function(t) {
                        $(e, t, n[t]);
                      });
                  }
                  return e;
                })(
                  {
                    expanded: n.expanded,
                    allowMultipleExpanded: n.allowMultipleExpanded,
                    allowZeroExpanded: n.allowZeroExpanded,
                  },
                  t
                )
              );
            }),
            (this.expanded = i),
            (this.allowMultipleExpanded = o),
            (this.allowZeroExpanded = s);
        },
        ue = Object(a.createContext)(null),
        de = (function(e) {
          function t() {
            var e, n;
            X(this, t);
            for (var a = arguments.length, i = new Array(a), r = 0; r < a; r++)
              i[r] = arguments[r];
            return (
              $(
                re((n = oe(this, (e = ne(t)).call.apply(e, [this].concat(i))))),
                'state',
                new le({
                  expanded: n.props.preExpanded,
                  allowMultipleExpanded: n.props.allowMultipleExpanded,
                  allowZeroExpanded: n.props.allowZeroExpanded,
                })
              ),
              $(re(n), 'toggleExpanded', function(e) {
                n.setState(
                  function(t) {
                    return t.toggleExpanded(e);
                  },
                  function() {
                    n.props.onChange && n.props.onChange(n.state.expanded);
                  }
                );
              }),
              $(re(n), 'isItemDisabled', function(e) {
                return n.state.isItemDisabled(e);
              }),
              $(re(n), 'isItemExpanded', function(e) {
                return n.state.isItemExpanded(e);
              }),
              $(re(n), 'getPanelAttributes', function(e) {
                return n.state.getPanelAttributes(e);
              }),
              $(re(n), 'getHeadingAttributes', function(e) {
                return n.state.getHeadingAttributes(e);
              }),
              $(re(n), 'getButtonAttributes', function(e) {
                return n.state.getButtonAttributes(e);
              }),
              n
            );
          }
          return (
            te(t, e),
            K(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.state,
                    t = e.allowZeroExpanded,
                    n = e.allowMultipleExpanded;
                  return Object(a.createElement)(
                    ue.Provider,
                    {
                      value: {
                        allowMultipleExpanded: n,
                        allowZeroExpanded: t,
                        toggleExpanded: this.toggleExpanded,
                        isItemDisabled: this.isItemDisabled,
                        isItemExpanded: this.isItemExpanded,
                        getPanelAttributes: this.getPanelAttributes,
                        getHeadingAttributes: this.getHeadingAttributes,
                        getButtonAttributes: this.getButtonAttributes,
                      },
                    },
                    this.props.children || null
                  );
                },
              },
            ]),
            t
          );
        })(a.PureComponent);
      $(de, 'defaultProps', {
        allowMultipleExpanded: !1,
        allowZeroExpanded: !1,
      });
      var pe = (function(e) {
          function t() {
            var e, n;
            X(this, t);
            for (var a = arguments.length, i = new Array(a), r = 0; r < a; r++)
              i[r] = arguments[r];
            return (
              $(
                re((n = oe(this, (e = ne(t)).call.apply(e, [this].concat(i))))),
                'renderChildren',
                function(e) {
                  return e ? n.props.children(e) : null;
                }
              ),
              n
            );
          }
          return (
            te(t, e),
            K(t, [
              {
                key: 'render',
                value: function() {
                  return Object(a.createElement)(
                    ue.Consumer,
                    null,
                    this.renderChildren
                  );
                },
              },
            ]),
            t
          );
        })(a.PureComponent),
        ge = (function(e) {
          function t() {
            var e, n;
            X(this, t);
            for (var i = arguments.length, r = new Array(i), o = 0; o < i; o++)
              r[o] = arguments[o];
            return (
              $(
                re((n = oe(this, (e = ne(t)).call.apply(e, [this].concat(r))))),
                'renderAccordion',
                function(e) {
                  var t = n.props,
                    i =
                      (t.preExpanded,
                      t.allowMultipleExpanded,
                      t.allowZeroExpanded,
                      t.onChange,
                      ie(t, [
                        'preExpanded',
                        'allowMultipleExpanded',
                        'allowZeroExpanded',
                        'onChange',
                      ]));
                  return Object(a.createElement)(
                    'div',
                    ee({ 'data-accordion-component': 'Accordion' }, i)
                  );
                }
              ),
              n
            );
          }
          return (
            te(t, e),
            K(t, [
              {
                key: 'render',
                value: function() {
                  return Object(a.createElement)(
                    de,
                    {
                      preExpanded: this.props.preExpanded,
                      allowMultipleExpanded: this.props.allowMultipleExpanded,
                      allowZeroExpanded: this.props.allowZeroExpanded,
                      onChange: this.props.onChange,
                    },
                    Object(a.createElement)(pe, null, this.renderAccordion)
                  );
                },
              },
            ]),
            t
          );
        })(a.Component);
      $(ge, 'defaultProps', {
        allowMultipleExpanded: void 0,
        allowZeroExpanded: void 0,
        onChange: void 0,
        className: 'accordion',
        children: void 0,
      }),
        $(ge, 'displayName', se.Accordion);
      var fe = 0;
      function Ae() {
        var e = fe;
        return (fe += 1), e;
      }
      var me = Object(a.createContext)(null),
        Me = (function(e) {
          function t() {
            var e, n;
            X(this, t);
            for (var i = arguments.length, r = new Array(i), o = 0; o < i; o++)
              r[o] = arguments[o];
            return (
              $(
                re((n = oe(this, (e = ne(t)).call.apply(e, [this].concat(r))))),
                'toggleExpanded',
                function() {
                  n.props.accordionContext.toggleExpanded(n.props.uuid);
                }
              ),
              $(re(n), 'renderChildren', function(e) {
                var t = n.props.uuid,
                  i = e.isItemExpanded(t),
                  r = e.isItemDisabled(t),
                  o = e.getPanelAttributes(t),
                  c = e.getHeadingAttributes(t),
                  s = e.getButtonAttributes(t);
                return Object(a.createElement)(me.Provider, {
                  value: {
                    uuid: t,
                    expanded: i,
                    disabled: r,
                    toggleExpanded: n.toggleExpanded,
                    panelAttributes: o,
                    headingAttributes: c,
                    buttonAttributes: s,
                  },
                  children: n.props.children,
                });
              }),
              n
            );
          }
          return (
            te(t, e),
            K(t, [
              {
                key: 'render',
                value: function() {
                  return Object(a.createElement)(pe, null, this.renderChildren);
                },
              },
            ]),
            t
          );
        })(a.Component),
        ye = function(e) {
          return Object(a.createElement)(pe, null, function(t) {
            return Object(a.createElement)(
              Me,
              ee({}, e, { accordionContext: t })
            );
          });
        },
        Le = (function(e) {
          function t() {
            var e, n;
            X(this, t);
            for (var a = arguments.length, i = new Array(a), r = 0; r < a; r++)
              i[r] = arguments[r];
            return (
              $(
                re((n = oe(this, (e = ne(t)).call.apply(e, [this].concat(i))))),
                'renderChildren',
                function(e) {
                  return e ? n.props.children(e) : null;
                }
              ),
              n
            );
          }
          return (
            te(t, e),
            K(t, [
              {
                key: 'render',
                value: function() {
                  return Object(a.createElement)(
                    me.Consumer,
                    null,
                    this.renderChildren
                  );
                },
              },
            ]),
            t
          );
        })(a.PureComponent),
        je = (function(e) {
          function t() {
            var e, n;
            X(this, t);
            for (var a = arguments.length, i = new Array(a), r = 0; r < a; r++)
              i[r] = arguments[r];
            return (
              $(
                re((n = oe(this, (e = ne(t)).call.apply(e, [this].concat(i))))),
                'instanceUuid',
                Ae()
              ),
              n
            );
          }
          return (
            te(t, e),
            K(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.uuid,
                    n = void 0 === t ? this.instanceUuid : t,
                    i = ie(e, ['uuid']);
                  return Object(a.createElement)(
                    ye,
                    { uuid: n },
                    Object(a.createElement)(
                      'div',
                      ee({ 'data-accordion-component': 'AccordionItem' }, i)
                    )
                  );
                },
              },
            ]),
            t
          );
        })(a.Component);
      function he(e) {
        var t = (function e(t) {
          return (
            t &&
            (t.matches('[data-accordion-component="Accordion"]')
              ? t
              : e(t.parentElement))
          );
        })(e);
        return (
          t &&
          Array.from(
            t.querySelectorAll(
              '[data-accordion-component="AccordionItemButton"]'
            )
          )
        );
      }
      function be(e) {
        var t = (he(e) || [])[0];
        t && t.focus();
      }
      function Ne(e) {
        var t = he(e) || [],
          n = t[t.length - 1];
        n && n.focus();
      }
      function Ie(e) {
        var t = he(e) || [],
          n = t.indexOf(e);
        if (-1 !== n) {
          var a = t[n + 1];
          a && a.focus();
        }
      }
      function xe(e) {
        var t = he(e) || [],
          n = t.indexOf(e);
        if (-1 !== n) {
          var a = t[n - 1];
          a && a.focus();
        }
      }
      $(je, 'defaultProps', { className: 'accordion__item' }),
        $(je, 'displayName', se.AccordionItem);
      var Se = '40',
        we = '35',
        ve = '13',
        Ee = '36',
        De = '37',
        Ce = '39',
        Te = '32',
        ze = '38',
        Oe = (function(e) {
          function t() {
            var e, n;
            X(this, t);
            for (var a = arguments.length, i = new Array(a), r = 0; r < a; r++)
              i[r] = arguments[r];
            return (
              $(
                re((n = oe(this, (e = ne(t)).call.apply(e, [this].concat(i))))),
                'handleKeyPress',
                function(e) {
                  var t = e.which.toString();
                  if (
                    ((t !== ve && t !== Te) ||
                      (e.preventDefault(), n.props.toggleExpanded()),
                    e.target instanceof HTMLElement)
                  )
                    switch (t) {
                      case Ee:
                        e.preventDefault(), be(e.target);
                        break;
                      case we:
                        e.preventDefault(), Ne(e.target);
                        break;
                      case De:
                      case ze:
                        e.preventDefault(), xe(e.target);
                        break;
                      case Ce:
                      case Se:
                        e.preventDefault(), Ie(e.target);
                    }
                }
              ),
              n
            );
          }
          return (
            te(t, e),
            K(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.toggleExpanded,
                    n = ie(e, ['toggleExpanded']);
                  return Object(a.createElement)(
                    'div',
                    ee({}, n, {
                      onClick: t,
                      onKeyDown: this.handleKeyPress,
                      'data-accordion-component': 'AccordionItemButton',
                    })
                  );
                },
              },
            ]),
            t
          );
        })(a.PureComponent);
      $(Oe, 'defaultProps', { className: 'accordion__button' });
      var ke = function(e) {
        return Object(a.createElement)(Le, null, function(t) {
          var n = t.toggleExpanded,
            i = t.buttonAttributes;
          return Object(a.createElement)(Oe, ee({ toggleExpanded: n }, e, i));
        });
      };
      ke.displayName = se.AccordionItemButton;
      var Ye = (function(e) {
        function t() {
          var e, n;
          X(this, t);
          for (var a = arguments.length, i = new Array(a), r = 0; r < a; r++)
            i[r] = arguments[r];
          return (
            $(
              re((n = oe(this, (e = ne(t)).call.apply(e, [this].concat(i))))),
              'ref',
              void 0
            ),
            $(re(n), 'setRef', function(e) {
              n.ref = e;
            }),
            n
          );
        }
        return (
          te(t, e),
          K(
            t,
            [
              {
                key: 'componentDidUpdate',
                value: function() {
                  t.VALIDATE(this.ref);
                },
              },
              {
                key: 'componentDidMount',
                value: function() {
                  t.VALIDATE(this.ref);
                },
              },
              {
                key: 'render',
                value: function() {
                  return Object(a.createElement)(
                    'div',
                    ee(
                      { 'data-accordion-component': 'AccordionItemHeading' },
                      this.props,
                      { ref: this.setRef }
                    )
                  );
                },
              },
            ],
            [
              {
                key: 'VALIDATE',
                value: function(e) {
                  if (void 0 === e) throw new Error('ref is undefined');
                  if (
                    1 !== e.childElementCount ||
                    !e.firstElementChild ||
                    'AccordionItemButton' !==
                      e.firstElementChild.getAttribute(
                        'data-accordion-component'
                      )
                  )
                    throw new Error(
                      'AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.\n\nFrom the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):\n\n“The button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.”\n\n'
                    );
                },
              },
            ]
          ),
          t
        );
      })(a.PureComponent);
      $(Ye, 'defaultProps', {
        className: 'accordion__heading',
        'aria-level': 3,
      });
      var Pe = function(e) {
        return Object(a.createElement)(Le, null, function(t) {
          var n = t.headingAttributes;
          return Object(a.createElement)(Ye, ee({}, e, n));
        });
      };
      Pe.displayName = se.AccordionItemHeading;
      var Qe = (function(e) {
        function t() {
          var e, n;
          X(this, t);
          for (var i = arguments.length, r = new Array(i), o = 0; o < i; o++)
            r[o] = arguments[o];
          return (
            $(
              re((n = oe(this, (e = ne(t)).call.apply(e, [this].concat(r))))),
              'renderChildren',
              function(e) {
                var t = e.panelAttributes;
                return Object(a.createElement)(
                  'div',
                  ee(
                    { 'data-accordion-component': 'AccordionItemPanel' },
                    n.props,
                    t
                  )
                );
              }
            ),
            n
          );
        }
        return (
          te(t, e),
          K(t, [
            {
              key: 'render',
              value: function() {
                return Object(a.createElement)(Le, null, this.renderChildren);
              },
            },
          ]),
          t
        );
      })(a.Component);
      $(Qe, 'defaultProps', { className: 'accordion__panel' }),
        $(Qe, 'displayName', se.AccordionItemPanel);
      a.Component;
      var Re = Object(r.e)([
          '\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n',
        ]),
        Be = Object(r.d)(ge).withConfig({
          displayName: 'accordionstyle__AccordionWrapper',
          componentId: 'sc-1inv165-0',
        })(['']),
        We = Object(r.d)(je).withConfig({
          displayName: 'accordionstyle__AccordionItemWrapper',
          componentId: 'sc-1inv165-1',
        })(['']),
        He = r.d.div.withConfig({
          displayName: 'accordionstyle__OpenIcon',
          componentId: 'sc-1inv165-2',
        })(['']),
        Ge = r.d.div.withConfig({
          displayName: 'accordionstyle__CloseIcon',
          componentId: 'sc-1inv165-3',
        })(['\n  opacity: 0;\n']),
        Ue = Object(r.d)(Pe).withConfig({
          displayName: 'accordionstyle__AccordionTitleWrapper',
          componentId: 'sc-1inv165-4',
        })(
          [
            "\n  > div {\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    position: relative;\n    &[aria-expanded='false'] {\n      ",
            ' {\n        opacity: 0;\n      }\n      ',
            ' {\n        opacity: 1;\n      }\n    }\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  * {\n    flex-grow: 1;\n  }\n',
          ],
          He,
          Ge
        ),
        _e = Object(r.d)(ke).withConfig({
          displayName: 'accordionstyle__AccordionItemButtonWrapper',
          componentId: 'sc-1inv165-5',
        })(['']),
        Ve = Object(r.d)(Qe).withConfig({
          displayName: 'accordionstyle__AccordionBodyWrapper',
          componentId: 'sc-1inv165-6',
        })(
          [
            '\n  animation: 0.35s ',
            ' ease-in;\n  &.accordion__body--hidden {\n    animation: 0.35s ',
            ' ease-in;\n  }\n',
          ],
          Re,
          Re
        ),
        Je = r.d.div.withConfig({
          displayName: 'accordionstyle__IconWrapper',
          componentId: 'sc-1inv165-7',
        })(
          [
            '\n  margin-left: 30px;\n  width: 40px;\n  position: relative;\n\n  ',
            ',\n  ',
            ' {\n    position: absolute;\n    top: 50%;\n    right: 0;\n    transform: translateY(-50%);\n    transition: 0.25s ease-in-out;\n  }\n',
          ],
          He,
          Ge
        ),
        Ze = function(e) {
          var t = e.className,
            n = e.children,
            a = e.allowZeroExpanded,
            r = void 0 === a || a,
            o = ['reusecore__accordion'];
          return (
            t && o.push(t),
            i.a.createElement(
              Be,
              { allowZeroExpanded: r, className: o.join(' ') },
              n
            )
          );
        },
        Fe = function(e) {
          var t = e.className,
            n = e.children,
            a = (e.expanded, ['accordion__item']);
          return (
            t && a.push(t), i.a.createElement(We, { className: a.join(' ') }, n)
          );
        },
        Xe = function(e) {
          var t = e.className,
            n = e.children,
            a = ['accordion__header'];
          return (
            t && a.push(t),
            i.a.createElement(
              Ue,
              { className: a.join(' ') },
              i.a.createElement(_e, null, n)
            )
          );
        },
        qe = function(e) {
          var t = e.className,
            n = e.children,
            a = ['accordion__body'];
          return (
            t && a.push(t), i.a.createElement(Ve, { className: a.join(' ') }, n)
          );
        },
        Ke = n('2xV5'),
        $e = n.n(Ke),
        et = n('EW4T'),
        tt = n('vzpy'),
        nt = function(e) {
          var t = e.sectionWrapper,
            n = e.row,
            a = e.col,
            r = e.secTitleWrapper,
            o = e.secHeading,
            c = e.secText,
            s = e.title,
            l = e.description,
            u = e.buttonWrapper,
            d = e.button,
            p = F.data;
          return i.a.createElement(
            A.a,
            t,
            i.a.createElement(
              y.a,
              null,
              i.a.createElement(
                A.a,
                r,
                i.a.createElement(
                  m.a,
                  Object.assign({}, c, { content: 'FREQUENTLY ASK QUESTION' })
                ),
                i.a.createElement(
                  M.a,
                  Object.assign({}, o, {
                    content: 'Want to ask something from us?',
                  })
                )
              ),
              i.a.createElement(
                A.a,
                n,
                i.a.createElement(
                  A.a,
                  a,
                  i.a.createElement(
                    Ze,
                    null,
                    i.a.createElement(
                      i.a.Fragment,
                      null,
                      p.hostingJson.FAQ_DATA.map(function(e, t) {
                        return i.a.createElement(
                          Fe,
                          {
                            className: 'accordion_item',
                            key: 'accordion-' + t,
                            expanded: e.expend,
                          },
                          i.a.createElement(
                            i.a.Fragment,
                            null,
                            i.a.createElement(
                              Xe,
                              { className: 'accordion_title' },
                              i.a.createElement(
                                i.a.Fragment,
                                null,
                                i.a.createElement(
                                  M.a,
                                  Object.assign({}, s, { content: e.title })
                                ),
                                i.a.createElement(
                                  Je,
                                  null,
                                  i.a.createElement(
                                    He,
                                    null,
                                    i.a.createElement(Ke.Icon, {
                                      icon: tt.minus,
                                      size: 18,
                                    })
                                  ),
                                  i.a.createElement(
                                    Ge,
                                    null,
                                    i.a.createElement(Ke.Icon, {
                                      icon: et.plus,
                                      size: 18,
                                    })
                                  )
                                )
                              )
                            ),
                            i.a.createElement(
                              qe,
                              { className: 'accordion_body' },
                              i.a.createElement(
                                m.a,
                                Object.assign({}, l, { content: e.description })
                              )
                            )
                          )
                        );
                      })
                    )
                  ),
                  i.a.createElement(
                    A.a,
                    u,
                    i.a.createElement(
                      'a',
                      { href: '#1' },
                      i.a.createElement(
                        Y.a,
                        Object.assign({}, d, { title: 'EXPLORE FORUM' })
                      )
                    )
                  )
                )
              )
            )
          );
        };
      nt.defaultProps = {
        sectionWrapper: {
          id: 'faq_section',
          as: 'section',
          pt: ['60px', '80px', '80px', '80px'],
          pb: ['60px', '80px', '80px', '80px'],
          bg: '#f9fbfd',
        },
        secTitleWrapper: { mb: ['55px', '75px'] },
        secText: {
          as: 'span',
          display: 'block',
          textAlign: 'center',
          fontSize: '2',
          letterSpacing: '0.15em',
          fontWeight: '6',
          color: 'primary',
          mb: '3',
        },
        secHeading: {
          textAlign: 'center',
          fontSize: ['6', '8'],
          fontWeight: '400',
          color: 'headingColor',
          letterSpacing: '-0.025em',
          mb: '0',
        },
        row: { flexBox: !0, flexWrap: 'wrap', ml: -4, mr: -4 },
        col: { width: [1], pr: '4', pl: '4', mb: '7' },
        title: {
          fontSize: ['16px', '19px'],
          fontWeight: '3',
          color: 'headingColor',
          letterSpacing: '-0.025em',
          mb: '0',
        },
        description: {
          fontSize: '3',
          color: 'textColor',
          lineHeight: '1.75',
          mb: '0',
        },
        buttonWrapper: { mt: '11', flexBox: !0, justifyContent: 'center' },
        button: {
          type: 'button',
          fontSize: '2',
          fontWeight: '600',
          borderRadius: '4px',
          pl: '22px',
          pr: '22px',
          colors: 'primary',
          height: '4',
        },
      };
      var at = n('UPIJ'),
        it = n('J31B'),
        rt = function(e) {
          var t = e.sectionWrapper,
            n = e.row,
            a = e.col,
            r = e.secTitleWrapper,
            o = e.secHeading,
            c = e.secText,
            s = e.featureItemHeading,
            l = e.featureItemDes,
            u = e.featureBlockStyle,
            d = e.iconStyle,
            p = e.contentStyle,
            g = at.data;
          return i.a.createElement(
            A.a,
            t,
            i.a.createElement(
              y.a,
              null,
              i.a.createElement(
                i.a.Fragment,
                null,
                i.a.createElement(
                  A.a,
                  r,
                  i.a.createElement(
                    f.a,
                    { bottom: !0, cascade: !0 },
                    i.a.createElement(
                      m.a,
                      Object.assign({}, c, { content: 'OUR SERVICES' })
                    ),
                    i.a.createElement(
                      M.a,
                      Object.assign({}, o, {
                        content: 'What Featured Service that We Provide',
                      })
                    )
                  )
                ),
                i.a.createElement(
                  A.a,
                  n,
                  g.hostingJson.SERVICES_DATA.map(function(e, t) {
                    return i.a.createElement(
                      A.a,
                      Object.assign({}, a, { key: 'service-' + t }),
                      i.a.createElement(it.a, {
                        wrapperStyle: u,
                        iconStyle: d,
                        contentStyle: p,
                        title: i.a.createElement(
                          M.a,
                          Object.assign({}, s, { content: e.title })
                        ),
                        description: i.a.createElement(
                          m.a,
                          Object.assign({}, l, { content: e.description })
                        ),
                        icon: i.a.createElement(E.a, {
                          src: e.icon.publicURL,
                          alt: 'icon-' + t,
                        }),
                      })
                    );
                  })
                )
              )
            )
          );
        };
      rt.defaultProps = {
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
          width: [1, 0.5, 0.5, 1 / 3],
          className: 'service_col',
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
      var ot = n('KcZA'),
        ct = n('IdJa'),
        st = n('FfcI'),
        lt = n('yQns'),
        ut = n('2UrR'),
        dt = n.n(ut),
        pt = r.d.section.withConfig({
          displayName: 'bannerstyle__BannerWrapper',
          componentId: 'i7bcid-0',
        })(
          [
            '\n  padding-top: 210px;\n  padding-bottom: 160px;\n  background-image: url(',
            ');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  @media (max-width: 990px) {\n    padding-top: 170px;\n    padding-bottom: 120px;\n    min-height: auto;\n  }\n  @media (max-width: 575px) {\n    padding-top: 150px;\n    padding-bottom: 60px;\n  }\n  .particle {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    @media (max-width: 767px) {\n      display: none;\n    }\n  }\n  .banner_container {\n    position: relative;\n  }\n',
          ],
          dt.a
        ),
        gt = r.d.div.withConfig({
          displayName: 'bannerstyle__SearchWrapper',
          componentId: 'i7bcid-1',
        })([
          "\n  @media (min-width: 576px) {\n    display: flex;\n    align-items: stretch;\n    height: 70px;\n    box-shadow: 0px 6px 15.98px 1.02px rgba(56, 86, 122, 0.1);\n    border-radius: 10px;\n  }\n  @media (max-width: 990px) and (min-width: 576px) {\n    height: 65px;\n  }\n  .domain_search_input {\n    flex-grow: 1;\n    box-shadow: none;\n    outline: none;\n    .field-wrapper {\n      border: 0;\n    }\n    .field-wrapper,\n    input {\n      height: 100%;\n      box-shadow: none;\n      outline: none;\n    }\n    input {\n      font-size: 17px;\n      padding-left: 50px;\n      padding-right: 30px;\n      text-shadow: none;\n      border: 1px solid #ebebeb;\n      &:focus {\n        border-color: #ebebeb;\n      }\n\n      @media (min-width: 576px) {\n        border-right: 0;\n        border-top-left-radius: 10px;\n        border-bottom-left-radius: 10px;\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0;\n        border-color: #f4f5f7;\n        &:focus {\n          border-color: #f4f5f7;\n        }\n      }\n      @media (max-width: 575px) {\n        height: 52px;\n        padding-left: 20px;\n        margin-bottom: 20px;\n      }\n    }\n  }\n  .domain_search_select {\n    min-width: 165px;\n    @media (max-width: 575px) {\n      height: 52px;\n      margin-bottom: 20px;\n    }\n    .select__control,\n    .select-field__wrapper {\n      height: 100%;\n    }\n    .select__control {\n      padding: 0 15px 0 10px;\n      box-shadow: none;\n      position: relative;\n      border-color: #ebebeb;\n      @media (min-width: 576px) {\n        border-color: #f4f5f7;\n        border-left: 0;\n        border-right: 0;\n        border-radius: 0;\n        &:before {\n          content: '';\n          position: absolute;\n          width: 1px;\n          height: 55%;\n          background: #d9d9d9;\n          display: block;\n          top: 50%;\n          left: 0;\n          transform: translateY(-50%);\n        }\n      }\n\n      .select__placeholder {\n        font-size: 17px;\n        color: #0f2137;\n      }\n      .select__indicator {\n        color: #0f2137;\n      }\n    }\n    .select__indicator-separator {\n      display: none;\n    }\n  }\n\n  .domain_search_button {\n    width: 160px;\n    @media (min-width: 576px) {\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0;\n      border-top-right-radius: 10px;\n      border-bottom-right-radius: 10px;\n    }\n    @media (max-width: 575px) {\n      height: 52px;\n      width: 100%;\n    }\n  }\n",
        ]),
        ft = r.d.ul.withConfig({
          displayName: 'bannerstyle__List',
          componentId: 'i7bcid-2',
        })([
          '\n  text-align: center;\n  margin-top: 17px;\n  li {\n    display: inline-block;\n    font-size: 17px;\n    font-weight: 400;\n    color: #0f2137;\n    padding: 8px 12px;\n\n    a {\n      font-size: 15px;\n      color: #87909b;\n      display: block;\n      &:hover {\n        color: #eb4d4b;\n      }\n    }\n  }\n',
        ]),
        At = r.d.div.withConfig({
          displayName: 'bannerstyle__DiscountWrapper',
          componentId: 'i7bcid-3',
        })(['\n  text-align: center;\n']),
        mt = r.d.div.withConfig({
          displayName: 'bannerstyle__DiscountLabel',
          componentId: 'i7bcid-4',
        })([
          "\n  font-family: 'Open Sans', sans-serif;\n  display: inline-block;\n  border-radius: 4em;\n  border: 1px solid #f6f6f7;\n  padding: 7px 25px;\n  box-shadow: 0px 7px 25px 0px rgba(22, 53, 76, 0.05);\n  margin-bottom: 30px;\n  background-color: #fff;\n  @media (max-width: 575px) {\n    padding: 7px 10px;\n  }\n",
        ]),
        Mt = pt,
        yt = n('8oSd'),
        Lt = function(e) {
          var t = e.row,
            n = e.title,
            a = e.description,
            r = e.button,
            o = e.textArea,
            c = e.searchArea,
            s = e.discountAmount,
            l = e.discountText,
            u = ot.data;
          return i.a.createElement(
            Mt,
            { id: 'banner_section' },
            i.a.createElement(lt.a, null),
            i.a.createElement(
              y.a,
              { className: 'banner_container' },
              i.a.createElement(
                A.a,
                t,
                i.a.createElement(
                  A.a,
                  o,
                  i.a.createElement(
                    At,
                    null,
                    i.a.createElement(
                      mt,
                      null,
                      i.a.createElement(
                        m.a,
                        Object.assign({}, s, { content: '25% Discount' })
                      ),
                      i.a.createElement(
                        m.a,
                        Object.assign({}, l, {
                          content: 'on every first annual purchase',
                        })
                      )
                    )
                  ),
                  i.a.createElement(
                    M.a,
                    Object.assign({}, n, {
                      content: 'The best webhosting starting at $12.98/month',
                    })
                  ),
                  i.a.createElement(
                    m.a,
                    Object.assign({}, a, {
                      content:
                        ' For Enhanced performance we use LiteSpeed Web Server, HTTP/2, PHP7. We make your website faster, which will help you to increase search ranking!',
                    })
                  )
                ),
                i.a.createElement(
                  A.a,
                  c,
                  i.a.createElement(
                    gt,
                    null,
                    i.a.createElement(ct.a, {
                      inputType: 'text',
                      placeholder: 'Enter your domain name',
                      iconPosition: 'right',
                      className: 'domain_search_input',
                      'aria-label': 'search',
                    }),
                    i.a.createElement(st.a, {
                      options: u.hostingJson.DOMAIN_NAMES,
                      placeholder: '.com',
                      className: 'domain_search_select',
                      'aria-label': 'select options',
                    }),
                    i.a.createElement(
                      Y.a,
                      Object.assign({}, r, {
                        icon: i.a.createElement($e.a, {
                          icon: yt.search,
                          size: 24,
                        }),
                        className: 'domain_search_button',
                      })
                    )
                  ),
                  i.a.createElement(
                    ft,
                    null,
                    u.hostingJson.DOMAIN_PRICE.map(function(e, t) {
                      return i.a.createElement(
                        'li',
                        { key: 'domain-list-' + t },
                        e.url
                          ? i.a.createElement('a', { href: e.url }, e.content)
                          : i.a.createElement(i.a.Fragment, null, e.content)
                      );
                    })
                  )
                )
              )
            )
          );
        };
      Lt.defaultProps = {
        row: {
          flexBox: !0,
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
        },
        textArea: { width: ['100%', '100%', '90%', '100%', '55%'] },
        title: {
          fontSize: ['26px', '32px', '42px', '46px', '55px'],
          fontWeight: '400',
          color: '#0f2137',
          letterSpacing: '-0.025em',
          mb: ['20px', '25px', '25px', '25px', '25px'],
          lineHeight: '1.31',
          textAlign: 'center',
        },
        description: {
          fontSize: ['15px', '16px', '16px', '16px', '16px'],
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
      n('yIC7');
      var jt = n('nQ36'),
        ht = n('GkOb'),
        bt =
          (n('T7D0'),
          n('BPcy'),
          n('NlgC'),
          n('rmZQ'),
          function(e, t) {
            for (e += ''; e.length < t; ) e = '0' + e;
            return e;
          }),
        Nt = function(e, t, n) {
          e = (e = e.replace(/^\s*|\s*$/, '')).replace(
            /^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i,
            '#$1$1$2$2$3$3'
          );
          var a = Math.round(256 * t) * (n ? -1 : 1),
            i = e.match(
              new RegExp(
                '^rgba?\\(\\s*(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])\\s*,\\s*(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])\\s*,\\s*(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])(?:\\s*,\\s*(0|1|0?\\.\\d+))?\\s*\\)$',
                'i'
              )
            ),
            r = i && null != i[4] ? i[4] : null,
            o = i
              ? [i[1], i[2], i[3]]
              : e
                  .replace(
                    /^#?([a-f0-9][a-f0-9])([a-f0-9][a-f0-9])([a-f0-9][a-f0-9])/i,
                    function() {
                      return (
                        parseInt(arguments[1], 16) +
                        ',' +
                        parseInt(arguments[2], 16) +
                        ',' +
                        parseInt(arguments[3], 16)
                      );
                    }
                  )
                  .split(/,/);
          return i
            ? 'rgb' +
                (null !== r ? 'a' : '') +
                '(' +
                Math[n ? 'max' : 'min'](parseInt(o[0], 10) + a, n ? 0 : 255) +
                ', ' +
                Math[n ? 'max' : 'min'](parseInt(o[1], 10) + a, n ? 0 : 255) +
                ', ' +
                Math[n ? 'max' : 'min'](parseInt(o[2], 10) + a, n ? 0 : 255) +
                (null !== r ? ', ' + r : '') +
                ')'
            : [
                '#',
                bt(
                  Math[n ? 'max' : 'min'](
                    parseInt(o[0], 10) + a,
                    n ? 0 : 255
                  ).toString(16),
                  2
                ),
                bt(
                  Math[n ? 'max' : 'min'](
                    parseInt(o[1], 10) + a,
                    n ? 0 : 255
                  ).toString(16),
                  2
                ),
                bt(
                  Math[n ? 'max' : 'min'](
                    parseInt(o[2], 10) + a,
                    n ? 0 : 255
                  ).toString(16),
                  2
                ),
              ].join('');
        },
        It = function(e, t) {
          return Nt(e, t, !1);
        },
        xt = n('oO22'),
        St = r.d.div.withConfig({
          displayName: 'switchstyle__SwitchStyle',
          componentId: 'sc-10sloje-0',
        })(
          [
            '\n  /* Switch default style */\n  display: inline-flex;\n\n  /* Switch label default style */\n  .reusecore__field-label {\n    color: ',
            ';\n    font-size: ',
            'px;\n    font-weight: ',
            ';\n  }\n\n  /* Switch label style when labelPosition on left */\n  &.label_left {\n    label {\n      display: flex;\n      align-items: center;\n      .reusecore__field-label {\n        margin-right: ',
            'px;\n      }\n    }\n  }\n\n  /* Switch label style when labelPosition on right */\n  &.label_right {\n    label {\n      display: flex;\n      flex-direction: row-reverse;\n      align-items: center;\n\n      .reusecore__field-label {\n        margin-left: ',
            'px;\n      }\n    }\n  }\n\n  /* Switch label style when labelPosition on top || bottom */\n  &.label_top {\n    label {\n      .reusecore__field-label {\n        display: flex;\n        margin-bottom: ',
            'px;\n      }\n    }\n  }\n  &.label_bottom {\n    label {\n      .reusecore__field-label {\n        display: flex;\n        margin-top: ',
            "px;\n      }\n    }\n  }\n\n  /* Switch default style goes here */\n  input[type='checkbox'] {\n    &.switch {\n      opacity: 0;\n      position: absolute;\n      margin: 0;\n      z-index: -1;\n      width: 0;\n      height: 0;\n      overflow: hidden;\n      left: 0;\n      pointer-events: none;\n\n      &:checked + div {\n        width: ",
            ';\n        background-position: 0 0;\n        background-color: ',
            ';\n        > div {\n          background-color: ',
            ';\n          left: calc(\n            ',
            ' / 2 + 3px\n          );\n        }\n      }\n    }\n    + div {\n      vertical-align: middle;\n      width: ',
            ';\n      height: calc(\n        ',
            ' / 2\n      );\n      border-radius: 450px;\n      border-width: 2px;\n      border-style: solid;\n      border-color: ',
            ';\n      transition-duration: 0.4s;\n      transition-property: background-color, box-shadow;\n      cursor: pointer;\n      box-sizing: border-box;\n      position: relative;\n\n      > div {\n        float: left;\n        width: calc(\n          ',
            ' / 2 - 8px\n        );\n        height: calc(\n          ',
            ' / 2 - 8px\n        );\n        border-radius: 50%;\n        pointer-events: none;\n        top: 2px;\n        left: 2px;\n        position: absolute;\n        background-color: ',
            ';\n        transition-timing-function: cubic-bezier(1, 0, 0, 1);\n        transition-duration: 0.4s;\n        transition-property: left, background-color;\n      }\n    }\n  }\n\n  /* Material style goes here */\n  &.is-material {\n    /* Switch label style when labelPosition on top || bottom */\n    &.label_top {\n      label {\n        .reusecore__field-label {\n          margin-bottom: ',
            'px;\n        }\n      }\n    }\n    &.label_bottom {\n      label {\n        .reusecore__field-label {\n          margin-top: ',
            "px;\n        }\n      }\n    }\n\n    /* Material switch default style */\n    input[type='checkbox'] {\n      &.switch {\n        &:checked + div {\n          width: ",
            ';\n          background-color: ',
            ';\n          > div {\n            background-color: ',
            ';\n            left: calc(\n              ',
            ' -\n                ',
            ' / 2 +\n                1px\n            );\n          }\n        }\n      }\n      + div {\n        width: ',
            ';\n        height: calc(\n          ',
            ' / 4\n        );\n        border-width: 0;\n        background-color: ',
            ';\n\n        > div {\n          width: calc(\n            ',
            ' / 2\n          );\n          height: calc(\n            ',
            ' / 2\n          );\n          top: calc(\n            -',
            ' / 8\n          );\n          left: 0;\n          background-color: ',
            ';\n          box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),\n            0px 2px 2px 0px rgba(0, 0, 0, 0.14),\n            0px 3px 1px -2px rgba(0, 0, 0, 0.12);\n        }\n      }\n    }\n  }\n\n  ',
            '\n',
          ],
          Object(ht.L)('colors.labelColor', '#767676'),
          Object(ht.L)('fontSizes.4', '16'),
          Object(ht.L)('fontWeights.4', '500'),
          Object(ht.L)('space.3', '10'),
          Object(ht.L)('space.3', '10'),
          Object(ht.L)('space.2', '8'),
          Object(ht.L)('space.2', '8'),
          function(e) {
            return e.switchSize ? e.switchSize : '80px';
          },
          function(e) {
            return e.switchColor ? e.switchColor : '#028489';
          },
          Object(ht.L)('colors.white', '#ffffff'),
          function(e) {
            return e.switchSize ? e.switchSize : '80px';
          },
          function(e) {
            return e.switchSize ? e.switchSize : '80px';
          },
          function(e) {
            return e.switchSize ? e.switchSize : '80px';
          },
          function(e) {
            return e.switchColor ? e.switchColor : '#028489';
          },
          function(e) {
            return e.switchSize ? e.switchSize : '80px';
          },
          function(e) {
            return e.switchSize ? e.switchSize : '80px';
          },
          function(e) {
            return e.switchColor ? e.switchColor : '#028489';
          },
          Object(ht.L)('space.3', '10'),
          Object(ht.L)('space.3', '10'),
          function(e) {
            return e.switchSize ? e.switchSize : '50px';
          },
          function(e) {
            return e.switchColor ? It(e.switchColor, 0.2) : It('#028489', 0.2);
          },
          function(e) {
            return e.switchColor ? e.switchColor : '#028489';
          },
          function(e) {
            return e.switchSize ? e.switchSize : '50px';
          },
          function(e) {
            return e.switchSize ? e.switchSize : '50px';
          },
          function(e) {
            return e.switchSize ? e.switchSize : '50px';
          },
          function(e) {
            return e.switchSize ? e.switchSize : '50px';
          },
          function(e) {
            return e.barColor ? e.barColor : '#a0a0a0';
          },
          function(e) {
            return e.switchSize ? e.switchSize : '50px';
          },
          function(e) {
            return e.switchSize ? e.switchSize : '50px';
          },
          function(e) {
            return e.switchSize ? e.switchSize : '50px';
          },
          Object(ht.L)('colors.white', '#ffffff'),
          xt.a
        );
      (St.propTypes = {}), (St.displayName = 'SwitchStyle');
      var wt = St;
      var vt = function(e) {
        var t,
          n,
          r,
          o,
          c = e.className,
          s = e.switchColor,
          l = e.isChecked,
          u = e.labelText,
          d = e.labelPosition,
          p = e.switchSize,
          g = e.isMaterial,
          f = e.barColor,
          A = e.onChange,
          m = e.onFocus,
          M = e.onBlur,
          y = e.handleOnChange,
          L = (function(e, t) {
            if (null == e) return {};
            var n,
              a,
              i = {},
              r = Object.keys(e);
            for (a = 0; a < r.length; a++)
              (n = r[a]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, [
            'className',
            'switchColor',
            'isChecked',
            'labelText',
            'labelPosition',
            'switchSize',
            'isMaterial',
            'barColor',
            'onChange',
            'onFocus',
            'onBlur',
            'handleOnChange',
          ]),
          j =
            ((t = l),
            (n = Object(a.useState)(t)),
            (r = n[0]),
            (o = n[1]),
            [
              r,
              Object(a.useCallback)(function() {
                return o(function(e) {
                  return !e;
                });
              }, []),
            ]),
          h = j[0],
          b = j[1],
          N = ['reusecore__switch'];
        d && N.push('label_' + d),
          g && N.push('is-material'),
          c && N.push(c),
          (y = function(e) {
            b(), A(!h);
          });
        var I =
            u &&
            i.a.createElement(
              'span',
              { className: 'reusecore__field-label' },
              u
            ),
          x = d || 'top';
        return i.a.createElement(
          wt,
          Object.assign(
            {
              className: N.join(' '),
              switchColor: s,
              switchSize: p,
              barColor: f,
            },
            L
          ),
          i.a.createElement(
            'label',
            null,
            'left' === x || 'right' === x || 'top' === x ? I : '',
            i.a.createElement('input', {
              checked: h,
              onChange: y,
              onBlur: M,
              onFocus: m,
              className: 'switch',
              type: 'checkbox',
              value: h,
            }),
            i.a.createElement('div', null, i.a.createElement('div', null)),
            'bottom' === x && I
          )
        );
      };
      vt.defaultProps = {
        isChecked: !1,
        labelPosition: 'top',
        onBlur: function() {},
        onFocus: function() {},
        onChange: function() {},
      };
      var Et = vt,
        Dt = n('CIbz'),
        Ct = n('58Qm'),
        Tt = r.d.div.withConfig({
          displayName: 'pricingstyle__PricingTable',
          componentId: 'tub9of-0',
        })([
          '\n  border: 1px solid #f2f4f7;\n  border-radius: 5px;\n  padding: 60px 45px;\n  border-radius: 5px;\n  margin-bottom: 30px;\n  @media (max-width: 990px) {\n    padding: 50px 40px;\n  }\n  @media (max-width: 767px) {\n    padding: 45px 35px;\n  }\n  @media (max-width: 575px) {\n    padding: 40px 30px;\n  }\n  a:not([href]),\n  a[href],\n  a[data-href] {\n    backface-visibility: hidden;\n  }\n',
        ]),
        zt = r.d.div.withConfig({
          displayName: 'pricingstyle__PricingHead',
          componentId: 'tub9of-1',
        })(['\n  margin-bottom: 40px;\n']),
        Ot = r.d.div.withConfig({
          displayName: 'pricingstyle__PricingPrice',
          componentId: 'tub9of-2',
        })(['\n  margin-bottom: 30px;\n']),
        kt = r.d.div.withConfig({
          displayName: 'pricingstyle__PricingButton',
          componentId: 'tub9of-3',
        })([
          '\n  text-align: center;\n  margin-bottom: 55px;\n  @media (max-width: 767px) {\n    margin-bottom: 40px;\n  }\n',
        ]),
        Yt = r.d.div.withConfig({
          displayName: 'pricingstyle__PricingList',
          componentId: 'tub9of-4',
        })(['']),
        Pt = r.d.div.withConfig({
          displayName: 'pricingstyle__ListItem',
          componentId: 'tub9of-5',
        })([
          '\n  display: flex;\n  margin-bottom: 19px;\n  &:last-child {\n    margin-bottom: 0;\n  }\n  .price_list_icon {\n    color: #18d379;\n    margin-right: 10px;\n  }\n',
        ]),
        Qt = r.d.div.withConfig({
          displayName: 'pricingstyle__SwitchWrapper',
          componentId: 'tub9of-6',
        })(
          [
            "\n  text-align: center;\n  margin-top: 20px;\n  .reusecore__switch {\n    .reusecore__field-label {\n      font-size: 16px;\n      font-weight: 400;\n      color: #5c636c;\n      cursor: pointer;\n    }\n    input[type='checkbox'].switch {\n      &:checked {\n        + div {\n          width: 40px !important;\n          background-color: ",
            ';\n          > div {\n            left: 17px !important;\n          }\n        }\n      }\n      + div {\n        background-color: #f0f0f0;\n        background-color: #f0f0f0;\n        border: 0;\n        width: 40px;\n        height: 25px;\n        > div {\n          background-color: #fff;\n          box-shadow: 0px 2px 3px 0.24px rgba(31, 64, 104, 0.25);\n          width: 21px;\n          height: 21px;\n          top: 2px;\n          left: 2px;\n        }\n      }\n    }\n  }\n',
          ],
          Object(ht.L)('colors.primary')
        ),
        Rt = Tt,
        Bt = n('gSg6'),
        Wt = function(e) {
          var t = e.sectionWrapper,
            n = e.row,
            r = e.secTitleWrapper,
            o = e.secHeading,
            c = e.secText,
            s = e.nameStyle,
            l = e.descriptionStyle,
            u = e.priceStyle,
            d = e.priceLabelStyle,
            p = e.buttonStyle,
            g = e.buttonFillStyle,
            L = e.listContentStyle,
            j = jt.data,
            h = Object(a.useState)({
              toggle: !0,
              data: j.hostingJson.MONTHLY_PRICING_TABLE,
            }),
            b = h[0],
            N = h[1];
          return i.a.createElement(
            A.a,
            t,
            i.a.createElement(
              y.a,
              null,
              i.a.createElement(
                A.a,
                r,
                i.a.createElement(
                  f.a,
                  { bottom: !0, cascade: !0 },
                  i.a.createElement(
                    m.a,
                    Object.assign({}, c, { content: 'PRICING PLAN' })
                  ),
                  i.a.createElement(
                    M.a,
                    Object.assign({}, o, {
                      content: 'What’s our monthly pricing subscription',
                    })
                  ),
                  i.a.createElement(
                    Qt,
                    null,
                    i.a.createElement(Et, {
                      switchColor: '#f0f0f0',
                      barColor: '#f0f0f0',
                      labelText: 'Show Pricing plan annually',
                      labelPosition: 'left',
                      onChange: function() {
                        N(Object.assign({}, b, { toggle: !b.toggle }));
                      },
                    })
                  )
                )
              ),
              i.a.createElement(
                A.a,
                n,
                i.a.createElement(
                  Dt.a,
                  {
                    carouselSelector: 'pricing-carousel',
                    options: {
                      type: 'slider',
                      perView: 3,
                      gap: 30,
                      bound: !0,
                      breakpoints: {
                        1199: { perView: 2, peek: { before: 100, after: 100 } },
                        990: { perView: 1, peek: { before: 150, after: 150 } },
                        767: { perView: 1, peek: { before: 80, after: 80 } },
                        575: {
                          perView: 1,
                          gap: 15,
                          peek: { before: 20, after: 20 },
                        },
                      },
                    },
                    controls: !1,
                  },
                  !0 === b.toggle
                    ? i.a.createElement(
                        i.a.Fragment,
                        null,
                        j.hostingJson.MONTHLY_PRICING_TABLE.map(function(e, t) {
                          return i.a.createElement(
                            Ct.a,
                            { key: 'pricing-table-' + t },
                            i.a.createElement(
                              Rt,
                              {
                                freePlan: e.freePlan,
                                className: 'pricing_table',
                              },
                              i.a.createElement(
                                zt,
                                null,
                                i.a.createElement(
                                  M.a,
                                  Object.assign({ content: e.name }, s)
                                ),
                                i.a.createElement(
                                  m.a,
                                  Object.assign({ content: e.description }, l)
                                )
                              ),
                              i.a.createElement(
                                Ot,
                                null,
                                i.a.createElement(
                                  m.a,
                                  Object.assign({ content: e.price }, u)
                                ),
                                i.a.createElement(
                                  m.a,
                                  Object.assign({ content: e.priceLabel }, d)
                                )
                              ),
                              i.a.createElement(
                                kt,
                                null,
                                i.a.createElement(
                                  'a',
                                  { href: e.url },
                                  e.freePlan
                                    ? i.a.createElement(
                                        Y.a,
                                        Object.assign(
                                          { title: e.buttonLabel },
                                          p
                                        )
                                      )
                                    : i.a.createElement(
                                        Y.a,
                                        Object.assign(
                                          { title: e.buttonLabel },
                                          g
                                        )
                                      )
                                )
                              ),
                              i.a.createElement(
                                Yt,
                                null,
                                e.listItems.map(function(e, t) {
                                  return i.a.createElement(
                                    Pt,
                                    { key: 'pricing-table-list-' + t },
                                    i.a.createElement($e.a, {
                                      icon: Bt.checkmark,
                                      className: 'price_list_icon',
                                      size: 13,
                                    }),
                                    i.a.createElement(
                                      m.a,
                                      Object.assign({ content: e.content }, L)
                                    )
                                  );
                                })
                              )
                            )
                          );
                        })
                      )
                    : i.a.createElement(
                        i.a.Fragment,
                        null,
                        j.hostingJson.YEARLY_PRICING_TABLE.map(function(e, t) {
                          return i.a.createElement(
                            Ct.a,
                            { key: 'mobile-pricing-table-' + t },
                            i.a.createElement(
                              Rt,
                              {
                                freePlan: e.freePlan,
                                className: 'pricing_table',
                              },
                              i.a.createElement(
                                zt,
                                null,
                                i.a.createElement(
                                  M.a,
                                  Object.assign({ content: e.name }, s)
                                ),
                                i.a.createElement(
                                  m.a,
                                  Object.assign({ content: e.description }, l)
                                )
                              ),
                              i.a.createElement(
                                Ot,
                                null,
                                i.a.createElement(
                                  m.a,
                                  Object.assign({ content: e.price }, u)
                                ),
                                i.a.createElement(
                                  m.a,
                                  Object.assign({ content: e.priceLabel }, d)
                                )
                              ),
                              i.a.createElement(
                                kt,
                                null,
                                i.a.createElement(
                                  'a',
                                  { href: e.url },
                                  e.freePlan
                                    ? i.a.createElement(
                                        Y.a,
                                        Object.assign(
                                          { title: e.buttonLabel },
                                          p
                                        )
                                      )
                                    : i.a.createElement(
                                        Y.a,
                                        Object.assign(
                                          { title: e.buttonLabel },
                                          g
                                        )
                                      )
                                )
                              ),
                              i.a.createElement(
                                Yt,
                                null,
                                e.listItems.map(function(e, t) {
                                  return i.a.createElement(
                                    Pt,
                                    { key: 'mobile-pricing-table-list-' + t },
                                    i.a.createElement($e.a, {
                                      icon: Bt.checkmark,
                                      className: 'price_list_icon',
                                      size: 13,
                                    }),
                                    i.a.createElement(
                                      m.a,
                                      Object.assign({ content: e.content }, L)
                                    )
                                  );
                                })
                              )
                            )
                          );
                        })
                      )
                )
              )
            )
          );
        };
      Wt.defaultProps = {
        sectionWrapper: {
          as: 'section',
          pt: ['60px', '80px', '80px', '80px', '150px'],
          pb: ['40px', '40px', '40px', '40px'],
        },
        row: { flexBox: !0, flexWrap: 'wrap', alignItems: 'center' },
        secTitleWrapper: { mb: ['50px', '50px', '60px', '75px'] },
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
          color: 'headingColor',
          letterSpacing: '-0.025em',
          mb: '0',
        },
        col: { width: [1, 0.5, 0.5, 1 / 3], pr: '15px', pl: '15px' },
        nameStyle: {
          fontSize: ['18px', '20px', '22px', '22px', '22px'],
          fontWeight: '500',
          color: 'headingColor',
          letterSpacing: '-0.025em',
          textAlign: 'center',
          mb: '12px',
        },
        descriptionStyle: {
          fontSize: ['14px', '16px', '16px', '16px', '16px'],
          color: 'textColor',
          lineHeight: '1.75',
          textAlign: 'center',
          mb: '0',
        },
        priceStyle: {
          as: 'span',
          display: 'block',
          fontSize: ['32px', '36px', '40px', '40px', '40px'],
          color: 'headingColor',
          textAlign: 'center',
          mb: '5px',
          letterSpacing: '-0.025em',
        },
        priceLabelStyle: {
          fontSize: ['13px', '14px', '14px', '14px', '14px'],
          color: 'textColor',
          lineHeight: '1.75',
          textAlign: 'center',
          mb: '0',
        },
        buttonStyle: {
          type: 'button',
          fontSize: ['13px', '14px', '14px', '14px', '14px'],
          fontWeight: '600',
          borderRadius: '4px',
          pl: '10px',
          pr: '10px',
          colors: 'primary',
          width: '222px',
          maxWidth: '100%',
        },
        buttonFillStyle: {
          type: 'button',
          fontSize: '14px',
          fontWeight: '600',
          color: '#fff!important',
          borderRadius: '4px',
          pl: '10px',
          pr: '10px',
          colors: 'primaryWithBg',
          width: '200px',
          maxWidth: '100%',
        },
        listContentStyle: {
          fontSize: ['14px', '16px', '16px', '16px', '16px'],
          color: 'textColor',
          mb: '0',
        },
      };
      var Ht = n('9WH7'),
        Gt = r.d.section.withConfig({
          displayName: 'testimonials2style__TestimonialSecWrapper2',
          componentId: 'sc-1gfj54d-0',
        })([
          '\n  padding: 30px 0;\n  @media (max-width: 575px) {\n    padding: 60px 0;\n  }\n  @media (max-width: 575px) {\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n\n  .glide {\n    &:hover {\n      .glide__prev--area,\n      .glide__next--area {\n        opacity: 1;\n      }\n    }\n  }\n\n  .glide__slides {\n    padding-top: 10px;\n    padding-bottom: 30px;\n\n    .glide__slide {\n      // opacity: 0.5;\n      pointer-events: none;\n      transition: 0.25s ease;\n      &.glide__slide--active {\n        opacity: 1;\n        pointer-events: auto;\n        + .glide__slide {\n          @media (min-width: 800px) {\n            opacity: 1;\n            pointer-events: auto;\n          }\n        }\n      }\n    }\n  }\n\n  .glide__controls {\n    position: static;\n    .glide__prev--area,\n    .glide__next--area {\n      position: absolute;\n      top: 50%;\n      transform: translateY(-50%);\n      opacity: 0;\n      transition: 0.15s ease-in-out;\n      @media (max-width: 990px) {\n        display: none;\n      }\n\n      button {\n        font-size: 28px;\n      }\n    }\n    .glide__prev--area {\n      left: 10%;\n      @media (max-width: 1400px) {\n        left: 5%;\n      }\n    }\n    .glide__next--area {\n      right: 10%;\n      @media (max-width: 1400px) {\n        right: 5%;\n      }\n    }\n  }\n\n  @media (max-width: 990px) {\n    .glide__slide--active .testimonial_item {\n      // box-shadow: 5px 0px 20px rgba(0, 0, 0, 0.05);\n    }\n  }\n',
        ]),
        Ut =
          (r.d.div.withConfig({
            displayName: 'testimonials2style__TestimonialItem',
            componentId: 'sc-1gfj54d-1',
          })([
            '\n  border: 1px solid #f2f4f7;\n  padding: 40px;\n  border-radius: 5px;\n  background: transparent;\n  transition: 0.425s ease;\n\n  &:hover {\n    box-shadow: 0px 20px 40px -20px rgba(39, 79, 117, 0.25);\n  }\n\n  @media (max-width: 1300px) {\n    padding: 30px;\n  }\n',
          ]),
          r.d.div.withConfig({
            displayName: 'testimonials2style__ImageWrapper',
            componentId: 'sc-1gfj54d-2',
          })([
            '\n  // box-shadow: 0px 6px 30px 0px rgba(39, 79, 117, 0.2);\n  max-width: 150px;\n  margin: 0 auto;\n  img {\n    width: 100%;\n    height: auto;\n    display: block;\n  }\n',
          ])),
        _t = Gt,
        Vt = function(e) {
          var t = e.secTitleWrapper,
            n = e.secText,
            a = e.secHeading,
            r =
              (e.reviewStyle,
              e.TestimonialMeta,
              e.nameStyle,
              e.designationStyle,
              Ht.data);
          return i.a.createElement(
            _t,
            { id: 'testimonial_section2' },
            i.a.createElement(
              y.a,
              { fullWidth: !0, noGutter: !0 },
              i.a.createElement(
                A.a,
                t,
                i.a.createElement(
                  m.a,
                  Object.assign({}, n, { content: 'TESTIMONIALS' })
                ),
                i.a.createElement(
                  M.a,
                  Object.assign({}, a, { content: 'What’s clients say' })
                )
              ),
              i.a.createElement(
                Dt.a,
                {
                  options: {
                    type: 'carousel',
                    autoplay: 2e3,
                    perView: 2,
                    gap: 30,
                    animationDuration: 800,
                    focus: 'center',
                    peek: { before: 100, after: 100 },
                    breakpoints: {
                      1800: { perView: 2, peek: { before: 100, after: 100 } },
                      1400: { perView: 2, peek: { before: 100, after: 100 } },
                      1200: { perView: 2, peek: { before: 80, after: 80 } },
                      990: { perView: 2, peek: { before: 0, after: 0 } },
                      800: { perView: 2, peek: { before: 0, after: 0 } },
                      575: { perView: 2, peek: { before: 0, after: 0 } },
                    },
                  },
                  nextButton: i.a.createElement(Y.a, {
                    icon: i.a.createElement('i', {
                      className: 'flaticon-next',
                    }),
                    variant: 'textButton',
                    'aria-label': 'next button',
                  }),
                  prevButton: i.a.createElement(Y.a, {
                    icon: i.a.createElement('i', {
                      className: 'flaticon-left-arrow',
                    }),
                    variant: 'textButton',
                    'aria-label': 'prev button',
                  }),
                },
                i.a.createElement(
                  i.a.Fragment,
                  null,
                  r.hostingJson.TESTIMONIALSS.map(function(e, t) {
                    return i.a.createElement(
                      Ct.a,
                      { key: 'testimonial-slide-' + t },
                      i.a.createElement(
                        A.a,
                        null,
                        i.a.createElement(
                          Ut,
                          null,
                          i.a.createElement(k.a, {
                            fluid:
                              (null !== e.avatar) | void 0
                                ? e.avatar.childImageSharp.fluid
                                : {},
                            alt: 'reviewer-image-' + t,
                          })
                        )
                      )
                    );
                  })
                )
              )
            )
          );
        };
      Vt.defaultProps = {
        secTitleWrapper: { mb: ['40px', '40px', '50px', '75px'] },
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
          color: 'headingColor',
          letterSpacing: '-0.025em',
          mb: '0',
        },
        reviewStyle: {
          fontSize: ['16px', '16px', '17px', '17px', '19px'],
          fontWeight: '300',
          color: '#343d48',
          lineHeight: '1.74',
          mb: ['30px', '30px', '30px', '40px', '55px'],
        },
        TestimonialMeta: { flexBox: !0, alignItems: 'center' },
        nameStyle: {
          as: 'h3',
          fontSize: '16px',
          fontWeight: '500',
          color: '#0f2137',
          letterSpacing: '-0.025em',
          mb: '8px',
        },
        designationStyle: {
          fontSize: '14px',
          fontWeight: '400',
          color: '#6f7a87',
          mb: '0',
        },
      };
      var Jt = n('oNKU'),
        Zt = r.d.div.withConfig({
          displayName: 'contactstyle__ContactFromWrapper',
          componentId: 'sc-5vjww0-0',
        })([
          '\n  display: flex;\n  align-items: stretch;\n  width: 490px;\n  max-width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 40px;\n  @media (max-width: 575px) {\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 25px;\n    button {\n      width: 100%;\n    }\n  }\n\n  .email_input {\n    flex-grow: 1;\n    margin-right: 20px;\n    @media (max-width: 575px) {\n      width: 100%;\n      margin-right: 0;\n      margin-bottom: 20px;\n    }\n    &.is-material {\n      &.is-focus {\n        label {\n          color: #aeb1b6;\n          font-size: 12px;\n        }\n      }\n    }\n\n    input {\n      height: 100%;\n      background: #fff;\n      font-size: 16px;\n      font-weight: 400;\n      color: #343d48;\n      padding: 5px 15px;\n      border-color: #dadada;\n      @media (max-width: 575px) {\n        height: 48px;\n      }\n    }\n\n    label {\n      font-size: 14px;\n      color: #343d48;\n      font-weight: 500;\n      padding-left: 10px;\n      top: 5px;\n    }\n  }\n\n  .field-wrapper {\n    height: 100%;\n  }\n',
        ]),
        Ft = function(e) {
          var t = e.sectionWrapper,
            n = e.row,
            a = e.contactForm,
            r = e.secTitleWrapper,
            o = e.secHeading,
            c = e.secText,
            s = e.button,
            l = e.note;
          return i.a.createElement(
            A.a,
            t,
            i.a.createElement(
              y.a,
              null,
              i.a.createElement(
                A.a,
                r,
                i.a.createElement(
                  m.a,
                  Object.assign({}, c, { content: 'CONTACT US' })
                ),
                i.a.createElement(
                  M.a,
                  Object.assign({}, o, {
                    content: 'Are you Interested to meet with us?',
                  })
                )
              ),
              i.a.createElement(
                A.a,
                n,
                i.a.createElement(
                  A.a,
                  a,
                  i.a.createElement(
                    Zt,
                    null,
                    i.a.createElement(ct.a, {
                      inputType: 'email',
                      placeholder: 'Email address',
                      iconPosition: 'right',
                      isMaterial: !1,
                      className: 'email_input',
                      'aria-label': 'email',
                    }),
                    i.a.createElement(
                      Y.a,
                      Object.assign({}, s, { title: 'SEND MESSAGE' })
                    )
                  ),
                  i.a.createElement(
                    m.a,
                    Object.assign({}, l, {
                      content:
                        'Note: Please call us at 12pm to 8am. otherwise our customer supporter will not  available to reach your call, but you can drop mail anytime.',
                    })
                  )
                )
              )
            )
          );
        };
      Ft.defaultProps = {
        sectionWrapper: {
          id: 'contact_section',
          as: 'section',
          pt: ['0px', '10px', '20px', '80px'],
          pb: ['0px', '0px', '0px', '0px', '80px'],
          bg: '#f9fbfd',
        },
        secTitleWrapper: { mb: ['45px', '50px', '60px'] },
        secText: {
          as: 'span',
          display: 'block',
          textAlign: 'center',
          fontSize: '2',
          letterSpacing: '0.15em',
          fontWeight: '6',
          color: 'primary',
          mb: '3',
        },
        secHeading: {
          textAlign: 'center',
          fontSize: ['6', '8'],
          fontWeight: '400',
          color: 'headingColor',
          letterSpacing: '-0.025em',
          mb: '0',
        },
        row: { flexBox: !0, justifyContent: 'center' },
        contactForm: { width: [1, 1, 1, 0.5] },
        button: {
          type: 'button',
          fontSize: '2',
          fontWeight: '600',
          borderRadius: '4px',
          pl: '22px',
          pr: '22px',
          colors: 'primaryWithBg',
          height: '4',
        },
        note: {
          fontSize: ['13px', '14px', '15px', '15px', '15px'],
          color: '#5d646d',
          lineHeight: '1.87',
          textAlign: 'center',
        },
      };
      var Xt = n('rj7Q'),
        qt = n('LUIQ'),
        Kt = n('iy5v'),
        $t = n('vrFN'),
        en = n('uITV'),
        tn = n('PTh7'),
        nn = (n('tRiC'), n('mIu7')),
        an = n.n(nn),
        rn =
          (n('Hozq'),
          n('HllF'),
          n('9pnl'),
          n('sIZv'),
          n('IX0j'),
          n('OJ1S'),
          n('VhxM'),
          function(e) {
            var t = e.sectionWrapper,
              n = e.row,
              a = e.col,
              r =
                (e.secTitleWrapper,
                e.secHeading,
                e.secText,
                e.featureItemHeading),
              o = e.featureItemImage,
              c = e.featureItemDes,
              s = e.featureBlockStyle,
              l = e.iconStyle,
              u = e.contentStyle;
            return i.a.createElement(
              A.a,
              Object.assign({}, t, { className: 'Icon_Text_Container' }),
              i.a.createElement(
                A.a,
                { className: 'icon_text_box CloudTransformation_Icontext' },
                i.a.createElement(
                  i.a.Fragment,
                  null,
                  i.a.createElement(
                    A.a,
                    Object.assign({}, n, {
                      style: { justifyContent: 'center' },
                    }),
                    i.a.createElement(
                      A.a,
                      a,
                      i.a.createElement(it.a, {
                        wrapperStyle: s,
                        iconStyle: l,
                        contentStyle: u,
                        title: i.a.createElement(
                          M.a,
                          Object.assign({}, r, { content: 'Cost-Effective' })
                        ),
                        description: i.a.createElement(
                          m.a,
                          Object.assign({}, c, {
                            content:
                              'Minimize costs with lower initial IT infrastructure costs and improved manageability with less maintenance.',
                          })
                        ),
                        icon: i.a.createElement(
                          E.a,
                          Object.assign({}, o, { src: an.a, alt: 'alt text' })
                        ),
                      })
                    ),
                    i.a.createElement(
                      A.a,
                      a,
                      i.a.createElement(it.a, {
                        wrapperStyle: s,
                        iconStyle: l,
                        contentStyle: u,
                        title: i.a.createElement(
                          M.a,
                          Object.assign({}, r, { content: 'Speed' })
                        ),
                        description: i.a.createElement(
                          m.a,
                          Object.assign({}, c, {
                            content:
                              'Enterprises can get their applications up faster and also use edge computing to faster data across devices.',
                          })
                        ),
                        icon: i.a.createElement(
                          E.a,
                          Object.assign({}, o, { src: an.a, alt: 'alt text' })
                        ),
                      })
                    ),
                    i.a.createElement(
                      A.a,
                      a,
                      i.a.createElement(it.a, {
                        wrapperStyle: s,
                        iconStyle: l,
                        contentStyle: u,
                        title: i.a.createElement(
                          M.a,
                          Object.assign({}, r, { content: 'Scalability' })
                        ),
                        description: i.a.createElement(
                          m.a,
                          Object.assign({}, c, {
                            content:
                              'Handle sudden surges in traffic and seasonal heavy loads with ease due to the flexible scalability of cloud technology.',
                          })
                        ),
                        icon: i.a.createElement(
                          E.a,
                          Object.assign({}, o, { src: an.a, alt: 'alt text' })
                        ),
                      })
                    ),
                    i.a.createElement(
                      A.a,
                      a,
                      i.a.createElement(it.a, {
                        wrapperStyle: s,
                        iconStyle: l,
                        contentStyle: u,
                        title: i.a.createElement(
                          M.a,
                          Object.assign({}, r, { content: 'Robust' })
                        ),
                        description: i.a.createElement(
                          m.a,
                          Object.assign({}, c, {
                            content:
                              'Cloud-based platforms have built-in measures to cope with any disasters that may occur, so business can continue with minimal down-time.',
                          })
                        ),
                        icon: i.a.createElement(
                          E.a,
                          Object.assign({}, o, { src: an.a, alt: 'alt text' })
                        ),
                      })
                    )
                  )
                )
              ),
              i.a.createElement(
                A.a,
                { className: 'icon_text_box DigitalExperience_Icontext' },
                i.a.createElement(
                  i.a.Fragment,
                  null,
                  i.a.createElement(
                    A.a,
                    Object.assign({}, n, {
                      style: { justifyContent: 'center' },
                    }),
                    i.a.createElement(
                      A.a,
                      a,
                      i.a.createElement(it.a, {
                        wrapperStyle: s,
                        iconStyle: l,
                        contentStyle: u,
                        title: i.a.createElement(
                          M.a,
                          Object.assign({}, r, { content: 'Personalization' })
                        ),
                        description: i.a.createElement(
                          m.a,
                          Object.assign({}, c, {
                            content:
                              'Personalized offers and strategies drive greater customer retention and sales.',
                          })
                        ),
                        icon: i.a.createElement(
                          E.a,
                          Object.assign({}, o, { src: an.a, alt: 'alt text' })
                        ),
                      })
                    ),
                    i.a.createElement(
                      A.a,
                      a,
                      i.a.createElement(it.a, {
                        wrapperStyle: s,
                        iconStyle: l,
                        contentStyle: u,
                        title: i.a.createElement(
                          M.a,
                          Object.assign({}, r, { content: 'Omnichannel' })
                        ),
                        description: i.a.createElement(
                          m.a,
                          Object.assign({}, c, {
                            content:
                              'Omnichannel engagement covers all your bases to maximize sales & profits.',
                          })
                        ),
                        icon: i.a.createElement(
                          E.a,
                          Object.assign({}, o, { src: an.a, alt: 'alt text' })
                        ),
                      })
                    ),
                    i.a.createElement(
                      A.a,
                      a,
                      i.a.createElement(it.a, {
                        wrapperStyle: s,
                        iconStyle: l,
                        contentStyle: u,
                        title: i.a.createElement(
                          M.a,
                          Object.assign({}, r, { content: 'Seamless' })
                        ),
                        description: i.a.createElement(
                          m.a,
                          Object.assign({}, c, {
                            content:
                              'A truly seamless experience keeps customers delighted and returning for more.',
                          })
                        ),
                        icon: i.a.createElement(
                          E.a,
                          Object.assign({}, o, { src: an.a, alt: 'alt text' })
                        ),
                      })
                    ),
                    i.a.createElement(
                      A.a,
                      a,
                      i.a.createElement(it.a, {
                        wrapperStyle: s,
                        iconStyle: l,
                        contentStyle: u,
                        title: i.a.createElement(
                          M.a,
                          Object.assign({}, r, { content: 'Multi-Language' })
                        ),
                        description: i.a.createElement(
                          m.a,
                          Object.assign({}, c, {
                            content:
                              'Translate content into a customer’s preferred language for ease & convenience.',
                          })
                        ),
                        icon: i.a.createElement(
                          E.a,
                          Object.assign({}, o, { src: an.a, alt: 'alt text' })
                        ),
                      })
                    )
                  )
                )
              ),
              i.a.createElement(
                A.a,
                { className: 'icon_text_box OrderManagement_Icontext' },
                i.a.createElement(
                  i.a.Fragment,
                  null,
                  i.a.createElement(
                    A.a,
                    Object.assign({}, n, {
                      style: { justifyContent: 'center' },
                    }),
                    i.a.createElement(
                      A.a,
                      a,
                      i.a.createElement(it.a, {
                        wrapperStyle: s,
                        iconStyle: l,
                        contentStyle: u,
                        title: i.a.createElement(
                          M.a,
                          Object.assign({}, r, { content: 'Cost-efficacy' })
                        ),
                        description: i.a.createElement(
                          m.a,
                          Object.assign({}, c, {
                            content:
                              'Experience multi-fold increase in ROI and enhanced process efficiency.',
                          })
                        ),
                        icon: i.a.createElement(
                          E.a,
                          Object.assign({}, o, { src: an.a, alt: 'alt text' })
                        ),
                      })
                    ),
                    i.a.createElement(
                      A.a,
                      a,
                      i.a.createElement(it.a, {
                        wrapperStyle: s,
                        iconStyle: l,
                        contentStyle: u,
                        title: i.a.createElement(
                          M.a,
                          Object.assign({}, r, { content: 'Flexibility' })
                        ),
                        description: i.a.createElement(
                          m.a,
                          Object.assign({}, c, {
                            content:
                              'System can adapt to changes in your operations and business.',
                          })
                        ),
                        icon: i.a.createElement(
                          E.a,
                          Object.assign({}, o, { src: an.a, alt: 'alt text' })
                        ),
                      })
                    ),
                    i.a.createElement(
                      A.a,
                      a,
                      i.a.createElement(it.a, {
                        wrapperStyle: s,
                        iconStyle: l,
                        contentStyle: u,
                        title: i.a.createElement(
                          M.a,
                          Object.assign({}, r, {
                            content: 'Faster Fulfillment',
                          })
                        ),
                        description: i.a.createElement(
                          m.a,
                          Object.assign({}, c, {
                            content:
                              'Speedy order fulfillment and return from anywhere, anytime across channels. ',
                          })
                        ),
                        icon: i.a.createElement(
                          E.a,
                          Object.assign({}, o, { src: an.a, alt: 'alt text' })
                        ),
                      })
                    ),
                    i.a.createElement(
                      A.a,
                      a,
                      i.a.createElement(it.a, {
                        wrapperStyle: s,
                        iconStyle: l,
                        contentStyle: u,
                        title: i.a.createElement(
                          M.a,
                          Object.assign({}, r, { content: 'Greater Accuracy' })
                        ),
                        description: i.a.createElement(
                          m.a,
                          Object.assign({}, c, {
                            content:
                              'Real-time tracking with an integrated dashboard with order and delivery updates.',
                          })
                        ),
                        icon: i.a.createElement(
                          E.a,
                          Object.assign({}, o, { src: an.a, alt: 'alt text' })
                        ),
                      })
                    )
                  )
                )
              )
            );
          });
      rn.defaultProps = {
        sectionWrapper: {
          as: 'section',
          id: 'service_section',
          className: 'service_section',
          pt: ['20px', '20px', '25px', '30px'],
        },
        secTitleWrapper: { mb: ['30px', '30px', '40x', '40px'] },
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
          fontSize: ['16px', '16px'],
          fontWeight: '400',
          color: '#0f2137',
          letterSpacing: '-0.025em',
          mb: '0',
        },
        row: { flexBox: !0, flexWrap: 'wrap' },
        col: {
          width: [1, 0.45, 0.45, 0.2],
          className: 'service_col',
          bg: '#fff',
          margin: '1%',
          border: '1px solid #f1f4f6',
          borderRadius: '8px',
        },
        featureBlockStyle: { p: '20px 15px', className: 'service_item' },
        iconStyle: {
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          mb: '10px',
        },
        contentStyle: { textAlign: 'center' },
        featureItemHeading: {
          fontSize: ['16px', '18px'],
          fontWeight: '400',
          color: '#0f2137',
          lineHeight: '1.5',
          mb: '15px',
          mt: '8px',
          letterSpacing: '-0.020em',
        },
        featureItemImage: {
          width: '50px !important',
          height: '50px !important',
        },
        featureItemDes: {
          fontSize: '15px',
          lineHeight: '1.84',
          color: '#343d48cc',
          mb: '0px',
        },
      };
      var on = rn,
        cn = function(e) {
          var t = e.content1,
            n = e.content2;
          return i.a.createElement(i.a.Fragment, null, t, n);
        },
        sn = n('okFy'),
        ln = function() {
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(A.a, null, 'B2c Content')
          );
        },
        un = function() {
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(A.a, null, 'B2B Content')
          );
        };
      t.default = function() {
        return i.a.createElement(
          r.a,
          { theme: s.a },
          i.a.createElement(
            Kt.ParallaxProvider,
            null,
            i.a.createElement($t.a, { title: 'Cnetric Global Inc' }),
            i.a.createElement(u.a, null),
            i.a.createElement(l.c, null),
            i.a.createElement(
              l.a,
              { className: 'Home_page' },
              i.a.createElement(
                c.a,
                { top: 0, innerZ: 9999, activeClass: 'sticky-nav-active' },
                i.a.createElement(qt.b, null, i.a.createElement(d.a, null))
              ),
              i.a.createElement(en.a, null),
              i.a.createElement(T.a, null),
              i.a.createElement(C, null),
              i.a.createElement(on, null),
              i.a.createElement(cn, { content1: ln }),
              i.a.createElement(cn, { content1: un }),
              i.a.createElement(
                'div',
                null,
                i.a.createElement(
                  'form',
                  {
                    action:
                      'https://getform.io/f/e64ebaae-e4a4-4591-b2c2-8b0fe4604fa0',
                    method: 'POST',
                  },
                  i.a.createElement('input', { type: 'text', name: 'name' }),
                  i.a.createElement('input', { type: 'email', name: 'email' }),
                  i.a.createElement('input', { type: 'tel', name: 'tel' }),
                  i.a.createElement('button', { type: 'submit' }, 'Send')
                )
              ),
              i.a.createElement(tn.a, null),
              i.a.createElement(sn.a, null),
              i.a.createElement(Jt.a, null),
              i.a.createElement(Xt.a, null)
            ),
            i.a.createElement(
              'div',
              { id: 'footerWrapper', className: 'copyright' },
              i.a.createElement(
                'p',
                { style: { textAlign: 'center' } },
                'Copyright 2020 @Cnetric Global. All Rights Reserved.',
                i.a.createElement('i', { className: 'fa fa-facebook-square' })
              )
            )
          )
        );
      };
    },
    lEaq: function(e, t, n) {
      'use strict';
      n('rmZQ');
      var a = function() {};
      e.exports = a;
    },
    lPOj: function(e, t) {
      e.exports =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiBzdHJva2U9IiMwZjQ2Y2EiIHN0cm9rZS13aWR0aD0iMiI+PGcgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48cGF0aCBkPSJNNzcuMTcgMy43NWM5LjI3LjAxIDE3LjUgNS45NSAyMC40IDE0Ljc1QTIxLjUyIDIxLjUyIDAgMCAxIDkwIDQyLjUxYTIxLjUgMjEuNSAwIDAgMS0yNS4xNy4zOCAyMS41MyAyMS41MyAwIDAgMS04LjI5LTIzLjc3QzU5LjI2IDEwIDY3LjY1IDMuNzUgNzcuMTcgMy43NXoiLz48cGF0aCBkPSJNNzQuMjggODUuMDd2LjAyYy0uMDEgNi4xNi01IDExLjE2LTExLjE3IDExLjE2aC0uMDRhOS45MSA5LjkxIDAgMCAxLS43Ny0uMDNjLTUuODYtLjQtMTAuNC01LjI4LTEwLjQtMTEuMTV2LTcuMjJIMTQuNXYtLjFsLjQtNTguNjVoNDEuNjVjLTEuOCA2LjAzLS44NiAxMi41NCAyLjU1IDE3LjgyczguOTYgOC44IDE1LjIgOS42NnYzOC40OHoiLz48cGF0aCBkPSJNNjIuMyA5Ni4yM3YuMDNIMTIuNWMtNi4xNiAwLTExLjE2LTUtMTEuMTctMTEuMTZ2LTcuMjVoNTAuNnY3LjIyYTExLjE5IDExLjE5IDAgMCAwIDEwLjQgMTEuMTZ6bTE0Ljc4LTcyLjZhMy42NCAzLjY0IDAgMCAxLTMuNjQtMy41NGMtLjA1LTEuOTcgMS40OC0zLjYzIDMuNDUtMy43M2guMDRjLjA2IDAgLjEyIDAgLjE4LS4wMWEzLjY0IDMuNjQgMCAwIDEgMy42MSAzLjY0IDEuNjMgMS42MyAwIDEgMCAzLjI2IDAgNi45IDYuOSAwIDAgMC01LjQzLTYuNzR2LTEuNTdhMS42MyAxLjYzIDAgMCAwLTMuMjYgMHYxLjY0Yy0zLjM1LjktNS41IDQuMTMtNS4wNiA3LjU3czMuMzggNiA2Ljg1IDZhMy42NCAzLjY0IDAgMSAxLTMuNjQgMy42NCAxLjYzIDEuNjMgMCAwIDAtMy4yNiAwIDYuOTEgNi45MSAwIDAgMCA1LjEyIDYuNjdWMzlhMS42MyAxLjYzIDAgMSAwIDMuMjYgMHYtMS43YTYuOTEgNi45MSAwIDAgMCA1LjM5LTcuNDljLS40LTMuNTItMy4zNS02LjE3LTYuODctNi4xN3oiLz48L2c+PGNpcmNsZSBjeD0iMjUuMzMiIGN5PSI0OC4zNSIgcj0iMy4wOCIvPjxwYXRoIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTU5Ljg4IDUxLjQ0aC0yOGExLjQzIDEuNDMgMCAwIDEtMS40My0xLjQzdi0zLjNhMS40MyAxLjQzIDAgMCAxIDEuNDMtMS40M2gyNy45OGExLjQzIDEuNDMgMCAwIDEgMS40MyAxLjQzdjMuMzJjMCAuNzgtLjY0IDEuNDItMS40MiAxLjQyeiIvPjxjaXJjbGUgY3g9IjI1LjMzIiBjeT0iNTguNjMiIHI9IjMuMDgiLz48cGF0aCBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik01OS44OCA2MS43MmgtMjhhMS40MyAxLjQzIDAgMCAxLTEuNDMtMS40M3YtMy4zMmExLjQzIDEuNDMgMCAwIDEgMS40My0xLjQzaDI3Ljk4YTEuNDMgMS40MyAwIDAgMSAxLjQzIDEuNDN2My4zMmMwIC44LS42NCAxLjQzLTEuNDIgMS40M3oiLz48Y2lyY2xlIGN4PSIyNS4zMyIgY3k9IjY4LjkxIiByPSIzLjA4Ii8+PHBhdGggc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNNTkuODggNzJoLTI4YTEuNDMgMS40MyAwIDAgMS0xLjQzLTEuNDN2LTMuMzJhMS40MyAxLjQzIDAgMCAxIDEuNDMtMS40M2gyNy45OGExLjQzIDEuNDMgMCAwIDEgMS40MyAxLjQzdjMuMzJhMS40MiAxLjQyIDAgMCAxLTEuNDIgMS40M3oiLz48L3N2Zz4=';
    },
    'le+n': function(e, t) {
      e.exports =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiBzdHJva2U9IiMwZjQ2Y2EiPjxnIHN0cm9rZS13aWR0aD0iMiI+PGcgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48cGF0aCBkPSJNODguMiA3NS40N2g5Ljkydi0xOC41TDgzLjI2IDMzLjRINjUuMDh2NDIuMDhoNi42Ii8+PHBhdGggZD0iTTE1LjUyIDc1LjQ3SDIuM1YyMS42aDYyLjc4djUzLjg2SDMyLjA0bTU5LjQ4LTguNGg2LjZ2My4zN2gtNi42eiIvPjwvZz48ZWxsaXBzZSBjeD0iMjMuNzgiIGN5PSI3NS40NyIgcng9IjguMjYiIHJ5PSI4LjQyIi8+PGVsbGlwc2UgY3g9Ijc5Ljk1IiBjeT0iNzUuNDciIHJ4PSI4LjI2IiByeT0iOC40MiIvPjwvZz48ZyBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiPjxwYXRoIGQ9Ik0yMi4xMyA3My44aDMuM3YzLjM3aC0zLjN6bTU2LjE3IDBoMy4zdjMuMzdoLTMuM3oiLz48cGF0aCBkPSJNODcuOTIgNDAuMTJINzEuMDh2MTUuMTVoMjUuNjRNMjIuMTMgNzMuOGgzLjN2My4zN2gtMy4zem01Ni4xNyAwaDMuM3YzLjM3aC0zLjN6TTYuNzcgMjcuOTZINjQuOU00Mi4yNiA2OS4xSDY0LjltLTYzLjAzIDBoNy4zNW0tNi43Mi01M2g0LjI4bTMuNjYgMGgyNS43IiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+';
    },
    lxLN: function(e, t, n) {
      function a(e) {
        (this.options = e), !e.deferSetup && this.setup();
      }
      n('NlgC'),
        (a.prototype = {
          constructor: a,
          setup: function() {
            this.options.setup && this.options.setup(), (this.initialised = !0);
          },
          on: function() {
            !this.initialised && this.setup(),
              this.options.match && this.options.match();
          },
          off: function() {
            this.options.unmatch && this.options.unmatch();
          },
          destroy: function() {
            this.options.destroy ? this.options.destroy() : this.off();
          },
          equals: function(e) {
            return this.options === e || this.options.match === e;
          },
        }),
        (e.exports = a);
    },
    nQ36: function(e) {
      e.exports = JSON.parse(
        '{"data":{"hostingJson":{"MONTHLY_PRICING_TABLE":[{"name":"Basic Account","price":"$0","priceLabel":"Only for first month","description":"For Small teams or group who need to build website ","freePlan":true,"buttonLabel":"CREATE FREE ACCOUNT","url":"#","listItems":[{"content":"Drag & Drop Builder"},{"content":"1,000s of Templates Ready"},{"content":"Blog Tools"},{"content":"eCommerce Store "},{"content":"30+ Webmaster Tools"}]},{"name":"Business Account","price":"$9.87","priceLabel":"Per month & subscription yearly","description":"For Mediums teams or group who need to build website ","freePlan":null,"buttonLabel":"START FREE TRIAL","url":"#","listItems":[{"content":"Drag & Drop Builder"},{"content":"1,000s of Templates Ready"},{"content":"Blog Tools"},{"content":"eCommerce Store "},{"content":"30+ Webmaster Tools"}]},{"name":"Premium Account","price":"$12.98","priceLabel":"Per month & subscription yearly","description":"For Large teams or group who need to build website ","freePlan":null,"buttonLabel":"START FREE TRIAL","url":"#","listItems":[{"content":"Drag & Drop Builder"},{"content":"1,000s of Templates Ready"},{"content":"Blog Tools"},{"content":"eCommerce Store "},{"content":"30+ Webmaster Tools"}]}],"YEARLY_PRICING_TABLE":[{"name":"Basic Account","price":"$0","priceLabel":"Only for first month","description":"For a single client or team who need to build website ","freePlan":true,"buttonLabel":"CREATE FREE ACCOUNT","url":"#","listItems":[{"content":"Drag & Drop Builder"},{"content":"1,000s of Templates Ready"},{"content":"Blog Tools"},{"content":"eCommerce Store "},{"content":"30+ Webmaster Tools"}]},{"name":"Business Account","price":"$6.00","priceLabel":"Per month & subscription yearly","description":"For Small teams or group who need to build website ","freePlan":null,"buttonLabel":"START FREE TRIAL","url":"#","listItems":[{"content":"Unlimited secure storage"},{"content":"2,000s of Templates Ready"},{"content":"Blog Tools"},{"content":"24/7 phone support"},{"content":"50+ Webmaster Tools"}]},{"name":"Premium Account","price":"$9.99","priceLabel":"Per month & subscription yearly","description":"For Large teams or group who need to build website ","freePlan":null,"buttonLabel":"START FREE TRIAL","url":"#","listItems":[{"content":"Drag & Drop Builder"},{"content":"3,000s of Templates Ready"},{"content":"Advanced branding"},{"content":"Knowledge base support"},{"content":"80+ Webmaster Tools"}]}]}}}'
      );
    },
    nSii: function(e, t, n) {
      e.exports =
        n.p + 'static/sliderimage5-7224c106a84f97014647e01e9037dccb.jpg';
    },
    oNKU: function(e, t, n) {
      'use strict';
      n('PN9k');
      var a = n('Vd+E'),
        i = n('ERkP'),
        r = n.n(i),
        o = (n('6c1n'), n('MFEH'), n('dWle')),
        c = (n('Eakc'), n('PPo7')),
        s = (n('xqb7'), n('kQsd')),
        l = (n('mAVQ'), n('Wbzz'), n('Kt4n')),
        u = n.n(l),
        d = function(e) {
          var t = e.sectionWrapper,
            n = e.row,
            i = (e.col, e.title),
            l = (e.description, e.button, e.textArea, e.imageArea);
          a.data;
          return r.a.createElement(
            o.a,
            Object.assign({}, t, { className: 'Contactmap_section' }),
            r.a.createElement(
              c.a,
              Object.assign({}, i, { content: '10+ Branches Across The World' })
            ),
            r.a.createElement(
              s.a,
              { className: 'Contactmap_container1' },
              r.a.createElement(
                o.a,
                Object.assign({}, n, { className: 'ContactMap_container_row' }),
                r.a.createElement(
                  o.a,
                  Object.assign({}, l, {
                    className: 'ContactMap_container_single',
                  }),
                  r.a.createElement('img', { src: u.a, alt: 'contact map' })
                ),
                r.a.createElement(
                  o.a,
                  { className: 'contact_location_list' },
                  r.a.createElement(
                    'ul',
                    null,
                    r.a.createElement('li', null, 'USA'),
                    r.a.createElement('li', null, 'Canada'),
                    r.a.createElement('li', null, 'Argentina'),
                    r.a.createElement('li', null, 'Colombia'),
                    r.a.createElement('li', null, 'Australia'),
                    r.a.createElement('li', null, 'India'),
                    r.a.createElement('li', null, 'UK'),
                    r.a.createElement('li', null, 'UAE'),
                    r.a.createElement('li', null, 'Italy'),
                    r.a.createElement('li', null, 'Brazil'),
                    r.a.createElement('li', null, 'Singapore')
                  )
                ),
                r.a.createElement('div', { className: 'empty_space30' })
              )
            )
          );
        };
      (d.defaultProps = {
        sectionWrapper: {
          as: 'section',
          pt: ['20px', '20px', '20px', '25px'],
          pb: ['25px', '25px', '25px', '30px'],
        },
        row: {
          flexBox: !0,
          flexWrap: 'wrap',
          ml: '-15px',
          mr: '-15px',
          alignItems: 'center',
        },
        imageAreaRow: { flexDirection: 'row-reverse' },
        col: { pr: '15px', pl: '15px' },
        textArea: { width: ['100%', '100%', '100%', '42%', '42%'] },
        imageArea: {
          width: ['100%', '100%', '100%', '58%', '58%'],
          mb: ['10px', '10px', '10px', '0', '0'],
        },
        title: {
          fontSize: ['30px', '30px', '35px', '40px', '45px'],
          mb: '25px',
          textAlign: 'center',
        },
        description: {
          fontSize: '16px',
          color: '#343d48cc',
          lineHeight: '1.75',
          mb: '33px',
        },
        button: {
          type: 'button',
          fontSize: '14px',
          fontWeight: '600',
          color: '#fff',
          borderRadius: '4px',
          pl: '22px',
          pr: '22px',
          colors: 'primaryWithBg',
        },
      }),
        (t.a = d);
    },
    okFy: function(e, t, n) {
      'use strict';
      n('PN9k');
      var a = n('ERkP'),
        i = n.n(a),
        r = n('MFEH'),
        o = n.n(r),
        c = n('dWle'),
        s = n('Eakc'),
        l = n('PPo7'),
        u = (n('k/KV'), n('kQsd')),
        d = n('iN3x'),
        p = n.n(d),
        g = n('thcP'),
        f = n.n(g),
        A =
          (n('MGQc'),
          function(e) {
            var t = e.sectionWrapper,
              n = e.row,
              a = e.col,
              r = e.secTitleWrapper,
              d = e.secHeading,
              g = e.secText;
            e.featureItemHeading,
              e.featureItemImage,
              e.featureItemDes,
              e.featureBlockStyle,
              e.iconStyle,
              e.contentStyle,
              e.props;
            return i.a.createElement(
              c.a,
              t,
              i.a.createElement(
                u.a,
                null,
                i.a.createElement(
                  i.a.Fragment,
                  null,
                  i.a.createElement(
                    c.a,
                    r,
                    i.a.createElement(
                      o.a,
                      { bottom: !0, cascade: !0 },
                      i.a.createElement(
                        s.a,
                        Object.assign({}, g, { content: 'Our Story So Far' })
                      ),
                      i.a.createElement(
                        l.a,
                        Object.assign({}, d, {
                          content:
                            'Here are a few numbers that illustrate the scale of Cnetric’s experience and clientele.',
                        })
                      )
                    )
                  ),
                  i.a.createElement(
                    c.a,
                    Object.assign({}, n, { className: 'cols' }),
                    i.a.createElement(
                      c.a,
                      a,
                      i.a.createElement(
                        c.a,
                        { className: 'stats_box' },
                        i.a.createElement(
                          c.a,
                          null,
                          i.a.createElement(
                            'span',
                            null,
                            i.a.createElement(
                              p.a,
                              {
                                end: 100,
                                duration: 2,
                                redraw: !0,
                                preserveValue: !0,
                              },
                              function(e) {
                                var t = e.countUpRef,
                                  n = e.start;
                                return i.a.createElement(
                                  f.a,
                                  { onChange: n, delayedCall: !0, once: !0 },
                                  i.a.createElement('span', { ref: t })
                                );
                              }
                            ),
                            '+'
                          ),
                          i.a.createElement(s.a, { content: 'Clients' })
                        )
                      )
                    ),
                    i.a.createElement(
                      c.a,
                      a,
                      i.a.createElement(
                        c.a,
                        { className: 'stats_box' },
                        i.a.createElement(
                          c.a,
                          null,
                          i.a.createElement(
                            'span',
                            null,
                            i.a.createElement(
                              p.a,
                              { end: 16, duration: 2, redraw: !0 },
                              function(e) {
                                var t = e.countUpRef,
                                  n = e.start;
                                return i.a.createElement(
                                  f.a,
                                  { onChange: n, delayedCall: !0 },
                                  i.a.createElement('span', { ref: t })
                                );
                              }
                            ),
                            '+'
                          ),
                          i.a.createElement(s.a, {
                            content: 'years of experience',
                          })
                        )
                      )
                    ),
                    i.a.createElement(
                      c.a,
                      a,
                      i.a.createElement(
                        c.a,
                        { className: 'stats_box' },
                        i.a.createElement(
                          c.a,
                          null,
                          i.a.createElement(
                            'span',
                            null,
                            i.a.createElement(
                              p.a,
                              { end: 150, duration: 2, redraw: !0 },
                              function(e) {
                                var t = e.countUpRef,
                                  n = e.start;
                                return i.a.createElement(
                                  f.a,
                                  { onChange: n, delayedCall: !0 },
                                  i.a.createElement('span', { ref: t })
                                );
                              }
                            ),
                            '+'
                          ),
                          i.a.createElement(s.a, { content: 'projects' })
                        )
                      )
                    )
                  ),
                  i.a.createElement(c.a, { className: 'empty_space40' })
                )
              )
            );
          });
      (A.defaultProps = {
        sectionWrapper: {
          as: 'section',
          id: 'stats_section',
          className: 'circles dark',
          pt: ['20px', '20px', '30px', '40px'],
        },
        secTitleWrapper: { mb: ['20px', '20px', '30px', '35px'] },
        secText: {
          as: 'span',
          display: 'block',
          textAlign: 'center',
          fontSize: ['30px', '30px', '35px', '40px', '45px'],
          fontWeight: '300',
          color: '#fff',
          mb: '25px',
          pt: '25px',
        },
        secHeading: {
          fontSize: ['18px', '18px', '20px', '22px', '24px'],
          fontWeight: '300',
          textAlign: 'center',
          color: '#fff',
          mb: '25px',
          pt: '25px',
        },
        row: { flexBox: !0, flexWrap: 'wrap' },
        col: {
          width: [1, 1, 0.25, 0.25],
          className: 'stats_col',
          bg: '#fff',
          margin: '1%',
        },
        featureBlockStyle: { p: '20px 20px', className: 'service_item' },
        iconStyle: {
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          mb: '10px',
        },
        contentStyle: { textAlign: 'center' },
        featureItemHeading: {
          fontSize: ['16px', '18px'],
          fontWeight: '400',
          color: '#0f2137',
          lineHeight: '1.5',
          mb: '20px',
          letterSpacing: '-0.020em',
        },
        featureItemImage: {
          width: '120px !important',
          height: '120px !important',
        },
        featureItemDes: {
          fontSize: '15px',
          lineHeight: '1.84',
          color: '#343d48cc',
          mb: '10px',
        },
      }),
        (t.a = A);
    },
    pXmH: function(e, t) {
      e.exports =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMwZjQ2Y2EiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48cGF0aCBkPSJNMTcuOTYgMjUuNUg5OC4zdjQ5LjI0SDE3Ljk2eiIvPjxwYXRoIGQ9Ik0xNy45IDc0LjMzYTguMDkgOC4wOSAwIDEgMC0xNi4xOCAwVjI1LjY3YTguMDkgOC4wOSAwIDEgMSAxNi4xOCAwdjQ4LjY2eiIvPjxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTEuNyA3NC4zM2E4LjA5IDguMDkgMCAwIDAgOC4wOSA4LjA5bC4zLS4wMUg2NnYtNy42NyIvPjxwYXRoIGQ9Ik0yMi45IDMzLjQ2aDIzLjg4djYuMDZIMjIuOXptMjguNzIgMGg5LjQydjYuMDZoLTkuNDJ6bTE0LjM2IDBoNi43djYuMDZoLTYuN3oiLz48cGF0aCBkPSJNNzYuOTggMzkuNTNoMTYuMDVNMjIuMTUgNDguMmg3MC44OG0tNzAuODggOC43M2g3MC44OE0zNi41IDY3LjEzaDM2LjU2bTYuMDcgMGgxMy45IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L2c+PHBhdGggZmlsbD0iIzBmNDZjYSIgZD0iTTMwLjI2IDYyLjM1di41NmMuMzcuMDQuNy4xLjk1LjIzLjI3LjEuNS4zLjcuNTJhMiAyIDAgMCAxIC4zNi41NWMuMDguMi4xMy4zNi4xMy41IDAgLjE3LS4wNi4zMi0uMi40NWEuNjIuNjIgMCAwIDEtLjQ2LjE5Yy0uMzQgMC0uNTYtLjE4LS42Ni0uNTUtLjEtLjQzLS40LS43Mi0uODMtLjg2djIuMTZsMS4wMy4zMmMuMjUuMS40OC4yNC42OC40MmExLjk3IDEuOTcgMCAwIDEgLjUuNjhjLjEyLjI2LjE3LjU1LjE3Ljg3IDAgLjQtLjEuNzYtLjI4IDEuMWEyLjIgMi4yIDAgMCAxLS44Mi44NGMtLjM2LjIyLS44LjM1LTEuMjguNHYxLjNjMCAuMi0uMDIuMzUtLjA2LjQ1LS4wNC4xLS4xMy4xNC0uMjYuMTQtLjEyIDAtLjItLjA0LS4yNi0uMS0uMDUtLjA4LS4wOC0uMi0uMDgtLjM1di0xLjRjLS40LS4wNC0uNzYtLjE0LTEuMDYtLjNzLS41Ni0uMzMtLjc2LS41NGMtLjItLjIyLS4zNS0uNDQtLjQ1LS42OGExLjcyIDEuNzIgMCAwIDEtLjE1LS42OWMwLS4xNy4wNy0uMzIuMi0uNDUuMTMtLjEzLjMtLjIuNS0uMi4xNiAwIC4zLjA0LjQuMWEuNTEuNTEgMCAwIDEgLjIyLjMxbC4yNC42NWMuMDcuMTUuMTcuMy4zLjRzLjMzLjIyLjU2LjN2LTIuNDJjLS40Ni0uMTMtLjg1LS4yNy0xLjE2LS40M2EyLjA0IDIuMDQgMCAwIDEtLjc2LS42N2MtLjItLjMtLjMtLjY2LS4zLTEuMTIgMC0uNi4yLTEuMDguNTctMS40NnMuOTMtLjYgMS42NC0uNjZ2LS41NWMwLS4zLjEtLjQ0LjMzLS40NC4yNSAwIC4zNi4xNC4zNi40MnptLS42NiAzLjU3di0yYy0uMy4xLS41Mi4yLS42OC4zNHMtLjI0LjM2LS4yNC42NGMwIC4yNy4wOC40OC4yMy42MnMuMzguMjcuNy40em0uNjYgMS41NHYyLjI4Yy4zNS0uMDcuNjItLjIuOC0uNDJzLjMtLjQ2LjMtLjc0YzAtLjMtLjEtLjUzLS4yOC0uNy0uMTgtLjE3LS40Ni0uMy0uODItLjQyeiIvPjwvc3ZnPg==';
    },
    pd3y: function(e, t) {
      e.exports =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iODEuODMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBmNDZjYSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiPjxwYXRoIGQ9Ik00LjU2IDIuMWgzOC43djc3LjZINC41NmMtMS44NiAwLTMuMzYtMS41LTMuMzYtMy4zNVY1LjQ4YzAtMS44NiAxLjUtMy4zOCAzLjM2LTMuMzh6TTk4LjggNS40OHY3MC44N2MtLjAxIDEuODYtMS41IDMuMzctMy4zNyAzLjM3aC0zOC43VjIuMWgzOC43YzEuODYgMCAzLjM2IDEuNSAzLjM3IDMuMzd6Ii8+PHBhdGggZD0iTTUzLjM3IDIuMWgtMTAuMXY3Ny42aDEzLjQ2VjIuMXoiLz48cGF0aCBkPSJNNTYuNzMgMi4xdjYuNzVsLTEzLjQ2IDEzLjVWMTIuMjNMNTMuMzcgMi4xem0wIDE2Ljg4VjI5LjFMNDMuMjcgNDIuNlYzMi40OHptMCAyMC4yNXYxMC4xMmwtMTMuNDYgMTMuNVY1Mi43MnptMCAyMC4yNFY2OS42bC0xMC4xIDEwLjEyaC0zLjM2di02Ljc1ek0zOC4yIDQxLjE3Yy4wMS0uMDguMDEtLjE3LjAxLS4yNSAwLS4wNy4wMS0uMTMgMC0uMi0uMDEtLjA4LS4wNC0uMTctLjA2LS4yNS0uMDItLjA2LS4wMy0uMTMtLjA1LS4yIDAtLjAxIDAtLjAyLS4wMS0uMDMtLjAzLS4wOC0uMS0uMTUtLjEzLS4yMi0uMDMtLjA0LS4wNC0uMS0uMDctLjEzbC01LjA1LTYuNzVhMS42OSAxLjY5IDAgMCAwLTEuNTUtLjY2Yy0uNi4wNy0xLjEuNDYtMS4zNSAxcy0uMTYgMS4yLjIgMS42N2wzLjAzIDQuMDVIOS42Yy0uOTMgMC0xLjY4Ljc2LTEuNjggMS43cy43NSAxLjcgMS42OCAxLjdoMjMuNTZsLTMuMDMgNC4wNWExLjcxIDEuNzEgMCAwIDAtLjE2IDEuNzcgMS42OCAxLjY4IDAgMCAwIDEuNS45MyAxLjcgMS43IDAgMCAwIDEuMzUtLjY3bDUuMDUtNi43NWMuMDMtLjA0LjA1LS4xLjA4LS4xNC4wMi0uMDQuMDYtLjA3LjA4LS4xMi4wMS0uMDIuMDEtLjA0LjAyLS4wNy4wNC0uMDguMDYtLjE2LjA4LS4yNGwuMDUtLjJ6bTUyLjItMS45NEg2Ni44M2wzLjAzLTQuMDVhMS42ODYgMS42ODYgMCAwIDAtMi43LTIuMDJMNjIuMSAzOS45Yy0uMDEuMDItLjAyLjA0LS4wMy4wNWExLjUyIDEuNTIgMCAwIDAtLjE3LjNjLS4wMS4wMi0uMDIuMDQtLjAzLjA3LS4wNS4xMy0uMDguMjYtLjEuNHYuMWMtLjAxLjEgMCAuMjIuMDIuMzMuMDEuMDMuMDEuMDcuMDIuMWExLjg3IDEuODcgMCAwIDAgLjEzLjRjLjAyLjAzLjAzLjA0LjA0LjA2bC4xMy4yIDUuMDUgNi43NWMuMzIuNDMuODIuNjggMS4zNS42Ny42NCAwIDEuMjItLjM2IDEuNS0uOTNzLjIyLTEuMjUtLjE2LTEuNzdsLTMuMDMtNC4wNUg5MC40Yy45MyAwIDEuNjgtLjc2IDEuNjgtMS43LS4wMS0uOTQtLjc2LTEuNy0xLjctMS43eiIvPjwvc3ZnPg==';
    },
    qha7: function(e, t) {
      e.exports =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjZmZmIiBzdHJva2U9IiMwZjQ2Y2EiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48cGF0aCBkPSJNNzMuODggMTUuNjhoMTEuMDR2MTkuMjdINzMuODh6Ii8+PHBhdGggZD0iTTY5LjY3IDUuODVoMTkuNDdWMTYuM0g2OS42N3pNMTAuMjYgNTMuOHY0NC4zNWg3OC42N1Y1My44TDQ5LjYgMTQuNDggMTAuMjYgNTMuOHoiLz48cGF0aCBkPSJNNDIuNTcgOTguMTdIMTguOVY3NC45YzAtNi42MiA1LjQyLTExLjg0IDExLjg0LTExLjg0aDBjNi42MiAwIDExLjg0IDUuNDIgMTEuODQgMTEuODR2MjMuMjh6bTEwLjIzLTMxLjloMTAuNjR2MjAuNjdINTIuOHptMTMuODYgMEg3Ny4zdjIwLjY3SDY2LjY2em0yOS43LTIwLjY4TDU0LjQyIDMuNjRjLTIuNC0yLjQtNi42Mi0yLjQtOS4wMyAwTDMuNjQgNDUuNThjLTIuNCAyLjQtMi40IDYuNjIgMCA5LjAzczYuNjIgMi40IDkuMDMgMEw1MCAxNy4zbDM3LjMzIDM3LjMzYzIuNCAyLjQgNi42MiAyLjQgOS4wMyAwIDIuNC0yLjYgMi40LTYuNjMgMC05LjA0eiIvPjwvc3ZnPg==';
    },
    qnec: function(e, t, n) {
      'use strict';
      var a;
      n('UQCJ'),
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var i = ((a = n('7Ub4')) && a.__esModule ? a : { default: a }).default;
      t.default = i;
    },
    qrWy: function(e, t, n) {
      var a = n('+nJi');
      e.exports = new a();
    },
    rqkr: function(e, t, n) {
      e.exports =
        n.p + 'static/sliderimage3-d2455f6a168aa50a88c4de0f8ac616db.jpg';
    },
    thcP: function(e, t, n) {
      var a;
      n('yIC7'),
        n('cM8k'),
        n('Fup4'),
        n('RwQI'),
        n('XjK0'),
        n('SCO9'),
        n('UQCJ'),
        (a = function(e, t) {
          return (function(e) {
            var t = {};
            function n(a) {
              if (t[a]) return t[a].exports;
              var i = (t[a] = { i: a, l: !1, exports: {} });
              return (
                e[a].call(i.exports, i, i.exports, n), (i.l = !0), i.exports
              );
            }
            return (
              (n.m = e),
              (n.c = t),
              (n.d = function(e, t, a) {
                n.o(e, t) ||
                  Object.defineProperty(e, t, { enumerable: !0, get: a });
              }),
              (n.r = function(e) {
                'undefined' != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(e, Symbol.toStringTag, {
                    value: 'Module',
                  }),
                  Object.defineProperty(e, '__esModule', { value: !0 });
              }),
              (n.t = function(e, t) {
                if ((1 & t && (e = n(e)), 8 & t)) return e;
                if (4 & t && 'object' == typeof e && e && e.__esModule)
                  return e;
                var a = Object.create(null);
                if (
                  (n.r(a),
                  Object.defineProperty(a, 'default', {
                    enumerable: !0,
                    value: e,
                  }),
                  2 & t && 'string' != typeof e)
                )
                  for (var i in e)
                    n.d(
                      a,
                      i,
                      function(t) {
                        return e[t];
                      }.bind(null, i)
                    );
                return a;
              }),
              (n.n = function(e) {
                var t =
                  e && e.__esModule
                    ? function() {
                        return e.default;
                      }
                    : function() {
                        return e;
                      };
                return n.d(t, 'a', t), t;
              }),
              (n.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
              }),
              (n.p = ''),
              n((n.s = 4))
            );
          })([
            function(e, t, n) {
              e.exports = n(5)();
            },
            function(t, n) {
              t.exports = e;
            },
            function(e, n) {
              e.exports = t;
            },
            function(e, t) {
              e.exports = function(e, t, n) {
                var a = e.direction,
                  i = e.value;
                switch (a) {
                  case 'top':
                    return (
                      n.top + i < t.top &&
                      n.bottom > t.bottom &&
                      n.left < t.left &&
                      n.right > t.right
                    );
                  case 'left':
                    return (
                      n.left + i < t.left &&
                      n.bottom > t.bottom &&
                      n.top < t.top &&
                      n.right > t.right
                    );
                  case 'bottom':
                    return (
                      n.bottom - i > t.bottom &&
                      n.left < t.left &&
                      n.right > t.right &&
                      n.top < t.top
                    );
                  case 'right':
                    return (
                      n.right - i > t.right &&
                      n.left < t.left &&
                      n.top < t.top &&
                      n.bottom > t.bottom
                    );
                }
              };
            },
            function(e, t, n) {
              'use strict';
              n.r(t),
                n.d(t, 'default', function() {
                  return M;
                });
              var a = n(1),
                i = n.n(a),
                r = n(2),
                o = n.n(r),
                c = n(0),
                s = n.n(c),
                l = n(3),
                u = n.n(l);
              function d(e) {
                return (d =
                  'function' == typeof Symbol &&
                  'symbol' == typeof Symbol.iterator
                    ? function(e) {
                        return typeof e;
                      }
                    : function(e) {
                        return e &&
                          'function' == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? 'symbol'
                          : typeof e;
                      })(e);
              }
              function p(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var a = t[n];
                  (a.enumerable = a.enumerable || !1),
                    (a.configurable = !0),
                    'value' in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a);
                }
              }
              function g(e) {
                return (g = Object.setPrototypeOf
                  ? Object.getPrototypeOf
                  : function(e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                    })(e);
              }
              function f(e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              }
              function A(e, t) {
                return (A =
                  Object.setPrototypeOf ||
                  function(e, t) {
                    return (e.__proto__ = t), e;
                  })(e, t);
              }
              function m(e, t, n) {
                return (
                  t in e
                    ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = n),
                  e
                );
              }
              var M = (function(e) {
                function t(e) {
                  var n;
                  return (
                    (function(e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          'Cannot call a class as a function'
                        );
                    })(this, t),
                    (n = (function(e, t) {
                      return !t || ('object' !== d(t) && 'function' != typeof t)
                        ? f(e)
                        : t;
                    })(this, g(t).call(this, e))),
                    m(f(n), 'getContainer', function() {
                      return n.props.containment || window;
                    }),
                    m(f(n), 'addEventListener', function(e, t, a, i) {
                      var r;
                      n.debounceCheck || (n.debounceCheck = {});
                      var o = function() {
                          (r = null), n.check();
                        },
                        c = {
                          target: e,
                          fn:
                            i > -1
                              ? function() {
                                  r || (r = setTimeout(o, i || 0));
                                }
                              : function() {
                                  clearTimeout(r), (r = setTimeout(o, a || 0));
                                },
                          getLastTimeout: function() {
                            return r;
                          },
                        };
                      e.addEventListener(t, c.fn), (n.debounceCheck[t] = c);
                    }),
                    m(f(n), 'startWatching', function() {
                      n.debounceCheck ||
                        n.interval ||
                        (n.props.intervalCheck &&
                          (n.interval = setInterval(
                            n.check,
                            n.props.intervalDelay
                          )),
                        n.props.scrollCheck &&
                          n.addEventListener(
                            n.getContainer(),
                            'scroll',
                            n.props.scrollDelay,
                            n.props.scrollThrottle
                          ),
                        n.props.resizeCheck &&
                          n.addEventListener(
                            window,
                            'resize',
                            n.props.resizeDelay,
                            n.props.resizeThrottle
                          ),
                        !n.props.delayedCall && n.check());
                    }),
                    m(f(n), 'stopWatching', function() {
                      if (n.debounceCheck)
                        for (var e in n.debounceCheck)
                          if (n.debounceCheck.hasOwnProperty(e)) {
                            var t = n.debounceCheck[e];
                            clearTimeout(t.getLastTimeout()),
                              t.target.removeEventListener(e, t.fn),
                              (n.debounceCheck[e] = null);
                          }
                      (n.debounceCheck = null),
                        n.interval && (n.interval = clearInterval(n.interval));
                    }),
                    m(f(n), 'check', function() {
                      var e,
                        t,
                        a = n.node;
                      if (!a) return n.state;
                      if (
                        ((e = (function(e) {
                          return (
                            void 0 === e.width && (e.width = e.right - e.left),
                            void 0 === e.height &&
                              (e.height = e.bottom - e.top),
                            e
                          );
                        })(n.roundRectDown(a.getBoundingClientRect()))),
                        n.props.containment)
                      ) {
                        var i = n.props.containment.getBoundingClientRect();
                        t = {
                          top: i.top,
                          left: i.left,
                          bottom: i.bottom,
                          right: i.right,
                        };
                      } else t = { top: 0, left: 0, bottom: window.innerHeight || document.documentElement.clientHeight, right: window.innerWidth || document.documentElement.clientWidth };
                      var r = n.props.offset || {};
                      'object' === d(r) &&
                        ((t.top += r.top || 0),
                        (t.left += r.left || 0),
                        (t.bottom -= r.bottom || 0),
                        (t.right -= r.right || 0));
                      var o = {
                          top: e.top >= t.top,
                          left: e.left >= t.left,
                          bottom: e.bottom <= t.bottom,
                          right: e.right <= t.right,
                        },
                        c = e.height > 0 && e.width > 0,
                        s = c && o.top && o.left && o.bottom && o.right;
                      if (c && n.props.partialVisibility) {
                        var l =
                          e.top <= t.bottom &&
                          e.bottom >= t.top &&
                          e.left <= t.right &&
                          e.right >= t.left;
                        'string' == typeof n.props.partialVisibility &&
                          (l = o[n.props.partialVisibility]),
                          (s = n.props.minTopValue
                            ? l && e.top <= t.bottom - n.props.minTopValue
                            : l);
                      }
                      'string' == typeof r.direction &&
                        'number' == typeof r.value &&
                        (console.warn(
                          '[notice] offset.direction and offset.value have been deprecated. They still work for now, but will be removed in next major version. Please upgrade to the new syntax: { %s: %d }',
                          r.direction,
                          r.value
                        ),
                        (s = u()(r, e, t)));
                      var p = n.state;
                      return (
                        n.state.isVisible !== s &&
                          ((p = { isVisible: s, visibilityRect: o }),
                          n.setState(p),
                          n.props.onChange && n.props.onChange(s)),
                        p
                      );
                    }),
                    (n.state = { isVisible: null, visibilityRect: {} }),
                    n
                  );
                }
                var n, a, r;
                return (
                  (function(e, t) {
                    if ('function' != typeof t && null !== t)
                      throw new TypeError(
                        'Super expression must either be null or a function'
                      );
                    (e.prototype = Object.create(t && t.prototype, {
                      constructor: { value: e, writable: !0, configurable: !0 },
                    })),
                      t && A(e, t);
                  })(t, e),
                  (n = t),
                  (a = [
                    {
                      key: 'componentDidMount',
                      value: function() {
                        (this.node = o.a.findDOMNode(this)),
                          this.props.active && this.startWatching();
                      },
                    },
                    {
                      key: 'componentWillUnmount',
                      value: function() {
                        this.stopWatching();
                      },
                    },
                    {
                      key: 'componentDidUpdate',
                      value: function(e) {
                        (this.node = o.a.findDOMNode(this)),
                          this.props.active && !e.active
                            ? (this.setState({
                                isVisible: null,
                                visibilityRect: {},
                              }),
                              this.startWatching())
                            : this.props.active || this.stopWatching();
                      },
                    },
                    {
                      key: 'roundRectDown',
                      value: function(e) {
                        return {
                          top: Math.floor(e.top),
                          left: Math.floor(e.left),
                          bottom: Math.floor(e.bottom),
                          right: Math.floor(e.right),
                        };
                      },
                    },
                    {
                      key: 'render',
                      value: function() {
                        return this.props.children instanceof Function
                          ? this.props.children({
                              isVisible: this.state.isVisible,
                              visibilityRect: this.state.visibilityRect,
                            })
                          : i.a.Children.only(this.props.children);
                      },
                    },
                  ]) && p(n.prototype, a),
                  r && p(n, r),
                  t
                );
              })(i.a.Component);
              m(M, 'defaultProps', {
                active: !0,
                partialVisibility: !1,
                minTopValue: 0,
                scrollCheck: !1,
                scrollDelay: 250,
                scrollThrottle: -1,
                resizeCheck: !1,
                resizeDelay: 250,
                resizeThrottle: -1,
                intervalCheck: !0,
                intervalDelay: 100,
                delayedCall: !1,
                offset: {},
                containment: null,
                children: i.a.createElement('span', null),
              }),
                m(M, 'propTypes', {
                  onChange: s.a.func,
                  active: s.a.bool,
                  partialVisibility: s.a.oneOfType([
                    s.a.bool,
                    s.a.oneOf(['top', 'right', 'bottom', 'left']),
                  ]),
                  delayedCall: s.a.bool,
                  offset: s.a.oneOfType([
                    s.a.shape({
                      top: s.a.number,
                      left: s.a.number,
                      bottom: s.a.number,
                      right: s.a.number,
                    }),
                    s.a.shape({
                      direction: s.a.oneOf(['top', 'right', 'bottom', 'left']),
                      value: s.a.number,
                    }),
                  ]),
                  scrollCheck: s.a.bool,
                  scrollDelay: s.a.number,
                  scrollThrottle: s.a.number,
                  resizeCheck: s.a.bool,
                  resizeDelay: s.a.number,
                  resizeThrottle: s.a.number,
                  intervalCheck: s.a.bool,
                  intervalDelay: s.a.number,
                  containment:
                    'undefined' != typeof window
                      ? s.a.instanceOf(window.Element)
                      : s.a.any,
                  children: s.a.oneOfType([s.a.element, s.a.func]),
                  minTopValue: s.a.number,
                });
            },
            function(e, t, n) {
              'use strict';
              var a = n(6);
              function i() {}
              function r() {}
              (r.resetWarningCache = i),
                (e.exports = function() {
                  function e(e, t, n, i, r, o) {
                    if (o !== a) {
                      var c = new Error(
                        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
                      );
                      throw ((c.name = 'Invariant Violation'), c);
                    }
                  }
                  function t() {
                    return e;
                  }
                  e.isRequired = e;
                  var n = {
                    array: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: r,
                    resetWarningCache: i,
                  };
                  return (n.PropTypes = n), n;
                });
            },
            function(e, t, n) {
              'use strict';
              e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
            },
          ]);
        }),
        (e.exports = a(n('ERkP'), n('7nmT')));
    },
    uITV: function(e, t, n) {
      'use strict';
      n('PN9k');
      var a = n('ERkP'),
        i = n.n(a),
        r = n('Wbzz'),
        o = (n('MFEH'), n('xqb7')),
        c = n('qnec'),
        s = n.n(c),
        l = n('ccmb'),
        u = n.n(l),
        d =
          (n('4I+i'),
          n('rqkr'),
          n('LpDn'),
          n('nSii'),
          n('dzia'),
          {
            dots: !0,
            speed: 700,
            infinite: !0,
            autoplay: !0,
            autoplaySpeed: 5e3,
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnHover: !1,
            initialSlide: 0,
          });
      t.a = function() {
        return i.a.createElement(
          'div',
          { className: 'slider-section' },
          i.a.createElement(
            s.a,
            Object.assign({}, d, { id: 'sampleTesst' }),
            i.a.createElement(
              'div',
              { className: 'item' },
              i.a.createElement(
                'div',
                { className: 'site-Banner' },
                i.a.createElement('img', {
                  src: u.a,
                  alt: 'slideimage1',
                  className: 'sliderImage',
                }),
                i.a.createElement(
                  'div',
                  { className: 'Banner-details' },
                  i.a.createElement(
                    'div',
                    null,
                    i.a.createElement('h1', null, 'Practical AI that delivers'),
                    i.a.createElement('h1', null, 'Productivity'),
                    i.a.createElement(
                      'p',
                      null,
                      'Automate extraction of structured data from unstructured content'
                    ),
                    i.a.createElement('div', { className: 'slider-bar' }),
                    i.a.createElement(
                      'div',
                      null,
                      i.a.createElement(
                        r.Link,
                        { to: '#' },
                        i.a.createElement(o.a, {
                          className: 'slider_button',
                          title: 'Book A Free Demo',
                        })
                      )
                    )
                  )
                )
              )
            )
          )
        );
      };
    },
    uR1b: function(e, t, n) {
      'use strict';
      n('NlgC'),
        n('Ph8W'),
        n('T7D0'),
        n('Fup4'),
        n('lE7+'),
        n('r0id'),
        n('LnO1'),
        n('3eMz'),
        n('dtAy'),
        n('DB+v'),
        n('Yyzt'),
        n('NCol'),
        n('cM8k'),
        n('RwQI'),
        n('PN9k'),
        n('UQCJ'),
        n('XjK0'),
        n('SCO9');
      var a = {
        type: 'slider',
        startAt: 0,
        perView: 1,
        focusAt: 0,
        gap: 10,
        autoplay: !1,
        hoverpause: !0,
        keyboard: !0,
        bound: !1,
        swipeThreshold: 80,
        dragThreshold: 120,
        perTouch: !1,
        touchRatio: 0.5,
        touchAngle: 45,
        animationDuration: 400,
        rewind: !0,
        rewindDuration: 800,
        animationTimingFunc: 'cubic-bezier(.165, .840, .440, 1)',
        throttle: 10,
        direction: 'ltr',
        peek: 0,
        breakpoints: {},
        classes: {
          direction: { ltr: 'glide--ltr', rtl: 'glide--rtl' },
          slider: 'glide--slider',
          carousel: 'glide--carousel',
          swipeable: 'glide--swipeable',
          dragging: 'glide--dragging',
          cloneSlide: 'glide__slide--clone',
          activeNav: 'glide__bullet--active',
          activeSlide: 'glide__slide--active',
          disabledArrow: 'glide__arrow--disabled',
        },
      };
      function i(e) {
        console.error('[Glide warn]: ' + e);
      }
      var r =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              },
        o = function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        },
        c = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var a = t[n];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                'value' in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a);
            }
          }
          return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t;
          };
        })(),
        s =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          },
        l = function e(t, n, a) {
          null === t && (t = Function.prototype);
          var i = Object.getOwnPropertyDescriptor(t, n);
          if (void 0 === i) {
            var r = Object.getPrototypeOf(t);
            return null === r ? void 0 : e(r, n, a);
          }
          if ('value' in i) return i.value;
          var o = i.get;
          return void 0 !== o ? o.call(a) : void 0;
        },
        u = function(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
        };
      function d(e) {
        return parseInt(e);
      }
      function p(e) {
        return 'string' == typeof e;
      }
      function g(e) {
        var t = void 0 === e ? 'undefined' : r(e);
        return 'function' === t || ('object' === t && !!e);
      }
      function f(e) {
        return 'function' == typeof e;
      }
      function A(e) {
        return void 0 === e;
      }
      function m(e) {
        return e.constructor === Array;
      }
      function M(e, t, n) {
        var a = {};
        for (var r in t)
          f(t[r]) ? (a[r] = t[r](e, a, n)) : i('Extension must be a function');
        for (var o in a) f(a[o].mount) && a[o].mount();
        return a;
      }
      function y(e, t, n) {
        Object.defineProperty(e, t, n);
      }
      function L(e, t) {
        var n = s({}, e, t);
        return (
          t.hasOwnProperty('classes') &&
            ((n.classes = s({}, e.classes, t.classes)),
            t.classes.hasOwnProperty('direction') &&
              (n.classes.direction = s(
                {},
                e.classes.direction,
                t.classes.direction
              ))),
          t.hasOwnProperty('breakpoints') &&
            (n.breakpoints = s({}, e.breakpoints, t.breakpoints)),
          n
        );
      }
      var j = (function() {
          function e() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            o(this, e), (this.events = t), (this.hop = t.hasOwnProperty);
          }
          return (
            c(e, [
              {
                key: 'on',
                value: function(e, t) {
                  if (m(e)) for (var n = 0; n < e.length; n++) this.on(e[n], t);
                  this.hop.call(this.events, e) || (this.events[e] = []);
                  var a = this.events[e].push(t) - 1;
                  return {
                    remove: function() {
                      delete this.events[e][a];
                    },
                  };
                },
              },
              {
                key: 'emit',
                value: function(e, t) {
                  if (m(e))
                    for (var n = 0; n < e.length; n++) this.emit(e[n], t);
                  this.hop.call(this.events, e) &&
                    this.events[e].forEach(function(e) {
                      e(t || {});
                    });
                },
              },
            ]),
            e
          );
        })(),
        h = (function() {
          function e(t) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            o(this, e),
              (this._c = {}),
              (this._t = []),
              (this._e = new j()),
              (this.disabled = !1),
              (this.selector = t),
              (this.settings = L(a, n)),
              (this.index = this.settings.startAt);
          }
          return (
            c(e, [
              {
                key: 'mount',
                value: function() {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return (
                    this._e.emit('mount.before'),
                    g(e)
                      ? (this._c = M(this, e, this._e))
                      : i('You need to provide a object on `mount()`'),
                    this._e.emit('mount.after'),
                    this
                  );
                },
              },
              {
                key: 'mutate',
                value: function() {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [];
                  return (
                    m(e)
                      ? (this._t = e)
                      : i('You need to provide a array on `mutate()`'),
                    this
                  );
                },
              },
              {
                key: 'update',
                value: function() {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return (
                    (this.settings = L(this.settings, e)),
                    e.hasOwnProperty('startAt') && (this.index = e.startAt),
                    this._e.emit('update'),
                    this
                  );
                },
              },
              {
                key: 'go',
                value: function(e) {
                  return this._c.Run.make(e), this;
                },
              },
              {
                key: 'move',
                value: function(e) {
                  return (
                    this._c.Transition.disable(), this._c.Move.make(e), this
                  );
                },
              },
              {
                key: 'destroy',
                value: function() {
                  return this._e.emit('destroy'), this;
                },
              },
              {
                key: 'play',
                value: function() {
                  var e =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0];
                  return (
                    e && (this.settings.autoplay = e),
                    this._e.emit('play'),
                    this
                  );
                },
              },
              {
                key: 'pause',
                value: function() {
                  return this._e.emit('pause'), this;
                },
              },
              {
                key: 'disable',
                value: function() {
                  return (this.disabled = !0), this;
                },
              },
              {
                key: 'enable',
                value: function() {
                  return (this.disabled = !1), this;
                },
              },
              {
                key: 'on',
                value: function(e, t) {
                  return this._e.on(e, t), this;
                },
              },
              {
                key: 'isType',
                value: function(e) {
                  return this.settings.type === e;
                },
              },
              {
                key: 'settings',
                get: function() {
                  return this._o;
                },
                set: function(e) {
                  g(e)
                    ? (this._o = e)
                    : i('Options must be an `object` instance.');
                },
              },
              {
                key: 'index',
                get: function() {
                  return this._i;
                },
                set: function(e) {
                  this._i = d(e);
                },
              },
              {
                key: 'type',
                get: function() {
                  return this.settings.type;
                },
              },
              {
                key: 'disabled',
                get: function() {
                  return this._d;
                },
                set: function(e) {
                  this._d = !!e;
                },
              },
            ]),
            e
          );
        })();
      function b() {
        return new Date().getTime();
      }
      function N(e, t, n) {
        var a = void 0,
          i = void 0,
          r = void 0,
          o = void 0,
          c = 0;
        n || (n = {});
        var s = function() {
            (c = !1 === n.leading ? 0 : b()),
              (a = null),
              (o = e.apply(i, r)),
              a || (i = r = null);
          },
          l = function() {
            var l = b();
            c || !1 !== n.leading || (c = l);
            var u = t - (l - c);
            return (
              (i = this),
              (r = arguments),
              u <= 0 || u > t
                ? (a && (clearTimeout(a), (a = null)),
                  (c = l),
                  (o = e.apply(i, r)),
                  a || (i = r = null))
                : a || !1 === n.trailing || (a = setTimeout(s, u)),
              o
            );
          };
        return (
          (l.cancel = function() {
            clearTimeout(a), (c = 0), (a = i = r = null);
          }),
          l
        );
      }
      var I = {
        ltr: ['marginLeft', 'marginRight'],
        rtl: ['marginRight', 'marginLeft'],
      };
      function x(e) {
        if (e && e.parentNode) {
          for (var t = e.parentNode.firstChild, n = []; t; t = t.nextSibling)
            1 === t.nodeType && t !== e && n.push(t);
          return n;
        }
        return [];
      }
      function S(e) {
        return !!(e && e instanceof window.HTMLElement);
      }
      var w = (function() {
        function e() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          o(this, e), (this.listeners = t);
        }
        return (
          c(e, [
            {
              key: 'on',
              value: function(e, t, n) {
                var a =
                  arguments.length > 3 &&
                  void 0 !== arguments[3] &&
                  arguments[3];
                p(e) && (e = [e]);
                for (var i = 0; i < e.length; i++)
                  (this.listeners[e[i]] = n),
                    t.addEventListener(e[i], this.listeners[e[i]], a);
              },
            },
            {
              key: 'off',
              value: function(e, t) {
                var n =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
                p(e) && (e = [e]);
                for (var a = 0; a < e.length; a++)
                  t.removeEventListener(e[a], this.listeners[e[a]], n);
              },
            },
            {
              key: 'destroy',
              value: function() {
                delete this.listeners;
              },
            },
          ]),
          e
        );
      })();
      var v = ['ltr', 'rtl'],
        E = { '>': '<', '<': '>', '=': '=' };
      function D(e, t) {
        return {
          modify: function(e) {
            return t.Direction.is('rtl') ? -e : e;
          },
        };
      }
      function C(e, t) {
        return {
          modify: function(n) {
            return n + t.Gaps.value * e.index;
          },
        };
      }
      function T(e, t) {
        return {
          modify: function(e) {
            return e + t.Clones.grow / 2;
          },
        };
      }
      function z(e, t) {
        return {
          modify: function(n) {
            if (e.settings.focusAt >= 0) {
              var a = t.Peek.value;
              return g(a) ? n - a.before : n - a;
            }
            return n;
          },
        };
      }
      function O(e, t) {
        return {
          modify: function(n) {
            var a = t.Gaps.value,
              i = t.Sizes.width,
              r = e.settings.focusAt,
              o = t.Sizes.slideWidth;
            return 'center' === r ? n - (i / 2 - o / 2) : n - o * r - a * r;
          },
        };
      }
      var k = !1;
      try {
        var Y = Object.defineProperty({}, 'passive', {
          get: function() {
            k = !0;
          },
        });
        window.addEventListener('testPassive', null, Y),
          window.removeEventListener('testPassive', null, Y);
      } catch (_) {}
      var P = k,
        Q = ['touchstart', 'mousedown'],
        R = ['touchmove', 'mousemove'],
        B = ['touchend', 'touchcancel', 'mouseup', 'mouseleave'],
        W = ['mousedown', 'mousemove', 'mouseup', 'mouseleave'];
      function H(e) {
        return g(e)
          ? ((t = e),
            Object.keys(t)
              .sort()
              .reduce(function(e, n) {
                return (e[n] = t[n]), e[n], e;
              }, {}))
          : (i('Breakpoints option must be an object'), {});
        var t;
      }
      var G = {
          Html: function(e, t) {
            var n = {
              mount: function() {
                (this.root = e.selector),
                  (this.track = this.root.querySelector(
                    '[data-glide-el="track"]'
                  )),
                  (this.slides = Array.prototype.slice
                    .call(this.wrapper.children)
                    .filter(function(t) {
                      return !t.classList.contains(
                        e.settings.classes.cloneSlide
                      );
                    }));
              },
            };
            return (
              y(n, 'root', {
                get: function() {
                  return n._r;
                },
                set: function(e) {
                  p(e) && (e = document.querySelector(e)),
                    S(e)
                      ? (n._r = e)
                      : i('Root element must be a existing Html node');
                },
              }),
              y(n, 'track', {
                get: function() {
                  return n._t;
                },
                set: function(e) {
                  S(e)
                    ? (n._t = e)
                    : i(
                        'Could not find track element. Please use [data-glide-el="track"] attribute.'
                      );
                },
              }),
              y(n, 'wrapper', {
                get: function() {
                  return n.track.children[0];
                },
              }),
              n
            );
          },
          Translate: function(e, t, n) {
            var a = {
              set: function(n) {
                var a = (function(e, t, n) {
                  var a = [C, T, z, O].concat(e._t, [D]);
                  return {
                    mutate: function(r) {
                      for (var o = 0; o < a.length; o++) {
                        var c = a[o];
                        f(c) && f(c().modify)
                          ? (r = c(e, t, n).modify(r))
                          : i(
                              'Transformer should be a function that returns an object with `modify()` method'
                            );
                      }
                      return r;
                    },
                  };
                })(e, t).mutate(n);
                t.Html.wrapper.style.transform =
                  'translate3d(' + -1 * a + 'px, 0px, 0px)';
              },
              remove: function() {
                t.Html.wrapper.style.transform = '';
              },
            };
            return (
              n.on('move', function(i) {
                var r = t.Gaps.value,
                  o = t.Sizes.length,
                  c = t.Sizes.slideWidth;
                return e.isType('carousel') && t.Run.isOffset('<')
                  ? (t.Transition.after(function() {
                      n.emit('translate.jump'), a.set(c * (o - 1));
                    }),
                    a.set(-c - r * o))
                  : e.isType('carousel') && t.Run.isOffset('>')
                  ? (t.Transition.after(function() {
                      n.emit('translate.jump'), a.set(0);
                    }),
                    a.set(c * o + r * o))
                  : a.set(i.movement);
              }),
              n.on('destroy', function() {
                a.remove();
              }),
              a
            );
          },
          Transition: function(e, t, n) {
            var a = !1,
              i = {
                compose: function(t) {
                  var n = e.settings;
                  return a
                    ? t + ' 0ms ' + n.animationTimingFunc
                    : t + ' ' + this.duration + 'ms ' + n.animationTimingFunc;
                },
                set: function() {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 'transform';
                  t.Html.wrapper.style.transition = this.compose(e);
                },
                remove: function() {
                  t.Html.wrapper.style.transition = '';
                },
                after: function(e) {
                  setTimeout(function() {
                    e();
                  }, this.duration);
                },
                enable: function() {
                  (a = !1), this.set();
                },
                disable: function() {
                  (a = !0), this.set();
                },
              };
            return (
              y(i, 'duration', {
                get: function() {
                  var n = e.settings;
                  return e.isType('slider') && t.Run.offset
                    ? n.rewindDuration
                    : n.animationDuration;
                },
              }),
              n.on('move', function() {
                i.set();
              }),
              n.on(['build.before', 'resize', 'translate.jump'], function() {
                i.disable();
              }),
              n.on('run', function() {
                i.enable();
              }),
              n.on('destroy', function() {
                i.remove();
              }),
              i
            );
          },
          Direction: function(e, t, n) {
            var a = {
              mount: function() {
                this.value = e.settings.direction;
              },
              resolve: function(e) {
                var t = e.slice(0, 1);
                return this.is('rtl') ? e.split(t).join(E[t]) : e;
              },
              is: function(e) {
                return this.value === e;
              },
              addClass: function() {
                t.Html.root.classList.add(
                  e.settings.classes.direction[this.value]
                );
              },
              removeClass: function() {
                t.Html.root.classList.remove(
                  e.settings.classes.direction[this.value]
                );
              },
            };
            return (
              y(a, 'value', {
                get: function() {
                  return a._v;
                },
                set: function(e) {
                  v.indexOf(e) > -1
                    ? (a._v = e)
                    : i('Direction value must be `ltr` or `rtl`');
                },
              }),
              n.on(['destroy', 'update'], function() {
                a.removeClass();
              }),
              n.on('update', function() {
                a.mount();
              }),
              n.on(['build.before', 'update'], function() {
                a.addClass();
              }),
              a
            );
          },
          Peek: function(e, t, n) {
            var a = {
              mount: function() {
                this.value = e.settings.peek;
              },
            };
            return (
              y(a, 'value', {
                get: function() {
                  return a._v;
                },
                set: function(e) {
                  g(e)
                    ? ((e.before = d(e.before)), (e.after = d(e.after)))
                    : (e = d(e)),
                    (a._v = e);
                },
              }),
              y(a, 'reductor', {
                get: function() {
                  var t = a.value,
                    n = e.settings.perView;
                  return g(t) ? t.before / n + t.after / n : (2 * t) / n;
                },
              }),
              n.on(['resize', 'update'], function() {
                a.mount();
              }),
              a
            );
          },
          Sizes: function(e, t, n) {
            var a = {
              setupSlides: function() {
                for (
                  var e = this.slideWidth + 'px', n = t.Html.slides, a = 0;
                  a < n.length;
                  a++
                )
                  n[a].style.width = e;
              },
              setupWrapper: function(e) {
                t.Html.wrapper.style.width = this.wrapperSize + 'px';
              },
              remove: function() {
                for (var e = t.Html.slides, n = 0; n < e.length; n++)
                  e[n].style.width = '';
                t.Html.wrapper.style.width = '';
              },
            };
            return (
              y(a, 'length', {
                get: function() {
                  return t.Html.slides.length;
                },
              }),
              y(a, 'width', {
                get: function() {
                  return t.Html.root.offsetWidth;
                },
              }),
              y(a, 'wrapperSize', {
                get: function() {
                  return a.slideWidth * a.length + t.Gaps.grow + t.Clones.grow;
                },
              }),
              y(a, 'slideWidth', {
                get: function() {
                  return (
                    a.width / e.settings.perView -
                    t.Peek.reductor -
                    t.Gaps.reductor
                  );
                },
              }),
              n.on(['build.before', 'resize', 'update'], function() {
                a.setupSlides(), a.setupWrapper();
              }),
              n.on('destroy', function() {
                a.remove();
              }),
              a
            );
          },
          Gaps: function(e, t, n) {
            var a = {
              apply: function(e) {
                for (var n = 0, a = e.length; n < a; n++) {
                  var i = e[n].style,
                    r = t.Direction.value;
                  (i[I[r][0]] = 0 !== n ? this.value / 2 + 'px' : ''),
                    n !== e.length - 1
                      ? (i[I[r][1]] = this.value / 2 + 'px')
                      : (i[I[r][1]] = '');
                }
              },
              remove: function(e) {
                for (var t = 0, n = e.length; t < n; t++) {
                  var a = e[t].style;
                  (a.marginLeft = ''), (a.marginRight = '');
                }
              },
            };
            return (
              y(a, 'value', {
                get: function() {
                  return d(e.settings.gap);
                },
              }),
              y(a, 'grow', {
                get: function() {
                  return a.value * (t.Sizes.length - 1);
                },
              }),
              y(a, 'reductor', {
                get: function() {
                  var t = e.settings.perView;
                  return (a.value * (t - 1)) / t;
                },
              }),
              n.on(
                ['build.after', 'update'],
                N(function() {
                  a.apply(t.Html.wrapper.children);
                }, 30)
              ),
              n.on('destroy', function() {
                a.remove(t.Html.wrapper.children);
              }),
              a
            );
          },
          Move: function(e, t, n) {
            var a = {
              mount: function() {
                this._o = 0;
              },
              make: function() {
                var e = this,
                  a =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0;
                (this.offset = a),
                  n.emit('move', { movement: this.value }),
                  t.Transition.after(function() {
                    n.emit('move.after', { movement: e.value });
                  });
              },
            };
            return (
              y(a, 'offset', {
                get: function() {
                  return a._o;
                },
                set: function(e) {
                  a._o = A(e) ? 0 : d(e);
                },
              }),
              y(a, 'translate', {
                get: function() {
                  return t.Sizes.slideWidth * e.index;
                },
              }),
              y(a, 'value', {
                get: function() {
                  var e = this.offset,
                    n = this.translate;
                  return t.Direction.is('rtl') ? n + e : n - e;
                },
              }),
              n.on(['build.before', 'run'], function() {
                a.make();
              }),
              a
            );
          },
          Clones: function(e, t, n) {
            var a = {
              mount: function() {
                (this.items = []),
                  e.isType('carousel') && (this.items = this.collect());
              },
              collect: function() {
                for (
                  var n =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : [],
                    a = t.Html.slides,
                    i = e.settings,
                    r = i.perView,
                    o = i.classes,
                    c = +!!e.settings.peek,
                    s = r + c,
                    l = a.slice(0, s),
                    u = a.slice(-s),
                    d = 0;
                  d < Math.max(1, Math.floor(r / a.length));
                  d++
                ) {
                  for (var p = 0; p < l.length; p++) {
                    var g = l[p].cloneNode(!0);
                    g.classList.add(o.cloneSlide), n.push(g);
                  }
                  for (var f = 0; f < u.length; f++) {
                    var A = u[f].cloneNode(!0);
                    A.classList.add(o.cloneSlide), n.unshift(A);
                  }
                }
                return n;
              },
              append: function() {
                for (
                  var e = this.items,
                    n = t.Html,
                    a = n.wrapper,
                    i = n.slides,
                    r = Math.floor(e.length / 2),
                    o = e.slice(0, r).reverse(),
                    c = e.slice(r, e.length),
                    s = t.Sizes.slideWidth + 'px',
                    l = 0;
                  l < c.length;
                  l++
                )
                  a.appendChild(c[l]);
                for (var u = 0; u < o.length; u++) a.insertBefore(o[u], i[0]);
                for (var d = 0; d < e.length; d++) e[d].style.width = s;
              },
              remove: function() {
                for (var e = this.items, n = 0; n < e.length; n++)
                  t.Html.wrapper.removeChild(e[n]);
              },
            };
            return (
              y(a, 'grow', {
                get: function() {
                  return (t.Sizes.slideWidth + t.Gaps.value) * a.items.length;
                },
              }),
              n.on('update', function() {
                a.remove(), a.mount(), a.append();
              }),
              n.on('build.before', function() {
                e.isType('carousel') && a.append();
              }),
              n.on('destroy', function() {
                a.remove();
              }),
              a
            );
          },
          Resize: function(e, t, n) {
            var a = new w(),
              i = {
                mount: function() {
                  this.bind();
                },
                bind: function() {
                  a.on(
                    'resize',
                    window,
                    N(function() {
                      n.emit('resize');
                    }, e.settings.throttle)
                  );
                },
                unbind: function() {
                  a.off('resize', window);
                },
              };
            return (
              n.on('destroy', function() {
                i.unbind(), a.destroy();
              }),
              i
            );
          },
          Build: function(e, t, n) {
            var a = {
              mount: function() {
                n.emit('build.before'),
                  this.typeClass(),
                  this.activeClass(),
                  n.emit('build.after');
              },
              typeClass: function() {
                t.Html.root.classList.add(e.settings.classes[e.settings.type]);
              },
              activeClass: function() {
                var n = e.settings.classes,
                  a = t.Html.slides[e.index];
                a &&
                  (a.classList.add(n.activeSlide),
                  x(a).forEach(function(e) {
                    e.classList.remove(n.activeSlide);
                  }));
              },
              removeClasses: function() {
                var n = e.settings.classes;
                t.Html.root.classList.remove(n[e.settings.type]),
                  t.Html.slides.forEach(function(e) {
                    e.classList.remove(n.activeSlide);
                  });
              },
            };
            return (
              n.on(['destroy', 'update'], function() {
                a.removeClasses();
              }),
              n.on(['resize', 'update'], function() {
                a.mount();
              }),
              n.on('move.after', function() {
                a.activeClass();
              }),
              a
            );
          },
          Run: function(e, t, n) {
            var a = {
              mount: function() {
                this._o = !1;
              },
              make: function(a) {
                var i = this;
                e.disabled ||
                  (e.disable(),
                  (this.move = a),
                  n.emit('run.before', this.move),
                  this.calculate(),
                  n.emit('run', this.move),
                  t.Transition.after(function() {
                    i.isStart() && n.emit('run.start', i.move),
                      i.isEnd() && n.emit('run.end', i.move),
                      (i.isOffset('<') || i.isOffset('>')) &&
                        ((i._o = !1), n.emit('run.offset', i.move)),
                      n.emit('run.after', i.move),
                      e.enable();
                  }));
              },
              calculate: function() {
                var t = this.move,
                  n = this.length,
                  a = t.steps,
                  r = t.direction,
                  o = 'number' == typeof d(a) && 0 !== d(a);
                switch (r) {
                  case '>':
                    '>' === a
                      ? (e.index = n)
                      : this.isEnd()
                      ? (e.isType('slider') && !e.settings.rewind) ||
                        ((this._o = !0), (e.index = 0))
                      : o
                      ? (e.index += Math.min(n - e.index, -d(a)))
                      : e.index++;
                    break;
                  case '<':
                    '<' === a
                      ? (e.index = 0)
                      : this.isStart()
                      ? (e.isType('slider') && !e.settings.rewind) ||
                        ((this._o = !0), (e.index = n))
                      : o
                      ? (e.index -= Math.min(e.index, d(a)))
                      : e.index--;
                    break;
                  case '=':
                    e.index = a;
                    break;
                  default:
                    i(
                      'Invalid direction pattern [' + r + a + '] has been used'
                    );
                }
              },
              isStart: function() {
                return 0 === e.index;
              },
              isEnd: function() {
                return e.index === this.length;
              },
              isOffset: function(e) {
                return this._o && this.move.direction === e;
              },
            };
            return (
              y(a, 'move', {
                get: function() {
                  return this._m;
                },
                set: function(e) {
                  var t = e.substr(1);
                  this._m = {
                    direction: e.substr(0, 1),
                    steps: t ? (d(t) ? d(t) : t) : 0,
                  };
                },
              }),
              y(a, 'length', {
                get: function() {
                  var n = e.settings,
                    a = t.Html.slides.length;
                  return e.isType('slider') && 'center' !== n.focusAt && n.bound
                    ? a - 1 - (d(n.perView) - 1) + d(n.focusAt)
                    : a - 1;
                },
              }),
              y(a, 'offset', {
                get: function() {
                  return this._o;
                },
              }),
              a
            );
          },
          Swipe: function(e, t, n) {
            var a = new w(),
              i = 0,
              r = 0,
              o = 0,
              c = !1,
              s = !!P && { passive: !0 },
              l = {
                mount: function() {
                  this.bindSwipeStart();
                },
                start: function(t) {
                  if (!c && !e.disabled) {
                    this.disable();
                    var a = this.touches(t);
                    (i = null),
                      (r = d(a.pageX)),
                      (o = d(a.pageY)),
                      this.bindSwipeMove(),
                      this.bindSwipeEnd(),
                      n.emit('swipe.start');
                  }
                },
                move: function(a) {
                  if (!e.disabled) {
                    var c = e.settings,
                      s = c.touchAngle,
                      l = c.touchRatio,
                      u = c.classes,
                      p = this.touches(a),
                      g = d(p.pageX) - r,
                      f = d(p.pageY) - o,
                      A = Math.abs(g << 2),
                      m = Math.abs(f << 2),
                      M = Math.sqrt(A + m),
                      y = Math.sqrt(m);
                    if (!((180 * (i = Math.asin(y / M))) / Math.PI < s))
                      return !1;
                    a.stopPropagation(),
                      t.Move.make(g * parseFloat(l)),
                      t.Html.root.classList.add(u.dragging),
                      n.emit('swipe.move');
                  }
                },
                end: function(a) {
                  if (!e.disabled) {
                    var o = e.settings,
                      c = this.touches(a),
                      s = this.threshold(a),
                      l = c.pageX - r,
                      u = (180 * i) / Math.PI,
                      p = Math.round(l / t.Sizes.slideWidth);
                    this.enable(),
                      l > s && u < o.touchAngle
                        ? (o.perTouch && (p = Math.min(p, d(o.perTouch))),
                          t.Direction.is('rtl') && (p = -p),
                          t.Run.make(t.Direction.resolve('<' + p)))
                        : l < -s && u < o.touchAngle
                        ? (o.perTouch && (p = Math.max(p, -d(o.perTouch))),
                          t.Direction.is('rtl') && (p = -p),
                          t.Run.make(t.Direction.resolve('>' + p)))
                        : t.Move.make(),
                      t.Html.root.classList.remove(o.classes.dragging),
                      this.unbindSwipeMove(),
                      this.unbindSwipeEnd(),
                      n.emit('swipe.end');
                  }
                },
                bindSwipeStart: function() {
                  var n = this,
                    i = e.settings;
                  i.swipeThreshold &&
                    a.on(
                      Q[0],
                      t.Html.wrapper,
                      function(e) {
                        n.start(e);
                      },
                      s
                    ),
                    i.dragThreshold &&
                      a.on(
                        Q[1],
                        t.Html.wrapper,
                        function(e) {
                          n.start(e);
                        },
                        s
                      );
                },
                unbindSwipeStart: function() {
                  a.off(Q[0], t.Html.wrapper, s),
                    a.off(Q[1], t.Html.wrapper, s);
                },
                bindSwipeMove: function() {
                  var n = this;
                  a.on(
                    R,
                    t.Html.wrapper,
                    N(function(e) {
                      n.move(e);
                    }, e.settings.throttle),
                    s
                  );
                },
                unbindSwipeMove: function() {
                  a.off(R, t.Html.wrapper, s);
                },
                bindSwipeEnd: function() {
                  var e = this;
                  a.on(B, t.Html.wrapper, function(t) {
                    e.end(t);
                  });
                },
                unbindSwipeEnd: function() {
                  a.off(B, t.Html.wrapper);
                },
                touches: function(e) {
                  return W.indexOf(e.type) > -1
                    ? e
                    : e.touches[0] || e.changedTouches[0];
                },
                threshold: function(t) {
                  var n = e.settings;
                  return W.indexOf(t.type) > -1
                    ? n.dragThreshold
                    : n.swipeThreshold;
                },
                enable: function() {
                  return (c = !1), t.Transition.enable(), this;
                },
                disable: function() {
                  return (c = !0), t.Transition.disable(), this;
                },
              };
            return (
              n.on('build.after', function() {
                t.Html.root.classList.add(e.settings.classes.swipeable);
              }),
              n.on('destroy', function() {
                l.unbindSwipeStart(),
                  l.unbindSwipeMove(),
                  l.unbindSwipeEnd(),
                  a.destroy();
              }),
              l
            );
          },
          Images: function(e, t, n) {
            var a = new w(),
              i = {
                mount: function() {
                  this.bind();
                },
                bind: function() {
                  a.on('dragstart', t.Html.wrapper, this.dragstart);
                },
                unbind: function() {
                  a.off('dragstart', t.Html.wrapper);
                },
                dragstart: function(e) {
                  e.preventDefault();
                },
              };
            return (
              n.on('destroy', function() {
                i.unbind(), a.destroy();
              }),
              i
            );
          },
          Anchors: function(e, t, n) {
            var a = new w(),
              i = !1,
              r = !1,
              o = {
                mount: function() {
                  (this._a = t.Html.wrapper.querySelectorAll('a')), this.bind();
                },
                bind: function() {
                  a.on('click', t.Html.wrapper, this.click);
                },
                unbind: function() {
                  a.off('click', t.Html.wrapper);
                },
                click: function(e) {
                  r && (e.stopPropagation(), e.preventDefault());
                },
                detach: function() {
                  if (((r = !0), !i)) {
                    for (var e = 0; e < this.items.length; e++)
                      (this.items[e].draggable = !1),
                        this.items[e].setAttribute(
                          'data-href',
                          this.items[e].getAttribute('href')
                        ),
                        this.items[e].removeAttribute('href');
                    i = !0;
                  }
                  return this;
                },
                attach: function() {
                  if (((r = !1), i)) {
                    for (var e = 0; e < this.items.length; e++)
                      (this.items[e].draggable = !0),
                        this.items[e].setAttribute(
                          'href',
                          this.items[e].getAttribute('data-href')
                        );
                    i = !1;
                  }
                  return this;
                },
              };
            return (
              y(o, 'items', {
                get: function() {
                  return o._a;
                },
              }),
              n.on('swipe.move', function() {
                o.detach();
              }),
              n.on('swipe.end', function() {
                t.Transition.after(function() {
                  o.attach();
                });
              }),
              n.on('destroy', function() {
                o.attach(), o.unbind(), a.destroy();
              }),
              o
            );
          },
          Controls: function(e, t, n) {
            var a = new w(),
              i = !!P && { passive: !0 },
              r = {
                mount: function() {
                  (this._n = t.Html.root.querySelectorAll(
                    '[data-glide-el="controls[nav]"]'
                  )),
                    (this._c = t.Html.root.querySelectorAll(
                      '[data-glide-el^="controls"]'
                    )),
                    this.addBindings();
                },
                setActive: function() {
                  for (var e = 0; e < this._n.length; e++)
                    this.addClass(this._n[e].children);
                },
                removeActive: function() {
                  for (var e = 0; e < this._n.length; e++)
                    this.removeClass(this._n[e].children);
                },
                addClass: function(t) {
                  var n = e.settings,
                    a = t[e.index];
                  a &&
                    (a.classList.add(n.classes.activeNav),
                    x(a).forEach(function(e) {
                      e.classList.remove(n.classes.activeNav);
                    }));
                },
                removeClass: function(t) {
                  var n = t[e.index];
                  n && n.classList.remove(e.settings.classes.activeNav);
                },
                addBindings: function() {
                  for (var e = 0; e < this._c.length; e++)
                    this.bind(this._c[e].children);
                },
                removeBindings: function() {
                  for (var e = 0; e < this._c.length; e++)
                    this.unbind(this._c[e].children);
                },
                bind: function(e) {
                  for (var t = 0; t < e.length; t++)
                    a.on('click', e[t], this.click),
                      a.on('touchstart', e[t], this.click, i);
                },
                unbind: function(e) {
                  for (var t = 0; t < e.length; t++)
                    a.off(['click', 'touchstart'], e[t]);
                },
                click: function(e) {
                  e.preventDefault(),
                    t.Run.make(
                      t.Direction.resolve(
                        e.currentTarget.getAttribute('data-glide-dir')
                      )
                    );
                },
              };
            return (
              y(r, 'items', {
                get: function() {
                  return r._c;
                },
              }),
              n.on(['mount.after', 'move.after'], function() {
                r.setActive();
              }),
              n.on('destroy', function() {
                r.removeBindings(), r.removeActive(), a.destroy();
              }),
              r
            );
          },
          Keyboard: function(e, t, n) {
            var a = new w(),
              i = {
                mount: function() {
                  e.settings.keyboard && this.bind();
                },
                bind: function() {
                  a.on('keyup', document, this.press);
                },
                unbind: function() {
                  a.off('keyup', document);
                },
                press: function(e) {
                  39 === e.keyCode && t.Run.make(t.Direction.resolve('>')),
                    37 === e.keyCode && t.Run.make(t.Direction.resolve('<'));
                },
              };
            return (
              n.on(['destroy', 'update'], function() {
                i.unbind();
              }),
              n.on('update', function() {
                i.mount();
              }),
              n.on('destroy', function() {
                a.destroy();
              }),
              i
            );
          },
          Autoplay: function(e, t, n) {
            var a = new w(),
              i = {
                mount: function() {
                  this.start(), e.settings.hoverpause && this.bind();
                },
                start: function() {
                  var n = this;
                  e.settings.autoplay &&
                    A(this._i) &&
                    (this._i = setInterval(function() {
                      n.stop(), t.Run.make('>'), n.start();
                    }, this.time));
                },
                stop: function() {
                  this._i = clearInterval(this._i);
                },
                bind: function() {
                  var e = this;
                  a.on('mouseover', t.Html.root, function() {
                    e.stop();
                  }),
                    a.on('mouseout', t.Html.root, function() {
                      e.start();
                    });
                },
                unbind: function() {
                  a.off(['mouseover', 'mouseout'], t.Html.root);
                },
              };
            return (
              y(i, 'time', {
                get: function() {
                  var n = t.Html.slides[e.index].getAttribute(
                    'data-glide-autoplay'
                  );
                  return d(n || e.settings.autoplay);
                },
              }),
              n.on(['destroy', 'update'], function() {
                i.unbind();
              }),
              n.on(
                ['run.before', 'pause', 'destroy', 'swipe.start', 'update'],
                function() {
                  i.stop();
                }
              ),
              n.on(['run.after', 'play', 'swipe.end'], function() {
                i.start();
              }),
              n.on('update', function() {
                i.mount();
              }),
              n.on('destroy', function() {
                a.destroy();
              }),
              i
            );
          },
          Breakpoints: function(e, t, n) {
            var a = new w(),
              i = e.settings,
              r = H(i.breakpoints),
              o = s({}, i),
              c = {
                match: function(e) {
                  if (void 0 !== window.matchMedia)
                    for (var t in e)
                      if (
                        e.hasOwnProperty(t) &&
                        window.matchMedia('(max-width: ' + t + 'px)').matches
                      )
                        return e[t];
                  return o;
                },
              };
            return (
              s(i, c.match(r)),
              a.on(
                'resize',
                window,
                N(function() {
                  e.settings = L(i, c.match(r));
                }, e.settings.throttle)
              ),
              n.on('update', function() {
                (r = H(r)), (o = s({}, i));
              }),
              n.on('destroy', function() {
                a.off('resize', window);
              }),
              c
            );
          },
        },
        U = (function(e) {
          function t() {
            return (
              o(this, t),
              u(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
              )
            );
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            c(t, [
              {
                key: 'mount',
                value: function() {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return l(
                    t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                    'mount',
                    this
                  ).call(this, s({}, G, e));
                },
              },
            ]),
            t
          );
        })(h);
      t.a = U;
    },
    uZbH: function(e, t) {
      e.exports =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiBzdHJva2U9IiMwZjQ2Y2EiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48cGF0aCBkPSJNNTcuMzcgNjUuNXYzMi4xM0gyLjc1VjY1LjVoNTQuNjJ6Ii8+PHBhdGggZD0iTTU3LjM3IDY1LjVIMi42di05LjIySDU0LjRjLS42MyAxLjA4LS4wNiAyLjUuNzcgMy41Mi41OC43IDEuODQgMS4xIDIuMiAxLjF2NC42eiIvPjxwYXRoIGQ9Ik02OS4wNCA0My43Nkw1NS41MyA1NC44Yy0uMy4yNS0uOTggMS4xNi0xLjE1IDEuNDdIMi42bDcuNjctNi4xMyA3LjctNi4xNmgyNC4wNmwyNy0uMjN6bS02LjItMTQuMDZ2My4ySDQzLjU3di02LjQzaDE2LjA2YzEuNzggMCAzLjIyIDEuNDUgMy4yMiAzLjIyeiIvPjxwYXRoIGQ9Ik05My4zNyAyMC4wNWw0LjgyIDYuNDMtNC44MiA2LjQzaC0xLjZsLTMuMi00LjgyaC0xLjZsLTMuMiA0LjgyaC0xLjZsLTMuMi00LjgyaC0xLjZsLTMuMiA0LjhoLTEuNmwtMy4yLTQuODJoLTEuNmwtMy4yIDQuODJoLTEuNnYtMy4yYTMuMjIgMy4yMiAwIDAgMC0zLjIxLTMuMjFINDMuNTd2LTYuNDNoNDkuOHoiLz48cGF0aCBkPSJNNDMuNTcgMzIuOXY4LjAzYzAgMS4xMi0uMiAyLjIyLS41NSAzLjA2SDE3Ljk3TDkuOCA1MC41NGwtLjEtLjEzYy00LjQ4LS44NC03Ljg3LTQuNzUtNy44Ny05LjQ4di0yOC45YTkuNjUgOS42NSAwIDAgMSA5LjY0LTkuNjRoMjIuNWE5LjY1IDkuNjUgMCAwIDEgOS42NCA5LjY0VjMyLjl6bTQ3LjEgMjcuMDVsLTE1LjY1LTEyLjgtMTUuNjMgMTIuOGMtLjU4LjQ3LTEuMy43Mi0yLjA0LjcydjM2Ljk1SDkyLjdWNjAuNjhhMy4xNyAzLjE3IDAgMCAxLTIuMDItLjczeiIvPjxwYXRoIGQ9Ik03NS4wNCA2OC43Yy0zLjEyIDAtNS45IDEuMjUtNy45NSAzLjNhMTEuMTggMTEuMTggMCAwIDAtMy4yOSA3Ljk1djE3LjY3aDIyLjVWNzkuOTVjLS4wMS02LjItNS4wNC0xMS4yNC0xMS4yNS0xMS4yNHoiLz48cGF0aCBkPSJNNzAuMjIgNzguMzVoOS42NHYxOS4yOGgtOS42NFY3OC4zNXpNNTQuNiA1NS44NmMuMTgtLjMyLjQzLS42My43NC0uODhMNzMgNDAuNTJjLjU4LS40NyAxLjMtLjcyIDIuMDQtLjcyczEuNDYuMjYgMi4wNC43MmwxNy42NyAxNC40NmEzLjIzIDMuMjMgMCAwIDEgLjQ1IDQuNTNjLS42Ljc0LTEuNTMgMS4xNy0yLjUgMS4xNy0uNzQgMC0xLjQ2LS4yNi0yLjAyLS43MmwtMTUuNjUtMTIuOC0xNS42MyAxMi44Yy0uNTguNDctMS4zLjcyLTIuMDQuNzJhMy4yNyAzLjI3IDAgMCAxLTIuNS0xLjE3IDMuMjEgMy4yMSAwIDAgMS0uMjktMy42NXpNMTAuNzggNzYuNzRoMTIuODV2OS42NEgxMC43OHYtOS42NHptMzguNTUgOS42NEgzNi40OHYtOS42NGgxMi44NXY5LjY0em0tMzguNTUtNTNWMTcuM2ExLjYxIDEuNjEgMCAwIDEgMS42MS0xLjYxaDMuMmMuOSAwIDEuNi43MiAzLjg4IDIuNzRWMzQuNWMtMi4yNy0uMjUtMyAuNDctMy44OC40N2gtMy4yYTEuNTkgMS41OSAwIDAgMS0xLjYtMS42eiIvPjwvc3ZnPg==';
    },
    vTYv: function(e, t, n) {
      'use strict';
      n('UQCJ'),
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var a,
        i = (a = n('ERkP')) && a.__esModule ? a : { default: a };
      var r = {
        accessibility: !0,
        adaptiveHeight: !1,
        afterChange: null,
        appendDots: function(e) {
          return i.default.createElement(
            'ul',
            { style: { display: 'block' } },
            e
          );
        },
        arrows: !0,
        autoplay: !1,
        autoplaySpeed: 3e3,
        beforeChange: null,
        centerMode: !1,
        centerPadding: '50px',
        className: '',
        cssEase: 'ease',
        customPaging: function(e) {
          return i.default.createElement('button', null, e + 1);
        },
        dots: !1,
        dotsClass: 'slick-dots',
        draggable: !0,
        easing: 'linear',
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: null,
        nextArrow: null,
        onEdge: null,
        onInit: null,
        onLazyLoadError: null,
        onReInit: null,
        pauseOnDotsHover: !1,
        pauseOnFocus: !1,
        pauseOnHover: !0,
        prevArrow: null,
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: 'div',
        slidesPerRow: 1,
        slidesToScroll: 1,
        slidesToShow: 1,
        speed: 500,
        swipe: !0,
        swipeEvent: null,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        waitForAnimate: !0,
      };
      t.default = r;
    },
    vzpy: function(e, t, n) {
      'use strict';
      n('UQCJ'),
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.minus = void 0);
      t.minus = {
        viewBox: '0 0 20 20',
        children: [
          {
            name: 'path',
            attribs: {
              d:
                'M16,10c0,0.553-0.048,1-0.601,1H4.601C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1h10.799C15.952,9,16,9.447,16,10z',
            },
          },
        ],
      };
    },
    'xP/0': function(e, t) {
      e.exports =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2Ny42OCIgaGVpZ2h0PSIxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBmNDZjYSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiPjxwYXRoIGQ9Ik0yMi43NyAyNFYxMWMwLTUuMzggNC4zLTkuNzUgOS42My05Ljc1UzQyLjAzIDUuNiA0Mi4wMyAxMXYxM20tMTIuODUtOS43NFYxMWMwLTEuOCAxLjQ0LTMuMjUgMy4yLTMuMjVTMzUuNiA5LjIgMzUuNiAxMXYzLjI1aC02LjQyeiIvPjxwYXRoIGQ9Ik02MS4yOCA5OC43NEg2LjRjLTEuNzcgMC0zLjItMS40NS0zLjItMy4yNVYyNy4yNWMwLTEuOCAxLjQ0LTMuMjUgMy4yLTMuMjVoNTQuODhjMS43NyAwIDMuMiAxLjQ1IDMuMiAzLjI1Vjk1LjVjMCAxLjgtMS40NCAzLjI1LTMuMiAzLjI1eiIvPjxwYXRoIGQ9Ik02MC45NiA5NS41VjI3LjI1YzAtMS44LTEuNDQtMy4yNS0zLjItMy4yNUg2LjRjLTEuNzcgMC0zLjIgMS40NS0zLjIgMy4yNVY5NS41YzAgMS44IDEuNDQgMy4yNSAzLjIgMy4yNWg1MS4zNWMxLjc3IDAgMy4yLTEuNDUgMy4yLTMuMjV6Ii8+PHBhdGggZD0iTTU2LjE0IDc3Ljc3djE0LjQ3SDM4LjVWNjkuNWgxNy42NXY0LjM1bS0yMC44Ny0yNy4xYy0yLjUgMC00Ljc1Ljk2LTYuNDYgMi41My0uMDMuMDMtLjA3LjA2LS4xLjFsLS40Ni40Ni0uMTQuMTUtLjQuNDctLjE0LjE4YTEwLjA2IDEwLjA2IDAgMCAwLS45NCAxLjU0bC0uMi40LS4xNS4zNy0uMTcuNDctLjEuMzctLjEzLjUyLS4wOC4zNS0uMS42LS4wNC4zLS4wNS45M1Y2M2gxOS4zdi02LjVjMC01LjQtNC4zLTkuNzUtOS42My05Ljc1eiIvPjxwYXRoIGQ9Ik0zNS4yOCAzMC41Yy0yLjc4IDAtNS4xMyAxLjgtNi4wMyA0LjI4LS4wMS4wNC0uMDMuMDctLjA0LjFhNi44IDYuOCAwIDAgMC0uMjQuOTRjLS4wMS4wNS0uMDIuMS0uMDIuMTZhNi43NyA2Ljc3IDAgMCAwLS4wOSAxLjAxdjMuMjVhNS42NiA1LjY2IDAgMCAwIC4wOSAxLjAxYy4wMS4wNS4wMS4xLjAyLjE2LjA2LjMyLjE0LjYzLjI0Ljk0LjAxLjA0LjAzLjA3LjA0LjEuOSAyLjUgMy4yNSA0LjMgNi4wMyA0LjMgMy41NCAwIDYuNDItMi45IDYuNDItNi41VjM3YzAtMy42LTIuODctNi41LTYuNDItNi41ek00OC4xMiA4OWMtLjQyIDAtLjgzLS4xNy0xLjEzLS40OGwtNC44LTQuODcgMi4yNy0yLjMgMy40IDMuNDNMNTQuOCA3My41bDIuNzIgMS43Mi04LjAyIDEzYy0uMjYuNDItLjcuNy0xLjE4Ljc1LS4wNy4wMi0uMTMuMDItLjIuMDJ6TTggOTAuNjJoMjUuNjd2My4yNUg4di0zLjI1em0wLTYuNWgyNS42N3YzLjI1SDh2LTMuMjV6bTAtNi41aDI1LjY3djMuMjVIOHYtMy4yNXoiLz48L3N2Zz4=';
    },
    y1MW: function(e, t, n) {
      'use strict';
      n('zpx+'),
        n('RwQI'),
        n('cM8k'),
        n('3EZN'),
        n('4SWW'),
        n('r0id'),
        n('lE7+'),
        n('XjK0'),
        n('LnO1'),
        n('3eMz'),
        n('dtAy'),
        n('DB+v'),
        n('Ph8W'),
        n('SCO9'),
        n('PN9k'),
        n('UQCJ'),
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.InnerSlider = void 0);
      var a = g(n('ERkP')),
        i = g(n('7nmT')),
        r = g(n('iE6P')),
        o = g(n('E/ZA')),
        c = g(n('O94r')),
        s = n('M4TR'),
        l = n('P1ZW'),
        u = n('frp7'),
        d = n('HJRI'),
        p = g(n('LaGA'));
      function g(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function f() {
        return (f =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          }).apply(this, arguments);
      }
      function A(e, t) {
        if (null == e) return {};
        var n,
          a,
          i = (function(e, t) {
            if (null == e) return {};
            var n,
              a,
              i = {},
              r = Object.keys(e);
            for (a = 0; a < r.length; a++)
              (n = r[a]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (a = 0; a < r.length; a++)
            (n = r[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function m(e) {
        return (m =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function M(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? M(n, !0).forEach(function(t) {
                b(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : M(n).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function L(e) {
        return (L = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function j(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function h(e, t) {
        return (h =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function b(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var N = (function(e) {
        function t(e) {
          var n;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, t),
            (n = (function(e, t) {
              return !t || ('object' !== m(t) && 'function' != typeof t)
                ? j(e)
                : t;
            })(this, L(t).call(this, e))),
            b(j(n), 'listRefHandler', function(e) {
              return (n.list = e);
            }),
            b(j(n), 'trackRefHandler', function(e) {
              return (n.track = e);
            }),
            b(j(n), 'adaptHeight', function() {
              if (n.props.adaptiveHeight && n.list) {
                var e = n.list.querySelector(
                  '[data-index="'.concat(n.state.currentSlide, '"]')
                );
                n.list.style.height = (0, s.getHeight)(e) + 'px';
              }
            }),
            b(j(n), 'UNSAFE_componentWillMount', function() {
              if (
                (n.ssrInit(),
                n.props.onInit && n.props.onInit(),
                n.props.lazyLoad)
              ) {
                var e = (0, s.getOnDemandLazySlides)(
                  y({}, n.props, {}, n.state)
                );
                e.length > 0 &&
                  (n.setState(function(t) {
                    return { lazyLoadedList: t.lazyLoadedList.concat(e) };
                  }),
                  n.props.onLazyLoad && n.props.onLazyLoad(e));
              }
            }),
            b(j(n), 'componentDidMount', function() {
              var e = y({ listRef: n.list, trackRef: n.track }, n.props);
              n.updateState(e, !0, function() {
                n.adaptHeight(), n.props.autoplay && n.autoPlay('update');
              }),
                'progressive' === n.props.lazyLoad &&
                  (n.lazyLoadTimer = setInterval(n.progressiveLazyLoad, 1e3)),
                (n.ro = new p.default(function() {
                  n.state.animating
                    ? (n.onWindowResized(!1),
                      n.callbackTimers.push(
                        setTimeout(function() {
                          return n.onWindowResized();
                        }, n.props.speed)
                      ))
                    : n.onWindowResized();
                })),
                n.ro.observe(n.list),
                Array.prototype.forEach.call(
                  document.querySelectorAll('.slick-slide'),
                  function(e) {
                    (e.onfocus = n.props.pauseOnFocus ? n.onSlideFocus : null),
                      (e.onblur = n.props.pauseOnFocus ? n.onSlideBlur : null);
                  }
                ),
                window &&
                  (window.addEventListener
                    ? window.addEventListener('resize', n.onWindowResized)
                    : window.attachEvent('onresize', n.onWindowResized));
            }),
            b(j(n), 'componentWillUnmount', function() {
              n.animationEndCallback && clearTimeout(n.animationEndCallback),
                n.lazyLoadTimer && clearInterval(n.lazyLoadTimer),
                n.callbackTimers.length &&
                  (n.callbackTimers.forEach(function(e) {
                    return clearTimeout(e);
                  }),
                  (n.callbackTimers = [])),
                window.addEventListener
                  ? window.removeEventListener('resize', n.onWindowResized)
                  : window.detachEvent('onresize', n.onWindowResized),
                n.autoplayTimer && clearInterval(n.autoplayTimer);
            }),
            b(j(n), 'UNSAFE_componentWillReceiveProps', function(e) {
              for (
                var t = y(
                    { listRef: n.list, trackRef: n.track },
                    e,
                    {},
                    n.state
                  ),
                  i = !1,
                  r = 0,
                  o = Object.keys(n.props);
                r < o.length;
                r++
              ) {
                var c = o[r];
                if (!e.hasOwnProperty(c)) {
                  i = !0;
                  break;
                }
                if (
                  'object' !== m(e[c]) &&
                  'function' != typeof e[c] &&
                  e[c] !== n.props[c]
                ) {
                  i = !0;
                  break;
                }
              }
              n.updateState(t, i, function() {
                n.state.currentSlide >= a.default.Children.count(e.children) &&
                  n.changeSlide({
                    message: 'index',
                    index:
                      a.default.Children.count(e.children) - e.slidesToShow,
                    currentSlide: n.state.currentSlide,
                  }),
                  e.autoplay ? n.autoPlay('update') : n.pause('paused');
              });
            }),
            b(j(n), 'componentDidUpdate', function() {
              if (
                (n.checkImagesLoad(),
                n.props.onReInit && n.props.onReInit(),
                n.props.lazyLoad)
              ) {
                var e = (0, s.getOnDemandLazySlides)(
                  y({}, n.props, {}, n.state)
                );
                e.length > 0 &&
                  (n.setState(function(t) {
                    return { lazyLoadedList: t.lazyLoadedList.concat(e) };
                  }),
                  n.props.onLazyLoad && n.props.onLazyLoad(e));
              }
              n.adaptHeight();
            }),
            b(j(n), 'onWindowResized', function(e) {
              n.debouncedResize && n.debouncedResize.cancel(),
                (n.debouncedResize = (0, o.default)(function() {
                  return n.resizeWindow(e);
                }, 50)),
                n.debouncedResize();
            }),
            b(j(n), 'resizeWindow', function() {
              var e =
                !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0];
              if (i.default.findDOMNode(n.track)) {
                var t = y(
                  { listRef: n.list, trackRef: n.track },
                  n.props,
                  {},
                  n.state
                );
                n.updateState(t, e, function() {
                  n.props.autoplay ? n.autoPlay('update') : n.pause('paused');
                }),
                  n.setState({ animating: !1 }),
                  clearTimeout(n.animationEndCallback),
                  delete n.animationEndCallback;
              }
            }),
            b(j(n), 'updateState', function(e, t, i) {
              var r = (0, s.initializedState)(e);
              (e = y({}, e, {}, r, { slideIndex: r.currentSlide })),
                (e = y({}, e, { left: (0, s.getTrackLeft)(e) }));
              var o = (0, s.getTrackCSS)(e);
              (t ||
                a.default.Children.count(n.props.children) !==
                  a.default.Children.count(e.children)) &&
                (r.trackStyle = o),
                n.setState(r, i);
            }),
            b(j(n), 'ssrInit', function() {
              if (n.props.variableWidth) {
                var e = 0,
                  t = 0,
                  i = [],
                  r = (0, s.getPreClones)(
                    y({}, n.props, {}, n.state, {
                      slideCount: n.props.children.length,
                    })
                  ),
                  o = (0, s.getPostClones)(
                    y({}, n.props, {}, n.state, {
                      slideCount: n.props.children.length,
                    })
                  );
                n.props.children.forEach(function(t) {
                  i.push(t.props.style.width), (e += t.props.style.width);
                });
                for (var c = 0; c < r; c++)
                  (t += i[i.length - 1 - c]), (e += i[i.length - 1 - c]);
                for (var l = 0; l < o; l++) e += i[l];
                for (var u = 0; u < n.state.currentSlide; u++) t += i[u];
                var d = { width: e + 'px', left: -t + 'px' };
                if (n.props.centerMode) {
                  var p = ''.concat(i[n.state.currentSlide], 'px');
                  d.left = 'calc('
                    .concat(d.left, ' + (100% - ')
                    .concat(p, ') / 2 ) ');
                }
                n.setState({ trackStyle: d });
              } else {
                var g = a.default.Children.count(n.props.children),
                  f = y({}, n.props, {}, n.state, { slideCount: g }),
                  A = (0, s.getPreClones)(f) + (0, s.getPostClones)(f) + g,
                  m = (100 / n.props.slidesToShow) * A,
                  M = 100 / A,
                  L =
                    (-M * ((0, s.getPreClones)(f) + n.state.currentSlide) * m) /
                    100;
                n.props.centerMode && (L += (100 - (M * m) / 100) / 2);
                var j = { width: m + '%', left: L + '%' };
                n.setState({ slideWidth: M + '%', trackStyle: j });
              }
            }),
            b(j(n), 'checkImagesLoad', function() {
              var e = document.querySelectorAll('.slick-slide img'),
                t = e.length,
                a = 0;
              Array.prototype.forEach.call(e, function(e) {
                var i = function() {
                  return ++a && a >= t && n.onWindowResized();
                };
                if (e.onclick) {
                  var r = e.onclick;
                  e.onclick = function() {
                    r(), e.parentNode.focus();
                  };
                } else
                  e.onclick = function() {
                    return e.parentNode.focus();
                  };
                e.onload ||
                  (n.props.lazyLoad
                    ? (e.onload = function() {
                        n.adaptHeight(),
                          n.callbackTimers.push(
                            setTimeout(n.onWindowResized, n.props.speed)
                          );
                      })
                    : ((e.onload = i),
                      (e.onerror = function() {
                        i(),
                          n.props.onLazyLoadError && n.props.onLazyLoadError();
                      })));
              });
            }),
            b(j(n), 'progressiveLazyLoad', function() {
              for (
                var e = [],
                  t = y({}, n.props, {}, n.state),
                  a = n.state.currentSlide;
                a < n.state.slideCount + (0, s.getPostClones)(t);
                a++
              )
                if (n.state.lazyLoadedList.indexOf(a) < 0) {
                  e.push(a);
                  break;
                }
              for (
                var i = n.state.currentSlide - 1;
                i >= -(0, s.getPreClones)(t);
                i--
              )
                if (n.state.lazyLoadedList.indexOf(i) < 0) {
                  e.push(i);
                  break;
                }
              e.length > 0
                ? (n.setState(function(t) {
                    return { lazyLoadedList: t.lazyLoadedList.concat(e) };
                  }),
                  n.props.onLazyLoad && n.props.onLazyLoad(e))
                : n.lazyLoadTimer &&
                  (clearInterval(n.lazyLoadTimer), delete n.lazyLoadTimer);
            }),
            b(j(n), 'slideHandler', function(e) {
              var t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                a = n.props,
                i = a.asNavFor,
                r = a.beforeChange,
                o = a.onLazyLoad,
                c = a.speed,
                l = a.afterChange,
                u = n.state.currentSlide,
                d = (0, s.slideHandler)(
                  y({ index: e }, n.props, {}, n.state, {
                    trackRef: n.track,
                    useCSS: n.props.useCSS && !t,
                  })
                ),
                p = d.state,
                g = d.nextState;
              if (p) {
                r && r(u, p.currentSlide);
                var f = p.lazyLoadedList.filter(function(e) {
                  return n.state.lazyLoadedList.indexOf(e) < 0;
                });
                o && f.length > 0 && o(f),
                  n.setState(p, function() {
                    i && i.innerSlider.slideHandler(e),
                      g &&
                        (n.animationEndCallback = setTimeout(function() {
                          var e = g.animating,
                            t = A(g, ['animating']);
                          n.setState(t, function() {
                            n.callbackTimers.push(
                              setTimeout(function() {
                                return n.setState({ animating: e });
                              }, 10)
                            ),
                              l && l(p.currentSlide),
                              delete n.animationEndCallback;
                          });
                        }, c));
                  });
              }
            }),
            b(j(n), 'changeSlide', function(e) {
              var t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                a = y({}, n.props, {}, n.state),
                i = (0, s.changeSlide)(a, e);
              (0 === i || i) &&
                (!0 === t ? n.slideHandler(i, t) : n.slideHandler(i));
            }),
            b(j(n), 'clickHandler', function(e) {
              !1 === n.clickable && (e.stopPropagation(), e.preventDefault()),
                (n.clickable = !0);
            }),
            b(j(n), 'keyHandler', function(e) {
              var t = (0, s.keyHandler)(e, n.props.accessibility, n.props.rtl);
              '' !== t && n.changeSlide({ message: t });
            }),
            b(j(n), 'selectHandler', function(e) {
              n.changeSlide(e);
            }),
            b(j(n), 'disableBodyScroll', function() {
              window.ontouchmove = function(e) {
                (e = e || window.event).preventDefault && e.preventDefault(),
                  (e.returnValue = !1);
              };
            }),
            b(j(n), 'enableBodyScroll', function() {
              window.ontouchmove = null;
            }),
            b(j(n), 'swipeStart', function(e) {
              n.props.verticalSwiping && n.disableBodyScroll();
              var t = (0, s.swipeStart)(e, n.props.swipe, n.props.draggable);
              '' !== t && n.setState(t);
            }),
            b(j(n), 'swipeMove', function(e) {
              var t = (0, s.swipeMove)(
                e,
                y({}, n.props, {}, n.state, {
                  trackRef: n.track,
                  listRef: n.list,
                  slideIndex: n.state.currentSlide,
                })
              );
              t && (t.swiping && (n.clickable = !1), n.setState(t));
            }),
            b(j(n), 'swipeEnd', function(e) {
              var t = (0, s.swipeEnd)(
                e,
                y({}, n.props, {}, n.state, {
                  trackRef: n.track,
                  listRef: n.list,
                  slideIndex: n.state.currentSlide,
                })
              );
              if (t) {
                var a = t.triggerSlideHandler;
                delete t.triggerSlideHandler,
                  n.setState(t),
                  void 0 !== a &&
                    (n.slideHandler(a),
                    n.props.verticalSwiping && n.enableBodyScroll());
              }
            }),
            b(j(n), 'slickPrev', function() {
              n.callbackTimers.push(
                setTimeout(function() {
                  return n.changeSlide({ message: 'previous' });
                }, 0)
              );
            }),
            b(j(n), 'slickNext', function() {
              n.callbackTimers.push(
                setTimeout(function() {
                  return n.changeSlide({ message: 'next' });
                }, 0)
              );
            }),
            b(j(n), 'slickGoTo', function(e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (((e = Number(e)), isNaN(e))) return '';
              n.callbackTimers.push(
                setTimeout(function() {
                  return n.changeSlide(
                    {
                      message: 'index',
                      index: e,
                      currentSlide: n.state.currentSlide,
                    },
                    t
                  );
                }, 0)
              );
            }),
            b(j(n), 'play', function() {
              var e;
              if (n.props.rtl)
                e = n.state.currentSlide - n.props.slidesToScroll;
              else {
                if (!(0, s.canGoNext)(y({}, n.props, {}, n.state))) return !1;
                e = n.state.currentSlide + n.props.slidesToScroll;
              }
              n.slideHandler(e);
            }),
            b(j(n), 'autoPlay', function(e) {
              n.autoplayTimer && clearInterval(n.autoplayTimer);
              var t = n.state.autoplaying;
              if ('update' === e) {
                if ('hovered' === t || 'focused' === t || 'paused' === t)
                  return;
              } else if ('leave' === e) {
                if ('paused' === t || 'focused' === t) return;
              } else if ('blur' === e && ('paused' === t || 'hovered' === t))
                return;
              (n.autoplayTimer = setInterval(
                n.play,
                n.props.autoplaySpeed + 50
              )),
                n.setState({ autoplaying: 'playing' });
            }),
            b(j(n), 'pause', function(e) {
              n.autoplayTimer &&
                (clearInterval(n.autoplayTimer), (n.autoplayTimer = null));
              var t = n.state.autoplaying;
              'paused' === e
                ? n.setState({ autoplaying: 'paused' })
                : 'focused' === e
                ? ('hovered' !== t && 'playing' !== t) ||
                  n.setState({ autoplaying: 'focused' })
                : 'playing' === t && n.setState({ autoplaying: 'hovered' });
            }),
            b(j(n), 'onDotsOver', function() {
              return n.props.autoplay && n.pause('hovered');
            }),
            b(j(n), 'onDotsLeave', function() {
              return (
                n.props.autoplay &&
                'hovered' === n.state.autoplaying &&
                n.autoPlay('leave')
              );
            }),
            b(j(n), 'onTrackOver', function() {
              return n.props.autoplay && n.pause('hovered');
            }),
            b(j(n), 'onTrackLeave', function() {
              return (
                n.props.autoplay &&
                'hovered' === n.state.autoplaying &&
                n.autoPlay('leave')
              );
            }),
            b(j(n), 'onSlideFocus', function() {
              return n.props.autoplay && n.pause('focused');
            }),
            b(j(n), 'onSlideBlur', function() {
              return (
                n.props.autoplay &&
                'focused' === n.state.autoplaying &&
                n.autoPlay('blur')
              );
            }),
            b(j(n), 'render', function() {
              var e,
                t,
                i,
                r = (0, c.default)('slick-slider', n.props.className, {
                  'slick-vertical': n.props.vertical,
                  'slick-initialized': !0,
                }),
                o = y({}, n.props, {}, n.state),
                p = (0, s.extractObject)(o, [
                  'fade',
                  'cssEase',
                  'speed',
                  'infinite',
                  'centerMode',
                  'focusOnSelect',
                  'currentSlide',
                  'lazyLoad',
                  'lazyLoadedList',
                  'rtl',
                  'slideWidth',
                  'slideHeight',
                  'listHeight',
                  'vertical',
                  'slidesToShow',
                  'slidesToScroll',
                  'slideCount',
                  'trackStyle',
                  'variableWidth',
                  'unslick',
                  'centerPadding',
                ]),
                g = n.props.pauseOnHover;
              if (
                ((p = y({}, p, {
                  onMouseEnter: g ? n.onTrackOver : null,
                  onMouseLeave: g ? n.onTrackLeave : null,
                  onMouseOver: g ? n.onTrackOver : null,
                  focusOnSelect: n.props.focusOnSelect ? n.selectHandler : null,
                })),
                !0 === n.props.dots &&
                  n.state.slideCount >= n.props.slidesToShow)
              ) {
                var A = (0, s.extractObject)(o, [
                    'dotsClass',
                    'slideCount',
                    'slidesToShow',
                    'currentSlide',
                    'slidesToScroll',
                    'clickHandler',
                    'children',
                    'customPaging',
                    'infinite',
                    'appendDots',
                  ]),
                  m = n.props.pauseOnDotsHover;
                (A = y({}, A, {
                  clickHandler: n.changeSlide,
                  onMouseEnter: m ? n.onDotsLeave : null,
                  onMouseOver: m ? n.onDotsOver : null,
                  onMouseLeave: m ? n.onDotsLeave : null,
                })),
                  (e = a.default.createElement(u.Dots, A));
              }
              var M = (0, s.extractObject)(o, [
                'infinite',
                'centerMode',
                'currentSlide',
                'slideCount',
                'slidesToShow',
                'prevArrow',
                'nextArrow',
              ]);
              (M.clickHandler = n.changeSlide),
                n.props.arrows &&
                  ((t = a.default.createElement(d.PrevArrow, M)),
                  (i = a.default.createElement(d.NextArrow, M)));
              var L = null;
              n.props.vertical && (L = { height: n.state.listHeight });
              var j = null;
              !1 === n.props.vertical
                ? !0 === n.props.centerMode &&
                  (j = { padding: '0px ' + n.props.centerPadding })
                : !0 === n.props.centerMode &&
                  (j = { padding: n.props.centerPadding + ' 0px' });
              var h = y({}, L, {}, j),
                b = n.props.touchMove,
                N = {
                  className: 'slick-list',
                  style: h,
                  onClick: n.clickHandler,
                  onMouseDown: b ? n.swipeStart : null,
                  onMouseMove: n.state.dragging && b ? n.swipeMove : null,
                  onMouseUp: b ? n.swipeEnd : null,
                  onMouseLeave: n.state.dragging && b ? n.swipeEnd : null,
                  onTouchStart: b ? n.swipeStart : null,
                  onTouchMove: n.state.dragging && b ? n.swipeMove : null,
                  onTouchEnd: b ? n.swipeEnd : null,
                  onTouchCancel: n.state.dragging && b ? n.swipeEnd : null,
                  onKeyDown: n.props.accessibility ? n.keyHandler : null,
                },
                I = { className: r, dir: 'ltr', style: n.props.style };
              return (
                n.props.unslick &&
                  ((N = { className: 'slick-list' }), (I = { className: r })),
                a.default.createElement(
                  'div',
                  I,
                  n.props.unslick ? '' : t,
                  a.default.createElement(
                    'div',
                    f({ ref: n.listRefHandler }, N),
                    a.default.createElement(
                      l.Track,
                      f({ ref: n.trackRefHandler }, p),
                      n.props.children
                    )
                  ),
                  n.props.unslick ? '' : i,
                  n.props.unslick ? '' : e
                )
              );
            }),
            (n.list = null),
            (n.track = null),
            (n.state = y({}, r.default, {
              currentSlide: n.props.initialSlide,
              slideCount: a.default.Children.count(n.props.children),
            })),
            (n.callbackTimers = []),
            (n.clickable = !0),
            (n.debouncedResize = null),
            n
          );
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && h(e, t);
          })(t, e),
          t
        );
      })(a.default.Component);
      t.InnerSlider = N;
    },
    yPRz: function(e, t, n) {
      n('p+GS'),
        n('AA1/'),
        n('dtAy'),
        (e.exports = {
          isFunction: function(e) {
            return 'function' == typeof e;
          },
          isArray: function(e) {
            return '[object Array]' === Object.prototype.toString.apply(e);
          },
          each: function(e, t) {
            for (var n = 0, a = e.length; n < a && !1 !== t(e[n], n); n++);
          },
        });
    },
    zTaV: function(e, t) {
      e.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAb4AAAAxCAMAAACSwjxiAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABqlBMVEW8vLxycnIAAABvb2+CgoIuLi4JCQkHBwcrKyuFhYWurq5QUFAVFRUEBAQYGBhaWlqysrKmpqYKCgpmZmYUFBRTU1NNTU0LCwsBAQF8fHytra0aGhonJydYWFhAQEACAgIgICCvr68zMzOZmZkmJiafn58GBga7u7tFRUVPT0+EhIRJSUlxcXE4ODhISEiampplZWWxsbG4uLgNDQ22trZCQkISEhKRkZEODg46OjppaWmkpKQxMTFWVlaKiooQEBBBQUGTk5N0dHQ0NDSoqKh9fX01NTUPDw9DQ0MyMjKIiIi3t7cfHx+Li4uqqqoXFxdnZ2c8PDySkpK1tbWWlpYDAwMdHR0wMDBhYWGQkJChoaE3NzcICAirq6unp6c/Pz9eXl5LS0u6urohISFubm5wcHB4eHicnJx3d3eMjIxXV1dOTk51dXVqamqAgIBoaGhzc3MpKSkMDAygoKBfX189PT0kJCRjY2NRUVFEREQiIiKzs7OPj4+bm5sWFhZKSkpra2tGRkZUVFRHR0cFBQWUlJSGhoYRERElJSU5OTldXV2jo6O5ubn+/v55wfRQAAAAAWJLR0SNGwzi1QAAAkBJREFUeNrt2NlT01AUBvDTT7SgBttSSiyKtSypCi5dVNpqBRSoSHGhuCEoaFFcUBRccF9x+aNNOqSkTHnx5Y6T7/fQnDvndOZkzmS5ESEiIiIiIiIiIiIiIiIiIvo3HmzZGNZt3eatb9i0dPuOnVrjLp/qxsnkD1TGZ4dNCDaHWvTdm5SGW7Fnb9u+yH7VrZNIFJXxrYXteodPpLMraNQujeGA+XtQP6S6dZJu9Njjs8PDOGItj4aO1SyNexNJaxnVfKqbdz1/IGU/8Crh8YidPaGfDJuHXqQd+Qyy5eQpnFbdvetFc2F7fHYYRipzpsWb7RNrRDGRfgwYjvxZ1JfrQ/Co7t7tunHOfp2shO0YHAoO53XtvMjIBYxmAkMFZ97IaRlznRzDRdXtu5w/cMneDayHl4HBKyINejAuMl6cuIq66tJrmLgev3FzEk2q+3e5fOKWPZP1sA/6lJWcLj/bbgN3NpTOpGCaTeOu6v7d7R5KsjYTR9iJsXI2XZ7VHHC/utT0YP7ho5HHeKL6BNwtC5vHESaLuXJ2AU/NK+2ZvpgoVJXa/x7Gc9Un4G4vliwdWF4adYRSjzkr24ZxkZd4VUJPVam8fmO9iK4sNqrun6TGN88Ssua+/G1xVuSd9n5FBtBflW+2bqTGB3xU3TlJrU/Wn9D6+cvXyW8SX8Z3c5/uDUw584UfWmx+FT9nVHdOUmt8hme1K9Br3kF/IWWtF5A3nPnf0wktkv6junEiIiIiIiIiIiIiIiIiIvo//QVVY1KqRjhDSwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wMS0xNlQwMDozNjoyMC0wNjowMPIskgoAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDEtMTZUMDA6MzY6MjAtMDY6MDCDcSq2AAAAAElFTkSuQmCC';
    },
  },
]);
//# sourceMappingURL=component---src-pages-testpage-js-303e243a18a39f51aa26.js.map
