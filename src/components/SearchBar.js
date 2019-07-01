import React from 'react';

class SearchBar extends React.Component{
    state = {
        term: ''
    };

    onSubmitChange = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.onSubmitChange} className="ui form">
                <div className="field">
                <label>Image Search</label>
                    <input 
                        placeholder="Enter text to search images related to it!"
                        type="text" 
                        onChange={(e) => this.setState({ term: e.target.value})} 
                        value={this.state.term}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;