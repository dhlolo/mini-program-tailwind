import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.css'

export default class ComponentA extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='pl-8.5'>
        <Text className='font-thin text-[#000000]'>Hello world2!</Text>
      </View>
    )
  }
}
