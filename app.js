const readline = require('readline-sync');

var vitoria = null;

// Superclasse Personagem
class Personagem {
    constructor(nome, poderAtaque, vida) {
      this.nome = nome;
      this.poderAtaque = poderAtaque;
      this.vida = vida;
    }
  
    receberDano(dano) {
      this.vida -= dano;
      console.log(`\n${this.nome} recebeu ${dano} de dano. Vida restante: ${this.vida}.`);
    }
  
    
}
  
  // Classe derivada Principal
  class Principal extends Personagem {
    constructor(nome, poderAtaque, vida, superAtaque) {
      super(nome, poderAtaque, vida);
      this.superAtaque = superAtaque;
    }
    
    //Acabou que não implementei essa funcionalidade no jogo, fica pra proxima atualização. 
    usarSuperAtaque() {
      console.log(`${this.nome} usou Super Ataque com poder de ${this.superAtaque}!`);
    }
  }
  
  // Classe derivada Adversario
  class Adversario extends Personagem {
    constructor(nome, poderAtaque, vida, superDefesa) {
      super(nome, poderAtaque, vida);
      this.superDefesa = superDefesa;
    }

    //Acabou que não implementei essa funcionalidade no jogo, fica pra proxima atualização.
    usarSuperDefesa() {
      console.log(`${this.nome} usou Super Defesa com poder de ${this.superDefesa}!`);
    }
  }

// Elaboracao das funções
// Função para mostrar stutus dos lutadores
function status (protagonista, adversario) {
  console.log('Status dos lutadores:');
  console.log(`Você | Ataque: ${protagonista.poderAtaque} | Vida: ${protagonista.vida}`);
  console.log(`${adversario.nome} | Ataque: ${adversario.poderAtaque} | Vida: ${adversario.vida}`);
}

// Função de batalha
function batalha (protagonista, adversario, tempoDeExecucao) {
  while (true) {
    console.log(`\nVocê: ${protagonista.vida} `);
    console.log(`Holyfield: ${adversario.vida}\n`);
    
    if (protagonista.vida <= 0 ) {
      vitoria = false
      break; // Sai do loop caso algum dos personagens perca a batalha
    }
    
    if ( adversario.vida <= 0 ) {
      vitoria = true
      break; // Sai do loop caso algum dos personagens perca a batalha
    }
  
    // Determina a quantidade de caracteres que vai aparecer na tela (entre 1 e 3)
    let qtd = Math.floor(Math.random() * 3) + 1;
    
    var str = ''; 
    
    
    for (let i = 0; i < qtd; i++) {
      const caractere = String.fromCharCode(Math.floor(Math.random() * 26) + 97); // Gera um caractere aleatório entre 'a' e 'z'
      str += caractere; //junta o caractere sorteado com a string
    }
  
    //determina o tempo de resposta
    console.log(str)
    const inicio = new Date();
    const data = readline.question('');
    const fim = new Date();
  
    const tempoGasto = fim - inicio; // Calcula o tempo total gasto com a entrada de dados
    
    if (data == str && tempoGasto < tempoDeExecucao) { 
      adversario.receberDano(protagonista.poderAtaque); // Se o tempo gasto for menor que o limite e a sequcia de caracteres estiver correta, o adversário recebe dano de ataque
    }
    
    else if (data == str && tempoGasto >= tempoDeExecucao) {
      protagonista.receberDano(adversario.poderAtaque); // Se o tempo gasto for maior que o limite o protagonista sofre dano. 
    }
  
    else {
      protagonista.receberDano(adversario.poderAtaque); // caso a entrada de dados esteja diferente da sorteada, o protagosnista sofre dano
    }
  
  }
}

function mensagemDerrota(){
  console.log('\nVocê não é o campeão do Clube da Luta!');
  console.log('Pressione Enter para continuar...');
  readline.question('');
}

// Inicio do script do jogo
console.log('\nClube da Luta, o jogo');
console.log('\nVocê está participando em um campeonato de luta clandestina, no subsolo de um edificio no centro de São Paulo.');
console.log('\nPremiação:')
console.log('1º Lugar: R$5000,00');
console.log('2º Lugar: R$3000,00');
console.log('3º Lugar: R$1000,00');
console.log('\nInscrição: R$100,00');

console.log('\nPressione Enter para continuar...');
readline.question('');
console.log('Você está tenso esperando a fase final, está com a pensão atrasada e com risco de ser preso.');
console.log('Nas 2 primeiras etapas você se classificou com folga, ganhando tranquilamente de seus adversários. Agora se encontra na fase de preparação para o quadrangular final (onde restam 4 competidores). ');
console.log('Para você só resta ser campeão, pois sua dívida esta em R$4450,00');

console.log('\nPressione Enter para continuar...');
readline.question('');

const protagonista = new Principal('Você', 50, 200, 100);
const ad1 = new Adversario('Holyfield', 40, 200, 80);

status(protagonista, ad1);

console.log('\nPressione Enter para continuar...');
readline.question('');

console.log('Tutorial de combate:');
console.log('Irá aparecer no console caracteres (as vezes um e as vezes dois ou três) e você tem que digitar os caracteres corretos no menor tempo possivel. Se digitar o caractere errado ou demorar mais de 2 segundos irá sofrer dano de ataque adversário.');

console.log('\nA luta vai começar!');

console.log('\nPressione Enter para começar...');
readline.question('');

batalha(protagonista, ad1, 2000); 

console.log('Pressione Enter para continuar...');
readline.question('');

if (vitoria) {

  const ad2 = new Adversario('Maguila', 50, 200, 80);
  protagonista.vida = 200

  console.log('\nVocê venceu!') 
  console.log('Pressione Enter para continuar...');
  readline.question('');

  console.log('Agora a final se aproxima. Maguila nunca perdeu uma partida, Mas você vai confiante, 3 anos sem perder no Clube da Luta.');

  console.log('Pressione Enter para continuar...');
  readline.question('');

  console.log('\nA luta vai começar!\n');
  status(protagonista, ad2);

  console.log('\nObservação: Contra o Maguila o tempo limite sera de 1.8 segundos.');
  console.log('\nPreparado?');

  console.log('Pressione Enter para começar a partida...');
  readline.question('');  

  batalha(protagonista, ad2, 1800);

  if (vitoria) {
    console.log('\nVocê é o campeão do Clube da Luta!');
    console.log('Pressione Enter para continuar...');
    readline.question('');

    console.log('A torcida grita: É campeão! É campeão!');

    console.log('Pressione Enter para continuar...');
    readline.question('');

    console.log('Agora você respira aliviado, repensa seus gastos para não passar por esse aperto novamente!.')

    console.log('\nFim\n')
  }

  // Caso perca a segunda luta
  else {
    mensagemDerrota()
  }

}

// Caso perca a primeira luta
else {
    mensagemDerrota()
}
  