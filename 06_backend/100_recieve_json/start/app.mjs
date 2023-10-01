import * as http from 'http';
import express from 'express';

const PORT = 8080;
const app = express();

//サーバー側でJSONを受け取るために
app.use(express.json());

app.get('/', function (req, res) {
  res.send(`
    <form action="/result" method="POST">
      <input type="text" name="title">
      <input type="text" name="description">
      <input type="submit">
    </form>
    <script>
    const formEl = document.querySelector('form');
    formEl.onsubmit = function (event) {
        event.preventDefault();
        const title = formEl[0].value;
        const desc = formEl[1].value;
        
        const data = {
            title,
            desc
        };
        
        fetch('/result', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(data)
        }).then(asyc function (res){
            const data = await res.json();
            console.log(data);
        });
    }
    </script>
    `);});

app.post('/result', function (req, res) {
  const params = req.body;
  //フロントエンド側から送られたbodyの内容（JSON）を表示
  console.log(params);
  res.json({msg: 'success'});
});

app.listen(PORT, function () {
  console.log(`Server start: http://localhost:${PORT}`);
});
