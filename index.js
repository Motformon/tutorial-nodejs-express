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

//Сделаем папку public публичной
app.use(express.static('public'));


//Запрос на главную директорию
app.get('/', (req, res) => {
	//Установка статуса, но статус 200 идет по умолчанию в express так что его ставить не обязательно
	res.status(200);
	//Отправка файла index.html
		// res.sendFile(path.join(__dirname, 'views', 'index.html'));
	//Render index with Handlebars
	res.render('index', {
		title: 'Главная страница',
		isHome: true
	});
});

app.get('/add', (req, res) => {
	// res.sendFile(path.join(__dirname, 'views', 'about.html'));
	res.render('add', {
		title: 'Добавить курс',
		isAdd: true
	});
});

app.get('/courses', (req, res) => {
	res.render('courses', {
		title: 'Курсы',
		isCourses: true
	});
})

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});