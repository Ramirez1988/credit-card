import React from 'react'

 class Credit extends React.Component {
     constructor(props){
         super(props);
         this.state={
             codeInput:"",
             nameInput:"",
             dateInput:"",
             
         }
     }
            
     onChangeCode = (event) =>{
        
         this.setState({
             codeInput: event.target.value.replace(/[^0-9]/g,"").replace(/(\d{4})/g,"$1 ").trim()
            
         })
        
        }

     onChangeName = (event) =>{
            this.setState({
                nameInput: event.target.value.replace(/[^a-zA-Z]/g,"")
            })
        }

     onChangeDate = (event) =>{
           
           event.target.value = event.target.value.slice(0,2)>12?"":
           event.target.value.length>=3?event.target.value
           .replace(/[^0-9]/g,"").slice(0,2) +"/"+ event.target.value.replace(/[^0-9]/g,"").slice(2,4)
           :event.target.value.replace(/[^0-9]/g,"")
                this.setState({
                    dateInput: event.target.value
                })

     }
    render() {
        return (
            <div className='data'>
                <div className='card'>
                <div>
                    <h1 style={{textAlign:'right'}}>Company name</h1>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz1CBFe_2QmJEn3e5HfHILlcrB-X44WPrpK1GP4uwCShO_NCV6&s" 
                    width='50' height="50"/>
                    <p>{this.state.codeInput}</p>
                    </div>
                    <div className='dataBase'>
                    <h2>{this.state.nameInput.toUpperCase()}</h2>
                    <h3>{this.state.dateInput}</h3>
                    <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH0Sjd_0ZL9obKkQZmxhNagKvYUzCkTKmMXSE13PEIsd8cRChn&s" 
                    width='120' height='80'/>
                    </div>
                    </div>
                <div style={{margin:'100px 35px'}}>
                    <input className="inputStyle" 
                    onChange={this.onChangeCode} maxLength='19' type='text' 
                    placeholder="Number" 
                    value={this.state.codeInput}></input><br/><br/>
                    <input className="inputStyle" 
                    onChange={this.onChangeName} maxLength='16' type='text' 
                    placeholder="Name"
                    value={this.state.nameInput}></input><br/><br/>
                    <input className="inputStyle" 
                    onChange={this.onChangeDate} maxLength='5' type='text' 
                    placeholder="Expiration date"
                    value={this.state.dateInput}></input>

                </div>
            </div>
        )
    }
}
export default Credit;


