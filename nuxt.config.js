const CompressionPlugin = require('compression-webpack-plugin');
const sitemap=require('./config/sitemap')
module.exports = {
    head: {
        title: '点滴人生-记录日常学习和生活的个人网站',
        titleTemplate: '%s',
        meta: [
            {charset: 'utf-8'},
            {'http-equiv': 'X-UA-Compatible',content:'IE=Edge, chrome=1'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no'},
            {hid: 'keywords', name: 'keywords', content: '个人博客，日常学习，生活记录'},
            {name: 'apple-mobile-web-app-capable', content: 'yes'},
            {name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent'},
            {name: 'mobile-web-app-capable', content: 'yes'},
            {hid: 'description', name: 'description', content:"人生是一场持续的修行，记录生活中的点滴，在前行中不断矫正方向，成为心中更加优秀的自己"}
        ],
        link: [
            {rel: 'shortcut icon', type: 'image/png', href: '//renserve.com/favicon.png'},
            { rel: 'apple-touch-icon-precomposed', href: '//renserve.com/favicon.png' },
            { rel: 'stylesheet', href: '//at.alicdn.com/t/font_2079289_r2fige13dde.css' },
                { rel: 'stylesheet', href: '//blog.renserve.com/patch.css' },
            { rel: 'dns-prefetch', href: '//renserve.com' },
            { rel: 'dns-prefetch', href: '//blog.renserve.com' },
        ],
<!-- Global site tag (gtag.js) - Google Analytics -->
        script: [
            /*{
                type: 'text/javascript',
                src: '//blog.renserve.com/gtag.js'
            },
            {
                type: 'text/javascript',
                src: 'https://www.googletagmanager.com/gtag/js?id=G-KJQ6N85P15'
            },
            {
                type: 'text/javascript',
                src: 'https://cdn.jsdelivr.net/npm/fingerprintjs2@2.1.4/fingerprint2.min.js'
            },*/
            {
                type: 'text/javascript',
                src: 'https://cdn.jsdelivr.net/npm/js-cookie@1.5.0/src/js.cookie.min.js'
            },
            {
                type: 'text/javascript',
                src: 'https://cdn.jsdelivr.net/npm/marked@0.7.0/marked.min.js'
            }
        ],
        noscript: [
            {
                innerHTML: 'This website requires JavaScript.'
            }
        ],
        __dangerouslyDisableSanitizers: ['script']
    },
    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#fff'},
    /*
    ** Global CSS
    */
    css: [
        {
            src: './assets/scss/index.scss',
            lang: 'sass'
        },
        'highlight.js/styles/github.css'
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        {
            src: '~/plugins/marked.js'
        },
        {
            src: '~/plugins/highlight.js'
        },
        {
            src: '~/plugins/gravatar.js'
        },
        {
            src: '~/plugins/filter.js'
        },
        {
            src: '~/plugins/global-component.js'
        },
        {
            src: '~/plugins/copy.js',
            ssr: false
        },
        {
            src: '~/plugins/vuex-persist.js',
            ssr: false
        }
    ],
    router: {
        base: '/'
    },
    /*
    ** Nuxt.js modules
    */
    /*pwa: {
        manifest: {
            name: "点滴人生-记录日常学习和生活的个人网站",
            short_name: "点滴人生",
            description: "人生是一场持续的修行，记录生活中的点滴，在前行中不断矫正方向，成为心中更加优秀的自己",
            background_color: "#FFFBF0",
            theme_color: "#FFFBF0",
            lang: "zh",
            start_url: ""
        }
    },*/
    modules: [
        ['cookie-universal-nuxt', { alias: 'cookies' }],
        '@nuxtjs/sitemap',
        // "@nuxtjs/pwa",
        ['@nuxtjs/google-analytics', {
            id: 'UA-192066659-3'
        }],
        '@nuxtjs/style-resources',
        [
            '@nuxtjs/component-cache',
            {
                max: 10000,
                maxAge: 1000 * 60 * 60
            }
        ],
    ],
    sitemap: sitemap,
    styleResources: {
        scss: ['./assets/scss/variables.scss', './assets/scss/mixin.scss']
    },
    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        /*analyze: true,
        assetFilter: function (assetFilename) {
            return assetFilename.endsWith('.js');
        },*/
        plugins: [
            new CompressionPlugin({
                test: /\.js$|\.html$|\.css/, // 匹配文件名
                threshold: 10240, // 对超过10kb的数据进行压缩
                deleteOriginalAssets: false // 是否删除原文件
            })
        
        ],
        babel: {
            plugins: process.env.NODE_ENV==='production'?["transform-remove-console"]:null
        },
        extend(config, ctx) {
            if(ctx.isClient){
                config.externals = {
                    'marked':'marked'
                }
                if (!ctx.isDev && process.env.STATIC_URL) {
                    config.output.publicPath = process.env.STATIC_URL
                }
            }
        }
    }
}
