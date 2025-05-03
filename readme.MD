# MERN Blog Application 📝

A full-stack blog application built with the MERN (MongoDB, Express.js, React, Node.js) stack.

This project allows users to create, edit, and delete blog posts with proper authentication. It is designed as part of a fullstack internship assignment.

---

## 🔧 Tech Stack

- **Frontend**: React, TailwindCSS, Axios
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Authentication**: JWT + HTTP-only cookies
- **Deployment**: Render (Backend), Vercel/Netlify (Optional for Frontend)

---

## 📁 Project Structure

Blog-Application/
├── Backend/ # Express server
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── server.js
│ └── .env
├── Frontend/ # React client
│ ├── src/
│ ├── public/
│ └── vite.config.js
├── README.md
└── .render.yaml # Render deployment configuration


---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/frazhaidry/Blog-Application.git
cd Blog-Application

2. Backend Setup
bash
Copy code
cd Backend
npm install
Create a .env file inside the Backend folder:

ini
Copy code
PORT=5000
MONGO_URI=<your-mongo-db-uri>
JWT_SECRET=your_jwt_secret
Start the backend server:

bash
Copy code
npm start

3. Frontend Setup
bash
Copy code
cd ../Frontend
npm install
npm run dev
🌐 Deployment (Render)
The backend is deployed using Render.

A .render.yaml file is present in the root directory to configure the Render deployment.

Ensure your MongoDB Atlas IP whitelist includes 0.0.0.0/0 to allow Render to connect.

🧪 Test Credentials
There are no default credentials; register via the frontend if authentication is implemented.

🛠 Features
✍️ Create, edit, and delete blogs

📚 View blogs in a clean, responsive UI

💾 MongoDB storage

🧾 JWT-based secure authentication

🛰️ Fully deployable and API-ready

📩 Submission
GitHub Repo: https://github.com/frazhaidry/Blog-Application

Assignment: Datachecks Fullstack Internship Apr 25

Email Subject: Datachecks Fullstack Internship Apr 25

Send To: recruitment@datachecks.io

Cuvette Profile: Add your cuvette profile link here

📄 License
MIT License

vbnet
Copy code

Let me know if you want me to include live deployed links, Docker instructions, or screenshots too.







