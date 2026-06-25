# HomeVault
Self-hosted home media and file management platform. Replaces cloud storage and streaming subscriptions with a private server running on home hardware.

![Status](https://img.shields.io/badge/status-in%20development-yellow)

![Stack](https://img.shields.io/badge/stack-React%20%7C%20Node.js%20%7C%20Docker-blue)

![License](https://img.shields.io/badge/license-MIT-green)

---

## Overview
HomeVault is a full-stack application running on a self-hosted NAS server. It provides photo storage, file management, and a custom video streaming interface — all on local hardware with no third-party cloud involved.


---
## Features

-  Video streaming with buffered range-request playback

-  Photo library with multi-user and shared family album support

-  JWT-based authentication with per-user private storage

-  Automatic movie metadata and poster fetching via the TMDB API

-  Fully containerised with Docker Compose

-  All data stays on local hardware

  

---


## Architecture


```

┌─────────────────────────────────────────────┐

│                  NAS Hardware                │

│              (Synology DS225+ or other)      │

│                                              │

│  ┌──────────┐  ┌──────────┐  ┌──────────┐  │

│  │  React   │  │  Node /  │  │ SQLite / │  │

│  │ Frontend │  │ Express  │  │Postgres  │  │

│  │  (Nginx) │  │   API    │  │   DB     │  │

│  └────┬─────┘  └────┬─────┘  └────┬─────┘  │

│       └──────────────┴──────────────┘        │

│                  Docker Network              │

│  ┌──────────────────────────────────────┐   │

│  │   /media/movies    /media/photos     │   │

│  └──────────────────────────────────────┘   │

└─────────────────────────────────────────────┘

```
Architecture and technical decisions documented in [`/docs/architecture.md`](./docs/architecture.md).

---
## Tech Stack

| Layer | Technology |

|---|---|

| Frontend | React + Vite |

| Backend | Node.js + Express |

| Database | SQLite (dev) / PostgreSQL (prod) |

| Auth | JWT + bcrypt |

| Movie metadata | TMDB API |

| Containerisation | Docker + Docker Compose |

| Reverse proxy | Nginx |

| Remote access | Tailscale |

  

---

  
## Project Structure

```

homevault/

├── client/               # React frontend

│   ├── src/

│   │   ├── components/

│   │   ├── pages/

│   │   ├── hooks/

│   │   └── api/

│   └── Dockerfile

├── server/               # Node/Express backend

│   ├── src/

│   │   ├── routes/

│   │   ├── middleware/

│   │   ├── services/

│   │   └── db/

│   └── Dockerfile

├── docs/

│   ├── architecture.md

│   ├── api.md

│   └── setup.md

├── docker-compose.yml

├── .env.example

└── README.md

```

  

---

## Getting Started

### Prerequisites

- Node.js 20+

- Docker + Docker Compose

- TMDB API key (free at [themoviedb.org](https://www.themoviedb.org/))

  

### Setup
```bash

git clone https://github.com/yourusername/homevault.git

cd homevault

cp .env.example .env

docker-compose up --build

```
Available at `http://localhost:3000`.


### Environment Variables  

See `.env.example`. Required variables:
  

| Variable | Description |

|---|---|

| `JWT_SECRET` | Secret key for signing JWT tokens |

| `TMDB_API_KEY` | TMDB API key for movie metadata |

| `MEDIA_PATH` | Path to local media folder |

| `DB_PATH` | Path for the SQLite database file |

  

---

  

## Roadmap

  

- [x] Project planning and architecture design

- [ ] Phase 1 — Auth system (register, login, JWT middleware)

- [ ] Phase 2 — File storage API and file browser UI

- [ ] Phase 3 — Video streaming (range requests, buffered playback)

- [ ] Phase 4 — Movie library with TMDB metadata

- [ ] Phase 5 — Photo management and family albums

- [ ] Phase 6 — Docker Compose full-stack setup

- [ ] Phase 7 — NAS deployment, Tailscale VPN, and remote access for family

- [ ] Phase 8 — NFC tag integration for in-home shortcuts
## Author

Built by **Oscar Lovén** — a web developer in progress, documenting the build publicly.

- GitHub: [@OLspectre](https://github.com/OLspectre)
-
Learning log: see commit history and `/docs/architecture.md`
