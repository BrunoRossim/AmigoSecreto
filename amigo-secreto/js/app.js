//criando um array para a funcao sortear.
let amigos = [];

//criando funcao adicionar com variavel.
function adicionar(){
    let amigo = document.getElementById('nome-amigo');
    //criando alerta caso não seja adicionado nenhum nome digitado no campo.
    if (amigo.value == ''){
        alert('Informe um nome válido!');
        //caso entre no if iremos parar o programa.
        return;
    }
    //validando que não aceite 1 nome igual a um ja pertencente em lista.
    if(amigos.includes(amigo.value)){
        alert('Nome ja em lista, digite ao menos 1 sobrenome!');
        return;
    }
    let lista = document.getElementById('lista-amigos');
    //incluindo o array na lista.
    amigos.push(amigo.value);
    //adicionando o que foi digitado no campo a lista, concatenando com vazios e virgulas e espaços.
    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    //limpar o campo quando termina de adicionar para que possamos escrever o novo nome sem precisar apagar o digitado anteriormente.
    amigo.value = '';
}

//criando funcao de sortear com array.
function sortear () {
    //validacao para executar sorteio com no minimo de 4 participantes.
    if(amigos.length < 4){
        alert('Adicione no mínimo 4 amigos!');
        return;
    }
    embaralha(amigos);
    //criando variavel fora do for para não precisar atribuir toda hora.
    let sorteio = document.getElementById('lista-sorteio');
    //estrutura de repeticao com for.
    for (let i = 0; i < amigos.length; i++){
        //fazendo if para que nao de erro no ultimo sorteio como undefined.
        if(i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' +  amigos[0] + '<br>';
        } else {
        //fazendo com que o i tire 1 + o proximo.
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>'
        } 
    }
}

//criando funcao para embaralhar o array com algoritimo FISHER-YATES.
function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        //atibuindo via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
        [lista[indiceAleatorio], lista[indice - 1]];
    }
}

//criando uma funcao para o reiniciar, declarando todas vazias.
function reiniciar(){
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}

