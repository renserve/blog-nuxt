import defaultCover from '@/assets/image/home_our.jpg'
// 'http://39.97.237.177/upload/assets/2020/08/12/3acf20c0-1a8b-4a35-a6e3-8e63e90bb083.jpg'
export default {
    title:'Journey',
    signature:'#&nbsp;惟有文字&nbsp;长情陪伴&nbsp;#',
    githubLink:'javascript:void(0);',
    emailLink:'javascript:void(0);',
    copyright:'© 2020 Journey All Right Reserved.',
    link:'//blog.renserve.com/',
    record:'',
    defaultStar:{
        id: 0,
        title: '空',
        category: {
            id: 0,
            name: '空'
        },
        authors: [
            {
                id: 0,
                name: 'Our'
            }
        ],
        create_time: Date.now(),
        cover: defaultCover
    }
}
