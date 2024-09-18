import Post from "../models/Post.js";

const getTags =  async (req, res) => {

    try {
      const tags = await Post.aggregate([
        { $unwind: "$tags" }, 
        { $group: { _id: "$tags", count: { $sum: 1 } } },
        { $sort: { count: -1 } } 
      ]);
  
      res.json(tags);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch tags' });
    }
  }


export {
    getTags
}