{
    var alvo = '11a22b33c';
    var exp = /(\d\d)(\w)/g;
    var resultado = null;
    while (resultado = exp.exec(alvo)){
        console.log(resultado);
        console.log(exp.lastIndex);
    }
 
    // trocando traço por barra
    var anoMesDia = '2007-12-31';
    var exp = /-/g
    anoMesDia = anoMesDia.replace(exp, '/');
    console.log(anoMesDia);

    //ajustando numeros formatado de varios valores e simbolos, usando o split.
    var arquivo = '100,200-150,200;20';
    var valores = arquivo.split(',');
    console.log(valores);
    var exp = /[,;-]/;
    var valores = arquivo.split(exp);
    console.log(valores);

    //Organizar de forma simple usando match.
    //A variável codigos guarda uma string com vários códigos concatenados. 
    //A lei de formação é a seguinte: todo código começa com uma letra seguida de 1 ou mais dígitos. 
    //Precisamos extrair essas string num array, ou seja, uma lista de código para que o desenvolvedor possa verificar se cada um desses códigos existe no sistema.
    var codigos = 'A121B12112C12212F12G01';
    var exp = /[A-Za-z]\d+/g
    var codigosExtraidos = codigos.match(exp);
    console.log(codigosExtraidos);
    
}