const {readFile,writeFile}=require('fs')


readFile('./content/subfolder/first.txt','utf8',(err,result)=>
{
    if(err)
    {
        console.log(err)
        return
    }
    const first=result
    readFile('./content/subfolder/second.txt','utf-8',(err,result)=>
    {
    if(err)
    {
        console.log(err)
        return 
    }
    const second=result
    writeFile('./content/subfolder/result-async.txt',`Here is the result: ${first},${second}`,(err,result)=>
    {
        if(err)
        {
            console.log(arr)
            return
        }
        console.log(result)
    })
    }
    )
    
}


)
