module.exports = {
  title: "Laravel",
  description: "Introducción al Framework",

  plugins: [
    "@vuepress/back-to-top",
    "@vuepress/nprogress",
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    [
      "@vuepress/google-analytics",
      {
        ga: "",
      },
    ],
    [
      "container",
      {
        type: "vue",
        before: '<pre class="vue-container"><code>',
        after: "</code></pre>",
      },
    ],
    [
      "sitemap",
      {
        hostname: "https://laravel-doc.netlify.app",
      },
    ],
    [
      "vuepress-plugin-medium-zoom",
      {
        selector: ".content__default img",
        delay: 1000,
        options: {
          margin: 24,
          background: "rgba(0,0,0, .60)",
          scrollOffset: 0,
        },
      },
    ],
  ],

  markdown: {
    lineNumbers: true,
  },

  head: [
    [
      "link",
      {
        href:
          "https://fonts.googleapis.com/css?family=Nunito:100,300,400,500,600,700",
        rel: "stylesheet",
        type: "text/css",
      },
    ],
    [
      "link",
      {
        rel: "manifest",
        href: "/manifest.json",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        href: "/icon.png",
      },
    ],
  ],

  themeConfig: {
    logo: "/assets/img/logo-small.png",
    repo: "sabid/ruta-de-transformacion-digital",
    docsRepo: "contacto@negociosonline.net",
    docsBranch: "master",
    editLinks: false,
    editLinkText: "Tienes consultas escríbenos contacto@negociosonline.net",
    displayAllHeaders: false,
    sidebarDepth: 0,
    algolia: {
      apiKey: "",
      indexName: "",
      algoliaOptions: { facetFilters: ["version:1.0"] },
    },

    nav: [
      {
        text: "Version",
        link: "/",
        items: [
          { text: "1.0", link: "/1.0/" },
          // {text: 'LE 3.0', link: '/3.0/'},
          // {text: 'LE 2.1', link: '/2.1/', divider: true},
          //{text: 'CSV 1.0', link: '/csv/1.0/', divider: true},
          // {text: 'Nova 1.1', link: '/nova/1.1/'},
          // {text: 'Nova 1.0', link: '/nova/1.0/'},
        ],
      },
    ],

    sidebar: {
      "/1.0/": require("./1.0"),
      //'/csv/1.0/': require('./csv/1.0'),
    },
  },
};
