import React from 'react'


export default class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A photo was uploaded: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <label>
                    Photo title:
                    <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="file"/>
                <input type="submit" value="Submit" />

            </form>

            // <form onSubmit={this.handleSubmit}>
            //     <label>
            //         Photo Title:
            //         <textarea value={this.state.value} onChange={this.handleChange} />
            //     </label>
            //     <input type="file"/>
            // </form>
        );
    }
}
