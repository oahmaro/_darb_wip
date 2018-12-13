import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'

export default class PrivacyPolicy extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={{ width: '85%' }}>
            <Text style={[styles.text, { marginTop: 50 }]}>بنود الاتفاقيه</Text>
            <Text style={[styles.text, { marginTop: 20 }]}>
              إن الدخول إلى موقع الحكومة الالكترونية (والذي يشار إليه فيما بعد
              بـ "الموقع") محكوم بهذه البنود والشروط (والتي يشار إليها فيما بعد
              بـ"البنود"). في حال عدم قبولك لأي من هذه البنود فيتوجب عليك
              الانسحاب فوراً من الموقع وإلا تعتبر قد قبلت بكافة بنود الاتفاقية
              وشروطها والتي ستحكم علاقتك معنا.
            </Text>
            <Text style={[styles.text, { marginTop: 20 }]}>
              ملاجظة: إن كلمة (نحن) أو أي مدلول على صيغة المتحدث الجمع (نا) تعود
              على حكومة المملكة الأردنية الهاشمية.
            </Text>
            <Text style={[styles.text, { marginTop: 20 }]}>نظام الخصوصية</Text>
            <Text style={styles.text}>
              إضغط على سياسة الخصوصية للاطلاع على نظام الخصوصية الخاص بهذا
              الموقع.
            </Text>
            <Text style={[styles.text, { marginTop: 20 }]}>حق دخول الموقع</Text>
            <Text style={[styles.text, { marginTop: 20 }]}>
              يكون لنا الحق المطلق بمنع أو تقييد دخول أي شخص إلى موقعنا في أي
              وقت، أو منع الدخول لموقعنا عن طريق أي موقع آخر على شبكة الإنترنت
              عبر نقاط الربط الفعالة ودون ذكر الأسباب وراء ذلك.
            </Text>
            <Text style={[styles.text, { marginTop: 20 }]}>
              تقييد استعمال المواد
            </Text>
            <Text style={[styles.text, { marginTop: 20 }]}>
              لا يجوز إعادة إنتاج، إعادة نشر، تحميل، نشر أو تناقل محتويات هذا
              الموقع دون الحصول على الموافقة الخطية المسبقة من الحكومة إلا إذا
              ورد النص على خلاف ذلك.
            </Text>
            <Text style={[styles.text, { marginTop: 20 }]}>
              5. ضمان الخصوصية
            </Text>
            <Text style={[styles.text, { marginTop: 20 }]}>
              إن معظم النشاطات التي تتم على موقعنا تتضمن عرض المحتويات التي تكون
              متاحة لكافة زوار الموقع، لذا فلا حاجة لعنصر الخصوصية هنا. بينما
              قمنا باستعمال تكنولوجيا خاصة تهدف إلى حماية الاتصالات التي تتم عبر
              موقعنا.
            </Text>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'NotoKufiArabic_Regular',
    color: '#78849E',
    fontSize: 12
  }
})
