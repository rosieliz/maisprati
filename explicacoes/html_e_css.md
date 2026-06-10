# Entendendo HTML e CSS

## HTML
HTML (HyperText Markup Language / Linguagem de Marcação de HiperTexto) é uma linguagem de marcação utilizada para definir o conteúdo de páginas web e outros programas visuais.


### Tags
Quando lidamos com HTML, todos os elementos da página são definidos com tags, seja o conteúdo visível ou não. O documento deve iniciar com a informação `<!DOCTYPE html>` para indicar ao navegador como ele deve tratar este arquivo. Após isso, usamos a tag `<html>` que representa a página, logo, seu conteúdo é o conteúdo da página.

 Dentro da tag `<html>`, nós temos duas tags importantes:

- `<head>`: contém configurações e conexões que a página necessita para funcionar apropriadamente. Exemplos de tags comumente usadas no `<head>`:
    - `<meta>`: define metadados como conjunto de caracteres ou proporção dos elementos para a página;
    - `<title>`: informa o título que será exibido na aba do navegador;
    - `<link>`: estabelece conexão com arquivos externos como arquivo de estilos ou favicon.
- `<body>`: contém os elementos visíveis da página.

Certas tags devem ter início e fim, outras não. Isso depende do fato da tag ser apropriada para ter um conteúdo ou não. A tag `<p>` por exemplo, precisa de um fim para indicar até onde o parágrafo se estende; enquanto isso, a tag `<input>` não tem fechamento por não ter um conteúdo. A lista completa de tags pode ser acessada por [aqui](https://www.w3schools.com/tags/).


### Propriedades
Toda tag tem seus atributos, informações adicionais que alteram como a tag deve se comportar. Isso fica mais fácil de compreender assim que ver isso como propriedades de um objeto JavaScript.
Detalhe: informações passadas nas tags são chamadas de atributos, membros de um objeto JavaScript são chamados de propriedades.

Digamos que temos um interpretador hipotético de HTML feito em JavaScript e nele a tag `<input>` é uma variável que contém um objeto. Esse objeto contém várias propriedades na seguinte forma:

```js
let inputProperties = {
    class: null,
    id: null,
    type: "text",
    minLength: null,
    placeholder: "",
    required: false,
    value: "",
    // etc...
};
```

Ao usar `<input type="email">`, estamos definindo um input e alterando seu atributo type (inicialmente `"text"`) para `"email"`. Muitas tags possuem atributos como esses, mas cada tag tem o seu conjunto único, além de outros atributos genéricos como `class` e `id`. Todos esses atributos têm um valor padrão para manter a facilidade na criação da página, então você só precisa informar o que deve ser diferente. Mais atributos e seus possíveis valores [aqui](https://www.w3schools.com/tags/tag_input.asp).

Podemos usar a tag `<p>` para um exemplo de elemento com conteúdo. Ao usar da seguinte forma

```html
<p>
    <em>Eu gosto de gatos.</em>
</p>
```

podemos converter este elemento com nosso interpretador hipotético e receber o seguinte objeto:

```js
let paragraphProperties = {
    class: null,
    id: null,
    children: [
        <em>Eu gosto de gatos.</em>
    ],
    innerHTML: "<em>Eu gosto de gatos.</em>",
    innerText: "Eu gosto de gatos.",
    // etc...
};
```

Note que o fato do elemento `<p>` ter um conteúdo nos dá um valor válido para as seguintes propriedades:

- `innerHTML`: todo o conteúdo do elemento como um texto, incluindo tags internas e seus atributos;
- `innerText`: semelhante ao `innerHTML` porém apenas com textos simples;
- `children`: uma lista com objetos especiais representando os elementos internos. Essa lista será vazia caso o conteúdo de um elemento seja apenas um texto ou vazio.

Esse conceito vai fazer mais sentido na aula de uso do JavaScript para manipular elementos de uma página.


### Pensando em tags como funções
Todo elemento que definimos, independente da tag, é tratado pelo interpretador como uma função que resulta em um elemento visual (ou configuração) e todas as informações passadas são usadas como argumentos. 

Esse conceito vai fazer mais sentido nas aulas de React.



## CSS
CSS (Cascading StyleSheets / Folhas de Estilo em Cascata) é uma linguagem de estilos responsável por estilizar uma página web.


### Importação
Um arquivo CSS pode ser importado no seu arquivo HTML adicionando a seguinte tag dentro de `<head>`:

```html
<link rel="stylesheet" href="./caminho/para/arquivo.css">
```


### Seleção
Elementos só podem ser estilizados quando corretamente selecionados. Considerando o seguinte elemento HTML:

```html
<div>
    <p class="texto">Texto 1</p>
    <p id="marcado" class="texto">Texto 2</p>
    <p class="texto">Texto 3</p>
</div>
```

a seleção pode ser feita das seguintes formas:

- Nome da tag: ao selecionar com `div, p { ... }`, podemos estilizar todos os elementos `<div>` e `<p>`;
- Classe: ao selecionar com `.texto { ... }`, podemos estilizar todos os elementos com a classe `texto`. Isso é mais específico que seleção por nome da tag;
- ID: ao selecionar com `#marcado { ... }`, podemos estilizar o elemento com o id `marcado`. Isso é mais específico que seleções por nome e classe;
- Inline: incomum no uso diário, tem o maior nível de especificidade. Podemos definir estilos diretamente na tag com:

```html
<p style="color: blue;">Texto 1</p>
```

Mais informações sobre seletores [aqui](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Selectors).


### Especificidade
Como visto anteriormente, o nível de especificidade sobreescreve estilos previamente definidos a um elemento. A regra é simples: quanto mais específica a seleção, maior a especificidade. Podemos visualizar isso como um número de três dígitos da seguinte forma:

```
0-1-0
    ^---- nome da tag
  ^------ classe, propriedades
^-------- id
```

Mais informações sobre especificidade [aqui](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Specificity).


### Efeito no HTML
Pensando nas propriedades dos elementos HTML, todo elemento tem uma propriedade chamada `style` que permite definir estilos diretamente no elemento. Esse objeto só é alterado com estilos inline e manipulação com JavaScript. Estilos em arquivos CSS são computados pelo navegador e competem por especificidade para decidir o que será aplicado.



## Termos
- Linguagem de marcação: diferente da programação (lógica), a marcação define o que será exibido na tela e como. HTML por exemplo, é usado em páginas web e outros programas visuais. Outra linguagem de marcação é o [Markdown](https://www.markdownguide.org/), usado para documentos com estilização simples (este documento que você está lendo é um arquivo markdown).
- Metadados: dados que são importantes para o arquivo mas não fazem parte de seu conteúdo.
- Favicon: ícone a ser exibido na aba do navegador, ao lado do título da página.
