# Flights API

This is a simple Node.js API made for Parafernalha Interativa hiring test.

## How to use it

* Clone this repo
* On terminal, run ```yarn```
* Rename ```.env.example``` to ```.env``` and add MongoDB connection string.
* On terminal, run ```yarn start```
* It's live! Access: ```http://localhost:3000```

## Routes

Retrieve all flights avaible on database:
>GET request to "/flight"

Retrieve specific flights from database:
>GET request to "/flight?departure=AAAA-MM-DD&from=AIRPORT&to=AIRPORT"

Add new flight to database:
>POST request to "/flight"

```json
{
  "from": "GIG",
  "to": "GRU",
  "date": "2019-10-10",
  "company": "GOL"
}
```
