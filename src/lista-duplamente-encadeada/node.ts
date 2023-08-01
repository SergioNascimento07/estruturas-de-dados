export class Node<T> {
    private content: T;
    private prevNode: Node<T> | null = null;
    private nextNode: Node<T> | null = null;

    public constructor(content: T) {
        this.content = content
    }

    public getContent(): T {
        return this.content
    }

    public setPrevNode(node: Node<T>|null): void {
        this.prevNode = node
    }

    public setNextNode(node: Node<T>|null): void {
        this.nextNode = node
    }

    public getPrevNode(): Node<T>|null {
        return this.prevNode
    }

    public getNextNode(): Node<T>|null {
        return this.nextNode
    }
}

Node.prototype.toString = function nodeToString() {
    return "d"
}