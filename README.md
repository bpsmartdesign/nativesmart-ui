
# NativeSmart-UI

**NativeSmart-UI** is a React Native UI library that provides pre-built, customizable, and reusable components to help you build beautiful, consistent, and accessible mobile applications efficiently.

## Features

- 🛠 **Pre-built Components**: A set of high-quality components like buttons, inputs, modals, etc.
- 🎨 **Customizable**: Easily override styles and create custom themes.
- 📱 **Responsive**: Optimized for both Android and iOS.
- ⚡ **Performance**: Designed with performance and scalability in mind.
- 🚀 **Easy to use**: Simple APIs for rapid development.

## Installation

To use **NativeSmart-UI** in your React Native project, simply install it using **npm** or **yarn**:

```bash
npm install @bpsmartdesign/nativesmart-ui
```

or

```bash
yarn add @bpsmartdesign/nativesmart-ui
```

Make sure you have the necessary peer dependencies installed, such as React Native and React:

```bash
npm install react-native react
```

## Usage

Here’s a quick example of how you can use the **NativeSmart-UI** components in your app:

```jsx
import React from 'react';
import { View } from 'react-native';
import { Button, Input } from '@bpsmartdesign/nativesmart-ui';

const MyApp = () => {
  return (
    <View style={{ padding: 20 }}>
      <Input placeholder="Enter your name" />
      <Button title="Submit" onPress={() => alert('Submitted!')} />
    </View>
  );
};

export default MyApp;
```

### Available Components

| Component  | Description                  |
|------------|------------------------------|
| **Button** | Customizable button component |
| **Input**  | Text input component          |
| **Modal**  | Pre-styled modal component    |
| **Card**   | Card component                |
| **...**    | More components coming soon   |

## Theming and Customization

You can easily customize the components or create your own theme. Here's an example:

```jsx
import React from 'react';
import { ThemeProvider } from '@bpsmartdesign/nativesmart-ui';
import { Button } from '@bpsmartdesign/nativesmart-ui';

const customTheme = {
  colors: {
    primary: '#ff6347',
    secondary: '#4caf50',
  },
  button: {
    borderRadius: 10,
  },
};

const MyApp = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Button title="Custom Button" />
    </ThemeProvider>
  );
};

export default MyApp;
```

## Contributing

We welcome contributions! Feel free to submit issues, feature requests, and pull requests. Check out our contribution guidelines for more information.

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.