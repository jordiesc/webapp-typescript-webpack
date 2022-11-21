export function printconsole(mensage:string){
    console.log(mensage);

    var paragrafo: HTMLParagraphElement =  document.createElement("p");
    paragrafo.textContent = "mi paragrafro desde el modulo en tpyscript";
    document.body.appendChild(paragrafo);
}