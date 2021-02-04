
window.enviarfunc = function enviarfunc(event){
var formIncompleto=false;
var estmarcado=0; 
    let entradas=document.getElementsByTagName("input");
 for (let i =0; i<entradas.length;i++){



 //Revisar si alguna entrada con el nombre boton está marcada... si es cierto, lo sabemos usando estmarcado
if (entradas.item(i).name=="boton"&&entradas.item(i).checked==true){
    console.log(entradas.item(i).value,"Esta marcado")
    estmarcado++;
    

};




//Revisar si las entradas tipo numero o mail o text estan vacias
if (entradas.item(i).type=="number"||entradas.item(i).type=="email"||entradas.item(i).type=="text"){
if(entradas.item(i).value==""||entradas.item(i).value==null ){
formIncompleto=true;
console.log("true2");
entradas.item(i).style.background="rgb(229, 189, 205)";
};
};



 };//for ending

 if(estmarcado==0){
    formIncompleto=true;
    console.log("true1");
    document.getElementById("divRadioInput").style.background="rgb(229, 189, 205)";
    };
       //Revisar si el select no se ha cambiado
if (document.getElementById("seleccioneEstado").value=="Pick a state"){
formIncompleto=true;
document.getElementById("seleccioneEstado").style.background="rgb(229, 189, 205)";
};

if (document.getElementById("mensaje").value==" "||document.getElementById("mensaje").value==0){
    formIncompleto=true;
    document.getElementById("mensaje").style.background="rgb(229, 189, 205)";
}else{
console.log("algo raro")
console.log(document.getElementById("mensaje").value,document.getElementById("mensaje").value.length);
};




 console.log(formIncompleto);
if (formIncompleto){
    document.getElementById("divisionAlerta").style.display="block";


    // let elementoError=document.createElement("P");
    // elementoError.innerHtml="Some fields are missing";
    // elementoError.style.background="black";
    // document.getElementById("mensajeError").prepend(elementoError);
    // document.getElementById("mensajeError").appendChild(elementoError);


event.preventDefault();






};

;}

//validar el cuadro de texto no sirve
//pq prevent no sirve
//pq no sirven los required






