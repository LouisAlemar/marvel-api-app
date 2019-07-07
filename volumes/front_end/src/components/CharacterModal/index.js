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

							{this.props.character.biography['place-of-birth'].indexOf('-') !== 0 &&
								<div className="character-info">
									<p><strong>Place Of Birth:</strong> {this.props.character.biography['place-of-birth']}</p>
								</div>
							}
							
							{this.props.character.biography['first-appearance'].indexOf('-') !== 0 &&
								<div className="character-info">
									<p><strong>First Appearance:</strong> {this.props.character.biography['first-appearance']}</p>
								</div>
							}

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

						{/* APPEARANCE */}

						<h4 className="info-header">Appearance</h4>
						
						{this.props.character.appearance['gender'].indexOf('-') !== 0 &&
							<div className="character-info">
								<p><strong>Gender:</strong> {this.props.character.appearance['gender']}</p>
							</div>
						}
						
						{this.props.character.appearance['eye-color'].indexOf('-') !== 0 &&
							<div className="character-info">
								<p><strong>Eye Color:</strong> {this.props.character.appearance['eye-color']}</p>
							</div>
						}
						
						{this.props.character.appearance['hair-color'].indexOf('-') !== 0 &&
							<div className="character-info">
								<p><strong>Hair Color:</strong> {this.props.character.appearance['hair-color']}</p>
							</div>
						}

						{this.props.character.appearance['race'].indexOf('-') !== 0 &&
							<div className="character-info">
								<p><strong>Race:</strong> {this.props.character.appearance['race']}</p>
							</div>
						}

						{!this.props.character.appearance['height'].includes('-') &&
							<div className="character-info">
								<span><strong>Height:</strong></span>
								<ul>
									{this.props.character.appearance['height'].map((height, index) => (
										<li key={index}>{height}</li>
									))}
								</ul>
							</div>
						}

						{!this.props.character.appearance['weight'].includes('-') &&
							<div className="character-info">
								<span><strong>Weight:</strong></span>
								<ul>
									{this.props.character.appearance['weight'].map((weight, index) => (
										<li key={index}>{weight}</li>
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