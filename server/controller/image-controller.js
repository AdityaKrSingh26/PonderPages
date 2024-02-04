import grid from 'gridfs-stream';
import mongoose from 'mongoose';

const url = 'http://localhost:8000';

let gfs, gridfsBucket;
const conn = mongoose.connection;
conn.once('open', () => {
    gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'fs'
    });
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection('fs');
});

// gfs and gridfsBucket are initialized to work with GridFS.
// The connection(conn) is set up to MongoDB, and once it's open, a GridFSBucket and a grid instance are created using the gridfs-stream library.
// The bucket is associated with a specific bucket name, in this case, 'fs'.
// The grid instance is used to interact with the MongoDB GridFS.

export const uploadImage = (request, response) => {
    if (!request.file) { 
        return response.status(404).json("File not found");
    }
    const imageUrl = `${url}/file/${request.file.filename}`;

    response.status(200).json(imageUrl);
}

// This function is a handler for uploading images.It expects a file in the request object.
// It constructs an image URL using the base URL and the filename of the uploaded file.
// It responds with a JSON object containing the constructed image URL.

export const getImage = async (request, response) => {
    try {
        const file = await gfs.files.findOne({ filename: request.params.filename });
        // const readStream = gfs.createReadStream(file.filename);
        // readStream.pipe(response);
        const readStream = gridfsBucket.openDownloadStream(file._id);
        readStream.pipe(response);
    } catch (error) {
        response.status(500).json({ msg: error.message });
    }
}

// This function handles retrieving an image by filename.
// It queries the gfs.files collection to find the file metadata based on the filename provided in the request parameters.
// It opens a download stream using the gridfsBucket and pipes the stream to the response, allowing the client to download the image.
//     If an error occurs, it responds with a status of 500 and an error message in JSON format.