# Architecture Decisions

This document captures the key technical decisions made during the design of HomeVault, and the reasoning behind each one. Documenting *why* choices were made is as important as the choices themselves.

---

## ADR-001: Why build from scratch instead of deploying Jellyfin?

**Decision:** Build a custom frontend and backend rather than deploying an existing media server.

**Reasoning:** The purpose of this project is to learn full-stack development and demonstrate engineering capability. Deploying Jellyfin would be a configuration task, not a development one. Building from scratch means touching every layer — frontend, API design, database schema, auth, streaming logic, and containerisation. That said, Jellyfin's API *may* be used as a reference or optional backend in later phases if it saves reinventing wheels that aren't interesting to reinvent (e.g. transcoding).

---

## ADR-002: Why JWT for authentication?

**Decision:** Stateless JWT tokens for user sessions.

**Reasoning:** A single-server home setup doesn't need session storage infrastructure. JWTs are stateless, easy to implement, and widely used — a good skill to demonstrate. The tradeoff is that token revocation requires extra work (a denylist), which is acceptable for a home project.

---

## ADR-003: Why SQLite in development?

**Decision:** SQLite for local development, with a PostgreSQL option for production.

**Reasoning:** SQLite requires zero setup, which removes friction during the early development phases. The schema is designed to be portable — migrating to PostgreSQL for the NAS deployment is a documented step, not a surprise.

---

## ADR-004: Why TMDB for metadata?

**Decision:** Fetch movie posters, descriptions, and ratings from the TMDB API.

**Reasoning:** Manually managing metadata would be impractical. TMDB is free, well-documented, and the de-facto standard used by Jellyfin, Plex, and others. The only data sent to TMDB is a movie title search — no personal data is involved.

---

## ADR-005: Why Docker Compose for orchestration?

**Decision:** Docker Compose to run all services (frontend, backend, database, nginx).

**Reasoning:** Compose gives a single-command startup for the whole stack, which is good for development parity with production. It also demonstrates a real-world deployment pattern. Kubernetes would be overkill for a single home server.

---

## ADR-006: Why Tailscale for remote access?

**Decision:** Use Tailscale VPN rather than port forwarding or a public domain for remote access.

**Reasoning:** Opening ports on a home router is a meaningful security risk and requires dynamic DNS configuration for non-static IPs. Tailscale creates an encrypted peer-to-peer mesh network between authorised devices — the NAS and family members' phones — without exposing anything to the public internet. It runs as a Docker container alongside the rest of the stack, requires no router configuration, and is free for personal use. Family members install the Tailscale app once and then access HomeVault via its local network address as if they were home.

---

*This document is updated as the project evolves. Each significant decision gets an entry.*
