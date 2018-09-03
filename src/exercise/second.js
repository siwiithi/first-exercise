import React, { Component } from 'react'

//2.> ให้แสดงผลดังนี้
// 1 2 3
// 2 3 4
// 3 4 5

export default class Second extends Component {
  getNumber () {
    for (var i=1;i<4;i++) {
      for(var j=i+1; j<(i+2); j++){
        for (var k=i+2; k<(i+3); k++){
          console.log(i, j, k)
        }
      }
    }
  }

  render() {
    return(
      <div>
        {this.getNumber()}
      </div>
    )
  }
}