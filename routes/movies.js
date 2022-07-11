
import express from "express"
import {client} from "../index.js"
const router =express.Router();


router.get('/',  async function (request, response) {
 console.log(request.query);
 
if(request.query.rating){
 request.query.rating=+request.query.rating
}
console.log(request.query)
 const movies= await client.db("Movies").collection("Movies").
 find(request.query).toArray();
 // console.log("Movies:"+movies)
 response.send(movies)
});

router.get('/:id', async function (request, response) {

const {id}=request.params;
console.log(request.params,id)
//db.movies.findOne({id:"101"})
const movie  = await client.db("Movies").collection("Movies").findOne({id: id})
//  const movie=movies.find((mv) => mv.id ===id);
console.log(movie)
 movie ? response.send(movie) : response.status(404).send(
  {msg:"movie not found"})
})

router.post("/",async function(request,response){
 const data=request.body;
 console.log(data);
 const result = await client .db("Movies").collection("Movies").insertMany(data);
 response.send(result)
});

//delete
router.delete('/:id',async function(request,response){
 const {id}=request.params;
 console.log(request.params,id);
 const result = await client 
 .db("Movies")
 .collection("Movies")
 .deleteOne({ id :id});
 // console.log(result);

 result.deletedCount > 0 ?
   response.send({msg:"Movie deleted successfully"})
  : response.status(404).send({msg:"movie not found"})

})

//update
router.put("/:id",async function(request,response){
 const {id}=request.params;
 console.log(request.params,id);
 const data = request.body;
 //db.Movies.updateOne({id:"101"}.{$set:data})

 const result= await client
 .db("Movies").collection("Movies")
.updateOne({id:id},{$set:data});
response.send(result)  

})


export const moviesRouter = router;