import { Node } from "./Node";

export class Tree {
    constructor() {
        this.raiz = null;
    }

    
    addEmployee(name, title, parentId = null) { // Para agregar un empleado
        const newNode = new Node(name, title);

        if (!this.raiz) { //Si no hay raiz, lo define como raiz
            this.raiz = newNode;
            return true;
        }

        if (!parentId) { //Si no hay padre, no se puede agregar
            return false;
        }

        const parent = this.findNode(parentId);
        if (parent) { //Si hay un padre
            parent.children.push(newNode); //Lo agrega a la lista de hijos
            return true;
        }
        return false;
    }

    findNode(id) { //Para encontrar un nodo por ID usando BFS
        let foundNode = null;
        this.bfs((node) => { //En cada nodo compara el id para saber si es el buscado
            if (node.id === id) {
                foundNode = node;
            }
        });
        return foundNode;
    }

    updateEmployee(id, name, title) { //Para actualizar los datos de un empleado
        const node = this.findNode(id);
        if (node) {
            node.name = name;
            node.title = title;
            return true;
        }
        return false;
    }

    deleteEmployee(id) { //Para eliminar un empleado y reasignar sus subordinados al padre
        if (!this.raiz) return false; //Si no hay raiz no se elimina nada

        if (this.raiz.id === id) { //Si la raiz es el empleado a eliminar, se elimina todo
            this.raiz = null;
            return true;
        }

        let nodeToDelete = null;
        let parentNode = null;
        
        this.bfs((node) => { //Aplica busqueda por anchura recursiva
            const childIndex = node.children.findIndex(child => child.id === id); //Busca el indice del empleado a eliminar en los hijos de cada nodo
            if (childIndex !== -1) { //Si existe
                parentNode = node; //Se guarda el padre
                nodeToDelete = node.children[childIndex]; //Se guarda el nodo a eliminar
            }
        });

        if (parentNode && nodeToDelete) { //Si hay padre y nodo a eliminar
            parentNode.children = parentNode.children.filter(child => child.id !== id); //Se elimina el nodo que coincide con el id de los hijos del padre         
            parentNode.children.push(...nodeToDelete.children); //Agrega los hijos del eliminado al padre
            return true;
        }
        return false;
    }


    getSubordinatesCount(id) { //Para obtener el numero de subordinados de un empleado
        const node = this.findNode(id);
        if (!node) return 0;

        let count = 0;
        const queue = [node];
        while (queue.length > 0) {
            const current = queue.shift();
            count += current.children.length;
            queue.push(...current.children);
        }
        return count;
    }
    
    toTreeData() { //Para pasar el arbol a un formato que react-d3-tree pueda usar
        if (!this.raiz) return null;

        const convertNode = (node) => { //Convierte el nodo en el formato adecuado
            return {
                id: node.id,
                name: node.name,
                title: node.title,
                children: node.children.map(child => convertNode(child)) //Para cada uno de sus hijos aplica la conversion
            };
        };

        return convertNode(this.raiz);
    }

    
    dfs(node = this.raiz, callback) {
        if (!node) return;
        callback(node); //Para recorrer el arbol usando DFS
        for (let child of node.children) {
            this.dfs(child, callback);
        }
    }

    
    bfs(callback) {
        if (!this.raiz) return;
        const queue = [this.raiz];
        while (queue.length > 0) {
            const current = queue.shift();
            callback(current); //Para recorrer el arbol usando BFS
            queue.push(...current.children);
        }
    }
}