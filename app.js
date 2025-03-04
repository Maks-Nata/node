const express = require('express');
const app = express();
const port = 5100;

app.get("/", () => {
     console.log('Hello'); // Выводится в терминале при каждом запросе

 });

app.listen(port, () => {
    console.log(`Server has started on  port ${port}`);
});

