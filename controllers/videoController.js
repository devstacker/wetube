import {videos} from "../db";
import routes from "../routes";

export const home = (req, res) => {
    res.render("home", { pageTitle:"Home", videos });
};
export const search = (req, res) => {
    //console.log(req.query.term);
    //const searchingBy = req.query.term; //ES6 이전 방식, 아래코드와 같음
    const {
        query: { term : searchingBy }
    } = req;
    res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const getUpload = (req, res) => res.render("upload", { pageTitle: "Upload" });
export const postUpload = (req, res) => {
    const {
        body: { video_file, title, description }
    } = req;
    // To Do: Upload and save videos
    res.redirect(routes.videoDetail());
}

export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video" });