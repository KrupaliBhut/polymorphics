const db = require("../models");
const tag = require("../models/tag");

const image = db.image;
const video = db.video;
const comment = db.comment;
const commentI = db.commentImage;
const tags = db.tags;
const tag_taggable = db.tag_taggable;

var poly = async (req, res) => {
  try {
    let data = await image.create(
      {
        title: req.body.title,
        url: req.body.url,
        comments: req.body.comments,
        tags: req.body.tags,
      },
      {
        include: [tags, db.comment],
      }
    );

    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
};

var manytomayvideo = async (req, res) => {
  try {
    let data = await video.create(
      {
        title: req.body.title,
        text: req.body.text,
        comments: req.body.comments,
        tags: req.body.tags,
      },
      {
        include: [tags, db.comment],
      }
    );
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
};
var getImages = async (req, res) => {
  try {
    let data = await image.findAll({
      include: [tags, comment],
    });

    return res.json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
};

var getVideos = async (req, res) => {
  try {
    let data = await video.findAll({
      include: [tags, comment],
    });
    return res.json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
};

var manyTomany = async (req, res) => {
  try {
    let data = await tags.findAll({
      include: [image, video],
    });
    return res.json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
};

var oneTomany = async (req, res) => {
  try {
    let data = await comment.findAll({
      include: [db.image, db.video],
    });
    return res.json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
};
var data = async (req, res) => {
    var title = req.body.title;
var text = req.body.text;
var id = req.body.id;
var title2 = req.body.title;
var updateProfile = { title: title, text: text, title: title2 };


var filter = {
  where: {
    id: id
  },
  include: [
    { model: video }
  ]
};

comment.findOne(filter).then(function (data) {
  if (data) {
    return data.video.update(updatedata).then(function (result) {
      return result;
    });
  } else {
    throw new Error("no such product type id exist to update");
  }
});
let response = {
    success: true,
    data: filter,
  };
  res.status(200).json(response);
 
}

module.exports = {
  poly,
  manytomayvideo,
  oneTomany,
  manyTomany,
  getVideos,
  getImages,
  data,
};
