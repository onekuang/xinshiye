Page({
  data: {
    avatar:'',
    nickname:'',

    // 订单tab
    order_tab:[
      {id:'0',name:'待付款',icon:'pay',url:'##'},
      {id:'1',name:'待发货',icon:'send',url:'##'},
      {id:'2',name:'待收货',icon:'deliver',url:'##'},
      {id:'3',name:'待评价',icon:'wodefankui',url:'##'},
    ]
  },

  // 跳转到关于我们
  goto(e) {
    let url = e.currentTarget.dataset.url;

    wx.navigateTo({
      url: url
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取用户信息
    let self = this;
    wx.getUserInfo({
      success: function(res){
        self.setData({
          avatar: res.userInfo.avatarUrl,
          nickname: res.userInfo.nickName
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})