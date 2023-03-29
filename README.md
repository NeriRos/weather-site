# Weather App

The goal of this project is to build a simple and lightweight weather website.

So I choose to create a nextjs fullstack app for showing weather data from
the [OpenWeatherMap](https://openweathermap.org/) API.

## Core principles

**Stack**

- NextJS for SSR and easy routing.
- React for quick prototyping and easy to use.
- Using Prisma for database management for its simplicity and flexibility.
- Sqlite as lightweight database - all data exists in the api and this site just shows it.
- ContextProvider for state management because its simple and easy to use.

**Architecture**

- Cities and Forecasts are different apis for better separation of concerns.

## Getting started

### 1. Download example and install dependencies

Clone this repository:

```bash
git clone https://github.com/NeriRos/weather-site.git
``` 

Install npm dependencies:

```bash
cd weather-site
npm install
```

### 2. Create and seed the database

Run the following command to create the SQLite database file and seed it with dummy data. \
This also creates the `city` and `forecast` tables that are defined in the prisma scheme:

```bash
npx prisma migrate dev --name init
```

### 3. Start the app

```bash
npm run dev
```

The app is now running, navigate to [`http://localhost:3000/`](http://localhost:3000/) in your
browser to explore its UI.

<details><summary>Expand for a tour through the UI of the site</summary>

<br />

**Blog** (located in [`./pages/index.tsx`](./pages/index.tsx))

![](https://imgur.com/eepbOUO.png)

**Signup** (located in [`./pages/signup.tsx`](./pages/signup.tsx))

![](https://imgur.com/iE6OaBI.png)

**Create post (draft)** (located in [`./pages/create.tsx`](./pages/create.tsx))

![](https://imgur.com/olCWRNv.png)

**Drafts** (located in [`./pages/drafts.tsx`](./pages/drafts.tsx))

![](https://imgur.com/PSMzhcd.png)

**View post** (located in [`./pages/p/[id].tsx`](./pages/p/[id].tsx)) (delete or publish here)

![](https://imgur.com/zS1B11O.png)

</details>