'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "3ded53d9dccba292780708928b824344",
"version.json": "8d8a96bdeff541c11df2843c829fc122",
"index.html": "0988546c9ce5f3c85b313a4264076876",
"/": "0988546c9ce5f3c85b313a4264076876",
"main.dart.js": "05683b8459e4907b999eee7b2710172c",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "faa4dd435feb72638e7f2d1aa1840b0e",
"Archive.zip": "32c4241c6958bfb0023ea2c8cfa59dfc",
"assets/AssetManifest.json": "f800084fdc5acfa9fd40284c06a3cbd3",
"assets/NOTICES": "fb3ac46fcb9711804eaf2bb7ad6e3513",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "a4d864194465413a6280cd76637179b2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "8d29addd7a0f1ff4a486ec8dfbadf560",
"assets/fonts/MaterialIcons-Regular.otf": "6fd1c90975305e39d871fdbcfdcfa142",
"assets/assets/happy.png": "98429b6f285979602b14e815d6c5193f",
"assets/assets/demotivated.png": "608d896c7f46433acc50f835871a4dc0",
"assets/assets/disagree.png": "9f3f5be5391415c3b8289eda4f2e260c",
"assets/assets/Hurdle.png": "6592cdc6d8cc3b3fdd8a23265d3ed4ed",
"assets/assets/amazing.png": "b4453a10ece890378c3d7a96f2ee56fb",
"assets/assets/istore.png": "ed7ee29f1d57e625121312e8c05be8db",
"assets/assets/complete.png": "aea5a8df072c171945e1352c25763fa4",
"assets/assets/instagram.png": "4f7cb5fbb28d0f9ddc97641f8b288735",
"assets/assets/Music.png": "e02293f7c18c4302941a0c6e39ad28f8",
"assets/assets/anxious.png": "0a1cb72812c0e7f725e280fc497838ac",
"assets/assets/face.png": "c74b2e7aad3725bc22dffb903039e159",
"assets/assets/test1.png": "2d6cc508207aa7d04263c2b9d8faf881",
"assets/assets/works.png": "8884cb8593e24639921a6576b0a61511",
"assets/assets/ladder.png": "cc0d520218e65184896dbb4b829d1b96",
"assets/assets/Notebook.png": "188deaa2387f1f93dce405a9fe617e46",
"assets/assets/agree.png": "6dd7502103d25dc64c18fbe8fb5097a5",
"assets/assets/test.png": "fe495142cddc12c2f121d6a2256317df",
"assets/assets/left.png": "05fdb3275825f99393ae5867b2efaade",
"assets/assets/Affirmation.png": "c570c0201e1d85c696f8f20cf2019937",
"assets/assets/iphone.png": "800e0e22f70dab1942d9e486c1839a62",
"assets/assets/sadness.png": "401eacd855da7ba186ee18963354bebe",
"assets/assets/d4.png": "a5e273e1e34e9045b97c3d987c9eb409",
"assets/assets/logo.png": "b45ed1cdc254e04c61cf6e65676f09dc",
"assets/assets/gplay.png": "b9abc095a20ea24cf9d602d3c676b052",
"assets/assets/twitter.png": "d6e3612334194e04a92d506ba72fa137",
"assets/assets/linkedin.png": "c58d39d3db5c53635f028c5bbd516d93",
"assets/assets/d1.png": "c54cf90dd4b9a23cbd16c64e174e5b4c",
"assets/assets/d3.png": "4a0bff74e5d4f0aa214339510ced63b8",
"assets/assets/phone.png": "e76c9a062a0d28ce1a2fa599b42715da",
"assets/assets/Cognitive.png": "b4ea991d4ea33c189e4dbb550497859e",
"assets/assets/d2.png": "634a7b4719e545043c67dcb58a2693d2",
"assets/assets/qr.png": "5ed64e94e12f262542fc36b1b31ec3e2",
"assets/assets/youtube.png": "c74b2e7aad3725bc22dffb903039e159",
"assets/assets/Reward.png": "13ef817970df6ab2f4eee02249a774a4",
"assets/assets/right.png": "fde25bcb55166622c8b7223f0ea5a0e5",
"assets/assets/stressed.png": "ed11c76180b9e3ce27327f77c47d28a5",
"assets/assets/frustrated.png": "a608a379c66797b982260ece947d4d20",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
