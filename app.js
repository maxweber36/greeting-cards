import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// 配置静态文件
app.use(express.static('public'));

const chineseBlessings = [
    "百年好合",
    "早生贵子",
    "永结同心",
    "白头偕老",
    "永浴爱河",
    "百年琴瑟",
    "百年偕老",
];

const englishBlessings = [
  "Eternal love and harmony",
  "May you have a child soon",
  "Forever united in heart",
  "May you grow old together",
  "Forever bathed in love",
  "A harmonious union for a hundred years",
  "May you live together for a hundred years",
];


const defaultChineseFontFamily = "'Huiwenmincho', sans-serif"; // 或者你希望的其他默认中文字体
const defaultEnglishFontFamily = "'Courier New', monospace"; // 或者你希望的其他默认英文字体



const chineseFontFamilies = [
  "'Huiwenmincho', sans-serif",       // 怀文铭刻 (日文)
];
const englishFontFamilies = [
  "'Courier New', monospace",      // Courier New (等宽字体)
];


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const indexBlessing = Math.floor(Math.random() * chineseBlessings.length);
  const randomChineseBlessing = chineseBlessings[indexBlessing];
  const randomEnglishBlessing = englishBlessings[indexBlessing];

  const randomChineseFontFamily = defaultChineseFontFamily;
  const randomEnglishFontFamily = defaultEnglishFontFamily;
  res.render("index.ejs", {chineseBlessing:randomChineseBlessing, chineseFontFamily:randomChineseFontFamily, englishBlessing:randomEnglishBlessing, englishFontFamily:randomEnglishFontFamily});
});

// API 接口：获取随机祝福语（供前端AJAX调用）
app.get("/get/random-blessing", (req, res) => {
  const indexBlessing = Math.floor(Math.random() * chineseBlessings.length);
  const randomChineseBlessing = chineseBlessings[indexBlessing];
  const randomEnglishBlessing = englishBlessings[indexBlessing];

  const randomChineseFontFamily = chineseFontFamilies[Math.floor(Math.random() * chineseFontFamilies.length)];
  const randomEnglishFontFamily = englishFontFamilies[Math.floor(Math.random() * englishFontFamilies.length)];
  res.json({ chineseBlessing: randomChineseBlessing, chineseFontFamily: randomChineseFontFamily, englishBlessing: randomEnglishBlessing, englishFontFamily: randomEnglishFontFamily });
})

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
