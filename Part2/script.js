function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('Imag')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`
        if (hora >= 0 && hora < 12){
            //BOM DIA!
            img.src = '/Part2/Imag/manha.jpg'
        } else if (hora >= 12 && hora <= 18){
            //BOA TARDE!
            img.src='/Part2/Imag/tarde.jpg'
        } else{
            //BOA NOITE!
            img.src= '/Part2/Imag/noite.jpg'
        }

}


