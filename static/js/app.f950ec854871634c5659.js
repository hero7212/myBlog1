webpackJsonp([0],{"12TN":function(t,e,a){t.exports=a.p+"static/img/errorss.489ac94.jpg"},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("tvR6");var i=a("qBF2"),n=a.n(i),r=a("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=a("VU/8")({name:"app"},o,!1,function(t){a("T+xV")},null,null).exports,d=a("/ocq"),c={name:"notFound",data:function(){return{msg:"我是404"}},methods:{drawCanvas:function(){var t={width:window.innerWidth,height:window.innerHeight},e=this.$refs.oCanvas,a=e.getContext("2d");e.width=t.width,e.height=t.height;function i(t,e,a){return this.x=t,this.y=e,this.r=a,this}var n=[];function r(t,e){e=arguments[1]||0;return Math.floor(Math.random()*(t-e+1)+e)}function o(){var t=a.createRadialGradient(120,120,80,120,120,800);t.addColorStop(0,"rgb(255,255,255)"),t.addColorStop(.01,"rgb(23,30,38)"),t.addColorStop(.2,"rgb(23,30,38)"),t.addColorStop(.4,"rgb(23,30,38)"),t.addColorStop(1,"rgb(23,30,38)"),a.save(),a.fillStyle=t,a.fillRect(0,0,400,400),a.restore()}function s(){a.clearRect(0,0,t.width,t.height),a.fillStyle="#171E26",a.fillRect(0,0,t.width,t.height),o();for(var e=0;e<50;e++){var i=n[e];a.fillStyle="#fff";var d=r(1.5,.4);n[e].r=d,a.beginPath(),a.arc(i.x,i.y,i.r,0,2*Math.PI),a.fill(),a.closePath()}requestAnimationFrame(s)}window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame;!function(){a.fillStyle="#171E26",a.fillRect(0,0,t.width,t.height);for(var e=0;e<200;e++){var d=Math.random()*t.width,c=Math.random()*t.height,l=r(1.5,.4),u=new i(d,c,l);a.fillStyle="#fff",a.beginPath(),a.arc(d,c,l,0,2*Math.PI),a.fill(),a.closePath(),n.push(u)}o(),s()}()}},mounted:function(){this.drawCanvas()}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"notFound"},[e("canvas",{ref:"oCanvas",attrs:{id:"game"}}),this._m(0),this._m(1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"error"},[e("div",{staticClass:"center"},[e("div",{staticClass:"road1 road1_DH"},[e("img",{attrs:{src:a("12TN"),width:"640"}})]),e("div",{staticClass:"road2 road2_DH"},[e("img",{attrs:{src:a("12TN"),width:"640"}})]),e("img",{staticClass:"car",attrs:{src:a("PpVQ")}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrap"},[e("div",{staticClass:"sim-button button10"},[e("span",[this._v("返回首页    ")])])])}]};var u=a("VU/8")(c,l,!1,function(t){a("R2Te")},"data-v-1b40d444",null).exports;r.default.use(d.a);var h=new d.a({routes:[{path:"/",name:"notFound",component:u}]});r.default.config.productionTip=!1,r.default.use(n.a),new r.default({el:"#app",router:h,template:"<App/>",components:{App:s}})},PpVQ:function(t,e,a){t.exports=a.p+"static/img/cars6.aa523fb.png"},R2Te:function(t,e){},"T+xV":function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f950ec854871634c5659.js.map