import { fetch as remixFetch } from "@remix-run/node";
import "next/dist/server/node-polyfill-fetch.js"; // this is a direct polyfill for fetch, so we just use global.fetch
import { testFetch } from "./test.mjs";

await testFetch("Next", fetch);
await testFetch("Remix", remixFetch);
