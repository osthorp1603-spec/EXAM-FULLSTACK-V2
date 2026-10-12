# Online Exam System — V2

## Description

A full-stack web application for academic assessment, rebuilt from scratch using React and a modern architecture.

The system allows students to enter their personal data, read exam instructions, answer multiple-choice questions, and receive an automatic score at the end. Scores are calculated on the backend, stored in a database, and can be reviewed and filtered by the teacher through an admin panel.

This is the **second version** of the project. V1 was built with vanilla JavaScript, a per-matter folder structure, and a local SQLite admin tool written in Python. V2 was redesigned around a **single React SPA**, a **REST API**, and a **cloud-deployed backend**, solving the architectural and security limitations of the first version.

### What changed from V1 to V2

- **From vanilla JS to React + Vite** — the entire frontend is now a component-based SPA with client-side routing via React Router.
- **From many folders to one application** — every exam (matter + partial) is now a route inside the same app, not an independent folder deployed separately.
- **From exposed answers to secure evaluation** — in V1, the correct answers lived in a JavaScript file downloadable by any student. In V2, the answers live only on the backend and never reach the browser.
- **From local SQLite to cloud persistence** — the backend runs on Render and stores data in a cloud instance, accessible from anywhere.
- **From manual CSV backup to a cleaner data flow** — results are read directly by the admin panel through the API.
- **Modern UI** — a consistent design system across all screens, using custom CSS with modern layout techniques.

## Technologies used

**Frontend**
- React 18
- Vite
- React Router
- CSS (custom design system)

**Backend**
- Node.js
- Express
- better-sqlite3
- CORS

**Database**
- SQLite (cloud instance on Render)

**Deployment**
- Netlify (frontend)
- Render (backend)

**Architecture**
- REST API
- Layered backend (routes → DAO → database)
- Custom React hooks
- Environment-based configuration

## Project structure
```
WEB EXAMENES_V2/
│
├── frontend/
│   ├── public/
│   │   └── _redirects
│   │
│   ├── src/
│   │   ├── config/
│   │   │   └── examen.js
│   │   │
│   │   ├── data/
│   │   │   └── catalogos.js
│   │   │
│   │   ├── hooks/
│   │   │   └── usePulso.js
│   │   │
│   │   ├── pages/
│   │   │   ├── RegistroDatos.jsx
│   │   │   ├── Instrucciones.jsx
│   │   │   ├── Examen.jsx
│   │   │   └── Admin.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── .env.local
│   ├── .env.production
│   ├── .env.example
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   │
│   │   ├── dao/
│   │   │   └── respuestasDAO.js
│   │   │
│   │   ├── data/
│   │   │   ├── examenes/
│   │   │   │   ├── desarrolloweb/
│   │   │   │   │   ├── parcial1.js
│   │   │   │   │   ├── parcial2.js
│   │   │   │   │   └── parcial3.js
│   │   │   │   ├── fundamentosprogramacion/
│   │   │   │   │   └── parcial1.js
│   │   │   │   └── index.js
│   │   │   └── tokens.js
│   │   │
│   │   ├── routes/
│   │   │   ├── preguntas.js
│   │   │   ├── respuestas.js
│   │   │   └── token.js
│   │   │
│   │   └── app.js
│   │
│   ├── db/
│   ├── server.js
│   └── package.json
│
├── evidencias/
├── .gitignore
└── README.md
```

## Technical explanation

The system follows a **client–server architecture** with a clear separation between presentation, business logic, and data persistence.

### Frontend (React + Vite)

The frontend is a **Single Page Application** built with React and Vite. It uses **React Router** to navigate between screens without reloading the page:

- `/` — Student registration form.
- `/instrucciones` — Exam instructions.
- `/examen` — The exam itself.
- `/admin` — Teacher's panel to review results.

Each screen is an **independent component** with its own CSS file. Reusable logic is extracted into **custom hooks** — for example, `usePulso` periodically pings the backend to prevent the free-tier Render instance from sleeping.

The API URL is read from an environment variable (`VITE_API_URL`), so the same codebase works in development (`localhost:3000`) and production (`onrender.com`) without changes.

### Backend (Node.js + Express)

The backend is organized in **layers**, each with a single responsibility:

- **Routes** (`routes/`) — Define the HTTP endpoints. They receive requests and return responses.
- **DAO** (`dao/`) — Contains every SQL query. No business logic, only data access.
- **Config** (`config/`) — Handles the SQLite connection.
- **Data** (`data/`) — Contains the exam question banks. This is where the correct answers live, and they never leave the server.

The main endpoint is `POST /api/respuestas`, which:
1. Validates the incoming payload.
2. Checks for duplicate submissions.
3. **Calculates the score on the server** by comparing the student's answers against the correct answers stored in the backend.
4. Persists the result in the database.
5. Returns the final score and a detailed list of incorrect answers.

Another endpoint, `GET /api/preguntas`, returns the exam questions to the frontend **with the `correcta` field removed**, so students cannot inspect the correct answers from the browser.

### Database (SQLite)

The database has a single table, `respuestas`, with a `UNIQUE` constraint on `(apellido, nombre, materia, parcial, sede, jornada)` to prevent duplicate submissions of the same exam by the same student.

### Flow

1. The student enters their personal data and selects a subject and partial.
2. The frontend requests the exam questions from the backend (`GET /api/preguntas`).
3. The backend returns the questions **without** the correct answers.
4. The student answers the questions; a 1-hour timer runs during the exam.
5. On submission, the frontend sends only the student's answers to the backend (`POST /api/respuestas`).
6. The backend calculates the score, saves the result, and returns the score plus a breakdown of incorrect answers.
7. The frontend displays the score and, if requested, the list of failed questions.
8. The teacher opens `/admin` to review, filter, and inspect all submitted exams.

### Security note

Unlike V1, where the correct answers were embedded in a downloadable JavaScript file, V2 keeps them exclusively on the server. A student inspecting the network tab will only see the questions and options, never the solution.

## Evidence

![registration_form](./evidencias/registro.png)
![instructions_view](./evidencias/instrucciones.png)
![exam_page](./evidencias/examen.png)
![score_view](./evidencias/nota.png)
![incorrect_answers](./evidencias/verificarrespuestas.png)
![admin_dashboard](./evidencias/admin.png)
