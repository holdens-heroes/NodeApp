var net = require('net');
 
net.createServer(function (stream) {
    stream.write('hello\r\n');
 
    stream.on('end', function () {
        stream.end('goodbye\r\n');
    });
 
    stream.pipe(stream);
}).listen(7000);