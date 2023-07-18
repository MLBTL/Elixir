const config = {
	baseUrl: "http://159.75.184.56",
	header: {
		"Content-Type": "application/json",
	}
}

const request = async <T>(options : UniApp.RequestOptions) : Promise<T> => {
	const { url, ...rest } = options || {}

	const finalOptions = Object.assign({}, config, rest, { url: config.baseUrl + url })

	return new Promise((resolve, reject) => {
		uni.request({
			...finalOptions,
			success: (res) => {
				if (res.statusCode === 200) {
					const { code, data, msg } = res.data as any
					if (code === 200)
						resolve(data)
					else reject(msg)
				} else {
					reject(res)
				}
			},
			fail(err) {
				reject('uniRequestFail' + err)
			}
		})
	})
}

export default {
	get: async <T>(url : string, option ?: Omit<UniApp.RequestOptions, 'url'>) => {
		try {
			const res = await request<T>({ url, method: 'GET', ...option })
			return res
		} catch (err) {
			console.log('请求失败', err)
			throw err
		}
	},
	post: async <T>(url : string, option ?: Omit<UniApp.RequestOptions, 'url'>) => {
		try {
			const res = await request<T>({ url, method: 'POST', ...option })
			return res
		} catch (err) {
			console.log('请求失败', err)
			throw err
		}
	},
	delete: async <T>(url : string, option ?: Omit<UniApp.RequestOptions, 'url'>) => {
		try {
			const res = await request<T>({ url, method: 'DELETE', ...option })
			return res
		} catch (err) {
			console.log('请求失败', err)
			throw err
		}
	},
	put: async <T>(url : string, option ?: Omit<UniApp.RequestOptions, 'url'>) => {
		try {
			const res = await request<T>({ url, method: 'PUT', ...option })
			return res
		} catch (err) {
			console.log('请求失败', err)
			throw err
		}
	}
}