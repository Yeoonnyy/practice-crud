const { Schema } = require("mongoose");

const PostSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    title: String,
    content: String,
    author: String,
  },
  {
    timestamps: true, // 생성시간
  }
);

module.exports = PostSchema;