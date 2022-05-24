function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora sao ${hora} horas e ${minuto} minutos.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'dia.png'
        document.body.style.background = '#fab876'
    }else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'tarde.png'
        document.body.style.background = '#6a476a'
    }else{
        //BOA NOITE!
        img.src = 'noite.png'
        document.body.style.background = '#192329'
    }
}
