import {createServer, IncomingMessage, Server, ServerResponse} from 'http';

class App {
  instance?: Server;
  port: number = 3000;

  constructor(port: number = 3000) {
    this.port = port;
    this.instance = createServer((req: IncomingMessage, res: ServerResponse) => {
      if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello, world!');
      } else {
        res.statusCode = 404;
        res.end('Not found');
      }
    })
  }

  start(): void {
    this.instance!.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`);
    });
  }
}

export {
  App
}
