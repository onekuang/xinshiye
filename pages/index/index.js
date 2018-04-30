Page({
  data: {
    // 轮播
    imgUrls: [
      'https://www.xsygood.com/wximage/banner1.jpg',
      'https://www.xsygood.com/wximage/banner2.jpg'
    ],
    // 菜单
    mune_data: [
      {id:'1',url:'../article/article',icon:'add1',title:'微信小程序',bg_color:'#44E2C2'},
      {id:'2',url:'../article/article',icon:'iconfontweixin',title:'微信公众号',bg_color:'#36D6EE'},
      {id:'3',url:'../article/article',icon:'gongsizhanlve-',title:'营销外包',bg_color:'#3692F9'},
      {id:'4',url:'../article/article',icon:'xiangmuxuqiu-',title:'企业网站建设',bg_color:'#FD434C'},
      {id:'5',url:'../article/article',icon:'diqiu',title:'营销网站推广',bg_color:'#FFAF32'},
      {id:'6',url:'../article/article',icon:'xiangmuguzhi-',title:'电商平台开发',bg_color:'#AA51FC'},
    ],
    // 案例
    case_list:[
      {id:1,link:'',img:'https://www.xsygood.com/wximage/case1.jpg',title:'',desc:'desc'},
      {id:2,link:'',img:'https://www.xsygood.com/wximage/case2.jpg',title:'',desc:'desc2'}
    ],
    // 友情链接
    links_data:[
      {id:'1',img:'https://www.xsygood.com/wximage/custom/1688.png'},
      {id:'2',img:'https://www.xsygood.com/wximage/custom/alibaba.png'},
      {id:'3',img:'https://www.xsygood.com/wximage/custom/aliyun.png'},
      {id:'4',img:'https://www.xsygood.com/wximage/custom/baidu.png'},
      {id:'9',img:'https://www.xsygood.com/wximage/custom/rongyao.png'},
      {id:'12',img:'https://www.xsygood.com/wximage/custom/tengxunwang.png'}
    ],
    // 留言字数
    text_cursor:0
  },

  // 案例列表点击
  case_list_click(e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `../article/article?id=${id}`
    })
  },

  // 留言的字数变化
  text_change(e) {
    let cursor = e.detail.cursor
    this.setData({
      text_cursor : cursor
    })
  },
  // 留言提交
  formSubmit(e){
    console.log(e.detail.value)
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showShareMenu({
      withShareTicket: true
    })    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.mune = this.selectComponent('#k_mune');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.showShareMenu({
     withShareTicket: true
    })
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