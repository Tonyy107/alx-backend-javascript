/**
 * Contains the miscellaneous route handlers.
 * @author Eman salem <https://github.com/Eman-salem123>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;