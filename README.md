# Try It yourself - Providers, Injection and Closures
## Providing the store in the router
* Remove the "providedIn:root" in the `QuizStore`
* Add some console logs to the quiz store to see when functions are invoked
* Remove it also from the Quiz component providers (will cause an error)
* Add it instead in the routers file
* Notice the difference when you navigate away from the quiz page

## The App store
* Define the App store slice and initial state
* Define the `OnInit` hook to initialize the available languages
  * Inject the dictionaries into the `onInit` function
  * extract the supported languages from it
  * patch the state properly
* Implement the ability to change language
  * Inject the dictionaries into the `withMethods` feature and also extract the available languages
  * Create an updater that received a list of available languages and sets the selected language to the next one
  * Implement the `changeLanguage` method by using the updaters
* Modify the Quiz Component
  * Inject the app store into it
  * Bind the `of` input of the `app-flag` component to the currently selected language
  * Respond to `click` on the flag by calling the `changeLanguage` store method

