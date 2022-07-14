import { client } from "../index.js";
import { ObjectId } from "mongodb";

export async function createNewMovies(data) {
    return await client
    .db("Movies")
    .collection("Movies").
    insertMany([data]);
}
export async function updateMovieById(id, data) {
    return await client
    .db("Movies")
    .collection("Movies")
    .updateOne({_id: ObjectId(id )}, { $set: data });
}
export async function deleteMovieById(id) {
    return await client.db("Movies")
    .collection("Movies")
    .deleteOne({_id: ObjectId(id ) });
}
export async function getMovieById(id) {
    return await client.db("Movies")
    .collection("Movies")
    .findOne({ _id: ObjectId(id )});
}
export async function getAllMovies(request) {
    return await client.db("Movies")
    .collection("Movies")
    .find(request.query).toArray();
}