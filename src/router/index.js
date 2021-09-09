import Vue from 'vue'
import Router from 'vue-router'
import first from "@/components/first";

Vue.use(Router)


export default new Router({
    model: 'hash',
    routes: [
        {
            path: '/windGone',
            name: '',
            component: first
        }
    ]

})
