webpackJsonp([0],{"12TN":function(t,e,i){t.exports=i.p+"static/img/errorss.489ac94.jpg"},"19Qn":function(t,e,i){t.exports=i.p+"static/img/aside_bg.d06e1b6.gif"},"7rac":function(t,e){},HkY8:function(t,e){},HtIl:function(t,e,i){t.exports=i.p+"static/img/ava.a0df333.jpg"},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i("tvR6");var a=i("qBF2"),s=i.n(a),n=i("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=i("VU/8")({name:"app"},r,!1,function(t){i("T+xV")},null,null).exports,l=i("/ocq"),d={name:"notFound",data:function(){return{msg:"我是404"}},methods:{drawCanvas:function(){var t={width:window.innerWidth,height:window.innerHeight},e=this.$refs.oCanvas,i=e.getContext("2d");e.width=t.width,e.height=t.height;function a(t,e,i){return this.x=t,this.y=e,this.r=i,this}var s=[];function n(t,e){e=arguments[1]||0;return Math.floor(Math.random()*(t-e+1)+e)}function r(){var t=i.createRadialGradient(120,120,80,120,120,800);t.addColorStop(0,"rgb(255,255,255)"),t.addColorStop(.01,"rgb(23,30,38)"),t.addColorStop(.2,"rgb(23,30,38)"),t.addColorStop(.4,"rgb(23,30,38)"),t.addColorStop(1,"rgb(23,30,38)"),i.save(),i.fillStyle=t,i.fillRect(0,0,400,400),i.restore()}function o(){i.clearRect(0,0,t.width,t.height),i.fillStyle="#171E26",i.fillRect(0,0,t.width,t.height),r();for(var e=0;e<50;e++){var a=s[e];i.fillStyle="#fff";var l=n(1.5,.4);s[e].r=l,i.beginPath(),i.arc(a.x,a.y,a.r,0,2*Math.PI),i.fill(),i.closePath()}requestAnimationFrame(o)}window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame;!function(){i.fillStyle="#171E26",i.fillRect(0,0,t.width,t.height);for(var e=0;e<200;e++){var l=Math.random()*t.width,d=Math.random()*t.height,c=n(1.5,.4),h=new a(l,d,c);i.fillStyle="#fff",i.beginPath(),i.arc(l,d,c,0,2*Math.PI),i.fill(),i.closePath(),s.push(h)}r(),o()}()},goLogin:function(){this.$router.push("/")}},mounted:function(){this.drawCanvas()}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"notFound"},[e("canvas",{ref:"oCanvas",attrs:{id:"game"}}),this._m(0),e("div",{staticClass:"wrap"},[e("div",{staticClass:"sim-button button10",on:{click:this.goLogin}},[e("span",[this._v("返回首页    ")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"error"},[e("div",{staticClass:"center"},[e("div",{staticClass:"road1 road1_DH"},[e("img",{attrs:{src:i("12TN"),width:"640"}})]),e("div",{staticClass:"road2 road2_DH"},[e("img",{attrs:{src:i("12TN"),width:"640"}})]),e("img",{staticClass:"car",attrs:{src:i("PpVQ")}})])])}]};var h=i("VU/8")(d,c,!1,function(t){i("YhOM")},"data-v-23f90b30",null).exports,u=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],m={name:"clock",data:function(){return{date:"",time:"",timerID:null}},created:function(){this.updateTime(),this.timerID=setInterval(this.updateTime,1e3)},methods:{updateTime:function(){var t=new Date;this.time=this.zeroPadding(t.getHours(),2)+":"+this.zeroPadding(t.getMinutes(),2)+":"+this.zeroPadding(t.getSeconds(),2),this.date=this.zeroPadding(t.getFullYear(),4)+"-"+this.zeroPadding(t.getMonth()+1,2)+"-"+this.zeroPadding(t.getDate(),2)+" "+u[t.getDay()]},zeroPadding:function(t,e){for(var i="",a=0;a<e;a++)i+="0";return(i+t).slice(-e)}}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"clock"},[e("p",{staticClass:"date",domProps:{innerHTML:this._s(this.date)}}),e("p",{staticClass:"time",domProps:{innerHTML:this._s(this.time)}})])},staticRenderFns:[]};var p={name:"login",components:{"v-Clock":i("VU/8")(m,f,!1,function(t){i("omHX")},"data-v-7c9d6e7b",null).exports},data:function(){return{canvasWidth:window.screen.availWidth,canvasHeight:window.screen.availHeight}},methods:{drawCanvas:function(){var t=document.getElementById("canvas"),e=t.getContext("2d"),i=t.width=window.innerWidth,a=t.height=window.innerHeight,s=217,n=[],r=0,o=document.createElement("canvas"),l=o.getContext("2d");o.width=100,o.height=100;var d=o.width/2,c=l.createRadialGradient(d,d,0,d,d,d);c.addColorStop(.025,"#fefefe"),c.addColorStop(.1,"hsl("+s+", 61%, 73%)"),c.addColorStop(.25,"hsl("+s+", 64%, 6%)"),c.addColorStop(1,"transparent"),l.fillStyle=c,l.beginPath(),l.arc(d,d,d,0,2*Math.PI),l.fill();function h(t,e){if(arguments.length<2&&(e=t,t=0),t>e){var i=e;e=t,t=i}return Math.floor(Math.random()*(e-t+1))+t}var u=function(){this.orbitRadius=h(function(t,e){var i=Math.max(t,e);return Math.round(Math.sqrt(i*i+i*i))/2}(i,a)),this.radius=h(60,this.orbitRadius)/8,this.orbitX=i/2,this.orbitY=a/2,this.timePassed=h(0,1300),this.speed=h(this.orbitRadius)/5e5,this.alpha=h(2,10)/10,n[++r]=this};u.prototype.draw=function(){var t=Math.sin(this.timePassed)*this.orbitRadius+this.orbitX,i=Math.cos(this.timePassed)*this.orbitRadius+this.orbitY,a=h(10);1===a&&this.alpha>0?this.alpha-=.05:2===a&&this.alpha<1&&(this.alpha+=.05),e.globalAlpha=this.alpha,e.drawImage(o,t-this.radius/2,i-this.radius/2,this.radius,this.radius),this.timePassed+=this.speed};for(var m=0;m<1300;m++)new u;!function t(){e.globalCompositeOperation="source-over",e.globalAlpha=.5,e.fillStyle="hsla("+s+", 64%, 6%, 2)",e.fillRect(0,0,i,a),e.globalCompositeOperation="lighter";for(var r=1,o=n.length;r<o;r++)n[r].draw();window.requestAnimationFrame(t)}()},toIndex:function(){this.$router.push("/index")}},mounted:function(){this.drawCanvas()}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"login"},[this._m(0),e("canvas",{attrs:{id:"canvas"}}),e("div",{staticClass:"title flip animated"},[this._v("有魅力的博客")]),e("div",{staticClass:"wrap zoomIn animated"},[e("div",{staticClass:"sim-button button10",on:{click:this.toIndex}},[e("span",[this._v("进入博客")])])]),e("v-Clock")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("figure",[e("h1",[this._v("非 常 有 魅 力 喔")]),e("h1",[this._v("非 常 有 魅 力 喔")]),e("h1",[this._v("非 常 有 魅 力 喔")]),e("h1",[this._v("非 常 有 魅 力 喔")]),e("h1",[this._v("非 常 有 魅 力 喔")]),e("h1",[this._v("非 常 有 魅 力 喔")]),e("h1",[this._v("非 常 有 魅 力 喔")]),e("h1",[this._v("非 常 有 魅 力 喔")]),e("h1",[this._v("非 常 有 魅 力 喔")]),e("h1",[this._v("非 常 有 魅 力 喔")])])}]};var g=i("VU/8")(p,v,!1,function(t){i("7rac")},"data-v-6f384bc8",null).exports,b=i("I4KV"),w=i.n(b),x={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ball-wrap",class:this.color},[e("div",{staticClass:"ball"},[e("div",{staticClass:"inner"},[e("div",{staticClass:"percent"},[this._v(this._s(this.percent)+"%")]),e("div",{staticClass:"water",style:{top:100-this.percent+"%"}}),e("div",{staticClass:"water w2",style:{top:100-this.percent+"%"}})])])])},staticRenderFns:[]};var _=[{id:"1",tabName:"踩过的坑",name:"pit",list:[{id:"1-1",title:"vue2+axios上传图片后台接收不到",desc:"问题解决了，其实就是少了一个属性，网上说的那些都是错的，加header这个被他害苦了，希望有遇到问题的时候多去看官方文档，或者源码，共勉。withCredentials: false, // default 改为true就行了。",a:"https://segmentfault.com/q/1010000012134701"},{id:"1-2",title:"vue项目引入ueditor出现bug",desc:"有两个div，里面分别放入了一个ueditor组件，用v-if去切换他们显示隐藏的时候，ueditor的样式会错乱。解决方法：1.在ueditor.config.js中给一个默认宽度，2.找到放置ueditor的那个节点获取到它，然后再获取到ueditor,把ueditor插入到那节点中",a:""},{id:"1-3",title:"ant-design-vue a-select的placeholder不显示",desc:"ant-design-vue的a-select组件，v-model绑定的值是空字符串时，placeholder会不显示。解决方法：把空字符串改成undefined",a:""}]},{id:"2",tabName:"网上搜集的日志",name:"log",list:[{id:"2-1",title:"前端收集",desc:"在前端路上摸索前行，在这里分享自己长期关注的前端开发相关的优秀网站、博客、以及活跃开发者。欢迎更新，以下各排名不分先后顺序。",a:"https://github.com/foru17/luolei-dotfiles/blob/master/feedly.opml"},{id:"2-2",title:"分享一些vue开源组件库",desc:"为移动而生的Vue JS 2组件框架！",a:"http://www.wheelsfactory.cn/#/home"},{id:"2-3",title:"轮子工厂",desc:"里面有很多不错的vue和angular组件！",a:"http://www.wheelsfactory.cn/#/home"},{id:"2-4",title:"Debounce 和 Throttle 的原理及实现",desc:"在处理诸如 resize、scroll、mousemove 和 keydown/keyup/keypress 等事件的时候，通常我们不希望这些事件太过频繁地触发，尤其是监听程序中涉及到大量的计算或者有非常耗费资源的操作。",a:"https://blog.csdn.net/redtopic/article/details/69396722"}]},{id:"3",tabName:"我封装的组件",name:"compos",list:[{id:"3-1",title:"基于vux的地址选择控件",desc:"可点击下方链接查看效果",a:"https://hero7212.github.io/vux-area-selector/index.html#/"},{id:"3-2",title:"仿优酷轮播组件",desc:"可点击下方链接查看效果",a:"https://hero7212.github.io/reactYuKuBanner/index.html"},{id:"3-3",title:"拖拽范围选择器",desc:"可点击下方链接查看效果",a:"https://hero7212.github.io/dragPro/index.html"}]}],C=[{id:"1",color:"green",percent:70,txt:"HTML5"},{id:"2",color:"orange",percent:80,txt:"CSS3"},{id:"3",color:"blue",percent:50,txt:"Jquery"},{id:"4",color:"yellow",percent:80,txt:"React"},{id:"5",color:"red",percent:83,txt:"VUE"},{id:"6",color:"cyan",percent:30,txt:"Node"},{id:"7",color:"violet",percent:70,txt:"Uni-app"},{id:"8",color:"wheat",percent:75,txt:"qiankun"}],y={name:"index",components:{"v-Ball":i("VU/8")({name:"ball",props:["color","percent"],data:function(){return{}}},x,!1,function(t){i("yB5N")},"data-v-7e21be72",null).exports,gallery:w.a},data:function(){return{datas:_,balls:C,list:[],imgUrl:"http://imagecloud.ghmagical.com/t_nw10.jpg",imgUrl2:"http://imagecloud.ghmagical.com/t_nw11.jpg",activeName:"log",ballAni:!1,moveOut:!1,images:["../../static/img/ava.jpg"],tranStyle:"transform: translateZ(-85px) rotateY(0deg) rotateX(0deg)",index:null,x1:0,y1:0,x2:0,y2:0,x0:0,y0:0,k:0,musicPause:!1}},methods:{tabSwitch:function(t,e){var i=this;"skill"==t.name?setTimeout(function(){i.ballAni=!0},1e3):this.ballAni=!1},toLogin:function(){this.$router.push("/")},doTrans:function(t,e){var i=t,a=[i.clientX,-i.clientY],s=a[0],n=a[1],r=(n-this.y0)/(s-this.x0);this.k<r&&r<-this.k?s>this.x0?this.tranStyle=e?"transform: translateZ(-85px) rotateY(-90deg) rotateX(0deg)":"transform: translateZ(-85px) rotateY(0deg) rotateX(0deg)":this.tranStyle=e?"transform: translateZ(-85px) rotateY(90deg) rotateX(0deg)":"transform: translateZ(-85px) rotateY(0deg) rotateX(0deg)":n>this.y0?this.tranStyle=e?"transform: translateZ(-85px) rotateY(0deg) rotateX(-90deg)":"transform: translateZ(-85px) rotateY(0deg) rotateX(0deg)":this.tranStyle=e?"transform: translateZ(-85px) rotateY(0deg) rotateX(90deg)":"transform: translateZ(-85px) rotateY(0deg) rotateX(0deg)"},controlAudio:function(){}},created:function(){},mounted:function(){var t=this.$refs.box;this.x1=t.offsetLeft,this.y1=-t.offsetTop,this.x2=this.x1+t.offsetWidth,this.y2=this.y1-t.offsetHeight,this.x0=(this.x1+this.x2)/2,this.y0=(this.y1+this.y2)/2,this.k=(this.y2-this.y1)/(this.x2-this.x1)}},k={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"main",staticClass:"index"},[a("div",{staticClass:"aside"},[a("img",{staticClass:"bg-img",attrs:{src:i("19Qn")}}),t._v(" "),a("div",{ref:"box",staticClass:"box-3d",on:{click:t.toLogin,mouseover:function(e){t.doTrans(e,!0)},mouseout:function(e){t.doTrans(e,!1)}}},[a("div",{staticClass:"box-content-3d",style:t.tranStyle},t._l(5,function(t){return a("img",{key:t,staticClass:"avatar-img",attrs:{src:i("HtIl")}})}))])]),t._v(" "),a("div",{staticClass:"main"},[a("el-tabs",{on:{"tab-click":t.tabSwitch},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[t._l(t.datas,function(e){return a("el-tab-pane",{key:e.id,attrs:{label:e.tabName,name:e.name}},t._l(e.list,function(e){return a("div",{key:e.id,staticClass:"log lightSpeedIn animated"},[a("div",{staticClass:"title"},[t._v("\n\t\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t\t")]),t._v(" "),a("div",{staticClass:"log-con"},[a("p",[t._v(t._s(e.desc))]),t._v(" "),e.a?a("p",[a("a",{attrs:{href:e.a,target:"_blank"}},[t._v(t._s(e.a))])]):t._e()])])}))}),t._v(" "),a("el-tab-pane",{attrs:{label:"我的技能掌握度",name:"skill"}},[a("div",{staticClass:"skill"},[a("div",{staticClass:"skill-bg"}),t._v(" "),t._l(t.balls,function(e){return a("div",{key:e.id,staticClass:"skill-item",class:{"rotateIn animated":t.ballAni}},[a("v-Ball",{attrs:{color:e.color,percent:e.percent}}),t._v(" "),a("p",{staticClass:"word"},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.txt)+"\n\t\t\t\t\t\t")])],1)})],2)])],2)],1)])},staticRenderFns:[]};var S=i("VU/8")(y,k,!1,function(t){i("HkY8")},"data-v-e18f4c8e",null).exports;n.default.use(l.a);var P=new l.a({routes:[{path:"/",name:"login",component:g},{path:"/index",name:"index",component:S},{path:"*",name:"notFound",component:h}]});n.default.config.productionTip=!1,n.default.use(s.a),new n.default({el:"#app",router:P,template:"<App/>",components:{App:o}})},PpVQ:function(t,e,i){t.exports=i.p+"static/img/cars6.aa523fb.png"},"T+xV":function(t,e){},YhOM:function(t,e){},"bw+O":function(t,e){},omHX:function(t,e){},tvR6:function(t,e){},yB5N:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.ddba733ac77e801288ea.js.map