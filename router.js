const {getIdeasHandler} = require('./handlers/getIdeasHandler')

const {createIdeaHandler} = require('./handlers/createIdeaHandler')

const {upVoteIdeaHandler} = require('./handlers/upVoteIdeaHandler')

const {downVoteIdeaHandler} = require('./handlers/downVoteIdeaHandler')



exports.router = (app) => {
  
app.post('/ideas', createIdeaHandler )


app.get('/ideas', getIdeasHandler
)

app.post('/ideas/:ideaId/votes', upVoteIdeaHandler
)


app.delete('/ideas/:ideaId/votes', downVoteIdeaHandler)
  
}