Page({

  /**
   * 页面的初始数据
   */
  data: {
    location:"浙江水利水电学院",
    dynamic:"配送员朱**提现50.00元"
  },
  // 发布订单
  releaseOrder:function(){
    wx.navigateTo({
      url: '../releaseOrder/releaseOrder',
    })
  },
  // 接受订单
  receiptOrder:function(){
    wx.navigateTo({
      url: '../receiptOrder/receiptOrder',
    })
  },
  btnRegister:function(){
    wx.navigateTo({
      url: '../register/register',
    })
  },
  logTiXian:function(){
    wx.navigateTo({
      url: '../tixian/tixian',
    })
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