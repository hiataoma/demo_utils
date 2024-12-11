/**
 * @author marvin
 * @description 整理菜单结构id
 * 
 */
const asyncRoutes =  [
  {
    id: 'appeal_100',
    path: 'micro-appeal/appeal',
    name: '诉求管理',
    meta: {
      icon: 'iconfont icona-bianzu23'
    },
    component: 'microAbstract',
    children: [
      {
        id: 'appeal_1001',
        path: 'unclaimedAppeal',
        name: '诉求池',
        meta: {
          keepAlive: false
        },
        component: 'UnclaimedAppeal'
      },
      {
        id: 'appeal_1001_1',
        path: 'appealDetail',
        name: '诉求详情',
        meta: {
          keepAlive: false,
          hidden: true
        },
        component: 'appealDetail'
      },
      {
        id: 'appeal_1002',
        path: 'myAppeal',
        name: '我的诉求',
        meta: {
          keepAlive: false
        },
        component: 'myAppeal'
      },
      {
        id: 'appeal_1003',
        path: 'allAppeal',
        name: '全部诉求',
        meta: {
          keepAlive: false
        },
        component: 'allAppeal'
      },
      {
        id: 'appeal_1005',
        path: 'examineAppeal',
        name: '诉求审核',
        meta: {
          keepAlive: false
        },
        component: 'examineAppeal'
      },
      {
        id: 'appeal_1004',
        path: 'appealConfig',
        name: '诉求配置',
        meta: {
          keepAlive: false
        },
        component: 'Abstract',
        children: [
          {
            id: 'appeal_10041',
            path: 'appealTemplate',
            name: '诉求模板',
            meta: {
              keepAlive: false
            },
            component: 'AppealTemplate'
          },
          {
            id: 'appeal_10041_1',
            path: 'addTemplate',
            name: '新增诉求模板',
            meta: {
              keepAlive: false,
              hidden: true
            },
            component: 'TemplateDetail'
          },
          {
            id: 'appeal_10041_2',
            path: 'editTemplate',
            name: '编辑诉求模板',
            meta: {
              keepAlive: false,
              hidden: true
            },
            component: 'TemplateDetail'
          },
          {
            id: 'appeal_10042',
            path: 'appealForm',
            name: '诉求表单',
            meta: {
              keepAlive: false
            },
            component: 'AppealForm'
          },
          {
            id: 'appeal_10042_1',
            path: 'addAppealForm',
            name: '新增诉求表单',
            meta: {
              keepAlive: false,
              hidden: true
            },
            component: 'AddAppealForm'
          },
          {
            id: 'appeal_10042_2',
            path: 'editAppealForm',
            name: '编辑诉求表单',
            meta: {
              keepAlive: false,
              hidden: true
            },
            component: 'AddAppealForm'
          },
          {
            id: 'appeal_10043',
            path: 'customerIdentity',
            name: '客户身份',
            meta: {
              keepAlive: false
            },
            component: 'CustomerIdentity'
          },
          {
            id: 'appeal_10044',
            path: 'appealType',
            name: '诉求类型',
            meta: {
              keepAlive: false
            },
            component: 'AppealType'
          }
        ]
      }
    ]
  }
]
function getAllIds(data) {
    // 用于存储所有id值的数组
    const ids = [];
    // 递归遍历数据结构，并提取id值
    function traverse(node) {
    // ids.push({
    //     id: node.id,
    //     // path: node.path,
    //     name: node.name
    // }); // 添加当前节点的id值
    ids.push(node.id)
    // 如果有子节点，则递归遍历子节点
    if (node.children && node.children.length > 0) {
        node.children.forEach(child => traverse(child));
    }
    }

    // 遍历根节点
    data.forEach(rootNode => traverse(rootNode));
    return ids;
}
console.log(JSON.stringify(getAllIds(asyncRoutes)))