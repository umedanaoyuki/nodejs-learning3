import * as http from 'http';
import express from "express";

const PORT = 8080
const app = express();

//post用
app.use(express.urlencoded({extended: true}));

app.get("/", function (req, res){
  res.send(`
    <a href="/result?param1=1&param2=2">Get Method Link</a>
    <form action="/result" method="POST">
      <input type="text" name="title[]">
      <input type="text" name="title[]">
      <input type="text" name="description">
      <input type="submit">
    </form>
    `);
});

app.get('/result', function (req, res){
  //queryに自動的にオブジェクトに展開されたものが入っている
  const params = req.query;
  console.log(params);
});

app.post('/result', function (req, res){
  //queryに自動的にオブジェクトに展開されたものが入っている
  const params = req.body;
  console.log(params);
});


app.listen(PORT, () => {
});

// server.listen(8080);

// const server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/html; charset=UTF-8' });
//   console.log(req.url);
//   if (req.url === '/') {
//   } else {
//     console.log(req.url);
//     console.log(req.method);
//     if(req.method === "GET") {
//       // GETのパラメータを取得
//       console.log(req.url.split("?"));
//       const queryString = req.url.split("?")[1];
//       const params = new URLSearchParams(queryString);
//       console.log(params.has('param1'));
//     } else if(req.method === "POST") {
//       // POSTのパラメータを取得
//       let data = "";
//       req.on("data", function (chunk) {
//         data += chunk;
//       });
//       req.on("end", function() {
//         const params = new URLSearchParams(data);
//         console.log(params);
//       })
//     }
//     res.end(req.url);
//   }
// });
