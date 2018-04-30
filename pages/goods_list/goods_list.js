Page({
    data: {
        category: [
            {name:'软件开发',id:'ruanjian'},
            {name:'网站开发',id:'wangzhan'},
            {name:'test',id:'test'},
        ],
        detail:[
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
                  {
                      "id":"4",
                      "thumb": "../../image/logo.png",
                      "name": "test"
                  },
              ]
          },
          {
              "id": "wangzhan",
              "banner": "https://www.xsygood.com/wximage/banner1.jpg",
              "cate": "网站开发",
              "detail": [
                  {
                      "id":"5",
                      "thumb": "../../image/logo.png",
                      "name": "企业网站"
                  },
                  {
                      "id":"6",
                      "thumb": "../../image/logo.png",
                      "name": "营销网站"
                  },
              ]
          },
          {
              "id": "test",
              "banner": "https://www.xsygood.com/wximage/banner1.jpg",
              "cate": "test",
              "detail": [
                  {
                      "id":"7",
                      "thumb": "../../image/logo.png",
                      "name": "企业网站"
                  },
                  {
                      "id":"8",
                      "thumb": "../../image/logo.png",
                      "name": "营销网站"
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