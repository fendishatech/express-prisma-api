console.log("Everything is fine");

import app from "./app";

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
