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
    "revision": "247ba5c52dde441eb3271e44a68e9fcd"
  },
  {
    "url": "about.html",
    "revision": "8d114ce9270b23c78b60996e3449ccf0"
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
    "url": "assets/js/12.d3f75121.js",
    "revision": "222128e7d37afde17d945b06018f7409"
  },
  {
    "url": "assets/js/13.7bc2efa3.js",
    "revision": "5b0379d3dfc1e46063d945018eb1cd55"
  },
  {
    "url": "assets/js/14.7237d81b.js",
    "revision": "9725a43bbd8d702ea6f27aea17f090e2"
  },
  {
    "url": "assets/js/15.59f1687a.js",
    "revision": "338a6cf6c33e8fd671a145074b8399d8"
  },
  {
    "url": "assets/js/16.60735ff9.js",
    "revision": "408e615a592c8a36f0fc6559506e48a9"
  },
  {
    "url": "assets/js/17.8ff98841.js",
    "revision": "44ee5eb098dd27303945c020fd3d399a"
  },
  {
    "url": "assets/js/app.f395879e.js",
    "revision": "d1067a8d869ca473bb513d3fbc86d39f"
  },
  {
    "url": "assets/js/page-036b4608.ef395a49.js",
    "revision": "3a4d21b1bea21e6c0e6edf63d6dd3e14"
  },
  {
    "url": "assets/js/page-09033a99.df3430ac.js",
    "revision": "91b11b3d4e4fb5617d0801a15ccb6399"
  },
  {
    "url": "assets/js/page-0e48cdf5.9aa20d06.js",
    "revision": "2b0fefb2e961af5272539f7bdf02345c"
  },
  {
    "url": "assets/js/page-29087135.e70fdd1a.js",
    "revision": "3414e2a4fb90ccafc09b352c2074ba9a"
  },
  {
    "url": "assets/js/page-2e7fb2b6.b535ffeb.js",
    "revision": "b0b1e92be7152ac5df3e4722c096e473"
  },
  {
    "url": "assets/js/page-6b7bb5b6.1f10b38b.js",
    "revision": "40af182baf62a2c8b8698ef7b9616815"
  },
  {
    "url": "assets/js/page-6df13918.bf6eb0d2.js",
    "revision": "0ce9706b9eaf1b4b9a552bf5535da304"
  },
  {
    "url": "assets/js/page-8f33b514.4721e19d.js",
    "revision": "1e7b3d278794b4bb8fc978055b890353"
  },
  {
    "url": "assets/js/page-b9321ed4.aada830e.js",
    "revision": "3f58950620b00ec7e07be4c3bb5d6116"
  },
  {
    "url": "assets/js/page-d1a31194.2d03e916.js",
    "revision": "c5bf82d4f11ceb12bc93f54d6614a674"
  },
  {
    "url": "en/about.html",
    "revision": "e2ee941df4df811c1448110c745990ef"
  },
  {
    "url": "en/index.html",
    "revision": "9ccdd7f018f050809df3dfb13db10de2"
  },
  {
    "url": "en/markdown/demo.html",
    "revision": "8e88096e8cb6cf0c603d80092965e606"
  },
  {
    "url": "en/markdown/emoji.html",
    "revision": "ee2b5a78133500aba528ab0d51913e5a"
  },
  {
    "url": "en/markdown/index.html",
    "revision": "b94b3bde8e43ed0bb6238e00fc249868"
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
    "revision": "7cde3bbec4ed1b0345280db5b3330b17"
  },
  {
    "url": "logo.png",
    "revision": "53e8d2cd254352df9cf794f29117a81e"
  },
  {
    "url": "markdown/demo.html",
    "revision": "4b551896fc5231c16f92c0ae4d7f4471"
  },
  {
    "url": "markdown/emoji.html",
    "revision": "a44b74a97f68bfa82cd37c3fd415bc91"
  },
  {
    "url": "markdown/index.html",
    "revision": "1b614afbfc5585a18162fe523ba4004b"
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
