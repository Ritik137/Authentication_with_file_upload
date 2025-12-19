import multer from "multer";
import path from 'path';

// multer storage setup
const storage = multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) =>{
        const uniqueSuffix = Date.now() + path.extname(file.originalname);
        cb(null, file.fieldname + "-" + uniqueSuffix);
    },
});

// Export the configured multer instance.
const upload = multer({ storage });

export default upload;