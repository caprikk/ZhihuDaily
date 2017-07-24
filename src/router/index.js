import Vue from 'vue'
import Router from 'vue-router'
import Daily from 'components/daily/daily'
import Stories from 'components/stories/stories'
import Themes from 'components/themes/themes'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Daily',
            component: Daily
        },
        {
            path: '/stories',
            name: 'stories',
            component: Stories
        },
        {
            path: '/themes',
            name: 'themes',
            component: Themes
        }
    ]
})
