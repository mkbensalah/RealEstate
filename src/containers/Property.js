import React, { Component } from 'react'
import PropModal from '../components/PropModal';
import TopHeader from '../components/TopHeader';
import Footer from '../components/Footer';

export default class Property extends Component {
    render() {
        return (
            <div>
                <TopHeader />
                <PropModal></PropModal>
                <Footer></Footer>
            </div>
        )
    }
}
