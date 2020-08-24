// pages/published/published.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isActivied:true,
    onoff1:true,
    onoff2:false,
    fabuData:[
      {
        id:1,
        imgsrc:'',
        title:'***超市',
        day:'2018-07-10',
        time:'10:49',
        status:'订单已送达',
      },
      {
        id: 2,
        imgsrc: '',
        title: '***超市',
        day: '2018-07-10',
        time: '10:49',
        status: '订单已送达',
      },
      {
        id: 3,
        imgsrc: '',
        title: '***超市',
        day: '2018-07-10',
        time: '10:49',
        status: '订单已送达',
      },
      {
        id: 4,
        imgsrc: '',
        title: '***超市',
        day: '2018-07-10',
        time: '10:49',
        status: '订单已送达',
      },
      {
        id: 5,
        imgsrc: '',
        title: '***超市',
        day: '2018-07-10',
        time: '10:49',
        status: '订单已送达',
      },
      {
        id: 6,
        imgsrc: '',
        title: '***超市',
        day: '2018-07-10',
        time: '10:49',
        status: '订单已送达',
      },
      {
        id: 7,
        imgsrc: '',
        title: '***超市',
        day: '2018-07-10',
        time: '10:49',
        status: '订单已送达',
      },
      {
        id: 8,
        imgsrc: '',
        title: '***超市',
        day: '2018-07-10',
        time: '10:49',
        status: '订单已送达',
      },
      {
        id: 9,
        imgsrc: '',
        title: '***超市',
        day: '2018-07-10',
        time: '10:49',
        status: '订单已送达',
      }
    ],
    orderData:[
      {
        id: 1,
        imgsrc: '',
        title: '***超市',
        day: '2018-07-10',
        time: '10:49',
        status: '已完成',
      },
      {
        id: 2,
        imgsrc: '',
        title: '***超市',
        day: '2018-07-10',
        time: '10:49',
        status: '已完成',
      },
      {
        id: 3,
        imgsrc: '',
        title: '***超市',
        day: '2018-07-10',
        time: '10:49',
        status: '已完成',
      },
      {
        id: 4,
        imgsrc: '',
        title: '***超市',
        day: '2018-07-10',
        time: '10:49',
        status: '已完成',
      },
      {
        id: 5,
        imgsrc: '',
        title: '***超市',
        day: '2018-07-10',
        time: '10:49',
        status: '已完成',
      },
      {
        id: 6,
        imgsrc: '',
        title: '***超市',
        day: '2018-07-10',
        time: '10:49',
        status: '已完成',
      }
    ]
  },
  navBtn1:function(){
    this.setData({
      onoff1:true,
      onoff2:false,
      isActivied:true
    })
  },
  navBtn2:function(){
    this.setData({
      onoff1: false,
      onoff2: true,
      isActivied:false
    })  
  },
  commentThis:function(event){
    console.log(event.currentTarget.dataset.id);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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