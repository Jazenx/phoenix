import axios from 'axios'
import { CODE } from '../constants/HttpCode'

// 创建axios实例
const instance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 1000,
  headers: { phoenix: 'phoenix' }
})

instance.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded'

instance.interceptors.request.use(
  config => {
    // TODO 设置token的处理
    // const token = store.state.token
    // token && (config.headers.Authorization = token)
    return config
  },
  error => console.log(error)
)

instance.interceptors.response.use(
  // 请求成功
  res => (res.status === 200 ? Promise.resolve(res) : Promise.reject(res)),
  // 请求失败
  error => {
    console.log(error)
    const { response } = error
    if (response) {
      // 请求已发出，但是不在2xx的范围
      handleHttpStatusCode(response.status, response.data.message)
      return Promise.reject(response)
    } else {
      // 处理断网的情况
      // eg:请求超时或断网时，更新state的network状态
      // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
      // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
      if (!window.navigator.onLine) {
        // TODO 断网处理
      }
    }
  }
)

const handleHttpStatusCode = (status: number, message: string) => {
  switch (status) {
    case 404:
      console.log(CODE.HTTP_400)
      console.log(message)
      break
    default:
      break
  }
}

export default instance
