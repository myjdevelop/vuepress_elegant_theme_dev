<template>
    <div class="about-container">
        <div class="about-header-container">
            <div class="header-avatar-wrap">
                <img :src="$withBase($themeConfig.avatar || '')">
            </div>
        </div>

        <div class="about-content-container">
            <div class="content-intro-wrap">
                <p>我是一名前端开发程序员，这是我的个人简介我是一名前端开发程序员，
                    这是我的个人简介我是一名前端开发程序员，这是我的个人简介我是一名前端开发程序员，
                    这是我的个人简介我是一名前端开发程序员，这是我的个人简介我是一名前端开发程序员，
                    这是我的个人简介我是一名前端开发程序员，这是我的个人简介我是一名前端开发程序员，
                    这是我的个人简介我是一名前端开发程序员，这是我的个人简介我是一名前端开发程序员，
                    这是我的个人简介我是一名前端开发程序员，这是我的个人简介我是一名前端开发程序员，
                    这是我的个人简介我是一名前端开发程序员，这是我的个人简介我是一名前端开发程序员，
                    这是我的个人简介我是一名前端开发程序员，这是我的个人简介我是一名前端开发程序员，
                    这是我的个人简介我是一名前端开发程序员，这是我的个人简介我是一名前端开发程序员，
                    这是我的个人简介我是一名前端开发程序员，这是我的个人简介我是一名前端开发程序员，
                    这是我的个人简介我是一名前端开发程序员，这是我的个人简介我是一名前端开发程序员，
                    这是我的个人简介我是一名前端开发程序员，这是我的个人简介我是一名前端开发程序员，
                    这是我的个人简介
                </p>
            </div>
        </div>

        <div class="about-footer-container">
            <div class="footer-item">
                <div class="item-img">
                    <img :src="$withBase('/wx_group_qrcode.png')" />
                </div>
                <div class="item-text">
                    <span>前端技术微信交流群</span>
                </div>
            </div>
            <div class="footer-item">
                <div class="item-img">
                    <img :src="$withBase('/wx_qrcode.jpg')" />
                </div>
                <div class="item-text">
                    <span>微信技术交流公众号</span>
                </div>
            </div>
            <div class="footer-item">
                <div class="item-img">
                    <img :src="$withBase('/wxmin_ai_qrcode.jpg')" />
                </div>
                <div class="item-text">
                    <span>作品：一起来学AI</span>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "AboutComponent"
    }
</script>

<style lang="scss" scoped>

    .about-container {
        height: auto;
        display: flex;
        flex-direction: column;
    }

    .about-header-container {
        display: flex;
        align-items: center;
        height: 80px;
        padding: 5px;
        border-bottom: 1px solid #ebeef5;
    }

    .header-avatar-wrap {
        width: 70px;
        height: 70px;
    }

    .about-content-container {
        display: flex;
        margin-top: 10px;
        border-left: 5px solid blue;
        background-color: #000000;
        opacity: .7;
    }

    .content-intro-wrap {
        color: white;
        padding: 5px 15px;
        p {
            margin-top: 10px;
            line-height: 30px;
        }
    }

    .about-footer-container {
        margin-top: 10px;
        display: flex;
        padding: 10px 5px;
        border-top: 1px solid #ebeef5;
        flex-wrap: nowrap;
        overflow: auto;
    }

    .footer-item {
        width: 160px;
        height: 180px;
        border: 1px solid #ebeef5;
        display: flex;
        flex-direction: column;
        .item-img {
            width: 150px;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                width: 150px;
                height: 150px;
            }
        }

        .item-text {
            font-size: 14px;
            color: #6d5a59;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-top: 1px solid #ebeef5;
        }

    }

    .footer-item:not(:first-child) {
        margin-left: 20px;
    }

    @media only screen and (max-width: 767px) {
        .about-container {
            border: 1px solid red;
        }
    }



</style>