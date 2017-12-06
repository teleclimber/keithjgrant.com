/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = removeNode;
/* harmony export (immutable) */ __webpack_exports__["b"] = cloneBackground;
function removeNode(el) {
  el.parentNode.removeChild(el);
}

function cloneBackground(el) {
  const bg = document.createElement('div');
  bg.className = el.className.replace('js-main', 'js-bg');
  return bg;
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = dropOut;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_dom__ = __webpack_require__(0);


function dropOut(oldEl, newEl) {
  const tl = new TimelineLite({
    onComplete: () => {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_dom__["a" /* removeNode */])(oldEl);
    },
  });
  tl.set(oldEl, {
    position: 'absolute',
    left: 0,
    right: 0,
    transformOrigin: '50% 0%',
  });
  tl.set(oldEl.parentNode, {
    perspective: 500,
  });
  tl.add('top');
  tl.to(
    oldEl,
    0.3,
    {
      y: 1000,
      z: -1100,
      opacity: 0,
      ease: Power4.easeIn,
    },
    'top'
  );
  tl.play();
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = navigation;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selectTransition__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transitions_dropOut__ = __webpack_require__(1);



// TODO
let isNavigating = false;

function navigation() {
  document.body.addEventListener('click', function(e) {
    if (!e.target.matches('a')) {
      return;
    }
    if (e.target.origin !== location.origin) {
      return;
    }
    e.preventDefault();
    const url = e.target.pathname;
    advanceToUrl(url, e.target);
  });
  window.onpopstate = event => {
    backToUrl(document.location.pathname);
  };
}

async function advanceToUrl(url, clickedEl) {
  // try {
  const newContent = await fetchPageContent(url);
  const currentContent = document.querySelector('.js-main');
  currentContent.parentNode.insertBefore(
    newContent,
    currentContent.nextSibling
  );

  const effect = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__selectTransition__["a" /* default */])(url);
  history.pushState({}, '', url);
  if (effect) {
    effect(currentContent, newContent, clickedEl);
  } else {
    // document.location = url;
  }
  // } catch (e) {
  //   document.location = url;
  // }
}

async function backToUrl(url) {
  const newContent = await fetchPageContent(url);
  const currentContent = document.querySelector('.js-main');
  currentContent.parentNode.insertBefore(
    newContent,
    currentContent.nextSibling
  );
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__transitions_dropOut__["a" /* default */])(currentContent, newContent);
}

async function fetchPageContent(url) {
  const response = await fetch(url);
  const html = await response.text();
  const content = document.createElement('html');
  content.innerHTML = html;
  return content.querySelector('.js-main');
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {

/* http://prismjs.com/download.html?themes=prism-okaidia&languages=markup+css+clike+javascript+css-extras+scss&plugins=highlight-keywords */
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var e=/\blang(?:uage)?-(\w+)\b/i,t=0,n=_self.Prism={manual:_self.Prism&&_self.Prism.manual,disableWorkerMessageHandler:_self.Prism&&_self.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof a?new a(e.type,n.util.encode(e.content),e.alias):"Array"===n.util.type(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e){var t=n.util.type(e);switch(t){case"Object":var a={};for(var r in e)e.hasOwnProperty(r)&&(a[r]=n.util.clone(e[r]));return a;case"Array":return e.map(function(e){return n.util.clone(e)})}return e}},languages:{extend:function(e,t){var a=n.util.clone(n.languages[e]);for(var r in t)a[r]=t[r];return a},insertBefore:function(e,t,a,r){r=r||n.languages;var l=r[e];if(2==arguments.length){a=arguments[1];for(var i in a)a.hasOwnProperty(i)&&(l[i]=a[i]);return l}var o={};for(var s in l)if(l.hasOwnProperty(s)){if(s==t)for(var i in a)a.hasOwnProperty(i)&&(o[i]=a[i]);o[s]=l[s]}return n.languages.DFS(n.languages,function(t,n){n===r[e]&&t!=e&&(this[t]=o)}),r[e]=o},DFS:function(e,t,a,r){r=r||{};for(var l in e)e.hasOwnProperty(l)&&(t.call(e,l,e[l],a||l),"Object"!==n.util.type(e[l])||r[n.util.objId(e[l])]?"Array"!==n.util.type(e[l])||r[n.util.objId(e[l])]||(r[n.util.objId(e[l])]=!0,n.languages.DFS(e[l],t,l,r)):(r[n.util.objId(e[l])]=!0,n.languages.DFS(e[l],t,null,r)))}},plugins:{},highlightAll:function(e,t){var a={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",a);for(var r,l=a.elements||document.querySelectorAll(a.selector),i=0;r=l[i++];)n.highlightElement(r,e===!0,a.callback)},highlightElement:function(t,a,r){for(var l,i,o=t;o&&!e.test(o.className);)o=o.parentNode;o&&(l=(o.className.match(e)||[,""])[1].toLowerCase(),i=n.languages[l]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+l,t.parentNode&&(o=t.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+l));var s=t.textContent,g={element:t,language:l,grammar:i,code:s};if(n.hooks.run("before-sanity-check",g),!g.code||!g.grammar)return g.code&&(n.hooks.run("before-highlight",g),g.element.textContent=g.code,n.hooks.run("after-highlight",g)),n.hooks.run("complete",g),void 0;if(n.hooks.run("before-highlight",g),a&&_self.Worker){var u=new Worker(n.filename);u.onmessage=function(e){g.highlightedCode=e.data,n.hooks.run("before-insert",g),g.element.innerHTML=g.highlightedCode,r&&r.call(g.element),n.hooks.run("after-highlight",g),n.hooks.run("complete",g)},u.postMessage(JSON.stringify({language:g.language,code:g.code,immediateClose:!0}))}else g.highlightedCode=n.highlight(g.code,g.grammar,g.language),n.hooks.run("before-insert",g),g.element.innerHTML=g.highlightedCode,r&&r.call(t),n.hooks.run("after-highlight",g),n.hooks.run("complete",g)},highlight:function(e,t,r){var l=n.tokenize(e,t);return a.stringify(n.util.encode(l),r)},matchGrammar:function(e,t,a,r,l,i,o){var s=n.Token;for(var g in a)if(a.hasOwnProperty(g)&&a[g]){if(g==o)return;var u=a[g];u="Array"===n.util.type(u)?u:[u];for(var c=0;c<u.length;++c){var h=u[c],f=h.inside,d=!!h.lookbehind,m=!!h.greedy,p=0,y=h.alias;if(m&&!h.pattern.global){var v=h.pattern.toString().match(/[imuy]*$/)[0];h.pattern=RegExp(h.pattern.source,v+"g")}h=h.pattern||h;for(var b=r,k=l;b<t.length;k+=t[b].length,++b){var w=t[b];if(t.length>e.length)return;if(!(w instanceof s)){h.lastIndex=0;var _=h.exec(w),P=1;if(!_&&m&&b!=t.length-1){if(h.lastIndex=k,_=h.exec(e),!_)break;for(var A=_.index+(d?_[1].length:0),j=_.index+_[0].length,x=b,O=k,N=t.length;N>x&&(j>O||!t[x].type&&!t[x-1].greedy);++x)O+=t[x].length,A>=O&&(++b,k=O);if(t[b]instanceof s||t[x-1].greedy)continue;P=x-b,w=e.slice(k,O),_.index-=k}if(_){d&&(p=_[1].length);var A=_.index+p,_=_[0].slice(p),j=A+_.length,S=w.slice(0,A),C=w.slice(j),M=[b,P];S&&(++b,k+=S.length,M.push(S));var E=new s(g,f?n.tokenize(_,f):_,y,_,m);if(M.push(E),C&&M.push(C),Array.prototype.splice.apply(t,M),1!=P&&n.matchGrammar(e,t,a,b,k,!0,g),i)break}else if(i)break}}}}},tokenize:function(e,t){var a=[e],r=t.rest;if(r){for(var l in r)t[l]=r[l];delete t.rest}return n.matchGrammar(e,a,t,0,0,!1),a},hooks:{all:{},add:function(e,t){var a=n.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=n.hooks.all[e];if(a&&a.length)for(var r,l=0;r=a[l++];)r(t)}}},a=n.Token=function(e,t,n,a,r){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length,this.greedy=!!r};if(a.stringify=function(e,t,r){if("string"==typeof e)return e;if("Array"===n.util.type(e))return e.map(function(n){return a.stringify(n,t,e)}).join("");var l={type:e.type,content:a.stringify(e.content,t,r),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:r};if(e.alias){var i="Array"===n.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(l.classes,i)}n.hooks.run("wrap",l);var o=Object.keys(l.attributes).map(function(e){return e+'="'+(l.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+l.tag+' class="'+l.classes.join(" ")+'"'+(o?" "+o:"")+">"+l.content+"</"+l.tag+">"},!_self.document)return _self.addEventListener?(n.disableWorkerMessageHandler||_self.addEventListener("message",function(e){var t=JSON.parse(e.data),a=t.language,r=t.code,l=t.immediateClose;_self.postMessage(n.highlight(r,n.languages[a],a)),l&&_self.close()},!1),_self.Prism):_self.Prism;var r=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return r&&(n.filename=r.src,n.manual||r.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(n.highlightAll):window.setTimeout(n.highlightAll,16):document.addEventListener("DOMContentLoaded",n.highlightAll))),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Prism.languages.xml=Prism.languages.markup,Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup;
Prism.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[\w-]+(?=\s*:)/i,important:/\B!important\b/i,"function":/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.util.clone(Prism.languages.css),Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:Prism.languages.css,alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag));
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(?:true|false)\b/,"function":/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/};
Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|\d*\.?\d+(?:[Ee][+-]?\d+)?|NaN|Infinity)\b/,"function":/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[[^\]\r\n]+]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)\s*=>))/i,alias:"function"}}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.javascript,alias:"language-javascript"}}),Prism.languages.js=Prism.languages.javascript;
Prism.languages.css.selector={pattern:/[^{}\s][^{}]*(?=\s*\{)/,inside:{"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+(?:\(.*\))?/,"class":/\.[-:.\w]+/,id:/#[-:.\w]+/,attribute:/\[[^\]]+\]/}},Prism.languages.insertBefore("css","function",{hexcode:/#[\da-f]{3,8}/i,entity:/\\[\da-f]{1,8}/i,number:/[\d%.]+/});
Prism.languages.scss=Prism.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)*url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()]|&|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),Prism.languages.insertBefore("scss","atrule",{keyword:[/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,{pattern:/( +)(?:from|through)(?= )/,lookbehind:!0}]}),Prism.languages.scss.property={pattern:/(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/i,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}},Prism.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),Prism.languages.insertBefore("scss","function",{placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},"boolean":/\b(?:true|false)\b/,"null":/\bnull\b/,operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,lookbehind:!0}}),Prism.languages.scss.atrule.inside.rest=Prism.util.clone(Prism.languages.scss);
!function(){"undefined"!=typeof self&&!self.Prism||"undefined"!=typeof global&&!global.Prism||Prism.hooks.add("wrap",function(e){"keyword"===e.type&&e.classes.push("keyword-"+e.content)})}();

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bindListeners;
function bindListeners() {
  document.body.addEventListener('click', function(e) {
    if (!e.target.matches('.js-tab, .js-tab *')) {
      return;
    }
    e.preventDefault();
    clearActiveTabs();
    const button = findButton(e.target);
    activateTab(button);
    return false;
  });
}

function findButton(el) {
  if (el.classList.contains('js-tab')) {
    return el;
  } else {
    return findButton(el.parentNode);
  }
}

function clearActiveTabs() {
  const tabs = document.querySelectorAll('.tabs > button.is-active');
  const panes = document.querySelectorAll('.tab-pane.is-active');
  clearActiveClasses(tabs);
  clearActiveClasses(panes);
}

function clearActiveClasses(els) {
  if (!els.length) {
    return;
  }
  Array.prototype.forEach.call(els, function(el) {
    el.classList.remove('is-active');
  });
}

function activateTab(button) {
  button.classList.add('is-active');
  const pane = getTabPane(button);
  if (pane) {
    pane.classList.add('is-active');
  }
}

function getTabPane(button) {
  const aria = button.attributes['aria-controls'];
  if (!aria) {
    return null;
  }
  return document.getElementById(aria.nodeValue);
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = fetchWebmentions;
const ANON_AVATAR = '/images/anon-avatar.png';

function fetchWebmentions(url, aliases) {
  // return;
  // TODO: only execute on relevant pages
  if (!url) {
    url = document.location.origin + document.location.pathname;
  }
  const targets = getUrlPermutations(url, aliases);
  //
  var script = document.createElement('script');
  var src =
    'https://webmention.io/api/mentions?perPage=500&jsonp=parseWebmentions';
  targets.forEach(function(targetUrl) {
    src += `&target[]=${encodeURIComponent(targetUrl)}`;
  });
  // TODO: restore
  // src += `&_=${Math.random()}`;
  script.src = src;
  document.getElementsByTagName('head')[0].appendChild(script);
}

function getUrlPermutations(url, aliases) {
  const urls = [];
  url = url.replace('http://localhost:1313', 'https://keithjgrant.com');
  urls.push(url);
  urls.push(url.replace('https://', 'http://'));
  if (url.substr(-1) === '/') {
    var noslash = url.substr(0, url.length - 1);
    urls.push(noslash);
    urls.push(noslash.replace('https://', 'http://'));
  }
  if (aliases) {
    aliases.forEach(function(alias) {
      urls.push(`https://keithjgrant.com${alias}`);
    });
  }
  return urls;
}

function parseWebmentions(data) {
  var links = data.links.sort(wmSort);
  var likes = [];
  var reposts = [];
  var replies = [];
  links.map(function(l) {
    if (!l.activity || !l.activity.type) {
      console.warning('unknown link type', l);
      return;
    }
    if (!l.verified) {
      return;
    }
    switch (l.activity.type) {
      case 'like':
        likes.push(l);
        break;
      case 'repost':
      case 'link':
        reposts.push(l);
        break;
      default:
        replies.push(l);
        break;
    }
  });
  renderLikes(likes);
  renderReposts(reposts);
  renderReplies(replies);
  showInteractions();
}
window.parseWebmentions = parseWebmentions;

function wmSort(a, b) {
  const dateA = getWmDate(a);
  const dateB = getWmDate(b);
  if (dateA < dateB) {
    return -1;
  } else if (dateB < dateA) {
    return 1;
  }
  return 0;
}

function getWmDate(webmention) {
  if (webmention.data.published) {
    return new Date(webmention.data.published);
  }
  return new Date(webmention.verified_date);
}

var months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
function renderLikes(likes) {
  var label = likes.length + (likes.length === 1 ? ' like' : ' likes');
  document.getElementById('like-count').innerHTML = label;

  var t = document.getElementById('like-template').content;
  var list = document.getElementById('likes');
  likes.map(function(l) {
    fillTemplate(t, {
      photo: l.data.author.photo || ANON_AVATAR,
      name: l.data.author.name,
      authorUrl: l.data.author.url,
      url: l.data.url,
      date: new Date(l.data.published || l.verified_date),
    });
    var clone = document.importNode(t, true);
    list.appendChild(clone);
  });
}

function renderReposts(reposts) {
  var label = reposts.length + (reposts.length === 1 ? ' share' : ' shares');
  document.getElementById('share-count').innerHTML = label;

  var t = document.getElementById('like-template').content;
  var list = document.getElementById('shares');
  reposts.map(function(l) {
    let data;
    if (l.data.author) {
      data = {
        photo: l.data.author.photo || ANON_AVATAR,
        name: l.data.author.name,
        authorUrl: l.data.author.url,
        url: l.data.url,
        date: new Date(l.data.published || l.verified_date),
      };
    } else {
      data = {
        photo: ANON_AVATAR,
        name: 'inbound link',
        authorUrl: l.data.url,
        url: l.data.url,
        date: new Date(l.data.published || l.verified_date),
      };
    }
    fillTemplate(t, data);
    var clone = document.importNode(t, true);
    list.appendChild(clone);
  });
}

function renderReplies(replies) {
  var label = replies.length + (replies.length === 1 ? ' reply' : ' replies');
  document.getElementById('reply-count').innerHTML = label;

  var t = document.getElementById('reply-template').content;
  var list = document.getElementById('replies');
  replies.map(function(l) {
    let data;
    if (l.data.author) {
      data = {
        photo: l.data.author.photo || ANON_AVATAR,
        name: l.data.author.name,
        authorUrl: l.data.author.url,
        url: l.data.url,
        date: new Date(l.data.published || l.verified_date),
        content: l.data.content,
      };
    } else {
      data = {
        photo: ANON_AVATAR,
        name: 'inbound link',
        authorUrl: l.data.url,
        url: l.data.url,
        date: new Date(l.data.published || l.verified_date),
        content: l.data.content,
      };
    }

    fillTemplate(t, data);
    var clone = document.importNode(t, true);
    list.appendChild(clone);
  });
}

function fillTemplate(template, vals) {
  template.querySelector('.js-avatar').src = vals.photo;
  template.querySelector('.js-author').href = vals.authorUrl;
  template.querySelector('.js-author-name').innerHTML = vals.name;
  template.querySelector('.js-source').href = vals.url;
  const date = template.querySelector('.js-date');
  if (date) {
    date.innerHTML = formatDate(vals.date);
  }
  if (vals.content) {
    template.querySelector('.js-content').innerHTML = vals.content;
  }
}

function formatDate(date) {
  if (!date) {
    return '';
  }
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

function showInteractions() {
  document.getElementById('comments-loader').classList.add('is-hidden');
  document.getElementById('comments').classList.remove('is-hidden');
}


/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabs__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__webmentions__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navigation__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__prism__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__prism___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__prism__);





__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__tabs__["a" /* default */])();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__webmentions__["a" /* default */])();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__navigation__["a" /* default */])();


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = selectTransition;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transitions_zoomIn__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transitions_scrollRightTo__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transitions_scrollDownTo__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transitions_irisIn__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transitions_dropOut__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__transitions_noteZoom__ = __webpack_require__(11);







const NONE = 0;
const TO_POST = 1;
const TO_HP = 2;
const TO_LIST = 3;
const NOTE_ZOOM = 4;
const OTHER = 100;

function selectTransition(toUrl) {
  const type = getTransitionType(toUrl);
  switch (type) {
    case TO_POST:
      return __WEBPACK_IMPORTED_MODULE_0__transitions_zoomIn__["a" /* default */];
    case TO_HP:
      return __WEBPACK_IMPORTED_MODULE_4__transitions_dropOut__["a" /* default */];
    case TO_LIST:
      return __WEBPACK_IMPORTED_MODULE_3__transitions_irisIn__["a" /* default */];
    case NOTE_ZOOM:
      return __WEBPACK_IMPORTED_MODULE_5__transitions_noteZoom__["a" /* default */];
    case NONE: // TODO: distinguish b/t NONE & OTHER
    default:
      return null;
  }
}

function getTransitionType(toUrl) {
  const fromUrl = document.location.pathname;
  if (fromUrl === toUrl) {
    return NONE;
  }
  if (isPostUrl(toUrl)) {
    return TO_POST;
  }
  if (isNoteUrl(toUrl)) {
    if (isNoteList(fromUrl)) {
      return NOTE_ZOOM;
    }
    return OTHER;
  }
  if (isHomepage(toUrl)) {
    return TO_HP;
  }
  if (isList(toUrl)) {
    return TO_LIST;
  }
  return OTHER;
}

// TODO: strip query params?

function isPostUrl(url) {
  return isSingle(url, 'posts');
}

function isNoteUrl(url) {
  return isSingle(url, 'notes');
}

function isSingle(url, basePath) {
  const parts = split(url);
  return parts[0] === basePath && parts.length > 1;
}

function isHomepage(url) {
  return url === '/';
}

function isList(url) {
  return split(url).length === 1;
}

function isPostList(url) {
  const parts = split(url);
  return parts[0] == 'posts' && parts.length == 1;
}

function isNoteList(url) {
  const parts = split(url);
  return parts[0] == 'notes' && parts.length == 1;
}

function split(url) {
  if (url.startsWith('/')) {
    url = url.substr(1);
  }
  if (url.endsWith('/')) {
    url = url.substr(0, url.length - 1);
  }
  return url.split('/');
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = irisIn;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_dom__ = __webpack_require__(0);


function irisIn(oldEl, newEl) {
  const bg = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_dom__["b" /* cloneBackground */])(newEl);
  const oldBg = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_dom__["b" /* cloneBackground */])(oldEl);
  newEl.parentNode.insertBefore(oldBg, newEl);
  newEl.parentNode.insertBefore(bg, newEl);
  const heading = newEl.querySelector('.list-heading');
  const tl = new TimelineLite({
    onComplete: () => {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_dom__["a" /* removeNode */])(oldEl);
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_dom__["a" /* removeNode */])(bg);
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_dom__["a" /* removeNode */])(oldBg);
      TweenLite.set(newEl, {clearProps: 'all'});
    },
  });
  tl.set(bg, {
    position: 'absolute',
    width: '100%',
    height: '200vh',
    opacity: 0,
  });
  tl.set(oldBg, {
    position: 'absolute',
    width: '100%',
    height: '200vh',
  });
  tl.set(newEl, {
    height: '200vh',
    position: 'relative',
    background: 'none',
    overflow: 'hidden',
  });
  tl.set(oldEl, {
    position: 'absolute',
    left: 0,
    right: 0,
    background: 'none',
    zIndex: 1,
  });
  tl.set(oldEl.parentNode, {minHeight: '200vh'});
  tl.add('start');
  tl.to(oldEl, 0.4, {opacity: 0}, 'start');
  tl.from(
    newEl,
    0.8,
    {
      scaleX: 0,
      background: 'none',
      ease: Power4.easeIn,
      opacity: 0,
    },
    'start'
  );
  tl.to(bg, 0.8, {opacity: 1}, 'start');
  tl.set(oldEl.parentNode, {clearProps: 'all'});
  tl.set(newEl, {clearProps: 'height, overflow, background'});
  if (heading) {
    tl.set(heading, {opacity: 1});
    tl.from(heading, 2, {
      x: -30,
      opacity: 0,
      ease: Power1.easeOut,
    });
  }
  tl.play();
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = noteZoom;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_transitions__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_notes__ = __webpack_require__(15);



function noteZoom(oldEl, newEl) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_transitions__["a" /* crossfadeBackground */])(oldEl, newEl);
  const orig = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_notes__["a" /* findLinkToNote */])(oldEl, document.location.href);
  const newNote = newEl.querySelector('.note-highlight');

  const tl = new TimelineLite();
  tl.set(oldEl, {position: 'absolute', left: 0, right: 0});
  tl.set(oldEl.parentNode, {minHeight: '100vh'});
  tl.set(newEl, {transformOrigin: '0 0'});

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_transitions__["b" /* flipZoom */])(orig, newNote).then(() => {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_transitions__["c" /* removeNode */])(oldEl);
    TweenLite.set(newEl, {clearProps: 'all'});
  });
  tl.play();
  // fadeOut(oldEl);
}


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_dom__ = __webpack_require__(0);


function scrollDownTo(oldEl, newEl) {
  const height = document.documentElement.clientHeight;
  const tl = new TimelineLite({
    onComplete: () => {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_dom__["a" /* removeNode */])(oldEl);
    },
  });
  tl.set(oldEl, {position: 'absolute', left: 0, right: 0});
  tl.set(newEl, {position: 'relative'});
  tl.set(oldEl.parentNode, {minHeight: '100vh'});
  tl.add('start');
  tl.to(oldEl, 1.5, {y: height * -1, ease: Power2.easeInOut}, 'start');
  tl.from(newEl, 1.5, {y: height, ease: Power2.easeInOut}, 'start');
  tl.set(newEl, {position: 'static'});
  tl.set(oldEl.parentNode, {minHeight: 'auto'});
  tl.to(oldEl, 0.2, {opacity: 0});
  tl.play();
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_dom__ = __webpack_require__(0);


function scrollRightTo(oldEl, newEl) {
  const width = document.documentElement.clientWidth;
  const tl = new TimelineLite({
    onComplete: () => {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_dom__["a" /* removeNode */])(oldEl);
    },
  });
  tl.set(oldEl, {position: 'absolute', left: 0, right: 0});
  tl.set(newEl, {position: 'relative'});
  tl.set(oldEl.parentNode, {minHeight: '100vh'});
  tl.add('start');
  tl.to(oldEl, 1.5, {x: width * -1, ease: Power2.easeInOut}, 'start');
  tl.from(newEl, 1.5, {x: width, ease: Power2.easeInOut}, 'start');
  tl.set(newEl, {position: 'static'});
  tl.set(oldEl.parentNode, {minHeight: 'auto'});
  tl.to(oldEl, 0.2, {opacity: 0});
  tl.play();
}


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = zoomIn;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_dom__ = __webpack_require__(0);


function zoomIn(oldEl, newEl, link) {
  const tl = new TimelineLite({
    onComplete: () => {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_dom__["a" /* removeNode */])(oldEl);
    },
  });

  const first = link.getBoundingClientRect();
  tl.set(oldEl, {position: 'absolute', left: 0, right: 0});
  tl.set(oldEl.parentNode, {minHeight: '100vh'});
  tl.set(newEl, {transformOrigin: '0 0'});
  const last = newEl.getBoundingClientRect();
  const invert = {
    top: first.top - last.top,
    left: first.left - last.left,
    height: first.height / last.height,
    width: first.width / last.width,
  };
  tl.from(newEl, 1.5, {
    x: invert.left,
    y: invert.top,
    scaleX: invert.width,
    scaleY: invert.height,
    ease: Power4.easeOut,
  });
  tl.set(oldEl.parentNode, {minHeight: 'auto'});
  tl.play();
}


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = findLinkToNote;
function findLinkToNote(container, noteUrl) {
  return container.querySelector(`[data-href="${noteUrl}"]`);
}


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = crossfadeBackground;
/* harmony export (immutable) */ __webpack_exports__["b"] = flipZoom;
/* unused harmony export cloneBackground */
/* harmony export (immutable) */ __webpack_exports__["c"] = removeNode;
function crossfadeBackground(oldEl, newEl) {
  const newBg = cloneBackground(newEl);
  const oldBg = cloneBackground(oldEl);
  newEl.parentNode.insertBefore(oldBg, oldEl);
  newEl.parentNode.insertBefore(newBg, oldEl);
  return new Promise((resolve, reject) => {
    const tl = new TimelineLite({
      onComplete: () => {
        removeNode(newBg);
        removeNode(oldBg);
        TweenLite.set(newEl, {clearProps: 'all'});
        resolve();
      },
    });
    tl.set(newBg, {
      position: 'absolute',
      width: '100%',
      height: '200vh',
      opacity: 0,
    });
    tl.set(oldBg, {
      position: 'absolute',
      width: '100%',
      height: '200vh',
    });
    tl.set(oldEl, {
      position: 'absolute',
      left: 0,
      right: 0,
      background: 'none',
      zIndex: 1,
    });
    tl.set(newEl, {
      // height: '200vh',
      position: 'relative',
      background: 'none',
      // overflow: 'hidden',
    });
    tl.to(newBg, 0.8, {opacity: 1});
    // tl.play();
    tl.progress(0.5);
    tl.pause();
  });
}

function flipZoom(fromEl, toEl) {
  return new Promise((resolve, reject) => {
    const tl = new TimelineLite({
      onComplete: () => resolve,
    });

    const first = fromEl.getBoundingClientRect();
    const last = toEl.getBoundingClientRect();
    // const invert = {
    //   top: first.top - last.top,
    //   left: first.left - last.left,
    //   height: first.height / last.height,
    //   width: first.width / last.width,
    // };
    tl.from(toEl, 1.5, {
      x: first.left - last.left,
      y: first.top - last.top,
      scaleX: first.width / last.width,
      scaleY: first.height / last.height,
      ease: Power4.easeOut,
    });
    tl.set(orig, {opacity: 0});
    tl.play();
  });
}

// MOVED TO dom.js
function cloneBackground(el) {
  const bg = document.createElement('div');
  bg.className = el.className.replace('js-main', 'js-bg');
  return bg;
}

// MOVED TO dom.js
function removeNode(el) {
  el.parentNode.removeChild(el);
}


/***/ })
/******/ ]);