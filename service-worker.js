"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","920b00882aa890c555faccf87dec7fe6"],["static/css/main.895c4a6c.css","a5daa485a51762e79be159ba4c88ae3d"],["static/js/main.dec27936.js","1cec5adb1386bdac327b470e95d464ac"],["static/media/Resume.2c89e814.pdf","2c89e8144dfda484a87c32dddb22260b"],["static/media/angelist.95592ff6.png","95592ff67cb35bd3dcffa75d6ba70568"],["static/media/arrowdown.264a27c3.ico","264a27c3817cda81f18ea644c393d782"],["static/media/carbonfriends.c63ed1ba.png","c63ed1baebd58b8635ef9c15a83b45d4"],["static/media/carbonprintmenu.af580c7b.png","af580c7b79659cfecf64c9a4f56c976e"],["static/media/carbonprintsignin.17fbb58e.png","17fbb58e03a629ea4e37435e704c7cf5"],["static/media/carbonprofilepage.ee89a1b8.png","ee89a1b8321fca468a8af7f2b7b98969"],["static/media/chart.cc16e469.svg","cc16e469ac180bf1f6e69e66bb064371"],["static/media/frontscreenpaperboy.c345a085.png","c345a085b81e4e79e5ca24db6b3e6051"],["static/media/github.dd24e5cb.png","dd24e5cbdc77ae6eac2c09f96de0c293"],["static/media/headshot-hires-8.752f6231.jpg","752f62310bd5e803caf01af0f0532799"],["static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["static/media/newspaperboy.8aadd723.png","8aadd72317bf66f67796e5708294e1f7"],["static/media/nycda.b0a5804b.svg","b0a5804b260d325ce6ce06c0295d829f"],["static/media/resume.287e8b7a.png","287e8b7aae46381d5222f9f04ec3f4a0"],["static/media/selectorpaperboy.ee7b6a13.png","ee7b6a131ab6fcc9340df333dc345a49"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);a=urlsToCacheKeys.has(t);a||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/react-portfolio/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});