import axios from 'axios';

//创建axios实例
const userAxios = axios.create({
  baseURL:"https://api.github.com",
  timeout:15000
})

//配置拦截器

userAxios.interceptors.request.use(function(config){
  return config;
},function (error) {
  return Promise.reject(error);
});

userAxios.interceptors.response.use(function (response) {
  return response.data;
},function (error) {
  return Promise.reject(error)
});

export default userAxios