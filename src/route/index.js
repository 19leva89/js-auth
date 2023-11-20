// Підключаємо роутер до бек-енду
// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

// router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
	// res.render генерує нам HTML сторінку

	// ↙️ cюди вводимо назву файлу з сontainer
	res.render('index', {
		name: 'index',
		component: [],
		title: 'Index page',
		data: {},
	})
	// ↑↑ сюди вводимо JSON дані
})

router.get('/home', function (req, res) {
	res.render('home', {
		name: 'home',
		component: [],
		title: 'Home page',
		data: {},
	})
})

router.get('/logout', function (req, res) {
	res.render('logout', {
		name: 'logout',
		component: [],
		title: 'Logout page',
		data: {},
	})
})

// Підключіть файли роутів
const auth = require('./auth')
// Підключіть інші файли роутів, якщо є
const user = require('./user')

// Об'єднайте файли роутів за потреби
router.use('/', auth)
// Використовуйте інші файли роутів, якщо є
router.use('/', user)

// Експортуємо глобальний роутер
module.exports = router
