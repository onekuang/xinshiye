
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
    // 是否需要物流
    isNeedLogistics:1,
    // 配送方式
    yunPrice:0,
    // 优惠卷
    hasNoCoupons:true,
    coupons:[
      {id:'1',money:'-1000',name:'满10000减1000'},
      {id:'2',money:'-123',name:'优惠'}
    ]
  },
  bindChangeCoupon(e){
    console.log(e)
  }  
})
