/*
function selecionar

    Pega o elemento pelo id e colore ele de acordo com o estado anterior
    Ativa ou desativa o item clicado

*/
function selecionar(id) {


    const tela = document.getElementById(id);

    var displayTela = getComputedStyle(tela).getPropertyValue("border-color");

    if (displayTela == 'rgb(204, 204, 204)') {

        document.getElementById(id + "Icon").style.color = "#00bcd4";
        document.getElementById(id).style.borderColor = "#00bcd4";
    }

    if (displayTela == 'rgb(0, 188, 212)') {

        document.getElementById(id + "Icon").style.color = "rgb(204, 204, 204)";
        document.getElementById(id).style.borderColor = "rgb(204, 204, 204)";
    }



}

/*
function SSVoltar,CSVoltar,SSContinuar e CSContinuar

    São funções para colocar sombras nos botões, quando ele está em foco e quando perde o foco
*/

function SSVoltar() {
    document.getElementById('voltar').style.webkitBoxShadow = "none";
}

function CSVoltar() {
    document.getElementById('voltar').style.webkitBoxShadow = "0px 3px 16px 3px rgb(153 153 153 / 54%)";
}

function SSContinuar() {
    document.getElementById('continuar').style.webkitBoxShadow = "none";
}

function CSContinuar() {
    document.getElementById('continuar').style.webkitBoxShadow = "0px 3px 16px 3px rgb(153 153 153 / 54%)";
}

function SSVoltarSite() {
    document.getElementById('voltarSite').style.webkitBoxShadow = "none";
}

function CSVoltarSite() {
    document.getElementById('voltarSite').style.webkitBoxShadow = "0px 3px 16px 3px rgb(153 153 153 / 54%)";
}

var totalP1 = 0;
var totalP2 = 0;
var peso = 0;


function ocultarMostrar(id) {

    const t1 = document.getElementById("dispositivos-titulo");
    var dt1 = getComputedStyle(t1).getPropertyValue("display");

    const t2 = document.getElementById("servicos-titulo");
    var dt2 = getComputedStyle(t2).getPropertyValue("display");

    const t3 = document.getElementById("result-t");
    var dt3 = getComputedStyle(t3).getPropertyValue("display");


    if (id == "voltar") {

        if (dt1 == "block") {


        }
        if (dt2 == "block") {

            document.getElementById('dispositivos-titulo').style.display = "block";
            document.getElementById('dispositivos-conteudo').style.display = "flex";
            document.getElementById('servicos-titulo').style.display = "none";
            document.getElementById('servicos-conteudo').style.display = "none";
            document.getElementById('result-t').style.display = "none";
            document.getElementById('result-c').style.display = "none";

            document.getElementById('dispositivos').style.paddingBottom = "10px";
            document.getElementById('dispositivos').style.paddingTop = "10px";
            document.getElementById('dispositivos').style.paddingLeft = "10px";
            document.getElementById('dispositivos').style.zIndex = "1";
            document.getElementById('dispositivos').style.backgroundColor = "#00BCD4";
            document.getElementById('dispositivos').style.borderRadius = "6px";
            document.getElementById('dispositivos').style.webkitBoxShadow = "0 16px 26px -10px rgb(0 188 212 / 56%), 0 4px 25px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 188 212 / 20%)";

            document.getElementById('servicos').style.paddingBottom = "0px";
            document.getElementById('servicos').style.paddingTop = "0px";
            document.getElementById('servicos').style.paddingLeft = "0px";
            document.getElementById('servicos').style.zIndex = "2";
            document.getElementById('servicos').style.backgroundColor = "#ECEEEF";
            document.getElementById('servicos').style.borderRadius = "0px";
            document.getElementById('servicos').style.webkitBoxShadow = "none";


            document.getElementById('resultado').style.paddingBottom = "0px";
            document.getElementById('resultado').style.paddingTop = "0px";
            document.getElementById('resultado').style.paddingLeft = "0px";
            document.getElementById('resultado').style.zIndex = "2";
            document.getElementById('resultado').style.backgroundColor = "#ECEEEF";
            document.getElementById('resultado').style.borderRadius = "0px";
            document.getElementById('resultado').style.webkitBoxShadow = "none";

        }

        if (dt3 == "block") {

            document.getElementById('dispositivos-titulo').style.display = "none";
            document.getElementById('dispositivos-conteudo').style.display = "none";
            document.getElementById('servicos-titulo').style.display = "block";
            document.getElementById('servicos-conteudo').style.display = "flex";
            document.getElementById('result-t').style.display = "none";
            document.getElementById('result-c').style.display = "none";

            document.getElementById('dispositivos').style.paddingBottom = "0px";
            document.getElementById('dispositivos').style.paddingTop = "0px";
            document.getElementById('dispositivos').style.paddingLeft = "0px";
            document.getElementById('dispositivos').style.zIndex = "2";
            document.getElementById('dispositivos').style.backgroundColor = "#ECEEEF";
            document.getElementById('dispositivos').style.borderRadius = "0px";
            document.getElementById('dispositivos').style.webkitBoxShadow = "none";

            document.getElementById('servicos').style.paddingBottom = "10px";
            document.getElementById('servicos').style.paddingTop = "10px";
            document.getElementById('servicos').style.paddingLeft = "10px";
            document.getElementById('servicos').style.zIndex = "1";
            document.getElementById('servicos').style.backgroundColor = "#00BCD4";
            document.getElementById('servicos').style.borderRadius = "6px";
            document.getElementById('servicos').style.webkitBoxShadow = "0 16px 26px -10px rgb(0 188 212 / 56%), 0 4px 25px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 188 212 / 20%)";

            document.getElementById('resultado').style.paddingBottom = "0px";
            document.getElementById('resultado').style.paddingTop = "0px";
            document.getElementById('resultado').style.paddingLeft = "0px";
            document.getElementById('resultado').style.zIndex = "2";
            document.getElementById('resultado').style.backgroundColor = "#ECEEEF";
            document.getElementById('resultado').style.borderRadius = "0px";
            document.getElementById('resultado').style.webkitBoxShadow = "none";


        }

    }

    if (id == "continuar") {


        if (dt3 == "block") {

        }

        if (dt2 == "block") {



            document.getElementById('dispositivos-titulo').style.display = "none";
            document.getElementById('dispositivos-conteudo').style.display = "none";
            document.getElementById('servicos-titulo').style.display = "none";
            document.getElementById('servicos-conteudo').style.display = "none";
            document.getElementById('result-t').style.display = "block";
            document.getElementById('result-c').style.display = "flex";

            document.getElementById('dispositivos').style.paddingBottom = "0px";
            document.getElementById('dispositivos').style.paddingTop = "0px";
            document.getElementById('dispositivos').style.paddingLeft = "0px";
            document.getElementById('dispositivos').style.zIndex = "2";
            document.getElementById('dispositivos').style.backgroundColor = "#ECEEEF";
            document.getElementById('dispositivos').style.borderRadius = "0px";
            document.getElementById('dispositivos').style.webkitBoxShadow = "none";

            document.getElementById('servicos').style.paddingBottom = "0px";
            document.getElementById('servicos').style.paddingTop = "0px";
            document.getElementById('servicos').style.paddingLeft = "0px";
            document.getElementById('servicos').style.zIndex = "2";
            document.getElementById('servicos').style.backgroundColor = "#ECEEEF";
            document.getElementById('servicos').style.borderRadius = "0px";
            document.getElementById('servicos').style.webkitBoxShadow = "none";

            document.getElementById('resultado').style.paddingBottom = "10px";
            document.getElementById('resultado').style.paddingTop = "10px";
            document.getElementById('resultado').style.paddingLeft = "10px";
            document.getElementById('resultado').style.zIndex = "1";
            document.getElementById('resultado').style.backgroundColor = "#00BCD4";
            document.getElementById('resultado').style.borderRadius = "6px";
            document.getElementById('resultado').style.webkitBoxShadow = "0 16px 26px -10px rgb(0 188 212 / 56%), 0 4px 25px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 188 212 / 20%)";

            var qtd1 = Number(document.getElementById('input-cel').value);
            var qtd2 = Number(document.getElementById('input-not').value);
            var qtd3 = Number(document.getElementById('input-tab').value);
            var qtd4 = Number(document.getElementById('input-stv').value);
            var qtd5 = Number(document.getElementById('input-st4').value);
            var qtd6 = Number(document.getElementById('input-cam').value);
            var qtd7 = Number(document.getElementById('input-vig').value);

            totalP1 = qtd1 + qtd2 + qtd3 + qtd4 + qtd5 + qtd6 + qtd7;



            const te1 = document.getElementById('te');
            var d1 = getComputedStyle(te1).getPropertyValue("border-color");

            const rs1 = document.getElementById('rs');
            var d2 = getComputedStyle(rs1).getPropertyValue("border-color");

            const hp1 = document.getElementById('hp');
            var d3 = getComputedStyle(hp1).getPropertyValue("border-color");

            const fv1 = document.getElementById('fv');
            var d4 = getComputedStyle(fv1).getPropertyValue("border-color");

            const dc1 = document.getElementById('dc');
            var d5 = getComputedStyle(dc1).getPropertyValue("border-color");

            const fm1 = document.getElementById('fm');
            var d6 = getComputedStyle(fm1).getPropertyValue("border-color");

            const vd1 = document.getElementById('vd');
            var d7 = getComputedStyle(vd1).getPropertyValue("border-color");

            const dl1 = document.getElementById('dl');
            var d8 = getComputedStyle(dl1).getPropertyValue("border-color");

            const dm1 = document.getElementById('dm');
            var d9 = getComputedStyle(dm1).getPropertyValue("border-color");

            const dp1 = document.getElementById('dp');
            var d10 = getComputedStyle(dp1).getPropertyValue("border-color");

            var equipamentos = [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10];

            //rgb(0, 188, 212) ativo
            //rgb(204, 204, 204)

            equipamentos.forEach(myFunction);

            function myFunction(value, index, array) {

                //alert(index);

                if (value == "rgb(0, 188, 212)") {

                    totalP2++;

                    if (index == 0 || index == 1 || index == 2 || index == 7) {

                        var pesoAtual = 1;

                        if (pesoAtual > peso) {
                            peso = 1
                        }
                    }
                    if (index == 8 || index == 3 || index == 5 || index == 9) {

                        var pesoAtual = 2;

                        if (pesoAtual > peso) {
                            peso = 2
                        }

                    }
                    if (index == 6 || index == 4) {

                        var pesoAtual = 3;

                        if (pesoAtual > peso) {
                            peso = 3
                        }

                    }

                }

            }

            if (totalP1 != 0) {

                if (totalP1 <= 1) { // 1

                    // planos de 20
                    if (peso == 3) {
                        document.getElementById('result-t').innerHTML = "<h3>O Plano ideal para sua necessidade é: </h3>";
                        document.getElementById('quantidade').innerHTML = "Plano de 200 Megas";
                    }

                    if (peso == 2) {
                        document.getElementById('result-t').innerHTML = "<h3>O Plano ideal para sua necessidade é: </h3>";
                        document.getElementById('quantidade').innerHTML = "Plano de 50 Megas";
                    }

                    if (peso == 1) {
                        document.getElementById('result-t').innerHTML = "<h3>O Plano ideal para sua necessidade é: </h3>";
                        document.getElementById('quantidade').innerHTML = "Plano de 20 Megas";
                    }

                }
                if (totalP1 > 1 && totalP1 <= 2) { // 2
                    //plano de 50
                    if (peso == 3) {
                        document.getElementById('result-t').innerHTML = "<h3>O Plano ideal para sua necessidade é: </h3>";
                        document.getElementById('quantidade').innerHTML = "Plano de 200 Megas";
                    }

                    if (peso == 2) {
                        document.getElementById('result-t').innerHTML = "<h3>O Plano ideal para sua necessidade é: </h3>";
                        document.getElementById('quantidade').innerHTML = "Plano de 100 Megas";
                    }

                    if (peso == 1) {
                        document.getElementById('result-t').innerHTML = "<h3>O Plano ideal para sua necessidade é: </h3>";
                        document.getElementById('quantidade').innerHTML = "Plano de 50 Megas";
                    }

                    // live / streamer

                }
                if (totalP1 > 2 && totalP1 <= 4) { // 
                    // planos de 100
                    if (peso == 3) {
                        document.getElementById('result-t').innerHTML = "<h3>O Plano ideal para sua necessidade é: </h3>";
                        document.getElementById('quantidade').innerHTML = "Plano de 200 Megas";
                    }

                    if (peso == 2) {
                        document.getElementById('result-t').innerHTML = "<h3>O Plano ideal para sua necessidade é: </h3>";
                        document.getElementById('quantidade').innerHTML = "Plano de 200 Megas";
                    }

                    if (peso == 1) {
                        document.getElementById('result-t').innerHTML = "<h3>O Plano ideal para sua necessidade é: </h3>";
                        document.getElementById('quantidade').innerHTML = "Plano de 100 Megas";
                    }

                }
                if (totalP1 > 5) { // 
                    // planos de 200
                    if (peso == 3) {
                        document.getElementById('result-t').innerHTML = "<h3>O Plano ideal para sua necessidade é: </h3>";
                        document.getElementById('quantidade').innerHTML = "Plano de 200 Megas";
                    }

                    if (peso == 2) {
                        document.getElementById('result-t').innerHTML = "<h3>O Plano ideal para sua necessidade é: </h3>";
                        document.getElementById('quantidade').innerHTML = "Plano de 200 Megas";
                    }

                    if (peso == 1) {
                        document.getElementById('result-t').innerHTML = "<h3>O Plano ideal para sua necessidade é: </h3>";
                        document.getElementById('quantidade').innerHTML = "Plano de 200 Megas";
                    }

                }

            }

            if (totalP1 == 0 || totalP2 == 0) {

                document.getElementById('result-t').innerHTML = "<h3>Preencha os seguintes campos</h3>";
                document.getElementById('quantidade').innerHTML = "Dispositivos e Serviços";
            }

            totalP1 = 0;
            totalP2 = 0;
            peso = 0;
            // final do comando de calcular



        }

        if (dt1 == "block") {

            document.getElementById('dispositivos-titulo').style.display = "none";
            document.getElementById('dispositivos-conteudo').style.display = "none";
            document.getElementById('servicos-titulo').style.display = "block";
            document.getElementById('servicos-conteudo').style.display = "flex";
            document.getElementById('result-t').style.display = "none";
            document.getElementById('result-c').style.display = "none";

            document.getElementById('dispositivos').style.paddingBottom = "0px";
            document.getElementById('dispositivos').style.paddingTop = "0px";
            document.getElementById('dispositivos').style.paddingLeft = "0px";
            document.getElementById('dispositivos').style.zIndex = "2";
            document.getElementById('dispositivos').style.backgroundColor = "#ECEEEF";
            document.getElementById('dispositivos').style.borderRadius = "0px";
            document.getElementById('dispositivos').style.webkitBoxShadow = "none";

            document.getElementById('servicos').style.paddingBottom = "10px";
            document.getElementById('servicos').style.paddingTop = "10px";
            document.getElementById('servicos').style.paddingLeft = "10px";
            document.getElementById('servicos').style.zIndex = "2";
            document.getElementById('servicos').style.backgroundColor = "#00BCD4";
            document.getElementById('servicos').style.borderRadius = "6px";
            document.getElementById('servicos').style.webkitBoxShadow = "0 16px 26px -10px rgb(0 188 212 / 56%), 0 4px 25px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 188 212 / 20%)";

            document.getElementById('resultado').style.paddingBottom = "0px";
            document.getElementById('resultado').style.paddingTop = "0px";
            document.getElementById('resultado').style.paddingLeft = "0px";
            document.getElementById('resultado').style.zIndex = "2";
            document.getElementById('resultado').style.backgroundColor = "#ECEEEF";
            document.getElementById('resultado').style.borderRadius = "0px";
            document.getElementById('resultado').style.webkitBoxShadow = "none";

        }

    }

}