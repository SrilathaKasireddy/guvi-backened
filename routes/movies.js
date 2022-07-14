import express from "express";
import { getAllMovies, getMovieById, deleteMovieById, updateMovieById, createNewMovies } from "./helper.js";
const router =express.Router();

router.get('/', async function (request, response) {
    
    if(request.query.rating){
      request.query.rating = +request.query.rating;
    }
    const movies= await getAllMovies(request);
    response.send(movies);
    })
  
  router.get('/:id', async function (req, res) {
  const {id} = req.params;
  console.log("id is : ", id);
        
  const movie= await getMovieById(id);
  console.log(movie);
  movie?res.send(movie):res.status(404).send({msg:"movie not found"});
    })
  
    router.delete('/:id', async function (req, res) {
      const {id} = req.params;
            
      const result= await deleteMovieById(id);
      result.deletedCount>0?res.send({msg:"movie deleted successfully"}):
      res.status(404).send({msg:"movie not found"});
        })
  
  router.put('/:id', async function (req, res) {
    const {id} = req.params;
    const data=req.body;
          
    const result= await updateMovieById(id, data);
    res.send(result);
      })
  
  // express.json() is a inbuilt middleware to convert data inside body to json format.
  router.post('/',async function (req, res) {
    const data=req.body;
    console.log(data)
    
    //db.movies.insertMany(data);
    const result=await createNewMovies(data);
      res.send(result);
      console.log(result)
    })

    export const moviesRouter=router;
  