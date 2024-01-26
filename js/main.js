console.log(document.title);

const myList = document.getElementById('lista1').children;

const fullList = (completo) =>{
    let fullName = "";
    for (let y = 0; y < completo.length; y++) {
        const elementList = completo[y];
        if (elementList.tagName === "DD") {
            fullName = `${fullName}${elementList.innerText}`;
            if (elementList.innerText && y !== completo.length - 1) {
                fullName = fullName + (" ")
            }
        }
    }
    return `"${fullName}"`;
}

const myId = document.getElementById("listas").children;

const concatname = (integrantes, element) =>{
    return `${integrantes}${element.innerText}: `
}

const fullIntegrantes = (list) => {
    let integrantes = " ";
    for (let e = 0; e < list.length; e++) {
        const element = list[e];
        if (element.tagName === "H2") {
            integrantes = `${integrantes}\n${element.innerText}: `
        }
        if (element.tagName === "DL") {
            integrantes = `${integrantes}${fullList(element.children)}`
        }
    }
    return integrantes
}

console.log(`-------${fullIntegrantes(myId)}\n------`);


const nameduplicate = () => {
    const data = document.getElementsByTagName('dd');
    const namedata = [];
    const namedata2 = [];
    let color;
    for (let y = 0; y < 2; y++) {
        namedata.push(data[y])
    }
    for (let y = 4; y < 6; y++) {
        namedata2.push(data[y])
    }
    for (let y = 0; y < namedata.length; y++) {
        const name = namedata[y];
        for (let z = 0; z < namedata2.length; z++) {
            const name2 = namedata2[z];
            if (name.innerText === name2.innerText && (name.innerText || name2.innerText)) {
                if (color === undefined) {
                    color = window.prompt("Elija un color");
                }
                name.style.color = `${color}`
                name2.style.color = `${color}`
            }else{
                console.log("No hubo coincidencia en los nombres")
            }
            
        }
        
    }
}
nameduplicate()

const lastduplicate = () => {
    const data = document.getElementsByTagName('dd');
    const namedata = [];
    const namedata2 = [];
    let color;
    for (let y = 2; y < 4; y++) {
        namedata.push(data[y]);
    }
    for (let y = 6; y < 8; y++) {
        namedata2.push(data[y]);
    }
    for (let y = 0; y < namedata.length; y++) {
        const name = namedata[y];
        for (let z = 0; z < namedata2.length; z++) {
            const name2 = namedata2[z];
            const confirmar = window.confirm("Se desea comparar los apellidos?")
            if (confirmar === true && name.innerText === name2.innerText && (name.innerText || name2.innerText)) {
                if (color === undefined) {
                    color = window.prompt("Elija un color");
                }
                name.style.color = `${color}`
                name2.style.color = `${color}`
            }else{
                console.log("No hubo coincidencia en los apellidos")
            }
            
        }
        
    }
}
lastduplicate();

const mostrar = () =>{
    const input = document.forms['formulario'];
    let texto = '';
    for (let element of input) {
        texto += element.value;
    }
    console.log(texto)
}












