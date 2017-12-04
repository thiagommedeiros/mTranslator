let firstKey = false

window.onkeydown = function (e) {
  if (e.keyCode === 84) {
    firstKey = true
    setTimeout(() => {
      firstKey = false
    }, 1000)
  }

  if (firstKey && e.keyCode === 187) {
    const selectedText = window.getSelection().toString()
    window.open('https://translate.google.com.br/#en/pt/'+selectedText)
  }
}
