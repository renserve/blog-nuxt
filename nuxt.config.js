const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    head: {
        title: '点滴人生',
        titleTemplate: '%s',
        meta: [
            {charset: 'utf-8'},
            {'http-equiv': 'cleartype', content: 'on'},
            {'http-equiv': 'Cache-Control'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no'},
            {hid: 'keywords', name: 'keywords', content: '前端，JavaScript，博客，Node，Vue'},
            {name: 'author', content: '1249485588@qq.com'},
            {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: './favicon.ico'},
            { rel: 'stylesheet', href: '//at.alicdn.com/t/font_2079289_r2fige13dde.css' },
            { rel: 'dns-prefetch', href: '//blog.renserve.com' },
        ],
        script: [
            {
                type: 'text/javascript',
                src: 'https://cdnjs.cloudflare.com/ajax/libs/js-cookie/1.5.0/js.cookie.min.js'
            },
            {
                type: 'text/javascript',
                src: 'https://cdnjs.cloudflare.com/ajax/libs/marked/0.7.0/marked.min.js'
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
    modules: [
        '@nuxtjs/pwa',
        '@nuxtjs/style-resources',
        [
            '@nuxtjs/component-cache',
            {
                max: 10000,
                maxAge: 1000 * 60 * 60
            }
        ],
    ],
    
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
            }
        }
    }
}
