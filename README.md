![Netsells Logo](./images/netsells-logo-with-slogan.jpg)

# Frontend Engineer Technical Test

The brief is simple. Create a multi-step form used to submit your CV and details to a provided endpoint via Ajax. The technology you employ is completely up to you, as long as the form submits successfully. 

The aim of this test is to assess the decisions you make along the way, including but not limited to choice of tech, engineering, and general care to user experience.

Don't worry about over-engineering, we want to see the technology you can make use of. Try and wow us.

As an Engineer you should have a firm grasp of both the technical and visual aspects of the submission.

Our tech stack is Nuxt.js + SCSS, bonus points if you follow this.

## Instructions

Using the designs provided, create a multi-step form to allow users (yourself) to submit your CV and details to via Ajax. All the backend work is done for you, you simply need to hit the endpoint with the data required. By "multi-step" we mean that the form should be a "flow". You complete step 1, then step 2 etc and finally submit all data collected.

### Must haves

The general requirements for this test are few, but we will be looking for the following 

- A successful end to end flow
- A visual that matches the design provided - using a single theme design (light/dark)
- Basic file upload functionality
- Responsive - no design provided, but should be fairly easy to adapt

### Nice to have but not required

- Theme switcher
- Drag and drop file upload functionality

### Assets

The visual assets can be found here: https://drive.google.com/drive/folders/1GRIhwVqpe6aL5NrVKIBBZPNhLk94jMY4?usp=sharing

They are provided in sketch, PSD and PNG formats, use whichever format you can open.

### Form fields

Details of the form fields required and any validation rules are provided below, and should be submitted using the associated field names. Any other validation rules will be returned in the 422 response so be sure to handle them appropriately.

| Label         | Field name    | Data type | Required? |
| ------------- |:-------------:|:---------:|:---------:|
| First name | first_name | string | :white_check_mark: |
| Last name | last_name | string |  |
| Email | email | string | :white_check_mark: |
| Phone number | phone_number | string |  |
| Do you live in the uk? | live_in_uk | boolean | :white_check_mark: |
| Git profile | git_profile | string | :white_check_mark: |
| Upload CV | cv | file | :white_check_mark: |
| Upload Cover Letter | cover_letter | file |  |
| About you | about_you | string | :white_check_mark: |

### Endpoint

You should submit all of your data to the following endpoint as a `POST` request:

```
https://recruitment-submissions.netsells.co.uk/api/vacancies/javascript-developer/submissions
```

This endpoint will either return a success (`200`) or a validation error (`422`) if the data provided is incorrect.

## Requirements

- Make it match the visuals provided
- Use JavaScript

## Bonus points

- Use of newer JavaScript standards (ES6+)
- Use of a JavaScript bundler
- Use of a JavaScript framework
- Tests

## Submission

Please add `samturrell` as a user to your Github/Bitbucket repository so that we can see your code.

## FAQ

### What is this?

This is the technical test for the "Frontend Engineer" role at [Netsells](http://netsells.co.uk), a digital agency based in York, UK. If you came across this technical test in the wild, why not see if you're the [person we're looking for?](./JOB_SPEC.md)

### Do I need to submit my details?

We will purely use the submitted details to ensure that the form successfully submits, so we don't care about the legitimacy of data, however it would be helpful to see which requests came from you.

### What happens to the details I submit?

All data is deleted after 7 days.

### Are there preferences on x, y, z?

Use whatever you like, and as said, don't worry if you feel like you're over-engineering it. Our code standards are available [here](https://netsells.github.io/code-standards/) and our linters are available [here](https://github.com/netsells/eslint-config-netsells/) and [here](https://github.com/netsells/stylelint-config-netsells/). Bonus points if you follow these.

We use Vue.js as a framework, but would rather see your best work, so use whatever you're comfortable with.

### I'm getting all kinds of 'Access-Control-Allow-Origin' errors, what do I do?!

Try the `'X-Requested-With': 'XMLHttpRequest'` header.

