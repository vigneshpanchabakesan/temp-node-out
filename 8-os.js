const os=require('os')

const user=os.userInfo()

console.log(`This is the uptime ${os.uptime} seconds`)


const current_os={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(current_os)