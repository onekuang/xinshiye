//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    coupons:[
      {id:'001',money:'50',moneyHreshold:'1000',dateEnd:'2018-6-12'},
      {id:'002',money:'100',moneyHreshold:'1800',dateEnd:'2018-6-12'}
    ]
  },
  onLoad: function () {
  },
  onShow : function () {
    this.getMyCoupons();
  },
  getMyCoupons: function () {
    var that = this;
    // wx.request({
    //   url: 'https://api.it120.cc/' + app.globalData.subDomain + '/discounts/my',
    //   data: {
    //     token: app.globalData.token,
    //     status: 0
    //   },
    //   success: function (res) {
    //     if (res.data.code == 0) {
    //       var coupons = res.data.data;
    //       if (coupons.length > 0) {
    //         that.setData({
    //           coupons: coupons
    //         });
    //       }
    //     }
    //   }
    // })
  },
  goBuy:function(){
    wx.reLaunch({
      url: '/pages/goods_list/goods_list'
    })
  }

})
