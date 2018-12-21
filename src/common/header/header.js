import React from 'react'
import './header.scss'
import { connect } from 'react-redux'
import { searchFocus, searchBlurs } from '../../action/headerAction'

const Header = props => {
  return (
    <div className="header">
      <div className="innerBox">
        <a href="/" className="logo">
        </a>
        <div className="left">
          <a href="/" className="home">
            <i className="fa fa-home" /> 首页
          </a>
          <a className="download" href="/">
            <i className="fa fa-download" /> 下载App
          </a>
          <div className="searchbar">
            <input
              placeholder="搜索"
              className={props.inputFocus ? 'focus' : ''}
              onBlur={props.searchBlur}
              onFocus={props.searchFocus}
            />
            <div
              className={
                props.inputFocus ? 'focus searchIcon' : 'searchIcon'
              }
            >
              <i
                className={
                  props.inputFocus ? 'fa fa-search focus' : 'fa fa-search'
                }
              />
            </div>
          </div>
        </div>
        <div className="right">
          <a href="/">Aa</a>
          <a href="/">登录</a>
          <a href="/" className="regist">
            注册
          </a>
          <a href="/" className="write">
            写文章
          </a>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    inputFocus: state.header.inputFocus
  }
}
const mapDispatchToProps = dispatch => {
  return {
    searchBlur() {
      const action = searchBlurs()
      dispatch(action)
    },
    searchFocus() {
      const action = searchFocus()
      dispatch(action)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
