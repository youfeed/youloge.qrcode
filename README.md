# Youloge.Qrcode 纯二维码生成库  

```js
vite v4.5.0 building for production...
✓ 1 modules transformed.
dist/youloge.qrcode.es.js  20.41 kB │ gzip: 5.45 kB
dist/youloge.qrcode.umd.js  14.39 kB │ gzip: 4.84 kB
✓ built in 171ms
```
### 超级小 `仅不到5Kb` 大小，异步返回一个`canvas 对象`：只要二维码 

- 💡 组件库有作用域前缀`youloge` 
- ⚡️ 建议直接引入CDN 即可使用 14.39 kB │ gzip: 4.84 kB
- 🛠️ `https://unpkg.com/youloge.qrcode`
- 📦 `https://cdn.jsdelivr.net/npm/youloge.qrcode`
- 🔩 调用 `youloge.qrcode(TEXT)`
- 🔑

```js
youloge.qrcode('TEXT',options={}).then(canvas=>{
  document.body.appendChild(canvas)
}).catch(err=>{
  console.log(err)
})
```
### `options` 可选参数
```js
{
  text: '',
  width: 256,
  height: 256,
  typeNumber: -1,
  background: "#ffffff",
  foreground: "#000000",
}

```
