!function(t){function e(e){for(var s,l,i=e[0],c=e[1],o=e[2],_=0,u=[];_<i.length;_++)l=i[_],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&u.push(n[l][0]),n[l]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);for(v&&v(e);u.length;)u.shift()();return a.push.apply(a,o||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],s=!0,i=1;i<r.length;i++){var c=r[i];0!==n[c]&&(s=!1)}s&&(a.splice(e--,1),t=l(l.s=r[0]))}return t}var s={},n={1:0},a=[];function l(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(t){var e=[],r=n[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise((function(e,s){r=n[t]=[e,s]}));e.push(r[2]=s);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.src=function(t){return l.p+""+({}[t]||t)+".5f28bdd018faffab1cf6.js"}(t);var c=new Error;a=function(e){i.onerror=i.onload=null,clearTimeout(o);var r=n[t];if(0!==r){if(r){var s=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+s+": "+a+")",c.name="ChunkLoadError",c.type=s,c.request=a,r[1](c)}n[t]=void 0}};var o=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(e)},l.m=t,l.c=s,l.d=function(t,e,r){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},l.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)l.d(r,s,function(e){return t[e]}.bind(null,s));return r},l.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="",l.oe=function(t){throw console.error(t),t};var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var o=0;o<i.length;o++)e(i[o]);var v=c;a.push([18,0]),r()}([,,function(t,e,r){var s=r(10);"string"==typeof s&&(s=[[t.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r(7)(s,n);s.locals&&(t.exports=s.locals)},function(t,e,r){var s=r(13);"string"==typeof s&&(s=[[t.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r(7)(s,n);s.locals&&(t.exports=s.locals)},,,,,function(t,e,r){"use strict";e.a={props:{type:{type:String,default:"boring"},active:{type:Boolean,default:!1},color:{type:String,default:"#000000"},activeColor:{type:String,default:null},size:{type:String,validator:function(t){return-1!==["xs","s","m","l","xl"].indexOf(t)},default:"m"},reversed:{type:Boolean,default:function(){return!1}}}}},function(t,e,r){"use strict";var s=r(2);r.n(s).a},function(t,e,r){(t.exports=r(6)(!1)).push([t.i,".sidebar>h1[data-v-a0f8813c]{text-align:left;font-weight:700;color:#42b983;margin:15px 0 20px 30px}",""])},,function(t,e,r){"use strict";var s=r(3);r.n(s).a},function(t,e,r){(t.exports=r(6)(!1)).push([t.i,"body{overflow-y:auto!important}.content{padding-top:20px}.markdown-section table{display:table}.hamburger{padding:10px}.demo{border:0;display:flex;flex-direction:column}.demo div{text-align:center;padding:20px;margin:0}@media only screen and (min-width:600px){.demo{flex-direction:row;flex-wrap:wrap}.demo div{flex:0 0 50%}}@media only screen and (min-width:900px){.demo div{flex:0 0 33.3%}}@media only screen and (min-width:1160px){.demo div{flex:0 0 25%}}",""])},,,,,function(t,e,r){"use strict";r.r(e);var s={};r.r(s),r.d(s,"install",(function(){return _})),r.d(s,"TastyBurgerButton",(function(){return v}));var n=r(1),a=r(5),l=r(8),i={arrowalt:function(){return r.e(3).then(r.bind(null,74))},arrow:function(){return r.e(5).then(r.bind(null,76))},arrowturn:function(){return r.e(4).then(r.bind(null,81))},boring:function(){return r.e(6).then(r.bind(null,77))},collapse:function(){return r.e(7).then(r.bind(null,78))},elastic:function(){return r.e(8).then(r.bind(null,79))},emphatic:function(){return r.e(9).then(r.bind(null,80))},minus:function(){return r.e(10).then(r.bind(null,90))},slider:function(){return r.e(11).then(r.bind(null,82))},spin:function(){return r.e(12).then(r.bind(null,83))},spring:function(){return r.e(13).then(r.bind(null,84))},squeeze:function(){return r.e(14).then(r.bind(null,85))},stand:function(){return r.e(15).then(r.bind(null,86))},vortex:function(){return r.e(16).then(r.bind(null,87))},x3d:function(){return r.e(17).then(r.bind(null,88))},y3d:function(){return r.e(19).then(r.bind(null,89))},xy3d:function(){return r.e(18).then(r.bind(null,75))}},c={components:i,mixins:[l.a],data:function(){return{components:i,typeMap:{"3dx":"x3d","3dy":"y3d","3dxy":"xy3d"}}},computed:{computedType:function(){var t="-r"===this.type.slice(-2)?this.type.substring(0,this.type.length-2):this.type;return t in this.typeMap?this.typeMap[t]:t}}},o=r(0),v=Object(o.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)(this.components[this.computedType],this._g(this._b({tag:"component"},"component",Object.assign({},this.$props,this.$attrs),!1),this.$listeners))}),[],!1,null,null,null).exports;function _(t,e){t.component("TastyBurgerButton",v);var r="";e&&"prefix"in e&&(r=(r=(r=e.prefix).charAt(0).toUpperCase()+r.slice(1)).replace(/-([a-z])/g,(function(t){return t[1].toUpperCase()})).replace(/-/g,""));var s="".concat(r,"TastyBurgerButton");t.component(s,v)}"undefined"!=typeof window&&window.Vue&&window.Vue.use({install:_});var u={data:function(){return{sections:[{pages:[{to:"quick-start",title:"Quick start"},{to:"install-for-dev",title:"Install for development"},{to:"tasty-burger-button",title:"How to use it"},{to:"available-burgers",title:"Available burger buttons"}]}]}}},p=(r(9),{data:function(){return{link:"https://github.com/imfaber/vue-tasty-burgers",label:"View source on Github"}}}),h={components:{"app-sidebar":Object(o.a)(u,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("aside",{staticClass:"sidebar"},[r("h1",[r("a",{attrs:{href:""}}),t._v(" "),r("router-link",{attrs:{to:"index"}},[r("a",{staticClass:"app-name-link",attrs:{"data-nosearch":""}},[t._v("Vue Tasty Burgers")])])],1),t._v(" "),r("div",{staticClass:"sidebar-nav"},[r("ul",t._l(t.sections,(function(e){return r("li",{key:e.title},[r("p",[t._v(t._s(e.title))]),t._v(" "),r("ul",t._l(e.pages,(function(e){return r("router-link",{key:e.title,attrs:{tag:"li","active-class":"active",to:e.to}},[r("a",[t._v(t._s(e.title))])])})),1)])})),0)])])}),[],!1,null,"a0f8813c",null).exports,"app-footer":Object(o.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[e("hr"),this._v(" "),e("span",[this._v("©2018 "),e("a",{attrs:{href:"https://imfaber.me",target:"_blank"}},[this._v("Imfaber")])])])}],!1,null,null,null).exports,"app-github-link":Object(o.a)(p,(function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"github-corner",attrs:{href:this.link,"aria-label":this.label,target:"_blank"}},[e("svg",{staticStyle:{fill:"#42b983, color: rgb(255, 255, 255)",position:"absolute",top:"0px",border:"0px",right:"0px"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[e("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),e("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px 0px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"#fff"}}),e("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"#fff"}})])])}),[],!1,null,null,null).exports}},d=(r(12),Object(o.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("main",[e("app-sidebar"),this._v(" "),e("section",{staticClass:"content"},[e("article",{staticClass:"markdown-section"},[e("router-view"),this._v(" "),e("app-footer")],1)]),this._v(" "),e("app-github-link")],1)}),[],!1,null,null,null).exports),f={components:{}},y=Object(o.a)(f,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("h1",[t._v("Quick Start")]),t._v(" "),r("h2",[t._v("Install")]),t._v(" "),r("p",[t._v("Install with npm:")]),t._v(" "),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-bash"}},[t._v("npm install vue-tasty-burgers\n")])]),t._v(" "),r("h2",[t._v("Use the library (Global Registration)")]),t._v(" "),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[r("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// main.js")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" Vue "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'vue'")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" * "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("as")]),t._v(" TastyBurgerButton "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'vue-tasty-burgers'")]),t._v(";\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'vue-tasty-burgers/dist/vue-tasty-burgers.css'")]),t._v(";\n\nVue.use(TastyBurgerButton);\n")])]),t._v(" "),r("h3",[t._v("No Conflict")]),t._v(" "),r("p",[t._v("The component will be installed with no prefix by default, you can add any prefix\nto them to avoid conflicts with other libs if needed.")]),t._v(" "),r("p",[t._v("For example:")]),t._v(" "),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t._v("Vue.use(TastyBurgerButton, { "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("prefix")]),t._v(": "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'abc'")]),t._v(" });\n")])]),t._v(" "),r("p",[t._v("Results in:")]),t._v(" "),r("ul",[r("li",[t._v("Components such as "),r("code",{pre:!0},[t._v("<tasty-burger-button>")]),t._v(" becomes "),r("code",{pre:!0},[t._v("<abc-tasty-burger-button>")])])]),t._v(" "),r("h2",[t._v("Use the library (Local Registration)")]),t._v(" "),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v("// your-component.js\n"),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("tasty-burger-button")]),t._v(" />")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),r("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" {TastyBurgerButton} "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'vue-tasty-burgers'")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'vue-tasty-burgers/dist/vue-tasty-burgers.css'")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n  "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("components")]),t._v(": {\n    "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'tasty-burger-button'")]),t._v(": TastyBurgerButton\n  }\n}\n")]),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])])}],!1,null,null,null).exports,g={components:{}},b=Object(o.a)(g,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("h1",[t._v("Install for local development")]),t._v(" "),r("p",[t._v("Clone the Git repository of this library and link it.")]),t._v(" "),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-bash"}},[t._v("git "),r("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("clone")]),t._v(" git@github.com:imfaber/vue-tasty-burgers.git\n"),r("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("cd")]),t._v(" vue-tasty-burgers\nnpm install\nnpm run build\nnpm link\n")])]),t._v(" "),r("p",[t._v("In your client project root folder:")]),t._v(" "),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-bash"}},[t._v("npm link vue-tasty-burgers\n")])])])}],!1,null,null,null).exports,m={components:{}},x=Object(o.a)(m,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("h1",[t._v("How to use the component")]),t._v(" "),r("h3",[t._v("Example")]),t._v(" "),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[r("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("tasty-burger-button")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":type")]),t._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"buttonType"')]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":active")]),t._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"isActive"')]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":size")]),t._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"size"')]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":color")]),t._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"color"')]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":active-color")]),t._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"activeColor"')]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-on:toggle")]),t._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"onToggle"')]),t._v(" />")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),r("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n  data () {\n    "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n      "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("buttonType")]),t._v(": "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'elastic'")]),t._v(",\n      "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("isActive")]),t._v(": "),r("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(",\n      "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("size")]),t._v(": "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'xl'")]),t._v(",\n      "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("color")]),t._v(": "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'green'")]),t._v(",\n      "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("activeColor")]),t._v(": "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'orange'")]),t._v("\n    }\n  },\n  "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n    onToggle (active) {\n      "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// Toggle menu")]),t._v("\n    }\n  }\n}\n")]),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])]),t._v(" "),r("h3",[t._v("Props")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[t._v("Name")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("Default")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("Required")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",{pre:!0},[t._v("type")])]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("boring")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("The type of burger button")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",{pre:!0},[t._v("active")])]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("Determines if the button is in the active state")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",{pre:!0},[t._v("size")])]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("m")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("The size of the button (xs, s, m, l, xl)")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",{pre:!0},[t._v("color")])]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("#00000")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("The color of the button in its default state")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",{pre:!0},[t._v("activeColor")])]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("#00000")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("The color of the button in its active state")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",{pre:!0},[t._v("reversed")])]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("Reverse the animation of the button")])])])]),t._v(" "),r("h3",[t._v("Events")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[t._v("Name")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("Params")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",{pre:!0},[t._v("toggle")])]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("active")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("Fired after the button is clicked and its active state changed")])])])])])}],!1,null,null,null).exports,S={components:{}},j=Object(o.a)(S,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("h1",[t._v("The available burgers")]),t._v(" "),r("p",[t._v("Here the full list of available buttons.")]),t._v(" "),r("table",[t._m(0),t._v(" "),r("tbody",[r("tr",[t._m(1),t._v(" "),t._m(2),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("tasty-burger-button",{attrs:{type:"3dx"}})],1)]),t._v(" "),r("tr",[t._m(3),t._v(" "),t._m(4),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("tasty-burger-button",{attrs:{type:"3dy"}})],1)]),t._v(" "),r("tr",[t._m(5),t._v(" "),t._m(6),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("tasty-burger-button",{attrs:{type:"3dxy"}})],1)]),t._v(" "),r("tr",[t._m(7),t._v(" "),t._m(8),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("tasty-burger-button",{attrs:{type:"arrow"}})],1)]),t._v(" "),r("tr",[t._m(9),t._v(" "),t._m(10),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("tasty-burger-button",{attrs:{type:"arrowalt"}})],1)]),t._v(" "),r("tr",[t._m(11),t._v(" "),t._m(12),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("tasty-burger-button",{attrs:{type:"arrowturn"}})],1)]),t._v(" "),r("tr",[t._m(13),t._v(" "),t._m(14),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("tasty-burger-button",{attrs:{type:"boring"}})],1)]),t._v(" "),r("tr",[t._m(15),t._v(" "),t._m(16),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("tasty-burger-button",{attrs:{type:"collapse"}})],1)]),t._v(" "),r("tr",[t._m(17),t._v(" "),t._m(18),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("tasty-burger-button",{attrs:{type:"elastic"}})],1)]),t._v(" "),r("tr",[t._m(19),t._v(" "),t._m(20),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("tasty-burger-button",{attrs:{type:"emphatic"}})],1)]),t._v(" "),r("tr",[t._m(21),t._v(" "),t._m(22),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("tasty-burger-button",{attrs:{type:"minus"}})],1)]),t._v(" "),r("tr",[t._m(23),t._v(" "),t._m(24),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("tasty-burger-button",{attrs:{type:"slider"}})],1)]),t._v(" "),r("tr",[t._m(25),t._v(" "),t._m(26),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("tasty-burger-button",{attrs:{type:"spin"}})],1)]),t._v(" "),r("tr",[t._m(27),t._v(" "),t._m(28),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("tasty-burger-button",{attrs:{type:"spring"}})],1)]),t._v(" "),r("tr",[t._m(29),t._v(" "),t._m(30),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("tasty-burger-button",{attrs:{type:"stand"}})],1)]),t._v(" "),r("tr",[t._m(31),t._v(" "),t._m(32),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("tasty-burger-button",{attrs:{type:"squeeze"}})],1)]),t._v(" "),r("tr",[t._m(33),t._v(" "),t._m(34),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("tasty-burger-button",{attrs:{type:"vortex"}})],1)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[this._v("Type")]),this._v(" "),e("th",{staticStyle:{"text-align":"left"}},[this._v("Usage example")]),this._v(" "),e("th",{staticStyle:{"text-align":"center"}},[this._v("Demo")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"left"}},[e("code",{pre:!0},[this._v("3dx")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"left"}},[e("code",{pre:!0},[this._v('<tasty-burger-button type="3dx" />')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"left"}},[e("code",{pre:!0},[this._v("3dy")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"left"}},[e("code",{pre:!0},[this._v('<tasty-burger-button type="3dy" />')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"left"}},[e("code",{pre:!0},[this._v("3dxy")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"left"}},[e("code",{pre:!0},[this._v('<tasty-burger-button type="3dxy" />')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"left"}},[e("code",{pre:!0},[this._v("arrow")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"left"}},[e("code",{pre:!0},[this._v('<tasty-burger-button type="arrow" />')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"left"}},[e("code",{pre:!0},[this._v("arrowalt")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"left"}},[e("code",{pre:!0},[this._v('<tasty-burger-button type="arrowalt" />')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"left"}},[e("code",{pre:!0},[this._v("arrowturn")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"left"}},[e("code",{pre:!0},[this._v('<tasty-burger-button type="arrowturn" />')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"left"}},[e("code",{pre:!0},[this._v("boring")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"left"}},[e("code",{pre:!0},[this._v('<tasty-burger-button type="boring" />')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"left"}},[e("code",{pre:!0},[this._v("collapse")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"left"}},[e("code",{pre:!0},[this._v('<tasty-burger-button type="collapse" />')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"left"}},[e("code",{pre:!0},[this._v("elastic")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"left"}},[e("code",{pre:!0},[this._v('<tasty-burger-button type="elastic" />')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"left"}},[e("code",{pre:!0},[this._v("emphatic")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"left"}},[e("code",{pre:!0},[this._v('<tasty-burger-button type="emphatic" />')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"left"}},[e("code",{pre:!0},[this._v("minus")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"left"}},[e("code",{pre:!0},[this._v('<tasty-burger-button type="minus" />')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"left"}},[e("code",{pre:!0},[this._v("slider")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"left"}},[e("code",{pre:!0},[this._v('<tasty-burger-button type="slider" />')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"left"}},[e("code",{pre:!0},[this._v("spin")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"left"}},[e("code",{pre:!0},[this._v('<tasty-burger-button type="spin" />')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"left"}},[e("code",{pre:!0},[this._v("spring")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"left"}},[e("code",{pre:!0},[this._v('<tasty-burger-button type="spring" />')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"left"}},[e("code",{pre:!0},[this._v("stand")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"left"}},[e("code",{pre:!0},[this._v('<tasty-burger-button type="stand" />')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"left"}},[e("code",{pre:!0},[this._v("squeeze")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"left"}},[e("code",{pre:!0},[this._v('<tasty-burger-button type="squeeze" />')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"left"}},[e("code",{pre:!0},[this._v("vortex")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"left"}},[e("code",{pre:!0},[this._v('<tasty-burger-button type="vortex" />')])])}],!1,null,null,null).exports,w={components:{}},E=[{path:"/index",component:Object(o.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("h1",[t._v("Vue Tasty Burgers")]),t._v(" "),t._m(0),t._v(" "),r("h2",[t._v("Demo")]),t._v(" "),r("section",{staticClass:"demo"},[r("div",[r("h4",[t._v("Boring")]),t._v(" "),r("tasty-burger-button",{attrs:{color:"#42b983",type:"boring"}})],1),t._v(" "),r("div",[r("h4",[t._v("Collapse")]),t._v(" "),r("tasty-burger-button",{attrs:{color:"#42b983",type:"collapse"}})],1),t._v(" "),r("div",[r("h4",[t._v("Elastic")]),t._v(" "),r("tasty-burger-button",{attrs:{color:"#42b983",type:"elastic"}})],1),t._v(" "),r("div",[r("h4",[t._v("Arrow")]),t._v(" "),r("tasty-burger-button",{attrs:{color:"#42b983",type:"arrowalt"}})],1),t._v(" "),r("div",[r("h4",[t._v("Arrow 2")]),t._v(" "),r("tasty-burger-button",{attrs:{color:"#42b983",type:"arrowturn"}})],1),t._v(" "),r("div",[r("h4",[t._v("Emphatic")]),t._v(" "),r("tasty-burger-button",{attrs:{color:"#42b983",type:"emphatic"}})],1),t._v(" "),r("div",[r("h4",[t._v("Minus")]),t._v(" "),r("tasty-burger-button",{attrs:{color:"#42b983",type:"minus"}})],1),t._v(" "),r("div",[r("h4",[t._v("Slider")]),t._v(" "),r("tasty-burger-button",{attrs:{color:"#42b983",type:"slider"}})],1),t._v(" "),r("div",[r("h4",[t._v("Spin")]),t._v(" "),r("tasty-burger-button",{attrs:{color:"#42b983",type:"spin"}})],1),t._v(" "),r("div",[r("h4",[t._v("3D horizontal")]),t._v(" "),r("tasty-burger-button",{attrs:{color:"#42b983",type:"3dx"}})],1),t._v(" "),r("div",[r("h4",[t._v("3D vertical")]),t._v(" "),r("tasty-burger-button",{attrs:{color:"#42b983",type:"3dy"}})],1),t._v(" "),r("div",[r("h4",[t._v("3D bidirectional")]),t._v(" "),r("tasty-burger-button",{attrs:{color:"#42b983",type:"3dxy"}})],1),t._v(" "),r("div",[r("h4",[t._v("Spring")]),t._v(" "),r("tasty-burger-button",{attrs:{color:"#42b983",type:"spring"}})],1),t._v(" "),r("div",[r("h4",[t._v("Stand")]),t._v(" "),r("tasty-burger-button",{attrs:{color:"#42b983",type:"stand"}})],1),t._v(" "),r("div",[r("h4",[t._v("Squize")]),t._v(" "),r("tasty-burger-button",{attrs:{color:"#42b983",type:"squeeze"}})],1),t._v(" "),r("div",[r("h4",[t._v("Vortex")]),t._v(" "),r("tasty-burger-button",{attrs:{color:"#42b983",type:"vortex"}})],1)]),t._v(" "),r("hr")])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("An easy to use hamburger buttons library for VueJS inspired by the "),e("a",{attrs:{href:"https://jonsuh.com/hamburgers/",target:"_blank"}},[this._v("AMBURGERS")]),this._v(" project")])}],!1,null,null,null).exports},{path:"/quick-start",component:y},{path:"/install-for-dev",component:b},{path:"/tasty-burger-button",component:x},{path:"/available-burgers",component:j},{path:"*",redirect:"/index"}];n.default.use(a.a),n.default.use(s);var $=new a.a({routes:E,scrollBehavior:function(t,e,r){return{x:0,y:0}}});new n.default({el:"#app",router:$,render:function(t){return t(d)}})}]);