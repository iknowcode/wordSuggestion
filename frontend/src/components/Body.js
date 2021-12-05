import React, { Component } from 'react'
import ResultBox from './ResultBox.js'

class Body extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
             Result: [],
             textvalue: String(),
             textlength: 1,
             showResult: false,
             result: String()
        }
    }
    
    componentDidMount( ){
        
        fetch("http://127.0.0.1:5000/")
        .then((response) => response.json())
        .then(res => {
            this.setState({result: res.message});
            console.log(res);
            // return true;
        }).catch((error)=>{
            console.log(error);
        });
      
    }

    sendData(updatedtext){

        fetch("http://127.0.0.1:5000/word",{
            method: "POST",
            cache: "no-cache",
            headers:
                {
                    "content-type":"application/json",
                    'Access-Control-Allow-Origin' : '*',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
                },
            body: JSON.stringify( updatedtext)
            
        })
        .then((res)=>res.json())
        .then( res => {
            this.setState(
                {
                    Result : Object.values(res.val)
                }
            )
            console.log( Object.values(res.val) );
        })
        .catch((error)=>{
            console.log("Some error" + error);
        })
        

    }

    texthandle = (event) => {      

        // console.log("Sending data to Flask : " + event.target.value);

        this.sendData(''+event.target.value);
        // console.log(event.target.value.length);

        if( event.target.value.length > 0 ){
            //Show the resultbox
            this.setState({showResult:true});
        }else{
            //Hide the resultbox
            this.setState({showResult:false});
        }


    }

    toggleResult = (event) =>{
        
        }

    render(){
        return (

           
            <div className = "mb-auto h-10 text-center">

                <div className = "m-10 border-2 border-gray-100 rounded-lg h-80">

                    <form>
                    <input className = "w-90 z-100 m-4 p-2 border-2 border-gray-300 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 rounded-md" type="text" placeholder="Type a word here .." onChange = {this.texthandle}/>

                    </form>
                    {/* {ResultBox.textvalue = this.state.textvalue} */}

                    {this.state.showResult === true ? <ResultBox Result = {this.state.Result}/> : <br/>}

                </div>

            </div>
                    
            
        )
    }
}


export default Body;