![](https://img.shields.io/badge/Status-Page%20in%20construction-orange)
![](https://img.shields.io/badge/release-v01-green)

# API Heroes

O projeto se trata de uma api para registro de heróis e seus poderes com CRUD completo para interações.

## Instalação

clonar o repositório, abrir o projeto e executar o comando:

```bash
  npm install
  npm start
```
ou
```bash
  npm i
  npm start
```
- Necessário instalar o MongoDB na máquina.

<details open>
  <summary>
    Print - Configurações de testes 
  </summary>
  
![Print teste Postman](https://github.com/Re04nan/heroesapi/blob/master/captured/print-postman.PNG)

</details>

## API Reference

<details open> 
  <summary>
    Parte I
  </summary>
  
#### Get all heroes
```http
  GET /heroes/
```
#### Get hero
```http
  GET /heroes/:id
```
#### Post hero
```http
  POST /heroes/
```
#### Put hero
```http
  PUT /heroes/:id
```
#### Delete hero
```http
  GET /heroes/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `String` | **Required** |
| `description` | `String` | Text: true |
| `rank` | `Number` | **Required** |
| `active` | `Boolean` | default: true |

</details>

<details open> 
  <summary>
    Parte II
  </summary>

#### Get all powerstats
```http
  GET /heroes/:id/powerstats/
```
#### Get powerstats
```http
  GET /heroes/:id/powerstats/:id
```
#### Post powerstats
```http
  POST /heroes/:id/powerstats/
```
#### Put powerstats
```http
  PUT /heroes/:id/powerstats/:id
```
#### Delete powerstats
```http
  GET /heroes/:id/powerstats/:id
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `heroId` | `Heroes(id)` | **Reference** |
| `name` | `String` | **Required** |
| `value` | `Number` | valitate: Number.isInteger |

</details>
 
## Techs Usadas

Node, MongoDB, Docker, Docker-Composer, Bootstrap CDN

## Ferramentas

Postman, VSCode, MongoDB Compass, Docker

## Dependências

```json
"dependencies": {
    "cors": "^2.8.5",
    "ejs": "^3.1.6",
    "express": "^4.17.1",
    "mongoose": "^5.13.3",
    "mongoose-auto-increment": "^5.0.1",
    "morgan": "^1.10.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.12"
}
```

## Authors

- [Renan Marques](https://www.github.com/re04nan)

  
