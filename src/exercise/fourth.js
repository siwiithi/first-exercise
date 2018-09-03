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
  DecToBin(num) {
    console.log(9%2)
  }
  render() {
    return (
      <div>
        <p>--------------------------</p>
        {this.DecToBin(9)}
        <p>--------------------------</p>
      </div>
    )
  }
}