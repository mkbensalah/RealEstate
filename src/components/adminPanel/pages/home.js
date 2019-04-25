import React, { Component } from 'react';
import Aux from '../../hoc/Auxliary'

import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class AdminPanel extends Component {

    // purchaseContinueHandler = () => {
    //     this.props.history.push('/checkout');
    // }


    render() {
        return (
            <Aux>
                {/* empty */}
            </Aux>
        );
    }
}


Dashboard.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, {})(AdminPanel);
