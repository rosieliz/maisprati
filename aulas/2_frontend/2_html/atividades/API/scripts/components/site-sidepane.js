class Sidepane extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `<aside class="sidepane">
                <img src="https://placehold.co/290/c89fb5/c89fb5" alt="Capa do lançamento">
                <div class="sidepane__info">
                    <p class="sidepane__info__title">...</p>
                    <p class="sidepane__info__artist">...</p>
                </div>
            </aside>`;
    }
}

customElements.define("site-sidepane", Sidepane);

