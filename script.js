function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12) {
        img.src = 'manhapequeno.png'
        document.body.style.background = '#C83F94'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'tardepequeno.png'
        document.body.style.background = '#FEBD57'
    } else {
        img.src = 'noitepequeno.png'
        document.body.style.background = '#112C31'
    }
}
