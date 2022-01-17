# Microservice Assessment

# build

# run

### docker
run `docker compose up` in the root directory to start up system
```
docker compose up
docker compose up -d
```

### local
To locally run:

> node app
```
cd api/nodejs
npm start
```
> go
```
cd api/golang
go run main.go

```
> python
```
cd api/python
python main.py
```
> rust
```
cd api/rust
cargo run
```
> ui
```
cd api/nodejs
npm start
```


## test

## API

#### `GET /people` returns a collection of names from a datastore
- example response
```{
  data: [{}, {}, {}],
  count: 3
}
```

#### `GET /time` returns the current timestamp
  - standard is UTC time in the ISO format
  - ex response
```
{
  data: {
  	timestamp: ''
	},
}
```
#### `GET /browser` returns the user agent string
- ex response
```
{
  data: {
	  broswer: ''
	},
}
```

#### `GET /counter ` returns an int starting at 0 and increments by 1 each time it's called
- ex response
```
{
  data: {
	  count: 1
	},
}
```