(function(e){function t(t){for(var a,l,n=t[0],o=t[1],u=t[2],h=0,c=[];h<n.length;h++)l=n[h],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&c.push(i[l][0]),i[l]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);d&&d(t);while(c.length)c.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,n=1;n<r.length;n++){var o=r[n];0!==i[o]&&(a=!1)}a&&(s.splice(t--,1),e=l(l.s=r[0]))}return e}var a={},i={app:0},s=[];function l(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=a,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(r,a,function(t){return e[t]}.bind(null,a));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/townsquare/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],o=n.push.bind(n);n.push=t,n=n.slice();for(var u=0;u<n.length;u++)t(n[u]);var d=o;s.push(["56d7","chunk-vendors"]),r()})({"0025":function(e,t,r){},"30db":function(e,t,r){"use strict";var a=r("0025"),i=r.n(a);i.a},3636:function(e,t,r){"use strict";var a=r("d4b2"),i=r.n(a);i.a},"56d7":function(e,t,r){"use strict";r.r(t);var a=r("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("TownSquare",{attrs:{"is-public":e.isPublic}}),r("div",{staticClass:"controls"},[r("button",{on:{click:e.togglePublic}},[e._v("Toggle")])])],1)},s=[],l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"square",class:{public:e.isPublic},attrs:{id:"townsquare"}},[r("ul",{staticClass:"circle",class:["size-"+e.players.length]},e._l(e.players,(function(t){return r("Player",{key:t.name,attrs:{player:t,roles:e.roles,"is-public":e.isPublic},on:{"add-reminder":e.openReminderModal,"set-role":e.openRoleModal}})})),1),r("Modal",{directives:[{name:"show",rawName:"v-show",value:e.availableReminders.length,expression:"availableReminders.length"}],on:{close:e.closeModal}},[r("h2",[e._v("Choose a reminder token:")]),r("ul",{staticClass:"reminders"},e._l(e.availableReminders,(function(t){return r("li",{staticClass:"reminder",class:[t.role],on:{click:function(r){return e.addReminder(t)}}},[e._v(" "+e._s(t.name)+" ")])})),0)]),r("Modal",{directives:[{name:"show",rawName:"v-show",value:e.availableRoles.length,expression:"availableRoles.length"}],on:{close:e.closeModal}},[r("h2",[e._v("Choose a new role:")]),r("ul",{staticClass:"tokens"},e._l(e.availableRoles,(function(t){return r("li",{staticClass:"token",class:[t.id,t.team],on:{click:function(r){return e.setRole(t)}}},[e._v(" "+e._s(t.name)+" ")])})),0)])],1)},n=[],o=r("b1d9"),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("div",{staticClass:"player",class:{dead:e.player.hasDied,"no-vote":e.player.hasVoted}},[r("div",{staticClass:"shroud",on:{click:function(t){return e.toggleStatus()}}}),r("div",{staticClass:"token",class:[e.player.role.id],on:{click:function(t){return e.changeRole()}}},[e.player.role.firstNight?r("span",{staticClass:"leaf-left"}):e._e(),e.player.role.otherNight?r("span",{staticClass:"leaf-right"}):e._e(),e.player.role.reminders.length?r("span",{class:["leaf-top"+e.player.role.reminders.length]}):e._e(),e.player.role.setup?r("span",{staticClass:"leaf-orange"}):e._e(),r("div",[e._v(e._s(e.player.role.name))])]),e.player.role.ability?r("div",{staticClass:"ability"},[e._v(e._s(e.player.role.ability))]):e._e(),r("div",{staticClass:"name"},[e._v(e._s(e.player.name))])]),e._l(e.player.reminders,(function(t){return e.player.reminders?r("div",{staticClass:"reminder",class:[t.role],on:{click:function(r){return e.removeReminder(t)}}},[e._v(e._s(t.name))]):e._e()})),r("div",{staticClass:"reminder add",on:{click:function(t){return e.$emit("add-reminder",e.player)}}})],2)},d=[],h={props:{player:{type:Object,required:!0},roles:{type:Map,required:!0},isPublic:{type:Boolean,required:!0}},data(){return{}},methods:{toggleStatus(){this.isPublic&&this.player.hasDied?this.$set(this.player,"hasVoted",!this.player.hasVoted):(this.$set(this.player,"hasDied",!this.player.hasDied),this.player.hasDied||this.$set(this.player,"hasVoted",!1))},changeRole(){this.isPublic?this.toggleStatus():this.$emit("set-role",this.player)},removeReminder(e){this.player.reminders.splice(this.player.reminders.indexOf(e),1)}}},c=h,m=(r("74c9"),r("2877")),f=Object(m["a"])(c,u,d,!1,null,null,null),p=f.exports,y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"modal-fade"}},[r("div",{staticClass:"modal-backdrop",on:{click:e.close}},[r("div",{staticClass:"modal",attrs:{role:"dialog","aria-labelledby":"modalTitle","aria-describedby":"modalDescription"},on:{click:function(e){e.stopPropagation()}}},[e._t("default")],2)])])},g=[],b={methods:{close(){this.$emit("close")}}},v=b,w=(r("30db"),Object(m["a"])(v,y,g,!1,null,null,null)),k=w.exports;const N=new Map(o.sort((e,t)=>t.team.localeCompare(e.team)).map(e=>[e.id,e]));var T={components:{Modal:k,Player:p},props:["isPublic"],data(){return{players:[{name:"Steffen",role:N.get("baron"),reminders:[{role:"imp",name:"Die"}]},{name:"Tino",role:N.get("imp")},{name:"Basti",role:N.get("chef"),reminders:[]},{name:"Bernd",role:N.get("ravenkeeper"),reminders:[]},{name:"Tim",role:N.get("drunk"),reminders:[]},{name:"Yann",role:N.get("librarian"),reminders:[]},{name:"Marie",role:N.get("empath"),reminders:[]},{name:"Bogdan",role:N.get("scarletwoman"),reminders:[]},{name:"Sean",role:N.get("recluse"),reminders:[]},{name:"Petra",role:N.get("undertaker"),reminders:[]}],roles:N,selectedPlayer:!1,availableReminders:[],availableRoles:[]}},methods:{openReminderModal(e){this.selectedPlayer=e,this.availableReminders=[],this.roles.forEach(e=>{this.players.some(t=>t.role.id===e.id)&&(this.availableReminders=[...this.availableReminders,...e.reminders.map(t=>({role:e.id,name:t}))])})},openRoleModal(e){this.selectedPlayer=e,this.availableRoles=[],this.roles.forEach(t=>{t.id!==e.role&&this.availableRoles.push(t)})},addReminder(e){this.selectedPlayer.reminders.push(e),this.closeModal()},setRole(e){this.selectedPlayer.role=e,this.closeModal()},closeModal(){this.selectedPlayer=!1,this.availableReminders=[],this.availableRoles=[]}}},_=T,P=(r("3636"),Object(m["a"])(_,l,n,!1,null,null,null)),R=P.exports,B={components:{TownSquare:R},data:()=>({isPublic:!1}),methods:{togglePublic(){this.isPublic=!this.isPublic}}},M=B,O=(r("5c0b"),Object(m["a"])(M,i,s,!1,null,null,null)),C=O.exports;a["a"].config.productionTip=!1,new a["a"]({render:e=>e(C)}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var a=r("9c0c"),i=r.n(a);i.a},"74c9":function(e,t,r){"use strict";var a=r("9fd8"),i=r.n(a);i.a},"9c0c":function(e,t,r){},"9fd8":function(e,t,r){},b1d9:function(e){e.exports=JSON.parse('[{"id":"washerwoman","name":"Washerwoman","set":"TB","team":"townsfolk","firstNight":true,"otherNight":false,"reminders":["Townsfolk","Decoy"],"setup":false,"ability":"You start knowing 1 of 2 players is a particular Townsfolk."},{"id":"librarian","name":"Librarian","set":"TB","team":"townsfolk","firstNight":true,"otherNight":false,"reminders":["Outsider","Decoy"],"setup":false,"ability":"You start knowing that 1 of 2 players is a particular Outsider. (Or that zero are in play)"},{"id":"investigator","name":"Investigator","set":"TB","team":"townsfolk","firstNight":true,"otherNight":false,"reminders":["Minion","Decoy"],"setup":false,"ability":"You start knowing 1 of 2 players is a particular Minion."},{"id":"chef","name":"Chef","set":"TB","team":"townsfolk","firstNight":true,"otherNight":false,"reminders":[],"setup":false,"ability":"You start knowing how many pairs of evil players there are."},{"id":"empath","name":"Empath","set":"TB","team":"townsfolk","firstNight":true,"otherNight":true,"reminders":[],"setup":false,"ability":"Each night, you learn how many of your 2 alive neighbours are evil."},{"id":"fortuneteller","name":"Fortune Teller","set":"TB","team":"townsfolk","firstNight":true,"otherNight":true,"reminders":["Decoy"],"setup":false,"ability":"Each night, choose 2 players: you learn if either is a Demon. There is 1 good player that registers falsely to you."},{"id":"undertaker","name":"Undertaker","set":"TB","team":"townsfolk","firstNight":false,"otherNight":true,"reminders":["Executed"],"setup":false,"ability":"Each night*, you learn which character died by execution today."},{"id":"monk","name":"Monk","set":"TB","team":"townsfolk","firstNight":false,"otherNight":true,"reminders":["Protected"],"setup":false,"ability":"Each night*, choose a player (not yourself): they are safe from the Demon tonight."},{"id":"ravenkeeper","name":"Ravenkeeper","set":"TB","team":"townsfolk","firstNight":false,"otherNight":true,"reminders":[],"setup":false,"ability":"If you die at night, you are woken to choose a player: you learn their character."},{"id":"mayor","name":"Mayor","set":"TB","team":"townsfolk","firstNight":false,"otherNight":false,"reminders":[],"setup":false,"ability":"If only 3 players live & no execution occurs, your team wins. If you die at night, another player might die instead."},{"id":"slayer","name":"Slayer","set":"TB","team":"townsfolk","firstNight":false,"otherNight":false,"reminders":["Used"],"setup":false,"ability":"Once per game, during the day, publicly choose a player: if they are the Demon, they die."},{"id":"soldier","name":"Soldier","set":"TB","team":"townsfolk","firstNight":false,"otherNight":false,"reminders":[],"setup":false,"ability":"You are safe from the Demon."},{"id":"virgin","name":"Virgin","set":"TB","team":"townsfolk","firstNight":false,"otherNight":false,"reminders":["Used"],"setup":false,"ability":"The first time you are nominated, if the nominator is a Townsfolk, they are executed immediately."},{"id":"butler","name":"Butler","set":"TB","team":"outsider","firstNight":true,"otherNight":true,"reminders":["Master"],"setup":false,"ability":"Each night, choose a player (not yourself): tomorrow, you may only vote if they are voting too."},{"id":"drunk","name":"Drunk","set":"TB","team":"outsider","firstNight":false,"otherNight":false,"reminders":["Drunk"],"setup":true,"ability":"You do not know you are the Drunk. You think you are a Townsfolk, but your ability malfunctions."},{"id":"recluse","name":"Recluse","set":"TB","team":"outsider","firstNight":false,"otherNight":false,"reminders":[],"setup":false,"ability":"You might register as evil and as a Minion or Demon, even if dead."},{"id":"saint","name":"Saint","set":"TB","team":"outsider","firstNight":false,"otherNight":false,"reminders":[],"setup":false,"ability":"If you die by execution, your team loses."},{"id":"baron","name":"Baron","set":"TB","team":"minion","firstNight":false,"otherNight":false,"reminders":[],"setup":true,"ability":"There are extra Outsiders in play. [+2 Outsiders]"},{"id":"poisoner","name":"Poisoner","set":"TB","team":"minion","firstNight":true,"otherNight":true,"reminders":["Poisoned"],"setup":false,"ability":"Each night, choose a player: their ability malfunctions tonight and tomorrow day."},{"id":"spy","name":"Spy","set":"TB","team":"minion","firstNight":true,"otherNight":true,"reminders":[],"setup":false,"ability":"Each night, you see the Grimoire. You might register as good and as a Townsfolk or Outsider, even if dead."},{"id":"scarletwoman","name":"Scarlet Woman","set":"TB","team":"minion","firstNight":false,"otherNight":true,"reminders":["Demon"],"setup":false,"ability":"If there are 5 or more players alive (Travellers don\'t count) and the Demon dies, you become the Demon."},{"id":"imp","name":"Imp","set":"TB","team":"demon","firstNight":false,"otherNight":true,"reminders":["Die"],"setup":false,"ability":"Each night*, choose a player: they die. If you kill yourself this way, a Minion becomes the Imp."}]')},d4b2:function(e,t,r){}});
//# sourceMappingURL=app.86616708.js.map