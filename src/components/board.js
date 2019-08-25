import React from 'react'
import RedBox from './images/red.png'
import YellowBox from './images/yellow.png'
import BlueBox from './images/blue.png'
import GreenBox from './images/green.png'
import GreyBox from './images/grey.png'




export class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <div>
                <h1>Board</h1>
                <div style={{lineHeight: 0, marginLeft: 150}}>
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />

                    <br></br>

                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />

                    <br></br>

                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />

                    <br></br>

                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />

                    <br></br>

                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />

                    <br></br>

                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />

                    <br></br>

                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />


                    <br></br>

                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />

                    <br></br>

                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />

                    <br></br>

                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />

                    <br></br>

                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />

                    <br></br>

                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />

                    <br></br>

                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />

                    <br></br>

                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />

                    <br></br>

                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={GreyBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />

                    <br></br>

                </div>
            </div>
        )
    }
}