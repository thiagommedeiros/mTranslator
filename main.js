let firstKey = false

window.onkeydown = function (e) {
  if (e.keyCode === 17) {
    firstKey = true
    setTimeout(() => {
      firstKey = false
    }, 1000)
  }

  if (firstKey && e.keyCode === 81) {
    const selectedText = window.getSelection().toString()
    window.open('https://translate.google.com.br/#en/pt/'+selectedText)
  }
}
