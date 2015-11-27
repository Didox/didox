var HomeController = {
  index: function(request, response) {
    response.render('home/index');
  }
}

module.exports = HomeController;