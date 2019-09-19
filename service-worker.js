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
    "revision": "83517b2a5ab7952948c8381495f19c59"
  },
  {
    "url": "about.html",
    "revision": "f263ba8b32e72e98a11dbba631b1cf89"
  },
  {
    "url": "assets/css/0.styles.3cca9eaa.css",
    "revision": "21afd88dbad82ee509ba3711994f1673"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0eb10486.js",
    "revision": "42d604e64e3dc1f551483753cbd789a5"
  },
  {
    "url": "assets/js/11.70930402.js",
    "revision": "adc358aaf1abc1e7b06dcf7e1d0b069e"
  },
  {
    "url": "assets/js/12.66b23f4a.js",
    "revision": "62f71a6793020a4b45ccfa161e00c12b"
  },
  {
    "url": "assets/js/13.fd2abe56.js",
    "revision": "9fc0ce6de5faa8ef08072095f603612d"
  },
  {
    "url": "assets/js/14.e7e10333.js",
    "revision": "de6beda0905bf9ddc667a516084f573b"
  },
  {
    "url": "assets/js/15.4a70d6f5.js",
    "revision": "c09e914d79a3e7a61220de8b419a4a21"
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
    "url": "assets/js/6.a8af5bc7.js",
    "revision": "cff9c16faf8bd5a64bed03f898431d9d"
  },
  {
    "url": "assets/js/7.be2ad54d.js",
    "revision": "ad3b420d16e80fe0ab104315c6e4276a"
  },
  {
    "url": "assets/js/8.a222aeaf.js",
    "revision": "20ada69b56b6b59f2bc1cf6165e39512"
  },
  {
    "url": "assets/js/9.dde2babe.js",
    "revision": "9eb545ae11195d94103d08c0a2c58132"
  },
  {
    "url": "assets/js/app.325c19ad.js",
    "revision": "e9ba7d638d86ba80fd19797e663853ea"
  },
  {
    "url": "en/about.html",
    "revision": "5c13514e1aec731661e38adee5253bef"
  },
  {
    "url": "en/index.html",
    "revision": "760f70d1817fdd3bf589fd11528c9e9f"
  },
  {
    "url": "en/markdown/demo.html",
    "revision": "e33bd9c0a894748a84854a54d79226e9"
  },
  {
    "url": "en/markdown/emoji.html",
    "revision": "484f6e9213d7480061a3d3850231f1ad"
  },
  {
    "url": "en/markdown/index.html",
    "revision": "bbaa874b7381edb2eab9c9c690adf68a"
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
    "revision": "6d7a0630c1b3c00be8150109a9004b10"
  },
  {
    "url": "logo.png",
    "revision": "53e8d2cd254352df9cf794f29117a81e"
  },
  {
    "url": "markdown/demo.html",
    "revision": "a7d15ea9a030f90760837db2204080cc"
  },
  {
    "url": "markdown/emoji.html",
    "revision": "1d4993dd3dccdf0ba4409ddc2ede30c4"
  },
  {
    "url": "markdown/index.html",
    "revision": "9ab256893ad09dff1044e7164b341382"
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
