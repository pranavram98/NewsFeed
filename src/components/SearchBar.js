import React from 'react';
import './Segment.css';
class SearchBar extends React.Component{

    state={term:""};
 
onFormChange=(event)=>{
    this.setState({term:event.target.value});
}
   
onFormSubmit=(event)=>{
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
}
    render(){
return(
    <div>
        <form className="ui fluid form" onSubmit={this.onFormSubmit}>
            <div className="field">
                <input type="text" placeholder="Search here.." id="search" onChange={this.onFormChange}>
                </input>
            </div>
    <div className="ui pointing label">
      Search For News
    </div>
    </form>
</div>
    
        );
    };
};
export default SearchBar;
