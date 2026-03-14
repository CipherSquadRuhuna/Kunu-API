# Kunu-API

A RESTful API for a garbage waste management and municipal services platform in Sri Lanka. The API enables citizens to report complaints, request garbage pickups, and view waste collection schedules for their division — all connected to their local municipal council.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Running the Project](#running-the-project)
- [API Documentation](#api-documentation)
- [Data Models](#data-models)
- [Deployment](#deployment)
- [Contributing](#contributing)

---

## Features

- **User Authentication** — Phone number–based registration with OTP verification and JWT-secured sessions
- **Profile Management** — Update name, NIC, district, and municipal council
- **Garbage Complaints** — Submit and track garbage-related complaints with location and image attachments
- **Service Complaints** — Submit service complaints directed at specific municipal councils
- **Pickup Requests** — Request a garbage pickup for degradable, non-degradable, or recyclable waste
- **Collection Schedules** — View waste collection schedules by ward/division
- **Reference Data** — Browse districts and municipal councils across Sri Lanka

---

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js ≥ 20.0.0 |
| Framework | Express.js 4 |
| ORM | Sequelize 6 |
| Database | MySQL |
| Authentication | JWT + Bcrypt |
| Validation | Joi |
| Process Manager | PM2 (production) |
| CI/CD | GitHub Actions → Azure VM |

---

## Project Structure

```
Kunu-API/
├── api/
│   ├── bin/
│   │   ├── www                  # HTTP server entry point
│   │   └── database.js          # Sequelize connection initialiser
│   ├── config/
│   │   └── config.json          # Sequelize environment config
│   ├── controllers/             # Route handler functions
│   │   ├── AuthController.js
│   │   ├── ComplainContoller.js
│   │   ├── DataController.js
│   │   ├── RequestPickUpController.js
│   │   ├── ScheduleController.js
│   │   └── StatusController.js
│   ├── middleware/
│   │   ├── ErrorHandleeMiddleware.js
│   │   └── validateRequest.js
│   ├── migrations/              # Sequelize database migrations
│   ├── models/                  # Sequelize ORM models
│   │   ├── index.js
│   │   ├── User.js
│   │   ├── GarbageComplain.js
│   │   ├── ServiceComplain.js
│   │   ├── Districts.js
│   │   ├── MunicipalCouncil.js
│   │   ├── CollectionSchedule.js
│   │   └── RequestPickup.js
│   ├── routes/                  # Express route definitions
│   │   ├── AuthRoutes.js
│   │   ├── ComplainRoutes.js
│   │   ├── DataRoutes.js
│   │   ├── ScheduleRoutes.js
│   │   ├── RequestPickupRoutes.js
│   │   ├── PaymentRoutes.js
│   │   ├── MessageRoutes.js
│   │   └── SubscriptionRoutes.js
│   ├── schema/                  # Joi validation schemas
│   │   ├── AuthSchemas.js
│   │   ├── createComplainSchema.js
│   │   └── RequestPickUp.js
│   ├── seeders/                 # Demo / seed data
│   ├── services/                # Business logic
│   │   ├── authService.js
│   │   ├── userService.js
│   │   ├── dataServices.js
│   │   └── scheduleService.js
│   ├── utils/                   # Shared utilities
│   │   ├── catchAsync.js
│   │   ├── ExpressError.js
│   │   ├── normalizePort.js
│   │   └── sendToChannel.js
│   ├── app.js                   # Express app setup and middleware
│   ├── .env-example             # Template for environment variables
│   ├── .sequelizerc             # Sequelize CLI paths
│   ├── Procfile                 # Process file for deployment
│   └── package.json
└── .github/
    └── workflows/
        └── deploy.yml           # GitHub Actions CI/CD pipeline
```

---

## Prerequisites

- **Node.js** v20 or higher — [Download](https://nodejs.org/)
- **MySQL** 8 or higher — [Download](https://dev.mysql.com/downloads/)
- **npm** (bundled with Node.js)
- **Sequelize CLI** (installed automatically via `npm install`)

---

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/CipherSquadRuhuna/Kunu-API.git
   cd Kunu-API/api
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Copy the environment template:**

   ```bash
   cp .env-example .env
   ```

   Then open `.env` and fill in all required values (see [Environment Variables](#environment-variables)).

---

## Environment Variables

All variables listed in `.env-example` must be set before running the server.

```dotenv
# ─── Azure OpenAI (GPT-3.5) ───────────────────────────────────────
OPEN_AI_GTP35_ENDPOINT=
OPEN_AI_GTP35_SECRET=
GTP35_DEPLOY_ID=

# ─── Azure OpenAI (GPT-4) ─────────────────────────────────────────
OPEN_AI_GPT4_ENDPOINT=
OPEN_AI_GPT4_SECRET=
GPT4_DEPLOY_ID=

# ─── Azure OpenAI (GPT-4o) ────────────────────────────────────────
OPEN_AI_GPT4O_ENDPOINT=
OPEN_AI_GPT4O_SECRET=
GPT4O_DEPLOY_ID=

# ─── MySQL Database ───────────────────────────────────────────────
DATABASE_USERNAME=root
DATABASE_PASSWORD=your_mysql_password
DATABASE_NAME=kunu_db
DATABASE_HOST=127.0.0.1
DATABASE_DIALECT=mysql
DATABASE_URL=mysql://root:your_mysql_password@127.0.0.1:3306/kunu_db

# ─── Application ──────────────────────────────────────────────────
JWT_SECRET=your_jwt_secret
PORT=3001
```

---

## Database Setup

1. **Create the MySQL database:**

   ```bash
   mysql -u root -p -e "CREATE DATABASE kunu_db;"
   ```

2. **Run migrations** to create all tables:

   ```bash
   npx sequelize-cli db:migrate
   ```

3. **(Optional) Seed demo data:**

   ```bash
   npx sequelize-cli db:seed:all
   ```

4. **To undo all migrations** (reset):

   ```bash
   npx sequelize-cli db:migrate:undo:all
   ```

---

## Running the Project

### Development (with auto-reload)

```bash
npm run dev
```

Starts the server with **Nodemon** so it restarts automatically on file changes.

### Production

```bash
npm start
```

### Production with PM2

```bash
pm2 start bin/www --name "kunu-api"
pm2 save
pm2 startup
```

The server listens on the port defined by `PORT` in your `.env` file (default: **3001**).

---

## API Documentation

All endpoints are prefixed with `/api/v1` unless stated otherwise.

### Health Check

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Returns server status |

---

### Authentication — `/api/v1/auth`

| Method | Endpoint | Description | Required Body |
|--------|----------|-------------|---------------|
| POST | `/register` | Register a new user (sends OTP) | `phone_number` |
| POST | `/verify-otp` | Verify OTP and activate account | `phone_number`, `otp` |
| POST | `/login` | Log in and receive a JWT | `phone_number`, `password` |
| POST | `/name-nic` | Set user's full name and NIC | `user_id`, `full_name`, `nic` |
| POST | `/update-password` | Set or update account password | `user_id`, `password` |
| POST | `/district-municipal` | Set user's district and municipal council | `user_id`, `district`, `municipal_council` |

#### Example — Register

```bash
curl -X POST http://localhost:3001/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{"phone_number": "0771234567"}'
```

#### Example — Login

```bash
curl -X POST http://localhost:3001/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"phone_number": "0771234567", "password": "secret123"}'
```

---

### Complaints — `/api/v1/complains`

| Method | Endpoint | Description | Required Body |
|--------|----------|-------------|---------------|
| POST | `/grabage/create` | Submit a garbage complaint | `user_id`, `location`, `attached_image` (optional), `remarks` (optional) |
| POST | `/service/create` | Submit a service complaint | `user_id`, `municiple_councial_id`, `complain` |

#### Example — Garbage Complaint

```bash
curl -X POST http://localhost:3001/api/v1/complains/grabage/create \
  -H "Content-Type: application/json" \
  -d '{
    "user_id": 1,
    "location": "123 Main Street, Galle",
    "remarks": "Uncollected bins for 3 days"
  }'
```

---

### Reference Data — `/api/v1/data`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/districts` | List all districts |
| GET | `/municipal-councils` | List all municipal councils |

---

### Collection Schedule — `/api/v1/schedule`

| Method | Endpoint | Description | Query Params |
|--------|----------|-------------|--------------|
| GET | `/` | Get collection schedule | `division` — ward/division name |

#### Example

```bash
curl "http://localhost:3001/api/v1/schedule?division=Galle%20Fort"
```

---

### Pickup Requests — `/api/v1/request-pickup`

| Method | Endpoint | Description | Required Body |
|--------|----------|-------------|---------------|
| POST | `/create` | Request a garbage pickup | `user_id`, `waste_type`, `location`, `no_of_bags`, `payment_type` |

`waste_type` must be one of: `degradable` | `non-degradable` | `recyclable`

#### Example

```bash
curl -X POST http://localhost:3001/api/v1/request-pickup/create \
  -H "Content-Type: application/json" \
  -d '{
    "user_id": 1,
    "waste_type": "recyclable",
    "location": "45 Lake Road, Colombo",
    "no_of_bags": 3,
    "payment_type": "cash"
  }'
```

---

## Data Models

### User

| Field | Type | Notes |
|-------|------|-------|
| `id` | INTEGER | Primary key, auto-increment |
| `name` | STRING | Unique |
| `phone_number` | STRING | Unique, required |
| `district` | STRING | |
| `municipal_council` | STRING | |
| `password` | STRING | Bcrypt hash |
| `otp_code` | INTEGER | Temporary OTP |
| `is_verified` | BOOLEAN | Set `true` after OTP verification |
| `nic` | STRING | National Identity Card number |

### GarbageComplain

| Field | Type | Notes |
|-------|------|-------|
| `id` | INTEGER | Primary key |
| `user_id` | INTEGER | Required |
| `location` | STRING | Required |
| `attached_image` | STRING | URL/path |
| `remarks` | STRING | |

### ServiceComplain

| Field | Type | Notes |
|-------|------|-------|
| `id` | INTEGER | Primary key |
| `user_id` | INTEGER | Required |
| `municiple_councial_id` | INTEGER | Required |
| `complain` | STRING | |

### District

| Field | Type | Notes |
|-------|------|-------|
| `id` | INTEGER | Primary key |
| `name` | STRING | Required |

### MunicipalCouncil

| Field | Type | Notes |
|-------|------|-------|
| `id` | INTEGER | Primary key |
| `district_id` | INTEGER | FK → District |
| `name` | STRING | Required |

### CollectionSchedule

| Field | Type | Notes |
|-------|------|-------|
| `id` | INTEGER | Primary key |
| `w_id` | INTEGER | Ward ID |
| `ward_name` | STRING | Required |
| `degradable` | STRING | Collection day(s) |
| `non_degradable` | STRING | Collection day(s) |
| `recyclable` | STRING | Collection day(s) |

### RequestPickup

| Field | Type | Notes |
|-------|------|-------|
| `id` | INTEGER | Primary key |
| `user_id` | INTEGER | Required |
| `waste_type` | ENUM | `degradable`, `non-degradable`, `recyclable` |
| `location` | STRING | Required |
| `no_of_bags` | INTEGER | Required |
| `status` | STRING | Default: `pending` |
| `payment_status` | STRING | Default: `pending` |
| `payment_type` | STRING | Required |

---

## Deployment

The project uses **GitHub Actions** to deploy automatically to an **Azure VM** whenever changes are pushed to the `deploy` branch.

### Workflow steps (`.github/workflows/deploy.yml`)

1. SSH into the Azure VM
2. Pull the latest code
3. Reset and re-run database migrations and seeders
4. Install/update npm dependencies
5. Restart the application via PM2

### Required GitHub Secrets

| Secret | Description |
|--------|-------------|
| `SSH_PRIVATE_KEY` | Private SSH key for the Azure VM |
| `MYSQL_PASSWORD` | MySQL root password on the VM |

### Deploy manually

Push to the `deploy` branch to trigger the pipeline:

```bash
git push origin main:deploy
```

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m "feat: add my feature"`
4. Push to your fork: `git push origin feature/my-feature`
5. Open a Pull Request against the `main` branch

Please ensure your code follows the existing style and that all routes are validated with a Joi schema before submitting.

