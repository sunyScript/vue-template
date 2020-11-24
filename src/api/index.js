import request from '@/utils/request'
import qs from 'qs'

export default {
	getList: (params) => request({url: '/cloud/uploadToCloudDisk', data: qs.stringify(params)})
}
