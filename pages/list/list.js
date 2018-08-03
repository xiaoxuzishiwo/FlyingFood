var app = getApp();
Page({
  data: {
    goodsData: [{
        index: 1,
        name: "50元礼品卡",
        price: 50,
        prouctnumbers: 0,
        text: "505050大声道撒多撒多撒多撒多撒多萨达撒多撒大所大所多撒大所多撒多撒多萨达撒大所多撒"
      },
      {
        index: 2,
        name: "60元礼品卡",
        price: 60,
        prouctnumbers: 0,
        text: "健康科606060技将很快就会很快很快很快就会看看就会加快金海环境或扩扩军或扩扩扩军军军军"
      },
      {
        index: 3,
        name: "70元礼品卡",
        price: 70,
        prouctnumbers: 0,
        text: "707070健康科技将很快就会很快很快很快就会看看就会加快金海环境或扩扩军或扩扩扩军军军军"
      },
      {
        name: "80元礼品卡",
        price: 80,
        prouctnumbers: 0,
        text: "808080健康科技将很快就会很快很快很快就会看看就会加快金海环境或扩扩军或扩扩扩军军军军"
      }
    ],
    showModalStatus: false,
    flag: '敬请期待…',
    code: null,
    totalNumber: 0,
    price: 0,
    userInfo: {}
  },
  bindadd: function(e) {
    console.log(e);
    var that = this;
    const index = e.currentTarget.dataset.index;
    console.log('-------------当前商品的下标' + index);
    let carts = that.data.goodsData; //商品数组
    let num = carts[index].prouctnumbers; //数量
    num = num + 1;
    console.log('-------------当前商品的数量' + num);
    carts[index].prouctnumbers = num;
    this.setData({
      goodsData: carts
    });
    // 循环商品总数
    var numbers = 0;
    var price = 0;
    for (var i = 0; i < that.data.goodsData.length; i++) {
      var QB = that.data.goodsData[i].prouctnumbers;
      var totalPrice = that.data.goodsData[i].price;
      numbers += Number(QB);
      price += QB * totalPrice;
    }
    console.log('---------------商品总数' + numbers);
    console.log('---------------商品价格' + price);
    this.setData({
      totalNumber: numbers,
      price: price
    });
  },
  bindMinus: function(e) {
    console.log(e);
    var that = this;
    const index = e.currentTarget.dataset.index;
    let carts = that.data.goodsData;
    let num = carts[index].prouctnumbers;
    if (num > 0) {
      num--;
      console.log('---------当前商品数量' + num);
      carts[index].prouctnumbers = num;
      that.setData({
        goodsData: carts
      })
    }
    console.log(num);
    console.log(index);

    var numbers = 0;
    var price = 0;
    for (var i = 0; i < that.data.goodsData.length; i++) {
      var QB = that.data.goodsData[i].prouctnumbers;
      var totalPrice = that.data.goodsData[i].price;
      numbers += Number(QB);
      price += QB * totalPrice;
    }
    console.log('---------------商品总数' + numbers);
    console.log('---------------商品价格' + price);
    this.setData({
      totalNumber: numbers,
      price: price
    });
  },
  pay: function() {
    console.log(app)
  },
  pay1: function () {
    wx.showToast({
      title: '未选择商品',
      icon: 'loading',
      duration: 700,
      mask: true
    })
  },
  powerDrawer: function(e) {
    var currentStatu = e.currentTarget.dataset.statu;
    this.util(currentStatu)
  },
  util: function(currentStatu) {
    /* 动画部分 */
    // 第1步：创建动画实例 
    var animation = wx.createAnimation({
      duration: 200, //动画时长 
      timingFunction: "linear", //线性 
      delay: 0 //0则不延迟 
    });
    // 第2步：这个动画实例赋给当前的动画实例 
    this.animation = animation;
    // 第3步：执行第一组动画 
    animation.opacity(0).rotateX(-100).step();
    // 第4步：导出动画对象赋给数据对象储存 
    this.setData({
      animationData: animation.export()
    })
    // 第5步：设置定时器到指定时候后，执行第二组动画 
    setTimeout(function() {
      // 执行第二组动画 
      animation.opacity(1).rotateX(0).step();
      // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象 
      this.setData({
        animationData: animation
      })

      //关闭 
      if (currentStatu == "close") {
        this.setData({
          showModalStatus: false
        });
      }
    }.bind(this), 200)
    // 显示 
    if (currentStatu == "open") {
      this.setData({
        showModalStatus: true
      });
    }
  },
  onGotUserInfo: function(e) {
    console.log(e)
    // console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    // console.log(e.detail.rawData)
  },
  onLoad: function() {
   
  },
  // 个人中心
  personage: function() {
    wx.navigateTo({
      url: "/pages/hisory/hisory"
    })
  },
  //onshow获取数据
  onShow: function () {
    console.log(app)
    if (app.globalData.userInfo) { } else if (this.data.canIUse){
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
})