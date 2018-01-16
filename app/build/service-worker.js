"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","8398c179523916f6b824b60497ba03b1"],["/static/css/main.f273ad50.css","79ad149ba841f9f291a5578a40bcc39e"],["/static/js/main.9cde0a5e.js","cd823833e74b1fcde4be679f5dddfd93"],["/static/media/am-map.097f61b9.png","097f61b940f71b15560b6c3aafd84e2b"],["/static/media/am-newsfeed.347d8ff8.png","347d8ff8bbe8ca6f18b87959363359f8"],["/static/media/bio.78935fb8.jpg","78935fb83dc18fe4b36b92b0bf4aaef6"],["/static/media/code_screenshot.4f8f9a24.png","4f8f9a241e4f069e006ec4fe7955933d"],["/static/media/cow.fbb34415.png","fbb3441571f13e94e730ebd4dde7d3fc"],["/static/media/grand_slam.b2c413a3.jpg","b2c413a3f9b08e5015a39c659f365f29"],["/static/media/great_wall.7481c6b8.jpg","7481c6b8e929acfed8f9a14c01dfdde0"],["/static/media/jiuzhaigoulake.f18300f3.jpg","f18300f3963ce760dd59c17cf042077c"],["/static/media/mac-pet.cd5ea2a9.png","cd5ea2a9a259976cbead120db6868f3b"],["/static/media/pet.2ca555bb.png","2ca555bb798c91fa5872ce5b2c8c9f4c"],["/static/media/workflow.2a6a5bde.png","2a6a5bdec330cd277173e72420a5f7b7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});