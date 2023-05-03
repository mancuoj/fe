# Learn Next.js


## Rendering methods

- Client-side Rendering: The browser receives an empty HTML shell from the server along with the JavaScript instructions to construct the UI. So the initial rendering work happens on the user's side.

> In Next.js, use CSR for specific components by `useEffect()` or a data fetching hook such as [useSWR](https://swr.vercel.app/zh-CN).

- Server-side Rendering: The HTML of the page is generated on a server for each requests. The generated HTML, JSON data, and JavaScript instructions to make the page interactive such as attaching event handlers to a button. The process is called **hydration**.

> In Next.js, use SSR by using [getSeverSideProps](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props).

- Static Site Generation: The HTML is generated on the server but there is no server at runtime. Instead, content is generated once at build time and re-used for each request.

> In Next.js, use SSG by using [getStaticProps](https://nextjs.org/docs/basic-features/data-fetching/get-static-props), use [Incremental Static Generation](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration) to avoid rebuilding the entire site if your data changes.

