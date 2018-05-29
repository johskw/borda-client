import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import * as actions from '../actions/eventForm';
import eventForm from '../components/EventForm';
import { createEvent } from '../actions/event';

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
    dispatch(createEvent({
      theme: props.theme,
      detail: props.detail,
      choices: props.choices,
      password: props.password
    }));
    dispatch(actions.clearForm());
    dispatch(push('/event'));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(eventForm);
