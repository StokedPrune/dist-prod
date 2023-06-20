System.register(["jimu-core","jimu-ui/advanced/setting-components"],(function(e,t){var i={},n={};return{setters:[function(e){i.css=e.css,i.jsx=e.jsx},function(e){n.MapWidgetSelector=e.MapWidgetSelector,n.SettingRow=e.SettingRow,n.SettingSection=e.SettingSection}],execute:function(){e((()=>{var e={891:e=>{"use strict";e.exports=i},756:e=>{"use strict";e.exports=n}},t={};function o(i){var n=t[i];if(void 0!==n)return n.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,o),s.exports}o.d=(e,t)=>{for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="";var s={};return o.p=window.jimuConfig.baseUrl,(()=>{"use strict";o.r(s),o.d(s,{default:()=>i});var e=o(891),t=o(756);function i(i){const n=e.css`
      .widget-setting-erp-socket-function {
        .checkbox-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }
      }
    `;return(0,e.jsx)("div",{css:n},(0,e.jsx)("div",{className:"widget-setting-erp-socket-function"},(0,e.jsx)(t.SettingSection,{className:"map-selector-section",title:i.intl.formatMessage({id:"mapWidgetLabel",defaultMessage:"Select Map Widget"})},(0,e.jsx)(t.SettingRow,null,(0,e.jsx)(t.MapWidgetSelector,{onSelect:e=>{i.onSettingChange({id:i.id,useMapWidgetIds:e})},useMapWidgetIds:i.useMapWidgetIds})))))}})(),s})())}}}));