const http=require('http');

const call=(req,res)=>{
	const ip=req.socket.remoteAddress;
	const port=req.socket.remotePort;
	console.log("User made a request"+req.url);
	console.log('Port :'+port);
	console.log('IP :'+ip);

	res.writeHead(200,{'Content-Type':'text/html'});
	res.write('Here some text');
	res.end();
}



http.createServer(call).listen(8000);