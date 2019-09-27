import React from 'react';

class PortfolioCreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: '', description: '', language: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        debugger;
        const inputField = event.target.name;
        this.setState({[inputField]: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.title + ' ' + this.state.description + ' ' + this.state.language);
        event.preventDefault();
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <label>
                Name:
                <input name="title" type="text" value={this.state.title} onChange={this.handleChange} />
            </label>
            <label htmlFor="">
                Description:
                <textarea name="description" value={this.state.description} onChange={this.handleChange} />
            </label>
            <label>
          Pick your favorite Programming Language:
          <select name="language" value={this.state.language} onChange={this.handleChange}>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="rubyonrails">Ruby on Rails</option>
            <option value="c++">C++</option>
          </select>
        </label>
            <input type="submit" value="Submit" />
        </form>
        );
    }
}

export default PortfolioCreateForm;
