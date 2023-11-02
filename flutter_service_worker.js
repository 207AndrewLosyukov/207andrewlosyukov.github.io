'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "1fd9fbd1c981e84cd7e73bad33db4503",
"index.html": "25a1985743f72314b47e55d44c96c443",
"/": "25a1985743f72314b47e55d44c96c443",
"main.dart.js": "15b0821bca5e8ffe1a4e71998361cd71",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c49b01de862498be239d551eb12a56cb",
".git/config": "b0e773301a00b0f423d0f1e6b697f2ba",
".git/objects/61/8ac7873a188a80783736b7e44bc7b298f9d58f": "0e26fb0f7af5694e6d29ca2653f637cb",
".git/objects/3e/4e1f949f95c43597c1c1aff20b10b2ea61ac2b": "8c3a6a5ef449ca3c836dd33d47cbfdf4",
".git/objects/3b/62eaaecde1e5edb62f81dd8e02cb86d5315031": "1e64e641bcefa58f75b3dfd23d4b54aa",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/69/5b89d3926f7f10feae2f2388ec1ff21f736c0f": "a84c9d76983f8c263be94ac4165c1f81",
".git/objects/3c/b912b1cb2b54d6e7d7cf0b228007884480b608": "e2d6385e869ea489d3a456d73b54836e",
".git/objects/3c/d19aec30f57443476021ce130e8c447762a163": "a0c68e72076cc0d814034e569218bbb3",
".git/objects/3c/be3c08829bb6adf28b4c9a0cb6741ac4bdbe5c": "f51cbd57c4aa0b6ce522d0d6c93bc672",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/3d/aa3131c5f119c25e61a9efd9643aa71d9f9926": "9c70539235b18820eebe9eb00a0196e2",
".git/objects/0b/3e9c564b42c46ff2b38fcff0bbc74fdd36fb9a": "875900375d5037252ac7798501da4a10",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/9d/59a65277ff32103fb1c8a19be5addabb9b09bc": "407800d4468ae1d28f7ab8ffd10c461d",
".git/objects/a3/bccc4cd261965ed4a4a59a42d37adaef8878ea": "cc24c735e16b739efd8a5268a13acaf7",
".git/objects/b2/3be75572caff2dc7d6f65577d73d2c6ec381f8": "012068c134f810e3e9c80cb2a6a91969",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/ad/0cd3d06f011186d0d64db36e95930f411f8695": "b6451b5b814f8bf0a87e90b46317a145",
".git/objects/bb/66d4f24235ae3a5d9eabfaa4c072efeb21e38e": "d236eb5b19a1e44e5b180d9d6457f23a",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/65402fddd4126747c70bbc501736fe96f6bb26": "899568caa3ebc15b18dc3f82224a31a0",
".git/objects/a5/383501309a8e845a9e614b4012016471d0db6c": "091e3a0aca91967aa3a4f03e1381b796",
".git/objects/bd/7373301d8db7971458657c19682a9796add660": "727aeda137b97509825913cd54a22a51",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/fdb9a575ca10911b0a2ae0b2cd749449e05618": "67a98c55722d05f391b939edda7ba6ea",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/d8/e9b6bea7842cb28f2884425a9e2a0b53747ee1": "35e80bc299c37217548ac2d5c26bbce4",
".git/objects/e5/c27ca6fa3cbc40b6e8e98e2dbe661ceb414c2d": "25c2081d0028931d566c7e733106731b",
".git/objects/e2/159d30bb63ac7e783aaf4425a3fc3078101a75": "b011046f7b9633f24f79c23a564e5e50",
".git/objects/f4/fdbe4a1956dbf33d4320349b393ba87b0c8e14": "93f82e4e5df2f9db006be8d8356a8827",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/a59677766cfc47599c014aff78925ddec8b23b": "7c22367544477d057618bb165a69e4ab",
".git/objects/fd/2e673c99b4dd1996df238e20643896d03c17d4": "cb0ed73f786e9f2f4eac25b519bbf3cf",
".git/objects/f5/30c3fd6c7f312ac6aa08d5444a02e90d54c1b0": "6a32456a69fb98c49772aea25538dd93",
".git/objects/e3/e1b55fda1d25518047f25a2903c7018caba429": "1d04e84a2e7c62d2c885641e9eee986b",
".git/objects/cf/27b2da70b761964902e212204a52ab6e696834": "d567cfb91681895968c97ea1abcd4bda",
".git/objects/ca/af7dc4bef14ebd0aac3b3165b467c6a8186fea": "a8e99c8fad20032fbb0dd8df8bb8c5a2",
".git/objects/e4/cbf602ea82e74524ca2ab91a193b8fd20d02d7": "f18b189fea3f1c9ab9005b7b037be91d",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/20/a63ab45a861f122652453d3fd6c6d8f8952947": "8dcad0ed9534b6eb7014793ab40aa335",
".git/objects/45/f65d84a57a30792f26e09ff34781718d729130": "b6f3fb7b91cf1907d2ca76536f744c2c",
".git/objects/80/a022f57b57489f80cc5aad97c24af04b1a0685": "c45bba6788c812242b997a847fabf3de",
".git/objects/1a/af98a5366ae966ec9a292d3df9ee8e30e4efb3": "a6d7f869e0105908b881073d0775d200",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/43/a3a947a0168ec916dbfdebce9b974e606640fc": "2391bb09d0021d33a37ade94ec6fde37",
".git/objects/43/a0929ddeabcf8797a180ae2b22a8f6770be9b3": "a19f7917d570182362383ac87f392775",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/a5fac68aedd1fb79d870e2933fec6bb14b083e": "34a7ccbe9a83208070647c6c2ca2c310",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/01/451143fa35777c599a930fbb53ad5fe2f25135": "eedbbe8ccaebf70750bad7b5b6145f69",
".git/objects/55/7dd7ff94b02caf9907bee17c1464c73dc2909d": "e1f3746d6b20bd4b8f4fd93d83a8b915",
".git/objects/63/4a425acdfbc0fb3dad66ab72ddf4656a69e484": "2c7b465597a1abfff18caa4504ca489e",
".git/objects/63/aa2aaf4f8832ae744b0955a367c142bbcbded6": "a44e3ab8df3af2420f7bab97233d61b8",
".git/objects/64/7385035a9fd5306868f6f0353f638a895f11b9": "0b101a192f76a34e29ff1ebcc051d9df",
".git/objects/64/cc2ff6577ceb828ced14ca9b03fe625844a8e4": "7c50ef2626cabd398b3d6d588b5fa69c",
".git/objects/bf/5a491e17723221a30dff886de226dcef3dbef5": "0d79824608e2e2867676a0e65aa0e1ac",
".git/objects/d3/03a3bd2f86df4fb2a6a26e2843530adaab8ea7": "8ae53d00a382b85ef4dc5298937da0f1",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/b1/bae11431404436772a5d1f5455c29455aa9243": "861f67080461901cbe9d2f01b14cd714",
".git/objects/aa/0fbbfdf7f6f230ec7e02eca259cb8cd3fe373d": "d00b16f54b6a9555bd2300063db41891",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/c0fadf77ec49e4be1d0e9bd913ef9f09c4294a": "c498d03c4a0ac5a1e5b8d78fa86b60a2",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/3b5d51fe35e75381930c9dc221fa851390efff": "e769dea8ab87ecc015bbaeb4d119c550",
".git/objects/e1/28d033884f38e3e6469fcc51eff0e2c549f6d6": "a03480bbaa92faf989e7cf149d156362",
".git/objects/e1/6ccb45089f381aedd61c8bbb92a2e4ef905b66": "257b0add3ec836b6d1f1c12cb8c120c3",
".git/objects/cc/4afbfd56185de8f6f6a32825824b47d01a881f": "3e2ccc2694d14739258960b66ddf06fd",
".git/objects/f7/26585888cacbfad72b6361a207d0beaf3a77cc": "a4de78758fafaa4aa03a4ddf45933551",
".git/objects/c2/c3c07436614762cf95c3b7c6105e0c37eb49e9": "5257ea03e9a70a1fc574a73e52f2ebf7",
".git/objects/e9/44a8144d35ef138893c9bfaaeb0163df8849ac": "47ac236d363cf9e731e480fbddc7743a",
".git/objects/e7/54d80f1c19a4abde7354154cd2d93064fc82ef": "eb0575931bf8c093353f993cf226114a",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/cb/ea6defa6ccf4323ce8ca5c2898fea32d56ca6c": "6267aab64e0ae5c013c9a440136dc84f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/976ebce6a6728644ea3c05f447fbf96f8f58f9": "e1d1663adc6be368117b540311ca7a4b",
".git/objects/83/67373f5b1205547edb286984bebfece83e0bc8": "b34cdfef65e79251eb46c1d42b598833",
".git/objects/83/0d388ce58024f4c39ed430a52632d1075b9eed": "a4c2d39cf4a5579f01ade9a4da81f341",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1e/98812b8b4aae078740d9453140dbec2d2ba11a": "d23f8685ddad09856545e36eab84d0e7",
".git/objects/84/367943bc538cdd135ee495c357f5901b30a6e4": "875fd3258104821447d44ccb00b30180",
".git/objects/24/9b4c8ef86b6db0e390d1617b7d684041615655": "3df9134284a84ab414332dc05cd22ccb",
".git/objects/4f/77f650ea6c7e83a157db85801cb73dd5d0cf54": "26e4fa2736fff6aa0cd26ed26d30b4eb",
".git/objects/4f/dad4c7e20363fc5c586c0f78b5cddf5e4b92cd": "f642e8171351a71c741262a090e8f79e",
".git/objects/85/8f79ffa1404f5dfbcf468e05bae5e4a85f1561": "259e4e72623d1180a54ed37e7437a8da",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/82/0b61135914bee6136229c31142681efcb369bd": "6db8e35777963eb67f878eec1ae61418",
".git/objects/47/abf0735b5994fcf2aa0f90efa89489643e18e4": "34a875a0106a28bf503efc27f2ad5a28",
".git/objects/7f/7e8a861f68e0ce265e60b17110e47ff9d3df48": "699c3849d92dd5e3fd9d510b6a4c5b9b",
".git/objects/14/9bb0dcdb8f51811577b7c25ee96fd34b3cb372": "a9fd842d2e4f5d3c67d3b08905418bee",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/22/7d1f91ea5b7cb996fd103dc1875a43cae903b5": "0837d5a1dfe48a0bdd9c5c5e9c1d199d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b9c9aec11f4dd59e8eb6a02a131a740a",
".git/logs/refs/heads/main": "90dec78a36e7111078e0b99949d3eb9b",
".git/logs/refs/remotes/origin/main": "fb742d065595024614c35f2777be41c0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "ad42ea479f814e93411e0d398f1e5d0a",
".git/refs/remotes/origin/main": "ad42ea479f814e93411e0d398f1e5d0a",
".git/index": "90f5150cb27dce859ddad8a0e31099df",
".git/COMMIT_EDITMSG": "84bc3da1b3e33a18e8d5e1bdd7a18d7a",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "de8afe0bf0972fad965b3c14593f3882",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "a3d922a0b0bb96200631d1d9f758ce7d",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
