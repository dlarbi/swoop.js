var sys = require("sys"),
my_http = require("http"),
path = require("path"),
url = require("url"),
filesys = require("fs");
my_http.createServer(function(request,response){
	var my_path = url.parse(request.url).pathname;
	var full_path = path.join(process.cwd(),my_path);
	path.exists(full_path,function(exists){
		if(!exists){

			if(my_path == '/api/test') {
				response.setHeader('Content-Type', 'application/json');
				var Twitter = require('twitter');

				var client = new Twitter({
					consumer_key: '3xKgynLKDgfh3hHmw0NqC3tQO',
					consumer_secret: 'FUyQbarWKRfiSXW8tOMZozJnVOCl5ceCTIiIiC35YIgfDiXPhu',
					access_token_key: '3041151086-neYNiBW8KYlJaD5bF6fn0pgOKCWgXnBgcNV5c3A',
					access_token_secret: '9ZWXSdm6RQUP9cwVgoLYPKum3pkV48LkbZRa5rf0GDXz9'
				});

				var query = url.parse(request.url, true).query;

				var lat = query['lat'];
				var long = query['long'];
				var code = lat+','+long+','+'50km'
				var location = { geocode : code }
				client.get('search/tweets', location, function(error, tweets, res){
					if(error) throw error;
					//console.log(tweets);  // The favorites.
					//console.log(response);  // Raw response object.
					response.end(JSON.stringify(tweets))
				});
			} else {
				response.writeHeader(404, {"Content-Type": "text/plain"});
				response.write("404 Not Found\n");
				response.end();
			}
		}	else{
			filesys.readFile(full_path, "binary", function(err, file) {
			     if(err) {
							response.writeHeader(500, {"Content-Type": "text/plain"});
		          response.write(err + "\n");
		          response.end();
			     } else {
					   response.writeHeader(200);
						 response.write(file, "binary");
		         response.end();
					 }
			});
		}
	});
}).listen(8000);
sys.puts("Server Running on 8000");
