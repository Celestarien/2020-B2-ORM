const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Déménagement",
  datasets,
  algo: function (input) {
    // YOUR CODE BETWEEN HERE
     let cartons = input[0]
    let poid = 0
    let aller_retour_compteur = 1
    for (let index = 1; index < input.length; index++) {
      const element = input[index];
      if ((poid + element) <= 100) {
            poid += element
      } else {
            aller_retour_compteur += 1
            poid = element
      }
    }
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
