import { shallow } from 'enzyme'
import React from 'react';

import { Playlist } from '../../components/Playlist';

jest.mock('uuid/v4', () => jest.fn(() => 1));

test('renders correctly', () => {
    let playlist = [{
        artist: "Erika McTerry",
        title: "id nulla ultrices",
        album: "tincidunt in",
        duration: 3.25
    }];

    const wrapper = shallow(<Playlist playlist={playlist} />);

    expect(wrapper).toMatchSnapshot();
});

test('renders correctly with empty playlist', () => {
    const wrapper = shallow(<Playlist playlist={[]} />);

    expect(wrapper).toMatchSnapshot();
});
