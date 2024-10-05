'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "60321437f5456deb637e57df8c76bf3c",
"assets/AssetManifest.bin.json": "da38a6aa61d80e07332af2841fb4d83f",
"assets/AssetManifest.json": "f1d53e9cc12b7328b1165ef0bcc5aaeb",
"assets/assets/about2.png": "e472ac26f6bccf4b2fad030606ab9905",
"assets/assets/Affirmation.png": "c570c0201e1d85c696f8f20cf2019937",
"assets/assets/agree.png": "6dd7502103d25dc64c18fbe8fb5097a5",
"assets/assets/amazing.png": "00b451a790a88e5460c26df9f8eeb498",
"assets/assets/anxious.png": "a2152b65e4cbfab48efad17709eaebf5",
"assets/assets/appstore.png": "d79fafbdb9542432723d71733af3c679",
"assets/assets/arrow.png": "ec0758926d7b493001a9d37203194f31",
"assets/assets/backdrop.png": "baede8b4488588bec46569d141ee5c2a",
"assets/assets/backdrop1.png": "87793a758d2932e9500f96c4e47a455c",
"assets/assets/c1.png": "52bc107ac3b3ce5dc5855560dea1228a",
"assets/assets/c2.png": "5b03d36042090d6c1249807566619be4",
"assets/assets/c3.png": "a1611d056a66ea8693cb4acaa0fbc756",
"assets/assets/Cognitive.png": "b4ea991d4ea33c189e4dbb550497859e",
"assets/assets/complete.png": "aea5a8df072c171945e1352c25763fa4",
"assets/assets/d1.png": "c54cf90dd4b9a23cbd16c64e174e5b4c",
"assets/assets/d2.png": "634a7b4719e545043c67dcb58a2693d2",
"assets/assets/d3.png": "4a0bff74e5d4f0aa214339510ced63b8",
"assets/assets/d4.png": "a5e273e1e34e9045b97c3d987c9eb409",
"assets/assets/demotivated.png": "a74852e0b72284b307bef29e540ceed7",
"assets/assets/disagree.png": "9f3f5be5391415c3b8289eda4f2e260c",
"assets/assets/face.png": "c74b2e7aad3725bc22dffb903039e159",
"assets/assets/feature1.png": "a548885853ad1d84a8225d84fe4e46ea",
"assets/assets/feature2.png": "83ae940cf3c3871205f90f1a754b8628",
"assets/assets/feature3.png": "77ac147c57c5296c1731fb64cdc1c07c",
"assets/assets/fonts/Lato-Bold.ttf": "24b516c266d7341c954cb2918f1c8f38",
"assets/assets/fonts/Lato-Regular.ttf": "122dd68d69fe9587e062d20d9ff5de2a",
"assets/assets/fonts/Nunito-Bold.ttf": "ba43cdecf9625c0dcec567ba29555e15",
"assets/assets/fonts/Nunito-BoldItalic.ttf": "dc69781f4856bdb711087d1ae07ca208",
"assets/assets/fonts/Nunito-Italic.ttf": "fac5c8ffb51e06094affdbb7fff9000e",
"assets/assets/fonts/Nunito-Regular.ttf": "b83ce9c59c73ade26bb7871143fd76bb",
"assets/assets/fonts/SpaceGrotesk-Bold.ttf": "a17e24dc3fccc03e32a6e66100fb05df",
"assets/assets/fonts/SpaceGrotesk-Regular.ttf": "7f510d38d1c785c851d73882c0ca58c0",
"assets/assets/founder.png": "be28d5134dec0f71b4d90bfd5bdd91c6",
"assets/assets/frustrated.png": "a608a379c66797b982260ece947d4d20",
"assets/assets/gplay.png": "b9abc095a20ea24cf9d602d3c676b052",
"assets/assets/happy.png": "98429b6f285979602b14e815d6c5193f",
"assets/assets/Hurdle.png": "6592cdc6d8cc3b3fdd8a23265d3ed4ed",
"assets/assets/instagram.png": "4f7cb5fbb28d0f9ddc97641f8b288735",
"assets/assets/iphone.png": "c0afef9475fffb435f24e0b2ddc30bf1",
"assets/assets/istore.png": "ed7ee29f1d57e625121312e8c05be8db",
"assets/assets/ladder.png": "cc0d520218e65184896dbb4b829d1b96",
"assets/assets/left.png": "05fdb3275825f99393ae5867b2efaade",
"assets/assets/linkedin.png": "c58d39d3db5c53635f028c5bbd516d93",
"assets/assets/logo.png": "b45ed1cdc254e04c61cf6e65676f09dc",
"assets/assets/Music.png": "e02293f7c18c4302941a0c6e39ad28f8",
"assets/assets/mworks.png": "539db6f0f08a2881eac545b1c73de3dc",
"assets/assets/Notebook.png": "188deaa2387f1f93dce405a9fe617e46",
"assets/assets/phone.png": "e76c9a062a0d28ce1a2fa599b42715da",
"assets/assets/playstore.png": "450eb044b1a9b9f738805f6636b343f5",
"assets/assets/privacy.png": "0a8e7573f01b5b55ac3b1768cf759a11",
"assets/assets/qr.png": "5ed64e94e12f262542fc36b1b31ec3e2",
"assets/assets/ramdev.png": "a2e219c2054db04e62c9c0a777e13e87",
"assets/assets/relationship.png": "1b0b1e426c3cfab857cb6de76f2aabcc",
"assets/assets/Reward.png": "13ef817970df6ab2f4eee02249a774a4",
"assets/assets/right.png": "fde25bcb55166622c8b7223f0ea5a0e5",
"assets/assets/sadness.png": "6463d84c3f741770def87d18717cc816",
"assets/assets/stressed.png": "ed11c76180b9e3ce27327f77c47d28a5",
"assets/assets/test.png": "fe495142cddc12c2f121d6a2256317df",
"assets/assets/test1.png": "2d6cc508207aa7d04263c2b9d8faf881",
"assets/assets/try.png": "3fddfc41022c2d306023b41b2f86de51",
"assets/assets/twitter.png": "d6e3612334194e04a92d506ba72fa137",
"assets/assets/works.png": "8884cb8593e24639921a6576b0a61511",
"assets/assets/youtube.png": "c74b2e7aad3725bc22dffb903039e159",
"assets/FontManifest.json": "d107fa3ad341a313c0fd2ee014fe2060",
"assets/fonts/MaterialIcons-Regular.otf": "e35b453b764b49f37580710a02639add",
"assets/NOTICES": "166801ab647fcee528ab8325f81b3b6d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "10d5f15fd55923b1e0d54ed889b42f61",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "60952f72893ba50abacf786dbb110373",
"/": "60952f72893ba50abacf786dbb110373",
"main.dart.js": "e7a0fb438294f02ff40252354f3f97dc",
"manifest.json": "faa4dd435feb72638e7f2d1aa1840b0e",
"version.json": "8d8a96bdeff541c11df2843c829fc122"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
