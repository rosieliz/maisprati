class Search extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `<div class="input-area">
                <input
                    id="query-search"
                    type="text"
                    placeholder="Pesquise por título..."
                    onblur="getRecords(this.value)"
                >
            </div>`;
    }
}

customElements.define("site-search", Search);

