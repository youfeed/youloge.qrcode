import qrcode from "./lib/index.js";

qrcode().then((canvas) => {
  document.body.append(canvas);
  console.log(canvas);
});
