import request from '@/utils/request'

/**
 * 获取帖子列表数据
 */
export const getTopicItems = data => {
    return request({
        url: '/topics',
        method: 'get',
        params: data
    })
}

// // 获取用户详情数据
// export const getUserByName = loginname => {
//     return request({
//       url: `/user/${loginname}`,
//       method: 'get'
//     })
//   }
  