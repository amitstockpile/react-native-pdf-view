'use strict';
import React,{ Component } from 'react';
import PropTypes from 'prop-types';

import { requireNativeComponent, View, ViewPropTypes } from 'react-native';

class PDFView extends React.Component {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
  }

  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  _onChange(event:Event) {
    this.props.onLoadComplete && this.props.onLoadComplete(Number(event.nativeEvent.message));
  }

  render() {
    return <PDFCustomView ref={component => this._root = component} {...this.props} onChange={this._onChange}/>;
  }
}

PDFView.propTypes = {
  ...ViewPropTypes,
  src: PropTypes.string,
  path: PropTypes.string,
  pageNumber: PropTypes.number,
  zoom: PropTypes.number,
  onLoadComplete: PropTypes.func
};

//var PDFCustomView = requireNativeComponent('RNPDFView', null);

var PDFCustomView = requireNativeComponent('RNPDFView', PDFView, {
  nativeOnly: {onChange: true}
});

export default PDFView;
