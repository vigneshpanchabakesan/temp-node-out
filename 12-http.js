const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url==='/')
    {
    res.end('Welcome to our home page')
    }
    if(req.url==='/about')
    {
        res.end('We founded in 1898')
    }
    else{
        res.end(
       ` <h1>Oops! Wrong url
            <a href="/">Back Home</a>
        </h1>`)
    }
})

server.listen(5000)
