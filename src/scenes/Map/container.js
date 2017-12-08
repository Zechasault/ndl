import { connect } from 'react-redux'
import {} from 'ducks/accidents'

const mapStateToProps = (state) => {
  return {
    loading: state.accidents.loading,
    accidents: state.accidents.items,
  }
}

export default connect(
  mapStateToProps,
)