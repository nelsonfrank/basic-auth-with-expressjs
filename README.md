# Auth Expressjs

Add JWT-based authentication to a Node/Express/Mongo/Next app.

## Authentication

- [x] Create Server
- [x] Add auth router
- [x] Create user with POST /auth/signup
  - [x] validate required fields
  - [x] Check if email is unique (email shouldn't exit)
  - [x] hash password with bcrypt
  - [x] insert into db
- [x] Create Landing Page
  - [x] Link to Sign Up Page
- [x] Create Sign Up Page
  - [x] Form with: username, email and password
  - [x] When form is submitted
    - [x] Validate username
      - [x] Display errors
    - [x] Validate email
      - [x] Display errors
    - [x] Validate password
      - [x] Display errors
    - [x] POST request to server
      - [x] Display errors
      - [x] If succesful sign up
        - [x] Redirect to login page
- [ ] Login user with POST /auth/login
  - [x] validate client payload (is email valid?)
  - [x] validate the user
  - [x] check if username in db
    - [x] compare password with hashed password in db
    - [x] Create and sign a JWT
      - [x] Respond with JWT
- [x] Create Login Page
  - [x] Form with: username and password
  - [x] When form is submitted
    - [x] Validate email
      - [x] Display errors
    - [x] Validate password
      - [x] Display errors
    - [x] POST request to server /auth/login
      - [x] Display errors
      - [x] If succesful login
        - [x] Store the token in secure httpOnly cookies
        - [x] Redirect to the "dashboard" -> currently i redirect to "/"
    - [x] Add refresh token functionality
- [x] If a logged in user visits the signup or login page, redirect them to the dashboard
- [x] If a non logged in user visits the dashboard, redirect to the login page
- [ ] After sign up, immediately login
- [ ] Show username on dashboard
- [ ] On homepage, show go to dashboard button instead of signup/login button
- [ ] If logged in:
  - [ ] Show logout button in header
  - [ ] Show user icon and username in header

### Authorization:

- [ ] Visitors can only see the homepage
  - [ ] checkTokenSetUser middleware
    - [ ] get token from Authorization header
      - [ ] if defined ---
        - [ ] Verify the token with the token secret
        - [ ] Set req.user to be the decoded verified payload
      - [ ] else - move along
  - [ ] isLoggedIn middleware
    - [ ] if req.user is set - move along
    - [ ] else - send an unauthorized error message
  - [ ] redirect to login form
- [ ] Logged in users can only see their page
- [ ] Create notes form on client
  - [ ] Title
  - [ ] Description
- [ ] POST /api/v1/notes
  - [ ] Must be logged in
  - [ ] Logged in Users Can Create Notes
    - [ ] Title
    - [ ] Description -- markdown
    - [ ] Set user_id on server with logged in users id
- [ ] GET /api/v1/notes
  - [ ] Must be logged in
  - [ ] Logged in Users Can request all their notes
    - [ ] Get all notes in DB with logged in users user_id
- [ ] List all notes on client
  - [ ] Render description with Markdown

## STRETCH

- [ ] Store date of note in DB
  - [ ] Sort notes by date created.
- [ ] View user profile
- [ ] Users can mark notes as public
  - [ ] Notes show up on profile

## Admin Page:

- [ ] Admin page that lists all users
  - [ ] admin table with user_id
  - [ ] de-activate users
- [ ] Admin can see any page on site
- [ ] Rate limiting
  - [ ] Prevent brute force logins
  - [ ] Lock out account after too many login attempts
- [ ] Password strength meter!
- [ ] reCaptcha for signup/login
- [ ] Password reset with email
- [ ] Forgot password
  - [ ] Reset with email
  - [ ] Reset by answering security questions
- [ ] Testing...

## To deploy everything to the same heroku instance

- [ ] Move the server package.json to the root of the folder
- [ ] Update start script for server to be a relative path
- [ ] post-deploy script to server that will build Vue.js
- [ ] Add a static serve to the server that serves '../client/dist'
- [ ] Environment variable for DB connection and token secret
- [ ] Update calls in client from localhost:5000 to be your-app.herokuapp.com
