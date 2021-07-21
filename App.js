// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			board: ['', '', '', '', '', '', '', '', ''],
			turn: 'X',
			message: 'X goes',
			done: false
		}
	}
	
	addMove = (x) => {
		
		if (this.state.done === true) {
			return;
		}
		const currentMessage = (this.state.message === 'X goes' ? 'O goes' : 'X goes');
		this.setState({message: currentMessage});
		const currentArray = [...this.state.board];
		if (currentArray[x] !== '') {
			return;
		}
		currentArray[x] = this.state.turn;
		this.setState({board: currentArray}, () => 
			this.checkingAll(),
		);
		
		
	}
	
	checkWinner = (a, b, c) => {
		const currentArray = [...this.state.board];
		if (
			(currentArray[a-1] === "X"
			&&
			currentArray[b-1] === "X"
			&&
			currentArray[c-1] === "X")
			||
			(currentArray[a-1] === "O"
			&&
			currentArray[b-1] === "O"
			&&
			currentArray[c-1] === "O"
			)
		) {
			this.setState({message: this.state.turn + ' wins'});
			this.setState({done: true});
			return;
		}
	}
	
	checkingAll = () => {
		this.checkWinner(1, 2, 3);
		this.checkWinner(4, 5, 6);
		this.checkWinner(7, 8, 9);
		this.checkWinner(1, 4, 7);
		this.checkWinner(2, 5, 8);
		this.checkWinner(3, 6, 9);
		this.checkWinner(1, 5, 9);
		this.checkWinner(3, 5, 7);
		const currentTurn = (this.state.turn === 'X' ? 'O' : 'X');
		this.setState({turn: currentTurn});
		
	}
	
	render() {
		return (
			<>
				<h1>Tic-Tac-Toe</h1>
				<h2>{this.state.message}</h2>
				<div className="board">
				{this.state.board.map((item, id) => (
					<div className="boxes" onClick={() => this.addMove(id)} key={id}>{this.state.board[id]}</div>
				))}
				</div>
			</>
		)
	}
}

export default App;
