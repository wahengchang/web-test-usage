import { connect } from 'react-redux'
import Heavy from './../components/Heavy'

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

const HeavyContainor = connect(
  mapStateToProps,
  mapDispatchToProps
)(Heavy)

HeavyContainor.initState = (store, req, res) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      console.log('heavy ......................')
      resolve(1)
    })
  }
}

export default HeavyContainor