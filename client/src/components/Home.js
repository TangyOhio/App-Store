import React from 'react'
import axios from 'axios'
import { connect } from "react-redux"
import AppList from './AppList'
import AppForm from './AppForm'
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

  addApp = ( name, description, category, price, version, author, logo ) => {
    let app = {  name, description, category, price, version, author, logo  }
    fetch('/api/apps', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(app)
    }).then(res => res.json())
      .then(app => {
        const { apps } = this.state
        this.setState({ apps: [app, ...apps] })
      })

  }

  showForm = () => (
    <AppForm addApp={this.addApp} />
  )

  updateApp = (id) => {
    this.showForm()
    let apps = this.state.apps.map(a => {
      if (a.id === id)
        return { ...a }
      return a
    })

    this.setState({ apps })
  }

  deleteApp = (id) => {
    const { apps } = this.state
    this.setState({ apps: apps.filter(a => a.id !== id) })
  }

  render() {
    return (
      <div>
        <Header textAlign='center'> App </Header>

        <div className='right'>
          <AppForm addApp={this.addApp} />
        </div>
        
        <div className='left'>
          <AppList 
            apps={this.state.apps} 
            updateApp={this.updateApp}
            deleteApp={this.deleteApp}
          />
        </div>

      </div>
    )
  }
}

export default connect()(Home)