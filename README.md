
# Project Overview
https://movie-mania-list.netlify.app/list

## Project Name

Movie Mania

## Project Description

Retrieve movies by search from external API, to be selected on a private list and stored in Airtable, making a list, where the selected movies can be marked as watched and reviewed with like or dislike and comments. Extra(When movie gets in the airtable database can have links to the streaming services that the movie can be find)

## Wireframes

Upload images of your wireframes to an image hosting site or add them to an assets folder in your repo and link them here with a description of each specific wireframe.

## Component Hierarchy
Show your component hierarchy here! Use [this](https://cms-assets.tutsplus.com/uploads/users/1795/posts/30352/image/GettingStartedWithReduxTutorial-React-Component-Structure.png) as an example.

## API and Data Sample

Show us a snippet of JSON returned by your Airtable (you can find it under the API documentation) so we know you can access it and get the info you need. This __must__ be properly formatted. An example is below:

```json
const selectMovie =async(ev)=> {
        ev.preventDefault();
        console.log("You Selected that movie") 
        console.log(movie) 


        console.log({title})
        const getMovieData ={
            records: [
                { 
                    fields: {
                        title,
                        image,
                        year,
                        description,
                    }
                }
            ]
        }

    await axios.post(API_URL, getMovieData);
        setToggleFetch(!toggleFetch);
        setRedirectSelect(true);}
```

### MVP/PostMVP

 MVP --- Retrieve movies by search from external API, to be selected on a private list and stored in Airtable, making a list, where the selected movies can be listed as to be watch or when watched a list of watched movies
 PostMVP --- When movie is selected, have a link to streaming services. Create a like, dislike, share and comments for each movie. 

#### MVP 
*These are examples only. Replace with your own MVP features.*

- Find and use external api
- Add AirTable API  
- Render data on page 
- Select Want to watch or Already watched/Delete

#### PostMVP  
*These are examples only. Replace with your own Post-MVP features.*

- Run Like Dislike Comment Features to store in airtable
- Use local storage to save user favorites
- Find links for streaming services (probably third API)

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations. Here's an example.

|  Day | Deliverable | Status
|---|---| ---|
|10/22| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|10/22| Project Approval | Complete
|10/25| Core Application Structure (HTML, CSS, etc.) | Complete
|10/24| Pseudocode / actual code | Complete
|10/26| Initial Clickable Model  | Complete
|10/27| MVP | Complete
|10/29| Presentations | Incomplete

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all parts of your app.  Your estimates can then be used to evalute possibilities based on time needed and the actual time you have before the app must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add an additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## SWOT Analysis

### Strengths:
Renders IMDB API and Takes information to Airtable, storing for future use.

### Weaknesses:
Takes long to load sometimes.

### Opportunities:
Can get a like for a movie and get sugestions to movies that you  may like.

### Threats:
API just has 100 requests per day.