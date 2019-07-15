const express = require('express');
const path = require('path');
const app = express();

//Запрос на главную директорию
app.get('/', (req, res) => {
	//Установка статуса, но статус 200 идет по умолчанию в express так что его ставить не обязательно
	res.status(200);
	//Отправка файла index.html
	res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/about', (req, res) => {
	res.sendFile(path.join(__dirname, 'views', 'about.html'));
})

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});