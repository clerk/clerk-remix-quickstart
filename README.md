<p align="center">
  <a href="https://www.clerk.com/?utm_source=github&utm_medium=starter_repos&utm_campaign=clerk_remix_v2" target="_blank" align="center">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="./docs/clerk-logo-dark.png">
      <img src="./docs/clerk-logo-light.png" height="64">
    </picture>
  </a>
  <br />
</p>

# Clerk Remix Starter (v2)

This example shows how to use [Clerk](https://www.clerk.com/?utm_source=github&utm_medium=starter_repos&utm_campaign=clerk_remix_v2) with [Remix](https://remix.run/).

[![chat on Discord](https://img.shields.io/discord/856971667393609759.svg?logo=discord)](https://discord.com/invite/b5rXHjAg7A)
[![documentation](https://img.shields.io/badge/documentation-clerk-green.svg)](https://clerk.com/docs)
[![twitter](https://img.shields.io/twitter/follow/ClerkDev?style=social)](https://twitter.com/intent/follow?screen_name=ClerkDev)

<details open>
<summary><h2 style="display: inline-block; margin-left: 4px;">Table of contents</h2></summary>

- [Overview](#overview)
- [Demo](#demo)
- [Getting started](#getting-started)
- [Where the magic happens](#where-the-magic-happens)
- [Documentation](#documentation)
- [Deployment](#deployment-vercel)
- [License info](#license)

</details>

## Overview

This starter demonstrates how to add authentication to your Remix application with [Clerk](https://www.clerk.com/?utm_source=github&utm_medium=starter_repos&utm_campaign=clerk_remix_v2).

Clerk works with Remix SSR and supports server-side rendering out-of-the-box and follows Remix conventions for loaders and higher-order components (HOCs).

## Getting started

To run the starter application locally, you need to:

1. Sign up for a Clerk account at [https://clerk.com](https://www.clerk.com/?utm_source=github&utm_medium=starter_repos&utm_campaign=clerk_remix_v2)
2. Clone this repo locally
3. Rename the `.env.sample` to `.env` and then set the required `CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` variables from the [API keys](https://dashboard.clerk.com/last-active?path=api-keys) screen in your Clerk dashboard.
4. `npm install` the required dependencies
5. `npm run dev` to start the development server
6. Open [http://localhost:3000](http://localhost:3000) and you are ready to go!

## Where the magic happens

In Remix, `app/root.tsx` wraps your entire application in both server and browser contexts. Clerk makes two modifications to this file so the authentication state is shared with your Remix routes.

1. `rootAuthLoader` exported as `loader`
2. The default export wrapped with `ClerkApp`

For more details, please refer to the [Use Clerk with Remix](https://clerk.com/docs/quickstarts/remix/?utm_source=github&utm_medium=starter_repos&utm_campaign=clerk_remix_v2) guide, or take a look at the [`app/root.tsx`](./app/root.tsx) file.

## Documentation

To learn more about Clerk and Remix, take a look at the following resources:

- [Quick start](https://clerk.com/docs/quickstarts/remix?utm_source=github&utm_medium=starter_repos&utm_campaign=clerk_remix_v2)
- [Clerk Documentation](https://clerk.com/docs/?utm_source=github&utm_medium=starter_repos&utm_campaign=clerk_remix_v2)
- [Remix Documentation](https://remix.run/docs)

## License

This project is licensed under the **MIT license**.

See [LICENSE](https://github.com/clerk/clerk-remix-v2/blob/main/LICENSE) for more information.
