### The Reducer to test

```ts
import {
  CountDispatchTypes,
  INCREMENT_COUNT,
} from "../actions/countActionTypes";

interface InitialStateI {
  count: number;
}

const initialState: InitialStateI = {
  count: 0,
};

export default function count(
  state = initialState,
  action: CountDispatchTypes
) {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: (count += 1),
      };
    default:
      return state;
  }
}
```

### The test

```ts
import count from "../countReducer";
import { INCREMENT_COUNT } from "../../actions/countActionTypes";

it("should increment the count", () => {
  expect(flightDeck(undefined, { type: INCREMENT_COUNT })).toEqual({
    count: 1,
  });

  expect(flightDeck({ count: 5 }, { type: INCREMENT_COUNT })).toEqual({
    count: 6,
  });
});
```
