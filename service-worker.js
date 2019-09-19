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
    "revision": "6ee9b7686dbb3dac080e0a7872a0b1a9"
  },
  {
    "url": "about.html",
    "revision": "710abd2fb9aec411f1f71258f3b2c804"
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
    "url": "assets/js/6.d70e2c17.js",
    "revision": "29b01d65573ed6e9c852636fb85face1"
  },
  {
    "url": "assets/js/7.e5df71ca.js",
    "revision": "8fec7e9627cd238e78e7a5ca919574df"
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
    "url": "assets/js/app.eac04600.js",
    "revision": "acdbd1d445fe6e56ee19a1501eb58c5c"
  },
  {
    "url": "en/about.html",
    "revision": "c78401225955530bd4a1ce58589f0e4f"
  },
  {
    "url": "en/index.html",
    "revision": "4a1354c7396a257b7e608ef36b4a6f51"
  },
  {
    "url": "en/markdown/demo.html",
    "revision": "16c8424d6cf08c240a3bc53ac3ad9d0b"
  },
  {
    "url": "en/markdown/emoji.html",
    "revision": "a4555bbf8f5aa9b20fdfed286bf8e3ab"
  },
  {
    "url": "en/markdown/index.html",
    "revision": "69689b4778a757b43cfc55daba8ec8b6"
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
    "revision": "4b766fde8b3b1e30786e54c9034fe4a6"
  },
  {
    "url": "logo.png",
    "revision": "53e8d2cd254352df9cf794f29117a81e"
  },
  {
    "url": "markdown/demo.html",
    "revision": "0972406e408712946153f06769bc1926"
  },
  {
    "url": "markdown/emoji.html",
    "revision": "da72cd80b67a7589c23266821fdaca6c"
  },
  {
    "url": "markdown/index.html",
    "revision": "6d5f6d666c8a216d78728f364cdf55e9"
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
