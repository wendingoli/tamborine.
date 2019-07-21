import React from "react"
import fuzzball from "fuzzball"

var products = require('./../products.json')
products = products["products"]
var db = require('./../ingredients.json')
var dict = {}

class Cross extends React.Component {
    mapIngredient(ingredient) {
        db.map(function (person) {
            // if ((person[0] === "Cocos Nucifera (Coconut) Oil") ) {
            //     console.log("person")
            // }
            // if ((ingredient === "Cocos Nucifera (Coconut) Oil")) {
            //     console.log("ing")
            // }
            if (person[0] === ingredient) {
                console.log("MATCH")
                console.log(ingredient)
                dict[ingredient] += 1
                return ingredient
            } else {
                return null
            }
        });
    }
    componentDidMount() {
        for(var i = 0; i < db.length; i++) { //create map
            // console.log(db[i][0])
            dict[db[i][0]] = 0
        }
        // console.log(products)

        // for(var j = 0; j < products.length; j++) {
        //     var ingredients = products[j]["ingredients"]
        //     for(var k = 0; k < ingredients.length; k++) {
        //         for(var l = 0; l < db.length; l++) {
        //             var fuzz = fuzzball.ratio(ingredients[k],db[l])
        //             if(fuzz > 50) {
        //                 console.log(ingredients[k])
        //             }
        //         }
            // }

        
            // console.log(products[j]["ingredients"])
        // }
        // var p = products[0]
        // var ingredients = p["ingredients"]
        // ingredients = ingredients.split(", ")
        // console.log(p)
        for(var prod in products) {
            // console.log(prod)
            var p = products[prod]
            var ingredients = p["ingredients"]
            ingredients = ingredients.split(", ")
            // console.log(ingredients)
        
        // for(var l = 0; l < p.length; l++) {
            // var ingredients = p["ingredients"]
            // ingredients = ingredients.split(", ")
            for(var k = 0; k < ingredients.length; k++) {
                // console.log(ingredients[k])
                // console.log(ingredients[k])
                var result = this.mapIngredient(ingredients[k])
                // console.log(result)
                // if(result) {
                //     console.log(result)
                // }
    
            // }
        }
            // console.log(dict)
        }
        // console.log(dict)
        var matches = []
        for(var d in dict) {
            if(dict[d] > 0) {
                matches.push([d, dict[d]])
                // console.log(d)
            }
        }
        // console.log(matches)

        matches.sort(function (a, b) {
            return a[1] - b[1];
        }); console.log(matches)
        // console.log(fuzzball.ratio("Coconut Oil", "Cocos Nucifera (Coconut) Oil"))

    }

    render() {
        return null
    }
}

export default Cross