(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{110:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=o.a.createContext({}),s=function(e){var t=o.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=s(r),f=n,d=p["".concat(u,".").concat(f)]||p[f]||b[f]||a;return r?o.a.createElement(d,l(l({ref:t},i),{},{components:r})):o.a.createElement(d,l({ref:t},i))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,u=new Array(a);u[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,u[1]=l;for(var i=2;i<a;i++)u[i]=r[i];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},83:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),a=(r(0),r(110)),u={slug:"hello-world",title:"Hello",author:"Endilie Yacop Sucipto",author_title:"Maintainer of Docusaurus",author_url:"https://github.com/endiliey",author_image_url:"https://avatars1.githubusercontent.com/u/17883920?s=460&v=4",tags:["hello","docusaurus"]},l={permalink:"/docusaurus/blog/hello-world",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2019-05-29-hello-world.md",source:"@site/blog/2019-05-29-hello-world.md",title:"Hello",description:"Welcome to this blog. This blog is created with Docusaurus 2 alpha.",date:"2019-05-29T00:00:00.000Z",formattedDate:"May 29, 2019",tags:[{label:"hello",permalink:"/docusaurus/blog/tags/hello"},{label:"docusaurus",permalink:"/docusaurus/blog/tags/docusaurus"}],readingTime:.075,truncated:!0,prevItem:{title:"Welcome",permalink:"/docusaurus/blog/welcome"},nextItem:{title:"Hola",permalink:"/docusaurus/blog/hola"}},c=[],i={toc:c};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Welcome to this blog. This blog is created with ",Object(a.b)("a",{parentName:"p",href:"https://docusaurus.io/"},Object(a.b)("strong",{parentName:"a"},"Docusaurus 2 alpha")),"."))}s.isMDXComponent=!0}}]);