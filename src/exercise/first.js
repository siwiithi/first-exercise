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

export default class First extends Component {
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
  console.log('total1', total)
  if(total > 500 && total !== 0) {
    fiveHundred = Math.floor(total / 500)
    total = total - 500
  } else if(total === 0){
    fiveHundred = 0
  }

  if (total >= 100 && total < 500 && total !== 0) {
    console.log('total2', total)
    oneHundred = Math.floor(total/100)
    total = total - (oneHundred*100)
  } else if(total === 0){
    oneHundred = 0
  }

  if (total >= 50 && total < 100 && total !== 0) {
    fifty = Math.floor(total/50)
    total = total - 50
  } else if(total === 0){
    fifty = 0
  }

  if ( total >= 20 && total < 50 && total !== 0) {
    console.log('total', total)
    twenty = Math.floor(total/20)
    console.log('twenty', twenty)
    total = total - (twenty*20)
  } else if(total === 0){
    twenty = 0
  }

  if (total >= 10 && total < 20 && total !== 0) {
    ten = Math.floor(total/10)
    total = total - 10
  } else if(total === 0) {
    ten = 0
  }

  if(total >= 5 && total < 10 && total !== 0) {
    five = Math.floor(total/5)
    total = total - 5
  } else if(total === 0) {
    five = 0
  }

  if (total >= 2 && total < 5 && total !== 0) {
    two = Math.floor(total/2)
    total = total -2
  }  else if(total === 0) {
    two = 0
  }

  if (total < 2 && total !== 0) {
    one = Math.floor(total/2)
    total = total -1
  }  else if(total === 0) {
    one = 0
  }

  return (
    <div>
      <p>Five Hundred: {fiveHundred}</p>
      <p>One Hundred: {oneHundred}</p>
      <p>fifty: {fifty}</p>
      <p>twenty: {twenty}</p>
      <p>Ten: {ten}</p>
      <p>Five: {five}</p>
      <p>Two: {two}</p>
      <p>One: {one}</p>
    </div>
  )
}
render () {
  return(
    <div>
    <p><strong>First</strong></p>
    <p>------------------------------------------------------</p>
     { this.change(650, 1000)}
    <p>------------------------------------------------------</p>
    </div>
  )
}
}

