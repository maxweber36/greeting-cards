import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// 配置静态文件
app.use(express.static('public'));

const blessings = [
    "新婚快乐新婚快乐新婚快乐新婚快乐新婚快乐新婚快乐新婚快乐新婚快乐新婚快乐",
    "百年好合百年好合百年",
];


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const randomBlessing = blessings[ Math.floor(Math.random() * blessings.length)];
  res.render("index.ejs", {blessing:randomBlessing});
});

// API 接口：获取随机祝福语（供前端AJAX调用）
app.get("/get/random-blessing", (req, res) => {
  const randomBlessing = blessings[Math.floor(Math.random() * blessings.length)];
  res.json({ blessing: randomBlessing });
})

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
