// web-worker 设置
// module.exports = {
//     publicPath: './',
  
//     chainWebpack: config => {  
//       config.module  
//          .rule('worker')  
//         .test(/\.worker\.js$/)  // 如果需要.worker.js后缀
//         .use('worker-loader')  
//         .loader('worker-loader')
//         .options({ // 可以查阅worker-loader文档，根据自己的需求进行配置
//          })
//     }  
//   }
  

// my-worker.worker.js  
// self.onmessage = function(e) {  
//     console.log('Worker: Hello World');  
//     const result = doSomeWork(e.data);  
//     self.postMessage(result);  
//   };  
    
//   function doSomeWork(data) {  
//     // 模拟一些工作  
//     return data * 2;  
//   }
  


// vue 组件中使用
// // MyComponent.vue 或其他.js文件  
// import MyWorker from './my-worker.worker.js';  
  
// export default {  
//   methods: {  
//     startWorker() {  
//       const myWorker = new MyWorker();  
  
//       myWorker.onmessage = (e) => {  
//         console.log('Main script: Received result', e.data);  
//       };  
  
//       myWorker.postMessage(100); // 发送数据给worker  
//     }  
//   },  
//   mounted() {  
//     this.startWorker();  
//   }  
// };


// https://juejin.cn/post/7351300892572745764
