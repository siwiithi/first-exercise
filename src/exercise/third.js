import React, { Component } from 'react'
// จงเขียนโปรแกรม รับตัวเลข 3 จำนวน 
//   กำหนด  2 เท่ากับ 10
//   ถ้าตัวเลขที่รับมา มากกว่า 9 ให้นำมาหาผลรวม 
//   เช่น 
//    inputNumber (2, 11, 3)
//    | 10 + 11 = 21 
//      inputNumber (20, 2, 40) 
//    | 20 + 10 + 40 = 70 
export default class Third extends Component {
  inputNumber(i, j, k) {
  let sum = 0
    if (i===2){
      i = 10
      sum = sum + i
    } else if(i>9){
      sum = sum + i
    }
    if (j===2) {
      j = 10
      sum = sum + j
    } else if(j>9) {
      sum = sum + j
    }
    if (k===2) {
      k=10
      sum = sum+k
    } else if(k>9) {
      sum = sum + k
    }
    return sum
  }
  render() {
    return(
      <div>
      <p><strong>Third</strong></p>
      <p>------------------------------------------------------</p>
       { this.inputNumber(20, 2, 40)}
      <p>------------------------------------------------------</p>
      </div>
    )
  }
}