import React, { Component } from 'react';

class ProjectItem extends Component {

    deleteProject(id){
        // console.log("test")
        this.props.onDelete(id);
    }

  render() {
    return (
        <div className="Projects">
            <ul>
                <li className="Projects">
                    <strong>{this.props.project.title}</strong>: - {this.props.project.category} 
                    <a href='#' onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>
                </li>
            </ul>
        </div>
    );
  }
}

export default ProjectItem;
