import React, { Component } from 'react';
import * as H from 'history';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { NavBar, Button } from 'antd-mobile';

type PropsType = RouteComponentProps & {};

@(withRouter as any)
class Index extends Component<PropsType, any> {
  componentDidMount() {
    console.log(this.state);
  }

  render() {
    const { history } = this.props;

    return (
      <div className="index-container">
        <NavBar mode="light">首页</NavBar>
        <div style={{ marginTop: '100px' }}>
          <CustomerButon txt="Go About" jumpUrl="about" history={history} />
          <CustomerButon txt="Go TextRedux" jumpUrl="tredux" history={history} />
          <CustomerButon txt="Go TextMobx" jumpUrl="tmobx" history={history} />
        </div>
      </div>
    );
  }
}

interface CustomerButonProps{
  txt: String;
  jumpUrl: String,
  history: H.History<H.LocationState>
}

class CustomerButon extends Component<CustomerButonProps> {
  state = {
    btns: {
      marginRight: '20px'
    }
  };

  render() {
    const { txt, jumpUrl, history } = this.props;

    return (
      <Button style={this.state.btns} type="ghost" size="small" inline onClick={() => history.push(`/${jumpUrl}`)}>{txt}</Button>  
    );
  }
}

export default Index;