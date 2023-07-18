import request from '@/common/request'

export const testApi = () => {
	return request.get('/biz/commodity/tree')
}