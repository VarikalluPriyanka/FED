import React, { Component } from 'react';



class Page extends Component {
 constructor(props){
   super(props);
   this.state={color:"black"}
}
    render() {

        return (
            <div>

                <div style={{ background: "#f0f0f0f" }}>
                    <h3 style={{ color: this.state.color }}>Heading</h3>
                    <p style={{ color: '#706c61' }}> This is a text...</p>
                </div>
                
                    <div>
                        <button onClick={()=>this.setState({color:"white"})}> White </button>
                        <button  onClick={()=>this.setState({color:"purple"})}> Purple </button>
                        <button  onClick={()=>this.setState({color:"red"})}> Red </button>
                        <button  onClick={()=>this.setState({color:"green"})}> Green </button>
                    </div>
            </div>
        );
    }
}

export default Page;
