var getUser = (id, callback) => {
    var user = {
        id: id, 
        name: 'Abhi'
    }
    setTimeout(() => {
        callback(user)    //reference callback and pass user object to getUser func
    }, 3000)
    
}
getUser(21, (userObject) => {
    console.log(userObject)
})