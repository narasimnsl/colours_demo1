import '../components/less/main.less'
import React from 'react';
import Aux from '../hoc/aux';
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Colours from './pages/colours';
import Shapes from './pages/shapes';
import Menu from './pages/menupage';

const main = ({ location }) => (
    <Aux>
         <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 0 }}
          classNames={'fade'}
        >
            <Switch location={location}>
         <Route path="/" exact component={Menu}/>
         <Route path="/shapes" exact component={Shapes}  />
         <Route path="/colours" exact component={Colours} />
         </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Aux>
)

export default withRouter(main);