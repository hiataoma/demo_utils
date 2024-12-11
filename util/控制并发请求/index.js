import axios from 'axios'

export const handQueue = (
  reqs // 请求总数
) => {
  reqs = reqs || []
  
  /**
   * 创建一个请求队列，控制并发数
   *
   * @param {number} [concurrency=6] - 最大并发数，默认为6
   * @returns {function} - 一个函数，用于将请求添加到队列中
   */
  const requestQueue = (concurrency) => {
    concurrency = concurrency || 6 // 最大并发数
    const queue = [] // 请求池
    let current = 0

    const dequeue = () => {
      while (current < concurrency && queue.length) {
        current++;
        const requestPromiseFactory = queue.shift() // 出列
        requestPromiseFactory()
          .then(() => { // 成功的请求逻辑
          })
          .catch(error => { // 失败
            console.log(error)
          })
          .finally(() => {
            current--
            dequeue()
          });
      }

    }

    return (requestPromiseFactory) => {
      queue.push(requestPromiseFactory) // 入队
      dequeue()
    }

  }

  const enqueue = requestQueue(6)

  for (let i = 0; i < reqs.length; i++) {
    // 循环请求接口

    enqueue(() => axios.get('/api/test' + i))
  }
}

// 控制请求请求个数 