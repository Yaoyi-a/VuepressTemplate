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
    "revision": "c1397380642e0a87d0f60fd28c18a431"
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
    "url": "assets/js/app.0a118f3b.js",
    "revision": "7caedd2584f68384c4ce09983f411b5e"
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
    "revision": "faf5a37be63dfde89ae5398b894d55d6"
  },
  {
    "url": "en/markdown/demo.html",
    "revision": "1fb0798bf936b257748e81fd7c95abe1"
  },
  {
    "url": "en/markdown/emoji.html",
    "revision": "26afa1d50500b5bb03c4abd783c2f167"
  },
  {
    "url": "en/markdown/index.html",
    "revision": "77c1b585f10d0e6d61972825d35bc1b2"
  },
  {
    "url": "en/vuepress/case.html",
    "revision": "da78b69298150a9332c75f3f65e33532"
  },
  {
    "url": "en/vuepress/command.html",
    "revision": "35335436f05b637f635fcc3d6f16bacb"
  },
  {
    "url": "en/vuepress/file.html",
    "revision": "f0ecd0772e6e22db12036aec1907c674"
  },
  {
    "url": "en/vuepress/index.html",
    "revision": "45c8e6cee3dd5969f110fa892c1cb536"
  },
  {
    "url": "en/vuepress/plugin.html",
    "revision": "5f1f1e6870de5dd2916fc55cb801d3da"
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
    "revision": "aea4f3cef6c6691519cbeec158c31440"
  },
  {
    "url": "logo.png",
    "revision": "53e8d2cd254352df9cf794f29117a81e"
  },
  {
    "url": "markdown/demo.html",
    "revision": "014e95093cc4d4619237b4b7e57ce64b"
  },
  {
    "url": "markdown/emoji.html",
    "revision": "8d33574f5cc28fa8d3dd1b3d1cb70ce4"
  },
  {
    "url": "markdown/index.html",
    "revision": "54f9e502232fc0b8c05ccef5b936604f"
  },
  {
    "url": "vuepress/case.html",
    "revision": "3e72f84dc2d04dc858c771696bc940ef"
  },
  {
    "url": "vuepress/command.html",
    "revision": "8b1a13aca59d861d0169fedc6647b8c8"
  },
  {
    "url": "vuepress/file.html",
    "revision": "5cc24bfba6223ffa3c54b999d8559054"
  },
  {
    "url": "vuepress/index.html",
    "revision": "af87e68e0f89f6c9a2b72328a2ddd754"
  },
  {
    "url": "vuepress/plugin.html",
    "revision": "83bfde9143232a3659071cb1d77bef27"
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
