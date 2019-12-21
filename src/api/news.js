import axios from 'axios';
const KEY="456d74d5713b496bb02096f331654d08";

export const baseParams={
    apiKey:KEY
};


export default axios.create({

    baseURL:'https://newsapi.org/v2'
});

