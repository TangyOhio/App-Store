import React from 'react'
import axios from 'axios'
import { connect } from "react-redux"
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import AppPage from './AppPage'

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
    
    const styles = {
      image: {
        height: 25,
        width: 25,
      },
      card: {
        maxWidth: 330,
      }
    }
    let { apps } = this.state

    return (
      <div>
        <Header textAlign='center'> App </Header>
        
        {apps.map(app =>
          <Card key={app.id} style={styles.card} >
            <div>
              <CardMedia><img src={apps.logo} style={styles.image} alt="App Logo"/></CardMedia>
              
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  {apps.author}
                </Typography>
                <Typography component="p">
                  He{apps.description}nlo
                </Typography>
                <button onClick={() => <Link to={<AppPage app={app} />} />}>Go to App</button>
              </CardContent>
            </div>
          </Card>
        )}
      </div>
    )
  }
}

export default connect()(Home)