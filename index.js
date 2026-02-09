// 1. import json-server
const jsonServer=require('json-server')

//  2. create a server using jsonServer
const travelServer=jsonServer.create()

//  3. creation of middleware
const middleware=jsonServer.defaults()

//  4. router setup
const router=jsonServer.router('db.json')

// 5. implementing use
travelServer.use(middleware)
travelServer.use(router)

//  6. port creation
const port=3000 || process.env.port

//  7. start server
travelServer.listen(port,()=>{
    console.log("Travel BucketList Server running on the port"+port)
})