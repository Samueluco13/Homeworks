export const arbol = {
    value: 10,
    izquierda: {
        value: 5,
        izquierda: {
            value: 2,
            izquierda: null,
            derecha: null
        }
    },
    derecha: {
        value: 15,
        izquierda: null,
        derecha: {
            value: 20,
            izquierda: null,
            derecha: null
        }
    }
}

export const arbol1 = {
    name: '10',
    children: [
        {
            name: '5',
            children: [
                { name: '2' },
            ],
        },
        {
            name: '15',
            children: [
                { name: '20' },
            ],
        },
    ],
};

export const arbol2 = {
    name: "10",
    children: [{
        name: "5",
        children:[{
            name: "2",
            children: []
        },{}]
    },{
        name: "15",
        children: [{},{
            name: "20",
            children: [{},{}]
        }]
    }]
}