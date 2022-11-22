export function printconsole(mensage:string){
    console.log(mensage);
    console.log("hola consola");

    var paragrafo: HTMLParagraphElement =  document.createElement("p");
    paragrafo.textContent = "mi paragrafro desde el modulo en tpyscript";
    document.body.appendChild(paragrafo);

    let  edad = 51;

    edad = edad+ 1;
    
    let user = {
        name: "Daniel",
        age: 26
      };
   user.age = 51;

   console.log(user);
   
   let miarray = new Array<string>();

   miarray.push("hola");

   let miarray2 = ["uno","dos"];
   
   let miarray3 = [];
   miarray3.push(1);
   miarray3.push("hola");

   console.log("mi array 3");
   console.log(miarray3)

   
    
    
}