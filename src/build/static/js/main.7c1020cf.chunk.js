(this["webpackJsonpreact-rest-countries"]=this["webpackJsonpreact-rest-countries"]||[]).push([[0],[,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),s=n.n(c),i=n(3),r=n.n(i),u=(n(9),n(10),n(4)),o=(n(11),n(0)),a=function(t){var e=t.country,n=e.name,c=e.capital,s=e.flag,i=e.population,r=e.languages;return console.log(t.country),Object(o.jsxs)("div",{className:"country",children:[Object(o.jsxs)("h3",{children:["This is: ",n]}),Object(o.jsxs)("h5",{children:["City is: ",c]}),Object(o.jsx)("img",{src:s,alt:""}),Object(o.jsxs)("h5",{children:["Population is: ",i]}),Object(o.jsxs)("h6",{children:["Language: ",r[0].name]})]})},j=(n(13),function(){var t=Object(c.useState)([]),e=Object(u.a)(t,2),n=e[0],s=e[1];return Object(c.useEffect)((function(){fetch("https://restcountries.eu/rest/v2/all").then((function(t){return t.json()})).then((function(t){return s(t)}))}),[]),Object(o.jsxs)("div",{children:[Object(o.jsxs)("h1",{children:["Countries:",n.length]}),Object(o.jsx)("div",{className:"countries-container",children:n.map((function(t){return Object(o.jsx)(a,{country:t},t.name)}))})]})});var l=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(j,{})})},h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),c(t),s(t),i(t),r(t)}))};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(l,{})}),document.getElementById("root")),h()}],[[14,1,2]]]);
//# sourceMappingURL=main.7c1020cf.chunk.js.map