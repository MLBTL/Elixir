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
	request(options = {}) {
		options.url = this.common.baseUrl + options.url;
		options.data = option.data || this.common.data;
		options.header = option.header || this.common.header;
		options.method = option.method || this.common.method;
		options.dataType = option.dataType || this.common.dataType;
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