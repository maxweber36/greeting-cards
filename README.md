# 贺卡项目

本项目是一个简单的 Web 应用程序，用于生成和展示带有随机祝福语的贺卡。它允许用户刷新祝福语并将贺卡下载为图片。

## 使用技术

- **Express:** 一个快速、开放、极简的 Node.js Web 框架。
- **EJS:** 嵌入式 JavaScript 模板。
- **HTML2Canvas:** 一个 JavaScript 库，允许您截取网页或其部分的“屏幕截图”。
- **Body-parser:** Node.js body 解析中间件。
- **jQuery:** 一个快速、小型且功能丰富的 JavaScript 库。
- **CSS:** 用于设置贺卡样式。

## 项目结构

greeting-card/
├── package.json
├── public/
│ ├── css/
│ ├── images/
│ └── js/
└── views/

## 安装

1. 克隆项目：

   ```bash
   git clone https://github.com/yourusername/greeting-card.git
   ```

2. 安装依赖：

   ```bash
   cd greeting-card
   npm install
   ```

3. 启动服务器：

   ```bash
   node app.js
   ```

4. 访问贺卡：

   ```bash
   http://localhost:3000
   ```

## 使用方法

1. 打开浏览器并访问：

   ```bash
   http://localhost:3000
   ```

2. 刷新页面以获取新的祝福语。

3. 点击“下载贺卡”按钮将贺卡保存为图片。
