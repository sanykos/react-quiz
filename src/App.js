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
            <Route path='/auth' component={Auth}/>
            <Route path='/quiz-creator' component={QuizCreator}/>
            <Route path='/quiz/:id' component={Quiz}/>
            <Route path='/' component={QuizList}/>
          </Switch>
        </Layout>
      )
    } 
}

export default App;
