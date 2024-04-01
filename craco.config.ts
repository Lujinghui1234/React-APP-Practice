const path = require("path") as any//导入path模块
//定义函数resolve,将你想要自定义的路径和js的根路劲作拼接
const resolve = (dir:string) =>path.resolve(__dirname,dir)

const craco = {
    webpack:{
      alias:{
      //名称:路径
        "~":resolve("src")
      }
    }
  };

export default craco;