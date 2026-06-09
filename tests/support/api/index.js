
const {expect } = require('@playwright/test')

export class Api {

  constructor(request) {
    this.request = request;
    this.token = undefined
  }

  async setToken() {
    //Requisição HTTP pra obter o token no loogin
    const response = await this.request.post("http://localhost:3333/sessions", {
      data: {
        email: "admin@zombieplus.com",
        password: "pwd123",
      },
    })

    expect(response.ok()).toBeTruthy()

    const body = JSON.parse(await response.text())

    this.token = 'Bearer ' + body.token 
  }

  async postMovie(movie){
     const response = await this.request.post('http://localhost:3333/movies', {
         headers: {
            Authorization: this.token 
         },
         multipart: {
           title: movie.title,
           overview: movie.overview,
           company_id: '461db9c9-9161-47cf-98a0-1675f0ef0a76',
           release_year: movie.release_year,
           featured: movie.featured
         }
     })
   
     expect(response.ok()).toBeTruthy()
  }
}
