// show dbs

//  db.Movies.updateOne(
//   { name:"Jai Bhim" },
//   { $set: { Language: "Tamil" } }
 
// )
// db.Movies.updateOne(
// {name:"RRR"},
//   {$set:{ Language:"Telugu"} }
// )
// db.Movies.updateOne(
//  { name:"Jai Bhim" },
//  { $set: { Language: "Tamil" } }

// )
// db.Movies.updateOne(
// {name:"RRR"},
//  {$set:{ Language:"Telugu"} }
// )

// db.Movies.updateOne(
//  { name:"Iron man 2"},
//  { $set: { Language: "English" } }

// )
// db.Movies.updateOne(
// {name:"No Country for Old Men"},
//  {$set:{ Language:"English"} }
// )

// db.Movies.updateOne(
//  {name:"The Avengers"},
//   {$set:{ Language:"English"} }
//  )
 
//  db.Movies.updateOne(
//   {name:"Interstellar"},
//    {$set:{ Language:"English"} }
//   )
  
//   db.Movies.updateOne(
//    {name:"Baahubali"},
//     {$set:{ Language:"Telugu"} }
//    )

//    db.Movies.updateOne(
//     {name:"Ratatouille"},
//      {$set:{ Language:"English"} }
//     )




// db.Movies.updateMany([
//  { name:"Jai Bhim" ,
//   $set: { Language: "Tamil" } },
// {name:"RRR",
//  $set:{ Language:"Telugu"} },
//    {name:"Baahubali",
//     $set:{ Language:"Telugu"} },
  
// ])





   db.orders.insertMany([
    

{ _id: 0, productName: "Steel beam", status: "new", quantity: 10 },
{ _id: 1, productName: "Steel beam", status: "urgent", quantity: 20 },
{ _id: 2, productName: "Steel beam", status: "urgent", quantity: 30 },
{ _id: 3, productName: "Iron rod", status: "new", quantity: 15 },
{ _id: 4, productName: "Iron rod", status: "urgent", quantity: 50 },
{ _id: 5, productName: "Iron rod", status: "urgent", quantity: 10 }

   ])

//stage1
  db.orders.aggregate([
    {$match:{status:"urgent"}}
  ])
  //stage2
  db.orders.aggregate([
    {$match:{status:"urgent"}},
    {$group:{_id:"$productName",totalurgentquantity:{$sum:"$quantity"}}}
  ])