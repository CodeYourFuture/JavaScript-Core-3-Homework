## Practice the concepts

This week's concepts can be challenging, therefore let's get an easy introduction using some interactive exercises! Check the following resources out and start practicing.

You can ignore anything to do with `XMLHttpRequest`

- [FreeCodeCamp](https://www.freecodecamp.org/news/a-practical-es6-guide-on-how-to-perform-http-requests-using-the-fetch-api-594c3d91a547/)

## Code along

Now that you've learned about APIs and how to connect with them, let's apply it in the context of a complete application.

In the following application you'll be making an API call to an external, public API.

Enjoy!

- [Vanilla JS Numbers Facts App - AJAX & Fetch](https://www.youtube.com/watch?v=tUE2Nic21BA)

## Question

The following endpoint is publicly available from Github

    GET https://api.github.com/repos/{owner}/{repo}/pulls/{pull_number}/comments

1. What would you put in the following fields? `{owner}`, `{repo}`, `{pull_number}`?

<!-- Write your answer here -->pull-number :  the pull request number that contains the Lists  of all review comments for that pull request.(wich is for the {repo} repository and owned by {owner}).
                                       repo:  The name of the repository
                                       owner: the name of the repo owner(username/ organization name)

2. Describe in a sentence what this API endpoint returns when all of the fields are completed?

List review comments on a pull request
Lists all review comments for a pull request. By default, review comments are in ascending order by ID.
<!-- Write your answer here -->
