import { useState } from "react";
import "./App.css";
import NumberButton from "./Components/NumberButton";
import ClearButton from "./Components/ClearButton";
import OperationButton from "./Components/OperationButton";
import BlankButton from "./Components/BlankButton";

function App() {
  const [display, setDisplay] = useState(0);

  const [cache, setCache] = useState<[number, string] | []>([]);

  const calculate = () => {
    if (cache.length == 0) {
      return;
    } else {
      if (cache[1] === "+") {
        setDisplay(cache[0] + display);
      } else if (cache[1] === "-") {
        setDisplay(cache[0] - display);
      } else if (cache[1] === "*") {
        setDisplay(cache[0] * display);
      } else if (cache[1] === "/") {
        if (display !== 0) {
          setDisplay(cache[0] / display);
        } else {
          setDisplay(0);
        }
      } else if (cache[1] === "exp") {
        setDisplay(cache[0] ** display);
      } else if (cache[1] === "sqrt") {
        setDisplay(cache[0] ** 0.5);
      }
      setCache([]);
    }
  };

  return (
    <>
      <div className="App">
        <div className="display">{display}</div>
        <div>
          {cache}
          <div className="calculator-grid">
            <OperationButton
              operation="ln"
              onClick={() => {
                setCache([display, "ln"]);
                setDisplay(Math.log(display));
              }}
            />
            <OperationButton
              operation="log_10"
              onClick={() => {
                setCache([display, "log_10"]);
                setDisplay(Math.log10(display));
              }}
            />
            <OperationButton
              operation="exp"
              onClick={() => {
                setCache([display, "exp"]);
                setDisplay(0);
              }}
            />
            <OperationButton
              operation="sqrt"
              onClick={() => {
                setCache([]);
                setDisplay(display ** 0.5);
              }}
            />
            <OperationButton
              operation="+"
              onClick={() => {
                setCache([display, "+"]);
                setDisplay(0);
              }}
            />
            <OperationButton
              operation="-"
              onClick={() => {
                setCache([display, "-"]);
                setDisplay(0);
              }}
            />
            <OperationButton
              operation="*"
              onClick={() => {
                setCache([display, "*"]);
                setDisplay(0);
              }}
            />
            <OperationButton
              operation="/"
              onClick={() => {
                setCache([display, "/"]);
                setDisplay(0);
              }}
            />
            <NumberButton
              value={6}
              onClick={() => setDisplay(display * 10 + 6)}
            />
            <NumberButton
              value={7}
              onClick={() => setDisplay(display * 10 + 7)}
            />
            <NumberButton
              value={8}
              onClick={() => setDisplay(display * 10 + 8)}
            />
            <NumberButton
              value={9}
              onClick={() => setDisplay(display * 10 + 9)}
            />
            <NumberButton
              value={2}
              onClick={() => setDisplay(display * 10 + 2)}
            />
            <NumberButton
              value={3}
              onClick={() => setDisplay(display * 10 + 3)}
            />
            <NumberButton
              value={4}
              onClick={() => setDisplay(display * 10 + 4)}
            />
            <NumberButton
              value={5}
              onClick={() => setDisplay(display * 10 + 5)}
            />
            <NumberButton
              value={0}
              onClick={() => setDisplay(display * 10 + 0)}
            />
            <NumberButton
              value={1}
              onClick={() => setDisplay(display * 10 + 1)}
            />
            <ClearButton
              onClick={() => {
                setDisplay(0);
                setCache([]);
              }}
            />
            <OperationButton operation="=" onClick={() => calculate()} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
