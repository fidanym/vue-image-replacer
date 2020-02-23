(function(t){function e(e){for(var i,s,o=e[0],l=e[1],c=e[2],m=0,u=[];m<o.length;m++)s=o[m],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&u.push(a[s][0]),a[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(u.length)u.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],i=!0,o=1;o<r.length;o++){var l=r[o];0!==a[l]&&(i=!1)}i&&(n.splice(e--,1),t=s(s.s=r[0]))}return t}var i={},a={app:0},n=[];function s(e){if(i[e])return i[e].exports;var r=i[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=i,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(r,i,function(e){return t[e]}.bind(null,i));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vue-image-replacer/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"3dac":function(t,e,r){"use strict";var i=r("65d2"),a=r.n(i);a.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var i=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container",attrs:{id:"app"}},[r("convert-form")],1)},n=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"row pb-2"},[t._m(0),r("div",{staticClass:"col-sm-8"},[r("div",{staticClass:"form-group row pt-2"},[r("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"post_title"}},[t._v("Post Title")]),r("div",{staticClass:"col-sm-10"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.post_title,expression:"post_title",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",id:"post_title"},domProps:{value:t.post_title},on:{input:function(e){e.target.composing||(t.post_title=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])])])]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"post_body"}},[t._v("Post Body")]),r("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.post_body,expression:"post_body",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{id:"post_body",rows:"8"},domProps:{value:t.post_body},on:{input:function(e){e.target.composing||(t.post_body=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm"},[r("button",{staticClass:"btn btn-block btn-outline-danger",attrs:{disabled:!t.post_body||!t.post_title},on:{click:t.extractImages}},[t._v(" 1. Extract Images ")])]),r("div",{staticClass:"col-sm"},[r("button",{staticClass:"btn btn-block btn-warning",attrs:{disabled:!t.extracted},on:{click:t.downloadImages}},[t._v(" 2. Download Images ")])])]),r("div",{staticClass:"form-group pt-3"},[r("label",{attrs:{for:"image_id"}},[t._v("First image ID")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.first_img_id,expression:"first_img_id",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",id:"image_id"},domProps:{value:t.first_img_id},on:{input:function(e){e.target.composing||(t.first_img_id=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"image_name"}},[t._v("First image Name")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.first_img_name,expression:"first_img_name",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",id:"image_name"},domProps:{value:t.first_img_name},on:{input:function(e){e.target.composing||(t.first_img_name=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),r("button",{staticClass:"btn btn-block btn-dark mb-3",attrs:{disabled:!t.extracted||!t.first_img_id||!t.first_img_name},on:{click:t.replaceImages}},[t._v("3. Replace")]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"converted_post_body"}},[t._v("Converted")]),r("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.converted_body,expression:"converted_body",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{id:"converted_post_body",rows:"8"},domProps:{value:t.converted_body},on:{input:function(e){e.target.composing||(t.converted_body=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm"},[r("button",{staticClass:"btn btn-block btn-danger",on:{click:t.reset}},[t._v(" Reset ")])])])])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-sm-4"},[r("h1",[t._v("Image Replacer")])])}],l=(r("4160"),r("baa5"),r("d81d"),r("d3b7"),r("ac1f"),r("466d"),r("5319"),r("159b"),{name:"ConvertForm",data:function(){return{first_img_id:null,first_img_name:null,post_body:null,converted_body:null,externalImages:[],dataMap:[],extracted:!1,post_title:null}},methods:{downloadImages:function(){var t=this,e=new JSZip,r=0,i=this.post_title.replace(/[^a-zA-Z0-9 ]/g,"");i=i.replace(/\s/g,"-");var a=i+".zip",n=i+"-";this.dataMap.forEach((function(i){fetch(i.url).then((function(t){return t.blob()})).then((function(s){e.file(n+(r+1)+i.extension,s,{binary:!0}),r++,r===t.dataMap.length&&e.generateAsync({type:"blob"}).then((function(t){saveAs(t,a)}))}))}))},extractImages:function(){if(this.post_body)if(this.externalImages=this.post_body.match(/<img [^>]*src="[^"]*"[^>]*>/gm),this.externalImages&&this.externalImages.length){var t=/\.([0-9a-z]+)(?:[\?#]|$)/i;this.dataMap=this.externalImages.map((function(e,r){var i=e.replace(/.*src="([^"]*)".*/,"$1"),a=e.replace(/.*(wp-image-\d+).*/,"$1"),n="."+i.match(t).pop();return{url:i,image_id:a,index:r,new_url_ending:r+1+n,extension:n}})),this.extracted=!0}else alert("No images found");else alert("Missing post body")},replaceImages:function(){if(this.first_img_id&&this.first_img_name)if(this.first_img_name.lastIndexOf("-")===this.first_img_name.length-1)if(this.externalImages.length){for(var t=this.post_body,e=parseInt(this.first_img_id),r=0;r<this.dataMap.length;r++){var i=this.dataMap[r],a=this.first_img_name+i.new_url_ending,n="wp-image-"+(i.index+e);t=t.replace(i.url,a),t=t.replace(i.image_id,n)}this.converted_body=t}else alert("No images found");else alert('Name must end in dash "-"');else alert("Missing id and name")},reset:function(){this.first_img_id=null,this.first_img_name=null,this.post_body=null,this.converted_body=null,this.externalImages=[],this.dataMap=[],this.extracted=!1,this.post_title=null}}}),c=l,d=(r("3dac"),r("2877")),m=Object(d["a"])(c,s,o,!1,null,"7b3e57f4",null),u=m.exports,p={name:"App",components:{ConvertForm:u}},f=p,_=Object(d["a"])(f,a,n,!1,null,null,null),g=_.exports;r("4989"),r("ab8b");i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(g)}}).$mount("#app")},"65d2":function(t,e,r){}});
//# sourceMappingURL=app.70cdb5bb.js.map