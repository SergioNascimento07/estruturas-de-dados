export class Node {
    constructor(content) {
        this.content = content
        this.prevNode = null
        this.nextNode = null
    }

    getContent() {
        return content
    }

    setContent(content) {
        this.content = content
    }

    setPrevNode(prevNode) {
        this.prevNode = prevNode
    }

    getPrevNode() {
        return this.prevNode
    }

    setNextNode(nextNode) {
        this.nextNode = nextNode
    }

    getNextNode() {
        return this.nextNode
    }
}