
var getFile = function(fileName){
    if(DEBUG) console.log("Obtaining the " + fileName + " file")

        return new Promise(function(resolve,reject){
            if (err) {
                if(DEBUG) console.log(err);
                reject(err);
            }

            else{
                if(DEBUG) console.log("success got data from getFile()")
            }
        })
}

module.exports = { getFile}