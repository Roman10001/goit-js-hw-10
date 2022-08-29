
export const fetchCountries = name => {
    return fetch(
        `https://restcountries.com/v3.1/name/${name}?fields=,name,capital,population,flags,languages`
    )
    .then(Response => {
        if (!Response.ok) {
            if (Response.status === 404){
                return [];
            }
            throw new Error(response.status);
        }
        return response.json();
    })
    .catch(error => {
        console.error(error);
    });
};