import { Node } from "./node.js"

let no1 = new Node(2)
let no2 = new Node(3)
let no3 = new Node(4)
let no4 = new Node(5)

no1.setNextNode(no2)
no2.setNextNode(no3)
no3.setNextNode(no4)

console.log(no1)