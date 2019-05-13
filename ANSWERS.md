
- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
- [ ] Describe a life-cycle event in React?
- [ ] Explain the details of a Higher Order Component?
- [ ] What are three different ways to style components in React? Explain some of the benefits of each.


1. PropType is a library that allows you to check the incoming props for React components to be sure they are the expected type. It's helpful because it outputs an error to the console if they aren't what you are expecting, which can really speed up the debugging process.

2. A life-cycle event is basically the three phases of a component - mounting/updating/unmounting. Each of these phases has separate processes that act in order to build out the react components.

3. A HOC is a lot like a callback function, where you reference another component through its use. It's helpful for something like authentication because you can put boolean statements on a HOC which will be able to check state, which allows you to control something like a landing page based on whether or not a user is logged in, among other uses.

4. CSS/SASS - straightforward, flexible, and precise. This is what we know how to work with best at this stage in Lambda, and it does the job.
    Reactstrap - a quick to deploy library of reusable styled components
   Styled-Components - reusable, dynamic, and quick. This allows you to re-use your css across different components, using boolean statements related to 'type' to specify changes between similar html elements
