import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const ChoiceFields = ({num, choices, onChange}) => {
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
      </FormControl>
    );
    fields.push(field);
  }
  return fields
};

export default class EventForm extends Component {
  render() {
    return (
      <div style={{ maxWidth: '600px', padding: '30px', margin: '0 auto'}}>
        <Card style={{ padding: '10px 30px' }}>
          <CardContent>
            <FormControl style={{ width: '100%', marginBottom: '10px' }}>
              <InputLabel>
                テーマ
              </InputLabel>
              <Input value={this.props.theme}
                onChange={(e) => this.props.onChangeTheme(e.target.value)}
              />
            </FormControl>
            <FormControl style={{ width: '100%', marginBottom: '30px' }}>
              <InputLabel>
                説明（任意）
              </InputLabel>
              <Input multiline rows="3" value={this.props.detail}
                onChange={(e) => this.props.onChangeDetail(e.target.value)}
              />
            </FormControl>
            <Typography variant="subheading" style={{ textAlign: 'center' }}>
              選択肢の数
            </Typography>
            <div style={{ textAlign: 'center' }}>
              <Button variant="fab" mini color="secondary" aria-label="add"
                onClick={() => this.props.onClickAddBtn()}
              >
                ＋
              </Button>
              <Typography variant="display1" style={{ display: 'inline', margin: '0 20px' }}>
                {this.props.num}
              </Typography>
              <Button variant="fab" mini color="primary" aria-label="add"
                disabled={this.props.num === 2}
                onClick={() => this.props.onClickRemoveBtn()}
              >
                －
              </Button>
            </div>
            <ChoiceFields num={this.props.num} choices={this.props.choices}
              onChange={this.props.onChangeChoice}
            />
            <FormControl style={{ width: '100%', marginBottom: '10px' }}>
              <InputLabel>
                パスワード（6文字以上）
              </InputLabel>
              <Input type="password" value={this.props.password}
                onChange={(e) => this.props.onChangePassword(e.target.value)}
              />
            </FormControl>
            <div style={{ textAlign: 'center', paddingTop: '20px' }}>
              <Button variant="raised" color="primary" size="large">
                作成
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}
