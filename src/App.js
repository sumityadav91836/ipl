import './App.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NotFound from './components/NotFound'
import TeamMatches from './components/TeamMatches'
import Home from './components/Home'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/team-matches/:id" component={TeamMatches} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
