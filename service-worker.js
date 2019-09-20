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
    "revision": "842388e4159688518e3fedf0d022b73b"
  },
  {
    "url": "about.html",
    "revision": "85b4d8a89a42d7c0f35f379f18decd64"
  },
  {
    "url": "assets/css/0.styles.d8411b30.css",
    "revision": "4f599223887d79d126f8c11b3eac5173"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/12.2ea79885.js",
    "revision": "9c33d8778c8a7b3ef20f9c2270233ce9"
  },
  {
    "url": "assets/js/13.d4fb2759.js",
    "revision": "41c4fc3b0938f32a7e1cd92d01e1d764"
  },
  {
    "url": "assets/js/14.c43aea4c.js",
    "revision": "33fffd471b90d8ca03f0390c2fcac39c"
  },
  {
    "url": "assets/js/15.dfd76a1b.js",
    "revision": "e364a107f496eff365eb7b342c11ba33"
  },
  {
    "url": "assets/js/16.77695f2e.js",
    "revision": "f354db350c406c8c1b2a1b9ffff97305"
  },
  {
    "url": "assets/js/app.75613939.js",
    "revision": "ced6201340f6831535282626bc4db2fa"
  },
  {
    "url": "assets/js/page-036b4608.19d058b4.js",
    "revision": "f537476f4dfdc9545dcce3dc102ba665"
  },
  {
    "url": "assets/js/page-09033a99.617e975d.js",
    "revision": "a917c46ed3715fafc8131d733fa42387"
  },
  {
    "url": "assets/js/page-0e48cdf5.efa3d5b8.js",
    "revision": "5795dba756d1e065f018e8df9abf8786"
  },
  {
    "url": "assets/js/page-29087135.949c9e62.js",
    "revision": "5fa09f04be7f34ffa2fb7f13cfaf92f2"
  },
  {
    "url": "assets/js/page-2e7fb2b6.6ed1b7a9.js",
    "revision": "90e3340d90d00df6cc35309e5fb64052"
  },
  {
    "url": "assets/js/page-6b7bb5b6.cf942fb7.js",
    "revision": "eb7a86ee29c303256b971c5460cb7b49"
  },
  {
    "url": "assets/js/page-6df13918.67a87946.js",
    "revision": "2ad24bed5910a15d68fa4aef84cd8a77"
  },
  {
    "url": "assets/js/page-8f33b514.99f4dd73.js",
    "revision": "952004ee9630f2c374c1da6192af2ef6"
  },
  {
    "url": "assets/js/page-b9321ed4.e425fc9d.js",
    "revision": "9d397377d739165c85650073323fac3d"
  },
  {
    "url": "assets/js/page-d1a31194.7fe860c1.js",
    "revision": "39c64e3a76035b54905cbdc6c79a706c"
  },
  {
    "url": "en/about.html",
    "revision": "3e220b6d7edc50846f23e8932b7789dd"
  },
  {
    "url": "en/index.html",
    "revision": "38027fbe9f6ea8461e3926593958ae14"
  },
  {
    "url": "en/markdown/demo.html",
    "revision": "c88a6263db9337dc22322e0648c0bce6"
  },
  {
    "url": "en/markdown/emoji.html",
    "revision": "827102ed847d2ab7d20e80cdbe43b71b"
  },
  {
    "url": "en/markdown/index.html",
    "revision": "25fec8dff443323c468530a7cbe0781d"
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
    "revision": "e17c0e1b4d9f2581fe9b2ab16c0ede3d"
  },
  {
    "url": "logo.png",
    "revision": "53e8d2cd254352df9cf794f29117a81e"
  },
  {
    "url": "markdown/demo.html",
    "revision": "df340170379d5e9391c08284869c8d11"
  },
  {
    "url": "markdown/emoji.html",
    "revision": "519676b89650ce06ca97304e5983d68d"
  },
  {
    "url": "markdown/index.html",
    "revision": "0f1f498b48ab292ae78e6bb850953ea4"
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
