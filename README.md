# neumorphic-ui

> A library of components based on the concept of neumorphism

[![NPM](https://img.shields.io/npm/v/neumorphic-ui.svg)](https://www.npmjs.com/package/neumorphic-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save neumorphic-ui
```

## Usage

### Components

#### - NeuHeading
NeuHeading is a component by which you can put interactive headings in your web pages.

###### Props
This component accepts 3 props:
1. ```text``` - text which you want as a heading
2. ```fontSize``` - font-size of heading (in px)
3. ```fontWeight``` - font-weight of heading

```jsx
import { NeuHeading } from 'neumorphic-ui';

class Example extends Component {
  render () {
    return (
      <NeuHeading text="Neumorphic UI" fontSize="128px" fontWeight="900" />
    )
  }
}
```

#### - NeuButton
NeuButton is a component which is equivalent to Button component in other libraries.

###### Props
This component accepts 1 prop:
1. ```text``` - text which you want as text in button

```jsx
import { NeuButton } from 'neumorphic-ui';

class Example extends Component {
  render () {
    return (
      <NeuButton text="Neumorphic UI" />
    )
  }
}
```

#### - NeuCard
NeuCard is a component which is equivalent to Card component in other libraries.

###### Props
This component accepts 3 props:
1. ```children``` - This represents children of Card. You do not need
to pass this prop explicilty to ```NeuCard``` component. Instead just wrap
child components in ```NeuCard``` opening and closing tags.
2. ```width``` - width of the card (px or percentages)
3. ```height``` - height of the card (px or percentages)

```jsx
import { NeuCard } from 'neumorphic-ui';

class Example extends Component {
  render () {
    return (
      <NeuCard width="350px" height="320px">
      ...Child components
      </NeuCard>
    )
  }
}
```

#### - NeuInput
NeuInput is a component which you can use as an input field.

###### Props
This component accepts 4 props:
1. ```width``` - width of input field (in px or %)
2. ```placeholder``` - placeholder value of input field
3. ```value``` - value of input field
4. ```onChange``` - function which you want to pass to interact with changes in input field

```jsx
import { NeuInput } from 'neumorphic-ui';

class Example extends Component {
   constructor(props){
    super(props);
    this.state = {
      value: ""
    }
  }

  render () {
    return (
      <NeuInput width="96%" onChange={e => this.setState({value:e.target.value})} placeholder="Neumorphic Input" value={this.state.value} />
    )
  }
}
```

#### - NeuProgressBar
NeuProgressBar is a component which you can use as a progress bar.

###### Props
This component accepts 1 prop:
1. ```progress``` - progress of input field (in %)

```jsx
import { NeuProgressBar } from 'neumorphic-ui';

class Example extends Component {
  render () {
    return (
      <NeuProgressBar progress="80%" />
    )
  }
}
```

#### - NeuReaction
NeuReaction is a component which you can use as a reaction button.

###### Props
This component accepts 2 props:
1. ```size``` - size of reaction button (in px)
2. ```children``` - This represents children of NeuReaction component. You do not need
to pass this prop explicilty to ```NeuReaction``` component. Instead just wrap
child components in ```NeuReaction``` opening and closing tags.

```jsx
import { NeuReaction } from 'neumorphic-ui';

class Example extends Component {
  render () {
    return (
      <NeuReaction ><img src={like} width="30px" height="30px"></NeuReaction>
    )
  }
}
```

## Feedback
Suggestions and contributions are welcome. If you can by any means improve the library, just reach out to me at anyone of my social media platforms. Also, you can email me at : saeed_dev@yahoo.com

## Connect with me 
[My personal website](https://saeeddev.netlify.com/)

## License

MIT © [dev-saeed](https://github.com/dev-saeed)
