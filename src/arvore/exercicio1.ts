var alunos = {} as {nome: number, esq: any, dir: any}

function add(lista: any, nome: number) {
    if(lista.nome && lista.nome > nome){
        add(lista.esq, nome)
    } else if(lista.nome) {
        add(lista.dir, nome)
    } else {
        lista.nome = nome,
        lista.esq = {}
        lista.dir = {}
    }
}

// function remover(lista: any, valor: number) {
//     let aux = null
//     let raiz = lista
//     let noDir = lista.dir
//     let noEsq = lista.esq
//     if (raiz.nome == valor) {
        
//     }
// }

var lista = []
for (let i=0; i<10;i++) {
    lista.push((Math.floor(Math.random()*1000000)))
}

// console.log(lista)
for (let jk of lista) {
    // console.log(jk)
    add(alunos, jk)
}

function emOrdem(lista: any) {
    lista.esq && emOrdem(lista.esq)
    lista.nome && console.log(lista.nome)
    lista.dir && emOrdem(lista.dir)
}

function posOrdem(lista: any) {
    lista.dir && posOrdem(lista.dir)
    lista.nome && console.log(lista.nome)
    lista.esq && posOrdem(lista.esq)
}

function preOrdem(lista: any) {
    lista.nome && console.log(lista.nome)
    lista.esq && preOrdem(lista.esq)
    lista.dir && preOrdem(lista.dir)
}

function tamanhoArvore(lista: any) {
    var tamEsq = 0
    var tamDir = 0
    function emOrdemEsq(lista: any) {
        if (lista.nome) {tamEsq ++}
        lista.esq && emOrdemEsq(lista.esq)
        lista.dir && emOrdemEsq(lista.dir)
    }
    function emOrdemDir(lista: any) { 
        if (lista.nome) {tamDir++}
        lista.dir && emOrdemDir(lista.dir)
        lista.esq &&  emOrdemDir(lista.esq)
    }
    emOrdemEsq(lista.esq)
    emOrdemDir(lista.dir)
    console.log(tamEsq, " ", tamDir)
}

function alturaArvore(raiz: any) {
    let esq: number
    let dir: number
    if (raiz == null) {
        return -1
    } else {
        esq = alturaArvore(raiz.esq)
        dir = alturaArvore(raiz.dir)
        if (esq > dir) {
            return esq+1
        } else {
            return dir + 1
        }
    }
}


console.log(lista)
console.log("---------------")
console.log(alunos)
console.log("---------------")
console.log(tamanhoArvore(alunos))
console.log("=========================")
console.log(alturaArvore(alunos))
// preOrdem(alunos)

