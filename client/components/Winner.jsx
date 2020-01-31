import React from 'react'

class Winner extends React.Component {
    constructor() {
        super()
        this.state = {name: 'You have won!',
            nametwo: 'Yes, you are!',
        }
    }
    
    render() {
        setTimeout(() => {
            this.setState({nametwo: 'Congrats!!'})
        }, 5000)

        return (
            <div>
                {this.state.name}
               <br></br>

                <centre>
                {Array.from({ length: 6 }, (item,i) => <img className='spinner' src='/images/snowflake2.png' />)}
                </centre>                
               
               <br></br>
               <br></br>

                {this.state.nametwo}

            </div>
        )
    }

}

export default Winner