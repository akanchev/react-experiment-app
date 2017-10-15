import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

class AddProject extends Component {
  constructor(){
    super();
    this.state = {
      newProject:{}
    }
  }

  static defaultProps = {
      categories: ['Web Design', 'Web Development', 'Mobile Development']
  }

  handlesSubmit(e){
    if (this.refs.title.value === '') {
      alert('Put Title');
    } else {
      this.setState({newProject:{
        id:uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, function() {
        this.props.addproject(this.state.newProject);
      })
    }

    e.preventDefault();
  }

  render() {
    let categoryOption = this.props.categories.map(category => {
        return <option key={category} value="category}">{category}</option>
    });

    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handlesSubmit.bind(this)}>
          <div>
            <label>Title</label>
            <input type="text" ref="title" />
          </div>
          <div>
              <label>Category</label> <br />
              <select ref="category">
                {categoryOption}
              </select>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

AddProject.propTypes = {
    categories:  PropTypes.array,
    addproject: PropTypes.func
}


export default AddProject;
