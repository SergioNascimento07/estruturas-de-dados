import { Node } from "./node"

export class Lista<T> {
    private lastNode: Node<T> | null
    private firstNode: Node<T> | null
    private tamanhoLista: number

    public constructor() {
        this.lastNode = null
        this.firstNode = null
        this.tamanhoLista = 0
    }

    public add(elemento: T):void {
        let newNode = new Node<T>(elemento)

        newNode.setNextNode(null)
        newNode.setPrevNode(this.lastNode)
        if (this.firstNode == null) {
            this.firstNode = newNode
        }

        if (this.lastNode != null) {
            this.lastNode.setNextNode(newNode)
        }
        this.lastNode = newNode
        this.tamanhoLista ++
    }
}



let listt = new Lista<number>
listt.add(1)
listt.add(2)
listt.add(3)
console.log(listt)