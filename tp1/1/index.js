const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Marathon",
  datasets,
  algo: function (input) {
    // YOUR CODE BETWEEN HERE
          for (let index = 0; index < input.length; index++) {
      const element = input[index];
      input = element
      if (input == 50) {
        // input = datasets
        input = datasets[[0]]
      } else if (input == 200) { 

      }
      return input
    // AND HERE
  },
  verify: function (dataset, output) {
    if (dataset.output !== output) {
      throw new Error(`${bright}Got ${output} but expected ${dataset.output}${reset}`)
    } else {
      return true
    }
  }
}
