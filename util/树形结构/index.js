const tree = 


  // 正向-树形结构转平铺
  // 从外到内依次递归，有 children 则继续递归
  function treeToArr(data, pid = null, res = []) {
    data.forEach(item => {
      res.push({ pid: pid, id: item.id, name: item.name });
      if (item.children && item.children.length !== 0) {
        treeToArr(item.children, item.id, res);
      }
    });
    return res;
  };
 
  const arr = treeToArr(tree);
  console.log(arr);

  const arr = [
    { pid: null, id: 1, name: '北京' },
    { pid: 1, id: 11, name: '朝阳' },
    { pid: 11, id: 111, name: '朝阳1号' },
    { pid: 1, id: 12, name: '海淀' },
    { pid: 12, id: 121, name: '海淀1号' },
    { pid: null, id: 2, name: '上海' },
    { pid: 2, id: 21, name: '浦东' },
    { pid: 21, id: 211, name: '浦东1号' },
    { pid: 2, id: 22, name: '虹口' },
    { pid: 22, id: 221, name: '虹口1号' }
  ]

  // 依次在数组中找到每一层级对应的元素，同时每个元素的 children 属性对应的 value 通过 pid 去找到，然后递归执行下去
  function arrToTree(arr, pid = null) {
    const res = [];
    arr.forEach(item => {
      if (item.pid === pid) {
        // 这样每次都需要遍历整个数组，因此时间复杂度为 n*n
        // const children = arrToTree(arr, item.id)   
 
        // 往下递归时，每次数组的大小都在减小，每次都筛选掉父代元素，最终的时间复杂度为 n*logn
        const children = arrToTree(arr.filter(v => v.pid !== pid), item.id);
        if (children.length) {
          res.push({ ...item, children })
        } else {
          res.push({ ...item })
        }
      }
    });
    return res;
  };
 
  const tree = arrToTree(arr);
  console.log(JSON.stringify(tree, null, 2));