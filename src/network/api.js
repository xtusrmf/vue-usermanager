
import axios from 'axios'
// export const doget = function () {
//     axios.get("http://39.106.80.247:9099/api/domain/onedm/",{params:{page:2}}).then(res =>console.log("data:".res.data))
//         .catch(err => console.log("获取数据失败"))
// }
// 两个写法
//方法一
function domainget(config,success,fiald) {
    const instace = axios.create({
        // baseURL:"http://jsonplaceholder.typicode.com",
        baseURL:"http://39.106.80.247:9099/api/domain/onedm",
        timeout:5000
    })
    instace(config).then(res =>{success(res)})
        .catch(err => {fiald(err)})
}
//方法二
function GetDomain(config){
    const instace = axios.create({
        baseURL:"http://39.106.80.247:9099/api/domain/onedm",
        timeout:5000
    })
    return instace(config)
}



const apiconfig = "http://www.baidu.com"

export {domainget,GetDomain,apiconfig}