import { Component } from 'react'
import React from 'react';
import Navbar from '../Components/Navbar.jsx'
import './Home.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FastForwardIcon from '@mui/icons-material/FastForward';

class Home extends Component {
    constructor() {
        super()

        this.onClickForward = this.onClickForward.bind(this)
        this.onClickBack = this.onClickBack.bind(this)

        const img0 = require('../asserts/images/bg_body.jpg');
        const img1 = require('../asserts/images/mint.jpg');
        const img2 = require('../asserts/images/bg_body.jpg');
        const img3 = require('../asserts/images/logo.jpg');
        const img4 = require('../asserts/images/bg_body.jpg');
        const img5 = require('../asserts/images/logo.jpg');

        this.state = {
            index: 0,
            imgList: [img0, img1, img2, img3, img4, img5]
        }
    }

    onClickForward() {
        if (this.state.index + 1 === this.state.imgList.length) {
            this.setState({
                index: 0
            })
        }
        else {
            this.setState({
                index: this.state.index + 1
            })
        }
    }

    onClickBack() {
        if (this.state.index - 1 === -1) {
            this.setState({
                index: this.state.imgList.length - 1
            })
        }
        else {
            this.setState({
                index: this.state.index - 1
            })
        }
    }

    render() {
        return (
            <>
                <Navbar />
                <div>
                    <hr></hr>
                    <div>
                        <button style={{ padding: "5px 10px", borderRadius: "50%", margin: "5px" }} onClick={this.onClickBack}> <ArrowBackIcon /> </button>
                        <img style={{ height: "300px", width: "80%", borderRadius: "5%" }} src={this.state.imgList[this.state.index]} alt="" />
                        <button style={{ padding: "5px 10px", borderRadius: "50%", margin: "5px" }} onClick={this.onClickForward}> <FastForwardIcon /> </button>
                    </div>
                    <hr></hr>
                </div>

                <div>
                    <hr></hr>a
                    <img id="img" src={"https://media.baamboozle.com/uploads/images/197596/1632655896_169363_gif-url.gif"} alt="gif" />
                    <hr></hr>
                </div>
                <div>
                    <hr></hr>c<hr></hr>
                </div>
            </>
        )
    }
}

export default Home;