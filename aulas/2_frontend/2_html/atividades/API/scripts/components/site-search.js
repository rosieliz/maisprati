
function clearResults(searchResults) {
    for (const ch of searchResults.children) {
        searchResults.removeChild(ch);
    }
}

async function renderOptions(query, searchResults) {
    if (!query.trim()) return;

    const options = await getRecords(query)
        .then(res => res)
        .catch(err => console.error("Render error:", err));
    if (!options) {
        console.log("Nenhum lançamento encontrado.");
        return;
    }

    clearResults(searchResults);

    options.forEach(opt => {
        const optionItem = document.createElement("div")
        optionItem.classList.add("search-result");

        const optionImage = document.createElement("img");
        optionImage.src = opt.thumbnail
        optionImage.classList.add("search-result__option_image");

        const optionText = document.createElement("span");
        optionText.innerText = opt.text;
        optionText.classList.add("search-result__option_text");

        optionItem.appendChild(optionImage);
        optionItem.appendChild(optionText);

        searchResults.appendChild(optionItem);
    });
}

class Search extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    async render() {
        this.innerHTML =
            `<div class="input-area">
                <input
                    id="query-search"
                    type="text"
                    placeholder="Pesquise por título..."
                >
                <div id="search-results"></div>
            </div>`;

        document.querySelector("#query-search").addEventListener("blur", async (event) => {
            renderOptions(event.target.value, document.querySelector("#search-results"));
        });
    }
}

customElements.define("site-search", Search);
