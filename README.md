# Youloge.Qrcode 二维码生成库 - 无依赖 超级小

### 超级小 `仅不到5Kb` 大小，异步返回一个`canvas 对象`：可直接页面展示或导出图片

- 💡 last building 20250402
- ⚡️ 建议直接 CDN 引入即可使用 `14.34 kB` │ `gzip: 4.90 kB`
- 🛠️ `https://unpkg.com/youloge.qrcode`
- 📦 `https://cdn.jsdelivr.net/npm/youloge.qrcode`
- 🔩 CDN 引入时 调用 `youloge.qrcode(TEXT)` 作用域前缀`youloge`
- 🔑

### 可选配置参数 `options`

```js
let options = {
  width: 256, // 可选:默认256
  height: 256, // 可选:默认256
  level: "M", // 可选：默认(M) L M Q H 纠错等级  7% 15% 25% 30%
  background: "#ffffff", // 可选:默认 #ffffff
  foreground: "#000000", // 可选:默认 #000000
};
```

### CDN 引入使用示例

```js
youloge
  .qrcode("TEXT", options)
  .then((canvas) => {
    document.body.appendChild(canvas);
  })
  .catch((err) => {
    console.log(err);
  });
```

### NPM 安装使用示例

```js
// ES6 default 直接使用
import YouQrcode from "youloge.qrcode";

YouQrcode("TEXT", options)
  .then((canvas) => {
    document.body.appendChild(canvas);
  })
  .catch((err) => {
    console.log(err);
  });
```

### 增加一个生成`img.src 示例`

```js
youloge.qrcode("", options).then((canvas) => {
  canvas.toBlob(
    (blob) => {
      var file = new Blob([blob], { type: "image/png;charset=utf-8" });
      var src = URL.createObjectURL(file);
      document.querySelector("img").src = src;
    },
    "image/png",
    0.95
  );
});
```

~ 就这！ 简单
