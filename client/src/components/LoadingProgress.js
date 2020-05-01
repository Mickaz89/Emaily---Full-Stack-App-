import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'

const LoadingProgress = ({className}) => {

    return (
        <p>Loading</p>
    )

};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LoadingProgress)