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
- Node cron for scheduling tasks.

**Architecture**

- Cities and Forecasts are different apis for better separation of concerns.
- Running cron jobs as child_processes to avoid blocking the main thread.

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

### 1. Home page

coming soon...

</details>