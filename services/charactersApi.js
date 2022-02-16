const axios = require("axios");

//axios is the nice fetch()!

class CharactersApi {
    constructor(
    baseURL="https://ih-crud-api.herokuapp.com", 
    API_KEY=process.env.API_KEY,
    API_USER=process.env.API_USER){
        this.baseURL = baseURL // || "https://ih-crud-api.herokuapp.com";
        this.API_KEY = API_KEY// || "default key";
        this.API_USER = API_USER// || "default user";
        this.api = axios.create(
           // {baseURL: `${this.baseURL}/?key=${API_KEY}`} // this is the connection to the external server (/from the slash, it will depend on the server, we need to read the documentation)
            {baseURL: `${this.baseURL}`} // base connection
        )
    }

    getAllCharacters = ()=> {
        return this.api.get("/characters")} //Name should be descriptive of your service
    getOneCharacter = (id)=>{
        return this.api.get(`/characters/${id}`)
    }
    createOneCharacter = () =>{}
    updateOneCharacter = ()=>{}
    deleteOneCharacter = ()=>{}

}

module.exports = CharactersApi;
