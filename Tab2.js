import React from 'react';
import { View } from 'react-native';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Badge } from 'native-base';
export default class Tab1 extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack(null)}>
              <Text>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title>TAB2 DETAILS</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>Nicer Tab2</Text>
        </Content>
      </Container>
    );
  }
}