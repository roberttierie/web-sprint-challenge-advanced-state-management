import React from 'react';
import {connect} from 'react-redux';
import { fetchingSmurf } from '../actions/index';
import Smurf from './Smurf';

export class SmurfDisplay extends React.Component {
    componentDidMount() {
        this.props.fetchingSmurf();
    }

    render() {
        return(<div className="container"> {
                this.props.smurfs.map(smurf => {
                    return <Smurf key={smurf.name} smurf={smurf} />
                })
            }
        </div>)
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {fetchingSmurf})(SmurfDisplay);

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.