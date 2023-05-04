# Learn Next.js


## Rendering methods

- Client-side Rendering: The browser receives an empty HTML shell from the server along with the JavaScript instructions to construct the UI. So the initial rendering work happens on the user's side.

> In Next.js, use CSR for specific components by `useEffect()` or a data fetching hook such as [useSWR](https://swr.vercel.app/zh-CN).

- Server-side Rendering: The HTML of the page is generated on a server for each requests. The generated HTML, JSON data, and JavaScript instructions to make the page interactive like attaching event handlers to a button. The process is called **hydration**.

> In Next.js, use SSR by using [getSeverSideProps](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props).

- Static Site Generation: The HTML is generated on the server but there is no server at runtime. Instead, content is generated once at build time and re-used for each request.

> In Next.js, use SSG by using [getStaticProps](https://nextjs.org/docs/basic-features/data-fetching/get-static-props), or you can opt to use [Incremental Static Generation](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration) to avoid rebuilding the entire site when your data changes.

## create-next-app

```sh
pnpm create next-app

# --ts
# --tailwind
# --eslint
# --src-dir
# --use-pnpm
# --example 
```

## File-system based router

In Next.js, a page is a React Component exported from a `js, jsx, ts, tsx` file in the `pages` directory.

When a file is added to the `pages` directory, it's automatically available as a route on its file name.

Instead of writing HTML, you will write JSX and React Components to build websites.

- `pages/index.js` → `/`
- `pages/blog/index.js` → `/blog`
- `pages/blog/first-post.js` → `/blog/first-post`
- `pages/blog/[slug].js` → `/blog/:slug (/blog/hello-world)`
- `pages/[username]/settings.js` → `/:username/settings (/foo/settings)`


## Link

Use the `Link` component from `next/link` instead of `<a>` tag to link between your pages.

It allows you to do client-side navigation and accepts props that gives you better control over the navigation behavior.

```js
import Link from 'next/link'

<h1 className="title">
  Read <Link href="/posts/first-post">this page!</Link>
</h1>
```

The `Link` component enables **client-side navigation** between two pages in Next.js, it means that page transition happens using JavaScript instead of making a new request to the server for a new page, which is faster than the default navigation done by the browser.

> Client-side navigation is often implemented using browser APIs such as the HTML5 History API, which allows JavaScript to manipulate the browser history and change the URL of the current page without triggering a full page refresh.

## Code Splitting 

Next.js does code splitting automatically, that means when the homepage is renderer, the code for other pages is not served initially, it ensures that the homepage loads quickly even if you have hundreds of pages.

Only loading the code for the page you request also means that the page becomes **isolated**. If a certain page throws an error, the rest of the application would still work. 

## Prefetching

In production build of Next.js, whenever the `Link` components appear in the browser's viewport, Next.js automatically prefetches the code for the linked page in the background.

## Static assets


