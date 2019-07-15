const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();

//Задание параметров для Handlebars
const hbs = exphbs.create({
	defaultLayout: 'main',
	extname: 'hbs'
});

//Регистрация Handlebars
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

//Запрос на главную директорию
app.get('/', (req, res) => {
	//Установка статуса, но статус 200 идет по умолчанию в express так что его ставить не обязательно
	res.status(200);
	//Отправка файла index.html
		// res.sendFile(path.join(__dirname, 'views', 'index.html'));
	//Render index with Handlebars
	res.render('index');
});

app.get('/about', (req, res) => {
	// res.sendFile(path.join(__dirname, 'views', 'about.html'));
	res.render('about');
})

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});