import { connect } from 'react-redux';
import Event from '../components/Event';

const mapStateToProps = (state) => ({
  event: state.event
});

export default connect(mapStateToProps)(Event);
