import React, { Component } from 'react'
// จงเขียนโปรแกรม สุ่มเลข 1 - 1000 จำนวน n ค่า
//        เรียง ข้อมูล และ นับความถี่ของเลขแต่ละค่า
export default class Fifth  extends Component {
  randomNumber(n) {
    let numbers = []
    let res = []
    for(var i=1; i<=n; i++){
      numbers.push(Math.floor(Math.random()*1000)+1)
    }
    const sortedNumbers = numbers.sort(function(a, b){return a-b})
    //sortedNumbers = [38, 198, 218, 420, 650, 742, 797, 833, 837, 853]
    for(var i=0; i<sortedNumbers.length; i++){
      // Clear ค่า count ทุกรอบ
      let count = 0
      for(var j=0; j<sortedNumbers.length; j++) {
        if(sortedNumbers[i]===sortedNumbers[j]){
          count++
        }
      }
      if(sortedNumbers[i] !== sortedNumbers[i-1]) {
        res.push({ number: sortedNumbers[i], count: count})
      }
    }
    console.log('-------------------------------')
    console.log(res)
    console.log('-------------------------------')
  }
  render () {
    return (
      <div>
        {this.randomNumber(10)}
      </div>
    )
  }
}
