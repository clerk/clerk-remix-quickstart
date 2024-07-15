<p align="center">
  <a href="https://clerk.com?utm_source=github&utm_medium=clerk_docs" target="_blank" rel="noopener noreferrer">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="./public/light-logo.png">
      <img alt="Clerk Logo for light background" src="./public/dark-logo.png" height="64">
    </picture>
  </a>
  <br />
</p>
<div align="center">
  <h1>
    Clerk and Remix Quickstart
  </h1>
  <a href="https://www.npmjs.com/package/@clerk/clerk-react">
    <img alt="Downloads" src="https://img.shields.io/npm/dm/@clerk/clerk-react" />
  </a>
  <a href="https://discord.com/invite/b5rXHjAg7A">
    <img alt="Discord" src="https://img.shields.io/discord/856971667393609759?color=7389D8&label&logo=discord&logoColor=ffffff" />
  </a>
  <a href="https://twitter.com/clerkdev">
    <img alt="Twitter" src="https://img.shields.io/twitter/url.svg?label=%40clerkdev&style=social&url=https%3A%2F%2Ftwitter.com%2Fclerkdev" />
  </a>
  <br />
  <br />
  <img alt="Clerk Hero Image" src="./public/hero.png">
</div>

## Introduction

Clerk is a developer-first authentication and user management solution. It provides pre-built components and hooks for sign-in, sign-up, user profile, and organization management. Clerk is designed to be easy to use and customize, and can be integrated into any Remix application.

After following the [Clerk Remix quickstart](https://clerk.com/docs/quickstarts/remix), you will have learned how to:

- Create a new Remix application
- Install `@clerk/clerk-remix`
- Set up your environment keys
- Import the Clerk Publishable Key
- Wrap your Remix app in `<ClerkProvider />`
- Use Clerk components to protect your content
- Embed the `<SignInButton />` and `<SignOutButton />`
- Deploy your application

### Branches of this repository

- `main`: The result of following the [Clerk Remix quickstart](https://clerk.com/docs/quickstarts/remix).
- `integrate-remix-router`: The result of following the [Add Remix Router](https://clerk.com/docs/references/remix/add-remix-router#add-remix-router-to-your-clerk-powered-remix-application) guide.

## Deploy

Easily deploy the template to Vercel with the button below. You will need to set the required environment variables in the Vercel dashboard.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fclerk%2Fclerk-remix-quickstart&env=REMIX_CLERK_PUBLISHABLE_KEY,CLERK_SECRET_KEY&envDescription=Clerk%20API%20keys&envLink=https%3A%2F%2Fclerk.com%2Fdocs%2Fquickstart%2Fremix&redirect-url=https%3A%2F%2Fclerk.com%2Fdocs%2Fquickstart%2Fremix)

## Running the template

```bash
git clone https://github.com/clerk/clerk-remix-quickstart
```

To run the example locally, you need to:

1. Sign up for a Clerk account at [https://clerk.com](https://www.clerk.com/?utm_source=github&utm_medium=starter_repos&utm_campaign=clerk_remix_v2).

2. Go to the [Clerk dashboard](https://dashboard.clerk.com?utm_source=github&utm_medium=starter_repos&utm_campaign=clerk_remix_v2) and create an application.

3. Set the required Clerk environment variables as shown in [the example `env` file](./.env.sample).

4. `npm install` the required dependencies.

5. `npm run dev` to launch the development server.

## Where the magic happens

In Remix, `app/root.tsx` wraps your entire application in both server and browser contexts. Clerk makes two modifications to this file so the authentication state is shared with your Remix routes.

1. `rootAuthLoader` exported as `loader`.
2. The default export wrapped with `ClerkApp`.

For more details, please refer to the [Use Clerk with Remix](https://clerk.com/docs/quickstarts/remix/?utm_source=github&utm_medium=starter_repos&utm_campaign=clerk_remix_v2) guide, or take a look at the [`app/root.tsx`](./app/root.tsx) file.

## Learn more

To learn more about Clerk and Remix, check out the following resources:

- [Quickstart: Get started with Remix and Clerk](https://clerk.com/docs/quickstarts/remix?utm_source=github&utm_medium=starter_repos&utm_campaign=clerk_remix_v2)

- [Clerk Documentation](https://clerk.com/docs/?utm_source=github&utm_medium=starter_repos&utm_campaign=clerk_remix_v2)
- [Remix Documentation](https://remix.run/docs)

## Found an issue?

If you have found an issue with the quickstart, please create an [issue](https://github.com/clerk/clerk-remix-quickstart/issues).

If it's a quick fix, such as a misspelled word or a broken link, feel free to skip creating an issue.
Go ahead and create a [pull request](https://github.com/clerk/clerk-remix-quickstart/pulls) with the solution. :rocket:

## Want to leave feedback?

Feel free to create an [issue](https://github.com/clerk/clerk-remix-quickstart/issues) with the **feedback** label. Our team will take a look at it and get back to you as soon as we can!

## Connect with us

You can discuss ideas, ask questions, and meet others from the community in our [Discord](https://discord.com/invite/b5rXHjAg7A).

If you prefer, you can also find support through our [Twitter](https://twitter.com/ClerkDev), or you can [email](mailto:support@clerk.dev) us!
