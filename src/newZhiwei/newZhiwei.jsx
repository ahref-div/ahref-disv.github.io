import React, { Component } from "react";
import "./newZhiwei.scss";
import { Card } from "antd";
import BScroll from "better-scroll";
class newZhiwei extends Component {
  constructor() {
    super();
    this.state = {
      zhiwei: [
        {
          id: "0000",
          name: "xxxxx",
          city: "成都",
          time: "1分钟前",
        },
        {
          id: "0001",
          name: "xxxxx",
          city: "成都",
          time: "1分钟前",
        },
        {
          id: "0002",
          name: "xxxxx",
          city: "成都",
          time: "1分钟前",
        },
        {
          id: "0003",
          name: "xxxxx",
          city: "成都",
          time: "1分钟前",
        },
        {
          id: "0004",
          name: "xxxxx",
          city: "成都",
          time: "1分钟前",
        },
        {
          id: "0005",
          name: "xxxxx",
          city: "成都",
          time: "1分钟前",
        },
        {
          id: "0006",
          name: "xxxxx",
          city: "成都",
          time: "1分钟前",
        },
        {
          id: "0007",
          name: "xxxxx",
          city: "成都",
          time: "1分钟前",
        },
        {
          id: "0010",
          name: "xxxxx",
          city: "成都",
          time: "1分钟前",
        },
        {
          id: "0011",
          name: "xxxxx",
          city: "成都",
          time: "1分钟前",
        },
        {
          id: "0012",
          name: "xxxxx",
          city: "成都",
          time: "1分钟前",
        },
      ],
      animate: false,
      listMarginTop: "0",
      timer:0
    };
  }
  Marquee = () => {
    if (
      document.getElementById("container").scrollTop >=
      document.getElementById("content1").scrollHeight
    ) {
      document.getElementById("container").scrollTop = 0;
    } else {
      document.getElementById("container").scrollTop++;
    }
  };
  componentDidMount() {
    document.getElementById("content2").innerHTML = document.getElementById(
      "content1"
    ).innerHTML;
    var intervalTime = 30;
    this.Marquee();
    var timer = setInterval(this.Marquee, intervalTime);
    this.setState({
      timer
    })
  }
  enter=()=> {
    clearInterval(this.state.timer);
  }
  leave=()=> {
    this.setState({
      timer:setInterval(this.Marquee, 40)
    })
  }
  render() {
    return (
      <div>
        <Card
          title="最新职位"
          ref="card"
          extra={
            <a href="#" className="more">
              更多
            </a>
          }
          style={{ width: 850, height: 300, margin: "32px auto" }}
        >
          <div className="container"
          onMouseEnter={this.enter}
          onMouseLeave={this.leave}
          id="container">
            <div className="content1" id="content1">
            <ul
            className="list"
            ref="list"
            style={{
              padding: "0 14px",
            }}
          >
            {this.state.zhiwei.map((item) => {
              return (
                <li key={item.id} className="newZhiwei">
                  <p
                  className=
                    "zhiweiName"
                  
                  >
                    {item.name}
                  </p>
                  <p className="zhiweiCity">{item.city}</p>
                  <p className="zhiweiTimer">{item.time}</p>
                </li>
              );
            })}
          </ul>
            </div>
            <div className="content2" id="content2"></div>
          </div>
        </Card>
      </div>
    );
  }
}

export default newZhiwei;
