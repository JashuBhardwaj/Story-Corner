// import grid from "gridfs-stream";
// import mongoose from "mongoose";

//import { request, response } from "express";

// const url = "http://localhost:8000";

// let gfs;
// const conn = mongoose.connection;
// conn.once("open", () => {
//   gfs = grid(conn.db, mongoose.mongo);
//   gfs.collection("photos");
// });

// export const uploadFile = (request, response) => {
//   if (!request.file) return response.status(404).json("File not found");

//   const imageUrl = `${url}/file/${request.file.filename}`;

//   response.status(200).json(imageUrl);
// };

// export const getImage = async (request, response) => {
//   try {
//     const file = await gfs.files.findOne({ filename: request.params.filename });
//     const readStream = await gfs.createReadStream(file.filename);

//     readStream.pipe(response);

//     //readstream.pipe(response);
//     response.status.json("Successfully got the image");
//   } catch (error) {
//     console.log(error);
//     response.status(500).json("Failed to fetch image " + error);
//   }
// };
import grid from "gridfs-stream";
import mongoose from "mongoose";

const url = "http://localhost:8000";

let gfs;
const conn = mongoose.connection;
conn.once("open", () => {
  gfs = grid(conn.db, mongoose.mongo);
  gfs.collection("photos");
});

export const uploadFile = (request, response) => {
  try {
    if (!request.file) {
      return response.status(404).json("File not found");
    }

    const imageURL = `${url}/file/${request.file.filename}`;
    response.status(200).json(imageURL);
  } catch (error) {
    response.status(500).json("Error while uploading : " + error);
  }
};

export const getImage = async (request, response) => {
  try {
    const file = await gfs.files.findOne({ filename: request.params.filename });
    console.log(file.filename);
    const readStream = gfs.createReadStream(file.filename);

    readStream.pipe(response);
  } catch (error) {
    response.status(500).json("Failed to fetch image : " + error);
  }
};
