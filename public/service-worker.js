// import routing from "workbox-routing";
// import strategies from "workbox-strategies";

importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js"
);

workbox.routing.registerRoute(
    ({ request }) => request.destination === "image",
    new workbox.strategies.NetworkFirst()
);
