import express from "express";
import path from 'path'; // 导入 path 模块
import { fileURLToPath } from 'url'; // 导入 url 模块

const __filename = fileURLToPath(import.meta.url); // 获取当前文件的 URL
const __dirname = path.dirname(__filename); // 获取当前文件所在的目录

const app = express();
const port = 3000;

// 设置视图文件存放的目录
app.set('views', path.join(__dirname, 'views'));
// 设置视图引擎为 ejs
app.set('view engine', 'ejs');

// 配置静态文件
// 注意: bodyParser 已被 Express 内建取代
// app.use(bodyParser.urlencoded({ extended: true })); // 旧方式
app.use(express.urlencoded({ extended: true })); // 推荐的新方式
app.use(express.json()); // 如果需要处理 JSON 请求体
app.use(express.static(path.join(__dirname, 'public'))); // 明确指定 public 目录路径更稳妥

const chineseBlessings = [
    "祝你在美满人生中，总能如尝所愿 \n 口袋总有钱币，入夜总有人陪伴",
    "我看见真爱之路正节节攀升 \n 我发现天际恒星正耀眼无比",
    "彼此间所有美好感受 \n 千万不要 任其流走 \n 所有那些美好感受 \n 千万不要 任其流走",
    "盛夏时分，你我坠入爱河",
    "生活是一种多么美丽而又疯狂的创造 \n 而时间仿佛在说:'忘了这世界和它承载的重量'",
    "你拥有我全部的爱意 \n 不论福祸 我都属于你",
    "爱是世间唯一的真实留驻",
    "别害怕去变得坚强啊",
    "人言聚有时，散有期 \n 而你却恒久如钻石璀璨在我生命里",
    "而若你有天遇到另一个深爱的他 \n 就大胆告诉他吧",
    "我对你情深绵延 \n 遥比往返皎月",
    "当你深爱着某人 \n 就大胆告诉他吧",
    "我爱 我所爱之人(我爱 我所爱之人), \n 上天的讯息是 永不放弃!",
    "生活令人迷醉，爱情令人沉醉"
];

const englishBlessings = [
  "I hope that you get everything you want in this biutyful life \n Change for your pocket, someone for the night",
  "I see the road begin to climb \n I see the stars begin to shine",
  "All the good good feelings we have foreach other \n Don't ever ever let them go \n All the good good feelings \n Don't ever let, don't ever let go",
  "We fell in love in the summer",
  "Life has a beautiful, crazy design \n And time seems to say: \n 'Forget this world and its weight'",
  "You got all my love \n Whether it rains or pours, I'm all yours",
  "Love is the only thing left that's true",
  "Not scared to be strong",
  "oh they say people come say people go \n This particular diamond was extra special",
  "So if you love someone, \n you should let them know",
  "I loved you to the moon and back again",
  "When you love somebody, \n Got to let somebody know",
  "I love who I love (love who I love) \n The message from above is NEVER GIVEUP!!!",
  "Life is a drink, and love's a drug",
];

const quotes = [
  "——Biutyful . Coldplay",
  "——Ink . Coldplay",
  "——Good Feelings . Coldplay/Ayra Starr",
  "——Good Feelings . Coldplay/Ayra Starr",
  "——Amazing Day . Coldplay",
  "——All My Love . Coldplay",
  "——All I Can Think About Is You . Coldplay",
  "——Miracles. Coldplay/Big Sean",
  "——Everglow . Coldplay",
  "——Everglow . Coldplay",
  "——Let Somebody Go . Coldplay/Selena Gomez",
  "——Let Somebody Go . Coldplay!Selena Gomez",
  "——JUPiTER . Coldplay",
  "——Hymn For The Weekend . Alan Walker/Coldplay",
];

const defaultChineseFontFamily = "'Huiwenmincho', sans-serif"; // 或者你希望的其他默认中文字体
const defaultEnglishFontFamily = "'Courier New', monospace"; // 或者你希望的其他默认英文字体

const chineseFontFamilies = [
  // 'Huiwenmincho',
  'jf-openhuninn',       // 怀文铭刻 (日文)
];
const englishFontFamilies = [
  'Courier New', 
  // 'monospace',      // Courier New (等宽字体)
];

app.get("/", (req, res) => {
  const indexBlessing = Math.floor(Math.random() * chineseBlessings.length);

  const randomChineseBlessing = chineseBlessings[indexBlessing];
  const randomEnglishBlessing = englishBlessings[indexBlessing];
  const randomQuote = quotes[indexBlessing];
  const randomChineseFontFamily = defaultChineseFontFamily;
  const randomEnglishFontFamily = defaultEnglishFontFamily;

  res.render("index", {
      chineseBlessing: randomChineseBlessing,
      chineseFontFamily: randomChineseFontFamily,
      englishBlessing: randomEnglishBlessing,
      englishFontFamily: randomEnglishFontFamily,
      quote: randomQuote,
      indexBlessing: indexBlessing
  });
});

// API 接口：获取随机祝福语（供前端AJAX调用）
app.get("/get/random-blessing", (req, res) => {
  const indexBlessing = Math.floor(Math.random() * chineseBlessings.length);

  const randomChineseBlessing = chineseBlessings[indexBlessing];
  const randomEnglishBlessing = englishBlessings[indexBlessing];
  const randomQuote = quotes[indexBlessing];

  const randomChineseFontFamily = chineseFontFamilies[Math.floor(Math.random() * chineseFontFamilies.length)];
  const randomEnglishFontFamily = englishFontFamilies[Math.floor(Math.random() * englishFontFamilies.length)];
  res.json({ chineseBlessing: randomChineseBlessing, chineseFontFamily: randomChineseFontFamily, englishBlessing: randomEnglishBlessing, englishFontFamily: randomEnglishFontFamily, quote: randomQuote, indexBlessing: indexBlessing});
})

// 注意：在 Vercel 上部署时，app.listen 不会被调用，Vercel 会处理服务启动
// 但本地开发时仍然需要它
if (process.env.NODE_ENV !== 'production') { // 可以在本地开发时监听端口
    app.listen(port, () => {
      console.log(`Server running on port: ${port}`);
    });
}

// 导出 app 供 Vercel 使用
export default app;
