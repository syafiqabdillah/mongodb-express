const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// CREATE
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  await post
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

// RETRIEVE
router.get("/", async (req, res) => {
  await Post.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/:postId", async (req, res) => {
  await Post.findById(req.params.postId)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

// UPDATE
router.patch("/:postId", async (req, res) => {
  await Post.findByIdAndUpdate(req.params.postId, {
    $set: { 
      title: req.body.title,
      description: req.body.description
    },
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

// DELETE
router.delete("/:postId", async (req, res) => {
  await Post.findByIdAndDelete(req.params.postId)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
