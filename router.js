const router = require("express").Router()

const {  PrismaClient } = require("@prisma/client")


const prisma = new PrismaClient()

router.get("/",async (req,res)=>{
  

    const posts = await prisma.post.findMany() 
    res.json(posts)


})

router.post("/",async (req,res)=>{
  

    const newpost = await prisma.post.create({data:req.body})
    res.json(newpost)


})

router.post("/author",async (req,res)=>{
  

    const author = await prisma.user.create({data:req.body})
    res.json(author)


})

router.put("/",async (req,res)=>{
  

    const newpost = await prisma.post.update({where:{id:req.body.id},data:{title:req.body.title}})
    res.json(newpost)


})
router.delete("/",async (req,res)=>{
  

    const deletedpost = await prisma.post.delete({where:{id:req.body.id}})
    res.json(deletedpost)


})
module.exports = router