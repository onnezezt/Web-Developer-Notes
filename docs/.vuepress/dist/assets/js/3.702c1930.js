(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{320:function(n,e,t){},372:function(n,e,t){"use strict";var r=t(3),i=t(29).findIndex,u=t(68),l=t(20),d=!0,s=l("findIndex");"findIndex"in[]&&Array(1).findIndex((function(){d=!1})),r({target:"Array",proto:!0,forced:d||!s},{findIndex:function(n){return i(this,n,arguments.length>1?arguments[1]:void 0)}}),u("findIndex")},373:function(n,e,t){"use strict";var r=t(320);t.n(r).a},402:function(n,e,t){"use strict";t.r(e);t(372),t(43),t(44);var r={name:"TableOfContents",props:{includeLevel:{type:Array,required:!1,default:function(){return[2,3]}}},computed:{headers:function(){if(this.$page&&this.$page.headers){var n=this.includeLevel[0],e=this.includeLevel[1];return function t(r){for(var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n,u=[],l=0;l!==r.length;){var d=r.slice(l+1).findIndex((function(n){return n.level===i})),s=-1===d?r.length:d+l+1,c=r[l];if(c.level>=i&&c.level<=e){var o=r.slice(l+1,s),a=i<e&&o.length>0?t(o,i+1):null;u.push(Object.assign(Object.assign({},c),{children:a}))}l=s}return u}(this.$page.headers)}return null}},render:function(n){if(!this.headers)return null;return n("div",[function e(t){return n("ul",t.map((function(t){return n("li",[n("RouterLink",{props:{to:"#".concat(t.slug)}},t.title),t.children?e(t.children):null])})))}(this.headers)])}},i=(t(373),t(4)),u=Object(i.a)(r,void 0,void 0,!1,null,"1861018d",null);e.default=u.exports}}]);