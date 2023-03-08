# Products App

## Table of Contents

- [Getting Started](#getting_started)
- [Usage](#usage)

## Getting Started <a name = "getting_started"></a>

There are two versions (branches) of the application.

One with localStorage to persist data stored for a specific user. (branch main)

For the second one, I'm using the redux toolkit to change the data on a fake API with JSON-server. (branch add-state-management)

The second one is a more realistic use case because the data will automatically change in the API.

Both versions use JSON-server as an API.

To check the first version, please check out the main branch. [link]: https://github.com/pedroduke/products-app/tree/main

To check the second version, please check out the add-state-management branch. [link]: https://github.com/pedroduke/products-app/tree/add-state-management

### Installing

```
npm install
```

## Usage <a name = "usage"></a>

With the following command we run both services vite to serve the frontend app and json server to serve the app API.

```
npm run start:dev
```

you can visit http://localhost:5173/ to see all the products
http://localhost:5173/products/{id} - visit a specific product
http://localhost:5173/products/edit/{id} - to edit a specific product

the urls for the api are as follow:
http://localhost:5000/products - visit all products
http://localhost:5173/products/{id} - visit a specific product

While implementing rtk query I did a research on the following link:

https://wanago.io/2021/12/27/redux-toolkit-query-typescript/
