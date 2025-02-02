import React, { Component } from 'react';

class Counter extends Component {
  





renderTags(){
    if (this.state.tags.length ===0 ) return <p>there are no tags</p>
     
    return <ul>
            {this.state.tags.map(tag => <li key={tag } > { tag }</li>)}
            </ul>;
}
    


    render() { 
        console.log(this.props);
        React.createElement('div')
        return ( <div>

            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick = {()=> this.props.onIncrement(this.props.counter)}className="btn btn-secondary btn-sm">Increment</button>
            <button  onClick={() => this.props.onDelete(this.props.counter.id)}  className="btn btn-danger btn-sm m-2">Delete</button>    
            
            </div>
            );

    
   
    }
   getBadgeClasses(){
       let classes = "badge m-2 badge-";
       classes += this.props.counter.value === 0 ? "warning" :"primary";
       return classes;
   }
   
   formatCount()
   {
       const {value: count} = this.props.counter;
       return count === 0 ? "zero" : count;
   }

}
 
export default Counter;