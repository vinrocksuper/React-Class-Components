(()=>{class e extends React.Component{constructor(e){super(e),this.state={username:e.username}}handleNameChange=e=>{this.setState({username:e.target.value})};render(){return React.createElement("div",null,React.createElement("p",null,"Hello ",this.state.username),React.createElement("label",null,"Change Name: "),React.createElement("input",{type:"text",value:this.state.username,onChange:this.handleNameChange}))}}window.onload=()=>{ReactDOM.render(React.createElement(e,{username:"Vincent"}),document.getElementById("app"))}})();