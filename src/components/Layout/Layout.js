import React, {Component} from 'react';
import Aux from '../../hoc/Aux1';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';

class Layout extends Component{

  state = {
    sideDrawerShow:false
  }

  sideDrawerClosed = () =>{
    this.setState({sideDrawerShow:false});
  }

  sideDrawerToggler = () =>{
    this.setState((prev)=>{
      return {sideDrawerShow: !prev.sideDrawerShow};
    });
  }

  render(){
    return(
      <Aux>
        <Toolbar toggle={this.sideDrawerToggler}/>
        <Sidedrawer
            open={this.state.sideDrawerShow}
            closed={this.sideDrawerClosed}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    );
  }
}

export default Layout;
