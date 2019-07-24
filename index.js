const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const homeRoutes = require('./routes/home');
const cartRoutes = require('./routes/cart');
const addRoutes = require('./routes/add');
const coursesRoutes = require('./routes/courses');

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
app.use(express.static(path.join(__dirname, 'public')));

//Обработка данный(например post запроса)
app.use(express.urlencoded({extended: true}));

//Вызов роутеров
app.use('/', homeRoutes);
app.use('/add', addRoutes);
app.use('/courses', coursesRoutes);
app.use('/cart', cartRoutes);


const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});