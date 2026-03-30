const fs = require('fs')

fs.writeFile('text.txt','Hello man..... ',(err)=>{
    if(err) throw err
})