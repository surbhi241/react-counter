(this["webpackJsonpreact-counter"]=this["webpackJsonpreact-counter"]||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(4),s=n.n(c),l=(n(9),n(10),n(3)),i=n(0),j=function(t){var e=t.color;return Object(i.jsx)("svg",{width:"17",height:"17",viewBox:"0 0 17 17",children:Object(i.jsx)("g",{fill:"none",fillRule:"evenodd",children:Object(i.jsx)("g",{children:Object(i.jsx)("g",{children:Object(i.jsx)("g",{children:Object(i.jsxs)("g",{children:[Object(i.jsx)("g",{children:Object(i.jsx)("path",{d:"M0 0L16 0 16 16 0 16z",transform:"translate(-1165.000000, -477.000000) translate(1152.000000, 466.000000) translate(5.000000, 5.000000) translate(8.666667, 6.666667)"})}),Object(i.jsxs)("g",{fillRule:"nonzero",children:[Object(i.jsx)("g",{fill:e,class:"svgIcons",children:Object(i.jsx)("path",{d:"M9.667 5.667L5.667 5.667 5.667 9.667 4.333 9.667 4.333 5.667 0.333 5.667 0.333 4.333 4.333 4.333 4.333 0.333 5.667 0.333 5.667 4.333 9.667 4.333z",transform:"translate(-1165.000000, -477.000000) translate(1152.000000, 466.000000) translate(5.000000, 5.000000) translate(8.666667, 6.666667) translate(3.000000, 3.000000)"})}),Object(i.jsx)("path",{d:"M0 0H16V16H0z",transform:"translate(-1165.000000, -477.000000) translate(1152.000000, 466.000000) translate(5.000000, 5.000000) translate(8.666667, 6.666667)"})]}),Object(i.jsx)("path",{d:"M0 0H16V16H0z",transform:"translate(-1165.000000, -477.000000) translate(1152.000000, 466.000000) translate(5.000000, 5.000000) translate(8.666667, 6.666667)"})]})})})})})})},o=function(t){var e=t.color;return Object(i.jsx)("svg",{width:"16",height:"17",viewBox:"0 0 16 17",children:Object(i.jsx)("g",{fill:"none",fillRule:"evenodd",children:Object(i.jsx)("g",{children:Object(i.jsx)("g",{children:Object(i.jsx)("g",{children:Object(i.jsx)("g",{children:Object(i.jsx)("g",{children:Object(i.jsxs)("g",{children:[Object(i.jsx)("g",{children:Object(i.jsx)("path",{d:"M0 0L16 0 16 15.974 0 15.974z",transform:"translate(-346.000000, -932.000000) translate(32.000000, 635.000000) translate(0.000000, 30.000000) translate(314.000000, 268.000000)"})}),Object(i.jsx)("g",{fill:e,fillRule:"nonzero",class:"svgIcons",children:Object(i.jsx)("g",{children:Object(i.jsx)("path",{d:"M9.333 1.331L5.333 1.331 4 1.331 0 1.331 0 0 4 0 9.333 0z",transform:"translate(-346.000000, -932.000000) translate(32.000000, 635.000000) translate(0.000000, 30.000000) translate(314.000000, 268.000000) translate(3.333333, 7.321252)"})})}),Object(i.jsx)("path",{d:"M0 0H16V15.974H0z",transform:"translate(-346.000000, -932.000000) translate(32.000000, 635.000000) translate(0.000000, 30.000000) translate(314.000000, 268.000000)"})]})})})})})})})})},d=function(t){var e=t.maxCount,n=void 0===e?1e3:e,r=t.initial,c=void 0===r?1:r,s=Object(a.useState)(c),d=Object(l.a)(s,2),u=d[0],b=d[1],h=Object(a.useState)(!1),x=Object(l.a)(h,2),O=x[0],g=x[1],f=function(t){if("add"===t&&u<n)b(u+1);else if("subtract"===t&&u>1){b(u-1)}};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"div-counter-wrapper",children:[Object(i.jsxs)("div",{className:"counter-container",children:[Object(i.jsx)("button",{className:"btn-count-right",onClick:function(){return f("subtract")},disabled:u<=1,children:Object(i.jsx)(o,{})}),Object(i.jsx)("input",{className:"input-count",type:"text",value:u,onChange:function(t){var e=Number(t.target.value);"initialCount"!==t.target.name||!Number(e)||t.target.value>n||(b(e),g(!1)),t.target.value>n&&g(!0)},name:"initialCount",placeholder:"add initial counter value"}),Object(i.jsx)("button",{className:"btn-count-left",onClick:function(){return f("add")},disabled:u>=n,children:Object(i.jsx)(j,{})})]}),u>=n||O?Object(i.jsx)("p",{className:"error-msg",children:"Note: Initial count can not be greater than maximum count, you can increase maximum count."}):null]})})};var u=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(d,{})})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),a(t),r(t),c(t),s(t)}))};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(u,{})}),document.getElementById("root")),b()},9:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.9a74d32c.chunk.js.map