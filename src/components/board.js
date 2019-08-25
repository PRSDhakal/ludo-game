import React from 'react'
import RedBox from './images/red.png'
import YellowBox from './images/yellow.png'
import BlueBox from './images/blue.png'
import GreenBox from './images/green.png'
import GreyBox from './images/grey.png'
import RedOnGrey from './images/redOnGrey.png'
import GreenOnGrey from './images/greenOnGrey.png'
import YellowOnGrey from './images/yellowOnGrey.png'
import BlueOnGrey from './images/blueOnGrey.png'
import RedStar from './images/redStar.png'
import BlueStar from './images/blueStar.png'
import YellowStar from './images/yellowStar.png'
import GreyStar from './images/greyStar.png'
import GreenStar from './images/greenStar.png'


export class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            turn: 0,
            pieceAtHome: true,

        }
    }

    render() {
        return (
            <div>
                <h1>Board</h1>
                <div style={{lineHeight: 0, marginLeft: 150}}>

                    {/* Yellow Home */}
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    {/* Yellow Home Ends*/}

                    <img src={GreyBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={GreyBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={GreyBox} width="35" height="35" alt="Box"  />{/* Playable*/}

                    {/* Blue Home */}
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    {/* Blue Home  Ends*/}

                    <br></br>

                    {/* Yellow Home */}
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowOnGrey} width="35" height="35" alt="Box"  />{/* Yellow Home Tile*/}
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowOnGrey} width="35" height="35" alt="Box"  />{/* Yellow Home Tile*/}
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    {/* Yellow Home Ends*/}

                    <img src={GreyBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={BlueBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={BlueStar} width="35" height="35" alt="Box"  />{/* Playable*/}{/* BlueStar*/}

                    {/* Blue Home */}
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueOnGrey} width="35" height="35" alt="Box"  />{/* Blue Home Tile*/}
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueOnGrey} width="35" height="35" alt="Box"  />{/* Blue Home Tile*/}
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    {/* Blue Home Ends*/}

                    <br></br>

                    {/* Yellow Home */}
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    {/* Yellow Home Ends*/}

                    <img src={GreyStar} width="35" height="35" alt="Box"  />{/* Playable*/}{/* GreyStar*/}
                    <img src={BlueBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={GreyBox} width="35" height="35" alt="Box"  />{/* Playable*/}

                    {/* Blue Home */}
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    {/* Blue Home Ends*/}

                    <br></br>

                    {/* Yellow Home */}
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    {/* Yellow Home Ends*/}

                    <img src={GreyBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={BlueBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={GreyBox} width="35" height="35" alt="Box"  />{/* Playable*/}

                    {/* Blue Home */}
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    {/* Blue Home Ends */}
                    <br></br>

                    {/* Yellow Home */}
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowOnGrey} width="35" height="35" alt="Box"  />{/* Yellow Home Tile*/}
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowOnGrey} width="35" height="35" alt="Box"  />{/* Yellow Home Tile*/}
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    {/* Yellow Home Ends*/}

                    <img src={GreyBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={BlueBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={GreyBox} width="35" height="35" alt="Box"  />{/* Playable*/}

                    {/* Blue Home */}
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueOnGrey} width="35" height="35" alt="Box"  />{/* Blue Home Tile*/}
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueOnGrey} width="35" height="35" alt="Box"  />{/* Blue Home Tile*/}
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    {/* Blue Home Ends */}
                    <br></br>

                    {/* Yellow Home */}
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    {/* Yellow Home Ends*/}

                    <img src={GreyBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={BlueBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={GreyBox} width="35" height="35" alt="Box"  />{/* Playable*/}

                    {/* Blue Home */}
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    {/* Blue Home Ends*/}
                    <br></br>
                    
                    <img src={GreyBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={YellowStar} width="35" height="35" alt="Box"  />{/* Playable*/}{/* YellowStar*/}
                    <img src={GreyBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={GreyBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={GreyBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={GreyBox} width="35" height="35" alt="Box"  />{/* Playable*/}

                    {/* Home Box*/}
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    <img src={BlueBox} width="35" height="35" alt="Box"  />
                    {/* Home Box*/}

                    <img src={GreyBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={GreyBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={GreyBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={GreyStar} width="35" height="35" alt="Box"  />{/* Playable*/}{/* GreyStar*/}
                    <img src={GreyBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={GreyBox} width="35" height="35" alt="Box"  />{/* Playable*/}


                    <br></br>

                    <img src={GreyBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={YellowBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={YellowBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={YellowBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={YellowBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={YellowBox} width="35" height="35" alt="Box"  />{/* Playable*/}

                    {/* Home Box*/}
                    <img src={YellowBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    {/* Home Box*/}

                    <img src={RedBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={RedBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={RedBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={RedBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={RedBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={GreyBox} width="35" height="35" alt="Box"  />{/* Playable*/}

                    <br></br>

                    <img src={GreyBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={GreyBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={GreyStar} width="35" height="35" alt="Box"  />{/* Playable*/}{/* GreyStar*/}
                    <img src={GreyBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={GreyBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={GreyBox} width="35" height="35" alt="Box"  />{/* Playable*/}

                    {/* Home Box*/}
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    {/* Home Box*/}

                    <img src={GreyBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={GreyBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={GreyBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={GreyBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={RedStar} width="35" height="35" alt="Box"  />{/* Playable*/}{/* RedStar*/}
                    <img src={GreyBox} width="35" height="35" alt="Box"  />{/* Playable*/}

                    <br></br>

                    {/* Green Home */}
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    {/* Green Home Ends */}

                    <img src={GreyBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={GreenBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={GreyBox} width="35" height="35" alt="Box"  />{/* Playable*/}

                    {/* Red Home */}
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    {/* Red Home Ends*/}

                    <br></br>
                    
                    {/* Green Home */}
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenOnGrey} width="35" height="35" alt="Box"  />{/* Green Home Tile*/}
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenOnGrey} width="35" height="35" alt="Box"  />{/* Green Home Tile*/}
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    {/* Green Home Ends*/}

                    <img src={GreyBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={GreenBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={GreyBox} width="35" height="35" alt="Box"  />{/* Playable*/}

                    {/* Red Home*/}
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedOnGrey} width="35" height="35" alt="Box"  />{/* Red Home Tile*/}
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedOnGrey} width="35" height="35" alt="Box"  />{/* Red Home Tile*/}
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    {/* Red Home Ends*/}

                    <br></br>

                    {/* Green Home */}
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    {/* Green Home Ends*/}

                    <img src={GreyBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={GreenBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={GreyBox} width="35" height="35" alt="Box"  />{/* Playable*/}

                    {/* Red Home*/}
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    {/* Red Home Ends*/}

                    <br></br>

                    {/* Green Home */}
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    {/* Green Home Ends*/}

                    <img src={GreyBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={GreenBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={GreyStar} width="35" height="35" alt="Box"  />{/* Playable*/}{/* GreyStar*/}

                    {/* Red Home*/}
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    {/* Red Home Ends*/}

                    <br></br>

                    {/* Green Home */}
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenOnGrey} width="35" height="35" alt="Box"  />{/* Green Home Tile*/}
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenOnGrey} width="35" height="35" alt="Box"  />{/* Green Home Tile*/}
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    {/* Green Home Ends*/}

                    <img src={GreenStar} width="35" height="35" alt="Box"  />{/* Playable*/}{/* GreenStar*/}
                    <img src={GreenBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={GreyBox} width="35" height="35" alt="Box"  />{/* Playable*/}

                    {/* Red Home*/}
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedOnGrey} width="35" height="35" alt="Box"  />{/* Red Home Tile*/}
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedOnGrey} width="35" height="35" alt="Box"  />{/* Red Home Tile*/}
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    {/* Red Home Ends*/}

                    <br></br>

                    {/* Green Home*/}
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    <img src={GreenBox} width="35" height="35" alt="Box"  />
                    {/* Green Home Ends*/}

                    <img src={GreyBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={GreyBox} width="35" height="35" alt="Box"  />{/* Playable*/}
                    <img src={GreyBox} width="35" height="35" alt="Box"  />{/* Playable*/}

                    {/* Red Home*/}
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    <img src={RedBox} width="35" height="35" alt="Box"  />
                    {/* Red Home Ends*/}

                    <br></br>

                </div>
                <button>Roll Dice</button>
            </div>
        )
    }
}