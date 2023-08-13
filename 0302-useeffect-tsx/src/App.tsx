import React from "react";

function App() {
  function useEffectCallback() {
    console.log("montou");
    return () => {
      console.log("desmontou");
    };
  }

  React.useEffect(useEffectCallback, []);

  return <div>Effect</div>;
}

export default App;
