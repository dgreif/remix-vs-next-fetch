import React from "react";
import { fetch as remixFetch } from "@remix-run/node";
import { testFetch } from "../test.mjs";

export async function getServerSideProps() {
  // Refresh your browser to re-run the test
  await testFetch("Next", fetch);
  await testFetch("Remix", remixFetch);
  return { props: {} };
}

export default function Layout() {
  return <p>See terminal output for results</p>;
}
