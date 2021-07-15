'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "268d6e468f6197e452cf542e4c951afc",
"index.html": "87adc483f31a1ed544201a535aa9350c",
"/": "87adc483f31a1ed544201a535aa9350c",
"main.dart.js": "5b78d4432d729aaade4d4e886f6d56da",
"styles/google_maps/info_window.css": "adfda8e9d4a995a46c5bf9a9b1fd492f",
"styles/global.css": "fce95c7df1f9d5dafa67485eb6b64161",
"favicon.png": "13acddac90b944fcea22626f7aabb4de",
"icons/ic_launcher_192.png": "d1b938f8d3d55a92e73fa6075a92fb80",
"icons/ic_launcher_512.png": "8b5c35ab5ff02fe712eba02bf789b795",
"manifest.json": "24e4a8ba6fefa8505a73a84e6eb57a49",
"assets/AssetManifest.json": "50c518a4e67e9d8944ef13d3b5b9ea19",
"assets/NOTICES": "ca7ec5ebcafec9b18fc0ea2324a1ab56",
"assets/FontManifest.json": "36432a9f78e769af9e9bd2ac42561e12",
"assets/packages/fwfh_svg/test/images/logo.svg": "fdb46fc7657324f79bd97928651e8274",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/font_awesome_5_pro_light_300.otf": "ae8a5833025f54b906a96c9fd658b66f",
"assets/packages/font_awesome_flutter/lib/fonts/font_awesome_5_pro_regular_400.otf": "d9f5be67c29700f546e85ce9835bc2d8",
"assets/packages/font_awesome_flutter/lib/fonts/font_awesome_5_pro_solid_900.otf": "9e957a14beebde93a5f91d0bc1fbcf85",
"assets/packages/font_awesome_flutter/lib/fonts/font_awesome_5_duotone_solid_900.otf": "f2fccf13779eb16f18f36cb515753b88",
"assets/packages/font_awesome_flutter/lib/fonts/font_awesome_5_Brands_Regular_400.otf": "63c149d8488643fd90fa292874f71dc3",
"assets/packages/flutter_widget_from_html_core/test/images/logo.png": "57838d52c318faff743130c3fcfae0c6",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/lib/i18n/ms.json": "cdf997c5723801c2598b53624180a0af",
"assets/lib/i18n/en.json": "a71ef978b42834a89d674695faaa0841",
"assets/lib/i18n/zh_Hans.json": "3a40ac24e1d9dc31234165ba9f8cdea0",
"assets/lib/i18n/zh_Hant.json": "2eeca1921cbef1868402c0435da1e73a",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/forms/consent_and_authorisation_form.pdf": "7a5478d87aadaa2f27975fd8a64b01e9",
"assets/assets/forms/attending_physician_form.pdf": "e8c006a576eaa78ebd76060f6c89b08d",
"assets/assets/images/card.png": "d73784bbb5c4171ecb8a25dc34d6ce8e",
"assets/assets/images/logo_hms.png": "374ab5a995adeb869cb81fd2465688c8",
"assets/assets/images/splash_top_left.png": "b7cef9309dbeb7891bcd5148fe7da84a",
"assets/assets/images/swipe_scroll.png": "efebc72a7b9d20fee772676e465de86a",
"assets/assets/images/app_icon.png": "d1b938f8d3d55a92e73fa6075a92fb80",
"assets/assets/images/landing_top_right.png": "27c7c17d0eaf42e70d41bf2ce0b20329",
"assets/assets/images/2.0x/swipe_scroll.png": "db2cf6ae45444ce19cad5b4fada2c2fa",
"assets/assets/images/2.0x/tap.png": "5e80aee722d06fe772eee0b1e1f2d681",
"assets/assets/images/2.0x/swipe.png": "bf557385caa42dff3ebc42d878394e20",
"assets/assets/images/signin_bottom_right.png": "0a4570088574ae13f567fbf6abc6e147",
"assets/assets/images/tap.png": "cefd31b6953cd23ffcf3883458844e5e",
"assets/assets/images/signin_bottom_left.png": "a73b777ec9f5881e0f53ab218859904a",
"assets/assets/images/onboarding_1.png": "d9713ef84caf26da778d94e7baf8f500",
"assets/assets/images/onboarding_3.png": "da62ce7d50af3e25d98251ef579eb75d",
"assets/assets/images/3.0x/swipe_scroll.png": "ea8d34a92f23f6ee0c01a3dd9bb2f0f9",
"assets/assets/images/3.0x/tap.png": "1670ad1304c49e98200ed0e66271a80e",
"assets/assets/images/3.0x/swipe.png": "1c1defef89795d5481af90d934f8a34b",
"assets/assets/images/hms_logo.png": "f63aa6be95d5f987c892854a4339a508",
"assets/assets/images/swipe.png": "6744fb26f11a10d5ae3cab047b95d6de",
"assets/assets/images/onboarding_2.png": "b1e5233c06431ba65d45dc19b240a5ba",
"assets/assets/images/hms_logo_white.png": "3f8391c98857954efea7c827ef8b8ae8",
"assets/assets/images/logo.png": "3e959888a81e0fe3cdf9ced294d61b45",
"assets/assets/images/bg_login.jpg": "9205f6d1572d44bb24a9a043f903c865",
"assets/assets/images/logo_ihm_hms.png": "6e47719dbca608de4e14d4db971727f2",
"assets/assets/images/splash_bottom_right.png": "a58dd90387cf16b0bc58d2d7ad97fc21",
"assets/assets/images/bank_logos/deutsche_bank.ico": "d8a94a62df2e12954e1cabf5817ea2b9",
"assets/assets/images/bank_logos/pbe.ico": "a8017f44098d71f12abb41d1abecf2dd",
"assets/assets/images/bank_logos/bank_mualamat.ico": "82c1510bb54b249469ef6b39a24633dd",
"assets/assets/images/bank_logos/sumitomo.ico": "ac3557c7fa2f9230ad17a5665bc01619",
"assets/assets/images/bank_logos/citibank.ico": "f8429be3cd05bbbc9bb5886deea37068",
"assets/assets/images/bank_logos/bank_of_pertanian.ico": "6eb4a43cb64c97f76562af703893c8fd",
"assets/assets/images/bank_logos/bank_fallback.png": "ba83baeb1801c2f821c88a2ff7bde683",
"assets/assets/images/bank_logos/hsbc_bank.png": "16ec02106917c772de12e8c966908fd9",
"assets/assets/images/bank_logos/alliance.ico": "ee5b7dd8ee4b69c5881bb22ba27168e1",
"assets/assets/images/bank_logos/cimb.ico": "8ff5260db1cefe6d74d669704637b99f",
"assets/assets/images/bank_logos/ambank.png": "54008e7500883ad6f74766951bc71907",
"assets/assets/images/bank_logos/maybank.ico": "29fc78899532db525a1074c73faa5ced",
"assets/assets/images/bank_logos/mizuho_bank.ico": "75bea6958cd4ba1aee1a4b34387a17a4",
"assets/assets/images/bank_logos/rhb.ico": "87f2c12ddf8ba53b0bc6326355920afc",
"assets/assets/images/bank_logos/bank_of_tokyoMit.ico": "600d65f1ded230274e259c61cd5156d6",
"assets/assets/images/bank_logos/alrajhi.ico": "6258c299f9d6525cef526c5eb05c99a6",
"assets/assets/images/bank_logos/uob.ico": "8a7319c702ecb064644601742a3abe28",
"assets/assets/images/bank_logos/jp_morgan.png": "ec10db6f94d5a068d35dfd626fb124c5",
"assets/assets/images/bank_logos/bank_of_china.ico": "65b252999275337928a51bb8abc5f92f",
"assets/assets/images/bank_logos/ocbc.png": "88533fbdb87122900148a317fda59136",
"assets/assets/images/bank_logos/bank_simpanan_nasional.ico": "f0769806f4371c9b543bd3a5be9e8099",
"assets/assets/images/bank_logos/bank_islam.png": "dcfeebafb54674a4f54ddbaaaf4b09e6",
"assets/assets/images/bank_logos/icbc.png": "89e59450379f692ff42327b914f27e67",
"assets/assets/images/bank_logos/kuwait_finance_house.ico": "7d31a8116dc0c4ba9564bb21a83a6094",
"assets/assets/images/bank_logos/bank_rakyat.png": "58f1564f50b8e2ffa4ab185591651ad8",
"assets/assets/images/bank_logos/royal_bank_of_scotland.ico": "f41ffa4a78c375137686941b4d50b3cb",
"assets/assets/images/bank_logos/bank_of_america.ico": "165d08697e7e0ff31c98209b5195cb2d",
"assets/assets/images/bank_logos/bnp_paribas.ico": "c0f6b5e900560d5c311f19daf6384ddc",
"assets/assets/images/bank_logos/standard_chartered.ico": "48052d205a5da661dfbf1021a182f821",
"assets/assets/images/bank_logos/hong_leong_bank.ico": "1531836e631fcd4b409206b4c6a94a54",
"assets/assets/images/bank_logos/affin.ico": "c93e312c78fd25a0bccf0584d95cd470",
"assets/assets/images/landing_top_left.png": "7139b6fce0aeae1e952b95bb64f426da",
"assets/assets/lotties/dino_dance.json": "01094bdf859f1852a8693198b1c1a52d",
"assets/assets/lotties/color_switching_loading.json": "ccb5bc02cb37bf0df0e7b47f89b3e69d",
"assets/assets/html/bootstrap_base.html": "9af38c6723188708f0b7691aab324c09",
"services/one_signal/OneSignalSDKWorker.js": "ebb63ca15bba16b550232b0b0f66c726",
"services/one_signal/OneSignalSDKUpdaterWorker.js": "ebb63ca15bba16b550232b0b0f66c726"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
