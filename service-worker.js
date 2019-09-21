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
    "revision": "c0c2317ca7b488499255d8b3b283616c"
  },
  {
    "url": "assets/css/0.styles.6ca0062c.css",
    "revision": "be7c02093818752611889e7d32e1f9f3"
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
    "url": "assets/js/24.d9f6afbf.js",
    "revision": "36915f4e5ea2232b4a21320d73625b3a"
  },
  {
    "url": "assets/js/25.caad5188.js",
    "revision": "379b4051f716e532fbba28b3aecc714e"
  },
  {
    "url": "assets/js/26.6159dbc7.js",
    "revision": "30dfb3bd65adabe095fe5d58b618371d"
  },
  {
    "url": "assets/js/27.ad73b589.js",
    "revision": "8c7f8a2d9dbfa87c8be8782866a5e83c"
  },
  {
    "url": "assets/js/28.cbb3b9eb.js",
    "revision": "c08772258219ba2b7353d1ee34e14137"
  },
  {
    "url": "assets/js/29.0c0c97de.js",
    "revision": "6b440c6337b1b55bdb5cb4c980ece62b"
  },
  {
    "url": "assets/js/app.f566ef60.js",
    "revision": "9f5122935efe906bef075a3294fe0365"
  },
  {
    "url": "assets/js/page-036b4608.1c751c38.js",
    "revision": "fe5288fc95ac4867aa7a7441b6bd07ff"
  },
  {
    "url": "assets/js/page-0685c97d.3374f46e.js",
    "revision": "0d4e9559ffd64b424f65c73c5ea032cb"
  },
  {
    "url": "assets/js/page-07c9f1f0.d946b5f3.js",
    "revision": "d1d403a80c3659786ef2eb7997c60c0f"
  },
  {
    "url": "assets/js/page-09033a99.29955e36.js",
    "revision": "3d75212d5c37cde0aff151663f1e1e8e"
  },
  {
    "url": "assets/js/page-0e48cdf5.5c37ecb9.js",
    "revision": "1698bbc02afe23ab029c9de972c810c7"
  },
  {
    "url": "assets/js/page-29087135.99fcede6.js",
    "revision": "e6d2d97d40c55cb78ea372ddcb220624"
  },
  {
    "url": "assets/js/page-2e7fb2b6.6f6d5b69.js",
    "revision": "4f3f6a42f3cfcf66959aeaaaaa802975"
  },
  {
    "url": "assets/js/page-3097caf6.7d400e5f.js",
    "revision": "c4148c1533db2e30e75bc6a95817ec23"
  },
  {
    "url": "assets/js/page-3182acb5.cf3bf1c4.js",
    "revision": "559fb895f96453ab84133174f901490d"
  },
  {
    "url": "assets/js/page-4bf84256.d7b93b43.js",
    "revision": "d34098048c712dd5f7f50b2e30aa3aaf"
  },
  {
    "url": "assets/js/page-4fd376b6.92734f92.js",
    "revision": "efe3e58031fc74530a44120f0b45c0f1"
  },
  {
    "url": "assets/js/page-62253036.fd835bba.js",
    "revision": "f70dedc40f0b5f833d14490aa0816387"
  },
  {
    "url": "assets/js/page-6ab6b9b2.fde76fb3.js",
    "revision": "f0cb9610a6890f62fbbe3ac48f9d5b46"
  },
  {
    "url": "assets/js/page-6b7bb5b6.48de8edf.js",
    "revision": "370f521bb5ee9b8f958193ddd3639d4e"
  },
  {
    "url": "assets/js/page-6feb314a.96f68d1c.js",
    "revision": "a7fe4229bde5457236649f86dae7f760"
  },
  {
    "url": "assets/js/page-70af6178.1a8720b1.js",
    "revision": "febc0b479db44accae58d9097c97628d"
  },
  {
    "url": "assets/js/page-7d2ddbd0.a43a14cc.js",
    "revision": "fa6a24350e88c19d61a11c0ce8e8aadf"
  },
  {
    "url": "assets/js/page-7f69b3d6.b2f6d7d4.js",
    "revision": "9dbb9c04a0494269db87e5af72fb1a73"
  },
  {
    "url": "assets/js/page-b9321ed4.c65f5369.js",
    "revision": "eeade508cf32d4bf31f1f52a076a5a9f"
  },
  {
    "url": "assets/js/page-d1a31194.adf4da8c.js",
    "revision": "061f4e757b2f8d0c532432c30616d9a6"
  },
  {
    "url": "assets/js/page-eaec39ee.273c57d4.js",
    "revision": "5f4d0a8133b3382cad0f6b1cc62c2ddf"
  },
  {
    "url": "assets/js/page-edcc7916.c367e462.js",
    "revision": "a7c0d4454c67b081c40d6876dad52279"
  },
  {
    "url": "en/index.html",
    "revision": "80175d6bc155a9613bde46ea15fcf393"
  },
  {
    "url": "en/markdown/demo.html",
    "revision": "5af6885bc4ab507870d58c669339a8cb"
  },
  {
    "url": "en/markdown/emoji.html",
    "revision": "066a2841cdda070d7bef509259e6d7a6"
  },
  {
    "url": "en/markdown/index.html",
    "revision": "cf5b8837853a324d4a84c80bf84d7450"
  },
  {
    "url": "en/vuepress/case.html",
    "revision": "72f0b3c28c229dcf39af8fdb12c8406b"
  },
  {
    "url": "en/vuepress/command.html",
    "revision": "5ef123f755bf8201ebf5e86754e95128"
  },
  {
    "url": "en/vuepress/file.html",
    "revision": "5fb31a24d59f8eae2c288976bf00f21f"
  },
  {
    "url": "en/vuepress/index.html",
    "revision": "57225c49e602f9edb1348e3ff69eb2cc"
  },
  {
    "url": "en/vuepress/plugin.html",
    "revision": "205c0201e4b1b77dff9208a62edaabe4"
  },
  {
    "url": "en/vuepress/theme/dev.html",
    "revision": "37407ab31747e66ae4efea46d5b16b2d"
  },
  {
    "url": "en/vuepress/theme/index.html",
    "revision": "433829c5d04f06aa4dbb4bf0be5fd643"
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
    "revision": "bdfe09c401632a3d652b8827c4a3e12e"
  },
  {
    "url": "logo.png",
    "revision": "53e8d2cd254352df9cf794f29117a81e"
  },
  {
    "url": "markdown/demo.html",
    "revision": "085b0616bf0476ef5496bebf23c9534d"
  },
  {
    "url": "markdown/emoji.html",
    "revision": "808c7e7b427c5a590e8392ba9217d47e"
  },
  {
    "url": "markdown/index.html",
    "revision": "c04c6cb4b07028f671079ede6fa238b6"
  },
  {
    "url": "vuepress/case.html",
    "revision": "184de2e52c7705ea0a135b9376536af2"
  },
  {
    "url": "vuepress/command.html",
    "revision": "71a53d1655083b80eccc272d594e38d3"
  },
  {
    "url": "vuepress/file.html",
    "revision": "c19d552e07241190bf527195b3df31f6"
  },
  {
    "url": "vuepress/index.html",
    "revision": "0914fa7d61d9a0f16ee4b4ab458a1f77"
  },
  {
    "url": "vuepress/plugin.html",
    "revision": "29350f8487adb725e1db83eda6b1b627"
  },
  {
    "url": "vuepress/theme/dev.html",
    "revision": "3f1faff70d398f53d3a9c470d46a972f"
  },
  {
    "url": "vuepress/theme/index.html",
    "revision": "53ad4fb08213af592e96be1275a19995"
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
