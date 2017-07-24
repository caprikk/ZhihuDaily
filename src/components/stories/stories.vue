<template>
    <div class="stories">
        <div class="stories-wrapper">
            <div class="headline">
                <h1>{{stories.title}}</h1>
                <div class="img">
                    <div class="bg" :style="{'background-image': 'url(' + stories.image + ')'}"></div>
                    <div class="img-mask"></div>
                </div>
            </div>
            <div class="content" v-html="stories.body">
            </div>
            <div class="control-bar">
                <a @click="back">
                    <i class="icon icon-left"></i>
                </a>
                <a href="">
                    <i class="icon icon-down"></i>
                </a>
                <a href="">
                    <i class="icon icon-good"></i>
                </a>
                <a href="">
                    <i class="icon icon-share"></i>
                </a>
                <a href="">
                    <i class="icon icon-comment"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script type="es6">
    export default {
        data() {
            return {
                stories: ''
            }
        },
        created() {
            let stories_id = this.$route.query.id

            this.$http.get(this.HOST + '/4/news/' + stories_id).then((response) => {
                console.log(response.body)
                this.stories = response.body
            })
        },
        methods: {
            back() {
                console.log(this.$route)
                this.$router.go(-1)
            }
        }
    }
</script>

<style lang="less">
    .stories {
        transform: translate3d(0, 0, 0);
        &.move-enter-active, &.move-leave-active {
            transition: all .5s;
        }
        &.move-enter, &.move-leave-active {
            transform: translate3d(100%, 0, 0);
        }
        .headline-background {
            display: none;
        }
        .headline {
            position: relative;
            h1 {
                position: absolute;
                bottom: 5px;
                z-index: 1;
                padding: 20px 15px;
                color: #fff;
                text-align: left;
                font-size: 21px;
                font-weight: bold;
                line-height: 1.2em;
                text-shadow: 0px 1px 2px rgba(0,0,0,0.3);
            }
            .img {
                .bg {
                    width: 100%;
                    height: 210px;
                    background-position: center;
                    background-size: 100%
                }
                .img-mask {
                    position: absolute;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(to bottom, rgba(0,0,0,0) 25%,rgba(0,0,0,0.6) 100%);
                }
            }
        }
        .question {
            padding: 5px 20px;
            line-height: 1.6em;
            font-size: 16px;
            text-align: left;
            .question-title {
                margin: 20px 0;
                font-size: 20px;
                color: #222;
                line-height: 1.4em
            }
            .meta {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 16px;
                color: #b8b8b8;
                img {
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    margin-right: 5px;
                    border-radius: 2px;
                    vertical-align: middle;
                }
                span {
                    vertical-align: middle;
                }
                .author {
                    color: #444;
                }
                .bio {
                    color: #999;
                }
            }
            .content {
                p {
                    margin: 20px 0;
                }
                img {
                    display: block;
                    width: 100%;
                    margin: 10px 0;
                }
            }
        }
        .control-bar {
            position: sticky;
            bottom: 0;
            display: flex;
            width: 100%;
            height: 43px;
            background: #fff;
            border-top: 1px solid #f3f3f3;
            transform: translateZ(0);
            -webkit-transform: translateZ(0);
            a {
                flex: 1;
                line-height: 43px;
                font-size: 18px;
            }
        }
    }
</style>
