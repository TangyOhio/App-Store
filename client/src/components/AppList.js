import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

const styles = {
  image: {
    height: 25,
    width: 25,
  },
  card: {
    maxWidth: 330,
  }
}

const AppList = ({apps, updateApp, deleteApp}) => (
  <div>
    {
      apps.map(app =>
        <Card key={app.id} style={styles.card} >
          <div>
            <CardMedia><img src={app.logo} style={styles.image} alt="App Logo" /></CardMedia>

            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
              <Link to={`/apps/${app.id}`}>{app.author}</Link>
              </Typography>
              <Typography component="p">
                {app.description}
              </Typography>
              <button onClick={updateApp}>Update</button>
              <button onClick={deleteApp}>Delete</button>
            </CardContent>
          </div>
        </Card>
      )
    }
  </div>
)

export default AppList