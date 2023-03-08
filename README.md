# Products App

## Table of Contents

- [Getting Started](#getting_started)
- [Usage](#usage)

## Getting Started <a name = "getting_started"></a>

There is 2 versions of this application, 1 with localStorage to persist data stored for a specific user and the 2 one I'm using redux toolkit and changing the data on a fake API with Json server this one is a more realistic use case because the data will automatically change in the API. Both apps are using Json server as an API.

To check the first app you can go to main branch
To check the second app you can go to add-state-management branch

### Installing

```
npm install
```

## Usage <a name = "usage"></a>

```
npm run start:dev
```

you can visit http://localhost:5173/ to see all the products
http://localhost:5173/products/{id} - visit a specific product
http://localhost:5173/products/edit/{id} - to edit a specific product

the urls for the api are as follow:
http://localhost:5000/products - visit all products
http://localhost:5173/products/{id} - visit a specific product
