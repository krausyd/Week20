import express from 'express';

import db from './config/connection.js';
import routes from './routes/index.js';

await db();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/dist'));

   app.get('*', (_req, res) => {
    res.sendFile('../client/dist/index.html');
  });
}



let age = 35;
let nationality = "usa"

if (age >= 18 && age < 21 && nationality == "usa") {
  console.log("you are and adult but cant drink")
} else if (age >= 18 && nationality == "mex") {
  console.log("you can drink")
} else if (age > 21) {
  console.log(" congrats you can drink")
} else {
  console.log(" you are a baby")
}

/*
test case 1:
test age: 0 no matter nationality
test case 2:
test age 17 no matter nationality
test case 3:
test age 18 nationality mex
*/

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
});
