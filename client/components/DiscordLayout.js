import React, {Component} from 'react'
import axios from 'axios'

export default class DiscordLayout extends Component {

  constructor(props) {
    super(props)
    this.state = {
      communities: []
    }
  }

  async componentDidMount() {
    console.log(this.props.currentAccount)
  }

  render() {
    return (
      <div>
        Hello this is the Discord.
      </div>
    )
  }
}