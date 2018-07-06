module.exports = {
    // Uncomment these as you write them
    // getItemById,
    getItemById : function(list,id){
      for(let i=0;i<list.length;i++){
        if(list[i]["id"]===id){
          return list[i]
        }

      }




    },




    // [{
    //     itemId: 1,
    //     description: "Dark Chocolate Crunchies",
    //     price: 4.29,
    //     quantity: 2
    // },{


    // buildTransactions,
    // getTransactionsByItemDescription
}

//
// ``js
// [{
//     id: 1,
//     description: "Dark Chocolate Crunchies",
//     price: 4.29
// },{
//     id: 2,
//     description: "Mint Wafers",
//     price: 1.09
// },{
//     id: 3,
//     description: "Peppermint Poppers",
//     price: 2.38
// }];
