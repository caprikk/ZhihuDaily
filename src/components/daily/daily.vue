<template>
    <transition name="move">
        <div class="container" :class="{'active': ismove}">
            <div class="header">
                <topstories :topstories="topstories"></topstories>
                <i class="icon icon-bar" @click="showSidebar"></i>
            </div>
            <list :stories="stories"></list>
            <sidebar :showflag="showFlag"></sidebar>
        </div>
    </transition>
</template>

<script type="es6">
    import topstories from 'components/topstories/topstories'
    import list from 'components/list/list'
    import sidebar from 'components/sidebar/sidebar'

    export default {
        data() {
            return {
                stories: [],
                topstories: [],
                showFlag: false
            }
        },
        methods: {
            showSidebar() {
                this.showFlag = !this.showFlag
            }
        },
        computed: {
            ismove() {
                if (this.showFlag)
                {
                    return true
                }
            }
        },
        created() {
            this.$http.get(this.HOST + '4/news/latest').then((response) => {
                console.log(response.body)
                this.stories = response.body.stories
                this.topstories = response.body.top_stories
            })
        },
        components: {
            topstories,
            list,
            sidebar
        }
    }
</script>

<style lang="less">
    .container {
        position: relative;
        left: 0;
        transition: all 0.5s;
        &.active {
            left: 230px;
        }
    }
    .header {
        position: relative;
        .icon-bar {
            position: absolute;
            z-index: 2;
            left: 15px;
            top: 15px;
            color: #fff;
            font-size: 24px;
        }
    }
</style>
