//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    flag: false,
    opacity: '',
    index: '',
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    navData: [
      {
        text: '肯德基',
        img: 'http://chuantu.biz/t6/349/1532671379x-1404755445.jpg',
        imgl: 'http://chuantu.biz/t6/349/1532672854x1822611251.jpg',
        imga: 'http://chuantu.biz/t6/349/1532672229x-1404817629.jpg',
        imgb: 'http://chuantu.biz/t6/349/1532672523x-1404755510.jpg',
        imgc: 'http://chuantu.biz/t6/349/1532672660x-1376440150.jpg'

      },
      {
        text: '德克士',
        img: 'http://chuantu.biz/t6/349/1532671554x-1404755445.jpg',
        imgl: 'http://chuantu.biz/t6/349/1532672854x1822611251.jpg',
        imga: 'http://chuantu.biz/t6/349/1532672229x-1404817629.jpg',
        imgb: 'http://chuantu.biz/t6/349/1532672523x-1404755510.jpg',
        imgc: 'http://chuantu.biz/t6/349/1532672660x-1376440150.jpg'
      },
      {
        text: '麦当劳',
        img: 'http://chuantu.biz/t6/349/1532671411x-1404755445.gif',
        imgl: 'http://chuantu.biz/t6/349/1532672854x1822611251.jpg',
        imga: 'http://chuantu.biz/t6/349/1532672229x-1404817629.jpg',
        imgb: 'http://chuantu.biz/t6/349/1532672523x-1404755510.jpg',
        imgc: 'http://chuantu.biz/t6/349/1532672660x-1376440150.jpg'
        
      },
      {
        text: '披萨',
        img: 'http://chuantu.biz/t6/349/1532671428x-1404755445.jpg',
        imgl: 'http://chuantu.biz/t6/349/1532673047x-1404755576.jpg',
        imga: 'http://chuantu.biz/t6/349/1532672229x-1404817629.jpg',
        imgb: 'http://chuantu.biz/t6/349/1532672523x-1404755510.jpg',
        imgc: 'http://chuantu.biz/t6/349/1532672660x-1376440150.jpg'
      },
      {
        text: '大盘鸡',
        img: 'http://chuantu.biz/t6/349/1532671447x-1404755445.jpg',
        imgl: 'http://chuantu.biz/t6/349/1532672854x1822611251.jpg',
        imga: 'http://chuantu.biz/t6/349/1532672229x-1404817629.jpg',
        imgb: 'http://chuantu.biz/t6/349/1532672523x-1404755510.jpg',
        imgc: 'http://chuantu.biz/t6/349/1532672660x-1376440150.jpg'
      },
      {
        text: '猪肘子',
        img: 'http://chuantu.biz/t6/349/1532670481x-1566688485.jpg',
        imgl: 'http://chuantu.biz/t6/349/1532672854x1822611251.jpg',
        imga: 'http://chuantu.biz/t6/349/1532672229x-1404817629.jpg',
        imgb: 'http://chuantu.biz/t6/349/1532672523x-1404755510.jpg',
        imgc: 'http://chuantu.biz/t6/349/1532672660x-1376440150.jpg'
      },
      {
        text: '熊本熊',
        img: 'http://chuantu.biz/t6/349/1532670459x-1566688359.jpg',
        imgl: 'http://chuantu.biz/t6/349/1532672854x1822611251.jpg',
        imga: 'http://chuantu.biz/t6/349/1532672229x-1404817629.jpg',
        imgb: 'http://chuantu.biz/t6/349/1532672523x-1404755510.jpg',
        imgc: 'http://chuantu.biz/t6/349/1532672660x-1376440150.jpg'
      },
      {
        text: '小哥哥',
        img: 'http://chuantu.biz/t6/349/1532670443x1822611263.jpg',
        imgl: 'http://chuantu.biz/t6/349/1532672854x1822611251.jpg',
        imga: 'http://chuantu.biz/t6/349/1532672229x-1404817629.jpg',
        imgb: 'http://chuantu.biz/t6/349/1532672523x-1404755510.jpg',
        imgc: 'http://chuantu.biz/t6/349/1532672660x-1376440150.jpg'
      },
      {
        text: '小姐姐',
        img: 'http://chuantu.biz/t6/349/1532670405x-1404755445.jpg',
        imgl: 'http://chuantu.biz/t6/349/1532672854x1822611251.jpg',
        imga: 'http://chuantu.biz/t6/349/1532672229x-1404817629.jpg',
        imgb: 'http://chuantu.biz/t6/349/1532672523x-1404755510.jpg',
        imgc: 'http://chuantu.biz/t6/349/1532672660x-1376440150.jpg'
      }
    ],
    currentTab: 0,
    navScrollLeft: 0
  },
  list: function() { 
    wx.navigateTo({
      url: '../list/list'
    })
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })//事
  },
  onLoad: function(){
    if (app.globalData.userInfo) {
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          pixelRatio: res.pixelRatio,
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
        })
      },
    })
  },
  switchNav(event) {
    var cur = event.currentTarget.dataset.current;
    //每个tab选项宽度占1/5
    var singleNavWidth = this.data.windowWidth / 5;
    //tab选项居中
    this.setData({
      navScrollLeft: (cur - 2) * singleNavWidth
    })
    if (this.data.currentTab == cur) {
      return false;
    } else {
      this.setData({
        currentTab: cur
      })
    }
  },
  switchTab(event) {
    console.log('-------------------导航条值');
    console.log(event);
    var cur = event.detail.current;
    var singleNavWidth = this.data.windowWidth / 5;
    this.setData({
      currentTab: cur,
      navScrollLeft: (cur - 2) * singleNavWidth
    });
  },
  a: function () {
    this.setData({ flag: false });
    page.onLoad(); 
  },
  b: function () {
    this.setData({ flag: true })
  },
  // 跳转到领取礼品卡页面
  drawDown: ()=> {
    wx.navigateTo({
      url: '../getshadow/getshadow'
    })
  }
})