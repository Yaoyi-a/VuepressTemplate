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
    "revision": "b98fa58035a877cb51c9d45c29de5fb8"
  },
  {
    "url": "about.html",
    "revision": "d363e04092a3606324806ad3822e0207"
  },
  {
    "url": "assets/css/0.styles.aafda5f1.css",
    "revision": "62c5edced89ae579c64c7e0021b5f982"
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
    "url": "assets/js/13.a4bfe718.js",
    "revision": "c172a4e139ca0aefc82a9aad3f4fc6f9"
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
    "url": "assets/js/9.d8de804a.js",
    "revision": "c5c20478afb1b6b649a808d663dd7088"
  },
  {
    "url": "assets/js/app.9171604d.js",
    "revision": "b52523b4aea7d3a4feabbb75c753812e"
  },
  {
    "url": "en/about.html",
    "revision": "187ba093178a0c962d6494095ae14f53"
  },
  {
    "url": "en/index.html",
    "revision": "02dba092580fd5aeba85496499aa5a82"
  },
  {
    "url": "en/markdown/demo.html",
    "revision": "97abbdb08575ae8c6bd2a1e4159105f3"
  },
  {
    "url": "en/markdown/emoji.html",
    "revision": "024837e56bc4cf82d7a7ce46ba89cc46"
  },
  {
    "url": "en/markdown/index.html",
    "revision": "b13a654e4785c52532be801b53f827f6"
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
    "revision": "cf2a3cd799daabcdd0869e51aa423bd8"
  },
  {
    "url": "logo.png",
    "revision": "53e8d2cd254352df9cf794f29117a81e"
  },
  {
    "url": "markdown/demo.html",
    "revision": "b4b419f48b31abfbada5fbe00604d0f6"
  },
  {
    "url": "markdown/emoji.html",
    "revision": "fb9844e1b7f07e80ee01e15f0bdf9dbb"
  },
  {
    "url": "markdown/index.html",
    "revision": "6da9bf6b2554d32c4152deaa00db1dda"
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
