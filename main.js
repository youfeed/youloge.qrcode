import qrcode from './lib/index.js'

qrcode('[vite] connected.').then(canvas=>{
  document.body.append(canvas)
  console.log(canvas)
})
