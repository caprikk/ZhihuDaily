<template>
    <div class="stories-list">
        <ul>
            <li v-for="item in stories">
                <a :href="'#/stories?id=' + item.id">
                    <h2>{{item.title}}</h2>
                    <img :src="item.images" width="70px" height="60px;" />
                </a>
            </li>
        </ul>
    </div>
</template>

<script type="es6">
    export default {
        props: {
            stories: {
                type: Array,
                default: []
            }
        }
    }
</script>

<style lang="less">
    .stories-list {
        ul {
            li {
                position: relative;
                padding: 15px 100px 15px 15px;
                min-height: 90px;
                text-align: left;
                border-top: 1px solid #f5f5f5;
                &:first-child {
                    border-top: none;
                }
                a {
                    display: block;
                    min-height: 60px;
                    color: #333333;
                }
                h2 {
                    line-height: 24px;
                }
                img {
                    position: absolute;
                    right: 15px;
                    top: 15px;
                    border-radius: 2px;
                }
            }
        }
    }
</style>
