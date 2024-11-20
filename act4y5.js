class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        if (this.root === null) {
            this.root = new Node(value);
        } else {
            this._insert(this.root, value);
        }
    }

    _insert(current, value) {
        if (value < current.value) {
            if (current.left === null) {
                current.left = new Node(value);
            } else {
                this._insert(current.left, value);
            }
        } else {
            if (current.right === null) {
                current.right = new Node(value);
            } else {
                this._insert(current.right, value);
            }
        }
    }

    preOrder() {
        const result = [];
        this._preOrderTraversal(this.root, result);
        return result;
    }

    _preOrderTraversal(node, result) {
        if (node !== null) {
            result.push(node.value);
            this._preOrderTraversal(node.left, result);
            this._preOrderTraversal(node.right, result);
        }
    }

    inOrder() {
        const result = [];
        this._inOrderTraversal(this.root, result);
        return result;
    }

    _inOrderTraversal(node, result) {
        if (node !== null) {
            this._inOrderTraversal(node.left, result);
            result.push(node.value);
            this._inOrderTraversal(node.right, result);
        }
    }

    postOrder() {
        const result = [];
        this._postOrderTraversal(this.root, result);
        return result;
    }

    _postOrderTraversal(node, result) {
        if (node !== null) {
            this._postOrderTraversal(node.left, result);
            this._postOrderTraversal(node.right, result);
            result.push(node.value);
        }
    }
}

const tree = new BinaryTree();
const values = [10, 5, 20, 3, 7, 15, 25];

values.forEach(value => tree.insert(value));
console.log("Preorder Traversal:", tree.preOrder());
console.log("Inorder Traversal:", tree.inOrder());
console.log("Postorder Traversal:", tree.postOrder());
