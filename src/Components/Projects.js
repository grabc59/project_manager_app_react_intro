import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import ProjectItem from './ProjectItem';

class App extends Component {

  deleteProject(id){
    this.props.onDelete(id);
  }

  render() {
    let projectItems; 
    if (this.props.projects){
      projectItems = this.props.projects.map(project => {
        return <ProjectItem onDelete={this.deleteProject.bind(this)} project={project} key={project.title} />
      })
    }
      return (
        <div className="Projects">
        <br />
          <h3>my latest projects</h3>  
            {projectItems}
        </div>
      );
  }
}

export default App;
