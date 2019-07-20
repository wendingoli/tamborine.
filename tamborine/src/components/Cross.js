import React from "react"

var products = require('./../products.json')

class Cross extends React.Component {
    componentDidMount() {
        console.log(products)
    }

    render() {
        return null
    }
}

export default Cross