import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import commonStyle from '../../../theme/Style';
import SimpleNavBar from '../../../components/Seller/SimpleNavBar';
import Colors from '../../../theme/Colors';
import LabeledSelectBox from '../../../components/Shared/LabeledSelectBox';
import {Switch} from 'react-native-elements';
import Font from '../../../theme/Font';
import Section from '../../../components/Seller/Product/Section';

function Create() {
  const categories = [
    {
      key: 'category-one',
      label: 'Category 1',
      value: 'category-one',
    },
    {
      key: 'category-two',
      label: 'Category 2',
      value: 'category-two',
    },
    {
      key: 'category-three',
      label: 'Category 3',
      value: 'category-three',
    },
    {
      key: 'category-four',
      label: 'Category 4',
      value: 'category-four',
    },
  ];

  const sub_categories = [
    {
      key: 'sub-category-one',
      label: 'SubCategory 1',
      value: 'sub-category-one',
    },
    {
      key: 'sub-category-two',
      label: 'SubCategory 2',
      value: 'sub-category-two',
    },
    {
      key: 'sub-category-three',
      label: 'SubCategory 3',
      value: 'sub-category-three',
    },
    {
      key: 'sub-category-four',
      label: 'SubCategory 4',
      value: 'sub-category-four',
    },
  ];

  const child_sub_categories = [
    {
      key: 'child-sub-category-one',
      label: 'Child SubCategory 1',
      value: 'child-sub-category-one',
    },
    {
      key: 'sub-category-two',
      label: 'Child SubCategory 2',
      value: 'child-sub-category-two',
    },
    {
      key: 'child-sub-category-three',
      label: 'Child SubCategory 3',
      value: 'child-sub-category-three',
    },
    {
      key: 'child-sub-category-four',
      label: 'Child SubCategory 4',
      value: 'child-sub-category-four',
    },
  ];

  const brands = [
    {
      key: 'brand-one',
      label: 'Brand 1',
      value: 'brand-one',
    },
    {
      key: 'brand-two',
      label: 'Brand 2',
      value: 'brand-two',
    },
    {
      key: 'brand-three',
      label: 'Brand 3',
      value: 'brand-three',
    },
    {
      key: 'brand-four',
      label: 'Brand 4',
      value: 'brand-four',
    },
  ];

  const units = [
    {
      key: 'unit-one',
      label: 'PCS',
      value: 'PCS',
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [selectedChildSubCategory, setSelectedChildSubCategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('');
  const [isColorAttribute, setIsColorAttribute] = useState(false);
  return (
    <SafeAreaView style={commonStyle.container}>
      <View style={commonStyle.wrapper}>
        <View style={commonStyle.content}>
          <SimpleNavBar pageTitle={'Add Product'} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={commonStyle.paddingHorizontal(12)}>
              <Section>
                <Text style={styles.title}>General Information</Text>
                <LabeledSelectBox
                  label={'Category'}
                  data={categories}
                  value={selectedCategory}
                  setValue={setSelectedCategory}
                  style={styles.pickerStyle}
                />
              </Section>
              <Section>
                <View style={commonStyle.rowSpaceBetween}>
                  <View style={commonStyle.width('45%')}>
                    <LabeledSelectBox
                      label={'SubCategory'}
                      data={sub_categories}
                      value={selectedSubCategory}
                      setValue={setSelectedSubCategory}
                      style={styles.pickerStyle}
                    />
                  </View>
                  <View style={commonStyle.width('45%')}>
                    <LabeledSelectBox
                      label={'Child SubCategory'}
                      data={child_sub_categories}
                      value={selectedChildSubCategory}
                      setValue={setSelectedChildSubCategory}
                      style={styles.pickerStyle}
                    />
                  </View>
                </View>
              </Section>

              <Section>
                <View style={commonStyle.rowSpaceBetween}>
                  <View style={commonStyle.width('45%')}>
                    <LabeledSelectBox
                      label={'Brand'}
                      data={brands}
                      value={selectedBrand}
                      setValue={setSelectedBrand}
                      style={styles.pickerStyle}
                    />
                  </View>
                  <View style={commonStyle.width('45%')}>
                    <LabeledSelectBox
                      label={'Unit'}
                      data={units}
                      value={selectedUnit}
                      setValue={setSelectedUnit}
                      style={styles.pickerStyle}
                    />
                  </View>
                </View>
              </Section>

              <Section>
                <View>
                  <View
                    style={[
                      commonStyle.rowSpaceBetween,
                      commonStyle.marginVertical(6),
                    ]}>
                    <View>
                      <Text style={styles.attributeTitle}>Color</Text>
                    </View>
                    <View>
                      <Switch
                        onValueChange={value => setIsColorAttribute(value)}
                        value={isColorAttribute}
                        color={Colors.secondary}
                      />
                    </View>
                  </View>
                  <View>
                    <TextInput
                      placeholder={'Search Color'}
                      style={styles.input}
                    />
                  </View>
                </View>
              </Section>

              <Section>
                <View>
                  <View style={styles.attributeBox}>
                    <Text style={styles.attributeBoxText}>Size</Text>
                  </View>
                </View>
              </Section>

              <Section>
                <View>
                  <View style={commonStyle.rowSpaceBetween}>
                    <View style={commonStyle.width('20%')}>
                      <TextInput style={styles.input} />
                    </View>
                    <View style={commonStyle.width('50%')}>
                      <TextInput style={styles.input} />
                    </View>
                    <View style={commonStyle.width('20%')}>
                      <TouchableOpacity style={styles.attributeBox}>
                        <Text style={styles.attributeBoxText}>Add</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Section>

              <Section>
                <View>
                  <Text style={styles.title}>Product Price Stock</Text>
                  <View style={commonStyle.marginVertical(6)}>
                    <Text style={styles.attributeTitle}>Unit Price</Text>
                  </View>
                  <View>
                    <TextInput style={styles.input} />
                  </View>
                </View>
              </Section>
              <Section>
                <View style={commonStyle.center}>
                  <TouchableOpacity style={styles.submitBtn}>
                    <Text style={styles.submitBtnText}>Add Product</Text>
                  </TouchableOpacity>
                </View>
              </Section>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 14,
    color: Colors.black,
  },
  attributeTitle: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 13,
    color: Colors.grayText,
  },
  pickerStyle: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
    borderColor: Colors.border,
    overflow: 'hidden',
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
    borderColor: Colors.border,
    overflow: 'hidden',
  },
  attributeBox: {
    width: 80,
    height: 45,
    backgroundColor: '#2081EA',
    ...commonStyle.center,
    borderRadius: 6,
  },
  attributeBoxText: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 12,
    color: Colors.white,
  },
  submitBtn: {
    width: '100%',
    height: 45,
    backgroundColor: Colors.secondary,
    ...commonStyle.center,
    borderRadius: 6,
  },
  submitBtnText: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 14,
    color: Colors.white,
  },
});

export default Create;
