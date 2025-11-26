const BASE_URL = 'https://rickandmortyapi.com/api/character'

export const rickMortyApi ={
    getAllCharacters: async ({ page = 1 } = {}) => {  
    const response = await fetch(`${BASE_URL}?page=${page}`); ;
            if (!response.ok)throw new Error('error al cargar personajes');
            return response.json();
    }

};
