(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50bb9dbc"],{1940:function(t,i,r){},"1dde":function(t,i,r){var n=r("d039"),e=r("b622"),s=r("60ae"),o=e("species");t.exports=function(t){return s>=51||!n((function(){var i=[],r=i.constructor={};return r[o]=function(){return{foo:1}},1!==i[t](Boolean).foo}))}},"4e82":function(t,i,r){"use strict";var n=r("23e7"),e=r("1c0b"),s=r("7b0b"),o=r("d039"),c=r("b301"),a=[].sort,u=[1,2,3],f=o((function(){u.sort(void 0)})),l=o((function(){u.sort(null)})),h=c("sort"),v=f||!l||h;n({target:"Array",proto:!0,forced:v},{sort:function(t){return void 0===t?a.call(s(this)):a.call(s(this),e(t))}})},"65f0":function(t,i,r){var n=r("861d"),e=r("e8b5"),s=r("b622"),o=s("species");t.exports=function(t,i){var r;return e(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!e(r.prototype)?n(r)&&(r=r[o],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===i?0:i)}},8418:function(t,i,r){"use strict";var n=r("c04e"),e=r("9bf2"),s=r("5c6c");t.exports=function(t,i,r){var o=n(i);o in t?e.f(t,o,s(0,r)):t[o]=r}},9243:function(t,i,r){"use strict";var n=r("1940"),e=r.n(n);e.a},a623:function(t,i,r){"use strict";var n=r("23e7"),e=r("b727").every,s=r("b301");n({target:"Array",proto:!0,forced:s("every")},{every:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}})},b301:function(t,i,r){"use strict";var n=r("d039");t.exports=function(t,i){var r=[][t];return!r||!n((function(){r.call(null,i||function(){throw 1},1)}))}},b727:function(t,i,r){var n=r("f8c2"),e=r("44ad"),s=r("7b0b"),o=r("50c4"),c=r("65f0"),a=[].push,u=function(t){var i=1==t,r=2==t,u=3==t,f=4==t,l=6==t,h=5==t||l;return function(v,d,p,b){for(var y,g,m=s(v),x=e(m),A=n(d,p,3),w=o(x.length),$=0,k=b||c,_=i?k(v,w):r?k(v,0):void 0;w>$;$++)if((h||$ in x)&&(y=x[$],g=A(y,$,m),t))if(i)_[$]=g;else if(g)switch(t){case 3:return!0;case 5:return y;case 6:return $;case 2:a.call(_,y)}else if(f)return!1;return l?-1:u||f?f:_}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},d9c4:function(t,i,r){"use strict";r.r(i);var n=function(){var t=this,i=t.$createElement,r=t._self._c||i;return r("div",[r("div",{attrs:{id:"container"}},[r("h1",{staticClass:"header",attrs:{align:"center"}},[t._v("拼图九宫格")]),r("ul",{attrs:{id:"box"}},t._l(t.list,(function(i,n){return r("li",{key:i,style:""===i?{backgroundImage:"none"}:{backgroundPosition:i%3*-100+"px -"+100*Math.floor(i/3)+"px"},on:{click:function(i){return t.move(n)}}})})),0),r("div",{staticClass:"refresh",on:{click:t.init}},[t._v("刷新")])])])},e=[],s=(r("a623"),r("fb6a"),r("4e82"),{data:function(){return{list:[]}},methods:{init:function(){for(var t=[],i=0;i<8;i++)t.push(i);t.push(""),t.sort((function(){return Math.random()-.5})),this.list=t},move:function(t){var i=this.list[t],r=this.list[t-1],n=this.list[t+1],e=this.list[t-3],s=this.list[t+3];""===r&&t%3!=0?(this.$set(this.list,t-1,i),this.$set(this.list,t,"")):""===n&&t%3!=2?(this.$set(this.list,t+1,i),this.$set(this.list,t,"")):""===e?(this.$set(this.list,t-3,i),this.$set(this.list,t,"")):""===s&&(this.$set(this.list,t+3,i),this.$set(this.list,t,"")),this.pass()},pass:function(){var t=this;if(""===this.list[8]){var i=this.list.slice(0,8).every((function(t,i,r){return t===i}));i&&setTimeout((function(){alert("闯关成功"),t.init()}),1e3)}}},created:function(){this.init();var t={title:"游戏",color:"game"};this.$emit("changeNav",t)}}),o=s,c=(r("9243"),r("2877")),a=Object(c["a"])(o,n,e,!1,null,"1ceecf16",null);i["default"]=a.exports},e8b5:function(t,i,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},fb6a:function(t,i,r){"use strict";var n=r("23e7"),e=r("861d"),s=r("e8b5"),o=r("23cb"),c=r("50c4"),a=r("fc6a"),u=r("8418"),f=r("1dde"),l=r("b622"),h=l("species"),v=[].slice,d=Math.max;n({target:"Array",proto:!0,forced:!f("slice")},{slice:function(t,i){var r,n,f,l=a(this),p=c(l.length),b=o(t,p),y=o(void 0===i?p:i,p);if(s(l)&&(r=l.constructor,"function"!=typeof r||r!==Array&&!s(r.prototype)?e(r)&&(r=r[h],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return v.call(l,b,y);for(n=new(void 0===r?Array:r)(d(y-b,0)),f=0;b<y;b++,f++)b in l&&u(n,f,l[b]);return n.length=f,n}})}}]);
//# sourceMappingURL=chunk-50bb9dbc.cb89ac7e.js.map