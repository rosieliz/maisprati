Sempre que usar um comando, existe uma ordem que deve ser seguida. Por exemplo:

1   2      3  4
git commit -m "Mensagem de commit"

1: comando principal, é o executável que será procurado na lista de executáveis disponíveis no computador
2: argumento do programa
3: valor para o argumento – nesse caso, uma flag
4: valor para a flag

detalhe: flag é como chamamos um argumento que começa com `--`. Frequentemente, temos uma versão curta para as flags que começam com `-`. No exemplo acima, a flag se chama `--message` mas tem a alternativa `-m`.
Muitos comandos como o Git usam argumentos complexos que recebem outros argumentos como um valor. Por isso nesse comando do git usamos vários arguentos seguidos que parecem fornecer uma informação para o argumento anterior.
Todos os argumentos representam um valor dentro do programa – argumentos opcionais resultam em um valor reserva se não forem usados e argumentos obrigatórios costumam ser considerados como erros. 

Argumentos são separados por espaços mas isso pode ser diferente com flags. Flags que necessitam de um valor podem receber esse valor nas seguintes formas:
-m "Mensagem"
-m="Mensagem"
-m"Mensagem"


Outro exemplo de flag está em `ls -lah`, onde:
`l`: exibe cada resultado em uma linha diferente, cada um com informações extras
`a`: exibe arquivos ocultos, seja por ter um nome começando com `.` ou por ter uma propriedade de ocultar internamente
`h`: usado em conjunto com a flag `l`, altera o valor do tamanho do arquivo em bits para um formato mais legível. ex: 1024 se torna 1KB

Note que cada uma dessas flags vão definir um valor que pode ser `true` ou `false` dentro do programa. Flags assim podem ser usadas em conjunto, mudando de `-l -a -h` para `-lah`.


Um exemplo de como argumentos são usados dentro do programa:
```js
// flags usadas no `ls -lah`
const flags = {
  long: false,
  all: false,
  humanReadable: false,
};

const argumentos = tratarArgumentos(flags); // função inventada. costuma ser mais complicado do que isso

const listarComDetalhes = argumentos.long;
const listarOculto = argumentos.all;
const formatarBits = argumentos.humanReadable;
```
