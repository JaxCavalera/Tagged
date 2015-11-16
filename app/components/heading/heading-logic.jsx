import React from 'react';
import {connect} from 'react-redux';
//  connect() gives the component access to the state tree (a.k.a store)
import HeadingDisplay from './heading-display.jsx';

//  jquery and ip modules for AJAX usage only
import $ from 'jquery';
import ip from 'ip';

const LOCAL_IP = ip.address();


export default class HeadingLogic extends React.Component
{
    render()
    {
        return false;
    }
}
