import React, { Component } from 'react'

// 1000 >>> 0 end
//1000 >>> 500 >> 100 >> 0 end

// Example recursive
// function factorial(number) {
//   if(number <= 0){
//     return 1
//   } else {
//     return number * factorial(number-1)
//   }
// }

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

export default class FirstRecursive extends Component {
  change (cost, cash) {
    // console.log('cost', cost)
    // console.log('cash', cash)
    let total = cash - cost
    let oneThousand = 0
    let fiveHundred = 0
    let oneHundred = 0
    let fifty = 0
    let twenty = 0
    let ten = 0
    let five = 0
    let two = 0
    let one = 0
    // console.log('total', total)
    const changeMoney = (total) => {
      if(total === 0) {
        oneThousand = 1
      } else if (total > 500) {
          fiveHundred = Math.floor(total / 500)
          total = total - 500
          changeMoney(total)
        } else if(total>=100) {
          oneHundred = Math.floor(total/100)
          total = total - (oneHundred*100)
          changeMoney(total)
        } else if(total >=50) {
          fifty = Math.floor(total/50)
          total = total - 50
          changeMoney(total)
        } else if(total >= 20) {
          twenty = Math.floor(total/20)
          total = total - (twenty*20)
          changeMoney(total)
        } else if(total >= 10) {
          ten = Math.floor(total/10)
          total = total - 10
          changeMoney(total)
        } else if(total >= 5) {
          five = Math.floor(total/5)
          total = total - 5
          changeMoney(total)
        } else if(total >= 2) {
          two = Math.floor(total/2)
          total = total -2
          changeMoney(total)
        } else if(total < 2) {
          one = Math.floor(total/2)
          total = total -1
          changeMoney(total)
        } 
      return (
        <div>
          <p>One Thousand: {oneThousand}</p>
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
    return changeMoney(total)
  }
  render () {
  return(
    <div>
    <p><strong>First-Recursive</strong></p>
    <p>------------------------------------------------------</p>
    { this.change(300, 1000)}
    <p>------------------------------------------------------</p>
    </div>
  )
}
}

