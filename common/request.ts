const config = {
	baseUrl: "http://159.75.184.56",
	header: {
		"Content-Type": "application/json",
	}
}

// 定义了一个名为request的异步函数，它接受一个类型为UniApp.RequestOptions的参数，返回一个Promise对象，这个对象的类型是T(泛值)。
const request = async <T>(options : UniApp.RequestOptions) : Promise<T> => {

	// 从options参数中解构出url和其他属性，并将它们与config对象和baseUrl进行合并，得到最终的请求选项finalOptions。
	const { url, ...rest } = options || {}
	console.log(options)

	const finalOptions = Object.assign({}, config, rest, { url: config.baseUrl + url })
	console.log(finalOptions)

	return new Promise((resolve, reject) => {
		uni.request({
			...finalOptions,
			success: (res) => {
				console.log(res)
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
				console.log(err)
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