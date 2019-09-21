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
    "revision": "d8e81138ffb017ad37648923f92b6d2b"
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
    "url": "assets/js/20.08d2c2f7.js",
    "revision": "d09a7d001861018cc3d073d8f53adf78"
  },
  {
    "url": "assets/js/21.509a40db.js",
    "revision": "1a83aa06ba7408cdd49253214f31f4ff"
  },
  {
    "url": "assets/js/22.b7906ac2.js",
    "revision": "c70852024be0d9c80c59f182df3e931b"
  },
  {
    "url": "assets/js/23.1ac3cc8c.js",
    "revision": "c87b4ed9ab8a94707a11ee4b970d70d6"
  },
  {
    "url": "assets/js/24.ce50912d.js",
    "revision": "c61c68e20c03dfa3426f2c6b2dbee6aa"
  },
  {
    "url": "assets/js/25.4668c1db.js",
    "revision": "637667a35030eadf85664a044294323d"
  },
  {
    "url": "assets/js/app.4ff4e83c.js",
    "revision": "294a4bc07bd7af4e1c6e970730e30d3a"
  },
  {
    "url": "assets/js/page-036b4608.8eea68d5.js",
    "revision": "aac83eeb504bd948ac1b448c8f937075"
  },
  {
    "url": "assets/js/page-0685c97d.da8a09fe.js",
    "revision": "2373184af22efd03786fc4bab42fe4d0"
  },
  {
    "url": "assets/js/page-09033a99.64b1cc67.js",
    "revision": "f82591e27ac348a30de62aae50fd05ac"
  },
  {
    "url": "assets/js/page-0e48cdf5.458f6c45.js",
    "revision": "d6b8307f962c30d89bcda9f33b3fd674"
  },
  {
    "url": "assets/js/page-29087135.3e3e9139.js",
    "revision": "030e413c2eda846be32ea22847a0d620"
  },
  {
    "url": "assets/js/page-2e7fb2b6.ef779c50.js",
    "revision": "9a2eda4deef1817292823ba79bf25637"
  },
  {
    "url": "assets/js/page-3097caf6.fd712849.js",
    "revision": "c973bcde1502f3d1caef7abc1d656cc6"
  },
  {
    "url": "assets/js/page-3182acb5.4931e3d7.js",
    "revision": "e73a9252b938aebe7769bbaeae29b375"
  },
  {
    "url": "assets/js/page-4bf84256.b474ffcb.js",
    "revision": "7c7acefb75292f5d8224686ceec69ac5"
  },
  {
    "url": "assets/js/page-62253036.d43c7b27.js",
    "revision": "c51f711e1aa0b80ca3468202261d977f"
  },
  {
    "url": "assets/js/page-6ab6b9b2.78888d24.js",
    "revision": "88ea391a192f2b11a4b6610fcf260ed8"
  },
  {
    "url": "assets/js/page-6b7bb5b6.7d091316.js",
    "revision": "ea15f440e829c3e56ca76954e58943a9"
  },
  {
    "url": "assets/js/page-6feb314a.85e73b04.js",
    "revision": "00d83a888afc3f3b0c7575e6981741cb"
  },
  {
    "url": "assets/js/page-70af6178.7274d647.js",
    "revision": "aa8de37d3cc5caabc8ed0e24aeebcd60"
  },
  {
    "url": "assets/js/page-7d2ddbd0.83ec115c.js",
    "revision": "b581d159bfd7aa7ded5cb7a7c1eb435b"
  },
  {
    "url": "assets/js/page-7f69b3d6.fe2e06ee.js",
    "revision": "81d1830be9f57e4c2bab921623e52c15"
  },
  {
    "url": "assets/js/page-b9321ed4.e3eed0ca.js",
    "revision": "4eef593dde5e20c37ede06c48964df28"
  },
  {
    "url": "assets/js/page-d1a31194.68219e7c.js",
    "revision": "0a9dbe1b97bc3adb5bb2857b4f08b866"
  },
  {
    "url": "en/index.html",
    "revision": "faa1b7789ec17e7cdfc222a3e893c8a5"
  },
  {
    "url": "en/markdown/demo.html",
    "revision": "096745d766bf16591cd4b00dfe6c0ddb"
  },
  {
    "url": "en/markdown/emoji.html",
    "revision": "6ec5ea5da4830699cdd2d5bb310dcf4f"
  },
  {
    "url": "en/markdown/index.html",
    "revision": "42c3e93c5ed951aec4209a1d4ed75125"
  },
  {
    "url": "en/vuepress/case.html",
    "revision": "0b158fd6e013fded5576b3043bc2eb37"
  },
  {
    "url": "en/vuepress/command.html",
    "revision": "b3df49aa71481ec11d5e2c74758c6d5b"
  },
  {
    "url": "en/vuepress/file.html",
    "revision": "df849c5962a1a097e58f776dc9efa422"
  },
  {
    "url": "en/vuepress/index.html",
    "revision": "e49208e8612d1389cee77ac1fadd8378"
  },
  {
    "url": "en/vuepress/plugin.html",
    "revision": "30ab2dd4257b81e825dd9e125831a00a"
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
    "revision": "a490b056dea5defb4f449b5e0f773e60"
  },
  {
    "url": "logo.png",
    "revision": "53e8d2cd254352df9cf794f29117a81e"
  },
  {
    "url": "markdown/demo.html",
    "revision": "f3f41bf832e73c334d4a5fc7355d9252"
  },
  {
    "url": "markdown/emoji.html",
    "revision": "7b3c4ac290c7f1977efe8836cc51e233"
  },
  {
    "url": "markdown/index.html",
    "revision": "c61114433d381c73a2e0ed6d3a9d1504"
  },
  {
    "url": "vuepress/case.html",
    "revision": "494c0816145076436f4fe9711d34bc74"
  },
  {
    "url": "vuepress/command.html",
    "revision": "4cc5b826cae2bf70d84514a7c91b6247"
  },
  {
    "url": "vuepress/file.html",
    "revision": "91d8ead6b7c10d8dafc4af41530722f6"
  },
  {
    "url": "vuepress/index.html",
    "revision": "da8008dbb35554d22d4930bb19845673"
  },
  {
    "url": "vuepress/plugin.html",
    "revision": "800cf39170d381792bb579833d311c9d"
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
