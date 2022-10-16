const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const app = express();
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "employee_book",
  port: "8889",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
//ส่งapi ดูข้อมูลทั้งหมด รับข้อมูล
app.get("/api/get", (req, res) => {
  const sqlGet = "SELECT * FROM employees_db;";
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
});

//เพิ่มข้อมูล
app.post("/api/post", (req, res) => {
  const { name, age, gender, phone, position, status } = req.body;
  const sqlInsert =
    "INSERT INTO employees_db (name, age, gender, phone, position, status) VALUES (?,?,?,?,?,?)";
  db.query(
    sqlInsert,
    [name, age, gender, phone, position, status],
    (error, result) => {
      if (error) {
        console.log(error);
      }
    }
  );
});
//ลบข้อมูล
app.delete("/api/remove/:id", (req, res) => {
  const { id } = req.params;

  const sqlRemove = "DELETE FROM employees_db WHERE id = ?";
  db.query(sqlRemove, id, (error, result) => {
    if (error) {
      console.log(error);
    }
  });
});

//ส่งreq ดูข้อมูลทั้งหมด รับข้อมูล
app.get("/api/get/:id", (req, res) => {
  const { id } = req.params;
  const sqlGet = "SELECT * FROM employees_db where id = ?";
  db.query(sqlGet, id, (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
});

// update
app.put("/api/update/:id", (req, res) => {
  const { id } = req.params;
  const { name, age, gender, phone, position, status } = req.body;
  const sqlUpdate =
    "UPDATE employees_db SET name = ?, age = ?, gender = ?, phone = ?, position = ? , status = ? WHERE id = ?";
  db.query(
    sqlUpdate,
    [name, age, gender, phone, position, status, id],
    (error, result) => {
      if (error) {
        console.log(error);
      }
      res.send(result);
    }
  );
});

app.get("/", (req, res) => {
  //   const sqlInsert =
  //     "INSERT INTO employees_db (name, age, gender, phone, position) VALUES ('Siravibh', '26', 'Female', '098342345', 'Backend')";
  //   db.query(sqlInsert, (error, result) => {
  //     console.log("error", error);
  //     console.log("result", result);
  //     res.send("Hello");
});

app.listen(3001, () => console.log("Server up and running..."));
