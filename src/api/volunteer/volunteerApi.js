import request from '@/utils/request'

export default {

    /**
   * 发送查看所有学生志愿服务时长列表请求
   * @param {*} param 
   * @returns 
   */
 getList(param) {
    //   返回请求 
      return request({
        url: '/api/volunteer/selectListAll',
        method: 'post',
        data: param
      })
    },
}
