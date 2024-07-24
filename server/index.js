const express = require('express')
var cors = require('cors');
const app = express()

app.use(cors());
/* request body로 전달되는 json/body를 express 서버가 이해할 수 있게
미들 웨어를 등록한다 */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))

const users = [
    {
        idx: 1,
        id: "test",
        pw: "1234",
        created: new Date("2024-07-20"),
        email: "test@naver.com",
        nick: "겁나 무서운 전사"
    },
    {
        idx: 2,
        id: "hello",
        pw: "hello1234",
        created: new Date("2024-07-22"),
        email: "helloworld@naver.com",
        nick: "헬로월드"
    }
];

app.get('/', function (req, res) {
    res.sendfile(__dirname + "/public/home.html")
});
app.get('/main', function (req, res) {
    res.sendfile(__dirname + "/public/main.html")
});
app.post('/login', function(req, res) {
    let {user_id, user_pw } = req.body;
    console.log(user_id, user_pw);
})
app.get('/chart', function (req, res) {
    res.json([
        {
            ranking: 1,
            title: '데드풀과 울버린',
            satisfy: 99,
            ratio: 44.4,
            url: '/movie?cate=action&sf?code={ranking}'
        }
    ])
    // req: request [요청]
    // res: response [응답]
})
    app.post('/contact', function (req, res) {
        console.log(req.body);
        res.sendfile(__dirname + "/public/contact.html")
    });

    app.listen(3000, function () {
        console.log('CORS-enabled web server listening on port 3000')
    });
