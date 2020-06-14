// const inject
// export { inject };

let inject = function practice2(item, sections){
    let result = Array.of();

    for(let i in item){
        if(sections[0]){
            let{content:section, index:number} = sections[0];
            if(number == i){
                result.push(section);
                sections = sections.slice(1,);
            }
        }
        result.push(item[i]);

    }

    return result;
}

export { inject };