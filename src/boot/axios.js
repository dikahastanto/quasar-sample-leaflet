import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://192.168.1.21:5100'
})
export default async ({ Vue }) => {
  Vue.prototype.$axios = axiosInstance
}
export { axiosInstance }
