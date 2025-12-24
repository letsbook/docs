# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
npm install
```

## Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without
having to restart the server. However, search only works in `build` mode.

## Build

```bash
npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting
service.

## Deployment

Just push to `main` to deploy to https://support.letsbook.app/ or push to `dev` to deploy to https://support.letsbook.dev/. Both trigger a [Github action](https://github.com/letsbook/docs/actions) that builds the project and then deploys the files to [Cloudflare workers](https://dash.cloudflare.com/77412db46d17841ed3bb3e0be58c2dcc/workers-and-pages). 

## Variables and secrets

Github needs only the `HELPSCOUT_BEACON_ID` [secret](https://github.com/letsbook/docs/settings/variables/actions). It is used during the build process to hook up the Helpscout widget. The widget is hidden when the variable is not set.

In order to deploy to Cloudflare workers, the following [secrets](https://github.com/letsbook/docs/settings/secrets/actions) need to be set: `CLOUDFLARE_ACCOUNT_ID`, `CLOUDFLARE_API_TOKEN`. They can be created in the Cloudflare dashboard using [account tokens](https://dash.cloudflare.com/77412db46d17841ed3bb3e0be58c2dcc/api-tokens). 

Lastly, the `SLACK_WEBHOOK_URL` secret is used to send notifications to Slack when the build fails or succeeds.