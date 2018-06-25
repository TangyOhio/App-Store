import React, { Component } from 'react'

class AppForm extends Component {
  defaultValues = { name: '', description: '', category: '', price: 0.0, version: '', author: '', logo: '' }
  state = { ...this.defaultValues }

  handleSubmit = (e) => {
    e.preventDefault()
    let app = { ...this.state }
    this.props.addApp(app)
    this.setState({ ...this.defaultValues })
  }

  handleChange = (e) => {
    let { target: { id, value } } = e
    this.setState({ [id]: value })
  }

  render() {
    let { name, description, category, price, version, author, logo } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          id='name'
          placeholder='Name of App'
          value={name}
          onChange={this.handleChange}
          required
        />
        <input
          id='description'
          placeholder='Description'
          value={description}
          onChange={this.handleChange}
        />
        <input
          id='category'
          placeholder='Category'
          value={category}
          onChange={this.handleChange}
        />
        <input
          id='price'
          placeholder='Price'
          type='number'
          value={price}
          onChange={this.handleChange}
        />
        <input
          id='version'
          placeholder='Version'
          value={version}
          onChange={this.handleChange}
        />
        <input
          id='author'
          placeholder='Author'
          value={author}
          onChange={this.handleChange}
        />
        <input
          id='logo'
          placeholder='Logo url'
          value={logo}
          onChange={this.handleChange}
        />
        
        <button>Submit</button>
      </form>
    )
  }
}

export default AppForm