module.exports = {
    // 部署站点的基础路径
    base: '/',
    // build命令生成的打包文件
    dest: './dist',
    // 网站的标题
    title: '前端博客乐园',
    // 网站的描述
    description: '书山有路勤为径，学海无涯苦作舟。',
    // head头部信息
    head: [
        [
            'link',
            {
                rel: 'shortcut icon',
                href: '/favicon.ico'
            }
        ]
    ],

    theme: 'elegant',

    markdown: {
        lineNumbers: true //是否开启文章代码左边的行号显示
    },

    themeConfig: {

        placeholder: '搜搜看', //搜索框的默认文章

        searchReply: '什么都没搜到，试一下其它搜索词~',

        // 古典：classical；活泼：lively；深沉：deep；清新：fresh
        style: 'fresh',

        // 作者
        author: '毛远俊',
        // 头像地址
        avatar: '/avatar.jpeg',
        // 邮箱
        email: 'myjdevelop@gmail.com',

        titleBg: 'https://api.myjxuexi.com/resource/img/blog/title_bg.png',

        pagination: '5', //每一页显示的文章个数

        github: 'https://github.com/maoyuanjun', //点击github跳转的地址

        menus: {
            //侧边栏的文字
            tags: '标签分类',
            home: '主页',
            all: '时间归档',
            github: 'Github',
            about: '自我介绍'
        }
    }
};
