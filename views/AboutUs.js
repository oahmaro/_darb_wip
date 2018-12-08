import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const AboutUs = props => (
  <View style={styles.contianer}>
    <View style={{ flexDirection: 'row-reverse' }}>
      <View style={{ width: 235 }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '400',
            color: '#454F63',
            marginTop: 110
          }}>
          حكومتي بخدمتي
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '100',
            color: '#78849E',
            marginTop: 10,
            lineHeight: 25
          }}>
          تسعى وزارة الاتصالات وتكنولوجيا المعلومات لتوفير الخدمات المقدمة من
          الوزارات والمؤسسات والدوائر الحكومية{' '}
        </Text>
      </View>

      <Image
        style={styles.copywriteLogo}
        source={require('../utils/images/flag.png')}
      />
    </View>

    <View style={{ width: 350 }}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: '100',
          color: '#78849E',
          lineHeight: 25
        }}>
        من خلال تطبيق شامل للهواتف الذكية لتحسين الخدمات الحكومية الالكترونية
        وتيسير الوصول اليها. سيقوم تطبيق "حكومتي بخدمتي" للهواتف الذكية والتابع
        لبرنامج الحكومة الالكترونية بتوفير تجربة مميزة لكل مستخدم، حيث سيتم عرض
        عدد من الخدمات الإلكترونية التي تهم المستخدمين من خلال التطبيق وذلك ضمن
        أفضل معايير ومقاييس السرية والخصوصية.
      </Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7f7fa',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  copywriteLogo: {
    width: 115,
    height: 115,
    marginTop: 110,
    resizeMode: 'contain'
  }
})

export default AboutUs
