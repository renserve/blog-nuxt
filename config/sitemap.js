const axios=require('axios')
const baseUrl='https://blog.renserve.com/api'
const hostname='https://blog.renserve.com/'
// const hostname='http://127.0.0.1:5100/'
module.exports= {
    path: '/sitemap.xml', // sitemap文件名，不用改
        hostname: hostname, // 网址
        cacheTime: 1000 * 60 * 60 * 24, // 更新频率，只在 generate: false有用
        gzip: true, // 生成 .xml.gz 压缩的 sitemap
        generate: false, // 允许使用 nuxt generate 生成
        // 排除不要页面
        exclude: [
        '/404',
        '/login',
    ],
    // 页面路由
    routes (callback) {
        axios.all([
            // blog 标签
            axios.get(`${baseUrl}/web/article/classify/tag?modelId=1`),
            // 归档,10条
            axios.get(`${baseUrl}/web/article/article?page=0&count=10&isFront=false&modelId=1&archive=1`)
        ]).then(axios.spread((tags,articles)=> {
            let now = new Date();
            now.setHours(now.getHours(), now.getMinutes() - now.getTimezoneOffset());
            let indexRoutes = [
                {
                    url: '/',
                    changefreq: 'daily',
                    priority: 1,
                    lastmodISO: now.toISOString()
                },
                {
                    url: '/mood',
                    changefreq: 'daily',
                    priority: 1,
                    lastmodISO: now.toISOString()
                },
                {
                    url: '/sitemap',
                    changefreq: 'daily',
                    priority: 1,
                    lastmodISO: now.toISOString()
                },
                {
                    url: '/archive',
                    changefreq: 'daily',
                    priority: 1,
                    lastmodISO: now.toISOString()
                },
                {
                    url: '/about',
                    changefreq: 'daily',
                    priority: 1,
                    lastmodISO: now.toISOString()
                },
                {
                    url: '/messages',
                    changefreq: 'daily',
                    priority: 1,
                    lastmodISO: now.toISOString()
                }
            ],tagRoutes=[],articleRoutes=[];
            articles.data.rows.map(article => {
                articleRoutes.push({
                    url:`/article/${article.id}`,
                    changefreq: 'daily',
                    priority: 1,
                    lastmodISO: new Date(article.create_time).toISOString()
                })
            });
            tags.data.map(tag => {
                if (tag.categories.length) {
                    tag.categories.map(category=>{
                        tagRoutes.push({
                            url:`/category/${category.id}/${tag.id}`,
                            changefreq: 'daily',
                            priority:1,
                            lastmodISO: now.toISOString()
                        });
                        tagRoutes.push({
                            url:`/category/${category.id}/${tag.id}?type=mood`,
                            changefreq: 'daily',
                            priority: 1,
                            lastmodISO: now.toISOString()
                        });
                    });
                }else {
                    tagRoutes.push({
                        url:`/tag/${tag.id}`,
                        changefreq: 'daily',
                        priority: 1,
                        lastmodISO: now.toISOString()
                    });
                    tagRoutes.push({
                        url:`/tag/${tag.id}?type=mood`,
                        changefreq: 'daily',
                        priority: 1,
                        lastmodISO: now.toISOString()
                    });
                }
            });
            // 用 concat 進行合併
            callback(null, indexRoutes.concat(articleRoutes, tagRoutes));
        }), function (err) {
            throw (err);
        });
    }
}
