import styled from 'styled-components/native';
import React from 'react';
import { useTheme, useNavigation } from '@react-navigation/native';
import {Svg, Circle, Path} from 'react-native-svg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { HEADER_HEIGHT } from '../constants';

const Wrapper = styled.View`
  padding: 0 20px;
  height: ${HEADER_HEIGHT}px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

const Accent = styled.View`
  width: 60px;
  height: 4px;
  border-radius: 2px;
  position: absolute;
  bottom: 0;
  left: 20px;
`;

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {

  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <Wrapper style={{ color: colors.background }}>
      <Title style={{ color: colors.text }}>{title}</Title>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke={colors.text}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <Circle cx="12" cy="12" r="3"></Circle>
        <Path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"></Path>
      </Svg>
      </TouchableOpacity>
      <Accent style={{ backgroundColor: colors.accent }}/>
    </Wrapper>
  )
}

export default Header;