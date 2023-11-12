#### [HOME](https://ingeniouspartners.github.io/)

## Purpose

CableTrack PRO is the premier tool to enable electricians to quickly and easily create cable schedules for their projects. It allows the tracking of the cable meta-data, pull-ins, terminations, and tests.

## Features

#### Company Branding

CableTrack PRO allows you to brand the application with your company logo. This allows the customer to present a professional image to their clients.

#### Projects

CableTrack PRO allows you to create projects and add cables to them. You can then report progress by project.

#### Cables

CableTrack PRO allows you to create cables and add them to projects. You can then track the progress of each cable.

## Screens

### Home

The welcome screen that allows the visitor to see what the application is about and give them the opportunity to sign-up or sign-in.

### Sign Up

Ask the user for basic information, such as their email address (usernane) and desired password, which must be entered twice.

### Sign In

Ask the user for their email address (username) and password.

### Sign Out

Signs the user out of the application and redirects them to the Home page.

### Edit Profile

Allows the user to update their profile information, such as First and Last Name, Photo URL.

### Add/Edit Company

Add or Edit the Company. This would include fields for Company Name, Logo URL, Address, City, State, ZIP, Country, and associated Users. If the Company ID is not provided, a new instance is created with a template model, otherwise the model is filled
from the Company collection using <code>findOne()</code>.

### Add/Edit Project

Add or Edit the Project. This would include fields for Project Code, Name, associated Users. If the Project ID is not provided, a new instance is created with a template model, otherwise the model is filled filled out from the Project collection
using <code>findOne()</code>.

### Add/Edit Cable

Add or Edit the Cable. This would include fields for Cable Code, Name, Type, Phase Code, etc. If the Cable ID is not provided, a new instance is created with a template model, otherwise the model is fille out from the Cable collection using
<code>findOne()</code>.
