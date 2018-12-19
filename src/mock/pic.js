const Mock = require('mockjs')

const Random = Mock.Random

const produceData = (opt) => {
  console.log('opt', opt)
  let articles = []
  for (let i = 0; i < 30; i++) { // 定义假数据生成规则
    let newArticleObject = {
      id: '@id',
      title: Random.csentence(5, 30), // Random.csentence( min , max )
      thumbnail_pic_s: Random.dataImage('200x100', '图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      data: Random.date() + ' ' + Random.time(), // Random.date() 指示生成的日期字符串格式,默认为yyyy-MM-dd； Random.time() 返回一个随机的时间字符串
      email: Random.email(),
      name: Random.cname()
    }
    articles.push(newArticleObject)
  }
  return {
    data: articles
  }
}

Mock.mock('/api/article', /post|get/i, produceData) // 当post或get请求到/new路由时Mock会拦截请求并返回

Mock.mock('/api/pic', /post|get/i, {
  'data|4-8': [
    {
      id: '@id',
      title: '@title',
      namespace: 'desctab',
      content: '@paragraph',
      isPublish: '@boolean',
      createTime: '@datetime',
      'fileList|1-10': [{
        name: '@integer(1,960)',
        uid: '-@name',
        url: 'https://picsum.photos/400/800/?@name',
        status: 'done'
      }]
    }
  ]
})
