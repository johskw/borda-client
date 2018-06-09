import { connect } from 'react-redux';
import * as actions from '../actions/event';
import Event from '../components/Event';

const mapStateToProps = (state) => ({
  event: state.event.event
});

const mapDispatchToProps = (dispatch) => ({
  onMount(id) {
    dispatch(actions.getEvent(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Event);
