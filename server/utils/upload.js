import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';


const storage = new GridFsStorage({
    url: `mongodb+srv://admin:admin@ponderpages.0kiaje7.mongodb.net/?retryWrites=true&w=majority`,
    // MongoDB connection URL

    // options: { useNewUrlParser: true },
    // MongoDB connection options

    file: (request, file) => {
        // File configuration function
        const match = ["image/png", "image/jpg"];
        // File types that are allowed

        if (match.indexOf(file.memeType) === -1) {
            // Check if the file type is allowed
            return `${Date.now()}-blog-${file.originalname}`;
        }

        // If allowed, return an object with bucketName and filename
        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({ storage });

