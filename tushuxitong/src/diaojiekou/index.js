import axios from 'axios'
axios.defaults.baseURL='/static/mock/'  //设置一个公共的路径  在调数据的话直接拼接

axios.interceptors.response.use((data)=>{  //设置响应拦截器
  //data是响应回来的数据  处理响应回来的数据
  return data.data
})
//导出
