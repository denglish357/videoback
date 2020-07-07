const {getClient} = require('../db')
const objectId = require('mongodb').ObjectId;

exports.downVoteIdeaHandler = async (req,res) => {
  const {ideaId} = req.params;
  const client= await getClient();
  const collection = client.collection('ideas')
  console.log(ideaId)
  const idea = await collection.findOne({_id: new objectId(ideaId)});
idea.votes = (idea.votes || 0) - 1;
 await collection.updateOne({
_id: new objectId(ideaId)
  }, {$set: idea})
  res.send(idea)
}