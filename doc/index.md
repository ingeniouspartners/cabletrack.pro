# CableTrack PRO

## Pages
### Landing Page

To a user that is not signed in, this page delivers a CableTrack PRO branded look & feel, with a call to action to sign up or sign in. The only navigation item available is the "Login" drop down with "Sign In" and "Sign Up" options.

Once the user signs in, the page will display their company logo and a list of all the active projects to which the user has access. The login menu has been replaced with a user menu, which includes the user's name, with a "Profile"
[ViewUser](#viewuser) and "Sign Out" [SignOut](#signout) options.

The user can click on the title of a project or the ??? icon link to view that project details. Depending on their permissions, there maybe a pencil icon link on the row to allow editing of the project details. Also a new project can be created by
clicking the pencil plus icon link at the top of the list if the user has permissions to create projects.

## EditCable

This page does double-duty as the Add and Edit page, since they are so similar. The page displays a form with the cable details. If the Cable ID is passed to the form, it reads the
the Cable details from the database and populates the form. If the Cable ID is not passed, the form is blank and ready for a new record to be added. On submit, the database is updated if in edit mode, otherwise the new record is inserted.

## EditCablePullIn

This page does double-duty as the Add and Edit page, since they are so similar. The page displays a form with the cable pull in details. If the Cable ID and Cable Pull In ID are passed to the form, it reads the the Cable Pull In details from the
database and populates the form. If the Cable ID and Cable Pull In ID are not passed, the form is blank and ready for a new record to be added. On submit, the database is updated if in edit mode, otherwise the new record is inserted.

## EditCompany

This page does double-duty as the Add and Edit page, since they are so similar. The page displays a form with the company details. If the Company ID is passed to the form, it
reads the Company details from the database and populates the form. If the Company ID is not passed, the form is blank and ready for a new record to be added. On submit, the database is updated if in edit mode, otherwise the new record is inserted.

## EditProject

This page does double-duty as the Add and Edit page, since they are so similar. The page displays a form with the project details. If the Project ID is passed to the form, it reads the Project details from the database and populates the form. If the
Project ID is not passed, the form is blank and ready for a new record to be added. On submit, the database is updated if in edit mode, otherwise the new record is inserted.

## EditUser

This page does double-duty as the Add and Edit page, since they are so similar. The page displays a form with the user details. If the User ID is passed to the form, it reads the User details from the database and populates the form. If the User ID
is not passed, the form is blank and ready for a new record to be added. On submit, the database is updated if in edit mode, otherwise the new record is inserted.

## ListCable

This page displays a list of all the cables for the project. Depending on the user's permissions, there may be a pencil icon link to allow editing of the cable details. Also a new cable can be created by clicking the pencil plus icon link at the top
of the list.

## ListCablePullIn

This page displays a list of all the cable pull ins for the project. Depending on the user's permissions, there may be a pencil icon link to allow editing of the cable pull in details. Also a new cable pull in can be created by clicking the pencil
plus icon link at the top of the list.

## ListProject

This page displays a list of all the projects for the company. Depending on the user's permissions, there may be a pencil icon link to allow editing of the project details. Also a new project can be created by clicking the pencil plus icon link at
the top of list.

## ListUser

This page displays a list of all the users for the company. Depending on the user's permissions, there may be a pencil icon link to allow editing of the user details. Also a new user can be created by clicking the pencil plus icon link at the top of
list.

## NotAuthorized

This page displays a message that the user is not authorized to view the requested page.

## NotFound

This page displays a message that the requested page was not found.

## SignIn

This page displays a form with the user's email address and password. On submit, the user is authenticated and redirected to the landing page.

## SignOut

This page displays a message that the user has been signed out.

## SignUp

This page displays a form with the user's name, email address, password, and password confirmation. On submit, the user is authenticated and redirected to the landing page.

## ViewCable

## ViewCompany Page

This pages displays the company information, including the company logo, name, address, phone number, and email address. Depending on the user's permissions, there may be a pencil icon link to allow editing of the company details. If the user is a
GlobalAdmin, there will be a pencil plus icon link to allow the user to add a new company.

## ViewProject

This page displays the project information, including the project name, address, phone number, and email address. Depending on the user's permissions, there may be a pencil icon link to allow editing of the project details. If the user is a
GlobalAdmin or CompanyOwner, there will be a pencil plus icon link to allow the user to add a new project.

## ViewUser

This page displays the user information, including the user's name, email address, and phone number. Depending on the user's permissions, there may be a pencil icon link to allow editing of the user details. If the user is a GlobalAdmin or the User,
there will be a pencil plus icon link to allow the user to add a new user.
