
// import express from "express"
// import {client} from "../index.js"
// const router =express.Router();


// router.get('/',  async function (request, response) {
//  console.log(request.query);
 
// if(request.query.rating){
//  request.query.rating=+request.query.rating
// }
// console.log(request.query)
//  const movies= await client.db("Movies").collection("Movies").
//  find(request.query).toArray();
//  // console.log("Movies:"+movies)
//  response.send(movies)
// });

// router.get('/:id', async function (request, response) {

// const {id}=request.params;
// console.log(request.params,id)
// //db.movies.findOne({id:"101"})
// const movie  = await client.db("Movies").collection("Movies").findOne({id: id})
// //  const movie=movies.find((mv) => mv.id ===id);
// console.log(movie)
//  movie ? response.send(movie) : response.status(404).send(
//   {msg:"movie not found"})
// })

// router.post("/",async function(request,response){
//  const data=request.body;
//  console.log(data);
//  const result = await client .db("Movies").collection("Movies").insertMany(data);
//  response.send(result)
// });

// //delete
// router.delete('/:id',async function(request,response){
//  const {id}=request.params;
//  console.log(request.params,id);
//  const result = await client 
//  .db("Movies")
//  .collection("Movies")
//  .deleteOne({ id :id});
//  // console.log(result);

//  result.deletedCount > 0 ?
//    response.send({msg:"Movie deleted successfully"})
//   : response.status(404).send({msg:"movie not found"})

// })

// //update
// router.put("/:id",async function(request,response){
//  const {id}=request.params;
//  console.log(request.params,id);
//  const data = request.body;
//  //db.Movies.updateOne({id:"101"}.{$set:data})

//  const result= await client
//  .db("Movies").collection("Movies")
// .updateOne({id:id},{$set:data});
// response.send(result)  

// })


// export const moviesRouter = router;


import express from "express";
import { getAllMovies, getMovieById, deleteMovieById, updateMovieById, createNewMovies } from "./helper.js";
const router =express.Router();

router.get('/', async function (request, response) {
    //db.movies.find({});
    if(request.query.rating){
      request.query.rating = +request.query.rating;
    }
    const movies= await getAllMovies(request);
    response.send(movies);
    })
  
  router.get('/:id', async function (req, res) {
  const {id} = req.params;
  console.log("id is : ", id);
        // const movie=movies.find((mv)=>mv.id===id);
  const movie= await getMovieById(id);
  console.log(movie);
  movie?res.send(movie):res.status(404).send({msg:"movie not found"});
    })
  
    router.delete('/:id', async function (req, res) {
      const {id} = req.params;
            // const movie=movies.find((mv)=>mv.id===id);
      const result= await deleteMovieById(id);
      result.deletedCount>0?res.send({msg:"movie deleted successfully"}):res.status(404).send({msg:"movie not found"});
        })
  
  router.put('/:id', async function (req, res) {
    const {id} = req.params;
    const data=req.body;
          // const movie=movies.find((mv)=>mv.id===id);
    const result= await updateMovieById(id, data);
    res.send(result);
      })
  
  // express.json() is a inbuilt middleware to convert data inside body to json format.
  router.post('/',async function (req, res) {
    const data=req.body;
    console.log(data);
    //db.movies.insertMany(data);
    const result=await createNewMovies(data);
      res.send(result);
    })

    export const moviesRouter=router;
  