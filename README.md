# Microservice Assessment

## build

## run

### docker

### local

## test

## API

#### `GET /people` returns a collection of names from a datastore
- example response
```{
  result: [{}, {}, {}],
  count: 3,
	// other metedata
}
```

#### `GET /time` returns the current timestamp
  - standard is ISO time
  - ex response
```
{
  result: {
  	timestamp: ''
	},
}
```
#### `GET /browser` returns the user agent string
- ex response
```
{
  result: {
	  broswer: ''
	},
}
```

#### `GET /counter ` returns an int starting at 0 and increments by 1 each time it's called
- ex response
```
{
  result: {
	  counter: 
	},
}
```