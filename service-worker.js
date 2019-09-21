/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "bba871a2afc5eb608467d72e16654b9a"
  },
  {
    "url": "assets/css/0.styles.182c5980.css",
    "revision": "87f751dd606096ada32738c5a81309f2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/14.68f386a0.js",
    "revision": "e2a32bc22442316691f424100c67310f"
  },
  {
    "url": "assets/js/15.834d5406.js",
    "revision": "7a724d7f1ea731de47707b29212f0190"
  },
  {
    "url": "assets/js/16.0724d7d6.js",
    "revision": "bed196b8fb5c7477cbffef2e024cc112"
  },
  {
    "url": "assets/js/17.829d5f2b.js",
    "revision": "f67130f0f71f3af023f7d4a29b42be97"
  },
  {
    "url": "assets/js/18.45c009fb.js",
    "revision": "26c354642aaaf0825fe96fe0998368bf"
  },
  {
    "url": "assets/js/19.2534bbfb.js",
    "revision": "ba97892780d76762d34defa1d537ddb5"
  },
  {
    "url": "assets/js/app.af5929a1.js",
    "revision": "731a7d90772055b960af61c6de0ef8c8"
  },
  {
    "url": "assets/js/page-036b4608.a9792136.js",
    "revision": "e660913a7c3874365402b8fb70825455"
  },
  {
    "url": "assets/js/page-0685c97d.7b89f423.js",
    "revision": "acc331a4d1cae1a3b07120c3d48a183b"
  },
  {
    "url": "assets/js/page-09033a99.51b02f24.js",
    "revision": "c23aa3b75800dc6334fb0d0a0f855001"
  },
  {
    "url": "assets/js/page-0e48cdf5.d2c92ec8.js",
    "revision": "b887afbfbcd4951dd5b051cfc845b113"
  },
  {
    "url": "assets/js/page-29087135.ac4fcc65.js",
    "revision": "60ce3e8ea47b308ca52c63231baff687"
  },
  {
    "url": "assets/js/page-2e7fb2b6.fe30636f.js",
    "revision": "4838781cc8ad188ef0b3589f52e5d280"
  },
  {
    "url": "assets/js/page-3182acb5.2964e8d2.js",
    "revision": "61efdd81e7ee2f7d72eb515220a6f57d"
  },
  {
    "url": "assets/js/page-4bf84256.e2ac41cc.js",
    "revision": "792600d345d92dacfa63e7f8d2da1e53"
  },
  {
    "url": "assets/js/page-6ab6b9b2.a5f9355e.js",
    "revision": "60817f5b52de95cbbf6846803e835566"
  },
  {
    "url": "assets/js/page-6b7bb5b6.de603c44.js",
    "revision": "e5dd9c9fd3ac745279d15d7d69622f62"
  },
  {
    "url": "assets/js/page-b9321ed4.f9e8b209.js",
    "revision": "35ff3f4eaaf856db44b2b94f1be20cbc"
  },
  {
    "url": "assets/js/page-d1a31194.433689f9.js",
    "revision": "c54fbaf31122837433135edd6e4bff9e"
  },
  {
    "url": "en/index.html",
    "revision": "b211e30dff14a99f5080b24bd1af5b73"
  },
  {
    "url": "en/markdown/demo.html",
    "revision": "630612e97f5901f94c191f80bc42c6f3"
  },
  {
    "url": "en/markdown/emoji.html",
    "revision": "17142566503c74b2386c023217e6971a"
  },
  {
    "url": "en/markdown/index.html",
    "revision": "c41100b03671cba19d3aa38f22297d04"
  },
  {
    "url": "en/vuepress/file.html",
    "revision": "ee02b77eeb9094aa77a4e4b32ce4c0a6"
  },
  {
    "url": "en/vuepress/index.html",
    "revision": "4f06a8e45d2f0caf973596e20f9a95c6"
  },
  {
    "url": "img/icon/appleIcon152.png",
    "revision": "4d9721d920015e20743ec22307c16e47"
  },
  {
    "url": "img/icon/chrome192.png",
    "revision": "01ba289c0aba25759a09a940fe2da581"
  },
  {
    "url": "img/icon/chrome512.png",
    "revision": "90a6bae2b1e41aef38ab9eafe04dbcad"
  },
  {
    "url": "img/icon/msIcon144.png",
    "revision": "0d8e5f0ab26210a3e9db2630b52bd4fb"
  },
  {
    "url": "index.html",
    "revision": "2896125903cbea2696102dbd08f26d60"
  },
  {
    "url": "logo.png",
    "revision": "53e8d2cd254352df9cf794f29117a81e"
  },
  {
    "url": "markdown/demo.html",
    "revision": "8dca27f4321badcabfe5f7553b4eb814"
  },
  {
    "url": "markdown/emoji.html",
    "revision": "d16fe97d42e584bff1aac0e9140364cb"
  },
  {
    "url": "markdown/index.html",
    "revision": "205a53b4174c48646f2519663ef73e1c"
  },
  {
    "url": "vuepress/file.html",
    "revision": "618bcb14699614939d1e98ea9f348e44"
  },
  {
    "url": "vuepress/index.html",
    "revision": "294a18d9e3f1b9a913c28c72933d3e25"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
