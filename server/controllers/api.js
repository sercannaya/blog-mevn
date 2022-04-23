const Post = require("../models/posts");

module.exports = class API {
  // fetch all posts
  static async fetchAllPost(req, res) {
    try {
      const posts = await Post.find();
      res.status(200).json(posts);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  // fetch post by id
  static async fecthPostById(req, res) {
    res.send("Fetch Post by ID");
  }

  static async createPost(req, res) {
    const post = req.body;
    const imagename = req.file.filename;
    post.image = imagename;

    try {
      await Post.create(post);
      res.status(201).json({ message: "Post created successfully!" });
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  }

  // Update post
  static async updatePost(req, res) {
    res.send("Update Post");
  }

  // Delete post
  static async deletePost(req, res) {
    res.send("Delete Post");
  }
}