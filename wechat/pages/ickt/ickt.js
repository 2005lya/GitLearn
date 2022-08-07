// const app = getApp()

Page({
  data:{
    color:"red",
    msg:'hello',
    obj:{
      color:"pink",
      size:{
        width:200,
        height:50
     }
    },
    arr:[1, 2, 3, 4, 5]
  },
  onLoad: function (options){
   setTimeout(() => {
     this.setData({
       color: "red",
       msg:'ickt',
       'obj.size.width': 40,
       'obj.size.height': 30
     }
     )
   }, 2000)
  }
})