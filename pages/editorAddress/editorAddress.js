// pages/editorAddress/editorAddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'朱天杨',
    phone:13566527512,
    school:'浙江水利水电学院',
    address:'生活区5号楼122',
    sex_man:true,
    sex_woman:false
  },
  btn_del_1:function(){
    this.setData({
      name:''
    })
  },
  btn_sex_man:function(){
    this.setData({
      sex_man: true,
      sex_woman: false
    })
  },
  btn_sex_woman:function(){
    this.setData({
      sex_man: false,
      sex_woman: true
    })
  },
  btn_del_2:function(){
    this.setData({
      phone: ''
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