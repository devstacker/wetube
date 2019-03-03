import express from "express";
import routes from "../routes";
import {
    getUpload,
    postUpload,
    videoDetail, 
    editVideo, 
    deleteVideo
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, postUpload);
videoRouter.get(routes.deleteVideo, deleteVideo);
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);

export default videoRouter;

