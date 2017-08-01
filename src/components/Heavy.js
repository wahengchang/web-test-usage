import React  from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import style from './Heavy.css'


const _MAX = 100
const _MIN = -100
const _MAX_LENGTH = 500;

const _LEFT0 = _MAX_LENGTH / 2
const _TOP0 = _MAX_LENGTH / 2


class Circle extends React.Component {
  render() {
    const MAX_OP = 0.3
    const INIT_OP = 0.05
    const MAX_PAD = 50

    const _left = _LEFT0 + getRandomInt(_MIN, _MAX)
    const _top = _TOP0 + getRandomInt(_MIN, _MAX)
    const _l = _MAX_LENGTH
    const opacity = ((_top / _l) + (_left / _l)) * MAX_OP + INIT_OP
    const padding = opacity * MAX_PAD

    const circleStyle = {
      top: _top + 'px',
      left: _left + 'px',
      padding: padding + 'px',
      backgroundColor: 'rgba(0,0,0,' + opacity + ')'
    };

    return (<div style={circleStyle} className={classNames(style['circle'])}>
    </div>)
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const gernrateCircle = (_number) => {
  const returnData = []
  for (let i = 0; i < _number; i++) {
    returnData.push(<Circle key={i} />)
  }
  return returnData
}


class Container extends React.Component {
  render() {
    return (<div className={classNames(style['heavyContainor'])}>
      {this.props.children}
    </div>)
  }
}
Container.propTypes = {
  children: PropTypes.node
}

class CirclesIterator extends React.Component {
  render() {
    const {number} = this.props

    return (<div>
      {gernrateCircle(number)}
    </div>)
  }
}
CirclesIterator.propTypes = {
  number: PropTypes.number.isRequired
}


class Heavy extends React.Component {
  componentDidMount() {
    // this.props.fetchData()
  }

  render() {
    return <div>
      <h1 className={classNames(style['title'])}> Heavy Container </h1>
      <Container>
        <CirclesIterator number={500}/>
      </Container>
    </div>
  }
}


export default Heavy
