import * as PropTypes from 'prop-types'
import {
  ScrollView,
} from 'react-native'

import React from 'react'
import {
  CreateButton,
  CreateText,
  Container,
  Input,
  DescriptionInput,
  CategoryPicker,
} from './NewSpending.styles'

export default class NewSpending extends React.Component {
  state = {}

  render() {
    const {
      subcategories,
    } = this.props

    return (
      <Container
        behavior={'padding'}
      >
        <ScrollView>
          <Input
            onChangeText={name => {
              this.setState({name})
            }}
            placeholder={'Name..'}
          />
          <Input
            onChangeText={priceText => {
              this.setState({price: +priceText})
            }}
            placeholder={'Price..'}
          />
          <CategoryPicker
            selectedValue={this.state.selectedCategory?.id}
            onValueChange={(_, selectedIndex) => {
              this.setState({selectedCategory: subcategories[selectedIndex]})
            }}
          >
            {
              subcategories
                .map(
                  category => (
                    <CategoryPicker.Item
                      color={category.category.color}
                      key={category.id}
                      label={`${category.name}`}
                      value={category.id}
                    />
                  ),
                )
            }
          </CategoryPicker>
          <DescriptionInput
            multiline
            onChangeText={description => {
              this.setState({description})
            }}
            placeholder={'Description..'}
          />
          <CreateButton
            onPress={() => {
              if (
                !this.state.price ||
                !this.state.selectedCategory?.id ||
                !this.state.name
              ) {
                alert('Fill required fields!')
                return
              }

              this.props.onAdd({
                name: this.state.name,
                price: this.state.price,
                description: this.state.description,
                amount: 1,
                date: new Date().toISOString(),
                sub_category_fk: this.state.selectedCategory?.id,
                user_fk: this.props.user.id,
              })
            }}
          >
            <CreateText>
              Save
            </CreateText>
          </CreateButton>
        </ScrollView>
      </Container>
    )
  }
}

NewSpending.propTypes = {
  user: PropTypes.object.isRequired,
  subcategories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
  onAdd: PropTypes.func.isRequired,
}
