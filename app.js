const readline = require('readline-sync');

var vitoria = null;
// Superclasse Personagem
class Personagem {
    constructor(nome, poderAtaque, vida) {
      this.nome = nome;
      this.poderAtaque = poderAtaque;
      this.vida = vida;
    }
  
    atacar() {
      console.log(`${this.nome} atacou com poder de ataque ${this.poderAtaque}.`);
    }
  
    receberDano(dano) {
      this.vida -= dano;
      console.log(`${this.nome} recebeu ${dano} de dano. Vida restante: ${this.vida}.`);
    }
  
    mostrarStatus() {
      console.log(`Nome: ${this.nome}, Poder de Ataque: ${this.poderAtaque}, Vida: ${this.vida}`);
    }
}
  
  // Classe derivada Principal
  class Principal extends Personagem {
    constructor(nome, poderAtaque, vida, superAtaque) {
      super(nome, poderAtaque, vida);
      this.superAtaque = superAtaque;
    }
  
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
  
    usarSuperDefesa() {
      console.log(`${this.nome} usou Super Defesa com poder de ${this.superDefesa}!`);
    }
  }
  

console.log('\nClube da Luta, o jogo');
console.log('\nVocê esta participando em um campeonato de luta clandestina, no subsolo de um edificio no centro de São Paulo.');
console.log('\nPremiação:')
console.log('1º Lugar: R$5000,00');
console.log('2º Lugar: R$3000,00');
console.log('3º Lugar: R$1000,00');
console.log('\nInscrição: R$100,00');

console.log('\nPressione Enter para continuar...');
readline.question('');
console.log('Você esta tenso esperando a fase final, esta com a pensão atrasada e com risco de ser preso.');
console.log('As 2 primeiras etapas voce se classificou com folga, ganhando tranquilamente de seus adversarios. Agora esta no quadrangular final (onde restam 4 competidores). ');
console.log('Para você so resta ser campeão, pois sua divida esta em R$4450,00');

console.log('\nPressione Enter para continuar...');
readline.question('');

console.log('Status dos lutadores:');
console.log('Você | Ataque: 50 | Vida: 200 ');
console.log('Holyfield | Ataque: 40 | Vida: 200');

const protagonista = new Principal('Protagonista', 50, 200, 100);
const ad1 = new Adversario('Holyfield', 40, 200, 80);

console.log('\nPressione Enter para continuar...');
readline.question('');

console.log('Tutorial de combate:');
console.log('Ira aparecer no console caracteres (as vezes um e as vezes dois ou tres) e voce tem que digitar os caracteres corretos no menor tempo possivel. Se digitar o caractere errado ou demorar mais de 2 segundos ira sofrer dano de ataque adversario.');

console.log('\nA luta vai comecar!')

console.log('\nPressione Enter para começar...');
readline.question('');

while (true) {
  console.log(`\nVoce: ${protagonista.vida} `);
  console.log(`Holyfield: ${ad1.vida}\n`);
  
  if (protagonista.vida <= 0 ) {
    vitoria = false
    break; // Sai do loop caso algum dos personagens morra
  }
  
  if ( ad1.vida <= 0 ) {
    vitoria = true
    break; // Sai do loop caso algum dos personagens morra
  }

  // Determina a quantidade de caracteres que vai aparecer na tela (entre 1 e 3)
  let qtd = Math.floor(Math.random() * 3) + 1;
  
  var str = ''; 

  for (let i = 0; i < qtd; i++) {
    const caractere = String.fromCharCode(Math.floor(Math.random() * 26) + 97); // Gera um caractere aleatório entre 'a' e 'z'
    str += caractere; // Mostra o caractere na tela
    //const tempo = Math.random() * 1500 + 1000; // Gera um tempo aleatório entre 1000 e 2500 ms
    //setTimeout(() => { console.log(' '); }, tempo); // Espera o tempo aleatório para mostrar o próximo caractere
  }

  console.log(str)
  const inicio = new Date();
  const data = readline.question('');
  const fim = new Date();

  const tempoGasto = fim - inicio; // Calcula a diferença de tempo em milissegundos
  
  if (data == str && tempoGasto < 2000) {
    ad1.receberDano(protagonista.poderAtaque); // Se o tempo gasto for maior que 1500 ms, o adversário recebe dano do ataque do protagonista
  }
  
  else if (data == str && tempoGasto >= 2000) {
    protagonista.receberDano(ad1.poderAtaque);  
  }

  else {
    protagonista.receberDano(ad1.poderAtaque); 
  }

}

console.log('Pressione Enter para continuar...');
readline.question('');

if (vitoria) {
  console.log('\nParabéns! voce venceu! A final se aproxima, Maguila nunca perdeu uma partida. Mas voce vai confiante, 3 anos sem perder no Clube da Luta.');

  console.log('Pressione Enter para continuar...');
  readline.question('');

  console.log('\nA luta vai começar!');
  console.log('\nStatus dos lutadores:');
  console.log('Você | Ataque: 50 | Vida: 200 ');
  console.log('Maguila | Ataque: 50 | Vida: 200');

  console.log('\nObservacao: Contra o maguila o tempo limite sera de 1.8 segundos.');
  console.log('\nPreparado?');

  console.log('Pressione Enter para começar a partida...');
  readline.question('');  

  const ad2 = new Adversario('Maguila', 50, 200, 80);
  protagonista.vida = 200

  while (true) {
    console.log(`\nVoce: ${protagonista.vida} `);
    console.log(`Maguila: ${ad2.vida}\n`);
    
    if (protagonista.vida <= 0 ) {
      vitoria = false
      break; // Sai do loop caso algum dos personagens morra
    }
    
    if ( ad2.vida <= 0 ) {
      vitoria = true
      break; // Sai do loop caso algum dos personagens morra
    }
  
    // Determina a quantidade de caracteres que vai aparecer na tela (entre 1 e 3)
    let qtd = Math.floor(Math.random() * 3) + 1;
    
    var str = ''; 
  
    for (let i = 0; i < qtd; i++) {
      const caractere = String.fromCharCode(Math.floor(Math.random() * 26) + 97); // Gera um caractere aleatório entre 'a' e 'z'
      str += caractere; // Mostra o caractere na tela
      //const tempo = Math.random() * 1500 + 1000; // Gera um tempo aleatório entre 1000 e 2500 ms
      //setTimeout(() => { console.log(' '); }, tempo); // Espera o tempo aleatório para mostrar o próximo caractere
    }
  
    console.log(str)
    const inicio = new Date();
    const data = readline.question('');
    const fim = new Date();
  
    const tempoGasto = fim - inicio; // Calcula a diferença de tempo em milissegundos
    
    if (data == str && tempoGasto < 1800) {
      ad2.receberDano(protagonista.poderAtaque); // Se o tempo gasto for maior que 1500 ms, o adversário recebe dano do ataque do protagonista
    }
    
    else if (data == str && tempoGasto >= 1800) {
      protagonista.receberDano(ad2.poderAtaque);  
    }
  
    else {
      protagonista.receberDano(ad2.poderAtaque); 
    }
  
  }

  if (vitoria) {
    console.log('\nVoce é o campeão do Clube da Luta!');
    console.log('Pressione Enter para continuar...');
    readline.question('');

    console.log('A torcida grita: É campeão! É campeão');

    console.log('Pressione Enter para continuar...');
    readline.question('');

    console.log('Agora voce respira aliviado e com alguns hematomas, pagou a pensao e ainda sobrou uma grana para a cerveja!')

    console.log('\nFim')
  }

  else {
    console.log('\nVoce não é o campeão do Clube da Luta!');
    console.log('Pressione Enter para continuar...');
    readline.question('');
  }

}

else {
    console.log('\nVoce não é o campeão do Clube da Luta!');
    console.log('Pressione Enter para continuar...');
    readline.question('');
}

/*  
protagonista.mostrarStatus();
protagonista.atacar();
protagonista.usarSuperAtaque();
  
ad1.mostrarStatus();
ad1.atacar();
ad1.usarSuperDefesa();
  
  // Simulação de combate
protagonista.atacar();
ad1.receberDano(protagonista.poderAtaque);
  
ad1.atacar();
protagonista.receberDano(ad1.poderAtaque);

// Função para calcular o tempo gasto
function calcularTempoEntrada() {
    console.log('Pressione Enter para começar...');
    readline.question(''); // Aguarda o usuário pressionar Enter para iniciar
    const inicio = new Date(); // Captura o momento inicial
  
    console.log('y');
    readline.question(''); // Aguarda o usuário digitar algo e pressionar Enter
    const fim = new Date(); // Captura o momento final
  
    const tempoGasto = fim - inicio; // Calcula a diferença de tempo em milissegundos
    console.log(`Você gastou ${tempoGasto / 1000} segundos para pressionar Enter.`);
  }
  
  calcularTempoEntrada();
*/

  