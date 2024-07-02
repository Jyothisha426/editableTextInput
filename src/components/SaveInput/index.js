import {Component} from 'react'

import './index.css'

class SaveInput extends Component {
  state = {textInput: '', isSaved: false}

  onClickSave = () => {
    this.setState(prevState => ({isSaved: !prevState.isSaved}))
  }

  onChangeInput = event => {
    this.setState({textInput: event.target.value})
  }

  render() {
    const {textInput, isSaved} = this.state
    const btnText = isSaved ? 'Edit' : 'Save'
    return (
      <div className="main-container">
        <div className="main-input-container">
          <h1 className="heading">Editable Text Input</h1>
          <div className="input-container">
            {isSaved ? (
              <p className="para">{textInput}</p>
            ) : (
              <input
                type="text"
                className="input"
                value={textInput}
                onChange={this.onChangeInput}
              />
            )}
            <button className="btn" type="button" onClick={this.onClickSave}>
              {btnText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default SaveInput
