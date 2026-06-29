class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `<footer>
                <div class="container">
                    <span>&copy; Consulta Musical - todos os direitos reservados.</span>
                </div>
            </footer>`;
    }
}

customElements.define("site-footer", SiteFooter);
