webpackJsonp([0],{"12TN":function(t,a,i){t.exports=i.p+"static/img/errorss.489ac94.jpg"},BwlF:function(t,a){},NHnr:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});i("tvR6");var e=i("qBF2"),n=i.n(e),s=i("7+uW"),o={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]};var r=i("VU/8")({name:"app"},o,!1,function(t){i("T+xV")},null,null).exports,l=i("/ocq"),d={name:"notFound",data:function(){return{msg:"我是404"}},methods:{drawCanvas:function(){var t={width:window.innerWidth,height:window.innerHeight},a=this.$refs.oCanvas,i=a.getContext("2d");a.width=t.width,a.height=t.height;function e(t,a,i){return this.x=t,this.y=a,this.r=i,this}var n=[];function s(t,a){a=arguments[1]||0;return Math.floor(Math.random()*(t-a+1)+a)}function o(){var t=i.createRadialGradient(120,120,80,120,120,800);t.addColorStop(0,"rgb(255,255,255)"),t.addColorStop(.01,"rgb(23,30,38)"),t.addColorStop(.2,"rgb(23,30,38)"),t.addColorStop(.4,"rgb(23,30,38)"),t.addColorStop(1,"rgb(23,30,38)"),i.save(),i.fillStyle=t,i.fillRect(0,0,400,400),i.restore()}function r(){i.clearRect(0,0,t.width,t.height),i.fillStyle="#171E26",i.fillRect(0,0,t.width,t.height),o();for(var a=0;a<50;a++){var e=n[a];i.fillStyle="#fff";var l=s(1.5,.4);n[a].r=l,i.beginPath(),i.arc(e.x,e.y,e.r,0,2*Math.PI),i.fill(),i.closePath()}requestAnimationFrame(r)}window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame;!function(){i.fillStyle="#171E26",i.fillRect(0,0,t.width,t.height);for(var a=0;a<200;a++){var l=Math.random()*t.width,d=Math.random()*t.height,c=s(1.5,.4),h=new e(l,d,c);i.fillStyle="#fff",i.beginPath(),i.arc(l,d,c,0,2*Math.PI),i.fill(),i.closePath(),n.push(h)}o(),r()}()},goLogin:function(){this.$router.push("/")}},mounted:function(){this.drawCanvas()}},c={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"notFound"},[a("canvas",{ref:"oCanvas",attrs:{id:"game"}}),this._m(0),a("div",{staticClass:"wrap"},[a("div",{staticClass:"sim-button button10",on:{click:this.goLogin}},[a("span",[this._v("返回首页    ")])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"error"},[a("div",{staticClass:"center"},[a("div",{staticClass:"road1 road1_DH"},[a("img",{attrs:{src:i("12TN"),width:"640"}})]),a("div",{staticClass:"road2 road2_DH"},[a("img",{attrs:{src:i("12TN"),width:"640"}})]),a("img",{staticClass:"car",attrs:{src:i("PpVQ")}})])])}]};var h=i("VU/8")(d,c,!1,function(t){i("iNSn")},"data-v-b5f91412",null).exports,u={name:"login",data:function(){return{canvasWidth:window.screen.availWidth,canvasHeight:window.screen.availHeight}},methods:{drawCanvas:function(){var t=document.getElementById("canvas"),a=t.getContext("2d"),i=t.width=window.innerWidth,e=t.height=window.innerHeight,n=217,s=[],o=0,r=document.createElement("canvas"),l=r.getContext("2d");r.width=100,r.height=100;var d=r.width/2,c=l.createRadialGradient(d,d,0,d,d,d);c.addColorStop(.025,"#fefefe"),c.addColorStop(.1,"hsl("+n+", 61%, 73%)"),c.addColorStop(.25,"hsl("+n+", 64%, 6%)"),c.addColorStop(1,"transparent"),l.fillStyle=c,l.beginPath(),l.arc(d,d,d,0,2*Math.PI),l.fill();function h(t,a){if(arguments.length<2&&(a=t,t=0),t>a){var i=a;a=t,t=i}return Math.floor(Math.random()*(a-t+1))+t}var u=function(){this.orbitRadius=h(function(t,a){var i=Math.max(t,a);return Math.round(Math.sqrt(i*i+i*i))/2}(i,e)),this.radius=h(60,this.orbitRadius)/8,this.orbitX=i/2,this.orbitY=e/2,this.timePassed=h(0,1300),this.speed=h(this.orbitRadius)/5e5,this.alpha=h(2,10)/10,s[++o]=this};u.prototype.draw=function(){var t=Math.sin(this.timePassed)*this.orbitRadius+this.orbitX,i=Math.cos(this.timePassed)*this.orbitRadius+this.orbitY,e=h(10);1===e&&this.alpha>0?this.alpha-=.05:2===e&&this.alpha<1&&(this.alpha+=.05),a.globalAlpha=this.alpha,a.drawImage(r,t-this.radius/2,i-this.radius/2,this.radius,this.radius),this.timePassed+=this.speed};for(var v=0;v<1300;v++)new u;!function t(){a.globalCompositeOperation="source-over",a.globalAlpha=.5,a.fillStyle="hsla("+n+", 64%, 6%, 2)",a.fillRect(0,0,i,e),a.globalCompositeOperation="lighter";for(var o=1,r=s.length;o<r;o++)s[o].draw();window.requestAnimationFrame(t)}()},toIndex:function(){this.$router.push("/index")}},mounted:function(){this.drawCanvas()}},v={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"login"},[a("canvas",{attrs:{id:"canvas"}}),a("div",{staticClass:"title"},[this._v("有魅力的博客")]),a("div",{staticClass:"wrap"},[a("div",{staticClass:"sim-button button10",on:{click:this.toIndex}},[a("span",[this._v("进入博客   ")])])])])},staticRenderFns:[]};var f=i("VU/8")(u,v,!1,function(t){i("BwlF")},"data-v-e3acfbdc",null).exports,m={name:"index",data:function(){return{list:[],imgUrl:"http://7s1r1c.com1.z0.glb.clouddn.com/t_nw10.jpg",activeName:"log"}},methods:{tabSwitch:function(t,a){}},created:function(){for(var t=this,a=0;a<18;a++)this.list.push(a);var i=10;setInterval(function(){++i>28&&(i=10),t.imgUrl="http://7s1r1c.com1.z0.glb.clouddn.com/t_nw"+i+".jpg"},3e3)},mounted:function(){}},p={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"index"},[i("div",{staticClass:"aside"},[i("img",{attrs:{src:t.imgUrl}})]),i("div",{staticClass:"main"},[i("el-tabs",{on:{"tab-click":t.tabSwitch},model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[i("el-tab-pane",{attrs:{label:"日志",name:"log"}},[i("div",{staticClass:"log"},[i("div",{staticClass:"title"},[t._v("前端收集 ")]),i("div",{staticClass:"log-con"},[i("p",[t._v(" 在前端路上摸索前行，在这里分享自己长期关注的前端开发相关的优秀网站、博客、以及活跃开发者。欢迎更新，以下各排名不分先后顺序。")]),i("p",[t._v(" 自己 RSS 长期订阅了一些IT 和技术相关博客，这里是我Feedly 输出的opml，可直接导入一些RSS 阅读器:")]),i("p",[i("a",{attrs:{href:"https://github.com/foru17/luolei-dotfiles/blob/master/feedly.opml",target:"_blank"}},[t._v("https://github.com/foru17/luolei-dotfiles/blob/master/feedly.opml")])])])]),i("div",{staticClass:"log"},[i("div",{staticClass:"title"},[t._v("React Native 如何区分系统平台，动态加载组件 ")]),i("div",{staticClass:"log-con"},[i("p",[t._v(" 今天分享的内容是使用Platfrom的一个小技巧。相信大家都使用过Platfrom.os来判断移动设备平台是ios还是android。那么Platform的select你是否知道呢？快来了解一下吧…")]),i("p",[i("a",{attrs:{href:"http://blog.csdn.net/u013718120/article/details/78291945",target:"_blank"}},[t._v("http://blog.csdn.net/u013718120/article/details/78291945 ")])])])]),i("div",{staticClass:"log"},[i("div",{staticClass:"title"},[t._v("vue-cli生成的项目，运行 npm run dev 报错 ")]),i("div",{staticClass:"log-con"},[i("p",[t._v(" 2018年1月9日下午vue更新了，导致vue-cli生成的项目，运行 npm run dev 报错")]),i("p",[t._v(" 解决方案：cnpm i之后，cnpm i -D webpack-dev-server@2.9.7")])])])]),i("el-tab-pane",{attrs:{label:"空白页",name:"blank"}},[t._v("待开发")])],1)],1)])},staticRenderFns:[]};var g=i("VU/8")(m,p,!1,function(t){i("eg1/")},"data-v-2a0feedc",null).exports;s.default.use(l.a);var w=new l.a({routes:[{path:"/",name:"login",component:f},{path:"/index",name:"index",component:g},{path:"*",name:"notFound",component:h}]});s.default.config.productionTip=!1,s.default.use(n.a),new s.default({el:"#app",router:w,template:"<App/>",components:{App:r}})},PpVQ:function(t,a,i){t.exports=i.p+"static/img/cars6.aa523fb.png"},"T+xV":function(t,a){},"eg1/":function(t,a){},iNSn:function(t,a){},tvR6:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.d5b505c31e6e94bc0724.js.map