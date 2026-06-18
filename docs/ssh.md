# SSH
SSH (Secure Shell) é um ambiente de terminal com segurança reforçada para se comunicar com outros computadores, desenvolvido pela comunidade do [OpenBSD](https://www.openbsd.org/), um sistema operacional baseado em [Unix](https://en.wikipedia.org/wiki/Unix) com grande foco em segurança e privacidade.
Não se assute, nós iremos usar apenas uma pequena e simples parte dele.

Para fornecer uma conexão segura, cada usuário precisa de uma chave única que pode ser gerada com um comando e, opcionalmente, uma senha exigida em cada operação SSH... e isso pode ser usado com git.

Git por padrão usa conexões HTTPS para cada operação (baixar repositório ou enviar mudanças)... e às vezes isso pode causar algumas surpresas indesejadas como pedir credenciais de login do GitHub que não levam a lugar nenhum ou algum erro negando autenticação com senha que você nunca usou.
Mas nós estamos recém começando a aprendender sobre git e agora isso?? Qual a relação entre os dois??? Simples: os imprevistos das operações com HTTPS podem ser evitados ao configurar uma chave SSH em seu GitHub!

## Instalação
Para instalar [OpenSSH](https://www.openssh.org/) (o conjunto de ferramentas ssh), temos métodos diferentes dependendo do seu sistema operacional.

### Windows
No windows, temos um meio gráfico amigável e comandos no PowerShell para devs que gostam de experimentos.

#### Menu gráfico
Abra o menu iniciar e pesquise por "Optional Features".
Isso irá abrir uma janela com uma barra de pesquisa e uma lista de funcionalidades com um ícone de peça de quebra-cabeça em cada item.
Nesse menu, pesquise por "ssh" e você encontrará as opções "OpenSSH Client" e "OpenSSH Server". Marque as duas e aplique as alterações.

#### PowerShell
Abra o PowerShell como administrador e execute os seguintes comandos:

```ps1
# Habilita o SSH
Get-WindowsCapability -Online | Where-Object Name -like 'OpenSSH*'

# O comando acima deve mostrar isso no terminal:
# Name  : OpenSSH.Client~~~~0.0.1.0
# State : NotPresent
# 
# Name  : OpenSSH.Server~~~~0.0.1.0
# State : NotPresent

# Instala OpenSSH Client
Add-WindowsCapability -Online -Name OpenSSH.Client~~~~0.0.1.0

# Instala OpenSSH Server
Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0

# Os comandos anteriores devem mostar o seguinte:
# Path          :
# Online        : True
# RestartNeeded : False

# Inicia o serviço ssh
Start-Service sshd

# Garante que o serviço ssh será iniciado com o sistema (importante)
Set-Service -Name sshd -StartupType 'Automatic'

# Garante que conflitos com o firewall serão evitados
if (!(Get-NetFirewallRule -Name "OpenSSH-Server-In-TCP" -ErrorAction SilentlyContinue)) {
    Write-Output "Regra de firewall 'OpenSSH-Server-In-TCP' não existe, criando uma..."
    New-NetFirewallRule -Name 'OpenSSH-Server-In-TCP' -DisplayName 'OpenSSH Server (sshd)' -Enabled True -Direction Inbound -Protocol TCP -Action Allow -LocalPort 22
} else {
    Write-Output "Regra de firewall 'OpenSSH-Server-In-TCP' já existe."
}
```

### Linux
OpenSSH pode ser instalado no linux com seu gerenciador de pacotes favorito.

- Arch: `sudo pacman -S openssh`
- Debian: `sudo apt install openssh`

etc.

## Uso
Após a instalação, nós temos várias utilidades mas o que usaremos por agora será:
- `ssh`: conecta com um computador (será usado breviamente)
- `ssh-keygen`: gera uma chave ssh

Para garantir que o conjunto de utilidades foi instalado com sucesso, use `ssh -V`; você verá a versão do ssh em algo como "OpenSSH_10.3p1, OpenSSL 3.6.2 7 Apr 2026". Significa que deu tudo certo!!!

Agora, iremos criar uma chave ssh para usar no GitHub. Use o seguinte comando: `ssh-keygen -t rsa -b 4096 -C "seu.email@gmail.com"`.

Após isso, você terá um prompt pedindo um caminho para armazenar suas chaves. Apenas aperte `enter` para confirmar o caminho padrão (~/.ssh/id_rsa).

Logo depois, terá um prompt para inserir uma senha. Essa senha será exigida a cada operação feita com ssh. Se não quiser, pode manter vazio e pressionar `enter` mas recomendo definir uma senha, por garantia. Caso uma senha seja informada, aparecerá outro prompt pedindo para repetir.
Por fim, o processo será finalizado e sua chave será criada na pasta indicada pelo primeiro prompt.

Ao acessar a pasta com suas chaves usando `cd ~/.ssh`, você terá dois arquivos:
- id_rsa: sua chave privada. mantenha apenas com você
- id_rsa.pub: sua chave pública, pode ser informada para outros serviços

Agora, abra seu GitHub e vá nas configurações.
No menu lateral, terá uma opção "Chaves SSH e GPG".
Ao abrir esse menu, terá um botão verde no topo para adicinar uma chave ssh.
Clique nele e terá um formulário para preencher.
No título, informe como você irá identificar sua chave pelo GitHub. No dropdown "Tipo de chave", mantenha como "Chave de autenticação". Na última caixa de texto, você irá copiar o conteúdo do seu arquivo `~/.ssh/id_rsa.pub`.
Ao confirmar, sua chave será adicionada com sucesso!

Após tudo isso, sempre escolha o método SSH ao clonar um repositório.
Para escolher isso, procure na página inicial do repositório o botão verde "Code". Ele abrirá um menu com as opções "HTTPSS" e "SSH".
Por ter configurado uma chave ssh, a o GitHub irá por padrão selecionar a opção "SSH" para você, cuja URL terá o seguinte formato: `git@github.com:usuario/repositorio.git`.

Na primeira vez que usar uma conexão ssh, terá um prompt perguntando se tem certeza que quer realizar a operação. Caso aconteça, apenas digite "yes" e pressione `enter`.

Com isso, finalizamos nosso setup do SSH! Agora sempre que usar `git clone`, `git push` ou `git pull`, só precisará informar sua senha ssh sem se preocupar com imprevistos estranhos relacionados à conexão! :D
