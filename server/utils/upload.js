import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

import dotenv from 'dotenv';

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const storage = new GridFsStorage({
     url : `mongodb://${username}:${password}@ac-1evslzs-shard-00-00.rjr2sdm.mongodb.net:27017,ac-1evslzs-shard-00-01.rjr2sdm.mongodb.net:27017,ac-1evslzs-shard-00-02.rjr2sdm.mongodb.net:27017/?ssl=true&replicaSet=atlas-13533f-shard-0&authSource=admin&retryWrites=true&w=majority`,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-file-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-file-${file.originalname}`
        }
    }
});

export default multer({storage}); 