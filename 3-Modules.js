// CommonJS, every file is module (by default)
// Modules -Encapsulated Code(only share minimum)



const sayHI=(name)=>
{
    console.log(`Hello! ${name}`)
}

module.exports.hi=sayHI
