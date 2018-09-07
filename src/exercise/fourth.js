// 4.> จงเขียนโปรแกรม แปลตัวเลขฐาน 10 เป็น ฐาน 2
//        input number : 8
//        | 1000
//        input number : 10
//        | 1010
//        input bumber : 18
//        | 10010

// remainder แปลว่าเศษที่เหลือจากการหาร
import React, { Component } from 'react'

export default class Fourth extends Component {
  // DecToBin(num) {
  //   let bin = num.toString(2)
  //   return <div>
  //     <span>{num} ==> {bin}</span>
  //   </div>
  // }
  render() {
    return (
      <div>
        {this.DecToBin(9)}
      </div>
    )
  }
}