<template>
    <div class="themes">
        <div class="header" :style="{'background-image': 'url(' + themes.background + ')'}">
            <a @click="back" class="back">
                <i class="icon icon-left"></i>
            </a>
            {{themes.name}}
        </div>
        <div class="author">
            主编 <span v-for="editor in themes.editors">
                <img :src="editor.avatar" alt="" />
            </span>
        </div>
        <div class="list">
            <ul>
                <li v-for="item in themes.stories" :class="{'active': item.images}">
                    <a :href="'#/stories?id=' + item.id">
                        {{item.title}}
                        <img :src="item.images" v-if="item.images" alt="" />
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="es6">
    export default {
        data() {
            return {
                themes: ''
            }
        },
        methods: {
            back() {
                this.$router.go(-1)
            }
        },
        created() {
            let themes_id = this.$route.query.id

            this.$http.get(this.HOST + '/4/theme/' + themes_id).then((response) => {
                console.log(response.body)
                this.themes = response.body
            })
        }
    }
</script>

<style lang="less">
    .themes {
        transform: translate3d(0, 0, 0);
        &.move-enter-active, &.move-leave-active {
            transition: all .5s;
        }
        &.move-enter, &.move-leave-active {
            transform: translate3d(100%, 0, 0);
        }
        .header {
            position: relative;
            height: 45px;
            line-height: 45px;
            font-weight: bold;
            color: #fff;
            background-position: center;
            text-shadow: 0px 1px 2px rgba(0,0,0,0.3);
            .back {
                position: absolute;
                left: 15px;
                color: #fff;
                font-size: 18px;
            }
        }
        .author {
            height: 50px;
            line-height: 50px;
            padding: 0 15px;
            border-bottom: 1px solid #eaeaea;
            text-align: left;
            img {
                width: 25px;
                height: 25px;
                margin-left: 10px;
                border-radius: 50%;
                vertical-align: -7px;
            }
        }
        .list {
            ul {
                li {
                    position: relative;
                    height: 90px;
                    padding: 15px;
                    border-top: 1px solid #f5f5f5;
                    text-align: left;
                    line-height: 22px;
                    &.active {
                        padding-right: 110px;
                    }
                    &:first-child {
                        border-top: none;
                    }
                    img {
                        position: absolute;
                        right: 15px;
                        top: 15px;
                        width: 75px;
                        height: 60px;
                    }
                }
            }
        }
    }
</style>
