'use'

let button = document.getElementsByTagName('button')
let buttonHesapla = button.length
let indicatorİtem = document.getElementById('indicatorİtem')
i = 0
for (let i = 0; i < buttonHesapla; i++) {
  button[i].onclick = hesapla
}
function hesapla() {
  let deger = this.innerHTML
  if (deger == '=') {
    try {
      indicatorİtem.value = eval(indicatorİtem.value)
    } catch (e) {
      indicatorİtem.value = '0'
    }
    return
  }
  indicatorİtem.value += deger
}
