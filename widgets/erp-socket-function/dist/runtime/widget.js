System.register(["jimu-core","jimu-core/react","jimu-arcgis","esri/layers/FeatureLayer","esri/rest/support/Query","esri/request"],(function(e,t){var o={},r={},n={},i={},s={},a={};return{setters:[function(e){o.getAppStore=e.getAppStore,o.jsx=e.jsx},function(e){r.useState=e.useState},function(e){n.JimuMapViewComponent=e.JimuMapViewComponent},function(e){i.default=e.default},function(e){s.default=e.default},function(e){a.default=e.default}],execute:function(){e((()=>{var e={818:e=>{"use strict";e.exports=i},831:e=>{"use strict";e.exports=a},902:e=>{"use strict";e.exports=s},826:e=>{"use strict";e.exports=n},891:e=>{"use strict";e.exports=o},315:e=>{"use strict";e.exports=r}},t={};function u(o){var r=t[o];if(void 0!==r)return r.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,u),n.exports}u.d=(e,t)=>{for(var o in t)u.o(t,o)&&!u.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},u.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),u.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.p="";var l={};return u.p=window.jimuConfig.baseUrl,(()=>{"use strict";u.r(l),u.d(l,{default:()=>f});var e=u(891),t=u(315),o=u(826),r=u(818),n=u(902),i=u(831);let s,a;function c(e){d.emit("broadcastMessage",JSON.stringify({type:"BookmarkExtent",data:e[Object.keys(e)[0]].view.extent})),console.log(JSON.stringify(e[Object.keys(e)[0]].view.extent))}let d=io("https://assureviewer-dev-api.advisian.com/SharedDev",{query:{username:(0,e.getAppStore)().getState().user.username.toUpperCase()}});function f(r){var n;const[i,s]=(0,t.useState)(null);return console.log("set _jmv. jimuMapView is "+i+typeof i),a=i,(0,e.jsx)("div",{className:"erp-socket-function jimu-widget m-2"},r.hasOwnProperty("useMapWidgetIds")&&r.useMapWidgetIds&&1===r.useMapWidgetIds.length&&(0,e.jsx)(o.JimuMapViewComponent,{useMapWidgetId:null===(n=r.useMapWidgetIds)||void 0===n?void 0:n[0],onActiveViewChange:e=>{e&&e.view.watch("extent",(t=>{s(e),d.emit("broadcastMessage",JSON.stringify({type:"BookmarkExtent",data:e.view.extent}))}))},onViewsCreate:c}))}d.on("broadcastMessage",(function(e){let t=JSON.parse(e);if("ERPSelection"==t.type){console.log("objectids layerid is "+t.data.objectids+" "+t.data.layerid);const e=t.data.objectids,o=t.data.layerid;console.log("_jmv is "+a+typeof a);let u=a.view.map.allLayers.find((function(e){return e.title.includes(o)}));s=u;let l=s.url;(function(e,t){return new Promise((function(o,r){console.log("getLayerIndex  ");var n=-1;(0,i.default)(e,{query:{f:"json"}}).then((function(e){var r=e.data.layers;for(let e=0;e<r.length;e++)if(r[e].name.includes(t)){n=r[e].id;break}console.log("returning Layer Index: ",n),o(n)})).catch((function(e){console.error("Error requesting layerIndex:",e),o(n)}))}))})(l,o).then((t=>{let o=l+"/"+t;console.log("seviceLayerUrl is "+o);let i=new r.default({url:o}),s=new n.default;s.objectIds=[e],s.outSpatialReference=a.view.spatialReference,s.returnGeometry=!0,i.queryFeatures(s).then((function(t){if(t.features.length>0){var o=t.features[0];console.log("feature is "+o+" "+typeof o),a.view.when((function(){a.view.goTo({duration:2e3,easing:"in-out-cubic",target:o.geometry}),console.log("zoom = "+a.view.zoom)}))}else console.log("No features returned with oid: "+e)}))}))}}))})(),l})())}}}));