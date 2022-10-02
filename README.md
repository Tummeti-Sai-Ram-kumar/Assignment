Frontend Engineer Assignment

Github : https://github.com/Tummeti-Sai-Ram-kumar/Assignment <br/>
App: https://github.io/Tummeti-Sai-Ram-kumar/Assignment



### 1. Explain what the simple List component does.
The simple List component is responsible for generating and returning the unordered  singly list ,  with the help of WrappedListComponent and SingleListItem. It generates the unordered list from the items array that contains objects like one key-value pair 

Talking about the working of the List Component, it calls WrappedListComponent  which maps through the items array, and for each index, it calls the SingleListItem component which in turn returns the list tag, and then WrappedListComponent  makes the unordered list.



### 2. What problems/warnings are there with the code?


There are several typos and syntax errors in the code. Below listed are the errors and warnings were found.
1. The first error encountered was prop_types_WEBPACK_INPORTED_MODULE__default(...).shapeOf is not a function. The Fix for this is to rename the Proptypes.shapeOf to Proptypes.shape <br/>
2. The next error was ` TypeError: Cannot read null `. A simple fix for this is to check for the variable before mapping. `itemsState?.map((item, index) => ())`<br/>
3. A state-related error `TypeError: setSelectedIndex is not a function` This error has occurred because this variable name was given to the useState variable, but it was used to update the state. So to fix this, just replace that state variable and function names. **`const [selectedIndex, setSelectedIndex] = useState();`**<br/>
4. WrappedListComponent.defaultProps items were set to {null} which is not recommended. It is better to use undefined instead of null.<br/>
5. Function reference should be passed on {onClick} event, but a function call was made<br/>
6. isSelected is a boolean type, but the value passed is an integer.<br/>
7. Each child in a list should have a unique index.
***

### 3. Please fix, optimize, and/or modify the component as much as you think is necessary.

1. While changing the items array.
```javascript
	// Items Array
	const items= [
	  {
	    text: string
	    selected: bool
	  }
	]
```

2. Changed the working and usage of state. Now it stores the whole items array as a state.
```javascript
	// State 
	const [itemsState, setItemsState] = useState([]);
	useEffect(() => {
	  setItemsState(items);
	}, [items]);
```

3. Next, I modified the handleClick function to change the selected key value based on the previous value.
```javascript
	// Handle Click Function
	const handleClick = (targetIndex) => {
	  let updateItems = itemsState.map((item, index) => {
	    return targetIndex == index? { ...item, selected: !item.selected }: { ...item };
	  });
	  setItemsState(updateItems);
	};
```

4. Component files for the `WrappedSingleListItem` and `WrappedListComponent`.
   
<br/>
Thus we can manage the selected state for every element in the array.
