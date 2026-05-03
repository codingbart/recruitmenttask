<h1>Recruitment Task</h1>

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Types

To generate types from json schema file I used **json-schema-to-typescript** library. There was a problem with schema and API response because `columbus_recruitment.schema.json` defines `link` field in `Image` object, but the API returns `url`. I manually changed that.

## Images

I noticed that two images return **404** errors. Probably sth wrong in the data, but I'm not sure.

## Conventional commits

Used conventional commits in this project: <br>
`https://www.conventionalcommits.org/en/v1.0.0/`
