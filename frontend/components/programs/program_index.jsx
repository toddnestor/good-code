import React from 'react';
import Paper from 'material-ui/Paper';
import { index } from '../styles/indexStyle.js';
import ProgramIndexItem from './program_index_item.jsx';
import LoadingContainer from '../util/loading_container.js';

class ProgramIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchPrograms();
  }

  componentWillReceiveProps(newProps) {
    if (this.props.path != newProps.path) {
      newProps.fetchPrograms();
    }
  }

  render() {
    let programs = merge({}, this.props.programs);
    if (programs.errors) {
      delete programs.errors;
    }

    return(
      <div>
        <p>
          { Object.keys(programs).length === 0 ? 'No programs to display...' : '' }
        </p>

        <Paper
          style={index}>
          <LoadingContainer />

          <ul>
            {Object.values(programs).reverse().map(program => 
                (<ProgramIndexItem
                  key={program.id}
                  handleExpand={this.props.expand(program.id)}
                  expanded={program.expanded}
                  program={program} />)
            )}
          </ul>
        </Paper>
      </div>
    );
  }
};

export default ProgramIndex;

