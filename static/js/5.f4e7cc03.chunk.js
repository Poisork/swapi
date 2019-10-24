(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{100:function(e,t,a){"use strict";a.r(t);var n=a(63),r=a(59),c=a(0),s=a.n(c),i=a(64),u=a(60),o=a(61),l=a(94),p=a.n(l),f=(a(97),function(e){var t=e.height,a=e.type,n=e.labels,r=e.datasets,i={type:a,data:{labels:n,datasets:r},options:{title:{display:!0,text:"SWAPI Chart.js",fontSize:20},scales:{yAxes:[{gridLines:{display:!1}}],xAxes:[{gridLines:{display:!1}}]},maintainAspectRatio:!1}};return Object(c.useEffect)(function(){var e=document.getElementById("canvas-1").getContext("2d"),t=new p.a(e,i);return function(){return t.destroy()}},[r]),s.a.createElement("div",{className:"wrapper-chart"},s.a.createElement("canvas",{height:t,id:"canvas-1"}))});t.default=function(){var e=Object(c.useState)(1),t=Object(r.a)(e,2),a=t[0],l=t[1],p=Object(i.a)("people/?page=".concat(a)),d=Object(r.a)(p,4),m=d[0],v=d[1],g=d[2],b=d[3],h=g?g.reduce(function(e,t){var a=t.mass,r=t.height,c=t.name,s=a.match(/\d/)?a.replace(",",""):"0",i=r.match(/\d/)?r.replace(",",""):"0";return[].concat(Object(n.a)(e),[{validMass:s,validHeight:i,name:c}])},[]):[],O=function(e,t,a,n){return{label:e,backgroundColor:t,data:a.map(function(e){return e[n]})}},y=[O("Character mass","rgba(52, 152, 219, 0.75)",h,"validMass"),O("Character growth","rgba(231, 76, 60, 0.75)",h,"validHeight")],j=h.map(function(e){return e.name});return s.a.createElement(s.a.Fragment,null,s.a.createElement(o.a,{setPage:l,count:b,activePage:a,pageSize:10}),m?s.a.createElement(u.a,null):s.a.createElement(f,{height:"600",type:"line",labels:j,datasets:y}),v)}},60:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(0),r=a.n(n);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createElement("path",{"ng-attr-d":"{{config.pathCmd}}","ng-attr-fill":"{{config.color}}",stroke:"none",d:"M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50",fill:"#eca611",transform:"rotate(329.857 50 51)"},r.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 50 51;360 50 51",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"})),u=function(e){var t=e.svgRef,a=s(e,["svgRef"]);return r.a.createElement("svg",c({width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:"lds-eclipse",style:{background:"none"},ref:t},a),i)},o=r.a.forwardRef(function(e,t){return r.a.createElement(u,c({svgRef:t},e))});a.p},61:function(e,t,a){"use strict";var n=a(63),r=a(0),c=a.n(r);a(62);t.a=c.a.memo(function(e){var t=e.pageSize,a=e.count,r=e.activePage,s=e.setPage;return a?c.a.createElement("div",{className:"wrapper-pagination"},Object(n.a)(Array(Math.ceil(a/t))).map(function(e,t){return c.a.createElement("p",{key:t,className:t+1===r?"activePage":"",onClick:function(){return s(t+1)}},t+1)})):null})},62:function(e,t,a){},64:function(e,t,a){"use strict";var n=a(59),r=a(0),c=a(65),s=a.n(c),i=a(66),u=a(67),o=a.n(u),l=function(){var e=Object(i.a)(s.a.mark(function e(t){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o()("".concat("https://swapi.co/api","/").concat(t));case 3:return a=e.sent,e.abrupt("return",a);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}();a.d(t,"a",function(){return p});var p=function(e){var t=Object(r.useState)(null),a=Object(n.a)(t,2),c=a[0],s=a[1],i=Object(r.useState)(!0),u=Object(n.a)(i,2),o=u[0],p=u[1],f=Object(r.useState)(null),d=Object(n.a)(f,2),m=d[0],v=d[1],g=Object(r.useState)(null),b=Object(n.a)(g,2),h=b[0],O=b[1];return Object(r.useEffect)(function(){p(!0),l(e).then(function(e){if(e.data){var t=e.data;p(null),v(t.count),O(t.results)}else e.response?(p(null),s("Error.Error status: "+e.response.status)):(p(null),s("Error:"+e.message))})},[e]),[o,c,h,m]}},97:function(e,t,a){}}]);
//# sourceMappingURL=5.f4e7cc03.chunk.js.map