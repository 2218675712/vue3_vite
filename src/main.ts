import {createApp} from 'vue'
import App from './App.vue'
import {router} from './route'
import store from './store'
import axios from './utils/axios'

const app = createApp(App)

app.use(router)
app.use(store)
//全局配置
app.config.globalProperties.$http=axios

app.mount('#app')
