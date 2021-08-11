# Test todo list

Backend and frontend node.js, pgsql and vuejs make a test todo list. Please readme first about installing and requirement environment. Before running this app, please **git pull** for get newest commit.

## Backend

This backend deploy with node.js, express framework, and pgsql for DBMS

### **Deployment Requirement Backend**

---

- Node.js version 14.16
- NPM version 6.14
- Pgsql (Postgress) version 11
- NOTE if you use version higher its no problem

### **Installing**

---

1. For first step you must to install package node_modules
   > npm install
2. Please open /backend/.env if you get different default configuration
   > DB_HOST, DB_NAME, DB_PORT, DB_DRIVER, DB_USER, DB_PASS is configuration for connection with DBMS.
3. Create database on your DBMS, in this apps name database is 'todo_db'. You can change this name with your favorit name database, but don't forget to change **DB_NAME** on .env
4. For run schema databasenya, first you must to remove or comment "type":"module" on package.json and then you just need to run db:migrate on your command.
   > npx sequelize-cli db:migrate
5. Don't forget to insert "type":"module" on package.json again, because its need for run express. And finally steps, just run index.js on your command.
   > node index
6. This server run on <http://localhost:3000>

## Frontend

---

This frontend deploy use vue.js and bootstraps. Because i'm make this app with short time, so i'm not using SPA.

If backend already running on your host you just open frontend/index.html with your browser to running frontend.

### **Config**

By default host that running for access backend is <http://locahost:3000>. If you want change with host and port backend edit on **app.js > host**.
