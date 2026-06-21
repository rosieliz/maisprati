class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `<footer class="rodape">
                <div class="coluna">
                    <h4><strong>Clarim Diário</strong></h4>
                    <p>Alta Credibilidade, Dirigido por J. Jonah Jameson</p>
                </div>
                <div class="coluna">
                    <h4>Editoriais</h4>
                    <a href="#">Política</a>
                    <a href="#">Cultura</a>
                    <a href="#">Esportes</a>
                    <a href="#">Homem-Aranha</a>
                </div>
                <div class="coluna">
                    <h4>Institucional</h4>
                    <a href="#">Termos de Uso</a>
                    <a href="#">Privacidade</a>
                    <a href="#">Quem Somos</a>
                    <a href="#">Contato</a>
                </div>
            </footer>`;
    }
}

customElements.define("site-footer", SiteFooter);
