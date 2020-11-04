import React, { PureComponent } from "react";
import "./home.scss";
import { Input, Button } from "antd";
import NewZhiwei from '../newZhiwei'
class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      shuju: [
        {
          key: 1,
          name: "社会招聘",
        },
        {
          key: 2,
          name: "校园招聘",
        },
        {
          key: 3,
          name: "了解阿里",
        },
        {
          key: 4,
          name: "个人中心",
        },
      ],
      sousuo: [
        {
          id: 0,
          name: "JAVA",
        },
        {
          id: 1,
          name: "IOS",
        },
        {
          id: 2,
          name: "前端",
        },
        {
          id: 3,
          name: "数据",
        },
      ],
    };
  }
  render() {
    return (
      <div className="home">
        <header className="header">
          <ul className="List">
            <div className="firstList">
              <div className="sheZhao">
                <div>
                  <img
                    src="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png"
                    className="imgSrc"
                    alt="tubiao"
                  ></img>
                </div>
                <i> | </i>
                <span>社招官网</span>
              </div>
            </div>
            <li
              style={{
                color: "orangered",
              }}
            >
              首&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;页
            </li>
            {this.state.shuju.map((item) => {
              return <li key={item.key}>{item.name}</li>;
            })}
          </ul>
        </header>
        <div className="content">
          <div className="contentTop">
            <div className="topInner">
              <div className="contentText">
                <p>If not now, when?</p>
                <p>If not me, who?</p>
                <p>此时此刻，非我莫属！</p>
              </div>
              <div className="inputStyle">
                <Input bordered="false" placeholder="请输入职位关键字" />
                <Button className="contentButton">搜索</Button>
              </div>
              <p className="hotSearch">
                热门搜索:
                {this.state.sousuo.map((item) => {
                  return <span key={item.id}>{item.name}</span>;
                })}
              </p>
            </div>
          </div>
          <div className="contentBottom">
               <NewZhiwei></NewZhiwei>
              <div className="contentRight">
                <div>
                  <img style={{
                    width:197
                  }} src="https://img.alicdn.com/tfs/TB1SbxarYj1gK0jSZFOXXc7GpXa-2546-848.png" alt=""/>
                </div>
                <div>
                  <img 
                  style={{
                    width:260
                  }}
                  src="https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg" alt="" srcset=""/>
                </div>
              </div>
          </div>
        </div>
        <footer>
          <span>阿里巴巴集团 Copyright ©1999-2020 版权所有</span>
        </footer>
      </div>
    );
  }
}
export default Home;
