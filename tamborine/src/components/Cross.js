import React from "react"
import fuzzball from "fuzzball"

var products = require('./../products.json')
products = products["products"]
var db = require('./../ingredients.json')
var dict = {}

class Cross extends React.Component {
    componentDidMount() {
        for(var i = 0; i < db.length; i++) { //create map
            // console.log(db[i][0])
            dict[db[i][0]] = 0
        }
        // console.log(products)

        for(var j = 0; j < products.length; j++) {
            var ingredients = products[j]["ingredients"]
            for(var k = 0; k < ingredients.length; k++) {
                for(var l = 0; l < db.length; l++) {
                    var fuzz = fuzzball.ratio(ingredients[k],db[l])
                    if(fuzz > 50) {
                        console.log(ingredients[k])
                    }
                }
            }
            // console.log(products[j]["ingredients"])
        }
        // console.log(fuzzball.ratio("Coconut Oil", "Cocos Nucifera (Coconut) Oil"))

    }

    render() {
        return null
    }
}

export default Cross