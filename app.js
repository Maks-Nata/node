const express = require('express');
const app = express();
const port = 5100;

 app.get("/", () => {
      console.log('Hello');

  });

app.listen(port, () => {
    console.log(`Server has started on  port http://localhost:${port}`);
});

