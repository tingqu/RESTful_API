const express = require('express');
const router = express.Router();

const Post = require('../models/Post');

// This function  get all the posts 
router.get('/', async (req,res)=>{
    try {
        const posts = await Post.find();
        res.json(posts)
    } catch (error) {
        res.json({messgae:error})
    }
})

// Get the specific post
router.get('/:postId', async (req,res)=>{
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post)
    } catch (error) {
        res.json({message: error})
    }
})

//This function is used to add the posts 
router.post('/', async (req,res)=>{
    const post = new Post({
        title: req.body.title,
        description:req.body.description
    })

    try{
     const savedPost = await post.save(); 
    res.json(savedPost)
    }catch(error){
        res.json({message:err})
    }
})


//Delete the Post
router.post('/:postId', async (req,res)=>{
    try{
        const removedPost = await Post.remove({_id:req.params.postId})
        res.json(removedPost)
    }catch(error){
        res.json({message: err})
    }
})

//update the post
router.patch('/:postId', async(req,res)=>{
     try {
        const updatedPost = await  Post.updateOne(
            {_id:req.params.postId}, 
            // use $set to change the content
            {$set: {title: req.body.title}
        })
        res.json(updatedPost)
     } catch (error) {
         res.json({message:err})
     }
})

module.exports= router