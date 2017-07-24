<template>
    <div class="topstories">
        <h1>今日热闻</h1>
        <swiper :options="swiperOption"  ref="mySwiper">
            <!-- 这部分放你要渲染的那些内容 -->
            <swiper-slide v-for="(item, index) in topstories" :key="index">
                <div class="bg" :style="{'background-image': 'url(' + item.image + ')'}"></div>
                <div class="img-mask"></div>
                <h2><a :href="'#/stories?id=' + item.id">{{item.title}}</a></h2>
            </swiper-slide>
            <!-- 这是轮播的小圆点 -->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script type="es6">
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    props: {
        topstories: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            swiperOption: {
            // 是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                notNextTick: true,
                pagination: '.swiper-pagination',
                autoplay: 200,
                slidesPerView: 'auto',
                centeredSlides: true,
                paginationClickable: true,
                spaceBetween: 0,
                onSlideChangeEnd: swiper => {
                    // 这个位置放swiper的回调方法
                    this.page = swiper.realIndex + 1
                    this.index = swiper.realIndex
                }
            }
        }
    },
    created() {
    },
    methods: {
        onSlideChangeStart(currentPage) {
            console.log('onSlideChangeStart', currentPage)
        },
        onSlideChangeEnd(currentPage) {
            console.log('onSlideChangeEnd', currentPage)
        }
    },
    computed: {
        // 定义这个sweiper对象
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    },
    mounted() {
        // 这边就可以使用swiper这个对象去使用swiper官网中的那些方法
        this.swiper.slideTo(0, 0, false)
    },
    components: {
        swiper,
        swiperSlide
    }
}
</script>

<style lang="less">
    .topstories {
        position: relative;
        z-index: 1;
        h1 {
            position: absolute;
            left: 0;
            top: 20px;
            z-index: 2;
            width: 100%;
            color: #fff;
            font-weight: 700;
        }
        h2 {
            position: absolute;
            bottom: 5px;
            padding: 20px 15px;
            color: #fff;
            text-align: left;
            font-size: 18px;
            font-weight: bold;
            line-height: 1.2em;
            text-shadow: 0px 1px 2px rgba(0,0,0,0.3);
        }
        .swiper-slide {
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
            a {
                color: #fff;
            }
        }
        .swiper-pagination-bullet {
            background: #818183;
        }
        .swiper-pagination-bullet-active {
            background: #fff;
        }
        .swiper-pagination {
            bottom: 5px;
        }
    }
</style>
