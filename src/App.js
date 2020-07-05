import React, {Component} from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap-grid.min.css'
import Layout from './hoc/Layout/Layout'
import Quiz from './containers/Quiz/Quiz'
import QuizList from './containers/QuizList/QuizList'
import QuizCreator from './containers/QuizCreator/QuizCreator'
import Auth from './containers/Auth/Auth'
import {Route, Switch} from 'react-router-dom'


class App extends Component {
    
    render() {
      return(
        <Layout>
          {/* <Quiz/> */}
          <Switch>
            <Route path='/auth' component={Quiz}/>
            <Route path='/quiz-creator' component={Quiz}/>
            <Route path='/quiz/:id' component={Quiz}/>
            <Route path='/' component={Quiz}/>
          </Switch>
        </Layout>
      )
    } 
}

export default App;
