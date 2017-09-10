const http=require('http');

const call=(req,res)=>{
	const ip=req.socket.remoteAddress;
	const port=req.socket.remotePort;
	console.log("User made a request"+req.url);
	console.log('Port :'+port);
	console.log('IP :'+ip);
}

http.createServer(call).listen(8000);