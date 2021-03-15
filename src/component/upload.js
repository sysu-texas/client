import React, { Component } from "react";
import styled from "styled-components";
import { Input, Button} from 'antd';
import Firebase from "../util/firebase";

const { TextArea } = Input;

class Upload extends Component{
    state = {
        text:''
    }
    changeText = (e) => {
        this.setState({
            text:e.target.value
        })
    }
    uploadData = () => {
        if(this.state.text !== ''){
            const newTrans = JSON.parse(this.state.text)
            Firebase.firestore()
      .collection("transaction")
      .add(newTrans)
      .then((res) => {
        console.log(res);
        this.setState({
            text:''
        })
      })
      .catch((error) => console.log(error, "error"));
        }
    }
    render(){
        return (
            <Container>
                <Middle>
                <TextArea autoSize={{ minRows: 2, maxRows: 20 }} onChange={this.changeText} value={this.state.text}/>
                <Button onClick={this.uploadData} style={{marginTop:20}}>upload</Button>
                </Middle>
            </Container>
        )
    }
}

const Middle = styled.div`
width:60%;
margin:0 auto;
`;

const Container = styled.div`
height: 100%;
width: 100%;
position: absolute;
display: flex;
justify-content: center;
align-items: center;
flex-direction:column;
`;

export default Upload;