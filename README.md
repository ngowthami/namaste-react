# Namaste React

# Parcel

- Dev Build
- Local Server
- HMR- Hot Module Replacement
- File Watching Algorithm ==> Written in c++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code Splitting
- Differential Bundling
- Diagnostic
- Error Handling
- HTTPS
- Tree Shaking - remove unused code
- Different dev and prod bundles

//React.createElement ==> ReactElement-JS Object ==> HTMLElement(render)
// JSX - HTML like or XML like syntax
// traspiled before it reaches the JS engine --> Parcel - Babel
// JSX ==> Babel transpiles it to React.createElement ==> ReactElement-JS Object ==> HTMLElement(render)

//React Element

//React Components
// Class Based Components - OLD
// Functional Components - NEW

// component composition
// jsx escape sanitization

//index as a key

## Two Types of Export/Import

## Default Export/Import

export default Component
import Component from ""

## Named Export/Import

export const Component

import {Component} from ""

# React Hooks

(Normal utility js functions)

- useState()
  whenever state variable changes react will rerender the components
  whenever state variables update,react triggers a reconciliation cycle

- useEffect()
