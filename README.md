# academic-data-interface

React 18 + TypeScript SPA for managing university academic data across four user roles. Built for COP 4020 at USF. Vite dev server, React Router v6, Bootstrap 5 UI.

## Hero numbers

| Metric | Value |
|---|---|
| User roles | 4 (Student, Staff, Advisor, Instructor) |
| Role-gated pages | 5 (one per role plus Login) |
| Shared components | 8 (Sidebar, Summary, AddDrop, ModifyCourses, WhatIf, StudentInfo, InstructorInfo, LogoutButton) |
| Auth | Session-storage based role check on every protected route |
| Build tool | Vite, type-checked through `tsconfig.app.json` and `tsconfig.node.json` |

## Four roles, four views

| Role | Page | What you see |
|---|---|---|
| Student | `pages/Student.tsx` | Course registration, grade view, what-if GPA simulator |
| Staff | `pages/Staff.tsx` | Administrative tasks across students and courses |
| Advisor | `pages/Advisor.tsx` | Caseload of advisees, advising notes |
| Instructor | `pages/Instructor.tsx` | Course rosters, grade entry, syllabus updates |

Login routes to the right page based on the role in session storage. Logout clears it. Direct URL hits to a protected page bounce back to Login if no role is present.

## Component map

```
src/
  App.tsx              Router setup, role guard wrapper
  main.tsx             Vite entry
  pages/
    Login.tsx          Role picker plus session-storage write
    Student.tsx        Student dashboard
    Staff.tsx          Staff dashboard
    Advisor.tsx        Advisor dashboard
    Instructor.tsx     Instructor dashboard
  components/
    Sidebar.tsx        Nav, role-aware menu
    Summary.tsx        Top-of-page stats card
    AddDrop.tsx        Course add and drop UI
    ModifyCourses.tsx  Course edit form
    WhatIf.tsx         GPA simulator
    StudentInfo.tsx    Student detail panel
    InstructorInfo.tsx Instructor detail panel
    LogoutButton.tsx   Clears session storage and routes to Login
  css/                 Bootstrap overrides
```

## Run

```
npm install
npm run dev
```

App at http://localhost:5173.

## Build

```
npm run build
```

Outputs static files into `dist/`, ready for any static host (Netlify, GitHub Pages, S3).

## Stack

React 18, TypeScript, Vite, React Router v6, Bootstrap 5, React Bootstrap, ESLint v9 flat config.

## Limitations

1. Mock data. The frontend stores all academic records in client state. No backend ships with this repo.
2. Session-storage auth. Adequate for the coursework demo, not production. A real deploy needs a server-side session and a hashed credential store.
3. Single-tenant. No multi-school separation.

## License

MIT, see `LICENSE`.
