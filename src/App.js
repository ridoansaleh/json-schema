import React from 'react';
import Form from 'react-jsonschema-form';

const step1schema = {
    title: "Step 1",
    type: "object",
    required: ["name"],
    properties: {
        name: {
            type: "string",
            minLength: 3
        },
    }
};
  
const step2schema = {
    title: "Step 2",
    type: "object",
    required: ["age"],
    properties: {
        age: {
            type: "integer"
        }
    }
};
  
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            step: 1,
            formData: {}
        };
    }

    handlePrev = () => {
        if (this.state.step > 1) {
            this.setState((prevState) => ({
                step: prevState.step - 1
            }))
        }
    }
    
    onSubmit = ({formData}) => {
        if (this.state.step === 1) {
        this.setState({
          step: 2,
          formData: {
            ...this.state.formData, 
            ...formData
          }, 
        });
      } else {
        alert("You submitted " + JSON.stringify(formData, null, 2));
      }
    }
    
    render() {
      return (
        <Form 
          schema={this.state.step === 1 ? step1schema : step2schema}
          onSubmit={this.onSubmit}
          formData={this.state.formData}
          noHtml5Validate
        >
            <button type='button' onClick={this.handlePrev}>Kembali</button>
            <button type='submit'>Submit</button>
        </Form>
      );
    }
}

export default App;
