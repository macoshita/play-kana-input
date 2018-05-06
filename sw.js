importScripts('/play-kana-input/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "play-kana-input",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/play-kana-input/_nuxt/app.354b35bdf10549e4251f.js",
    "revision": "47fae83b18c3e7ef2915cd0c047c9c9c"
  },
  {
    "url": "/play-kana-input/_nuxt/layouts/default.c605bf7c8c94c47a9469.js",
    "revision": "a91a72a95e08ae0f39a94479ab79fce1"
  },
  {
    "url": "/play-kana-input/_nuxt/manifest.7f22cad4f6175a9b2218.js",
    "revision": "70a01ee784c16990766418e5e315415e"
  },
  {
    "url": "/play-kana-input/_nuxt/pages/index.0c6156d450659922d325.js",
    "revision": "5e77bcb323cd15c45db8fbd0fa31f2c2"
  },
  {
    "url": "/play-kana-input/_nuxt/vendor.a049628b0c17005e3945.js",
    "revision": "31b9c5589d83571abdd07f844c12e885"
  }
])


workboxSW.router.registerRoute(new RegExp('/play-kana-input/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/play-kana-input/.*'), workboxSW.strategies.networkFirst({}), 'GET')

