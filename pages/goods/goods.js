var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播
    imgUrls: [
      'https://www.xsygood.com/wximage/banner1.jpg',
      'https://www.xsygood.com/wximage/banner2.jpg'
    ],
    // 商品data
    goodsDetail: {
      basicInfo:{
        // name:'APP定制',
        // commission:'500',
        // commissionType:1,
        // 缩列图
        // pic:'../../image/logo.png',
        // 购买次数
        // numberOrders:'333',
        // 好评
        // numberGoodReputation:244,
        barCode: "",
        categoryId: 2246,
        characteristic: "尼多熊袜子，适合秋冬天",
        commission: 5,
        commissionType: 2,
        dateAdd: "2017-10-30 10:44:23",
        dateStart: "2017-10-30 10:39:02",
        dateUpdate: "2018-04-28 15:13:59",
        id: 6761,
        logisticsId: 386,
        minPrice: 90,
        minScore: 0,
        name: "App定制",
        numberFav: 0,
        numberGoodReputation: 15,
        numberOrders: 16,
        originalPrice: 0,
        paixu: 0,
        pic: "https://cdn.it120.cc/apifactory/2017/10/30/bc15e96f20fb13cc7d35f90d743ccb17.jpg",
        recommendStatus: 0,
        recommendStatusStr: "普通",
        shopId: 0,
        status: 0,
        statusStr: "上架",
        stores: 9999990,
        userId: 951,
        videoId: "",
        views: 11864,
        weight: 0
      },
      properties:[
        {
          name:'优惠套餐',
          "dateAdd": "2017-09-12 21:03:40",
          "id": 871,
          "name": "颜色",
          "paixu": 0,
          "userId": 951,
          "childsCurGoods": [
            {
              "dateAdd": "2017-09-12 21:03:56",
              "id": 1589,
              "name": "套餐1",
              "paixu": 0,
              "propertyId": 871,
              "remark": "",
              "userId": 951
            },
            {
              "dateAdd": "2017-09-13 09:51:06",
              "id": 1598,
              "name": "套餐2",
              "paixu": 0,
              "propertyId": 871,
              "remark": "",
              "userId": 951
            },
          ]
        }
      ],
    },


    // 价格
    selectSizePrice:2333,

    // 评价
    reputation:[
      {
        user:{
          avatarUrl:'https://www.xsygood.com/wximage/logo.png'
        },
        goods:{
          goodReputationStr:'',
          goodReputationRemark:'App定制',
          dateReputation:'2018-4-28',
          property:'04:12:53',
          appraise:'哎哟,不错哟~'
        }
      },
      {
        user:{
          avatarUrl:'https://www.xsygood.com/wximage/logo.png'
        },
        goods:{
          goodReputationStr:'',
          goodReputationRemark:'App定制',
          dateReputation:'2018-4-28',
          property:'04:12:53',
          appraise:'大吉大利,今晚吃鸡~'
        }
      }
    ],

    // 购物车是否隐藏
    hideShopPopup:true,

    text:"产品图文介绍占位符...",

    // 加入购物车内
    buyNumMin:1,
    buyNumMax:5,
    buyNumber: 1,
    //购物类型，加入购物车或立即购买，默认为加入购物车
    shopType: "addShopCar",
  },

  /**
   * 选择商品规格
   * @param {Object} e
   */
  labelItemTap: function(e) {
    var that = this;
    /*
    console.log(e)
    console.log(e.currentTarget.dataset.propertyid)
    console.log(e.currentTarget.dataset.propertyname)
    console.log(e.currentTarget.dataset.propertychildid)
    console.log(e.currentTarget.dataset.propertychildname)
    */
    // 取消该分类下的子栏目所有的选中状态
    var childs = that.data.goodsDetail.properties[e.currentTarget.dataset.propertyindex].childsCurGoods;
    for(var i = 0;i < childs.length;i++){
      that.data.goodsDetail.properties[e.currentTarget.dataset.propertyindex].childsCurGoods[i].active = false;
    }
    // 设置当前选中状态
    that.data.goodsDetail.properties[e.currentTarget.dataset.propertyindex].childsCurGoods[e.currentTarget.dataset.propertychildindex].active = true;
    // 获取所有的选中规格尺寸数据
    var needSelectNum = that.data.goodsDetail.properties.length;
    var curSelectNum = 0;
    var propertyChildIds= "";
    var propertyChildNames = "";
    for (var i = 0;i < that.data.goodsDetail.properties.length;i++) {
      childs = that.data.goodsDetail.properties[i].childsCurGoods;
      for (var j = 0;j < childs.length;j++) {
        if(childs[j].active){
          curSelectNum++;
          propertyChildIds = propertyChildIds + that.data.goodsDetail.properties[i].id + ":"+ childs[j].id +",";
          propertyChildNames = propertyChildNames + that.data.goodsDetail.properties[i].name + ":"+ childs[j].name +"  ";
        }
      }
    }
    var canSubmit = false;
    if (needSelectNum == curSelectNum) {
      canSubmit = true;
    }
    // 计算当前价格
    // if (canSubmit) {
    //   wx.request({
    //     url: 'https://api.it120.cc/'+ app.globalData.subDomain +'/shop/goods/price',
    //     data: {
    //       goodsId: that.data.goodsDetail.basicInfo.id,
    //       propertyChildIds:propertyChildIds
    //     },
    //     success: function(res) {
    //       that.setData({
    //         selectSizePrice:res.data.data.price,
    //         propertyChildIds:propertyChildIds,
    //         propertyChildNames:propertyChildNames,
    //         buyNumMax:res.data.data.stores,
    //         buyNumber:(res.data.data.stores>0) ? 1: 0
    //       });
    //     }
    //   })
    // }

    
    this.setData({
      goodsDetail: that.data.goodsDetail,
      canSubmit:canSubmit
    })  
  },
  // 点击-加入购物车-显示
  toAddShopCar() {
    this.setData({
      hideShopPopup: !this.data.hideShopPopup
    })
  },
  closePopupTap() {
    this.setData({
      hideShopPopup: !this.data.hideShopPopup
    })
  },

  numJianTap() {
     if(this.data.buyNumber > this.data.buyNumMin){
        var currentNum = this.data.buyNumber;
        currentNum--; 
        this.setData({  
            buyNumber: currentNum
        })  
     }
  },
  numJiaTap() {
     if(this.data.buyNumber < this.data.buyNumMax){
        var currentNum = this.data.buyNumber;
        currentNum++ ;
        this.setData({  
            buyNumber: currentNum
        })  
     }
  },



/**
* 加入购物车
*/
addShopCar:function(){
  if (this.data.goodsDetail.properties && !this.data.canSubmit) {
    if (!this.data.canSubmit){
      wx.showModal({
        title: '提示',
        content: '请选择商品规格！',
        showCancel: false
      })       
    }
    return;
  }
  if(this.data.buyNumber < 1){
    wx.showModal({
      title: '提示',
      content: '购买数量不能为0！',
      showCancel:false
    })
    return;
  }
  //组建购物车
  // var shopCarInfo = this.bulidShopCarInfo();

  // this.setData({
  //   shopCarInfo:shopCarInfo,
  //   shopNum:shopCarInfo.shopNum
  // });

  this.closePopupTap();
  wx.showToast({
    title: '测试成功',
    icon: 'success',
    duration: 2000
  })
  //console.log(shopCarInfo);

  //shopCarInfo = {shopNum:12,shopList:[]}
},
// 购物车
goShopCar() {
  wx.switchTab({
    url:'../shoppingCar/shoppingCar'
  })
},

// 立即购买
tobuy() {
  wx.navigateTo({
    url:'../order_pay/order_pay'
  })
},























  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    WxParse.wxParse('article', 'html', this.data.text, this, 5);
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