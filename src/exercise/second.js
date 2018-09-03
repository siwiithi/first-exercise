import React, { Component } from 'react'

//2.> ให้แสดงผลดังนี้
// 1 2 3
// 2 3 4
// 3 4 5

export default class Second extends Component {
  getNumber () {
    for (var i=1;i<4;i++) {
      for (var j=2;j<5;j++) {
        console.log(j)
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