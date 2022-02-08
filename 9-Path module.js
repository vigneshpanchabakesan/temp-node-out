const path=require('path')

console.log(path.sep)

const fileName=path.join('/content/','subfolder','text.txt')

console.log(fileName)

const absolute_path=path.resolve(__dirname,'/content/','subfolder','text.txt')

console.log(absolute_path)