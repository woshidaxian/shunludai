// pages/payment/payment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    timer:"",
    time:"15:00",
    btnOnOff:true,
    fee:"1.5"
  },
  countDown:function(){
    let that = this;
    let a = 59;
    let b = 14;
    that.data.timer = setInterval(function(){
      if(a>=10){
        that.setData({
          time: b + ":" + a
        })
      }else{
        that.setData({
          time: b + ":" +"0"+ a
        })
      }
      a--;
      if(a==0){
        a = 59;
        b--;
        if(b==(-1)){
          that.setData({
            time: "0:00",
            btnOnOff:false
          })
          clearInterval(that.data.timer);
        }
      }
    },1000)
  },
  btn_money:function(){
    if(this.data.btnOnOff){
      // 进行支付操作
      // 需要调用支付接口
    }else{
      wx.showModal({
        title: '提示',
        content: '超时支付，请重新下单！！！',
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
            wx.navigateTo({
              url: '../index/index',
            })
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
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
    this.countDown();
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