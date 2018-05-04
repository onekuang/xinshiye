
//获取应用实例
Page({
  data: {
    goodsList:[
      {
        pic:'../../image/logo.png',
        name:'test',
        price:'23333',
        label:'商城,分销',
        number:'1',
      },
      {
        pic:'../../image/logo.png',
        name:'test',
        price:'23333',
        label:'商城,分销',
        number:'1',        
      },
      {
        pic:'../../image/logo.png',
        name:'test',
        price:'23333',
        label:'商城,分销',
        number:'1',        
      }
    ],
    // 合计价格
    allGoodsAndYunPrice:0,
    // 是否需要物流
    isNeedLogistics:0,
    // 配送方式
    yunPrice:0,
    // 优惠卷
    hasNoCoupons:true,
    orderType:"", //订单类型，购物车下单或立即支付下单，默认是购物车，
    coupons:[
      {id:'1',money:'-1000',name:'满10000减1000'},
      {id:'2',money:'-123',name:'优惠'}
    ]
  },
  bindChangeCoupon(e){
    console.log(e)
  },
  addAddress : function () {
    wx.navigateTo({
      url:"/pages/address-add/index"
    })
  },
  onLoad: function (e) {
      var that = this;
      //显示收货地址标识
      
      if(e.orderType) {
        that.setData({
          isNeedLogistics: 1, 
          orderType: e.orderType
        });  
      }      
  },
  onShow : function () {
      var that = this;
      var shopList = [];
      //立即购买下单
      if ("buyNow"==that.data.orderType){
        var buyNowInfoMem = wx.getStorageSync('buyNowInfo');
        if (buyNowInfoMem && buyNowInfoMem.shopList) {
          shopList = buyNowInfoMem.shopList
        }
      }else{
        //购物车下单
        var shopCarInfoMem = wx.getStorageSync('shopCarInfo');
        if (shopCarInfoMem && shopCarInfoMem.shopList) {
          // shopList = shopCarInfoMem.shopList
          shopList = shopCarInfoMem.shopList.filter(entity => {
            return entity.active;
          });
        }
      }
      that.setData({
        goodsList: shopList,
      });
  },











  
})
