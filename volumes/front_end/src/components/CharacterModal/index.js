import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Progress } from 'reactstrap';

class CharacterModal extends Component{
	constructor(props){
		super(props)
	}
	
	render(){
		console.log(this.props.character.powerstats)

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

							{!Object.values(this.props.character.biography).every((val, i, arr) => val === '-' && val === arr[0]) &&
								<h4 className="info-header">Biography</h4>
							}

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

							{!Object.values(this.props.character.appearance).every((val, i, arr) => val === '-' && val === arr[0]) &&
								<h4 className="info-header">Appearance</h4>
							}

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

							{/* WORK */}

							{!Object.values(this.props.character.work).every((val, i, arr) => val === '-' && val === arr[0]) &&
								<h4 className="info-header">Work</h4>
							}

							{this.props.character.work['occupation'].indexOf('-') !== 0 &&
								<div className="character-info">
									<p><strong>Occupation:</strong> {this.props.character.work['occupation']}</p>
								</div>
							}

							{this.props.character.work['base'].indexOf('-') !== 0 &&
								<div className="character-info">
									<p><strong>Base:</strong> {this.props.character.work['base']}</p>
								</div>
							}

							{/* CONNECTIONS */}
							
							{!Object.values(this.props.character.connections).every((val, i, arr) => val === '-' && val === arr[0]) &&
								<h4 className="info-header">Connections</h4>
							}

							{this.props.character.connections['group-affiliation'].indexOf('-') !== 0 &&
								<div className="character-info">
									<p><strong>Group Affiliation:</strong> {this.props.character.connections['group-affiliation']}</p>
								</div>
							}

							{this.props.character.connections['relatives'].indexOf('-') !== 0 &&
								<div className="character-info">
									<p><strong>Relatives:</strong> {this.props.character.connections['relatives']}</p>
								</div>
							}

							{/* POWERSTATS */}

							{!Object.values(this.props.character.powerstats).every((val, i, arr) => val === '-' && val === arr[0]) &&
								<h4 className="info-header">Power Stats</h4>
							}
							
							<div className="power-stats-container">
								{Object.keys(this.props.character.powerstats).map((power, index) =>
									<div className="power-stat" key={index}>
										<div className="power-stat-name-container">
											<div className="power-stat-name">{power}</div>
											<div>{this.props.character.powerstats[power]} of 100</div>
										</div>
										<Progress value={this.props.character.powerstats[power]} max="100" />
									</div>
								)}
							</div>

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