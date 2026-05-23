# Resumão

## Conceitos importantes
Antes de qualquer coisa, é importante conhecer alguns conceitos não limitados à escrita do código.

### O que é uma linguagem de programação?
Uma linguagem de programação é a união de um grupo de palavras-chave, geralmente em inglês, com algo que torna essas palavras compreensíveis para o computador, podendo ser um compilador ou interpretador.

Algumas linguagens são compiladas, outras interpretadas.
A compilação é um processo que confere todo o seu código e gera um arquivo executável com as especificações do seu processador.
A interpretação é uma abordagem diferente, onde o código é "traduzido" linha por linha em tempo real.

Geralmente, programas em linguagens compiladas costumam ser mais seguras por conta da conferência no início do processo, enquanto linguagens interpretadas podem seguir após um erro de lógica e apenas quebrar quando algo der muito errado.

Com isso, temos os termos "compile time" e "runtime", onde compile time é o momento onde um programa está sendo compilado e runtime é o momento em que o programa está rodando. Logo, programas compilados garantem segurança no compile time enquanto programas interpretados arriscam erros no runtime.

### Como o JavaScript funciona
Além disso, como estamos lidando com JavaScript, uma linguagem interpretada. Porém, essa linguagem foi inicialmente feita para ser usada apenas em navegadores... mas nós estamos usando fora do navegador...? Como assim???
Isso é possível porque eventualmente foi criado o Nodejs, um runtime que permite o uso dessa linguagem em terminais.

Note que existem alguns runtimes semelhantes ao Node, como o Yarn e Bun. E da mesma forma, temos navegadores com bases diferentes, como Chromium e FireFox.
Isso significa que cada um desses projetos tem a sua própria implementação (ou versão) do JavaScript (feitas em C e/ou C++), o que fica muito notável quando usamos essa linguagem dentro e fora do navegador, onde ambas têm suas variáveis únicas disponíveis apenas no runtime.

### Editores de texto
Temos também a questão do editor que usaremos para desenvolver nossos programas, que está mais ligada à abordagem que é mais compatível com cada um.
- Ambiente de desenvolvimento: feito em uma janela com alta compatibilidade ao mouse, possui não apenas a edição de texto como também um terminal, seletor de arquivos e até mesmo um depurador embutidos.
- Ambiente minimalista: geralmente composto por terminais com várias abas e dividido em painéis, simulando a experiência do ambiente visual porém completamente no terminal, com a utilização de menos recursos e, muitas vezes, com níveis maiores de customização.


## Variáveis
Uma variável armazena um valor na memória que pode ser acessado por um nome personalizado.
Variáveis podem ser declaradas com três possíveis palavras-chave:
- `var`: permite alteração do valor atribuído. Também permite que a variável seja acessada por todo o código-fonte do programa (perigoso).
- `let`: semelhante ao `var` porém respeita os limites do escopo em que foi declarado.
- `const`: respeita os escopos porém seu valor não pode ser alterado.

### Quando usar cada uma?
- Use `var` apenas em casos muito, _muito_ específicos como em arquivos de declaração em uma biblioteca.
- Use `let` para qualquer valor que pode não estar pronto de uma só vez.
- Use `const` quando um valor **absolutamente não deve mudar**. (recomendável usar quando possível pra garantir um pouco mais de segurança) 

### Exemplos
```js
var global = "1.28.215"; // versão de um programa
let nome = "Liz";        // em algum momento, seu nome pode mudar
const cpf = 12345678911; // imagino que não seria legal se um cpf mudasse
```


## Tipos de dados
Existem vários tipos de dados, sendo eles simples ou complexos.
Qualquer valor que pode ser retornado tem um tipo, independente se é um número, string, array, objeto, classe ou até outra coisa.

### Tipos simples
Variáveis podem receber muitos tipos diferentes de dados – cada um com seu propósito.
- `number`: representa um número – seja ele inteiro, decimal ou até infinito. Também pode ser `NaN` ("Not a Number" ou "não-número"), o que pode corromper cálculos e facilmente causar erros.
- `string`: representa um texto – pode ser uma palavra ou frase; um único caractere ou até mesmo um livro inteiro (se o js aguentar); pode ser até mesmo um emoji. Contando que seja visto como um texto (utilizando `""`, `''` ou ``), é uma `string`.
- `boolean`: representa algo que é verdade ou não com apenas dois possíveis valores: `true` ou `false`. Quando fazemos comparações em condicionais, o que acontece em seguida depende se aquela comparação será verdadeira ou não.
  - Exemplo: "esse número é maior que 5?" ou "esse texto tem um comprimento de pelo menos 20 caracteres?"
- `symbol`: usado para definir um valor único.
- `null`: usado para definir explicitamente que uma variável não tem um valor apropriado definido, seja porque algo ainda não aconteceu ou porque uma condição não foi atendida.
- `undefined`: representa a falta não intencional de um valor apropriado – frequentemente relacionado às causas de erros.

### Estruturas de dados

#### Arrays
Também chamadas de listas, são uma série de valores ordenados na memória do computador.

##### Exemplos
```js
/*
 * Arrays podem conter valores de tipos diferentes em JavaScript porém isso cria uma abertura para erros.
 * Por isso, sempre que criar uma array, é desejado que um padrão seja seguido entre os elementos para evitar erros.
 */
const nums = [4, 8, 5, 17];
const strs = ["um", "dois", "três", "quatro"];

// Podemos adicionar e remover itens em uma array.
strs.push("cinco");               // ["um", "dois", "três", "quatro", "cinco"]
strs.unshift("zero");             // ["zero", "um", "dois", "três", "quatro", "cinco"]
strs.shift();                     // ["um", "dois", "três", "quatro", "cinco"]
strs.pop();                       // ["um", "dois", "três", "quatro"]
strs.splice(2, 0, "dois e meio"); // ["um", "dois", "dois e meio", "três", "quatro"]
/*                ^^^^^^^^^^^^^--- conteúdo a ser inserido
               ^------------------ itens à direita para remover
            ^--------------------- posição a ser inserido
*/


/*
 * ./Ilustração de como a array `nums` se parece na memória\.
 * valores:  4 8 5 17
 * indices:  0 1 2 3
 * ponteiro: ^
 */

// Arrays também podem conter outras arrays, estrutura chamada de matriz.
// Ao usar uma matriz, costuma ser desejado que todas as arrays internas tenham o mesmo comprimento (quantidade atual de itens) ou capacidade (quantidade máxima de itens).
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Valores de uma array podem ser acessados com colchetes e um índice, indicando a posição na array. Lembrando que o índice inicial é 0.
console.log(nums[0]); // 4
console.log(nums[1]); // 8
console.log(strs[1]); // "dois"

console.log(matriz[0][0]); // 1
console.log(matriz[1][0]); // 4
console.log(matriz[2][2]); // 9
/*                    ^------------ índice da array interna
                   ^--------------- índice da array externa
*/

// Note que acessar um valor além do limite de uma array retorna `undefined`.
// Em linguagens mais restritas, isso causaria um erro Out Of Bounds (fora dos limites).
console.log(nums[40]);     // undefined
console.log(matriz[3][0]); // undefined
```

#### Objetos
Estrutura semelhante ao array onde cada elemento tem um nome e é declarada com a sintaxe chave-valor.
Um objeto pode armazenas dados de qualquer tipo, contando que nenhuma propriedade altere seu tipo.

##### Exemplos
```js
const pessoa = {
  nome: "Liz",
  telefone: 12912345678,
  contas: [
    {
      titulo: " .'* pessoal *'. ",
      email: "ab.c@gmail.com"
    },
    {
      titulo: "Professional :/",
      email: "ab.cd@gmail.com"
    }
  ],
  dizerOla: () => console.log("Olá o/"),
  ["muitas coisas"]: "imagina um texto muito legal aqui"
};

// uma propriedade pode ser acessada com um `.`
console.log(pessoa.nome); // "Liz"
pessoa.dizerOla();        // "Olá o/"

// propriedades definidas com caracteres especiais devem ser acessadas com colchetes contendo o nome da chave em uma string
// isso vai fazer mais sentido assim que termos uma aula sobre requisições HTTP. não vou adicionar uma sessão sobre isso pra não roubar o lugar do nosso professor
console.log(pessoa["muitas coisas"]); // "imagina um texto muito legal aqui"

// podemos também definir variáveis a partir das propriedades de um objeto
// note que isso não funciona se a chave do objeto for declarada com caracteres especiais
const { nome, telefone } = pessoa;
console.log(nome);     // "Liz"
console.log(telefone); // 12912345678

// o mesmo pode ser feito com arrays
const [ contaPessoal, contaProfissional ] = pessoa.contas;
console.log(contaPessoal.titulo);      // " .'* pessoal *'. "
console.log(contaProfissional.titulo); // "Professional :/"

// também podemos acessar as chaves e valores de um objeto em arrays
const [ chaves, valores ] = Object.entries(pessoa);
console.log(chaves);  // ["nome", "telefone", "contas", "dizerOla", "muitas coisas"];
console.log(valores); // ["Liz", 12912345678, [...], () => console.log("Olá o/"), "imagina um texto muito legal aqui"];
// isso pode ser usado da seguinte forma:
for (const [chave, valor] of Object.entries(pessoa)) {
  console.log(`${chave}: ${valor}`);
}
```


## Comentários
Comentários são textos que não serão interpretados, podendo ser usados para fazer breves anotações ou ignorar uma parte do código temporariamente para fazer um teste rápido. Lembre de se conter no uso de comentários, afinal, um código bem escrito fala por si só.

Existem dois tipos de comentários:
- Linha única: ignora tudo que estiver depois do `//` na mesma linha
```js
// este é um comentário de linha única
const numero = 5; // a variável foi criada e estou apenas anotando algo logo depois
const // numero2 = 12; // agora estamos comentando uma declaração antes dela ser finalizada, o que vai causar um erro de sintaxe. oopsies.
```
- Bloco: comenta várias linhas em sequência, contando que esteja dentro de `/*` (abertura) e `*/` (fechamento). Também pode ser usado para comentar o meio de uma linha sem causar erro de sintaxe.
```js
/*
esse comentário
ocupa
várias
linhas
*/
const /* este comentário não causa um erro de sintaxe mas usar assim ainda é um pouco estranho */ numero = 5;
/*
não quero usar esta parte de código por agora
console.log(numero);
console.log(numero + 2);
*/
```


## Operadores
Operadores são usados para fazer algumas interações com múltiplos valores, como aritméticos ou lógicos.
- Aritmeticos
  - `+` soma
  - `-` subtração
  - `*` multiplicação
  - `/` divisão
  - `%` módulo ou resto de divisão
  - `**` potenciação
- Incrementais e decrementais
  - `++` incrementa um número
  - `--` decrementa um número
- Lógicos
  - Igualdade
    - `<` menor
    - `>` maior
    - `<=` menor ou igual
    - `>=` maior ou igual
    - `==` igualdade de valor
    - `===` igualdade de valor e tipo
    - `!=` valor não igual
    - `!==` valor e tipo não iguais
  - Lógica binária
    - `&&` E (ambos os lados são `true`). Também pode atuar como uma condicional em uma única linha.
    - `||` OU (pelo menos um dos lados é `true`). Também pode providenciar um valor reserva caso o lado esquerdo seja de um tipo negativo.
    - `??` providencia um valor reserva caso o lado esquerdo seja `null` ou `undefined`
  - Ternário
    - `? :` retorna um de dois possíveis valores dependendo de uma condição
- Unários
  Operadores unários são usados em um único valor ou variável
  - `+` converte um número para positivo
  - `-` converte um número para negativo
  - `~` resulta na inversão dos bits de um número menos um
  - `!` negação (inverte `true` e `false`)
- Bitwise
  
  Operadores que alteram os bits de um número diretamente, usados em otimizações malucas
  - `<<` move os bits para a esquerda
  - `>>` move os bits para a direita
  - `>>>` move os bits para a direita e garante que o número será positivo
  - `&` retorna o valor mínimo suportado pela quantidade de bits dos dois números, na posição onde ambos são `1`
  - `|` retorna o valor máximo suportado pela quantidade de bits dos dois números
  - `^` retorna o valor onde os bits de cada número são opostos

### Exemplos
#### Aritmeticos
- 2 + 3   = 5
- 14 - 12 = 2
- 5 * 5   = 25
- 9 / 3   = 3
- 5 % 2   = 1
- 10 ** 2 = 100

### Incrementais
```js
let num = 2;
// o uso do operador `++` nesse caso incrementa após o uso da variável
console.log(num++) // 2
console.log(num)   // 3
console.log(num--) // 3
console.log(num)   // 2

// o uso do operador `++` nesse caso incrementa antes do uso da variável
console.log(++num) // 3
console.log(num)   // 3
console.log(--num) // 2
console.log(num)   // 2
```

#### Lógicos
- 5 > 2          = true
- 5 < 2          = false
- 10 >= 10       = true
- 10 <= 10       = true
- 4 == "4"       = true
- 4 === "4"      = false
- 2 != 4         = true
- 2 !== "2"      = true
- true && true   = true
- true && false  = false
- false || true  = true
- true  || true  = true
- false || false = false
- 5 > 2 ? 1 : 2  = 1
- 5 ?? 2         = 5
- null ?? 2      = 2
- undefined ?? 2 = 2
- null || 2      = 2
- false || 2     = 2
- true && console.log("teste")  = "teste"
- false && console.log("teste") = false

#### Unários
- +5    = 5
- -4    = -4
- ~12   = -13
- ~(-5) = 4
- !true = false

#### Bitwise
- 5   << 2 = 20         (  101 + 00 = 10100)
- -9  >> 2 = -3         (11111111111111111111111111111101 - 00 = 11111111111111111111111111111101)
- -9 >>> 2 = 1073741821 (11111111111111111111111111111101 - 00 = 00111111111111111111111111111101)
- 5   &  3 = 1          (101 & 011 = 001)
- 5   |  3 = 7          (101 | 011 = 111)
- 5   ^  3 = 6          (101 ^ 011 = 110)

#### Extras
Todos os operadores possuem um operador extra terminando com um `=`, como `+=`.
Esses operadores usam uma variável no lado esquerdo para atribuir a si mesma, ajudam a diminuir as redundâncias do código.
```js
let numero = 24;
numero += 4; // 28
/* equivalente a
 * numero = numero + 4;
 */
```


## Condicionais
Definem um escopo que só será executado caso as dadas condições sejam verdadeiras.
- `if` define uma série inicial de condições
- `else if` oferece outro escopo com outra série de condições caso as condições anteriores não foram atendidas
- `else` define um último escopo a ser executado caso nenhuma das condições anteriores seja atendida
- `switch` compara a igualdade de um valor específico com outros valores
- `? :` chamado de operador ternário, atribui um valor condicional em uma única linha, podendo ser expandido para várias linhas

### Exemplos
```js
const idade = 21;

const mensagemAdulto = "você é adulto";
const mensagemNovoDeMais = "você ainda não nasceu";
const mensagemJovem = "você é criança/adolescente";

// atribuição com if-else
let mensagemFinal = "";
if (idade > 18) {
  mensagemFinal = mensagemAdulto;
} else if (idade < 0) {
  mensagemFinal = mensagemNovoDeMais ;
} else {
  mensagemFinal = mensagemJovem;
}

// atribuição com ternário
mensagemFinal = idade > 18 ? mensagemAdulto
  : idade < 0 ? mensagemNovoDeMais
  : mensagemJovem;

console.log(mensagemFinal); // "você é adulto"
```

```js
let diaDaSemana = 1;
let mensagem = "";

switch (diaDaSemana) {
  case 0:
    mensagem = "Domingo";
    break; // não esqueça do `break` para evitar que o próximo caso seja executado
  case 1:
    mensagem = "Segunda";
    break;
  // ...
  case 6:
    mensagem = "Sábado";
    break;
  default:
    mensagem = "Dia desconhecido";
}

console.log(mensagem); // "Segunda"
```


## Loops
Define um escopo que será executado repetidamente até que uma condição se prove `false`.
- `while` repete um escopo comparando com um fator externo, podendo seguir indefinitivamente
- `for` define seu próprio valor para comparar, usado quando sabemos quando deve parar
- `for in` itera sobre um array e cria uma variável contendo o índice atual
- `for of` semelhante ao `for in` com a diferença da variável criada conter o item atual

### Exemplos
```js
let contador = 5;
while (contador > 0) {
  console.log(`${contador}...`)
  contador--;
}

for (let i = 0; i < contador; i++) {
  console.log(i);
}

const nums = [4, 8, 5, 17];
for (const pos in nums) {
  console.log(`O número na posição ${pos} é ${nums[pos]}.`);
}
for (const num of nums) {
  console.log("Número atual:", num);
}
```


## Funções
Uma função é um conjunto de código que só é executado quando chamado. Pode ser criada de duas formas:
- Tradicional: utiliza a palavra-chave `function`. Recomendada para funções longas.
- Arrow function: sintaxe mais recente utilizando `() => { }`. Recomendada para funções curtas que retornam um valor.

### Exemplos
Utilizando o formato tradicional:
```js
function soma(a, b) {
  return a + b;
}

const resultado = soma(3, 2); // 5
```
Utilizando arrow functions:
```js
// A função do bloco anterior também poderia ser feita da seguinte forma com a sintaxe arrow function:
const soma = (a, b) => a + b;
/*                     ^^^^^------ por não ter as chaves para indicar os limites do corpo, considera como um valor a ser retornado
                    ^^------------ indica o início do corpo da função
              ^^^^---------------- argumentos. note que podemos opcionalmente remover os parênteses caso a função tenha apenas um argumento
 */

// A seguir, um exemplo onde uma arrow function contém um corpo e retorna um valor para fins de demonstração.
const contar = (maximo) => {
  let total = 0;

  for (let i = 0; i <= maximo; i++) {
    console.log(i);
    total += i;
  }

  return total;
}

const numero = contar(5); // 15
```


## Classes
Uma classe é parecida com um objeto, porém é previamente declarada e aciona uma função (construtor) ao ser instanciada.

### Exemplos
```js
class Usuario {
  // Esta propriedade é privada; apenas essa classe pode acessar ela.
  #senha = "1234"; 

  // O método `constructor` é especial em uma classe.
  // Ele é responsável por definir as informações iniciais.
  // Método é como chamamos uma função que faz parte de uma classe ou objeto.
  constructor(nome) {
    this.nome = nome;
    this.fotos = [];
  //^^^^ `this` é a palavra-chave usada para se referir a esta classe
  }

  adicionarFoto(novaFoto) {
    this.fotos.push(novaFoto);
  }

  listarFotos() {
    if (this.fotos.length === 0) {
      console.log("Nenhuma foto encontrada.");
      return; // encerra a função mais cedo, evitando que o restante dela seja executado
    }

    for (const foto of this.fotos) {
      console.log(foto);
    }
  }

  // perigoso O_O
  pegarSenha() {
    return this.#senha;
  }

  // Este método é estático, significando que ele pode ser acessado pela classe diretamente,
  // sem a necessidade de criar uma instância.
  // Por causa disso, um método estático não consegue rastrear as instancias da classe,
  // o que pode oferecer desafios dependendo de como sua classe é estruturada.
  static saudacao() {
    console.log("Olá! o/");
  }
}

const meuUsuario = new Usuario("Liz"); // ao usar os parênteses, estamos instanciando a classe e chamando seu construtor
const outroUsuario = new Usuario("Eu");

meuUsuario.adicionarFoto("perfil.png");
meuUsuario.adicionarFoto("gato.png");
meuUsuario.listarFotos();   // "perfil.png", "gato.png"
outroUsuario.listarFotos(); // "Nenhuma foto encontrada."
Usuario.saudacao();         // "Olá! o/"
```


## Extras
A seguir, alguns pontos interessantes sobre JavaScript.

### Manipulando strings
Strings são fáceis de moldar, com muitas funções disponíveis.
```js
const str = "Liz";

// Essencialmente, uma string é apenas uma array de caracteres, algo que não faz parte dos conceitos de JavaScript.
const primeiraLetra = str[0]; // "L"
// a linha acima também pode ser feita da seguinte forma
// const primeiraLetra = str.at(0);

// também podemos pegar a última letra de uma string
const ultimaLetra = str.at(-1); // "z"

// strings podem ser concatenadas (perigoso misturar com soma de um número)
const never = "never gonna " + "give you up"; // "never gonna give you up"
// outra forma de concatenar strings:
// const never = "never gonna ".concat("give you up");

// uma forma eficiente de inserir outros dados é através da interpolação, utilizando ``
console.log(`5 * 3 = ${5 * 3}`); // "5 * 3 = 15"

// podemos alterar strings para estar completamente em maiúsculo ou minúsculo
const fato = "gatOS são lEGaiS";
const grande = fato.toUpperCase();  // "GATOS SÃO LEGAIS"
const pequeno = fato.toLowerCase(); // "gatos são legais"

// quer saber se um texto contém um trecho específico? você pode
const poema = "Fiz uma promessa pra mim mesmo. Nunca mais comer torresmo...";
console.log(poema.includes("promessa")); // true

// quer gritar com uma quantidade específica de letras? você também pode!
const grito = "A".repeat(30); // AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
```

### Documentando suas funções
A função a seguir é documentada utilizando JSDoc, uma funcionalidade usada pelos editores, muito útil para fornecer informações sobre sua função para outros desenvolvedores e até você mesmo.
Mais informações em: https://jsdoc.app/.
```js
/**
 * Retorna a soma de dois números.
 * @param {number} a - O primeiro número
 * @param {number} b - O segundo número
 * @returns number
 */
function soma(a, b) {
  return a + b;
}
```

### Mais sobre argumentos
Funções podem definir um valor reserva para cada argumento.
Note que argumentos com valor reserva devem vir depois dos outros argumentos.
```js
function somarTres(num1, num2, num3 = 1) { /* ... */ }
```
Além disso, também podemos definir uma função que receberá um número indefinido de argumentos.
Note que argumentos extras devem aparecer por último, até mesmo depois dos argumentos com valor reserva.
```js
function exibir(...nomes) {
  for (const nome of nomes) {
    console.log("Olá, ", nome);
  }
}
```

### Funções iteradoras
Arrays possuem funções únicas para realizar modificações ou apenas iterações simples. A seguir, temos algumas delas.
```js
const numeros = [1, 2, 3, 4, 5];

// Aqui, usamos a função `reduce` para "reduzir" todos os itens de um array utilizando uma array function para somar o valor acumulativo com o valor atual de cada ciclo.
const soma = numeros.reduce((acumulativo, atual) => acumulativo + atual); // 15

// Aqui, filtramos nossos números para receber uma nova array que contém apenas os valores que atendem uma condição.
const filtrado = numeros.filter(numero => numero > 2); // [3, 4, 5]

// Aqui, iteramos em nossos números e aplicamos uma operação, mantendo a quantidade de elementos mas alterando seus valores.
const duplicado = numeros.map(numero => numero * 2); // [2, 4, 6, 8, 10]

// Caso precisemos apenas realizar uma iteração como nos loops `for`, também podemos usar o `forEach`.
// Poderíamos ter feito o mesmo com a função `map`. A diferença é que `map` retorna uma array enquanto `forEach` não.
numeros.forEach(numero => {
  console.log(numero);
});
```

### Existem objetos e funções em todo lugar!!
Na sessão passada, falei que arrays possuem funções. Utilizei aquelas funções com `numeros.filter()` e por aí vai.
Da mesma forma, podemos fazer o mesmo com strings como `"olá".toUpperCase()` e com números como `numero.toFixed(2)`.
Mas acessar uma função dessa forma não é a mesma sintaxe que usamos em objetos e classes? Isso não é estranho?
Bem, o que acontece aqui é... o fato que, na prática, praticamente tudo em JavaScript age como um objeto. Tudo pode receber uma propriedade.

Arrays por padrão têm uma propriedade `length` e, se você quiser, pode definir as suas como `lista.algumacoisa = "sim"` e isso é permitido!!
Isso ocorre porque JavaScript tem cada tipo vindo de uma classe global. Arrays vêm da classe `Array`; objetos vêm da classe `Object` e por aí vai
A função filter que usamos agora pouco vem de `Array.prototype.filter()`, onde `prototype` é uma propriedade especial de uma classe que permite o acesso a funções diretamente de um valor que vem dessa classe. Por isso podemos usar `[1, 2].filter()`.


## Adendos
- JavaScript é uma linguagem com tipagem fraca, o que significa que você pode declarar uma variável com um tipo e depois atribuir um valor de outro tipo. **PORÉM**, isso é uma ação perigosa pois abre aberturas para erros. Afinal, não é possível mudar `undefined` para maiúsculo ou somar um número com um texto. No segundo caso, a linguagem apenas trata o número como um texto em uma tentativa de evitar que o programa quebre.
- Por trás dos panos, todos os tipos são apenas sequências de 0s e 1s. O que torna cada um diferente nas linguagens de programação é como essas sequências são tratadas.


## Termos
- Declarar e atribuir: declarar é o ato de criar uma variável mas não necessariamente dar um valor a ela. Atribuir é o ato de dar um valor para uma variável já declarada. Sempre declare e atribua de uma só vez para garantir que o valor seja armazenado na memória corretamente.
```js
let numero;         // declaração
numero = 5;         // atribuição
const numero2 = 12; // ambos juntos, forma preferencial
```
- Escopo: um bloco de código que faz uma separação na disponibilidade dos valores – variáveis declaradas em um escopo não existem fora dele
- Retorno: um resultado que é fornecido por uma função, opcionalmente sendo usado para atribuir a uma variável.
- Biblioteca: um conjunto de código feito por outra pessoa que pode ser usado no seu programa.
- Operação módulo: é o tanto de unidades que o número na esquerda deve ser diminuido para ser dividido pelo número da direita e resultar em um número inteiro
- Otimização: tornar o seu programa mais rápido, seja diminuindo a quantidade de coisas que seu processador faz ou a quantidade de memória utilizada
- Depurador: também chamado de debugger, é uma ferramenta que interrompe o programa em um ponto predeterminado do código para analisar a situação no programa naquele momento.
- Iterar: o ato de usar um loop em uma array, seja para modificar ou apenas acessar seus elementos.
- Declaração e expressão: declaração é quando algo simplesmente é feito enquanto expressão é quando algo é feito e um valor é retornado. Um exemplo: um bloco condicional é uma declaração enquanto uma função com retorno é uma expressão.
