// export fuisOldDoc = (docPath)=> oldDocsMap.has(docPath)
export function isOldDoc(docPath) {
  return oldDocsMap.has(docPath)
}

export function hasDefinedRedirect(docPath) {
  return oldDocsMap.get(docPath) !== ''
}
// if mapped to an empty string '', then old that old doc will map to the Overview of the Workers Docs
// (e.g. https://workers.cloudflare.com/docs)

// Redirect a page in the old docs to a new article that has replaced it
// e.g. ['/recipes', '/templates'], -> redirects requests to /recipes to /templates
export const oldDocsMap = new Map([
  ['/test-redirect', '/templates'],
  ['/about/how-workers-work', '/about/how-it-works'],
  ['/api', '/tooling/api'],
  ['/api/config-api-for-enterprise', '/tooling/api'],
  ['/api/resource-bindings', '/tooling/api/bindings'],
  ['/api/resource-bindings/kv-namespaces', '/reference/storage/api'],
  ['/api/resource-bindings/webassembly-modules', ''],
  ['/api/route-matching', ''],
  ['/deploying-workers', '/tooling'],
  ['/deploying-workers/github-action', ''],
  ['/deploying-workers/serverless', '/tooling/serverless'],
  ['/deploying-workers/terraform', ''],
  ['/deploying-workers/travis-ci', ''],
  ['/deploying-workers/unit-testing', ''],
  ['/faq', ''],
  ['/kv', '/reference/storage'],
  ['/kv/api', '/reference/storage/api'],
  ['/kv/expiring-keys', '/reference/storage/expiring-keys'],
  ['/kv/limitations', '/reference/storage/limitations'],
  ['/kv/reading-data', '/reference/storage/reading-data'],
  ['/kv/writing-data', '/reference/storage/writing-data'],
  ['/recipes', '/templates'],
  ['/recipes/a-b-testing', '/templates/snippets/ab_testing'],
  [
    '/recipes/aggregating-multiple-requests',
    '/templates/snippets/aggregate_requests',
  ],
  ['/recipes/altering-headers', '/templates/snippets/alter_headers'],
  ['/recipes/bulk-redirects', '/templates/snippets/bulk_redirects'],
  ['/recipes/conditional-routing', '/templates/snippets/conditional_response'],
  ['/recipes/cors-preflight-requests', '/templates/snippets/cors_header_proxy'],
  ['/recipes/country-blocking', '/templates/snippets/country_code'],
  ['/recipes/hotlink-protection', '/templates/snippets/hotlink-protection'],
  ['/recipes/lambda@edge-conversion', ''],
  ['/recipes/lambda@edge-conversion/changing-origins', ''],
  [
    '/recipes/lambda@edge-conversion/generating-responses-with-static-content',
    '',
  ],
  ['/recipes/lambda@edge-conversion/overriding-response-headers', ''],
  ['/recipes/lambda@edge-conversion/updating-error-statuses', ''],
  ['/recipes/lambda@edge-conversion/working-with-querystrings', ''],
  ['/recipes/mobile-redirects', '/templates/snippets/conditional_response'],
  ['/recipes/post-requests', '/templates/snippets/post_data'],
  ['/recipes/pre-shared-keys', '/templates/snippets/auth_with_headers'],
  ['/recipes/random-content-cookies', ''],
  ['/recipes/return-403', '/templates/snippets/tls_version'],
  ['/recipes/setting-a-cookie', '/templates/snippets/ab_testing'],
  ['/recipes/signed-requests', '/templates/snippets/signed_request'],
  ['/recipes/static-site', '/templates/featured_boilerplates/cloud_storage'],
  ['/recipes/streaming-responses', ''],
  ['/recipes/tls-version-blocking', '/templates/snippets/tls_version'],
  ['/recipes/vcl-conversion', ''],
  ['/recipes/vcl-conversion/authenticating-before-returning-a-request', ''],
  ['/recipes/vcl-conversion/conditionally-changing-a-url', ''],
  ['/recipes/vcl-conversion/controlling-the-cache', ''],
  ['/recipes/vcl-conversion/delivering-custom-responses', ''],
  [
    '/recipes/vcl-conversion/delivering-different-content-to-different-devices',
    '',
  ],
  ['/recipes/vcl-conversion/inspecting-visitor-location', ''],
  ['/reference/cache-api', '/reference/apis/cache/#body-inner'],
  ['/reference/cloudflare-features', '/reference/apis/request/#the-cf-object'],
  ['/reference/request-attributes', '/reference/apis/request'],
  ['/webassembly', '/tutorials/build-a-rustwasm-function'],
  ['/webassembly/tutorial', '/tutorials/build-a-rustwasm-function'],
  ['/writing-workers', '/quickstart/#writing-code'],
  ['/writing-workers/blog-posts', ''],
  ['/writing-workers/debugging-tips', '/about/tips/debugging'],
  [
    '/writing-workers/handling-errors',
    '/about/tips/debugging#4-go-to-origin-on-error',
  ],
  ['/writing-workers/resource-limits', '/about/limits'],

  ['/archive/recipes/static-site', '/sites'],
])
