export { alwaysdata } from "./alwaysdata";
export { awsAmplify } from "./aws-amplify";
export { awsLambda, awsLambdaStreaming } from "./aws-lambda";
export { azureFunctions } from "./azure-functions";
export { azure } from "./azure";
export { baseWorker } from "./base-worker";
export { bun } from "./bun";
export { cloudflareModule } from "./cloudflare-module";
export { cloudflarePages, cloudflarePagesStatic } from "./cloudflare-pages";
export { cloudflare } from "./cloudflare";
export { deno, denoDeploy } from "./deno-deploy";
export { denoServer } from "./deno-server";
export { digitalOcean } from "./digital-ocean";
export { firebase } from "./firebase";
export { heroku } from "./heroku";
export { edgio } from "./edgio";
export { nitroDev } from "./nitro-dev";
export { nitroPrerender } from "./nitro-prerender";
export { cli } from "./node-cli";
export { nodeServer, nodeCluster } from "./node-server";
export { node } from "./node";
export { platformSh } from "./platform-sh";
export { renderCom } from "./render-com";
export { serviceWorker } from "./service-worker";
export { stormkit } from "./stormkit";
export { vercel, vercelEdge, vercelStatic } from "./vercel";
export { cleavr } from "./cleavr";
export { layer0 } from "./layer0";
export { flightControl } from "./flightcontrol";
export { koyeb } from "./koyeb";
export { iis, iisHandler, iisNode } from "./iis";
export { _static as static } from "./static";
export { githubPages } from "./github-pages";
export { gitlabPages } from "./gitlab-pages";
export { winterjs } from "./winterjs";
export { zeabur, zeaburStatic } from "./zeabur";

// Netlify
// https://github.com/unjs/nitro/pull/2406
export {
  netlify as netlifyLegacy,
  netlify,
  netlifyBuilder,
  netlifyBuilder as netlifyLegacyBuilder,
  netlifyEdge,
  netlifyEdge as netlifyLegacyEdge,
  netlifyStatic,
  netlifyStatic as netlifyLegacyStatic,
} from "./netlify-legacy";

export {
  netlify as netlifyLatest,
  netlifyEdge as netlifyLatestEdge,
  netlifyStatic as netlifyLatestStatic,
} from "./netlify-latest";
