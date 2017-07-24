<template>
    <transition name="move">
        <div class="sidebar-wrapper" ref="sidebarWrapper" v-show="showflag">
            <div class="sidebar">
                <div class="controller">
                    <a href=""><i class="icon icon-favor"></i> 收藏</a>
                    <a href=""><i class="icon icon-bell"></i> 消息</a>
                    <a href=""><i class="icon icon-setting"></i> 设置</a>
                </div>
                <ul>
                    <li>
                        <a class="active"><i class="icon icon-home"></i> 首页</a>
                    </li>
                    <li v-for="item in themes">
                        <a :href="'#/themes?id=' + item.id">{{item.name}} <span>+</span></a>
                    </li>
                </ul>
            </div>
        </div>
    </transition>
</template>

<script type="es6">
    import BScroll from 'better-scroll'

    export default {
        props: {
            showflag: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                themes: []
            }
        },
        methods: {
            _initScroll() {
                this.menuScroll = new BScroll(this.$refs.sidebarWrapper, {
                    click: true
                })
            }
        },
        created() {
            this.$http.get(this.HOST + '4/themes').then((response) => {
                console.log(response.body)
                this.themes = response.body.others
                this.$nextTick(() => {
                    this._initScroll()
                })
            })
        }
    }
</script>

<style lang="less">
    .sidebar-wrapper {
        position: fixed;
        left: 0;
        top: 0;
        bottom:0;
        z-index: 9999;
        width: 230px;
        background: #262932;
        color: #fff;
        &.move-enter-active, &.move-leave-active {
            transition: all 0.5s;
        }
        &.move-enter, &.move-leave-active {
            left: -230px;
        }
        .controller {
            height: 50px;
            line-height: 50px;
            padding: 0 20px;
            a {
                float: left;
                display: block;
                margin-right: 10px;
                color: #7e8c8d;
                text-align: left;
                font-size: 14px;
            }
        }
        ul {
            li {
                height: 50px;
                line-height: 50px;
                text-align: left;
                a {
                    position: relative;
                    display: block;
                    padding:0 20px;
                    &.active {
                        background: #1f222b;
                        color: #fff;
                    }
                    span {
                        position: absolute;
                        right: 20px;
                        top: 0;
                        font-size: 20px;
                    }
                }
            }
        }
    }
</style>
