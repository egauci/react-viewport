Usage

    npm install --save @egauci/react-viewport

To use in a component:

    import ReactViewport from '@egauci/react-viewport';

    const MyComponent = () => (
      <div>
        <p>Current Viewport Values:</p>
        <ReactViewport>
          {
            viewport => (
              <div>
                Scroll: {viewport.scrollX}, {viewport.scrollY}<br />
                Dimensions: {viewport.clientWidth}, {viewport.clientHeight}
              </div>
            )
          }
        </ReactViewport>
      </div>
    );

## Props:

_milli_ - optional, defaults to 100. The window resize debounce period in milliseconds
_render_ or _children_ - a function that receives the _viewport_ object and returns a React element.

The _viewport_ object has several properties, the useful ones are shown in the example above.
