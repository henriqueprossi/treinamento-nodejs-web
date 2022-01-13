module.exports = function (app) {
    return {
        index: function (request, response) {
            response.render('home/index');
        }
    };
};