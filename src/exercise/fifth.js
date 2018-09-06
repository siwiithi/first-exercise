import React, { Component } from 'react'
// จงเขียนโปรแกรม สุ่มเลข 1 - 1000 จำนวน n ค่า
//        เรียง ข้อมูล และ นับความถี่ของเลขแต่ละค่า
export default class Fifth  extends Component {
  randomNumber(n) {
    let numbers = []
    for(var i=1; i<=n; i++){
      numbers.push(Math.floor(Math.random()*1000)+1)
    }
    const sortedNumbers = numbers.sort(function(a, b){return a-b})
    console.log('sortedNumber1', sortedNumbers)
    for(var i=1; i<=sortedNumbers.length; i++){
    for(var j=i; j<=i+1; j++){
     if (sortedNumbers[j] === sortedNumbers[j+1]){
       sortedNumbers.splice(sortedNumbers[j+1])
       console.log('sortedNumber', sortedNumbers)
     }
    }
  }

  }
  render () {
    return (
      <div>
        {this.randomNumber(10)}
      </div>
    )
  }
}