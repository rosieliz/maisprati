async function getRecords(query) {
    const results = await fetch(`https://api.discogs.com/database/search?release_title=${query}`)
        .then(res => res.json())
        .then(res => res.results)
        .catch(err => console.error("Result error:", err));

    if (!results) return [];

    const releases = results.map(async result => {
        const release = await fetch(`https://api.discogs.com/releases/${result.id}`)
            .then(res => res.json())
            .catch(err => console.error("Resource error:", err));

        if (!release?.title) return;

        const thumbnail = release.images?.[0]?.uri || release.thumb || "https://placehold.co/70/c89fb5/c89fb5";
        const artists = release.artists.map(a => a.name.replace(/\s\(.+\)/g, "")).join(", ");
        const text = `${artists} - ${release.title}`;

        const obj = { text, thumbnail };
        return obj;
    });

    const promises = await Promise.all(releases);
    return promises.filter(p => p);
}
