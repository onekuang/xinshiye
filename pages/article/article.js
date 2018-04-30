Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '新视野网络科技',
      path: '/pages/start/start',
      imageUrl: 'https://www.xsygood.com/wximage/article01.jpg',
      success: function(res) {
        wx.showToast({
          title:'分享成功'
        })
        console.log(res)
      },
      fail: function(res) {
        // 转发失败
        wx.showToast({
          title:'分享失败..',
          icon:'none'
        })
        console.log(res)
      }
    }
  }
})