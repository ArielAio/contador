function contar() {
    let ini = window.document.getElementById('txtini')
    let fim = window.document.getElementById('txtfim')
    let pas = window.document.getElementById('txtpas')
    let res = window.document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = 'Impossível fazer a contagem!'
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

        if(p <= 0){
            window.alert('Passo invalido! Considerando PASSO 1')
            p = 1
        }


        if (i < f) { // Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += '\u{1F449}' + c + ' '
            }

        } else { // Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += '\u{1F449}' + c + ' '
            }
        }
        res.innerHTML += ' 🏁'

    }

}

