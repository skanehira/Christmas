import top from '../components/top/top.vue'
import about from '../components/about/about.vue'
import garden from '../components/garden/garden.vue'

export default [
    {path: '/', component: top},
    {path: '/top', component: top},
    {path: '/about', component: about},
    {path: '/garden', component: garden}
]
