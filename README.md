## Description

Admins Authentication Service

---

## Installation

```bash
$ npm i
```

## Running the app

```bash
# ts-node
$ npm run start

# devlopement + nodemon
$ npm run dev

# production mode
$ npm run build
$ npm run start-server
```


## Sequilize Scripts

- [sequelize Migration , Model , Seed Docs](https://sequelize.org/master/manual/migrations.html)
- Create Database customers
- Run Migration

```bash
npx sequelize-cli db:migrate
```

- Run Seed :

```bash
npx sequelize-cli db:seed:all
```

## create new migration

    //for every table and eny changes we create a new migration empty and changes apply there
    $npx sequelize-cli migration:create --name {tableName}