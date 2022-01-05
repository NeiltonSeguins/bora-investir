export function getEmbedLink(id, autoplay) {
    if (autoplay) {
        return `https://www.youtube.com/embed/${id}?autoplay=1`;
    }
    return `https://www.youtube.com/embed/${id}`;
}

export function getThumb(id) {
    return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}