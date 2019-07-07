import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class CharacterModal extends Component{
	constructor(props){
		super(props)
	}
	
	render(){
		console.log(this.props.character)
		return(
			<div className="character-modal-container">
				<Modal isOpen={this.props.state.modal} toggle={this.props.toggle} className={this.props.className}>
					<ModalHeader toggle={this.props.toggle}>
						{this.props.character.name}
					</ModalHeader>
					<ModalBody>
						<div className="left-column">
							<img src={this.props.character.image.url} alt=""/>
						</div>
						<div className="right-column">
							{/* BIO */}
							
							<h4 className="info-header">Biography</h4>

							<div className="character-info">
								<p><strong>Full Name:</strong> {this.props.character.biography['full-name']}</p>
							</div>

							<div className="character-info">
								<p><strong>Alter Egos:</strong> {this.props.character.biography['alter-egos']}</p>
							</div>

							{!this.props.character.biography['place-of-birth'].includes('-') &&
								<div className="character-info">
									<p><strong>Place Of Birth:</strong> {this.props.character.biography['place-of-birth']}</p>
								</div>
							}

							<div className="character-info">
								<p><strong>First Appearance:</strong> {this.props.character.biography['first-appearance']}</p>
							</div>

							{!this.props.character.biography['aliases'].includes('-') &&
								<div className="character-info">
									<span><strong>Aliases:</strong></span>
									<ul>
										{this.props.character.biography['aliases'].map((alias, index) => (
											<li key={index}>{alias}</li>
										))}
									</ul>
								</div>
							}
							
						</div>
					</ModalBody>
					<ModalFooter>
						<Button color="primary" onClick={this.props.toggle}>Do Something</Button>{' '}
						<Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
					</ModalFooter>
				</Modal>
			</div>
		)
	}
}

export default CharacterModal;