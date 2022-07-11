import { client } from "../index.js";

export async function createNewMovies(data) {
    return await client.db("Movies").collection("Movies").insertMany(data);
}
export async function updateMovieById(id, data) {
    return await client.db("Movies").collection("Movies").updateOne({ id: id }, { $set: data });
}
export async function deleteMovieById(id) {
    return await client.db("Movies").collection("Movies").deleteOne({ id: id });
}
export async function getMovieById(id) {
    return await client.db("Movies").collection("Movies").findOne({ id: id });
}
export async function getAllMovies(request) {
    return await client.db("Movies").collection("Movies").find(request.query).toArray();
}