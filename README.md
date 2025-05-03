# greeting-card

This is a greeting card from Yunyun and JiangLi.

## 项目描述

这是一个使用 Node.js 和 Express 构建的简单 Web 应用，用于展示随机的中英文祝福语/歌词（主要来自 Coldplay）和引用。

## 主要功能

- 访问首页 (`/`) 时，随机显示一组中英文祝福语和来源。
- 提供 API 接口 (`/get/random-blessing`)，返回 JSON 格式的随机祝福语数据。

## 技术栈

- **后端**: Node.js, Express.js
- **模板引擎**: EJS
- **中间件**: body-parser
- **前端依赖**: html2canvas (可能用于截图或生成图片，根据 `package.json` 推测，但 `app.js` 中未直接使用)

## 安装

1.  确保你已经安装了 [Node.js](https://nodejs.org/) 和 npm。
2.  克隆仓库：
    ```bash
    git clone https://github.com/maxweber36/greeting-cards.git
    cd greeting-cards
    ```
3.  安装依赖：
    ```bash
    npm install
    ```

## 运行

```bash
npm start
```

应用将在 `http://localhost:3000` (或环境变量 `PORT` 指定的端口) 上运行。

## 使用

- 在浏览器中打开 `http://localhost:3000` 查看随机祝福语。
- 可以通过访问 `http://localhost:3000/get/random-blessing` 获取 JSON 格式的随机祝福语数据。

## 作者

- WeiBen
