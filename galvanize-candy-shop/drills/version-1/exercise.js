module.exports = {
  candySalesToObject: function(arr){
  let obj ={}
  obj["item"]=arr[0];
  obj["price"]=arr[1];
  obj["quantity"]=arr[2];

  return obj

},

salesDayToObject : function(date, salesDay) {
newFormat = {
  date:date,
  sales:[{
    item:'',
    price:'',
    quantity:''
  },
  {
    item:'',
    price:'',
    quantity:''
  }],
}
newFormat.sales[0].item=salesDay[date][0][0];
newFormat.sales[0].price=salesDay[date][0][1];
newFormat.sales[0].quantity=salesDay[date][0][2];
newFormat.sales[1].item=salesDay[date][1][0];
newFormat.sales[1].price=salesDay[date][1][1];
newFormat.sales[1].quantity=salesDay[date][1][2];
return newFormat

},


allSalesToArray: function (date, salesDay) {
  newFormat = {
    date:date,
    sales:[{
      item:'',
      price:'',
      quantity:''
    },
    {
      item:'',
      price:'',
      quantity:''
    }],
  }
  for(let i=0;i<salesDay[date].length;i++){
    newFormat.sales[i].item=salesDay[date][i][0];
    newFormat.sales[i].price=salesDay[date][i][1];
    newFormat.sales[i].quantity=salesDay[date][i][2];

  }

  return newFormat

}

}
