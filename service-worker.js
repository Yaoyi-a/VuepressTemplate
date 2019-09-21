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
    "revision": "0cfa214479c96bc5858e0fdec902276a"
  },
  {
    "url": "assets/css/0.styles.d2c73417.css",
    "revision": "6c64125274ef225bb0314b30167f33fc"
  },
  {
    "url": "assets/img/architecture.9a93cf6c.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/18.4c9c806f.js",
    "revision": "8115d7272d45dd99113429e1a573b090"
  },
  {
    "url": "assets/js/19.c65bbcfa.js",
    "revision": "e6c5ab2dda6dc428dd08995031c9258c"
  },
  {
    "url": "assets/js/20.e15eaa4e.js",
    "revision": "6933e2e0e3a41c48d27a41bb20f9019b"
  },
  {
    "url": "assets/js/21.9717aa32.js",
    "revision": "f4823bd05a8a77c749195675c2f39d95"
  },
  {
    "url": "assets/js/22.7271ebdf.js",
    "revision": "4e9fec03681fdb11d460673052d4df14"
  },
  {
    "url": "assets/js/23.7badaf14.js",
    "revision": "a6671b0846f9ae54f0163619fb95bcdc"
  },
  {
    "url": "assets/js/app.56a5b5ab.js",
    "revision": "596cb35e62aa82e74b3212b036e48327"
  },
  {
    "url": "assets/js/page-036b4608.78942876.js",
    "revision": "10692bdb6acce8d2d4487a88fd2d8870"
  },
  {
    "url": "assets/js/page-0685c97d.e64b7695.js",
    "revision": "6f8c5850f3061195554196bbf5265356"
  },
  {
    "url": "assets/js/page-09033a99.4c656752.js",
    "revision": "a806c7b907f9dfa863cd2acbcf9c3c4b"
  },
  {
    "url": "assets/js/page-0e48cdf5.88b3e501.js",
    "revision": "bb109e0e809f0e6f5935c0bced028550"
  },
  {
    "url": "assets/js/page-29087135.b16f669c.js",
    "revision": "41bfe6e847eb55e6b21f25fbeaeedd3a"
  },
  {
    "url": "assets/js/page-2e7fb2b6.8fbfedb4.js",
    "revision": "51a9df0f5bec3b4537d1d39afdc6372d"
  },
  {
    "url": "assets/js/page-3097caf6.48c13012.js",
    "revision": "5935d876f20c844d5412220e89f49b76"
  },
  {
    "url": "assets/js/page-3182acb5.3f1a4415.js",
    "revision": "104e1b47a38322873c66c51c91d9b906"
  },
  {
    "url": "assets/js/page-4bf84256.aef5ba95.js",
    "revision": "27f380b725da2cfaf45f3fb081a94b14"
  },
  {
    "url": "assets/js/page-62253036.2ad6dcc5.js",
    "revision": "8f01e395be0aae606cecdb32e3ae8ef5"
  },
  {
    "url": "assets/js/page-6ab6b9b2.b2f08f32.js",
    "revision": "2ace7b834094a866ad4c1dcf61b5bb5c"
  },
  {
    "url": "assets/js/page-6b7bb5b6.94d56b52.js",
    "revision": "3e223b6d2d8cb3d483c6f6bf22593839"
  },
  {
    "url": "assets/js/page-70af6178.15574244.js",
    "revision": "82a1517d89cd15adcfbc09443e1cd2b1"
  },
  {
    "url": "assets/js/page-7d2ddbd0.ac50accf.js",
    "revision": "0d3eca4e1a19ae86edb9491d7d514b49"
  },
  {
    "url": "assets/js/page-b9321ed4.1b5511de.js",
    "revision": "9fe2874d60ebc7239176b452f197ba53"
  },
  {
    "url": "assets/js/page-d1a31194.73bb46cd.js",
    "revision": "63be7d5de56151170ea33c5c872b6850"
  },
  {
    "url": "en/index.html",
    "revision": "9bedbf9e5e3b9fb394a339f6f3e2dcde"
  },
  {
    "url": "en/markdown/demo.html",
    "revision": "a08ee3cda2856eea03c393f85e158f44"
  },
  {
    "url": "en/markdown/emoji.html",
    "revision": "de1b3da74fc5e210bde659427ce7bb8c"
  },
  {
    "url": "en/markdown/index.html",
    "revision": "67919fb917af2626ea56716a8e735de3"
  },
  {
    "url": "en/vuepress/command.html",
    "revision": "023460e1aeea8d16d6a81b2a3e5cd23d"
  },
  {
    "url": "en/vuepress/file.html",
    "revision": "b7b3ce505b88db46358f86e2de204021"
  },
  {
    "url": "en/vuepress/index.html",
    "revision": "ac176573ed8e148dae33ea93241c90aa"
  },
  {
    "url": "en/vuepress/plugin.html",
    "revision": "7b3d011af42d3f102535b11c6d9062af"
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
    "revision": "2144b5447b686c4ea740ef83baa20da6"
  },
  {
    "url": "logo.png",
    "revision": "53e8d2cd254352df9cf794f29117a81e"
  },
  {
    "url": "markdown/demo.html",
    "revision": "c18f9c8980575c8ca1e7c77622c99c19"
  },
  {
    "url": "markdown/emoji.html",
    "revision": "3f4e5fd4aeec3d7dc066be1d55767c2e"
  },
  {
    "url": "markdown/index.html",
    "revision": "10888eef4b2f65862730216947699055"
  },
  {
    "url": "vuepress/command.html",
    "revision": "292f822b4495a5f44b98b6000e7c54dc"
  },
  {
    "url": "vuepress/file.html",
    "revision": "a4c5645133190f770e74af4339bfa92e"
  },
  {
    "url": "vuepress/index.html",
    "revision": "6c2263571dc24bb4e7cc0f2e3ef45349"
  },
  {
    "url": "vuepress/plugin.html",
    "revision": "0efbd7206f0bafb5ff0db4de16157a84"
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
