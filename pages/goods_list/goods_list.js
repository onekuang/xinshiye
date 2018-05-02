Page({
    data: {
        category:[
          {
              "id": "ruanjian",
              "banner": "https://www.xsygood.com/wximage/banner1.jpg",
              "cate": "软件开发",
              "detail": [
                  {
                      "id":"1",
                      "thumb": "../../image/logo.png",
                      "name": "APP定制"
                  },
                  {
                      "id":"2",
                      "thumb": "../../image/logo.png",
                      "name": "小程序"
                  },
                  {
                      "id":"3",
                      "thumb": "../../image/logo.png",
                      "name": "微信公众号"
                  },
              ]
          },
          {
              "id": "oaxitong",
              "banner": "https://www.xsygood.com/wximage/banner1.jpg",
              "cate": "OA系统",
              "detail": [
                  {
                      "id":"5",
                      "thumb": "../../image/logo.png",
                      "name": "OA系统1"
                  },
                  {
                      "id":"6",
                      "thumb": "../../image/logo.png",
                      "name": "OA系统2"
                  },
              ]
          },
        ],
        curIndex: 0,
        isScroll: false,
        toView: 'guowei'
    },
    onReady(){
        // var self = this;
        // wx.request({
        //     url:'http://www.gdfengshuo.com/api/wx/cate-detail.txt',
        //     success(res){
        //         self.setData({
        //             detail : res.data
        //         })
        //     }
        // });
        
    },
    switchTab(e){
      const self = this;
      this.setData({
        isScroll: true
      })
      setTimeout(function(){
        self.setData({
          toView: e.target.dataset.id,
          curIndex: e.target.dataset.index
        })
      },0)
      setTimeout(function () {
        self.setData({
          isScroll: false
        })
      },1)
        
    }
    
})