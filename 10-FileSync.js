const {readFileSync,writeFileSync}=require('fs')

const first=readFileSync('./content/subfolder/first.txt',"utf-8")

const second=readFileSync('./content/subfolder/second.txt',"utf-8")

console.log(first,second)


writeFileSync(
    './content/subfolder/first.txt','Im Vignesh',{flag:'a'}
)

writeFileSync(
    './content/subfolder/result-sync.txt',
    `Here is the result: ${first},${second}`
)
