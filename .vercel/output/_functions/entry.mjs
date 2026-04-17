import { r as renderers } from './chunks/_@astro-renderers_DhOb6nU_.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DDL2h_Ca.mjs';
import { manifest } from './manifest_DQ4A_TIk.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/api/about/current.astro.mjs');
const _page3 = () => import('./pages/api/about/toolkit.astro.mjs');
const _page4 = () => import('./pages/api/section2/lang.astro.mjs');
const _page5 = () => import('./pages/contact.astro.mjs');
const _page6 = () => import('./pages/gr/about.astro.mjs');
const _page7 = () => import('./pages/gr/contact.astro.mjs');
const _page8 = () => import('./pages/gr/projects.astro.mjs');
const _page9 = () => import('./pages/gr.astro.mjs');
const _page10 = () => import('./pages/projects.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/api/about/current.ts", _page2],
    ["src/pages/api/about/toolkit.ts", _page3],
    ["src/pages/api/section2/lang.ts", _page4],
    ["src/pages/contact.astro", _page5],
    ["src/pages/gr/about.astro", _page6],
    ["src/pages/gr/contact.astro", _page7],
    ["src/pages/gr/projects.astro", _page8],
    ["src/pages/gr/index.astro", _page9],
    ["src/pages/projects.astro", _page10],
    ["src/pages/index.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "5cd7b43b-0e9a-43cd-9cd8-c6afa2a0459d",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
