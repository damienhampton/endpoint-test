# TODO

- create article endpoint that mirrors existing behaviour

| URL            | Response                                                                                                      |
|----------------|---------------------------------------------------------------------------------------------------------------|
| /article/1234  | ```{"title": "Some title", "id": 1234, "images": [{ "src": "image1.jpg" }]}```                                |
| /article/5678 | ```{"title": "Some other title", "id": 5678, "images": [{ "src": "image2.jpg" }, { "src": "image3.jpg" }]}``` |

## Other requirements

- Must use TypeScript
- Must use data service
