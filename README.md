# finanT-api

* Run in development:

```bash
docker-compose up
```

Using this way is already enabled for debugging and hot deploy is also enabled.


* Run by dockerfile:

Run with:

```bash
docker build -t clovesmjunior/finant .
```

after:

```bash
docker run -p 3001:3001 -d clovesmjunior/finant
```

