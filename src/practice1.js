// const parseData
// export { parseData };

let parseData = function practice1(input){
    let newcolumn = new Set();
    for(let item in input.column){
        let {name: structure, note: n} = input.column[item];
        newcolumn.add(structure);
    }
    console.log(newcolumn);
    let output = Array.of();
    for(let item in input.data){
        let {name, age, gender, birthday} = newcolumn;
        let [name2, age2, gender2, birthday2] = input.data[item];
        output.push(({name:name2, age:age2, gender:gender2, birthday:birthday2}))
    }

    return output
}

export { parseData };