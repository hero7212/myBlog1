webpackJsonp([0],{"12TN":function(t,a,i){t.exports=i.p+"static/img/errorss.489ac94.jpg"},"7ZO/":function(t,a){},HtIl:function(t,a,i){t.exports=i.p+"static/img/ava.552b20c.jpg"},NHnr:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});i("tvR6");var s=i("qBF2"),e=i.n(s),l=i("7+uW"),n={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]};var o=i("VU/8")({name:"app"},n,!1,function(t){i("T+xV")},null,null).exports,r=i("/ocq"),c={name:"notFound",data:function(){return{msg:"我是404"}},methods:{drawCanvas:function(){var t={width:window.innerWidth,height:window.innerHeight},a=this.$refs.oCanvas,i=a.getContext("2d");a.width=t.width,a.height=t.height;function s(t,a,i){return this.x=t,this.y=a,this.r=i,this}var e=[];function l(t,a){a=arguments[1]||0;return Math.floor(Math.random()*(t-a+1)+a)}function n(){var t=i.createRadialGradient(120,120,80,120,120,800);t.addColorStop(0,"rgb(255,255,255)"),t.addColorStop(.01,"rgb(23,30,38)"),t.addColorStop(.2,"rgb(23,30,38)"),t.addColorStop(.4,"rgb(23,30,38)"),t.addColorStop(1,"rgb(23,30,38)"),i.save(),i.fillStyle=t,i.fillRect(0,0,400,400),i.restore()}function o(){i.clearRect(0,0,t.width,t.height),i.fillStyle="#171E26",i.fillRect(0,0,t.width,t.height),n();for(var a=0;a<50;a++){var s=e[a];i.fillStyle="#fff";var r=l(1.5,.4);e[a].r=r,i.beginPath(),i.arc(s.x,s.y,s.r,0,2*Math.PI),i.fill(),i.closePath()}requestAnimationFrame(o)}window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame;!function(){i.fillStyle="#171E26",i.fillRect(0,0,t.width,t.height);for(var a=0;a<200;a++){var r=Math.random()*t.width,c=Math.random()*t.height,d=l(1.5,.4),h=new s(r,c,d);i.fillStyle="#fff",i.beginPath(),i.arc(r,c,d,0,2*Math.PI),i.fill(),i.closePath(),e.push(h)}n(),o()}()},goLogin:function(){this.$router.push("/")}},mounted:function(){this.drawCanvas()}},d={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"notFound"},[a("canvas",{ref:"oCanvas",attrs:{id:"game"}}),this._m(0),a("div",{staticClass:"wrap"},[a("div",{staticClass:"sim-button button10",on:{click:this.goLogin}},[a("span",[this._v("返回首页    ")])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"error"},[a("div",{staticClass:"center"},[a("div",{staticClass:"road1 road1_DH"},[a("img",{attrs:{src:i("12TN"),width:"640"}})]),a("div",{staticClass:"road2 road2_DH"},[a("img",{attrs:{src:i("12TN"),width:"640"}})]),a("img",{staticClass:"car",attrs:{src:i("PpVQ")}})])])}]};var h=i("VU/8")(c,d,!1,function(t){i("iNSn")},"data-v-b5f91412",null).exports,v={name:"login",data:function(){return{canvasWidth:window.screen.availWidth,canvasHeight:window.screen.availHeight}},methods:{drawCanvas:function(){var t=document.getElementById("canvas"),a=t.getContext("2d"),i=t.width=window.innerWidth,s=t.height=window.innerHeight,e=217,l=[],n=0,o=document.createElement("canvas"),r=o.getContext("2d");o.width=100,o.height=100;var c=o.width/2,d=r.createRadialGradient(c,c,0,c,c,c);d.addColorStop(.025,"#fefefe"),d.addColorStop(.1,"hsl("+e+", 61%, 73%)"),d.addColorStop(.25,"hsl("+e+", 64%, 6%)"),d.addColorStop(1,"transparent"),r.fillStyle=d,r.beginPath(),r.arc(c,c,c,0,2*Math.PI),r.fill();function h(t,a){if(arguments.length<2&&(a=t,t=0),t>a){var i=a;a=t,t=i}return Math.floor(Math.random()*(a-t+1))+t}var v=function(){this.orbitRadius=h(function(t,a){var i=Math.max(t,a);return Math.round(Math.sqrt(i*i+i*i))/2}(i,s)),this.radius=h(60,this.orbitRadius)/8,this.orbitX=i/2,this.orbitY=s/2,this.timePassed=h(0,1300),this.speed=h(this.orbitRadius)/5e5,this.alpha=h(2,10)/10,l[++n]=this};v.prototype.draw=function(){var t=Math.sin(this.timePassed)*this.orbitRadius+this.orbitX,i=Math.cos(this.timePassed)*this.orbitRadius+this.orbitY,s=h(10);1===s&&this.alpha>0?this.alpha-=.05:2===s&&this.alpha<1&&(this.alpha+=.05),a.globalAlpha=this.alpha,a.drawImage(o,t-this.radius/2,i-this.radius/2,this.radius,this.radius),this.timePassed+=this.speed};for(var p=0;p<1300;p++)new v;!function t(){a.globalCompositeOperation="source-over",a.globalAlpha=.5,a.fillStyle="hsla("+e+", 64%, 6%, 2)",a.fillRect(0,0,i,s),a.globalCompositeOperation="lighter";for(var n=1,o=l.length;n<o;n++)l[n].draw();window.requestAnimationFrame(t)}()},toIndex:function(){this.$router.push("/index")}},mounted:function(){this.drawCanvas()}},p={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"login"},[this._m(0),a("canvas",{attrs:{id:"canvas"}}),a("div",{staticClass:"title flip animated"},[this._v("有魅力的博客")]),a("div",{staticClass:"wrap zoomIn animated"},[a("div",{staticClass:"sim-button button10",on:{click:this.toIndex}},[a("span",[this._v("进入博客   ")])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("figure",[a("h1",[this._v("非 常 有 魅 力 喔")]),a("h1",[this._v("非 常 有 魅 力 喔")]),a("h1",[this._v("非 常 有 魅 力 喔")]),a("h1",[this._v("非 常 有 魅 力 喔")]),a("h1",[this._v("非 常 有 魅 力 喔")]),a("h1",[this._v("非 常 有 魅 力 喔")]),a("h1",[this._v("非 常 有 魅 力 喔")]),a("h1",[this._v("非 常 有 魅 力 喔")]),a("h1",[this._v("非 常 有 魅 力 喔")]),a("h1",[this._v("非 常 有 魅 力 喔")])])}]};var u=i("VU/8")(v,p,!1,function(t){i("7ZO/")},"data-v-320c483c",null).exports,m=i("I4KV"),g=i.n(m),f={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"ball-wrap",class:this.color},[a("div",{staticClass:"ball"},[a("div",{staticClass:"inner"},[a("div",{staticClass:"percent"},[this._v(this._s(this.percent)+"%")]),a("div",{staticClass:"water",style:{top:100-this.percent+"%"}}),a("div",{staticClass:"water w2",style:{top:100-this.percent+"%"}})])])])},staticRenderFns:[]};var b={name:"index",components:{"v-Ball":i("VU/8")({name:"ball",props:["color","percent"],data:function(){return{}}},f,!1,function(t){i("yB5N")},"data-v-7e21be72",null).exports,gallery:g.a},data:function(){return{list:[],imgUrl:"http://7s1r1c.com1.z0.glb.clouddn.com/t_nw10.jpg",imgUrl2:"http://7s1r1c.com1.z0.glb.clouddn.com/t_nw11.jpg",activeName:"log",ballAni:!1,moveOut:!1,images:["../../static/img/avatar1.jpg","../../static/img/avatar5.jpg","../../static/img/avatar3.jpg","../../static/img/avatar4.jpg"],index:null}},methods:{tabSwitch:function(t,a){var i=this;"skill"==t.name?setTimeout(function(){i.ballAni=!0},1e3):this.ballAni=!1},toLogin:function(){this.$router.push("/")}},created:function(){for(var t=this,a=0;a<18;a++)this.list.push(a);var i=10,s=28;setInterval(function(){i++,s--,t.moveOut=!t.moveOut,i>28&&(i=10),t.imgUrl="http://7s1r1c.com1.z0.glb.clouddn.com/t_nw"+i+".jpg",s<10&&(s=28),t.imgUrl2="http://7s1r1c.com1.z0.glb.clouddn.com/t_nw"+s+".jpg"},6180)},mounted:function(){}},C={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{ref:"main",staticClass:"index"},[s("div",{staticClass:"aside"},[s("img",{staticClass:"bg-img",class:{"out-side":!t.moveOut},attrs:{src:t.imgUrl}}),s("img",{staticClass:"bg-img",class:{"out-side":t.moveOut},attrs:{src:t.imgUrl2}}),s("img",{staticClass:"avatar-img slideOutUp infinite animated",attrs:{src:i("HtIl")},on:{click:t.toLogin}})]),s("div",{staticClass:"main"},[s("el-tabs",{on:{"tab-click":t.tabSwitch},model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[s("el-tab-pane",{attrs:{label:"踩过的坑",name:"pit"}},[s("div",{staticClass:"log lightSpeedIn animated"},[s("div",{staticClass:"title"},[t._v("vue2+axios上传图片后台接收不到")]),s("div",{staticClass:"log-con"},[s("p",[t._v(" 问题解决了，其实就是少了一个属性，网上说的那些都是错的，加header这个被他害苦了，希望有遇到问题的时候多去看官方文档，或者源码，共勉。")]),s("p",[t._v(" withCredentials: false, // default 改为true就行了。")]),s("p",[s("a",{attrs:{href:"https://segmentfault.com/q/1010000012134701",target:"_blank"}},[t._v("https://segmentfault.com/q/1010000012134701")])])])]),s("div",{staticClass:"log lightSpeedIn animated"},[s("div",{staticClass:"title"},[t._v("vue项目继承ueditor出现bug")]),s("div",{staticClass:"log-con"},[s("p",[t._v(" 有两个div，里面分别放入了一个ueditor组件，用v-if去切换他们显示隐藏的时候，ueditor的样式会错乱")]),s("p",[t._v(" 解决方法：1.在ueditor.config.js中给一个默认宽度，2.找到放置ueditor的那个节点获取到它，然后再获取到ueditor,把ueditor插入到那节点中            ")])])])]),s("el-tab-pane",{attrs:{label:"网上搜集的日志",name:"log"}},[s("div",{staticClass:"log lightSpeedIn animated"},[s("div",{staticClass:"title"},[t._v("前端收集 ")]),s("div",{staticClass:"log-con"},[s("p",[t._v(" 在前端路上摸索前行，在这里分享自己长期关注的前端开发相关的优秀网站、博客、以及活跃开发者。欢迎更新，以下各排名不分先后顺序。")]),s("p",[t._v(" 自己 RSS 长期订阅了一些IT 和技术相关博客，这里是我Feedly 输出的opml，可直接导入一些RSS 阅读器:")]),s("p",[s("a",{attrs:{href:"https://github.com/foru17/luolei-dotfiles/blob/master/feedly.opml",target:"_blank"}},[t._v("https://github.com/foru17/luolei-dotfiles/blob/master/feedly.opml")])])])]),s("div",{staticClass:"log lightSpeedIn animated"},[s("div",{staticClass:"title"},[t._v("React Native 如何区分系统平台，动态加载组件 ")]),s("div",{staticClass:"log-con"},[s("p",[t._v(" 今天分享的内容是使用Platfrom的一个小技巧。相信大家都使用过Platfrom.os来判断移动设备平台是ios还是android。那么Platform的select你是否知道呢？快来了解一下吧…")]),s("p",[s("a",{attrs:{href:"http://blog.csdn.net/u013718120/article/details/78291945",target:"_blank"}},[t._v("http://blog.csdn.net/u013718120/article/details/78291945 ")])])])]),s("div",{staticClass:"log lightSpeedIn animated"},[s("div",{staticClass:"title"},[t._v("vue-cli生成的项目，运行 npm run dev 报错 ")]),s("div",{staticClass:"log-con"},[s("p",[t._v(" 2018年1月9日下午vue更新了，导致vue-cli生成的项目，运行 npm run dev 报错")]),s("p",[t._v(" 解决方案：cnpm i之后，cnpm i -D webpack-dev-server@2.9.7")])])]),s("div",{staticClass:"log lightSpeedIn animated"},[s("div",{staticClass:"title"},[t._v("解决vue不利于SEO的方案")]),s("div",{staticClass:"log-con"},[s("p",[t._v(" 其实解决SEO问题不一定非得用服务端渲染来处理，服务端渲染对于刚接触 vue 的新手来说，并不是那么友好，虽然已有官方 SSR 中文文档。但是对于一个已经开发完毕的 vue 项目去接 SSR 无论是从工作量还是技术角度来说，都是一种挑战。不过这些怎么能难得到伟大的前端程序员！")]),s("p",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/29148760",target:"_blank"}},[t._v("https://zhuanlan.zhihu.com/p/29148760 ")])])])]),s("div",{staticClass:"log lightSpeedIn animated"},[s("div",{staticClass:"title"},[t._v("分享一些vue开源组件库")]),s("div",{staticClass:"log-con"},[s("p",[t._v(" 为移动而生的Vue JS 2组件框架！")]),s("p",[s("a",{attrs:{href:"https://www.cnblogs.com/Leo_wl/p/6517846.html",target:"_blank"}},[t._v("https://www.cnblogs.com/Leo_wl/p/6517846.html ")])])])]),s("div",{staticClass:"log lightSpeedIn animated"},[s("div",{staticClass:"title"},[t._v("轮子工厂")]),s("div",{staticClass:"log-con"},[s("p",[t._v(" 里面有很多不错的vue和angular组件！")]),s("p",[s("a",{attrs:{href:"http://www.wheelsfactory.cn/#/home",target:"_blank"}},[t._v("http://www.wheelsfactory.cn/#/home  ")])])])]),s("div",{staticClass:"log lightSpeedIn animated"},[s("div",{staticClass:"title"},[t._v("美团点评点餐 Nuxt.js 实战")]),s("div",{staticClass:"log-con"},[s("p",[t._v(" 关于 美团点评点餐 Nuxt.js 实战  的教程")]),s("p",[s("a",{attrs:{href:"https://juejin.im/post/598aabe96fb9a03c335a8dde",target:"_blank"}},[t._v("https://juejin.im/post/598aabe96fb9a03c335a8dde   ")])])])]),s("div",{staticClass:"log lightSpeedIn animated"},[s("div",{staticClass:"title"},[t._v("Nuxt.js 解决跨域")]),s("div",{staticClass:"log-con"},[s("p",[t._v(" 【nuxtjs 指南】解决nuxtjs本地开发跨域和防止路由与api冲突问题")]),s("p",[s("a",{attrs:{href:"https://segmentfault.com/a/1190000010815403",target:"_blank"}},[t._v("https://segmentfault.com/a/1190000010815403 ")])])])]),s("div",{staticClass:"log lightSpeedIn animated"},[s("div",{staticClass:"title"},[t._v("Debounce 和 Throttle 的原理及实现")]),s("div",{staticClass:"log-con"},[s("p",[t._v(" 在处理诸如 resize、scroll、mousemove 和 keydown/keyup/keypress 等事件的时候，通常我们不希望这些事件太过频繁地触发，尤其是监听程序中涉及到大量的计算或者有非常耗费资源的操作。")]),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/redtopic/article/details/69396722",target:"_blank"}},[t._v("https://blog.csdn.net/redtopic/article/details/69396722                                                                                              ")])])])])]),s("el-tab-pane",{attrs:{label:"个人简历",name:"resume"}},[s("div",{staticClass:"log lightSpeedIn animated"},[s("div",{staticClass:"title"},[t._v("个人简历")]),s("div",{staticClass:"log-con"},[s("p",[s("a",{attrs:{href:"https://hero7212.github.io/vResume/index.html",target:"_blank"}},[t._v("https://hero7212.github.io/vResume/index.html")])])])])]),s("el-tab-pane",{attrs:{label:"我封装的组件",name:"compos"}},[s("div",{staticClass:"log lightSpeedIn animated"},[s("div",{staticClass:"title"},[t._v("仿优酷轮播组件 ")]),s("div",{staticClass:"log-con"},[s("p",[s("a",{attrs:{href:"https://hero7212.github.io/reactYuKuBanner/index.html",target:"_blank"}},[t._v("https://hero7212.github.io/reactYuKuBanner/index.html")])])])]),s("div",{staticClass:"log lightSpeedIn animated"},[s("div",{staticClass:"title"},[t._v("拖拽范围选择器 ")]),s("div",{staticClass:"log-con"},[s("p",[s("a",{attrs:{href:"https://hero7212.github.io/dragPro/index.html",target:"_blank"}},[t._v("https://hero7212.github.io/dragPro/index.html ")])])])]),s("div",{staticClass:"log lightSpeedIn animated"},[s("div",{staticClass:"title"},[t._v("简单的联动编辑器")]),s("div",{staticClass:"log-con"},[s("p",[s("a",{attrs:{href:"https://hero7212.github.io/reactEditor/index.html",target:"_blank"}},[t._v("https://hero7212.github.io/reactEditor/index.html                       ")])])])])]),s("el-tab-pane",{attrs:{label:"我的技能掌握度",name:"skill"}},[s("div",{staticClass:"skill"},[s("div",{staticClass:"skill-bg"}),s("div",{staticClass:"skill-item",class:{"rotateIn animated":t.ballAni}},[s("v-Ball",{attrs:{color:"green",percent:"70"}}),s("p",{staticClass:"word"},[t._v("HTML5")])],1),s("div",{staticClass:"skill-item",class:{"rotateIn animated":t.ballAni}},[s("v-Ball",{attrs:{color:"orange",percent:"80"}}),s("p",{staticClass:"word"},[t._v("CSS3 ")])],1),s("div",{staticClass:"skill-item",class:{"rotateIn animated":t.ballAni}},[s("v-Ball",{attrs:{color:"blue",percent:"72"}}),s("p",{staticClass:"word"},[t._v("Jquery  ")])],1),s("div",{staticClass:"skill-item",class:{"rotateIn animated":t.ballAni}},[s("v-Ball",{attrs:{color:"yellow",percent:"60"}}),s("p",{staticClass:"word"},[t._v("React        ")])],1),s("div",{staticClass:"skill-item",class:{"rotateIn animated":t.ballAni}},[s("v-Ball",{attrs:{color:"red",percent:"83"}}),s("p",{staticClass:"word"},[t._v("VUE                       ")])],1),s("div",{staticClass:"skill-item",class:{"rotateIn animated":t.ballAni}},[s("v-Ball",{attrs:{color:"cyan",percent:"30"}}),s("p",{staticClass:"word"},[t._v("Node     ")])],1),s("div",{staticClass:"skill-item",class:{"rotateIn animated":t.ballAni}},[s("v-Ball",{attrs:{color:"violet",percent:"25"}}),s("p",{staticClass:"word"},[t._v("Ionic3 ")])],1),s("div",{staticClass:"skill-item",class:{"rotateIn animated":t.ballAni}},[s("v-Ball",{attrs:{color:"wheat",percent:"55"}}),s("p",{staticClass:"word"},[t._v("微信小程序     ")])],1)])]),t._e(),s("el-tab-pane",{attrs:{label:"一些面试题",name:"question"}},[s("div",{staticClass:"log lightSpeedIn animated"},[s("div",{staticClass:"title"},[t._v('解惑 ["1", "2", "3"].map(parseInt) 为何返回[1,NaN,NaN] ')]),s("div",{staticClass:"log-con"},[s("p",[s("a",{attrs:{href:"https://blog.csdn.net/freshlover/article/details/19034079",target:"_blank"}},[t._v("https://blog.csdn.net/freshlover/article/details/19034079")])])])])])],1)],1)])},staticRenderFns:[]};var _=i("VU/8")(b,C,!1,function(t){i("l2ib")},"data-v-8c1544b6",null).exports;l.default.use(r.a);var w=new r.a({routes:[{path:"/",name:"login",component:u},{path:"/index",name:"index",component:_},{path:"*",name:"notFound",component:h}]});l.default.config.productionTip=!1,l.default.use(e.a),new l.default({el:"#app",router:w,template:"<App/>",components:{App:o}})},PpVQ:function(t,a,i){t.exports=i.p+"static/img/cars6.aa523fb.png"},"T+xV":function(t,a){},"bw+O":function(t,a){},iNSn:function(t,a){},l2ib:function(t,a){},tvR6:function(t,a){},yB5N:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.f227ca77709360713a35.js.map