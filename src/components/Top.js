import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Top = () => (
  <div style={{ paddingTop: 100 }}>
    <Typography variant="display2" align="center">
      ボルダで<br />決めったー
    </Typography>
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <Button variant="raised" color="primary" size="large" component={Link} to="/events/new">
        投票イベントを作成
      </Button>
    </div>
  </div>
);

export default Top;
