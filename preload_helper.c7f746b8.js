!function(){"use strict";var t="/".replace(/([^/])$/,"$1/"),e=location.pathname,n=e.startsWith(t)&&decodeURI("/".concat(e.slice(t.length)));if(n){var a=document,c=a.head,r=a.createElement.bind(a),i=function(t,e,n){var a,c=e.r[t]||(null===(a=Object.entries(e.r).find((function(e){var n=e[0];return new RegExp("^".concat(n.replace(/\/:[^/]+/g,"/[^/]+").replace("/*","/.+"),"$")).test(t)})))||void 0===a?void 0:a[1]);return null==c?void 0:c.map((function(t){var a=e.f[t][1],c=e.f[t][0];return{type:c.split(".").pop(),url:"".concat(n.publicPath).concat(c),attrs:[["data-".concat(e.b),"".concat(e.p,":").concat(a)]]}}))}(n,{"p":"intellgence_ui","b":"webpack","f":[["5.e8c51481.chunk.css",5],["5.f3498ef4.async.js",5],["nm__dumi__dist__client__pages__Demo__index.578aa5c0.chunk.css",9],["nm__dumi__dist__client__pages__Demo__index.4855d97b.async.js",9],["nm__dumi__dist__client__pages__404.8b85f2d9.chunk.css",65],["nm__dumi__dist__client__pages__404.6aaac562.async.js",65],["docs__components__index.md.33be0665.chunk.css",409],["docs__components__index.md.27b53bf0.async.js",409],["432.76fbf9ea.async.js",432],["docs__components__button.md.33be0665.chunk.css",463],["docs__components__button.md.813c334b.async.js",463],["docs__components__watermark.md.33be0665.chunk.css",518],["docs__components__watermark.md.14853529.async.js",518],["nm__dumi__theme-default__layouts__DocLayout__index.7bd7a629.async.js",519],["docs__guide__initialize.md.33be0665.chunk.css",619],["docs__guide__initialize.md.91dd165a.async.js",619],["docs__components__tag.md.33be0665.chunk.css",713],["docs__components__tag.md.c150c5a9.async.js",713],["docs__components__icon.md.33be0665.chunk.css",779],["docs__components__icon.md.3c35cb9b.async.js",779],["docs__guide__index.md.33be0665.chunk.css",825],["docs__guide__index.md.cf1933d2.async.js",825],["dumi__tmp-production__dumi__theme__ContextWrapper.3634d30b.async.js",923],["docs__index.md.33be0665.chunk.css",935],["docs__index.md.e6ef14ad.async.js",935],["docs__components__badge.md.33be0665.chunk.css",991],["docs__components__badge.md.1b66bdb8.async.js",991]],"r":{"/*":[4,5,0,1,13,22],"/":[8,23,24,0,1,13,22],"/components":[6,7,8,0,1,13,22],"/guide":[8,20,21,0,1,13,22],"/~demos/:id":[2,3,22],"/components/watermark":[8,11,12,0,1,13,22],"/components/button":[8,9,10,0,1,13,22],"/components/badge":[8,25,26,0,1,13,22],"/guide/initialize":[8,14,15,0,1,13,22],"/components/icon":[8,18,19,0,1,13,22],"/components/tag":[8,16,17,0,1,13,22]}},{publicPath:"/"});null==i||i.forEach((function(t){var e,n=t.type,a=t.url;if("js"===n)(e=r("script")).src=a,e.async=!0;else{if("css"!==n)return;(e=r("link")).href=a,e.rel="preload",e.as="style"}t.attrs.forEach((function(t){e.setAttribute(t[0],t[1]||"")})),c.appendChild(e)}))}}();