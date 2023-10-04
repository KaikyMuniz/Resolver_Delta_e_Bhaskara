    function exemploA(){
    window.alert("Numa equação de segundo grau, a letra A é caracterizada pelo valor da equação que possuí um 'expoente' e uma 'letra' ; Por exemplo: ''3x²'' + 9x - 2 = 0, no exemplo, a letra A que deverá ser inserida no nosso input é o '3'. Sabendo disso, agora insira o valor da letra no campo referente a sua equação, boa sorte :)");
}

function exemploB(){
    window.alert("Enquanto para encontra a letra A nos verificamos qual valor da equação de segundo grau possuí expoente e letra, para identificarmos o valor da letra B, devemos acha o valor da equação que é acompanhando apenas por uma 'letra' ; Por exemplo: 3x² + ''9x'' - 2 = 0, no exemplo, podemos identificar que o valor da letra B é o '9' pois ele é acompanhando somente de uma letra. Sabendo disso, agora insira o valor da letra no campo referente a sua equação, boa sorte :)")
}

function exemploC(){
    window.alert("Para se encontra a letra C é bem simples, basta procurar na equação de segundo grau, qual valor 'NÃO' está acompanhando de um expoente e de uma letra' ; por exemplo: 3x² +9x - ''2'', no exemplo, podemos concluir que o valor que deve ser inserido no campo é o número '2', pois ele NÃO está acompanhado de um expoente e de uma letra. Sabendo disso, agora insira o valor da letra no campo referente a sua equação, boa sorte :)")
}

function irParaBhaskara(){
    const ANCORA = document.createElement("a");
    ANCORA.href = "#card-bhaskara";
    ANCORA.click();

}

function DeltaResolver(){
    var da = document.getElementById("dvalueA").value;
    var db = document.getElementById("dvalueB").value;
    var dc = document.getElementById("dvalueC").value;

    if(!da){
        window.alert("Insira o valor de A");
    }
    else{
        if(!db){
            window.alert("Insira o valor de B");
        }
        else{
            if(!dc){
                window.alert("Insira o valor de C");
            }
            else{
                var adelta = document.getElementById("dvalueA").value;
                var abhaskara = document.getElementById("bvalueA");
                abhaskara.value = adelta;

                var bdelta = document.getElementById("dvalueB").value;
                var bbhaskara = document.getElementById("bvalueB");
                bbhaskara.value = bdelta;

                var expoenteb = db * db;
                var resolucaoac = -4 * da * dc;
                var sinal = "";
                delta = expoenteb + resolucaoac;
                if(resolucaoac < 0){
                    sinal = expoenteb+" "+resolucaoac;
                }
                else{
                    sinal = +expoenteb+" + "+resolucaoac;
                }
                window.alert(
                "0° Desenha a Fórmula Original: \nb² - 4. a . c\n\n"+
                "1° Reformule a Fórmula de Acordo com os seus Valores:\n"+db+"² - 4. "+da+" . "+dc+"\n\n"+
                "2° Resolva o Expoente: \n"+db * db+" - 4. "+da+" . "+dc+"\n\n"+
                "3° Faça a multiplicação: \n"+sinal+"\n\n"+
                "4° Resposta:\nΔ = "+delta);

                var deltabhaskara = document.getElementById("bvalueDelta");
                deltabhaskara.value = delta;
            }
        }
    }
}
function ExplicaoDelta(){
    window.alert("O delta é um valor dado pela seguinte expressão: Δ = b2 – 4ac, em que a, b e c são coeficientes da equação e Δ é delta.");
}

function ExplicaoX1(){
    window.alert("Em bhaskara, sempre deverá haver dois valores a serem descobertos, X1 e X2, a diferença de cada um acontece na fórmula, maa é minima, sendo que a fórmula de bhaskara do X1 é x = – b + √Δ /2a");
}

function ExplicaoX2(){
    window.alert("Em bhaskara, sempre deverá haver dois valores a serem descobertos, X1 e X2, a diferença de cada um acontece na fórmula, maa é minima, sendo que a fórmula de bhaskara do X2 é x = – b - √Δ /2a");
}

function X1(){
    var ba = document.getElementById("bvalueA").value;
    var bb = document.getElementById("bvalueB").value;
    var bdelta = document.getElementById("bvalueDelta").value;
    if(!ba){
        window.alert("Insira o valor de A");
    }
    else{
        if(!bb){
        window.alert("Insira o valor de B");
        }
        else{
            if(!bdelta){
            window.alert("Insira o valor do Delta");
            }
            else{
                var deltaquadrado = Math. sqrt(x = bdelta);
                var multifracao = 2*ba;
                var soma = - bb+deltaquadrado;
                var menos = - bb-deltaquadrado;
                window.alert(
                    "Encontrando o X1:\n"+
                    "0 Desenha a Fórmula Original (X1):\nx = – b ± √Δ /2a\n\n"+
                    "1° Reformule a Fórmula de Acordo com os seus Valores (X1):\n"+"- "+bb+" + √"+bdelta+" /2. "+ba+"\n\n"+
                    "2° Resolva a regra de sinal no B (X1):\n"+- bb+" + √"+bdelta+" /2. "+ba+"\n\n"+
                    "3° Resolva a raiz quadrada do delta (X1):\n"+- bb+" + "+deltaquadrado+" /2. "+ba+"\n\n"+
                    "4° Resolva a multiplicação da fração (X1):\n"+- bb+" + "+deltaquadrado+" /"+multifracao+"\n\n"+
                    "5° Resolva a soma (X1):\n"+- bb+deltaquadrado+" /"+multifracao+"\n\n"+
                    "6° Resolva a fração/divisão (X1):\n"+soma/multifracao+"\n\n"+
                    "7° Resultado do X1 (X1):\nX1 = "+soma/multifracao
                )
            }
        }
    }
}
function X2(){
    var ba = document.getElementById("bvalueA").value;
    var bb = document.getElementById("bvalueB").value;
    var bdelta = document.getElementById("bvalueDelta").value;
    if(!ba){
        window.alert("Insira o valor de A");
    }
    else{
        if(!bb){
        window.alert("Insira o valor de B");
        }
        else{
            if(!bdelta){
            window.alert("Insira o valor do Delta");
            }
            else{
                var deltaquadrado = Math. sqrt(x = bdelta);
                var multifracao = 2*ba;
                var soma = - bb+deltaquadrado;
                var menos = - bb-deltaquadrado;
    window.alert(
                    "Encontrando o X2:\n"+
                    "0 Desenha a Fórmula Original (X2):\nx = – b ± √Δ /2a\n\n"+
                    "1° Reformule a Fórmula de Acordo com os seus Valores (X2):\n"+"- "+bb+" + √"+bdelta+" /2. "+ba+"\n\n"+
                    "2° Resolva a regra de sinal no B (X2):\n"+- bb+" + √"+bdelta+" /2. "+ba+"\n\n"+
                    "3° Resolva a raiz quadrada do delta (X2):\n"+- bb+" + "+deltaquadrado+" /2. "+ba+"\n\n"+
                    "4° Resolva a multiplicação da fração (X2):\n"+- bb+" + "+deltaquadrado+" /"+multifracao+"\n\n"+
                    "5° Resolva a soma (X2):\n"+- bb+deltaquadrado+" /"+multifracao+"\n\n"+
                    "6° Resolva a fração/divisão (X2):\n"+menos/multifracao+"\n\n"+
                    "7° Resultado do X2 (X2):\nX2 = "+menos/multifracao
                );
            }
        }
    }
}
function bhaskararesolver(){
    var ba = document.getElementById("bvalueA").value;
    var bb = document.getElementById("bvalueB").value;
    var bdelta = document.getElementById("bvalueDelta").value;
    if(!ba){
        window.alert("Insira o valor de A");
    }
    else{
        if(!bb){
        window.alert("Insira o valor de B");
        }
        else{
            if(!bdelta){
            window.alert("Insira o valor do Delta");
            }
            else{
                var deltaquadrado = Math. sqrt(x = bdelta);
                var multifracao = 2*ba;
                var soma = - bb+deltaquadrado;
                var menos = - bb-deltaquadrado;
                window.alert(
                    "Encontrando o X1:\n"+
                    "0 Desenha a Fórmula Original (X1):\nx = – b ± √Δ /2a\n\n"+
                    "1° Reformule a Fórmula de Acordo com os seus Valores (X1):\n"+"- "+bb+" + √"+bdelta+" /2. "+ba+"\n\n"+
                    "2° Resolva a regra de sinal no B (X1):\n"+- bb+" + √"+bdelta+" /2. "+ba+"\n\n"+
                    "3° Resolva a raiz quadrada do delta (X1):\n"+- bb+" + "+deltaquadrado+" /2. "+ba+"\n\n"+
                    "4° Resolva a multiplicação da fração (X1):\n"+- bb+" + "+deltaquadrado+" /"+multifracao+"\n\n"+
                    "5° Resolva a soma (X1):\n"+- bb+deltaquadrado+" /"+multifracao+"\n\n"+
                    "6° Resolva a fração/divisão (X1):\n"+soma/multifracao+"\n\n"+
                    "7° Resultado do X1 (X1):\nX1 = "+soma/multifracao
                )
                window.alert(
                    "Encontrando o X2:\n"+
                    "0 Desenha a Fórmula Original (X2):\nx = – b ± √Δ /2a\n\n"+
                    "1° Reformule a Fórmula de Acordo com os seus Valores (X2):\n"+"- "+bb+" + √"+bdelta+" /2. "+ba+"\n\n"+
                    "2° Resolva a regra de sinal no B (X2):\n"+- bb+" + √"+bdelta+" /2. "+ba+"\n\n"+
                    "3° Resolva a raiz quadrada do delta (X2):\n"+- bb+" + "+deltaquadrado+" /2. "+ba+"\n\n"+
                    "4° Resolva a multiplicação da fração (X2):\n"+- bb+" + "+deltaquadrado+" /"+multifracao+"\n\n"+
                    "5° Resolva a soma (X2):\n"+- bb+deltaquadrado+" /"+multifracao+"\n\n"+
                    "6° Resolva a fração/divisão (X2):\n"+menos/multifracao+"\n\n"+
                    "7° Resultado do X2 (X2):\nX2 = "+menos/multifracao
                );

                window.alert(
                    "Respostas:\n\n"+
                    "X1 = "+soma/multifracao+"\n"+
                    "X2 = "+menos/multifracao+"\n"
                );
            }
        }
    }
}
