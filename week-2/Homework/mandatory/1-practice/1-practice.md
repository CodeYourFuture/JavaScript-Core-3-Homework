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

<!-- Write your answer here -->
For example: https://github.com/CodeYourFuture/JavaScript-Core-3-Homework/pull/19

The referenced link above is my Pull Request on Week 1 Homework I submitted on GitHub. 
{owner} is CodeYourFuture
{repo} is JavaScript-Core-3-Homework 
{pull_number} is 19 which is my PR Number on the repo

Similarly, GET https://api.github.com/repos/{owner}/{repo}/pulls/{pull_number}/comments is a obtained by a GET request to the API on Github. 
{owner} is the path that holds the individual, organisation or company that owns the API.

{repo} is the path that holds the particular repo where the API is stored on GitHub account.

{pull_number} is the particular #number of the pull request with the repo that the GET action refers to.

2. Describe in a sentence what this API endpoint returns when all of the fields are completed?

<!-- Write your answer here -->
The API endpoint has information about the GET request including the code status as below;
status: 200 OK. 

Below is an example of what it will look like:

curl -i https://api.github.com/users/octocat/orgs
HTTP/1.1 200 OK
Server: nginx
Date: Fri, 12 Oct 2012 23:33:14 GMT
Content-Type: application/json; charset=utf-8
Connection: keep-alive
Status: 200 OK
ETag: "a00049ba79152d03380c34652f2cb612"
X-GitHub-Media-Type: github.v3
X-RateLimit-Limit: 5000
X-RateLimit-Remaining: 4987
X-RateLimit-Reset: 1350085394
Content-Length: 5
Cache-Control: max-age=0, private, must-revalidate
X-Content-Type-Options: nosniff


Reference: https://developer.github.com/v3/
