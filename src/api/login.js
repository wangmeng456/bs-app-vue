import request from '@/utils/request'

/**
 * description
 * @param {*} 
 */
export function category() {
    return request({
        url: '/monitor/xtysys/app/category/list',
        method: 'get'
    })
}