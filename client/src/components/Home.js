import React from 'react'
import axios from 'axios'
import { connect } from "react-redux"
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { Header } from 'semantic-ui-react'

class Home extends React.Component {
  state = { apps: [] }

  componentDidMount() {
    axios.get('/api/apps')
      .then(res => {
        this.setState({ apps: res.data })
        this.props.dispatch({ type: 'HEADERS', headers: res.headers })
      })
  }

  render() {
    return (
      <div>
        <Header textAlign='center'> App </Header>
        <Card>
          <CardMedia
            src={this.state.apps.logo}
            title="App name"
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              Lizard
            </Typography>
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default connect()(Home)