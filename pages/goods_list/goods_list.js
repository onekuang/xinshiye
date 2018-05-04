var api = require('../../utils/api.js');
Page({
    data: {
        category:[],
        curIndex: 0,
        isScroll: false,
        toView: 'top'
    },
    onLoad() {
      var that = this
      
      // 接口地址
      let url = api.data.goods_list

      wx.request({
        url: url,
        success: function(res) {
          if (res.data.state== 200) {
            that.setData({
              category: res.data.result
            })
            console.log(res.data.result)
          }
        }
      })
    },
    onReady(){
    },



    switchTab(e){
      const that = this;
      this.setData({
        isScroll: true
      })
      setTimeout(function(){
        that.setData({
          toView: e.target.dataset.id,
          curIndex: e.target.dataset.index
        })
      },0)
      setTimeout(function () {
        that.setData({
          isScroll: false
        })
      },1)
        
    }
    
})