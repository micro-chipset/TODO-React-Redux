export default class LibraryService {

    _apiBase = 'https://rsu-library-api.herokuapp.com';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    };

    getBook = async (id) => {
        return  await this.getResource(`/books/${id}/`);
    };
}
