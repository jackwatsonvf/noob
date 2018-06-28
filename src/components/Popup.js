import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
            <section>
                <input className="btn-setup" type="button" value="View setup instructions" onClick={() => this.openModal()} />
                <Modal 
                    visible={this.state.visible}
                    width="700"
                    height="300"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div className="modal">
                        <h1>How to set up {this.props.title}...</h1>
                        <p>{this.props.setuppara1}<a href={this.props.setuplink1} target="_blank">{this.props.setuplink1}</a>{this.props.setuppara2}</p>
                        <br/>
                        <p>Download {this.props.title} <a href={this.props.download} target="_blank" >here</a></p>
                        <br/>
                        <img href={this.props.setupimg1} alt={this.props.setupimg1}/>
                        <p></p>
                    </div>
                </Modal>
            </section>
        );
    }
}

export default Popup