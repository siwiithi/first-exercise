import React, { Component } from 'react'

// จงเขียนโปรแกรม เงินทอน?
// เช่น ซื้อ ของ 150 บาท จ่าย 1000 ได้เงินทอนเป็น 
// แบงค์       จำนวน 
// 500           1
// 100           3
//   50           1
//   20           0
//   10            0
//     5           0
//     2           0
//     1            0

export default class FirstExercise extends Component {
change (cost, cash) {
  let total = cash - cost
  let fiveHundred = 0
  let oneHundred = 0
  let fifty = 0
  let twenty = 0
  let ten = 0
  let five = 0
  let two = 0
  let one = 0
  if(total > 500) {
    fiveHundred = Math.floor(total / 500)
    total = total - 500
  } 
  if (total<500) {
    oneHundred = Math.floor(total/100)
    total = total - (oneHundred*100)
  }
  if (total < 100) {
    fifty = Math.floor(total/50)
    total = total - 50
  }
  if (total < 50) {
    twenty = Math.floor(total/20)
    total = total - (twenty*20)
  }
  if (total < 20) {
    ten = Math.floor(total/10)
    total = total - 10
  }
  if(total < 10) {
    five = Math.floor(total/5)
    total = total - 5
  }
  if (total < 5) {
    two = Math.floor(total/2)
    total = total -2
  }
  if (total < 2) {
    one = Math.floor(total/2)
    total = total -1
  }

  return (
    <div></div>
  )
}
render () {
  return(
    <div>
     { this.change(150, 1000)}
    </div>
  )
}
}

