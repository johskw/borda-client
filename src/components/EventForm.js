import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const ChoiceFields = ({num, choices, errors, onChange}) => {
  const fields = [];
  for (let i = 0; i < num; i++) {
    const field = (
      <FormControl key={i} style={{ width: '100%', marginBottom: '10px' }}>
        <InputLabel>
          選択肢{i + 1}
        </InputLabel>
        <Input value={choices[i]}
          onChange={(e) => onChange(i, e.target.value)}
        />
        {errors[`choices.${i}.name`]}
      </FormControl>
    );
    fields.push(field);
  }
  return fields;
};

const EventForm = (props) => (
  <div style={{ maxWidth: '600px', padding: '30px', margin: '0 auto'}}>
    <Card style={{ padding: '10px 30px' }}>
      <CardContent>
        <FormControl style={{ width: '100%', marginBottom: '10px' }}>
          <InputLabel>
            テーマ
          </InputLabel>
          <Input value={props.theme}
            onChange={(e) => props.onChangeTheme(e.target.value)}
          />
          {props.errors.theme}
        </FormControl>
        <FormControl style={{ width: '100%', marginBottom: '30px' }}>
          <InputLabel>
            説明（任意）
          </InputLabel>
          <Input multiline rows="3" value={props.detail}
            onChange={(e) => props.onChangeDetail(e.target.value)}
          />
        </FormControl>
        <Typography variant="subheading" style={{ textAlign: 'center' }}>
          選択肢の数
        </Typography>
        <div style={{ textAlign: 'center' }}>
          <Button variant="fab" mini color="secondary" aria-label="add"
            onClick={() => props.onClickAddBtn()}
          >
            ＋
          </Button>
          <Typography variant="display1" style={{ display: 'inline', margin: '0 20px' }}>
            {props.num}
          </Typography>
          <Button variant="fab" mini color="primary" aria-label="add"
            disabled={props.num === 2}
            onClick={() => props.onClickRemoveBtn()}
          >
            －
          </Button>
        </div>
        <ChoiceFields num={props.num} choices={props.choices} errors={props.errors}
          onChange={props.onChangeChoice}
        />
        <FormControl style={{ width: '100%', marginBottom: '10px' }}>
          <InputLabel>
            パスワード（6文字以上）
          </InputLabel>
          <Input type="password" value={props.password}
            onChange={(e) => props.onChangePassword(e.target.value)}
          />
          {props.errors.password}
        </FormControl>
        <div style={{ textAlign: 'center', paddingTop: '20px' }}>
          <Button variant="raised" color="primary" size="large"
            onClick={() => props.onClickSubmitBtn(props)}
          >
            作成
          </Button>
        </div>
      </CardContent>
    </Card>
  </div>
);

export default EventForm;
