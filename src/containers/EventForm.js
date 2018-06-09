import { connect } from 'react-redux';
import * as actions from '../actions/eventForm';
import eventForm from '../components/EventForm';

const mapStateToProps = state => ({
  ...state.eventForm
});

const mapDispatchToProps = (dispatch) => ({
  onChangeTheme(text) {
    dispatch(actions.inputTheme(text));
  },
  onChangeDetail(text) {
    dispatch(actions.inputDetail(text));
  },
  onChangeChoice(id, text) {
    dispatch(actions.inputChoice(id, text));
  },
  onChangePassword(text) {
    dispatch(actions.inputPassword(text));
  },
  onClickAddBtn(text) {
    dispatch(actions.addChoice(text));
  },
  onClickRemoveBtn(text) {
    dispatch(actions.removeChoice(text));
  },
  onClickSubmitBtn(props) {
    dispatch(actions.postEvent({
      theme: props.theme,
      detail: props.detail,
      choices: props.choices,
      password: props.password
    }));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(eventForm);
