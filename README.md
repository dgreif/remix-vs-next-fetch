# Remix vs Next.js Fetch

While testing out both Remix and Next.js, I noticed that the `fetch` polyfill for Next.js seems to be significantly faster than the Remix version.  This is a simple reproduction to demonstrate the differences.

Here are the results from running `node index.mjs`:

```
Next 655
Next 593
Next 549
Next 573
Next 523
Next average 578 

Remix 702
Remix 743
Remix 636
Remix 660
Remix 617
Remix average 671 
```

One thing that is odd is that Next seems to perform even better when run _within_ a Next.js app.  To see this version of the example, run `npm run dev`, load the page at [localhost:3000](http://localhost:3000), and observe the output in your terminal.  I see something like this:

```
Next 264
Next 259
Next 284
Next 310
Next 275
Next average 278 

Remix 718
Remix 669
Remix 686
Remix 747
Remix 661
Remix average 696 
```

You can try changing the fetch url in `test.mjs` to something like `https://www.google.com`.  In that case, the results are almost identical in Node, but Next is still significantly faster when run with `npm run dev`
