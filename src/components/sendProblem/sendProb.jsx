import React, { Component } from "react";
import axios from 'axios';

class sendProblems extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
        name:null,
        file: null
    }
    this.onChangefile = this.onChangefile.bind(this)
    this.uploadfile = this.uploadfile.bind(this)
}

onChangefile(event) {
    this.setState({
        name: URL.createObjectURL(event.target.files[0]),
        file: event.target.files[0]
    })
}

uploadfile(){
    const formData =  new FormData();
    formData.append('file', this.state.file);
    let url = "http://127.0.0.1:8888";
    axios.post(url, formData, {
    })
    .then(res => {
        console.log(res.data);
    })

}

render() {
 
    return (
        <>
            <form>
                <tr>
                    <td><label for="fileType">Select file type</label></td>
                    <td>
                        <select id="fileType" name="fileType" onChange={this.onChangefile}>
                            <option value="">Select file type</option>
                            <option value="py">Python</option>
                            <option value="java">Java</option>
                            <option value="c">C</option>
                            <option value="cpp">C++</option>
                        </select>
                    </td>
                </tr>
                <input type="file" name="file" onChange={this.onChangefile} />
                <br />
                <br />
                <button type="button" onClick={this.uploadfile}>Upload Solution</button>
            </form>
        </>
    )
}
}

export default sendProblems;