(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{31:function(e,t,n){},67:function(e,t,n){"use strict";var a=n(31);n.n(a).a},74:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n(1);const o={"/":{message:"New content is available.",buttonText:"Refresh"},"/zh/":{message:"发现新内容可用",buttonText:"刷新"},"/ru/":{message:"Доступен новый контент.",buttonText:"Обновить"},"/uk/":{message:"Доступний новий контент.",buttonText:"Оновити"},"/ja/":{message:"新しいコンテンツがあります。",buttonText:"更新する"},"/es/":{message:"Hay nuevo contenido disponible.",buttonText:"Actualizar"}};var u={data:()=>({rawPopupConfig:{"/":{message:"发现新内容可用",buttonText:"刷新"},"/en/":{message:"New content is available.",buttonText:"Refresh"}},updateEvent:null}),created(){a.a.$on("sw-updated",this.onSWUpdated),!0==={"/":{message:"发现新内容可用",buttonText:"刷新"},"/en/":{message:"New content is available.",buttonText:"Refresh"}}&&(this.rawPopupConfig=o)},computed:{popupConfig(){return Object(s.g)(this,this.rawPopupConfig)},enabled(){return Boolean(this.popupConfig&&this.updateEvent)},message(){const e=this.popupConfig;return e&&e.message||o["/"].message},buttonText(){const e=this.popupConfig;return e&&e.buttonText||o["/"].buttonText}},methods:{onSWUpdated(e){this.updateEvent=e},reload(){this.updateEvent&&(this.updateEvent.skipWaiting().then(()=>{location.reload(!0)}),this.updateEvent=null)}}},i=(n(67),n(3)),p=Object(i.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"sw-update-popup"}},[e._t("default",[e.enabled?n("div",{staticClass:"sw-update-popup"},[e._v("\n      "+e._s(e.message)),n("br"),e._v(" "),n("button",{on:{click:e.reload}},[e._v(e._s(e.buttonText))])]):e._e()],{reload:e.reload,enabled:e.enabled,message:e.message,buttonText:e.buttonText})],2)}),[],!1,null,"ef6a919a",null);t.default=p.exports}}]);