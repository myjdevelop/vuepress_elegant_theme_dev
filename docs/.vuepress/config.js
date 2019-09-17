module.exports = {
    base: '/', //部署站点的基础路径，如果你想让你的网站部署到一个子路径下，你将需要设置它。如 Github pages，如果你想将你的网站部署到 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/"，它的值应当总是以斜杠开始，并以斜杠结束。
    dest: './dist',

    title: '毛远俊',
    description: '书山有路勤为径，学海无涯苦作舟。', //网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中,还显示在首页的文章列表上面
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

        // 作者
        author: '毛远俊',
        // 头像地址
        avatar: '/avatar.jpeg',
        // 邮箱
        email: 'myjdevelop@gmail.com',

        titleBg: 'https://api.myjxuexi.com/resource/img/blog/title_bg.png',


        pagination: '5', //每一页显示的文章个数


        // 头像背景图片地址
        // brand: '/brand.jpg',

        github: 'https://github.com/zhhlwd', //点击github跳转的地址

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
