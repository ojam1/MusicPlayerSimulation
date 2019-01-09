import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ProgressBar extends Component {
  componentDidMount() {
    this.setState(() => {
      interval: setInterval(() => this.tick(), 1000)
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      currentPostion: 0,
      interval: 0
    };
  }

  convertToSeconds() {
    const { duration } = this.props.playingSong.playingSong;

    return 10;
  }

  tick() {
    if (this.props.playingSong.isPlaying) {
      this.setState(state => ({
        currentPostion: state.currentPostion + 1
      }));

      if (this.state.currentPostion === this.convertToSeconds()) {
        clearInterval(this.state.interval);
      }
      console.log('this.convertToSeconds: ', this.convertToSeconds());
      console.log('this.state.currentPostion: ', this.state.currentPostion);
      console.log('this.props.playingSong: ', this.props.playingSong);
    }
  }
  render() {
    return (
      <div className='progress'>
        <div
          className='progress-bar progress-bar-striped progress-bar-animated'
          role='progressbar'
          style={{ width: this.state.currentPostion }}
          aria-valuemax={this.convertToSeconds().toString()}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  playingSong: state.currentSong
});

export default connect(
  mapStateToProps,
  null
)(ProgressBar);
