import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
    constructor(props){
        super(props);
        this.renderInput = this.renderInput.bind(this);
    }

    render() {
        return (
            <form 
                className="stream-create ui form error" 
                onSubmit={this.props.handleSubmit(this.onSubmit)}
            >
                <Field name="title" component={this.renderInput} label="Title" />
                <Field name="description" component={this.renderInput} label="Enter description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
    
    renderInput({ input, label, meta }) {
        const className = `field ${meta.error && meta.touched ? 'error': ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input { ...input } autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    }

    renderError({ error, touched })  {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    onSubmit(formValues) {
        console.log(formValues);
    }
}

const validate = formValues => {
    const errors = {};
    if (!formValues.title) {
        errors.title = "You must enter a title";
    }
    if (!formValues.description) {
        errors.description = "You must enter a description";
    }
    return errors;
}

export default reduxForm({ form: 'streamCreate', validate })(StreamCreate);