class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `<header>
                <div class="container">
                    <h1>Consulta Musical</h1>
                </div>
            </header>`;
    }
}

customElements.define("site-header", SiteHeader);
