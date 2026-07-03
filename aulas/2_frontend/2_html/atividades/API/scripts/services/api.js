async function getRecords(query) {
    return await fetch(`https://api.discogs.com/database/search?release_title=${query}`)
        .then(res => res.json())
        .then(items => items.results)
        .catch(err => console.error(err));
}
