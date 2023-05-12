const express = require('express');
const mongoose = require('mongoose');

const { Post } = require('./models');

const app = express();

mongoose.connect('mongodb 작성!!!') 
        .then((res) => {
            console.log('mongodb connected!')
        });

app.use(express.json());

app.get('/', (req, res) => {
    res.send('안녕하세요!');
});

// CRUD

// 전체 글 목록 가져오기
app.get('/posts', async(req, res) => {
    const Posts = await Post.find({});
    res.send(Posts);
});

// 특정 게시물 가져오기
app.get('/posts/:id', async(req, res) => {
    const id = req.params.id;
    const postById = await Post.findOne({ id });

    res.send(postById);
});

// 게시물 작성
app.post('/posts', async(req, res) => {
    const { id, title, content, author } = req.body;

    const newPost = await Post.create({
        id,
        title,
        content,
        author,
    });

    res.send(newPost);
})

// 게시물 수정
app.put('/posts/:id', async(req, res) => {
    const id = req.params.id;
    const { title, content } = req.body;

    const updatedPost = await Post.findByIdAndUpdate({ id }, { title, content });

    res.send(updatedPost);
});

app.delete('posts/:id', async(req, res) => {
    const id = req.params.id;
    await Post.findOneAndDelete({ id });
    res.send('OK');
});

app.listen(3000, () => {
    console.log('The Server is Listening...');
});