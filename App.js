import React from 'react';
import { View, AppRegistry } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Badge } from 'native-base';

import { StackNavigator } from 'react-navigation';
import TabNavigator from 'react-navigation/src/navigators/TabNavigator';
import Tab1 from './Tab1';
import Tab2 from "./Tab2";

class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header backgroundColor='#336699'>
          <Left />
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Button block danger onPress={() => this.props.navigation.navigate('Nested')}>
            <Text>Test</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header backgroundColor='#336699'>
          <Left />
          <Body>
            <Title>Detail</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Button block info onPress={() => this.props.navigation.navigate('Nested')}>
            <Text>Test</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

class MyTabBar extends React.Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button onPress={() => this.props.navigation.navigate('Home')}>
            <Icon name='home' />
            <Text>Home</Text>
          </Button>
        </FooterTab>
        <FooterTab>
          <Button badge active onPress={() => this.props.navigation.navigate('Details')}>
            <Badge><Text>23</Text></Badge>
            <Icon active name='settings' />
            <Text>Detail</Text>
          </Button>
        </FooterTab>
      </Footer>
    )
  }
}

const MyStackNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
      tabBarIcon: ({ tintColor }) => (
        <Icon name='home' style={{ color: tintColor }} />
      )
    }
  },
  Nested: {
    screen: Tab1,
    navigationOptions: {
      header: null,
      tabBarIcon: ({ tintColor }) => (
        <Icon name='home' style={{ color: tintColor }} />
      )
    },
  }
}, {
    tabBarOptions: {
      labelStyle: {
        fontSize: 12,
      },
      showIcon: true
    }
  })

const MyStackNavigator2 = StackNavigator({
  Tab2_1: {
    screen: DetailsScreen,
    navigationOptions: {
      header: null,
      tabBarIcon: ({ tintColor }) => (
        <Icon name='home' style={{ color: tintColor }} />
      )
    }
  },
  Nested: {
    screen: Tab2,
    navigationOptions: {
      header: null,
      tabBarIcon: ({ tintColor }) => (
        <Icon name='home' style={{ color: tintColor }} />
      )
    },
  }
}, {
    tabBarOptions: {
      labelStyle: {
        fontSize: 12,
      },
      showIcon: true
    }
  })

const RootNavigator = TabNavigator({
  Home: {
    screen: MyStackNavigator
  },
  Details: {
    screen: MyStackNavigator2,
    navigationOptions: {
      header: null,
      tabBarIcon: ({ tintColor }) => (
        <Icon name='settings' style={{ color: tintColor }} />
      )
    }
  }
}, {
    tabBarOptions: {
      labelStyle: {
        fontSize: 12,
      },
      showIcon: true
    }
  }
)

AppRegistry.registerComponent('AppkastenMobile', () => RootNavigator)

export default RootNavigator;