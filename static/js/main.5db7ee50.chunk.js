(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{21:function(e,t,a){e.exports=a(38)},26:function(e,t,a){},27:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a(6),o=a(7),c=a(0),s=a.n(c),u=a(19),i=a.n(u),l=a(10),m=a(1),f=(a(26),a(27),function(){return s.a.createElement("nav",{className:"navbar"},s.a.createElement(l.b,{className:"navbar-title",to:"/"},"Competitive Programming Portfolio"))}),d=(a(33),function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"main-contents"},s.a.createElement("div",{className:"main-contents-title"},"Competitive Programming Portfolio \u3068\u306f\uff1f"),s.a.createElement("hr",null),s.a.createElement("div",{className:"description"},"AtCoder, Codeforces, TopCoder, yukicoder\u306e\u30e6\u30fc\u30b6\u540d\u304b\u3089\u60c5\u5831\u3092\u53d6\u5f97\u3057\u3001\u7d71\u8a08\u60c5\u5831\u3092\u53d6\u5f97\u3059\u308b\u30b5\u30a4\u30c8\u3067\u3059\u3002",s.a.createElement("br",null),s.a.createElement("a",{href:"https://twitter.com/ageprocpp",target:"_blank",rel:"noopener noreferrer"},"@ageprocpp"),"\u304c\u904b\u55b6\u3057\u3066\u3044\u307e\u3059\u3002")),s.a.createElement("div",{className:"main-contents"},s.a.createElement("div",{className:"main-contents-title"},"\u53d6\u5f97\u3067\u304d\u308b\u3082\u306e"),s.a.createElement("hr",null),s.a.createElement("div",{className:"description"},"\u6b63\u89e3\u6570\u306f\u3082\u3061\u308d\u3093\u3001\u63d0\u51fa\u3057\u305f\u30b3\u30fc\u30c9\u306e\u7dcf\u9577, \u5f97\u70b9\u306e\u5408\u8a08, streak\u306a\u3069\u3092\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002",s.a.createElement("br",null),"\u53d6\u5f97\u306b\u306f\u3001AtCoder Problems API, Codeforces API, TopCoder API, yukicoder API\u3092\u305d\u308c\u305e\u308c\u5229\u7528\u3057\u3066\u3044\u307e\u3059\u3002",s.a.createElement("br",null),"\u8ffd\u52a0\u3057\u3066\u307b\u3057\u3044\u3082\u306e\u304c\u3042\u308c\u3070\u3001\u9023\u7d61\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))}),E=(a(34),a(35),Object(m.e)((function(e){var t,a=Object(c.useState)(e.username),n=Object(o.a)(a,2),r=n[0],u=n[1],i=Object(c.useState)(!1),l=Object(o.a)(i,2),m=l[0],f=l[1];return Object(c.useEffect)((function(){m&&(e.history.push("/portfolio"),f(!1))}),[m,e.history]),"atcoder"===e.contestSite&&(t="AtCoder"),"codeforces"===e.contestSite&&(t="Codeforces"),"topcoder"===e.contestSite&&(t="TopCoder"),"yukicoder"===e.contestSite&&(t="yukicoder"),s.a.createElement("li",{className:"form"},s.a.createElement("div",{className:"form-contents"},s.a.createElement("div",{className:"form-title"},t),s.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.setInformation(e.contestSite,r),f(!0)}},s.a.createElement("input",{type:"text",className:"username",value:r,onChange:function(e){u(e.target.value)}}))))}))),p=function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement("hr",null),s.a.createElement("ul",{className:"forms"},s.a.createElement(E,{contestSite:"atcoder",setInformation:e.setInformation,username:e.usernames.atcoder}),s.a.createElement(E,{contestSite:"codeforces",setInformation:e.setInformation,username:e.usernames.codeforces}),s.a.createElement(E,{contestSite:"topcoder",setInformation:e.setInformation,username:e.usernames.topcoder}),s.a.createElement(E,{contestSite:"yukicoder",setInformation:e.setInformation,username:e.usernames.yukicoder})))},v=a(16),b=(a(36),a(37),function(e){return s.a.createElement("div",{className:"portfolio-content"},s.a.createElement("div",{className:"portfolio-content-title"},e.title),s.a.createElement("div",{className:"portfolio-content-value"},e.value,e.valueUnit),s.a.createElement("div",{className:"portfolio-content-subValue"},e.subValue,e.subValueUnit))}),C=function(e){var t=Object(c.useState)(0),a=Object(o.a)(t,2),u=a[0],i=a[1],l=Object(c.useState)({}),m=Object(o.a)(l,2),f=m[0],d=m[1];return Object(c.useEffect)((function(){"atcoder"===e.focusedContestSite&&(i(2),fetch("https://kenkoooo.com/atcoder/atcoder-api/v2/user_info?user="+e.username).then((function(e){return e.json()})).then((function(e){i((function(e){return e-1})),d((function(t){return Object(r.a)(Object(r.a)({},t),{},{acCount:e.accepted_count,acCountRank:e.accepted_count_rank+1,ratedPointSum:e.rated_point_sum,ratedPointSumRank:e.rated_point_sum_rank+1})}))})).catch((function(e){console.error(e)})),fetch("https://kenkoooo.com/atcoder/resources/merged-problems.json").then((function(e){return e.json()})).then((function(t){i((function(e){return e-1}));var a,o=Object(n.a)({},e.username,0),c=Object(v.a)(t);try{for(c.s();!(a=c.n()).done;){var s=a.value;null!==s.first_user_id&&(void 0===o[s.first_user_id]?o[s.first_user_id]=1:o[s.first_user_id]++)}}catch(k){c.e(k)}finally{c.f()}var u=1;for(var l in o)o[l]>o[e.username]&&u++;d((function(t){return Object(r.a)(Object(r.a)({},t),{},{firstAcCount:o[e.username],firstAcRank:u})}));var m,f=Object(n.a)({},e.username,0),E=Object(v.a)(t);try{for(E.s();!(m=E.n()).done;){var p=m.value;null!==p.fastest_user_id&&(void 0===f[p.fastest_user_id]?f[p.fastest_user_id]=1:f[p.fastest_user_id]++)}}catch(k){E.e(k)}finally{E.f()}var b=1;for(var C in f)f[C]>f[e.username]&&b++;d((function(t){return Object(r.a)(Object(r.a)({},t),{},{fastestCodeCount:f[e.username],fastestCodeRank:b})}))})))}),[e.focusedContestSite,e.username]),""===e.focusedContestSite||""===e.username?s.a.createElement(s.a.Fragment,null):u?s.a.createElement("div",{className:"loading"},"Loading..."):s.a.createElement(s.a.Fragment,null,s.a.createElement("hr",null),s.a.createElement("div",{className:"portfolio-contents"},s.a.createElement(b,{title:"AC Count",value:f.acCount,valueUnit:"",subValue:f.acCountRank,subValueUnit:f.acCountSumRank%10===1?"st":f.acCountSumRank%10===2?"nd":"th"}),s.a.createElement(b,{title:"Rated Point Sum",value:f.ratedPointSum,valueUnit:"pt",subValue:f.ratedPointSumRank,subValueUnit:f.ratedPointSumRank%10===1?"st":f.ratedPointSumRank%10===2?"nd":"th"}),s.a.createElement(b,{title:"First AC",value:f.firstAcCount,valueUnit:"",subValue:f.firstAcRank,subValueUnit:f.firstAcRank%10===1?"st":f.firstAcRank%10===2?"nd":"th"}),s.a.createElement(b,{title:"Fastest Code",value:f.fastestCodeCount,valueUnit:"",subValue:f.fastestCodeRank,subValueUnit:f.fastestCodeRank%10===1?"st":f.fastestCodeRank%10===2?"nd":"th"})))},k=function(){var e=Object(c.useState)({atcoder:"",codeforces:"",topcoder:"",yukicoder:""}),t=Object(o.a)(e,2),a=t[0],u=t[1],i=Object(c.useState)(""),E=Object(o.a)(i,2),v=E[0],b=E[1];return s.a.createElement("div",{className:"app"},s.a.createElement(l.a,null,s.a.createElement("div",{className:"main"},s.a.createElement(f,null),s.a.createElement(m.a,{exact:!0,path:"/",component:d}),s.a.createElement(p,{setInformation:function(e,t){b(e),u((function(a){return Object(r.a)(Object(r.a)({},a),{},Object(n.a)({},e,t))}))},usernames:a}),s.a.createElement(m.a,{path:"/portfolio",render:function(){return s.a.createElement(C,{focusedContestSite:v,username:a[v]})}}))))};i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(k,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.5db7ee50.chunk.js.map