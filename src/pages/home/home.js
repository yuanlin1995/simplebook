import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getListAction } from './store/homeAction'
class Home extends Component {
  render() {
    return (
      <div>
        {this.props.list.map((el, index) => {
          return <li key={index}>{el}</li>
        })}
      </div>
    )
  }

  componentDidMount() {
    this.props.getList()
  }
}

const mapStateToProps = state => {
  return {
    list: state.home.get('list')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getList() {
      const action = getListAction()
      dispatch(action)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
