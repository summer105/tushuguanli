import Vue from "vue"
import  Vuex from "vuex"
import chaxun from "@/store/chaxun"
import jiedu from "@/store/jiedu"
Vue.use(Vuex);

//为什么用const 常量  因为store不可以被改变
const store=new Vuex.Store({
  modules:{//引入子模块的  在核心模块中只放首页的状态逻辑
    chaxun,
    jiedu,
  },

  strict:true,//开启严格模式  唯一改变状态的方式是mutations  否则报错
  state:{//存状态  存的公共状态

  },
  mutations:{//唯一改变状态的方式  不支持异步

  },
  getters:{ //想当于计算属性   二次包装了state的状态

  },
  actions:{//异步行为 来改变状态  改变状态触发的也是mutations  缪忒神  支持异步

  },
  plugins:[logger()]  //加入插件 日志

})

export default store   //不可以被改变地址
//专门用于单页面应用 spa
