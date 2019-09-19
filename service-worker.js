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
    "revision": "13cd289b830238445155b3808bc21d5c"
  },
  {
    "url": "about.html",
    "revision": "738ad998633c22e9937781e36350bfde"
  },
  {
    "url": "assets/css/0.styles.f331b491.css",
    "revision": "a38326fc90aceee1aa871552b0655de1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.10c709fa.js",
    "revision": "8d973f276a702e14ba270e4cb6fd9b2c"
  },
  {
    "url": "assets/js/11.70930402.js",
    "revision": "adc358aaf1abc1e7b06dcf7e1d0b069e"
  },
  {
    "url": "assets/js/12.5cfcf99f.js",
    "revision": "77c64e4b40006257b79fa395a806c689"
  },
  {
    "url": "assets/js/13.fd2abe56.js",
    "revision": "9fc0ce6de5faa8ef08072095f603612d"
  },
  {
    "url": "assets/js/14.2c8f64cf.js",
    "revision": "f2e8bb0061737a5c07e4c7c7663f9ff9"
  },
  {
    "url": "assets/js/15.0c82ef4e.js",
    "revision": "3f7c5bbb2fe98679c6f1dd33fdfc302c"
  },
  {
    "url": "assets/js/16.d2d1b957.js",
    "revision": "96f5de555f73cb96db5371a7024adcb5"
  },
  {
    "url": "assets/js/2.a8849fe8.js",
    "revision": "f4e3eba8b98a24931ed644eab3c00f59"
  },
  {
    "url": "assets/js/3.acb7c4d7.js",
    "revision": "47b736702ea3a2d25466f5a04dab9715"
  },
  {
    "url": "assets/js/4.d68995ca.js",
    "revision": "30e72f71d2162f59f45ecb40d4209a7b"
  },
  {
    "url": "assets/js/5.3b4feaf7.js",
    "revision": "32d8b6fd8edf7794ec34fb32db6ce8d4"
  },
  {
    "url": "assets/js/6.d70e2c17.js",
    "revision": "29b01d65573ed6e9c852636fb85face1"
  },
  {
    "url": "assets/js/7.be516887.js",
    "revision": "b3121c5131645c8e8da02b899cde1fbf"
  },
  {
    "url": "assets/js/8.f62d28c1.js",
    "revision": "a99024104a6e508a3c0d89ca158de657"
  },
  {
    "url": "assets/js/9.dde2babe.js",
    "revision": "9eb545ae11195d94103d08c0a2c58132"
  },
  {
    "url": "assets/js/app.3717565f.js",
    "revision": "0b474c0d314d9dc97a5379454bc97604"
  },
  {
    "url": "en/about.html",
    "revision": "eca98856f3ea160f67b75831ca5b6dba"
  },
  {
    "url": "en/index.html",
    "revision": "e825d25c28acd2355101d51be5398f24"
  },
  {
    "url": "en/markdown/demo.html",
    "revision": "d2c89a18e89b3be7ec6be7ddc9c17993"
  },
  {
    "url": "en/markdown/emoji.html",
    "revision": "de449d5523a0248df96d4897628e657f"
  },
  {
    "url": "en/markdown/index.html",
    "revision": "79a8a6f518476cbf6070f125ae4b6e2f"
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
    "revision": "4a13bee151507d2227e9d8b3f68fcd4e"
  },
  {
    "url": "logo.png",
    "revision": "53e8d2cd254352df9cf794f29117a81e"
  },
  {
    "url": "markdown/demo.html",
    "revision": "0cdc3baf320a86eee078accf7a774097"
  },
  {
    "url": "markdown/emoji.html",
    "revision": "a39f1071d45c4c15c8f57402b1b2f900"
  },
  {
    "url": "markdown/index.html",
    "revision": "813a168f01b4fb93614c9051c4cf6a86"
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
