import React, {Component} from 'react';

import './input.css';

const kyivstar = [67, 68, 96, 97, 98]
const vodafone = [50, 66, 95, 99]
const lifecell = [63, 73, 93]
const mob = 91
const peopleNet = 92
const interTelecom = [89, 94]


export default class Input extends Component {
    constructor(props) {
        super(props);
        this.codeRef = React.createRef()
        this.iconRef = React.createRef()
        this.state = {operator: ''}
        this.textInput = null
        this.numberRef = element => {
            this.textInput = element;
        };
    }

    componentDidMount() {
        this.codeRef.current.focus()
    }

    changeCodeHandler = () => {
        let value = this.codeRef.current.value.replace(/\D+/g, '')
        this.codeRef.current.value = value
        switch (value.length) {
            case 2 :
                value = Number(value)
                switch (value) {
                    case kyivstar.find(el => el === value) :
                        this.setState({operator: 'Kyivstar'})
                        break
                    case vodafone.find(el => el === value) :
                        this.setState({operator: 'Vodafone'})
                        break
                    case lifecell.find(el => el === value) :
                        this.setState({operator: 'Lifecell'})
                        break
                    case interTelecom.find(el => el === value) :
                        this.setState({operator: 'intertelecom'})
                        break
                    case mob :
                        this.setState({operator: '3mob'})
                        break
                    case peopleNet :
                        this.setState({operator: 'People.net'})
                        break
                    default:
                        this.setState({operator: 'Unknown'})
                }
                if (this.textInput) {
                    this.textInput.focus()
                }
                break
            default:
                this.setState({operator: ''})
        }
    }
    changeNumber = () => {
        let value = this.textInput.value.replace(/\D+/g, '')
        this.textInput.value = value;
        console.log(this.codeRef.current.value.length );
        if (value.length === 7 && this.codeRef.current.value.length === 2) {
            this.iconRef.current.innerHTML = ' ✔️ '
        }
        else (this.iconRef.current.innerHTML = ' - ')
    }

    render() {
        return <div>
            <span className="operator-name">{this.state.operator}</span>
            <span>+38 0</span>
            <input
                onChange={this.changeCodeHandler}
                ref={this.codeRef}
                type="text"
                className="operator-input"
            />
            <span className="check-icon" ref={this.iconRef}> - </span>
            <input type="text"
                   onChange={this.changeNumber}
                   ref={this.numberRef}
                   className="phone-input"
            />
        </div>;
    }
}