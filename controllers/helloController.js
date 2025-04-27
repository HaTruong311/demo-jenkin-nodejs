/**
 * Hello World Controller
 * Simple controller with a GET endpoint that returns "hello world"
 */

// Define the controller functions
const helloController = {
  /**
   * Get hello world message
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   */
  getHello: (req, res) => {
    res.status(200).send('hello world');
  }
};

module.exports = helloController;
