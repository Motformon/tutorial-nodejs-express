const {Router} = require('express');
const router = Router();


router.get('/', (req, res) => {
	// res.sendFile(path.join(__dirname, 'views', 'about.html'));
	res.render('add', {
		title: 'Добавить курс',
		isAdd: true
	});
});


module.exports = router;