interface OptionsVO {
	url : string,
	data ?: any,
	header ?: any,
	method ?: string,
	dataType ?: string
}

export default {
	// 参数
	common: {
		baseUrl: "http://159.75.184.56:8080",
		data: {},
		header: {
			"Content-Type": "application/json",
			"Content-Type": "application/x-www-form-urlencoded"
		},
		method: "GET",
		dataType: "json"
	},

	// 请求
	request(options : OptionsVO) {
		options.url = this.common.baseUrl + options.url;
		options.data = options.data || this.common.data;
		options.header = options.header || this.common.header;
		options.method = options.method || this.common.method;
		options.dataType = options.dataType || this.common.dataType;
		return new Promise((res, req) => {
			uni.request({
				url: options.url,
				data: options.data,
				header: options.header,
				method: options.method,
				dataType: options.dataType,
				success(result) {
					// 状态码200的情况
					if (result.statusCode != 200) {
						return req()
					}
					let data = result.data.data;
					res(data)
				},
				fail(req) {
					return req(req)
				}
			})
		})
	}
}