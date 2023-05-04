
const express=require('express');
const router=express.Router();
const {poly,manytomayvideo,getImages,getVideos,manyTomany,oneTomany,data}=require('../controller/userController');

router.route('/poly').get(poly);
router.route('/manytomayvideo').get(manytomayvideo);
router.route('/getImages').get(getImages);
router.route('/getVideos').get(getVideos);
router.route('/manyTomany').get(manyTomany);
router.route('/oneTomany').get(oneTomany);
router.route('/updatedata').get(data);
module.exports = router;