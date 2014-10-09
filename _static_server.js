
    // To use static ensure node-static is installed globally:
    // npm install -g node-static

    var static = require('node-static');
    var file   = new static.Server('.'); // Serve from root

    require('http').createServer(function(request, response){
        request.addListener('end', function(){
            file.serve(request, response);
        }).resume();
    }).listen(8080); // Port
