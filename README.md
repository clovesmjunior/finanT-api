# finanT-api

## Run in development:

```bash
docker-compose up
```

Using this way is already enabled for debugging and hot deploy is also enabled.


## Run by dockerfile:

Run with:

```bash
docker build -t clovesmjunior/finant .
```

after:

```bash
docker run -p 3001:3001 -d clovesmjunior/finant
```

## Run tests

<p>In this implementation, every commit made is checked lint and tests only the changed files if they have.</p>
<p>If you need to perform the tests, follow the instructions below.</p>

* To install the dependencies:

```bash
yarn install
```

* To perform the tests only, you must first install the yarn and run the following command:

```bash
yarn test
```