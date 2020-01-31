import React from 'react'
import { yieldExpression } from '@babel/types'


class Winner extends React.Component {
    constructor() {
        super()
        this.state = {name: 'You are win!',
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
                {Array.from({ length: 10 }, (item,i) => <img className='spinner' src='/images/pngsnow.png' />)}
                                
                <br></br>
                {Array.from({ length: 10 }, (item,i) => <img className='spinner' src='/images/snowflake2.png' />)}
                
                <br></br>
                {Array.from({ length: 10 }, (item,i) => <img className='spinner' src='/images/snowflake1.png' />)}
                <br></br><br></br>

                {this.state.nametwo}
            </div>
        )
    }

}

export default Winner