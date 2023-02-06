Welcome to the Albany Guide center aka Arthur's Phase 2 Project!

-The goal of this website was to create a guide that would use the React principles I learned in this phase
    without overloading on the text, or json code involved. Since the instructions were to keep those simple.

-So, what you'll see is a website that is set up presenting to the user that it is mainly there to peak their interest
    and that we want them to take that interest and go check out each location for themselves! The LocationList component
    holds all of that information, fetched from my set up API of course. Also in that location, I've set up buttons, where
    the user can vote 'Based' (meaning good), 'Mid' (meaning just ok), or 'Cringe' (meaning bad). Then, just the total number 
    of those overall votes for each are rendered at the top of the page. We just want to give an overall impression of the city,
    a user can add any text or comment they want when adding a new location!

-Then, any tourist or visitor of the city can add a location to the list that they think fellow visitors of the city should 
    check out. They can add a title, image, and any text or comments on that location they want to. Code wise, the LocationForm
    is a controlled component, where the inputs derive their value from the component's state. When the form is submitted, that data
    is then added to, and rendered on the LocationList component. 

-I have the necessary 3 client side routes for the 3 components the user's will mostly be interacting with, which I honestly think
    was a necessary part of a website like this! I styled the links and much of the page as well, minus the backgroud. Also as a side
    note, I seperated the About and Home components because I didn't want to overload one component with too much text, and I didn't 
    want a route to About!

-Thanks for visiting!