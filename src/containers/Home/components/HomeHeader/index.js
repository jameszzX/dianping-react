import React, { Component } from 'react'
import './style.css'

class HomeHeader extends Component {
  render() {
    return (
      <div className="homeHeader">
        <header className="homeHeader__wrapper">
          <a href="https://superjames.top" className="homeHeader__city">广州</a>
          <a href="https://superjames.top" className="homeHeader__search">输入商户名、地点</a>
          <a href="https://superjames.top" className="homeHeader__self">
            <div className="homeHeader__portrait"></div>
          </a>
        </header>
      </div>
    )
  }
}

export default HomeHeader
