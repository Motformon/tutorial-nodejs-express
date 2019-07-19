const {Router} = require('express');
const router = Router();


// Создание роутера
router.get('/', (req, res) => {
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


module.exports = router;