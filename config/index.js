const Config = {
  // /api
  baseUrl: process.env.NODE_ENV === 'production' ? 'https://blog.renserve.com/api' : 'http://127.0.0.1:5000',
  // staticPath: '//blog.renserve.com/upload/'
}
export default Config
