Usage

    npm install --save @egauci/react-viewport


To use in a component:

    import ReactViewport from '@egauci/react-viewport';

    const MyComponent = () => (
      <div>
        <p>Current Viewport Values:</p>
        <ReactViewport render={viewport => (
          <div>
            Scroll: {viewport.scrollX}, {viewport.scrollY}<br />
            Dimensions: {viewport.clientWidth}, {viewport.clientHeight}
          </div>
        )
        } />
      </div>
    );

ReactViewport has one prop, *render* which should be a function that receives a
*viewport* object and returns a React element. The *viewport* object has several
properties, the useful ones are shown in the example above.
