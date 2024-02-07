const texto = ['El principio de la sabiduria es el temor de Jehova.',
'Jehová Dios dijo: “No temas, porque yo estoy contigo; no te desalientes, porque yo soy tu Dios. Te fortaleceré, ciertamente te ayudaré, sí, te sostendré con la diestra de mi justicia”',
'“Fíate de Jehová de todo tu corazón, Y no estribes en tu prudencia. Reconócelo en todos tus caminos, Y él enderezará tus veredas”','“Y en ti confiarán los que conocen tu nombre; Por cuanto tú, oh Jehová, no desamparaste á los que te buscaron”'
,'“Jehová es mi fortaleza y mi escudo: En él esperó mi corazón, y fuí ayudado; Por lo que se gozó mi corazón, Y con mi canción le alabaré”'
,'El Señor Jesús dijo: “Por eso os digo, no os preocupéis por vuestra vida, qué comeréis o qué beberéis; ni por vuestro cuerpo, qué vestiréis. ¿No es la vida más que el alimento y el cuerpo más que la ropa?”'
];


const cita = ['Probervios 1:7','Isaías 41:10','Proverbios 3:5-6','Salmos 9:10','Salmos 28:7','Mateo 6:25'];
const obtTexto = (array1, array2)=>{
    const num_random = Math.floor(Math.random() * array1.length);
  
    return {"texto":array1[num_random],"cita":array2[num_random]};

}
const generarTexto = () =>{
    const obj = obtTexto(texto,cita);
    document.getElementById('p_texto').innerHTML = obj.texto;
    document.getElementById('span_cita').innerHTML = obj.cita;
}