# ecommerceSite-MAEN


### How to run ??
###### Ubuntu OS
###### Do this inside the project After clone it
```npm install 
cd client/
bower install
cd ../
npm start  
```


###Features
- products are displayed in a grid.
- give the user an option to sort the products in ascending. Can sort by "size", "price". Sorting the results should re-initiate the grid by removing any existing items and starting again from page 1.
- each product has :
- a "size" field, which is the font-size (in pixels). We should display the faces in their correct size, to give customers a realistic impression of what they're buying.
- a "price" field, in cents. This should be formatted as dollars like $3.51.
- a "date" field, which is the date the product was added to the catalog. Dates should be displayed in relative time (eg. "3 days ago") unless they are older than 1 week, in which case the full date should be displayed.


###Products API
- You will have to implement an API with a GET /api/products endpoint that will return a json object containing the list of products to display along with pagination details.
The api request can take the following parameters:
page: Number to indicate which page to fetch.
sortBy: String to indicate based on which field to sort the results.
