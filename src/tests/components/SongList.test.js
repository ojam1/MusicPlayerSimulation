import { shallow } from 'enzyme';
import React from 'react';

import { SongList } from '../../components/SongList';

test('renders correctly', () => {
  const mockAllSongs = jest.fn();

  let songs = [
    {
      id: 1,
      artist: 'Erika McTerry',
      title: 'id nulla ultrices',
      album: 'tincidunt in',
      duration: 3.25
    },
    {
      id: 2,
      artist: 'Aaren Allender',
      title: 'amet consectetuer adipiscing elit',
      album: 'ultrices posuere cubilia',
      duration: 1.85
    }
  ];

  const wrapper = shallow(<SongList songs={songs} allSongs={mockAllSongs}/>);

  expect(wrapper).toMatchSnapshot();
});