# Trazza Mock API (`trazza-mock-api`)

## Overview
Mock REST API used by the Trazza web application during development and demos. It is built with `json-server` and exposes every collection under the `/api/v1` prefix, matching the endpoints configured in the web application environment files.

## Tech Stack
- Node.js
- `json-server` 0.17

## Resources
| Bounded Context | Endpoint |
|:--|:--|
| IAM & Profiles | `/api/v1/users`, `/api/v1/carrier-profiles`, `/api/v1/merchant-profiles` |
| Matchmaking & Routing | `/api/v1/return-routes`, `/api/v1/freight-requests`, `/api/v1/match-proposals` |
| Service Execution & Monitoring | `/api/v1/shipments` |
| Payment & Billing | `/api/v1/payment-transactions`, `/api/v1/receipts` |
| Loyalty & Reputation | `/api/v1/ratings` |

Every resource supports `GET`, `GET /:id`, `POST`, `PUT /:id`, `PATCH /:id`, `DELETE /:id` and query filters (for example `/api/v1/users?email=juan.ramos@email.com`).

## Running the Project

### 1) Install dependencies
```bash
npm install
```

### 2) Start the API
```bash
npm start
```
or, with file watching:
```bash
npm run dev
```

The API runs on `http://localhost:3000/api/v1`. The port can be changed with the `PORT` environment variable.

### 3) Connect the web application
In the Trazza web application, `.env.development` must contain:
```
VITE_TRAZZA_PLATFORM_API_URL="http://localhost:3000/api/v1"
```

## Demo Accounts
All demo accounts use the password `Trazza2026`.

| Role | Email |
|:--|:--|
| Carrier | `juan.ramos@email.com` |
| Merchant | `valeria.torres@email.com` |
| Carrier | `carlos.mendoza@email.com`, `pedro.quispe@email.com` |
| Merchant | `camila.rojas@email.com`, `luis.ferrer@email.com` |

## Deployment
The API can be deployed on any Node.js hosting service (for example Render):
- Build command: `npm install`
- Start command: `npm start`

After deploying, set `VITE_TRAZZA_PLATFORM_API_URL` in the web application `.env.production` to `https://<your-service-url>/api/v1`.

## Notes
- `json-server` writes every change to `db.json`. Discard the changes of `db.json` to restore the initial data.
- This API is for development only: it does not implement real authentication and it stores demo passwords in plain text.

## License
See `LICENSE.md`.
