var homeController = {
	index: function(req, res, next) {
  		res.render('index', { title: 'Página Inicial' });
	}
}

module.exports = homeController;

