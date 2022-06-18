const defaultExports = () => {
    console.log("hello");
};

export const function1 = () => {
    console.log("function 1");
}

export const function2 = () => {
    console.log("function 2");
}

export const users = [{
        name: "samed",
        surname: "bilgili"
    },

    {
        name: "Ahmet",
        surname: "Taş"
    }
]


export default defaultExports;